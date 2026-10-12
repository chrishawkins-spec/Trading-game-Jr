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
