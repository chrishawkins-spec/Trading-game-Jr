/**
 * Firestore Service Layer
 *
 * Firestore Data Model:
 *
 * /admins/{uid}
 *   role: 'superadmin' | 'teacher'
 *   email: string
 *   gameCode: string   (teachers only — which code they can run)
 *   createdAt: Timestamp
 *
 * /gameCodes/{code}
 *   schoolName, contactEmail, startDate, endDate
 *   maxUsers, maxPlays, playsUsed, activeUsers
 *   status: 'active' | 'disabled'
 *   gameConfigId: string
 *   teacherEmail: string (optional — if set, a teacher account will be created)
 *   createdBy: string (uid)
 *   createdAt: Timestamp
 *
 * /gameConfigs/{id}
 *   name, startingCash, segments[], createdBy, updatedAt
 *
 * /sessions/{sessionId}
 *   gameCode, gameConfigId, gameConfig
 *   status: 'lobby'|'news'|'trading'|'paused'|'countdown'|'ended'
 *   currentSegmentIndex, currentPrices, adminUid
 *   createdAt, startedAt, endedAt
 *
 * /sessions/{sessionId}/players/{playerId}
 *   nickname, cash, holdings, portfolioHistory
 *   readyForSegment, joinedAt, completedAt, gameCode
 */

