const superApp = "super-app-v3"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(superApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

self.addEventListener('activate', function(event) {
  var cachesToKeep = superApp;

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
