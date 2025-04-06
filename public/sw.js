const cacheData = 'Auto-Access';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                'static/js/bundle.js',
                '/index.html',
                '/',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {

            if(event.request.url.endsWith('.png') || event.request.url.endsWith('.webp') ||
                event.request.url.endsWith('.jpg') || event.request.url.endsWith('.jpeg')  ) {
                if(cachedResponse) {
                    return cachedResponse
                } else {
                    return fetchAndCacheImage(event.request);
                }
            }

            return fetch(event.request).catch((error) => {
                console.error('Fetch error:', error);
            });
        })
    );
});


const imageCache = 'images';

function fetchAndCacheImage(request) {
    return fetch(request).then((networkResponse) => {
        const clonedResponse = networkResponse.clone();

        caches.open(imageCache).then((cache) => {
            cache.put(request, clonedResponse);
        });

        return networkResponse;
    }).catch((error) => {
        console.error('Image fetch error:', error);
        return new Response('Image fetch error: Unable to fetch the resource.');
    });
}

const userCache = 'user-data';