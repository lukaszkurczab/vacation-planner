(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,e=>{"use strict";let t=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),a=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function n(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!t.has(e)}let r=new Map;function o(e){let t=r.get(e);if(void 0===t){try{t=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{t=null}r.set(e,t)}return t}function l(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let u=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),s=0,c=null;function d(){if(c)return c;let e=o("en"),a=[];for(let n of i)for(let r of i){let i=n+r;if(!t.has(i))try{e?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&a.push(i)}catch{}}return c=a,a}function f(e,t=a.length){if(!e)return;let i=l(e);if(!i||i.length<2)return;let n=e.trim();if(!/^[A-Z]{2}$/.test(n))for(;;){let e=u.get(i);if(e)return e;if(s>=Math.min(t,a.length))return;!function(e){let t=o(e);if(t)for(let e of d()){let a;try{a=t.of(e)}catch{a=void 0}if(!a||a===e)continue;let i=l(a);i&&!u.has(i)&&u.set(i,e)}}(a[s]),s+=1}}e.s(["B",0,function(e){let t=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(t.length<2))return f(t[t.length-1])},"A",0,f,"N",0,function(){return d()},"F",0,function(e){let t=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of t)try{let t=new Intl.Locale(e).region?.toUpperCase();if(t&&n(t))return t}catch{}for(let e of t)try{let t=new Intl.Locale(e).maximize().region?.toUpperCase();if(t&&n(t))return t}catch{}},"m",0,function(e,t){try{return o(t)?.of(e)??e}catch{return e}},"G",0,function(e){let t=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(t)?String.fromCodePoint(...[...t].map(e=>127462+e.charCodeAt(0)-65)):""},"Y",0,n])},93440,e=>{"use strict";var t=e.i(99506),a=e.i(25395);let i=`
AD Europe/Andorra
AE Asia/Dubai
AF Asia/Kabul
AG America/Antigua
AI America/Anguilla
AL Europe/Tirane
AM Asia/Yerevan
AO Africa/Luanda
AQ Antarctica/McMurdo@-77.8,166.6 Antarctica/Casey@-66.3,110.5 Antarctica/Davis@-68.6,78 Antarctica/DumontDUrville@-66.7,140 Antarctica/Mawson@-67.6,62.9 Antarctica/Palmer@-64.8,-64.1 Antarctica/Rothera@-67.6,-68.1 Antarctica/Syowa@-69,39.6 Antarctica/Troll@-72,2.5 Antarctica/Vostok@-78.4,106.9
AR America/Argentina/Buenos_Aires@-34.6,-58.4 America/Argentina/Cordoba@-31.4,-64.2 America/Argentina/Salta@-24.8,-65.4 America/Argentina/Jujuy@-24.2,-65.3 America/Argentina/Tucuman@-26.8,-65.2 America/Argentina/Catamarca@-28.5,-65.8 America/Argentina/La_Rioja@-29.4,-66.8 America/Argentina/San_Juan@-31.5,-68.5 America/Argentina/Mendoza@-32.9,-68.8 America/Argentina/San_Luis@-33.3,-66.3 America/Argentina/Rio_Gallegos@-51.6,-69.2 America/Argentina/Ushuaia@-54.8,-68.3
AS Pacific/Pago_Pago
AT Europe/Vienna
AU Australia/Lord_Howe@-31.5,159.1 Antarctica/Macquarie@-54.5,159 Australia/Hobart@-42.9,147.3 Australia/Melbourne@-37.8,145 Australia/Sydney@-33.9,151.2 Australia/Broken_Hill@-31.9,141.5 Australia/Brisbane@-27.5,153 Australia/Lindeman@-20.3,149 Australia/Adelaide@-34.9,138.6 Australia/Darwin@-12.5,130.8 Australia/Perth@-31.9,115.9 Australia/Eucla@-31.7,128.9
AW America/Aruba
AX Europe/Mariehamn
AZ Asia/Baku
BA Europe/Sarajevo
BB America/Barbados
BD Asia/Dhaka
BE Europe/Brussels
BF Africa/Ouagadougou
BG Europe/Sofia
BH Asia/Bahrain
BI Africa/Bujumbura
BJ Africa/Porto-Novo
BL America/St_Barthelemy
BM Atlantic/Bermuda
BN Asia/Brunei
BO America/La_Paz
BQ America/Kralendijk
BR America/Noronha@-3.8,-32.4 America/Belem@-1.4,-48.5 America/Fortaleza@-3.7,-38.5 America/Recife@-8,-34.9 America/Araguaina@-7.2,-48.2 America/Maceio@-9.7,-35.7 America/Bahia@-13,-38.5 America/Sao_Paulo@-23.5,-46.6 America/Campo_Grande@-20.4,-54.6 America/Cuiaba@-15.6,-56.1 America/Santarem@-2.4,-54.9 America/Porto_Velho@-8.8,-63.9 America/Boa_Vista@2.8,-60.7 America/Manaus@-3.1,-60 America/Eirunepe@-6.7,-69.9 America/Rio_Branco@-10,-67.8
BS America/Nassau
BT Asia/Thimphu
BW Africa/Gaborone
BY Europe/Minsk
BZ America/Belize
CA America/St_Johns@47.6,-52.7 America/Halifax@44.7,-63.6 America/Glace_Bay@46.2,-59.9 America/Moncton@46.1,-64.8 America/Goose_Bay@53.3,-60.4 America/Blanc-Sablon@51.4,-57.1 America/Toronto@43.7,-79.4 America/Iqaluit@63.7,-68.5 America/Atikokan@48.8,-91.6 America/Winnipeg@49.9,-97.1 America/Resolute@74.7,-94.8 America/Rankin_Inlet@62.8,-92.1 America/Regina@50.4,-104.6 America/Swift_Current@50.3,-107.8 America/Edmonton@53.6,-113.5 America/Cambridge_Bay@69.1,-105.1 America/Inuvik@68.3,-133.7 America/Vancouver@49.3,-123.1 America/Creston@49.1,-116.5 America/Dawson_Creek@55.8,-120.2 America/Fort_Nelson@58.8,-122.7 America/Whitehorse@60.7,-135 America/Dawson@64.1,-139.4
CC Indian/Cocos
CD Africa/Kinshasa@-4.3,15.3 Africa/Lubumbashi@-11.7,27.5
CF Africa/Bangui
CG Africa/Brazzaville
CH Europe/Zurich
CI Africa/Abidjan
CK Pacific/Rarotonga
CL America/Santiago@-33.4,-70.7 America/Coyhaique@-45.6,-72.1 America/Punta_Arenas@-53.1,-70.9 Pacific/Easter@-27.1,-109.4
CM Africa/Douala
CN Asia/Shanghai@31.2,121.5 Asia/Urumqi@43.8,87.6
CO America/Bogota
CR America/Costa_Rica
CU America/Havana
CV Atlantic/Cape_Verde
CW America/Curacao
CX Indian/Christmas
CY Asia/Nicosia@35.2,33.4 Asia/Famagusta@35.1,34
CZ Europe/Prague
DE Europe/Berlin@52.5,13.4 Europe/Busingen@47.7,8.7
DJ Africa/Djibouti
DK Europe/Copenhagen
DM America/Dominica
DO America/Santo_Domingo
DZ Africa/Algiers
EC America/Guayaquil@-2.2,-79.8 Pacific/Galapagos@-0.9,-89.6
EE Europe/Tallinn
EG Africa/Cairo
EH Africa/El_Aaiun
ER Africa/Asmara
ES Europe/Madrid@40.4,-3.7 Africa/Ceuta@35.9,-5.3~15 Africa/Ceuta@35.3,-2.9~15 Atlantic/Canary@28.1,-15.4~450
ET Africa/Addis_Ababa
FI Europe/Helsinki
FJ Pacific/Fiji
FK Atlantic/Stanley
FM Pacific/Chuuk@7.4,151.8 Pacific/Pohnpei@7,158.2 Pacific/Kosrae@5.3,163
FO Atlantic/Faroe
FR Europe/Paris
GA Africa/Libreville
GB Europe/London
GD America/Grenada
GE Asia/Tbilisi
GF America/Cayenne
GG Europe/Guernsey
GH Africa/Accra
GI Europe/Gibraltar
GL America/Nuuk@64.2,-51.7 America/Danmarkshavn@76.8,-18.7 America/Scoresbysund@70.5,-22 America/Thule@76.6,-68.8
GM Africa/Banjul
GN Africa/Conakry
GP America/Guadeloupe
GQ Africa/Malabo
GR Europe/Athens
GS Atlantic/South_Georgia
GT America/Guatemala
GU Pacific/Guam
GW Africa/Bissau
GY America/Guyana
HK Asia/Hong_Kong
HN America/Tegucigalpa
HR Europe/Zagreb
HT America/Port-au-Prince
HU Europe/Budapest
ID Asia/Jakarta@-6.2,106.8 Asia/Pontianak@0,109.3 Asia/Makassar@-5.1,119.4 Asia/Jayapura@-2.5,140.7
IE Europe/Dublin
IL Asia/Jerusalem
IM Europe/Isle_of_Man
IN Asia/Kolkata
IO Indian/Chagos
IQ Asia/Baghdad
IR Asia/Tehran
IS Atlantic/Reykjavik
IT Europe/Rome
JE Europe/Jersey
JM America/Jamaica
JO Asia/Amman
JP Asia/Tokyo
KE Africa/Nairobi
KG Asia/Bishkek
KH Asia/Phnom_Penh
KI Pacific/Tarawa@1.4,173 Pacific/Kanton@-2.8,-171.7 Pacific/Kiritimati@1.9,-157.3
KM Indian/Comoro
KN America/St_Kitts
KP Asia/Pyongyang
KR Asia/Seoul
KW Asia/Kuwait
KY America/Cayman
KZ Asia/Almaty@43.3,77 Asia/Qyzylorda@44.8,65.5 Asia/Qostanay@53.2,63.6 Asia/Aqtobe@50.3,57.2 Asia/Aqtau@44.5,50.3 Asia/Atyrau@47.1,51.9 Asia/Oral@51.2,51.4
LA Asia/Vientiane
LB Asia/Beirut
LC America/St_Lucia
LI Europe/Vaduz
LK Asia/Colombo
LR Africa/Monrovia
LS Africa/Maseru
LT Europe/Vilnius
LU Europe/Luxembourg
LV Europe/Riga
LY Africa/Tripoli
MA Africa/Casablanca
MC Europe/Monaco
MD Europe/Chisinau
ME Europe/Podgorica
MF America/Marigot
MG Indian/Antananarivo
MH Pacific/Majuro@7.2,171.2 Pacific/Kwajalein@9.1,167.3
MK Europe/Skopje
ML Africa/Bamako
MM Asia/Yangon
MN Asia/Ulaanbaatar@47.9,106.9 Asia/Hovd@48,91.7
MO Asia/Macau
MP Pacific/Saipan
MQ America/Martinique
MR Africa/Nouakchott
MS America/Montserrat
MT Europe/Malta
MU Indian/Mauritius
MV Indian/Maldives
MW Africa/Blantyre
MX America/Mexico_City@19.4,-99.1 America/Cancun@21.1,-86.8 America/Merida@21,-89.6 America/Monterrey@25.7,-100.3 America/Matamoros@25.8,-97.5 America/Chihuahua@28.6,-106.1 America/Ciudad_Juarez@31.7,-106.5 America/Ojinaga@29.6,-104.4 America/Mazatlan@23.2,-106.4 America/Bahia_Banderas@20.8,-105.2 America/Hermosillo@29.1,-111 America/Tijuana@32.5,-117
MY Asia/Kuala_Lumpur@3.2,101.7 Asia/Kuching@1.6,110.3
MZ Africa/Maputo
NA Africa/Windhoek
NC Pacific/Noumea
NE Africa/Niamey
NF Pacific/Norfolk
NG Africa/Lagos
NI America/Managua
NL Europe/Amsterdam
NO Europe/Oslo
NP Asia/Kathmandu
NR Pacific/Nauru
NU Pacific/Niue
NZ Pacific/Auckland@-36.9,174.8 Pacific/Chatham@-43.9,-176.5
OM Asia/Muscat
PA America/Panama
PE America/Lima
PF Pacific/Tahiti@-17.5,-149.6 Pacific/Marquesas@-9,-139.5 Pacific/Gambier@-23.1,-134.9
PG Pacific/Port_Moresby@-9.5,147.2 Pacific/Bougainville@-6.2,155.6
PH Asia/Manila
PK Asia/Karachi
PL Europe/Warsaw
PM America/Miquelon
PN Pacific/Pitcairn
PR America/Puerto_Rico
PS Asia/Gaza@31.5,34.5 Asia/Hebron@31.5,35.1
PT Europe/Lisbon@38.7,-9.1 Atlantic/Madeira@32.6,-16.9~150 Atlantic/Azores@37.7,-25.7~700
PW Pacific/Palau
PY America/Asuncion
QA Asia/Qatar
RE Indian/Reunion
RO Europe/Bucharest
RS Europe/Belgrade
RU Europe/Kaliningrad@54.7,20.5~250 Europe/Moscow@55.8,37.6 Europe/Kirov@58.6,49.7 Europe/Volgograd@48.7,44.4 Europe/Astrakhan@46.4,48.1 Europe/Saratov@51.6,46 Europe/Ulyanovsk@54.3,48.4 Europe/Samara@53.2,50.2 Asia/Yekaterinburg@56.9,60.6 Asia/Omsk@55,73.4 Asia/Novosibirsk@55,82.9 Asia/Barnaul@53.4,83.8 Asia/Tomsk@56.5,85 Asia/Novokuznetsk@53.8,87.1 Asia/Krasnoyarsk@56,92.8 Asia/Irkutsk@52.3,104.3 Asia/Chita@52.1,113.5 Asia/Yakutsk@62,129.7 Asia/Khandyga@62.7,135.6 Asia/Vladivostok@43.2,131.9 Asia/Ust-Nera@64.6,143.2 Asia/Magadan@59.6,150.8 Asia/Sakhalin@47,142.7 Asia/Srednekolymsk@67.5,153.7 Asia/Kamchatka@53,158.7 Asia/Anadyr@64.8,177.5
RW Africa/Kigali
SA Asia/Riyadh
SB Pacific/Guadalcanal
SC Indian/Mahe
SD Africa/Khartoum
SE Europe/Stockholm
SG Asia/Singapore
SH Atlantic/St_Helena
SI Europe/Ljubljana
SJ Arctic/Longyearbyen
SK Europe/Bratislava
SL Africa/Freetown
SM Europe/San_Marino
SN Africa/Dakar
SO Africa/Mogadishu
SR America/Paramaribo
SS Africa/Juba
ST Africa/Sao_Tome
SV America/El_Salvador
SX America/Lower_Princes
SY Asia/Damascus
SZ Africa/Mbabane
TC America/Grand_Turk
TD Africa/Ndjamena
TF Indian/Kerguelen
TG Africa/Lome
TH Asia/Bangkok
TJ Asia/Dushanbe
TK Pacific/Fakaofo
TL Asia/Dili
TM Asia/Ashgabat
TN Africa/Tunis
TO Pacific/Tongatapu
TR Europe/Istanbul
TT America/Port_of_Spain
TV Pacific/Funafuti
TW Asia/Taipei
TZ Africa/Dar_es_Salaam
UA Europe/Simferopol@45,34.1 Europe/Kyiv@50.4,30.5
UG Africa/Kampala
UM Pacific/Midway@28.2,-177.4 Pacific/Wake@19.3,166.6
US America/New_York@40.7,-74 America/Detroit@42.3,-83 America/Chicago@41.9,-87.6 America/Denver@39.7,-105 America/Phoenix@33.4,-112.1 America/Los_Angeles@34.1,-118.2 America/Anchorage@61.2,-149.9 America/Adak@51.9,-176.7 Pacific/Honolulu@21.3,-157.9
UY America/Montevideo
UZ Asia/Samarkand@39.7,66.8 Asia/Tashkent@41.3,69.3
VA Europe/Vatican
VC America/St_Vincent
VE America/Caracas
VG America/Tortola
VI America/St_Thomas
VN Asia/Ho_Chi_Minh
VU Pacific/Efate
WF Pacific/Wallis
WS Pacific/Apia
YE Asia/Aden
YT Indian/Mayotte
ZA Africa/Johannesburg
ZM Africa/Lusaka
ZW Africa/Harare
`,n=null;function r(){if(n)return n;for(let e of(n=new Map,i.split("\n"))){let[t,...a]=e.trim().split(" ");t&&0!==a.length&&n.set(t,a.map(e=>{let[t="",a]=e.split("@");if(!a)return{zone:t};let[i="",n]=a.split("~"),[r,o]=i.split(",").map(Number);return{zone:t,lat:r,lng:o,...n?{radiusKm:Number(n)}:{}}}))}return n}let o=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!o)for(let[e,t]of(o=new Map,r()))for(let{zone:a}of t)o.set(a,o.has(a)&&o.get(a)!==e?null:e);return o.get(e)??void 0}},"countryTimeZones",0,function(e){return[...new Set((r().get(e.toUpperCase())??[]).map(e=>e.zone))]},"suggestTimeZone",0,function(e,i){if(!i)return null;let n=(r().get(i.toUpperCase())??[]).filter(e=>(0,t.M)(e.zone));if(n.length<=1)return n[0]?.zone??null;let o=null,l=1/0;for(let t of n){if(void 0===t.radiusKm||void 0===t.lat||void 0===t.lng)continue;let i=(0,a._)(e,{lat:t.lat,lng:t.lng});i<=t.radiusKm&&i<l&&(o=t,l=i)}if(o)return o.zone;let u=n.filter(e=>void 0===e.radiusKm),s=Math.cos(e.lat*Math.PI/180),c=null,d=1/0;for(let t of u.length?u:n){if(void 0===t.lat||void 0===t.lng)continue;let a=Math.abs(e.lng-t.lng);a>180&&(a=360-a);let i=Math.hypot(a*s,(e.lat-t.lat)*.5);i<d&&(d=i,c=t)}return c?.zone??u[0]?.zone??n[0]?.zone??null}])},44926,e=>{"use strict";var t=e.i(12268),a=e.i(99506),i=e.i(41758),n=e.i(25395),r=e.i(26944),o=e.i(14961),l=e.i(55289),u=e.i(90170);function s(e){return`var(--day-${(e%8+8)%8+1})`}let c=new Set(["nature","hike","beach","viewpoint"]);function d({item:e,place:t}){return"place"===e.kind&&t?{lat:t.lat,lng:t.lng}:null}function f(e){return e.startTime&&(0,a.t)(e.startTime)?(0,a.J)(e.startTime):null}function m(e,t,a){return!!e&&!!t&&(0,n._)(e,t)>15&&a.some(e=>"checkin"===e.kind)&&!a.some(e=>e.blocking&&e.moves)}function A(e,t,a){return{key:(0,u.m)(e,t,a),fromId:e.id,toId:t.id,from:{lat:e.lat,lng:e.lng},to:{lat:t.lat,lng:t.lng},mode:a}}function p(e,i,l,u={}){let c,g,h=(0,t.C)(i.start),b=(0,t.C)(i.end),v=h?{id:(c=e.date,`base-start:${c}`),...h}:null,k=b?{id:(g=e.date,`base-end:${g}`),...b}:null,M=u.defaultMode??"car",y=u.events??[],C=i.start?.source==="arrival"?i.start.bookingId:void 0,E=i.end?.source==="departure"?i.end.bookingId:void 0,P=e=>!!e&&y.some(t=>t.booking.id===e&&"departure"===t.kind)&&y.some(t=>t.booking.id===e&&"arrival"===t.kind),T=y.filter(e=>!("departure"===e.kind&&e.booking.id===C&&P(C)||"arrival"===e.kind&&e.booking.id===E&&C!==E&&P(E))).map(({...e})=>{let t=i.start?.source==="arrival"&&i.start.bookingId===e.booking.id&&("transport"===e.kind||"arrival"===e.kind),a=!t&&i.end?.source==="departure"&&i.end.bookingId===e.booking.id&&("transport"===e.kind||"departure"===e.kind);return t?{...e,boundary:"start"}:a?{...e,boundary:"end"}:e}),S=l.start&&(0,a.t)(l.start)?(0,a.J)(l.start):(0,a.J)(o.f),B=i.stay&&i.start?.source==="stay"&&i.start.bookingId!==i.stay.id?i.stay.id:void 0,_=T.length?function(e,t,a,i,o,l=null,u){let s=t.filter(e=>"start"===e.boundary),c=t.filter(e=>"end"===e.boundary),A=c[0],p=A?t.filter(e=>!e.boundary&&!e.blocking&&e.start>A.start):[],g=t.filter(e=>!e.boundary&&!p.includes(e)),h=m(a,l,g),b=e.length,v=[],k=0,M=Math.max(i,...s.map(e=>e.end)),y=s.length?s[s.length-1]?.after??a:a,C=s.length>0&&!!s[s.length-1]?.after,E="foot"===o||"bike"===o?"transit":o,P=(t,a,i,o)=>{let l=[],u=[],s=C;for(let c=t;c<o;c++){let t=e[c],o=d(t),m=t.item.travelMode,A=s&&o&&i&&("foot"===m||"bike"===m)&&(0,n._)(i,o)>15?E:m,p=a+(o&&i?(0,n.Z)(i,o,A):0),g=f(t.item),h=null!==g?Math.max(p,g):p;a=h+(0,r.V)(t.item,t.place),o&&(i=o,s=!1),u.push(h),l.push(a)}return{clock:a,prev:i,ends:l,starts:u}},T=()=>v.length?v[v.length-1]:0,S=(e,t)=>{if(v.push(e),"checkin"!==t.kind||t.booking.id!==u||e>=b)return;let a=P(k,M,y,e);k=e;let i=a.prev&&t.point?(0,n.Z)(a.prev,t.point,o):0;M=Math.max(a.clock+i,t.end),C=!t.point&&a.prev===y&&C,y=t.point??a.prev};for(let t of g){let i=P(k,M,y,b),r=b,u=i.ends.findIndex(e=>e>t.start);if(u>=0&&(r=k+u),!t.blocking){if(h&&("checkout"===t.kind||"checkin"===t.kind)){let r=e.map(e=>{let i=f(e.item),r=d(e);return r?(0,n._)(r,l)<(0,n._)(r,a)?1:-1:null!==i?i<t.start?-1:1:0}),o=i.starts.findIndex(e=>e>=t.start),u=o>=0?k+o:b,s=u,c=1/0;for(let e=k;e<=b;e++){let t=0;for(let a=k;a<b;a++)(a<e&&1===r[a]||a>=e&&-1===r[a])&&(t+=1);let a=10*t+Math.abs(e-u);a<c&&(c=a,s=e)}S(Math.max(s,T()),t);continue}if("checkout"===t.kind){v.push(Math.max(r,T()));continue}let o=i.starts.findIndex(e=>e>=t.start);S(Math.max(o>=0?k+o:b,T()),t);continue}let s=t.moves&&!!t.point&&!!t.after&&(0,n._)(t.point,t.after)>15,c=e.map(e=>{let a=f(e.item);if(null!==a)return a<t.start?-1:1;let i=d(e);return s&&i?(0,n._)(i,t.after)<(0,n._)(i,t.point)?1:-1:t.moves&&null===t.after?-1:0}),m=r,A=1/0;for(let e=k;e<=b;e++){let t=0;for(let a=k;a<b;a++)(a<e&&1===c[a]||a>=e&&-1===c[a])&&(t+=1);let a=10*t+Math.abs(e-r);a<A&&(A=a,m=e)}for(let e=v.length-1;e>=0&&!g[e].blocking&&v[e]>m;e--)v[e]=m;v.push(m);let p=P(k,M,y,m);k=m;let E=p.prev&&t.point?(0,n.Z)(p.prev,t.point,o):0;M=Math.max(p.clock+E,t.end),C=void 0===t.after?!t.point&&p.prev===y&&C:!!t.after&&t.moves,y=void 0===t.after?t.point??p.prev:t.after}let B=s.map(e=>({kind:"event",event:e,id:e.id})),_=0;for(e.forEach((e,t)=>{for(;_<g.length&&v[_]<=t;){let e=g[_];B.push({kind:"event",event:e,id:e.id}),_+=1}B.push({kind:"item",resolved:e,id:e.item.id})});_<g.length;_++){let e=g[_];B.push({kind:"event",event:e,id:e.id})}for(let e of c)B.push({kind:"event",event:e,id:e.id});for(let e of p)B.push({kind:"event",event:e,id:e.id});return B}(e.items,T,h,S,M,b,B):e.items.map(e=>({kind:"item",resolved:e,id:e.item.id})),N=m(h,b,T.filter(e=>!e.boundary))?T.find(e=>"checkin"===e.kind):void 0,I=_.findIndex(e=>"event"===e.kind&&"checkin"===e.event.kind&&!e.event.boundary&&e.event.booking.id===B),L=I>=0?_[I]:void 0,Z=N??(L?.kind==="event"&&(L.event.point??b)&&_.slice(I+1).some(e=>"item"===e.kind&&d(e.resolved))?L.event:void 0),G=e.items.filter(e=>d(e)),w=i.end?.source==="departure"||i.end?.source==="arrival",z=l.returnMode??(w?M:G[G.length-1]?.item.travelMode??M),D=[],K=v,x=0,R="foot"===M||"bike"===M?"transit":M;for(let e of _){if("item"===e.kind){let t=d(e.resolved);if(!t)continue;let a={id:e.id,...t};if(x+=1,K){let i=e.resolved.item.travelMode,r=K.station&&("foot"===i||"bike"===i)&&(0,n._)(K,t)>15;D.push(A(K,a,r?R:i))}K=a;continue}let t=e.event;if(N&&t.id===N.id&&b){let e={id:t.id,...t.point??b};K&&D.push(A(K,e,"car"===M?"car":"none")),K={id:`${t.id}:after`,...t.point??b},x+=1;continue}let a=t.point??b;if(Z&&t.id===Z.id&&a){let e={id:t.id,...a};K&&D.push(A(K,e,K.station&&(0,n._)(K,a)>15?R:M)),K={id:`${t.id}:after`,...a},x+=1;continue}if("end"!==t.boundary&&t.blocking){if("start"===t.boundary){!K&&t.after&&(K={id:t.id,...t.after,station:!0});continue}if(t.point){let e={id:t.id,...t.point};x+=1,K&&D.push(A(K,e,M)),K=e}void 0!==t.after&&(K=t.after?{id:`${t.id}:after`,...t.after,station:t.moves}:null,t.after&&(x+=1))}}k&&K&&x>0&&D.push(A(K,k,z));let U=new Map,$=null;for(let e of D)k&&e.toId===k.id?$=e:U.set(e.toId,e);let F=new Map;G.forEach((e,t)=>F.set(e.item.id,t+1));let O=new Set;e.items.forEach((t,a)=>{let i=e.items[a-1];i?.item.kind==="transport"&&d(t)&&O.add(t.item.id)});let H=!!v&&!!k&&(i.start?.bookingId!==void 0&&i.start.bookingId===i.end?.bookingId||1e-4>Math.abs(v.lat-k.lat)&&1e-4>Math.abs(v.lng-k.lng));return{date:e.date,index:e.index,color:s(e.index),items:e.items,events:_.flatMap(e=>"event"===e.kind?[e.event]:[]),entries:_,defaultMode:M,base:i,meta:l,start:v,end:k,sameBase:H,legs:D,arriving:U,returnLeg:$,numbers:F,covered:O,...N?{relocation:N.id}:{},...Z?{anchor:Z.id}:{}}}let g=new Set(["transport","departure","arrival","booking"]);function h(e,t,i={}){let n=e.legs.map(a=>{let i=t(a);return e.covered.has(a.toId)?{...i,minutes:0,km:0,covered:!0}:i}),l=new Map(n.map(e=>[e.spec,e])),s=new Map;for(let[t,a]of e.arriving){let e=l.get(a);e&&s.set(t,e)}let d=e.returnLeg?l.get(e.returnLeg)??null:null,m=e.meta.start&&(0,a.t)(e.meta.start)?e.meta.start:function(e,t){let i,n=o.f,r=(e.entries??e.items.map(e=>({kind:"item",resolved:e,id:e.item.id}))).find(e=>"item"===e.kind||e.event.blocking);if(!r)return n;if("event"===r.kind){if("start"===r.event.boundary)return(0,a.z)(r.event.end);i=r.event.start}else i=f(r.resolved.item);if(null===i)return n;let l=i-(t.get(r.id)?.minutes??0);return l<(0,a.J)(n)?(0,a.z)(Math.max(0,l)):n}(e,s),A=e.anchor??e.relocation,p=e.entries.filter(e=>"item"===e.kind||e.event.blocking||e.id===A),b=p.map(e=>{var t;let i;return"item"===e.kind?{durationMinutes:(0,r.V)(e.resolved.item,e.resolved.place),...e.resolved.item.startTime?{startTime:e.resolved.item.startTime}:{}}:(i="start"===(t=e.event).boundary?t.end:t.start,{durationMinutes:0,startTime:(0,a.z)(i),fixedEnd:t.end,event:!0})}),v=p.map(e=>"event"===e.kind&&"end"===e.event.boundary?d?.minutes??0:s.get(e.id)?.minutes??0),k=(0,r.w)(b,v,{dayStart:m,sunset:i.sunsetMinutes??null}),M=new Map,y=new Map;p.forEach((e,t)=>{let a=k.items[t];a&&("item"===e.kind?M.set(e.id,a):y.set(e.id,a))});let C=e.events.find(e=>"end"===e.boundary),E=(0,a.J)(m);p.forEach((e,t)=>{("event"!==e.kind||"end"!==e.event.boundary)&&(E=k.items[t]?.end??E)});let P={items:e.items.map(e=>M.get(e.item.id)).filter(e=>!!e),visitMinutes:k.visitMinutes,travelMinutes:k.travelMinutes,waitMinutes:k.waitMinutes,eventMinutes:k.eventMinutes??0,end:E},T=new Map,S=(e,t)=>T.set(e,[...T.get(e)??[],t]),B=e.events.filter(e=>e.blocking&&g.has(e.kind)&&"start"!==e.boundary);for(let t of(e.items.forEach(({item:e,place:t})=>{let a=M.get(e.id);if(!a)return;a.late&&S(e.id,{type:"late",minutes:Math.max(1,a.lateMinutes)}),a.afterSunset&&t&&c.has(t.category)&&S(e.id,{type:"afterSunset"}),a.pastMidnight&&S(e.id,{type:"pastMidnight"});let i=B.find(e=>"departure"===e.kind||"end"===e.boundary?a.end>e.start:e.end>e.start&&a.planned<e.end&&a.end>e.start);i&&S(e.id,{type:"overlapsBooking",title:i.booking.title})}),e.events)){let e=y.get(t.id);e?.late&&"start"!==t.boundary&&t.id!==A&&S(t.id,{type:"late",minutes:Math.max(1,e.lateMinutes)})}let _=e.events.find(e=>"transport"===e.kind||"departure"===e.kind);for(let t of e.events)"checkout"===t.kind&&_&&t.start>_.start&&S(t.id,{type:"checkoutAfterDeparture",departure:_.start});let N=(0,u.w)(n),I=e.items.length>0||e.events.some(e=>e.blocking),L=(0,u.w)(e.legs.map(t=>e.covered.has(t.toId)?{spec:t,minutes:0,km:0}:{spec:t,...(0,u.L)(t)})),Z=I?(0,r.f)(P.visitMinutes+L.minutes+(P.eventMinutes??0),L.byMode.car):null,G=C?y.get(C.id):void 0;return{legs:n,arriving:s,returnLeg:d,schedule:P,byItem:M,byEvent:y,warnings:T,totals:N,intensity:Z,dayStart:(0,a.J)(m),endEta:d?G?G.arrival:E+d.minutes:null,pending:n.some(e=>"pending"===e.status),estimated:n.some(e=>"estimate"===e.status&&("car"===e.spec.mode||"foot"===e.spec.mode||"bike"===e.spec.mode))}}function b(e){return{spec:e,...(0,u.L)(e),status:"estimate"}}function v(e,a,n,r,l=(0,o.R)(e,n,a),u){return p(r,(0,t.Z)(e,a,r.date,n),(0,o.N)(e)[r.date]??{},{events:(0,i.t)(a,r.date,n,r.items.map(e=>e.item),u??e.timeZone),defaultMode:l})}function k(e,t,a){return{defaultMode:(0,o.R)(e,a,t),zones:(0,l.h)(e,t,a)}}e.s(["o",0,c,"c",0,p,"g",0,h,"_",0,s,"m",0,b,"N",0,d,"E",0,function(e,t,a,i,n=b){let r=k(e,t,a);return i.map(i=>(function(e,t,a,i,n=b,r={}){let o=v(e,t,a,i,r.defaultMode,r.zones);return{model:o,computed:h(o,n,r)}})(e,t,a,i,n,r))},"n",0,function(e,t){return p({date:e.date,index:e.index,items:t},e.base,e.meta,{events:e.events.map(({boundary:e,...t})=>t),defaultMode:e.defaultMode})},"p",0,function(e,t){let a=new Map;for(let i of(e.start&&a.set(e.start.id,e.base.start?.name??""),e.end&&a.set(e.end.id,e.base.end?.name??""),e.items))a.set(i.item.id,t(i));for(let t of e.events)a.set(t.id,("arrival"===t.kind?t.toName:t.fromName??t.placeName)??t.booking.title),a.set(`${t.id}:after`,t.toName??t.placeName??t.booking.title);return a},"t",0,k,"f",0,v])},58162,e=>{"use strict";var t=e.i(41478),a=e.i(25395);function i(e){if(e.kind)return e.kind;if(e.bbox){let[t,i,n,r]=e.bbox;if((0,a._)({lat:i,lng:t},{lat:r,lng:n})>150)return"region"}return"city"}function n(e,a){let n=e.name.trim(),r=e.countryCode?.trim().toUpperCase(),o=r&&a?(0,t.m)(r,a):void 0,l=(o&&o!==r?o:void 0)??e.country?.trim();return l&&"country"!==i(e)&&l.toLocaleLowerCase()!==n.toLocaleLowerCase()?`${n}, ${l}`:n}function r(e){return!!e&&e.every(Number.isFinite)&&(e[0]!==e[2]||e[1]!==e[3])}function o(e,t){let[i,n,r,o]=e,l=Math.min(o,Math.max(n,t.lat)),u=Math.min(r,Math.max(i,t.lng));return(0,a._)(t,{lat:l,lng:u})}function l(e,t){let n=i(e),l=r(e.bbox)?e.bbox:void 0;if("country"===n){if(e.countryCode&&t.countryCode)return t.countryCode.toUpperCase()!==e.countryCode.toUpperCase();if(l)return o(l,t)>50}return l?o(l,t)>300:(0,a._)(e,t)>300}e.s(["m",0,function(e){if(r(e.bbox))return{bbox:e.bbox};let t=i(e);return{center:{lat:e.lat,lng:e.lng},zoom:"country"===t?5:"region"===t?8:11}},"n",0,i,"c",0,n,"a",0,l,"h",0,function(e,t,i){return l(e,i)&&!t.some(e=>300>=(0,a._)(e,i))},"b",0,function(e){return"city"!==i(e)},"I",0,o,"E",0,function(e,a,i,r=[]){if(a.length>=2){let e=a.slice(0,3).map(e=>(0,t.m)(e,i)),n=a.length-3;return`${e.join(" · ")}${n>0?` +${n}`:""}`}return r.length>=2?`${r.slice(0,3).join(" → ")}${r.length>3?" …":""}`:n(e,i)}])},38520,e=>{"use strict";var t=e.i(12268),a=e.i(41478),i=e.i(93440),n=e.i(99506),r=e.i(58162),o=e.i(49913),l=e.i(25395);let u=["Public","Bank","School","Authorities","Optional","Observance"],s=120,c=(e,t=s)=>"string"==typeof e&&e.trim()?e.trim().slice(0,t):void 0;function d(e,t,a){let i=t.toUpperCase(),n=new Set(e.flatMap(e=>e.counties??[])),r=e=>n.size>=4&&[...n].every(t=>e.includes(t)),o=new Map;for(let t of e){let e=t.types.includes("Public")||t.types.includes("Bank"),n=t.types.includes("Optional");if(!e&&!n)continue;let l=t.global||!t.counties?.length||r(t.counties);if(!l&&a&&!t.counties?.includes(a))continue;let u=!l,s=!!e&&(!u||!!a)||"maybe",c=e?u?"regional":"national":"optional",d={date:t.date,countryCode:i,localName:t.localName,name:t.name,scope:c,status:s,...u&&t.counties?{counties:t.counties}:{}},m=o.get(t.date)??[],A=m.findIndex(e=>e.name===d.name||e.localName===d.localName);A<0?m.push(d):f(d)>f(m[A])&&(m[A]=d),o.set(t.date,m)}for(let e of o.values())e.sort((e,t)=>f(t)-f(e));return{countryCode:i,byDate:o}}let f=e=>2*(!0===e.status)+ +("national"===e.scope),m=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function A(e){return(0,a.Y)(e.countryCode)?e.countryCode:(0,a.A)(e.country)}function p(e,t){let a,i=50,n=new Set;for(let o of t){let t=(0,l._)(e,o);t<=i&&(a=o,i=t),(t<=300||o.bbox&&0===(0,r.I)(o.bbox,e))&&n.add(o.countryCode)}return a?a.countryCode:1===n.size?[...n][0]:void 0}let g=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function h(e,t){let n=e?.name.trim()??"",r=(0,a.B)(n);if(r)return r;let l=g.exec(n),u=(0,o.h)(l?.[1]??l?.[2]);return(0,i.countryOfTimeZone)(u?.timeZone)??(0,i.countryOfTimeZone)(t)}function b(e,t){if(e.index!==e.count-1)return!1;let a=!!t&&(0,n.L)(e.start)>=t&&e.to!==e.home;return e.index>0&&e.to===e.origin&&e.origin!==e.home||a}let v=(e,t)=>e.start<t.start?-1:+(e.start>t.start);function k(e,t){let i=(0,a.B)(t?.address);if(i)return i;let n=1===e.countries.length?e.countries[0]:void 0;return m(t)&&0!==e.anchors.length?e.countryNear(t):n}e.s(["N",0,50,"$",0,function(e){let t=new Map,a=new Set;for(let[i,n]of e.data)if(null===n)a.add(i);else{let a=e.region&&e.region.startsWith(`${i}-`)?e.region:void 0;t.set(i,d(n,i,a))}let i=e.stays??[],r=e.visits??[],o=e=>i.find(t=>t.from<=e&&e<t.to)?.countryCode??r.find(t=>t.from<e&&e<t.to)?.countryCode??i.find(t=>t.to===e)?.countryCode??r.find(t=>t.from===e)?.countryCode??r.find(t=>t.to===e)?.countryCode,l=e.anchors??[],u=(a,i)=>{let n;return(i?[i]:(n=o(a))?[n]:e.countries).flatMap(e=>t.get(e)?.byDate.get(a)??[])};return{countries:e.countries,supported:new Set(t.keys()),unsupported:a,anchors:l,countryOn:o,countryNear:e=>p(e,l),status:(e,a)=>{var i;let n=t.get(e);return n?(i=n.byDate.get(a),!!i?.length&&(!!i.some(e=>!0===e.status)||"maybe")):null},on:u,inRange(e,t){let a=[],i=Math.min((0,n.F)(e,t),400);for(let t=0;t<=i;t++)a.push(...u((0,n.b)(e,t)));return a}}},"w",0,p,"X",0,A,"k",0,d,"c",0,b,"i",0,function(e,t){if(!Array.isArray(e))return[];let a=t.toUpperCase(),i=[];for(let t of e.slice(0,400)){if(!t||"object"!=typeof t)continue;let e=t.date,r=c(t.name),o=c(t.localName)??r;if(!(0,n.r)(e)||!r||!o||"string"==typeof t.countryCode&&t.countryCode.toUpperCase()!==a)continue;let l=(Array.isArray(t.types)?t.types:["Public"]).filter(e=>u.includes(e)),s=Array.isArray(t.counties)?t.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];i.push({date:e,localName:o,name:r,countryCode:a,global:!1!==t.global||0===s.length,...s.length&&!1===t.global?{counties:s}:{},types:l.length?l:["Public"]})}return i.sort((e,t)=>e.date<t.date?-1:+(e.date>t.date))},"S",0,k,"a",0,function(e,t){if(!e||0===e.supported.size)return;let a=k(e,t);return a?t=>e.status(a,t):t=>{let a=e.countries.map(a=>e.status(a,t));return a.some(e=>!0===e||"maybe"===e)?"maybe":!a.includes(!1)&&null}},"b",0,function(e,i=[],r=[]){let o=[],l=(e,t)=>{t&&m(e)&&o.push({lat:e.lat,lng:e.lng,countryCode:t})},u=A(e.destination);if(u&&m(e.destination)){let t=e.destination.bbox,a=!!t&&4===t.length&&t.every(Number.isFinite)&&t[0]<t[2]&&t[1]<t[3];o.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:u,...a?{bbox:t}:{}})}let s=[],c=(e,t)=>s.push({date:e,code:t}),d=[],f=i.filter(t.E).sort(v),g=f.map(e=>({from:h(e.from,e.startTimeZone),to:h(e.to,e.endTimeZone)})),k=g[0]?.from,M=e=>{let t=f[e],a=f[e+1];if(!t?.end||!a)return!1;let i=(0,n.D)(t.end,a.start);return i>=0&&i<720};f.forEach((t,a)=>{let{from:i,to:r}=g[a];a>0&&i&&i!==k&&!M(a-1)&&i!==g[a-1].to&&(c(t.start,i),l(t.from,i));let o=b({index:a,count:f.length,start:t.start,to:r,origin:k,home:u},e.endDate);if(!r||o||M(a))return;l(t.to,r),c(t.end??t.start,r);let s=(0,n.L)(t.end??t.start),m=f[a+1]?(0,n.L)(f[a+1].start):void 0,A=m&&(0,n.r)(m)&&m>s?m:(0,n.b)(s,1);(0,n.r)(s)&&d.push({from:s,to:A,countryCode:r})});let y=new Map(r.map(e=>[e.id,e])),C=[];for(let e of i.filter(t.t).sort(v)){let t=e.placeId?y.get(e.placeId):void 0,i=m(t)?t:m(e.location)?e.location:void 0,r=(0,n.L)(e.start),u=(0,a.B)(t?.address)??(0,a.B)(e.location?.name)??(i?p(i,o):d.find(e=>e.from===r)?.countryCode);if(!u)continue;c(e.start,u),l(i,u);let s=e.end?(0,n.L)(e.end):(0,n.b)(r,1);(0,n.r)(r)&&(0,n.r)(s)&&(0,n.F)(r,s)>0&&C.push({from:r,to:s,countryCode:u})}let E=[];for(let e of[u,...s.sort((e,t)=>e.date<t.date?-1:+(e.date>t.date)).map(e=>e.code)])e&&!E.includes(e)&&E.length<8&&E.push(e);return{countries:E,stays:C,visits:d,anchors:o}},"x",0,function(e){let t=(0,n.d)(e.startDate).year,a=(0,n.d)(e.endDate).year,i=[];for(let e=t;e<=a&&i.length<3;e++)i.push(e);return i}])},90170,e=>{"use strict";var t=e.i(25395);function a(e){return"car"===e||"foot"===e||"bike"===e?e:null}let i=e=>(Math.round(1e5*e)/1e5+0).toFixed(5),n=(e,t)=>(e[0]-t.lng)**2+(e[1]-t.lat)**2;e.s(["l",0,function(e,t="car"){let a=new Map,i=null,n=0;for(let t of e){if("none"===t)continue;let e=(a.get(t)??0)+1;a.set(t,e),e>n&&(i=t,n=e)}return i??t},"L",0,function(e){let a=(0,t._)(e.from,e.to),i="none"===e.mode?1:t.h[e.mode].detour;return{minutes:(0,t.v)(e.from,e.to,e.mode),km:Math.round(a*i*10)/10}},"o",0,function(e,t=25){let i=[],n=null;for(let r of e){let e=a(r.mode);if(!e){n=null;continue}let o=n?.legs[n.legs.length-1];n&&o&&n.mode===e&&o.toId===r.fromId&&n.points.length<t?(n.legs.push(r),n.points.push(r.to)):(n={mode:e,legs:[r],points:[r.from,r.to]},i.push(n))}return i},"m",0,function(e,t,a){return`${a}|${i(e.lat)},${i(e.lng)}|${i(t.lat)},${i(t.lng)}`},"Z",0,a,"e",0,function(e,t){let a=t.length-1;if(a<=0)return[];let i=e=>[e.lng,e.lat];if(e.length<2)return Array.from({length:a},(e,a)=>[i(t[a]),i(t[a+1])]);let r=[0],o=0;for(let i=1;i<a;i++){let a=t[i],l=o,u=1/0;for(let t=o;t<e.length;t++){let i=n(e[t],a);i<u&&(u=i,l=t)}r.push(l),o=l}r.push(e.length-1);let l=[];for(let n=0;n<a;n++){let a=r[n],o=r[n+1],u=e.slice(a,o+1);l.push(u.length>=2?u:[i(t[n]),i(t[n+1])])}return l},"w",0,function(e){let t={car:0,foot:0,bike:0,transit:0,none:0},a=0,i=0;for(let n of e)t[n.spec.mode]+=n.minutes,a+=n.minutes,i+=n.km;return{byMode:t,minutes:a,km:Math.round(10*i)/10}}])},55289,e=>{"use strict";var t=e.i(12268),a=e.i(41478),i=e.i(93440),n=e.i(99506),r=e.i(41758),o=e.i(58162),l=e.i(49913),u=e.i(25395),s=e.i(38520);let c=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng),d=e=>!!e&&(0,n.M)(e);function f(e,t){if(d(t))return t;let a=(0,l.U)(e?.name)?.timeZone;return d(a)?a:void 0}function m(e){return{base:e,multi:!1,zones:[e],changes:[],zoneAt:()=>e,zoneAtLocal:()=>e,planZone:()=>e,zoneOn:()=>e,zoneNear:()=>e,placeZone:()=>e,bookingZone:()=>e,locatedZone:()=>e}}function A(e,t,a="en-GB"){try{let i=(0,n.K)(10===e.length?`${e}T12:00`:e,t),r=new Intl.DateTimeFormat(a,{timeZone:t,timeZoneName:"shortOffset"}).formatToParts(i);return r.find(e=>"timeZoneName"===e.type)?.value??t}catch{return t}}function p(e,t,a,i="en-GB"){if(t!==a){try{let i=(0,n.K)(10===e.length?`${e}T12:00`:e,t);if((0,n.o)(i,t)===(0,n.o)(i,a))return}catch{return}return A(e,t,i)}}e.s(["X",0,function(e,a,i,n){if(!e.multi)return null;let r=(0,t.C)(a.end)??(0,t.C)(a.start)??n;return{lat:r.lat,lng:r.lng,timeZone:e.placeZone(r,e.zoneOn(i))}},"f",0,function(e,t,a,i){if(!a.multi)return{};let o=a.zoneOn(t),l=(0,r.r)(e,a),u=e=>{let a=Math.round(e),i=Math.floor(a/1440);return`${i?(0,n.b)(t,i):t}T${(0,n.z)(a-1440*i)}`},s=p(u(e.start),l.start,o,i),c=e.end>e.start?p(u(e.end),l.end,o,i):void 0;return{...s?{start:s}:{},...c?{end:c}:{}}},"r",0,m,"h",0,function(e,r=[],l=[]){let A=e.timeZone,p=[],g=e.destination;c(g)&&!(0,o.b)(g)&&p.push({lat:g.lat,lng:g.lng,zone:A});let h=r.filter(t.E).sort((e,t)=>e.start<t.start?-1:+(e.start>t.start)),b=h.map(e=>({from:f(e.from,e.startTimeZone),to:f(e.to,e.endTimeZone)}));h.forEach((e,t)=>{let{from:a,to:i}=b[t];a&&c(e.from)&&p.push({lat:e.from.lat,lng:e.from.lng,zone:a}),i&&c(e.to)&&p.push({lat:e.to.lat,lng:e.to.lng,zone:i})});let v=b[0]?.from,k=h.map((e,a)=>(0,t.i)({...e,startTimeZone:b[a].from??e.startTimeZone},"start",A)),M=[],y=new Map;h.forEach((a,i)=>{let r=b[i].to;if(!r||!a.end)return;let o=(0,t.i)({...a,endTimeZone:r},"end",A);if(null===o)return;let l=(0,n.L)(a.end);if(e.endDate&&l>e.endDate)return;let u=k[i+1]??null;if(null!==u&&u>=o&&u-o<432e5||(0,s.c)({index:i,count:h.length,start:a.start,to:r,origin:v,home:A},e.endDate))return;let c={at:o,date:l,zone:r,source:"arrival"};y.set(c,i),M.push(c)});let C=(0,s.b)(e,r,l).anchors,E=e=>{let t,a=s.N;for(let i of p){let n=(0,u._)(e,i);n<=a&&(t=i.zone,a=n)}return t},P=(e,...t)=>{let n;for(let e of t)n??=(0,a.B)(e);if(!n&&e&&(n=(0,s.w)(e,C)),!n)return;if(e){let t=(0,i.suggestTimeZone)(e,n)??void 0;if(d(t))return t}let r=(0,i.countryTimeZones)(n).filter(d);return 1===r.length?r[0]:void 0},T=new Map(l.map(e=>[e.id,e]));for(let a of r.filter(t.t).sort((e,t)=>e.start<t.start?-1:+(e.start>t.start))){let i=a.placeId?T.get(a.placeId):void 0,r=c(i)?{lat:i.lat,lng:i.lng}:c(a.location)?{lat:a.location.lat,lng:a.location.lng}:void 0,o=(0,n.L)(a.start);if(e.endDate&&o>e.endDate)continue;let l=M.find(e=>"arrival"===e.source&&(e.date===o||e.date===(0,n.b)(o,1))),u=(d(a.startTimeZone)?a.startTimeZone:void 0)??(r?E(r):void 0)??P(r,i?.address,a.location?.name)??(r?void 0:l?.zone);if(!u)continue;r&&p.push({...r,zone:u});let s=(0,t.A)(`${o}T${(0,n.e)(a.start)??"15:00"}`,u);if(null===s)continue;let f=l?Math.max(s,l.at):s;M.push({at:f,date:o,zone:u,source:"stay"})}M.sort((e,t)=>e.at-t.at);let S=e=>{let t=e.placeId?T.get(e.placeId):void 0,a=e.location,i=c(t)?{lat:t.lat,lng:t.lng}:c(a)?{lat:a.lat,lng:a.lng}:void 0;return(i?E(i):void 0)??P(i,t?.address,a?.name)},B=function(){let t=M[0];if(!t)return A;let a=e.startDate,i=h[0],r=!!i&&(!a||(0,n.L)(i.start)<=a);if(!a||t.date<=a||r&&0===y.get(t))return t.zone;let o=k[0];return!r&&b[0]?.from&&null!=o&&o<=t.at?b[0].from:A}();if(!(B!==A||M.some(e=>e.zone!==A)))return{...m(A),locatedZone:S};let _=[A];for(let e of[B,...M.map(e=>e.zone)])_.includes(e)||_.push(e);let N=new Map,I=e=>{let a=N.get(e);if(void 0!==a)return a;let i=B;for(let a of M){let n=(0,t.A)(e,a.zone);if(null===n||n<a.at)break;i=a.zone}return N.size<2048&&N.set(e,i),i},L=e=>{if(!e)return;let t=c(e)?{lat:e.lat,lng:e.lng}:void 0;return(t?E(t):void 0)??P(t,e.address)};return{base:A,multi:!0,zones:_,changes:M,zoneAt:e=>{let t=e.getTime(),a=B;for(let e of M){if(e.at>t)break;a=e.zone}return a},zoneAtLocal:I,planZone:(e,t)=>I(`${e}T${(0,n.z)(Math.max(0,Math.min(1439,Math.round(t))))}`),zoneOn:e=>I(`${e}T23:59`),zoneNear:L,placeZone:(e,t)=>L(e)??t??A,bookingZone:e=>{let t=S(e);return t||(e.start&&(0,n.e)(e.start)?I(e.start):void 0)},locatedZone:S}},"l",0,A,"$",0,function(e,a,i,r){if(i===r)return 0;let o=(0,t.A)(`${e}T${(0,n.z)(Math.max(0,Math.min(1439,Math.round(a))))}`,i);if(null===o)return 0;let l=new Date(o);return(0,n.o)(l,r)-(0,n.o)(l,i)},"P",0,p,"T",0,function(e,t,a){let r={};for(let e of t.countries)r[e]=[];for(let e of[...t.stays,...t.visits]){let t=r[e.countryCode];if(!t)continue;let i=e.from;for(let r=0;r<62&&i<e.to;r++,i=(0,n.b)(i,1)){let e=a.zoneOn(i);t.includes(e)||t.push(e)}}let o=(0,s.X)(e.destination);for(let a of t.countries)if(!r[a].length)if(a===o)r[a]=[e.timeZone];else{let e=(0,i.countryTimeZones)(a).filter(d);r[a]=1===e.length?e:[]}return r}])}]);