const CACHE_NAME = 'campus-reporter-v1';
// Add any additional local assets (like local CSS/JS libraries) to this array
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'Reporter.png'
];

// Install Event - Caching the structural layout assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clearing old layout cache frames
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Serves cached layout directly while letting Sheets handling fall back online
self.addEventListener('fetch', (event) => {
  // Do not intercept or cache your live Google Apps Script database queries
  if (event.request.url.includes('script.google.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});