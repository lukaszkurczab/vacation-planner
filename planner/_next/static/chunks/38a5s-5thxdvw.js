(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,a=>{"use strict";let e=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),r=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function o(a){return"string"==typeof a&&/^[A-Z]{2}$/.test(a)&&!e.has(a)}let n=new Map;function t(a){let e=n.get(a);if(void 0===e){try{e=new Intl.DisplayNames([a],{type:"region",fallback:"none"})}catch{e=null}n.set(a,e)}return e}function u(a){return a.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let s=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),l=0,c=null;function A(){if(c)return c;let a=t("en"),r=[];for(let o of i)for(let n of i){let i=o+n;if(!e.has(i))try{a?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&r.push(i)}catch{}}return c=r,r}function d(a){if(!a)return;let e=u(a);if(!e||e.length<2)return;let i=a.trim();if(!/^[A-Z]{2}$/.test(i))for(;;){let a=s.get(e);if(a)return a;if(l>=r.length)return;!function(a){let e=t(a);if(e)for(let a of A()){let r;try{r=e.of(a)}catch{r=void 0}if(!r||r===a)continue;let i=u(r);i&&!s.has(i)&&s.set(i,a)}}(r[l]),l+=1}}a.s(["countryCodeFromAddress",0,function(a){let e=(a??"").split(/[,，、]/).map(a=>a.trim()).filter(Boolean);if(!(e.length<2))return d(e[e.length-1])},"countryCodeFromName",0,d,"countryCodes",0,function(){return A()},"countryFromLanguages",0,function(a){let e=(a??[]).map(a=>String(a).trim()).filter(Boolean);for(let a of e)try{let e=new Intl.Locale(a).region?.toUpperCase();if(e&&o(e))return e}catch{}for(let a of e)try{let e=new Intl.Locale(a).maximize().region?.toUpperCase();if(e&&o(e))return e}catch{}},"countryName",0,function(a,e){try{return t(e)?.of(a)??a}catch{return a}},"flagEmoji",0,function(a){let e=a.trim().toUpperCase();return/^[A-Z]{2}$/.test(e)?String.fromCodePoint(...[...e].map(a=>127462+a.charCodeAt(0)-65)):""},"isCountryCode",0,o])},93440,a=>{"use strict";var e=a.i(99506);let r=`
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
`,i=null;function o(){if(i)return i;for(let a of(i=new Map,r.split("\n"))){let[e,...r]=a.trim().split(" ");e&&0!==r.length&&i.set(e,r.map(a=>{let[e="",r]=a.split("@");if(!r)return{zone:e};let[i,o]=r.split(",").map(Number);return{zone:e,lat:i,lng:o}}))}return i}let n=null;a.s(["countryOfTimeZone",0,function(a){if(a){if(!n)for(let[a,e]of(n=new Map,o()))for(let{zone:r}of e)n.set(r,n.has(r)&&n.get(r)!==a?null:a);return n.get(a)??void 0}},"countryTimeZones",0,function(a){return(o().get(a.toUpperCase())??[]).map(a=>a.zone)},"suggestTimeZone",0,function(a,r){if(!r)return null;let i=(o().get(r.toUpperCase())??[]).filter(a=>(0,e.isValidTimeZone)(a.zone));if(i.length<=1)return i[0]?.zone??null;let n=Math.cos(a.lat*Math.PI/180),t=null,u=1/0;for(let e of i){if(void 0===e.lat||void 0===e.lng)continue;let r=Math.abs(a.lng-e.lng);r>180&&(r=360-r);let i=Math.hypot(r*n,(a.lat-e.lat)*.5);i<u&&(u=i,t=e)}return t?.zone??i[0]?.zone??null}])},49913,a=>{"use strict";let e={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},r=new Map(`
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
`.trim().split("\n").map(a=>{let[r="",i="",o="",n=""]=a.split("|");return[r,{code:r,city:{pl:i,en:o||i,de:e[r]??(o||i)},timeZone:n}]}));function i(a){return a?r.get(a.toUpperCase()):void 0}a.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(a){let e=a.trim().toLowerCase();if(e)for(let a of r.values())for(let r of Object.values(a.city)){let i=r.toLowerCase();if(i===e||i.startsWith(`${e} (`))return a}},"airportByCode",0,i,"airportLabel",0,function(a,e,r){let o=i(a),n=(o?.city[e]??r)?.replace(/\s*\([^)]*\)\s*$/,"");return n?`${n} (${a.toUpperCase()})`:a.toUpperCase()}])},38520,a=>{"use strict";var e=a.i(12268),r=a.i(41478),i=a.i(93440),o=a.i(99506),n=a.i(58162),t=a.i(49913),u=a.i(25395);let s=["Public","Bank","School","Authorities","Optional","Observance"],l=120,c=(a,e=l)=>"string"==typeof a&&a.trim()?a.trim().slice(0,e):void 0;function A(a,e,r){let i=e.toUpperCase(),o=new Set(a.flatMap(a=>a.counties??[])),n=a=>o.size>=4&&[...o].every(e=>a.includes(e)),t=new Map;for(let e of a){let a=e.types.includes("Public")||e.types.includes("Bank"),o=e.types.includes("Optional");if(!a&&!o)continue;let u=e.global||!e.counties?.length||n(e.counties);if(!u&&r&&!e.counties?.includes(r))continue;let s=!u,l=!!a&&(!s||!!r)||"maybe",c=a?s?"regional":"national":"optional",A={date:e.date,countryCode:i,localName:e.localName,name:e.name,scope:c,status:l,...s&&e.counties?{counties:e.counties}:{}},m=t.get(e.date)??[],p=m.findIndex(a=>a.name===A.name||a.localName===A.localName);p<0?m.push(A):d(A)>d(m[p])&&(m[p]=A),t.set(e.date,m)}for(let a of t.values())a.sort((a,e)=>d(e)-d(a));return{countryCode:i,byDate:t}}let d=a=>2*(!0===a.status)+ +("national"===a.scope),m=a=>!!a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng);function p(a,e){let r,i=50,o=new Set;for(let t of e){let e=(0,u.haversineKm)(a,t);e<=i&&(r=t,i=e),(e<=300||t.bbox&&0===(0,n.kmOutsideBBox)(t.bbox,a))&&o.add(t.countryCode)}return r?r.countryCode:1===o.size?[...o][0]:void 0}let f=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function E(a,e){let o=a?.name.trim()??"",n=(0,r.countryCodeFromAddress)(o);if(n)return n;let u=f.exec(o),s=(0,t.airportByCode)(u?.[1]??u?.[2]);return(0,i.countryOfTimeZone)(s?.timeZone)??(0,i.countryOfTimeZone)(e)}let g=(a,e)=>a.start<e.start?-1:+(a.start>e.start);function h(a,e){let i=(0,r.countryCodeFromAddress)(e?.address);if(i)return i;let o=1===a.countries.length?a.countries[0]:void 0;return m(e)&&0!==a.anchors.length?a.countryNear(e):o}a.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(a){let e=new Map,r=new Set;for(let[i,o]of a.data)if(null===o)r.add(i);else{let r=a.region&&a.region.startsWith(`${i}-`)?a.region:void 0;e.set(i,A(o,i,r))}let i=a.stays??[],n=a.visits??[],t=a=>i.find(e=>e.from<=a&&a<e.to)?.countryCode??n.find(e=>e.from<a&&a<e.to)?.countryCode??i.find(e=>e.to===a)?.countryCode??n.find(e=>e.from===a)?.countryCode??n.find(e=>e.to===a)?.countryCode,u=a.anchors??[],s=(r,i)=>{let o;return(i?[i]:(o=t(r))?[o]:a.countries).flatMap(a=>e.get(a)?.byDate.get(r)??[])};return{countries:a.countries,supported:new Set(e.keys()),unsupported:r,anchors:u,countryOn:t,countryNear:a=>p(a,u),status:(a,r)=>{var i;let o=e.get(a);return o?(i=o.byDate.get(r),!!i?.length&&(!!i.some(a=>!0===a.status)||"maybe")):null},on:s,inRange(a,e){let r=[],i=Math.min((0,o.diffDays)(a,e),400);for(let e=0;e<=i;e++)r.push(...s((0,o.addDays)(a,e)));return r}}},"countryAt",0,p,"interpretHolidays",0,A,"parseNagerHolidays",0,function(a,e){if(!Array.isArray(a))return[];let r=e.toUpperCase(),i=[];for(let e of a.slice(0,400)){if(!e||"object"!=typeof e)continue;let a=e.date,n=c(e.name),t=c(e.localName)??n;if(!(0,o.isValidISODate)(a)||!n||!t||"string"==typeof e.countryCode&&e.countryCode.toUpperCase()!==r)continue;let u=(Array.isArray(e.types)?e.types:["Public"]).filter(a=>s.includes(a)),l=Array.isArray(e.counties)?e.counties.filter(a=>"string"==typeof a&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(a)).slice(0,100):[];i.push({date:a,localName:t,name:n,countryCode:r,global:!1!==e.global||0===l.length,...l.length&&!1===e.global?{counties:l}:{},types:u.length?u:["Public"]})}return i.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date))},"placeCountry",0,h,"placeHolidayCheck",0,function(a,e){if(!a||0===a.supported.size)return;let r=h(a,e);return r?e=>a.status(r,e):e=>{let r=a.countries.map(r=>a.status(r,e));return r.some(a=>!0===a||"maybe"===a)?"maybe":!r.includes(!1)&&null}},"tripCountries",0,function(a,i=[],n=[]){var t;let u=[],s=(a,e)=>{e&&m(a)&&u.push({lat:a.lat,lng:a.lng,countryCode:e})},l=(t=a.destination,(0,r.isCountryCode)(t.countryCode)?t.countryCode:(0,r.countryCodeFromName)(t.country));if(l&&m(a.destination)){let e=a.destination.bbox,r=!!e&&4===e.length&&e.every(Number.isFinite)&&e[0]<e[2]&&e[1]<e[3];u.push({lat:a.destination.lat,lng:a.destination.lng,countryCode:l,...r?{bbox:e}:{}})}let c=[],A=(a,e)=>c.push({date:a,code:e}),d=[],f=i.filter(e.isTransport).sort(g),h=f.map(a=>({from:E(a.from,a.startTimeZone),to:E(a.to,a.endTimeZone)})),M=h[0]?.from,C=a=>{let e=f[a],r=f[a+1];if(!e?.end||!r)return!1;let i=(0,o.diffLocalMinutes)(e.end,r.start);return i>=0&&i<720};f.forEach((e,r)=>{let{from:i,to:n}=h[r];r>0&&i&&i!==M&&!C(r-1)&&i!==h[r-1].to&&(A(e.start,i),s(e.from,i));let t=r===f.length-1,u=!!a.endDate&&(0,o.datePart)(e.start)>=a.endDate&&n!==l,c=t&&(r>0&&n===M&&M!==l||u);if(!n||c||C(r))return;s(e.to,n),A(e.end??e.start,n);let m=(0,o.datePart)(e.end??e.start),p=f[r+1]?(0,o.datePart)(f[r+1].start):void 0,E=p&&(0,o.isValidISODate)(p)&&p>m?p:(0,o.addDays)(m,1);(0,o.isValidISODate)(m)&&d.push({from:m,to:E,countryCode:n})});let S=new Map(n.map(a=>[a.id,a])),y=[];for(let a of i.filter(e.isStay).sort(g)){let e=a.placeId?S.get(a.placeId):void 0,i=m(e)?e:m(a.location)?a.location:void 0,n=(0,o.datePart)(a.start),t=(0,r.countryCodeFromAddress)(e?.address)??(0,r.countryCodeFromAddress)(a.location?.name)??(i?p(i,u):d.find(a=>a.from===n)?.countryCode);if(!t)continue;A(a.start,t),s(i,t);let l=a.end?(0,o.datePart)(a.end):(0,o.addDays)(n,1);(0,o.isValidISODate)(n)&&(0,o.isValidISODate)(l)&&(0,o.diffDays)(n,l)>0&&y.push({from:n,to:l,countryCode:t})}let T=[];for(let a of[l,...c.sort((a,e)=>a.date<e.date?-1:+(a.date>e.date)).map(a=>a.code)])a&&!T.includes(a)&&T.length<8&&T.push(a);return{countries:T,stays:y,visits:d,anchors:u}},"tripYears",0,function(a){let e=(0,o.parseISODate)(a.startDate).year,r=(0,o.parseISODate)(a.endDate).year,i=[];for(let a=e;a<=r&&i.length<3;a++)i.push(a);return i}])},2482,a=>{"use strict";var e=a.i(12268),r=a.i(99506),i=a.i(26944);function o(a){return a.replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r\n|\r|\n/g,"\\n")}let n=new TextEncoder;function t(a){if(n.encode(a).length<=75)return a;let e=[],r="",i=0,o=75;for(let t of a){let a=n.encode(t).length;i+a>o&&(e.push(r),r=" ",i=1,o=75),r+=t,i+=a}return e.push(r),e.join("\r\n")}let u=(a,e=2)=>String(Math.abs(a)).padStart(e,"0");function s(a){let e=(0,r.parseLocalDateTime)(a);return`${u(e.year,4)}${u(e.month)}${u(e.day)}T${u(e.hour)}${u(e.minute)}${u(e.second)}`}function l(a){return`${u(a.getUTCFullYear(),4)}${u(a.getUTCMonth()+1)}${u(a.getUTCDate())}T${u(a.getUTCHours())}${u(a.getUTCMinutes())}${u(a.getUTCSeconds())}Z`}function c(a){return a.replace(/-/g,"")}function A(a){let e=Math.abs(a);return`${a<0?"-":"+"}${u(Math.floor(e/60))}${u(e%60)}`}function d(a,e,i,o){return"utc"===o?`${a}:${l((0,r.zonedTimeToInstant)(e,i))}`:"floating"===o?`${a}:${s(e)}`:`${a};TZID=${i}:${s(e)}`}let m={flight:180,train:60,bus:60,ferry:90,car:60,stay:120,activity:60,restaurant:60,other:60},p={booking:{stay:"Nocleg / Stay",flight:"Lot / Flight",train:"Pociąg / Train",bus:"Autobus / Bus",ferry:"Prom / Ferry",car:"Samochód / Car",activity:"Aktywność / Activity",restaurant:"Restauracja / Restaurant",other:"Rezerwacja / Booking"},note:"Notatka",item:"Pozycja planu",provider:a=>`Provider: ${a}`,confirmation:a=>`Nr: ${a}`};a.s(["buildIcs",0,function(a,n={}){let s=n.mode??"tzid",f=n.labels??p,E=a.trip.timeZone,g=new Map(a.places.map(a=>[a.id,a])),h=[];if(!1!==n.includeItems)for(let e of a.items){let o=function(a,e,o,n,t){let u=a.title??e?.name??("note"===a.kind?t.note:t.item),s=[a.notes,e?.notes].filter(Boolean).join("\n\n")||void 0,l={uid:`item-${a.id}@bruma-planner`,summary:u,...e?{location:e.address?`${e.name}, ${e.address}`:e.name,geo:{lat:e.lat,lng:e.lng}}:{},...s?{description:s}:{},...e?.url?{url:e.url}:{}};if(a.startTime&&(0,r.isValidHHMM)(a.startTime)){let n=`${a.date}T${a.startTime}`,t="string"==typeof o?o:o.zoneAtLocal(n),u=Math.max((0,i.visitMinutesFor)(a,e),15);return{...l,start:{local:n,tz:t},end:{local:(0,r.addMinutesToLocal)(n,u),tz:t}}}return n?{...l,start:{date:a.date},end:{date:(0,r.addDays)(a.date,1)}}:null}(e,e.placeId?g.get(e.placeId):void 0,a.zones??E,!!n.includeUntimedItems,f);o&&h.push(o)}if(!1!==n.includeBookings)for(let i of a.bookings)h.push(function(a,i,o){let n=(0,e.bookingZones)(a,i),t=n.start,u=a.end&&(a.end>a.start||n.end!==t)?a.end:void 0,s=u?n.end:t,l=u??(0,r.addMinutesToLocal)(a.start,60),c="stay"===a.type||"activity"===a.type||"restaurant"===a.type?a.location:a.from??a.location,A=a.from&&a.to?`${a.from.name} → ${a.to.name}`:void 0,d=[o.booking[a.type],A,a.provider?o.provider(a.provider):void 0,a.confirmation?o.confirmation(a.confirmation):void 0,a.notes].filter(Boolean).join("\n");return{uid:`booking-${a.id}@bruma-planner`,summary:a.title,start:{local:a.start,tz:t},end:{local:l,tz:s},...c?{location:c.name}:{},...c&&void 0!==c.lat&&void 0!==c.lng?{geo:{lat:c.lat,lng:c.lng}}:{},description:d,...a.url?{url:a.url}:{},categories:a.type.toUpperCase(),alarmMinutes:m[a.type]??60}}(i,E,f));h.sort((a,e)=>{let r="local"in a.start?a.start.local:a.start.date,i="local"in e.start?e.start.local:e.start.date;return r<i?-1:r>i?1:a.uid<e.uid?-1:1});let M=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Bruma//Bruma Planner//PL","CALSCALE:GREGORIAN","METHOD:PUBLISH",`X-WR-CALNAME:${o(a.trip.title)}`];if("floating"!==s&&M.push(`X-WR-TIMEZONE:${E}`),"tzid"===s){let a=new Map;for(let e of h)for(let i of[e.start,e.end]){if(!("local"in i))continue;let e=(0,r.zonedTimeToInstant)(i.local,i.tz).getTime(),o=a.get(i.tz);a.set(i.tz,o?[Math.min(o[0],e),Math.max(o[1],e)]:[e,e])}for(let[e,[i,o]]of a)M.push(...function(a,e,i){let{initial:o,transitions:n}=function(a,e,i){let o=(0,r.timeZoneOffsetMinutes)(new Date(e),a),n=[],t=e,u=o;for(let o=e+216e5;o<=i+216e5;o+=216e5){let e=(0,r.timeZoneOffsetMinutes)(new Date(o),a);if(e!==u){let i=t,s=o;for(;s-i>6e4;){let e=6e4*Math.floor((i+s)/2/6e4);(0,r.timeZoneOffsetMinutes)(new Date(e),a)===u?i=e:s=e}n.push({at:s,from:u,to:e}),u=e}t=o}return{initial:o,transitions:n}}(a,e,i),t=!!n[0]&&n[0].to<n[0].from,s=["BEGIN:VTIMEZONE",`TZID:${a}`],l=t?"DAYLIGHT":"STANDARD";for(let a of(s.push(`BEGIN:${l}`,"DTSTART:19700101T000000",`TZOFFSETFROM:${A(o)}`,`TZOFFSETTO:${A(o)}`,`END:${l}`),n)){let e=a.to>a.from?"DAYLIGHT":"STANDARD",r=new Date(a.at+6e4*a.from),i=`${u(r.getUTCFullYear(),4)}${u(r.getUTCMonth()+1)}${u(r.getUTCDate())}T${u(r.getUTCHours())}${u(r.getUTCMinutes())}00`;s.push(`BEGIN:${e}`,`DTSTART:${i}`,`TZOFFSETFROM:${A(a.from)}`,`TZOFFSETTO:${A(a.to)}`,`END:${e}`)}return s.push("END:VTIMEZONE"),s}(e,i-864e5,o+864e5))}let C=l(n.now??new Date);for(let a of h)M.push("BEGIN:VEVENT",`UID:${a.uid}`,`DTSTAMP:${C}`),"date"in a.start?(M.push(`DTSTART;VALUE=DATE:${c(a.start.date)}`),"date"in a.end&&M.push(`DTEND;VALUE=DATE:${c(a.end.date)}`)):(M.push(d("DTSTART",a.start.local,a.start.tz,s)),"local"in a.end&&M.push(d("DTEND",a.end.local,a.end.tz,s))),M.push(`SUMMARY:${o(a.summary)}`),a.location&&M.push(`LOCATION:${o(a.location)}`),a.geo&&M.push(`GEO:${a.geo.lat.toFixed(6)};${a.geo.lng.toFixed(6)}`),a.description&&M.push(`DESCRIPTION:${o(a.description)}`),a.url&&M.push(`URL:${a.url}`),a.categories&&M.push(`CATEGORIES:${o(a.categories)}`),a.alarmMinutes&&!1!==n.bookingAlarms&&M.push("BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${o(a.summary)}`,`TRIGGER:-PT${Math.round(a.alarmMinutes)}M`,"END:VALARM"),M.push("END:VEVENT");return M.push("END:VCALENDAR"),M.map(t).join("\r\n")+"\r\n"}])},86208,a=>{"use strict";var e=a.i(99506);let r=a=>a*Math.PI/180,i=a=>180*a/Math.PI;function o(a){let e=(a-2451545)/36525,o=((280.46646+e*(36000.76983+3032e-7*e))%360+360)%360,n=357.52911+e*(35999.05029-1537e-7*e),t=.016708634-e*(42037e-9+1267e-10*e),u=o+(Math.sin(r(n))*(1.914602-e*(.004817+14e-6*e))+Math.sin(r(2*n))*(.019993-101e-6*e)+289e-6*Math.sin(r(3*n))),s=125.04-1934.136*e,l=u-.00569-.00478*Math.sin(r(s)),c=23+(26+(21.448-e*(46.815+e*(59e-5-.001813*e)))/60)/60+.00256*Math.cos(r(s)),A=i(Math.asin(Math.sin(r(c))*Math.sin(r(l)))),d=Math.tan(r(c/2))**2;return{declination:A,eqTime:4*i(d*Math.sin(2*r(o))-2*t*Math.sin(r(n))+4*t*d*Math.sin(r(n))*Math.cos(2*r(o))-.5*d*d*Math.sin(4*r(o))-1.25*t*t*Math.sin(2*r(n)))}}function n(a,e){let o=Math.cos(r(90.833))/(Math.cos(r(a))*Math.cos(r(e)))-Math.tan(r(a))*Math.tan(r(e));return o>1||o<-1?o>1?NaN:1/0:i(Math.acos(o))}a.s(["localSunTimes",0,function(a,r,i,t){let u=function(a,r,i){let{year:t,month:u,day:s}=(0,e.parseISODate)(a),l=Date.UTC(t,u-1,s),c=l/864e5+2440587.5,A=o(c+(720-4*i)/1440),d=o(c+(720-4*i-A.eqTime)/1440),m=720-4*i-d.eqTime,p=new Date(l+6e4*m),f=n(r,d.declination);if(Number.isNaN(f))return{sunrise:null,sunset:null,solarNoon:p,polar:"night",dayLengthMinutes:0};if(!Number.isFinite(f))return{sunrise:null,sunset:null,solarNoon:p,polar:"day",dayLengthMinutes:1440};let E=a=>{let e=m+4*a*f;for(let t=0;t<2;t++){let t=o(c+e/1440),u=n(r,t.declination);if(!Number.isFinite(u))break;e=720-4*i-t.eqTime+4*a*u}return e},g=E(-1),h=E(1);return{sunrise:new Date(l+6e4*g),sunset:new Date(l+6e4*h),solarNoon:p,polar:null,dayLengthMinutes:Math.round(h-g)}}(a,r,i),s=r=>{if(!r)return null;let i=(0,e.timeZoneOffsetMinutes)(r,t),{year:o,month:n,day:u}=(0,e.parseISODate)(a);return Math.round((r.getTime()-Date.UTC(o,n-1,u))/6e4+i)},l=s(u.sunrise),c=s(u.sunset);return{sunrise:null===l?null:(0,e.formatHHMM)(l),sunset:null===c?null:(0,e.formatHHMM)(c),sunriseMinutes:null===l?null:(l%1440+1440)%1440,sunsetMinutes:null===c?null:c,polar:u.polar,dayLengthMinutes:u.dayLengthMinutes}}])},86924,a=>{a.v({card:"Card-module__e54Bea__card",flat:"Card-module__e54Bea__flat",interactive:"Card-module__e54Bea__interactive",media:"Card-module__e54Bea__media","pad-lg":"Card-module__e54Bea__pad-lg","pad-md":"Card-module__e54Bea__pad-md","pad-none":"Card-module__e54Bea__pad-none","pad-sm":"Card-module__e54Bea__pad-sm",selected:"Card-module__e54Bea__selected",sunken:"Card-module__e54Bea__sunken"})},45283,a=>{"use strict";var e=a.i(43476),r=a.i(53185),i=a.i(86924);a.s(["Card",0,function({as:a="div",padding:o="md",tone:n="raised",interactive:t,selected:u,media:s,className:l,...c}){return(0,e.jsx)(a,{className:(0,r.cx)(i.default.card,i.default[`pad-${o}`],"flat"===n&&i.default.flat,"sunken"===n&&i.default.sunken,t&&i.default.interactive,u&&i.default.selected,s&&i.default.media,l),...c})}])},41138,a=>{"use strict";var e=a.i(71645),r=a.i(96697);a.i(73447);var i=a.i(34595),o=a.i(70380);let n=new Map;a.s(["useMoney",0,function(){let{locale:a}=(0,o.useLocale)(),t=(0,i.intlLocale)(a);return(0,e.useCallback)((a,e,i)=>(function(a,e,i,o={}){let t=(0,r.roundToCurrency)(e,i),u=(0,r.currencyDigits)(i),s=function(a,e,r,i){let o=`${a}|${e}|${r}|${i.signDisplay??""}|${i.compact?"c":""}`,t=n.get(o);if(!t){try{t=new Intl.NumberFormat(a,{style:"currency",currency:e,...i.compact?{notation:"compact",maximumFractionDigits:1}:{minimumFractionDigits:r,maximumFractionDigits:r},...i.signDisplay?{signDisplay:i.signDisplay}:{}})}catch{t=new Intl.NumberFormat(a,{minimumFractionDigits:r,maximumFractionDigits:r})}n.set(o,t)}return t}(a,i,!o.exact&&Number.isInteger(t)?0:u,o),l=s.format(t);return"currency"===s.resolvedOptions().style?l:`${l} ${i}`})(t,a,e,i),[t])}])}]);