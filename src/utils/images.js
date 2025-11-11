export function normalizeImageSource(url){
  if(typeof url === 'number'){ return url; }
  if(typeof url === 'string' && /^https?:\/\//i.test(url)){ return { uri: url }; }
  return null;
}
export function isHttpUrl(url){ return typeof url === 'string' && /^https?:\/\//i.test(url); }
