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
 *   cache first in `bruma-ocr-v2` after the first scan, so later scans work offline. URLs are versioned
 *   (engine) or never change content (models), so entries are not revalidated. jsDelivr files are fetched
 *   in CORS mode even when the worker asks with `importScripts` (no-cors): an opaque response hides its
 *   status, and a 503 or a captive-portal page cached as the engine would break every later scan. Only
 *   200 responses are stored; the page evicts the engine and model after a load error (`evictOcrAssets`).
 *   (v1 held opaque responses — deleted on activate.)
 * Runtime caches are trimmed on activate and, probabilistically, after writes.
 */

const BUILD = "1df0cfb6828b";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._index.txt","__next._tree.txt","_next/static/8B5E5VGny08pX03SGi2ya/_buildManifest.js","_next/static/8B5E5VGny08pX03SGi2ya/_clientMiddlewareManifest.js","_next/static/8B5E5VGny08pX03SGi2ya/_ssgManifest.js","_next/static/chunks/00ha_hu2690do.js","_next/static/chunks/00wvl4nu8_9gm.css","_next/static/chunks/016h_t6vukf-9.js","_next/static/chunks/0221ovi2e9u6w.js","_next/static/chunks/03575brlxxjxp.js","_next/static/chunks/05i5rc93z8wlv.js","_next/static/chunks/05py3ffr6inlp.js","_next/static/chunks/05znsuapy8rao.css","_next/static/chunks/06n6s3yyv5kri.js","_next/static/chunks/073e1b7in29f1.js","_next/static/chunks/07_h0zvtcn_ft.js","_next/static/chunks/07f54-8pzund9.js","_next/static/chunks/07ie165j-e3zx.js","_next/static/chunks/07uuvj4bdn2sh.js","_next/static/chunks/07z20demhzgq2.js","_next/static/chunks/087kt6q7lwd6k.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0_9bdht7h32rj.js","_next/static/chunks/0_qrqr_-zwy-2.js","_next/static/chunks/0a8eu3ct-xhr4.js","_next/static/chunks/0bft0m-paspu_.css","_next/static/chunks/0cqcl8y8o-_ev.js","_next/static/chunks/0crmjfim37f8d.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d105i29cu8cm.css","_next/static/chunks/0ds7w6ykgxu96.js","_next/static/chunks/0dt-s54m_dci3.js","_next/static/chunks/0dur3fusn_8s3.js","_next/static/chunks/0dwe6ak8oyshn.js","_next/static/chunks/0ecu4bppx7o1j.js","_next/static/chunks/0eg2p37r1sxsi.js","_next/static/chunks/0fa9s18hqvju0.js","_next/static/chunks/0fdn5c7a2mkub.js","_next/static/chunks/0g2wgzvbsk3k0.js","_next/static/chunks/0g5uuz-ysg_q-.js","_next/static/chunks/0h8g1jpkm67-s.js","_next/static/chunks/0hed-m3s98kze.js","_next/static/chunks/0hk06tstpzdi0.js","_next/static/chunks/0hw-bvsldskp0.js","_next/static/chunks/0hws72wj3ujy6.css","_next/static/chunks/0hyahzs37eus6.js","_next/static/chunks/0ji2g07sd0-cy.js","_next/static/chunks/0jxzp6mvejzhf.js","_next/static/chunks/0kswe_zl308nv.js","_next/static/chunks/0lx88g-spahig.js","_next/static/chunks/0lzoy9vpoj6o0.js","_next/static/chunks/0m4nl2oh_y9tf.js","_next/static/chunks/0m_fcctlzcvn4.css","_next/static/chunks/0o3fm53ptk9_1.js","_next/static/chunks/0o58nkt7dshqn.css","_next/static/chunks/0oc5smmpx86td.js","_next/static/chunks/0oftw7wv7bi69.js","_next/static/chunks/0qcpez-4ppmmj.js","_next/static/chunks/0qeb59u2b5bvd.js","_next/static/chunks/0rfhjjfimnl6_.js","_next/static/chunks/0ruoo0mwx4d0_.css","_next/static/chunks/0sdkctdrie27d.js","_next/static/chunks/0smg2pxf38wcb.js","_next/static/chunks/0t1l5t0k8626b.js","_next/static/chunks/0thqiu-q0g2f_.js","_next/static/chunks/0ukpdn8laemks.css","_next/static/chunks/0v-hsghnb0-jw.js","_next/static/chunks/0vvjrtlvcsu7m.js","_next/static/chunks/0vyvbut4j3obk.js","_next/static/chunks/0w7w6j4duc9kk.js","_next/static/chunks/0yzv6lsgavkok.js","_next/static/chunks/0z1up3554i-n2.js","_next/static/chunks/100qlpahgwzpb.js","_next/static/chunks/10_fcqay7t_c5.css","_next/static/chunks/10_gjal5p3nnc.js","_next/static/chunks/11jq0c2_zavac.js","_next/static/chunks/124__e6q4i5hh.js","_next/static/chunks/12fgc2ulmcgw2.js","_next/static/chunks/13cqlo32rhzne.js","_next/static/chunks/13ptr-x_3rj1d.js","_next/static/chunks/14b3n2d6_cc8n.js","_next/static/chunks/14d9o1pgslx4b.js","_next/static/chunks/14s-bntisap6y.js","_next/static/chunks/153da2-5qrhi1.js","_next/static/chunks/15afl0mts0f4g.js","_next/static/chunks/161b8den5mrsm.js","_next/static/chunks/16ifo5r9pov_w.js","_next/static/chunks/17z56n7uqwcms.js","_next/static/chunks/18d36_uofu6o2.js","_next/static/chunks/19a3necuivgwj.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1a02ypvijwd8n.js","_next/static/chunks/1a25fugamiq0a.js","_next/static/chunks/1a_2-peonhhmh.css","_next/static/chunks/1arqawk9tsxm8.js","_next/static/chunks/1ayzkwekgeg1k.js","_next/static/chunks/1cgyn9l_nh2sl.js","_next/static/chunks/1dnru5apbzv-w.js","_next/static/chunks/1eug7p53pt6wj.js","_next/static/chunks/1ev8cihetwj-3.js","_next/static/chunks/1f0ndjym7srar.js","_next/static/chunks/1fd7l81y8frc_.js","_next/static/chunks/1fg7qk9l-k8pd.js","_next/static/chunks/1fuuudlluie5a.css","_next/static/chunks/1g24qz_m8pmkw.js","_next/static/chunks/1hd-7__anje0h.js","_next/static/chunks/1hghmxh1viyve.js","_next/static/chunks/1j7f9g35wrs28.js","_next/static/chunks/1jiplk52w2ep7.js","_next/static/chunks/1jmh-4dpvv5zn.css","_next/static/chunks/1jmqb0iur6k0n.js","_next/static/chunks/1kluuvoxfzjp2.js","_next/static/chunks/1km--yy3o7v0f.js","_next/static/chunks/1lez48y9z8s3_.js","_next/static/chunks/1ls7e9ox582ea.js","_next/static/chunks/1lspq0mwj-5da.js","_next/static/chunks/1mdn5i-mgpdb6.css","_next/static/chunks/1n9ibn2ze58rn.js","_next/static/chunks/1oenx79pg37ut.js","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1p3dpjapwmdrq.js","_next/static/chunks/1q-jt303as039.js","_next/static/chunks/1q9oz_nr8biqa.js","_next/static/chunks/1rgfrckdigxcl.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1s3opw4mqcn_r.css","_next/static/chunks/1sg3iunouxnjp.js","_next/static/chunks/1sg67eyb4d4zb.js","_next/static/chunks/1t62o24kbqwwo.js","_next/static/chunks/1tmjef4cy_d0u.js","_next/static/chunks/1u-8_riv98xl9.js","_next/static/chunks/1v1ykfh11dhrs.js","_next/static/chunks/1v44btxfzi77-.js","_next/static/chunks/1vodtkzl22rg4.js","_next/static/chunks/1w3bi12tgcicn.js","_next/static/chunks/1wcfsgvfwsc5f.css","_next/static/chunks/1wn0ntqk8t41q.css","_next/static/chunks/1xoqu7403vw6v.css","_next/static/chunks/1xshpg8ycs72v.js","_next/static/chunks/1xsqmpnt4mdug.js","_next/static/chunks/1xymf6l3dknuc.js","_next/static/chunks/1yanvutp5ffyu.js","_next/static/chunks/1yvcn6hlzg55h.js","_next/static/chunks/1yzyts_yvc-uq.css","_next/static/chunks/1z_5y89l3uzwj.js","_next/static/chunks/2-1png9uds4js.css","_next/static/chunks/2-ld2c2yhfhqf.js","_next/static/chunks/2-pozbikrj3jr.js","_next/static/chunks/20iaendyrbncm.css","_next/static/chunks/21086k7_5e0_z.js","_next/static/chunks/213vn4xp-p_w0.js","_next/static/chunks/21qeaywr94sak.js","_next/static/chunks/244kfc5xqm17g.css","_next/static/chunks/24rx9gpneqwam.js","_next/static/chunks/25t5emg2qp9eb.js","_next/static/chunks/26254if589mma.js","_next/static/chunks/26jf8mspl9zlj.js","_next/static/chunks/27rj48rw2tc47.css","_next/static/chunks/28pw8wb500xij.js","_next/static/chunks/293uwq361x6i5.js","_next/static/chunks/29aqo610zfkq2.js","_next/static/chunks/2_g4abzlmpn3w.js","_next/static/chunks/2_h1gd11d-ii0.js","_next/static/chunks/2a7hg6ic48oer.js","_next/static/chunks/2a_-yqz0xuu-z.js","_next/static/chunks/2axz7bgk6_wok.js","_next/static/chunks/2b95ixb82tcrp.js","_next/static/chunks/2bsiuh0vj7b3g.js","_next/static/chunks/2bz_waga0ct34.js","_next/static/chunks/2cw84r4e19bu6.js","_next/static/chunks/2d98xn9fk6bm2.js","_next/static/chunks/2dg5pb_c_gtyo.js","_next/static/chunks/2diaxnyv5ne--.js","_next/static/chunks/2dvy7szrdwx1c.js","_next/static/chunks/2fg0mztzmw54l.js","_next/static/chunks/2h1dbv75rdayp.js","_next/static/chunks/2hcffm_lhnp-p.js","_next/static/chunks/2j732vkg3n_21.js","_next/static/chunks/2j8z5nqxdn22f.js","_next/static/chunks/2k16-il-gkurz.js","_next/static/chunks/2k3kz1v3a1l05.js","_next/static/chunks/2k9wvz16-qxvv.js","_next/static/chunks/2lgt-ntzxnnkd.css","_next/static/chunks/2lki80m_83ab3.js","_next/static/chunks/2m4oa6_iu85dk.js","_next/static/chunks/2n2cgwln30b-c.js","_next/static/chunks/2n8-p_ct5akmy.css","_next/static/chunks/2p4rwqjcgzqa1.js","_next/static/chunks/2qsxeznj1laeb.js","_next/static/chunks/2r-7ha1vi_jib.js","_next/static/chunks/2r4v5dl4dpv5d.js","_next/static/chunks/2rkc5id7penda.js","_next/static/chunks/2seab-4dfi0tn.js","_next/static/chunks/2t146szz1cyb-.js","_next/static/chunks/2td65k5bdrmr-.js","_next/static/chunks/2toz4ezsm6wxk.js","_next/static/chunks/2uottahgsqe7q.js","_next/static/chunks/2uu04v8wh8g2k.css","_next/static/chunks/2wzfhl12dx6bn.js","_next/static/chunks/2x_mz4ttqi7y7.js","_next/static/chunks/2xl1gjv5sm36p.js","_next/static/chunks/302bkjs6xxjvd.js","_next/static/chunks/30amgtkjotl4f.js","_next/static/chunks/30b7mvkv3gt2n.js","_next/static/chunks/30lahex3s76re.js","_next/static/chunks/3100b2073uvaq.js","_next/static/chunks/3179r62_b8cu_.js","_next/static/chunks/31dx9-v4pixdo.js","_next/static/chunks/31p9to-i1x8eu.js","_next/static/chunks/32yx4dpzy8uqc.js","_next/static/chunks/34-ycburi3vcv.js","_next/static/chunks/340yiw094tihd.js","_next/static/chunks/342i54zxkd0m6.js","_next/static/chunks/34315x5cpquvo.js","_next/static/chunks/36_tbljqukku1.css","_next/static/chunks/36a_lja2zz-sn.js","_next/static/chunks/371qizn4grzzw.js","_next/static/chunks/37aucpon65l46.js","_next/static/chunks/37l9bq9iddzop.js","_next/static/chunks/38ij4jjaoemb_.css","_next/static/chunks/38mbkjr1065li.css","_next/static/chunks/399qeztbwzvmj.js","_next/static/chunks/39tiddxwloa3k.css","_next/static/chunks/3c3f52374e3bw.js","_next/static/chunks/3c_kzff5fmk-a.css","_next/static/chunks/3chr-jov2w-8w.js","_next/static/chunks/3co8jpdbhlz2n.js","_next/static/chunks/3cytn0vjyeags.js","_next/static/chunks/3drweferjdpgu.js","_next/static/chunks/3dyoa8-gladm8.js","_next/static/chunks/3dze_4dop1drb.js","_next/static/chunks/3e045zkxktq1s.js","_next/static/chunks/3eeila-an96n9.js","_next/static/chunks/3ew9sqy2q6qio.js","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3fpwwsqppcean.js","_next/static/chunks/3fz3frwfs0_zi.css","_next/static/chunks/3fza98ayyll2u.js","_next/static/chunks/3gbeelsgox_x2.js","_next/static/chunks/3grtzhmfyuawe.js","_next/static/chunks/3hsm89qs5vv7v.js","_next/static/chunks/3j2qndive05r2.js","_next/static/chunks/3ldhh1rpmnzx9.js","_next/static/chunks/3lkbfjd_czs0y.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3nqk184zw41-6.js","_next/static/chunks/3oi40bq4u2-yn.js","_next/static/chunks/3oij3rf18o-gj.js","_next/static/chunks/3oiw2qlprhbrn.js","_next/static/chunks/3pvi-vwhpb7ik.js","_next/static/chunks/3q3jrhmpb8-65.js","_next/static/chunks/3qbrm-y10pozt.js","_next/static/chunks/3r7mtk7rcb0bq.js","_next/static/chunks/3rpco2ttz8ts0.js","_next/static/chunks/3rx3hv9fw6cty.js","_next/static/chunks/3s-s8qpjb54d5.css","_next/static/chunks/3s5ne2irk37hg.js","_next/static/chunks/3s_tpku4b4r-v.js","_next/static/chunks/3sm3l0ec21hnh.js","_next/static/chunks/3srk75b8d39nc.js","_next/static/chunks/3sx1t1u4d45nj.js","_next/static/chunks/3sz7_hmabfvh5.js","_next/static/chunks/3th8tf89yncri.js","_next/static/chunks/3tt_-xklt8-dd.js","_next/static/chunks/3u7_yar7s1vub.js","_next/static/chunks/3uunbp39h7mki.js","_next/static/chunks/3v2t4xhby18fu.js","_next/static/chunks/3xhac22n1v2u1.js","_next/static/chunks/3xpstr6d49d_r.js","_next/static/chunks/3y0qmbdy6qnqy.css","_next/static/chunks/3yhq0-cr33v8s.js","_next/static/chunks/3z5qvvkruydkd.js","_next/static/chunks/3zyocw97k91t3.js","_next/static/chunks/3zzj7ouzf8jw1.js","_next/static/chunks/40pvs_eyn-05c.js","_next/static/chunks/41zs8jj3v0eza.css","_next/static/chunks/428-7t744mkwm.js","_next/static/chunks/42wnntjiuvcf2.js","_next/static/chunks/43_3nr72r74yg.js","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/44n_wz55tcgw8.css","_next/static/chunks/turbopack-42oazn3jrnw74.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._index.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._index.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._index.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._index.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._index.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

