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

const BUILD = "531dbf6d3e9e";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._index.txt","__next._tree.txt","_next/static/4tY2VUK4TNjdP7srOYkhA/_buildManifest.js","_next/static/4tY2VUK4TNjdP7srOYkhA/_clientMiddlewareManifest.js","_next/static/4tY2VUK4TNjdP7srOYkhA/_ssgManifest.js","_next/static/chunks/0-hm15mgorf1_.js","_next/static/chunks/0-pm1f-fw6yvq.js","_next/static/chunks/00hpkbcvg-uxk.js","_next/static/chunks/0221ovi2e9u6w.js","_next/static/chunks/025fo52zjuxiv.js","_next/static/chunks/03575brlxxjxp.js","_next/static/chunks/03mjoecng_r5l.js","_next/static/chunks/04m5u1cfuonu-.js","_next/static/chunks/04qv98-peq46n.js","_next/static/chunks/04r-i9a787g2c.js","_next/static/chunks/04t58o73d3grp.js","_next/static/chunks/050ol2s99h_ot.js","_next/static/chunks/05py3ffr6inlp.js","_next/static/chunks/05znsuapy8rao.css","_next/static/chunks/07f54-8pzund9.js","_next/static/chunks/07uuvj4bdn2sh.js","_next/static/chunks/07z20demhzgq2.js","_next/static/chunks/08gvrucranfxt.js","_next/static/chunks/08r1597zlxy_7.js","_next/static/chunks/09aq34df9qdld.css","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0_4ec0wisl11o.js","_next/static/chunks/0_9bdht7h32rj.js","_next/static/chunks/0a8eu3ct-xhr4.js","_next/static/chunks/0aqyndevpgsez.js","_next/static/chunks/0bcxy7uzxg6c3.js","_next/static/chunks/0c26_uj95yvp6.js","_next/static/chunks/0cqcl8y8o-_ev.js","_next/static/chunks/0cu4t1u23svc7.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d105i29cu8cm.css","_next/static/chunks/0dt2blplnpf2s.css","_next/static/chunks/0dwe6ak8oyshn.js","_next/static/chunks/0ecu4bppx7o1j.js","_next/static/chunks/0eg2p37r1sxsi.js","_next/static/chunks/0fa9s18hqvju0.js","_next/static/chunks/0fildowv1kwkz.js","_next/static/chunks/0foz8em5hon4z.js","_next/static/chunks/0fvhf10o27ud-.js","_next/static/chunks/0g-wpykcumysj.js","_next/static/chunks/0g5uuz-ysg_q-.js","_next/static/chunks/0hyahzs37eus6.js","_next/static/chunks/0j6c92scwpkd7.js","_next/static/chunks/0j9yhd6_z-4qg.js","_next/static/chunks/0jf188jnc713b.js","_next/static/chunks/0jxr9kzm_lot9.js","_next/static/chunks/0kswe_zl308nv.js","_next/static/chunks/0kw70hr_1uhk4.js","_next/static/chunks/0l2qfo4eu-v2f.css","_next/static/chunks/0lx88g-spahig.js","_next/static/chunks/0m-bvjgiuwc7d.js","_next/static/chunks/0m_fcctlzcvn4.css","_next/static/chunks/0mc9ezmhjfbu_.js","_next/static/chunks/0mvx6ta0753tn.js","_next/static/chunks/0obto2phdv00z.js","_next/static/chunks/0oc5smmpx86td.js","_next/static/chunks/0oftw7wv7bi69.js","_next/static/chunks/0peo0pd2eykrs.js","_next/static/chunks/0r_81voipbe9n.js","_next/static/chunks/0rfhjjfimnl6_.js","_next/static/chunks/0ruoo0mwx4d0_.css","_next/static/chunks/0srepsfyq1umx.css","_next/static/chunks/0t1l5t0k8626b.js","_next/static/chunks/0u4jg0q8qv4un.js","_next/static/chunks/0v-hsghnb0-jw.js","_next/static/chunks/0vy2v02ti2j85.js","_next/static/chunks/0w1l4s1qzkijv.css","_next/static/chunks/0wbk_811kh5bj.css","_next/static/chunks/0xz69ds7da0nj.js","_next/static/chunks/0yi0r90jqbneh.js","_next/static/chunks/0yzv6lsgavkok.js","_next/static/chunks/0z1up3554i-n2.js","_next/static/chunks/1-1rsw6dmuhcg.js","_next/static/chunks/1-7j3abpnq1gl.js","_next/static/chunks/10rivs_lrt0dx.js","_next/static/chunks/110p685dw6gi8.js","_next/static/chunks/1139nwtnkr7ok.js","_next/static/chunks/11jq0c2_zavac.js","_next/static/chunks/11qx4qaps9bn3.js","_next/static/chunks/124__e6q4i5hh.js","_next/static/chunks/12ll2hxaqjwn0.js","_next/static/chunks/13cqlo32rhzne.js","_next/static/chunks/13d2dvafw2v2v.js","_next/static/chunks/13qls7nb-nxs8.js","_next/static/chunks/13wpkphxdz_a0.js","_next/static/chunks/14b3n2d6_cc8n.js","_next/static/chunks/153da2-5qrhi1.js","_next/static/chunks/158jsomaej1h0.js","_next/static/chunks/15afl0mts0f4g.js","_next/static/chunks/15r1on6vptpp1.js","_next/static/chunks/16ifo5r9pov_w.js","_next/static/chunks/17ilynqn2nnhl.js","_next/static/chunks/1834qisyqiv50.js","_next/static/chunks/186suu-u3i05m.css","_next/static/chunks/18d36_uofu6o2.js","_next/static/chunks/18tucg-xmbkl1.js","_next/static/chunks/198ibw-sibffu.css","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1a25fugamiq0a.js","_next/static/chunks/1alv03nmhsthu.js","_next/static/chunks/1bvqq1d7reymp.js","_next/static/chunks/1cgyn9l_nh2sl.js","_next/static/chunks/1csqztww4p7o4.js","_next/static/chunks/1demqeba6uogw.js","_next/static/chunks/1eug7p53pt6wj.js","_next/static/chunks/1fd7l81y8frc_.js","_next/static/chunks/1fuuudlluie5a.css","_next/static/chunks/1g1-3x584bor5.js","_next/static/chunks/1g24qz_m8pmkw.js","_next/static/chunks/1gpx1pcq05gj0.css","_next/static/chunks/1guzvjx08kgi_.js","_next/static/chunks/1j7f9g35wrs28.js","_next/static/chunks/1jiplk52w2ep7.js","_next/static/chunks/1jmh-4dpvv5zn.css","_next/static/chunks/1jmqb0iur6k0n.js","_next/static/chunks/1jt_holekk0m1.js","_next/static/chunks/1km--yy3o7v0f.js","_next/static/chunks/1ls7e9ox582ea.js","_next/static/chunks/1m50z3co87hnm.js","_next/static/chunks/1mdn5i-mgpdb6.css","_next/static/chunks/1n9ibn2ze58rn.js","_next/static/chunks/1ntqn8uwjsqz1.js","_next/static/chunks/1o-g_ly_mwzhl.js","_next/static/chunks/1oenx79pg37ut.js","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1pbjrij-4n6q0.js","_next/static/chunks/1q9oz_nr8biqa.js","_next/static/chunks/1rgfrckdigxcl.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1rove3pq0366i.css","_next/static/chunks/1rs52rhslgh-v.js","_next/static/chunks/1s3opw4mqcn_r.css","_next/static/chunks/1sf2i9oua-wue.js","_next/static/chunks/1t2g62_cx7q-z.js","_next/static/chunks/1t62o24kbqwwo.js","_next/static/chunks/1t9hfxhl8frqt.js","_next/static/chunks/1tby8xyeq0hta.js","_next/static/chunks/1usrkw7ij0u4b.css","_next/static/chunks/1uza460ou7wi_.js","_next/static/chunks/1v44btxfzi77-.js","_next/static/chunks/1vgsqbosl3926.css","_next/static/chunks/1vodtkzl22rg4.js","_next/static/chunks/1xshpg8ycs72v.js","_next/static/chunks/1xsqmpnt4mdug.js","_next/static/chunks/1yanvutp5ffyu.js","_next/static/chunks/1yp1w9f4ehwk4.js","_next/static/chunks/1yvcn6hlzg55h.js","_next/static/chunks/1z_5y89l3uzwj.js","_next/static/chunks/2-nvbm6o940wz.js","_next/static/chunks/203jggm-2-lsg.css","_next/static/chunks/20yig_5jq021-.js","_next/static/chunks/21086k7_5e0_z.js","_next/static/chunks/213vn4xp-p_w0.js","_next/static/chunks/21_6zp902anqr.js","_next/static/chunks/21qeaywr94sak.js","_next/static/chunks/22522kz18xuqg.css","_next/static/chunks/227h9q0oe9nf1.js","_next/static/chunks/22kcqt12xv6fi.js","_next/static/chunks/23wcmas_xa9vo.js","_next/static/chunks/241yva4xtytts.js","_next/static/chunks/244kfc5xqm17g.css","_next/static/chunks/24rx9gpneqwam.js","_next/static/chunks/25in01zl2_ud2.js","_next/static/chunks/27rrmoo-54ozj.js","_next/static/chunks/28pw8wb500xij.js","_next/static/chunks/28yfe1kaflqw5.js","_next/static/chunks/29aqo610zfkq2.js","_next/static/chunks/2_g4abzlmpn3w.js","_next/static/chunks/2acs9j7s1t4wv.js","_next/static/chunks/2b95ixb82tcrp.js","_next/static/chunks/2bk5uftp__zpt.js","_next/static/chunks/2bz_waga0ct34.js","_next/static/chunks/2cw84r4e19bu6.js","_next/static/chunks/2d98xn9fk6bm2.js","_next/static/chunks/2d9f-fv6afisk.js","_next/static/chunks/2ddw82eh_2m2r.js","_next/static/chunks/2dg5pb_c_gtyo.js","_next/static/chunks/2diaxnyv5ne--.js","_next/static/chunks/2gp3v9xavzc4z.js","_next/static/chunks/2h8jy--1n30wm.js","_next/static/chunks/2ifc97pohlf42.css","_next/static/chunks/2j732vkg3n_21.js","_next/static/chunks/2j7d3b-2fc-0e.js","_next/static/chunks/2jesyuw6y7v6h.js","_next/static/chunks/2jjht5ks68ujl.js","_next/static/chunks/2k16-il-gkurz.js","_next/static/chunks/2k9wvz16-qxvv.js","_next/static/chunks/2k_03b3cevp6w.js","_next/static/chunks/2knm50by57xe_.js","_next/static/chunks/2kxbl4whc4-ev.js","_next/static/chunks/2lelmzfqeg_3q.js","_next/static/chunks/2m21dfav1j_93.js","_next/static/chunks/2nosmp32msbn6.js","_next/static/chunks/2nvic9j_za-i4.js","_next/static/chunks/2p4rwqjcgzqa1.js","_next/static/chunks/2pfigglfo9w9i.js","_next/static/chunks/2q8fqae3nqwr9.js","_next/static/chunks/2qfo9hzfmo6ta.js","_next/static/chunks/2qsgd2aqctntx.css","_next/static/chunks/2qvvv-nv_resk.js","_next/static/chunks/2r-7ha1vi_jib.js","_next/static/chunks/2r42kuuwcx77w.js","_next/static/chunks/2r4v5dl4dpv5d.js","_next/static/chunks/2rc52qey9q1d5.js","_next/static/chunks/2t-aktqx7_yiq.js","_next/static/chunks/2td65k5bdrmr-.js","_next/static/chunks/2ua69u5z_k72u.js","_next/static/chunks/2uksp7nafbrxf.js","_next/static/chunks/2umgyooy8mmww.css","_next/static/chunks/2uottahgsqe7q.js","_next/static/chunks/2wyoa-1g-7imv.js","_next/static/chunks/2wzfhl12dx6bn.js","_next/static/chunks/2x_mz4ttqi7y7.js","_next/static/chunks/2z7flryjsb6gj.js","_next/static/chunks/3-5cg6c2l0m0x.css","_next/static/chunks/3-v22ux3e89p8.js","_next/static/chunks/30gkmnbjb4dtj.js","_next/static/chunks/30lahex3s76re.js","_next/static/chunks/30od3rd-uox98.js","_next/static/chunks/30scq7z3e71s1.js","_next/static/chunks/3179r62_b8cu_.js","_next/static/chunks/31dx9-v4pixdo.js","_next/static/chunks/31p9to-i1x8eu.js","_next/static/chunks/31s683fbouc5t.js","_next/static/chunks/324x_l0ij0fg0.js","_next/static/chunks/3279bwyub8syu.js","_next/static/chunks/32rlazqd4qrv_.css","_next/static/chunks/32uudyndb1cbw.js","_next/static/chunks/32yx4dpzy8uqc.js","_next/static/chunks/331rz-yp8r7-d.js","_next/static/chunks/3359hagqwawd-.js","_next/static/chunks/34-ycburi3vcv.js","_next/static/chunks/340yiw094tihd.js","_next/static/chunks/34jj0lqa64v9f.css","_next/static/chunks/35kz1papddlul.css","_next/static/chunks/37lpc58dupm9e.css","_next/static/chunks/38wbzk9tbh7sh.js","_next/static/chunks/393ro48qdd8gj.js","_next/static/chunks/39p62k7i2xl07.js","_next/static/chunks/3c_kzff5fmk-a.css","_next/static/chunks/3cm-eogb8ge2r.js","_next/static/chunks/3co8jpdbhlz2n.js","_next/static/chunks/3cytn0vjyeags.js","_next/static/chunks/3d-huotk1pdpx.css","_next/static/chunks/3dznabga4ud41.js","_next/static/chunks/3eavxgrai_227.js","_next/static/chunks/3eeila-an96n9.js","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3fpwwsqppcean.js","_next/static/chunks/3fte5a-yohumm.js","_next/static/chunks/3hsm89qs5vv7v.js","_next/static/chunks/3huny98m7go-o.js","_next/static/chunks/3i5t5ib_90qha.js","_next/static/chunks/3jy1194ufj8vi.js","_next/static/chunks/3lkbfjd_czs0y.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3o2la4isgtjbq.js","_next/static/chunks/3oiw2qlprhbrn.js","_next/static/chunks/3p40ejsp60o_p.js","_next/static/chunks/3p47w-nfiv7jt.js","_next/static/chunks/3pvi-vwhpb7ik.js","_next/static/chunks/3q3jrhmpb8-65.js","_next/static/chunks/3r7mtk7rcb0bq.js","_next/static/chunks/3rgi9de5seepp.js","_next/static/chunks/3s5ne2irk37hg.js","_next/static/chunks/3s_tpku4b4r-v.js","_next/static/chunks/3srk75b8d39nc.js","_next/static/chunks/3sx1t1u4d45nj.js","_next/static/chunks/3th8tf89yncri.js","_next/static/chunks/3tjpkqptr1yt3.js","_next/static/chunks/3tt_-xklt8-dd.js","_next/static/chunks/3u7_yar7s1vub.js","_next/static/chunks/3v70urztx16he.js","_next/static/chunks/3xhac22n1v2u1.js","_next/static/chunks/3xw0obv93dhs0.js","_next/static/chunks/3y0bue5ydlkn_.js","_next/static/chunks/3y6s_cn069cqe.js","_next/static/chunks/3yp__0f2xfssb.css","_next/static/chunks/3z5qvvkruydkd.js","_next/static/chunks/3zyocw97k91t3.js","_next/static/chunks/3zzj7ouzf8jw1.js","_next/static/chunks/40i84-2gob2lw.js","_next/static/chunks/40pvs_eyn-05c.js","_next/static/chunks/419hr7l4w5bth.js","_next/static/chunks/41hc8lq1071yl.css","_next/static/chunks/41zs8jj3v0eza.css","_next/static/chunks/428-7t744mkwm.js","_next/static/chunks/42b1xbv_ukrgn.js","_next/static/chunks/42fiysw3n20jn.js","_next/static/chunks/42wnntjiuvcf2.js","_next/static/chunks/43_3nr72r74yg.js","_next/static/chunks/43bj_jp2__t-7.js","_next/static/chunks/43g2exjegvup4.js","_next/static/chunks/443uvbjxbs29e.js","_next/static/chunks/44jyx6n88s1u2.js","_next/static/chunks/turbopack-42oazn3jrnw74.js","_next/static/media/DMSans-s.p.3_ujbwaxngv29.woff2","_next/static/media/SpaceGrotesk-s.p.1svu3mhjowcan.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._index.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._index.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","help/__next._full.txt","help/__next._index.txt","help/__next._tree.txt","help/__next.help.__PAGE__.txt","help/","help/index.txt","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._index.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._index.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._index.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

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
