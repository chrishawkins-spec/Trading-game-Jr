/**
 * Maps the real, named brands in the pricing spreadsheet (De Cecco, Aldi
 * own-label lines, Sainsbury's own-label lines, etc.) to invented, fictional
 * brand names before anything reaches a student.
 *
 * Why: the spec's "For Discussion" list raised real brand names vs.
 * anonymising as a safety question (low legal risk either way — factual
 * pricing, no endorsement claim — but worth a second opinion given it's
 * in front of students). Decision: anonymise.
 *
 * What stays real: the OUTLET a student shops at (Waitrose, Sainsbury's
 * Superstore, Sainsbury's Local, Aldi, Londis) — that's the whole point of
 * the exercise (different stores → different totals) and isn't a brand
 * endorsement. Only product-level BRAND names are replaced here.
 *
 * How the mapping was built: every distinct brand string found in the real
 * pricing spreadsheet, mapped once to an invented name — the same real
 * brand always gets the same invented name, so brand identity stays
 * consistent across items/outlets for a student (e.g. a premium-sounding
 * import brand reads as premium at every outlet that stocks it). This is
 * deliberately NOT a tier label — no name says "budget" or "premium" — but
 * like real brands, some invented names will still read as fancier or
 * more basic than others, which is realistic and fine; what's banned is an
 * explicit tier word or the real trademark itself.
 *
 * Unbranded/generic entries in the sheet (bare "Avocado", "Loose", etc. —
 * typically at the convenience outlets, which realistically stock less
 * differentiated ranges) are given a generic "Corner Shop" house label
 * rather than left as a real trademark, for the same consistency.
 *
 * If a brand shows up in the spreadsheet that isn't in this table yet
 * (e.g. the sheet gets a new row), anonymiseBrand() falls back to the
 * outlet's house label plus the item name rather than silently leaking
 * the real string through — see the fallback at the bottom.
 */

