const cacheName = 'master-ip-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './A_logo_design_for_"Master_IP_Security"_is_set_agai.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
