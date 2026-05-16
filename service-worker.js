const CACHE_NAME = 'budget-maison-v20260516-2030-analyse-cagnotte';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const isHtml = req.mode === 'navigate' || req.url.endsWith('/') || req.url.includes('index.html');
  if (isHtml) {
    event.respondWith(
      fetch(req).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
        return response;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(response => response || fetch(req).then(networkResponse => {
      const copy = networkResponse.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return networkResponse;
    }))
  );
});
