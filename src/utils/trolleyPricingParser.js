/**
 * Parses the Shopping Trolley pricing spreadsheet into a trolleyConfigs
 * document shape. Ported from the Shopping Trolley repo's own
 * scripts/importPricingConfig.js (same logic, kept in sync by hand) so
 * this app can offer the same import as a browser upload instead of a
 * command-line script with a service-account key.
 *
 * Expected workbook shape (see the Read Me / column headers in the
 * template itself for the authoritative version):
 *   Outlets                : Outlet | Tier | Travel Mode | Travel Cost (£, return)
 *   Items & Product Types  : Item | Required? | Quantity (for 2 people) |
 *                            Has Product Type? | Product Type Options (comma-separated)
 *   Brands & Pricing       : Outlet | Item | Product Type | Brand Name |
 *                            Tier (internal) | Pack Size | In-store Price (£)
 *   Delivery Options       : rows containing Method | Cost structure | Value |
 *                            Shown to student? | Notes (header row detected by
 *                            finding the cell literally equal to "Method")
 */
import * as xlsx from 'xlsx';
import { anonymiseBrand } from './trolleyBrandAnonymisation.js';

function slugify(str) {
  return String(str).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function sheetRows(wb, sheetName) {
  const ws = wb.Sheets[sheetName];
  if (!ws) throw new Error(`Missing sheet: "${sheetName}"`);
  return xlsx.utils.sheet_to_json(ws, { header: 1, defval: null });
}

function parseOutlets(wb, warnings) {
  const rows = sheetRows(wb, 'Outlets');
  const header = rows[0];
  const idx = {
    name: header.indexOf('Outlet'),
    travelMode: header.indexOf('Travel Mode'),
    travelCost: header.findIndex(h => typeof h === 'string' && h.startsWith('Travel Cost')),
  };
  return rows.slice(1).filter(r => r[idx.name]).map(r => {
    const travelCost = r[idx.travelCost];
    if (travelCost == null) warnings.push(`Outlet "${r[idx.name]}" has no Travel Cost set — defaulting to 0.`);
    return {
      id: slugify(r[idx.name]),
      name: r[idx.name],
      travelMode: r[idx.travelMode] ?? null,
      travelCost: Number(travelCost ?? 0),
    };
  });
}

function parseItems(wb, warnings) {
  const rows = sheetRows(wb, 'Items & Product Types');
  const header = rows[0];
  const idx = {
    name: header.indexOf('Item'),
    required: header.indexOf('Required?'),
    quantity: header.findIndex(h => typeof h === 'string' && h.startsWith('Quantity')),
    hasType: header.indexOf('Has Product Type?'),
    types: header.findIndex(h => typeof h === 'string' && h.startsWith('Product Type Options')),
  };
  return rows.slice(1).filter(r => r[idx.name]).map(r => {
    const required = String(r[idx.required] ?? '').trim().toUpperCase().startsWith('Y');
    const hasType = String(r[idx.hasType] ?? '').trim().toUpperCase().startsWith('Y');
    const types = hasType && r[idx.types]
      ? String(r[idx.types]).split(',').map(t => t.trim()).filter(Boolean)
      : [];
    if (!r[idx.quantity]) warnings.push(`Item "${r[idx.name]}" has no quantity label set.`);
    return {
      id: slugify(r[idx.name]),
      name: r[idx.name],
      required,
      quantityLabel: r[idx.quantity] ?? '',
      hasType,
      types,
      brands: hasType ? undefined : {},
      byType: hasType ? {} : undefined,
    };
  });
}

function parseBrandsAndPricing(wb, items, outlets, warnings) {
  const rows = sheetRows(wb, 'Brands & Pricing');
  const header = rows[0];
  const idx = {
    outlet: header.indexOf('Outlet'),
    item: header.indexOf('Item'),
    productType: header.indexOf('Product Type'),
    brand: header.indexOf('Brand Name'),
    tier: header.findIndex(h => typeof h === 'string' && h.startsWith('Tier')),
    packSize: header.indexOf('Pack Size'),
    price: header.findIndex(h => typeof h === 'string' && h.startsWith('In-store Price')),
  };

  const itemsById = Object.fromEntries(items.map(it => [it.name.toLowerCase(), it]));
  const outletsByName = Object.fromEntries(outlets.map(o => [o.name.toLowerCase(), o]));

  let rowCount = 0;
  for (const r of rows.slice(1)) {
    if (!r[idx.outlet] || !r[idx.item] || !r[idx.brand]) continue;
    rowCount++;

    const item = itemsById[String(r[idx.item]).toLowerCase()];
    const outlet = outletsByName[String(r[idx.outlet]).toLowerCase()];
    if (!item) { warnings.push(`Brands & Pricing row ${rowCount + 1}: unknown item "${r[idx.item]}" — skipped.`); continue; }
    if (!outlet) { warnings.push(`Brands & Pricing row ${rowCount + 1}: unknown outlet "${r[idx.outlet]}" — skipped.`); continue; }
    if (r[idx.price] == null) { warnings.push(`Brands & Pricing row ${rowCount + 1}: "${r[idx.brand]}" at ${r[idx.outlet]} has no price — skipped.`); continue; }

    const option = {
      // Students never see the real, named brand — see
      // trolleyBrandAnonymisation.js for why and how the mapping was built.
      brand: anonymiseBrand(r[idx.brand], { outletName: outlet.name, warnings }),
      tier: r[idx.tier] ?? null,
      packSize: r[idx.packSize] ?? null,
      price: Number(r[idx.price]),
    };

    if (item.hasType) {
      const type = r[idx.productType];
      if (!type) { warnings.push(`Brands & Pricing row ${rowCount + 1}: "${item.name}" needs a Product Type — skipped.`); continue; }
      item.byType[type] = item.byType[type] ?? {};
      item.byType[type][outlet.id] = item.byType[type][outlet.id] ?? [];
      item.byType[type][outlet.id].push(option);
    } else {
      item.brands[outlet.id] = item.brands[outlet.id] ?? [];
      item.brands[outlet.id].push(option);
    }
  }
}

function parseDeliveryOptions(wb, warnings) {
  const rows = sheetRows(wb, 'Delivery Options');
  const headerRowIdx = rows.findIndex(r => r.includes('Method'));
  if (headerRowIdx === -1) throw new Error('Could not find the "Method" header row in Delivery Options.');
  const header = rows[headerRowIdx];
  const idx = { method: header.indexOf('Method'), value: header.indexOf('Value') };

  const byMethod = {};
  for (const r of rows.slice(headerRowIdx + 1)) {
    if (!r[idx.method]) continue;
    byMethod[r[idx.method]] = r[idx.value];
  }

  const standardFee = byMethod['Standard delivery'];
  const whooshFee = byMethod['Whoosh — delivery fee'];
  const whooshMarkup = byMethod['Whoosh — item markup'];
  if (standardFee == null) warnings.push('Standard delivery fee not set in Delivery Options.');
  if (whooshFee == null) warnings.push('Whoosh delivery fee not set in Delivery Options.');
  if (whooshMarkup == null) warnings.push('Whoosh item markup not set in Delivery Options.');

  return {
    standardFee: Number(standardFee ?? 0),
    whooshFee: Number(whooshFee ?? 0),
    whooshMarkup: Number(whooshMarkup ?? 0),
  };
}

/**
 * @param {ArrayBuffer} arrayBuffer — the uploaded file's contents
 * @param {string} name — display name for the resulting config
 * @returns {{ config: object, warnings: string[] }}
 */
export function parseTrolleyPricingWorkbook(arrayBuffer, name) {
  const wb = xlsx.read(arrayBuffer, { type: 'array' });
  const warnings = [];

  const outlets = parseOutlets(wb, warnings);
  const items = parseItems(wb, warnings);
  parseBrandsAndPricing(wb, items, outlets, warnings);
  const deliveryOptions = parseDeliveryOptions(wb, warnings);

  for (const item of items) {
    const optionGroups = item.hasType ? Object.values(item.byType) : [item.brands];
    const hasAnyOptions = optionGroups.some(g => Object.values(g).some(arr => arr.length > 0));
    if (!hasAnyOptions) warnings.push(`Item "${item.name}" has no priced options at any outlet yet.`);
  }

  const optionCount = items.reduce((sum, it) => {
    const groups = it.hasType ? Object.values(it.byType) : [it.brands];
    return sum + groups.reduce((s, g) => s + Object.values(g).reduce((s2, arr) => s2 + arr.length, 0), 0);
  }, 0);

  const config = {
    name,
    recipeName: 'Spaghetti Bolognese',
    quantityOptions: [2, 4, 8],
    outlets,
    items,
  };
  // Firestore (web SDK) rejects `undefined` values the same way the admin
  // SDK does — items without a product type legitimately have no `brands`
  // key (or vice versa), so strip those keys rather than writing `undefined`.
  for (const item of config.items) {
    if (item.brands === undefined) delete item.brands;
    if (item.byType === undefined) delete item.byType;
  }
  config.deliveryOptions = deliveryOptions;

  return {
    config,
    warnings,
    counts: { outlets: outlets.length, items: items.length, options: optionCount },
  };
}
