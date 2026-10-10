import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function AdminLogin({ onBack }) {
  const { loginAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await loginAdmin(email, password);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
      padding: 24,
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            color: 'white', textDecoration: 'none',
          }}>
            <div style={{
              background: 'var(--orange)', borderRadius: 10, width: 48, height: 48,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'white',
            }}>T</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem' }}>TENENT</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.7, letterSpacing: '0.05em' }}>FINANCIAL EDUCATION</div>
            </div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8, fontSize: '0.9rem' }}>
            Superadmin Portal
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 style={{ marginBottom: 20, fontSize: '1.2rem' }}>Sign in</h2>

            {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  className="form-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required autoFocus
                  placeholder="admin@school.edu"
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
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.6)' }} onClick={onBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
