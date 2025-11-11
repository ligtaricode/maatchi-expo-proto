export function displayPrice(p){
  if(p == null) return '';
  const s = String(p).trim();
  if(/^\$/.test(s)) return s;
  const n = Number(s);
  if(!isFinite(n)) return s;
  return `$${n.toFixed(2)}`;
}
