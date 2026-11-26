(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,a=>{"use strict";var e=a.i(99506),r=a.i(49913),i=a.i(25395),n=a.i(32751);function o(a){return"stay"===a.type}function t(a){return n.W.includes(a.type)}function u(a){if(!a.end)return[];let r=(0,e.L)(a.start),i=(0,e.L)(a.end),n=(0,e.F)(r,i),o=[];for(let a=0;a<n;a++)o.push((0,e.b)(r,a));return o}function l(a,r){return a.filter(o).filter(a=>a.end&&(0,e.L)(a.start)<=r&&r<(0,e.L)(a.end)).sort((a,e)=>a.start<e.start?-1:+(a.start>e.start))[0]}function s(a,e,r){let i=a[e];if(i&&void 0!==i.lat&&void 0!==i.lng)return i;if("location"===e&&a.placeId&&r){let e=r.find(e=>e.id===a.placeId);if(e)return{name:i?.name??e.name,lat:e.lat,lng:e.lng}}return i}function c(a,e,r){var i;if(!e)return null;let n="stay"===a.type&&!!a.title.trim()&&a.title.trim()!==e.name&&((i=e.name).includes(",")||i.length>40);return{name:n?a.title.trim():e.name,...n&&e.name?{address:e.name}:{},...void 0!==e.lat?{lat:e.lat}:{},...void 0!==e.lng?{lng:e.lng}:{},bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:r}}function A(a,e,r){return c(a,s(a,"location",r),e)??{name:a.title.trim(),bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:e}}function m(a,e){let r="string"==typeof e?e:e.base;if(a.type&&!n.W.includes(a.type)){let i=a.startTimeZone&&a.endTimeZone||"string"==typeof e?void 0:e.bookingZone(a),n=a.startTimeZone??i??r;return{start:n,end:a.endTimeZone??a.startTimeZone??i??(a.end?r:n)}}let i=a.startTimeZone??r;return{start:i,end:a.endTimeZone??(a.end?r:i)}}function d(a,r,i="UTC"){let n="start"===r?a.start:a.end??a.start,o=m(a,i)[r];return p(n.length>=16?n:`${(0,e.L)(n)}T00:00`,o)}function p(a,r){try{let i=(0,e.K)(a,r).getTime();return Number.isFinite(i)?i:null}catch{return null}}function f(a,e){if(e&&void 0!==e.lat&&void 0!==e.lng)return{lat:e.lat,lng:e.lng};if("flight"!==a.type)return null;let i=(0,r.U)(e?.name);return i&&Number.isFinite(i.lat)&&Number.isFinite(i.lng)?{lat:i.lat,lng:i.lng}:null}function E(a){return"flight"===a.type&&void 0!==(0,e.e)(a.start)&&(!a.end||void 0===(0,e.e)(a.end))}let g=new WeakSet,h=new WeakMap;function S(a,n){if(!E(a))return a;let o=h.get(a);if(o&&o.key===n)return o.value;let t=a,u=f(a,a.from),l=f(a,a.to),s=m(a,n).start,c=u&&l?p(a.start,s):null;if(u&&l&&null!==c){let o=a.endTimeZone??(0,r.U)(a.to?.name)?.timeZone??("string"==typeof n?n:n.base);try{var A;let r=(0,e.c)(new Date(c+6e4*(A=(0,i._)(u,l),5*Math.round((40+Math.max(0,A)/800*60)/5))),o);t={...a,end:r,endTimeZone:o},g.add(t)}catch{t=a}}return h.set(a,{key:n,value:t}),t}function C(a,e){let r=!1,i=a.map(a=>{let i=S(a,e);return i!==a&&(r=!0),i});return r?i:a}function B(a,r,i,n){let o=a=>"start"===i?a.start:a.end??a.start;return a.filter(t).filter(a=>"start"===i?(0,e.L)(a.start)===r:a.end?(0,e.L)(a.end)===r:(0,e.L)(a.start)===r).sort((a,e)=>{let r=d(a,i,n),t=d(e,i,n);return null!==r&&null!==t&&r!==t?r-t:o(a)<o(e)?-1:+(o(a)>o(e))})}a.s(["W",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"n",0,E,"C",0,function(a){return a&&void 0!==a.lat&&void 0!==a.lng?{lat:a.lat,lng:a.lng}:null},"i",0,d,"$",0,m,"x",0,function(a,r){let i=(0,e.y)(a).map((a,e)=>({kind:"day",date:a,dayIndex:e}));for(let a of r)i.push({kind:"booking",booking:a,date:(0,e.L)(a.start),at:a.start,edge:"start"}),o(a)&&a.end&&i.push({kind:"booking",booking:a,date:(0,e.L)(a.end),at:a.end,edge:"end"});let n=a=>{if("day"===a.kind)return`${a.date}|0`;let r=(0,e.e)(a.at)??"00:00";return`${a.date}|1|${r}|${+("end"!==a.edge)}|${a.booking.title}`};return i.sort((a,e)=>{let r=n(a),i=n(e);return r<i?-1:+(r>i)})},"Z",0,function(a,r,i,n){let o=l(r,(0,e.b)(i,-1)),t=l(r,i),u=a.timeZone??"UTC",m=C(r,u).filter(a=>"car"!==a.type),p=o?A(o,"stay",n):null;if(!p){let a=B(m,i,"end",u),r=a.filter(a=>(0,e.L)(a.start)!==i),o=r[r.length-1]??a[0];o&&(p=c(o,s(o,"to",n),"arrival"))}!p&&t&&(p=A(t,(0,e.L)(t.start)===i?"destination":"stay",n));let f=t?A(t,"stay",n):null;if(!f){let r=B(m,i,"start",u).filter(a=>p?.source!=="arrival"||p.bookingId!==a.id),o=r[r.length-1];if(o){let r=s(o,"to",n);f=i<a.endDate&&o.end&&(0,e.L)(o.end)===i&&(d(o,"end",u)??0)>=(d(o,"start",u)??0)&&r&&void 0!==r.lat&&void 0!==r.lng?c(o,r,"arrival"):c(o,s(o,"from",n),"departure")}}return f||(f=p),t?{start:p,end:f,stay:t}:{start:p,end:f}},"k",0,function(a,r){let i=[];for(let a of r)a.end&&a.end<a.start&&!(a.endTimeZone||a.startTimeZone)&&i.push({type:"invalid-range",bookingId:a.id});let n=r.filter(o).filter(a=>a.end&&a.end>a.start);for(let a=0;a<n.length;a++)for(let e=a+1;e<n.length;e++){let r=n[a],o=n[e],t=new Set(u(o)),l=u(r).filter(a=>t.has(a));l.length>0&&i.push({type:"overlapping-stays",bookingIds:[r.id,o.id],nights:l})}let t=new Set(n.flatMap(u));for(let r of(0,e.y)(a).slice(0,-1))t.has(r)||i.push({type:"missing-stay",date:r});return i},"j",0,function(a){return g.has(a)},"t",0,o,"E",0,t,"A",0,p,"T",0,u,"F",0,l,"b",0,f,"o",0,C,"q",0,S])},41478,a=>{"use strict";let e=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),r=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function n(a){return"string"==typeof a&&/^[A-Z]{2}$/.test(a)&&!e.has(a)}let o=new Map;function t(a){let e=o.get(a);if(void 0===e){try{e=new Intl.DisplayNames([a],{type:"region",fallback:"none"})}catch{e=null}o.set(a,e)}return e}function u(a){return a.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let l=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),s=0,c=null;function A(){if(c)return c;let a=t("en"),r=[];for(let n of i)for(let o of i){let i=n+o;if(!e.has(i))try{a?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&r.push(i)}catch{}}return c=r,r}function m(a,e=r.length){if(!a)return;let i=u(a);if(!i||i.length<2)return;let n=a.trim();if(!/^[A-Z]{2}$/.test(n))for(;;){let a=l.get(i);if(a)return a;if(s>=Math.min(e,r.length))return;!function(a){let e=t(a);if(e)for(let a of A()){let r;try{r=e.of(a)}catch{r=void 0}if(!r||r===a)continue;let i=u(r);i&&!l.has(i)&&l.set(i,a)}}(r[s]),s+=1}}a.s(["B",0,function(a){let e=(a??"").split(/[,，、]/).map(a=>a.trim()).filter(Boolean);if(!(e.length<2))return m(e[e.length-1])},"A",0,m,"N",0,function(){return A()},"F",0,function(a){let e=(a??[]).map(a=>String(a).trim()).filter(Boolean);for(let a of e)try{let e=new Intl.Locale(a).region?.toUpperCase();if(e&&n(e))return e}catch{}for(let a of e)try{let e=new Intl.Locale(a).maximize().region?.toUpperCase();if(e&&n(e))return e}catch{}},"m",0,function(a,e){try{return t(e)?.of(a)??a}catch{return a}},"G",0,function(a){let e=a.trim().toUpperCase();return/^[A-Z]{2}$/.test(e)?String.fromCodePoint(...[...e].map(a=>127462+a.charCodeAt(0)-65)):""},"Y",0,n])},93440,a=>{"use strict";var e=a.i(99506),r=a.i(25395);let i=`
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
`,n=null;function o(){if(n)return n;for(let a of(n=new Map,i.split("\n"))){let[e,...r]=a.trim().split(" ");e&&0!==r.length&&n.set(e,r.map(a=>{let[e="",r]=a.split("@");if(!r)return{zone:e};let[i="",n]=r.split("~"),[o,t]=i.split(",").map(Number);return{zone:e,lat:o,lng:t,...n?{radiusKm:Number(n)}:{}}}))}return n}let t=null;a.s(["countryOfTimeZone",0,function(a){if(a){if(!t)for(let[a,e]of(t=new Map,o()))for(let{zone:r}of e)t.set(r,t.has(r)&&t.get(r)!==a?null:a);return t.get(a)??void 0}},"countryTimeZones",0,function(a){return[...new Set((o().get(a.toUpperCase())??[]).map(a=>a.zone))]},"suggestTimeZone",0,function(a,i){if(!i)return null;let n=(o().get(i.toUpperCase())??[]).filter(a=>(0,e.M)(a.zone));if(n.length<=1)return n[0]?.zone??null;let t=null,u=1/0;for(let e of n){if(void 0===e.radiusKm||void 0===e.lat||void 0===e.lng)continue;let i=(0,r._)(a,{lat:e.lat,lng:e.lng});i<=e.radiusKm&&i<u&&(t=e,u=i)}if(t)return t.zone;let l=n.filter(a=>void 0===a.radiusKm),s=Math.cos(a.lat*Math.PI/180),c=null,A=1/0;for(let e of l.length?l:n){if(void 0===e.lat||void 0===e.lng)continue;let r=Math.abs(a.lng-e.lng);r>180&&(r=360-r);let i=Math.hypot(r*s,(a.lat-e.lat)*.5);i<A&&(A=i,c=e)}return c?.zone??l[0]?.zone??n[0]?.zone??null}])},58162,a=>{"use strict";var e=a.i(41478),r=a.i(25395);function i(a){if(a.kind)return a.kind;if(a.bbox){let[e,i,n,o]=a.bbox;if((0,r._)({lat:i,lng:e},{lat:o,lng:n})>150)return"region"}return"city"}function n(a,r){let n=a.name.trim(),o=a.countryCode?.trim().toUpperCase(),t=o&&r?(0,e.m)(o,r):void 0,u=(t&&t!==o?t:void 0)??a.country?.trim();return u&&"country"!==i(a)&&u.toLocaleLowerCase()!==n.toLocaleLowerCase()?`${n}, ${u}`:n}function o(a){return!!a&&a.every(Number.isFinite)&&(a[0]!==a[2]||a[1]!==a[3])}function t(a,e){let[i,n,o,t]=a,u=Math.min(t,Math.max(n,e.lat)),l=Math.min(o,Math.max(i,e.lng));return(0,r._)(e,{lat:u,lng:l})}function u(a,e){let n=i(a),u=o(a.bbox)?a.bbox:void 0;if("country"===n){if(a.countryCode&&e.countryCode)return e.countryCode.toUpperCase()!==a.countryCode.toUpperCase();if(u)return t(u,e)>50}return u?t(u,e)>300:(0,r._)(a,e)>300}a.s(["m",0,function(a){if(o(a.bbox))return{bbox:a.bbox};let e=i(a);return{center:{lat:a.lat,lng:a.lng},zoom:"country"===e?5:"region"===e?8:11}},"n",0,i,"c",0,n,"a",0,u,"h",0,function(a,e,i){return u(a,i)&&!e.some(a=>300>=(0,r._)(a,i))},"b",0,function(a){return"city"!==i(a)},"I",0,t,"E",0,function(a,r,i,o=[]){if(r.length>=2){let a=r.slice(0,3).map(a=>(0,e.m)(a,i)),n=r.length-3;return`${a.join(" · ")}${n>0?` +${n}`:""}`}return o.length>=2?`${o.slice(0,3).join(" → ")}${o.length>3?" …":""}`:n(a,i)}])},49913,a=>{"use strict";let e=`
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
`,r={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},i=new Map(`
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
`.trim().split(/[;\n]/).map(a=>{let[e="",r="",i=""]=a.trim().split(" ");return[e,[Number(r),Number(i)]]})),n=new Map(e.trim().split("\n").map(a=>{let[e="",n="",o="",t=""]=a.split("|"),[u=0/0,l=0/0]=i.get(e)??[];return[e,{code:e,city:{pl:n,en:o||n,de:r[e]??(o||n)},timeZone:t,lat:u,lng:l}]}));function o(a){return a?n.get(a.toUpperCase()):void 0}let t=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;a.s(["p",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"N",0,function(a){let e=a.trim().toLowerCase();if(e)for(let a of n.values())for(let r of Object.values(a.city)){let i=r.toLowerCase();if(i===e||i.startsWith(`${e} (`))return a}},"h",0,o,"U",0,function(a){let e=t.exec(a?.trim()??"");return o(e?.[1]??e?.[2])},"O",0,function(a,e,r){let i=o(a),n=(i?.city[e]??r)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${a.toUpperCase()})`:a.toUpperCase()}])},38520,a=>{"use strict";var e=a.i(12268),r=a.i(41478),i=a.i(93440),n=a.i(99506),o=a.i(58162),t=a.i(49913),u=a.i(25395);let l=["Public","Bank","School","Authorities","Optional","Observance"],s=120,c=(a,e=s)=>"string"==typeof a&&a.trim()?a.trim().slice(0,e):void 0;function A(a,e,r){let i=e.toUpperCase(),n=new Set(a.flatMap(a=>a.counties??[])),o=a=>n.size>=4&&[...n].every(e=>a.includes(e)),t=new Map;for(let e of a){let a=e.types.includes("Public")||e.types.includes("Bank"),n=e.types.includes("Optional");if(!a&&!n)continue;let u=e.global||!e.counties?.length||o(e.counties);if(!u&&r&&!e.counties?.includes(r))continue;let l=!u,s=!!a&&(!l||!!r)||"maybe",c=a?l?"regional":"national":"optional",A={date:e.date,countryCode:i,localName:e.localName,name:e.name,scope:c,status:s,...l&&e.counties?{counties:e.counties}:{}},d=t.get(e.date)??[],p=d.findIndex(a=>a.name===A.name||a.localName===A.localName);p<0?d.push(A):m(A)>m(d[p])&&(d[p]=A),t.set(e.date,d)}for(let a of t.values())a.sort((a,e)=>m(e)-m(a));return{countryCode:i,byDate:t}}let m=a=>2*(!0===a.status)+ +("national"===a.scope),d=a=>!!a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng);function p(a){return(0,r.Y)(a.countryCode)?a.countryCode:(0,r.A)(a.country)}function f(a,e){let r,i=50,n=new Set;for(let t of e){let e=(0,u._)(a,t);e<=i&&(r=t,i=e),(e<=300||t.bbox&&0===(0,o.I)(t.bbox,a))&&n.add(t.countryCode)}return r?r.countryCode:1===n.size?[...n][0]:void 0}let E=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function g(a,e){let n=a?.name.trim()??"",o=(0,r.B)(n);if(o)return o;let u=E.exec(n),l=(0,t.h)(u?.[1]??u?.[2]);return(0,i.countryOfTimeZone)(l?.timeZone)??(0,i.countryOfTimeZone)(e)}function h(a,e){if(a.index!==a.count-1)return!1;let r=!!e&&(0,n.L)(a.start)>=e&&a.to!==a.home;return a.index>0&&a.to===a.origin&&a.origin!==a.home||r}let S=(a,e)=>a.start<e.start?-1:+(a.start>e.start);function C(a,e){let i=(0,r.B)(e?.address);if(i)return i;let n=1===a.countries.length?a.countries[0]:void 0;return d(e)&&0!==a.anchors.length?a.countryNear(e):n}a.s(["N",0,50,"$",0,function(a){let e=new Map,r=new Set;for(let[i,n]of a.data)if(null===n)r.add(i);else{let r=a.region&&a.region.startsWith(`${i}-`)?a.region:void 0;e.set(i,A(n,i,r))}let i=a.stays??[],o=a.visits??[],t=a=>i.find(e=>e.from<=a&&a<e.to)?.countryCode??o.find(e=>e.from<a&&a<e.to)?.countryCode??i.find(e=>e.to===a)?.countryCode??o.find(e=>e.from===a)?.countryCode??o.find(e=>e.to===a)?.countryCode,u=a.anchors??[],l=(r,i)=>{let n;return(i?[i]:(n=t(r))?[n]:a.countries).flatMap(a=>e.get(a)?.byDate.get(r)??[])};return{countries:a.countries,supported:new Set(e.keys()),unsupported:r,anchors:u,countryOn:t,countryNear:a=>f(a,u),status:(a,r)=>{var i;let n=e.get(a);return n?(i=n.byDate.get(r),!!i?.length&&(!!i.some(a=>!0===a.status)||"maybe")):null},on:l,inRange(a,e){let r=[],i=Math.min((0,n.F)(a,e),400);for(let e=0;e<=i;e++)r.push(...l((0,n.b)(a,e)));return r}}},"w",0,f,"X",0,p,"k",0,A,"c",0,h,"i",0,function(a,e){if(!Array.isArray(a))return[];let r=e.toUpperCase(),i=[];for(let e of a.slice(0,400)){if(!e||"object"!=typeof e)continue;let a=e.date,o=c(e.name),t=c(e.localName)??o;if(!(0,n.r)(a)||!o||!t||"string"==typeof e.countryCode&&e.countryCode.toUpperCase()!==r)continue;let u=(Array.isArray(e.types)?e.types:["Public"]).filter(a=>l.includes(a)),s=Array.isArray(e.counties)?e.counties.filter(a=>"string"==typeof a&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(a)).slice(0,100):[];i.push({date:a,localName:t,name:o,countryCode:r,global:!1!==e.global||0===s.length,...s.length&&!1===e.global?{counties:s}:{},types:u.length?u:["Public"]})}return i.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date))},"S",0,C,"a",0,function(a,e){if(!a||0===a.supported.size)return;let r=C(a,e);return r?e=>a.status(r,e):e=>{let r=a.countries.map(r=>a.status(r,e));return r.some(a=>!0===a||"maybe"===a)?"maybe":!r.includes(!1)&&null}},"b",0,function(a,i=[],o=[]){let t=[],u=(a,e)=>{e&&d(a)&&t.push({lat:a.lat,lng:a.lng,countryCode:e})},l=p(a.destination);if(l&&d(a.destination)){let e=a.destination.bbox,r=!!e&&4===e.length&&e.every(Number.isFinite)&&e[0]<e[2]&&e[1]<e[3];t.push({lat:a.destination.lat,lng:a.destination.lng,countryCode:l,...r?{bbox:e}:{}})}let s=[],c=(a,e)=>s.push({date:a,code:e}),A=[],m=i.filter(e.E).sort(S),E=m.map(a=>({from:g(a.from,a.startTimeZone),to:g(a.to,a.endTimeZone)})),C=E[0]?.from,B=a=>{let e=m[a],r=m[a+1];if(!e?.end||!r)return!1;let i=(0,n.D)(e.end,r.start);return i>=0&&i<720};m.forEach((e,r)=>{let{from:i,to:o}=E[r];r>0&&i&&i!==C&&!B(r-1)&&i!==E[r-1].to&&(c(e.start,i),u(e.from,i));let t=h({index:r,count:m.length,start:e.start,to:o,origin:C,home:l},a.endDate);if(!o||t||B(r))return;u(e.to,o),c(e.end??e.start,o);let s=(0,n.L)(e.end??e.start),d=m[r+1]?(0,n.L)(m[r+1].start):void 0,p=d&&(0,n.r)(d)&&d>s?d:(0,n.b)(s,1);(0,n.r)(s)&&A.push({from:s,to:p,countryCode:o})});let M=new Map(o.map(a=>[a.id,a])),L=[];for(let a of i.filter(e.t).sort(S)){let e=a.placeId?M.get(a.placeId):void 0,i=d(e)?e:d(a.location)?a.location:void 0,o=(0,n.L)(a.start),l=(0,r.B)(e?.address)??(0,r.B)(a.location?.name)??(i?f(i,t):A.find(a=>a.from===o)?.countryCode);if(!l)continue;c(a.start,l),u(i,l);let s=a.end?(0,n.L)(a.end):(0,n.b)(o,1);(0,n.r)(o)&&(0,n.r)(s)&&(0,n.F)(o,s)>0&&L.push({from:o,to:s,countryCode:l})}let y=[];for(let a of[l,...s.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date)).map(a=>a.code)])a&&!y.includes(a)&&y.length<8&&y.push(a);return{countries:y,stays:L,visits:A,anchors:t}},"x",0,function(a){let e=(0,n.d)(a.startDate).year,r=(0,n.d)(a.endDate).year,i=[];for(let a=e;a<=r&&i.length<3;a++)i.push(a);return i}])}]);