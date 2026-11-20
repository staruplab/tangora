const CACHE_NAME='tangora-shell-v4';
const CORE=['./','./index.html','./manifest.json','./supabase-config.js','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];
const CDN='https://cdn.jsdelivr.net/';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
// Network-first: always try the latest files, fall back to cache when offline.
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin&&!url.href.startsWith(CDN))return;
 event.respondWith(fetch(req).then(res=>{
  if(res&&(res.ok||res.type==='opaque')){const copy=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy))}
  return res;
 }).catch(()=>caches.match(req).then(c=>c||(req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
