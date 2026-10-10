import React, { useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import TeacherDashboard from './components/admin/TeacherDashboard.jsx';
import AdminLogin from './components/auth/AdminLogin.jsx';
import TeacherLogin from './components/auth/TeacherLogin.jsx';
import StudentJoin from './components/auth/StudentJoin.jsx';
import GameScreen from './components/game/GameScreen.jsx';
import './styles/global.css';

function AppInner() {
  const { user, roleLoading, isSuperadmin, loginAnonymous } = useAuth();

  // Screen state — one of: 'home' | 'adminLogin' | 'teacherLogin'
  const [screen, setScreen] = useState('home');

  // Teacher session state — set after successful TeacherLogin verification
  // { email, gameCode, gameConfigId }
  const [teacherSession, setTeacherSession] = useState(null);

  // Student game state
  const [gameSession, setGameSession] = useState(null);
  // { gameCodeData, nickname }

  // ── Firebase Auth still loading ───────────────────────────────────────────
  if (user === undefined || roleLoading) {
    return (
      <div className="loading-page">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ background: 'var(--orange)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>T</div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--navy)' }}>TENENT</span>
        </div>
        <div className="spinner" />
      </div>
    );
  }

  // ── Superadmin via Firebase Auth ──────────────────────────────────────────
  if (user && !user.isAnonymous && isSuperadmin) {
    return <AdminDashboard />;
  }

  // ── Admin login screen ────────────────────────────────────────────────────
  if (screen === 'adminLogin') {
    return <AdminLogin onBack={() => setScreen('home')} />;
  }

  // ── Teacher login screen ──────────────────────────────────────────────────
  if (screen === 'teacherLogin') {
    return (
      <TeacherLogin
        onBack={() => setScreen('home')}
        onVerified={async (session) => {
          // TeacherLogin already signed in anonymously — just store the session
          setTeacherSession(session); // { email, gameCode, gameConfigId }
          setScreen('home');
        }}
      />
    );
  }

  // ── Teacher dashboard (after code+email verified) ─────────────────────────
  if (teacherSession) {
    return (
      <TeacherDashboard
        teacherEmail={teacherSession.email}
        gameCode={teacherSession.gameCode}
        gameConfigId={teacherSession.gameConfigId}
        adminUid={user?.uid}
        onLogout={() => setTeacherSession(null)}
      />
    );
  }

  // ── Student in active game ────────────────────────────────────────────────
  if (gameSession && user) {
    return (
      <GameScreen
        gameCodeData={gameSession.gameCodeData}
        nickname={gameSession.nickname}
        playerId={user.uid}
      />
    );
  }

  // ── Student join screen (home) ────────────────────────────────────────────
  const handleStudentJoined = async (gameCodeData, nickname) => {
    try {
      if (!user || !user.isAnonymous) await loginAnonymous();
      setGameSession({ gameCodeData, nickname });
    } catch (err) {
      alert('Failed to start game: ' + err.message);
    }
  };

  return (
    <StudentJoin
      onJoined={handleStudentJoined}
      onTeacherLogin={() => setScreen('teacherLogin')}
      onAdminLogin={() => setScreen('adminLogin')}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
