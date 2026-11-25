/*
 * Bruma Planner service worker.
 *
 * Build-time values (`BUILD`, `PRECACHE`) are injected into out/sw.js by
 * scripts/build-sw-manifest.mjs after `next build`. The copy in public/ keeps the
 * placeholders and is only registered in production builds.
 *
 * Strategies:
 * - navigations: network first, fallback to the route HTML precached for THIS build
 *   (/, /trip/, /share/…). Network responses are never written to the cache: HTML from a newer
 *   deploy would point at chunks this build's cache does not have.
 * - app assets (_next/static, icons, fonts, manifest): cache first (precached per build)
 * - RSC payloads and other same-origin GETs: network first, cache fallback; precached entries
 *   are never overwritten at runtime
 * - photos (local and Wikimedia, loaded with crossOrigin): cache first at runtime, capped
 * - Wikipedia/Wikidata/Commons API: stale-while-revalidate, capped
 * - Open-Meteo and Frankfurter: network only — forecasts and rates must not be served stale;
 *   the app keeps its own `kv` cache with an offline fallback and labels its source
 * - OpenFreeMap tiles/styles/fonts: only what was viewed, cache first, capped (no prefetching)
 * - Photon and OSRM: network only (not intercepted; the app handles their failures)
 * Runtime caches are trimmed on activate and, probabilistically, after writes.
 */

