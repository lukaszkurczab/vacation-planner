(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15899,e=>{"use strict";let a=[330,500,960,1280],t=/^\/?photos\/([A-Za-z0-9._~%-]+)\.(?:jpe?g|webp)$/,n=/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/[a-z-]+\/thumb\/.+\/)(\d+)px-([^/]+)$/,r=/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/[a-z-]+\/)([0-9a-f]\/[0-9a-f]{2}\/)([^/]+\.(?:jpe?g|png|webp))$/i;function i(e){let a=t.exec(e);return a?`photos/thumb/${a[1]}.webp`:null}function o(e,a){let t=n.exec(e);return t?`${t[1]}${a}px-${t[3]}`:e}function l(e){let a=n.exec(e);return a?Number(a[2]):null}e.s(["m",0,o,"P",0,function(e,a){let t=r.exec(e);return t?`${t[1]}thumb/${t[2]}${t[3]}/${a}px-${t[3]}`:null},"w",0,function(e,a){let t=i(e);if(t)return a(t);let n=l(e);return n&&n>500?o(e,500):null},"E",0,function(e,t,n=500){let r=i(e);if(r){let a=t(e),i=t(r);return{src:n<=480?i:a,srcSet:`${i} 480w, ${a} 960w`}}let s=l(e);if(s){let t=a.filter(e=>e<=s);return 0===t.length?{src:e}:{src:o(e,t.find(e=>e>=n)??t[t.length-1]),srcSet:t.length>1?t.map(a=>`${o(e,a)} ${a}w`).join(", "):void 0}}return{src:t(e)}}])},79918,e=>{"use strict";function a(){let e;try{e="/vacation-planner/planner"}catch{e=void 0}return(e??"").replace(/\/+$/,"")}e.i(47167);let t=new Set(["upload.wikimedia.org"]);e.s(["f",0,function(e,t=a()){if(!e)return e;if(/^\s*[/\\]{2}/.test(e))return"";if(/^[a-z][a-z0-9+.-]*:/i.test(e))return e;let n=e.replace(/^\.?\/+/,"");return t&&e.startsWith(`${t}/`)?e:`${t}/${n}`},"K",0,a,"c",0,function(e){if(e&&/^https:\/\//i.test(e))try{return t.has(new URL(e).hostname)?"anonymous":void 0}catch{return}}])},12268,e=>{"use strict";var a=e.i(99506),t=e.i(49913),n=e.i(25395),r=e.i(32751);function i(e){return"stay"===e.type}function o(e){return r.W.includes(e.type)}function l(e){if(!e.end)return[];let t=(0,a.L)(e.start),n=(0,a.L)(e.end),r=(0,a.F)(t,n),i=[];for(let e=0;e<r;e++)i.push((0,a.b)(t,e));return i}function s(e,t){return e.filter(i).filter(e=>e.end&&(0,a.L)(e.start)<=t&&t<(0,a.L)(e.end)).sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))[0]}function u(e,a,t){let n=e[a];if(n&&void 0!==n.lat&&void 0!==n.lng)return n;if("location"===a&&e.placeId&&t){let a=t.find(a=>a.id===e.placeId);if(a)return{name:n?.name??a.name,lat:a.lat,lng:a.lng}}return n}function d(e,a,t){var n;if(!a)return null;let r="stay"===e.type&&!!e.title.trim()&&e.title.trim()!==a.name&&((n=a.name).includes(",")||n.length>40);return{name:r?e.title.trim():a.name,...r&&a.name?{address:a.name}:{},...void 0!==a.lat?{lat:a.lat}:{},...void 0!==a.lng?{lng:a.lng}:{},bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:t}}function c(e,a,t){return d(e,u(e,"location",t),a)??{name:e.title.trim(),bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:a}}function p(e,a){let t="string"==typeof a?a:a.base;if(e.type&&!r.W.includes(e.type)){let n=e.startTimeZone&&e.endTimeZone||"string"==typeof a?void 0:a.bookingZone(e),r=e.startTimeZone??n??t;return{start:r,end:e.endTimeZone??e.startTimeZone??n??(e.end?t:r)}}let n=e.startTimeZone??t;return{start:n,end:e.endTimeZone??(e.end?t:n)}}function m(e,t,n="UTC"){let r="start"===t?e.start:e.end??e.start,i=p(e,n)[t];return f(r.length>=16?r:`${(0,a.L)(r)}T00:00`,i)}function f(e,t){try{let n=(0,a.K)(e,t).getTime();return Number.isFinite(n)?n:null}catch{return null}}function h(e,a){if(a&&void 0!==a.lat&&void 0!==a.lng)return{lat:a.lat,lng:a.lng};if("flight"!==e.type)return null;let n=(0,t.U)(a?.name);return n&&Number.isFinite(n.lat)&&Number.isFinite(n.lng)?{lat:n.lat,lng:n.lng}:null}function A(e){return"flight"===e.type&&void 0!==(0,a.e)(e.start)&&(!e.end||void 0===(0,a.e)(e.end))}let g=new WeakSet,b=new WeakMap;function E(e,r){if(!A(e))return e;let i=b.get(e);if(i&&i.key===r)return i.value;let o=e,l=h(e,e.from),s=h(e,e.to),u=p(e,r).start,d=l&&s?f(e.start,u):null;if(l&&s&&null!==d){let i=e.endTimeZone??(0,t.U)(e.to?.name)?.timeZone??("string"==typeof r?r:r.base);try{var c;let t=(0,a.c)(new Date(d+6e4*(c=(0,n._)(l,s),5*Math.round((40+Math.max(0,c)/800*60)/5))),i);o={...e,end:t,endTimeZone:i},g.add(o)}catch{o=e}}return b.set(e,{key:r,value:o}),o}function k(e,a){let t=!1,n=e.map(e=>{let n=E(e,a);return n!==e&&(t=!0),n});return t?n:e}function y(e,t,n,r){let i=e=>"start"===n?e.start:e.end??e.start;return e.filter(o).filter(e=>"start"===n?(0,a.L)(e.start)===t:e.end?(0,a.L)(e.end)===t:(0,a.L)(e.start)===t).sort((e,a)=>{let t=m(e,n,r),o=m(a,n,r);return null!==t&&null!==o&&t!==o?t-o:i(e)<i(a)?-1:+(i(e)>i(a))})}e.s(["W",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"n",0,A,"C",0,function(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null},"i",0,m,"$",0,p,"x",0,function(e,t){let n=(0,a.y)(e).map((e,a)=>({kind:"day",date:e,dayIndex:a}));for(let e of t)n.push({kind:"booking",booking:e,date:(0,a.L)(e.start),at:e.start,edge:"start"}),i(e)&&e.end&&n.push({kind:"booking",booking:e,date:(0,a.L)(e.end),at:e.end,edge:"end"});let r=e=>{if("day"===e.kind)return`${e.date}|0`;let t=(0,a.e)(e.at)??"00:00";return`${e.date}|1|${t}|${+("end"!==e.edge)}|${e.booking.title}`};return n.sort((e,a)=>{let t=r(e),n=r(a);return t<n?-1:+(t>n)})},"Z",0,function(e,t,n,r){let i=s(t,(0,a.b)(n,-1)),o=s(t,n),l=e.timeZone??"UTC",p=k(t,l).filter(e=>"car"!==e.type),f=i?c(i,"stay",r):null;if(!f){let e=y(p,n,"end",l),t=e.filter(e=>(0,a.L)(e.start)!==n),i=t[t.length-1]??e[0];i&&(f=d(i,u(i,"to",r),"arrival"))}!f&&o&&(f=c(o,(0,a.L)(o.start)===n?"destination":"stay",r));let h=o?c(o,"stay",r):null;if(!h){let t=y(p,n,"start",l).filter(e=>f?.source!=="arrival"||f.bookingId!==e.id),i=t[t.length-1];if(i){let t=u(i,"to",r);h=n<e.endDate&&i.end&&(0,a.L)(i.end)===n&&(m(i,"end",l)??0)>=(m(i,"start",l)??0)&&t&&void 0!==t.lat&&void 0!==t.lng?d(i,t,"arrival"):d(i,u(i,"from",r),"departure")}}return h||(h=f),o?{start:f,end:h,stay:o}:{start:f,end:h}},"k",0,function(e,t){let n=[];for(let e of t)e.end&&e.end<e.start&&!(e.endTimeZone||e.startTimeZone)&&n.push({type:"invalid-range",bookingId:e.id});let r=t.filter(i).filter(e=>e.end&&e.end>e.start);for(let e=0;e<r.length;e++)for(let a=e+1;a<r.length;a++){let t=r[e],i=r[a],o=new Set(l(i)),s=l(t).filter(e=>o.has(e));s.length>0&&n.push({type:"overlapping-stays",bookingIds:[t.id,i.id],nights:s})}let o=new Set(r.flatMap(l));for(let t of(0,a.y)(e).slice(0,-1))o.has(t)||n.push({type:"missing-stay",date:t});return n},"j",0,function(e){return g.has(e)},"t",0,i,"E",0,o,"A",0,f,"T",0,l,"F",0,s,"b",0,h,"o",0,k,"q",0,E])},41758,e=>{"use strict";var a=e.i(12268),t=e.i(99506),n=e.i(32751);let r=(e,a)=>`booking:${e}:${a}`,i={activity:120,restaurant:90,other:60};function o(e,a){let n=(0,t.e)(e)??a;return n&&(0,t.t)(n)?(0,t.J)(n):null}function l(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null}function s(e,a){let t=l(e.location);if(t)return{point:t,...e.location?.name?{name:e.location.name}:{}};let n=e.placeId?a.find(a=>a.id===e.placeId):void 0;return n?{point:{lat:n.lat,lng:n.lng},name:e.location?.name??n.name}:{point:null,...e.location?.name?{name:e.location.name}:{}}}let u=e=>(e??"").trim().toLowerCase();e.s(["t",0,function(e,d,c=[],p=[],m="UTC"){let f=p.filter(e=>e.date===d),h=new Set(f.filter(e=>"place"!==e.kind).map(e=>u(e.title)).filter(Boolean)),A=new Set(f.map(e=>e.placeId).filter(e=>!!e)),g=[];for(let p of(0,a.o)(e,m)){if("stay"!==p.type&&h.has(u(p.title)))continue;let e=(0,t.L)(p.start),m=p.end?(0,t.L)(p.end):e,f={booking:p};if("stay"===p.type){let a=s(p,c),t={point:a.point,blocking:!1,moves:!1,...a.name?{placeName:a.name}:{}};if(e===d){let e=o(p.start,"15:00");null!==e&&g.push({...f,...t,id:r(p.id,"checkin"),kind:"checkin",start:e,end:e})}if(p.end&&m===d&&m!==e){let e=o(p.end,"11:00");null!==e&&g.push({...f,...t,id:r(p.id,"checkout"),kind:"checkout",start:e,end:e})}continue}if(p.placeId&&A.has(p.placeId))continue;let b={...p.from?.name?{fromName:p.from.name}:{},...p.to?.name?{toName:p.to.name}:{}};if("car"===p.type){let a=l(p.from)??l(p.location),t=l(p.to)??l(p.location)??a;if(e===d){let e=o(p.start,null);null!==e&&g.push({...f,...b,id:r(p.id,"pickup"),kind:"pickup",start:e,end:e,point:a,blocking:!0,moves:!1,...p.from?.name??p.location?.name?{placeName:p.from?.name??p.location?.name}:{}})}if(p.end&&m===d){let e=o(p.end,null);null!==e&&g.push({...f,...b,id:r(p.id,"dropoff"),kind:"dropoff",start:e,end:e,point:t,blocking:!0,moves:!1,...p.to?.name??p.location?.name?{placeName:p.to?.name??p.location?.name}:{}})}continue}if(n.W.includes(p.type)){let t=(0,a.b)(p,p.from),n=(0,a.b)(p,p.to),i=o(p.start,null),l=p.end?o(p.end,null):null,s=(0,a.j)(p)?{estimated:!0}:{},u=e=>({...f,...b,...s,id:r(p.id,"departure"),kind:"departure",start:e,end:e,point:t,after:null,blocking:!0,moves:!0}),c=e=>({...f,...b,...s,id:r(p.id,"arrival"),kind:"arrival",start:e,end:e,point:null,after:n,blocking:!0,moves:!0});if(e===d&&m===d){if(null===i)continue;null===l||l>=i?g.push({...f,...b,...s,id:r(p.id,"transport"),kind:"transport",start:i,end:l??i,point:t,after:p.end?n:t,blocking:!0,moves:!!p.end}):g.push(u(i),c(l))}else e===d?null!==i&&g.push(u(i)):m===d&&null!==l&&g.push(c(l));continue}if(e!==d)continue;let E=o(p.start,null);if(null===E)continue;let k=p.end&&m===d?o(p.end,null):null,y=s(p,c),v=null!==k&&k>E?k:E+(i[p.type]??60);g.push({...f,id:r(p.id,"booking"),kind:"booking",start:E,end:v,point:y.point,blocking:!0,moves:!1,...y.name?{placeName:y.name}:{}})}let b={arrival:0,checkout:1,dropoff:2,transport:3,departure:3,pickup:4,booking:5,checkin:6},E=new Map(g.map(e=>{let n,r,i;return[e,(n="arrival"===e.kind||"checkout"===e.kind||"dropoff"===e.kind,r=(0,a.$)(e.booking,m),i=`${d}T${(0,t.z)(e.start)}`,(0,a.A)(i,n?r.end:r.start)??(0,a.A)(i,"UTC")??0)]}));return g.sort((e,a)=>E.get(e)-E.get(a)||e.start-a.start||b[e.kind]-b[a.kind]||(e.id<a.id?-1:+(e.id>a.id)))},"r",0,function(e,t){let n=(0,a.$)(e.booking,t);return"arrival"===e.kind||"checkout"===e.kind||"dropoff"===e.kind?{start:n.end,end:n.end}:"transport"===e.kind?n:{start:n.start,end:n.start}},"m",0,e=>e.startsWith("booking:")])},49913,e=>{"use strict";let a=`
WAW|Warszawa (Chopin)|Warsaw (Chopin)|Europe/Warsaw
WMI|Warszawa-Modlin|Warsaw Modlin|Europe/Warsaw
KRK|Krak\xf3w|Krakow|Europe/Warsaw
GDN|Gdańsk|Gdansk|Europe/Warsaw
KTW|Katowice||Europe/Warsaw
WRO|Wrocław|Wroclaw|Europe/Warsaw
POZ|Poznań|Poznan|Europe/Warsaw
RZE|Rzesz\xf3w|Rzeszow|Europe/Warsaw
SZZ|Szczecin||Europe/Warsaw
LUZ|Lublin||Europe/Warsaw
BZG|Bydgoszcz||Europe/Warsaw
LCJ|Ł\xf3dź|Lodz|Europe/Warsaw
SZY|Olsztyn-Mazury|Olsztyn-Mazury|Europe/Warsaw
IEG|Zielona G\xf3ra|Zielona Gora|Europe/Warsaw
RDO|Radom||Europe/Warsaw
LIS|Lizbona|Lisbon|Europe/Lisbon
OPO|Porto||Europe/Lisbon
FAO|Faro||Europe/Lisbon
FNC|Funchal (Madera)|Funchal (Madeira)|Atlantic/Madeira
PDL|Ponta Delgada (Azory)|Ponta Delgada (Azores)|Atlantic/Azores
MAD|Madryt|Madrid|Europe/Madrid
BCN|Barcelona||Europe/Madrid
AGP|Malaga||Europe/Madrid
ALC|Alicante||Europe/Madrid
VLC|Walencja|Valencia|Europe/Madrid
SVQ|Sewilla|Seville|Europe/Madrid
PMI|Palma de Mallorca||Europe/Madrid
IBZ|Ibiza||Europe/Madrid
MAH|Minorka|Menorca|Europe/Madrid
BIO|Bilbao||Europe/Madrid
GRO|Girona||Europe/Madrid
REU|Reus||Europe/Madrid
SCQ|Santiago de Compostela||Europe/Madrid
TFS|Teneryfa Południe|Tenerife South|Atlantic/Canary
TFN|Teneryfa P\xf3łnoc|Tenerife North|Atlantic/Canary
LPA|Gran Canaria||Atlantic/Canary
ACE|Lanzarote||Atlantic/Canary
FUE|Fuerteventura||Atlantic/Canary
SPC|La Palma||Atlantic/Canary
CDG|Paryż (Charles de Gaulle)|Paris (Charles de Gaulle)|Europe/Paris
ORY|Paryż (Orly)|Paris (Orly)|Europe/Paris
BVA|Paryż (Beauvais)|Paris (Beauvais)|Europe/Paris
NCE|Nicea|Nice|Europe/Paris
MRS|Marsylia|Marseille|Europe/Paris
LYS|Lyon||Europe/Paris
TLS|Tuluza|Toulouse|Europe/Paris
BOD|Bordeaux||Europe/Paris
NTE|Nantes||Europe/Paris
BSL|Bazylea-Miluza|Basel-Mulhouse|Europe/Paris
MLH|Bazylea-Miluza|Basel-Mulhouse|Europe/Paris
BIA|Bastia (Korsyka)|Bastia (Corsica)|Europe/Paris
AJA|Ajaccio (Korsyka)|Ajaccio (Corsica)|Europe/Paris
FCO|Rzym (Fiumicino)|Rome (Fiumicino)|Europe/Rome
CIA|Rzym (Ciampino)|Rome (Ciampino)|Europe/Rome
MXP|Mediolan (Malpensa)|Milan (Malpensa)|Europe/Rome
LIN|Mediolan (Linate)|Milan (Linate)|Europe/Rome
BGY|Bergamo||Europe/Rome
VCE|Wenecja|Venice|Europe/Rome
TSF|Treviso||Europe/Rome
BLQ|Bolonia|Bologna|Europe/Rome
NAP|Neapol|Naples|Europe/Rome
PSA|Piza|Pisa|Europe/Rome
FLR|Florencja|Florence|Europe/Rome
CTA|Katania|Catania|Europe/Rome
PMO|Palermo||Europe/Rome
BRI|Bari||Europe/Rome
BDS|Brindisi||Europe/Rome
CAG|Cagliari||Europe/Rome
OLB|Olbia||Europe/Rome
TRN|Turyn|Turin|Europe/Rome
VRN|Werona|Verona|Europe/Rome
LHR|Londyn (Heathrow)|London (Heathrow)|Europe/London
LGW|Londyn (Gatwick)|London (Gatwick)|Europe/London
STN|Londyn (Stansted)|London (Stansted)|Europe/London
LTN|Londyn (Luton)|London (Luton)|Europe/London
LCY|Londyn (City)|London (City)|Europe/London
SEN|Londyn (Southend)|London (Southend)|Europe/London
MAN|Manchester||Europe/London
EDI|Edynburg|Edinburgh|Europe/London
GLA|Glasgow||Europe/London
BHX|Birmingham||Europe/London
BRS|Bristol||Europe/London
LPL|Liverpool||Europe/London
EMA|East Midlands||Europe/London
LBA|Leeds Bradford||Europe/London
NCL|Newcastle||Europe/London
ABZ|Aberdeen||Europe/London
BFS|Belfast||Europe/London
DUB|Dublin||Europe/Dublin
ORK|Cork||Europe/Dublin
SNN|Shannon||Europe/Dublin
FRA|Frankfurt||Europe/Berlin
HHN|Frankfurt-Hahn||Europe/Berlin
MUC|Monachium|Munich|Europe/Berlin
BER|Berlin||Europe/Berlin
HAM|Hamburg||Europe/Berlin
DUS|D\xfcsseldorf|Dusseldorf|Europe/Berlin
CGN|Kolonia/Bonn|Cologne/Bonn|Europe/Berlin
STR|Stuttgart||Europe/Berlin
NUE|Norymberga|Nuremberg|Europe/Berlin
DTM|Dortmund||Europe/Berlin
HAJ|Hanower|Hanover|Europe/Berlin
LEJ|Lipsk|Leipzig|Europe/Berlin
DRS|Drezno|Dresden|Europe/Berlin
BRE|Brema|Bremen|Europe/Berlin
FMM|Memmingen||Europe/Berlin
NRN|Weeze||Europe/Berlin
AMS|Amsterdam||Europe/Amsterdam
EIN|Eindhoven||Europe/Amsterdam
RTM|Rotterdam||Europe/Amsterdam
BRU|Bruksela|Brussels|Europe/Brussels
CRL|Bruksela (Charleroi)|Brussels (Charleroi)|Europe/Brussels
LUX|Luksemburg|Luxembourg|Europe/Luxembourg
ZRH|Zurych|Zurich|Europe/Zurich
GVA|Genewa|Geneva|Europe/Zurich
VIE|Wiedeń|Vienna|Europe/Vienna
SZG|Salzburg||Europe/Vienna
INN|Innsbruck||Europe/Vienna
CPH|Kopenhaga|Copenhagen|Europe/Copenhagen
BLL|Billund||Europe/Copenhagen
ARN|Sztokholm (Arlanda)|Stockholm (Arlanda)|Europe/Stockholm
NYO|Sztokholm (Skavsta)|Stockholm (Skavsta)|Europe/Stockholm
GOT|G\xf6teborg|Gothenburg|Europe/Stockholm
OSL|Oslo||Europe/Oslo
TRF|Oslo (Torp)|Oslo (Torp)|Europe/Oslo
BGO|Bergen||Europe/Oslo
TRD|Trondheim||Europe/Oslo
TOS|Troms\xf8|Tromso|Europe/Oslo
HEL|Helsinki||Europe/Helsinki
RVN|Rovaniemi||Europe/Helsinki
KEF|Reykjav\xedk (Keflav\xedk)|Reykjavik (Keflavik)|Atlantic/Reykjavik
RIX|Ryga|Riga|Europe/Riga
VNO|Wilno|Vilnius|Europe/Vilnius
KUN|Kowno|Kaunas|Europe/Vilnius
TLL|Tallin|Tallinn|Europe/Tallinn
PRG|Praga|Prague|Europe/Prague
BUD|Budapeszt|Budapest|Europe/Budapest
BTS|Bratysława|Bratislava|Europe/Bratislava
KSC|Koszyce|Kosice|Europe/Bratislava
LJU|Lublana|Ljubljana|Europe/Ljubljana
ZAG|Zagrzeb|Zagreb|Europe/Zagreb
SPU|Split||Europe/Zagreb
DBV|Dubrownik|Dubrovnik|Europe/Zagreb
ZAD|Zadar||Europe/Zagreb
PUY|Pula||Europe/Zagreb
BEG|Belgrad|Belgrade|Europe/Belgrade
OTP|Bukareszt|Bucharest|Europe/Bucharest
CLJ|Kluż-Napoka|Cluj-Napoca|Europe/Bucharest
SOF|Sofia||Europe/Sofia
VAR|Warna|Varna|Europe/Sofia
BOJ|Burgas||Europe/Sofia
TIA|Tirana||Europe/Tirane
SKP|Skopje||Europe/Skopje
TGD|Podgorica||Europe/Podgorica
TIV|Tivat||Europe/Podgorica
SJJ|Sarajewo|Sarajevo|Europe/Sarajevo
KIV|Kiszyni\xf3w|Chisinau|Europe/Chisinau
ATH|Ateny|Athens|Europe/Athens
SKG|Saloniki|Thessaloniki|Europe/Athens
HER|Heraklion (Kreta)|Heraklion (Crete)|Europe/Athens
CHQ|Chania (Kreta)|Chania (Crete)|Europe/Athens
RHO|Rodos|Rhodes|Europe/Athens
CFU|Korfu|Corfu|Europe/Athens
JTR|Santorini||Europe/Athens
JMK|Mykonos||Europe/Athens
KGS|Kos||Europe/Athens
ZTH|Zakynthos||Europe/Athens
LCA|Larnaka|Larnaca|Asia/Nicosia
PFO|Pafos|Paphos|Asia/Nicosia
MLA|Malta||Europe/Malta
IST|Stambuł|Istanbul|Europe/Istanbul
SAW|Stambuł (Sabiha G\xf6k\xe7en)|Istanbul (Sabiha Gokcen)|Europe/Istanbul
AYT|Antalya||Europe/Istanbul
DLM|Dalaman||Europe/Istanbul
BJV|Bodrum||Europe/Istanbul
ADB|Izmir||Europe/Istanbul
TBS|Tbilisi||Asia/Tbilisi
KUT|Kutaisi||Asia/Tbilisi
EVN|Erywań|Yerevan|Asia/Yerevan
GYD|Baku||Asia/Baku
TLV|Tel Awiw|Tel Aviv|Asia/Jerusalem
AMM|Amman||Asia/Amman
DXB|Dubaj|Dubai|Asia/Dubai
AUH|Abu Zabi|Abu Dhabi|Asia/Dubai
DOH|Doha||Asia/Qatar
CAI|Kair|Cairo|Africa/Cairo
HRG|Hurghada||Africa/Cairo
SSH|Szarm el-Szejk|Sharm el-Sheikh|Africa/Cairo
RAK|Marrakesz|Marrakesh|Africa/Casablanca
CMN|Casablanca||Africa/Casablanca
AGA|Agadir||Africa/Casablanca
TUN|Tunis||Africa/Tunis
DJE|Dżerba|Djerba|Africa/Tunis
NBO|Nairobi||Africa/Nairobi
ZNZ|Zanzibar||Africa/Dar_es_Salaam
JNB|Johannesburg||Africa/Johannesburg
CPT|Kapsztad|Cape Town|Africa/Johannesburg
JFK|Nowy Jork (JFK)|New York (JFK)|America/New_York
EWR|Nowy Jork (Newark)|New York (Newark)|America/New_York
LGA|Nowy Jork (LaGuardia)|New York (LaGuardia)|America/New_York
BOS|Boston||America/New_York
IAD|Waszyngton (Dulles)|Washington (Dulles)|America/New_York
ATL|Atlanta||America/New_York
MIA|Miami||America/New_York
MCO|Orlando||America/New_York
ORD|Chicago (O'Hare)||America/Chicago
DEN|Denver||America/Denver
LAX|Los Angeles||America/Los_Angeles
SFO|San Francisco||America/Los_Angeles
SEA|Seattle||America/Los_Angeles
LAS|Las Vegas||America/Los_Angeles
YYZ|Toronto||America/Toronto
YUL|Montreal||America/Toronto
YVR|Vancouver||America/Vancouver
MEX|Meksyk|Mexico City|America/Mexico_City
CUN|Canc\xfan|Cancun|America/Cancun
HAV|Hawana|Havana|America/Havana
PUJ|Punta Cana||America/Santo_Domingo
BOG|Bogota||America/Bogota
LIM|Lima||America/Lima
GRU|S\xe3o Paulo|Sao Paulo|America/Sao_Paulo
GIG|Rio de Janeiro||America/Sao_Paulo
EZE|Buenos Aires||America/Argentina/Buenos_Aires
BKK|Bangkok||Asia/Bangkok
HKT|Phuket||Asia/Bangkok
SGN|Ho Chi Minh||Asia/Ho_Chi_Minh
HAN|Hanoi||Asia/Ho_Chi_Minh
SIN|Singapur|Singapore|Asia/Singapore
KUL|Kuala Lumpur||Asia/Kuala_Lumpur
CGK|Dżakarta|Jakarta|Asia/Jakarta
DPS|Bali (Denpasar)||Asia/Makassar
MNL|Manila||Asia/Manila
HKG|Hongkong|Hong Kong|Asia/Hong_Kong
TPE|Tajpej|Taipei|Asia/Taipei
PEK|Pekin|Beijing|Asia/Shanghai
PVG|Szanghaj|Shanghai|Asia/Shanghai
ICN|Seul|Seoul|Asia/Seoul
HND|Tokio (Haneda)|Tokyo (Haneda)|Asia/Tokyo
NRT|Tokio (Narita)|Tokyo (Narita)|Asia/Tokyo
KIX|Osaka (Kansai)||Asia/Tokyo
DEL|Delhi||Asia/Kolkata
BOM|Bombaj|Mumbai|Asia/Kolkata
CMB|Kolombo|Colombo|Asia/Colombo
MLE|Male (Malediwy)|Male (Maldives)|Indian/Maldives
SYD|Sydney||Australia/Sydney
MEL|Melbourne||Australia/Melbourne
AKL|Auckland||Pacific/Auckland
`,t={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},n=new Map(`
WAW 52.166 20.967;WMI 52.451 20.652;KRK 50.078 19.785;GDN 54.378 18.466;KTW 50.474 19.080;WRO 51.103 16.886
POZ 52.421 16.826;RZE 50.110 22.019;SZZ 53.585 14.902;LUZ 51.240 22.714;BZG 53.097 17.978;LCJ 51.722 19.398
SZY 53.482 20.938;IEG 52.139 15.799;RDO 51.389 21.213;LIS 38.774 -9.134;OPO 41.248 -8.681;FAO 37.014 -7.966
FNC 32.698 -16.775;PDL 37.741 -25.698;MAD 40.472 -3.561;BCN 41.297 2.078;AGP 36.675 -4.499;ALC 38.282 -0.558
VLC 39.489 -0.482;SVQ 37.418 -5.893;PMI 39.552 2.739;IBZ 38.873 1.373;MAH 39.863 4.219;BIO 43.301 -2.911
GRO 41.901 2.760;REU 41.147 1.167;SCQ 42.896 -8.415;TFS 28.044 -16.573;TFN 28.483 -16.342;LPA 27.932 -15.387
ACE 28.946 -13.605;FUE 28.453 -13.864;SPC 28.626 -17.756;CDG 49.010 2.548;ORY 48.723 2.379;BVA 49.454 2.113
NCE 43.658 7.216;MRS 43.439 5.221;LYS 45.726 5.091;TLS 43.629 1.364;BOD 44.828 -0.716;NTE 47.153 -1.611
BSL 47.590 7.529;MLH 47.590 7.529;BIA 42.553 9.484;AJA 41.924 8.803;FCO 41.800 12.239;CIA 41.799 12.595
MXP 45.630 8.723;LIN 45.445 9.277;BGY 45.674 9.704;VCE 45.505 12.352;TSF 45.648 12.194;BLQ 44.535 11.289
NAP 40.886 14.291;PSA 43.684 10.393;FLR 43.810 11.205;CTA 37.467 15.066;PMO 38.176 13.091;BRI 41.139 16.761
BDS 40.658 17.947;CAG 39.251 9.054;OLB 40.899 9.517;TRN 45.201 7.650;VRN 45.396 10.889;LHR 51.470 -0.454
LGW 51.148 -0.190;STN 51.885 0.235;LTN 51.875 -0.368;LCY 51.505 0.055;SEN 51.571 0.696;MAN 53.354 -2.275
EDI 55.950 -3.373;GLA 55.872 -4.433;BHX 52.454 -1.748;BRS 51.383 -2.719;LPL 53.334 -2.850;EMA 52.831 -1.328
LBA 53.866 -1.661;NCL 55.038 -1.692;ABZ 57.202 -2.198;BFS 54.658 -6.216;DUB 53.421 -6.270;ORK 51.841 -8.491
SNN 52.702 -8.925;FRA 50.034 8.562;HHN 49.949 7.264;MUC 48.354 11.786;BER 52.366 13.503;HAM 53.630 9.988
DUS 51.289 6.767;CGN 50.866 7.143;STR 48.690 9.222;NUE 49.499 11.078;DTM 51.518 7.612;HAJ 52.461 9.685
LEJ 51.432 12.242;DRS 51.133 13.767;BRE 53.047 8.787;FMM 47.989 10.239;NRN 51.602 6.142;AMS 52.310 4.768
EIN 51.450 5.375;RTM 51.957 4.437;BRU 50.901 4.484;CRL 50.459 4.453;LUX 49.626 6.212;ZRH 47.458 8.548
GVA 46.238 6.109;VIE 48.110 16.570;SZG 47.793 13.004;INN 47.260 11.344;CPH 55.618 12.656;BLL 55.740 9.152
ARN 59.650 17.919;NYO 58.789 16.912;GOT 57.663 12.280;OSL 60.194 11.100;TRF 59.187 10.259;BGO 60.294 5.218
TRD 63.458 10.924;TOS 69.683 18.919;HEL 60.317 24.963;RVN 66.565 25.830;KEF 63.985 -22.606;RIX 56.924 23.971
VNO 54.634 25.286;KUN 54.964 24.085;TLL 59.413 24.833;PRG 50.101 14.260;BUD 47.437 19.256;BTS 48.170 17.213
KSC 48.663 21.241;LJU 46.224 14.458;ZAG 45.743 16.069;SPU 43.539 16.298;DBV 42.561 18.268;ZAD 44.108 15.347
PUY 44.894 13.922;BEG 44.818 20.309;OTP 44.571 26.085;CLJ 46.785 23.686;SOF 42.697 23.411;VAR 43.232 27.825
BOJ 42.570 27.515;TIA 41.415 19.721;SKP 41.962 21.621;TGD 42.359 19.252;TIV 42.405 18.723;SJJ 43.825 18.331
KIV 46.928 28.931;ATH 37.936 23.947;SKG 40.520 22.971;HER 35.340 25.180;CHQ 35.532 24.150;RHO 36.405 28.086
CFU 39.602 19.912;JTR 36.399 25.479;JMK 37.435 25.348;KGS 36.793 27.092;ZTH 37.751 20.884;LCA 34.875 33.625
PFO 34.718 32.486;MLA 35.857 14.477;IST 41.262 28.742;SAW 40.899 29.309;AYT 36.899 30.800;DLM 36.713 28.793
BJV 37.250 27.664;ADB 38.292 27.157;TBS 41.669 44.955;KUT 42.177 42.483;EVN 40.147 44.396;GYD 40.468 50.047
TLV 32.011 34.887;AMM 31.723 35.993;DXB 25.253 55.364;AUH 24.433 54.651;DOH 25.273 51.608;CAI 30.122 31.406
HRG 27.178 33.799;SSH 27.977 34.395;RAK 31.607 -8.036;CMN 33.367 -7.590;AGA 30.325 -9.413;TUN 36.851 10.227
DJE 33.875 10.776;NBO -1.319 36.928;ZNZ -6.222 39.225;JNB -26.134 28.242;CPT -33.965 18.602;JFK 40.641 -73.778
EWR 40.690 -74.175;LGA 40.777 -73.873;BOS 42.366 -71.010;IAD 38.953 -77.456;ATL 33.641 -84.427;MIA 25.796 -80.287
MCO 28.431 -81.308;ORD 41.974 -87.907;DEN 39.856 -104.674;LAX 33.942 -118.408;SFO 37.621 -122.379;SEA 47.450 -122.309
LAS 36.084 -115.154;YYZ 43.677 -79.625;YUL 45.470 -73.741;YVR 49.195 -123.184;MEX 19.436 -99.072;CUN 21.037 -86.877
HAV 22.989 -82.409;PUJ 18.567 -68.364;BOG 4.702 -74.147;LIM -12.022 -77.114;GRU -23.432 -46.470;GIG -22.810 -43.251
EZE -34.822 -58.536;BKK 13.690 100.750;HKT 8.113 98.317;SGN 10.819 106.652;HAN 21.221 105.807;SIN 1.364 103.991
KUL 2.746 101.710;CGK -6.126 106.656;DPS -8.748 115.167;MNL 14.509 121.020;HKG 22.308 113.918;TPE 25.080 121.233
PEK 40.080 116.585;PVG 31.143 121.805;ICN 37.460 126.441;HND 35.549 139.780;NRT 35.772 140.393;KIX 34.427 135.244
DEL 28.556 77.100;BOM 19.089 72.868;CMB 7.181 79.884;MLE 4.192 73.529;SYD -33.946 151.177;MEL -37.669 144.841
AKL -37.008 174.792
`.trim().split(/[;\n]/).map(e=>{let[a="",t="",n=""]=e.trim().split(" ");return[a,[Number(t),Number(n)]]})),r=new Map(a.trim().split("\n").map(e=>{let[a="",r="",i="",o=""]=e.split("|"),[l=0/0,s=0/0]=n.get(a)??[];return[a,{code:a,city:{pl:r,en:i||r,de:t[a]??(i||r)},timeZone:o,lat:l,lng:s}]}));function i(e){return e?r.get(e.toUpperCase()):void 0}let o=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;e.s(["p",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"N",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of r.values())for(let t of Object.values(e.city)){let n=t.toLowerCase();if(n===a||n.startsWith(`${a} (`))return e}},"h",0,i,"U",0,function(e){let a=o.exec(e?.trim()??"");return i(a?.[1]??a?.[2])},"O",0,function(e,a,t){let n=i(e),r=(n?.city[a]??t)?.replace(/\s*\([^)]*\)\s*$/,"");return r?`${r} (${e.toUpperCase()})`:e.toUpperCase()}])},40966,e=>{"use strict";var a=e.i(12268),t=e.i(56404),n=e.i(41758),r=e.i(26944);e.s(["n",0,function(e,a,t){let n=e.filter(e=>!e.trip.isDemo&&!e.trip.archived&&e.trip.endDate>=a&&!t.has(e.trip.id)&&e.steps.some(e=>!e.done));return n.sort((e,a)=>e.trip.createdAt<a.trip.createdAt?1:-1),n[0]??null},"H",0,function(e,a){return[{id:"places",done:e.places>0,section:"places"},{id:"plan",done:e.plannedDays>0,section:"plan"},{id:"bookings",done:a.bookings>0&&(e.missingStayNights??0)===0,section:"bookings"},{id:"budget",done:null!==e.budget||a.checklist>0,section:"budget"}]},"P",0,function(e,i,o,l,s=[]){let u=(0,r.G)(e,o,i),d=u.days.filter(r.F),c=u.days.filter(e=>!(0,r.F)(e)&&(0,n.t)(s,e.date,i,o).length>0),p=(0,t.V)(l,e.currency),m=e.budget.total&&e.budget.total>0?e.budget.total:null;return{places:i.filter(e=>"stay"!==e.category).length,plannedDays:d.length,itemDays:d.length,bookingOnlyDays:c.length,missingStayNights:(0,a.k)(e,s).filter(e=>"missing-stay"===e.type).length,totalDays:u.days.length,spent:p,budget:m,budgetRatio:null===m?null:p/m}}])},48747,e=>{"use strict";e.i(47167);let a="bruma-whats-new",t="0.2.0",n={version:"0.2.0",items:[{id:"quickAdd",icon:"sparkle",anchor:"quick-add"},{id:"friends",icon:"share",anchor:"friends"},{id:"year",icon:"calendar",anchor:"leave"},{id:"receipt",icon:"receipt",anchor:"receipt-scan"},{id:"sync",icon:"sync",anchor:"sync-devices"}]};function r(e,a){let t=e=>e.split("-")[0].split(".").map(e=>Number.parseInt(e,10)||0),n=t(e),r=t(a);for(let e=0;e<Math.max(n.length,r.length);e++){let a=(n[e]??0)-(r[e]??0);if(a)return Math.sign(a)}return 0}function i(e){try{window.localStorage.setItem(a,e)}catch{}}e.s(["K",0,t,"Q",0,n,"B",0,a,"x",0,function(e,o=t){let l=function(e,a,t,i=n.version){let o=0>=r(i,a);return null===e?t||!o?"remember":"show":o&&0>r(e,i)?"show":0>r(e,a)?"remember":"none"}(function(){try{let e=window.localStorage.getItem(a);return e&&/^\d+(\.\d+)*/.test(e)?e:null}catch{return null}}(),o,!e);return"remember"===l&&i(o),"show"===l},"L",0,i])},43399,e=>e.a(async(a,t)=>{try{var n=e.i(94175),r=e.i(34595);let a=(0,n.A)({de:()=>e.A(74776),en:()=>e.A(34415)});a.pending&&await a.pending;let i=(0,r.U)({pl:{actionFailed:"Nie udało się wykonać operacji. Spróbuj ponownie.",copyWord:"kopia",duplicated:"Utworzono kopię „{title}”",archived:"Przeniesiono „{title}” do archiwum",restored:"Przywrócono „{title}”",deleted:"Usunięto „{title}”"},get en(){return a.dict("en",0)},get de(){return a.dict("de",0)}});e.s(["f",0,i]),t()}catch(e){t(e)}},!0),50619,e=>{"use strict";var a=e.i(71645),t=e.i(15899);async function n(a,n,r){let{getImageInfo:i,getSummary:o}=await e.A(69347),l=await o({title:a.name},n,r?{signal:r}:{});if(!l)return null;let s=function(e){let{image:a,thumbnail:n}=e;if(a&&a.width>960){let e=(0,t.P)(a.url,960);if(e)return e}return a&&a.width<=1344?a.url:n?/\/thumb\//.test(n.url)&&/\/\d+px-[^/]+$/.test(n.url)&&(a?.width??0)>960?(0,t.m)(n.url,960):n.url:a?.url??null}(l);if(!s)return null;let u=`Wikipedia: ${l.title}`,d=l.image?.fileName;if(d){let e=await i(d,r?{signal:r}:{}).catch(()=>null);(e?.author||e?.license)&&(u=[e.author,e.license,"Wikimedia Commons"].filter(Boolean).join(", "))}return{url:s,attribution:u}}let r=new Map;e.s(["k",0,n,"x",0,function(e,t,i=!0){let o=e.cover??null,l=`${t}:${e.destination.name}`,[s,u]=(0,a.useState)(()=>r.has(l)?{key:l,cover:r.get(l)??null}:null);return((0,a.useEffect)(()=>{if(!i)return;if(o||r.has(l)){!o&&r.has(l)&&u({key:l,cover:r.get(l)??null});return}let a=new AbortController;return n(e.destination,t,a.signal).then(e=>{r.set(l,e),u({key:l,cover:e})}).catch(()=>{}),()=>a.abort()},[l,!!o,i]),o)?o:s?.key===l?s.cover:null}])},87361,e=>{"use strict";var a=e.i(26944),t=e.i(99506);e.i(40966);let n=["#3d54c6","#c65316","#12805c","#a63d9c","#0f7ea8","#a26b00","#d03a5c","#7a5230"];e.s(["G",0,n,"e",0,function(e,a,n=t.$){if(!(0,t.r)(e))return{ok:!1,error:"missing-start"};if(!(0,t.r)(a))return{ok:!1,error:"missing-end"};let r=(0,t.F)(e,a);return r<0?{ok:!1,error:"end-before-start"}:r+1>n?{ok:!1,error:"too-long"}:{ok:!0,days:r+1,nights:r}},"a",0,function(e){return e.map(e=>({...e,name:e.name.trim()})).filter(e=>e.name.length>0)},"A",0,function(e,a,n=(0,t.a)(e,a)){return"before"===n.phase?{kind:"before",days:n.daysUntilStart}:"after"===n.phase?{kind:"after",days:n.daysSinceEnd}:{kind:"during",day:(n.dayIndex??0)+1,total:(0,t.F)(e.startDate,e.endDate)+1}},"U",0,function(e){let a=0;for(let t of e)a=31*a+t.charCodeAt(0)>>>0;let t=a%360;return[t,(t+40+(a>>9)%60)%360]},"J",0,function(e){let a=e.trim().split(/[\s,·–-]+/).filter(e=>e.length>1||/\p{Lu}/u.test(e));return(a.length>=2?`${a[0]?.[0]??""}${a[a.length-1]?.[0]??""}`:(a[0]??e).slice(0,2)).toLocaleUpperCase()||"?"},"Y",0,function(e,a,t){return e.filter(e=>e<a||e>t).length},"H",0,function(e){return e&&/^[A-Za-z]{2}$/.test(e)?String.fromCodePoint(...[...e.toUpperCase()].map(e=>127462+e.charCodeAt(0)-65)):""},"z",0,function(e,a){let n={during:[],upcoming:[],past:[]};for(let r of e){let{phase:e}=(0,t.a)(r,a);"during"===e?n.during.push(r):"before"===e?n.upcoming.push(r):n.past.push(r)}let r=(e,a)=>e.startDate<a.startDate?-1:e.startDate>a.startDate?1:e.title.localeCompare(a.title);return n.during.sort(r),n.upcoming.sort(r),n.past.sort((e,a)=>e.endDate>a.endDate?-1:e.endDate<a.endDate?1:e.title.localeCompare(a.title)),n},"f",0,function(e,t,n){return(0,a.G)({startDate:t,endDate:n},e,[]).outside.map(e=>e.item)},"t",0,function(e){let a=new Set(e.map(e=>e.color.toLowerCase()));return n.find(e=>!a.has(e))??n[e.length%n.length]??n[0]},"I",0,function(e,a,n){let r=e.trim();if(!r)return"";if(!a||!(0,t.r)(a))return r;let[i,o]=a.split("-").map(Number),l=new Intl.DateTimeFormat(n,{month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(i,o-1,1)));return`${r}, ${l}`}])},20827,e=>e.a(async(a,t)=>{try{var n=e.i(71645),r=e.i(76348);e.i(73447);var i=e.i(70380),o=e.i(44820),l=e.i(43399),s=a([o,l]);[o,l]=s.then?(await s)():s,e.s(["f",0,function(){let a=(0,i.G)(l.f),t=(0,o.d)();return(0,n.useMemo)(()=>{let n=()=>t.show({message:a("actionFailed"),tone:"danger",icon:"warning"});return{async duplicate(i){try{let o=(0,r.Q)(),l=(await o.trips.list()).map(e=>e.title),{copyTitle:s}=await e.A(23498),u=await o.trips.duplicate(i.id,s(i.title,l,a("copyWord")));return u.archived&&await o.trips.update(u.id,{archived:!1}),t.showUndo(a("duplicated",{title:u.title}),()=>{o.trips.remove(u.id).catch(n)}),u}catch{return n(),null}},async setArchived(e,i){try{let o=(0,r.Q)();return await o.trips.update(e.id,{archived:i}),t.showUndo(a(i?"archived":"restored",{title:e.title}),()=>{o.trips.update(e.id,{archived:!i}).catch(n)}),!0}catch{return n(),!1}},async remove(e,i){try{let o=(0,r.Q)(),l=await o.trips.getBundle(e.id);if(!l)return!1;return await o.trips.remove(e.id),t.showUndo(a("deleted",{title:e.title}),()=>{o.trips.putBundle(l).then(()=>i?.onUndo?.()).catch(n)}),!0}catch{return n(),!1}}}},[a,t])}]),t()}catch(e){t(e)}},!1),98180,e=>{"use strict";var a=e.i(43476),t=e.i(71645),n=e.i(88674),r=e.i(62952),i=e.i(70380),o=e.i(34595);e.s(["f",0,function(e){let{locale:l}=(0,i.X)(),s=(0,r.f)();return(0,t.useCallback)((r,i)=>{if(void 0===(0,o.L)(e,"pl",r))return r;let u=a=>(0,o.y)((0,o.v)(a),(0,o.L)(e,a,r)??r,i);if(s)return u(l);var d=Object.fromEntries(n.H.map(e=>[e,u(e)]));let c=new Map;for(let e of n.H){let a=d[e];c.set(a,[...c.get(a)??[],e])}return 1===c.size?d[n.H[0]]:(0,a.jsx)(t.Fragment,{children:[...c].map(([e,t])=>(0,a.jsx)("span",{lang:1===t.length?t[0]:void 0,"data-l10n":t.join(" "),children:e},t.join(" ")))})},[e,l,s])}])},28698,e=>{"use strict";var a=e.i(43476),t=e.i(53185),n=e.i(91265);let r=["var(--day-1)","var(--day-2)","var(--day-3)","var(--day-4)","var(--day-5)","var(--day-6)","var(--day-7)","var(--day-8)"];function i({name:e,color:o,size:l=36,decorative:s,className:u}){let d;return(0,a.jsx)("span",{className:(0,t.f)(n.default.avatar,u),style:{"--avatar-color":o??function(e){let a=0;for(let t of e)a=31*a+t.charCodeAt(0)>>>0;return r[a%r.length]??r[0]}(e),width:l,height:l,fontSize:Math.round(.38*l)},role:s?void 0:"img","aria-label":s?void 0:e,"aria-hidden":s||void 0,title:s?void 0:e,children:(d=e.trim().split(/\s+/).filter(Boolean),((d[0]?.[0]??"?")+(d.length>1?d[d.length-1]?.[0]??"":"")).toLocaleUpperCase())})}e.s(["E",0,i,"p",0,function({names:e,max:r=4,size:o=32}){let l=e.slice(0,r),s=e.length-l.length;return(0,a.jsxs)("span",{className:n.default.avatarGroup,role:"group","aria-label":e.join(", "),children:[l.map(e=>(0,a.jsx)(i,{name:e,size:o,decorative:!0},e)),s>0?(0,a.jsxs)("span",{className:(0,t.f)(n.default.avatar,n.default.avatarRest),style:{width:o,height:o,fontSize:Math.round(.36*o)},"aria-hidden":"true",children:["+",s]}):null]})}])},94839,e=>{e.v({accent:"tA2fUq_accent",badge:"tA2fUq_badge",chip:"tA2fUq_chip",chipRemove:"tA2fUq_chipRemove",danger:"tA2fUq_danger",dot:"tA2fUq_dot",sm:"tA2fUq_sm",solid:"tA2fUq_solid",success:"tA2fUq_success",warning:"tA2fUq_warning",wrap:"tA2fUq_wrap"})},91491,e=>{"use strict";var a=e.i(43476),t=e.i(53185),n=e.i(43434),r=e.i(94839);e.s(["t",0,function({tone:e="neutral",size:i="md",icon:o,color:l,dot:s,wrap:u,className:d,style:c,children:p,...m}){return(0,a.jsxs)("span",{className:(0,t.f)(r.default.badge,"neutral"!==e&&r.default[e],"sm"===i&&r.default.sm,u&&r.default.wrap,d),style:l?{...c,"--badge-color":l}:c,...m,children:[s?(0,a.jsx)("span",{className:r.default.dot,"aria-hidden":"true"}):null,o?(0,a.jsx)(n.W,{name:o,size:14,strokeWidth:2}):null,p]})},"p",0,function({selected:e,icon:i,color:o,removeLabel:l,onRemove:s,className:u,children:d,type:c="button",...p}){let m=(0,a.jsxs)(a.Fragment,{children:[o?(0,a.jsx)("span",{className:r.default.dot,style:{"--badge-color":o},"aria-hidden":"true"}):null,i?(0,a.jsx)(n.W,{name:i,size:16}):null,d]});return s?(0,a.jsxs)("span",{className:(0,t.f)(r.default.chip,u),children:[m,(0,a.jsx)("button",{type:"button",className:r.default.chipRemove,"aria-label":l??"Remove",onClick:s,children:(0,a.jsx)(n.W,{name:"close",size:14,strokeWidth:2})})]}):(0,a.jsx)("button",{type:c,className:(0,t.f)(r.default.chip,u),"aria-pressed":e,...p,children:m})}])},36579,e=>{"use strict";var a=e.i(43476),t=e.i(71645),n=e.i(53185),r=e.i(2404);e.s(["r",0,function({label:e,hint:i,className:o,indeterminate:l=!1,id:s,disabled:u,ref:d,...c}){let p=(0,t.useId)(),m=s??p,f=(0,t.useRef)(null);return(0,t.useEffect)(()=>{f.current&&(f.current.indeterminate=l)},[l]),(0,a.jsxs)("label",{htmlFor:m,className:(0,n.f)(r.default.row,u&&r.default.disabled,o),children:[(0,a.jsx)("input",{ref:e=>{f.current=e,"function"==typeof d?d(e):d&&(d.current=e)},id:m,type:"checkbox",className:r.default.checkbox,disabled:u,"aria-describedby":i?`${m}-hint`:void 0,...c}),(0,a.jsxs)("span",{className:r.default.text,children:[(0,a.jsx)("span",{className:r.default.label,children:e}),i?(0,a.jsx)("span",{id:`${m}-hint`,className:r.default.hint,children:i}):null]})]})},"Z",0,function({label:e,hint:i,className:o,id:l,disabled:s,...u}){let d=(0,t.useId)(),c=l??d;return(0,a.jsxs)("label",{htmlFor:c,className:(0,n.f)(r.default.row,r.default.switchRow,s&&r.default.disabled,o),children:[(0,a.jsxs)("span",{className:r.default.text,children:[(0,a.jsx)("span",{className:r.default.label,children:e}),i?(0,a.jsx)("span",{id:`${c}-hint`,className:r.default.hint,children:i}):null]}),(0,a.jsx)("input",{id:c,type:"checkbox",role:"switch",className:r.default.switch,disabled:s,"aria-describedby":i?`${c}-hint`:void 0,...u})]})}])},59654,e=>{e.v({actions:"rWaS3q_actions",art:"rWaS3q_art",compact:"rWaS3q_compact",description:"rWaS3q_description",empty:"rWaS3q_empty","empty-art-in":"rWaS3q_empty-art-in",plain:"rWaS3q_plain",title:"rWaS3q_title"})},42057,e=>{"use strict";var a=e.i(43476),t=e.i(53185),n=e.i(43434),r=e.i(59654);e.s(["f",0,function({icon:e="sparkle",title:i,description:o,actions:l,headingLevel:s="h2",variant:u="dashed",compact:d,className:c}){return(0,a.jsxs)("div",{className:(0,t.f)(r.default.empty,"plain"===u&&r.default.plain,d&&r.default.compact,c),children:[(0,a.jsx)("div",{className:r.default.art,"aria-hidden":"true",children:(0,a.jsx)(n.W,{name:e,size:d?24:30,strokeWidth:1.6})}),(0,a.jsx)(s,{className:r.default.title,children:i}),o?(0,a.jsx)("p",{className:r.default.description,children:o}):null,l?(0,a.jsx)("div",{className:r.default.actions,children:l}):null]})}])},11974,e=>{e.v({icon:"r_G1MW_icon",link:"r_G1MW_link"})},78142,e=>e.a(async(a,t)=>{try{var n=e.i(43476),r=e.i(22016);e.i(73447);var i=e.i(70380),o=e.i(53185),l=e.i(44970),s=e.i(50012),u=e.i(86081),d=e.i(43434),c=e.i(11974),p=a([s]);[s]=p.then?(await p)():p,e.s(["f",0,function({anchor:e,label:a,newTab:t,className:p}){let m=(0,i.G)(s.M),f=(0,u.G)();return(0,n.jsxs)(r.default,{href:f((0,l.J)(e)),prefetch:!1,className:(0,o.f)(c.default.link,p),"data-help-link":e,...t?{target:"_blank",rel:"noopener"}:{},children:[(0,n.jsx)(d.W,{name:"help",size:16,className:c.default.icon}),(0,n.jsx)("span",{children:a??m("howItWorks")}),t?(0,n.jsxs)("span",{className:"sr-only",children:[" ",m("opensInNewTab")]}):null]})}]),t()}catch(e){t(e)}},!1),4617,e=>{e.v({danger:"J0AHKa_danger",item:"J0AHKa_item",itemHint:"J0AHKa_itemHint",itemIcon:"J0AHKa_itemIcon",itemLabel:"J0AHKa_itemLabel",menu:"J0AHKa_menu","menu-in":"J0AHKa_menu-in",noPopover:"J0AHKa_noPopover",separator:"J0AHKa_separator"})},72663,e=>{"use strict";var a=e.i(43476),t=e.i(71645),n=e.i(53185),r=e.i(43434),i=e.i(4617);let o=()=>"u">typeof HTMLElement&&"showPopover"in HTMLElement.prototype;e.s(["f",0,function({trigger:e,items:l,align:s="end",className:u}){let[d,c]=(0,t.useState)(!1),[p,m]=(0,t.useState)("first"),f=(0,t.useRef)(null),h=(0,t.useRef)(null),A=(0,t.useId)(),g=`${A}-menu`,b=`${A}-trigger`,E=(0,t.useRef)({text:"",timer:0}),k=()=>Array.from(h.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')??[]),y=(0,t.useCallback)(e=>{c(!1),e&&f.current?.focus()},[]),v=(0,t.useCallback)(()=>{let e=h.current,a=f.current;if(!e||!a)return;let t=a.getBoundingClientRect(),n=e.offsetWidth,r=e.offsetHeight,i="end"===s?t.right-n:t.left;i=Math.min(Math.max(12,i),window.innerWidth-n-12);let o=t.bottom+6;o+r>window.innerHeight-12&&t.top-6-r>12&&(o=t.top-6-r),e.style.left=`${Math.round(i)}px`,e.style.top=`${Math.round(Math.max(12,o))}px`},[s]);return(0,t.useLayoutEffect)(()=>{let e=h.current;if(!e||!d)return;if(o())try{e.showPopover()}catch{}v();let a=k();return("last"===p?a[a.length-1]:a[0])?.focus(),()=>{o()&&e.matches(":popover-open")&&e.hidePopover()}},[d,p,v]),(0,t.useEffect)(()=>{if(!d)return;let e=e=>{let a=e.target;h.current?.contains(a)||f.current?.contains(a)||y(!1)},a=()=>v();return document.addEventListener("pointerdown",e,!0),window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),()=>{document.removeEventListener("pointerdown",e,!0),window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0)}},[d,y,v]),(0,a.jsxs)(a.Fragment,{children:[e({ref:e=>{f.current=e},id:b,"aria-haspopup":"menu","aria-expanded":d,"aria-controls":g,onClick:()=>{m("first"),c(e=>!e)},onKeyDown:e=>{("ArrowDown"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),m("ArrowUp"===e.key?"last":"first"),c(!0))}},d),d?(0,a.jsx)("div",{ref:h,id:g,role:"menu","aria-labelledby":b,popover:"manual",className:(0,n.f)(i.default.menu,!o()&&i.default.noPopover,u),onKeyDown:e=>{let a=k(),t=a.indexOf(document.activeElement),n=e=>a[(e+a.length)%a.length]?.focus();switch(e.key){case"ArrowDown":e.preventDefault(),n(t+1);break;case"ArrowUp":e.preventDefault(),n(t-1);break;case"Home":e.preventDefault(),n(0);break;case"End":e.preventDefault(),n(a.length-1);break;case"Escape":e.preventDefault(),e.stopPropagation(),y(!0);break;case"Tab":y(!1);break;default:if(1===e.key.length&&/\S/.test(e.key)){let t=E.current;window.clearTimeout(t.timer),t.text+=e.key.toLowerCase(),t.timer=window.setTimeout(()=>t.text="",600);let n=a.find(e=>e.textContent?.trim().toLowerCase().startsWith(t.text));n?.focus()}}},children:l.map(e=>"separator"===e.type?(0,a.jsx)("div",{role:"separator",className:i.default.separator},e.id):(0,a.jsxs)("button",{type:"button",role:"menuitem",tabIndex:-1,"aria-disabled":e.disabled||void 0,className:(0,n.f)(i.default.item,e.danger&&i.default.danger),onClick:()=>{e.disabled||(y(!0),e.onSelect())},children:[e.icon?(0,a.jsx)(r.W,{name:e.icon,size:18,className:i.default.itemIcon}):null,(0,a.jsx)("span",{className:i.default.itemLabel,children:e.label}),e.hint?(0,a.jsx)("span",{className:i.default.itemHint,children:e.hint}):null]},e.id))}):null]})}])},91265,e=>{e.v({avatar:"Gb_xAW_avatar",avatarGroup:"Gb_xAW_avatarGroup",avatarRest:"Gb_xAW_avatarRest",eyebrow:"Gb_xAW_eyebrow",sectionActions:"Gb_xAW_sectionActions",sectionDescription:"Gb_xAW_sectionDescription",sectionHeader:"Gb_xAW_sectionHeader",sectionHeaderMd:"Gb_xAW_sectionHeaderMd",sectionIcon:"Gb_xAW_sectionIcon",sectionText:"Gb_xAW_sectionText",sectionTitle:"Gb_xAW_sectionTitle",sectionTitleSm:"Gb_xAW_sectionTitleSm",stat:"Gb_xAW_stat",statFoot:"Gb_xAW_statFoot",statFrame:"Gb_xAW_statFrame",statGrid:"Gb_xAW_statGrid",statLabel:"Gb_xAW_statLabel",statSm:"Gb_xAW_statSm",statValue:"Gb_xAW_statValue",trend:"Gb_xAW_trend",trendBad:"Gb_xAW_trendBad",trendFlat:"Gb_xAW_trendFlat",trendGood:"Gb_xAW_trendGood"})},68794,e=>{e.v({bar:"f1QUTq_bar",barHead:"f1QUTq_barHead",barLabel:"f1QUTq_barLabel",danger:"f1QUTq_danger",fill:"f1QUTq_fill",ring:"f1QUTq_ring",ringCenter:"f1QUTq_ringCenter",ringFill:"f1QUTq_ringFill",ringTrack:"f1QUTq_ringTrack",success:"f1QUTq_success",track:"f1QUTq_track",warning:"f1QUTq_warning"})},73006,e=>{"use strict";var a=e.i(43476),t=e.i(53185),n=e.i(68794);let r=(e,a)=>a<=0?0:Math.min(1,Math.max(0,e/a));e.s(["E",0,function({value:e,max:i=100,label:o,valueText:l,tone:s="accent",color:u,className:d,hideLabel:c}){let p=r(e,i);return(0,a.jsxs)("div",{className:(0,t.f)(n.default.bar,"accent"!==s&&n.default[s],d),style:u?{"--progress-color":u}:void 0,children:[c?null:(0,a.jsxs)("div",{className:n.default.barHead,"aria-hidden":"true",children:[(0,a.jsx)("span",{className:n.default.barLabel,children:o}),l?(0,a.jsx)("span",{children:l}):null]}),(0,a.jsx)("div",{className:n.default.track,role:"progressbar","aria-label":o,"aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":Math.min(i,Math.max(0,e)),"aria-valuetext":l,children:(0,a.jsx)("div",{className:n.default.fill,style:{width:`${100*p}%`}})})]})},"m",0,function({value:e,max:i=100,label:o,valueText:l,tone:s="accent",color:u,className:d,size:c=56,thickness:p=6,children:m}){let f=r(e,i),h=(c-p)/2,A=2*Math.PI*h;return(0,a.jsxs)("div",{className:(0,t.f)(n.default.ring,"accent"!==s&&n.default[s],d),style:u?{"--progress-color":u}:void 0,role:"progressbar","aria-label":o,"aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":Math.min(i,Math.max(0,e)),"aria-valuetext":l,children:[(0,a.jsxs)("svg",{width:c,height:c,viewBox:`0 0 ${c} ${c}`,"aria-hidden":"true",children:[(0,a.jsx)("circle",{className:n.default.ringTrack,cx:c/2,cy:c/2,r:h,fill:"none",strokeWidth:p}),(0,a.jsx)("circle",{className:n.default.ringFill,cx:c/2,cy:c/2,r:h,fill:"none",strokeWidth:p,strokeLinecap:"round",strokeDasharray:A,strokeDashoffset:A*(1-f)})]}),(0,a.jsx)("span",{className:n.default.ringCenter,"aria-hidden":"true",children:m??`${Math.round(100*f)}%`})]})}])},82421,e=>{e.v({card:"JOFYOq_card",chevron:"JOFYOq_chevron",description:"JOFYOq_description",dismiss:"JOFYOq_dismiss",head:"JOFYOq_head",headText:"JOFYOq_headText",marker:"JOFYOq_marker",markerDone:"JOFYOq_markerDone",step:"JOFYOq_step",stepDescription:"JOFYOq_stepDescription",stepDone:"JOFYOq_stepDone",stepLabel:"JOFYOq_stepLabel",stepNext:"JOFYOq_stepNext",stepText:"JOFYOq_stepText",steps:"JOFYOq_steps",title:"JOFYOq_title",titleIcon:"JOFYOq_titleIcon"})},90240,e=>e.a(async(a,t)=>{try{var n=e.i(43476),r=e.i(22016),i=e.i(71645);e.i(73447);var o=e.i(70380),l=e.i(53185),s=e.i(3678),u=e.i(50012),d=e.i(2460),c=e.i(43434),p=e.i(73006),m=e.i(82421),f=a([u]);[u]=f.then?(await f)():f,e.s(["f",0,function({title:e,icon:a,description:t,steps:f,progressLabel:h,onDismiss:A,dismissLabel:g,doneLabel:b,headingLevel:E=2,className:k}){let y=(0,o.G)(u.M),v=(0,i.useRef)(null),L=(0,i.useId)(),N=f.filter(e=>e.done).length,S=f.find(e=>!e.done)?.id;return(0,n.jsxs)("section",{ref:v,className:(0,l.f)(m.default.card,k),"aria-labelledby":L,children:[(0,n.jsxs)("div",{className:m.default.head,children:[(0,n.jsxs)("div",{className:m.default.headText,children:[(0,n.jsxs)(3===E?"h3":"h2",{id:L,className:m.default.title,children:[a?(0,n.jsx)(c.W,{name:a,size:20,className:m.default.titleIcon}):null,e]}),t?(0,n.jsx)("p",{className:m.default.description,children:t}):null]}),A?(0,n.jsx)(d._,{icon:"close",size:"sm","aria-label":g??y("close"),onClick:()=>{(0,s.f)(v.current),A()},className:m.default.dismiss}):null]}),(0,n.jsx)(p.E,{value:N,max:f.length,label:h(N,f.length),valueText:`${N}/${f.length}`,tone:N===f.length?"success":"accent"}),(0,n.jsx)("ol",{className:m.default.steps,children:f.map((e,a)=>{let t=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:(0,l.f)(m.default.marker,e.done&&m.default.markerDone),"aria-hidden":"true",children:e.done?(0,n.jsx)(c.W,{name:"check",size:16}):e.icon?(0,n.jsx)(c.W,{name:e.icon,size:16}):a+1}),(0,n.jsxs)("span",{className:m.default.stepText,children:[(0,n.jsx)("span",{className:m.default.stepLabel,children:e.actionLabel??e.label}),e.description?(0,n.jsx)("span",{className:m.default.stepDescription,children:e.description}):null]}),e.done&&b?(0,n.jsxs)("span",{className:"sr-only",children:[", ",b]}):null,e.done?null:(0,n.jsx)(c.W,{name:"chevron-right",size:18,className:m.default.chevron})]}),i=(0,l.f)(m.default.step,e.done&&m.default.stepDone,e.id===S&&m.default.stepNext);return(0,n.jsx)("li",{"aria-current":e.id===S?"step":void 0,children:e.href?(0,n.jsx)(r.default,{href:e.href,className:i,children:t}):e.onSelect?(0,n.jsx)("button",{type:"button",className:i,onClick:e.onSelect,children:t}):(0,n.jsx)("span",{className:i,children:t})},e.id)})})]})}]),t()}catch(e){t(e)}},!1),2404,e=>{e.v({checkbox:"y-5xTq_checkbox",disabled:"y-5xTq_disabled",hint:"y-5xTq_hint",label:"y-5xTq_label",row:"y-5xTq_row",switch:"y-5xTq_switch",switchRow:"y-5xTq_switchRow",text:"y-5xTq_text"})},54315,e=>{"use strict";var a=e.i(43476);e.s(["f",0,function({className:e,...t}){return(0,a.jsx)("span",{className:e?`sr-only ${e}`:"sr-only",...t})}])},3678,e=>{"use strict";e.s(["f",0,function(e){if(!e||"u"<typeof document)return;let a=e.ownerDocument;if(!e.contains(a.activeElement))return;let t=function(e){for(let a of e.ownerDocument.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))if(!e.contains(a)&&e.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING&&!a.closest('[hidden], [inert], [aria-hidden="true"]'))return a;return null}(e),n=()=>{let n=a.activeElement;if(n&&n!==a.body&&n.isConnected&&!e.contains(n))return;let r=t?.isConnected&&!e.contains(t)?t:a.querySelector("h1");r&&("H1"!==r.tagName||r.hasAttribute("tabindex")||r.setAttribute("tabindex","-1"),r.focus())};"function"==typeof requestAnimationFrame?requestAnimationFrame(n):setTimeout(n,0)}])},87084,e=>{"use strict";var a=e.i(71645);e.s(["f",0,function(e){(0,a.useEffect)(()=>{if(!e)return;let a=()=>{document.title!==e&&(document.title=e)};a();let t=new MutationObserver(a);return t.observe(document.head,{subtree:!0,childList:!0,characterData:!0}),()=>t.disconnect()},[e])}])},17696,e=>{"use strict";var a=e.i(71645),t=e.i(21898);e.s(["f",0,function(e=6e4){let[n,r]=(0,a.useState)(()=>(0,t.l)());return(0,a.useEffect)(()=>{let a=Math.max(1e3,e),n=e=>Math.floor(e.getTime()/a),i=0,o=()=>{let e=(0,t.l)();r(a=>n(a)===n(e)?a:e)},l=()=>{i=window.setTimeout(()=>{o(),l()},a-Date.now()%a+20)};o(),l();let s=()=>{"visible"===document.visibilityState&&o()};return document.addEventListener("visibilitychange",s),()=>{window.clearTimeout(i),document.removeEventListener("visibilitychange",s)}},[e]),n}])},40778,e=>{e.v({actions:"LBkWgG_actions",bar:"LBkWgG_bar",brand:"LBkWgG_brand",brandName:"LBkWgG_brandName",brandText:"LBkWgG_brandText",helpWhenRoomy:"LBkWgG_helpWhenRoomy",inner:"LBkWgG_inner",page:"LBkWgG_page",tagline:"LBkWgG_tagline",wide:"LBkWgG_wide"})},37537,e=>e.a(async(a,t)=>{try{var n=e.i(43476),r=e.i(22016),i=e.i(50675);e.i(73447);var o=e.i(70380),l=e.i(98180),s=e.i(18566),u=e.i(2460),d=e.i(43434),c=e.i(53185),p=e.i(44970),m=e.i(50012),f=e.i(86081),h=e.i(51861),A=e.i(98238),g=e.i(8499),b=e.i(40778),E=a([m,A,g]);[m,A,g]=E.then?(await E)():E,e.s(["W",0,function({actions:e,homeHref:a="/"}){let t=(0,o.G)(m.M),E=(0,l.f)(m.V),{openSettings:k}=(0,g.n)(),y=(0,f.G)(),v=!!(0,i._)()&&null,L=/\/help\/?$/.test((0,s.usePathname)()??"");return(0,n.jsx)("header",{className:b.default.bar,children:(0,n.jsxs)("div",{className:b.default.inner,children:[(0,n.jsxs)(r.default,{prefetch:v,href:y(a),className:b.default.brand,children:[(0,n.jsx)(h.f,{size:34}),(0,n.jsxs)("span",{className:b.default.brandText,children:[(0,n.jsx)("span",{className:b.default.brandName,children:t("appName")}),(0,n.jsx)("span",{className:b.default.tagline,children:E("appTagline")})]})]}),(0,n.jsxs)("div",{className:b.default.actions,children:[e,(0,n.jsx)(A.w,{}),(0,n.jsx)(r.default,{prefetch:!1,href:y((0,p.J)()),className:(0,c.f)((0,u.U)({variant:"ghost",iconOnly:!0}),e?b.default.helpWhenRoomy:void 0),"aria-label":t("help"),title:t("help"),"aria-current":L?"page":void 0,children:(0,n.jsx)(d.W,{name:"help",size:20})}),(0,n.jsx)(u._,{icon:"settings","aria-label":t("settings"),onClick:k})]})]})})},"b",0,function({children:e,wide:a}){return(0,n.jsx)("main",{id:"content",className:a?`${b.default.page} ${b.default.wide}`:b.default.page,children:e})}]),t()}catch(e){t(e)}},!1),51861,e=>{"use strict";var a=e.i(43476);e.s(["f",0,function({size:e=32,className:t}){return(0,a.jsxs)("svg",{className:t,width:e,height:e,viewBox:"0 0 44 44",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,a.jsx)("rect",{width:"44",height:"44",rx:"14",fill:"var(--brand-cobalt)"}),(0,a.jsx)("path",{d:"M14 11v20h11a8 8 0 0 0 0-16h-3a5 5 0 0 0-5 5v4a4 4 0 0 0 4 4h3",stroke:"#fff",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("circle",{cx:"25",cy:"28",r:"3",fill:"var(--brand-lime)"})]})}])},98238,e=>e.a(async(a,t)=>{try{var n=e.i(43476),r=e.i(71645);e.i(73447);var i=e.i(70380),o=e.i(2460),l=e.i(43434),s=e.i(50012),u=e.i(76622),d=a([s]);[s]=d.then?(await d)():d;let p="Control+K Meta+K /",m=()=>()=>void 0,f=()=>/Mac|iPhone|iPad|iPod/i.test(navigator.platform??"");function c(){let e=(0,r.useSyncExternalStore)(m,f,()=>null);return null===e?null:e?"⌘K":"Ctrl K"}e.s(["w",0,function({className:e}){let a=(0,i.G)(s.M);return(0,n.jsx)(o._,{icon:"search","aria-label":a("searchAndCommands"),"aria-haspopup":"dialog","aria-keyshortcuts":p,className:e,"data-palette-open":"search",onClick:()=>(0,u.F)()})},"G",0,function({className:e,wrapClassName:a,iconClassName:t,labelClassName:r,kbdClassName:o}){let d=(0,i.G)(s.M),m=c(),f=d("search"),h=d("searchAndCommands"),A=h.startsWith(f)?h.slice(f.length):"";return(0,n.jsxs)("div",{className:a,children:[(0,n.jsxs)("button",{type:"button",className:e,"aria-haspopup":"dialog","aria-keyshortcuts":p,title:m?`${h} (${m})`:h,"data-palette-open":"search",onClick:()=>(0,u.F)(),children:[(0,n.jsx)(l.W,{name:"search",size:20,className:t}),(0,n.jsxs)("span",{className:r,children:[f,A?(0,n.jsx)("span",{className:"sr-only",children:A}):null]})]}),m?(0,n.jsx)("kbd",{className:o,"aria-hidden":"true",children:m}):null]})},"t",0,c]),t()}catch(e){t(e)}},!1)]);