/**
 * Tenent Trading Game — Price Engine v2
 *
 * Each asset in a segment has TWO independent parameters:
 *   direction: trend / pattern (sets drift and shape)
 *   volatility: noise level (sets standard deviation around the trend)
 *
 * The combined effect produces realistic price paths.
 *
 * Rounding:
 *   - Cryptcoin: nearest £1
 *   - All other assets: nearest £0.10
 */

export const ASSETS = [
  { id: 'netshop',   name: 'Netshop',   sector: 'Internet retailer',    startPrice: 20,   minTick: 50  },
  { id: 'peach',     name: 'Peach',     sector: 'Technology company',   startPrice: 40,   minTick: 10  },
  { id: 'elliecar',  name: 'Elliecar',  sector: 'Electric car co',      startPrice: 50,   minTick: 50  },
  { id: 'oilco',     name: 'Oilco',     sector: 'Oil & gas driller',    startPrice: 25,   minTick: 100 },
  { id: 'cryptcoin', name: 'Cryptcoin', sector: 'Electronic currency',  startPrice: 1000, minTick: 1   },
  { id: 'goldvault', name: 'GoldVault', sector: 'Precious metals ETF',  startPrice: 150,  minTick: 10  },
];

// ── Rounding helpers ────────────────────────────────────────────────────────

/**
 * Round a price according to asset type:
 *   cryptcoin → nearest £1
 *   all others → nearest £0.10
 */
function roundPrice(assetId, raw) {
  const floored = Math.max(0.01, raw);
  if (assetId === 'cryptcoin') {
    return Math.round(floored);
  }
  return Math.round(floored * 10) / 10;
}

// ── Direction / Pattern ────────────────────────────────────────────────────
// drift: annualised log-return equivalent (divided by steps during simulation)
// shape: optional function(progress 0→1) that modulates drift over the segment

export const DIRECTIONS = {
  rally:        { label: '🚀 Rally',            drift:  0.55, shape: null },
  sharp_up:     { label: '▲▲ Sharp Up',         drift:  0.30, shape: null },
  up:           { label: '▲ Up',                drift:  0.12, shape: null },
  slight_up:    { label: '↗ Slight Up',         drift:  0.05, shape: null },
  flat:         { label: '→ Flat',              drift:  0.00, shape: null },
  slight_down:  { label: '↘ Slight Down',       drift: -0.05, shape: null },
  down:         { label: '▼ Down',              drift: -0.12, shape: null },
  sharp_down:   { label: '▼▼ Sharp Down',       drift: -0.30, shape: null },
  crash:        { label: '💥 Crash',             drift: -0.55, shape: null },
  recovery:     { label: '📈 Recovery',          drift:  0.20, shape: (t) => t * t },           // accelerates
  reversal_up:  { label: '↩▲ Reversal Up',      drift:  0.15, shape: (t) => t < 0.3 ? -1 : 2 }, // dips then recovers
  reversal_down:{ label: '↩▼ Reversal Down',    drift: -0.15, shape: (t) => t < 0.3 ?  1 : -2 }, // pops then sells off
  pump_dump:    { label: '🎢 Pump & Dump',        drift:  0.00, shape: (t) => t < 0.5 ? 3 : -3 }, // spike then collapse
  dead_cat:     { label: '🐱 Dead Cat Bounce',   drift: -0.20, shape: (t) => t < 0.3 ? -2 : t < 0.6 ? 2 : -2 }, // fall, bounce, fall
};

// ── Volatility ─────────────────────────────────────────────────────────────
// vol: annualised volatility (sigma), divided by sqrt(steps) during simulation

export const VOLATILITIES = {
  low_volatility:   { label: '😴 Low Volatility',   vol: 0.04 },
  normal:           { label: '〰 Normal',             vol: 0.12 },
  high_volatility:  { label: '⚡ High Volatility',   vol: 0.28 },
  volatile_up:      { label: '⚡▲ Volatile Up',      vol: 0.22 },  // same as high but used with up directions
  volatile_down:    { label: '⚡▼ Volatile Down',    vol: 0.22 },  // same as high but used with down directions
  extreme:          { label: '🌪 Extreme',            vol: 0.45 },
};

