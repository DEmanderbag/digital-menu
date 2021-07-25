const staticCacheName = 'white-label-v1';
const assets = [
  '/',
  '/index.html',
  '/app.js',
  '/data/addons-en.json',
  '/data/addons-sr.json',
  '/data/burgers-en.json',
  '/data/burgers-sr.json',
  '/data/dips-en.json',
  '/data/dips-sr.json',
  '/data/sides-en.json',
  '/data/sides-sr.json',
  '/data/snacks-en.json',
  '/data/snacks-sr.json',
  '/data/sweets-en.json',
  '/data/sweets-sr.json',
  '/js/localization.js',
  '/js/dates.js',
  '/js/request.js',
  '/scss/main.css',
  '/assets/icons/share.svg',
  '/assets/icons/close.svg',
  '/assets/icons/cake-slice.svg',
  '/assets/icons/corn-dog.svg',
  '/assets/icons/donut.svg',
  '/assets/icons/fried-egg.svg',
  '/assets/icons/fried-potatoes.svg',
  '/assets/icons/hamburger.svg',
  '/assets/icons/seasoning.svg',
  '/assets/icons/sandwich.svg',
  '/assets/logos/favicon-32x32.png',
  '/assets/logos/android-chrome-192x192.png',
  '/manifest.json'
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});