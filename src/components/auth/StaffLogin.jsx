import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function StaffLogin({ onBack }) {
  const { loginAdmin } = useAuth();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await loginAdmin(email, password);
      // App.jsx will detect role and route to correct dashboard automatically
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 55%, #2d2a6e 100%)',
    }}>
      {/* Header — matches StudentJoin */}
      <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white' }}>
          <div style={{ background: 'var(--orange)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>T</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>TENENT</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.65, letterSpacing: '0.04em' }}>FINANCIAL EDUCATION</div>
          </div>
        </div>
        <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '6px 14px', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', fontSize: '0.8rem' }}>
          ← Student login
        </button>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 440 }}>

          {/* Title block */}
          <div style={{ textAlign: 'center', marginBottom: 32, color: 'white' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white', marginBottom: 8 }}>
              Staff Portal
            </h1>
            <p style={{ opacity: 0.75, fontSize: '1rem' }}>
              Sign in to manage sessions and configurations
            </p>
            {/* Role pills */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
              <RolePill icon="🎓" label="Teacher" desc="Run live sessions" />
              <RolePill icon="🔑" label="Admin" desc="Manage codes & configs" />
            </div>
          </div>

          {/* Card */}
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
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                  {loading ? 'Signing in…' : 'Sign in →'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function RolePill({ icon, label, desc }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 10, padding: '8px 14px',
      textAlign: 'center', flex: 1,
    }}>
      <div style={{ fontSize: '1.1rem', marginBottom: 3 }}>{icon}</div>
      <div style={{ fontWeight: 700, color: 'white', fontSize: '0.85rem' }}>{label}</div>
      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{desc}</div>
    </div>
  );
}
