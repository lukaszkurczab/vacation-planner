(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,a=>{"use strict";var e=a.i(99506),r=a.i(32751);function i(a){return"stay"===a.type}function n(a){return r.TRANSPORT_BOOKING_TYPES.includes(a.type)}function t(a){if(!a.end)return[];let r=(0,e.datePart)(a.start),i=(0,e.datePart)(a.end),n=(0,e.diffDays)(r,i),t=[];for(let a=0;a<n;a++)t.push((0,e.addDays)(r,a));return t}function o(a,r){return a.filter(i).filter(a=>a.end&&(0,e.datePart)(a.start)<=r&&r<(0,e.datePart)(a.end)).sort((a,e)=>a.start<e.start?-1:+(a.start>e.start))[0]}function l(a,e,r){let i=a[e];if(i&&void 0!==i.lat&&void 0!==i.lng)return i;if("location"===e&&a.placeId&&r){let e=r.find(e=>e.id===a.placeId);if(e)return{name:i?.name??e.name,lat:e.lat,lng:e.lng}}return i}function s(a,e,r){var i;if(!e)return null;let n="stay"===a.type&&!!a.title.trim()&&a.title.trim()!==e.name&&((i=e.name).includes(",")||i.length>40);return{name:n?a.title.trim():e.name,...n&&e.name?{address:e.name}:{},...void 0!==e.lat?{lat:e.lat}:{},...void 0!==e.lng?{lng:e.lng}:{},bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:r}}function u(a,e,r){return s(a,l(a,"location",r),e)??{name:a.title.trim(),bookingId:a.id,...a.placeId?{placeId:a.placeId}:{},source:e}}function c(a,e){let i="string"==typeof e?e:e.base;if(a.type&&!r.TRANSPORT_BOOKING_TYPES.includes(a.type)){let r=a.startTimeZone&&a.endTimeZone||"string"==typeof e?void 0:e.bookingZone(a),n=a.startTimeZone??r??i;return{start:n,end:a.endTimeZone??a.startTimeZone??r??(a.end?i:n)}}let n=a.startTimeZone??i;return{start:n,end:a.endTimeZone??(a.end?i:n)}}function d(a,r,i="UTC"){let n="start"===r?a.start:a.end??a.start,t=c(a,i)[r];return A(n.length>=16?n:`${(0,e.datePart)(n)}T00:00`,t)}function A(a,r){try{let i=(0,e.zonedTimeToInstant)(a,r).getTime();return Number.isFinite(i)?i:null}catch{return null}}function m(a,r,i,t){let o=a=>"start"===i?a.start:a.end??a.start;return a.filter(n).filter(a=>"start"===i?(0,e.datePart)(a.start)===r:a.end?(0,e.datePart)(a.end)===r:(0,e.datePart)(a.start)===r).sort((a,e)=>{let r=d(a,i,t),n=d(e,i,t);return null!==r&&null!==n&&r!==n?r-n:o(a)<o(e)?-1:+(o(a)>o(e))})}a.s(["BOOKING_ICON",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"baseLatLng",0,function(a){return a&&void 0!==a.lat&&void 0!==a.lng?{lat:a.lat,lng:a.lng}:null},"bookingInstant",0,d,"bookingZones",0,c,"buildTimeline",0,function(a,r){let n=(0,e.tripDays)(a).map((a,e)=>({kind:"day",date:a,dayIndex:e}));for(let a of r)n.push({kind:"booking",booking:a,date:(0,e.datePart)(a.start),at:a.start,edge:"start"}),i(a)&&a.end&&n.push({kind:"booking",booking:a,date:(0,e.datePart)(a.end),at:a.end,edge:"end"});let t=a=>{if("day"===a.kind)return`${a.date}|0`;let r=(0,e.timePart)(a.at)??"00:00";return`${a.date}|1|${r}|${+("end"!==a.edge)}|${a.booking.title}`};return n.sort((a,e)=>{let r=t(a),i=t(e);return r<i?-1:+(r>i)})},"dayBase",0,function(a,r,i,n){let t=o(r,(0,e.addDays)(i,-1)),c=o(r,i),A=r.filter(a=>"car"!==a.type),p=a.timeZone??"UTC",f=t?u(t,"stay",n):null;if(!f){let a=m(A,i,"end",p),r=a.filter(a=>(0,e.datePart)(a.start)!==i),t=r[r.length-1]??a[0];t&&(f=s(t,l(t,"to",n),"arrival"))}!f&&c&&(f=u(c,(0,e.datePart)(c.start)===i?"destination":"stay",n));let g=c?u(c,"stay",n):null;if(!g){let r=m(A,i,"start",p).filter(a=>f?.source!=="arrival"||f.bookingId!==a.id),t=r[r.length-1];if(t){let r=l(t,"to",n);g=i<a.endDate&&t.end&&(0,e.datePart)(t.end)===i&&(d(t,"end",p)??0)>=(d(t,"start",p)??0)&&r&&void 0!==r.lat&&void 0!==r.lng?s(t,r,"arrival"):s(t,l(t,"from",n),"departure")}}return g||(g=f),c?{start:f,end:g,stay:c}:{start:f,end:g}},"detectConflicts",0,function(a,r){let n=[];for(let a of r)a.end&&a.end<a.start&&!(a.endTimeZone||a.startTimeZone)&&n.push({type:"invalid-range",bookingId:a.id});let o=r.filter(i).filter(a=>a.end&&a.end>a.start);for(let a=0;a<o.length;a++)for(let e=a+1;e<o.length;e++){let r=o[a],i=o[e],l=new Set(t(i)),s=t(r).filter(a=>l.has(a));s.length>0&&n.push({type:"overlapping-stays",bookingIds:[r.id,i.id],nights:s})}let l=new Set(o.flatMap(t));for(let r of(0,e.tripDays)(a).slice(0,-1))l.has(r)||n.push({type:"missing-stay",date:r});return n},"isStay",0,i,"isTransport",0,n,"localInstant",0,A,"nightsOf",0,t,"stayForNight",0,o])},93440,a=>{"use strict";var e=a.i(99506),r=a.i(25395);let i=`
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
`,n=null;function t(){if(n)return n;for(let a of(n=new Map,i.split("\n"))){let[e,...r]=a.trim().split(" ");e&&0!==r.length&&n.set(e,r.map(a=>{let[e="",r]=a.split("@");if(!r)return{zone:e};let[i="",n]=r.split("~"),[t,o]=i.split(",").map(Number);return{zone:e,lat:t,lng:o,...n?{radiusKm:Number(n)}:{}}}))}return n}let o=null;a.s(["countryOfTimeZone",0,function(a){if(a){if(!o)for(let[a,e]of(o=new Map,t()))for(let{zone:r}of e)o.set(r,o.has(r)&&o.get(r)!==a?null:a);return o.get(a)??void 0}},"countryTimeZones",0,function(a){return[...new Set((t().get(a.toUpperCase())??[]).map(a=>a.zone))]},"suggestTimeZone",0,function(a,i){if(!i)return null;let n=(t().get(i.toUpperCase())??[]).filter(a=>(0,e.isValidTimeZone)(a.zone));if(n.length<=1)return n[0]?.zone??null;let o=null,l=1/0;for(let e of n){if(void 0===e.radiusKm||void 0===e.lat||void 0===e.lng)continue;let i=(0,r.haversineKm)(a,{lat:e.lat,lng:e.lng});i<=e.radiusKm&&i<l&&(o=e,l=i)}if(o)return o.zone;let s=n.filter(a=>void 0===a.radiusKm),u=Math.cos(a.lat*Math.PI/180),c=null,d=1/0;for(let e of s.length?s:n){if(void 0===e.lat||void 0===e.lng)continue;let r=Math.abs(a.lng-e.lng);r>180&&(r=360-r);let i=Math.hypot(r*u,(a.lat-e.lat)*.5);i<d&&(d=i,c=e)}return c?.zone??s[0]?.zone??n[0]?.zone??null}])},41758,a=>{"use strict";var e=a.i(12268),r=a.i(99506),i=a.i(32751);let n=(a,e)=>`booking:${a}:${e}`,t={activity:120,restaurant:90,other:60};function o(a,e){let i=(0,r.timePart)(a)??e;return i&&(0,r.isValidHHMM)(i)?(0,r.parseHHMM)(i):null}function l(a){return a&&void 0!==a.lat&&void 0!==a.lng?{lat:a.lat,lng:a.lng}:null}function s(a,e){let r=l(a.location);if(r)return{point:r,...a.location?.name?{name:a.location.name}:{}};let i=a.placeId?e.find(e=>e.id===a.placeId):void 0;return i?{point:{lat:i.lat,lng:i.lng},name:a.location?.name??i.name}:{point:null,...a.location?.name?{name:a.location.name}:{}}}let u=a=>(a??"").trim().toLowerCase();a.s(["dayEventsFor",0,function(a,c,d=[],A=[],m="UTC"){let p=A.filter(a=>a.date===c),f=new Set(p.filter(a=>"place"!==a.kind).map(a=>u(a.title)).filter(Boolean)),g=new Set(p.map(a=>a.placeId).filter(a=>!!a)),E=[];for(let e of a){if("stay"!==e.type&&f.has(u(e.title)))continue;let a=(0,r.datePart)(e.start),A=e.end?(0,r.datePart)(e.end):a,m={booking:e};if("stay"===e.type){let r=s(e,d),i={point:r.point,blocking:!1,moves:!1,...r.name?{placeName:r.name}:{}};if(a===c){let a=o(e.start,"15:00");null!==a&&E.push({...m,...i,id:n(e.id,"checkin"),kind:"checkin",start:a,end:a})}if(e.end&&A===c&&A!==a){let a=o(e.end,"11:00");null!==a&&E.push({...m,...i,id:n(e.id,"checkout"),kind:"checkout",start:a,end:a})}continue}if(e.placeId&&g.has(e.placeId))continue;let p={...e.from?.name?{fromName:e.from.name}:{},...e.to?.name?{toName:e.to.name}:{}};if("car"===e.type){let r=l(e.from)??l(e.location),i=l(e.to)??l(e.location)??r;if(a===c){let a=o(e.start,null);null!==a&&E.push({...m,...p,id:n(e.id,"pickup"),kind:"pickup",start:a,end:a,point:r,blocking:!0,moves:!1,...e.from?.name??e.location?.name?{placeName:e.from?.name??e.location?.name}:{}})}if(e.end&&A===c){let a=o(e.end,null);null!==a&&E.push({...m,...p,id:n(e.id,"dropoff"),kind:"dropoff",start:a,end:a,point:i,blocking:!0,moves:!1,...e.to?.name??e.location?.name?{placeName:e.to?.name??e.location?.name}:{}})}continue}if(i.TRANSPORT_BOOKING_TYPES.includes(e.type)){let r=l(e.from),i=l(e.to),t=o(e.start,null),s=e.end?o(e.end,null):null,u=a=>({...m,...p,id:n(e.id,"departure"),kind:"departure",start:a,end:a,point:r,after:null,blocking:!0,moves:!0}),d=a=>({...m,...p,id:n(e.id,"arrival"),kind:"arrival",start:a,end:a,point:null,after:i,blocking:!0,moves:!0});if(a===c&&A===c){if(null===t)continue;null===s||s>=t?E.push({...m,...p,id:n(e.id,"transport"),kind:"transport",start:t,end:s??t,point:r,after:e.end?i:r,blocking:!0,moves:!!e.end}):E.push(u(t),d(s))}else a===c?null!==t&&E.push(u(t)):A===c&&null!==s&&E.push(d(s));continue}if(a!==c)continue;let h=o(e.start,null);if(null===h)continue;let y=e.end&&A===c?o(e.end,null):null,M=s(e,d),k=null!==y&&y>h?y:h+(t[e.type]??60);E.push({...m,id:n(e.id,"booking"),kind:"booking",start:h,end:k,point:M.point,blocking:!0,moves:!1,...M.name?{placeName:M.name}:{}})}let h={arrival:0,checkout:1,dropoff:2,transport:3,departure:3,pickup:4,booking:5,checkin:6},y=new Map(E.map(a=>{let i,n,t;return[a,(i="arrival"===a.kind||"checkout"===a.kind||"dropoff"===a.kind,n=(0,e.bookingZones)(a.booking,m),t=`${c}T${(0,r.formatHHMM)(a.start)}`,(0,e.localInstant)(t,i?n.end:n.start)??(0,e.localInstant)(t,"UTC")??0)]}));return E.sort((a,e)=>y.get(a)-y.get(e)||a.start-e.start||h[a.kind]-h[e.kind]||(a.id<e.id?-1:+(a.id>e.id)))},"eventZones",0,function(a,r){let i=(0,e.bookingZones)(a.booking,r);return"arrival"===a.kind||"checkout"===a.kind||"dropoff"===a.kind?{start:i.end,end:i.end}:"transport"===a.kind?i:{start:i.start,end:i.start}},"isEventId",0,a=>a.startsWith("booking:")])},49913,a=>{"use strict";let e={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},r=new Map(`
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
`.trim().split("\n").map(a=>{let[r="",i="",n="",t=""]=a.split("|");return[r,{code:r,city:{pl:i,en:n||i,de:e[r]??(n||i)},timeZone:t}]}));function i(a){return a?r.get(a.toUpperCase()):void 0}a.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(a){let e=a.trim().toLowerCase();if(e)for(let a of r.values())for(let r of Object.values(a.city)){let i=r.toLowerCase();if(i===e||i.startsWith(`${e} (`))return a}},"airportByCode",0,i,"airportLabel",0,function(a,e,r){let n=i(a),t=(n?.city[e]??r)?.replace(/\s*\([^)]*\)\s*$/,"");return t?`${t} (${a.toUpperCase()})`:a.toUpperCase()}])},38520,a=>{"use strict";var e=a.i(12268),r=a.i(41478),i=a.i(93440),n=a.i(99506),t=a.i(58162),o=a.i(49913),l=a.i(25395);let s=["Public","Bank","School","Authorities","Optional","Observance"],u=120,c=(a,e=u)=>"string"==typeof a&&a.trim()?a.trim().slice(0,e):void 0;function d(a,e,r){let i=e.toUpperCase(),n=new Set(a.flatMap(a=>a.counties??[])),t=a=>n.size>=4&&[...n].every(e=>a.includes(e)),o=new Map;for(let e of a){let a=e.types.includes("Public")||e.types.includes("Bank"),n=e.types.includes("Optional");if(!a&&!n)continue;let l=e.global||!e.counties?.length||t(e.counties);if(!l&&r&&!e.counties?.includes(r))continue;let s=!l,u=!!a&&(!s||!!r)||"maybe",c=a?s?"regional":"national":"optional",d={date:e.date,countryCode:i,localName:e.localName,name:e.name,scope:c,status:u,...s&&e.counties?{counties:e.counties}:{}},m=o.get(e.date)??[],p=m.findIndex(a=>a.name===d.name||a.localName===d.localName);p<0?m.push(d):A(d)>A(m[p])&&(m[p]=d),o.set(e.date,m)}for(let a of o.values())a.sort((a,e)=>A(e)-A(a));return{countryCode:i,byDate:o}}let A=a=>2*(!0===a.status)+ +("national"===a.scope),m=a=>!!a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng);function p(a){return(0,r.isCountryCode)(a.countryCode)?a.countryCode:(0,r.countryCodeFromName)(a.country)}function f(a,e){let r,i=50,n=new Set;for(let o of e){let e=(0,l.haversineKm)(a,o);e<=i&&(r=o,i=e),(e<=300||o.bbox&&0===(0,t.kmOutsideBBox)(o.bbox,a))&&n.add(o.countryCode)}return r?r.countryCode:1===n.size?[...n][0]:void 0}let g=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function E(a,e){let n=a?.name.trim()??"",t=(0,r.countryCodeFromAddress)(n);if(t)return t;let l=g.exec(n),s=(0,o.airportByCode)(l?.[1]??l?.[2]);return(0,i.countryOfTimeZone)(s?.timeZone)??(0,i.countryOfTimeZone)(e)}function h(a,e){if(a.index!==a.count-1)return!1;let r=!!e&&(0,n.datePart)(a.start)>=e&&a.to!==a.home;return a.index>0&&a.to===a.origin&&a.origin!==a.home||r}let y=(a,e)=>a.start<e.start?-1:+(a.start>e.start);function M(a,e){let i=(0,r.countryCodeFromAddress)(e?.address);if(i)return i;let n=1===a.countries.length?a.countries[0]:void 0;return m(e)&&0!==a.anchors.length?a.countryNear(e):n}a.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(a){let e=new Map,r=new Set;for(let[i,n]of a.data)if(null===n)r.add(i);else{let r=a.region&&a.region.startsWith(`${i}-`)?a.region:void 0;e.set(i,d(n,i,r))}let i=a.stays??[],t=a.visits??[],o=a=>i.find(e=>e.from<=a&&a<e.to)?.countryCode??t.find(e=>e.from<a&&a<e.to)?.countryCode??i.find(e=>e.to===a)?.countryCode??t.find(e=>e.from===a)?.countryCode??t.find(e=>e.to===a)?.countryCode,l=a.anchors??[],s=(r,i)=>{let n;return(i?[i]:(n=o(r))?[n]:a.countries).flatMap(a=>e.get(a)?.byDate.get(r)??[])};return{countries:a.countries,supported:new Set(e.keys()),unsupported:r,anchors:l,countryOn:o,countryNear:a=>f(a,l),status:(a,r)=>{var i;let n=e.get(a);return n?(i=n.byDate.get(r),!!i?.length&&(!!i.some(a=>!0===a.status)||"maybe")):null},on:s,inRange(a,e){let r=[],i=Math.min((0,n.diffDays)(a,e),400);for(let e=0;e<=i;e++)r.push(...s((0,n.addDays)(a,e)));return r}}},"countryAt",0,f,"destinationCountry",0,p,"interpretHolidays",0,d,"isReturnLeg",0,h,"parseNagerHolidays",0,function(a,e){if(!Array.isArray(a))return[];let r=e.toUpperCase(),i=[];for(let e of a.slice(0,400)){if(!e||"object"!=typeof e)continue;let a=e.date,t=c(e.name),o=c(e.localName)??t;if(!(0,n.isValidISODate)(a)||!t||!o||"string"==typeof e.countryCode&&e.countryCode.toUpperCase()!==r)continue;let l=(Array.isArray(e.types)?e.types:["Public"]).filter(a=>s.includes(a)),u=Array.isArray(e.counties)?e.counties.filter(a=>"string"==typeof a&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(a)).slice(0,100):[];i.push({date:a,localName:o,name:t,countryCode:r,global:!1!==e.global||0===u.length,...u.length&&!1===e.global?{counties:u}:{},types:l.length?l:["Public"]})}return i.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date))},"placeCountry",0,M,"placeHolidayCheck",0,function(a,e){if(!a||0===a.supported.size)return;let r=M(a,e);return r?e=>a.status(r,e):e=>{let r=a.countries.map(r=>a.status(r,e));return r.some(a=>!0===a||"maybe"===a)?"maybe":!r.includes(!1)&&null}},"tripCountries",0,function(a,i=[],t=[]){let o=[],l=(a,e)=>{e&&m(a)&&o.push({lat:a.lat,lng:a.lng,countryCode:e})},s=p(a.destination);if(s&&m(a.destination)){let e=a.destination.bbox,r=!!e&&4===e.length&&e.every(Number.isFinite)&&e[0]<e[2]&&e[1]<e[3];o.push({lat:a.destination.lat,lng:a.destination.lng,countryCode:s,...r?{bbox:e}:{}})}let u=[],c=(a,e)=>u.push({date:a,code:e}),d=[],A=i.filter(e.isTransport).sort(y),g=A.map(a=>({from:E(a.from,a.startTimeZone),to:E(a.to,a.endTimeZone)})),M=g[0]?.from,k=a=>{let e=A[a],r=A[a+1];if(!e?.end||!r)return!1;let i=(0,n.diffLocalMinutes)(e.end,r.start);return i>=0&&i<720};A.forEach((e,r)=>{let{from:i,to:t}=g[r];r>0&&i&&i!==M&&!k(r-1)&&i!==g[r-1].to&&(c(e.start,i),l(e.from,i));let o=h({index:r,count:A.length,start:e.start,to:t,origin:M,home:s},a.endDate);if(!t||o||k(r))return;l(e.to,t),c(e.end??e.start,t);let u=(0,n.datePart)(e.end??e.start),m=A[r+1]?(0,n.datePart)(A[r+1].start):void 0,p=m&&(0,n.isValidISODate)(m)&&m>u?m:(0,n.addDays)(u,1);(0,n.isValidISODate)(u)&&d.push({from:u,to:p,countryCode:t})});let S=new Map(t.map(a=>[a.id,a])),C=[];for(let a of i.filter(e.isStay).sort(y)){let e=a.placeId?S.get(a.placeId):void 0,i=m(e)?e:m(a.location)?a.location:void 0,t=(0,n.datePart)(a.start),s=(0,r.countryCodeFromAddress)(e?.address)??(0,r.countryCodeFromAddress)(a.location?.name)??(i?f(i,o):d.find(a=>a.from===t)?.countryCode);if(!s)continue;c(a.start,s),l(i,s);let u=a.end?(0,n.datePart)(a.end):(0,n.addDays)(t,1);(0,n.isValidISODate)(t)&&(0,n.isValidISODate)(u)&&(0,n.diffDays)(t,u)>0&&C.push({from:t,to:u,countryCode:s})}let T=[];for(let a of[s,...u.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date)).map(a=>a.code)])a&&!T.includes(a)&&T.length<8&&T.push(a);return{countries:T,stays:C,visits:d,anchors:o}},"tripYears",0,function(a){let e=(0,n.parseISODate)(a.startDate).year,r=(0,n.parseISODate)(a.endDate).year,i=[];for(let a=e;a<=r&&i.length<3;a++)i.push(a);return i}])},55289,a=>{"use strict";var e=a.i(12268),r=a.i(41478),i=a.i(93440),n=a.i(99506),t=a.i(41758),o=a.i(58162),l=a.i(49913),s=a.i(25395),u=a.i(38520);let c=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/,d=a=>!!a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng),A=a=>!!a&&(0,n.isValidTimeZone)(a);function m(a,e){if(A(e))return e;let r=c.exec(a?.name.trim()??""),i=(0,l.airportByCode)(r?.[1]??r?.[2])?.timeZone;return A(i)?i:void 0}function p(a){return{base:a,multi:!1,zones:[a],changes:[],zoneAt:()=>a,zoneAtLocal:()=>a,planZone:()=>a,zoneOn:()=>a,zoneNear:()=>a,placeZone:()=>a,bookingZone:()=>a,locatedZone:()=>a}}function f(a,e,r="en-GB"){try{let i=(0,n.zonedTimeToInstant)(10===a.length?`${a}T12:00`:a,e),t=new Intl.DateTimeFormat(r,{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(i);return t.find(a=>"timeZoneName"===a.type)?.value??e}catch{return e}}function g(a,e,r,i="en-GB"){if(e!==r){try{let i=(0,n.zonedTimeToInstant)(10===a.length?`${a}T12:00`:a,e);if((0,n.timeZoneOffsetMinutes)(i,e)===(0,n.timeZoneOffsetMinutes)(i,r))return}catch{return}return f(a,e,i)}}a.s(["daySunPoint",0,function(a,r,i,n){if(!a.multi)return null;let t=(0,e.baseLatLng)(r.end)??(0,e.baseLatLng)(r.start)??n;return{lat:t.lat,lng:t.lng,timeZone:a.placeZone(t,a.zoneOn(i))}},"eventZoneTags",0,function(a,e,r,i){if(!r.multi)return{};let o=r.zoneOn(e),l=(0,t.eventZones)(a,r),s=a=>{let r=Math.round(a),i=Math.floor(r/1440);return`${i?(0,n.addDays)(e,i):e}T${(0,n.formatHHMM)(r-1440*i)}`},u=g(s(a.start),l.start,o,i),c=a.end>a.start?g(s(a.end),l.end,o,i):void 0;return{...u?{start:u}:{},...c?{end:c}:{}}},"singleZone",0,p,"tripZones",0,function(a,t=[],l=[]){let c=a.timeZone,f=[],g=a.destination;d(g)&&!(0,o.isWideDestination)(g)&&f.push({lat:g.lat,lng:g.lng,zone:c});let E=t.filter(e.isTransport).sort((a,e)=>a.start<e.start?-1:+(a.start>e.start)),h=E.map(a=>({from:m(a.from,a.startTimeZone),to:m(a.to,a.endTimeZone)}));E.forEach((a,e)=>{let{from:r,to:i}=h[e];r&&d(a.from)&&f.push({lat:a.from.lat,lng:a.from.lng,zone:r}),i&&d(a.to)&&f.push({lat:a.to.lat,lng:a.to.lng,zone:i})});let y=h[0]?.from,M=E.map((a,r)=>(0,e.bookingInstant)({...a,startTimeZone:h[r].from??a.startTimeZone},"start",c)),k=[],S=new Map;E.forEach((r,i)=>{let t=h[i].to;if(!t||!r.end)return;let o=(0,e.bookingInstant)({...r,endTimeZone:t},"end",c);if(null===o)return;let l=(0,n.datePart)(r.end);if(a.endDate&&l>a.endDate)return;let s=M[i+1]??null;if(null!==s&&s>=o&&s-o<432e5||(0,u.isReturnLeg)({index:i,count:E.length,start:r.start,to:t,origin:y,home:c},a.endDate))return;let d={at:o,date:l,zone:t,source:"arrival"};S.set(d,i),k.push(d)});let C=(0,u.tripCountries)(a,t,l).anchors,T=a=>{let e,r=u.COUNTRY_ANCHOR_KM;for(let i of f){let n=(0,s.haversineKm)(a,i);n<=r&&(e=i.zone,r=n)}return e},B=(a,...e)=>{let n;for(let a of e)n??=(0,r.countryCodeFromAddress)(a);if(!n&&a&&(n=(0,u.countryAt)(a,C)),!n)return;if(a){let e=(0,i.suggestTimeZone)(a,n)??void 0;if(A(e))return e}let t=(0,i.countryTimeZones)(n).filter(A);return 1===t.length?t[0]:void 0},b=new Map(l.map(a=>[a.id,a]));for(let r of t.filter(e.isStay).sort((a,e)=>a.start<e.start?-1:+(a.start>e.start))){let i=r.placeId?b.get(r.placeId):void 0,t=d(i)?{lat:i.lat,lng:i.lng}:d(r.location)?{lat:r.location.lat,lng:r.location.lng}:void 0,o=(0,n.datePart)(r.start);if(a.endDate&&o>a.endDate)continue;let l=k.find(a=>"arrival"===a.source&&(a.date===o||a.date===(0,n.addDays)(o,1))),s=(A(r.startTimeZone)?r.startTimeZone:void 0)??(t?T(t):void 0)??B(t,i?.address,r.location?.name)??(t?void 0:l?.zone);if(!s)continue;t&&f.push({...t,zone:s});let u=(0,e.localInstant)(`${o}T${(0,n.timePart)(r.start)??"15:00"}`,s);if(null===u)continue;let c=l?Math.max(u,l.at):u;k.push({at:c,date:o,zone:s,source:"stay"})}k.sort((a,e)=>a.at-e.at);let P=a=>{let e=a.placeId?b.get(a.placeId):void 0,r=a.location,i=d(e)?{lat:e.lat,lng:e.lng}:d(r)?{lat:r.lat,lng:r.lng}:void 0;return(i?T(i):void 0)??B(i,e?.address,r?.name)},L=function(){let e=k[0];if(!e)return c;let r=a.startDate,i=E[0],t=!!i&&(!r||(0,n.datePart)(i.start)<=r);if(!r||e.date<=r||t&&0===S.get(e))return e.zone;let o=M[0];return!t&&h[0]?.from&&null!=o&&o<=e.at?h[0].from:c}();if(!(L!==c||k.some(a=>a.zone!==c)))return{...p(c),locatedZone:P};let N=[c];for(let a of[L,...k.map(a=>a.zone)])N.includes(a)||N.push(a);let v=new Map,R=a=>{let r=v.get(a);if(void 0!==r)return r;let i=L;for(let r of k){let n=(0,e.localInstant)(a,r.zone);if(null===n||n<r.at)break;i=r.zone}return v.size<2048&&v.set(a,i),i},I=a=>{if(!a)return;let e=d(a)?{lat:a.lat,lng:a.lng}:void 0;return(e?T(e):void 0)??B(e,a.address)};return{base:c,multi:!0,zones:N,changes:k,zoneAt:a=>{let e=a.getTime(),r=L;for(let a of k){if(a.at>e)break;r=a.zone}return r},zoneAtLocal:R,planZone:(a,e)=>R(`${a}T${(0,n.formatHHMM)(Math.max(0,Math.min(1439,Math.round(e))))}`),zoneOn:a=>R(`${a}T23:59`),zoneNear:I,placeZone:(a,e)=>I(a)??e??c,bookingZone:a=>{let e=P(a);return e||(a.start&&(0,n.timePart)(a.start)?R(a.start):void 0)},locatedZone:P}},"zoneOffsetLabel",0,f,"zoneShiftMinutes",0,function(a,r,i,t){if(i===t)return 0;let o=(0,e.localInstant)(`${a}T${(0,n.formatHHMM)(Math.max(0,Math.min(1439,Math.round(r))))}`,i);if(null===o)return 0;let l=new Date(o);return(0,n.timeZoneOffsetMinutes)(l,t)-(0,n.timeZoneOffsetMinutes)(l,i)},"zoneTag",0,g,"zonesByCountry",0,function(a,e,r){let t={};for(let a of e.countries)t[a]=[];for(let a of[...e.stays,...e.visits]){let e=t[a.countryCode];if(!e)continue;let i=a.from;for(let t=0;t<62&&i<a.to;t++,i=(0,n.addDays)(i,1)){let a=r.zoneOn(i);e.includes(a)||e.push(a)}}let o=(0,u.destinationCountry)(a.destination);for(let r of e.countries)if(!t[r].length)if(r===o)t[r]=[a.timeZone];else{let a=(0,i.countryTimeZones)(r).filter(A);t[r]=1===a.length?a:[]}return t}])}]);