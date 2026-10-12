import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';
import GameConfigBuilder from './GameConfigBuilder.jsx';
import GameCodeManager from './GameCodeManager.jsx';
import SessionController from './SessionController.jsx';
import { getGameConfigs, getAllGameCodes, deleteGameConfig, getAllTeachers, getAllSessions, archiveSession, getArchivedSessions } from '../../utils/firestore.js';
import { formatDate } from '../../utils/gameCode.js';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [tab, setTab] = useState('codes');
  const [configs, setConfigs] = useState([]);
  const [codes, setCodes] = useState([]);
  const [editingConfig, setEditingConfig] = useState(null); // null | 'new' | config object
  const [activeSession, setActiveSession] = useState(null); // { gameCode, gameConfigId }
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [c, gc] = await Promise.all([getGameConfigs(user.uid), getAllGameCodes(user.uid)]);
      setConfigs(c);
      setCodes(gc);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  // If running a live session, show session controller fullscreen
  if (activeSession) {
    return (
      <SessionController
        gameCode={activeSession.gameCode}
        gameConfigId={activeSession.gameConfigId}
        onClose={() => { setActiveSession(null); load(); }}
      />
    );
  }

  // If editing/creating a config, show builder
  if (editingConfig !== null) {
    return (
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 20 }}>
          <button className="btn btn-ghost" onClick={() => setEditingConfig(null)}>
            ← Back to dashboard
          </button>
          <h2 style={{ marginTop: 12 }}>
            {editingConfig === 'new' ? 'New Game Configuration' : `Edit: ${editingConfig.name}`}
          </h2>
        </div>
        <GameConfigBuilder
          existing={editingConfig === 'new' ? null : editingConfig}
          onSaved={() => { setEditingConfig(null); load(); }}
          onCancel={() => setEditingConfig(null)}
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface)' }}>
      {/* Top bar */}
      <div style={{
        background: 'var(--navy-dark)', color: 'white',
        padding: '0 28px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            background: 'var(--orange)', borderRadius: 8, width: 34, height: 34,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
          }}>T</div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>TENENT</span>
            <span style={{ marginLeft: 10, fontSize: '0.75rem', background: 'rgba(255,113,27,0.25)', border: '1px solid rgba(255,113,27,0.4)', borderRadius: 4, padding: '2px 8px', color: 'var(--orange-light)' }}>🔑 Superadmin</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ opacity: 0.65, fontSize: '0.85rem' }}>{user.email}</span>
          <button className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.6)' }} onClick={logout}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ padding: '28px 28px 0' }}>
        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
          <StatCard label="Game Configs" value={configs.length} icon="⚙️" />
          <StatCard label="Active Codes" value={codes.filter(c => c.status === 'active').length} icon="🎟️" />
          <StatCard label="Total Plays Used" value={codes.reduce((s, c) => s + (c.playsUsed ?? 0), 0)} icon="🎮" />
          <StatCard label="Active Users Now" value={codes.reduce((s, c) => s + (c.activeUsers ?? 0), 0)} icon="👥" />
        </div>

        {/* Tabs */}
        <div className="tabs">
          {[['codes', '🎟️ Game Codes'], ['configs', '⚙️ Game Configs'], ['teachers', '🎓 Teachers'], ['launch', '🚀 Launch Session'], ['archive', '🗂️ Session Archive']].map(([id, label]) => (
            <div key={id} className={`tab${tab === id ? ' active' : ''}`} onClick={() => setTab(id)}>
              {label}
            </div>
          ))}
        </div>

        {/* Tab content */}
        {tab === 'codes' && <GameCodeManager />}

        {tab === 'configs' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <h2 style={{ marginBottom: 4 }}>Game Configurations</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Design the segments, news stories and price effects for each game.
                </p>
              </div>
              <button className="btn btn-primary" onClick={() => setEditingConfig('new')}>+ New Config</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
              {loading && <div className="loading-page"><div className="spinner" /></div>}
              {!loading && configs.length === 0 && (
                <div className="card">
                  <div className="card-body" style={{ textAlign: 'center', padding: 40 }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>⚙️</div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>No game configs yet.</p>
                    <button className="btn btn-primary" onClick={() => setEditingConfig('new')}>
                      Create your first game
                    </button>
                  </div>
                </div>
              )}
              {configs.map(config => (
                <div className="card" key={config.id}>
                  <div className="card-body">
                    <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{config.name}</h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>
                      {config.segments?.length ?? 0} segments · £{(config.startingCash ?? 0).toLocaleString()} starting cash
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-outline btn-sm" onClick={() => setEditingConfig(config)}>Edit</button>
                      <button className="btn btn-ghost btn-sm" style={{ color: 'var(--red)' }}
                        onClick={async () => {
                          if (confirm(`Delete "${config.name}"?`)) {
                            await deleteGameConfig(config.id);
                            load();
                          }
                        }}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'teachers' && <TeacherManager />}

        {tab === 'archive' && <SessionArchive uid={user.uid} />}

        {tab === 'launch' && (
          <LaunchSession onLaunch={setActiveSession} />
        )}
      </div>
    </div>
  );
}

function TeacherManager() {
  const { user } = useAuth();
  const [teachers, setTeachers] = React.useState([]);
  const [codes, setCodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showCreate, setShowCreate] = React.useState(false);
  const [form, setForm] = React.useState({ email: '', gameCode: '' });
  const [saving, setSaving] = React.useState(false);
  const [msg, setMsg] = React.useState('');

  React.useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [t, c] = await Promise.all([getAllTeachers(user.uid), getAllGameCodes(user.uid)]);
      setTeachers(t);
      setCodes(c);
    } finally { setLoading(false); }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true); setMsg('');
    try {
      // Teacher accounts are created in Firebase Auth via Admin SDK on the server,
      // or manually in the Firebase Console. Here we create the Firestore record
      // that links their UID to their role. Instructions are shown to the admin.
      setMsg(`To complete: go to Firebase Console → Authentication → Add user with email "${form.email}", then copy their UID and add a Firestore document at admins/{UID} with: role="teacher", email="${form.email}", gameCode="${form.gameCode}", createdBy="${user.uid}"`);
      setShowCreate(false);
    } finally { setSaving(false); }
  };

  if (loading) return <div className="loading-page"><div className="spinner" /></div>;

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
        <div>
          <h2 style={{ marginBottom:4 }}>Teacher Accounts</h2>
          <p style={{ color:'var(--text-muted)', fontSize:'0.9rem' }}>
            Teachers can run live sessions for their assigned game code. They cannot create or edit configurations.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowCreate(s => !s)}>+ Add Teacher</button>
      </div>

      {msg && (
        <div className="alert alert-info" style={{ marginBottom:20 }}>
          <div style={{ fontWeight:600, marginBottom:8 }}>How to create a teacher account:</div>
          <ol style={{ paddingLeft:20, lineHeight:2, fontSize:'0.88rem' }}>
            <li>Go to <strong>Firebase Console → Authentication → Users → Add user</strong></li>
            <li>Enter the teacher's email and a temporary password</li>
            <li>Copy the <strong>User UID</strong> shown in the users table</li>
            <li>Go to <strong>Firestore → admins → Add document</strong></li>
            <li>Set Document ID to the UID, then add fields:<br/>
              <code style={{ background:'#e0e7ff', padding:'2px 6px', borderRadius:4 }}>role = "teacher"</code>{' '}
              <code style={{ background:'#e0e7ff', padding:'2px 6px', borderRadius:4 }}>email = "{form.email}"</code>{' '}
              <code style={{ background:'#e0e7ff', padding:'2px 6px', borderRadius:4 }}>gameCode = "{form.gameCode}"</code>{' '}
              <code style={{ background:'#e0e7ff', padding:'2px 6px', borderRadius:4 }}>createdBy = "{user.uid}"</code>
            </li>
          </ol>
        </div>
      )}

      {showCreate && (
        <div className="card" style={{ marginBottom:24, borderColor:'var(--orange)', borderWidth:2 }}>
          <div className="card-header">
            <h3 style={{ fontSize:'1rem' }}>New Teacher Account</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => setShowCreate(false)}>Cancel</button>
          </div>
          <div className="card-body">
            <form onSubmit={handleCreate}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <div className="form-group">
                  <label className="form-label">Teacher Email *</label>
                  <input className="form-input" type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="teacher@school.ac.uk" />
                </div>
                <div className="form-group">
                  <label className="form-label">Assign Game Code *</label>
                  <select className="form-select" required value={form.gameCode}
                    onChange={e => setForm(f => ({ ...f, gameCode: e.target.value }))}>
                    <option value="">— Select code —</option>
                    {codes.filter(c => c.status === 'active').map(c => (
                      <option key={c.code} value={c.code}>{c.code} — {c.schoolName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                Show Setup Instructions
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        <div style={{ padding:'16px 20px', borderBottom:'1px solid var(--border)', background:'#fffbeb' }}>
          <div style={{ fontWeight:600, fontSize:'0.85rem', color:'#92400e' }}>
            🔒 Role separation — what teachers see vs admins
          </div>
          <div style={{ fontSize:'0.82rem', color:'#92400e', marginTop:4, lineHeight:1.6 }}>
            Teachers log in to the same URL but see only their assigned session. They can start, pause, and end trading — but cannot create codes, edit game configs, or view other schools' data.
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Email</th><th>Game Code</th><th>School</th></tr>
            </thead>
            <tbody>
              {teachers.length === 0 && (
                <tr><td colSpan={3} style={{ textAlign:'center', color:'var(--text-muted)', padding:32 }}>
                  No teacher accounts yet.
                </td></tr>
              )}
              {teachers.map(t => {
                const code = codes.find(c => c.code === t.gameCode);
                return (
                  <tr key={t.uid}>
                    <td style={{ fontWeight:500 }}>{t.email}</td>
                    <td><code style={{ fontFamily:'monospace', fontWeight:700, color:'var(--navy)' }}>{t.gameCode}</code></td>
                    <td style={{ color:'var(--text-muted)' }}>{code?.schoolName ?? '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LaunchSession({ onLaunch }) {
  const { user } = useAuth();
  const [selectedCode, setSelectedCode] = useState('');
  const [error, setError] = useState('');
  const [codes, setCodes] = useState([]);
  const [configs, setConfigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [c, gc] = await Promise.all([getAllGameCodes(user.uid), getGameConfigs(user.uid)]);
        setCodes(c);
        setConfigs(gc);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  const code = codes.find(c => c.code === selectedCode);
  const config = code ? configs.find(c => c.id === code.gameConfigId) : null;

  const handleLaunch = () => {
    if (!code) { setError('Please select a game code.'); return; }
    if (!config) { setError('The game config for this code was not found.'); return; }
    if (code.status !== 'active') { setError('This code is disabled.'); return; }
    onLaunch({ gameCode: code.code, gameConfigId: code.gameConfigId });
  };

  const activeCodes = codes.filter(c => c.status === 'active');

  if (loading) return <div className="loading-page"><div className="spinner" /></div>;

  return (
    <div style={{ maxWidth: 560 }}>
      <h2 style={{ marginBottom: 8 }}>Launch a Live Session</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: '0.9rem' }}>
        Select a game code to open the session controller. Students join using the code.
      </p>
      {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label className="form-label">Select Game Code</label>
            <select className="form-select" value={selectedCode} onChange={e => { setSelectedCode(e.target.value); setError(''); }}>
              <option value="">— Choose a code —</option>
              {activeCodes.map(c => (
                <option key={c.code} value={c.code}>
                  {c.code} — {c.schoolName} ({c.playsUsed}/{c.maxPlays} plays)
                </option>
              ))}
            </select>
          </div>

          {code && config && (
            <div style={{ background: 'var(--surface)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>{config.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'grid', gap: 4 }}>
                <div>📚 {config.segments?.length} segments</div>
                <div>💷 £{(config.startingCash ?? 0).toLocaleString()} starting cash</div>
                <div>🏫 {code.schoolName}</div>
                <div>🎮 {code.playsUsed}/{code.maxPlays} plays used · {code.maxUsers} max users</div>
                <div>📅 Valid {formatDate(code.startDate)} – {formatDate(code.endDate)}</div>
              </div>
            </div>
          )}

          <button className="btn btn-primary btn-lg btn-full" onClick={handleLaunch} disabled={!selectedCode}>
            🚀 Launch Session
          </button>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 10, textAlign: 'center' }}>
            Share the code <strong>{selectedCode || '…'}</strong> with your teacher to distribute to students.
          </p>
        </div>
      </div>
    </div>
  );
}

function SessionArchive({ uid }) {
  const [sessions, setSessions]   = React.useState([]);
  const [archives, setArchives]   = React.useState([]);
  const [loading, setLoading]     = React.useState(true);
  const [archiving, setArchiving] = React.useState(null); // sessionId being archived
  const [expanded, setExpanded]   = React.useState(null); // archive id expanded

  const load = async () => {
    setLoading(true);
    try {
      const [s, a] = await Promise.all([getAllSessions(uid), getArchivedSessions(uid)]);
      setSessions(s);
      setArchives(a);
    } finally { setLoading(false); }
  };

  React.useEffect(() => { load(); }, []);

  const handleArchive = async (session) => {
    if (!confirm(`Archive session for ${session.schoolName ?? session.gameCode}? This will delete the live data from Firebase.`)) return;
    setArchiving(session.id);
    try {
      await archiveSession(session.id, session.gameCode, uid);
      await load();
    } catch (err) {
      alert('Archive failed: ' + err.message);
    } finally { setArchiving(null); }
  };

  const fmtDate = (ts) => {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  };

  if (loading) return <div className="loading-page"><div className="spinner" /></div>;

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* ── Live sessions available to archive ── */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 4 }}>Live Sessions</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20 }}>
          Sessions currently in Firebase. Archive them to remove the data and save a summary log.
        </p>
        {sessions.length === 0 ? (
          <div className="card"><div className="card-body" style={{ textAlign:'center', color:'var(--text-muted)', padding:32 }}>
            No live sessions found — all clean! ✓
          </div></div>
        ) : (
          <div className="card" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr><th>School</th><th>Code</th><th>Config</th><th>Status</th><th>Players</th><th>Created</th><th></th></tr>
              </thead>
              <tbody>
                {sessions.map(s => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 600 }}>{s.schoolName ?? '—'}</td>
                    <td><code style={{ fontFamily:'monospace', fontWeight:700, color:'var(--orange)' }}>{s.gameCode?.replace(/^TENENT-/,'')}</code></td>
                    <td style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>{s.gameConfig?.name ?? s.gameConfigId ?? '—'}</td>
                    <td>
                      <span className={`badge badge-${s.status === 'ended' ? 'red' : s.status === 'trading' ? 'green' : 'navy'}`} style={{ fontSize:'0.72rem' }}>
                        {s.status ?? '—'}
                      </span>
                    </td>
                    <td style={{ fontWeight:600 }}>{s.playerCount ?? 0}</td>
                    <td style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>{fmtDate(s.createdAt)}</td>
                    <td>
                      <button
                        className="btn btn-sm"
                        style={{ background:'var(--orange)', color:'white', opacity: archiving === s.id ? 0.6 : 1 }}
                        disabled={archiving === s.id}
                        onClick={() => handleArchive(s)}
                      >
                        {archiving === s.id ? 'Archiving…' : '🗂️ Archive'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Archive log ── */}
      <div>
        <h2 style={{ marginBottom: 4 }}>Archive Log</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20 }}>
          Historical record of completed sessions. Click a row to see the player list.
        </p>
        {archives.length === 0 ? (
          <div className="card"><div className="card-body" style={{ textAlign:'center', color:'var(--text-muted)', padding:32 }}>
            No archived sessions yet.
          </div></div>
        ) : (
          <div className="card" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr><th>School / Code</th><th>Config</th><th>Players</th><th>Ended</th><th>Archived</th><th></th></tr>
              </thead>
              <tbody>
                {archives.map(a => (
                  <React.Fragment key={a.id}>
                    <tr
                      style={{ cursor:'pointer', background: expanded === a.id ? 'var(--surface-2)' : undefined }}
                      onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                    >
                      <td>
                        <div style={{ fontWeight:600 }}>{a.schoolName ?? a.gameCode}</div>
                        <code style={{ fontSize:'0.75rem', color:'var(--orange)', fontFamily:'monospace' }}>{a.gameCode?.replace(/^TENENT-/,'')}</code>
                      </td>
                      <td style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>{a.gameConfigName || a.gameConfigId || '—'}</td>
                      <td style={{ fontWeight:600 }}>{a.playerCount ?? a.players?.length ?? 0}</td>
                      <td style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>{fmtDate(a.endedAt)}</td>
                      <td style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>{fmtDate(a.archivedAt)}</td>
                      <td style={{ color:'var(--text-muted)', fontSize:'0.85rem' }}>{expanded === a.id ? '▲' : '▼'}</td>
                    </tr>
                    {expanded === a.id && (
                      <tr style={{ background:'var(--surface-2)' }}>
                        <td colSpan={6} style={{ padding:'12px 20px' }}>
                          <div style={{ fontSize:'0.85rem', fontWeight:600, marginBottom:8, color:'var(--navy)' }}>
                            Players ({a.players?.length ?? 0})
                          </div>
                          {(!a.players || a.players.length === 0) ? (
                            <span style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>No player data recorded.</span>
                          ) : (
                            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                              {a.players.map((p, i) => (
                                <span key={i} style={{ background:'white', border:'1px solid var(--border)', borderRadius:6, padding:'4px 10px', fontSize:'0.82rem' }}>
                                  {p.nickname}
                                </span>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="card">
      <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px' }}>
        <div style={{ fontSize: '1.8rem' }}>{icon}</div>
        <div>
          <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1 }}>{value}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 3 }}>{label}</div>
        </div>
      </div>
    </div>
  );
}
