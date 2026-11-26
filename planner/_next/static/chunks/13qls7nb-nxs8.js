(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),t=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function i(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}let o=new Map;function n(e){let a=o.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}o.set(e,a)}return a}function s(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let l=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),u=0,c=null;function d(){if(c)return c;let e=n("en"),t=[];for(let i of r)for(let o of r){let r=i+o;if(!a.has(r))try{e?.of(r)&&Intl.getCanonicalLocales(`und-${r}`)[0]===`und-${r}`&&t.push(r)}catch{}}return c=t,t}function A(e){if(!e)return;let a=s(e);if(!a||a.length<2)return;let r=e.trim();if(!/^[A-Z]{2}$/.test(r))for(;;){let e=l.get(a);if(e)return e;if(u>=t.length)return;!function(e){let a=n(e);if(a)for(let e of d()){let t;try{t=a.of(e)}catch{t=void 0}if(!t||t===e)continue;let r=s(t);r&&!l.has(r)&&l.set(r,e)}}(t[u]),u+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return A(a[a.length-1])},"countryCodeFromName",0,A,"countryCodes",0,function(){return d()},"countryFromLanguages",0,function(e){let a=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of a)try{let a=new Intl.Locale(e).region?.toUpperCase();if(a&&i(a))return a}catch{}for(let e of a)try{let a=new Intl.Locale(e).maximize().region?.toUpperCase();if(a&&i(a))return a}catch{}},"countryName",0,function(e,a){try{return n(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,i])},93440,e=>{"use strict";var a=e.i(99506);let t=`
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
`,r=null;function i(){if(r)return r;for(let e of(r=new Map,t.split("\n"))){let[a,...t]=e.trim().split(" ");a&&0!==t.length&&r.set(a,t.map(e=>{let[a="",t]=e.split("@");if(!t)return{zone:a};let[r,i]=t.split(",").map(Number);return{zone:a,lat:r,lng:i}}))}return r}let o=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!o)for(let[e,a]of(o=new Map,i()))for(let{zone:t}of a)o.set(t,o.has(t)&&o.get(t)!==e?null:e);return o.get(e)??void 0}},"countryTimeZones",0,function(e){return(i().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,t){if(!t)return null;let r=(i().get(t.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(r.length<=1)return r[0]?.zone??null;let o=Math.cos(e.lat*Math.PI/180),n=null,s=1/0;for(let a of r){if(void 0===a.lat||void 0===a.lng)continue;let t=Math.abs(e.lng-a.lng);t>180&&(t=360-t);let r=Math.hypot(t*o,(e.lat-a.lat)*.5);r<s&&(s=r,n=a)}return n?.zone??r[0]?.zone??null}])},58162,e=>{"use strict";var a=e.i(41478),t=e.i(25395);function r(e){if(e.kind)return e.kind;if(e.bbox){let[a,r,i,o]=e.bbox;if((0,t.haversineKm)({lat:r,lng:a},{lat:o,lng:i})>150)return"region"}return"city"}function i(e){return!!e&&e.every(Number.isFinite)&&(e[0]!==e[2]||e[1]!==e[3])}function o(e,a){let[r,i,o,n]=e,s=Math.min(n,Math.max(i,a.lat)),l=Math.min(o,Math.max(r,a.lng));return(0,t.haversineKm)(a,{lat:s,lng:l})}e.s(["destinationFit",0,function(e){if(i(e.bbox))return{bbox:e.bbox};let a=r(e);return{center:{lat:e.lat,lng:e.lng},zoom:"country"===a?5:"region"===a?8:11}},"destinationKind",0,r,"destinationLabel",0,function(e,t){let i=e.name.trim(),o=e.countryCode?.trim().toUpperCase(),n=o&&t?(0,a.countryName)(o,t):void 0,s=(n&&n!==o?n:void 0)??e.country?.trim();return s&&"country"!==r(e)&&s.toLocaleLowerCase()!==i.toLocaleLowerCase()?`${i}, ${s}`:i},"isFarFromDestination",0,function(e,a){let n=r(e),s=i(e.bbox)?e.bbox:void 0;if("country"===n){if(e.countryCode&&a.countryCode)return a.countryCode.toUpperCase()!==e.countryCode.toUpperCase();if(s)return o(s,a)>50}return s?o(s,a)>300:(0,t.haversineKm)(e,a)>300},"isWideDestination",0,function(e){return"city"!==r(e)},"kmOutsideBBox",0,o])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},t=new Map(`
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
`.trim().split("\n").map(e=>{let[t="",r="",i="",o=""]=e.split("|");return[t,{code:t,city:{pl:r,en:i||r,de:a[t]??(i||r)},timeZone:o}]}));function r(e){return e?t.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of t.values())for(let t of Object.values(e.city)){let r=t.toLowerCase();if(r===a||r.startsWith(`${a} (`))return e}},"airportByCode",0,r,"airportLabel",0,function(e,a,t){let i=r(e),o=(i?.city[a]??t)?.replace(/\s*\([^)]*\)\s*$/,"");return o?`${o} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),t=e.i(41478),r=e.i(93440),i=e.i(99506),o=e.i(58162),n=e.i(49913),s=e.i(25395);let l=["Public","Bank","School","Authorities","Optional","Observance"],u=120,c=(e,a=u)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0;function d(e,a,t){let r=a.toUpperCase(),i=new Set(e.flatMap(e=>e.counties??[])),o=e=>i.size>=4&&[...i].every(a=>e.includes(a)),n=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),i=a.types.includes("Optional");if(!e&&!i)continue;let s=a.global||!a.counties?.length||o(a.counties);if(!s&&t&&!a.counties?.includes(t))continue;let l=!s,u=!!e&&(!l||!!t)||"maybe",c=e?l?"regional":"national":"optional",d={date:a.date,countryCode:r,localName:a.localName,name:a.name,scope:c,status:u,...l&&a.counties?{counties:a.counties}:{}},p=n.get(a.date)??[],f=p.findIndex(e=>e.name===d.name||e.localName===d.localName);f<0?p.push(d):A(d)>A(p[f])&&(p[f]=d),n.set(a.date,p)}for(let e of n.values())e.sort((e,a)=>A(a)-A(e));return{countryCode:r,byDate:n}}let A=e=>2*(!0===e.status)+ +("national"===e.scope),p=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function f(e,a){let t,r=50,i=new Set;for(let n of a){let a=(0,s.haversineKm)(e,n);a<=r&&(t=n,r=a),(a<=300||n.bbox&&0===(0,o.kmOutsideBBox)(n.bbox,e))&&i.add(n.countryCode)}return t?t.countryCode:1===i.size?[...i][0]:void 0}let m=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function h(e,a){let i=e?.name.trim()??"",o=(0,t.countryCodeFromAddress)(i);if(o)return o;let s=m.exec(i),l=(0,n.airportByCode)(s?.[1]??s?.[2]);return(0,r.countryOfTimeZone)(l?.timeZone)??(0,r.countryOfTimeZone)(a)}function g(e,a){if(e.index!==e.count-1)return!1;let t=!!a&&(0,i.datePart)(e.start)>=a&&e.to!==e.home;return e.index>0&&e.to===e.origin&&e.origin!==e.home||t}let y=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function E(e,a){let r=(0,t.countryCodeFromAddress)(a?.address);if(r)return r;let i=1===e.countries.length?e.countries[0]:void 0;return p(a)&&0!==e.anchors.length?e.countryNear(a):i}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,t=new Set;for(let[r,i]of e.data)if(null===i)t.add(r);else{let t=e.region&&e.region.startsWith(`${r}-`)?e.region:void 0;a.set(r,d(i,r,t))}let r=e.stays??[],o=e.visits??[],n=e=>r.find(a=>a.from<=e&&e<a.to)?.countryCode??o.find(a=>a.from<e&&e<a.to)?.countryCode??r.find(a=>a.to===e)?.countryCode??o.find(a=>a.from===e)?.countryCode??o.find(a=>a.to===e)?.countryCode,s=e.anchors??[],l=(t,r)=>{let i;return(r?[r]:(i=n(t))?[i]:e.countries).flatMap(e=>a.get(e)?.byDate.get(t)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:t,anchors:s,countryOn:n,countryNear:e=>f(e,s),status:(e,t)=>{var r;let i=a.get(e);return i?(r=i.byDate.get(t),!!r?.length&&(!!r.some(e=>!0===e.status)||"maybe")):null},on:l,inRange(e,a){let t=[],r=Math.min((0,i.diffDays)(e,a),400);for(let a=0;a<=r;a++)t.push(...l((0,i.addDays)(e,a)));return t}}},"countryAt",0,f,"interpretHolidays",0,d,"isReturnLeg",0,g,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let t=a.toUpperCase(),r=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,o=c(a.name),n=c(a.localName)??o;if(!(0,i.isValidISODate)(e)||!o||!n||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==t)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>l.includes(e)),u=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];r.push({date:e,localName:n,name:o,countryCode:t,global:!1!==a.global||0===u.length,...u.length&&!1===a.global?{counties:u}:{},types:s.length?s:["Public"]})}return r.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,E,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let t=E(e,a);return t?a=>e.status(t,a):a=>{let t=e.countries.map(t=>e.status(t,a));return t.some(e=>!0===e||"maybe"===e)?"maybe":!t.includes(!1)&&null}},"tripCountries",0,function(e,r=[],o=[]){var n;let s=[],l=(e,a)=>{a&&p(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},u=(n=e.destination,(0,t.isCountryCode)(n.countryCode)?n.countryCode:(0,t.countryCodeFromName)(n.country));if(u&&p(e.destination)){let a=e.destination.bbox,t=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:u,...t?{bbox:a}:{}})}let c=[],d=(e,a)=>c.push({date:e,code:a}),A=[],m=r.filter(a.isTransport).sort(y),E=m.map(e=>({from:h(e.from,e.startTimeZone),to:h(e.to,e.endTimeZone)})),b=E[0]?.from,S=e=>{let a=m[e],t=m[e+1];if(!a?.end||!t)return!1;let r=(0,i.diffLocalMinutes)(a.end,t.start);return r>=0&&r<720};m.forEach((a,t)=>{let{from:r,to:o}=E[t];t>0&&r&&r!==b&&!S(t-1)&&r!==E[t-1].to&&(d(a.start,r),l(a.from,r));let n=g({index:t,count:m.length,start:a.start,to:o,origin:b,home:u},e.endDate);if(!o||n||S(t))return;l(a.to,o),d(a.end??a.start,o);let s=(0,i.datePart)(a.end??a.start),c=m[t+1]?(0,i.datePart)(m[t+1].start):void 0,p=c&&(0,i.isValidISODate)(c)&&c>s?c:(0,i.addDays)(s,1);(0,i.isValidISODate)(s)&&A.push({from:s,to:p,countryCode:o})});let M=new Map(o.map(e=>[e.id,e])),C=[];for(let e of r.filter(a.isStay).sort(y)){let a=e.placeId?M.get(e.placeId):void 0,r=p(a)?a:p(e.location)?e.location:void 0,o=(0,i.datePart)(e.start),n=(0,t.countryCodeFromAddress)(a?.address)??(0,t.countryCodeFromAddress)(e.location?.name)??(r?f(r,s):A.find(e=>e.from===o)?.countryCode);if(!n)continue;d(e.start,n),l(r,n);let u=e.end?(0,i.datePart)(e.end):(0,i.addDays)(o,1);(0,i.isValidISODate)(o)&&(0,i.isValidISODate)(u)&&(0,i.diffDays)(o,u)>0&&C.push({from:o,to:u,countryCode:n})}let k=[];for(let e of[u,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!k.includes(e)&&k.length<8&&k.push(e);return{countries:k,stays:C,visits:A,anchors:s}},"tripYears",0,function(e){let a=(0,i.parseISODate)(e.startDate).year,t=(0,i.parseISODate)(e.endDate).year,r=[];for(let e=a;e<=t&&r.length<3;e++)r.push(e);return r}])},72708,e=>{"use strict";var a=e.i(99506),t=e.i(25395);e.s(["JOURNAL_MOODS",0,[1,2,3,4,5],"MAX_BACKUP_PHOTO_CHARS",0,8e6,"MAX_CAPTION_CHARS",0,300,"MAX_HIGHLIGHTS",0,12,"MAX_HIGHLIGHT_CHARS",0,80,"MAX_JOURNAL_TEXT",0,2e4,"MAX_JOURNAL_TITLE",0,200,"MAX_PHOTOS_PER_ENTRY",0,40,"MAX_SOURCE_PHOTO_BYTES",0,5e7,"MAX_SOURCE_PHOTO_PIXELS",0,5e7,"MAX_TRIP_PHOTO_BYTES",0,25e7,"PHOTO_MAX_EDGE",0,1600,"PHOTO_QUALITY",0,.82,"THUMB_MAX_EDGE",0,320,"THUMB_QUALITY",0,.72,"addHighlight",0,function(e,a){let t=a.replace(/\s+/g," ").trim().slice(0,80);return!t||e.length>=12||e.some(e=>e.toLocaleLowerCase()===t.toLocaleLowerCase())?[...e]:[...e,t]},"entryHasContent",0,function(e){return!!(e.title?.trim()||e.text.trim()||e.mood||e.highlights?.length||e.placeIds?.length||e.photos.length)},"entryRoutePoints",0,function(e,a,r={}){let i=[];for(let t of e.placeIds??[]){let e=a.get(t);e&&i.push({id:`place:${e.id}`,lat:e.lat,lng:e.lng,name:e.name,kind:"place"})}if(!1===r.photos)return i;let o=[...i];for(let a of e.photos.filter(e=>void 0!==e.lat&&void 0!==e.lng).sort((e,a)=>(e.takenAt??"")<(a.takenAt??"")?-1:+((e.takenAt??"")>(a.takenAt??""))))o.some(e=>.15>(0,t.haversineKm)(e,a))||i.push({id:`photo:${a.id}`,lat:a.lat,lng:a.lng,kind:"photo"});return i},"estimateBase64Bytes",0,function(e){return 4*Math.ceil(e/3)},"fitWithin",0,function(e,a,t){if(!(e>0)||!(a>0)||!(t>0))return{width:0,height:0};let r=Math.min(1,t/Math.max(e,a));return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(a*r))}},"hasPhotoLocations",0,function(e){return e.some(e=>e.photos.some(e=>void 0!==e.lat&&void 0!==e.lng))},"journalDays",0,function(e,t,r){let i=(0,a.tripPhase)(e,r),o=i.today,n=new Map;for(let e of t){let a=n.get(e.date);(!a||a.updatedAt<e.updatedAt)&&n.set(e.date,e)}let s=(0,a.tripDays)(e).map((e,t)=>{let r,s=n.get(e);return{date:e,index:t,state:(r=(0,a.compareDates)(e,o),"during"===i.phase?0===r?"today":r<0?"past":"future":"after"===i.phase?"past":"future"),...s?{entry:s}:{}}}),l=new Set(s.map(e=>e.date)),u=[...n.values()].filter(e=>!l.has(e.date)).sort((e,t)=>(0,a.compareDates)(e.date,t.date)).map(t=>({date:t.date,index:(0,a.diffDays)(e.startDate,t.date),state:"past",entry:t}));return"during"!==i.phase?[...s,...u]:[...s.filter(e=>"today"===e.state),...s.filter(e=>"past"===e.state).reverse(),...s.filter(e=>"future"===e.state),...u]},"mergeJournalEntries",0,function(e,a){let t=new Set(e.photos.map(e=>e.id)),r=new Set(e.photos.map(e=>e.blobKey)),i=a.photos.filter(e=>!t.has(e.id)&&!r.has(e.blobKey));return 0===i.length?e:{...e,photos:[...e.photos,...i].slice(0,40)}},"movePhoto",0,function(e,a,t){let r=e.findIndex(e=>e.id===a);if(r<0)return[...e];let i=[...e],[o]=i.splice(r,1);return i.splice(Math.max(0,Math.min(i.length,t)),0,o),i},"photoAlt",0,function(e,a){return e.caption?.trim()||a},"projectPoints",0,function(e,a,t,r=16){if(0===e.length)return[];let i=e.map(e=>{let a=Math.max(-85,Math.min(85,e.lat));return{x:(e.lng+180)/360,y:(1-Math.log(Math.tan(Math.PI/4+a*Math.PI/360))/Math.PI)/2}}),o=i.map(e=>e.x),n=i.map(e=>e.y),s=Math.min(...o),l=Math.min(...n),u=Math.max(...o)-s,c=Math.max(...n)-l,d=a-2*r,A=t-2*r,p=0===u&&0===c?0:Math.min(u?d/u:1/0,c?A/c:1/0),f=r+(d-u*p)/2,m=r+(A-c*p)/2;return i.map(e=>({x:Math.round((f+(e.x-s)*p)*10)/10,y:Math.round((m+(e.y-l)*p)*10)/10}))},"referencedPhotoKeys",0,function(e){return new Set(e.flatMap(e=>e.photos.map(e=>e.blobKey)))},"suggestedPlaceIds",0,function(e,a,t){let r=[];for(let i of e.filter(e=>e.date===a&&e.placeId).sort((e,a)=>e.order<a.order?-1:e.order>a.order?1:e.id<a.id?-1:1)){let e=i.placeId?t.get(i.placeId):void 0;e&&"stay"!==e.category&&!r.includes(e.id)&&r.push(e.id)}return r},"textBlocks",0,function(e){return e.replace(/\r\n?/g,"\n").split(/\n\s*\n/).map(e=>e.split("\n").map(e=>e.trimEnd()).filter((e,a,t)=>e.length>0||a>0&&a<t.length-1)).filter(e=>e.some(e=>e.trim().length>0))}])},18037,e=>{"use strict";let a=/^[A-Za-z0-9_-]{4,40}$/,t=/[\u0000-\u0008\u000B-\u001F\u007F-\u009F‪-‮⁦-⁩﻿]/g,r=/<!--[\s\S]*?-->|<\/?[A-Za-z!?][^<>]*>/g;function i(e,a,o=!1){if("string"!=typeof e)return;let n=e.normalize("NFC").replace(r," ").replace(t,""),s=Array.from(n=(n=o?n.replace(/\r\n?/g,"\n").replace(/[^\S\n]+/g," ").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n"):n.replace(/\s+/g," ")).trim());return s.length>a&&(n=s.slice(0,a).join("").trim()),n||void 0}let o=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),n=e=>"string"==typeof e&&e.length<=40&&!Number.isNaN(Date.parse(e));function s(e){if(!o(e)||"string"!=typeof e.by||!a.test(e.by)||!n(e.at))return;let t=i(e.name,60),r=i(e.note,500,!0);return{by:e.by,...t?{name:t}:{},...r?{note:r}:{},at:e.at}}function l(e){if(!o(e)||"string"!=typeof e.by||!a.test(e.by)||!n(e.at)||1!==e.value&&-1!==e.value)return;let t=i(e.name,60);return{by:e.by,...t?{name:t}:{},value:e.value,at:e.at}}function u(e){if(o(e)&&("recommendations"===e.list||"votes"===e.list)&&"string"==typeof e.by&&a.test(e.by)&&n(e.at))return{list:e.list,by:e.by,at:e.at}}let c=e=>JSON.stringify([e.at,"value"in e?e.value:0,e.name??"","note"in e?e.note??"":""]);function d(e,a,t){let r=new Map;for(let a of e)for(let e of a??[]){let a=r.get(e.by);r.set(e.by,a?function(e,a){let t=Date.parse(e.at),r=Date.parse(a.at);return t!==r?t>r?e:a:c(e)>=c(a)?e:a}(a,e):e)}let i=[...r.values()].filter(e=>{let a=t?.get(e.by);return void 0===a||Date.parse(e.at)>a}).sort((e,a)=>Date.parse(e.at)-Date.parse(a.at)||(e.by<a.by?-1:+(e.by>a.by)));return i.length>a?i.slice(i.length-a):i}let A=e=>`${e.list}\u001f${e.by}`;function p(e){let a=new Map;for(let t of e)for(let e of t??[]){let t=a.get(A(e));(!t||Date.parse(e.at)>Date.parse(t.at)||Date.parse(e.at)===Date.parse(t.at)&&e.at>t.at)&&a.set(A(e),e)}let t=[...a.values()].sort((e,a)=>Date.parse(e.at)-Date.parse(a.at)||(A(e)<A(a)?-1:+(A(e)>A(a))));return t.length>100?t.slice(t.length-100):t}function f(e,a){let t=new Map;for(let r of e??[])r.list===a&&t.set(r.by,Math.max(t.get(r.by)??-1/0,Date.parse(r.at)));return t}function m(e){let a=p(e.map(e=>e.friendRemovals)),t=d(e.map(e=>e.recommendations),20,f(a,"recommendations")),r=d(e.map(e=>e.votes),50,f(a,"votes"));return{...t.length?{recommendations:t}:{},...r.length?{votes:r}:{},...a.length?{friendRemovals:a}:{}}}function h(e,a){let{recommendations:t,votes:r,friendRemovals:i,...o}=e;return{...o,...a}}let g=["recommendations","votes"],y=(e,a)=>new Date(Math.max(Date.parse(e),a+1)).toISOString();function E(e,a,t,r){"recommendations"===a?e.recommendations=[...e.recommendations.filter(e=>e.by!==t),...r?[r]:[]]:e.votes=[...e.votes.filter(e=>e.by!==t),...r?[r]:[]]}e.s(["MAX_FRIEND_NAME_CHARS",0,60,"MAX_FRIEND_NOTE_CHARS",0,500,"RESPONDER_ID_RE",0,a,"cleanText",0,i,"friendListOk",0,function(e){return void 0===e||Array.isArray(e)},"mergePlaceFriends",0,function(e,a){return a.recommendations?.length||a.votes?.length||a.friendRemovals?.length?h(e,m([e,a])):e},"putResponder",0,function(e,a,t,r){let i={recommendations:e.recommendations??[],votes:e.votes??[]},o={};for(let n of g){let s=t[n];if(!s)continue;let l=f(e.friendRemovals,n).get(a),u=void 0!==l&&Date.parse(s.at)<=l?{...s,at:y(r,l)}:s;"recommendations"===n?o.recommendations=u:o.votes=u,E(i,n,a,u)}return{fields:m([{...i,...e.friendRemovals?{friendRemovals:e.friendRemovals}:{}}]),written:o}},"sanitizeFriendRemovals",0,function(e){return Array.isArray(e)?p([e.slice(0,400).map(u).filter(e=>!!e)]):[]},"sanitizeRecommendations",0,function(e){return Array.isArray(e)?d([e.slice(0,80).map(s).filter(e=>!!e)],20):[]},"sanitizeVotes",0,function(e){return Array.isArray(e)?d([e.slice(0,200).map(l).filter(e=>!!e)],50):[]},"undoResponder",0,function(e,a,t,r,i){let o={recommendations:e.recommendations??[],votes:e.votes??[]},n=[];for(let e of g){let s=t[e];if(!s)continue;let l=("recommendations"===e?o.recommendations:o.votes).find(e=>e.by===a);if(l&&Date.parse(l.at)>Date.parse(s.at))continue;let u=y(i,Date.parse(s.at)),c=r[e];c||n.push({list:e,by:a,at:u}),E(o,e,a,c?{...c,at:u}:void 0)}return m([{...o,friendRemovals:p([e.friendRemovals,n])}])},"voteTally",0,function(e){let a=0,t=0;for(let r of e??[])1===r.value?a++:t++;return{up:a,down:t}},"withFriendFields",0,h])},40678,67514,e=>{"use strict";var a=e.i(41478),t=e.i(72708),r=e.i(18037);let i=["places","items","bookings","expenses","checklist","journal","documents"],o=["trips",...i];function n(e,a){return[...new Set([...Object.keys(e),...Object.keys(a)])].filter(t=>"updatedAt"!==t&&"createdAt"!==t&&u(e[t])!==u(a[t])).sort()}function s(){return{records:{trips:[],places:[],items:[],bookings:[],expenses:[],checklist:[],journal:[],documents:[]},tombstones:[]}}function l(e){let{blob:a,data:t,...r}=e;return r}function u(e){if(null===e||"object"!=typeof e)return JSON.stringify(e)??"null";if(Array.isArray(e))return`[${e.map(e=>void 0===e?"null":u(e)).join(",")}]`;let a=Object.keys(e).filter(a=>void 0!==e[a]).sort();return`{${a.map(a=>`${JSON.stringify(a)}:${u(e[a])}`).join(",")}}`}let c=e=>{let a=Date.parse(e);return Number.isNaN(a)?0:a},d=(e,a)=>`${e}\u001f${a}`;function A(e,a){return"trips"===e?a.id:a.tripId}function p(e,a,i){let o,n;if(a===i)return a;let s=c(a.updatedAt),l=c(i.updatedAt);if(s!==l)[o,n]=s>l?[a,i]:[i,a];else{let e=u(a),t=u(i);if(e===t)return a;[o,n]=e>t?[a,i]:[i,a]}return"journal"===e?(0,t.mergeJournalEntries)(o,n):"places"===e?(0,r.mergePlaceFriends)(o,n):o}function f(e,a){if(e===a)return e;let t=c(e.deletedAt),r=c(a.deletedAt);return t!==r?t>r?e:a:u(e)>=u(a)?e:a}function m(e){let a=new Map;for(let t of o)for(let r of e.records[t]){let e=d(t,r.id),i=a.get(e);i?i.record=i.record?p(t,i.record,r):r:a.set(e,{table:t,id:r.id,record:r})}for(let t of e.tombstones){if("savedPlaces"===t.table)continue;let e=d(t.table,t.id),r=a.get(e);r?r.tombstone=r.tombstone?f(r.tombstone,t):t:a.set(e,{table:t.table,id:t.id,tombstone:t})}return a}let h=["trips","places","bookings","items","expenses","checklist","journal","documents","journalPhotos"],g={items:{field:"placeId",parent:"places"},documents:{field:"bookingId",parent:"bookings"}};function y(e,a){let t=g[e];return t?a[t.field]:void 0}let E=()=>({added:0,updated:0,deleted:0,keptLocal:0});function b(e){if(e.isDemo)return`${e.destination.lat.toFixed(1)},${e.destination.lng.toFixed(1)}`}e.s(["CHILD_TABLES",0,i,"RECORD_TABLES",0,o,"canonicalJson",0,u,"changedFields",0,n,"clampSnapshot",0,function(e,a){let t=a.getTime(),r=a.toISOString(),i=e=>{let a=c(e.updatedAt)>t,i=c(e.createdAt)>t;return a||i?{...e,...a?{updatedAt:r}:{},...i?{createdAt:r}:{}}:e},n={};for(let a of o)n[a]=e.records[a].map(i);return{records:n,tombstones:e.tombstones.map(e=>c(e.deletedAt)>t?{...e,deletedAt:r}:e)}},"documentMeta",0,l,"dropDemoDuplicates",0,function(e,a){let t=new Map;for(let e of a){let a=b(e);if(!a)continue;let r=t.get(a)??new Set;r.add(e.id),t.set(a,r)}let r=new Set;for(let a of e.records.trips){let e=b(a),i=e?t.get(e):void 0;i&&!i.has(a.id)&&r.add(a.id)}if(!r.size)return{snapshot:e,dropped:[]};let i={};for(let a of o)i[a]=e.records[a].filter(e=>!r.has(A(a,e)));return{snapshot:{records:i,tombstones:e.tombstones.filter(e=>!r.has(e.tripId))},dropped:[...r].sort()}},"duplicateDemoTrips",0,function(e){let a=new Map;for(let t of e){let e=b(t);e&&a.set(e,[...a.get(e)??[],t.id])}return[...a.values()].flatMap(e=>e.sort().slice(1)).sort()},"emptySnapshot",0,s,"pickTombstone",0,f,"planMerge",0,function(e,a,t={}){let r=m(e),i=m(a),o=function(e,a){let t=new Map;for(let r of new Set([...e.keys(),...a.keys()])){let i=e.get(r),o=a.get(r),n=i??o,s=i?.record&&o?.record?p(n.table,i.record,o.record):i?.record??o?.record,l=i?.tombstone&&o?.tombstone?f(i.tombstone,o.tombstone):i?.tombstone??o?.tombstone;t.set(r,{table:n.table,id:n.id,...s?{record:s}:{},...l?{tombstone:l}:{}})}let r=new Map;for(let e of t.values()){let a=r.get(e.table);a?a.push(e):r.set(e.table,[e])}let i=new Map,o=new Map,n=(e,a)=>void 0!==a&&(o.get(e)?.has(a)??!1),s=new Set,l=new Map,u=new Set((r.get("journalPhotos")??[]).map(e=>e.id));for(let e of h){let a=new Set;for(let t of(o.set(e,a),r.get(e)??[])){let r,{record:o}=t,{tombstone:p}=t,h=o?A(e,o):p?.tripId;if("trips"===e)r=p?{tombstone:p}:o?{record:o}:{},p&&s.add(t.id);else if(void 0!==h&&s.has(h))r={};else if(o&&!n("trips",h))r=p?{tombstone:p}:{};else if(o&&void 0!==y(e,o)&&!n(g[e].parent,y(e,o))){let a=l.get(`${g[e].parent}:${y(e,o)}`),t=a?{table:e,id:o.id,tripId:h,deletedAt:a.deletedAt}:void 0,i=p&&t?f(p,t):p??t;r=i?{tombstone:i}:{}}else{var m,E;o&&(o=function(e,a,t,r){if("bookings"===e){if(void 0===a.placeId||t("places",a.placeId))return a;let{placeId:e,...r}=a;return r}if("expenses"===e){if(void 0===a.bookingId||t("bookings",a.bookingId))return a;let{bookingId:e,...r}=a;return r}if("journal"===e){let e=a;if(e.photos.some(e=>r.has(e.id))&&(e={...e,photos:e.photos.filter(e=>!r.has(e.id))}),e.placeIds&&e.placeIds.some(e=>!t("places",e))){let{placeIds:a,...r}=e,i=a.filter(e=>t("places",e));e=i.length?{...r,placeIds:i}:r}return e}return a}(e,o,n,u)),m=o,E=o?c(o.updatedAt):0,r=m&&p?c(p.deletedAt)>=E?{tombstone:p}:{record:m}:m?{record:m}:p?{tombstone:p}:{}}r.record?a.add(t.id):("places"===e||"bookings"===e)&&r.tombstone&&l.set(`${e}:${t.id}`,r.tombstone),(r.record||r.tombstone)&&i.set(d(e,t.id),{table:e,id:t.id,...r})}}return i}(r,i),l=t.since?c(t.since):void 0,b={put:[],remove:[],putTombstones:[],removeTombstones:[],tripIds:[],summary:{trips:[],conflicts:[],totals:{...E(),tripsAdded:0,tripsDeleted:0,tripsUpdated:0},changed:!1},result:function(e){let a=s();for(let t of[...e.keys()].sort()){let r=e.get(t);r.record&&a.records[r.table].push(r.record),r.tombstone&&a.tombstones.push(r.tombstone)}return a}(o)},S=new Set,M=new Map,C=(e,a,t)=>{let r,i=((r=M.get(e))||(r={tripId:e,title:"",status:"unchanged",byTable:{},...E()},M.set(e,r)),r);i[t]+=1;let o=i.byTable[a]??=E();o[t]+=1};for(let e of[...new Set([...r.keys(),...o.keys(),...i.keys()])].sort()){let a=r.get(e),t=o.get(e),s=i.get(e),d=a??t??s,p=d.table,f=a?.tombstone,m=t?.tombstone;if(m&&(!f||u(f)!==u(m))?(b.putTombstones.push(m),S.add(m.tripId)):f&&!m&&(b.removeTombstones.push({table:p,id:d.id}),S.add(f.tripId)),"journalPhotos"===p)continue;let h=a?.record,g=t?.record,y=s?.record,E=g?A(p,g):h?A(p,h):y?A(p,y):(f??m??s?.tombstone)?.tripId;if(void 0===E)continue;let M=g?u(g):void 0;if(h&&y&&g){let e=u(h),a=u(y),t=e=>c(e.updatedAt)>(l??c(e.createdAt)),r=e!==a&&t(h)&&t(y)?n(h,y):[];r.length&&b.summary.conflicts.push({table:p,id:d.id,tripId:E,label:function(e,a){let t=(...e)=>e.map(e=>a[e]).find(e=>"string"==typeof e&&e.trim().length>0);return"expenses"===e?t("note")??`${String(a.amount??"")} ${String(a.currency??"")}`.trim():"journal"===e?t("title","date")??"":t("title","name","text","date")??""}(p,g),kept:M===e?"local":M===a?"remote":"merged",fields:r})}g&&!h?(b.put.push({table:p,record:g}),C(E,p,"added"),S.add(E)):h&&!g?(b.remove.push({table:p,id:d.id,tripId:A(p,h)}),C(E,p,"deleted"),S.add(E)):h&&g&&u(h)!==M?(b.put.push({table:p,record:g}),C(E,p,"updated"),S.add(E)):y&&u(y)!==M&&C(E,p,"keptLocal")}for(let[e,a]of M){let t=d("trips",e),n=r.get(t)?.record,s=o.get(t)?.record,l=i.get(t)?.record;if(!n&&!s){l&&r.get(t)?.tombstone?Object.assign(a,{title:l.title,status:"keptDeleted",byTable:{},...E()}):M.delete(e);continue}a.title=(s??n)?.title??"",a.status=n?s?a.added+a.updated+a.deleted>0?"updated":"unchanged":"deleted":"added"}for(let[e,a]of o)"trips"===a.table&&a.record&&i.has(e)&&(M.has(a.id)||M.set(a.id,{tripId:a.id,title:a.record.title,status:"unchanged",byTable:{},...E()}));let k=b.summary.totals;for(let e of M.values())k.added+=e.added,k.updated+=e.updated,k.deleted+=e.deleted,k.keptLocal+=e.keptLocal,"added"===e.status?k.tripsAdded+=1:"deleted"===e.status?k.tripsDeleted+=1:"updated"===e.status&&(k.tripsUpdated+=1);let B={added:0,updated:1,deleted:2,keptDeleted:3,unchanged:4};return b.summary.trips=[...M.values()].sort((e,a)=>B[e.status]-B[a.status]||e.title.localeCompare(a.title)||(e.tripId<a.tripId?-1:1)),b.summary.changed=b.put.length+b.remove.length>0,b.tripIds=[...S].sort(),b},"snapshotFromBundles",0,function(e,a=[]){let t=s();for(let a of e)for(let e of(t.records.trips.push(a.trip),i))"documents"===e?t.records.documents.push(...(a.documents??[]).map(l)):t.records[e].push(...a[e]??[]);return t.tombstones.push(...a),t},"snapshotSize",0,function(e){return o.reduce((a,t)=>a+e.records[t].length,0)},"snapshotTripIds",0,function(e){let a=new Set;for(let t of o)for(let r of e.records[t])a.add(A(t,r));for(let t of e.tombstones)a.add(t.tripId);return[...a]}],67514);var S=e.i(13180);let M=e=>{let a=Date.parse(e);return Number.isNaN(a)?0:a},C=e=>"string"==typeof e&&e.length<=40&&!Number.isNaN(Date.parse(e));function k(e){if("homeCountry"===e||"workdays"===e)return!0;if(e.startsWith("allowance:")){let a=e.slice(10);return/^\d{4}$/.test(a)&&Number(a)>=S.MIN_YEAR&&Number(a)<=S.MAX_YEAR}if(e.startsWith("counted:")){let a=e.slice(8);return a.length>0&&a.length<=100}return!1}function B(e,t){return null===t||("homeCountry"===e?(0,a.isCountryCode)(t):"workdays"===e?Array.isArray(t)&&t.length>0&&t.length<=7&&t.every(S.isWeekday):e.startsWith("allowance:")?(0,S.isValidAllowance)(t):!!e.startsWith("counted:")&&"boolean"==typeof t)}let L=JSON.stringify((0,S.normalizeWorkdays)(void 0));function D(e){let a=new Map;e.homeCountry&&a.set("homeCountry",e.homeCountry);let t=(0,S.normalizeWorkdays)(e.leave.workdays);for(let[r,i]of(JSON.stringify(t)!==L&&a.set("workdays",t),Object.entries(e.leave.allowances)))a.set(`allowance:${r}`,i);for(let[t,r]of Object.entries(e.leave.counted))a.set(`counted:${t}`,r);return a}e.s(["applySettingEntries",0,function(e,a){let t=e.homeCountry,r={...e.leave.allowances},i={...e.leave.counted},o=e.leave.workdays;for(let[e,n]of Object.entries(a)){if(!k(e)||!B(e,n.value))continue;let{value:a}=n;if("homeCountry"===e)t=a??null;else if("workdays"===e)o=(0,S.normalizeWorkdays)(a);else if(e.startsWith("allowance:")){let t=e.slice(10);null===a?delete r[t]:r[t]=a}else{let t=e.slice(8);null===a?delete i[t]:i[t]=a}}return{homeCountry:t,leave:(0,S.parseLeaveSettings)({workdays:o,allowances:r,counted:i})}},"changedSettingKeys",0,function(e,a){let t=D(e),r=D(a);return[...new Set([...t.keys(),...r.keys()])].filter(e=>u(t.get(e)??null)!==u(r.get(e)??null))},"clampSettings",0,function(e,a){let t=a.getTime(),r={};for(let[i,o]of Object.entries(e))r[i]=M(o.updatedAt)>t?{...o,updatedAt:a.toISOString()}:o;return r},"parseSettingsSection",0,function(e){if("object"!=typeof e||null===e||Array.isArray(e))return;let a=e.entries;if("object"!=typeof a||null===a||Array.isArray(a))return;let t={};for(let[e,r]of Object.entries(a).slice(0,5e3)){if(!k(e)||"object"!=typeof r||null===r||Array.isArray(r))continue;let{value:a,updatedAt:i}=r;C(i)&&B(e,a)&&(t[e]={value:"workdays"===e&&null!==a?(0,S.normalizeWorkdays)(a):a,updatedAt:new Date(M(i)).toISOString()})}return t},"planSettingsMerge",0,function(e,a,t={}){let r={},i=[],o=[],n={...e};for(let[s,l]of Object.entries(a)){if(t.ignoreClears&&null===l.value)continue;let a=e[s],c=a?function(e,a){let t=M(e.updatedAt),r=M(a.updatedAt);return t!==r?t>r?e:a:u(e)>=u(a)?e:a}(a,l):l,d=u(a?.value??null)===u(l.value);if(c===a){d||o.push(s);continue}(!a||u(a)!==u(l))&&(r[s]=l,n[s]=l,d||i.push(s))}return{put:r,changed:i.sort(),keptLocal:o.sort(),result:n}},"settingsEntries",0,function(e,a){let t=D(e),r={};for(let e of[...new Set([...t.keys(),...Object.keys(a).filter(k)])].sort()){let i=a[e],o=t.has(e)?t.get(e):null;"workdays"===e&&null===o&&(o=(0,S.normalizeWorkdays)(void 0)),r[e]={value:o,updatedAt:C(i)?i:"1970-01-01T00:00:00.000Z"}}return r}],40678)},13180,e=>{"use strict";var a=e.i(99506),t=e.i(38520);let r=[1,2,3,4,5,6,7],i=[1,2,3,4,5];function o(e){return"number"==typeof e&&Number.isInteger(e)&&e>=1&&e<=7}function n(e){if(!Array.isArray(e))return[...i];let a=[...new Set(e.filter(o))].sort((e,a)=>e-a);return a.length?a:[...i]}function s(e,t){return t.workdays.has((0,a.isoWeekday)(e))&&!t.holidays.has(e)}function l(e,t,r){return(0,a.isValidISODate)(e)&&(0,a.isValidISODate)(t)&&!(t<e)?(0,a.dateRange)(e,t).filter(e=>s(e,r)):[]}function u(e){return{start:e.start,end:e.end,daysOff:e.daysOff,leave:e.leave,holidays:e.holidays}}let c=Object.freeze({workdays:[...i],allowances:{},counted:{}});function d(e){return"number"==typeof e&&Number.isInteger(e)&&e>=0&&e<=366}let A=new Set(["US","CA","MX","BR","JP","KR","TW","HK","IL","IN","PH","ZA","AU","SA","PE","CO","VE","AR","GT","TH"]);e.s(["DEFAULT_LEAVE_SETTINGS",0,c,"MAX_ALLOWANCE",0,366,"MAX_YEAR",0,2075,"MIN_YEAR",0,1975,"firstDayOfWeek",0,function(e,a){let t;try{t=new Intl.Locale(e)}catch{return 1}let r=a??t;try{let e="function"==typeof r.getWeekInfo?r.getWeekInfo.call(t):r.weekInfo;if(e&&o(e.firstDay))return e.firstDay}catch{}let i=t.region;try{i??=t.maximize().region}catch{i=void 0}return i&&A.has(i)?7:1},"homeHolidays",0,function(e,a){let{byDate:r}=(0,t.interpretHolidays)(e,a),i=new Set;for(let[e,a]of r)a.some(e=>!0===e.status)&&i.add(e);return{off:i,byDate:new Map(r)}},"isTripCounted",0,function(e,a){return e.counted[a.id]??!a.isDemo},"isValidAllowance",0,d,"isWeekday",0,o,"leaveDaysIn",0,l,"monthWeeks",0,function(e,t,r=1){let i=(0,a.toISODate)(e,t,1),o=((0,a.isoWeekday)(i)-r+7)%7,n=(0,a.diffDays)(i,(0,a.toISODate)(e,t+1,1)),s=[...Array(o).fill(null),...Array.from({length:n},(e,t)=>(0,a.addDays)(i,t))];for(;s.length%7;)s.push(null);let l=[];for(let e=0;e<s.length;e+=7)l.push(s.slice(e,e+7));return l},"normalizeWorkdays",0,n,"orderedRange",0,function(e,a){return e<=a?{start:e,end:a}:{start:a,end:e}},"parseLeaveSettings",0,function(e){if(!e||"object"!=typeof e||Array.isArray(e))return{...c,workdays:[...i]};let a={};if(e.allowances&&"object"==typeof e.allowances&&!Array.isArray(e.allowances))for(let[t,r]of Object.entries(e.allowances)){let e=Number(t);/^\d{4}$/.test(t)&&e>=1975&&e<=2075&&d(r)&&(a[t]=r)}let t={};if(e.counted&&"object"==typeof e.counted&&!Array.isArray(e.counted))for(let[a,r]of Object.entries(e.counted).slice(0,2e3))"boolean"==typeof r&&a.length>0&&a.length<=100&&(t[a]=r);return{workdays:n(e.workdays),allowances:a,counted:t}},"shouldSuggestNextYear",0,function(e,a,t){return Number(a.slice(0,4))===e&&!(e>=2075)&&(t<2||Number(a.slice(5,7))>=12)},"splitBridges",0,function(e,a){return{upcoming:e.filter(e=>e.end>=a),past:e.filter(e=>e.end<a).reverse()}},"suggestBridges",0,function(e,t,r={}){let i=Math.max(1,Math.min(10,Math.floor(r.maxLeave??5))),o=r.minDaysOff??4,n=r.minRatio??2;if(!Number.isInteger(e)||e<1975||e>2075||0===t.workdays.size)return[];let l=(0,a.toISODate)(e,1,1),c=(0,a.toISODate)(e,12,31),d=(0,a.addDays)(l,-16),A=(0,a.addDays)(c,16),p=(0,a.dateRange)(d,A),f=p.map(e=>s(e,t)),m=p.map(e=>t.holidays.has(e)&&t.workdays.has((0,a.isoWeekday)(e))),h=[];for(let e=1;e<p.length-1;e++){if(!f[e-1])continue;let a=0,t=null,r=!1;for(let s=e;s<p.length-1&&s-e<16&&(f[s]&&(a+=1,(p[s]<l||p[s]>c)&&(r=!0)),!(a>i));s++){if(m[s]&&null===t&&(t=p[s]),!0!==f[s+1]||0===a||null===t||r)continue;let i=s-e+1;if(i<o||i<a*n)continue;let l=p.slice(e,s+1);h.push({start:p[e],end:p[s],daysOff:i,leave:l.filter((a,t)=>f[e+t]),holidays:l.filter((a,t)=>m[e+t]),anchor:t})}}let g=new Map;for(let e of h)g.set(e.anchor,[...g.get(e.anchor)??[],e]);let y=[],E=e=>e.daysOff/e.leave.length,b=e=>e.daysOff-e.leave.length;for(let e of g.values()){let a=[...e].sort((e,a)=>E(a)-E(e)||a.daysOff-e.daysOff||(e.start<a.start?-1:1))[0],t=[...e].sort((e,a)=>b(a)-b(e)||e.leave.length-a.leave.length||(e.start<a.start?-1:1))[0];y.push(u(a)),t!==a&&b(t)>b(a)&&y.push(u(t))}let S=[...new Map(y.map(e=>[`${e.start}|${e.end}`,e])).values()];return S.filter(e=>!S.some(a=>a!==e&&a.start<=e.start&&a.end>=e.end&&a.leave.length<=e.leave.length&&(a.start!==e.start||a.end!==e.end))).sort((e,a)=>e.start<a.start?-1:e.start>a.start?1:e.end<a.end?-1:1)},"tripOverlaps",0,function(e){let t=[...e.filter(e=>(0,a.isValidISODate)(e.startDate)&&(0,a.isValidISODate)(e.endDate)&&e.endDate>=e.startDate)].sort((e,a)=>e.startDate<a.startDate?-1:e.startDate>a.startDate?1:e.id<a.id?-1:1),r=[];for(let e=0;e<t.length;e++){let i=t[e];for(let o=e+1;o<t.length;o++){let e=t[o];if(e.startDate>i.endDate)break;let n=e.startDate,s=i.endDate<e.endDate?i.endDate:e.endDate,l=(0,a.diffDays)(n,s)+1,u=1===l&&(i.endDate===n&&e.startDate===n||e.endDate===n&&i.startDate===n);l>=1&&!u&&r.push({a:i.id,b:e.id,start:n,end:s,days:l})}}return r.sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))},"weekdayOrder",0,function(e=1){return r.map((a,t)=>(e-1+t)%7+1)},"workCalendar",0,function(e=i,a=[]){return{workdays:new Set(e),holidays:new Set(a)}},"yearLeave",0,function(e,t,r,i){let o=(0,a.toISODate)(t,1,1),n=(0,a.toISODate)(t,12,31),s=new Map,u=new Map,c=[];for(let t of e){if(!(0,a.isValidISODate)(t.startDate)||!(0,a.isValidISODate)(t.endDate)||t.endDate<o||t.startDate>n)continue;let e=l(t.startDate<o?o:t.startDate,t.endDate>n?n:t.endDate,i);if(u.set(t.id,e),t.counted)for(let a of e)s.set(a,(s.get(a)??0)+1);c.push({id:t.id,days:e.length,shared:0,counted:t.counted})}for(let e of c)e.counted&&(e.shared=(u.get(e.id)??[]).filter(e=>(s.get(e)??0)>1).length);let d=[...s.keys()].sort(),A=d.length;return{year:t,allowance:r,used:A,remaining:null===r?null:r-A,perTrip:c,days:d}}])}]);