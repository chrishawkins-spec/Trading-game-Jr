import React, { useState } from 'react';
import { ASSETS, DIRECTIONS, VOLATILITIES, DEFAULT_GAME_CONFIG, DEFAULT_DIRECTION, DEFAULT_VOLATILITY } from '../../utils/priceEngine.js';
import { saveGameConfig } from '../../utils/firestore.js';
import { useAuth } from '../../hooks/useAuth.jsx';

const VOLATILITY_OPTIONS = Object.entries(VOLATILITIES).map(([k, v]) => ({ value: k, label: v.label }));

const HINT_OPTIONS = [
  { value: '', label: 'No hint' },
  { value: 'positive', label: '📈 Positive' },
  { value: 'negative', label: '📉 Negative' },
];

// Tick speed: 5 options from professional to slow
// msPerTick drives price update frequency; steps = segmentSeconds / (msPerTick/1000)
const SPEED_PRESETS = [
  { label: '⚡ Professional (0.25s)', ms: 250  },
  { label: '🏃 Fast (0.5s)',          ms: 500  },
  { label: '🚶 Normal (1s)',           ms: 1000 },
  { label: '🐢 Slow (2s)',             ms: 2000 },
  { label: '🐌 Very Slow (4s)',        ms: 4000 },
];

const directionColor = (key) => {
  const map = {
    rally: '#15803d', sharp_up: '#16a34a', up: '#22c55e', slight_up: '#86efac',
    flat: '#9ca3af',
    slight_down: '#fca5a5', down: '#ef4444', sharp_down: '#dc2626', crash: '#7f1d1d',
    recovery: '#0ea5e9', reversal_up: '#6366f1', reversal_down: '#a855f7',
    pump_dump: '#f59e0b', dead_cat: '#78716c',
  };
  return map[key] ?? '#6b7280';
};

// Given segment length (seconds) and msPerTick, compute number of ticks
const calcSteps = (lengthSecs, msPerTick) => Math.max(2, Math.round((lengthSecs * 1000) / msPerTick));

const emptySegment = () => ({
  id: `seg_${Date.now()}`,
  label: 'New Phase',
  segmentSeconds: 60,   // segment LENGTH in seconds — the user-facing control
  msPerTick: 1000,      // tick speed — steps are derived from these two
  directions:   Object.fromEntries(ASSETS.map(a => [a.id, DEFAULT_DIRECTION])),
  volatilities: Object.fromEntries(ASSETS.map(a => [a.id, DEFAULT_VOLATILITY])),
  news: { headline: '', body: '', assetHints: {} },
});

// Migrate old segments that used 'steps' instead of 'segmentSeconds'
const migrateSegment = (s) => ({
  ...s,
  segmentSeconds: s.segmentSeconds ?? (s.steps ? s.steps * ((s.msPerTick ?? 8000) / 1000) : 60),
  msPerTick:      s.msPerTick ?? 1000,
  directions:     s.directions   ?? Object.fromEntries(ASSETS.map(a => [a.id, s.effects?.[a.id] ?? DEFAULT_DIRECTION])),
  volatilities:   s.volatilities ?? Object.fromEntries(ASSETS.map(a => [a.id, DEFAULT_VOLATILITY])),
});

