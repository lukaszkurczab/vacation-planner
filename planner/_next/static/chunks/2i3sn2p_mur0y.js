(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,a=>{"use strict";var e=a.i(99506),i=a.i(49913),r=a.i(25395),n=a.i(32751);function o(a){return"stay"===a.type}function t(a){return n.W.includes(a.type)}function u(a){if(!a.end)return[];let i=(0,e.L)(a.start),r=(0,e.L)(a.end),n=(0,e.F)(i,r),o=[];for(let a=0;a<n;a++)o.push((0,e.b)(i,a));return o}function l(a,i){return a.filter(o).filter(a=>a.end&&(0,e.L)(a.start)<=i&&i<(0,e.L)(a.end)).sort((a,e)=>a.start<e.start?-1:+(a.start>e.start))[0]}function s(a,e,i){let r=a[e];if(r&&void 0!==r.lat&&void 0!==r.lng)return r;if("location"===e&&a.placeId&&i){let e=i.find(e=>e.id===a.placeId);if(e)return{name:r?.name??e.name,lat:e.lat,lng:e.lng}}return r}function c(a,e,i){var r;if(!e)return null;let n="stay"===a.type&&!!a.title.trim()&&a.title.trim()!==e.name&&((r=e.name).includes(",")||r.length>40);return{name:n?a.title.trim():e.name,...n&&e.name?{address:e.name}:{},...void 0!==e.lat?{lat:e.lat}:{},...void 0!==e.lng?{lng:e.lng}:{},bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:i}}function A(a,e,i){return c(a,s(a,"location",i),e)??{name:a.title.trim(),bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:e}}function d(a,e){let i="string"==typeof e?e:e.base;if(a.type&&!n.W.includes(a.type)){let r=a.startTimeZone&&a.endTimeZone||"string"==typeof e?void 0:e.bookingZone(a),n=a.startTimeZone??r??i;return{start:n,end:a.endTimeZone??a.startTimeZone??r??(a.end?i:n)}}let r=a.startTimeZone??i;return{start:r,end:a.endTimeZone??(a.end?i:r)}}function m(a,i,r="UTC"){let n="start"===i?a.start:a.end??a.start,o=d(a,r)[i];return p(n.length>=16?n:`${(0,e.L)(n)}T00:00`,o)}function p(a,i){try{let r=(0,e.K)(a,i).getTime();return Number.isFinite(r)?r:null}catch{return null}}function f(a,e){if(e&&void 0!==e.lat&&void 0!==e.lng)return{lat:e.lat,lng:e.lng};if("flight"!==a.type)return null;let r=(0,i.U)(e?.name);return r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)?{lat:r.lat,lng:r.lng}:null}function E(a){return"flight"===a.type&&void 0!==(0,e.e)(a.start)&&(!a.end||void 0===(0,e.e)(a.end))}let g=new WeakSet,S=new WeakMap;function h(a,n){if(!E(a))return a;let o=S.get(a);if(o&&o.key===n)return o.value;let t=a,u=f(a,a.from),l=f(a,a.to),s=d(a,n).start,c=u&&l?p(a.start,s):null;if(u&&l&&null!==c){let o=a.endTimeZone??(0,i.U)(a.to?.name)?.timeZone??("string"==typeof n?n:n.base);try{var A;let i=(0,e.c)(new Date(c+6e4*(A=(0,r._)(u,l),5*Math.round((40+Math.max(0,A)/800*60)/5))),o);t={...a,end:i,endTimeZone:o},g.add(t)}catch{t=a}}return S.set(a,{key:n,value:t}),t}function M(a,e){let i=!1,r=a.map(a=>{let r=h(a,e);return r!==a&&(i=!0),r});return i?r:a}function B(a,i,r,n){let o=a=>"start"===r?a.start:a.end??a.start;return a.filter(t).filter(a=>"start"===r?(0,e.L)(a.start)===i:a.end?(0,e.L)(a.end)===i:(0,e.L)(a.start)===i).sort((a,e)=>{let i=m(a,r,n),t=m(e,r,n);return null!==i&&null!==t&&i!==t?i-t:o(a)<o(e)?-1:+(o(a)>o(e))})}a.s(["W",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"n",0,E,"C",0,function(a){return a&&void 0!==a.lat&&void 0!==a.lng?{lat:a.lat,lng:a.lng}:null},"i",0,m,"$",0,d,"x",0,function(a,i){let r=(0,e.y)(a).map((a,e)=>({kind:"day",date:a,dayIndex:e}));for(let a of i)r.push({kind:"booking",booking:a,date:(0,e.L)(a.start),at:a.start,edge:"start"}),o(a)&&a.end&&r.push({kind:"booking",booking:a,date:(0,e.L)(a.end),at:a.end,edge:"end"});let n=a=>{if("day"===a.kind)return`${a.date}|0`;let i=(0,e.e)(a.at)??"00:00";return`${a.date}|1|${i}|${+("end"!==a.edge)}|${a.booking.title}`};return r.sort((a,e)=>{let i=n(a),r=n(e);return i<r?-1:+(i>r)})},"Z",0,function(a,i,r,n){let o=l(i,(0,e.b)(r,-1)),t=l(i,r),u=a.timeZone??"UTC",d=M(i,u).filter(a=>"car"!==a.type),p=o?A(o,"stay",n):null;if(!p){let a=B(d,r,"end",u),i=a.filter(a=>(0,e.L)(a.start)!==r),o=i[i.length-1]??a[0];o&&(p=c(o,s(o,"to",n),"arrival"))}!p&&t&&(p=A(t,(0,e.L)(t.start)===r?"destination":"stay",n));let f=t?A(t,"stay",n):null;if(!f){let i=B(d,r,"start",u).filter(a=>p?.source!=="arrival"||p.bookingId!==a.id),o=i[i.length-1];if(o){let i=s(o,"to",n);f=r<a.endDate&&o.end&&(0,e.L)(o.end)===r&&(m(o,"end",u)??0)>=(m(o,"start",u)??0)&&i&&void 0!==i.lat&&void 0!==i.lng?c(o,i,"arrival"):c(o,s(o,"from",n),"departure")}}return f||(f=p),t?{start:p,end:f,stay:t}:{start:p,end:f}},"k",0,function(a,i){let r=[];for(let a of i)a.end&&a.end<a.start&&!(a.endTimeZone||a.startTimeZone)&&r.push({type:"invalid-range",bookingId:a.id});let n=i.filter(o).filter(a=>a.end&&a.end>a.start);for(let a=0;a<n.length;a++)for(let e=a+1;e<n.length;e++){let i=n[a],o=n[e],t=new Set(u(o)),l=u(i).filter(a=>t.has(a));l.length>0&&r.push({type:"overlapping-stays",bookingIds:[i.id,o.id],nights:l})}let t=new Set(n.flatMap(u));for(let i of(0,e.y)(a).slice(0,-1))t.has(i)||r.push({type:"missing-stay",date:i});return r},"j",0,function(a){return g.has(a)},"t",0,o,"E",0,t,"A",0,p,"T",0,u,"F",0,l,"b",0,f,"o",0,M,"q",0,h])},93440,a=>{"use strict";var e=a.i(99506),i=a.i(25395);let r=`
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
`,n=null;function o(){if(n)return n;for(let a of(n=new Map,r.split("\n"))){let[e,...i]=a.trim().split(" ");e&&0!==i.length&&n.set(e,i.map(a=>{let[e="",i]=a.split("@");if(!i)return{zone:e};let[r="",n]=i.split("~"),[o,t]=r.split(",").map(Number);return{zone:e,lat:o,lng:t,...n?{radiusKm:Number(n)}:{}}}))}return n}let t=null;a.s(["countryOfTimeZone",0,function(a){if(a){if(!t)for(let[a,e]of(t=new Map,o()))for(let{zone:i}of e)t.set(i,t.has(i)&&t.get(i)!==a?null:a);return t.get(a)??void 0}},"countryTimeZones",0,function(a){return[...new Set((o().get(a.toUpperCase())??[]).map(a=>a.zone))]},"suggestTimeZone",0,function(a,r){if(!r)return null;let n=(o().get(r.toUpperCase())??[]).filter(a=>(0,e.M)(a.zone));if(n.length<=1)return n[0]?.zone??null;let t=null,u=1/0;for(let e of n){if(void 0===e.radiusKm||void 0===e.lat||void 0===e.lng)continue;let r=(0,i._)(a,{lat:e.lat,lng:e.lng});r<=e.radiusKm&&r<u&&(t=e,u=r)}if(t)return t.zone;let l=n.filter(a=>void 0===a.radiusKm),s=Math.cos(a.lat*Math.PI/180),c=null,A=1/0;for(let e of l.length?l:n){if(void 0===e.lat||void 0===e.lng)continue;let i=Math.abs(a.lng-e.lng);i>180&&(i=360-i);let r=Math.hypot(i*s,(a.lat-e.lat)*.5);r<A&&(A=r,c=e)}return c?.zone??l[0]?.zone??n[0]?.zone??null}])},41758,a=>{"use strict";var e=a.i(12268),i=a.i(99506),r=a.i(32751);let n=(a,e)=>`booking:${a}:${e}`,o={activity:120,restaurant:90,other:60};function t(a,e){let r=(0,i.e)(a)??e;return r&&(0,i.t)(r)?(0,i.J)(r):null}function u(a){return a&&void 0!==a.lat&&void 0!==a.lng?{lat:a.lat,lng:a.lng}:null}function l(a,e){let i=u(a.location);if(i)return{point:i,...a.location?.name?{name:a.location.name}:{}};let r=a.placeId?e.find(e=>e.id===a.placeId):void 0;return r?{point:{lat:r.lat,lng:r.lng},name:a.location?.name??r.name}:{point:null,...a.location?.name?{name:a.location.name}:{}}}let s=a=>(a??"").trim().toLowerCase();a.s(["t",0,function(a,c,A=[],d=[],m="UTC"){let p=d.filter(a=>a.date===c),f=new Set(p.filter(a=>"place"!==a.kind).map(a=>s(a.title)).filter(Boolean)),E=new Set(p.map(a=>a.placeId).filter(a=>!!a)),g=[];for(let d of(0,e.o)(a,m)){if("stay"!==d.type&&f.has(s(d.title)))continue;let a=(0,i.L)(d.start),m=d.end?(0,i.L)(d.end):a,p={booking:d};if("stay"===d.type){let e=l(d,A),i={point:e.point,blocking:!1,moves:!1,...e.name?{placeName:e.name}:{}};if(a===c){let a=t(d.start,"15:00");null!==a&&g.push({...p,...i,id:n(d.id,"checkin"),kind:"checkin",start:a,end:a})}if(d.end&&m===c&&m!==a){let a=t(d.end,"11:00");null!==a&&g.push({...p,...i,id:n(d.id,"checkout"),kind:"checkout",start:a,end:a})}continue}if(d.placeId&&E.has(d.placeId))continue;let S={...d.from?.name?{fromName:d.from.name}:{},...d.to?.name?{toName:d.to.name}:{}};if("car"===d.type){let e=u(d.from)??u(d.location),i=u(d.to)??u(d.location)??e;if(a===c){let a=t(d.start,null);null!==a&&g.push({...p,...S,id:n(d.id,"pickup"),kind:"pickup",start:a,end:a,point:e,blocking:!0,moves:!1,...d.from?.name??d.location?.name?{placeName:d.from?.name??d.location?.name}:{}})}if(d.end&&m===c){let a=t(d.end,null);null!==a&&g.push({...p,...S,id:n(d.id,"dropoff"),kind:"dropoff",start:a,end:a,point:i,blocking:!0,moves:!1,...d.to?.name??d.location?.name?{placeName:d.to?.name??d.location?.name}:{}})}continue}if(r.W.includes(d.type)){let i=(0,e.b)(d,d.from),r=(0,e.b)(d,d.to),o=t(d.start,null),u=d.end?t(d.end,null):null,l=(0,e.j)(d)?{estimated:!0}:{},s=a=>({...p,...S,...l,id:n(d.id,"departure"),kind:"departure",start:a,end:a,point:i,after:null,blocking:!0,moves:!0}),A=a=>({...p,...S,...l,id:n(d.id,"arrival"),kind:"arrival",start:a,end:a,point:null,after:r,blocking:!0,moves:!0});if(a===c&&m===c){if(null===o)continue;null===u||u>=o?g.push({...p,...S,...l,id:n(d.id,"transport"),kind:"transport",start:o,end:u??o,point:i,after:d.end?r:i,blocking:!0,moves:!!d.end}):g.push(s(o),A(u))}else a===c?null!==o&&g.push(s(o)):m===c&&null!==u&&g.push(A(u));continue}if(a!==c)continue;let h=t(d.start,null);if(null===h)continue;let M=d.end&&m===c?t(d.end,null):null,B=l(d,A),L=null!==M&&M>h?M:h+(o[d.type]??60);g.push({...p,id:n(d.id,"booking"),kind:"booking",start:h,end:L,point:B.point,blocking:!0,moves:!1,...B.name?{placeName:B.name}:{}})}let S={arrival:0,checkout:1,dropoff:2,transport:3,departure:3,pickup:4,booking:5,checkin:6},h=new Map(g.map(a=>{let r,n,o;return[a,(r="arrival"===a.kind||"checkout"===a.kind||"dropoff"===a.kind,n=(0,e.$)(a.booking,m),o=`${c}T${(0,i.z)(a.start)}`,(0,e.A)(o,r?n.end:n.start)??(0,e.A)(o,"UTC")??0)]}));return g.sort((a,e)=>h.get(a)-h.get(e)||a.start-e.start||S[a.kind]-S[e.kind]||(a.id<e.id?-1:+(a.id>e.id)))},"r",0,function(a,i){let r=(0,e.$)(a.booking,i);return"arrival"===a.kind||"checkout"===a.kind||"dropoff"===a.kind?{start:r.end,end:r.end}:"transport"===a.kind?r:{start:r.start,end:r.start}},"m",0,a=>a.startsWith("booking:")])},49913,a=>{"use strict";let e=`
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
`,i={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},r=new Map(`
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
`.trim().split(/[;\n]/).map(a=>{let[e="",i="",r=""]=a.trim().split(" ");return[e,[Number(i),Number(r)]]})),n=new Map(e.trim().split("\n").map(a=>{let[e="",n="",o="",t=""]=a.split("|"),[u=0/0,l=0/0]=r.get(e)??[];return[e,{code:e,city:{pl:n,en:o||n,de:i[e]??(o||n)},timeZone:t,lat:u,lng:l}]}));function o(a){return a?n.get(a.toUpperCase()):void 0}let t=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;a.s(["p",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"N",0,function(a){let e=a.trim().toLowerCase();if(e)for(let a of n.values())for(let i of Object.values(a.city)){let r=i.toLowerCase();if(r===e||r.startsWith(`${e} (`))return a}},"h",0,o,"U",0,function(a){let e=t.exec(a?.trim()??"");return o(e?.[1]??e?.[2])},"O",0,function(a,e,i){let r=o(a),n=(r?.city[e]??i)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${a.toUpperCase()})`:a.toUpperCase()}])},38520,a=>{"use strict";var e=a.i(12268),i=a.i(41478),r=a.i(93440),n=a.i(99506),o=a.i(58162),t=a.i(49913),u=a.i(25395);let l=["Public","Bank","School","Authorities","Optional","Observance"],s=120,c=(a,e=s)=>"string"==typeof a&&a.trim()?a.trim().slice(0,e):void 0;function A(a,e,i){let r=e.toUpperCase(),n=new Set(a.flatMap(a=>a.counties??[])),o=a=>n.size>=4&&[...n].every(e=>a.includes(e)),t=new Map;for(let e of a){let a=e.types.includes("Public")||e.types.includes("Bank"),n=e.types.includes("Optional");if(!a&&!n)continue;let u=e.global||!e.counties?.length||o(e.counties);if(!u&&i&&!e.counties?.includes(i))continue;let l=!u,s=!!a&&(!l||!!i)||"maybe",c=a?l?"regional":"national":"optional",A={date:e.date,countryCode:r,localName:e.localName,name:e.name,scope:c,status:s,...l&&e.counties?{counties:e.counties}:{}},m=t.get(e.date)??[],p=m.findIndex(a=>a.name===A.name||a.localName===A.localName);p<0?m.push(A):d(A)>d(m[p])&&(m[p]=A),t.set(e.date,m)}for(let a of t.values())a.sort((a,e)=>d(e)-d(a));return{countryCode:r,byDate:t}}let d=a=>2*(!0===a.status)+ +("national"===a.scope),m=a=>!!a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng);function p(a){return(0,i.Y)(a.countryCode)?a.countryCode:(0,i.A)(a.country)}function f(a,e){let i,r=50,n=new Set;for(let t of e){let e=(0,u._)(a,t);e<=r&&(i=t,r=e),(e<=300||t.bbox&&0===(0,o.I)(t.bbox,a))&&n.add(t.countryCode)}return i?i.countryCode:1===n.size?[...n][0]:void 0}let E=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function g(a,e){let n=a?.name.trim()??"",o=(0,i.B)(n);if(o)return o;let u=E.exec(n),l=(0,t.h)(u?.[1]??u?.[2]);return(0,r.countryOfTimeZone)(l?.timeZone)??(0,r.countryOfTimeZone)(e)}function S(a,e){if(a.index!==a.count-1)return!1;let i=!!e&&(0,n.L)(a.start)>=e&&a.to!==a.home;return a.index>0&&a.to===a.origin&&a.origin!==a.home||i}let h=(a,e)=>a.start<e.start?-1:+(a.start>e.start);function M(a,e){let r=(0,i.B)(e?.address);if(r)return r;let n=1===a.countries.length?a.countries[0]:void 0;return m(e)&&0!==a.anchors.length?a.countryNear(e):n}a.s(["N",0,50,"$",0,function(a){let e=new Map,i=new Set;for(let[r,n]of a.data)if(null===n)i.add(r);else{let i=a.region&&a.region.startsWith(`${r}-`)?a.region:void 0;e.set(r,A(n,r,i))}let r=a.stays??[],o=a.visits??[],t=a=>r.find(e=>e.from<=a&&a<e.to)?.countryCode??o.find(e=>e.from<a&&a<e.to)?.countryCode??r.find(e=>e.to===a)?.countryCode??o.find(e=>e.from===a)?.countryCode??o.find(e=>e.to===a)?.countryCode,u=a.anchors??[],l=(i,r)=>{let n;return(r?[r]:(n=t(i))?[n]:a.countries).flatMap(a=>e.get(a)?.byDate.get(i)??[])};return{countries:a.countries,supported:new Set(e.keys()),unsupported:i,anchors:u,countryOn:t,countryNear:a=>f(a,u),status:(a,i)=>{var r;let n=e.get(a);return n?(r=n.byDate.get(i),!!r?.length&&(!!r.some(a=>!0===a.status)||"maybe")):null},on:l,inRange(a,e){let i=[],r=Math.min((0,n.F)(a,e),400);for(let e=0;e<=r;e++)i.push(...l((0,n.b)(a,e)));return i}}},"w",0,f,"X",0,p,"k",0,A,"c",0,S,"i",0,function(a,e){if(!Array.isArray(a))return[];let i=e.toUpperCase(),r=[];for(let e of a.slice(0,400)){if(!e||"object"!=typeof e)continue;let a=e.date,o=c(e.name),t=c(e.localName)??o;if(!(0,n.r)(a)||!o||!t||"string"==typeof e.countryCode&&e.countryCode.toUpperCase()!==i)continue;let u=(Array.isArray(e.types)?e.types:["Public"]).filter(a=>l.includes(a)),s=Array.isArray(e.counties)?e.counties.filter(a=>"string"==typeof a&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(a)).slice(0,100):[];r.push({date:a,localName:t,name:o,countryCode:i,global:!1!==e.global||0===s.length,...s.length&&!1===e.global?{counties:s}:{},types:u.length?u:["Public"]})}return r.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date))},"S",0,M,"a",0,function(a,e){if(!a||0===a.supported.size)return;let i=M(a,e);return i?e=>a.status(i,e):e=>{let i=a.countries.map(i=>a.status(i,e));return i.some(a=>!0===a||"maybe"===a)?"maybe":!i.includes(!1)&&null}},"b",0,function(a,r=[],o=[]){let t=[],u=(a,e)=>{e&&m(a)&&t.push({lat:a.lat,lng:a.lng,countryCode:e})},l=p(a.destination);if(l&&m(a.destination)){let e=a.destination.bbox,i=!!e&&4===e.length&&e.every(Number.isFinite)&&e[0]<e[2]&&e[1]<e[3];t.push({lat:a.destination.lat,lng:a.destination.lng,countryCode:l,...i?{bbox:e}:{}})}let s=[],c=(a,e)=>s.push({date:a,code:e}),A=[],d=r.filter(e.E).sort(h),E=d.map(a=>({from:g(a.from,a.startTimeZone),to:g(a.to,a.endTimeZone)})),M=E[0]?.from,B=a=>{let e=d[a],i=d[a+1];if(!e?.end||!i)return!1;let r=(0,n.D)(e.end,i.start);return r>=0&&r<720};d.forEach((e,i)=>{let{from:r,to:o}=E[i];i>0&&r&&r!==M&&!B(i-1)&&r!==E[i-1].to&&(c(e.start,r),u(e.from,r));let t=S({index:i,count:d.length,start:e.start,to:o,origin:M,home:l},a.endDate);if(!o||t||B(i))return;u(e.to,o),c(e.end??e.start,o);let s=(0,n.L)(e.end??e.start),m=d[i+1]?(0,n.L)(d[i+1].start):void 0,p=m&&(0,n.r)(m)&&m>s?m:(0,n.b)(s,1);(0,n.r)(s)&&A.push({from:s,to:p,countryCode:o})});let L=new Map(o.map(a=>[a.id,a])),C=[];for(let a of r.filter(e.t).sort(h)){let e=a.placeId?L.get(a.placeId):void 0,r=m(e)?e:m(a.location)?a.location:void 0,o=(0,n.L)(a.start),l=(0,i.B)(e?.address)??(0,i.B)(a.location?.name)??(r?f(r,t):A.find(a=>a.from===o)?.countryCode);if(!l)continue;c(a.start,l),u(r,l);let s=a.end?(0,n.L)(a.end):(0,n.b)(o,1);(0,n.r)(o)&&(0,n.r)(s)&&(0,n.F)(o,s)>0&&C.push({from:o,to:s,countryCode:l})}let k=[];for(let a of[l,...s.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date)).map(a=>a.code)])a&&!k.includes(a)&&k.length<8&&k.push(a);return{countries:k,stays:C,visits:A,anchors:t}},"x",0,function(a){let e=(0,n.d)(a.startDate).year,i=(0,n.d)(a.endDate).year,r=[];for(let a=e;a<=i&&r.length<3;a++)r.push(a);return r}])}]);