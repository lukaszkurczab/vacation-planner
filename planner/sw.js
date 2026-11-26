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
 * - receipt OCR (Tesseract): the worker script (`ocr/`, same origin, not precached) and, from jsDelivr,
 *   the WASM engine (`tesseract.js-core@<version>`) and language models (`@tesseract.js-data/<lang>`):
 *   cache first in `bruma-ocr-v1` after the first scan, so later scans work offline. URLs are versioned
 *   (engine) or never change content (models), so entries are not revalidated. The engine is loaded by
 *   `importScripts`, an opaque (no-cors) response — cached as well.
 * Runtime caches are trimmed on activate and, probabilistically, after writes.
 */

const BUILD = "4dd421ee8e11";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._tree.txt","_next/static/chunks/0-sujb2cjii2x.js","_next/static/chunks/00ha_hu2690do.js","_next/static/chunks/00uk07finvjlb.js","_next/static/chunks/01ax93k_uvjjt.js","_next/static/chunks/02czvodnxs0i_.js","_next/static/chunks/03h-r5fuaehq3.js","_next/static/chunks/03m2gk1u62j54.js","_next/static/chunks/03pin2g31b4m8.js","_next/static/chunks/06n6s3yyv5kri.js","_next/static/chunks/07bruasayeq7r.js","_next/static/chunks/07eqji49ndz05.js","_next/static/chunks/07f54-8pzund9.js","_next/static/chunks/07uuvj4bdn2sh.js","_next/static/chunks/07z20demhzgq2.js","_next/static/chunks/08jyy8ep7yb6x.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0_9bdht7h32rj.js","_next/static/chunks/0bv0d12nxz4y7.js","_next/static/chunks/0cqcl8y8o-_ev.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d105i29cu8cm.css","_next/static/chunks/0d2g502m85vab.js","_next/static/chunks/0dgq_xzk-_nd6.js","_next/static/chunks/0dt-s54m_dci3.js","_next/static/chunks/0dur3fusn_8s3.js","_next/static/chunks/0eg2p37r1sxsi.js","_next/static/chunks/0hn_tpp0--18s.js","_next/static/chunks/0hws72wj3ujy6.css","_next/static/chunks/0hyahzs37eus6.js","_next/static/chunks/0i9j6hqh64mhz.js","_next/static/chunks/0jri0gd048_-q.js","_next/static/chunks/0k0k8ztthpszg.js","_next/static/chunks/0kswe_zl308nv.js","_next/static/chunks/0lx88g-spahig.js","_next/static/chunks/0m4nl2oh_y9tf.js","_next/static/chunks/0m_fcctlzcvn4.css","_next/static/chunks/0ngj9fbg76ppn.js","_next/static/chunks/0oftw7wv7bi69.js","_next/static/chunks/0p7l000wdoyjy.js","_next/static/chunks/0pz14fz13rud5.js","_next/static/chunks/0qeb59u2b5bvd.js","_next/static/chunks/0rfhjjfimnl6_.js","_next/static/chunks/0ryyss088dt_c.js","_next/static/chunks/0s451jjslzk-5.js","_next/static/chunks/0sijq531jpz44.js","_next/static/chunks/0uek1tx-url8r.js","_next/static/chunks/0ukpdn8laemks.css","_next/static/chunks/0vdqlvjmmfv6q.js","_next/static/chunks/0vwm5_aoobxap.js","_next/static/chunks/0yzv6lsgavkok.js","_next/static/chunks/11jq0c2_zavac.js","_next/static/chunks/121a1op3t6c4j.js","_next/static/chunks/121bbelwvlksu.js","_next/static/chunks/13cqlo32rhzne.js","_next/static/chunks/13qa06diy3ixb.css","_next/static/chunks/13rju5-w_49-e.js","_next/static/chunks/14m29_xdfeav6.js","_next/static/chunks/14qc6rboz9ohr.js","_next/static/chunks/153da2-5qrhi1.js","_next/static/chunks/15afl0mts0f4g.js","_next/static/chunks/15er360fv1679.js","_next/static/chunks/15vtzul4oj14a.js","_next/static/chunks/16ifo5r9pov_w.js","_next/static/chunks/16njmlj2ii952.js","_next/static/chunks/16pya721u65zw.js","_next/static/chunks/1807i5dinengb.js","_next/static/chunks/18m7lmi0amp0z.js","_next/static/chunks/18t5edemjn71h.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1a02ypvijwd8n.js","_next/static/chunks/1ayzkwekgeg1k.js","_next/static/chunks/1cgyn9l_nh2sl.js","_next/static/chunks/1cxklukhldep-.js","_next/static/chunks/1eltu20lzcak-.js","_next/static/chunks/1ffwzkgd3ytlu.css","_next/static/chunks/1hghmxh1viyve.js","_next/static/chunks/1ii15un76b8wh.css","_next/static/chunks/1inq599i7b5gj.js","_next/static/chunks/1j7f9g35wrs28.js","_next/static/chunks/1j9byfrqlde7f.js","_next/static/chunks/1jc7fjlg13r-p.js","_next/static/chunks/1jiplk52w2ep7.js","_next/static/chunks/1jmh-4dpvv5zn.css","_next/static/chunks/1jmqb0iur6k0n.js","_next/static/chunks/1jw4eeg97lrms.js","_next/static/chunks/1kluuvoxfzjp2.js","_next/static/chunks/1km--yy3o7v0f.js","_next/static/chunks/1ko110baagmtt.js","_next/static/chunks/1mdn5i-mgpdb6.css","_next/static/chunks/1n9ibn2ze58rn.js","_next/static/chunks/1oenx79pg37ut.js","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1ponrodplckos.css","_next/static/chunks/1q-jt303as039.js","_next/static/chunks/1quo6m77ml2p8.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1swwn4z-m0rcv.js","_next/static/chunks/1tmjef4cy_d0u.js","_next/static/chunks/1ttq1a3h1y155.css","_next/static/chunks/1uhhy006nlmad.js","_next/static/chunks/1w-t1g2mph51p.js","_next/static/chunks/1wn0ntqk8t41q.css","_next/static/chunks/1xfhhri4dbs73.css","_next/static/chunks/1xoqu7403vw6v.css","_next/static/chunks/1xshpg8ycs72v.js","_next/static/chunks/1y8jx-5p_bt08.css","_next/static/chunks/1yanvutp5ffyu.js","_next/static/chunks/1yvcn6hlzg55h.js","_next/static/chunks/1yx0ygh35-g0f.js","_next/static/chunks/1yzyts_yvc-uq.css","_next/static/chunks/1z_5y89l3uzwj.js","_next/static/chunks/1zcfl2z53vhhv.js","_next/static/chunks/200u0xx8vkvv7.css","_next/static/chunks/20_q4kk9sujxd.css","_next/static/chunks/20iaendyrbncm.css","_next/static/chunks/21086k7_5e0_z.js","_next/static/chunks/213vn4xp-p_w0.js","_next/static/chunks/23-y2-rm3lyuw.js","_next/static/chunks/23dkya6ar-bjw.js","_next/static/chunks/23gt0ky68dt-3.js","_next/static/chunks/26ikgitpjbrwj.js","_next/static/chunks/27h2_vpswia9e.js","_next/static/chunks/29aqo610zfkq2.js","_next/static/chunks/29c90j-1tzebk.js","_next/static/chunks/2_9hsgcydybna.js","_next/static/chunks/2_g4abzlmpn3w.js","_next/static/chunks/2b95ixb82tcrp.js","_next/static/chunks/2cv7s707n4f6e.js","_next/static/chunks/2d98xn9fk6bm2.js","_next/static/chunks/2dvy7szrdwx1c.js","_next/static/chunks/2fnz8kno8v9oh.js","_next/static/chunks/2gvzkwk1u6jz6.js","_next/static/chunks/2hcffm_lhnp-p.js","_next/static/chunks/2hsqneo0_w5as.js","_next/static/chunks/2i0lyl0d3on14.js","_next/static/chunks/2i42xaw29mai4.js","_next/static/chunks/2isyyy49bxb9h.js","_next/static/chunks/2j3xocvk9n8f4.js","_next/static/chunks/2k16-il-gkurz.js","_next/static/chunks/2k336ah61ixx9.js","_next/static/chunks/2k9wvz16-qxvv.js","_next/static/chunks/2kfnsf6073bfe.css","_next/static/chunks/2kv78lupe5fqb.js","_next/static/chunks/2lwde6ahmc67i.js","_next/static/chunks/2mqn8_u58gz_5.js","_next/static/chunks/2n3a2n9031d85.js","_next/static/chunks/2nkus730qk2rq.js","_next/static/chunks/2ov2miwn5r4pl.js","_next/static/chunks/2qsxeznj1laeb.js","_next/static/chunks/2r-7ha1vi_jib.js","_next/static/chunks/2sq2lmnkw1pae.js","_next/static/chunks/2su6us9by8_33.js","_next/static/chunks/2uottahgsqe7q.js","_next/static/chunks/2wdog2b7n6efa.css","_next/static/chunks/2x_mz4ttqi7y7.js","_next/static/chunks/2xl1gjv5sm36p.js","_next/static/chunks/2yp7__1xpv4rt.js","_next/static/chunks/3179r62_b8cu_.js","_next/static/chunks/31dx9-v4pixdo.js","_next/static/chunks/31mars2ne0xxd.js","_next/static/chunks/31p9to-i1x8eu.js","_next/static/chunks/32dexgx0y238m.js","_next/static/chunks/32lqc0uvjq858.js","_next/static/chunks/34-ycburi3vcv.js","_next/static/chunks/340yiw094tihd.js","_next/static/chunks/34315x5cpquvo.js","_next/static/chunks/3574t-4ncv1td.js","_next/static/chunks/36_tbljqukku1.css","_next/static/chunks/3727bwj4tteui.css","_next/static/chunks/37l9bq9iddzop.js","_next/static/chunks/38mbkjr1065li.css","_next/static/chunks/38pmy88vw3qwu.js","_next/static/chunks/3_olvta-2ze_i.js","_next/static/chunks/3a7rdmqqn_v4t.js","_next/static/chunks/3bwqruxv9c4x4.js","_next/static/chunks/3c_kzff5fmk-a.css","_next/static/chunks/3co8jpdbhlz2n.js","_next/static/chunks/3dpi3x7qlqq4e.js","_next/static/chunks/3drweferjdpgu.js","_next/static/chunks/3dze_4dop1drb.js","_next/static/chunks/3e07wqruii312.css","_next/static/chunks/3evwickls8xy0.js","_next/static/chunks/3f8bi4573htco.js","_next/static/chunks/3f9p7e0h6nhak.js","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3hsm89qs5vv7v.js","_next/static/chunks/3j9wamo-bvi2n.js","_next/static/chunks/3kwg3ndezin92.js","_next/static/chunks/3lkbfjd_czs0y.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3oeeq5jw3a88i.js","_next/static/chunks/3oij3rf18o-gj.js","_next/static/chunks/3rh2onmute51k.js","_next/static/chunks/3rpco2ttz8ts0.js","_next/static/chunks/3s-s8qpjb54d5.css","_next/static/chunks/3s5ne2irk37hg.js","_next/static/chunks/3s_tpku4b4r-v.js","_next/static/chunks/3se5t3v4jxuoi.js","_next/static/chunks/3shugigtemylv.js","_next/static/chunks/3sm3l0ec21hnh.js","_next/static/chunks/3srk75b8d39nc.js","_next/static/chunks/3sx1t1u4d45nj.js","_next/static/chunks/3t6nwwx62kbey.js","_next/static/chunks/3tp3qmx7wq0ov.js","_next/static/chunks/3v9ba4bitypjq.js","_next/static/chunks/3w4hz0mqw0s1t.js","_next/static/chunks/3x8616-l384ld.js","_next/static/chunks/3z5qvvkruydkd.js","_next/static/chunks/3zzj7ouzf8jw1.js","_next/static/chunks/41zs8jj3v0eza.css","_next/static/chunks/42oiee8cq0r6w.js","_next/static/chunks/42wnntjiuvcf2.js","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/43tttx_bh2o0m.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/44n_wz55tcgw8.css","_next/static/chunks/455690z9nz95f.js","_next/static/chunks/turbopack-42oazn3jrnw74.js","_next/static/mPfKOa5rkxjbUpSwRH5KW/_buildManifest.js","_next/static/mPfKOa5rkxjbUpSwRH5KW/_clientMiddlewareManifest.js","_next/static/mPfKOa5rkxjbUpSwRH5KW/_ssgManifest.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

