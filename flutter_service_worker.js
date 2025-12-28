'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"CNAME": "bfa71b48893c9d6669ae8d217b95addf",
"index.html": "c6759376bc3addce055428a584bdd0b0",
"/": "c6759376bc3addce055428a584bdd0b0",
"version.json": "e1cac55fbd32bfb935b06a8bdc100b49",
"flutter_bootstrap.js": "aa96ce5fc4fa64fe2a6e0a69736df56e",
"manifest.json": "7feba401772292ed172c58627e5bfab1",
"assets/fonts/MaterialIcons-Regular.otf": "cd455a982f27b7786c8da6b690100adc",
"assets/AssetManifest.bin": "37e522586d21c2b236dd64429106026d",
"assets/AssetManifest.bin.json": "b7ea340ffa237588154431c7fad5841f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "f1fac69b8f937173a642ca6806a681ef",
"assets/assets/icon/icon.png": "29372f7ae012e213b4917a9c09a004d8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "c0e8e76337d75fb33e8223775c690192",
"assets/lib/features/dashboard/bancodedados.json": "37f5ba37a2f67bb3981397edd0c24281",
"favicon.png": "f596194e8673391016d9e1130f283bfa",
"main.dart.js": "63a85a36fa2dae44b038d0bd21986581",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"icons/Icon-maskable-192.png": "23da01e64a88d581b777ac924b07a89c",
"icons/Icon-512.png": "764d4a6b7418ef58274baffccf41bec6",
"icons/Icon-192.png": "23da01e64a88d581b777ac924b07a89c",
"icons/Icon-maskable-512.png": "764d4a6b7418ef58274baffccf41bec6",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/config": "3a7a681fcd920d5492a2874981865611",
".git/COMMIT_EDITMSG": "30bf597ffd3e8822a30be1aac20a7baa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/19/1c5701de3fc9e25577810cee7633b2162afa92": "636af33b8c3f9d6390c99f7c3b71faf0",
".git/objects/a8/25cb39f959f63535d14bcf0846d4ba14d91237": "10047354823958cd916bb52cd258a6fa",
".git/objects/33/07316c00f9d6659c545c812e68224a1bf2d110": "fe425d66e0dd8a0060a0c3eb35cd4524",
".git/objects/65/1b6504d58b3a1c003ced87432a3b08c7e9ca99": "cbc3e28d9000420c40713fcf8aade5c3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bb/c50340ecc3c3bbf9d6ee6a12dabcc2e6407388": "f34463cdbe175dff3abf6d94e2fe1737",
".git/objects/57/908fd3a39a6b99ec8f21c9372dca1d95b80efc": "a30dc3464043e9b640b2fec759c99c37",
".git/objects/c8/0f1c2887537b15b4b71db0ac54d253e9a64cfc": "a6af12d2c0b89b21c1a79de3b288caac",
".git/objects/95/1c4bbcc8aa6cf0d100e8dc711eeaf8f337449a": "c4fcf59ed1ebb1ae7e81dc1254c110b6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/52/4adabd2290ecd6fe61b7ba5d19f785547f1859": "d55dfda81d841d73371a3bcbe94bf563",
".git/objects/f6/2f1befd14ba890f13f292806d29fe73a129981": "fbe661b99378f54c8815cccfebd2e37f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/4f215b690a7aedebcf41706c38784c974805f7": "3f74ab4b4dd56eee38aaa852725bdc0f",
".git/objects/25/49b966248964dd3869a6f36480740c73d009ad": "fb8567c66575506fab94dfbc172e6a32",
".git/objects/e7/6c5aa3a8937b77f7c8784e8b06e8774fc83355": "95b630299e9315e0dc944c05f00bcd4f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c4/34113d78106203a211b2afef3f31294022ccba": "a866d3e9d2a4d2a6b865e3bd53f76a2c",
".git/objects/91/6ac18adf5f0e09e6641b25a0c0238960246e41": "e4808f86e2f6a3dbe650f4cc82aefe94",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/30/cdbb996726b000d6ca16a9461db8447795af93": "c5168e7f33c7041a77edbe89f71fc92c",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/af/1813424f0912ca000b3020b9ee905145fbb2a6": "c2f2bb12a3870b306ec8adf96e72f67e",
".git/objects/88/77f662130169ed945a33e8f5089c58ae080f6e": "945d94be8eb845bd7c280dce48a403f0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/78/6e955532adb73a9d87fbc869f9558f616922d2": "2edda7992fea0d875ffb38491b334fb1",
".git/objects/fc/06e875f2d0d8dc55de64ef4d093a654fc3828b": "f401e2c3551273f2a46dc467416d4084",
".git/objects/35/f67eed8c89e29dcab6da001945eff35556f964": "f8b8a1a961ae4becc30e1dfbb083ecc1",
".git/objects/35/d6c3ec200a7149082976c9610114b199aad3bb": "db19b7f667c23e94be44585ff2a23056",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/28/4e6f7e76dbb63eef219f312e74cbdc3594c056": "2fd994000a4c1cd63346a08ee5197430",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/3d/a571819375ce92f13bb6399e5e36cdc1d649d3": "a1559e486c513d692dc83647a8031464",
".git/objects/f4/0d4aef6e83774c6127c51315d8d81ca0e735ec": "286bef49732c3f0f9093b7910ee5f840",
".git/objects/ef/e00c3ce968c99081b33594cb4d9761045282ee": "50ab8e9ec5d144ffb0418787a6f8daee",
".git/objects/f8/54e2f989e232baf6595bc563228c294098a756": "06d13e7178af420087bc2c8486404228",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "56eab02b02c56c7a752cf0de7da01ea1",
".git/logs/refs/heads/main": "28f4c792e0441a5fdea410a199bef1bd",
".git/logs/refs/remotes/origin/main": "3acd97e67315619571ba85139490fbd6",
".git/refs/heads/main": "9c334047035699dcba746d8ef862ecd1",
".git/refs/remotes/origin/main": "9c334047035699dcba746d8ef862ecd1",
".git/index": "30b8a0012fe339a63258168cab31a060",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
