'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "95109aec03330ca5e24d9779c325731c",
"assets/AssetManifest.json": "d153157ba5f4d459dc8fab55a1d02a2c",
"assets/assets/anim/nodata.json": "757e7af7ec78258c82dcd57081a51e29",
"assets/assets/icons/backery.svg": "4860f228c0b4098e3d796cc6d119a250",
"assets/assets/icons/check.svg": "8f730505192d0986b5ce50239091a308",
"assets/assets/icons/coffe.svg": "8c5db9b734223cd16661752b823c1efc",
"assets/assets/icons/delivery_car.svg": "acbe7517e9c8b156fc031eb87253d91c",
"assets/assets/icons/finish.svg": "146d7e5c850c85ce6b8f85c84f99e9ea",
"assets/assets/icons/limonade.svg": "9a4ad7c77188b901b6e0953288a34e4b",
"assets/assets/icons/menu.svg": "190d8f471c9a1addae7aa7981fc79b02",
"assets/assets/icons/pizza.svg": "bb956659ce7aa8a29ee41b207ff71fb2",
"assets/assets/images/backery_1.png": "41db24d2750b85a9fc8bf7bf0e12ca49",
"assets/assets/images/backery_2.png": "c0d39334b4cce305446712ea675b085d",
"assets/assets/images/backery_3.png": "305b79ec9c47dd9bbd43f515b59ec1c8",
"assets/assets/images/backery_4.png": "ab8ffcb0d755f2a6e48b0ed756e02165",
"assets/assets/images/backery_5.png": "3795d82ec9a25f64905f5c2c0acff3d5",
"assets/assets/images/backery_6.png": "150958bffbdcac0abe28a3a211b143e5",
"assets/assets/images/coffee_1.png": "ccf0d64466befeec8e2aa64dce32120c",
"assets/assets/images/coffee_2.png": "24222f7e81846ea4e82b58dfcd33aabd",
"assets/assets/images/coffee_3.png": "e24b98fc826b22efae750738ec701283",
"assets/assets/images/coffee_4.png": "23d7e1c4c60f853173a1b4154ccdae58",
"assets/assets/images/coffee_5.png": "2815bd8779d492d1927540910a5ba286",
"assets/assets/images/coffee_6.png": "51472c7ac3ea33d7bd38c89ebddc4745",
"assets/assets/images/cola.png": "d2d054907dceb935af975fa58e03ce92",
"assets/assets/images/flesh.png": "61fc77d0d39140d4b68a9ed2b44d2640",
"assets/assets/images/logo.png": "4c6ddce83dd6bedb772939e10a00254b",
"assets/assets/images/logo_g.jpg": "4d64f18e06126c84a2f06315f024cdd1",
"assets/assets/images/mohito.png": "7992842a377ccf5210e416a588baa9a4",
"assets/assets/images/pepsi.png": "4480b976756a72602d180d3e802bd8ee",
"assets/assets/images/pizza_1.png": "6e7faa0d7a8c1175253a8ee0cfe472b3",
"assets/assets/images/pizza_2.png": "baf231ef9a7989fe5d23836442533795",
"assets/assets/images/pizza_3.png": "75e6f389bf35b7fa359ddde8c969de19",
"assets/assets/images/pizza_4.png": "b9df32cea6c9915ef15d05c0f6bc3e3a",
"assets/assets/images/pizza_5.png": "b3bdb70154d0be60efb6138da2e846bf",
"assets/assets/images/pizza_6.png": "06a8d5ed508b9dff115db4364a0a70d6",
"assets/assets/images/redbul.png": "b9f29bb0267599da6b6096c32d418b90",
"assets/assets/images/russian.png": "0235a02a378ae8258b61557aa94f1859",
"assets/assets/images/tornodo.png": "d6363e684b3fde27c46cf98536cb71b2",
"assets/assets/images/uzbek.png": "60d0efec65680f8465a56dd683bc9115",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "41a50fee12446f45821e8a6afdabc52f",
"assets/NOTICES": "afa207e88d8de5bc3d1117fb092c7502",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "690f33648c8f90f3dda0fc2e96dce1d9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f4bb1b1a645c640b1aa8badd32e637b",
"/": "9f4bb1b1a645c640b1aa8badd32e637b",
"main.dart.js": "d24078d9fd265259de0fafb7d6dc1128",
"manifest.json": "d4928d0ed518144db23720ed29694f49",
"version.json": "f75f7086035e5a4e59868e1ec7f029aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