const SCOPE = new URL(self.registration.scope);
const PREFIX = 'bruma-';
const STATIC_CACHE = `${PREFIX}static-${BUILD}`;
const RUNTIME = {
  tiles: `${PREFIX}tiles-v1`,
  // v2: v1 also held Open-Meteo/Frankfurter responses, which are network-only now.
  api: `${PREFIX}api-v2`,
  media: `${PREFIX}media-v1`,
  ocr: `${PREFIX}ocr-v1`,
};
const LIMITS = { [RUNTIME.tiles]: 2000, [RUNTIME.api]: 300, [RUNTIME.media]: 200, [RUNTIME.ocr]: 40 };
const NAV_TIMEOUT_MS = 6000;
const PROBE_PARAM = '__bruma_probe';

const TRIM_PROBABILITY = 1 / 25;

const API_HOSTS = new Set(['www.wikidata.org', 'commons.wikimedia.org']);
/** Fresh data only: the app caches these itself (`kv`) and shows its own offline fallback. */
const NETWORK_ONLY_HOSTS = new Set(['api.open-meteo.com', 'archive-api.open-meteo.com', 'api.frankfurter.dev']);
const MEDIA_HOSTS = new Set(['upload.wikimedia.org']);
const TILE_HOST = 'tiles.openfreemap.org';
const OCR_HOST = 'cdn.jsdelivr.net';
const OCR_PATHS = ['/npm/tesseract.js-core@', '/npm/@tesseract.js-data/'];

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
    if (rel.startsWith('ocr/')) return event.respondWith(cacheFirst(event, request, RUNTIME.ocr));
    if (isStaticAsset(rel)) return event.respondWith(staticAsset(event, request));
    return event.respondWith(networkFirst(event, request));
  }

  if (url.protocol !== 'https:') return;
  if (url.hostname === TILE_HOST) return event.respondWith(tiles(event, request, url));
  if (url.hostname === OCR_HOST && OCR_PATHS.some((p) => url.pathname.startsWith(p))) {
    return event.respondWith(cacheFirst(event, request, RUNTIME.ocr, { opaque: true }));
  }
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

async function cacheFirst(event, request, cacheName, { opaque = false } = {}) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (cacheable(response) || (opaque && response.type === 'opaque')) event.waitUntil(putCapped(cache, cacheName, request, response.clone()));
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
