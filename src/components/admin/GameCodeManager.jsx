import React, { useState, useEffect } from 'react';
import { createGameCode, getAllGameCodes, disableGameCode, updateGameCode, getGameConfigs, getTrolleyConfigs } from '../../utils/firestore.js';
import { generateGameCode, formatDate } from '../../utils/gameCode.js';
import { useAuth } from '../../hooks/useAuth.jsx';

const GAMES = [
  { id: 'trading_jr',        name: 'Trading Game Jr' },
  { id: 'shopping_challenge', name: 'Shopping Challenge' },
  { id: 'budgeting_jr',       name: 'Budgeting Jr' },
  { id: 'uk_economy',         name: 'The UK Economy' },
];

// Which Firestore collection a game's configs live in — each game owns its
// own config shape (Trading's segments/startingCash vs Trolley's
// outlets/items/pricing), so configs are never shared across games. Games
// not listed here (Budgeting Jr, The UK Economy) don't have a build-out
// yet, so they fall back to the trading-shaped gameConfigs collection —
// update this map when they get their own.
const CONFIG_SOURCE_BY_GAME = {
  'Shopping Challenge': 'trolley',
};

export default function GameCodeManager() {
  const { user } = useAuth();
  const [codes, setCodes] = useState([]);
  const [configs, setConfigs] = useState([]);       // trading-shaped (gameConfigs)
  const [trolleyConfigs, setTrolleyConfigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAll, setShowAll] = useState(false);

  const [form, setForm] = useState({
    gameName: 'Trading Game Jr',
    schoolName: '',
    contactEmail: '',
    teacherEmail: '',
    gameConfigId: '',
    startDate: '',
    endDate: '',
    maxUsers: 35,
    maxPlays: 100,
  });

  useEffect(() => {
    loadData();
  }, [user]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [c, gc, tc] = await Promise.all([
        getAllGameCodes(user.uid), getGameConfigs(user.uid), getTrolleyConfigs(user.uid),
      ]);
      setCodes(c);
      setConfigs(gc);
      setTrolleyConfigs(tc);
    } finally {
      setLoading(false);
    }
  };

  // The config list offered in the dropdown depends on which game is
  // selected — each game's configs are a different shape and live in a
  // different collection (see CONFIG_SOURCE_BY_GAME above).
  const configsForSelectedGame = CONFIG_SOURCE_BY_GAME[form.gameName] === 'trolley' ? trolleyConfigs : configs;

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.gameConfigId) { setError('Please select a game configuration.'); return; }
    setSaving(true); setError('');
    try {
      const code = generateGameCode();
      await createGameCode({
        code,
        gameName: form.gameName,
        schoolName: form.schoolName.trim(),
        contactEmail: form.contactEmail.trim(),
        teacherEmail: form.teacherEmail.trim().toLowerCase(),
        gameConfigId: form.gameConfigId,
        startDate: new Date(form.startDate),
        endDate: new Date(form.endDate + 'T23:59:59'),
        maxUsers: Number(form.maxUsers),
        maxPlays: Number(form.maxPlays),
      }, user.uid);
      setSuccess(`Game code created: ${code}`);
      setShowCreate(false);
      setForm({ gameName: 'Trading Game Jr', schoolName: '', contactEmail: '', teacherEmail: '', gameConfigId: '', startDate: '', endDate: '', maxUsers: 35, maxPlays: 100 });
      loadData();
    } catch (e) {
      setError('Failed to create code: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDisable = async (code) => {
    if (!confirm(`Disable game code ${code}? Students will no longer be able to join.`)) return;
    await disableGameCode(code);
    loadData();
  };

  const handleReenable = async (code) => {
    await updateGameCode(code, { status: 'active' });
    loadData();
  };

  const today = new Date().toISOString().split('T')[0];

  if (loading) return <div className="loading-page"><div className="spinner" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ marginBottom: 4 }}>Game Codes</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Create codes for schools. Each code controls how many students can play and how many total plays are permitted.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowCreate(true)}>+ New Code</button>
      </div>

      {success && <div className="alert alert-success" style={{ marginBottom: 16 }}>✓ {success}</div>}
      {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}

      {/* Create form */}
      {showCreate && (
        <div className="card" style={{ marginBottom: 24, borderColor: 'var(--orange)', borderWidth: 2 }}>
          <div className="card-header">
            <h3 style={{ fontSize: '1rem' }}>Create New Game Code</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => setShowCreate(false)}>Cancel</button>
          </div>
          <div className="card-body">
            <form onSubmit={handleCreate}>
              {/* Game selector — full width, first */}
              <div className="form-group" style={{ marginBottom: 16 }}>
                <label className="form-label">Game *</label>
                <select className="form-select" required value={form.gameName}
                  onChange={e => setForm(f => ({ ...f, gameName: e.target.value, gameConfigId: '' }))}>
                  {GAMES.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">School Name *</label>
                  <input className="form-input" required value={form.schoolName}
                    onChange={e => setForm(f => ({ ...f, schoolName: e.target.value }))}
                    placeholder="Oakwood Academy" />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Email *</label>
                  <input className="form-input" type="email" required value={form.contactEmail}
                    onChange={e => setForm(f => ({ ...f, contactEmail: e.target.value }))}
                    placeholder="admin@school.ac.uk" />
                </div>
                <div className="form-group">
                  <label className="form-label">Teacher Email</label>
                  <input className="form-input" type="email" value={form.teacherEmail}
                    onChange={e => setForm(f => ({ ...f, teacherEmail: e.target.value }))}
                    placeholder="teacher@school.ac.uk" />
                  <span className="form-hint">The teacher who will run this game — they log in with this email + the game code</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Game Configuration *</label>
                  <select className="form-select" required value={form.gameConfigId}
                    onChange={e => setForm(f => ({ ...f, gameConfigId: e.target.value }))}>
                    <option value="">— Select a game config —</option>
                    {configsForSelectedGame.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  {configsForSelectedGame.length === 0 && (
                    <span className="form-hint" style={{ color: 'var(--red)' }}>
                      {CONFIG_SOURCE_BY_GAME[form.gameName] === 'trolley'
                        ? 'No Shopping Trolley pricing configs yet — run the import script in the Shopping Trolley repo first.'
                        : 'No game configs yet — create one in the Game Configs tab first.'}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Start Date *</label>
                  <input className="form-input" type="date" required min={today} value={form.startDate}
                    onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">End Date *</label>
                  <input className="form-input" type="date" required min={form.startDate || today} value={form.endDate}
                    onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Max Concurrent Players</label>
                  <input className="form-input" type="number" min={1} max={200} value={form.maxUsers}
                    onChange={e => setForm(f => ({ ...f, maxUsers: e.target.value }))} />
                  <span className="form-hint">How many students can be in one session at once</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Max Total Plays (Licence)</label>
                  <input className="form-input" type="number" min={1} value={form.maxPlays}
                    onChange={e => setForm(f => ({ ...f, maxPlays: e.target.value }))} />
                  <span className="form-hint">Each student completing a game = 1 play</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving ? 'Creating…' : 'Create Code'}
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setShowCreate(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Codes table */}
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Game</th>
                <th>School</th>
                <th>Teacher</th>
                <th>Active</th>
                <th>Plays Used</th>
                <th>Users Now</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const now = Date.now();
                const visible = showAll
                  ? codes
                  : codes.filter(c => {
                      const start = c.startDate?.toMillis?.() ?? 0;
                      const end   = c.endDate?.toMillis?.() ?? Infinity;
                      return c.status === 'active' && now >= start && now <= end;
                    });
                const hiddenCount = codes.length - visible.length;

                if (codes.length === 0) return (
                  <tr><td colSpan={9} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 32 }}>
                    No game codes yet. Create one above.
                  </td></tr>
                );

                if (visible.length === 0) return (
                  <tr><td colSpan={9} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 32 }}>
                    No active codes right now.{' '}
                    <button className="btn btn-ghost btn-sm" onClick={() => setShowAll(true)}>
                      Show all {codes.length}
                    </button>
                  </td></tr>
                );

                return (
                  <>
                    {visible.map(c => {
                      const start = c.startDate?.toMillis?.() ?? 0;
                      const end   = c.endDate?.toMillis?.() ?? Infinity;
                      const isActive = now >= start && now <= end && c.status === 'active';
                      const playsLeft = c.maxPlays - (c.playsUsed ?? 0);
                      const playsExhausted = playsLeft <= 0;
                      return (
                        <tr key={c.code}>
                          <td>
                            <code style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em', color: 'var(--navy)' }}>
                              {c.code.replace(/^TENENT-/, '')}
                            </code>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, background: 'rgba(31,29,76,0.08)', borderRadius: 4, padding: '2px 7px', color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                              {c.gameName ?? 'Trading Game Jr'}
                            </span>
                          </td>
                          <td>
                            <div style={{ fontWeight: 500 }}>{c.schoolName}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.contactEmail}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {formatDate(c.startDate)} – {formatDate(c.endDate)}
                            </div>
                          </td>
                          <td style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            {c.teacherEmail || <span style={{ fontStyle: 'italic' }}>Not set</span>}
                          </td>
                          <td style={{ fontSize: '0.85rem' }}>
                            {formatDate(c.startDate)}<br />
                            <span style={{ color: 'var(--text-muted)' }}>to</span><br />
                            {formatDate(c.endDate)}
                          </td>
                          <td>
                            <div style={{ fontWeight: 600 }}>{c.playsUsed ?? 0} / {c.maxPlays}</div>
                            <div style={{ fontSize: '0.78rem', color: playsExhausted ? 'var(--red)' : 'var(--green)' }}>
                              {playsExhausted ? '⚠ Exhausted' : `${playsLeft} remaining`}
                            </div>
                          </td>
                          <td style={{ fontWeight: 600 }}>{c.activeUsers ?? 0} / {c.maxUsers}</td>
                          <td>
                            {c.status === 'disabled'
                              ? <span className="badge badge-red">Disabled</span>
                              : isActive
                                ? <span className="badge badge-green">Active</span>
                                : <span className="badge badge-gray">Inactive</span>
                            }
                          </td>
                          <td>
                            {c.status === 'active'
                              ? <button className="btn btn-sm btn-danger" onClick={() => handleDisable(c.code)}>Disable</button>
                              : <button className="btn btn-sm btn-success" onClick={() => handleReenable(c.code)}>Re-enable</button>
                            }
                          </td>
                        </tr>
                      );
                    })}
                    {hiddenCount > 0 && !showAll && (
                      <tr>
                        <td colSpan={9} style={{ textAlign: 'center', padding: '10px 16px', borderTop: '1px solid var(--border)' }}>
                          <button className="btn btn-ghost btn-sm" onClick={() => setShowAll(true)}>
                            + Show {hiddenCount} inactive / expired code{hiddenCount !== 1 ? 's' : ''}
                          </button>
                        </td>
                      </tr>
                    )}
                    {showAll && codes.length > 0 && (
                      <tr>
                        <td colSpan={9} style={{ textAlign: 'center', padding: '10px 16px', borderTop: '1px solid var(--border)' }}>
                          <button className="btn btn-ghost btn-sm" onClick={() => setShowAll(false)}>
                            Show active only
                          </button>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
