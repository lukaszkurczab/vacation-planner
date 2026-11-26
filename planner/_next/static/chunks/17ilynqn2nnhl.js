(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),i=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function t(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}let n=new Map;function o(e){let a=n.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}n.set(e,a)}return a}function s(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let u=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),l=0,c=null;function d(){if(c)return c;let e=o("en"),i=[];for(let t of r)for(let n of r){let r=t+n;if(!a.has(r))try{e?.of(r)&&Intl.getCanonicalLocales(`und-${r}`)[0]===`und-${r}`&&i.push(r)}catch{}}return c=i,i}function A(e){if(!e)return;let a=s(e);if(!a||a.length<2)return;let r=e.trim();if(!/^[A-Z]{2}$/.test(r))for(;;){let e=u.get(a);if(e)return e;if(l>=i.length)return;!function(e){let a=o(e);if(a)for(let e of d()){let i;try{i=a.of(e)}catch{i=void 0}if(!i||i===e)continue;let r=s(i);r&&!u.has(r)&&u.set(r,e)}}(i[l]),l+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return A(a[a.length-1])},"countryCodeFromName",0,A,"countryCodes",0,function(){return d()},"countryFromLanguages",0,function(e){let a=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of a)try{let a=new Intl.Locale(e).region?.toUpperCase();if(a&&t(a))return a}catch{}for(let e of a)try{let a=new Intl.Locale(e).maximize().region?.toUpperCase();if(a&&t(a))return a}catch{}},"countryName",0,function(e,a){try{return o(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,t])},93440,e=>{"use strict";var a=e.i(99506);let i=`
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
ES Europe/Madrid@40.4,-3.7 Africa/Ceuta@35.9,-5.3 Atlantic/Canary@28.1,-15.4
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
PT Europe/Lisbon@38.7,-9.1 Atlantic/Madeira@32.6,-16.9 Atlantic/Azores@37.7,-25.7
PW Pacific/Palau
PY America/Asuncion
QA Asia/Qatar
RE Indian/Reunion
RO Europe/Bucharest
RS Europe/Belgrade
RU Europe/Kaliningrad@54.7,20.5 Europe/Moscow@55.8,37.6 Europe/Kirov@58.6,49.7 Europe/Volgograd@48.7,44.4 Europe/Astrakhan@46.4,48.1 Europe/Saratov@51.6,46 Europe/Ulyanovsk@54.3,48.4 Europe/Samara@53.2,50.2 Asia/Yekaterinburg@56.9,60.6 Asia/Omsk@55,73.4 Asia/Novosibirsk@55,82.9 Asia/Barnaul@53.4,83.8 Asia/Tomsk@56.5,85 Asia/Novokuznetsk@53.8,87.1 Asia/Krasnoyarsk@56,92.8 Asia/Irkutsk@52.3,104.3 Asia/Chita@52.1,113.5 Asia/Yakutsk@62,129.7 Asia/Khandyga@62.7,135.6 Asia/Vladivostok@43.2,131.9 Asia/Ust-Nera@64.6,143.2 Asia/Magadan@59.6,150.8 Asia/Sakhalin@47,142.7 Asia/Srednekolymsk@67.5,153.7 Asia/Kamchatka@53,158.7 Asia/Anadyr@64.8,177.5
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
`,r=null;function t(){if(r)return r;for(let e of(r=new Map,i.split("\n"))){let[a,...i]=e.trim().split(" ");a&&0!==i.length&&r.set(a,i.map(e=>{let[a="",i]=e.split("@");if(!i)return{zone:a};let[r,t]=i.split(",").map(Number);return{zone:a,lat:r,lng:t}}))}return r}let n=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!n)for(let[e,a]of(n=new Map,t()))for(let{zone:i}of a)n.set(i,n.has(i)&&n.get(i)!==e?null:e);return n.get(e)??void 0}},"countryTimeZones",0,function(e){return(t().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,i){if(!i)return null;let r=(t().get(i.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(r.length<=1)return r[0]?.zone??null;let n=Math.cos(e.lat*Math.PI/180),o=null,s=1/0;for(let a of r){if(void 0===a.lat||void 0===a.lng)continue;let i=Math.abs(e.lng-a.lng);i>180&&(i=360-i);let r=Math.hypot(i*n,(e.lat-a.lat)*.5);r<s&&(s=r,o=a)}return o?.zone??r[0]?.zone??null}])},44926,e=>{"use strict";var a=e.i(12268),i=e.i(99506),r=e.i(41758),t=e.i(25395),n=e.i(26944),o=e.i(14961),s=e.i(90170);function u(e){return`var(--day-${(e%8+8)%8+1})`}let l=new Set(["nature","hike","beach","viewpoint"]);function c({item:e,place:a}){return"place"===e.kind&&a?{lat:a.lat,lng:a.lng}:null}function d(e){return e.startTime&&(0,i.isValidHHMM)(e.startTime)?(0,i.parseHHMM)(e.startTime):null}function A(e,a,i){return!!e&&!!a&&(0,t.haversineKm)(e,a)>15&&i.some(e=>"checkin"===e.kind)&&!i.some(e=>e.blocking&&e.moves)}function m(e,a,i){return{key:(0,s.legKey)(e,a,i),fromId:e.id,toId:a.id,from:{lat:e.lat,lng:e.lng},to:{lat:a.lat,lng:a.lng},mode:i}}function p(e,r,s,l={}){let f,g,h=(0,a.baseLatLng)(r.start),E=(0,a.baseLatLng)(r.end),M=h?{id:(f=e.date,`base-start:${f}`),...h}:null,k=E?{id:(g=e.date,`base-end:${g}`),...E}:null,y=l.defaultMode??"car",b=l.events??[],C=r.start?.source==="arrival"?r.start.bookingId:void 0,S=r.end?.source==="departure"?r.end.bookingId:void 0,B=e=>!!e&&b.some(a=>a.booking.id===e&&"departure"===a.kind)&&b.some(a=>a.booking.id===e&&"arrival"===a.kind),v=b.filter(e=>!("departure"===e.kind&&e.booking.id===C&&B(C)||"arrival"===e.kind&&e.booking.id===S&&C!==S&&B(S))).map(({...e})=>{let a=r.start?.source==="arrival"&&r.start.bookingId===e.booking.id&&("transport"===e.kind||"arrival"===e.kind),i=!a&&r.end?.source==="departure"&&r.end.bookingId===e.booking.id&&("transport"===e.kind||"departure"===e.kind);return a?{...e,boundary:"start"}:i?{...e,boundary:"end"}:e}),L=s.start&&(0,i.isValidHHMM)(s.start)?(0,i.parseHHMM)(s.start):(0,i.parseHHMM)(o.DEFAULT_DAY_START),P=r.stay&&r.start?.source==="stay"&&r.start.bookingId!==r.stay.id?r.stay.id:void 0,T=v.length?function(e,a,i,r,o,s=null,u){let l=a.filter(e=>"start"===e.boundary),m=a.filter(e=>"end"===e.boundary),p=m[0],f=p?a.filter(e=>!e.boundary&&!e.blocking&&e.start>p.start):[],g=a.filter(e=>!e.boundary&&!f.includes(e)),h=A(i,s,g),E=e.length,M=[],k=0,y=Math.max(r,...l.map(e=>e.end)),b=l.length?l[l.length-1]?.after??i:i,C=l.length>0&&!!l[l.length-1]?.after,S="foot"===o||"bike"===o?"transit":o,B=(a,i,r,o)=>{let s=[],u=[],l=C;for(let A=a;A<o;A++){let a=e[A],o=c(a),m=a.item.travelMode,p=l&&o&&r&&("foot"===m||"bike"===m)&&(0,t.haversineKm)(r,o)>15?S:m,f=i+(o&&r?(0,t.estimateTravelMinutesExact)(r,o,p):0),g=d(a.item),h=null!==g?Math.max(f,g):f;i=h+(0,n.visitMinutesFor)(a.item,a.place),o&&(r=o,l=!1),u.push(h),s.push(i)}return{clock:i,prev:r,ends:s,starts:u}},v=()=>M.length?M[M.length-1]:0,L=(e,a)=>{if(M.push(e),"checkin"!==a.kind||a.booking.id!==u||e>=E)return;let i=B(k,y,b,e);k=e;let r=i.prev&&a.point?(0,t.estimateTravelMinutesExact)(i.prev,a.point,o):0;y=Math.max(i.clock+r,a.end),C=!a.point&&i.prev===b&&C,b=a.point??i.prev};for(let a of g){let r=B(k,y,b,E),n=E,u=r.ends.findIndex(e=>e>a.start);if(u>=0&&(n=k+u),!a.blocking){if(h&&("checkout"===a.kind||"checkin"===a.kind)){let n=e.map(e=>{let r=d(e.item),n=c(e);return n?(0,t.haversineKm)(n,s)<(0,t.haversineKm)(n,i)?1:-1:null!==r?r<a.start?-1:1:0}),o=r.starts.findIndex(e=>e>=a.start),u=o>=0?k+o:E,l=u,A=1/0;for(let e=k;e<=E;e++){let a=0;for(let i=k;i<E;i++)(i<e&&1===n[i]||i>=e&&-1===n[i])&&(a+=1);let i=10*a+Math.abs(e-u);i<A&&(A=i,l=e)}L(Math.max(l,v()),a);continue}if("checkout"===a.kind){M.push(Math.max(n,v()));continue}let o=r.starts.findIndex(e=>e>=a.start);L(Math.max(o>=0?k+o:E,v()),a);continue}let l=a.moves&&!!a.point&&!!a.after&&(0,t.haversineKm)(a.point,a.after)>15,A=e.map(e=>{let i=d(e.item);if(null!==i)return i<a.start?-1:1;let r=c(e);return l&&r?(0,t.haversineKm)(r,a.after)<(0,t.haversineKm)(r,a.point)?1:-1:a.moves&&null===a.after?-1:0}),m=n,p=1/0;for(let e=k;e<=E;e++){let a=0;for(let i=k;i<E;i++)(i<e&&1===A[i]||i>=e&&-1===A[i])&&(a+=1);let i=10*a+Math.abs(e-n);i<p&&(p=i,m=e)}for(let e=M.length-1;e>=0&&!g[e].blocking&&M[e]>m;e--)M[e]=m;M.push(m);let f=B(k,y,b,m);k=m;let S=f.prev&&a.point?(0,t.estimateTravelMinutesExact)(f.prev,a.point,o):0;y=Math.max(f.clock+S,a.end),C=void 0===a.after?!a.point&&f.prev===b&&C:!!a.after&&a.moves,b=void 0===a.after?a.point??f.prev:a.after}let P=l.map(e=>({kind:"event",event:e,id:e.id})),T=0;for(e.forEach((e,a)=>{for(;T<g.length&&M[T]<=a;){let e=g[T];P.push({kind:"event",event:e,id:e.id}),T+=1}P.push({kind:"item",resolved:e,id:e.item.id})});T<g.length;T++){let e=g[T];P.push({kind:"event",event:e,id:e.id})}for(let e of m)P.push({kind:"event",event:e,id:e.id});for(let e of f)P.push({kind:"event",event:e,id:e.id});return P}(e.items,v,h,L,y,E,P):e.items.map(e=>({kind:"item",resolved:e,id:e.item.id})),N=A(h,E,v.filter(e=>!e.boundary))?v.find(e=>"checkin"===e.kind):void 0,R=T.findIndex(e=>"event"===e.kind&&"checkin"===e.event.kind&&!e.event.boundary&&e.event.booking.id===P),K=R>=0?T[R]:void 0,D=N??(K?.kind==="event"&&(K.event.point??E)&&T.slice(R+1).some(e=>"item"===e.kind&&c(e.resolved))?K.event:void 0),I=e.items.filter(e=>c(e)),G=r.end?.source==="departure"||r.end?.source==="arrival",w=s.returnMode??(G?y:I[I.length-1]?.item.travelMode??y),H=[],O=M,z=0,F="foot"===y||"bike"===y?"transit":y;for(let e of T){if("item"===e.kind){let a=c(e.resolved);if(!a)continue;let i={id:e.id,...a};if(z+=1,O){let r=e.resolved.item.travelMode,n=O.station&&("foot"===r||"bike"===r)&&(0,t.haversineKm)(O,a)>15;H.push(m(O,i,n?F:r))}O=i;continue}let a=e.event;if(N&&a.id===N.id&&E){let e={id:a.id,...a.point??E};O&&H.push(m(O,e,"car"===y?"car":"none")),O={id:`${a.id}:after`,...a.point??E},z+=1;continue}let i=a.point??E;if(D&&a.id===D.id&&i){let e={id:a.id,...i};O&&H.push(m(O,e,O.station&&(0,t.haversineKm)(O,i)>15?F:y)),O={id:`${a.id}:after`,...i},z+=1;continue}if("end"!==a.boundary&&a.blocking){if("start"===a.boundary){!O&&a.after&&(O={id:a.id,...a.after,station:!0});continue}if(a.point){let e={id:a.id,...a.point};z+=1,O&&H.push(m(O,e,y)),O=e}void 0!==a.after&&(O=a.after?{id:`${a.id}:after`,...a.after,station:a.moves}:null,a.after&&(z+=1))}}k&&O&&z>0&&H.push(m(O,k,w));let _=new Map,U=null;for(let e of H)k&&e.toId===k.id?U=e:_.set(e.toId,e);let Z=new Map;I.forEach((e,a)=>Z.set(e.item.id,a+1));let V=new Set;e.items.forEach((a,i)=>{let r=e.items[i-1];r?.item.kind==="transport"&&c(a)&&V.add(a.item.id)});let W=!!M&&!!k&&(r.start?.bookingId!==void 0&&r.start.bookingId===r.end?.bookingId||1e-4>Math.abs(M.lat-k.lat)&&1e-4>Math.abs(M.lng-k.lng));return{date:e.date,index:e.index,color:u(e.index),items:e.items,events:T.flatMap(e=>"event"===e.kind?[e.event]:[]),entries:T,defaultMode:y,base:r,meta:s,start:M,end:k,sameBase:W,legs:H,arriving:_,returnLeg:U,numbers:Z,covered:V,...N?{relocation:N.id}:{},...D?{anchor:D.id}:{}}}let f=new Set(["transport","departure","arrival","booking"]);function g(e,a,r={}){let t=e.legs.map(i=>{let r=a(i);return e.covered.has(i.toId)?{...r,minutes:0,km:0,covered:!0}:r}),u=new Map(t.map(e=>[e.spec,e])),c=new Map;for(let[a,i]of e.arriving){let e=u.get(i);e&&c.set(a,e)}let A=e.returnLeg?u.get(e.returnLeg)??null:null,m=e.meta.start&&(0,i.isValidHHMM)(e.meta.start)?e.meta.start:function(e,a){let r,t=o.DEFAULT_DAY_START,n=(e.entries??e.items.map(e=>({kind:"item",resolved:e,id:e.item.id}))).find(e=>"item"===e.kind||e.event.blocking);if(!n)return t;if("event"===n.kind){if("start"===n.event.boundary)return(0,i.formatHHMM)(n.event.end);r=n.event.start}else r=d(n.resolved.item);if(null===r)return t;let s=r-(a.get(n.id)?.minutes??0);return s<(0,i.parseHHMM)(t)?(0,i.formatHHMM)(Math.max(0,s)):t}(e,c),p=e.anchor??e.relocation,h=e.entries.filter(e=>"item"===e.kind||e.event.blocking||e.id===p),E=h.map(e=>{var a;let r;return"item"===e.kind?{durationMinutes:(0,n.visitMinutesFor)(e.resolved.item,e.resolved.place),...e.resolved.item.startTime?{startTime:e.resolved.item.startTime}:{}}:(r="start"===(a=e.event).boundary?a.end:a.start,{durationMinutes:0,startTime:(0,i.formatHHMM)(r),fixedEnd:a.end,event:!0})}),M=h.map(e=>"event"===e.kind&&"end"===e.event.boundary?A?.minutes??0:c.get(e.id)?.minutes??0),k=(0,n.computeSchedule)(E,M,{dayStart:m,sunset:r.sunsetMinutes??null}),y=new Map,b=new Map;h.forEach((e,a)=>{let i=k.items[a];i&&("item"===e.kind?y.set(e.id,i):b.set(e.id,i))});let C=e.events.find(e=>"end"===e.boundary),S=(0,i.parseHHMM)(m);h.forEach((e,a)=>{("event"!==e.kind||"end"!==e.event.boundary)&&(S=k.items[a]?.end??S)});let B={items:e.items.map(e=>y.get(e.item.id)).filter(e=>!!e),visitMinutes:k.visitMinutes,travelMinutes:k.travelMinutes,waitMinutes:k.waitMinutes,eventMinutes:k.eventMinutes??0,end:S},v=new Map,L=(e,a)=>v.set(e,[...v.get(e)??[],a]),P=e.events.filter(e=>e.blocking&&f.has(e.kind)&&"start"!==e.boundary);for(let a of(e.items.forEach(({item:e,place:a})=>{let i=y.get(e.id);if(!i)return;i.late&&L(e.id,{type:"late",minutes:Math.max(1,i.lateMinutes)}),i.afterSunset&&a&&l.has(a.category)&&L(e.id,{type:"afterSunset"}),i.pastMidnight&&L(e.id,{type:"pastMidnight"});let r=P.find(e=>"departure"===e.kind||"end"===e.boundary?i.end>e.start:e.end>e.start&&i.planned<e.end&&i.end>e.start);r&&L(e.id,{type:"overlapsBooking",title:r.booking.title})}),e.events)){let e=b.get(a.id);e?.late&&"start"!==a.boundary&&a.id!==p&&L(a.id,{type:"late",minutes:Math.max(1,e.lateMinutes)})}let T=e.events.find(e=>"transport"===e.kind||"departure"===e.kind);for(let a of e.events)"checkout"===a.kind&&T&&a.start>T.start&&L(a.id,{type:"checkoutAfterDeparture",departure:T.start});let N=(0,s.summarizeLegs)(t),R=e.items.length>0||e.events.some(e=>e.blocking),K=(0,s.summarizeLegs)(e.legs.map(a=>e.covered.has(a.toId)?{spec:a,minutes:0,km:0}:{spec:a,...(0,s.estimateLeg)(a)})),D=R?(0,n.dayIntensity)(B.visitMinutes+K.minutes+(B.eventMinutes??0),K.byMode.car):null,I=C?b.get(C.id):void 0;return{legs:t,arriving:c,returnLeg:A,schedule:B,byItem:y,byEvent:b,warnings:v,totals:N,intensity:D,dayStart:(0,i.parseHHMM)(m),endEta:A?I?I.arrival:S+A.minutes:null,pending:t.some(e=>"pending"===e.status),estimated:t.some(e=>"estimate"===e.status&&("car"===e.spec.mode||"foot"===e.spec.mode||"bike"===e.spec.mode))}}function h(e){return{spec:e,...(0,s.estimateLeg)(e),status:"estimate"}}function E(e,i,t,n,s=(0,o.tripDefaultMode)(e,t,i),u){return p(n,(0,a.dayBase)(e,i,n.date,t),(0,o.readPlanDays)(e)[n.date]??{},{events:(0,r.dayEventsFor)(i,n.date,t,n.items.map(e=>e.item),u??e.timeZone),defaultMode:s})}e.s(["OUTDOOR_CATEGORIES",0,l,"buildDayModel",0,p,"computeDay",0,g,"dayColor",0,u,"estimatedLeg",0,h,"itemLatLng",0,c,"planDay",0,function(e,a,i,r,t=h,n={}){let o=E(e,a,i,r,n.defaultMode,n.zones);return{model:o,computed:g(o,t,n)}},"rebuildDayModel",0,function(e,a){return p({date:e.date,index:e.index,items:a},e.base,e.meta,{events:e.events.map(({boundary:e,...a})=>a),defaultMode:e.defaultMode})},"stopNames",0,function(e,a){let i=new Map;for(let r of(e.start&&i.set(e.start.id,e.base.start?.name??""),e.end&&i.set(e.end.id,e.base.end?.name??""),e.items))i.set(r.item.id,a(r));for(let a of e.events)i.set(a.id,("arrival"===a.kind?a.toName:a.fromName??a.placeName)??a.booking.title),i.set(`${a.id}:after`,a.toName??a.placeName??a.booking.title);return i},"tripDayModel",0,E])},58162,e=>{"use strict";var a=e.i(41478),i=e.i(25395);function r(e){if(e.kind)return e.kind;if(e.bbox){let[a,r,t,n]=e.bbox;if((0,i.haversineKm)({lat:r,lng:a},{lat:n,lng:t})>150)return"region"}return"city"}function t(e){return!!e&&e.every(Number.isFinite)&&(e[0]!==e[2]||e[1]!==e[3])}function n(e,a){let[r,t,n,o]=e,s=Math.min(o,Math.max(t,a.lat)),u=Math.min(n,Math.max(r,a.lng));return(0,i.haversineKm)(a,{lat:s,lng:u})}e.s(["destinationFit",0,function(e){if(t(e.bbox))return{bbox:e.bbox};let a=r(e);return{center:{lat:e.lat,lng:e.lng},zoom:"country"===a?5:"region"===a?8:11}},"destinationKind",0,r,"destinationLabel",0,function(e,i){let t=e.name.trim(),n=e.countryCode?.trim().toUpperCase(),o=n&&i?(0,a.countryName)(n,i):void 0,s=(o&&o!==n?o:void 0)??e.country?.trim();return s&&"country"!==r(e)&&s.toLocaleLowerCase()!==t.toLocaleLowerCase()?`${t}, ${s}`:t},"isFarFromDestination",0,function(e,a){let o=r(e),s=t(e.bbox)?e.bbox:void 0;if("country"===o){if(e.countryCode&&a.countryCode)return a.countryCode.toUpperCase()!==e.countryCode.toUpperCase();if(s)return n(s,a)>50}return s?n(s,a)>300:(0,i.haversineKm)(e,a)>300},"isWideDestination",0,function(e){return"city"!==r(e)},"kmOutsideBBox",0,n])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},i=new Map(`
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
`.trim().split("\n").map(e=>{let[i="",r="",t="",n=""]=e.split("|");return[i,{code:i,city:{pl:r,en:t||r,de:a[i]??(t||r)},timeZone:n}]}));function r(e){return e?i.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of i.values())for(let i of Object.values(e.city)){let r=i.toLowerCase();if(r===a||r.startsWith(`${a} (`))return e}},"airportByCode",0,r,"airportLabel",0,function(e,a,i){let t=r(e),n=(t?.city[a]??i)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),i=e.i(41478),r=e.i(93440),t=e.i(99506),n=e.i(58162),o=e.i(49913),s=e.i(25395);let u=["Public","Bank","School","Authorities","Optional","Observance"],l=120,c=(e,a=l)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0;function d(e,a,i){let r=a.toUpperCase(),t=new Set(e.flatMap(e=>e.counties??[])),n=e=>t.size>=4&&[...t].every(a=>e.includes(a)),o=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),t=a.types.includes("Optional");if(!e&&!t)continue;let s=a.global||!a.counties?.length||n(a.counties);if(!s&&i&&!a.counties?.includes(i))continue;let u=!s,l=!!e&&(!u||!!i)||"maybe",c=e?u?"regional":"national":"optional",d={date:a.date,countryCode:r,localName:a.localName,name:a.name,scope:c,status:l,...u&&a.counties?{counties:a.counties}:{}},m=o.get(a.date)??[],p=m.findIndex(e=>e.name===d.name||e.localName===d.localName);p<0?m.push(d):A(d)>A(m[p])&&(m[p]=d),o.set(a.date,m)}for(let e of o.values())e.sort((e,a)=>A(a)-A(e));return{countryCode:r,byDate:o}}let A=e=>2*(!0===e.status)+ +("national"===e.scope),m=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function p(e,a){let i,r=50,t=new Set;for(let o of a){let a=(0,s.haversineKm)(e,o);a<=r&&(i=o,r=a),(a<=300||o.bbox&&0===(0,n.kmOutsideBBox)(o.bbox,e))&&t.add(o.countryCode)}return i?i.countryCode:1===t.size?[...t][0]:void 0}let f=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function g(e,a){let t=e?.name.trim()??"",n=(0,i.countryCodeFromAddress)(t);if(n)return n;let s=f.exec(t),u=(0,o.airportByCode)(s?.[1]??s?.[2]);return(0,r.countryOfTimeZone)(u?.timeZone)??(0,r.countryOfTimeZone)(a)}function h(e,a){if(e.index!==e.count-1)return!1;let i=!!a&&(0,t.datePart)(e.start)>=a&&e.to!==e.home;return e.index>0&&e.to===e.origin&&e.origin!==e.home||i}let E=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function M(e,a){let r=(0,i.countryCodeFromAddress)(a?.address);if(r)return r;let t=1===e.countries.length?e.countries[0]:void 0;return m(a)&&0!==e.anchors.length?e.countryNear(a):t}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,i=new Set;for(let[r,t]of e.data)if(null===t)i.add(r);else{let i=e.region&&e.region.startsWith(`${r}-`)?e.region:void 0;a.set(r,d(t,r,i))}let r=e.stays??[],n=e.visits??[],o=e=>r.find(a=>a.from<=e&&e<a.to)?.countryCode??n.find(a=>a.from<e&&e<a.to)?.countryCode??r.find(a=>a.to===e)?.countryCode??n.find(a=>a.from===e)?.countryCode??n.find(a=>a.to===e)?.countryCode,s=e.anchors??[],u=(i,r)=>{let t;return(r?[r]:(t=o(i))?[t]:e.countries).flatMap(e=>a.get(e)?.byDate.get(i)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:i,anchors:s,countryOn:o,countryNear:e=>p(e,s),status:(e,i)=>{var r;let t=a.get(e);return t?(r=t.byDate.get(i),!!r?.length&&(!!r.some(e=>!0===e.status)||"maybe")):null},on:u,inRange(e,a){let i=[],r=Math.min((0,t.diffDays)(e,a),400);for(let a=0;a<=r;a++)i.push(...u((0,t.addDays)(e,a)));return i}}},"countryAt",0,p,"interpretHolidays",0,d,"isReturnLeg",0,h,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let i=a.toUpperCase(),r=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,n=c(a.name),o=c(a.localName)??n;if(!(0,t.isValidISODate)(e)||!n||!o||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==i)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>u.includes(e)),l=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];r.push({date:e,localName:o,name:n,countryCode:i,global:!1!==a.global||0===l.length,...l.length&&!1===a.global?{counties:l}:{},types:s.length?s:["Public"]})}return r.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,M,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let i=M(e,a);return i?a=>e.status(i,a):a=>{let i=e.countries.map(i=>e.status(i,a));return i.some(e=>!0===e||"maybe"===e)?"maybe":!i.includes(!1)&&null}},"tripCountries",0,function(e,r=[],n=[]){var o;let s=[],u=(e,a)=>{a&&m(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},l=(o=e.destination,(0,i.isCountryCode)(o.countryCode)?o.countryCode:(0,i.countryCodeFromName)(o.country));if(l&&m(e.destination)){let a=e.destination.bbox,i=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:l,...i?{bbox:a}:{}})}let c=[],d=(e,a)=>c.push({date:e,code:a}),A=[],f=r.filter(a.isTransport).sort(E),M=f.map(e=>({from:g(e.from,e.startTimeZone),to:g(e.to,e.endTimeZone)})),k=M[0]?.from,y=e=>{let a=f[e],i=f[e+1];if(!a?.end||!i)return!1;let r=(0,t.diffLocalMinutes)(a.end,i.start);return r>=0&&r<720};f.forEach((a,i)=>{let{from:r,to:n}=M[i];i>0&&r&&r!==k&&!y(i-1)&&r!==M[i-1].to&&(d(a.start,r),u(a.from,r));let o=h({index:i,count:f.length,start:a.start,to:n,origin:k,home:l},e.endDate);if(!n||o||y(i))return;u(a.to,n),d(a.end??a.start,n);let s=(0,t.datePart)(a.end??a.start),c=f[i+1]?(0,t.datePart)(f[i+1].start):void 0,m=c&&(0,t.isValidISODate)(c)&&c>s?c:(0,t.addDays)(s,1);(0,t.isValidISODate)(s)&&A.push({from:s,to:m,countryCode:n})});let b=new Map(n.map(e=>[e.id,e])),C=[];for(let e of r.filter(a.isStay).sort(E)){let a=e.placeId?b.get(e.placeId):void 0,r=m(a)?a:m(e.location)?e.location:void 0,n=(0,t.datePart)(e.start),o=(0,i.countryCodeFromAddress)(a?.address)??(0,i.countryCodeFromAddress)(e.location?.name)??(r?p(r,s):A.find(e=>e.from===n)?.countryCode);if(!o)continue;d(e.start,o),u(r,o);let l=e.end?(0,t.datePart)(e.end):(0,t.addDays)(n,1);(0,t.isValidISODate)(n)&&(0,t.isValidISODate)(l)&&(0,t.diffDays)(n,l)>0&&C.push({from:n,to:l,countryCode:o})}let S=[];for(let e of[l,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!S.includes(e)&&S.length<8&&S.push(e);return{countries:S,stays:C,visits:A,anchors:s}},"tripYears",0,function(e){let a=(0,t.parseISODate)(e.startDate).year,i=(0,t.parseISODate)(e.endDate).year,r=[];for(let e=a;e<=i&&r.length<3;e++)r.push(e);return r}])},90170,e=>{"use strict";var a=e.i(25395);function i(e){return"car"===e||"foot"===e||"bike"===e?e:null}let r=e=>(Math.round(1e5*e)/1e5+0).toFixed(5),t=(e,a)=>(e[0]-a.lng)**2+(e[1]-a.lat)**2;e.s(["dominantMode",0,function(e,a="car"){let i=new Map,r=null,t=0;for(let a of e){if("none"===a)continue;let e=(i.get(a)??0)+1;i.set(a,e),e>t&&(r=a,t=e)}return r??a},"estimateLeg",0,function(e){let i=(0,a.haversineKm)(e.from,e.to),r="none"===e.mode?1:a.FALLBACK_SPEEDS[e.mode].detour;return{minutes:(0,a.estimateTravelMinutes)(e.from,e.to,e.mode),km:Math.round(i*r*10)/10}},"groupRuns",0,function(e,a=25){let r=[],t=null;for(let n of e){let e=i(n.mode);if(!e){t=null;continue}let o=t?.legs[t.legs.length-1];t&&o&&t.mode===e&&o.toId===n.fromId&&t.points.length<a?(t.legs.push(n),t.points.push(n.to)):(t={mode:e,legs:[n],points:[n.from,n.to]},r.push(t))}return r},"legKey",0,function(e,a,i){return`${i}|${r(e.lat)},${r(e.lng)}|${r(a.lat)},${r(a.lng)}`},"routedMode",0,i,"splitGeometry",0,function(e,a){let i=a.length-1;if(i<=0)return[];let r=e=>[e.lng,e.lat];if(e.length<2)return Array.from({length:i},(e,i)=>[r(a[i]),r(a[i+1])]);let n=[0],o=0;for(let r=1;r<i;r++){let i=a[r],s=o,u=1/0;for(let a=o;a<e.length;a++){let r=t(e[a],i);r<u&&(u=r,s=a)}n.push(s),o=s}n.push(e.length-1);let s=[];for(let t=0;t<i;t++){let i=n[t],o=n[t+1],u=e.slice(i,o+1);s.push(u.length>=2?u:[r(a[t]),r(a[t+1])])}return s},"summarizeLegs",0,function(e){let a={car:0,foot:0,bike:0,transit:0,none:0},i=0,r=0;for(let t of e)a[t.spec.mode]+=t.minutes,i+=t.minutes,r+=t.km;return{byMode:a,minutes:i,km:Math.round(10*r)/10}}])}]);