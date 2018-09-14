
var CACHENAME = 'loop-timer-cache-v' + 1;

self.addEventListener('install', function (event) {
    console.log("[Service worker] Installed");
});

self.addEventListener('activate', function (event) {

    console.log("[Service worker] Activated");

    return event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
            if (key != CACHENAME) {
                return caches.delete(key);
            } else {
                return Promise.resolve();
            }
        }));
    }));

});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }

            return fetch(event.request).then(function (response) {
                var shouldCache = response.ok;

                if (shouldCache) {

                    return caches.open(CACHENAME).then(function (cache) {
                        console.log("[Service worker] Cached:" + response.clone())
                        cache.put(event.request, response.clone());
                        return response;
                    });
                } else {
                    return response;
                }
            });
        })
    );
});