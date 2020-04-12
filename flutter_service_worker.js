'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fb504fd37cb3ffb95755421212a85c91",
"assets/FontManifest.json": "1e92009be2f92c6484b9b186bcad01c8",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b5e144e2e26e198a113a56e7f4cc999f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/web/fonts/ComicNeue-Bold.ttf": "d700ff9cac24ac4fc0d2a3b43adf323e",
"assets/web/fonts/ComicNeue-Italic.ttf": "0794428ea01b7681126968e38b7fc1a8",
"assets/web/fonts/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"assets/web/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fonts/ComicNeue-Bold.ttf": "d700ff9cac24ac4fc0d2a3b43adf323e",
"fonts/ComicNeue-BoldItalic.ttf": "f4f06f94eb31a7800ecae9cb48cfc499",
"fonts/ComicNeue-Italic.ttf": "0794428ea01b7681126968e38b7fc1a8",
"fonts/ComicNeue-Light.ttf": "e749e21e07ade1074aa76c14d6e0a97b",
"fonts/ComicNeue-LightItalic.ttf": "ed523d48462dd8dfbfd65971aa30bf23",
"fonts/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "667d4db57372db2ed46b00f7a5880b19",
"/": "667d4db57372db2ed46b00f7a5880b19",
"main.dart.js": "74edd511e973f126f21fae524c30f9be",
"manifest.json": "ff5fa0497ce2a08a1779058e677706f3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