const BUILD = "84920f97d78f";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._tree.txt","_next/static/NoY4cYOD86P8gTAIyY7XA/_buildManifest.js","_next/static/NoY4cYOD86P8gTAIyY7XA/_clientMiddlewareManifest.js","_next/static/NoY4cYOD86P8gTAIyY7XA/_ssgManifest.js","_next/static/chunks/009v6q2_by2_p.js","_next/static/chunks/01i1pln4lfti5.js","_next/static/chunks/021svqwtb609t.js","_next/static/chunks/034_kw280abob.js","_next/static/chunks/03figrwcbld2l.js","_next/static/chunks/058i7_0d0cdjt.css","_next/static/chunks/05d9x160aq9x2.js","_next/static/chunks/05ktbad31x756.css","_next/static/chunks/07jnlscc30k29.js","_next/static/chunks/087ber537ep7d.js","_next/static/chunks/09gaa7cynqgz0.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0a21r0i7elpt1.js","_next/static/chunks/0auvmzsxpv_dg.js","_next/static/chunks/0ax8v8qts_wht.js","_next/static/chunks/0bgp_r0simlbw.js","_next/static/chunks/0c9nv2owxj5ki.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d2hhu2ozaneq.js","_next/static/chunks/0f-mbkb9mzvlc.js","_next/static/chunks/0g-hbs8gh45_y.css","_next/static/chunks/0g2o4o4d645i-.js","_next/static/chunks/0h7mu00v9shi3.js","_next/static/chunks/0hws72wj3ujy6.css","_next/static/chunks/0i4axtsz3m1kg.js","_next/static/chunks/0kjqmndhzqjvt.js","_next/static/chunks/0lc7bui760ul-.js","_next/static/chunks/0r7yf1r0nsv8y.js","_next/static/chunks/0rc2-rfewhxfn.js","_next/static/chunks/0s8_qwm2-hdzo.js","_next/static/chunks/0tgpamp2vx2z8.js","_next/static/chunks/0tv99k8c771ip.js","_next/static/chunks/0ukpdn8laemks.css","_next/static/chunks/0v2veuly0r2bq.js","_next/static/chunks/0vqn2jkjvkh8y.js","_next/static/chunks/0wmzj72nst2ae.css","_next/static/chunks/0wx37m3umr3u1.js","_next/static/chunks/0xxoil19ph1xc.css","_next/static/chunks/0z-4pgbdh68d0.js","_next/static/chunks/0zb7bmb96skfq.js","_next/static/chunks/0zij43j8cf_gk.css","_next/static/chunks/0zww45_ja1mux.js","_next/static/chunks/1-k9ld4zpesp3.js","_next/static/chunks/11d_e29mde1jh.js","_next/static/chunks/11lc86kgg7pu8.js","_next/static/chunks/13jf6hp6f5mp3.css","_next/static/chunks/13qa06diy3ixb.css","_next/static/chunks/14lk-7lx3_jln.js","_next/static/chunks/15obj0cbvnoj7.js","_next/static/chunks/15x3jl9jglz8t.js","_next/static/chunks/16bze5tcf2jla.js","_next/static/chunks/16pjdz4ldvs4p.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1_ez_q3j7tm1k.js","_next/static/chunks/1cxklukhldep-.js","_next/static/chunks/1dzchu57st292.js","_next/static/chunks/1ek7176_8n4cc.js","_next/static/chunks/1hxhk5w4fb585.js","_next/static/chunks/1i6biwk7-i4aj.js","_next/static/chunks/1ifiqsgej335a.js","_next/static/chunks/1ii15un76b8wh.css","_next/static/chunks/1j9byfrqlde7f.js","_next/static/chunks/1jds6fhs5kr94.js","_next/static/chunks/1jlvkr4dowofq.js","_next/static/chunks/1jmh-4dpvv5zn.css","_next/static/chunks/1l9i2f45n2fd2.js","_next/static/chunks/1llycmn7htddx.js","_next/static/chunks/1lm-w_gmb53hd.js","_next/static/chunks/1mdn5i-mgpdb6.css","_next/static/chunks/1opafiej1kur0.js","_next/static/chunks/1oz0_y-jc5g2r.js","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1q2xwyeoy9429.js","_next/static/chunks/1qzokbvrf7qu4.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1sree4gczpdfr.js","_next/static/chunks/1ti7mpfbwg4hj.js","_next/static/chunks/1vevmwjuqkbod.js","_next/static/chunks/1w9mx5esap7js.js","_next/static/chunks/1xoqu7403vw6v.css","_next/static/chunks/1y8jx-5p_bt08.css","_next/static/chunks/1zq296hjug-8b.js","_next/static/chunks/2-exrjrf58fad.js","_next/static/chunks/20_q4kk9sujxd.css","_next/static/chunks/20iaendyrbncm.css","_next/static/chunks/21pkjwtceth49.js","_next/static/chunks/249kln8ui-yc5.js","_next/static/chunks/25ym_qje31h_8.js","_next/static/chunks/27xlq25re3axc.js","_next/static/chunks/2areif0fou2-w.js","_next/static/chunks/2e0g6c9ft2s7j.js","_next/static/chunks/2e5z5r1wx7vs6.js","_next/static/chunks/2g-2uol215bh5.css","_next/static/chunks/2i51e627rllld.js","_next/static/chunks/2iiv74q_djch5.js","_next/static/chunks/2jdddsthde5pg.js","_next/static/chunks/2ms2g-tpis33c.css","_next/static/chunks/2mzvi080bn06u.js","_next/static/chunks/2ps8xnf105816.js","_next/static/chunks/2sl3tpv496e1t.js","_next/static/chunks/2smxp3_zv7tpm.js","_next/static/chunks/2u2gza2k-6nue.css","_next/static/chunks/2xzykf90n3jlv.js","_next/static/chunks/2ytv_61fhch06.js","_next/static/chunks/2z0mo6add_016.js","_next/static/chunks/2zl-xcbsoiq1z.js","_next/static/chunks/3118zx8-o0_uk.js","_next/static/chunks/34uef4ke94jnh.js","_next/static/chunks/35ejk-c28qnc3.js","_next/static/chunks/35u4bu4uldsjj.js","_next/static/chunks/36_tbljqukku1.css","_next/static/chunks/36v8oli0tp2cn.js","_next/static/chunks/36wld3byn162x.js","_next/static/chunks/3727bwj4tteui.css","_next/static/chunks/37qs29fnuw3jp.js","_next/static/chunks/38ij4jjaoemb_.css","_next/static/chunks/39u9gnw_jvun3.js","_next/static/chunks/3_olvta-2ze_i.js","_next/static/chunks/3d1ibw4-krtdd.css","_next/static/chunks/3e6m9j4m--a0z.js","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3hhf-k-acz8pi.css","_next/static/chunks/3hjohz9ke510b.js","_next/static/chunks/3iva8jj9o7e02.js","_next/static/chunks/3kpfjmhzt75fj.js","_next/static/chunks/3m_ekcxo5_w11.js","_next/static/chunks/3nv5uzk7szjrk.js","_next/static/chunks/3s-s8qpjb54d5.css","_next/static/chunks/3tpz4fdq_9r_d.js","_next/static/chunks/3z2i1sdr8-gb6.js","_next/static/chunks/401cmg6jjcc_j.js","_next/static/chunks/41zs8jj3v0eza.css","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/44n_wz55tcgw8.css","_next/static/chunks/450mkqoyyzn3v.js","_next/static/chunks/turbopack-0t5-rd6lf9hoq.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

