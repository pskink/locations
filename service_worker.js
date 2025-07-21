// run: workbox injectManifest web/workbox-config.js

  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
  );

  const { precacheAndRoute } = workbox.precaching;
  CACHE_FILES = [{"revision":"47795b30cb448a1ada04803c8d225de5","url":"assets/AssetManifest.bin.json"},{"revision":"73e86a1fd3c3f324829498b024b42802","url":"assets/AssetManifest.json"},{"revision":"dc3d03800ccca4601324923c0b1d6d57","url":"assets/FontManifest.json"},{"revision":"0ec5baa26cf71a9926ab28daab6818d3","url":"assets/fonts/MaterialIcons-Regular.otf"},{"revision":"293d8a6fe69ee6342a85948f9197e937","url":"assets/images/back.png"},{"revision":"825e75415ebd366b740bb49659d7a5c6","url":"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf"},{"revision":"728b2d477d9b8c14593d4f9b82b484f3","url":"canvaskit/canvaskit.js"},{"revision":"a37f2b0af4995714de856e21e882325c","url":"canvaskit/canvaskit.wasm"},{"revision":"8191e843020c832c9cf8852a4b909d4c","url":"canvaskit/chromium/canvaskit.js"},{"revision":"c054c2c892172308ca5a0bd1d7a7754b","url":"canvaskit/chromium/canvaskit.wasm"},{"revision":"ea559890a088fe28b4ddf70e17e60052","url":"canvaskit/skwasm.js"},{"revision":"1c93738510f202d9ff44d36a4760126b","url":"canvaskit/skwasm.wasm"},{"revision":"5dcef449791fa27946b3d35ad8803796","url":"favicon.png"},{"revision":"a49842ea06b3ee846fbfe177d36c49a7","url":"flutter_bootstrap.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"flutter_service_worker.js"},{"revision":"83d881c1dbb6d6bcd6b42e274605b69c","url":"flutter.js"},{"revision":"b7d6034532b059d8ac3b262d45aab7c7","url":"icons/Icon-192.png"},{"revision":"508b77236fe63febab6fdd09e847bf00","url":"icons/Icon-512.png"},{"revision":"b7d6034532b059d8ac3b262d45aab7c7","url":"icons/Icon-maskable-192.png"},{"revision":"508b77236fe63febab6fdd09e847bf00","url":"icons/Icon-maskable-512.png"},{"revision":"abf31dee4415893b22751c938481d4bf","url":"index.html"},{"revision":"da42838450eac390b320cccccb87de1d","url":"init.js"},{"revision":"6273ad5d4fe3b932a04a172f31414a29","url":"main.dart.js"},{"revision":"92ff497415cf98962c933af1aa4c83b4","url":"main.dart.wasm"},{"revision":"af908a241e298bbbc368e29142f3c73a","url":"manifest.json"},{"revision":"9b41723a4ea26d813f4cc783d26092e9","url":"version.json"},{"revision":"7119be74d2cf6b9d2d3151d1f74610af","url":"workbox-config.js"}] ?? [];
  precacheAndRoute(CACHE_FILES);

  self.addEventListener("install", function (event) {
    self.skipWaiting();
    console.log("installed");
  });

  self.addEventListener("activate", () => {
    console.log("activated");
    console.log("Claiming control");
    return self.clients.claim();
  });

