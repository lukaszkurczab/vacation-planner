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

const BUILD = "fb5a6ed87973";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._tree.txt","_next/static/chunks/063dc8ihhbvjs.css","_next/static/chunks/07wbw18v4ou74.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0c9lt7z8a9889.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d9hrwo44ekdq.js","_next/static/chunks/0fnkm_ius_r0u.js","_next/static/chunks/0rr92hxbpa0g0.js","_next/static/chunks/0s5-xkq5akfks.js","_next/static/chunks/0u66cjnz72fn6.js","_next/static/chunks/0ujn5ua6jqgtd.js","_next/static/chunks/0w0-1vixp8oe-.css","_next/static/chunks/0y3t3h8ctpvg4.css","_next/static/chunks/0y4i8al0gvy_h.css","_next/static/chunks/1-0-0xxhsx7i0.js","_next/static/chunks/10ri58bx1c6qu.js","_next/static/chunks/12uc81ic3bhpa.js","_next/static/chunks/137osutgiqcyp.js","_next/static/chunks/18ki6f2g48jhb.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1awxv-eydux8w.js","_next/static/chunks/1dwq0q8r_xgdw.css","_next/static/chunks/1ghusva7r8bcj.js","_next/static/chunks/1ifiqsgej335a.js","_next/static/chunks/1iyykpe_7_05h.css","_next/static/chunks/1pe3je4cvrzef.js","_next/static/chunks/1q6u7sfhfeex0.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1vdldffrouwai.js","_next/static/chunks/1xffffl6in8yn.js","_next/static/chunks/1xj1lw22lzz-5.js","_next/static/chunks/1xoqu7403vw6v.css","_next/static/chunks/2-auje_1oca1w.js","_next/static/chunks/22a23zr0h6uyz.js","_next/static/chunks/23m399gow_njp.js","_next/static/chunks/25-5cpw8hv1io.js","_next/static/chunks/268mfcui10gif.js","_next/static/chunks/272ph5yns7pk-.js","_next/static/chunks/27ssk_czt0i-p.css","_next/static/chunks/28i_0vnw1oc3-.js","_next/static/chunks/2_0indno6a34v.js","_next/static/chunks/2c1u46xu-q3kh.css","_next/static/chunks/2g8j6y4eipo__.css","_next/static/chunks/2hkctbypjkprf.css","_next/static/chunks/2i51e627rllld.js","_next/static/chunks/2ishukozpmu_2.js","_next/static/chunks/2lyux_f-l9sij.js","_next/static/chunks/2my--0p8w9r5j.js","_next/static/chunks/2p4-t7abq990-.css","_next/static/chunks/2tvk7r3gf9xqp.js","_next/static/chunks/2welcsc3rvk45.js","_next/static/chunks/2zbib2sfjitdi.css","_next/static/chunks/30no2pft9mhbx.js","_next/static/chunks/325rkhwhmxv_9.js","_next/static/chunks/350vejdgnbr8k.css","_next/static/chunks/3advty3p9ynsa.js","_next/static/chunks/3cmqqj01dej3j.css","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3itvvtjgoo-nv.css","_next/static/chunks/3jewhqiwrow7j.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3ml19eo1olxx4.js","_next/static/chunks/3oa52uej7zotq.js","_next/static/chunks/3owamzjdsz8jg.css","_next/static/chunks/3rb_waglx0xit.css","_next/static/chunks/3rzipikpw40yb.js","_next/static/chunks/3sd4r8kpw6gsj.js","_next/static/chunks/3w7dpnpdr9i7b.js","_next/static/chunks/40yzf_1tr4gq5.css","_next/static/chunks/42c-2z77a-ohg.js","_next/static/chunks/42d_t92i6py6l.js","_next/static/chunks/42du6xy3jtsp9.css","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/43lwpk00bilr1.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/turbopack-18zfrwvp8l-6m.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_next/static/tMaHmOR6GndGBbI0Y7xZP/_buildManifest.js","_next/static/tMaHmOR6GndGBbI0Y7xZP/_clientMiddlewareManifest.js","_next/static/tMaHmOR6GndGBbI0Y7xZP/_ssgManifest.js","_not-found/__next._full.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share/__next._full.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

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
      // Take over open tabs first (they reload on `controllerchange`), then drop every cache of
      // older builds — including caches of workers that installed but never activated.
      await self.clients.claim();
      const keep = new Set([STATIC_CACHE, ...Object.values(RUNTIME)]);
      const names = await caches.keys();
      await Promise.all(names.filter((name) => name.startsWith(PREFIX) && !keep.has(name)).map((name) => caches.delete(name)));
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