// Default combinations to use in new segments
export const DEFAULT_DIRECTION = 'flat';
export const DEFAULT_VOLATILITY = 'normal';

/**
 * Generate a sequence of price ticks for one segment.
 * Returns: [{ step, prices: { assetId: price } }, ...]
 */
export function generateSegmentPrices(currentPrices, segmentConfig, steps = 10) {
  const ticks = [];
  // rawPrices tracks full-precision values so rounding doesn't kill GBM momentum.
  // Displayed/broadcast prices are rounded; the simulation path is not.
  let rawPrices = { ...currentPrices };

  for (let i = 0; i < steps; i++) {
    const progress = i / steps; // 0 → 1 over the segment
    const newRaw = {};
    const newRounded = {};

    for (const asset of ASSETS) {
      const dirKey = segmentConfig.directions?.[asset.id] ?? DEFAULT_DIRECTION;
      const volKey = segmentConfig.volatilities?.[asset.id] ?? DEFAULT_VOLATILITY;

      const dir = DIRECTIONS[dirKey] ?? DIRECTIONS.flat;
      const volDef = VOLATILITIES[volKey] ?? VOLATILITIES.normal;

      const dt = 1 / steps;

      // Shape modulator — scales drift at this point in the segment
      const shapeMod = dir.shape ? dir.shape(progress) : 1;
      const effectiveDrift = dir.drift * shapeMod;

      // Geometric Brownian Motion step — applied to unrounded price
      const z = gaussianRandom();
      const change = effectiveDrift * dt + volDef.vol * Math.sqrt(dt) * z;
      const raw = rawPrices[asset.id] * (1 + change);
      newRaw[asset.id] = Math.max(0.01, raw);
      newRounded[asset.id] = roundPrice(asset.id, raw);
    }

    rawPrices = newRaw; // advance simulation in full precision
    ticks.push({ step: i + 1, prices: newRounded }); // broadcast rounded values
  }

  return ticks;
}

/**
 * Apply a one-time news shock to current prices using the segment's direction.
 * The shock is a single instant jump proportional to the drift.
 */
export function applyNewsShock(currentPrices, directions, volatilities) {
  const result = { ...currentPrices };
  for (const asset of ASSETS) {
    const dirKey = directions?.[asset.id];
    const volKey = volatilities?.[asset.id];
    if (!dirKey || dirKey === 'flat') continue;

    const dir = DIRECTIONS[dirKey] ?? DIRECTIONS.flat;
    const volDef = VOLATILITIES[volKey ?? 'normal'] ?? VOLATILITIES.normal;

    const z = gaussianRandom();
    // Smaller instant shock — about 1/3 of the segment drift
    const jump = (dir.drift * 0.3) + (volDef.vol * 0.15 * z);
    result[asset.id] = roundPrice(asset.id, result[asset.id] * (1 + jump));
  }
  return result;
}

/** Box-Muller Gaussian random number generator */
function gaussianRandom() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

/** Build initial prices map from ASSETS defaults */
export function getInitialPrices() {
  return Object.fromEntries(ASSETS.map(a => [a.id, roundPrice(a.id, a.startPrice)]));
}

/** Calculate portfolio value */
export function calcPortfolioValue(holdings, cash, prices) {
  let total = cash;
  for (const [assetId, qty] of Object.entries(holdings)) {
    total += (prices[assetId] ?? 0) * qty;
  }
  return Math.round(total * 100) / 100;
}

/** Calculate P&L vs starting cash */
export function calcPnL(portfolioValue, startingCash) {
  return Math.round((portfolioValue - startingCash) * 100) / 100;
}