const BRAND_MAP = {
  // ── Aldi own-label → "Fieldway" ──────────────────────────────────────
  'Aldi': 'Fieldway',
  'Aldi Avocado': 'Fieldway Avocado',
  'Aldi British Beef Mince': 'Fieldway British Beef Mince',
  'Aldi British Turkey Mince': 'Fieldway British Turkey Mince',
  'Aldi Grated Italian Style': 'Fieldway Grated Italian Style',
  'Aldi Iceberg Lettuce': 'Fieldway Iceberg Lettuce',
  'Aldi Mixed Leaves': 'Fieldway Mixed Leaves',
  'Aldi Peppers': 'Fieldway Peppers',
  'Aldi Plant Based Mince': 'Fieldway Plant Based Mince',
  'Aldi Salad Tomatoes': 'Fieldway Salad Tomatoes',
  'Aldi White Rolls': 'Fieldway White Rolls',

  // ── Sainsbury's own-label → "Greengate" ──────────────────────────────
  "Sainsbury's": 'Greengate',
  "Sainsbury's Avocado": 'Greengate Avocado',
  "Sainsbury's Bakery Sourdough": 'Greengate Bakery Sourdough',
  "Sainsbury's British Beef Mince": 'Greengate British Beef Mince',
  "Sainsbury's British Turkey Mince": 'Greengate British Turkey Mince',
  "Sainsbury's Grated Hard Italian": 'Greengate Grated Hard Italian',
  "Sainsbury's Mixed Leaves": 'Greengate Mixed Leaves',
  "Sainsbury's Organic Peppers": 'Greengate Organic Peppers',
  "Sainsbury's Part-Baked Rolls": 'Greengate Part-Baked Rolls',
  "Sainsbury's Peppers": 'Greengate Peppers',
  "Sainsbury's Plant Based Mince": 'Greengate Plant Based Mince',
  "Sainsbury's Ripe & Ready": 'Greengate Ripe & Ready',
  "Sainsbury's Romaine": 'Greengate Romaine',
  "Sainsbury's Salad Tomatoes": 'Greengate Salad Tomatoes',
  "Sainsbury's Vine Tomatoes": 'Greengate Vine Tomatoes',

  // ── Waitrose own-label → "Larder & Co." ──────────────────────────────
  'Waitrose': 'Larder & Co.',
  'Waitrose Avocado': 'Larder & Co. Avocado',
  'Waitrose Bakery Sourdough': 'Larder & Co. Bakery Sourdough',
  'Waitrose British Beef Mince': 'Larder & Co. British Beef Mince',
  'Waitrose British Turkey Mince': 'Larder & Co. British Turkey Mince',
  'Waitrose Iceberg Lettuce': 'Larder & Co. Iceberg Lettuce',
  'Waitrose Mixed Leaves': 'Larder & Co. Mixed Leaves',
  'Waitrose No.1 Aberdeen Angus': 'Larder & Co. No.1 Reserve Beef',
  'Waitrose Part-Baked Rolls': 'Larder & Co. Part-Baked Rolls',
  'Waitrose Peppers': 'Larder & Co. Peppers',
  'Waitrose Plant Based Mince': 'Larder & Co. Plant Based Mince',
  'Waitrose Salad Tomatoes': 'Larder & Co. Salad Tomatoes',
  'Waitrose Vine Tomatoes': 'Larder & Co. Vine Tomatoes',

  // ── Generic/unbranded sheet entries (convenience-store range) →
  //    "Corner Shop" house label ────────────────────────────────────────
  'Avocado': 'Corner Shop Avocado',
  'Beef Mince': 'Corner Shop Beef Mince',
  'Turkey Mince': 'Corner Shop Turkey Mince',
  'Peppers': 'Corner Shop Peppers',
  'Salad Tomatoes': 'Corner Shop Salad Tomatoes',
  'Grated Parmesan': 'Corner Shop Grated Parmesan',
  'Loose': 'Corner Shop Loose',
  'Mixed Salad Bag': 'Corner Shop Mixed Salad Bag',
  'Part-Baked Rolls': 'Corner Shop Part-Baked Rolls',

  // ── Real, named third-party brands → invented equivalents ───────────
  'De Cecco': 'Molino Rosso',
  'Filippo Berio': 'Capolivo',
  'Linda McCartney': 'Meadow & Mint',
  'Mutti': 'Pomodoro Reale',
  'Napolina': 'Vesuvio Kitchen',
  'Parmigiano Reggiano': 'Reggio Gold',
  'Parmigiano Reggiano (Waitrose)': 'Reggio Gold',
  'Pasta Rummo (Aldi)': 'Norcia Mill',
  'Quorn Mince': 'GreenHarvest Mince',
  'Schwartz': 'Hearth Spice Co.',
  'Stamford Street Co.': 'Haverstock Pantry',
  'Stamford Street Co. White Rolls': 'Haverstock Pantry White Rolls',
  'Stonemill (Aldi)': 'Stone & Sage',
  'Taste the Difference': 'Harvest Reserve',
};

/**
 * @param {string} realBrand — the brand string as written in the pricing
 *   spreadsheet's "Brand Name" column.
 * @param {{ outletName?: string, warnings?: string[] }} [context] — used
 *   only for the fallback path, to build a safe generic name and (if a
 *   warnings array is passed) flag that a new, unmapped brand showed up
 *   so it can be added to BRAND_MAP properly.
 * @returns {string} the name to show students.
 */
export function anonymiseBrand(realBrand, context = {}) {
  if (BRAND_MAP[realBrand]) return BRAND_MAP[realBrand];

  context.warnings?.push(
    `Brand "${realBrand}" has no anonymised name mapped yet — showing a generic placeholder. Add it to trolleyBrandAnonymisation.js.`
  );
  // Generic, non-identifying fallback rather than leaking the real name.
  return context.outletName ? `${context.outletName} Range` : 'Store Brand';
}

export default BRAND_MAP;