const SCOPE = new URL(self.registration.scope);
const PREFIX = 'bruma-';
const STATIC_CACHE = `${PREFIX}static-${BUILD}`;
const RUNTIME = {
  tiles: `${PREFIX}tiles-v1`,
  // v2: v1 also held Open-Meteo/Frankfurter responses, which are network-only now.
  api: `${PREFIX}api-v2`,
  media: `${PREFIX}media-v1`,
};
const LIMITS = { [RUNTIME.tiles]: 2000, [RUNTIME.api]: 300, [RUNTIME.media]: 200 };
const NAV_TIMEOUT_MS = 6000;
const PROBE_PARAM = '__bruma_probe';

const TRIM_PROBABILITY = 1 / 25;

const API_HOSTS = new Set(['www.wikidata.org', 'commons.wikimedia.org']);
/** Fresh data only: the app caches these itself (`kv`) and shows its own offline fallback. */
const NETWORK_ONLY_HOSTS = new Set(['api.open-meteo.com', 'archive-api.open-meteo.com', 'api.frankfurter.dev']);
const MEDIA_HOSTS = new Set(['upload.wikimedia.org']);
const TILE_HOST = 'tiles.openfreemap.org';

const isBuilt = !BUILD.startsWith('__');
/** Absolute URLs precached for this build; runtime responses never overwrite them. */
const PRECACHED = new Set(PRECACHE.map((path) => new URL(path, SCOPE).href));

/* ───────────── lifecycle ───────────── */

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
  // No automatic skipWaiting: the page shows "new version — reload" and sends SKIP_WAITING.
});

async function precache() {
  if (!isBuilt) return;
  const cache = await caches.open(STATIC_CACHE);
  const urls = PRECACHE.map((path) => new URL(path, SCOPE).href);
  const missing = [];
  for (const url of urls) if (!(await cache.match(url))) missing.push(url);
  // Small batches keep memory low; any failure aborts install, and the browser retries later.
  for (let i = 0; i < missing.length; i += 16) {
    await Promise.all(
      missing.slice(i, i + 16).map(async (url) => {
        const response = await fetch(new Request(url, { cache: 'reload', credentials: 'same-origin' }));
        if (!response.ok) throw new Error(`precache ${url}: ${response.status}`);
        await cache.put(url, response);
      }),
    );
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // This build's precache may be incomplete (deleted by another worker's activate, evicted):
      // re-verify it and fetch what is missing before taking over tabs. Failures (offline, a newer
      // deploy on the server) are not fatal — navigation falls back to the network.
      await precache().catch(() => undefined);
      // Take over open tabs (they reload on `controllerchange`), then drop every cache of older
      // builds — including caches of workers that installed but never activated.
      await self.clients.claim();
      // A newer worker is installing or waiting: its `bruma-static-*` precache must survive. Static
      // caches are left alone now; the newest worker cleans them up when it activates.
      const newer = Boolean(self.registration.installing || self.registration.waiting);
      const keep = new Set([STATIC_CACHE, ...Object.values(RUNTIME)]);
      const names = await caches.keys();
      const stale = names.filter((name) => name.startsWith(PREFIX) && !keep.has(name) && !(newer && name.startsWith(`${PREFIX}static-`)));
      await Promise.all(stale.map((name) => caches.delete(name)));
      await Promise.all(Object.values(RUNTIME).map(async (name) => trim(await caches.open(name), LIMITS[name] || 200).catch(() => undefined)));
    })(),
  );
});