export default function GameConfigBuilder({ existing, onSaved, onCancel }) {
  const { user } = useAuth();
  const init = existing ?? { ...DEFAULT_GAME_CONFIG, id: null, name: 'My Game' };

  const [name, setName] = useState(init.name);
  const [startingCash, setStartingCash] = useState(init.startingCash);
  const [segments, setSegments] = useState(init.segments.map(migrateSegment));
  const [activeSegIdx, setActiveSegIdx] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const seg = segments[activeSegIdx];

  const updateSeg = (field, value) =>
    setSegments(prev => prev.map((s, i) => i === activeSegIdx ? { ...s, [field]: value } : s));

  const updateDirection = (assetId, value) =>
    setSegments(prev => prev.map((s, i) => i === activeSegIdx
      ? { ...s, directions: { ...s.directions, [assetId]: value } } : s));

  const updateVolatility = (assetId, value) =>
    setSegments(prev => prev.map((s, i) => i === activeSegIdx
      ? { ...s, volatilities: { ...s.volatilities, [assetId]: value } } : s));

  const updateNews = (field, value) =>
    setSegments(prev => prev.map((s, i) => i === activeSegIdx
      ? { ...s, news: { ...s.news, [field]: value } } : s));

  const updateHint = (assetId, value) =>
    setSegments(prev => prev.map((s, i) => i === activeSegIdx
      ? { ...s, news: { ...s.news, assetHints: { ...s.news.assetHints, [assetId]: value } } } : s));

  const addSegment = () => {
    setSegments(prev => [...prev, emptySegment()]);
    setActiveSegIdx(segments.length);
  };

  const removeSegment = (idx) => {
    if (segments.length <= 1) return;
    setSegments(prev => prev.filter((_, i) => i !== idx));
    setActiveSegIdx(Math.min(idx, segments.length - 2));
  };

  const moveSegment = (idx, dir) => {
    const s = [...segments];
    const t = idx + dir;
    if (t < 0 || t >= s.length) return;
    [s[idx], s[t]] = [s[t], s[idx]];
    setSegments(s);
    setActiveSegIdx(t);
  };

  // When saving, derive 'steps' from segmentSeconds + msPerTick so SessionController works
  const prepareForSave = (segs) => segs.map(s => ({
    ...s,
    steps: calcSteps(s.segmentSeconds, s.msPerTick),
  }));

  const handleSave = async () => {
    if (!name.trim()) { setError('Please give this game a name.'); return; }
    setSaving(true); setError('');
    try {
      const id = await saveGameConfig({
        id: init.id,
        name: name.trim(),
        startingCash: Number(startingCash),
        segments: prepareForSave(segments),
      }, user.uid);
      onSaved(id);
    } catch (e) {
      setError('Failed to save: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  const totalMs = segments.reduce((s, sg) => s + sg.segmentSeconds * 1000, 0);
  const fmtDuration = (ms) => {
    const s = Math.round(ms / 1000);
    return s >= 60 ? `${Math.floor(s/60)}m ${s%60}s` : `${s}s`;
  };

  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>

      {/* ── Left: meta + segment list ── */}
      <div style={{ width: 240, flexShrink: 0 }}>
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card-body" style={{ padding: 16 }}>
            <div className="form-group" style={{ marginBottom: 10 }}>
              <label className="form-label">Game Name</label>
              <input className="form-input" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Starting Cash (£)</label>
              <input className="form-input" type="number" value={startingCash} min={1000} step={500}
                onChange={e => setStartingCash(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card-header" style={{ padding: '10px 14px' }}>
            <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Segments ({segments.length})</span>
            <button className="btn btn-sm btn-primary" onClick={addSegment}>+ Add</button>
          </div>
          <div style={{ padding: 6 }}>
            {segments.map((s, i) => {
              const steps = calcSteps(s.segmentSeconds, s.msPerTick);
              return (
                <div key={s.id} onClick={() => setActiveSegIdx(i)} style={{
                  padding: '8px 10px', borderRadius: 6, cursor: 'pointer', marginBottom: 3,
                  background: i === activeSegIdx ? 'var(--navy)' : 'transparent',
                  color: i === activeSegIdx ? 'white' : 'var(--text)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontWeight: 500, fontSize: '0.82rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {i + 1}. {s.label || 'Unnamed'}
                    </div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.65 }}>
                      {s.segmentSeconds}s · {steps} ticks
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 1, flexShrink: 0 }}>
                    {['↑','↓','×'].map((ch, bi) => (
                      <button key={ch} onClick={e => { e.stopPropagation(); bi === 0 ? moveSegment(i,-1) : bi === 1 ? moveSegment(i,1) : removeSegment(i); }}
                        style={{ background:'none', border:'none', cursor:'pointer', opacity:0.5, padding:'0 3px', color:'inherit', fontSize:'0.8rem' }}>{ch}</button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: '8px 14px', borderTop: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Total: <strong>{fmtDuration(totalMs)}</strong>
          </div>
        </div>
      </div>

      {/* ── Right: segment editor ── */}
      <div style={{ flex: 1, minWidth: 300 }}>
        {seg && (
          <div className="card">
            <div className="card-header">
              <h3 style={{ fontSize: '1rem' }}>Segment {activeSegIdx + 1}: {seg.label || 'Unnamed'}</h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {calcSteps(seg.segmentSeconds, seg.msPerTick)} price ticks
              </div>
            </div>
            <div className="card-body">

              {/* ── Timing row ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Label</label>
                  <input className="form-input" value={seg.label}
                    onChange={e => updateSeg('label', e.target.value)} />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Segment length (seconds)</label>
                  <input className="form-input" type="number" min={10} max={600} step={5}
                    value={seg.segmentSeconds}
                    onChange={e => updateSeg('segmentSeconds', Number(e.target.value))} />
                  <span className="form-hint">How long trading lasts</span>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Tick speed</label>
                  <select className="form-select" value={seg.msPerTick}
                    onChange={e => updateSeg('msPerTick', Number(e.target.value))}>
                    {SPEED_PRESETS.map(p => (
                      <option key={p.ms} value={p.ms}>{p.label}</option>
                    ))}
                  </select>
                  <span className="form-hint">
                    → {calcSteps(seg.segmentSeconds, seg.msPerTick)} price updates
                  </span>
                </div>
              </div>

              {/* ── Asset behaviour table ── */}
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10 }}>
                Price Behaviour — Direction × Volatility
              </h4>
              <div style={{ overflowX: 'auto', marginBottom: 24 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Asset','Direction / Pattern','Volatility','Summary'].map(h => (
                        <th key={h} style={{ textAlign:'left', padding:'8px 12px', background:'var(--navy)', color:'white', fontSize:'0.78rem' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ASSETS.map((asset, idx) => {
                      const dirKey = seg.directions?.[asset.id] ?? DEFAULT_DIRECTION;
                      const volKey = seg.volatilities?.[asset.id] ?? DEFAULT_VOLATILITY;
                      return (
                        <tr key={asset.id} style={{ background: idx % 2 === 0 ? 'white' : 'var(--surface)' }}>
                          <td style={{ padding:'10px 12px', borderBottom:'1px solid var(--border)' }}>
                            <div style={{ fontWeight:600, fontSize:'0.88rem' }}>{asset.name}</div>
                            <div style={{ fontSize:'0.72rem', color:'var(--text-muted)' }}>{asset.sector}</div>
                          </td>
                          <td style={{ padding:'8px 12px', borderBottom:'1px solid var(--border)' }}>
                            <select className="form-select"
                              style={{ fontSize:'0.82rem', padding:'6px 10px', color:directionColor(dirKey), fontWeight:600 }}
                              value={dirKey} onChange={e => updateDirection(asset.id, e.target.value)}>
                              <optgroup label="── Trending ──">
                                {['rally','sharp_up','up','slight_up','flat','slight_down','down','sharp_down','crash'].map(k => (
                                  <option key={k} value={k}>{DIRECTIONS[k].label}</option>
                                ))}
                              </optgroup>
                              <optgroup label="── Pattern-based ──">
                                {['recovery','reversal_up','reversal_down','pump_dump','dead_cat'].map(k => (
                                  <option key={k} value={k}>{DIRECTIONS[k].label}</option>
                                ))}
                              </optgroup>
                            </select>
                          </td>
                          <td style={{ padding:'8px 12px', borderBottom:'1px solid var(--border)' }}>
                            <select className="form-select"
                              style={{ fontSize:'0.82rem', padding:'6px 10px' }}
                              value={volKey} onChange={e => updateVolatility(asset.id, e.target.value)}>
                              {VOLATILITY_OPTIONS.map(o => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                              ))}
                            </select>
                          </td>
                          <td style={{ padding:'8px 12px', borderBottom:'1px solid var(--border)' }}>
                            <span style={{ color:directionColor(dirKey), fontWeight:600, fontSize:'0.78rem' }}>{DIRECTIONS[dirKey]?.label}</span>
                            <span style={{ color:'var(--text-muted)', fontSize:'0.78rem' }}> / {VOLATILITIES[volKey]?.label}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* ── News ── */}
              <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10 }}>
                News Story (shown at start of this segment)
              </h4>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
                <div className="form-group" style={{ marginBottom:0 }}>
                  <label className="form-label">Headline</label>
                  <input className="form-input" value={seg.news?.headline ?? ''} placeholder="e.g. ULEZ Extended Nationwide"
                    onChange={e => updateNews('headline', e.target.value)} />
                </div>
                <div className="form-group" style={{ marginBottom:0 }}>
                  <label className="form-label">Story body</label>
                  <textarea className="form-textarea" rows={2} value={seg.news?.body ?? ''} placeholder="Describe the news event…"
                    onChange={e => updateNews('body', e.target.value)} />
                </div>
              </div>
              <div>
                <label className="form-label" style={{ display:'block', marginBottom:8 }}>Asset hints (optional)</label>
                <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                  {ASSETS.map(asset => (
                    <div key={asset.id} style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <span style={{ fontSize:'0.82rem', fontWeight:500, minWidth:68 }}>{asset.name}</span>
                      <select className="form-select" style={{ fontSize:'0.78rem', padding:'5px 8px' }}
                        value={seg.news?.assetHints?.[asset.id] ?? ''}
                        onChange={e => updateHint(asset.id, e.target.value)}>
                        {HINT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {error && <div className="alert alert-error" style={{ marginTop:16 }}>{error}</div>}
        <div style={{ display:'flex', gap:12, marginTop:20, justifyContent:'flex-end' }}>
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary btn-lg" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : '✓ Save Game Config'}
          </button>
        </div>
      </div>
    </div>
  );
}
