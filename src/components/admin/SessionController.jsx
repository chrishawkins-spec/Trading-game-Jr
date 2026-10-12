import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  createSession, updateSession, subscribeSession,
  getGameConfig, subscribePlayers, resetAllPlayers,
  recordSegmentSnapshots, cleanupSessionPlayers,
} from '../../utils/firestore.js';
import {
  broadcastPrices, broadcastStatus, broadcastSegment,
  broadcastTicker, broadcastCountdown, cleanupSession,
  subscribeLiveSegment,
} from '../../utils/rtdb.js';
import {
  generateSegmentPrices, applyNewsShock, getInitialPrices, ASSETS, DIRECTIONS, VOLATILITIES,
} from '../../utils/priceEngine.js';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function SessionController({ gameCode, gameConfigId, onClose, adminUid: adminUidProp }) {
  const { user } = useAuth();
  const adminUid = adminUidProp ?? user?.uid ?? 'teacher';
  const [sessionId, setSessionId]     = useState(null);
  const [session, setSession]         = useState(null);
  const [players, setPlayers]         = useState([]);
  const [gameConfig, setGameConfig]   = useState(null);
  const [prices, setPrices]           = useState({});
  const [prevPrices, setPrevPrices]   = useState({});
  const [startPrices, setStartPrices] = useState({});
  const [segTimer, setSegTimer]       = useState(0);
  const [trading, setTrading]         = useState(false);
  const [paused, setPaused]           = useState(false);
  const [confirmEnd, setConfirmEnd]   = useState(false);
  const [error, setError]             = useState('');
  const [liveSegIdx, setLiveSegIdx]   = useState(-1);

  const timerRef          = useRef(null);
  const tickRef           = useRef(null);
  const pausedRef         = useRef(false);
  const pricesRef         = useRef({});
  const tickIdxRef        = useRef(0);
  const ticksRef          = useRef([]);
  const remainingRef      = useRef(0);
  const tickerHistoryRef  = useRef([]);

  // ── Refresh / navigation trap ─────────────────────────────────────────────
  useEffect(() => {
    if (!sessionId) return;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = 'Refreshing will restart the game session. Are you sure?';
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [sessionId]);

  // ── Init ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      setError('');
      console.log('[SC] Init start — gameCode:', gameCode, 'gameConfigId:', gameConfigId, 'adminUid:', adminUid);

      console.log('[SC] Loading config...');
      const config = await getGameConfig(gameConfigId);
      if (!config) throw new Error('Game config not found: ' + gameConfigId);
      console.log('[SC] Config loaded:', config.name);
      setGameConfig(config);

      const ip = getInitialPrices();
      setPrices(ip);
      setStartPrices(ip);
      pricesRef.current = ip;

      console.log('[SC] Creating session...');
      const sid = await createSession(gameCode, config, adminUid);
      console.log('[SC] Session created:', sid);
      setSessionId(sid);

      console.log('[SC] Broadcasting initial state...');
      await broadcastPrices(sid, ip);
      await broadcastStatus(sid, 'lobby');
      await broadcastCountdown(sid, null);
      console.log('[SC] Init complete.');
    };
    init().catch(e => {
      console.error('[SC] Init error:', e);
      setError(e.code ? e.code + ': ' + e.message : e.message);
    });
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    const u1 = subscribeSession(sessionId, setSession);
    const u2 = subscribePlayers(sessionId, setPlayers);
    const u3 = subscribeLiveSegment(sessionId, seg => {
      if (seg?.index != null) setLiveSegIdx(seg.index);
    });
    return () => { u1(); u2(); u3(); };
  }, [sessionId]);

  const clearTimers = () => {
    clearInterval(timerRef.current);
    clearInterval(tickRef.current);
  };

  // ── Launch: broadcast 3-2-1 then start ticking ───────────────────────────
  const launchSegment = useCallback(async (segIdx, startingPrices) => {
    if (!gameConfig || !sessionId) return;
    const seg     = gameConfig.segments[segIdx];
    const steps   = seg.steps ?? Math.max(2, Math.round((seg.segmentSeconds * 1000) / seg.msPerTick));
    const msPerTick = seg.msPerTick ?? 1000;
    const segSecs = seg.segmentSeconds ?? (steps * msPerTick / 1000);

    await broadcastStatus(sessionId, 'countdown');
    for (let c = 3; c >= 1; c--) {
      await broadcastCountdown(sessionId, c);
      await new Promise(r => setTimeout(r, 1000));
    }
    await broadcastCountdown(sessionId, 0);
    await new Promise(r => setTimeout(r, 600));
    await broadcastCountdown(sessionId, null);

    const shocked = applyNewsShock(startingPrices, seg.directions ?? {}, seg.volatilities ?? {});
    const ticks   = generateSegmentPrices(shocked, seg, steps);

    pricesRef.current    = shocked;
    ticksRef.current     = ticks;
    tickIdxRef.current   = 0;
    remainingRef.current = segSecs;

    setPrices(shocked);
    setPrevPrices(startingPrices);
    setTrading(true);
    setPaused(false);
    pausedRef.current = false;
    setSegTimer(segSecs);

    await updateSession(sessionId, { status: 'trading', currentPrices: shocked });
    await broadcastPrices(sessionId, shocked);
    await broadcastStatus(sessionId, 'trading');

    tickRef.current = setInterval(async () => {
      if (pausedRef.current) return;
      const idx = tickIdxRef.current;
      if (idx >= ticksRef.current.length) { clearInterval(tickRef.current); return; }
      const np = ticksRef.current[idx].prices;
      setPrevPrices(pricesRef.current);
      pricesRef.current = np;
      setPrices(np);
      await broadcastPrices(sessionId, np);
      tickerHistoryRef.current.push({ step: tickerHistoryRef.current.length + 1, prices: np });
      await broadcastTicker(sessionId, tickerHistoryRef.current);
      tickIdxRef.current += 1;
    }, msPerTick);

    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      remainingRef.current -= 1;
      setSegTimer(remainingRef.current);
      if (remainingRef.current <= 0) {
        // Stop both timers together so no extra price ticks leak into the next segment
        clearInterval(timerRef.current);
        clearInterval(tickRef.current);
        setTrading(false);
      }
    }, 1000);

  }, [gameConfig, sessionId]);

  // ── showNewsForSegment ────────────────────────────────────────────────────
  const showNewsForSegment = useCallback(async (segIdx) => {
    if (!gameConfig || !sessionId) return;
    const seg        = gameConfig.segments[segIdx];
    const prevSeg    = segIdx > 0 ? gameConfig.segments[segIdx - 1] : null;
    const prevSegIdx = segIdx - 1;
    const isPracticeEnd = prevSeg?.practice === true;

    clearTimers();
    setTrading(false);
    setPaused(false);
    pausedRef.current = false;

    // Snapshot every player's portfolio at the end of the segment just finished
    if (prevSeg) {
      await recordSegmentSnapshots(
        sessionId, prevSegIdx, prevSeg.label ?? `Phase ${prevSegIdx + 1}`, pricesRef.current
      ).catch(console.error); // non-blocking — don't stall the game if this fails
    }

    if (isPracticeEnd) {
      const startingCash = gameConfig.startingCash ?? 20000;
      await resetAllPlayers(sessionId, startingCash);
      tickerHistoryRef.current = [];
    }

    await updateSession(sessionId, { status: 'news', currentSegmentIndex: segIdx });
    await broadcastStatus(sessionId, 'news');
    await broadcastSegment(sessionId, segIdx, { ...(seg.news ?? {}), practiceEnd: isPracticeEnd });
  }, [gameConfig, sessionId]);

  // ── handleOpenPreMarket ───────────────────────────────────────────────────
  const handleOpenPreMarket = async () => {
    if (!sessionId) return;
    const nextIdx = (session?.currentSegmentIndex ?? -1) < 0 ? 0 : session.currentSegmentIndex;
    await updateSession(sessionId, { status: 'pre_market', currentSegmentIndex: nextIdx });
    await broadcastStatus(sessionId, 'pre_market');
  };

  // ── handleNext: "▶ Open Markets" ─────────────────────────────────────────
  const handleNext = async () => {
    if (!session || !gameConfig) return;
    const segIdx = session.currentSegmentIndex ?? 0;
    const currentPrices = { ...pricesRef.current };
    await launchSegment(segIdx, currentPrices);
  };

  // ── Auto show news when timer hits 0; auto-end after last segment ────────
  useEffect(() => {
    if (!trading && session?.status === 'trading' && sessionId && gameConfig) {
      const segIdx  = session.currentSegmentIndex ?? 0;
      const nextIdx = segIdx + 1;
      if (nextIdx < gameConfig.segments.length) {
        showNewsForSegment(nextIdx);
      } else {
        handleEnd();
      }
    }
  }, [trading]);

  // ── Pause / Resume ────────────────────────────────────────────────────────
  const handlePause = async () => {
    pausedRef.current = true;
    setPaused(true);
    await updateSession(sessionId, { status: 'paused' });
    await broadcastStatus(sessionId, 'paused');
  };

  const handleResume = async () => {
    pausedRef.current = false;
    setPaused(false);
    await updateSession(sessionId, { status: 'trading' });
    await broadcastStatus(sessionId, 'trading');
  };

  // ── End ───────────────────────────────────────────────────────────────────
  const handleEnd = async () => {
    clearTimers();
    setTrading(false); setPaused(false); setConfirmEnd(false);

    // Snapshot the final segment before ending
    const lastSegIdx = session?.currentSegmentIndex ?? 0;
    const lastSeg    = gameConfig?.segments?.[lastSegIdx];
    if (lastSeg) {
      await recordSegmentSnapshots(
        sessionId, lastSegIdx, lastSeg.label ?? `Phase ${lastSegIdx + 1}`, pricesRef.current
      ).catch(console.error);
    }

    await updateSession(sessionId, { status: 'ended', endedAt: new Date() });
    await broadcastStatus(sessionId, 'ended');
    await broadcastSegment(sessionId, -1, null);
    await broadcastCountdown(sessionId, null);
    // Only clear RTDB now — keep Firestore players alive so leaderboard stays visible.
    // Players are deleted when the teacher clicks Close (handleClose).
    setTimeout(() => cleanupSession(sessionId), 3000);
  };

  // ── Force leaderboard (teacher override — bypasses confirmedEnd wait) ─────
  const handleForceLeaderboard = async () => {
    if (!sessionId) return;
    await broadcastStatus(sessionId, 'leaderboard');
  };

  const handleClose = async () => {
    clearTimers();
    if (sessionId) {
      await cleanupSession(sessionId);
      await cleanupSessionPlayers(sessionId, gameCode);
    }
    onClose();
  };

  // ── Render ────────────────────────────────────────────────────────────────
  if (error && !sessionId) {
    return (
      <div className="loading-page">
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚠️</div>
          <h3 style={{ color: 'var(--red)', marginBottom: 12 }}>Failed to set up session</h3>
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 20, fontFamily: 'monospace', fontSize: '0.85rem', color: '#991b1b', textAlign: 'left' }}>
            {error}
          </div>
          <button className="btn btn-outline" onClick={onClose}>← Go back</button>
        </div>
      </div>
    );
  }

  if (!sessionId || !gameConfig) {
    return <div className="loading-page"><div className="spinner" /><span>Setting up session…</span></div>;
  }

  const status        = session?.status ?? 'lobby';
  const segIdx        = session?.currentSegmentIndex ?? -1;
  const currentSeg    = segIdx >= 0 ? gameConfig.segments[segIdx] : null;
  const isLastSeg     = segIdx >= gameConfig.segments.length - 1;
  const tradingActive = trading && !paused;

  const readyCount  = players.filter(p => p.readyForSegment === liveSegIdx).length;
  const totalCount  = players.length;

  const sortedPlayers = [...players].sort((a, b) => calcValue(b, prices) - calcValue(a, prices));
  const timerColor    = segTimer <= 10 ? 'var(--red)' : segTimer <= 20 ? 'var(--orange)' : 'var(--navy)';
  const startingCash  = gameConfig.startingCash ?? 20000;

  return (
    <div style={{ padding: 24, position: 'relative' }}>

      {/* ── End confirmation modal ── */}
      {confirmEnd && (
        <div style={{ position:'fixed', inset:0, background:'rgba(20,19,48,0.75)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, padding:24 }}>
          <div style={{ background:'white', borderRadius:16, padding:36, maxWidth:440, width:'100%', boxShadow:'0 20px 60px rgba(0,0,0,0.35)', textAlign:'center' }}>
            <div style={{ fontSize:'3rem', marginBottom:12 }}>⏹</div>
            <h2 style={{ marginBottom:12 }}>Close the markets early?</h2>
            <p style={{ color:'var(--text-muted)', marginBottom:28, lineHeight:1.6 }}>
              This will end trading immediately for all {players.length} player{players.length !== 1 ? 's' : ''} and move to the results screen. This cannot be undone.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
              <button className="btn btn-outline btn-lg" onClick={() => setConfirmEnd(false)}>Cancel — keep trading</button>
              <button className="btn btn-danger btn-lg" onClick={handleEnd}>Yes, close markets</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24, gap:16, flexWrap:'wrap' }}>
        <div>
          <h2 style={{ marginBottom:4 }}>
            Live Session — <code style={{ fontFamily:'monospace', color:'var(--orange)', fontSize:'1rem' }}>{gameCode.replace(/^TENENT-/, '')}</code>
          </h2>
          <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
            <StatusBadge status={status} />
            {currentSeg && <span style={{ color:'var(--text-muted)', fontSize:'0.88rem' }}>{currentSeg.label}</span>}
            {(trading || paused) && segTimer > 0 && (
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.4rem', color: paused ? 'var(--orange)' : timerColor }}>
                {segTimer}s{paused ? ' (paused)' : ''}
              </span>
            )}
          </div>
        </div>

        <div style={{ display:'flex', gap:10, flexWrap:'wrap', alignItems:'center' }}>
          {status === 'lobby' && (
            <button className="btn btn-primary btn-lg" onClick={handleOpenPreMarket}>📋 Open Pre-Market</button>
          )}
          {status === 'pre_market' && !trading && (
            <button className="btn btn-primary btn-lg" onClick={handleNext}>▶ Open Markets</button>
          )}
          {status === 'news' && (
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <ReadyPill ready={readyCount} total={totalCount} />
              <button className="btn btn-primary btn-lg" onClick={handleOpenPreMarket}>📋 Open Pre-Market →</button>
            </div>
          )}
          {tradingActive && (
            <button className="btn btn-lg" style={{ background:'var(--orange)', color:'white' }} onClick={handlePause}>⏸ Pause</button>
          )}
          {paused && (
            <button className="btn btn-primary btn-lg" onClick={handleResume}>▶ Resume</button>
          )}
          {(tradingActive || paused) && isLastSeg && (
            <button className="btn btn-danger btn-lg" onClick={() => setConfirmEnd(true)} disabled={tradingActive}>
              Close Markets ⏹
            </button>
          )}
          {/* ── Force leaderboard: appears after game ends so teacher can ── */}
          {/* ── skip the "all must confirm" wait if a student dropped off ── */}
          {status === 'ended' && (
            <button
              className="btn btn-lg"
              style={{ background:'#fbbf24', color:'#1c1a10', fontWeight:700 }}
              onClick={handleForceLeaderboard}
            >
              🏆 Show Leaderboard
            </button>
          )}
          {status === 'leaderboard' && (
            <span className="badge badge-yellow" style={{ fontSize:'1rem', padding:'8px 16px' }}>Leaderboard Live</span>
          )}
          <button className="btn btn-outline btn-sm" onClick={handleClose}>✕ Close</button>
        </div>
      </div>

      {error && <div className="alert alert-error" style={{ marginBottom:16 }}>{error}</div>}

      {/* ── Paused banner ── */}
      {paused && (
        <div style={{ background:'#fffbeb', border:'2px solid var(--orange)', borderRadius:10, padding:'14px 20px', marginBottom:20, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontWeight:600, color:'#92400e' }}>⏸ Trading is paused</span>
          <button className="btn btn-primary" onClick={handleResume}>▶ Resume trading</button>
        </div>
      )}

      {/* ── Ended banner with instructions ── */}
      {status === 'ended' && (
        <div style={{ background:'#fef3c7', border:'2px solid #fbbf24', borderRadius:10, padding:'14px 20px', marginBottom:20, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
          <div>
            <div style={{ fontWeight:700, color:'#92400e', marginBottom:2 }}>⏳ Waiting for students to confirm…</div>
            <div style={{ fontSize:'0.82rem', color:'#78350f' }}>
              {players.filter(p => p.confirmedEnd).length} / {players.length} confirmed.
              The leaderboard will appear automatically once all confirm, or you can force it now.
            </div>
          </div>
          <button
            className="btn btn-lg"
            style={{ background:'#fbbf24', color:'#1c1a10', fontWeight:700, whiteSpace:'nowrap', flexShrink:0 }}
            onClick={handleForceLeaderboard}
          >
            🏆 Show Leaderboard Now
          </button>
        </div>
      )}

      {/* ── News break panel ── */}
      {(status === 'news' || status === 'pre_market') && currentSeg?.news?.headline && (
        <div style={{ background:'linear-gradient(135deg, var(--navy-dark), var(--navy))', borderRadius:12, padding:'24px 28px', marginBottom:24, color:'white' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14, flexWrap:'wrap' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--orange)', borderRadius:6, padding:'4px 12px', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.06em' }}>
              📰 BREAKING NEWS
            </div>
            {status === 'pre_market' && (
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#1e3a5f', border:'1px solid rgba(255,255,255,0.2)', borderRadius:6, padding:'4px 12px', fontSize:'0.72rem', fontWeight:700 }}>
                🕐 PRE-MARKET OPEN — students adjusting portfolios
              </div>
            )}
          </div>
          <h2 style={{ color:'white', fontSize:'1.4rem', marginBottom:10 }}>{currentSeg.news.headline}</h2>
          {currentSeg.news.body && <p style={{ opacity:0.8, lineHeight:1.7, maxWidth:680 }}>{currentSeg.news.body}</p>}
          {status === 'news' && (
            <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:16 }}>
              <ReadyPill ready={readyCount} total={totalCount} />
              <span style={{ opacity:0.55, fontSize:'0.82rem' }}>Students click Ready on their screen when done reading</span>
            </div>
          )}
          {status === 'pre_market' && (
            <div style={{ marginTop:16 }}>
              <span style={{ opacity:0.65, fontSize:'0.82rem' }}>Prices are frozen. Students can buy and sell. Click <strong>Open Markets</strong> when ready.</span>
            </div>
          )}
        </div>
      )}

      {/* ── Price board + Leaderboard ── */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginBottom:24 }}>

        {/* Price board */}
        <div className="card">
          <div className="card-header"><h3 style={{ fontSize:'1rem' }}>Current Prices</h3></div>
          <div style={{ padding:0 }}>
            <table>
              <thead>
                <tr><th>Asset</th><th>Price</th><th>P&amp;L</th><th>Direction</th><th>Volatility</th></tr>
              </thead>
              <tbody>
                {ASSETS.map(asset => {
                  const price    = prices[asset.id] ?? asset.startPrice;
                  const prev     = prevPrices[asset.id] ?? price;
                  const start    = startPrices[asset.id] ?? asset.startPrice;
                  const dirKey   = currentSeg?.directions?.[asset.id];
                  const volKey   = currentSeg?.volatilities?.[asset.id];
                  const tickDiff = price - prev;
                  const tickDir  = tickDiff > 0 ? 'up' : tickDiff < 0 ? 'down' : 'flat';
                  const pnlPct   = start > 0 ? ((price - start) / start) * 100 : 0;
                  const pnlColor = pnlPct > 0 ? 'var(--green)' : pnlPct < 0 ? 'var(--red)' : 'var(--text-muted)';
                  return (
                    <tr key={asset.id}>
                      <td>
                        <div style={{ fontWeight:600 }}>{asset.name}</div>
                        <div style={{ fontSize:'0.72rem', color:'var(--text-muted)' }}>{asset.sector}</div>
                      </td>
                      <td style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.05rem', color: tickDir==='up'?'var(--green)':tickDir==='down'?'var(--red)':'var(--navy)' }}>
                        £{price.toFixed(2)} <span style={{ fontSize:'0.7rem' }}>{tickDir==='up'?'▲':tickDir==='down'?'▼':''}</span>
                      </td>
                      <td style={{ fontWeight:600, fontSize:'0.82rem', color: pnlColor }}>
                        {pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(1)}%
                      </td>
                      <td style={{ fontSize:'0.78rem', fontWeight:600, color: dirColor(dirKey) }}>{DIRECTIONS[dirKey]?.label ?? '—'}</td>
                      <td style={{ fontSize:'0.78rem', color:'var(--text-muted)' }}>{VOLATILITIES[volKey]?.label ?? '—'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="card">
          <div className="card-header">
            <h3 style={{ fontSize:'1rem' }}>Leaderboard</h3>
            <span style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>{players.length} players</span>
          </div>
          <div style={{ padding:0 }}>
            <table>
              <thead>
                <tr><th>#</th><th>Trader</th><th>Portfolio</th><th>P&amp;L</th><th>Ready?</th></tr>
              </thead>
              <tbody>
                {sortedPlayers.length === 0 && (
                  <tr><td colSpan={5} style={{ textAlign:'center', color:'var(--text-muted)', padding:24 }}>Waiting for students to join…</td></tr>
                )}
                {sortedPlayers.map((p, i) => {
                  const val     = calcValue(p, prices);
                  const pnl     = val - startingCash;
                  const isReady = p.readyForSegment === liveSegIdx;
                  return (
                    <tr key={p.id}>
                      <td style={{ fontWeight:700 }}>{i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1}</td>
                      <td style={{ fontWeight:500 }}>{p.nickname}</td>
                      <td style={{ fontWeight:600, fontFamily:'var(--font-display)' }}>£{val.toLocaleString('en-GB',{maximumFractionDigits:0})}</td>
                      <td style={{ fontWeight:600, color: pnl>=0?'var(--green)':'var(--red)' }}>
                        {pnl>=0?'+':''}£{pnl.toLocaleString('en-GB',{maximumFractionDigits:0})}
                      </td>
                      <td style={{ textAlign:'center' }}>
                        {status === 'news'
                          ? <span style={{ fontSize:'1rem' }}>{isReady ? '✅' : '⏳'}</span>
                          : <span style={{ color:'var(--text-muted)', fontSize:'0.78rem' }}>—</span>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Segment progress ── */}
      <div className="card">
        <div className="card-header"><h3 style={{ fontSize:'1rem' }}>Game Progress</h3></div>
        <div className="card-body">
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {gameConfig.segments.map((seg, i) => (
              <div key={seg.id} style={{
                padding:'8px 16px', borderRadius:8,
                background: i < segIdx ? '#dcfce7' : i === segIdx ? 'var(--navy)' : 'var(--surface-2)',
                color: i < segIdx ? '#15803d' : i === segIdx ? 'white' : 'var(--text-muted)',
                fontWeight: i === segIdx ? 700 : 400, fontSize:'0.85rem',
                border:'1px solid',
                borderColor: i < segIdx ? '#bbf7d0' : i === segIdx ? 'var(--navy)' : 'var(--border)',
              }}>
                {i < segIdx ? '✓ ' : ''}{seg.label}
                {seg.practice && <span style={{ marginLeft:6, fontSize:'0.7rem', opacity:0.65 }}>(practice)</span>}
                {i === segIdx && (trading || paused) && <span style={{ marginLeft:8, opacity:0.75 }}>({segTimer}s)</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function calcValue(player, prices) {
  if (!player) return 0;
  let val = player.cash ?? 0;
  for (const [id, qty] of Object.entries(player.holdings ?? {})) val += (prices[id] ?? 0) * qty;
  return Math.round(val);
}

function dirColor(key) {
  const m = { rally:'#15803d', sharp_up:'#16a34a', up:'#22c55e', slight_up:'#86efac', flat:'#9ca3af', slight_down:'#fca5a5', down:'#ef4444', sharp_down:'#dc2626', crash:'#7f1d1d', recovery:'#0ea5e9', reversal_up:'#6366f1', reversal_down:'#a855f7', pump_dump:'#f59e0b', dead_cat:'#78716c' };
  return m[key] ?? '#6b7280';
}

function StatusBadge({ status }) {
  const map    = { lobby:'navy', pre_market:'navy', trading:'green', news:'orange', paused:'yellow', countdown:'orange', ended:'red', leaderboard:'yellow' };
  const labels = { lobby:'Lobby', pre_market:'Pre-Market Open', trading:'Trading', news:'News Break', paused:'Paused', countdown:'Starting…', ended:'Game Over', leaderboard:'Leaderboard' };
  return <span className={`badge badge-${map[status]??'navy'}`}>{labels[status]??status}</span>;
}

function ReadyPill({ ready, total }) {
  const pct   = total > 0 ? Math.round((ready/total)*100) : 0;
  const color = pct === 100 ? '#15803d' : pct >= 50 ? '#92400e' : '#991b1b';
  const bg    = pct === 100 ? '#dcfce7' : pct >= 50 ? '#fef3c7' : '#fee2e2';
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:bg, borderRadius:99, padding:'6px 14px' }}>
      <span style={{ fontWeight:700, color, fontSize:'0.88rem' }}>{ready} / {total} ready</span>
      <div style={{ width:60, height:6, background:'rgba(0,0,0,0.1)', borderRadius:3, overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${pct}%`, background:color, borderRadius:3, transition:'width 0.3s' }} />
      </div>
    </div>
  );
}