self.addEventListener('message', (event) => {
  const type = event.data && event.data.type;
  // waitUntil keeps the worker alive until activation is scheduled (the page waits for
  // `controllerchange`, with a fallback after a few seconds).
  if (type === 'SKIP_WAITING') event.waitUntil(self.skipWaiting());
  else if (type === 'GET_VERSION' && event.ports[0]) event.ports[0].postMessage({ build: BUILD });
  else if (type === 'GET_NET' && lastOnline !== null && event.source) event.source.postMessage({ type: 'bruma:net', online: lastOnline });
});

/* ───────────── connectivity reports to pages ───────────── */

let lastOnline = null;
function report(online) {
  if (lastOnline === online) return;
  lastOnline = online;
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
    for (const client of clients) client.postMessage({ type: 'bruma:net', online });
  });
}

/* ───────────── routing ───────────── */

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.searchParams.has(PROBE_PARAM)) return; // connectivity probe: always network

  if (url.origin === SCOPE.origin) {
    if (!url.pathname.startsWith(SCOPE.pathname)) return;
    const rel = url.pathname.slice(SCOPE.pathname.length);
    if (rel === 'sw.js' || rel === 'sw-manifest.json') return;
    if (request.mode === 'navigate') return event.respondWith(navigation(event, request, url));
    if (rel.startsWith('photos/')) return event.respondWith(cacheFirst(event, request, RUNTIME.media));
    if (isStaticAsset(rel)) return event.respondWith(staticAsset(event, request));
    return event.respondWith(networkFirst(event, request));
  }

  if (url.protocol !== 'https:') return;
  if (url.hostname === TILE_HOST) return event.respondWith(tiles(event, request, url));
  if (NETWORK_ONLY_HOSTS.has(url.hostname)) return event.respondWith(networkOnly(request));
  if (MEDIA_HOSTS.has(url.hostname)) return event.respondWith(cacheFirst(event, request, RUNTIME.media));
  if (API_HOSTS.has(url.hostname) || url.hostname.endsWith('.wikipedia.org')) {
    return event.respondWith(staleWhileRevalidate(event, request, RUNTIME.api));
  }
  // Everything else (Photon, OSRM, …) goes straight to the network.
});

function isStaticAsset(rel) {
  return (
    rel.startsWith('_next/static/') ||
    rel.startsWith('icons/') ||
    rel === 'icon.svg' ||
    rel === 'apple-icon.png' ||
    rel === 'manifest.webmanifest' ||
    /\.(?:woff2?|ttf|otf)$/.test(rel)
  );
}

/** Cache key of a route's HTML: the directory URL with a trailing slash, no query. */
function routeKey(url) {
  const rel = url.pathname.slice(SCOPE.pathname.length).replace(/index\.html$/, '');
  const dir = rel === '' || rel.endsWith('/') || rel.includes('.') ? rel : `${rel}/`;
  return new URL(dir, SCOPE).href;
}

