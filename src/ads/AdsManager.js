const counters = {};
const lastShownAt = {};

export function shouldShow(placementId, opts = {}){
  const { every = 4, minIntervalS = 30 } = opts;
  const now = Date.now();
  const last = lastShownAt[placementId] || 0;
  if (now - last < minIntervalS * 1000) return false;
  const n = (counters[placementId] || 0) + 1;
  counters[placementId] = n;
  return n % every === 0;
}

export function notifyShown(placementId){
  lastShownAt[placementId] = Date.now();
}
