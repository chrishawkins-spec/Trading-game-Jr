import React, { useState, useEffect, useRef } from 'react';
import {
  updatePlayerState, recordTrade, subscribePlayer,
  getGameConfig, joinSession, markPlayerComplete, markPlayerReady,
  subscribePlayers,
} from '../../utils/firestore.js';
import {
  subscribeLivePrices, subscribeLiveStatus, subscribeLiveSegment,
  subscribeLiveTicker, subscribeLiveCountdown, broadcastStatus,
} from '../../utils/rtdb.js';
import { ASSETS, calcPortfolioValue, calcPnL } from '../../utils/priceEngine.js';
import Sparkline from './Sparkline.jsx';
import NewsOverlay from './NewsOverlay.jsx';
import Leaderboard from './Leaderboard.jsx';
import { getDocs, query, collection, where, orderBy, limit, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

export default function GameScreen({ gameCodeData, nickname, playerId }) {
  const [player, setPlayer]         = useState(null);
  const [players, setPlayers]       = useState([]);
  const [prices, setPrices]         = useState({});
  const [prevPrices, setPrevPrices] = useState({});
  const [status, setStatus]         = useState('lobby');
  const [ticker, setTicker]         = useState({});
  const [sessionId, setSessionId]   = useState(null);
  const [gameConfig, setGameConfig] = useState(null);
  const [showNews, setShowNews]     = useState(false);
  const [newsStory, setNewsStory]   = useState(null);
  const [currentSegIdx, setCurrentSegIdx] = useState(-1);
  const [ready, setReady]           = useState(false);
  const [countdown, setCountdown]   = useState(null);
  const [tradeQty, setTradeQty]     = useState({});
  const [tradeMsg, setTradeMsg]     = useState({ text:'', ok:true });
  const [joined, setJoined]         = useState(false);
  const [completedMarked, setCompletedMarked] = useState(false);
  const [initError, setInitError]   = useState('');
  const [debugLog, setDebugLog]     = useState([]);

  // End-of-game flow
  const [showEndPopup, setShowEndPopup]         = useState(false);
  const [confirmedEnd, setConfirmedEnd]         = useState(false);
  const [leaderboardCountdown, setLbCountdown] = useState(null);
  const [showLeaderboard, setShowLeaderboard]   = useState(false);
  const [lbTab, setLbTab]                       = useState('leaderboard'); // 'leaderboard' | 'breakdown'

  const prevSegIdxRef   = useRef(-1);
  const practiceEndRef  = useRef(false); // true while counting down into the first real phase
  const pricesRef       = useRef({});
  const lbTimerRef      = useRef(null);
  const segStartPrices  = useRef({}); // prices at the moment 'trading' status is first received

  const log = (msg) => { console.log('[GameScreen]', msg); setDebugLog(p => [...p, msg]); };

  // ── Init ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!playerId) { log('ERROR: No playerId'); return; }
    const init = async () => {
      try {
        log(`Init: player=${playerId}, code=${gameCodeData.code}`);
        const q = query(collection(db, 'sessions'), where('gameCode','==',gameCodeData.code), orderBy('createdAt','desc'), limit(1));
        const snap = await getDocs(q);
        log(`Sessions found: ${snap.size}`);
        if (snap.empty) { setInitError('No active session found. Ask your teacher to launch the session first.'); return; }
        const sess = snap.docs[0].data();
        log(`Session: ${sess.id}, status=${sess.status}`);
        if (sess.status === 'ended') { setInitError('This session has already ended.'); return; }
        const config = await getGameConfig(sess.gameConfigId);
        if (!config) { setInitError('Game configuration not found.'); return; }
        log(`Config: ${config.name}`);
        setGameConfig(config);
        setSessionId(sess.id);
        await joinSession(sess.id, playerId, nickname, config.startingCash, gameCodeData.code);
        log('Joined!');
        setJoined(true);
      } catch (err) {
        log(`ERROR: ${err.code} - ${err.message}`);
        if (err.code === 'already-exists') { setJoined(true); }
        else { setInitError(`${err.code}: ${err.message}`); }
      }
    };
    init();
  }, [playerId]);

  useEffect(() => {
    if (!sessionId || !joined || !playerId) return;
    return subscribePlayer(sessionId, playerId, p => { if (p) setPlayer(p); });
  }, [sessionId, joined, playerId]);

  // Subscribe to all players so we can count confirmed ends
  useEffect(() => {
    if (!sessionId || !joined) return;
    return subscribePlayers(sessionId, ps => setPlayers(ps ?? []));
  }, [sessionId, joined]);

  useEffect(() => {
    if (!sessionId) return;
    const unsubs = [
      subscribeLivePrices(sessionId, p => {
        if (!p) return;
        setPrevPrices(pricesRef.current);
        pricesRef.current = p;
        setPrices(p);
      }),
      subscribeLiveStatus(sessionId, s => {
        if (!s) return;
        setStatus(s);
        if (s === 'trading') {
          // Capture segment-start prices so segPnlPct is relative to this segment, not the game start
          segStartPrices.current = { ...pricesRef.current };
          // Clear the practice-end flag once real trading begins
          practiceEndRef.current = false;
        }
      }),
      subscribeLiveSegment(sessionId, seg => {
        if (!seg) return;
        setCurrentSegIdx(seg.index ?? -1);
        // Capture the practiceEnd flag BEFORE touching showNews state
        if (seg.news?.practiceEnd === true) {
          practiceEndRef.current = true;
        }
        if (seg.index !== prevSegIdxRef.current && seg.news?.headline) {
          setNewsStory(seg.news);
          setShowNews(true);
          setReady(false);
          prevSegIdxRef.current = seg.index;
        }
      }),
      subscribeLiveTicker(sessionId, t => {
        if (!t) return;
        const byAsset = {};
        const ticks = Array.isArray(t) ? t : Object.values(t);
        for (const tick of ticks) {
          for (const [id, price] of Object.entries(tick.prices ?? {})) {
            if (!byAsset[id]) byAsset[id] = [];
            byAsset[id].push(price);
          }
        }
        setTicker(byAsset);
      }),
      subscribeLiveCountdown(sessionId, n => {
        setCountdown(n);
        if (n !== null && n !== undefined) setShowNews(false);
      }),
    ];
    return () => unsubs.forEach(u => u());
  }, [sessionId]);

  useEffect(() => {
    if (status === 'pre_market') setShowNews(false);
  }, [status]);

  // ── When status becomes 'ended': show the personal results popup ──────────
  useEffect(() => {
    if (status === 'ended') {
      setShowEndPopup(true);
    }
  }, [status]);

  // ── When status becomes 'leaderboard': start countdown then reveal ────────
  useEffect(() => {
    if (status === 'leaderboard') {
      setShowEndPopup(false);
      const secs = 3;
      setLbCountdown(secs);
      let remaining = secs;
      lbTimerRef.current = setInterval(() => {
        remaining -= 1;
        setLbCountdown(remaining);
        if (remaining <= 0) {
          clearInterval(lbTimerRef.current);
          setShowLeaderboard(true);
        }
      }, 1000);
      return () => clearInterval(lbTimerRef.current);
    }
  }, [status]);

  // ── Mark player complete (legacy — kept for compatibility) ────────────────
  useEffect(() => {
    if (status === 'ended' && !completedMarked && joined && sessionId) {
      setCompletedMarked(true);
      markPlayerComplete(sessionId, playerId, gameCodeData.code).catch(console.error);
    }
  }, [status, completedMarked, joined]);

  const handleReady = async () => {
    if (!sessionId || !playerId) return;
    setReady(true);
    await markPlayerReady(sessionId, playerId, currentSegIdx);
  };

  // ── OK on end popup: mark confirmedEnd on this player doc ─────────────────
  const handleEndConfirm = async () => {
    if (!sessionId || !playerId) return;
    setShowEndPopup(false);
    setConfirmedEnd(true);
    try {
      await updateDoc(doc(db, 'sessions', sessionId, 'players', playerId), { confirmedEnd: true });
    } catch (e) {
      console.error('[GameScreen] confirmedEnd write failed:', e);
    }
  };

  // ── Watch players for all-confirmed: last one triggers 'leaderboard' ──────
  // Also has a 30s fallback so a dropped tab never blocks the whole class.
  useEffect(() => {
    if (status !== 'ended' || !sessionId || players.length === 0) return;
    const confirmed = players.filter(p => p.confirmedEnd).length;
    const total = players.length;
    if (confirmed === total && confirmedEnd) {
      broadcastStatus(sessionId, 'leaderboard').catch(console.error);
    }
  }, [players, status, confirmedEnd]);

  // 30-second fallback: if not all players confirm, show leaderboard anyway
  useEffect(() => {
    if (status !== 'ended' || !sessionId) return;
    const timer = setTimeout(() => {
      broadcastStatus(sessionId, 'leaderboard').catch(console.error);
    }, 30000);
    return () => clearTimeout(timer);
  }, [status, sessionId]);

  const showMsg = (text, ok=true) => {
    setTradeMsg({ text, ok });
    setTimeout(() => setTradeMsg({ text:'', ok:true }), 3000);
  };

  const handleTrade = async (assetId, type) => {
    if (!player || !sessionId) return;
    if (status !== 'trading' && status !== 'pre_market') {
      if (status === 'lobby') showMsg('Wait for your teacher to open the pre-market.', false);
      else showMsg('Trading is paused — wait for the next segment to open.', false);
      return;
    }
    const asset = ASSETS.find(a => a.id === assetId);
    const rawQty = tradeQty[assetId] ?? asset.minTick;
    const qty = Math.floor(Number(rawQty)); // integers only — floor prevents fractional share bugs
    if (!qty || qty <= 0 || isNaN(qty)) { showMsg('Enter a valid quantity.', false); return; }
    if (qty < asset.minTick) { showMsg(`Minimum trade size is ${asset.minTick} units.`, false); return; }
    if (qty % asset.minTick !== 0) { showMsg(`Must trade in multiples of ${asset.minTick}.`, false); return; }
    const price = prices[assetId] ?? 0;
    if (type === 'buy') {
      const cost = price * qty;
      if (cost > player.cash) { showMsg(`Not enough cash. Need £${cost.toFixed(2)}, have £${player.cash.toFixed(2)}`, false); return; }
      await updatePlayerState(sessionId, playerId, { cash: Math.round((player.cash-cost)*100)/100, [`holdings.${assetId}`]: (player.holdings?.[assetId]??0)+qty });
      await recordTrade(sessionId, playerId, { assetId, type:'buy', qty, price, cost });
      showMsg(`✓ Bought ${qty} × ${asset.name} @ £${price.toFixed(2)}`);
    } else {
      const holding = player.holdings?.[assetId] ?? 0;
      if (qty > holding) { showMsg(`You only hold ${holding} shares of ${asset.name}.`, false); return; }
      const proceeds = Math.round(price*qty*100)/100;
      await updatePlayerState(sessionId, playerId, { cash: Math.round((player.cash+proceeds)*100)/100, [`holdings.${assetId}`]: holding-qty });
      await recordTrade(sessionId, playerId, { assetId, type:'sell', qty, price, proceeds });
      showMsg(`✓ Sold ${qty} × ${asset.name} @ £${price.toFixed(2)}`);
    }
  };

  // ── Special screens ───────────────────────────────────────────────────────

  if (initError) return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,var(--navy-dark),var(--navy))', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ textAlign:'center', color:'white', maxWidth:480 }}>
        <div style={{ fontSize:'3rem', marginBottom:16 }}>⚠️</div>
        <h2 style={{ color:'white', marginBottom:12 }}>Cannot join session</h2>
        <p style={{ opacity:0.8, lineHeight:1.6 }}>{initError}</p>
        <button className="btn btn-primary" style={{ marginTop:24 }} onClick={() => window.location.reload()}>Try again</button>
      </div>
    </div>
  );

  if (!joined || !gameConfig) return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,var(--navy-dark),var(--navy))', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', color:'white' }}>
        <div className="spinner" style={{ margin:'0 auto 16px', borderTopColor:'var(--orange)' }} />
        <p style={{ opacity:0.7 }}>Joining session…</p>
        {debugLog.length > 0 && (
          <div style={{ marginTop:16, background:'rgba(255,255,255,0.05)', borderRadius:8, padding:12, maxWidth:400, textAlign:'left' }}>
            {debugLog.map((l,i) => <div key={i} style={{ fontFamily:'monospace', fontSize:'0.7rem', color:'#a5b4fc', marginBottom:3 }}>{i+1}. {l}</div>)}
          </div>
        )}
      </div>
    </div>
  );

  if (status === 'lobby') return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,var(--navy-dark),var(--navy))', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ textAlign:'center', color:'white', maxWidth:440 }}>
        <div style={{ fontSize:'3.5rem', marginBottom:20 }}>⏳</div>
        <h1 style={{ color:'white', fontFamily:'var(--font-display)', marginBottom:12 }}>Waiting for your teacher…</h1>
        <p style={{ opacity:0.65, lineHeight:1.7, marginBottom:28 }}>
          Your teacher will open the pre-market shortly so you can set up your portfolio before trading begins.
        </p>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.08)', borderRadius:99, padding:'10px 22px' }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'var(--orange)', animation:'pulse 1.4s infinite' }} />
          <span style={{ fontSize:'0.9rem', opacity:0.8 }}>Joined as <strong style={{ color:'white' }}>{nickname}</strong></span>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );

  // ── Leaderboard countdown screen ───────────────────────────────────────────
  if (status === 'leaderboard' && !showLeaderboard) return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,var(--navy-dark),var(--navy))', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', color:'white' }}>
        <div style={{ fontSize:'1.1rem', letterSpacing:'0.12em', opacity:0.6, fontFamily:'var(--font-display)', marginBottom:16 }}>
          REVEALING RESULTS IN
        </div>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'12rem', color:'white', lineHeight:1, textShadow:'0 0 80px rgba(255,113,27,0.6)' }}>
          {leaderboardCountdown}
        </div>
      </div>
    </div>
  );

  // ── Final leaderboard + P&L breakdown ─────────────────────────────────────
  if (status === 'leaderboard' && showLeaderboard) {
    const allPlayers = players.length > 0 ? players : (player ? [player] : []);
    return (
      <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,var(--navy-dark),var(--navy))', display:'flex', flexDirection:'column' }}>
        {/* Tab bar */}
        <div style={{ display:'flex', background:'rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.1)', flexShrink:0 }}>
          {[
            { id:'leaderboard', label:'🏆 Leaderboard' },
            { id:'breakdown',   label:'📊 My P&L Breakdown' },
          ].map(t => (
            <button key={t.id} onClick={() => setLbTab(t.id)} style={{
              flex:1, padding:'14px 0', border:'none', cursor:'pointer', fontWeight:700,
              fontSize:'0.9rem', letterSpacing:'0.03em', transition:'all 0.15s',
              background: lbTab === t.id ? 'rgba(255,113,27,0.18)' : 'transparent',
              color:       lbTab === t.id ? 'var(--orange)' : 'rgba(255,255,255,0.45)',
              borderBottom: lbTab === t.id ? '2px solid var(--orange)' : '2px solid transparent',
            }}>{t.label}</button>
          ))}
        </div>
        {lbTab === 'leaderboard'
          ? <Leaderboard players={allPlayers} prices={prices} startingCash={gameConfig.startingCash} />
          : <PnLBreakdown player={player} gameConfig={gameConfig} />
        }
      </div>
    );
  }

  // ── Countdown screen — branches for practice-end vs normal ────────────────
  if (status === 'countdown' && countdown !== null && countdown !== undefined && countdown > 0) {
    const isPracticeEnd = practiceEndRef.current;
    return (
      <div style={{
        minHeight: '100vh',
        background: isPracticeEnd
          ? 'linear-gradient(135deg, #1c1a10, #2d2a00)'
          : 'linear-gradient(135deg, var(--navy-dark), var(--navy))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}>
        {isPracticeEnd && (
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '2.4rem',
              color: '#fbbf24',
              lineHeight: 1.15,
              textShadow: '0 0 40px rgba(251,191,36,0.5)',
              marginBottom: 10,
            }}>
              Now it's for real!
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', letterSpacing: '0.02em' }}>
              Positions reset — every trade counts from here
            </div>
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '18rem',
            color: isPracticeEnd ? '#fbbf24' : 'white',
            lineHeight: 1,
            textShadow: isPracticeEnd
              ? '0 0 80px rgba(251,191,36,0.7)'
              : '0 0 80px rgba(255,113,27,0.7)',
            animation: 'countPop 0.9s ease',
          }}>
            {countdown}
          </div>
          <div style={{
            color: isPracticeEnd ? 'rgba(251,191,36,0.6)' : 'rgba(255,255,255,0.6)',
            fontSize: '1.4rem',
            marginTop: 8,
            letterSpacing: '0.12em',
            fontFamily: 'var(--font-display)',
          }}>
            {isPracticeEnd ? 'REAL MARKETS OPENING' : 'MARKETS OPENING'}
          </div>
        </div>
        <style>{`@keyframes countPop { 0%{transform:scale(1.8);opacity:0} 25%{transform:scale(1);opacity:1} 80%{transform:scale(1);opacity:1} 100%{transform:scale(0.7);opacity:0} }`}</style>
      </div>
    );
  }

  if (status === 'countdown' && countdown === 0) return (
    <div style={{ minHeight:'100vh', background:'#16a34a', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'10rem', color:'white', textShadow:'0 0 60px rgba(0,0,0,0.3)', animation:'goFlash 0.5s ease' }}>
        GO!
      </div>
      <style>{`@keyframes goFlash { 0%{transform:scale(0.5);opacity:0} 50%{transform:scale(1.1);opacity:1} 100%{transform:scale(1);opacity:1} }`}</style>
    </div>
  );

  // ── Main trading view ─────────────────────────────────────────────────────
  const portfolioValue = player ? calcPortfolioValue(player.holdings??{}, player.cash??0, prices) : 0;
  const pnl     = player ? calcPnL(portfolioValue, gameConfig.startingCash) : 0;
  const pnlPct  = ((pnl / gameConfig.startingCash) * 100).toFixed(1);
  const cash    = player?.cash ?? 0;
  const isPreMarket = status === 'pre_market';
  const canTrade    = status === 'trading' || status === 'pre_market';

  return (
    <div style={{ height:'100vh', display:'flex', flexDirection:'column', background:'var(--navy-dark)', overflow:'hidden' }}>

      {/* ── Header: logo + trader name + status pill ── */}
      <div style={{
        flexShrink:0,
        background:'var(--navy)',
        borderBottom:'1px solid rgba(255,255,255,0.07)',
        padding:'8px 12px',
        display:'flex',
        alignItems:'center',
        gap:10,
      }}>
        <div style={{ fontWeight:800, fontSize:'0.9rem', letterSpacing:'0.03em', color:'var(--orange)', whiteSpace:'nowrap', marginRight:4 }}>
          TENENT
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8, flex:1, minWidth:0 }}>
          <div style={{ background:'var(--orange)', borderRadius:6, width:26, height:26, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.85rem', color:'white', flexShrink:0 }}>
            {nickname?.[0]?.toUpperCase() ?? 'T'}
          </div>
          <span style={{ fontFamily:'var(--font-display)', fontWeight:700, color:'white', fontSize:'0.9rem', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
            {nickname}
          </span>
        </div>
        <StatusPill status={status} />
      </div>

      {/* ── Portfolio bar ── */}
      <div style={{ flexShrink:0, display:'flex', alignItems:'stretch', gap:1, background:'rgba(255,255,255,0.07)' }}>
        <PortfolioStat label="Portfolio" value={`£${portfolioValue.toLocaleString('en-GB',{maximumFractionDigits:0})}`} />
        <PortfolioStat
          label="P / L"
          value={`${pnl>=0?'+':''}£${Math.abs(pnl).toLocaleString('en-GB',{maximumFractionDigits:0})}`}
          sub={`${pnl>=0?'+':''}${pnlPct}%`}
          valueClass={pnl>0?'up':pnl<0?'down':'neutral'}
        />
        <PortfolioStat label="Cash" value={`£${cash.toLocaleString('en-GB',{maximumFractionDigits:0})}`} />
      </div>

      {/* ── Pre-market banner ── */}
      {isPreMarket && (
        <div style={{ flexShrink:0, background:'rgba(255,200,0,0.1)', borderBottom:'1px solid rgba(255,200,0,0.2)', padding:'5px 12px', fontSize:'0.72rem', color:'#ffd040', textAlign:'center', letterSpacing:'0.04em' }}>
          🕐 PRE-MARKET OPEN — prices frozen. Buy and sell to set up your portfolio.
        </div>
      )}
      {status === 'paused' && (
        <div style={{ flexShrink:0, background:'rgba(146,64,14,0.3)', borderBottom:'1px solid rgba(255,113,27,0.3)', padding:'5px 12px', fontSize:'0.72rem', color:'#fef3c7', textAlign:'center', letterSpacing:'0.04em' }}>
          ⏸ Trading is paused — your teacher will resume shortly
        </div>
      )}

      {/* ── Stock cards ── */}
      <div className="gs-cards">
        {ASSETS.map((asset) => {
          const price   = prices[asset.id] ?? asset.startPrice;
          const prev    = prevPrices[asset.id] ?? price;
          const holding = player?.holdings?.[asset.id] ?? 0;
          const hVal    = Math.round(holding * price);
          const diff    = price - prev;
          const pct     = prev > 0 ? (diff/prev)*100 : 0;
          const dir     = diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat';

          let hist = ticker[asset.id] ?? [];
          if (hist.length < 2) hist = [asset.startPrice, price];

          // Use the price at the start of THIS segment (not the hardcoded game-start price)
          const startPrice = segStartPrices.current[asset.id] ?? asset.startPrice;
          const segPnlPct  = startPrice > 0 ? ((price - startPrice) / startPrice) * 100 : 0;
          const priceColor = dir==='up' ? '#4ade80' : dir==='down' ? '#f87171' : 'rgba(232,230,255,0.9)';
          const tickColor  = dir==='up' ? '#4ade80' : dir==='down' ? '#f87171' : 'rgba(255,255,255,0.4)';
          const segColor   = segPnlPct > 0 ? '#4ade80' : segPnlPct < 0 ? '#f87171' : 'rgba(255,255,255,0.35)';
          const isGold     = asset.id === 'goldvault';

          return (
            <div key={asset.id} className={`gs-card${holding > 0 ? ' gs-card--holding' : ''}${isGold ? ' gs-card--gold' : ''}`}>
              <div className="gs-card-left">
                <div>
                  {isGold && (
                    <div style={{ fontSize:'0.55rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#fbbf24', marginBottom:2, opacity:0.85 }}>
                      ⬡ Safe Haven
                    </div>
                  )}
                  <div className="gs-stock-name">{asset.name}</div>
                  <div className="gs-stock-price" style={{ color: priceColor }}>£{price.toFixed(2)}</div>
                  <div style={{ marginTop:2 }}>
                    <span className="gs-stock-tick" style={{ color: tickColor }}>
                      {dir==='up'?'▲':dir==='down'?'▼':'→'} {Math.abs(pct).toFixed(1)}%
                    </span>
                  </div>
                  <div style={{ marginTop:3 }}>
                    <span style={{ fontSize:'0.55rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginRight:4 }}>Cumulative</span>
                    <span className="gs-stock-seg" style={{ color: segColor }}>
                      {segPnlPct>=0?'+':''}{segPnlPct.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="gs-card-chart">
                <Sparkline data={hist} width="100%" height={44} />
              </div>

              <div className="gs-card-right">
                <div className="gs-holding-info">
                  <div style={{ fontSize:'0.6rem', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:'0.04em' }}>Holding</div>
                  <div className="gs-holding-qty" style={{ color: holding>0 ? '#fbbf24' : 'rgba(255,255,255,0.2)' }}>
                    {holding > 0 ? holding.toLocaleString() : '—'}
                  </div>
                  {holding > 0 && (
                    <div style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.4)', fontVariantNumeric:'tabular-nums' }}>
                      £{hVal.toLocaleString('en-GB')}
                    </div>
                  )}
                </div>
                <div className="gs-trade-controls">
                  <input
                    type="number" min={1} step={asset.minTick} defaultValue={asset.minTick}
                    className="gs-qty-input"
                    style={{ borderColor: canTrade ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.07)' }}
                    onChange={e => setTradeQty(q => ({ ...q, [asset.id]: e.target.value }))}
                  />
                  <button onClick={() => handleTrade(asset.id,'buy')} disabled={!canTrade} className={`gs-btn-trade gs-btn-buy${!canTrade?' gs-btn-dis':''}`}>BUY</button>
                  <button onClick={() => handleTrade(asset.id,'sell')} disabled={!canTrade || holding===0} className={`gs-btn-trade gs-btn-sell${(!canTrade||holding===0)?' gs-btn-dis':''}`}>SELL</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Trade toast ── */}
      {tradeMsg.text && (
        <div style={{ position:'fixed', top:16, left:'50%', transform:'translateX(-50%)', zIndex:999, background: tradeMsg.ok ? '#166534' : '#7f1d1d', color: tradeMsg.ok ? '#86efac' : '#fca5a5', padding:'10px 28px', borderRadius:99, fontWeight:600, fontSize:'0.9rem', boxShadow:'0 4px 24px rgba(0,0,0,0.35)', whiteSpace:'nowrap', animation:'toastIn 0.2s ease', pointerEvents:'none' }}>
          {tradeMsg.text}
        </div>
      )}

      {/* ── News overlay ── */}
      {showNews && newsStory && (
        <NewsOverlay story={newsStory} onDismiss={() => setShowNews(false)} onReady={handleReady} alreadyReady={ready} />
      )}

      {/* ── End-of-day results popup ── */}
      {showEndPopup && player && gameConfig && (
        <EndPopup player={player} prices={prices} startingCash={gameConfig.startingCash} onOK={handleEndConfirm} />
      )}

      <style>{`
        .gs-pstat { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:8px 6px; background:#252350; gap:1px; }
        .gs-pstat-label { font-size:0.6rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#ffd040; }
        .gs-pstat-value { font-family:var(--font-display,system-ui); font-size:1.45rem; font-weight:900; font-variant-numeric:tabular-nums; line-height:1.1; letter-spacing:-0.01em; color:#e8e6ff; }
        .gs-pstat-value.up   { color:#4ade80; }
        .gs-pstat-value.down { color:#f87171; }
        .gs-pstat-sub { font-size:0.65rem; color:inherit; opacity:0.75; font-variant-numeric:tabular-nums; }

        .gs-cards { flex:1; display:flex; flex-direction:column; gap:1px; background:rgba(255,255,255,0.07); overflow:hidden; min-height:0; }
        .gs-card { flex:1; background:#1a1840; display:flex; align-items:stretch; min-height:0; transition:background 0.2s; }
        .gs-card--holding { background:#1a2a1a; border-left:3px solid rgba(74,222,128,0.35); }
        .gs-card--gold { background:#1c1a10; border-left:3px solid rgba(251,191,36,0.45); }
        .gs-card--gold.gs-card--holding { background:#1c2210; border-left:3px solid rgba(251,191,36,0.65); }

        .gs-card-left { flex-shrink:0; width:126px; padding:8px 10px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.07); }
        .gs-stock-name  { font-size:1rem; font-weight:800; color:#ffd040; line-height:1.2; margin-bottom:2px; }
        .gs-stock-price { font-size:1.25rem; font-weight:800; font-variant-numeric:tabular-nums; line-height:1.1; }
        .gs-stock-tick  { font-size:0.68rem; font-weight:600; font-variant-numeric:tabular-nums; }
        .gs-stock-seg   { font-size:0.62rem; font-variant-numeric:tabular-nums; }

        .gs-card-chart { flex:1; min-width:0; overflow:hidden; padding:6px 8px; display:flex; align-items:center; }
        .gs-card-chart > svg, .gs-card-chart > * > svg { width:100% !important; height:44px; display:block; }

        .gs-card-right { flex-shrink:0; width:110px; padding:8px 10px; display:flex; flex-direction:column; justify-content:space-between; border-left:1px solid rgba(255,255,255,0.07); }
        .gs-holding-qty { font-size:1rem; font-weight:700; font-variant-numeric:tabular-nums; margin:2px 0; }
        .gs-trade-controls { display:flex; flex-direction:column; gap:4px; }
        .gs-qty-input { width:100%; padding:4px 6px; border:1px solid rgba(255,255,255,0.15); border-radius:5px; font-size:0.8rem; text-align:center; background:rgba(255,255,255,0.07); color:white; }
        .gs-qty-input:focus { outline:none; border-color:rgba(255,113,27,0.6); }
        .gs-btn-trade { font-size:0.72rem; font-weight:700; letter-spacing:0.04em; border:none; border-radius:5px; padding:6px 0; text-align:center; cursor:pointer; width:100%; }
        .gs-btn-buy  { background:rgba(74,222,128,0.22); color:#4ade80; }
        .gs-btn-sell { background:rgba(248,113,113,0.18); color:#f87171; }
        .gs-btn-dis  { background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.25); cursor:not-allowed; }
        .gs-btn-buy:not(.gs-btn-dis):hover  { background:rgba(74,222,128,0.35); }
        .gs-btn-sell:not(.gs-btn-dis):hover { background:rgba(248,113,113,0.3); }

        @media (min-width:700px) and (orientation:landscape), (min-width:900px) {
          .gs-pstat-value { font-size:1.9rem; }
          .gs-pstat-label { font-size:0.65rem; }
          .gs-pstat       { padding:10px 8px; }
          .gs-cards { display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:1fr 1fr; }
          .gs-card-left  { width:130px; padding:10px 14px; }
          .gs-card-right { width:130px; padding:10px 14px; }
          .gs-stock-name  { font-size:1.2rem; }
          .gs-stock-price { font-size:1.55rem; }
          .gs-stock-tick  { font-size:0.78rem; }
          .gs-stock-seg   { font-size:0.7rem; }
          .gs-holding-qty { font-size:1.15rem; }
          .gs-btn-trade   { font-size:0.82rem; padding:8px 0; }
          .gs-card-chart > svg, .gs-card-chart > * > svg { height:64px !important; }
        }
        @media (min-width:1300px) {
          .gs-cards { grid-template-columns:repeat(3,1fr); grid-template-rows:1fr 1fr; }
        }

        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes toastIn { from{opacity:0;transform:translateX(-50%) translateY(-8px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes countPop { 0%{transform:scale(1.8);opacity:0} 25%{transform:scale(1);opacity:1} 80%{transform:scale(1);opacity:1} 100%{transform:scale(0.7);opacity:0} }
      `}</style>
    </div>
  );
}

// ── End-of-day personal results popup ────────────────────────────────────────
function EndPopup({ player, prices, startingCash, onOK }) {
  const holdings = player.holdings ?? {};
  const cash = player.cash ?? 0;
  let portfolioValue = cash;
  for (const [id, qty] of Object.entries(holdings)) portfolioValue += (prices[id] ?? 0) * qty;
  portfolioValue = Math.round(portfolioValue);
  const pnl = portfolioValue - startingCash;
  const pnlPct = ((pnl / startingCash) * 100).toFixed(1);
  const isPos = pnl >= 0;

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(20,19,48,0.88)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, padding:24 }}>
      <div style={{ background:'linear-gradient(160deg,#1e1c4a 0%,#141330 100%)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:20, padding:'36px 40px', maxWidth:420, width:'100%', textAlign:'center', boxShadow:'0 24px 80px rgba(0,0,0,0.5)' }}>
        <div style={{ fontSize:'3.5rem', marginBottom:16 }}>{isPos ? '📈' : '📉'}</div>
        <div style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.45)', marginBottom:6 }}>TRADING DAY ENDED</div>
        <h2 style={{ color:'white', fontFamily:'var(--font-display)', fontSize:'1.6rem', marginBottom:24, lineHeight:1.2 }}>The markets have closed</h2>
        <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:12, padding:'20px 24px', marginBottom:16 }}>
          <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.08em', color:'#ffd040', marginBottom:6 }}>YOUR FINAL PORTFOLIO</div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'2.6rem', color:'white', lineHeight:1 }}>£{portfolioValue.toLocaleString('en-GB')}</div>
        </div>
        <div style={{ background: isPos ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)', borderRadius:12, padding:'16px 24px', marginBottom:28 }}>
          <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.08em', color:'rgba(255,255,255,0.4)', marginBottom:6 }}>PROFIT / LOSS</div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'2rem', color: isPos ? '#4ade80' : '#f87171', lineHeight:1 }}>
            {isPos ? '+' : ''}£{Math.abs(pnl).toLocaleString('en-GB')}
          </div>
          <div style={{ fontSize:'0.9rem', color: isPos ? '#4ade80' : '#f87171', opacity:0.75, marginTop:4 }}>
            {isPos ? '+' : ''}{pnlPct}% vs starting cash
          </div>
        </div>
        <button onClick={onOK} style={{ width:'100%', background:'var(--orange)', color:'white', border:'none', borderRadius:10, padding:'14px 0', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', cursor:'pointer', letterSpacing:'0.04em' }}>
          See final leaderboard →
        </button>
      </div>
    </div>
  );
}

function PortfolioStat({ label, value, sub, valueClass = 'neutral' }) {
  return (
    <div className="gs-pstat">
      <div className="gs-pstat-label">{label}</div>
      <div className={`gs-pstat-value ${valueClass}`}>{value}</div>
      {sub && <div className="gs-pstat-sub">{sub}</div>}
    </div>
  );
}

// ── P&L Attribution Breakdown Table ──────────────────────────────────────────
function PnLBreakdown({ player, gameConfig }) {
  if (!player || !gameConfig) return null;

  const snapshots   = player.segmentSnapshots ?? {};   // keyed by segmentIndex (string in Firestore)
  const segments    = gameConfig.segments ?? [];
  const startCash   = gameConfig.startingCash ?? 20000;

  // Only include non-practice segments in the breakdown
  const realSegs = segments
    .map((seg, i) => ({ ...seg, idx: i }))
    .filter(seg => !seg.practice);

  // Build ordered list of snapshots for real segments only
  // snapshot[i] = state AT THE END of segment i
  // P&L for segment i = snapshot[i].totalValue - snapshot[i-1].totalValue (or startCash for first real seg)
  const snapshotArr = realSegs.map(seg => snapshots[String(seg.idx)] ?? null);

  // All asset IDs that appear across any snapshot (exclude practice ones which are zeroed)
  const assetIds = [...new Set(
    snapshotArr.flatMap(s => s ? Object.keys(s.assetValues) : [])
  )];

  // Asset name lookup
  const assetName = (id) => {
    const found = (gameConfig.assetNames ?? {})[id];
    if (found) return found;
    const map = { uk_equity:'UK Equity', us_equity:'US Equity', bonds:'Bonds', crypto:'Crypto', commodities:'Commodities', goldvault:'GoldVault' };
    return map[id] ?? id;
  };

  // Per-asset, per-segment P&L
  // For each real segment: change in asset value vs previous snapshot.
  // If the student held 0 of this asset at the END of the segment, any prior
  // gain/loss was already banked into cash — show 0, not a phantom negative.
  const getSegPnl = (segPos, assetId) => {
    const curr = snapshotArr[segPos];
    if (!curr) return null;

    const currHolding = (curr.holdings ?? {})[assetId] ?? 0;
    const currVal     = curr.assetValues[assetId] ?? 0;

    // If holding is zero at end of segment, the position is closed —
    // any gain/loss is already in cash. Show 0 to avoid phantom negatives.
    if (currHolding === 0) return 0;

    if (segPos === 0) {
      // First real segment, still holding: P&L = current unrealised value
      return currVal;
    }

    const prev    = snapshotArr[segPos - 1];
    if (!prev) return currVal;

    const prevVal     = prev.assetValues[assetId] ?? 0;
    const prevHolding = (prev.holdings ?? {})[assetId] ?? 0;

    // Held nothing at start of this segment either — no unrealised P&L
    if (prevHolding === 0) return 0;

    // Change in unrealised value while holding throughout
    return currVal - prevVal;
  };

  // Column totals (total P&L per segment)
  const colTotals = realSegs.map((_, segPos) => {
    const curr = snapshotArr[segPos];
    if (!curr) return null;
    if (segPos === 0) return curr.totalValue - startCash;
    const prev = snapshotArr[segPos - 1];
    return prev ? curr.totalValue - prev.totalValue : null;
  });

  // Row totals (total P&L per asset across all segments)
  const rowTotal = (assetId) =>
    realSegs.reduce((sum, _, segPos) => sum + (getSegPnl(segPos, assetId) ?? 0), 0);

  // Grand total = final portfolio value - starting cash
  const lastSnap = snapshotArr[snapshotArr.length - 1];
  const grandTotal = lastSnap ? lastSnap.totalValue - startCash : null;

  const fmt = (v) => {
    if (v === null || v === undefined) return <span style={{ color:'rgba(255,255,255,0.2)' }}>—</span>;
    const pos = v >= 0;
    return (
      <span style={{ color: pos ? '#4ade80' : '#f87171', fontWeight:600 }}>
        {pos ? '+' : ''}£{Math.abs(Math.round(v)).toLocaleString('en-GB')}
      </span>
    );
  };

  const th = { padding:'8px 10px', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', whiteSpace:'nowrap', background:'rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.1)' };
  const td = { padding:'7px 10px', fontSize:'0.82rem', textAlign:'right', borderBottom:'1px solid rgba(255,255,255,0.06)', fontVariantNumeric:'tabular-nums' };
  const tdL = { ...td, textAlign:'left', fontWeight:600, color:'white', whiteSpace:'nowrap' };
  const tdTotal = { ...td, background:'rgba(255,255,255,0.06)', fontWeight:700 };
  const tdGrand = { ...tdTotal, background:'rgba(255,113,27,0.15)', fontSize:'0.95rem' };

  if (realSegs.length === 0 || snapshotArr.every(s => !s)) {
    return (
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.4)', padding:32, textAlign:'center' }}>
        <div>
          <div style={{ fontSize:'2.5rem', marginBottom:12 }}>📊</div>
          <div>Breakdown data not yet available.</div>
          <div style={{ fontSize:'0.8rem', marginTop:8, opacity:0.6 }}>This appears in sessions run with the updated game software.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'16px 12px', overflow:'hidden' }}>
      <div style={{ maxWidth:860, margin:'0 auto', width:'100%', display:'flex', flexDirection:'column', height:'100%' }}>
        <h2 style={{ color:'white', fontFamily:'var(--font-display)', marginBottom:2, fontSize:'1.1rem' }}>Where did you make your money?</h2>
        <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.78rem', marginBottom:12 }}>
          P&amp;L per asset, per phase.
        </p>

        <div style={{ borderRadius:10, border:'1px solid rgba(255,255,255,0.1)', flex:1 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', tableLayout:'fixed' }}>
            <thead>
              <tr>
                <th style={{ ...th, textAlign:'left', width:'28%' }}>Asset</th>
                {realSegs.map((seg, i) => (
                  <th key={i} style={{ ...th, textAlign:'right' }}>
                    <div style={{ color:'white', fontSize:'0.75rem', marginBottom:1 }}>Phase {i + 1}</div>
                    <div style={{ fontWeight:400, fontSize:'0.62rem', color:'rgba(255,255,255,0.32)', textTransform:'none', letterSpacing:0, whiteSpace:'normal', lineHeight:1.2 }}>
                      {seg.news?.headline ?? seg.label ?? ''}
                    </div>
                  </th>
                ))}
                <th style={{ ...th, textAlign:'right', background:'rgba(255,255,255,0.08)', color:'white' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {assetIds.map(assetId => (
                <tr key={assetId} style={{ transition:'background 0.1s' }}>
                  <td style={tdL}>{assetName(assetId)}</td>
                  {realSegs.map((_, segPos) => (
                    <td key={segPos} style={td}>{fmt(getSegPnl(segPos, assetId))}</td>
                  ))}
                  <td style={tdTotal}>{fmt(rowTotal(assetId))}</td>
                </tr>
              ))}
              {/* Column totals */}
              <tr style={{ background:'rgba(255,255,255,0.04)' }}>
                <td style={{ ...tdL, fontSize:'0.78rem', color:'rgba(255,255,255,0.55)', fontWeight:700 }}>PHASE TOTAL</td>
                {colTotals.map((v, i) => (
                  <td key={i} style={{ ...tdTotal }}>{fmt(v)}</td>
                ))}
                {/* Grand total — bottom right */}
                <td style={tdGrand}>{fmt(grandTotal)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {grandTotal !== null && (
          <div style={{ marginTop:10, padding:'10px 16px', background:'rgba(255,255,255,0.05)', borderRadius:8, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.78rem' }}>Total P&amp;L</span>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.25rem', color: grandTotal >= 0 ? '#4ade80' : '#f87171' }}>
              {grandTotal >= 0 ? '+' : ''}£{Math.abs(Math.round(grandTotal)).toLocaleString('en-GB')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const cfg = {
    lobby:       { bg:'rgba(136,132,170,0.2)',  color:'#8884aa', label:'LOBBY' },
    pre_market:  { bg:'rgba(255,200,0,0.15)',    color:'#ffd040', label:'PRE-MARKET' },
    trading:     { bg:'rgba(74,222,128,0.18)',   color:'#4ade80', label:'LIVE', dot:true },
    news:        { bg:'rgba(255,113,27,0.18)',   color:'#FF711B', label:'NEWS' },
    paused:      { bg:'rgba(136,132,170,0.15)', color:'#8884aa', label:'PAUSED' },
    countdown:   { bg:'rgba(255,113,27,0.18)',  color:'#FF711B', label:'STARTING…' },
    ended:       { bg:'rgba(248,113,113,0.15)', color:'#f87171', label:'ENDED' },
    leaderboard: { bg:'rgba(255,200,0,0.18)',   color:'#ffd040', label:'RESULTS' },
  };
  const c = cfg[status] ?? cfg.lobby;
  return (
    <div style={{ background:c.bg, color:c.color, borderRadius:20, padding:'3px 9px', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.07em', display:'flex', alignItems:'center', gap:5, whiteSpace:'nowrap', flexShrink:0 }}>
      {c.dot && <span style={{ width:6, height:6, borderRadius:'50%', background:'#4ade80', display:'inline-block', animation:'pulse 1.2s infinite' }} />}
      {c.label}
    </div>
  );
}