import {
  doc, collection, getDoc, getDocs, setDoc, addDoc, updateDoc,
  query, where, orderBy, limit, serverTimestamp, increment, onSnapshot,
  deleteDoc, runTransaction, writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase.js';

// ─── Game Configs ──────────────────────────────────────────────────────────

export async function saveGameConfig(config, uid) {
  const ref = config.id
    ? doc(db, 'gameConfigs', config.id)
    : doc(collection(db, 'gameConfigs'));
  await setDoc(ref, { ...config, id: ref.id, updatedAt: serverTimestamp(), createdBy: uid }, { merge: true });
  return ref.id;
}

export async function getGameConfigs(uid) {
  const q = query(collection(db, 'gameConfigs'), where('createdBy', '==', uid), orderBy('updatedAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

export async function getGameConfig(id) {
  const snap = await getDoc(doc(db, 'gameConfigs', id));
  return snap.exists() ? snap.data() : null;
}

export async function deleteGameConfig(id) {
  await deleteDoc(doc(db, 'gameConfigs', id));
}

// ─── Trolley (Shopping Challenge) Configs ──────────────────────────────────
// Read-only from this app's point of view: trolleyConfigs docs are written
// by the Shopping Trolley repo's own import script (pricing spreadsheet →
// Firestore), not by GameConfigBuilder here. This lets the master admin
// list/select/delete them for game-code setup without needing to know how
// to build one — see /trolleyConfigs schema notes in the Shopping Trolley
// repo's own firestore.js for the full shape (outlets, items, pricing).
export async function saveTrolleyConfig(config, uid) {
  const ref = doc(collection(db, 'trolleyConfigs'));
  await setDoc(ref, { ...config, id: ref.id, createdBy: uid, updatedAt: serverTimestamp() });
  return ref.id;
}

export async function getTrolleyConfigs(uid) {
  const q = query(collection(db, 'trolleyConfigs'), where('createdBy', '==', uid), orderBy('updatedAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

export async function deleteTrolleyConfig(id) {
  await deleteDoc(doc(db, 'trolleyConfigs', id));
}

// ─── Game Codes ───────────────────────────────────────────────────────────

export async function createGameCode(codeData, uid) {
  const ref = doc(db, 'gameCodes', codeData.code);
  await setDoc(ref, {
    ...codeData,
    playsUsed: 0,
    activeUsers: 0,
    status: 'active',
    createdAt: serverTimestamp(),
    createdBy: uid,
  });
  return codeData.code;
}

export async function getGameCode(code) {
  const snap = await getDoc(doc(db, 'gameCodes', code));
  return snap.exists() ? snap.data() : null;
}

export async function getAllGameCodes(uid) {
  const q = query(collection(db, 'gameCodes'), where('createdBy', '==', uid), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

export async function updateGameCode(code, updates) {
  await updateDoc(doc(db, 'gameCodes', code), updates);
}

export async function disableGameCode(code) {
  await updateDoc(doc(db, 'gameCodes', code), { status: 'disabled' });
}

// ─── Teachers ─────────────────────────────────────────────────────────────
// Teachers are stored in /admins/{uid} with role='teacher' and a gameCode field.
// They are created by superadmins.

export async function getTeachersForCode(gameCode) {
  const q = query(
    collection(db, 'admins'),
    where('role', '==', 'teacher'),
    where('gameCode', '==', gameCode)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}

export async function getAllTeachers(createdBy) {
  const q = query(
    collection(db, 'admins'),
    where('role', '==', 'teacher'),
    where('createdBy', '==', createdBy)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}

// ─── Sessions ─────────────────────────────────────────────────────────────

export async function createSession(gameCode, gameConfig, adminUid) {
  const ref = doc(collection(db, 'sessions'));
  await setDoc(ref, {
    id: ref.id, gameCode,
    gameConfigId: gameConfig.id, gameConfig,
    status: 'lobby', currentSegmentIndex: -1,
    currentPrices: {}, priceHistory: [],
    startedAt: null, endedAt: null,
    adminUid, createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getSession(sessionId) {
  const snap = await getDoc(doc(db, 'sessions', sessionId));
  return snap.exists() ? snap.data() : null;
}

export async function updateSession(sessionId, updates) {
  await updateDoc(doc(db, 'sessions', sessionId), updates);
}

export function subscribeSession(sessionId, callback) {
  return onSnapshot(doc(db, 'sessions', sessionId), snap => {
    callback(snap.exists() ? snap.data() : null);
  });
}

// ─── Players ──────────────────────────────────────────────────────────────

export async function joinSession(sessionId, playerId, nickname, startingCash, gameCode) {
  const codeRef   = doc(db, 'gameCodes', gameCode);
  const playerRef = doc(db, 'sessions', sessionId, 'players', playerId);
  await runTransaction(db, async (tx) => {
    const codeSnap = await tx.get(codeRef);
    if (!codeSnap.exists()) throw new Error('Game code not found');
    const codeData = codeSnap.data();
    if ((codeData.activeUsers ?? 0) >= codeData.maxUsers) throw new Error('Session is full');
    tx.update(codeRef, { activeUsers: increment(1) });
    tx.set(playerRef, {
      id: playerId, nickname, cash: startingCash,
      holdings: {}, portfolioHistory: [],
      joinedAt: serverTimestamp(), completedAt: null, gameCode,
    });
  });
}

export async function markPlayerComplete(sessionId, playerId, gameCode) {
  await runTransaction(db, async (tx) => {
    const codeRef   = doc(db, 'gameCodes', gameCode);
    const playerRef = doc(db, 'sessions', sessionId, 'players', playerId);
    tx.update(codeRef, { playsUsed: increment(1), activeUsers: increment(-1) });
    tx.update(playerRef, { completedAt: serverTimestamp() });
  });
}

export async function updatePlayerState(sessionId, playerId, updates) {
  await updateDoc(doc(db, 'sessions', sessionId, 'players', playerId), updates);
}

/**
 * Reset every player in a session back to startingCash with empty holdings.
 * Used at the end of the practice phase so the real game starts clean.
 * Firestore has a 500-write batch limit; for classroom sizes this is safe.
 */
export async function resetAllPlayers(sessionId, startingCash) {
  const snap  = await getDocs(collection(db, 'sessions', sessionId, 'players'));
  const batch = writeBatch(db);
  for (const docSnap of snap.docs) {
    batch.update(docSnap.ref, { cash: startingCash, holdings: {}, portfolioHistory: [] });
  }
  await batch.commit();
}

export async function getPlayer(sessionId, playerId) {
  const snap = await getDoc(doc(db, 'sessions', sessionId, 'players', playerId));
  return snap.exists() ? snap.data() : null;
}

export function subscribePlayer(sessionId, playerId, callback) {
  return onSnapshot(doc(db, 'sessions', sessionId, 'players', playerId), snap => {
    callback(snap.exists() ? snap.data() : null);
  });
}

export function subscribePlayers(sessionId, callback) {
  return onSnapshot(collection(db, 'sessions', sessionId, 'players'), snap => {
    callback(snap.docs.map(d => d.data()));
  });
}

export async function recordTrade(sessionId, playerId, trade) {
  const ref = collection(db, 'sessions', sessionId, 'players', playerId, 'trades');
  await addDoc(ref, { ...trade, timestamp: serverTimestamp() });
}

/**
 * Snapshot every player's per-asset value at the end of a segment.
 * Called by SessionController before advancing to news / game-end.
 *
 * Writes into player.segmentSnapshots (array indexed by segmentIndex):
 *   { segmentIndex, label, cash, holdings, assetValues: { [assetId]: £value }, totalValue }
 *
 * The PnL table is derived from these snapshots client-side — no extra reads needed.
 */
export async function recordSegmentSnapshots(sessionId, segmentIndex, segmentLabel, currentPrices) {
  const snap  = await getDocs(collection(db, 'sessions', sessionId, 'players'));
  const batch = writeBatch(db);
  for (const docSnap of snap.docs) {
    const p = docSnap.data();
    const assetValues = {};
    let totalValue = p.cash ?? 0;
    for (const [assetId, qty] of Object.entries(p.holdings ?? {})) {
      const val = (currentPrices[assetId] ?? 0) * qty;
      assetValues[assetId] = Math.round(val);
      totalValue += val;
    }
    const snapshot = {
      segmentIndex,
      label: segmentLabel,
      cash: Math.round(p.cash ?? 0),
      holdings: { ...(p.holdings ?? {}) },
      assetValues,
      totalValue: Math.round(totalValue),
    };
    // segmentSnapshots is an array — use index as the slot
    batch.update(docSnap.ref, { [`segmentSnapshots.${segmentIndex}`]: snapshot });
  }
  await batch.commit();
}

export async function markPlayerReady(sessionId, playerId, segmentIndex) {
  await updateDoc(doc(db, 'sessions', sessionId, 'players', playerId), {
    readyForSegment: segmentIndex,
  });
}

/**
 * Delete all player documents for a session and reset the game code's
 * activeUsers counter to 0. Called when the teacher ends or closes a session
 * so stale players don't accumulate across runs.
 */
export async function cleanupSessionPlayers(sessionId, gameCode) {
  try {
    const snap  = await getDocs(collection(db, 'sessions', sessionId, 'players'));
    const batch = writeBatch(db);
    for (const docSnap of snap.docs) {
      batch.delete(docSnap.ref);
    }
    // Reset activeUsers counter on the game code
    if (gameCode) {
      batch.update(doc(db, 'gameCodes', gameCode), { activeUsers: 0 });
    }
    await batch.commit();
  } catch (err) {
    console.warn('[cleanupSessionPlayers] Non-fatal:', err.message);
  }
}

// ─── Archive ──────────────────────────────────────────────────────────────

/**
 * Archive a session: write a summary record to /archivedSessions, then
 * delete all player docs and the session document itself.
 * Returns the archive record for immediate display.
 */
export async function archiveSession(sessionId, gameCode, adminUid) {
  // 1. Read session doc
  const sessionSnap = await getDoc(doc(db, 'sessions', sessionId));
  const sessionData = sessionSnap.exists() ? sessionSnap.data() : {};

  // 2. Read players — compute P/L using startingCash from game config
  const startingCash = sessionData.gameConfig?.startingCash ?? 0;
  const playersSnap  = await getDocs(collection(db, 'sessions', sessionId, 'players'));
  const players = playersSnap.docs.map(d => {
    const p = d.data();
    // Total portfolio value = cash + value of all holdings at final prices
    const currentPrices = sessionData.currentPrices ?? {};
    const holdingsValue = Object.entries(p.holdings ?? {})
      .reduce((sum, [assetId, qty]) => sum + (currentPrices[assetId] ?? 0) * qty, 0);
    const totalValue = (p.cash ?? 0) + holdingsValue;
    const pnl        = startingCash > 0 ? totalValue - startingCash : null;
    const pnlPct     = startingCash > 0 ? ((pnl / startingCash) * 100) : null;
    return {
      nickname:    p.nickname,
      finalCash:   Math.round(p.cash ?? 0),
      holdings:    p.holdings ?? {},
      totalValue:  Math.round(totalValue),
      pnl:         pnl !== null ? Math.round(pnl) : null,
      pnlPct:      pnlPct !== null ? Math.round(pnlPct * 10) / 10 : null,
    };
  });

  // 3. Build archive record — look up game code doc (try both TENENT-XXXX and bare XXXX)
  const archiveRef   = doc(collection(db, 'archivedSessions'));
  const tenentCode   = gameCode.startsWith('TENENT-') ? gameCode : `TENENT-${gameCode}`;
  const bareCode2    = gameCode.replace(/^TENENT-/, '');
  let codeSnap = await getDoc(doc(db, 'gameCodes', tenentCode)).catch(() => null);
  if (!codeSnap?.exists()) {
    codeSnap = await getDoc(doc(db, 'gameCodes', bareCode2)).catch(() => null);
  }
  const codeData     = codeSnap?.data() ?? {};
  const schoolName   = codeData.schoolName   ?? sessionData.schoolName ?? gameCode;
  const gameName     = codeData.gameName     ?? 'Trading Game Jr';
  const teacherEmail = codeData.teacherEmail ?? '';

  const record = {
    id: archiveRef.id,
    sessionId,
    gameCode,
    schoolName,
    gameName,
    teacherEmail,
    startingCash,
    gameConfigId:   sessionData.gameConfigId   ?? '',
    gameConfigName: sessionData.gameConfig?.name ?? '',
    status:         sessionData.status          ?? 'unknown',
    playerCount:    players.length,
    players,
    createdAt:  sessionData.createdAt  ?? null,
    startedAt:  sessionData.startedAt  ?? null,
    endedAt:    sessionData.endedAt    ?? null,
    archivedAt: serverTimestamp(),
    archivedBy: adminUid,
  };

  // 4. Write archive, delete players + session in one batch
  const batch = writeBatch(db);
  batch.set(archiveRef, record);
  for (const docSnap of playersSnap.docs) batch.delete(docSnap.ref);
  if (sessionSnap.exists()) batch.delete(sessionSnap.ref);
  // Reset activeUsers on whichever code format was found
  if (codeSnap?.exists()) {
    batch.update(codeSnap.ref, { activeUsers: 0 });
  }
  await batch.commit();

  return record;
}

/**
 * Fetch all archived sessions visible to this admin, newest first.
 */
export async function getArchivedSessions(adminUid) {
  const q = query(
    collection(db, 'archivedSessions'),
    where('archivedBy', '==', adminUid),
    orderBy('archivedAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

/**
 * Hard-delete a session and all its player docs with no archive record.
 * Use for test/bug sessions you never want to see again.
 */
export async function deleteSession(sessionId, gameCode) {
  const sessionSnap  = await getDoc(doc(db, 'sessions', sessionId));
  const playersSnap  = await getDocs(collection(db, 'sessions', sessionId, 'players'));

  const batch = writeBatch(db);
  for (const docSnap of playersSnap.docs) batch.delete(docSnap.ref);
  if (sessionSnap.exists()) batch.delete(sessionSnap.ref);

  // Try to reset activeUsers on whichever code format exists
  const tenentCode = gameCode.startsWith('TENENT-') ? gameCode : `TENENT-${gameCode}`;
  const bareCode   = gameCode.replace(/^TENENT-/, '');
  for (const c of [tenentCode, bareCode]) {
    const cs = await getDoc(doc(db, 'gameCodes', c)).catch(() => null);
    if (cs?.exists()) {
      batch.update(doc(db, 'gameCodes', c), { activeUsers: 0 });
      break;
    }
  }

  await batch.commit();
}

/**
 * Fetch all live sessions (status != ended) so the admin can archive them manually.
 */
export async function getLiveSessions(gameCode) {
  const q = query(
    collection(db, 'sessions'),
    where('gameCode', '==', gameCode)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/**
 * Get all sessions across all game codes owned by this admin.
 */
export async function getAllSessions(adminUid) {
  const codes = await getAllGameCodes(adminUid);
  const seen  = new Set();        // dedup by Firestore document id
  const allSessions = [];

  for (const code of codes) {
    // Sessions may store gameCode as "TENENT-XXXX" or bare "XXXX" — check both
    const tenentCode = code.code.startsWith('TENENT-') ? code.code : `TENENT-${code.code}`;
    const bareCode   = code.code.replace(/^TENENT-/, '');

    for (const variant of [tenentCode, bareCode]) {
      const snap = await getDocs(
        query(collection(db, 'sessions'), where('gameCode', '==', variant))
      );
      for (const d of snap.docs) {
        if (seen.has(d.id)) continue;
        seen.add(d.id);
        const playersSnap = await getDocs(collection(db, 'sessions', d.id, 'players'));
        allSessions.push({
          id: d.id,
          playerCount: playersSnap.size,
          schoolName:  code.schoolName,
          gameName:    code.gameName    ?? 'Trading Game Jr',
          teacherEmail: code.teacherEmail ?? '',
          ...d.data(),
        });
      }
    }
  }
  return allSessions.sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
}

// ─── Role checks ──────────────────────────────────────────────────────────

export async function isAdmin(uid) {
  const snap = await getDoc(doc(db, 'admins', uid));
  return snap.exists();
}

export async function getAdminRole(uid) {
  const snap = await getDoc(doc(db, 'admins', uid));
  return snap.exists() ? snap.data() : null; // returns full object: { role, gameCode, email, ... }
}

// ─── Usage stats ──────────────────────────────────────────────────────────

export async function getUsageStats(uid) {
  const codes = await getAllGameCodes(uid);
  return codes.map(c => ({
    code: c.code, school: c.schoolName,
    maxPlays: c.maxPlays, playsUsed: c.playsUsed ?? 0,
    maxUsers: c.maxUsers, activeUsers: c.activeUsers ?? 0,
    status: c.status, startDate: c.startDate, endDate: c.endDate,
  }));
}
