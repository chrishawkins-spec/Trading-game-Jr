/**
 * Realtime Database Service
 * Low-latency broadcasting to all players.
 *
 * /live/{sessionId}/prices       — current prices
 * /live/{sessionId}/status       — 'lobby'|'trading'|'news'|'paused'|'countdown'|'ended'
 * /live/{sessionId}/segment      — { index, news, updatedAt }
 * /live/{sessionId}/ticker       — recent price ticks
 * /live/{sessionId}/countdown    — 3|2|1|0|null
 */

import { ref, set, onValue, off } from 'firebase/database';
import { rtdb } from '../firebase.js';

export const broadcastPrices   = (sid, prices)  => set(ref(rtdb, `live/${sid}/prices`), prices);
export const broadcastStatus   = (sid, status)  => set(ref(rtdb, `live/${sid}/status`), status);
export const broadcastCountdown= (sid, n)       => set(ref(rtdb, `live/${sid}/countdown`), n);
export const broadcastTicker   = (sid, history) => set(ref(rtdb, `live/${sid}/ticker`), history.slice(-60));

export function broadcastSegment(sid, segmentIndex, newsStory) {
  return set(ref(rtdb, `live/${sid}/segment`), {
    index: segmentIndex,
    news: newsStory ?? null,
    updatedAt: Date.now(),
  });
}

const sub = (path, cb) => {
  const r = ref(rtdb, path);
  onValue(r, snap => cb(snap.val()));
  return () => off(r);
};

export const subscribeLivePrices   = (sid, cb) => sub(`live/${sid}/prices`,    cb);
export const subscribeLiveStatus   = (sid, cb) => sub(`live/${sid}/status`,    cb);
export const subscribeLiveSegment  = (sid, cb) => sub(`live/${sid}/segment`,   cb);
export const subscribeLiveTicker   = (sid, cb) => sub(`live/${sid}/ticker`,    cb);
export const subscribeLiveCountdown= (sid, cb) => sub(`live/${sid}/countdown`, cb);

export const cleanupSession = (sid) => set(ref(rtdb, `live/${sid}`), null);

import { remove } from 'firebase/database';

export const clearLiveSession = (sid) =>
  remove(ref(rtdb, `live/${sid}`));