(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,e=>{"use strict";var a=e.i(99506),t=e.i(32751);function i(e){return"stay"===e.type}function r(e){return t.TRANSPORT_BOOKING_TYPES.includes(e.type)}function n(e){if(!e.end)return[];let t=(0,a.datePart)(e.start),i=(0,a.datePart)(e.end),r=(0,a.diffDays)(t,i),n=[];for(let e=0;e<r;e++)n.push((0,a.addDays)(t,e));return n}function o(e,t){return e.filter(i).filter(e=>e.end&&(0,a.datePart)(e.start)<=t&&t<(0,a.datePart)(e.end)).sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))[0]}function s(e,a,t){let i=e[a];if(i&&void 0!==i.lat&&void 0!==i.lng)return i;if("location"===a&&e.placeId&&t){let a=t.find(a=>a.id===e.placeId);if(a)return{name:i?.name??a.name,lat:a.lat,lng:a.lng}}return i}function l(e,a,t){var i;if(!a)return null;let r="stay"===e.type&&!!e.title.trim()&&e.title.trim()!==a.name&&((i=a.name).includes(",")||i.length>40);return{name:r?e.title.trim():a.name,...r&&a.name?{address:a.name}:{},...void 0!==a.lat?{lat:a.lat}:{},...void 0!==a.lng?{lng:a.lng}:{},bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:t}}function u(e,a){let t=e.startTimeZone??a;return{start:t,end:e.endTimeZone??(e.end?a:t)}}function c(e,t,i="UTC"){let r="start"===t?e.start:e.end??e.start,n=u(e,i)[t];return d(r.length>=16?r:`${(0,a.datePart)(r)}T00:00`,n)}function d(e,t){try{let i=(0,a.zonedTimeToInstant)(e,t).getTime();return Number.isFinite(i)?i:null}catch{return null}}function m(e,t,i,n){let o=e=>"start"===i?e.start:e.end??e.start;return e.filter(r).filter(e=>"start"===i?(0,a.datePart)(e.start)===t:e.end?(0,a.datePart)(e.end)===t:(0,a.datePart)(e.start)===t).sort((e,a)=>{let t=c(e,i,n),r=c(a,i,n);return null!==t&&null!==r&&t!==r?t-r:o(e)<o(a)?-1:+(o(e)>o(a))})}e.s(["BOOKING_ICON",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"baseLatLng",0,function(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null},"bookingInstant",0,c,"bookingZones",0,u,"buildTimeline",0,function(e,t){let r=(0,a.tripDays)(e).map((e,a)=>({kind:"day",date:e,dayIndex:a}));for(let e of t)r.push({kind:"booking",booking:e,date:(0,a.datePart)(e.start),at:e.start,edge:"start"}),i(e)&&e.end&&r.push({kind:"booking",booking:e,date:(0,a.datePart)(e.end),at:e.end,edge:"end"});let n=e=>{if("day"===e.kind)return`${e.date}|0`;let t=(0,a.timePart)(e.at)??"00:00";return`${e.date}|1|${t}|${+("end"!==e.edge)}|${e.booking.title}`};return r.sort((e,a)=>{let t=n(e),i=n(a);return t<i?-1:+(t>i)})},"dayBase",0,function(e,t,i,r){let n=o(t,(0,a.addDays)(i,-1)),u=o(t,i),d=t.filter(e=>"car"!==e.type),A=e.timeZone??"UTC",p=n?l(n,s(n,"location",r),"stay"):null;if(!p){let e=m(d,i,"end",A),t=e.filter(e=>(0,a.datePart)(e.start)!==i),n=t[t.length-1]??e[0];n&&(p=l(n,s(n,"to",r),"arrival"))}!p&&u&&(p=l(u,s(u,"location",r),(0,a.datePart)(u.start)===i?"destination":"stay"));let f=u?l(u,s(u,"location",r),"stay"):null;if(!f){let t=m(d,i,"start",A).filter(e=>p?.source!=="arrival"||p.bookingId!==e.id),n=t[t.length-1];if(n){let t=s(n,"to",r);f=i<e.endDate&&n.end&&(0,a.datePart)(n.end)===i&&(c(n,"end",A)??0)>=(c(n,"start",A)??0)&&t&&void 0!==t.lat&&void 0!==t.lng?l(n,t,"arrival"):l(n,s(n,"from",r),"departure")}}return f||(f=p),u?{start:p,end:f,stay:u}:{start:p,end:f}},"detectConflicts",0,function(e,t){let r=[];for(let e of t)e.end&&e.end<e.start&&!(e.endTimeZone||e.startTimeZone)&&r.push({type:"invalid-range",bookingId:e.id});let o=t.filter(i).filter(e=>e.end&&e.end>e.start);for(let e=0;e<o.length;e++)for(let a=e+1;a<o.length;a++){let t=o[e],i=o[a],s=new Set(n(i)),l=n(t).filter(e=>s.has(e));l.length>0&&r.push({type:"overlapping-stays",bookingIds:[t.id,i.id],nights:l})}let s=new Set(o.flatMap(n));for(let t of(0,a.tripDays)(e).slice(0,-1))s.has(t)||r.push({type:"missing-stay",date:t});return r},"isStay",0,i,"isTransport",0,r,"localInstant",0,d,"nightsOf",0,n,"stayForNight",0,o])},41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),t=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function r(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}let n=new Map;function o(e){let a=n.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}n.set(e,a)}return a}function s(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let l=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),u=0,c=null;function d(){if(c)return c;let e=o("en"),t=[];for(let r of i)for(let n of i){let i=r+n;if(!a.has(i))try{e?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&t.push(i)}catch{}}return c=t,t}function m(e){if(!e)return;let a=s(e);if(!a||a.length<2)return;let i=e.trim();if(!/^[A-Z]{2}$/.test(i))for(;;){let e=l.get(a);if(e)return e;if(u>=t.length)return;!function(e){let a=o(e);if(a)for(let e of d()){let t;try{t=a.of(e)}catch{t=void 0}if(!t||t===e)continue;let i=s(t);i&&!l.has(i)&&l.set(i,e)}}(t[u]),u+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return m(a[a.length-1])},"countryCodeFromName",0,m,"countryCodes",0,function(){return d()},"countryFromLanguages",0,function(e){let a=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of a)try{let a=new Intl.Locale(e).region?.toUpperCase();if(a&&r(a))return a}catch{}for(let e of a)try{let a=new Intl.Locale(e).maximize().region?.toUpperCase();if(a&&r(a))return a}catch{}},"countryName",0,function(e,a){try{return o(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,r])},93440,e=>{"use strict";var a=e.i(99506);let t=`
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
`,i=null;function r(){if(i)return i;for(let e of(i=new Map,t.split("\n"))){let[a,...t]=e.trim().split(" ");a&&0!==t.length&&i.set(a,t.map(e=>{let[a="",t]=e.split("@");if(!t)return{zone:a};let[i,r]=t.split(",").map(Number);return{zone:a,lat:i,lng:r}}))}return i}let n=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!n)for(let[e,a]of(n=new Map,r()))for(let{zone:t}of a)n.set(t,n.has(t)&&n.get(t)!==e?null:e);return n.get(e)??void 0}},"countryTimeZones",0,function(e){return(r().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,t){if(!t)return null;let i=(r().get(t.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(i.length<=1)return i[0]?.zone??null;let n=Math.cos(e.lat*Math.PI/180),o=null,s=1/0;for(let a of i){if(void 0===a.lat||void 0===a.lng)continue;let t=Math.abs(e.lng-a.lng);t>180&&(t=360-t);let i=Math.hypot(t*n,(e.lat-a.lat)*.5);i<s&&(s=i,o=a)}return o?.zone??i[0]?.zone??null}])},41758,e=>{"use strict";var a=e.i(12268),t=e.i(99506),i=e.i(32751);let r=(e,a)=>`booking:${e}:${a}`,n={activity:120,restaurant:90,other:60};function o(e,a){let i=(0,t.timePart)(e)??a;return i&&(0,t.isValidHHMM)(i)?(0,t.parseHHMM)(i):null}function s(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null}function l(e,a){let t=s(e.location);if(t)return{point:t,...e.location?.name?{name:e.location.name}:{}};let i=e.placeId?a.find(a=>a.id===e.placeId):void 0;return i?{point:{lat:i.lat,lng:i.lng},name:e.location?.name??i.name}:{point:null,...e.location?.name?{name:e.location.name}:{}}}let u=e=>(e??"").trim().toLowerCase();e.s(["dayEventsFor",0,function(e,c,d=[],m=[],A="UTC"){let p=m.filter(e=>e.date===c),f=new Set(p.filter(e=>"place"!==e.kind).map(e=>u(e.title)).filter(Boolean)),g=new Set(p.map(e=>e.placeId).filter(e=>!!e)),h=[];for(let a of e){if("stay"!==a.type&&f.has(u(a.title)))continue;let e=(0,t.datePart)(a.start),m=a.end?(0,t.datePart)(a.end):e,A={booking:a};if("stay"===a.type){let t=l(a,d),i={point:t.point,blocking:!1,moves:!1,...t.name?{placeName:t.name}:{}};if(e===c){let e=o(a.start,"15:00");null!==e&&h.push({...A,...i,id:r(a.id,"checkin"),kind:"checkin",start:e,end:e})}if(a.end&&m===c&&m!==e){let e=o(a.end,"11:00");null!==e&&h.push({...A,...i,id:r(a.id,"checkout"),kind:"checkout",start:e,end:e})}continue}if(a.placeId&&g.has(a.placeId))continue;let p={...a.from?.name?{fromName:a.from.name}:{},...a.to?.name?{toName:a.to.name}:{}};if("car"===a.type){let t=s(a.from)??s(a.location),i=s(a.to)??s(a.location)??t;if(e===c){let e=o(a.start,null);null!==e&&h.push({...A,...p,id:r(a.id,"pickup"),kind:"pickup",start:e,end:e,point:t,blocking:!0,moves:!1,...a.from?.name??a.location?.name?{placeName:a.from?.name??a.location?.name}:{}})}if(a.end&&m===c){let e=o(a.end,null);null!==e&&h.push({...A,...p,id:r(a.id,"dropoff"),kind:"dropoff",start:e,end:e,point:i,blocking:!0,moves:!1,...a.to?.name??a.location?.name?{placeName:a.to?.name??a.location?.name}:{}})}continue}if(i.TRANSPORT_BOOKING_TYPES.includes(a.type)){let t=s(a.from),i=s(a.to),n=o(a.start,null),l=a.end?o(a.end,null):null,u=e=>({...A,...p,id:r(a.id,"departure"),kind:"departure",start:e,end:e,point:t,after:null,blocking:!0,moves:!0}),d=e=>({...A,...p,id:r(a.id,"arrival"),kind:"arrival",start:e,end:e,point:null,after:i,blocking:!0,moves:!0});if(e===c&&m===c){if(null===n)continue;null===l||l>=n?h.push({...A,...p,id:r(a.id,"transport"),kind:"transport",start:n,end:l??n,point:t,after:a.end?i:t,blocking:!0,moves:!!a.end}):h.push(u(n),d(l))}else e===c?null!==n&&h.push(u(n)):m===c&&null!==l&&h.push(d(l));continue}if(e!==c)continue;let M=o(a.start,null);if(null===M)continue;let E=a.end&&m===c?o(a.end,null):null,k=l(a,d),y=null!==E&&E>M?E:M+(n[a.type]??60);h.push({...A,id:r(a.id,"booking"),kind:"booking",start:M,end:y,point:k.point,blocking:!0,moves:!1,...k.name?{placeName:k.name}:{}})}let M={arrival:0,checkout:1,dropoff:2,transport:3,departure:3,pickup:4,booking:5,checkin:6},E=new Map(h.map(e=>{let i,r,n;return[e,(i="arrival"===e.kind||"checkout"===e.kind||"dropoff"===e.kind,r=(0,a.bookingZones)(e.booking,A),n=`${c}T${(0,t.formatHHMM)(e.start)}`,(0,a.localInstant)(n,i?r.end:r.start)??(0,a.localInstant)(n,"UTC")??0)]}));return h.sort((e,a)=>E.get(e)-E.get(a)||e.start-a.start||M[e.kind]-M[a.kind]||(e.id<a.id?-1:+(e.id>a.id)))},"isEventId",0,e=>e.startsWith("booking:")])},44926,e=>{"use strict";var a=e.i(12268),t=e.i(99506),i=e.i(41758),r=e.i(25395),n=e.i(26944),o=e.i(14961),s=e.i(90170);function l(e){return`var(--day-${(e%8+8)%8+1})`}let u=new Set(["nature","hike","beach","viewpoint"]);function c({item:e,place:a}){return"place"===e.kind&&a?{lat:a.lat,lng:a.lng}:null}function d(e){return e.startTime&&(0,t.isValidHHMM)(e.startTime)?(0,t.parseHHMM)(e.startTime):null}function m(e,a,t){return!!e&&!!a&&(0,r.haversineKm)(e,a)>15&&t.some(e=>"checkin"===e.kind)&&!t.some(e=>e.blocking&&e.moves)}function A(e,a,t){return{key:(0,s.legKey)(e,a,t),fromId:e.id,toId:a.id,from:{lat:e.lat,lng:e.lng},to:{lat:a.lat,lng:a.lng},mode:t}}function p(e,i,s,u={}){let f,g,h=(0,a.baseLatLng)(i.start),M=(0,a.baseLatLng)(i.end),E=h?{id:(f=e.date,`base-start:${f}`),...h}:null,k=M?{id:(g=e.date,`base-end:${g}`),...M}:null,y=u.defaultMode??"car",b=u.events??[],S=i.start?.source==="arrival"?i.start.bookingId:void 0,C=i.end?.source==="departure"?i.end.bookingId:void 0,B=e=>!!e&&b.some(a=>a.booking.id===e&&"departure"===a.kind)&&b.some(a=>a.booking.id===e&&"arrival"===a.kind),v=b.filter(e=>!("departure"===e.kind&&e.booking.id===S&&B(S)||"arrival"===e.kind&&e.booking.id===C&&S!==C&&B(C))).map(({...e})=>{let a=i.start?.source==="arrival"&&i.start.bookingId===e.booking.id&&("transport"===e.kind||"arrival"===e.kind),t=!a&&i.end?.source==="departure"&&i.end.bookingId===e.booking.id&&("transport"===e.kind||"departure"===e.kind);return a?{...e,boundary:"start"}:t?{...e,boundary:"end"}:e}),L=s.start&&(0,t.isValidHHMM)(s.start)?(0,t.parseHHMM)(s.start):(0,t.parseHHMM)(o.DEFAULT_DAY_START),T=v.length?function(e,a,t,i,o,s=null){let l=a.filter(e=>"start"===e.boundary),u=a.filter(e=>"end"===e.boundary),A=u[0],p=A?a.filter(e=>!e.boundary&&!e.blocking&&e.start>A.start):[],f=a.filter(e=>!e.boundary&&!p.includes(e)),g=m(t,s,f),h=e.length,M=[],E=0,k=Math.max(i,...l.map(e=>e.end)),y=l.length?l[l.length-1]?.after??t:t,b=(a,t,i,o)=>{let s=[],l=[];for(let u=a;u<o;u++){let a=e[u],o=c(a),m=t+(o&&i?(0,r.estimateTravelMinutesExact)(i,o,a.item.travelMode):0),A=d(a.item),p=null!==A?Math.max(m,A):m;t=p+(0,n.visitMinutesFor)(a.item,a.place),o&&(i=o),l.push(p),s.push(t)}return{clock:t,prev:i,ends:s,starts:l}},S=()=>M.length?M[M.length-1]:0;for(let a of f){let i=b(E,k,y,h),n=h,l=i.ends.findIndex(e=>e>a.start);if(l>=0&&(n=E+l),!a.blocking){if(g&&("checkout"===a.kind||"checkin"===a.kind)){let n=e.map(e=>{let i=d(e.item),n=c(e);return n?(0,r.haversineKm)(n,s)<(0,r.haversineKm)(n,t)?1:-1:null!==i?i<a.start?-1:1:0}),o=i.starts.findIndex(e=>e>=a.start),l=o>=0?E+o:h,u=l,m=1/0;for(let e=E;e<=h;e++){let a=0;for(let t=E;t<h;t++)(t<e&&1===n[t]||t>=e&&-1===n[t])&&(a+=1);let t=10*a+Math.abs(e-l);t<m&&(m=t,u=e)}M.push(Math.max(u,S()));continue}if("checkout"===a.kind){M.push(Math.max(n,S()));continue}let o=i.starts.findIndex(e=>e>=a.start);M.push(Math.max(o>=0?E+o:h,S()));continue}let u=a.moves&&!!a.point&&!!a.after&&(0,r.haversineKm)(a.point,a.after)>15,m=e.map(e=>{let t=d(e.item);if(null!==t)return t<a.start?-1:1;let i=c(e);return u&&i?(0,r.haversineKm)(i,a.after)<(0,r.haversineKm)(i,a.point)?1:-1:a.moves&&null===a.after?-1:0}),A=n,p=1/0;for(let e=E;e<=h;e++){let a=0;for(let t=E;t<h;t++)(t<e&&1===m[t]||t>=e&&-1===m[t])&&(a+=1);let t=10*a+Math.abs(e-n);t<p&&(p=t,A=e)}for(let e=M.length-1;e>=0&&!f[e].blocking&&M[e]>A;e--)M[e]=A;M.push(A);let C=b(E,k,y,A);E=A;let B=C.prev&&a.point?(0,r.estimateTravelMinutesExact)(C.prev,a.point,o):0;k=Math.max(C.clock+B,a.end),y=void 0===a.after?a.point??C.prev:a.after}let C=l.map(e=>({kind:"event",event:e,id:e.id})),B=0;for(e.forEach((e,a)=>{for(;B<f.length&&M[B]<=a;){let e=f[B];C.push({kind:"event",event:e,id:e.id}),B+=1}C.push({kind:"item",resolved:e,id:e.item.id})});B<f.length;B++){let e=f[B];C.push({kind:"event",event:e,id:e.id})}for(let e of u)C.push({kind:"event",event:e,id:e.id});for(let e of p)C.push({kind:"event",event:e,id:e.id});return C}(e.items,v,h,L,y,M):e.items.map(e=>({kind:"item",resolved:e,id:e.item.id})),P=m(h,M,v.filter(e=>!e.boundary))?v.find(e=>"checkin"===e.kind):void 0,N=e.items.filter(e=>c(e)),I=i.end?.source==="departure"||i.end?.source==="arrival",D=s.returnMode??(I?y:N[N.length-1]?.item.travelMode??y),R=[],K=E,H=0,w="foot"===y||"bike"===y?"transit":y;for(let e of T){if("item"===e.kind){let a=c(e.resolved);if(!a)continue;let t={id:e.id,...a};if(H+=1,K){let i=e.resolved.item.travelMode,n=K.station&&("foot"===i||"bike"===i)&&(0,r.haversineKm)(K,a)>15;R.push(A(K,t,n?w:i))}K=t;continue}let a=e.event;if(P&&a.id===P.id&&M){let e={id:a.id,...a.point??M};K&&R.push(A(K,e,"car"===y?"car":"none")),K={id:`${a.id}:after`,...a.point??M},H+=1;continue}if("end"!==a.boundary&&a.blocking){if("start"===a.boundary){!K&&a.after&&(K={id:a.id,...a.after,station:!0});continue}if(a.point){let e={id:a.id,...a.point};H+=1,K&&R.push(A(K,e,y)),K=e}void 0!==a.after&&(K=a.after?{id:`${a.id}:after`,...a.after,station:a.moves}:null,a.after&&(H+=1))}}k&&K&&H>0&&R.push(A(K,k,D));let G=new Map,O=null;for(let e of R)k&&e.toId===k.id?O=e:G.set(e.toId,e);let _=new Map;N.forEach((e,a)=>_.set(e.item.id,a+1));let z=new Set;e.items.forEach((a,t)=>{let i=e.items[t-1];i?.item.kind==="transport"&&c(a)&&z.add(a.item.id)});let F=!!E&&!!k&&(i.start?.bookingId!==void 0&&i.start.bookingId===i.end?.bookingId||1e-4>Math.abs(E.lat-k.lat)&&1e-4>Math.abs(E.lng-k.lng));return{date:e.date,index:e.index,color:l(e.index),items:e.items,events:T.flatMap(e=>"event"===e.kind?[e.event]:[]),entries:T,defaultMode:y,base:i,meta:s,start:E,end:k,sameBase:F,legs:R,arriving:G,returnLeg:O,numbers:_,covered:z,...P?{relocation:P.id}:{}}}let f=new Set(["transport","departure","arrival","booking"]);function g(e,a,i={}){let r=e.legs.map(t=>{let i=a(t);return e.covered.has(t.toId)?{...i,minutes:0,km:0,covered:!0}:i}),l=new Map(r.map(e=>[e.spec,e])),c=new Map;for(let[a,t]of e.arriving){let e=l.get(t);e&&c.set(a,e)}let m=e.returnLeg?l.get(e.returnLeg)??null:null,A=e.meta.start&&(0,t.isValidHHMM)(e.meta.start)?e.meta.start:function(e,a){let i,r=o.DEFAULT_DAY_START,n=(e.entries??e.items.map(e=>({kind:"item",resolved:e,id:e.item.id}))).find(e=>"item"===e.kind||e.event.blocking);if(!n)return r;if("event"===n.kind){if("start"===n.event.boundary)return(0,t.formatHHMM)(n.event.end);i=n.event.start}else i=d(n.resolved.item);if(null===i)return r;let s=i-(a.get(n.id)?.minutes??0);return s<(0,t.parseHHMM)(r)?(0,t.formatHHMM)(Math.max(0,s)):r}(e,c),p=e.entries.filter(a=>"item"===a.kind||a.event.blocking||a.id===e.relocation),h=p.map(e=>{var a;let i;return"item"===e.kind?{durationMinutes:(0,n.visitMinutesFor)(e.resolved.item,e.resolved.place),...e.resolved.item.startTime?{startTime:e.resolved.item.startTime}:{}}:(i="start"===(a=e.event).boundary?a.end:a.start,{durationMinutes:0,startTime:(0,t.formatHHMM)(i),fixedEnd:a.end,event:!0})}),M=p.map(e=>"event"===e.kind&&"end"===e.event.boundary?m?.minutes??0:c.get(e.id)?.minutes??0),E=(0,n.computeSchedule)(h,M,{dayStart:A,sunset:i.sunsetMinutes??null}),k=new Map,y=new Map;p.forEach((e,a)=>{let t=E.items[a];t&&("item"===e.kind?k.set(e.id,t):y.set(e.id,t))});let b=e.events.find(e=>"end"===e.boundary),S=(0,t.parseHHMM)(A);p.forEach((e,a)=>{("event"!==e.kind||"end"!==e.event.boundary)&&(S=E.items[a]?.end??S)});let C={items:e.items.map(e=>k.get(e.item.id)).filter(e=>!!e),visitMinutes:E.visitMinutes,travelMinutes:E.travelMinutes,waitMinutes:E.waitMinutes,eventMinutes:E.eventMinutes??0,end:S},B=new Map,v=(e,a)=>B.set(e,[...B.get(e)??[],a]),L=e.events.filter(e=>e.blocking&&f.has(e.kind)&&"start"!==e.boundary);for(let a of(e.items.forEach(({item:e,place:a})=>{let t=k.get(e.id);if(!t)return;t.late&&v(e.id,{type:"late",minutes:Math.max(1,t.lateMinutes)}),t.afterSunset&&a&&u.has(a.category)&&v(e.id,{type:"afterSunset"}),t.pastMidnight&&v(e.id,{type:"pastMidnight"});let i=L.find(e=>"departure"===e.kind||"end"===e.boundary?t.end>e.start:e.end>e.start&&t.planned<e.end&&t.end>e.start);i&&v(e.id,{type:"overlapsBooking",title:i.booking.title})}),e.events)){let t=y.get(a.id);t?.late&&"start"!==a.boundary&&a.id!==e.relocation&&v(a.id,{type:"late",minutes:Math.max(1,t.lateMinutes)})}let T=e.events.find(e=>"transport"===e.kind||"departure"===e.kind);for(let a of e.events)"checkout"===a.kind&&T&&a.start>T.start&&v(a.id,{type:"checkoutAfterDeparture",departure:T.start});let P=(0,s.summarizeLegs)(r),N=e.items.length>0||e.events.some(e=>e.blocking),I=(0,s.summarizeLegs)(e.legs.map(a=>e.covered.has(a.toId)?{spec:a,minutes:0,km:0}:{spec:a,...(0,s.estimateLeg)(a)})),D=N?(0,n.dayIntensity)(C.visitMinutes+I.minutes+(C.eventMinutes??0),I.byMode.car):null,R=b?y.get(b.id):void 0;return{legs:r,arriving:c,returnLeg:m,schedule:C,byItem:k,byEvent:y,warnings:B,totals:P,intensity:D,dayStart:(0,t.parseHHMM)(A),endEta:m?R?R.arrival:S+m.minutes:null,pending:r.some(e=>"pending"===e.status),estimated:r.some(e=>"estimate"===e.status&&("car"===e.spec.mode||"foot"===e.spec.mode||"bike"===e.spec.mode))}}function h(e){return{spec:e,...(0,s.estimateLeg)(e),status:"estimate"}}function M(e,t,r,n,s=(0,o.tripDefaultMode)(e,r,t)){return p(n,(0,a.dayBase)(e,t,n.date,r),(0,o.readPlanDays)(e)[n.date]??{},{events:(0,i.dayEventsFor)(t,n.date,r,n.items.map(e=>e.item),e.timeZone),defaultMode:s})}e.s(["OUTDOOR_CATEGORIES",0,u,"buildDayModel",0,p,"computeDay",0,g,"dayColor",0,l,"estimatedLeg",0,h,"itemLatLng",0,c,"planDay",0,function(e,a,t,i,r=h,n={}){let o=M(e,a,t,i,n.defaultMode);return{model:o,computed:g(o,r,n)}},"rebuildDayModel",0,function(e,a){return p({date:e.date,index:e.index,items:a},e.base,e.meta,{events:e.events.map(({boundary:e,...a})=>a),defaultMode:e.defaultMode})},"stopNames",0,function(e,a){let t=new Map;for(let i of(e.start&&t.set(e.start.id,e.base.start?.name??""),e.end&&t.set(e.end.id,e.base.end?.name??""),e.items))t.set(i.item.id,a(i));for(let a of e.events)t.set(a.id,("arrival"===a.kind?a.toName:a.fromName??a.placeName)??a.booking.title),t.set(`${a.id}:after`,a.toName??a.placeName??a.booking.title);return t},"tripDayModel",0,M])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},t=new Map(`
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
`.trim().split("\n").map(e=>{let[t="",i="",r="",n=""]=e.split("|");return[t,{code:t,city:{pl:i,en:r||i,de:a[t]??(r||i)},timeZone:n}]}));function i(e){return e?t.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of t.values())for(let t of Object.values(e.city)){let i=t.toLowerCase();if(i===a||i.startsWith(`${a} (`))return e}},"airportByCode",0,i,"airportLabel",0,function(e,a,t){let r=i(e),n=(r?.city[a]??t)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),t=e.i(41478),i=e.i(93440),r=e.i(99506),n=e.i(58162),o=e.i(49913),s=e.i(25395);let l=["Public","Bank","School","Authorities","Optional","Observance"],u=120,c=(e,a=u)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0;function d(e,a,t){let i=a.toUpperCase(),r=new Set(e.flatMap(e=>e.counties??[])),n=e=>r.size>=4&&[...r].every(a=>e.includes(a)),o=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),r=a.types.includes("Optional");if(!e&&!r)continue;let s=a.global||!a.counties?.length||n(a.counties);if(!s&&t&&!a.counties?.includes(t))continue;let l=!s,u=!!e&&(!l||!!t)||"maybe",c=e?l?"regional":"national":"optional",d={date:a.date,countryCode:i,localName:a.localName,name:a.name,scope:c,status:u,...l&&a.counties?{counties:a.counties}:{}},A=o.get(a.date)??[],p=A.findIndex(e=>e.name===d.name||e.localName===d.localName);p<0?A.push(d):m(d)>m(A[p])&&(A[p]=d),o.set(a.date,A)}for(let e of o.values())e.sort((e,a)=>m(a)-m(e));return{countryCode:i,byDate:o}}let m=e=>2*(!0===e.status)+ +("national"===e.scope),A=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function p(e,a){let t,i=50,r=new Set;for(let o of a){let a=(0,s.haversineKm)(e,o);a<=i&&(t=o,i=a),(a<=300||o.bbox&&0===(0,n.kmOutsideBBox)(o.bbox,e))&&r.add(o.countryCode)}return t?t.countryCode:1===r.size?[...r][0]:void 0}let f=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function g(e,a){let r=e?.name.trim()??"",n=(0,t.countryCodeFromAddress)(r);if(n)return n;let s=f.exec(r),l=(0,o.airportByCode)(s?.[1]??s?.[2]);return(0,i.countryOfTimeZone)(l?.timeZone)??(0,i.countryOfTimeZone)(a)}let h=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function M(e,a){let i=(0,t.countryCodeFromAddress)(a?.address);if(i)return i;let r=1===e.countries.length?e.countries[0]:void 0;return A(a)&&0!==e.anchors.length?e.countryNear(a):r}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,t=new Set;for(let[i,r]of e.data)if(null===r)t.add(i);else{let t=e.region&&e.region.startsWith(`${i}-`)?e.region:void 0;a.set(i,d(r,i,t))}let i=e.stays??[],n=e.visits??[],o=e=>i.find(a=>a.from<=e&&e<a.to)?.countryCode??n.find(a=>a.from<e&&e<a.to)?.countryCode??i.find(a=>a.to===e)?.countryCode??n.find(a=>a.from===e)?.countryCode??n.find(a=>a.to===e)?.countryCode,s=e.anchors??[],l=(t,i)=>{let r;return(i?[i]:(r=o(t))?[r]:e.countries).flatMap(e=>a.get(e)?.byDate.get(t)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:t,anchors:s,countryOn:o,countryNear:e=>p(e,s),status:(e,t)=>{var i;let r=a.get(e);return r?(i=r.byDate.get(t),!!i?.length&&(!!i.some(e=>!0===e.status)||"maybe")):null},on:l,inRange(e,a){let t=[],i=Math.min((0,r.diffDays)(e,a),400);for(let a=0;a<=i;a++)t.push(...l((0,r.addDays)(e,a)));return t}}},"countryAt",0,p,"interpretHolidays",0,d,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let t=a.toUpperCase(),i=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,n=c(a.name),o=c(a.localName)??n;if(!(0,r.isValidISODate)(e)||!n||!o||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==t)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>l.includes(e)),u=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];i.push({date:e,localName:o,name:n,countryCode:t,global:!1!==a.global||0===u.length,...u.length&&!1===a.global?{counties:u}:{},types:s.length?s:["Public"]})}return i.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,M,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let t=M(e,a);return t?a=>e.status(t,a):a=>{let t=e.countries.map(t=>e.status(t,a));return t.some(e=>!0===e||"maybe"===e)?"maybe":!t.includes(!1)&&null}},"tripCountries",0,function(e,i=[],n=[]){var o;let s=[],l=(e,a)=>{a&&A(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},u=(o=e.destination,(0,t.isCountryCode)(o.countryCode)?o.countryCode:(0,t.countryCodeFromName)(o.country));if(u&&A(e.destination)){let a=e.destination.bbox,t=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:u,...t?{bbox:a}:{}})}let c=[],d=(e,a)=>c.push({date:e,code:a}),m=[],f=i.filter(a.isTransport).sort(h),M=f.map(e=>({from:g(e.from,e.startTimeZone),to:g(e.to,e.endTimeZone)})),E=M[0]?.from,k=e=>{let a=f[e],t=f[e+1];if(!a?.end||!t)return!1;let i=(0,r.diffLocalMinutes)(a.end,t.start);return i>=0&&i<720};f.forEach((a,t)=>{let{from:i,to:n}=M[t];t>0&&i&&i!==E&&!k(t-1)&&i!==M[t-1].to&&(d(a.start,i),l(a.from,i));let o=t===f.length-1,s=!!e.endDate&&(0,r.datePart)(a.start)>=e.endDate&&n!==u,c=o&&(t>0&&n===E&&E!==u||s);if(!n||c||k(t))return;l(a.to,n),d(a.end??a.start,n);let A=(0,r.datePart)(a.end??a.start),p=f[t+1]?(0,r.datePart)(f[t+1].start):void 0,g=p&&(0,r.isValidISODate)(p)&&p>A?p:(0,r.addDays)(A,1);(0,r.isValidISODate)(A)&&m.push({from:A,to:g,countryCode:n})});let y=new Map(n.map(e=>[e.id,e])),b=[];for(let e of i.filter(a.isStay).sort(h)){let a=e.placeId?y.get(e.placeId):void 0,i=A(a)?a:A(e.location)?e.location:void 0,n=(0,r.datePart)(e.start),o=(0,t.countryCodeFromAddress)(a?.address)??(0,t.countryCodeFromAddress)(e.location?.name)??(i?p(i,s):m.find(e=>e.from===n)?.countryCode);if(!o)continue;d(e.start,o),l(i,o);let u=e.end?(0,r.datePart)(e.end):(0,r.addDays)(n,1);(0,r.isValidISODate)(n)&&(0,r.isValidISODate)(u)&&(0,r.diffDays)(n,u)>0&&b.push({from:n,to:u,countryCode:o})}let S=[];for(let e of[u,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!S.includes(e)&&S.length<8&&S.push(e);return{countries:S,stays:b,visits:m,anchors:s}},"tripYears",0,function(e){let a=(0,r.parseISODate)(e.startDate).year,t=(0,r.parseISODate)(e.endDate).year,i=[];for(let e=a;e<=t&&i.length<3;e++)i.push(e);return i}])},90170,e=>{"use strict";var a=e.i(25395);function t(e){return"car"===e||"foot"===e||"bike"===e?e:null}let i=e=>(Math.round(1e5*e)/1e5+0).toFixed(5),r=(e,a)=>(e[0]-a.lng)**2+(e[1]-a.lat)**2;e.s(["dominantMode",0,function(e,a="car"){let t=new Map,i=null,r=0;for(let a of e){if("none"===a)continue;let e=(t.get(a)??0)+1;t.set(a,e),e>r&&(i=a,r=e)}return i??a},"estimateLeg",0,function(e){let t=(0,a.haversineKm)(e.from,e.to),i="none"===e.mode?1:a.FALLBACK_SPEEDS[e.mode].detour;return{minutes:(0,a.estimateTravelMinutes)(e.from,e.to,e.mode),km:Math.round(t*i*10)/10}},"groupRuns",0,function(e,a=25){let i=[],r=null;for(let n of e){let e=t(n.mode);if(!e){r=null;continue}let o=r?.legs[r.legs.length-1];r&&o&&r.mode===e&&o.toId===n.fromId&&r.points.length<a?(r.legs.push(n),r.points.push(n.to)):(r={mode:e,legs:[n],points:[n.from,n.to]},i.push(r))}return i},"legKey",0,function(e,a,t){return`${t}|${i(e.lat)},${i(e.lng)}|${i(a.lat)},${i(a.lng)}`},"routedMode",0,t,"splitGeometry",0,function(e,a){let t=a.length-1;if(t<=0)return[];let i=e=>[e.lng,e.lat];if(e.length<2)return Array.from({length:t},(e,t)=>[i(a[t]),i(a[t+1])]);let n=[0],o=0;for(let i=1;i<t;i++){let t=a[i],s=o,l=1/0;for(let a=o;a<e.length;a++){let i=r(e[a],t);i<l&&(l=i,s=a)}n.push(s),o=s}n.push(e.length-1);let s=[];for(let r=0;r<t;r++){let t=n[r],o=n[r+1],l=e.slice(t,o+1);s.push(l.length>=2?l:[i(a[r]),i(a[r+1])])}return s},"summarizeLegs",0,function(e){let a={car:0,foot:0,bike:0,transit:0,none:0},t=0,i=0;for(let r of e)a[r.spec.mode]+=r.minutes,t+=r.minutes,i+=r.km;return{byMode:a,minutes:t,km:Math.round(10*i)/10}}])},86208,e=>{"use strict";var a=e.i(99506);let t=e=>e*Math.PI/180,i=e=>180*e/Math.PI;function r(e){let a=(e-2451545)/36525,r=((280.46646+a*(36000.76983+3032e-7*a))%360+360)%360,n=357.52911+a*(35999.05029-1537e-7*a),o=.016708634-a*(42037e-9+1267e-10*a),s=r+(Math.sin(t(n))*(1.914602-a*(.004817+14e-6*a))+Math.sin(t(2*n))*(.019993-101e-6*a)+289e-6*Math.sin(t(3*n))),l=125.04-1934.136*a,u=s-.00569-.00478*Math.sin(t(l)),c=23+(26+(21.448-a*(46.815+a*(59e-5-.001813*a)))/60)/60+.00256*Math.cos(t(l)),d=i(Math.asin(Math.sin(t(c))*Math.sin(t(u)))),m=Math.tan(t(c/2))**2;return{declination:d,eqTime:4*i(m*Math.sin(2*t(r))-2*o*Math.sin(t(n))+4*o*m*Math.sin(t(n))*Math.cos(2*t(r))-.5*m*m*Math.sin(4*t(r))-1.25*o*o*Math.sin(2*t(n)))}}function n(e,a){let r=Math.cos(t(90.833))/(Math.cos(t(e))*Math.cos(t(a)))-Math.tan(t(e))*Math.tan(t(a));return r>1||r<-1?r>1?NaN:1/0:i(Math.acos(r))}e.s(["localSunTimes",0,function(e,t,i,o){let s=function(e,t,i){let{year:o,month:s,day:l}=(0,a.parseISODate)(e),u=Date.UTC(o,s-1,l),c=u/864e5+2440587.5,d=r(c+(720-4*i)/1440),m=r(c+(720-4*i-d.eqTime)/1440),A=720-4*i-m.eqTime,p=new Date(u+6e4*A),f=n(t,m.declination);if(Number.isNaN(f))return{sunrise:null,sunset:null,solarNoon:p,polar:"night",dayLengthMinutes:0};if(!Number.isFinite(f))return{sunrise:null,sunset:null,solarNoon:p,polar:"day",dayLengthMinutes:1440};let g=e=>{let a=A+4*e*f;for(let o=0;o<2;o++){let o=r(c+a/1440),s=n(t,o.declination);if(!Number.isFinite(s))break;a=720-4*i-o.eqTime+4*e*s}return a},h=g(-1),M=g(1);return{sunrise:new Date(u+6e4*h),sunset:new Date(u+6e4*M),solarNoon:p,polar:null,dayLengthMinutes:Math.round(M-h)}}(e,t,i),l=t=>{if(!t)return null;let i=(0,a.timeZoneOffsetMinutes)(t,o),{year:r,month:n,day:s}=(0,a.parseISODate)(e);return Math.round((t.getTime()-Date.UTC(r,n-1,s))/6e4+i)},u=l(s.sunrise),c=l(s.sunset);return{sunrise:null===u?null:(0,a.formatHHMM)(u),sunset:null===c?null:(0,a.formatHHMM)(c),sunriseMinutes:null===u?null:(u%1440+1440)%1440,sunsetMinutes:null===c?null:c,polar:s.polar,dayLengthMinutes:s.dayLengthMinutes}}])}]);