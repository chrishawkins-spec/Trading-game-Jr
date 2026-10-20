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

/**
 * Pulls the first "<number><unit>" (g/kg/ml/l) out of a free-text label —
 * "500g" -> {amount:500, unit:'g'}; "1kg" -> {amount:1000, unit:'g'}
 * (normalised to g/ml so two labels in the same dimension compare
 * directly); "1 x 400g tin" -> {amount:400, unit:'g'} (the bare "1" has
 * no unit attached, so it's skipped); "1 tbsp (~15ml)" -> {amount:15,
 * unit:'ml'}. Returns null if nothing matches (e.g. "1 medium", "2
 * cloves", "each") — those items have no clean numeric quantity to scale
 * pack-size coverage from, which is fine as long as they don't have more
 * than one pack size to choose between (see parsePackCovers below).
 */
function parseAmount(label) {
  const match = String(label ?? '').match(/(\d+(?:\.\d+)?)\s?(kg|g|ml|l)\b/i);
  if (!match) return null;
  let amount = Number(match[1]);
  let unit = match[2].toLowerCase();
  if (unit === 'kg') { amount *= 1000; unit = 'g'; }
  if (unit === 'l') { amount *= 1000; unit = 'ml'; }
  return { amount, unit };
}

/**
 * How many "2-person base quantities" of an item one pack of a given
 * pack size provides — see the pack-size model note at the top of
 * calc.js. Resolution order: an explicit "Pack Covers" column value
 * always wins; failing that, if both the pack size and the item's base
 * quantity parse as the same unit (g or ml), it's computed directly;
 * otherwise it defaults to 1 (exactly one base quantity per pack — the
 * same behaviour Trolley had before this feature existed, so an item
 * with only one pack size is never affected either way).
 */
function parsePackCovers(packSizeLabel, baseQuantityLabel, explicitCovers) {
  if (explicitCovers != null && explicitCovers !== '') {
    const n = Number(explicitCovers);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  const pack = parseAmount(packSizeLabel);
  const base = parseAmount(baseQuantityLabel);
  if (pack && base && pack.unit === base.unit && base.amount > 0) {
    return pack.amount / base.amount;
  }
  return 1;
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
    unitSingular: header.findIndex(h => typeof h === 'string' && h.startsWith('Unit (singular)')),
    unitPlural: header.findIndex(h => typeof h === 'string' && h.startsWith('Unit (plural)')),
  };
  return rows.slice(1).filter(r => r[idx.name]).map(r => {
    const required = String(r[idx.required] ?? '').trim().toUpperCase().startsWith('Y');
    const hasType = String(r[idx.hasType] ?? '').trim().toUpperCase().startsWith('Y');
    const types = hasType && r[idx.types]
      ? String(r[idx.types]).split(',').map(t => t.trim()).filter(Boolean)
      : [];
    if (!r[idx.quantity]) warnings.push(`Item "${r[idx.name]}" has no quantity label set.`);
    // "Pack", "packs" is the right word for most items (a pack of mince,
    // a tin of tomatoes) but wrong for things sold and bought as whole
    // units — an onion, a bulb of garlic. These two optional columns let
    // the sheet say what the student is actually clicking to add one of;
    // left blank, it falls back to "pack"/"packs" as before.
    const unitSingular = idx.unitSingular >= 0 ? (r[idx.unitSingular] || null) : null;
    const unitPlural = idx.unitPlural >= 0 ? (r[idx.unitPlural] || null) : null;
    return {
      id: slugify(r[idx.name]),
      name: r[idx.name],
      required,
      quantityLabel: r[idx.quantity] ?? '',
      hasType,
      types,
      unitSingular,
      unitPlural,
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
    promoQty: header.indexOf('Promo Quantity'),
    promoPrice: header.findIndex(h => typeof h === 'string' && h.startsWith('Promo Price')),
    packCovers: header.findIndex(h => typeof h === 'string' && h.startsWith('Pack Covers')),
    unitSingular: header.findIndex(h => typeof h === 'string' && h.startsWith('Unit (singular)')),
    unitPlural: header.findIndex(h => typeof h === 'string' && h.startsWith('Unit (plural)')),
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

    const promoQty = idx.promoQty >= 0 ? Number(r[idx.promoQty]) : NaN;
    const promoPrice = idx.promoPrice >= 0 ? r[idx.promoPrice] : null;
    const promo = (Number.isFinite(promoQty) && promoQty > 1 && promoPrice != null)
      ? { quantity: promoQty, price: Number(promoPrice) }
      : null;

    const option = {
      // Students never see the real, named brand — see
      // trolleyBrandAnonymisation.js for why and how the mapping was built.
      brand: anonymiseBrand(r[idx.brand], { outletName: outlet.name, warnings }),
      tier: r[idx.tier] ?? null,
      packSize: r[idx.packSize] ?? null,
      price: Number(r[idx.price]),
      packCovers: parsePackCovers(r[idx.packSize], item.quantityLabel, idx.packCovers >= 0 ? r[idx.packCovers] : null),
      promo,
      // A per-row override of the item's Unit (singular)/(plural) — for
      // items where the right noun depends on which product TYPE was
      // chosen (e.g. "Tomatoes" sold as a "6-pack" of Salad tomatoes vs.
      // a "truss" of Vine tomatoes need different words). Blank falls
      // back to the item-level unit, which itself falls back to "pack".
      unitSingular: idx.unitSingular >= 0 ? (r[idx.unitSingular] || null) : null,
      unitPlural: idx.unitPlural >= 0 ? (r[idx.unitPlural] || null) : null,
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
