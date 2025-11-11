const RAPID_API_KEY = process.env.RAPID_API_KEY || 'YOUR_RAPIDAPI_KEY';
const HOSTS = {
  sephora: 'real-time-sephora-api.p.rapidapi.com',
  ulta: 'ultabirthdaygift.p.rapidapi.com'
};
export async function rapidApiGet(hostKey, path, params = {}){
  const host = HOSTS[hostKey];
  if(!host) throw new Error('Unknown host: ' + hostKey);
  const url = new URL('https://' + host + path);
  Object.entries(params).forEach(([k,v])=> url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: { 'X-RapidAPI-Key': RAPID_API_KEY, 'X-RapidAPI-Host': host }
  });
  if(!res.ok) throw new Error('Request failed: ' + res.status);
  return res.json();
}
