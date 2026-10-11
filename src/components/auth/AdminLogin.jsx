import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function AdminLogin({ onBack }) {
  const { loginAdmin } = useAuth();
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]           = useState('');
  const [resetMsg, setResetMsg]     = useState('');
  const [loading, setLoading]       = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setResetMsg('');
    try {
      await loginAdmin(email, password);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { setError('Enter your email address above first.'); return; }
    setError(''); setResetMsg('');
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMsg('Password reset email sent — check your inbox.');
    } catch (err) {
      setError('Could not send reset email. Check the address and try again.');
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

            {error    && <div className="alert alert-error"   style={{ marginBottom: 16 }}>{error}</div>}
            {resetMsg && <div className="alert alert-success" style={{ marginBottom: 16 }}>{resetMsg}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  className="form-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required autoFocus
                  placeholder="admin@tenent.co.uk"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    className="form-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ paddingRight: 48 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(s => !s)}
                    style={{
                      position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'rgba(255,255,255,0.4)', fontSize: '1rem', padding: 0, lineHeight: 1,
                    }}
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', textDecoration: 'underline' }}
              >
                Forgot password?
              </button>
            </div>
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
