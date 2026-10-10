import { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebase';
import { getGameCode } from '../../utils/firestore';

export default function TeacherLogin({ onVerified, onBack }) {
  const [email, setEmail]           = useState('');
  const [gameCode, setGameCode]     = useState('');
  const [error, setError]           = useState('');
  const [loading, setLoading]       = useState(false);
  const [gameName, setGameName]     = useState(null); // populated after a successful lookup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Sign in anonymously FIRST so Firestore rules allow the read
      await signInAnonymously(auth);

      // Students type only the 4-letter suffix; reconstruct full code for Firestore
      const suffix       = gameCode.trim().toUpperCase().replace(/^TENENT-/, '');
      const trimmedCode  = `TENENT-${suffix}`;
      const trimmedEmail = email.trim().toLowerCase();

      const codeDoc = await getGameCode(trimmedCode);

      if (!codeDoc) {
        setError('Game code not found. Please check with your administrator.');
        setLoading(false);
        return;
      }

      if (!codeDoc.teacherEmail) {
        setError('No teacher email configured for this code. Please ask your Tenent administrator to set one.');
        setLoading(false);
        return;
      }

      if (codeDoc.teacherEmail.trim().toLowerCase() !== trimmedEmail) {
        setError('Email address does not match this game code.');
        setLoading(false);
        return;
      }

      if (codeDoc.disabled) {
        setError('This game code has been disabled.');
        setLoading(false);
        return;
      }

      const now = new Date();
      if (codeDoc.startDate && now < new Date(codeDoc.startDate)) {
        setError('This game code is not yet active.');
        setLoading(false);
        return;
      }
      if (codeDoc.endDate && now > new Date(codeDoc.endDate)) {
        setError('This game code has expired.');
        setLoading(false);
        return;
      }

      // All checks passed — hand back to App.jsx
      onVerified({
        email:        trimmedEmail,
        gameCode:     trimmedCode,
        gameConfigId: codeDoc.gameConfigId,
        gameName:     codeDoc.gameName ?? null,
      });

    } catch (err) {
      console.error('[TeacherLogin] error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  // Live game-name lookup: fetch gameName as soon as 4 chars are entered
  // so the page title updates before they hit submit.
  const handleCodeChange = async (raw) => {
    const clean = raw.toUpperCase().replace(/^TENENT-/, '').replace(/[^A-Z0-9]/g, '').slice(0, 4);
    setGameCode(clean);
    if (clean.length === 4) {
      try {
        const doc = await getGameCode(`TENENT-${clean}`);
        setGameName(doc?.gameName ?? null);
      } catch {
        setGameName(null);
      }
    } else {
      setGameName(null);
    }
  };

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
        {onBack && (
          <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '6px 14px', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', fontSize: '0.8rem' }}>
            ← Back
          </button>
        )}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 440 }}>

          <div style={{ textAlign: 'center', marginBottom: 32, color: 'white' }}>
            {/* Game name pill — appears once a valid 4-char code is typed */}
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
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white', marginBottom: 8 }}>
              Teacher Login
            </h1>
            <p style={{ opacity: 0.75, fontSize: '1rem' }}>
              Enter your email and 4-letter game code
            </p>
          </div>

          <div className="card">
            <div className="card-body">
              {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@school.ac.uk"
                    autoFocus required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Game Code</label>
                  <input
                    className="form-input"
                    type="text"
                    value={gameCode}
                    onChange={e => handleCodeChange(e.target.value)}
                    placeholder="XXXX"
                    maxLength={4}
                    required
                    style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '1.4rem', textAlign: 'center' }}
                  />
                  <span className="form-hint">4-letter code from your Tenent administrator</span>
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading} style={{ marginTop: 4 }}>
                  {loading ? 'Verifying…' : 'Access Teacher Dashboard →'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
