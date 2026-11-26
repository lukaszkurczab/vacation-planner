(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,e=>{"use strict";var a=e.i(99506),t=e.i(32751);function r(e){return"stay"===e.type}function i(e){return t.TRANSPORT_BOOKING_TYPES.includes(e.type)}function n(e){if(!e.end)return[];let t=(0,a.datePart)(e.start),r=(0,a.datePart)(e.end),i=(0,a.diffDays)(t,r),n=[];for(let e=0;e<i;e++)n.push((0,a.addDays)(t,e));return n}function o(e,t){return e.filter(r).filter(e=>e.end&&(0,a.datePart)(e.start)<=t&&t<(0,a.datePart)(e.end)).sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))[0]}function s(e,a,t){let r=e[a];if(r&&void 0!==r.lat&&void 0!==r.lng)return r;if("location"===a&&e.placeId&&t){let a=t.find(a=>a.id===e.placeId);if(a)return{name:r?.name??a.name,lat:a.lat,lng:a.lng}}return r}function l(e,a,t){var r;if(!a)return null;let i="stay"===e.type&&!!e.title.trim()&&e.title.trim()!==a.name&&((r=a.name).includes(",")||r.length>40);return{name:i?e.title.trim():a.name,...i&&a.name?{address:a.name}:{},...void 0!==a.lat?{lat:a.lat}:{},...void 0!==a.lng?{lng:a.lng}:{},bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:t}}function u(e,a){let r="string"==typeof a?a:a.base;if(e.type&&!t.TRANSPORT_BOOKING_TYPES.includes(e.type)){let t=e.startTimeZone&&e.endTimeZone||"string"==typeof a?void 0:a.bookingZone(e),i=e.startTimeZone??t??r;return{start:i,end:e.endTimeZone??e.startTimeZone??t??(e.end?r:i)}}let i=e.startTimeZone??r;return{start:i,end:e.endTimeZone??(e.end?r:i)}}function c(e,t,r="UTC"){let i="start"===t?e.start:e.end??e.start,n=u(e,r)[t];return d(i.length>=16?i:`${(0,a.datePart)(i)}T00:00`,n)}function d(e,t){try{let r=(0,a.zonedTimeToInstant)(e,t).getTime();return Number.isFinite(r)?r:null}catch{return null}}function p(e,t,r,n){let o=e=>"start"===r?e.start:e.end??e.start;return e.filter(i).filter(e=>"start"===r?(0,a.datePart)(e.start)===t:e.end?(0,a.datePart)(e.end)===t:(0,a.datePart)(e.start)===t).sort((e,a)=>{let t=c(e,r,n),i=c(a,r,n);return null!==t&&null!==i&&t!==i?t-i:o(e)<o(a)?-1:+(o(e)>o(a))})}e.s(["BOOKING_ICON",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"baseLatLng",0,function(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null},"bookingInstant",0,c,"bookingZones",0,u,"buildTimeline",0,function(e,t){let i=(0,a.tripDays)(e).map((e,a)=>({kind:"day",date:e,dayIndex:a}));for(let e of t)i.push({kind:"booking",booking:e,date:(0,a.datePart)(e.start),at:e.start,edge:"start"}),r(e)&&e.end&&i.push({kind:"booking",booking:e,date:(0,a.datePart)(e.end),at:e.end,edge:"end"});let n=e=>{if("day"===e.kind)return`${e.date}|0`;let t=(0,a.timePart)(e.at)??"00:00";return`${e.date}|1|${t}|${+("end"!==e.edge)}|${e.booking.title}`};return i.sort((e,a)=>{let t=n(e),r=n(a);return t<r?-1:+(t>r)})},"dayBase",0,function(e,t,r,i){let n=o(t,(0,a.addDays)(r,-1)),u=o(t,r),d=t.filter(e=>"car"!==e.type),A=e.timeZone??"UTC",f=n?l(n,s(n,"location",i),"stay"):null;if(!f){let e=p(d,r,"end",A),t=e.filter(e=>(0,a.datePart)(e.start)!==r),n=t[t.length-1]??e[0];n&&(f=l(n,s(n,"to",i),"arrival"))}!f&&u&&(f=l(u,s(u,"location",i),(0,a.datePart)(u.start)===r?"destination":"stay"));let m=u?l(u,s(u,"location",i),"stay"):null;if(!m){let t=p(d,r,"start",A).filter(e=>f?.source!=="arrival"||f.bookingId!==e.id),n=t[t.length-1];if(n){let t=s(n,"to",i);m=r<e.endDate&&n.end&&(0,a.datePart)(n.end)===r&&(c(n,"end",A)??0)>=(c(n,"start",A)??0)&&t&&void 0!==t.lat&&void 0!==t.lng?l(n,t,"arrival"):l(n,s(n,"from",i),"departure")}}return m||(m=f),u?{start:f,end:m,stay:u}:{start:f,end:m}},"detectConflicts",0,function(e,t){let i=[];for(let e of t)e.end&&e.end<e.start&&!(e.endTimeZone||e.startTimeZone)&&i.push({type:"invalid-range",bookingId:e.id});let o=t.filter(r).filter(e=>e.end&&e.end>e.start);for(let e=0;e<o.length;e++)for(let a=e+1;a<o.length;a++){let t=o[e],r=o[a],s=new Set(n(r)),l=n(t).filter(e=>s.has(e));l.length>0&&i.push({type:"overlapping-stays",bookingIds:[t.id,r.id],nights:l})}let s=new Set(o.flatMap(n));for(let t of(0,a.tripDays)(e).slice(0,-1))s.has(t)||i.push({type:"missing-stay",date:t});return i},"isStay",0,r,"isTransport",0,i,"localInstant",0,d,"nightsOf",0,n,"stayForNight",0,o])},41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),t=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function i(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}let n=new Map;function o(e){let a=n.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}n.set(e,a)}return a}function s(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let l=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),u=0,c=null;function d(){if(c)return c;let e=o("en"),t=[];for(let i of r)for(let n of r){let r=i+n;if(!a.has(r))try{e?.of(r)&&Intl.getCanonicalLocales(`und-${r}`)[0]===`und-${r}`&&t.push(r)}catch{}}return c=t,t}function p(e){if(!e)return;let a=s(e);if(!a||a.length<2)return;let r=e.trim();if(!/^[A-Z]{2}$/.test(r))for(;;){let e=l.get(a);if(e)return e;if(u>=t.length)return;!function(e){let a=o(e);if(a)for(let e of d()){let t;try{t=a.of(e)}catch{t=void 0}if(!t||t===e)continue;let r=s(t);r&&!l.has(r)&&l.set(r,e)}}(t[u]),u+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return p(a[a.length-1])},"countryCodeFromName",0,p,"countryCodes",0,function(){return d()},"countryFromLanguages",0,function(e){let a=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of a)try{let a=new Intl.Locale(e).region?.toUpperCase();if(a&&i(a))return a}catch{}for(let e of a)try{let a=new Intl.Locale(e).maximize().region?.toUpperCase();if(a&&i(a))return a}catch{}},"countryName",0,function(e,a){try{return o(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,i])},93440,e=>{"use strict";var a=e.i(99506);let t=`
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
`,r=null;function i(){if(r)return r;for(let e of(r=new Map,t.split("\n"))){let[a,...t]=e.trim().split(" ");a&&0!==t.length&&r.set(a,t.map(e=>{let[a="",t]=e.split("@");if(!t)return{zone:a};let[r,i]=t.split(",").map(Number);return{zone:a,lat:r,lng:i}}))}return r}let n=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!n)for(let[e,a]of(n=new Map,i()))for(let{zone:t}of a)n.set(t,n.has(t)&&n.get(t)!==e?null:e);return n.get(e)??void 0}},"countryTimeZones",0,function(e){return(i().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,t){if(!t)return null;let r=(i().get(t.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(r.length<=1)return r[0]?.zone??null;let n=Math.cos(e.lat*Math.PI/180),o=null,s=1/0;for(let a of r){if(void 0===a.lat||void 0===a.lng)continue;let t=Math.abs(e.lng-a.lng);t>180&&(t=360-t);let r=Math.hypot(t*n,(e.lat-a.lat)*.5);r<s&&(s=r,o=a)}return o?.zone??r[0]?.zone??null}])},58162,e=>{"use strict";var a=e.i(41478),t=e.i(25395);function r(e){if(e.kind)return e.kind;if(e.bbox){let[a,r,i,n]=e.bbox;if((0,t.haversineKm)({lat:r,lng:a},{lat:n,lng:i})>150)return"region"}return"city"}function i(e){return!!e&&e.every(Number.isFinite)&&(e[0]!==e[2]||e[1]!==e[3])}function n(e,a){let[r,i,n,o]=e,s=Math.min(o,Math.max(i,a.lat)),l=Math.min(n,Math.max(r,a.lng));return(0,t.haversineKm)(a,{lat:s,lng:l})}e.s(["destinationFit",0,function(e){if(i(e.bbox))return{bbox:e.bbox};let a=r(e);return{center:{lat:e.lat,lng:e.lng},zoom:"country"===a?5:"region"===a?8:11}},"destinationKind",0,r,"destinationLabel",0,function(e,t){let i=e.name.trim(),n=e.countryCode?.trim().toUpperCase(),o=n&&t?(0,a.countryName)(n,t):void 0,s=(o&&o!==n?o:void 0)??e.country?.trim();return s&&"country"!==r(e)&&s.toLocaleLowerCase()!==i.toLocaleLowerCase()?`${i}, ${s}`:i},"isFarFromDestination",0,function(e,a){let o=r(e),s=i(e.bbox)?e.bbox:void 0;if("country"===o){if(e.countryCode&&a.countryCode)return a.countryCode.toUpperCase()!==e.countryCode.toUpperCase();if(s)return n(s,a)>50}return s?n(s,a)>300:(0,t.haversineKm)(e,a)>300},"isWideDestination",0,function(e){return"city"!==r(e)},"kmOutsideBBox",0,n])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},t=new Map(`
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
`.trim().split("\n").map(e=>{let[t="",r="",i="",n=""]=e.split("|");return[t,{code:t,city:{pl:r,en:i||r,de:a[t]??(i||r)},timeZone:n}]}));function r(e){return e?t.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of t.values())for(let t of Object.values(e.city)){let r=t.toLowerCase();if(r===a||r.startsWith(`${a} (`))return e}},"airportByCode",0,r,"airportLabel",0,function(e,a,t){let i=r(e),n=(i?.city[a]??t)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),t=e.i(41478),r=e.i(93440),i=e.i(99506),n=e.i(58162),o=e.i(49913),s=e.i(25395);let l=["Public","Bank","School","Authorities","Optional","Observance"],u=120,c=(e,a=u)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0;function d(e,a,t){let r=a.toUpperCase(),i=new Set(e.flatMap(e=>e.counties??[])),n=e=>i.size>=4&&[...i].every(a=>e.includes(a)),o=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),i=a.types.includes("Optional");if(!e&&!i)continue;let s=a.global||!a.counties?.length||n(a.counties);if(!s&&t&&!a.counties?.includes(t))continue;let l=!s,u=!!e&&(!l||!!t)||"maybe",c=e?l?"regional":"national":"optional",d={date:a.date,countryCode:r,localName:a.localName,name:a.name,scope:c,status:u,...l&&a.counties?{counties:a.counties}:{}},A=o.get(a.date)??[],f=A.findIndex(e=>e.name===d.name||e.localName===d.localName);f<0?A.push(d):p(d)>p(A[f])&&(A[f]=d),o.set(a.date,A)}for(let e of o.values())e.sort((e,a)=>p(a)-p(e));return{countryCode:r,byDate:o}}let p=e=>2*(!0===e.status)+ +("national"===e.scope),A=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function f(e,a){let t,r=50,i=new Set;for(let o of a){let a=(0,s.haversineKm)(e,o);a<=r&&(t=o,r=a),(a<=300||o.bbox&&0===(0,n.kmOutsideBBox)(o.bbox,e))&&i.add(o.countryCode)}return t?t.countryCode:1===i.size?[...i][0]:void 0}let m=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function g(e,a){let i=e?.name.trim()??"",n=(0,t.countryCodeFromAddress)(i);if(n)return n;let s=m.exec(i),l=(0,o.airportByCode)(s?.[1]??s?.[2]);return(0,r.countryOfTimeZone)(l?.timeZone)??(0,r.countryOfTimeZone)(a)}function h(e,a){if(e.index!==e.count-1)return!1;let t=!!a&&(0,i.datePart)(e.start)>=a&&e.to!==e.home;return e.index>0&&e.to===e.origin&&e.origin!==e.home||t}let y=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function E(e,a){let r=(0,t.countryCodeFromAddress)(a?.address);if(r)return r;let i=1===e.countries.length?e.countries[0]:void 0;return A(a)&&0!==e.anchors.length?e.countryNear(a):i}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,t=new Set;for(let[r,i]of e.data)if(null===i)t.add(r);else{let t=e.region&&e.region.startsWith(`${r}-`)?e.region:void 0;a.set(r,d(i,r,t))}let r=e.stays??[],n=e.visits??[],o=e=>r.find(a=>a.from<=e&&e<a.to)?.countryCode??n.find(a=>a.from<e&&e<a.to)?.countryCode??r.find(a=>a.to===e)?.countryCode??n.find(a=>a.from===e)?.countryCode??n.find(a=>a.to===e)?.countryCode,s=e.anchors??[],l=(t,r)=>{let i;return(r?[r]:(i=o(t))?[i]:e.countries).flatMap(e=>a.get(e)?.byDate.get(t)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:t,anchors:s,countryOn:o,countryNear:e=>f(e,s),status:(e,t)=>{var r;let i=a.get(e);return i?(r=i.byDate.get(t),!!r?.length&&(!!r.some(e=>!0===e.status)||"maybe")):null},on:l,inRange(e,a){let t=[],r=Math.min((0,i.diffDays)(e,a),400);for(let a=0;a<=r;a++)t.push(...l((0,i.addDays)(e,a)));return t}}},"countryAt",0,f,"interpretHolidays",0,d,"isReturnLeg",0,h,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let t=a.toUpperCase(),r=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,n=c(a.name),o=c(a.localName)??n;if(!(0,i.isValidISODate)(e)||!n||!o||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==t)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>l.includes(e)),u=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];r.push({date:e,localName:o,name:n,countryCode:t,global:!1!==a.global||0===u.length,...u.length&&!1===a.global?{counties:u}:{},types:s.length?s:["Public"]})}return r.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,E,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let t=E(e,a);return t?a=>e.status(t,a):a=>{let t=e.countries.map(t=>e.status(t,a));return t.some(e=>!0===e||"maybe"===e)?"maybe":!t.includes(!1)&&null}},"tripCountries",0,function(e,r=[],n=[]){var o;let s=[],l=(e,a)=>{a&&A(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},u=(o=e.destination,(0,t.isCountryCode)(o.countryCode)?o.countryCode:(0,t.countryCodeFromName)(o.country));if(u&&A(e.destination)){let a=e.destination.bbox,t=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:u,...t?{bbox:a}:{}})}let c=[],d=(e,a)=>c.push({date:e,code:a}),p=[],m=r.filter(a.isTransport).sort(y),E=m.map(e=>({from:g(e.from,e.startTimeZone),to:g(e.to,e.endTimeZone)})),b=E[0]?.from,S=e=>{let a=m[e],t=m[e+1];if(!a?.end||!t)return!1;let r=(0,i.diffLocalMinutes)(a.end,t.start);return r>=0&&r<720};m.forEach((a,t)=>{let{from:r,to:n}=E[t];t>0&&r&&r!==b&&!S(t-1)&&r!==E[t-1].to&&(d(a.start,r),l(a.from,r));let o=h({index:t,count:m.length,start:a.start,to:n,origin:b,home:u},e.endDate);if(!n||o||S(t))return;l(a.to,n),d(a.end??a.start,n);let s=(0,i.datePart)(a.end??a.start),c=m[t+1]?(0,i.datePart)(m[t+1].start):void 0,A=c&&(0,i.isValidISODate)(c)&&c>s?c:(0,i.addDays)(s,1);(0,i.isValidISODate)(s)&&p.push({from:s,to:A,countryCode:n})});let M=new Map(n.map(e=>[e.id,e])),C=[];for(let e of r.filter(a.isStay).sort(y)){let a=e.placeId?M.get(e.placeId):void 0,r=A(a)?a:A(e.location)?e.location:void 0,n=(0,i.datePart)(e.start),o=(0,t.countryCodeFromAddress)(a?.address)??(0,t.countryCodeFromAddress)(e.location?.name)??(r?f(r,s):p.find(e=>e.from===n)?.countryCode);if(!o)continue;d(e.start,o),l(r,o);let u=e.end?(0,i.datePart)(e.end):(0,i.addDays)(n,1);(0,i.isValidISODate)(n)&&(0,i.isValidISODate)(u)&&(0,i.diffDays)(n,u)>0&&C.push({from:n,to:u,countryCode:o})}let k=[];for(let e of[u,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!k.includes(e)&&k.length<8&&k.push(e);return{countries:k,stays:C,visits:p,anchors:s}},"tripYears",0,function(e){let a=(0,i.parseISODate)(e.startDate).year,t=(0,i.parseISODate)(e.endDate).year,r=[];for(let e=a;e<=t&&r.length<3;e++)r.push(e);return r}])},72708,e=>{"use strict";var a=e.i(99506),t=e.i(25395);e.s(["JOURNAL_MOODS",0,[1,2,3,4,5],"MAX_BACKUP_PHOTO_CHARS",0,8e6,"MAX_CAPTION_CHARS",0,300,"MAX_HIGHLIGHTS",0,12,"MAX_HIGHLIGHT_CHARS",0,80,"MAX_JOURNAL_TEXT",0,2e4,"MAX_JOURNAL_TITLE",0,200,"MAX_PHOTOS_PER_ENTRY",0,40,"MAX_SOURCE_PHOTO_BYTES",0,5e7,"MAX_SOURCE_PHOTO_PIXELS",0,5e7,"MAX_TRIP_PHOTO_BYTES",0,25e7,"PHOTO_MAX_EDGE",0,1600,"PHOTO_QUALITY",0,.82,"THUMB_MAX_EDGE",0,320,"THUMB_QUALITY",0,.72,"addHighlight",0,function(e,a){let t=a.replace(/\s+/g," ").trim().slice(0,80);return!t||e.length>=12||e.some(e=>e.toLocaleLowerCase()===t.toLocaleLowerCase())?[...e]:[...e,t]},"entryHasContent",0,function(e){return!!(e.title?.trim()||e.text.trim()||e.mood||e.highlights?.length||e.placeIds?.length||e.photos.length)},"entryRoutePoints",0,function(e,a,r={}){let i=[];for(let t of e.placeIds??[]){let e=a.get(t);e&&i.push({id:`place:${e.id}`,lat:e.lat,lng:e.lng,name:e.name,kind:"place"})}if(!1===r.photos)return i;let n=[...i];for(let a of e.photos.filter(e=>void 0!==e.lat&&void 0!==e.lng).sort((e,a)=>(e.takenAt??"")<(a.takenAt??"")?-1:+((e.takenAt??"")>(a.takenAt??""))))n.some(e=>.15>(0,t.haversineKm)(e,a))||i.push({id:`photo:${a.id}`,lat:a.lat,lng:a.lng,kind:"photo"});return i},"estimateBase64Bytes",0,function(e){return 4*Math.ceil(e/3)},"fitWithin",0,function(e,a,t){if(!(e>0)||!(a>0)||!(t>0))return{width:0,height:0};let r=Math.min(1,t/Math.max(e,a));return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(a*r))}},"hasPhotoLocations",0,function(e){return e.some(e=>e.photos.some(e=>void 0!==e.lat&&void 0!==e.lng))},"journalDays",0,function(e,t,r){let i=(0,a.tripPhase)(e,r),n=i.today,o=new Map;for(let e of t){let a=o.get(e.date);(!a||a.updatedAt<e.updatedAt)&&o.set(e.date,e)}let s=(0,a.tripDays)(e).map((e,t)=>{let r,s=o.get(e);return{date:e,index:t,state:(r=(0,a.compareDates)(e,n),"during"===i.phase?0===r?"today":r<0?"past":"future":"after"===i.phase?"past":"future"),...s?{entry:s}:{}}}),l=new Set(s.map(e=>e.date)),u=[...o.values()].filter(e=>!l.has(e.date)).sort((e,t)=>(0,a.compareDates)(e.date,t.date)).map(t=>({date:t.date,index:(0,a.diffDays)(e.startDate,t.date),state:"past",entry:t}));return"during"!==i.phase?[...s,...u]:[...s.filter(e=>"today"===e.state),...s.filter(e=>"past"===e.state).reverse(),...s.filter(e=>"future"===e.state),...u]},"mergeJournalEntries",0,function(e,a){let t=new Set(e.photos.map(e=>e.id)),r=new Set(e.photos.map(e=>e.blobKey)),i=a.photos.filter(e=>!t.has(e.id)&&!r.has(e.blobKey));return 0===i.length?e:{...e,photos:[...e.photos,...i].slice(0,40)}},"movePhoto",0,function(e,a,t){let r=e.findIndex(e=>e.id===a);if(r<0)return[...e];let i=[...e],[n]=i.splice(r,1);return i.splice(Math.max(0,Math.min(i.length,t)),0,n),i},"photoAlt",0,function(e,a){return e.caption?.trim()||a},"projectPoints",0,function(e,a,t,r=16){if(0===e.length)return[];let i=e.map(e=>{let a=Math.max(-85,Math.min(85,e.lat));return{x:(e.lng+180)/360,y:(1-Math.log(Math.tan(Math.PI/4+a*Math.PI/360))/Math.PI)/2}}),n=i.map(e=>e.x),o=i.map(e=>e.y),s=Math.min(...n),l=Math.min(...o),u=Math.max(...n)-s,c=Math.max(...o)-l,d=a-2*r,p=t-2*r,A=0===u&&0===c?0:Math.min(u?d/u:1/0,c?p/c:1/0),f=r+(d-u*A)/2,m=r+(p-c*A)/2;return i.map(e=>({x:Math.round((f+(e.x-s)*A)*10)/10,y:Math.round((m+(e.y-l)*A)*10)/10}))},"referencedPhotoKeys",0,function(e){return new Set(e.flatMap(e=>e.photos.map(e=>e.blobKey)))},"suggestedPlaceIds",0,function(e,a,t){let r=[];for(let i of e.filter(e=>e.date===a&&e.placeId).sort((e,a)=>e.order<a.order?-1:e.order>a.order?1:e.id<a.id?-1:1)){let e=i.placeId?t.get(i.placeId):void 0;e&&"stay"!==e.category&&!r.includes(e.id)&&r.push(e.id)}return r},"textBlocks",0,function(e){return e.replace(/\r\n?/g,"\n").split(/\n\s*\n/).map(e=>e.split("\n").map(e=>e.trimEnd()).filter((e,a,t)=>e.length>0||a>0&&a<t.length-1)).filter(e=>e.some(e=>e.trim().length>0))}])},18037,e=>{"use strict";let a=/^[A-Za-z0-9_-]{4,40}$/,t=/[\u0000-\u0008\u000B-\u001F\u007F-\u009F‪-‮⁦-⁩﻿]/g,r=/<!--[\s\S]*?-->|<\/?[A-Za-z!?][^<>]*>/g;function i(e,a,n=!1){if("string"!=typeof e)return;let o=e.normalize("NFC").replace(r," ").replace(t,""),s=Array.from(o=(o=n?o.replace(/\r\n?/g,"\n").replace(/[^\S\n]+/g," ").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n"):o.replace(/\s+/g," ")).trim());return s.length>a&&(o=s.slice(0,a).join("").trim()),o||void 0}let n=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),o=e=>"string"==typeof e&&e.length<=40&&!Number.isNaN(Date.parse(e));function s(e){if(!n(e)||"string"!=typeof e.by||!a.test(e.by)||!o(e.at))return;let t=i(e.name,60),r=i(e.note,500,!0);return{by:e.by,...t?{name:t}:{},...r?{note:r}:{},at:e.at}}function l(e){if(!n(e)||"string"!=typeof e.by||!a.test(e.by)||!o(e.at)||1!==e.value&&-1!==e.value)return;let t=i(e.name,60);return{by:e.by,...t?{name:t}:{},value:e.value,at:e.at}}function u(e){if(n(e)&&("recommendations"===e.list||"votes"===e.list)&&"string"==typeof e.by&&a.test(e.by)&&o(e.at))return{list:e.list,by:e.by,at:e.at}}let c=e=>JSON.stringify([e.at,"value"in e?e.value:0,e.name??"","note"in e?e.note??"":""]);function d(e,a,t){let r=new Map;for(let a of e)for(let e of a??[]){let a=r.get(e.by);r.set(e.by,a?function(e,a){let t=Date.parse(e.at),r=Date.parse(a.at);return t!==r?t>r?e:a:c(e)>=c(a)?e:a}(a,e):e)}let i=[...r.values()].filter(e=>{let a=t?.get(e.by);return void 0===a||Date.parse(e.at)>a}).sort((e,a)=>Date.parse(e.at)-Date.parse(a.at)||(e.by<a.by?-1:+(e.by>a.by)));return i.length>a?i.slice(i.length-a):i}let p=e=>`${e.list}\u001f${e.by}`;function A(e){let a=new Map;for(let t of e)for(let e of t??[]){let t=a.get(p(e));(!t||Date.parse(e.at)>Date.parse(t.at)||Date.parse(e.at)===Date.parse(t.at)&&e.at>t.at)&&a.set(p(e),e)}let t=[...a.values()].sort((e,a)=>Date.parse(e.at)-Date.parse(a.at)||(p(e)<p(a)?-1:+(p(e)>p(a))));return t.length>100?t.slice(t.length-100):t}function f(e,a){let t=new Map;for(let r of e??[])r.list===a&&t.set(r.by,Math.max(t.get(r.by)??-1/0,Date.parse(r.at)));return t}function m(e){let a=A(e.map(e=>e.friendRemovals)),t=d(e.map(e=>e.recommendations),20,f(a,"recommendations")),r=d(e.map(e=>e.votes),50,f(a,"votes"));return{...t.length?{recommendations:t}:{},...r.length?{votes:r}:{},...a.length?{friendRemovals:a}:{}}}function g(e,a){let{recommendations:t,votes:r,friendRemovals:i,...n}=e;return{...n,...a}}let h=["recommendations","votes"],y=(e,a)=>new Date(Math.max(Date.parse(e),a+1)).toISOString();function E(e,a,t,r){"recommendations"===a?e.recommendations=[...e.recommendations.filter(e=>e.by!==t),...r?[r]:[]]:e.votes=[...e.votes.filter(e=>e.by!==t),...r?[r]:[]]}e.s(["MAX_FRIEND_NAME_CHARS",0,60,"MAX_FRIEND_NOTE_CHARS",0,500,"RESPONDER_ID_RE",0,a,"cleanText",0,i,"friendListOk",0,function(e){return void 0===e||Array.isArray(e)},"mergePlaceFriends",0,function(e,a){return a.recommendations?.length||a.votes?.length||a.friendRemovals?.length?g(e,m([e,a])):e},"putResponder",0,function(e,a,t,r){let i={recommendations:e.recommendations??[],votes:e.votes??[]},n={};for(let o of h){let s=t[o];if(!s)continue;let l=f(e.friendRemovals,o).get(a),u=void 0!==l&&Date.parse(s.at)<=l?{...s,at:y(r,l)}:s;"recommendations"===o?n.recommendations=u:n.votes=u,E(i,o,a,u)}return{fields:m([{...i,...e.friendRemovals?{friendRemovals:e.friendRemovals}:{}}]),written:n}},"sanitizeFriendRemovals",0,function(e){return Array.isArray(e)?A([e.slice(0,400).map(u).filter(e=>!!e)]):[]},"sanitizeRecommendations",0,function(e){return Array.isArray(e)?d([e.slice(0,80).map(s).filter(e=>!!e)],20):[]},"sanitizeVotes",0,function(e){return Array.isArray(e)?d([e.slice(0,200).map(l).filter(e=>!!e)],50):[]},"undoResponder",0,function(e,a,t,r,i){let n={recommendations:e.recommendations??[],votes:e.votes??[]},o=[];for(let e of h){let s=t[e];if(!s)continue;let l=("recommendations"===e?n.recommendations:n.votes).find(e=>e.by===a);if(l&&Date.parse(l.at)>Date.parse(s.at))continue;let u=y(i,Date.parse(s.at)),c=r[e];c||o.push({list:e,by:a,at:u}),E(n,e,a,c?{...c,at:u}:void 0)}return m([{...n,friendRemovals:A([e.friendRemovals,o])}])},"voteTally",0,function(e){let a=0,t=0;for(let r of e??[])1===r.value?a++:t++;return{up:a,down:t}},"withFriendFields",0,g])},40678,67514,e=>{"use strict";var a=e.i(41478),t=e.i(72708),r=e.i(18037);let i=["places","items","bookings","expenses","checklist","journal","documents"],n=["trips",...i];function o(e,a){return[...new Set([...Object.keys(e),...Object.keys(a)])].filter(t=>"updatedAt"!==t&&"createdAt"!==t&&u(e[t])!==u(a[t])).sort()}function s(){return{records:{trips:[],places:[],items:[],bookings:[],expenses:[],checklist:[],journal:[],documents:[]},tombstones:[]}}function l(e){let{blob:a,data:t,...r}=e;return r}function u(e){if(null===e||"object"!=typeof e)return JSON.stringify(e)??"null";if(Array.isArray(e))return`[${e.map(e=>void 0===e?"null":u(e)).join(",")}]`;let a=Object.keys(e).filter(a=>void 0!==e[a]).sort();return`{${a.map(a=>`${JSON.stringify(a)}:${u(e[a])}`).join(",")}}`}let c=e=>{let a=Date.parse(e);return Number.isNaN(a)?0:a},d=(e,a)=>`${e}\u001f${a}`;function p(e,a){return"trips"===e?a.id:a.tripId}function A(e,a,i){let n,o;if(a===i)return a;let s=c(a.updatedAt),l=c(i.updatedAt);if(s!==l)[n,o]=s>l?[a,i]:[i,a];else{let e=u(a),t=u(i);if(e===t)return a;[n,o]=e>t?[a,i]:[i,a]}return"journal"===e?(0,t.mergeJournalEntries)(n,o):"places"===e?(0,r.mergePlaceFriends)(n,o):n}function f(e,a){if(e===a)return e;let t=c(e.deletedAt),r=c(a.deletedAt);return t!==r?t>r?e:a:u(e)>=u(a)?e:a}function m(e){let a=new Map;for(let t of n)for(let r of e.records[t]){let e=d(t,r.id),i=a.get(e);i?i.record=i.record?A(t,i.record,r):r:a.set(e,{table:t,id:r.id,record:r})}for(let t of e.tombstones){if("savedPlaces"===t.table)continue;let e=d(t.table,t.id),r=a.get(e);r?r.tombstone=r.tombstone?f(r.tombstone,t):t:a.set(e,{table:t.table,id:t.id,tombstone:t})}return a}let g=["trips","places","bookings","items","expenses","checklist","journal","documents","journalPhotos"],h={items:{field:"placeId",parent:"places"},documents:{field:"bookingId",parent:"bookings"}};function y(e,a){let t=h[e];return t?a[t.field]:void 0}let E=()=>({added:0,updated:0,deleted:0,keptLocal:0});function b(e){if(e.isDemo)return`${e.destination.lat.toFixed(1)},${e.destination.lng.toFixed(1)}`}e.s(["CHILD_TABLES",0,i,"RECORD_TABLES",0,n,"canonicalJson",0,u,"changedFields",0,o,"clampSnapshot",0,function(e,a){let t=a.getTime(),r=a.toISOString(),i=e=>{let a=c(e.updatedAt)>t,i=c(e.createdAt)>t;return a||i?{...e,...a?{updatedAt:r}:{},...i?{createdAt:r}:{}}:e},o={};for(let a of n)o[a]=e.records[a].map(i);return{records:o,tombstones:e.tombstones.map(e=>c(e.deletedAt)>t?{...e,deletedAt:r}:e)}},"documentMeta",0,l,"dropDemoDuplicates",0,function(e,a){let t=new Map;for(let e of a){let a=b(e);if(!a)continue;let r=t.get(a)??new Set;r.add(e.id),t.set(a,r)}let r=new Set;for(let a of e.records.trips){let e=b(a),i=e?t.get(e):void 0;i&&!i.has(a.id)&&r.add(a.id)}if(!r.size)return{snapshot:e,dropped:[]};let i={};for(let a of n)i[a]=e.records[a].filter(e=>!r.has(p(a,e)));return{snapshot:{records:i,tombstones:e.tombstones.filter(e=>!r.has(e.tripId))},dropped:[...r].sort()}},"duplicateDemoTrips",0,function(e){let a=new Map;for(let t of e){let e=b(t);e&&a.set(e,[...a.get(e)??[],t.id])}return[...a.values()].flatMap(e=>e.sort().slice(1)).sort()},"emptySnapshot",0,s,"pickTombstone",0,f,"planMerge",0,function(e,a,t={}){let r=m(e),i=m(a),n=function(e,a){let t=new Map;for(let r of new Set([...e.keys(),...a.keys()])){let i=e.get(r),n=a.get(r),o=i??n,s=i?.record&&n?.record?A(o.table,i.record,n.record):i?.record??n?.record,l=i?.tombstone&&n?.tombstone?f(i.tombstone,n.tombstone):i?.tombstone??n?.tombstone;t.set(r,{table:o.table,id:o.id,...s?{record:s}:{},...l?{tombstone:l}:{}})}let r=new Map;for(let e of t.values()){let a=r.get(e.table);a?a.push(e):r.set(e.table,[e])}let i=new Map,n=new Map,o=(e,a)=>void 0!==a&&(n.get(e)?.has(a)??!1),s=new Set,l=new Map,u=new Set((r.get("journalPhotos")??[]).map(e=>e.id));for(let e of g){let a=new Set;for(let t of(n.set(e,a),r.get(e)??[])){let r,{record:n}=t,{tombstone:A}=t,g=n?p(e,n):A?.tripId;if("trips"===e)r=A?{tombstone:A}:n?{record:n}:{},A&&s.add(t.id);else if(void 0!==g&&s.has(g))r={};else if(n&&!o("trips",g))r=A?{tombstone:A}:{};else if(n&&void 0!==y(e,n)&&!o(h[e].parent,y(e,n))){let a=l.get(`${h[e].parent}:${y(e,n)}`),t=a?{table:e,id:n.id,tripId:g,deletedAt:a.deletedAt}:void 0,i=A&&t?f(A,t):A??t;r=i?{tombstone:i}:{}}else{var m,E;n&&(n=function(e,a,t,r){if("bookings"===e){if(void 0===a.placeId||t("places",a.placeId))return a;let{placeId:e,...r}=a;return r}if("expenses"===e){if(void 0===a.bookingId||t("bookings",a.bookingId))return a;let{bookingId:e,...r}=a;return r}if("journal"===e){let e=a;if(e.photos.some(e=>r.has(e.id))&&(e={...e,photos:e.photos.filter(e=>!r.has(e.id))}),e.placeIds&&e.placeIds.some(e=>!t("places",e))){let{placeIds:a,...r}=e,i=a.filter(e=>t("places",e));e=i.length?{...r,placeIds:i}:r}return e}return a}(e,n,o,u)),m=n,E=n?c(n.updatedAt):0,r=m&&A?c(A.deletedAt)>=E?{tombstone:A}:{record:m}:m?{record:m}:A?{tombstone:A}:{}}r.record?a.add(t.id):("places"===e||"bookings"===e)&&r.tombstone&&l.set(`${e}:${t.id}`,r.tombstone),(r.record||r.tombstone)&&i.set(d(e,t.id),{table:e,id:t.id,...r})}}return i}(r,i),l=t.since?c(t.since):void 0,b={put:[],remove:[],putTombstones:[],removeTombstones:[],tripIds:[],summary:{trips:[],conflicts:[],totals:{...E(),tripsAdded:0,tripsDeleted:0,tripsUpdated:0},changed:!1},result:function(e){let a=s();for(let t of[...e.keys()].sort()){let r=e.get(t);r.record&&a.records[r.table].push(r.record),r.tombstone&&a.tombstones.push(r.tombstone)}return a}(n)},S=new Set,M=new Map,C=(e,a,t)=>{let r,i=((r=M.get(e))||(r={tripId:e,title:"",status:"unchanged",byTable:{},...E()},M.set(e,r)),r);i[t]+=1;let n=i.byTable[a]??=E();n[t]+=1};for(let e of[...new Set([...r.keys(),...n.keys(),...i.keys()])].sort()){let a=r.get(e),t=n.get(e),s=i.get(e),d=a??t??s,A=d.table,f=a?.tombstone,m=t?.tombstone;if(m&&(!f||u(f)!==u(m))?(b.putTombstones.push(m),S.add(m.tripId)):f&&!m&&(b.removeTombstones.push({table:A,id:d.id}),S.add(f.tripId)),"journalPhotos"===A)continue;let g=a?.record,h=t?.record,y=s?.record,E=h?p(A,h):g?p(A,g):y?p(A,y):(f??m??s?.tombstone)?.tripId;if(void 0===E)continue;let M=h?u(h):void 0;if(g&&y&&h){let e=u(g),a=u(y),t=e=>c(e.updatedAt)>(l??c(e.createdAt)),r=e!==a&&t(g)&&t(y)?o(g,y):[];r.length&&b.summary.conflicts.push({table:A,id:d.id,tripId:E,label:function(e,a){let t=(...e)=>e.map(e=>a[e]).find(e=>"string"==typeof e&&e.trim().length>0);return"expenses"===e?t("note")??`${String(a.amount??"")} ${String(a.currency??"")}`.trim():"journal"===e?t("title","date")??"":t("title","name","text","date")??""}(A,h),kept:M===e?"local":M===a?"remote":"merged",fields:r})}h&&!g?(b.put.push({table:A,record:h}),C(E,A,"added"),S.add(E)):g&&!h?(b.remove.push({table:A,id:d.id,tripId:p(A,g)}),C(E,A,"deleted"),S.add(E)):g&&h&&u(g)!==M?(b.put.push({table:A,record:h}),C(E,A,"updated"),S.add(E)):y&&u(y)!==M&&C(E,A,"keptLocal")}for(let[e,a]of M){let t=d("trips",e),o=r.get(t)?.record,s=n.get(t)?.record,l=i.get(t)?.record;if(!o&&!s){l&&r.get(t)?.tombstone?Object.assign(a,{title:l.title,status:"keptDeleted",byTable:{},...E()}):M.delete(e);continue}a.title=(s??o)?.title??"",a.status=o?s?a.added+a.updated+a.deleted>0?"updated":"unchanged":"deleted":"added"}for(let[e,a]of n)"trips"===a.table&&a.record&&i.has(e)&&(M.has(a.id)||M.set(a.id,{tripId:a.id,title:a.record.title,status:"unchanged",byTable:{},...E()}));let k=b.summary.totals;for(let e of M.values())k.added+=e.added,k.updated+=e.updated,k.deleted+=e.deleted,k.keptLocal+=e.keptLocal,"added"===e.status?k.tripsAdded+=1:"deleted"===e.status?k.tripsDeleted+=1:"updated"===e.status&&(k.tripsUpdated+=1);let B={added:0,updated:1,deleted:2,keptDeleted:3,unchanged:4};return b.summary.trips=[...M.values()].sort((e,a)=>B[e.status]-B[a.status]||e.title.localeCompare(a.title)||(e.tripId<a.tripId?-1:1)),b.summary.changed=b.put.length+b.remove.length>0,b.tripIds=[...S].sort(),b},"snapshotFromBundles",0,function(e,a=[]){let t=s();for(let a of e)for(let e of(t.records.trips.push(a.trip),i))"documents"===e?t.records.documents.push(...(a.documents??[]).map(l)):t.records[e].push(...a[e]??[]);return t.tombstones.push(...a),t},"snapshotSize",0,function(e){return n.reduce((a,t)=>a+e.records[t].length,0)},"snapshotTripIds",0,function(e){let a=new Set;for(let t of n)for(let r of e.records[t])a.add(p(t,r));for(let t of e.tombstones)a.add(t.tripId);return[...a]}],67514);var S=e.i(13180);let M=e=>{let a=Date.parse(e);return Number.isNaN(a)?0:a},C=e=>"string"==typeof e&&e.length<=40&&!Number.isNaN(Date.parse(e));function k(e){if("homeCountry"===e||"workdays"===e)return!0;if(e.startsWith("allowance:")){let a=e.slice(10);return/^\d{4}$/.test(a)&&Number(a)>=S.MIN_YEAR&&Number(a)<=S.MAX_YEAR}if(e.startsWith("counted:")){let a=e.slice(8);return a.length>0&&a.length<=100}return!1}function B(e,t){return null===t||("homeCountry"===e?(0,a.isCountryCode)(t):"workdays"===e?Array.isArray(t)&&t.length>0&&t.length<=7&&t.every(S.isWeekday):e.startsWith("allowance:")?(0,S.isValidAllowance)(t):!!e.startsWith("counted:")&&"boolean"==typeof t)}let T=JSON.stringify((0,S.normalizeWorkdays)(void 0));function P(e){let a=new Map;e.homeCountry&&a.set("homeCountry",e.homeCountry);let t=(0,S.normalizeWorkdays)(e.leave.workdays);for(let[r,i]of(JSON.stringify(t)!==T&&a.set("workdays",t),Object.entries(e.leave.allowances)))a.set(`allowance:${r}`,i);for(let[t,r]of Object.entries(e.leave.counted))a.set(`counted:${t}`,r);return a}e.s(["applySettingEntries",0,function(e,a){let t=e.homeCountry,r={...e.leave.allowances},i={...e.leave.counted},n=e.leave.workdays;for(let[e,o]of Object.entries(a)){if(!k(e)||!B(e,o.value))continue;let{value:a}=o;if("homeCountry"===e)t=a??null;else if("workdays"===e)n=(0,S.normalizeWorkdays)(a);else if(e.startsWith("allowance:")){let t=e.slice(10);null===a?delete r[t]:r[t]=a}else{let t=e.slice(8);null===a?delete i[t]:i[t]=a}}return{homeCountry:t,leave:(0,S.parseLeaveSettings)({workdays:n,allowances:r,counted:i})}},"changedSettingKeys",0,function(e,a){let t=P(e),r=P(a);return[...new Set([...t.keys(),...r.keys()])].filter(e=>u(t.get(e)??null)!==u(r.get(e)??null))},"clampSettings",0,function(e,a){let t=a.getTime(),r={};for(let[i,n]of Object.entries(e))r[i]=M(n.updatedAt)>t?{...n,updatedAt:a.toISOString()}:n;return r},"parseSettingsSection",0,function(e){if("object"!=typeof e||null===e||Array.isArray(e))return;let a=e.entries;if("object"!=typeof a||null===a||Array.isArray(a))return;let t={};for(let[e,r]of Object.entries(a).slice(0,5e3)){if(!k(e)||"object"!=typeof r||null===r||Array.isArray(r))continue;let{value:a,updatedAt:i}=r;C(i)&&B(e,a)&&(t[e]={value:"workdays"===e&&null!==a?(0,S.normalizeWorkdays)(a):a,updatedAt:new Date(M(i)).toISOString()})}return t},"planSettingsMerge",0,function(e,a,t={}){let r={},i=[],n=[],o={...e};for(let[s,l]of Object.entries(a)){if(t.ignoreClears&&null===l.value)continue;let a=e[s],c=a?function(e,a){let t=M(e.updatedAt),r=M(a.updatedAt);return t!==r?t>r?e:a:u(e)>=u(a)?e:a}(a,l):l,d=u(a?.value??null)===u(l.value);if(c===a){d||n.push(s);continue}(!a||u(a)!==u(l))&&(r[s]=l,o[s]=l,d||i.push(s))}return{put:r,changed:i.sort(),keptLocal:n.sort(),result:o}},"settingsEntries",0,function(e,a){let t=P(e),r={};for(let e of[...new Set([...t.keys(),...Object.keys(a).filter(k)])].sort()){let i=a[e],n=t.has(e)?t.get(e):null;"workdays"===e&&null===n&&(n=(0,S.normalizeWorkdays)(void 0)),r[e]={value:n,updatedAt:C(i)?i:"1970-01-01T00:00:00.000Z"}}return r}],40678)},13180,e=>{"use strict";var a=e.i(99506),t=e.i(38520);let r=[1,2,3,4,5,6,7],i=[1,2,3,4,5];function n(e){return"number"==typeof e&&Number.isInteger(e)&&e>=1&&e<=7}function o(e){if(!Array.isArray(e))return[...i];let a=[...new Set(e.filter(n))].sort((e,a)=>e-a);return a.length?a:[...i]}function s(e,t){return t.workdays.has((0,a.isoWeekday)(e))&&!t.holidays.has(e)}function l(e,t,r){return(0,a.isValidISODate)(e)&&(0,a.isValidISODate)(t)&&!(t<e)?(0,a.dateRange)(e,t).filter(e=>s(e,r)):[]}function u(e){return{start:e.start,end:e.end,daysOff:e.daysOff,leave:e.leave,holidays:e.holidays}}let c=Object.freeze({workdays:[...i],allowances:{},counted:{}});function d(e){return"number"==typeof e&&Number.isInteger(e)&&e>=0&&e<=366}let p=new Set(["US","CA","MX","BR","JP","KR","TW","HK","IL","IN","PH","ZA","AU","SA","PE","CO","VE","AR","GT","TH"]);e.s(["DEFAULT_LEAVE_SETTINGS",0,c,"MAX_ALLOWANCE",0,366,"MAX_YEAR",0,2075,"MIN_YEAR",0,1975,"firstDayOfWeek",0,function(e,a){let t;try{t=new Intl.Locale(e)}catch{return 1}let r=a??t;try{let e="function"==typeof r.getWeekInfo?r.getWeekInfo.call(t):r.weekInfo;if(e&&n(e.firstDay))return e.firstDay}catch{}let i=t.region;try{i??=t.maximize().region}catch{i=void 0}return i&&p.has(i)?7:1},"homeHolidays",0,function(e,a){let{byDate:r}=(0,t.interpretHolidays)(e,a),i=new Set;for(let[e,a]of r)a.some(e=>!0===e.status)&&i.add(e);return{off:i,byDate:new Map(r)}},"isTripCounted",0,function(e,a){return e.counted[a.id]??!a.isDemo},"isValidAllowance",0,d,"isWeekday",0,n,"leaveDaysIn",0,l,"monthWeeks",0,function(e,t,r=1){let i=(0,a.toISODate)(e,t,1),n=((0,a.isoWeekday)(i)-r+7)%7,o=(0,a.diffDays)(i,(0,a.toISODate)(e,t+1,1)),s=[...Array(n).fill(null),...Array.from({length:o},(e,t)=>(0,a.addDays)(i,t))];for(;s.length%7;)s.push(null);let l=[];for(let e=0;e<s.length;e+=7)l.push(s.slice(e,e+7));return l},"normalizeWorkdays",0,o,"orderedRange",0,function(e,a){return e<=a?{start:e,end:a}:{start:a,end:e}},"parseLeaveSettings",0,function(e){if(!e||"object"!=typeof e||Array.isArray(e))return{...c,workdays:[...i]};let a={};if(e.allowances&&"object"==typeof e.allowances&&!Array.isArray(e.allowances))for(let[t,r]of Object.entries(e.allowances)){let e=Number(t);/^\d{4}$/.test(t)&&e>=1975&&e<=2075&&d(r)&&(a[t]=r)}let t={};if(e.counted&&"object"==typeof e.counted&&!Array.isArray(e.counted))for(let[a,r]of Object.entries(e.counted).slice(0,2e3))"boolean"==typeof r&&a.length>0&&a.length<=100&&(t[a]=r);return{workdays:o(e.workdays),allowances:a,counted:t}},"shouldSuggestNextYear",0,function(e,a,t){return Number(a.slice(0,4))===e&&!(e>=2075)&&(t<2||Number(a.slice(5,7))>=12)},"splitBridges",0,function(e,a){return{upcoming:e.filter(e=>e.end>=a),past:e.filter(e=>e.end<a).reverse()}},"suggestBridges",0,function(e,t,r={}){let i=Math.max(1,Math.min(10,Math.floor(r.maxLeave??5))),n=r.minDaysOff??4,o=r.minRatio??2;if(!Number.isInteger(e)||e<1975||e>2075||0===t.workdays.size)return[];let l=(0,a.toISODate)(e,1,1),c=(0,a.toISODate)(e,12,31),d=(0,a.addDays)(l,-16),p=(0,a.addDays)(c,16),A=(0,a.dateRange)(d,p),f=A.map(e=>s(e,t)),m=A.map(e=>t.holidays.has(e)&&t.workdays.has((0,a.isoWeekday)(e))),g=[];for(let e=1;e<A.length-1;e++){if(!f[e-1])continue;let a=0,t=null,r=!1;for(let s=e;s<A.length-1&&s-e<16&&(f[s]&&(a+=1,(A[s]<l||A[s]>c)&&(r=!0)),!(a>i));s++){if(m[s]&&null===t&&(t=A[s]),!0!==f[s+1]||0===a||null===t||r)continue;let i=s-e+1;if(i<n||i<a*o)continue;let l=A.slice(e,s+1);g.push({start:A[e],end:A[s],daysOff:i,leave:l.filter((a,t)=>f[e+t]),holidays:l.filter((a,t)=>m[e+t]),anchor:t})}}let h=new Map;for(let e of g)h.set(e.anchor,[...h.get(e.anchor)??[],e]);let y=[],E=e=>e.daysOff/e.leave.length,b=e=>e.daysOff-e.leave.length;for(let e of h.values()){let a=[...e].sort((e,a)=>E(a)-E(e)||a.daysOff-e.daysOff||(e.start<a.start?-1:1))[0],t=[...e].sort((e,a)=>b(a)-b(e)||e.leave.length-a.leave.length||(e.start<a.start?-1:1))[0];y.push(u(a)),t!==a&&b(t)>b(a)&&y.push(u(t))}let S=[...new Map(y.map(e=>[`${e.start}|${e.end}`,e])).values()];return S.filter(e=>!S.some(a=>a!==e&&a.start<=e.start&&a.end>=e.end&&a.leave.length<=e.leave.length&&(a.start!==e.start||a.end!==e.end))).sort((e,a)=>e.start<a.start?-1:e.start>a.start?1:e.end<a.end?-1:1)},"tripOverlaps",0,function(e){let t=[...e.filter(e=>(0,a.isValidISODate)(e.startDate)&&(0,a.isValidISODate)(e.endDate)&&e.endDate>=e.startDate)].sort((e,a)=>e.startDate<a.startDate?-1:e.startDate>a.startDate?1:e.id<a.id?-1:1),r=[];for(let e=0;e<t.length;e++){let i=t[e];for(let n=e+1;n<t.length;n++){let e=t[n];if(e.startDate>i.endDate)break;let o=e.startDate,s=i.endDate<e.endDate?i.endDate:e.endDate,l=(0,a.diffDays)(o,s)+1,u=1===l&&(i.endDate===o&&e.startDate===o||e.endDate===o&&i.startDate===o);l>=1&&!u&&r.push({a:i.id,b:e.id,start:o,end:s,days:l})}}return r.sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))},"weekdayOrder",0,function(e=1){return r.map((a,t)=>(e-1+t)%7+1)},"workCalendar",0,function(e=i,a=[]){return{workdays:new Set(e),holidays:new Set(a)}},"yearLeave",0,function(e,t,r,i){let n=(0,a.toISODate)(t,1,1),o=(0,a.toISODate)(t,12,31),s=new Map,u=new Map,c=[];for(let t of e){if(!(0,a.isValidISODate)(t.startDate)||!(0,a.isValidISODate)(t.endDate)||t.endDate<n||t.startDate>o)continue;let e=l(t.startDate<n?n:t.startDate,t.endDate>o?o:t.endDate,i);if(u.set(t.id,e),t.counted)for(let a of e)s.set(a,(s.get(a)??0)+1);c.push({id:t.id,days:e.length,shared:0,counted:t.counted})}for(let e of c)e.counted&&(e.shared=(u.get(e.id)??[]).filter(e=>(s.get(e)??0)>1).length);let d=[...s.keys()].sort(),p=d.length;return{year:t,allowance:r,used:p,remaining:null===r?null:r-p,perTrip:c,days:d}}])}]);