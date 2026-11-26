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

const BUILD = "8f17bcdba413";
const PRECACHE = ["404.html","404/","__next.__PAGE__.txt","__next._full.txt","__next._tree.txt","_next/static/AuJhFqE4Q2MFuqZOeNi0K/_buildManifest.js","_next/static/AuJhFqE4Q2MFuqZOeNi0K/_clientMiddlewareManifest.js","_next/static/AuJhFqE4Q2MFuqZOeNi0K/_ssgManifest.js","_next/static/chunks/0-5d_jht71-e8.css","_next/static/chunks/0-ydk3jbsj_2a.js","_next/static/chunks/00ku9o3ge04wf.js","_next/static/chunks/01wx3w0737552.js","_next/static/chunks/02l8q68z9w6wp.css","_next/static/chunks/03575brlxxjxp.js","_next/static/chunks/03eomh181e6fi.js","_next/static/chunks/03i9_yyhroxpk.js","_next/static/chunks/03mjoecng_r5l.js","_next/static/chunks/04ontb1oge40e.css","_next/static/chunks/04w_2dyteboho.js","_next/static/chunks/05-ufzj2wop-o.js","_next/static/chunks/05p2kucogdcwo.js","_next/static/chunks/05py3ffr6inlp.js","_next/static/chunks/05qb011kex4tr.js","_next/static/chunks/065hm99ajt6k-.js","_next/static/chunks/06chbfknjxdib.js","_next/static/chunks/06m1078a77__r.js","_next/static/chunks/06v65w70f7vkz.css","_next/static/chunks/07cvc38gk2hmc.js","_next/static/chunks/07f54-8pzund9.js","_next/static/chunks/07kxzafn05s_5.js","_next/static/chunks/07ppvypjq8xj2.js","_next/static/chunks/07uuvj4bdn2sh.js","_next/static/chunks/07z20demhzgq2.js","_next/static/chunks/08h_dm0snla8u.css","_next/static/chunks/09fsb1rjj8fv7.js","_next/static/chunks/09h5rqnixhbnr.js","_next/static/chunks/0_9bdht7h32rj.js","_next/static/chunks/0_ye778ls_x_h.js","_next/static/chunks/0_yi_vto085zo.js","_next/static/chunks/0ajq7d79f-c-l.js","_next/static/chunks/0aml4hnd-zuyf.js","_next/static/chunks/0cu4t1u23svc7.js","_next/static/chunks/0cz1d0mv5g_q7.js","_next/static/chunks/0dlgp2j2p3uej.js","_next/static/chunks/0exfjo9djj07e.js","_next/static/chunks/0fm2ua-km0vva.js","_next/static/chunks/0fomkaqjok0iz.css","_next/static/chunks/0h87kkjt-djni.js","_next/static/chunks/0hyahzs37eus6.js","_next/static/chunks/0i2qm_80k669m.js","_next/static/chunks/0izzh3bg_32no.js","_next/static/chunks/0jgjm82z_udxr.js","_next/static/chunks/0jhianlqtj9h0.js","_next/static/chunks/0jscm5tmsm2ay.js","_next/static/chunks/0k3mq1sg2dr5e.js","_next/static/chunks/0k8qfcspx69r9.js","_next/static/chunks/0kw70hr_1uhk4.js","_next/static/chunks/0m-bvjgiuwc7d.js","_next/static/chunks/0nvlfp44er8ai.css","_next/static/chunks/0omxm1s7waqn7.js","_next/static/chunks/0otvx8xxsq0i5.js","_next/static/chunks/0ox1mmytkjtbg.css","_next/static/chunks/0pjdfa--eihuz.js","_next/static/chunks/0qhq1nm9ia7qv.js","_next/static/chunks/0rdw8y3sq-s-l.css","_next/static/chunks/0rriy92kecvb2.js","_next/static/chunks/0rxrufansi9xx.js","_next/static/chunks/0srz4sp7a4non.js","_next/static/chunks/0szm7_rfb4hs4.js","_next/static/chunks/0t1l5t0k8626b.js","_next/static/chunks/0t5l9vcp6oz8l.js","_next/static/chunks/0tzpa6cg_qjg6.js","_next/static/chunks/0uepg4xqlc8ei.css","_next/static/chunks/0v24-sglx9-jp.js","_next/static/chunks/0v7l5_e2ppgvh.js","_next/static/chunks/0vi-hunyulrgp.js","_next/static/chunks/0vy2v02ti2j85.js","_next/static/chunks/0w7_6iwy9wi_a.js","_next/static/chunks/0wbav79wpxnlf.js","_next/static/chunks/0wyt6bum1sta2.js","_next/static/chunks/0x4b2r9rajkxy.js","_next/static/chunks/0x8c8ou3tea1u.js","_next/static/chunks/0xk1as2k6_bah.js","_next/static/chunks/0y77sg2ocjsj3.js","_next/static/chunks/0y9zumtto3rfd.js","_next/static/chunks/0z1up3554i-n2.js","_next/static/chunks/101_rgkhnibm6.js","_next/static/chunks/10by4vzkx9buq.js","_next/static/chunks/10ly3hwx4jso9.js","_next/static/chunks/10x1k1bwswtmp.js","_next/static/chunks/11ll23g5nx409.js","_next/static/chunks/11tdwalic1f4z.js","_next/static/chunks/11wtjajtda3jz.js","_next/static/chunks/12clod6i_dd1u.css","_next/static/chunks/13-6ayg6rke6n.js","_next/static/chunks/148ud8qzy8ndl.js","_next/static/chunks/1496c56kl-clh.js","_next/static/chunks/14b3n2d6_cc8n.js","_next/static/chunks/14mzqd4mtv6pi.js","_next/static/chunks/14njzf4fw_mr2.js","_next/static/chunks/14q26zsvcy4e3.css","_next/static/chunks/1591t_mf5ok6z.css","_next/static/chunks/15ixnlq83x2ew.js","_next/static/chunks/15r1on6vptpp1.js","_next/static/chunks/16hqbpf_mi6py.js","_next/static/chunks/186wphulzs890.js","_next/static/chunks/18_cycka2omed.js","_next/static/chunks/19w8hwqgs20t0.js","_next/static/chunks/1_3qsbf5zkrn_.js","_next/static/chunks/1__u7iq4eaft1.js","_next/static/chunks/1aaiv1ld_li_d.css","_next/static/chunks/1alv03nmhsthu.js","_next/static/chunks/1ambi5it-_1q6.js","_next/static/chunks/1aw8pz1khodv8.js","_next/static/chunks/1bgrauflpbtpm.js","_next/static/chunks/1bi80kwvtuyfc.css","_next/static/chunks/1c7dao592436n.js","_next/static/chunks/1cakgxo5718sv.js","_next/static/chunks/1cgyn9l_nh2sl.js","_next/static/chunks/1cnw_gub5f90l.css","_next/static/chunks/1d4mz73zesiu9.js","_next/static/chunks/1eisgujxrgl_6.js","_next/static/chunks/1fd7l81y8frc_.js","_next/static/chunks/1g1-3x584bor5.js","_next/static/chunks/1g24qz_m8pmkw.js","_next/static/chunks/1g2cnk5o6wi8n.js","_next/static/chunks/1g5jfv265x58g.js","_next/static/chunks/1i52ru1skwdck.js","_next/static/chunks/1idupourw45on.js","_next/static/chunks/1ilpx_ryh1g0i.js","_next/static/chunks/1ivbe86g8psqk.js","_next/static/chunks/1jirw5z23cj2i.css","_next/static/chunks/1jj-r-q1c2n-0.js","_next/static/chunks/1jjfq74f9w97v.js","_next/static/chunks/1jmqb0iur6k0n.js","_next/static/chunks/1jnnnrn2duigl.js","_next/static/chunks/1k2w3nq2-wg_-.js","_next/static/chunks/1k4m14n15k3o9.js","_next/static/chunks/1kq35lkaof_xk.js","_next/static/chunks/1krb5544-qmdp.js","_next/static/chunks/1n9ibn2ze58rn.js","_next/static/chunks/1oenx79pg37ut.js","_next/static/chunks/1ohp07hn8w13i.js","_next/static/chunks/1p_yngz9b-yxj.js","_next/static/chunks/1pwi26hm1vsdo.js","_next/static/chunks/1py7mrc7xm1uu.js","_next/static/chunks/1q45fmmux5s33.js","_next/static/chunks/1q890bvu5wnxq.js","_next/static/chunks/1qzms9dclj5fb.js","_next/static/chunks/1rgfrckdigxcl.js","_next/static/chunks/1s1-l11kvq-bv.js","_next/static/chunks/1sbxlypdl9ioh.js","_next/static/chunks/1som718rftrmk.css","_next/static/chunks/1sqo76b5rt561.js","_next/static/chunks/1t62o24kbqwwo.js","_next/static/chunks/1v7nzyvjt1lmw.js","_next/static/chunks/1vrv_zzl4xuy2.js","_next/static/chunks/1vx0zfrne1vxr.js","_next/static/chunks/1w5krhpy-xpcs.js","_next/static/chunks/1wbs6oqz3biul.js","_next/static/chunks/1wliwdb4eum28.js","_next/static/chunks/1x00a5jrp4ffl.js","_next/static/chunks/1x_bzfo73865w.js","_next/static/chunks/1xcsxc3i19r5t.js","_next/static/chunks/1xp_bjwuob0mq.js","_next/static/chunks/1xshpg8ycs72v.js","_next/static/chunks/1xsqmpnt4mdug.js","_next/static/chunks/1y1t7of7tjaa0.js","_next/static/chunks/1yanvutp5ffyu.js","_next/static/chunks/1yfomgb-i9k7d.css","_next/static/chunks/1zd5phe7gf3i7.js","_next/static/chunks/1zk5h1fjnyck1.js","_next/static/chunks/20-hws2r3au_n.js","_next/static/chunks/21086k7_5e0_z.js","_next/static/chunks/2195b0kgbm4_b.css","_next/static/chunks/21kk1s_e430er.js","_next/static/chunks/21qeaywr94sak.js","_next/static/chunks/21ql2b39e7f3w.css","_next/static/chunks/22mqpnwkb-pys.js","_next/static/chunks/22xtza-n7p09f.js","_next/static/chunks/23n_3_40lzpvz.js","_next/static/chunks/23rnj4-xl28hc.js","_next/static/chunks/24yqsso6dpic9.js","_next/static/chunks/25-nog7sumdz0.js","_next/static/chunks/252x-2qr5c6hi.js","_next/static/chunks/25in01zl2_ud2.js","_next/static/chunks/25mvzier-el8w.js","_next/static/chunks/26njf7uxff_4p.css","_next/static/chunks/28949_snodv70.css","_next/static/chunks/28_60cfy5x5l8.js","_next/static/chunks/28ka0t0qozihn.js","_next/static/chunks/28pw8wb500xij.js","_next/static/chunks/2a0h4t_mmvrc1.js","_next/static/chunks/2ae7_b2-b6btt.js","_next/static/chunks/2b95ixb82tcrp.js","_next/static/chunks/2bty63jpfigbl.js","_next/static/chunks/2cgmbo09l2sd9.css","_next/static/chunks/2cicd9nqopv_c.js","_next/static/chunks/2crailhoc5xq6.js","_next/static/chunks/2d98xn9fk6bm2.js","_next/static/chunks/2d9e17nnqpqlh.js","_next/static/chunks/2dg5pb_c_gtyo.js","_next/static/chunks/2dgm2e2btwq60.js","_next/static/chunks/2etw_hu26bsb9.js","_next/static/chunks/2f-1sgmmsk219.js","_next/static/chunks/2fditlyg2wak4.css","_next/static/chunks/2g-j5hbf_g24b.js","_next/static/chunks/2i3sn2p_mur0y.js","_next/static/chunks/2icu6ijzj4s8c.css","_next/static/chunks/2ig4myhiyomjn.js","_next/static/chunks/2iom76qxqdtvg.js","_next/static/chunks/2iwhvo59-h0ry.js","_next/static/chunks/2j732vkg3n_21.js","_next/static/chunks/2k16-il-gkurz.js","_next/static/chunks/2k1u_uxyvot-l.js","_next/static/chunks/2k2wz0v493e-l.js","_next/static/chunks/2k9wvz16-qxvv.js","_next/static/chunks/2kjft_e0ui58y.css","_next/static/chunks/2kse697sa4zlc.js","_next/static/chunks/2metojjatohuq.js","_next/static/chunks/2nmsm_cakdz-m.js","_next/static/chunks/2on9kja1kohtd.js","_next/static/chunks/2ov9b5oswm47_.css","_next/static/chunks/2oze_9rkui4c6.js","_next/static/chunks/2p-kn25cw_aas.js","_next/static/chunks/2popf8wxzwqcy.js","_next/static/chunks/2pridaia_ibut.js","_next/static/chunks/2pyh45t-0c_zb.js","_next/static/chunks/2qwmimi4r4qzl.js","_next/static/chunks/2r1vv4opoohnh.js","_next/static/chunks/2rc52qey9q1d5.js","_next/static/chunks/2rjom-0chwk1d.js","_next/static/chunks/2t-l_f6ifs_bf.css","_next/static/chunks/2t_ixu6uhsvr7.js","_next/static/chunks/2td65k5bdrmr-.js","_next/static/chunks/2upv5_pi5xyop.js","_next/static/chunks/2v04mywqlh1yt.css","_next/static/chunks/2wj344dbu5wph.js","_next/static/chunks/2wxpu60ffnnbq.js","_next/static/chunks/2y-y_kfvqvr0w.js","_next/static/chunks/2y89bu9ucc4fi.css","_next/static/chunks/2yqsgr03tj__l.css","_next/static/chunks/2z2hep8vfr86s.js","_next/static/chunks/2z66gh_92g43i.js","_next/static/chunks/2zhfzfiyv4_7d.css","_next/static/chunks/3-2yv9eu6mwyy.js","_next/static/chunks/309sdbzvhroqa.js","_next/static/chunks/30lahex3s76re.js","_next/static/chunks/3179r62_b8cu_.js","_next/static/chunks/31_h8b-vgf6oz.css","_next/static/chunks/31dqk5v75-tf-.js","_next/static/chunks/31dx9-v4pixdo.js","_next/static/chunks/32yx4dpzy8uqc.js","_next/static/chunks/340yiw094tihd.js","_next/static/chunks/3410iptw0p2mv.js","_next/static/chunks/34oif8e9a0uyk.js","_next/static/chunks/351bp3qq1hq-e.js","_next/static/chunks/35gwc_pbyyack.css","_next/static/chunks/360brdiy2vjox.js","_next/static/chunks/36p54c9i4wh3h.css","_next/static/chunks/36xh1ib7tjm6b.js","_next/static/chunks/37p1wf860wrb6.js","_next/static/chunks/394jejyg4h7oj.js","_next/static/chunks/39_j1bdzreq0m.js","_next/static/chunks/39z1b7tdngwyk.js","_next/static/chunks/3_4b6nm51yxra.js","_next/static/chunks/3_hbhknj_6yfb.css","_next/static/chunks/3a-ijm9l8964j.js","_next/static/chunks/3a5g79gcekimy.js","_next/static/chunks/3axj9mjb8lm5c.js","_next/static/chunks/3b7i-1pul58lg.js","_next/static/chunks/3bp3a00smp23i.js","_next/static/chunks/3c37dpzmky-nz.js","_next/static/chunks/3co8jpdbhlz2n.js","_next/static/chunks/3coy69o8qi6az.js","_next/static/chunks/3cytn0vjyeags.js","_next/static/chunks/3deis1n_v-7wg.js","_next/static/chunks/3e_-5rnalmnhh.js","_next/static/chunks/3ed3ohdb7-_f5.js","_next/static/chunks/3ek__ubzg27xi.js","_next/static/chunks/3eu9ue2gwpe8-.js","_next/static/chunks/3f7xfva9y3nxj.js","_next/static/chunks/3fbvwfgyvo0q4.js","_next/static/chunks/3fm_tb1cedlrw.js","_next/static/chunks/3fte5a-yohumm.js","_next/static/chunks/3gfvxaud8840a.css","_next/static/chunks/3hsm89qs5vv7v.js","_next/static/chunks/3i9-x5hk_o0ft.js","_next/static/chunks/3ihdssxr_iw39.js","_next/static/chunks/3inuwj2ycf79o.js","_next/static/chunks/3jezb86_tk2wx.js","_next/static/chunks/3jx3uprzpi9id.js","_next/static/chunks/3k2u9k3vgqd7p.js","_next/static/chunks/3ke0zdyp4ts6l.js","_next/static/chunks/3km7mv1t3nd5n.js","_next/static/chunks/3lkbfjd_czs0y.js","_next/static/chunks/3mojt2lvmz0lu.js","_next/static/chunks/3ojp_g0ac0eq4.js","_next/static/chunks/3pf4lp5_kqqgi.js","_next/static/chunks/3pfzrebt1ft26.js","_next/static/chunks/3pvi-vwhpb7ik.js","_next/static/chunks/3qfy96eoyh-ek.js","_next/static/chunks/3qgislzqctxf5.js","_next/static/chunks/3qk6u01hb5wyh.js","_next/static/chunks/3rkkbwsp03yi1.js","_next/static/chunks/3s5ne2irk37hg.js","_next/static/chunks/3tcpf61rh5tvd.js","_next/static/chunks/3urrg15f2cspd.js","_next/static/chunks/3x3qtc_fjhkho.js","_next/static/chunks/3xgq1_50sqg22.js","_next/static/chunks/3xhac22n1v2u1.js","_next/static/chunks/3xqbcyigwsy0e.js","_next/static/chunks/3xwovyghb66wj.js","_next/static/chunks/3y705tc4v-41-.js","_next/static/chunks/3z5qvvkruydkd.js","_next/static/chunks/3zzj7ouzf8jw1.js","_next/static/chunks/40i84-2gob2lw.js","_next/static/chunks/41u15m10cxiln.js","_next/static/chunks/42fiysw3n20jn.js","_next/static/chunks/44xs3zj4824hw.js","_next/static/chunks/turbopack-308e7-tcyrhux.js","_next/static/media/DMSans-s.p.15u0enhwmk2k7.woff2","_next/static/media/SpaceGrotesk-s.p.0zhyqmcl79vnu.woff2","_next/static/media/SpaceGrotesk_ext.2gevz4epbk9e8.woff2","_next/static/media/apple-icon.42w5hz13l8o6a.png","_next/static/media/favicon.3hu9x0l1h6px8.ico","_next/static/media/icon.0vi7k2ndz45f6.svg","_next/static/media/maplibre-gl-worker.3mxi4ruoxp5-c.mjs","_next/static/media/maplibre-gl.00_z8_aw3rt8v.css","_not-found/__next._full.txt","_not-found/__next._not-found.__PAGE__.txt","_not-found/__next._tree.txt","_not-found/","_not-found/index.txt","apple-icon.png","design/__next._full.txt","design/__next._tree.txt","design/__next.design.__PAGE__.txt","design/","design/index.txt","favicon.ico","help/__next._full.txt","help/__next._tree.txt","help/__next.help.__PAGE__.txt","help/","help/index.txt","icon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","./","index.txt","manifest.webmanifest","share-target/__next._full.txt","share-target/__next._tree.txt","share-target/__next.share-target.__PAGE__.txt","share-target/","share-target/index.txt","share/__next._full.txt","share/__next._tree.txt","share/__next.share.__PAGE__.txt","share/","share/index.txt","trip/__next._full.txt","trip/__next._tree.txt","trip/__next.trip.__PAGE__.txt","trip/","trip/index.txt"];

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