async function navigation(event, request, url) {
  const key = routeKey(url);
  const cache = await caches.open(STATIC_CACHE);
  // Not written to the cache: this worker's cache belongs to its build, and the network may already
  // serve a newer deploy. The new worker precaches its own HTML at install.
  const fromNetwork = fetch(request).then(
    (response) => {
      report(true);
      return response;
    },
    (error) => {
      report(false);
      throw error;
    },
  );
  const fromCache = async () => (await cache.match(key)) || (await cache.match(key, { ignoreSearch: true })) || (await cache.match(SCOPE.href));
  try {
    return await withTimeout(fromNetwork, NAV_TIMEOUT_MS);
  } catch (error) {
    // Offline, or a very slow network: serve the cached shell if we have one, otherwise keep waiting.
    const cached = await fromCache();
    if (cached) {
      event.waitUntil(fromNetwork.catch(() => undefined));
      return cached;
    }
    return fromNetwork;
  }
}

async function staticAsset(event, request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic') {
    const cache = await caches.open(STATIC_CACHE);
    event.waitUntil(cache.put(request, response.clone()));
  }
  return response;
}

async function networkFirst(event, request) {
  try {
    const response = await fetch(request);
    report(true);
    const key = new URL(request.url);
    key.search = '';
    // Precached entries (RSC payloads) belong to this build; a newer deploy must not overwrite them.
    if (response.ok && response.type === 'basic' && !PRECACHED.has(key.href)) {
      const cache = await caches.open(STATIC_CACHE);
      event.waitUntil(cache.put(key.href, response.clone()));
    }
    return response;
  } catch (error) {
    report(false);
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    throw error;
  }
}

async function networkOnly(request) {
  try {
    const response = await fetch(request);
    report(true);
    return response;
  } catch (error) {
    report(false);
    throw error;
  }
}

async function cacheFirst(event, request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (cacheable(response)) event.waitUntil(putCapped(cache, cacheName, request, response.clone()));
  return response;
}

async function staleWhileRevalidate(event, request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      report(true);
      if (cacheable(response)) return putCapped(cache, cacheName, request, response.clone()).then(() => response);
      return response;
    })
    .catch((error) => {
      report(false);
      throw error;
    });
  if (cached) {
    event.waitUntil(network.catch(() => undefined));
    return cached;
  }
  return network;
}

/**
 * Map data: only what the user actually viewed. Style and TileJSON documents are refreshed in the
 * background (they point at the current tile set); tiles, glyphs and sprites are immutable per URL.
 * A hit is re-inserted so frequently viewed tiles survive trimming (LRU-ish).
 */
async function tiles(event, request, url) {
  const isDocument = url.pathname.startsWith('/styles/') || /^\/[a-z_]+\/?$/.test(url.pathname);
  if (isDocument) return staleWhileRevalidate(event, request, RUNTIME.tiles);
  const cache = await caches.open(RUNTIME.tiles);
  const cached = await cache.match(request);
  if (cached) {
    event.waitUntil(touch(cache, request, cached.clone()));
    return cached;
  }
  try {
    const response = await fetch(request);
    report(true);
    if (cacheable(response)) event.waitUntil(putCapped(cache, RUNTIME.tiles, request, response.clone()));
    return response;
  } catch (error) {
    report(false);
    throw error;
  }
}

function cacheable(response) {
  return response && response.status === 200 && (response.type === 'basic' || response.type === 'cors');
}

async function touch(cache, request, response) {
  try {
    await cache.delete(request);
    await cache.put(request, response);
  } catch {
    /* quota or race: ignore */
  }
}

/**
 * Put, then trim with probability TRIM_PROBABILITY (≈ every 25 writes on average). No in-memory
 * counter: the browser stops idle workers, which would reset it before it ever reached the cap.
 */
async function putCapped(cache, cacheName, request, response) {
  try {
    await cache.put(request, response);
  } catch {
    return; // quota exceeded: skip caching
  }
  if (Math.random() < TRIM_PROBABILITY) await trim(cache, LIMITS[cacheName] || 200).catch(() => undefined);
}

/** Drops the oldest entries (Cache keys keep insertion order) above `max`. */
async function trim(cache, max) {
  const keys = await cache.keys();
  const excess = keys.length - max;
  if (excess <= 0) return;
  await Promise.all(keys.slice(0, excess + Math.floor(max * 0.05)).map((key) => cache.delete(key)));
}

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
