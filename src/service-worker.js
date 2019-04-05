const cacheVersion = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion).then(cache =>
            cache.addAll([
                './',
                './assets/js/app.js',
                './index.html',
                './PA.html',
                './PE.html',
                './PET.html',
                './PC.html',
                './PEEK.html',
                './PMMA.html',
                './POM.html',
                './PP.html',
                './PTFE.html',
                './PVC.html',
                './PVDF.html',
                './assets/css/app.css',

            ]))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

