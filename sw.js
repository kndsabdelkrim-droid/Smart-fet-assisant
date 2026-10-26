const CACHE = 'smart-fet-v1';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './js/app.js',
    './js/smart-core.js',
    './js/fet-exporter.js',
    './js/duty-engine.js',
    './js/assignment-engine.js',
    './js/sync-engine.js',
    './data/default.json'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached =>
            cached || fetch(e.request).then(resp => {
                const clone = resp.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
                return resp;
            }).catch(() => caches.match('./index.html'))
        )
    );
});
