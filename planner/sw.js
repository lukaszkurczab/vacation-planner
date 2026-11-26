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

const BUILD = "da6dd29b65e1";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._index.txt","__next._tree.txt","_next/static/FIVfs-GPAKFet5srsWs45/_buildManifest.js","_next/static/FIVfs-GPAKFet5srsWs45/_clientMiddlewareManifest.js","_next/static/FIVfs-GPAKFet5srsWs45/_ssgManifest.js","_next/static/chunks/0-urfr2hv88v0.css","_next/static/chunks/0-ydk3jbsj_2a.js","_next/static/chunks/00_8t675yxh9i.js","_next/static/chunks/00gfl7nyenquc.css","_next/static/chunks/00ku9o3ge04wf.js","_next/static/chunks/00n3w2mok1iiv.js","_next/static/chunks/00v3tt6aqkce0.js","_next/static/chunks/00xfkk-th5iww.js","_next/static/chunks/01fnlcyeibfmp.js","_next/static/chunks/01ot615fikv0g.js","_next/static/chunks/02g15cahjr6rp.js","_next/static/chunks/03575brlxxjxp.js","_next/static/chunks/03mjoecng_r5l.js","_next/static/chunks/04w_2dyteboho.js","_next/static/chunks/05lkew5lth2og.js","_next/static/chunks/05py3ffr6inlp.js","_next/static/chunks/06pxyum6xcfdz.js","_next/static/chunks/06qt_o042ebo-.js","_next/static/chunks/0791rvxbbg9im.js","_next/static/chunks/07f54-8pzund9.js","_next/static/chunks/07ppvypjq8xj2.js","_next/static/chunks/07uuvj4bdn2sh.js","_next/static/chunks/07z20demhzgq2.js","_next/static/chunks/0_09cqa88im2s.js","_next/static/chunks/0_9bdht7h32rj.js","_next/static/chunks/0_q_m2536lww1.css","_next/static/chunks/0au2rrqglhw53.js","_next/static/chunks/0baxcd7zjaueb.css","_next/static/chunks/0co6wme4i-y9c.js","_next/static/chunks/0cri8_v6k7oxr.js","_next/static/chunks/0cu4t1u23svc7.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0d-wvg2kwuu19.js","_next/static/chunks/0d-y_kt5fd2qp.js","_next/static/chunks/0d105i29cu8cm.css","_next/static/chunks/0d2_-52-r869h.js","_next/static/chunks/0dt2blplnpf2s.css","_next/static/chunks/0e3tv7k-67l8f.js","_next/static/chunks/0fdh1kxdkrwab.js","_next/static/chunks/0fm2ua-km0vva.js","_next/static/chunks/0fpzgv-u4d6uu.js","_next/static/chunks/0fqntojjx2qdy.js","_next/static/chunks/0hyahzs37eus6.js","_next/static/chunks/0hzwfdotw5k7p.css","_next/static/chunks/0i2qm_80k669m.js","_next/static/chunks/0idj8e09gvm0y.js","_next/static/chunks/0izzh3bg_32no.js","_next/static/chunks/0jqvhbtpvs9n9.js","_next/static/chunks/0k8qfcspx69r9.js","_next/static/chunks/0kw70hr_1uhk4.js","_next/static/chunks/0l2qfo4eu-v2f.css","_next/static/chunks/0l_3lladb18e5.js","_next/static/chunks/0lbbjhm5h6z_g.js","_next/static/chunks/0lduoculgex6b.js","_next/static/chunks/0lumrcuui9xq7.js","_next/static/chunks/0ly0537vaji3r.css","_next/static/chunks/0m-bvjgiuwc7d.js","_next/static/chunks/0mc9ezmhjfbu_.js","_next/static/chunks/0nywhadil2-3l.js","_next/static/chunks/0o1hipy31op37.js","_next/static/chunks/0peo0pd2eykrs.js","_next/static/chunks/0pjdfa--eihuz.js","_next/static/chunks/0ptf4o1ianwns.js","_next/static/chunks/0qagndx2jgs92.js","_next/static/chunks/0rriy92kecvb2.js","_next/static/chunks/0ruoo0mwx4d0_.css","_next/static/chunks/0srh2ewo95__x.js","_next/static/chunks/0t1l5t0k8626b.js","_next/static/chunks/0t2l6nx9ws-fg.js","_next/static/chunks/0t7nipm51809x.js","_next/static/chunks/0t7vb48lz2uij.js","_next/static/chunks/0uzkvri53wq2e.css","_next/static/chunks/0vwei7qtl5tj-.js","_next/static/chunks/0vy2v02ti2j85.js","_next/static/chunks/0w_71nuktend9.js","_next/static/chunks/0wl2pskx_-ix4.js","_next/static/chunks/0wq_2nze30no2.js","_next/static/chunks/0wyt6bum1sta2.js","_next/static/chunks/0x4b2r9rajkxy.js","_next/static/chunks/0xihgw760diiz.js","_next/static/chunks/0yzv6lsgavkok.js","_next/static/chunks/0z1up3554i-n2.js","_next/static/chunks/0zagubchnuio7.js","_next/static/chunks/0zifxb01rd4tm.js","_next/static/chunks/101_rgkhnibm6.js","_next/static/chunks/10ksyymb6obr5.js","_next/static/chunks/10ly3hwx4jso9.js","_next/static/chunks/110p685dw6gi8.js","_next/static/chunks/11jq0c2_zavac.js","_next/static/chunks/12bs6qf1tbboj.js","_next/static/chunks/12kczeahhsuvf.css","_next/static/chunks/12uhk6jfo7hn7.js","_next/static/chunks/12vdjye9_n_vf.css","_next/static/chunks/13-6ayg6rke6n.js","_next/static/chunks/13qj5is78aus6.js","_next/static/chunks/148ud8qzy8ndl.js","_next/static/chunks/14b3n2d6_cc8n.js","_next/static/chunks/15r1on6vptpp1.js","_next/static/chunks/15zmhsp0-e0_d.js","_next/static/chunks/16cp0to_ok82p.js","_next/static/chunks/16e-zx4okt3qc.js","_next/static/chunks/185vbdvaqq1v-.js","_next/static/chunks/186suu-u3i05m.css","_next/static/chunks/19-y8miqrn343.js","_next/static/chunks/193e6nbnqcez5.js","_next/static/chunks/198ibw-sibffu.css","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1_3urslbv4gqi.js","_next/static/chunks/1a22kwhv_rtgg.js","_next/static/chunks/1a25fugamiq0a.js","_next/static/chunks/1alv03nmhsthu.js","_next/static/chunks/1b108fvfjiabh.js","_next/static/chunks/1bmt8p5xbkw4v.js","_next/static/chunks/1butz20ofulgv.js","_next/static/chunks/1cb23s1gr5dc6.css","_next/static/chunks/1cgyn9l_nh2sl.js","_next/static/chunks/1emj7dvbl8i2j.css","_next/static/chunks/1fd7l81y8frc_.js","_next/static/chunks/1fuuudlluie5a.css","_next/static/chunks/1g1-3x584bor5.js","_next/static/chunks/1g24qz_m8pmkw.js","_next/static/chunks/1gbnckdu9_65b.js","_next/static/chunks/1gpx1pcq05gj0.css","_next/static/chunks/1helmuy_behch.js","_next/static/chunks/1idupourw45on.js","_next/static/chunks/1jiplk52w2ep7.js","_next/static/chunks/1jj-r-q1c2n-0.js","_next/static/chunks/1jmqb0iur6k0n.js","_next/static/chunks/1juqswn4gbd0z.js","_next/static/chunks/1kp75xq-dabx-.js","_next/static/chunks/1kt4az9o90ayy.js","_next/static/chunks/1n1tu0ypunywf.js","_next/static/chunks/1n9ibn2ze58rn.js","_next/static/chunks/1o4milnh3ma91.js","_next/static/chunks/1o87q3jbiv6li.js","_next/static/chunks/1oenx79pg37ut.js","_next/static/chunks/1oomlpy-8e5i_.js","_next/static/chunks/1p2gr_f2pzvq0.js","_next/static/chunks/1q_qu18n2hfm3.js","_next/static/chunks/1qfpz87oq5krc.css","_next/static/chunks/1qk65u_v3-wmt.js","_next/static/chunks/1rgfrckdigxcl.js","_next/static/chunks/1rj7ns8rte9vc.js","_next/static/chunks/1rniwdrprhspz.css","_next/static/chunks/1s-dz1y1mlx60.js","_next/static/chunks/1s0pcnu7y57j8.css","_next/static/chunks/1t62o24kbqwwo.js","_next/static/chunks/1tagacee2udbj.js","_next/static/chunks/1twuhzec6pf4b.js","_next/static/chunks/1ur6jc_3jnyvj.css","_next/static/chunks/1usrkw7ij0u4b.css","_next/static/chunks/1vx0zfrne1vxr.js","_next/static/chunks/1wliwdb4eum28.js","_next/static/chunks/1x00a5jrp4ffl.js","_next/static/chunks/1xshpg8ycs72v.js","_next/static/chunks/1xsqmpnt4mdug.js","_next/static/chunks/1yanvutp5ffyu.js","_next/static/chunks/1yp48vjfv_7x7.js","_next/static/chunks/1yvcn6hlzg55h.js","_next/static/chunks/1z2yq5d19jh4e.js","_next/static/chunks/2-9vl0nsmulip.js","_next/static/chunks/203jggm-2-lsg.css","_next/static/chunks/20hd8v_2gh1lc.js","_next/static/chunks/21086k7_5e0_z.js","_next/static/chunks/213vn4xp-p_w0.js","_next/static/chunks/21qeaywr94sak.js","_next/static/chunks/22522kz18xuqg.css","_next/static/chunks/22vzh89-bv2f2.js","_next/static/chunks/23rnj4-xl28hc.js","_next/static/chunks/244kfc5xqm17g.css","_next/static/chunks/24aponaz77etn.js","_next/static/chunks/25in01zl2_ud2.js","_next/static/chunks/27vo0n7aclkkz.css","_next/static/chunks/283om1niwcu1v.js","_next/static/chunks/28643yl60d50n.js","_next/static/chunks/28pw8wb500xij.js","_next/static/chunks/2_bpfepukexjm.js","_next/static/chunks/2b95ixb82tcrp.js","_next/static/chunks/2bk5uftp__zpt.js","_next/static/chunks/2bx8y_dtauuv9.js","_next/static/chunks/2bzeoq5714hu_.js","_next/static/chunks/2crailhoc5xq6.js","_next/static/chunks/2ctt40stw2oxu.js","_next/static/chunks/2d98xn9fk6bm2.js","_next/static/chunks/2dbplh_v7omvl.js","_next/static/chunks/2ddmrojwgxvfe.css","_next/static/chunks/2dg5pb_c_gtyo.js","_next/static/chunks/2e82k5a6bszlh.js","_next/static/chunks/2eefda_zcfw_j.js","_next/static/chunks/2fq16rlixjx09.js","_next/static/chunks/2gy24qkoa5y16.js","_next/static/chunks/2iom76qxqdtvg.js","_next/static/chunks/2j49bfdb_ggv9.js","_next/static/chunks/2j732vkg3n_21.js","_next/static/chunks/2jt_129ysm2ia.js","_next/static/chunks/2k0hh2xou4o44.js","_next/static/chunks/2k16-il-gkurz.js","_next/static/chunks/2k9wvz16-qxvv.js","_next/static/chunks/2kj_l0r_1nkdw.js","_next/static/chunks/2l2o_mxnwujfo.js","_next/static/chunks/2lkdiwxi_aku_.js","_next/static/chunks/2o_wc04-s54pn.js","_next/static/chunks/2paeyd954qppi.js","_next/static/chunks/2pridaia_ibut.js","_next/static/chunks/2q9c4g_wrf5sz.js","_next/static/chunks/2qvvv-nv_resk.js","_next/static/chunks/2r-7ha1vi_jib.js","_next/static/chunks/2rc52qey9q1d5.js","_next/static/chunks/2rr-3pmt8plmt.js","_next/static/chunks/2rxhf1nt1p5cz.js","_next/static/chunks/2t_ixu6uhsvr7.js","_next/static/chunks/2td65k5bdrmr-.js","_next/static/chunks/2ua69u5z_k72u.js","_next/static/chunks/2umgyooy8mmww.css","_next/static/chunks/2w-2v4c0akf6g.js","_next/static/chunks/2w99j7mz8ngqq.js","_next/static/chunks/2xztgiqbc2r8c.js","_next/static/chunks/2z-0pbmzrc89-.js","_next/static/chunks/3-5cg6c2l0m0x.css","_next/static/chunks/3-eh9hh0g0lbq.js","_next/static/chunks/30lahex3s76re.js","_next/static/chunks/3179r62_b8cu_.js","_next/static/chunks/31dqk5v75-tf-.js","_next/static/chunks/31dx9-v4pixdo.js","_next/static/chunks/329rzlvxb5o3r.js","_next/static/chunks/32yx4dpzy8uqc.js","_next/static/chunks/336rt4t6rxt7u.js","_next/static/chunks/33qset5gs-q94.js","_next/static/chunks/340yiw094tihd.js","_next/static/chunks/3410iptw0p2mv.js","_next/static/chunks/347j-hl_llqaj.js","_next/static/chunks/34hxs70yg3zi4.css","_next/static/chunks/34jj0lqa64v9f.css","_next/static/chunks/34wk7qa7vh1m1.js","_next/static/chunks/35kz1papddlul.css","_next/static/chunks/35wltydnxqeoq.js","_next/static/chunks/36-mqq5w1-tgj.js","_next/static/chunks/360brdiy2vjox.js","_next/static/chunks/36nyyilf4y5yy.js","_next/static/chunks/379y1_8j9yrb5.js","_next/static/chunks/37p1wf860wrb6.js","_next/static/chunks/38qb91bdtqpr1.js","_next/static/chunks/394jejyg4h7oj.js","_next/static/chunks/39q9l1t_d_42l.js","_next/static/chunks/3_4b6nm51yxra.js","_next/static/chunks/3_dkmdi8tk5f3.js","_next/static/chunks/3a-ijm9l8964j.js","_next/static/chunks/3au7k2z363ki2.js","_next/static/chunks/3azswpp504bup.js","_next/static/chunks/3bp3a00smp23i.js","_next/static/chunks/3c_kzff5fmk-a.css","_next/static/chunks/3co8jpdbhlz2n.js","_next/static/chunks/3cwvxqv14wt8h.js","_next/static/chunks/3cytn0vjyeags.js","_next/static/chunks/3ek__ubzg27xi.js","_next/static/chunks/3fntmmi971322.js","_next/static/chunks/3fpwwsqppcean.js","_next/static/chunks/3fte5a-yohumm.js","_next/static/chunks/3gkee43h7e6_j.js","_next/static/chunks/3gq-o9ck3rof1.js","_next/static/chunks/3hmgmcv2jp7hl.js","_next/static/chunks/3hsm89qs5vv7v.js","_next/static/chunks/3i8rmrbqyecvy.js","_next/static/chunks/3if6qdf2rbvb8.js","_next/static/chunks/3ihdssxr_iw39.js","_next/static/chunks/3j2vx8kfs61ui.js","_next/static/chunks/3jx3uprzpi9id.js","_next/static/chunks/3kndgfe2fgdpe.js","_next/static/chunks/3lkbfjd_czs0y.js","_next/static/chunks/3m_h557wfe_d7.js","_next/static/chunks/3mc6dra1m0098.js","_next/static/chunks/3nfwq9f65oew0.js","_next/static/chunks/3p7p0ych-divy.js","_next/static/chunks/3pfzrebt1ft26.js","_next/static/chunks/3pu5zaxniyglr.js","_next/static/chunks/3pvi-vwhpb7ik.js","_next/static/chunks/3q0e6k3zpscu7.js","_next/static/chunks/3q3jrhmpb8-65.js","_next/static/chunks/3q6bvb94bfh3i.js","_next/static/chunks/3r31s1jmy_fba.js","_next/static/chunks/3rhqeh2wqydwl.css","_next/static/chunks/3rkkbwsp03yi1.js","_next/static/chunks/3rv-_9qv_hfej.js","_next/static/chunks/3s5ne2irk37hg.js","_next/static/chunks/3srcjhk7tilrh.js","_next/static/chunks/3th9c5m7zmlhj.js","_next/static/chunks/3tqmfc5qpks1h.js","_next/static/chunks/3ub5zj154nzir.js","_next/static/chunks/3uv3b_bakizrn.js","_next/static/chunks/3vgyhndcpkfd3.js","_next/static/chunks/3wgw1cqtsnqq7.js","_next/static/chunks/3wzacsg7d1s2b.js","_next/static/chunks/3xhac22n1v2u1.js","_next/static/chunks/3xw0obv93dhs0.js","_next/static/chunks/3yp__0f2xfssb.css","_next/static/chunks/3yy6d3tue3ar4.js","_next/static/chunks/3z5qvvkruydkd.js","_next/static/chunks/3zybqply9tuuq.css","_next/static/chunks/3zzj7ouzf8jw1.js","_next/static/chunks/3zzpw_f03_8pp.js","_next/static/chunks/40-0ivc4rlpnw.js","_next/static/chunks/401a72waqmfws.js","_next/static/chunks/40i84-2gob2lw.js","_next/static/chunks/40laxhdi9l9m3.js","_next/static/chunks/40v1t_6zc5ba3.js","_next/static/chunks/40w6y_uaiw179.js","_next/static/chunks/41hc8lq1071yl.css","_next/static/chunks/42fiysw3n20jn.js","_next/static/chunks/44hawtfcu7nke.js","_next/static/chunks/turbopack-42oazn3jrnw74.js","_next/static/media/DMSans-s.p.15u0enhwmk2k7.woff2","_next/static/media/SpaceGrotesk-s.p.0zhyqmcl79vnu.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._index.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._index.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","help/__next._full.txt","help/__next._index.txt","help/__next._tree.txt","help/__next.help.__PAGE__.txt","help/","help/index.txt","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._index.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._index.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._index.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

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
