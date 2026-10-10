import React, { useState } from 'react';
import { getGameCode } from '../../utils/firestore.js';
import { canJoinGame } from '../../utils/gameCode.js';

export default function StudentJoin({ onJoined, onTeacherLogin, onAdminLogin }) {
  const [code, setCode]                 = useState('');
  const [nickname, setNickname]         = useState('');
  const [step, setStep]                 = useState('code');
  const [gameCodeData, setGameCodeData] = useState(null);
  const [error, setError]               = useState('');
  const [loading, setLoading]           = useState(false);

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    const suffix = code.trim().toUpperCase().replace(/^TENENT-/, '');
    const upper = `TENENT-${suffix}`;
    try {
      const data = await getGameCode(upper);
      if (!data) { setError('Game code not found. Please check and try again.'); return; }
      const { allowed, reason } = canJoinGame(data);
      if (!allowed) { setError(reason); return; }
      setGameCodeData(data);
      setStep('nickname');
    } catch (err) {
      setError('Could not verify code: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNicknameSubmit = async (e) => {
    e.preventDefault();
    const name = nickname.trim();
    if (!name) { setError('Please enter a nickname.'); return; }
    if (name.length < 2) { setError('Nickname must be at least 2 characters.'); return; }
    if (name.length > 20) { setError('Nickname must be 20 characters or fewer.'); return; }
    // Block characters that break Firestore doc IDs or look broken on screen
    if (/[\/\\.#$\[\]]/.test(name)) { setError('Nickname cannot contain / \\ . # $ [ ]'); return; }
    onJoined(gameCodeData, name);
  };

  // Display name: use gameName from Firestore if available, otherwise generic
  const gameName = gameCodeData?.gameName ?? null;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 55%, #2d2a6e 100%)',
    }}>
      {/* Header */}
      <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white' }}>
          <div style={{ background: 'var(--orange)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>T</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>TENENT</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.65, letterSpacing: '0.04em' }}>FINANCIAL EDUCATION</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onTeacherLogin} style={{ background: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.5)', borderRadius: 6, padding: '6px 14px', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', fontSize: '0.8rem' }}>
            🎓 Teacher
          </button>
          <button onClick={onAdminLogin} style={{ background: 'rgba(255,113,27,0.2)', border: '1px solid rgba(255,113,27,0.4)', borderRadius: 6, padding: '6px 14px', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', fontSize: '0.8rem' }}>
            🔑 Admin
          </button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 440 }}>

          {step === 'code' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: 32, color: 'white' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white', marginBottom: 8 }}>
                  Trading Challenge
                </h1>
                <p style={{ opacity: 0.75, fontSize: '1rem' }}>
                  Enter your game code to join the session
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
                  <form onSubmit={handleCodeSubmit}>
                    <div className="form-group">
                      <label className="form-label">Game Code</label>
                      <input
                        className="form-input"
                        style={{ textTransform: 'uppercase', fontSize: '1.4rem', letterSpacing: '0.15em', textAlign: 'center' }}
                        type="text"
                        value={code}
                        onChange={e => {
                          const raw = e.target.value.toUpperCase().replace(/^TENENT-/, '').replace(/[^A-Z0-9]/g, '');
                          setCode(raw.slice(0, 4));
                        }}
                        placeholder="XXXX"
                        maxLength={4}
                        autoFocus required
                      />
                      <span className="form-hint">4-letter code from your teacher</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                      {loading ? 'Checking…' : 'Join Game →'}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}

          {step === 'nickname' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: 32, color: 'white' }}>
                {/* Game name pill — shown once code is verified */}
                {gameName && (
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(255,113,27,0.18)',
                    border: '1px solid rgba(255,113,27,0.4)',
                    borderRadius: 6,
                    padding: '4px 14px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'var(--orange-light, #ffb07a)',
                    marginBottom: 14,
                    textTransform: 'uppercase',
                  }}>
                    {gameName}
                  </div>
                )}
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 16px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.08em', marginBottom: 16 }}>
                  {gameCodeData?.code?.replace(/^TENENT-/, '')}
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'white', marginBottom: 8 }}>
                  Choose your trader name
                </h1>
                <p style={{ opacity: 0.7 }}>This is how you'll appear on the leaderboard</p>
              </div>

              <div className="card">
                <div className="card-body">
                  {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
                  <form onSubmit={handleNicknameSubmit}>
                    <div className="form-group">
                      <label className="form-label">Your Nickname</label>
                      <input
                        className="form-input"
                        style={{ fontSize: '1.1rem', textAlign: 'center' }}
                        type="text"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        placeholder="e.g. TradingTiger"
                        maxLength={20}
                        autoFocus required
                      />
                      <span className="form-hint">2–20 characters</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full btn-lg">
                      Let's Trade! 🚀
                    </button>
                  </form>
                  <button
                    className="btn btn-ghost btn-full"
                    style={{ marginTop: 10, color: 'var(--text-muted)' }}
                    onClick={() => { setStep('code'); setError(''); }}
                  >
                    ← Change code
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
