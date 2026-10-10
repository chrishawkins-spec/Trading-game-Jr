import { useState, useEffect } from 'react';
import { getGameCode } from '../../utils/firestore';
import SessionController from './SessionController';

// Convert a Firestore Timestamp, Date, or date string to a display string
function formatDate(val) {
  if (!val) return null;
  // Firestore Timestamp object
  if (val && typeof val === 'object' && typeof val.toDate === 'function') {
    return val.toDate().toLocaleDateString('en-GB');
  }
  // Plain JS Date
  if (val instanceof Date) return val.toLocaleDateString('en-GB');
  // String (e.g. "2024-09-01")
  return String(val);
}

export default function TeacherDashboard({ teacherEmail, gameCode, gameConfigId, adminUid, onLogout }) {
  const [codeDoc, setCodeDoc]     = useState(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const doc = await getGameCode(gameCode);
        if (!doc) {
          setError(`Game code "${gameCode}" not found in database.`);
        } else {
          setCodeDoc(doc);
        }
      } catch (err) {
        console.error('[TeacherDashboard] Failed to load game code:', err);
        setError(err.message || 'Failed to load game code.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [gameCode]);

  if (launching) {
    return (
      <SessionController
        gameCode={gameCode}
        gameConfigId={gameConfigId || codeDoc?.gameConfigId}
        adminUid={adminUid}
        onClose={() => setLaunching(false)}
      />
    );
  }

  if (loading) {
    return (
      <div className="loading-page">
        <div className="spinner" />
        <span>Loading dashboard…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-page">
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚠️</div>
          <h3 style={{ color: 'var(--red)', marginBottom: 12 }}>Could not load dashboard</h3>
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: 8,
            padding: '12px 16px',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: '#991b1b',
            textAlign: 'left'
          }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  const maxPlays      = codeDoc.maxPlays ?? null;
  const playsUsed     = codeDoc.playsUsed ?? 0;
  const playsLeft     = maxPlays !== null ? maxPlays - playsUsed : null;
  const isExhausted   = maxPlays !== null && playsUsed >= maxPlays;

  const startDate = formatDate(codeDoc.startDate);
  const endDate   = formatDate(codeDoc.endDate);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '2rem' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🎓</span>
              <h1 style={{ margin: 0, fontSize: '1.6rem' }}>Teacher Dashboard</h1>
            </div>
            <p style={{ color: 'var(--muted)', margin: 0 }}>{teacherEmail}</p>
          </div>
          {onLogout && (
            <button className="btn btn-outline" style={{ fontSize: '0.85rem' }} onClick={onLogout}>
              Sign out
            </button>
          )}
        </div>

        {/* Game code info card */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Game Code</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--primary)' }}>{gameCode}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>School</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{codeDoc.school || '—'}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Plays remaining</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {maxPlays !== null ? `${playsLeft} of ${maxPlays}` : '—'}
              </div>
            </div>
          </div>

          {(startDate || endDate) && (
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--muted)' }}>
              Valid: {startDate ?? '—'} → {endDate ?? '—'}
            </div>
          )}
        </div>

        {/* Launch button */}
        <button
          className="btn btn-primary"
          style={{ width: '100%', fontSize: '1.1rem', padding: '0.9rem' }}
          onClick={() => setLaunching(true)}
          disabled={isExhausted}
        >
          🚀 Launch Session
        </button>

        {isExhausted && (
          <p style={{ textAlign: 'center', color: 'var(--red)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            All plays have been used for this code. Contact your Tenent administrator.
          </p>
        )}

      </div>
    </div>
  );
}
