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

const BUILD = "5c4ca7a541e1";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._tree.txt","_next/static/M1WcfOuFRorPHpZG6pIcA/_buildManifest.js","_next/static/M1WcfOuFRorPHpZG6pIcA/_clientMiddlewareManifest.js","_next/static/M1WcfOuFRorPHpZG6pIcA/_ssgManifest.js","_next/static/chunks/007544jgelf7j.css","_next/static/chunks/015ex7vankd2d.js","_next/static/chunks/01orylq6axq7j.css","_next/static/chunks/01r-1amub22mz.css","_next/static/chunks/01z9wmacgyk5i.js","_next/static/chunks/030xqdhup_nvp.css","_next/static/chunks/04us48v1ilvsv.js","_next/static/chunks/05mfs7gi9qqxf.js","_next/static/chunks/0673xbn7tx397.js","_next/static/chunks/08376jh3cwo1b.js","_next/static/chunks/09f0ywxqui8qd.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0_uh9q4fuinpu.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0g-hbs8gh45_y.css","_next/static/chunks/0g_row1n7vl2c.js","_next/static/chunks/0h7mu00v9shi3.js","_next/static/chunks/0i1nba2zozokl.js","_next/static/chunks/0j426sfkx-5qe.js","_next/static/chunks/0ptk01gh3w3l0.js","_next/static/chunks/0qprh89ju7m8u.js","_next/static/chunks/0seedc3ubvqnr.js","_next/static/chunks/0sree8f9313es.css","_next/static/chunks/0wq1ti7pok7hg.js","_next/static/chunks/0x0d7p4f3rvu1.js","_next/static/chunks/0y8_evrlz2h-t.js","_next/static/chunks/0yq1mbi9qx7t_.js","_next/static/chunks/0yqydrvp2hd8d.js","_next/static/chunks/11jq0c2_zavac.js","_next/static/chunks/12pg6m_gk-l5o.js","_next/static/chunks/15pliejpsp94s.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1aejfgor-3-pu.css","_next/static/chunks/1ckj303rmwlw5.js","_next/static/chunks/1dxpsn4gcbeaj.js","_next/static/chunks/1f4e_4456z60h.js","_next/static/chunks/1ifiqsgej335a.js","_next/static/chunks/1jmh-4dpvv5zn.css","_next/static/chunks/1l0n03k16jfxf.js","_next/static/chunks/1lqujzs4mh5yo.js","_next/static/chunks/1mdn5i-mgpdb6.css","_next/static/chunks/1p064c-r4mfve.css","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1pmss4kn-nlw5.js","_next/static/chunks/1q0xxq64v5lc8.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1ub0sc9aogmfm.js","_next/static/chunks/1vgwv91tqja9-.js","_next/static/chunks/1vjhx4_15dlcu.js","_next/static/chunks/1yo2ila_xlgtl.js","_next/static/chunks/20_q4kk9sujxd.css","_next/static/chunks/20iaendyrbncm.css","_next/static/chunks/20ozwjn4qgila.css","_next/static/chunks/22ppwscpeonzz.js","_next/static/chunks/25fbcimya41dx.js","_next/static/chunks/2_tcs6xe7xytw.js","_next/static/chunks/2a18a_krsmk6o.js","_next/static/chunks/2b_gvpfv5252i.js","_next/static/chunks/2d91w9m32y_7y.js","_next/static/chunks/2f0ytls7n-r-i.js","_next/static/chunks/2ftaoy1vjg_wo.js","_next/static/chunks/2ioa3ajc3mhxf.js","_next/static/chunks/2ipq62ao4i0g_.js","_next/static/chunks/2ishukozpmu_2.js","_next/static/chunks/2n40_ro4br05b.css","_next/static/chunks/2sgj5ek9sw6u0.js","_next/static/chunks/2tvk7r3gf9xqp.js","_next/static/chunks/30fyrf2ny-y3o.js","_next/static/chunks/30no2pft9mhbx.js","_next/static/chunks/318463p6a-y5q.js","_next/static/chunks/31vmnwgviqpaw.css","_next/static/chunks/34cado-g52rpq.js","_next/static/chunks/34u6gxla6aslx.js","_next/static/chunks/35u-ur58bi5qb.js","_next/static/chunks/36_tbljqukku1.css","_next/static/chunks/37qs29fnuw3jp.js","_next/static/chunks/3aer4pjwpkrx2.js","_next/static/chunks/3ckxiovb8-wj3.js","_next/static/chunks/3cqxoav94tjk8.js","_next/static/chunks/3d1ibw4-krtdd.css","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3gi8l632z0uio.js","_next/static/chunks/3hvmx27ul7r7_.css","_next/static/chunks/3jlcxf-_r5a3b.js","_next/static/chunks/3jptk-lgmne1k.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3opy2eh5v--9r.js","_next/static/chunks/3t31rdczur_6q.js","_next/static/chunks/3t4shsq0zep6f.js","_next/static/chunks/3vsfrnt8ovq5c.css","_next/static/chunks/3x_eotxyfsoqj.css","_next/static/chunks/3y71q1w-axq0j.js","_next/static/chunks/40ubpch_ssnp8.js","_next/static/chunks/42c-2z77a-ohg.js","_next/static/chunks/42z0rqnqu8a5g.js","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/43lwpk00bilr1.js","_next/static/chunks/44hhp-rilwblj.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/44v5ojf0qvpn4.js","_next/static/chunks/turbopack-3t9aqryw12b2w.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

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
