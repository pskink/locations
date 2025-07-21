module.exports = {
  globDirectory: "build/web/",
  globPatterns: ["**/*.{json,otf,ttf,js,wasm,png,html}"],
  swSrc: "web/service_worker.js",
  swDest: "build/web/service_worker.js",
  maximumFileSizeToCacheInBytes: 10000000,
};