const SCOPE = new URL(self.registration.scope);
const PREFIX = 'bruma-';
const STATIC_CACHE = `${PREFIX}static-${BUILD}`;
const RUNTIME = {
  tiles: `${PREFIX}tiles-v1`,
  // v2: v1 also held Open-Meteo/Frankfurter responses, which are network-only now.
  api: `${PREFIX}api-v2`,
  media: `${PREFIX}media-v1`,
  // v2: v1 could hold opaque (possibly failed) engine responses.
  ocr: `${PREFIX}ocr-v2`,
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
    return event.respondWith(ocrAsset(event, request));
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

async function cacheFirst(event, request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (cacheable(response)) event.waitUntil(putCapped(cache, cacheName, request, response.clone()));
  return response;
}

/**
 * OCR engine and language models from jsDelivr: cache first, keyed by URL. The network fetch is always
 * CORS (jsDelivr sends `Access-Control-Allow-Origin: *`), also for the worker's no-cors `importScripts`
 * (a CORS response may answer a no-cors request), so a failed response has a visible status and is never
 * cached. A non-ok response still goes back to the worker, which reports a load error.
 */
async function ocrAsset(event, request) {
  const cache = await caches.open(RUNTIME.ocr);
  const cached = await cache.match(request.url);
  if (cached) return cached;
  const response = await fetch(request.url, { mode: 'cors', credentials: 'omit' });
  if (cacheable(response)) event.waitUntil(putCapped(cache, RUNTIME.ocr, request.url, response.clone()));
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
