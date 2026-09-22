/* ===== Service Worker: تخزين مؤقت كامل للعمل دون إنترنت ===== */
const CACHE = "gl-cache-v13";
const ASSETS = [
  "./", "./index.html", "./manifest.json",
  "./css/style.css",
  "./js/app.js", "./js/views.js", "./js/extras.js", "./js/trainer.js", "./js/cards.js",
  "./data/core/basics.js", "./data/core/survival.js", "./data/core/stories.js", "./data/core/dictionary.js", "./data/core/life1.js", "./data/core/life2.js", "./data/core/life3.js", "./data/core/life4.js", "./data/core/life5.js", "./data/core/life6.js", "./data/core/life7.js", "./data/core/dictionary.js", "./data/core/life1.js", "./data/core/life2.js", "./data/core/life3.js", "./data/core/life4.js", "./data/core/life5.js", "./data/core/life6.js", "./data/core/life7.js", "./data/core/academy1.js", "./data/core/academy2.js", "./data/core/analyses.js",
  "./data/sales/part1.js", "./data/sales/part2.js", "./data/sales/part3.js", "./data/sales/part4.js",
  "./data/sales/part5.js", "./data/sales/part6.js", "./data/sales/part7.js", "./data/sales/part8.js",
  "./data/sales/situations.js", "./data/sales/culture.js", "./data/daily/dailySituations.js", "./data/daily/situations2.js", "./data/daily/situations3.js",
  "./data/train/trainers.js", "./data/grammar/grammar.js", "./data/grammar/verbs.js", "./data/core/imported_learn.js",
  "./icons/icon-192.png", "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* استراتيجية: الشبكة أولًا للتحديثات، ومع فشلها الكاش (أوفلاين) */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
  );
});