/** Default game config */
export const DEFAULT_GAME_CONFIG = {
  startingCash: 20000,
  segments: [
    {
      id: 'seg1',
      label: 'Phase 1 — Practice',
      practice: true,   // positions & P&L reset to zero when this phase ends
      steps: 10,
      msPerTick: 8000,
      directions:  { netshop: 'flat',       peach: 'flat',  elliecar: 'flat',      oilco: 'flat',  cryptcoin: 'slight_up',   goldvault: 'slight_up'   },
      volatilities:{ netshop: 'normal',     peach: 'normal',elliecar: 'normal',    oilco: 'normal',cryptcoin: 'high_volatility', goldvault: 'low_volatility' },
      news: { headline: '🎯 Practice round complete!', body: 'Nice work getting the hang of the platform. Your positions and P&L are about to reset — the real game starts now. Good luck!', assetHints: {} },
    },
    {
      id: 'seg2',
      label: 'Phase 2 — ULEZ',
      steps: 10,
      msPerTick: 8000,
      directions:  { netshop: 'down',       peach: 'flat',  elliecar: 'sharp_up',  oilco: 'down',  cryptcoin: 'flat',        goldvault: 'flat'        },
      volatilities:{ netshop: 'normal',     peach: 'normal',elliecar: 'normal',    oilco: 'normal',cryptcoin: 'normal',       goldvault: 'low_volatility' },
      news: { headline: 'ULEZ Extended and Tightened', body: 'The government has extended the Ultra Low Emission Zone across the country. Electric vehicle demand is surging.', assetHints: { elliecar: 'positive', oilco: 'negative' } },
    },
    {
      id: 'seg3',
      label: 'Phase 3 — Netshop Scandal',
      steps: 10,
      msPerTick: 8000,
      // Netshop: drops hard early then bounces back to recover ~half its losses.
      // reversal_up shape (dips first 30%, then rallies) combined with a net-negative
      // drift means students see a clear entry signal as it bottoms and turns.
      directions:  { netshop: 'reversal_up', peach: 'flat',  elliecar: 'slight_up', oilco: 'flat',  cryptcoin: 'slight_up',   goldvault: 'sharp_up'    },
      volatilities:{ netshop: 'volatile_down',peach:'normal',elliecar:'normal',    oilco: 'normal',cryptcoin: 'normal',       goldvault: 'low_volatility' },
      news: { headline: 'Bad Press: Employee Treatment at Netshop', body: 'Investigative journalists have uncovered evidence of poor working conditions at Netshop warehouses. Calls for a boycott are spreading on social media. But is the sell-off overdone?', assetHints: { netshop: 'negative', goldvault: 'positive' } },
    },
    {
      id: 'seg4',
      label: 'Phase 4 — Peace Talks',
      steps: 10,
      msPerTick: 8000,
      // Crypto: strong rally — risk assets surge as global tensions ease.
      // recovery shape (accelerates upward) fits the narrative of confidence returning.
      directions:  { netshop: 'up',         peach: 'sharp_up',elliecar:'up',       oilco: 'up',    cryptcoin: 'rally',       goldvault: 'down'        },
      volatilities:{ netshop: 'normal',     peach: 'normal',  elliecar:'normal',   oilco: 'normal',cryptcoin: 'extreme',      goldvault: 'normal'      },
      news: { headline: 'Peace Talks Succeed — Truce Declared', body: 'A surprise ceasefire in a major oil-producing region has eased global tensions. Investor confidence returns broadly — risk assets surge as safe havens sell off.', assetHints: { oilco: 'positive', netshop: 'positive', peach: 'positive', cryptcoin: 'positive', goldvault: 'negative' } },
    },
    {
      id: 'seg5',
      label: 'Phase 5 — Crypto Ban',
      steps: 10,
      msPerTick: 8000,
      directions:  { netshop: 'flat',       peach: 'flat',    elliecar:'flat',     oilco: 'flat',  cryptcoin: 'crash',       goldvault: 'sharp_up'   },
      volatilities:{ netshop: 'normal',     peach: 'normal',  elliecar:'normal',   oilco: 'normal',cryptcoin: 'extreme',      goldvault: 'normal'     },
      news: { headline: 'China Bans Cryptocurrency Trading', body: 'The Chinese government has announced an immediate and total ban on cryptocurrency trading and mining. Cryptcoin prices are in freefall. Investors flee to safe havens.', assetHints: { cryptcoin: 'negative', goldvault: 'positive' } },
    },
  ],
};
