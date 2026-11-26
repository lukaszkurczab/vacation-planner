(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),t=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function n(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}let r=new Map;function o(e){let a=r.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}r.set(e,a)}return a}function s(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let u=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),l=0,c=null;function d(){if(c)return c;let e=o("en"),t=[];for(let n of i)for(let r of i){let i=n+r;if(!a.has(i))try{e?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&t.push(i)}catch{}}return c=t,t}function A(e){if(!e)return;let a=s(e);if(!a||a.length<2)return;let i=e.trim();if(!/^[A-Z]{2}$/.test(i))for(;;){let e=u.get(a);if(e)return e;if(l>=t.length)return;!function(e){let a=o(e);if(a)for(let e of d()){let t;try{t=a.of(e)}catch{t=void 0}if(!t||t===e)continue;let i=s(t);i&&!u.has(i)&&u.set(i,e)}}(t[l]),l+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return A(a[a.length-1])},"countryCodeFromName",0,A,"countryCodes",0,function(){return d()},"countryFromLanguages",0,function(e){let a=(e??[]).map(e=>String(e).trim()).filter(Boolean);for(let e of a)try{let a=new Intl.Locale(e).region?.toUpperCase();if(a&&n(a))return a}catch{}for(let e of a)try{let a=new Intl.Locale(e).maximize().region?.toUpperCase();if(a&&n(a))return a}catch{}},"countryName",0,function(e,a){try{return o(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,n])},93440,e=>{"use strict";var a=e.i(99506);let t=`
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
`,i=null;function n(){if(i)return i;for(let e of(i=new Map,t.split("\n"))){let[a,...t]=e.trim().split(" ");a&&0!==t.length&&i.set(a,t.map(e=>{let[a="",t]=e.split("@");if(!t)return{zone:a};let[i,n]=t.split(",").map(Number);return{zone:a,lat:i,lng:n}}))}return i}let r=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!r)for(let[e,a]of(r=new Map,n()))for(let{zone:t}of a)r.set(t,r.has(t)&&r.get(t)!==e?null:e);return r.get(e)??void 0}},"countryTimeZones",0,function(e){return(n().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,t){if(!t)return null;let i=(n().get(t.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(i.length<=1)return i[0]?.zone??null;let r=Math.cos(e.lat*Math.PI/180),o=null,s=1/0;for(let a of i){if(void 0===a.lat||void 0===a.lng)continue;let t=Math.abs(e.lng-a.lng);t>180&&(t=360-t);let i=Math.hypot(t*r,(e.lat-a.lat)*.5);i<s&&(s=i,o=a)}return o?.zone??i[0]?.zone??null}])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},t=new Map(`
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
`.trim().split("\n").map(e=>{let[t="",i="",n="",r=""]=e.split("|");return[t,{code:t,city:{pl:i,en:n||i,de:a[t]??(n||i)},timeZone:r}]}));function i(e){return e?t.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of t.values())for(let t of Object.values(e.city)){let i=t.toLowerCase();if(i===a||i.startsWith(`${a} (`))return e}},"airportByCode",0,i,"airportLabel",0,function(e,a,t){let n=i(e),r=(n?.city[a]??t)?.replace(/\s*\([^)]*\)\s*$/,"");return r?`${r} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),t=e.i(41478),i=e.i(93440),n=e.i(99506),r=e.i(58162),o=e.i(49913),s=e.i(25395);let u=["Public","Bank","School","Authorities","Optional","Observance"],l=120,c=(e,a=l)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0;function d(e,a,t){let i=a.toUpperCase(),n=new Set(e.flatMap(e=>e.counties??[])),r=e=>n.size>=4&&[...n].every(a=>e.includes(a)),o=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),n=a.types.includes("Optional");if(!e&&!n)continue;let s=a.global||!a.counties?.length||r(a.counties);if(!s&&t&&!a.counties?.includes(t))continue;let u=!s,l=!!e&&(!u||!!t)||"maybe",c=e?u?"regional":"national":"optional",d={date:a.date,countryCode:i,localName:a.localName,name:a.name,scope:c,status:l,...u&&a.counties?{counties:a.counties}:{}},m=o.get(a.date)??[],p=m.findIndex(e=>e.name===d.name||e.localName===d.localName);p<0?m.push(d):A(d)>A(m[p])&&(m[p]=d),o.set(a.date,m)}for(let e of o.values())e.sort((e,a)=>A(a)-A(e));return{countryCode:i,byDate:o}}let A=e=>2*(!0===e.status)+ +("national"===e.scope),m=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function p(e,a){let t,i=50,n=new Set;for(let o of a){let a=(0,s.haversineKm)(e,o);a<=i&&(t=o,i=a),(a<=300||o.bbox&&0===(0,r.kmOutsideBBox)(o.bbox,e))&&n.add(o.countryCode)}return t?t.countryCode:1===n.size?[...n][0]:void 0}let h=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function f(e,a){let n=e?.name.trim()??"",r=(0,t.countryCodeFromAddress)(n);if(r)return r;let s=h.exec(n),u=(0,o.airportByCode)(s?.[1]??s?.[2]);return(0,i.countryOfTimeZone)(u?.timeZone)??(0,i.countryOfTimeZone)(a)}let g=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function y(e,a){let i=(0,t.countryCodeFromAddress)(a?.address);if(i)return i;let n=1===e.countries.length?e.countries[0]:void 0;return m(a)&&0!==e.anchors.length?e.countryNear(a):n}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,t=new Set;for(let[i,n]of e.data)if(null===n)t.add(i);else{let t=e.region&&e.region.startsWith(`${i}-`)?e.region:void 0;a.set(i,d(n,i,t))}let i=e.stays??[],r=e.visits??[],o=e=>i.find(a=>a.from<=e&&e<a.to)?.countryCode??r.find(a=>a.from<e&&e<a.to)?.countryCode??i.find(a=>a.to===e)?.countryCode??r.find(a=>a.from===e)?.countryCode??r.find(a=>a.to===e)?.countryCode,s=e.anchors??[],u=(t,i)=>{let n;return(i?[i]:(n=o(t))?[n]:e.countries).flatMap(e=>a.get(e)?.byDate.get(t)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:t,anchors:s,countryOn:o,countryNear:e=>p(e,s),status:(e,t)=>{var i;let n=a.get(e);return n?(i=n.byDate.get(t),!!i?.length&&(!!i.some(e=>!0===e.status)||"maybe")):null},on:u,inRange(e,a){let t=[],i=Math.min((0,n.diffDays)(e,a),400);for(let a=0;a<=i;a++)t.push(...u((0,n.addDays)(e,a)));return t}}},"countryAt",0,p,"interpretHolidays",0,d,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let t=a.toUpperCase(),i=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,r=c(a.name),o=c(a.localName)??r;if(!(0,n.isValidISODate)(e)||!r||!o||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==t)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>u.includes(e)),l=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];i.push({date:e,localName:o,name:r,countryCode:t,global:!1!==a.global||0===l.length,...l.length&&!1===a.global?{counties:l}:{},types:s.length?s:["Public"]})}return i.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,y,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let t=y(e,a);return t?a=>e.status(t,a):a=>{let t=e.countries.map(t=>e.status(t,a));return t.some(e=>!0===e||"maybe"===e)?"maybe":!t.includes(!1)&&null}},"tripCountries",0,function(e,i=[],r=[]){var o;let s=[],u=(e,a)=>{a&&m(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},l=(o=e.destination,(0,t.isCountryCode)(o.countryCode)?o.countryCode:(0,t.countryCodeFromName)(o.country));if(l&&m(e.destination)){let a=e.destination.bbox,t=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:l,...t?{bbox:a}:{}})}let c=[],d=(e,a)=>c.push({date:e,code:a}),A=[],h=i.filter(a.isTransport).sort(g),y=h.map(e=>({from:f(e.from,e.startTimeZone),to:f(e.to,e.endTimeZone)})),E=y[0]?.from,k=e=>{let a=h[e],t=h[e+1];if(!a?.end||!t)return!1;let i=(0,n.diffLocalMinutes)(a.end,t.start);return i>=0&&i<720};h.forEach((a,t)=>{let{from:i,to:r}=y[t];t>0&&i&&i!==E&&!k(t-1)&&i!==y[t-1].to&&(d(a.start,i),u(a.from,i));let o=t===h.length-1,s=!!e.endDate&&(0,n.datePart)(a.start)>=e.endDate&&r!==l,c=o&&(t>0&&r===E&&E!==l||s);if(!r||c||k(t))return;u(a.to,r),d(a.end??a.start,r);let m=(0,n.datePart)(a.end??a.start),p=h[t+1]?(0,n.datePart)(h[t+1].start):void 0,f=p&&(0,n.isValidISODate)(p)&&p>m?p:(0,n.addDays)(m,1);(0,n.isValidISODate)(m)&&A.push({from:m,to:f,countryCode:r})});let M=new Map(r.map(e=>[e.id,e])),C=[];for(let e of i.filter(a.isStay).sort(g)){let a=e.placeId?M.get(e.placeId):void 0,i=m(a)?a:m(e.location)?e.location:void 0,r=(0,n.datePart)(e.start),o=(0,t.countryCodeFromAddress)(a?.address)??(0,t.countryCodeFromAddress)(e.location?.name)??(i?p(i,s):A.find(e=>e.from===r)?.countryCode);if(!o)continue;d(e.start,o),u(i,o);let l=e.end?(0,n.datePart)(e.end):(0,n.addDays)(r,1);(0,n.isValidISODate)(r)&&(0,n.isValidISODate)(l)&&(0,n.diffDays)(r,l)>0&&C.push({from:r,to:l,countryCode:o})}let S=[];for(let e of[l,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!S.includes(e)&&S.length<8&&S.push(e);return{countries:S,stays:C,visits:A,anchors:s}},"tripYears",0,function(e){let a=(0,n.parseISODate)(e.startDate).year,t=(0,n.parseISODate)(e.endDate).year,i=[];for(let e=a;e<=t&&i.length<3;e++)i.push(e);return i}])},27595,37432,e=>{"use strict";var a=e.i(99506),t=e.i(38520),i=e.i(86208);let n=["mo","tu","we","th","fr","sa","su"],r=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],o=["sunrise","sunset","dawn","dusk"],s=new Set(["ph","sh","off","closed","open","unknown","easter","week","day","days",...o]);class u extends Error{}function l(e){throw new u(e)}class c{tokens;i;work;constructor(e){this.tokens=e,this.i=0,this.work=0}spend(e=1){this.work+=e,this.work>2e3&&l("too complex")}peek(e=0){return this.tokens[this.i+e]}next(){let e=this.tokens[this.i];return e||l("unexpected end"),this.i+=1,e}isPunct(e,a=0){let t=this.peek(a);return t?.t==="punct"&&t.v===e}isWord(e,a=0){let t=this.peek(a);return t?.t==="word"&&e(t.v)}expectPunct(e){this.isPunct(e)||l(`expected ${e}`),this.i+=1}parse(){let e=[],a="normal";for(0===this.tokens.length&&l("empty");;){e.push(this.rule(a)),e.length>100&&l("too many rules");let t=this.peek();if(!t||("punct"!==t.t&&l("expected rule separator"),";"===t.v?a="normal":","===t.v?a="additional":"||"===t.v?a="fallback":l(`unexpected ${t.v}`),this.i+=1,!this.peek()&&"normal"===a))break}return e}rule(e){let a={sep:e,always:!1,years:null,dates:null,weeks:null,weekdays:null,holidays:null,holidayJoin:"or",times:null,modifier:null},t=this.i;if(this.peek()?.t==="always"?(this.i+=1,a.always=!0):(this.peek()?.t==="num"&&this.peek().v>=1900&&4===this.peek().raw.length&&(a.years=this.years()),(this.isWord(A)||this.isWord(e=>"easter"===e))&&(a.dates=this.dates()),this.isWord(e=>"week"===e)&&(a.weeks=this.weeks()),(a.years||a.dates||a.weeks)&&this.isPunct(":")&&(this.i+=1),(this.isWord(d)||this.isWord(m))&&this.weekdaySelector(a),this.isTimeStart()&&(a.times=this.times())),this.isWord(e=>"off"===e||"closed"===e||"open"===e||"unknown"===e)){let e=this.next().v;a.modifier="off"===e||"closed"===e?"closed":e}return this.peek()?.t==="comment"&&(a.comment=this.next().v||void 0),this.i===t&&l("empty rule"),a}years(){let e=[];for(;;){let a=this.num(),t=a;if(this.isPunct("-")&&this.peek(1)?.t==="num"&&(this.i+=1,t=this.num()),(this.isPunct("/")||this.isPunct("+"))&&l("unsupported year step"),a>t&&l("bad year range"),this.spend(),e.push([a,t]),this.isPunct(",")&&this.peek(1)?.t==="num"&&4===this.peek(1).raw.length)this.i+=1;else break}return e}num(){let e=this.next();return"num"!==e.t&&l("expected number"),e.v}calPoint(){if(this.isWord(e=>"easter"===e)){this.i+=1;let e=0;if((this.isPunct("+")||this.isPunct("-"))&&this.peek(1)?.t==="num"&&this.isWord(e=>"day"===e||"days"===e,2)){let a=this.isPunct("-")?-1:1;this.i+=1,Math.abs(e=a*this.num())>366&&l("bad easter offset"),this.i+=1}return{kind:"easter",offset:e}}let e=this.next();"word"===e.t&&A(e.v)||l("expected month");let a=r.indexOf(e.v)+1,t=null;return this.peek()?.t==="num"&&((t=this.num())<1||t>31)&&l("bad day"),{kind:"md",month:a,day:t}}dates(){let e=[];for(;;){let a=this.calPoint(),t=a;if(this.isPunct("-"))if(this.i+=1,this.peek()?.t==="num"&&"md"===a.kind&&null!==a.day){let e=this.num();(e<1||e>31)&&l("bad day"),t={kind:"md",month:a.month,day:e}}else t=this.calPoint();if(this.isPunct("/")&&l("unsupported date step"),this.spend(),e.push({from:a,to:t}),this.isPunct(",")&&(this.isWord(A,1)||this.isWord(e=>"easter"===e,1)))this.i+=1;else break}return e}weeks(){this.i+=1;let e=[];for(;;){let a=this.num(),t=a;if(this.isPunct("-")&&(this.i+=1,t=this.num()),this.isPunct("/")&&l("unsupported week step"),(a<1||a>53||t<1||t>53)&&l("bad week"),this.spend(),e.push([a,t]),this.isPunct(",")&&this.peek(1)?.t==="num")this.i+=1;else break}return e}weekdaySelector(e){let a=[],t=[];for(;;){let i=!1;if(this.isWord(m)?(a.push(this.next().v),this.spend(),(this.isPunct("+")||this.isPunct("-")&&this.peek(1)?.t==="num")&&l("unsupported holiday offset"),i=!0):(t.push(this.weekdayItem()),this.spend()),this.isPunct(",")&&(this.isWord(d,1)||this.isWord(m,1))){this.i+=1;continue}if(i&&this.isWord(d)){e.holidayJoin="and";continue}break}e.weekdays=t.length?t:null,e.holidays=a.length?a:null}weekdayItem(){let e=n.indexOf(this.next().v)+1,a=e;this.isPunct("-")&&this.isWord(d,1)&&(this.i+=1,a=n.indexOf(this.next().v)+1);let t=null;if(this.isPunct("[")){for(this.i+=1,t=[];;){let e=this.isPunct("-")?(this.i++,-1):1,a=e*this.num();if((0===a||Math.abs(a)>5)&&l("bad nth"),this.isPunct("-")&&this.peek(1)?.t==="num"&&e>0){this.i+=1;let e=this.num();(e<a||e>5)&&l("bad nth range"),this.spend(e-a+1);for(let i=a;i<=e;i++)t.push(i)}else this.spend(),t.push(a);if(this.isPunct(",")){this.i+=1;continue}break}this.expectPunct("]"),t.some(e=>0===e||Math.abs(e)>5)&&l("bad nth"),(this.isPunct("+")||this.isPunct("-"))&&this.peek(1)?.t==="num"&&l("unsupported weekday offset")}return{from:e,to:a,nth:t}}isTimeStart(){let e=this.peek();return e?.t==="time"||e?.t==="word"&&p(e.v)||this.isPunct("(")}timePoint(){if(this.isPunct("(")){this.i+=1;let e=this.next();"word"===e.t&&p(e.v)||l("expected sun event");let a=e.v,t=0;if(this.isPunct("+")||this.isPunct("-")){let e=this.isPunct("-")?-1:1;this.i+=1;let a=this.next();"time"!==a.t&&l("expected offset"),t=e*a.v}return this.expectPunct(")"),{kind:"sun",event:a,offset:t}}let e=this.next();return"time"===e.t?{kind:"fixed",minutes:e.v}:"word"===e.t&&p(e.v)?{kind:"sun",event:e.v,offset:0}:l("expected time")}times(){let e=[];for(;;){let a=this.timePoint(),t=null,i=!1;if(this.isPunct("-")&&(this.i+=1,t=this.timePoint()),this.isPunct("/")&&l("unsupported periodic time"),this.isPunct("+")&&(this.i+=1,i=!0),t||i||l("point in time"),this.spend(),e.push({start:a,end:t,openEnd:i}),this.isPunct(",")&&(this.peek(1)?.t==="time"||this.isWord(p,1)||this.isPunct("(",1)))this.i+=1;else break}return e}}let d=e=>n.includes(e),A=e=>r.includes(e),m=e=>"ph"===e||"sh"===e,p=e=>o.includes(e);function h(e,t,i){if("easter"===e.kind){let i,n,r,o,s,u,l,c,d,A,{month:m,day:p}=(0,a.parseISODate)((0,a.addDays)((i=t%19,n=Math.floor(t/100),r=t%100,o=Math.floor(n/4),s=Math.floor((n+8)/25),u=Math.floor((n-s+1)/3),l=(19*i+n-o-u+15)%30,c=(32+n%4*2+2*Math.floor(r/4)-l-r%4)%7,d=Math.floor((i+11*l+22*c)/451),A=Math.floor((l+c-7*d+114)/31),(0,a.toISODate)(t,A,(l+c-7*d+114)%31+1)),e.offset));return 100*m+p}return 100*e.month+(e.day??(i?31:1))}function f(e){let a=[...e].filter(e=>e.end>e.start||e.openEnd).sort((e,a)=>e.start-a.start||e.end-a.end),t=[];for(let e of a){let a=t[t.length-1];a&&e.start<=a.end?((e.end>a.end||e.end===a.end&&e.openEnd)&&(a.end=e.end,e.openEnd?a.openEnd=!0:delete a.openEnd),!a.comment&&e.comment&&(a.comment=e.comment)):t.push({...e})}return t}let g=new Map;function y(e,t={}){let o=function(e){let a,t=g.get(e);if(t)return t;try{if(0===e.trim().length||e.length>2e3)throw new u("empty or too long");a={rules:new c(function(e){let a=[],t=e.replace(/[–—−]/g,"-").replace(/ /g," "),i=0;for(;i<t.length;){let e=t[i];if(/\s/.test(e)){i+=1;continue}if('"'===e){let e=t.indexOf('"',i+1);e<0&&l("unterminated comment"),a.push({t:"comment",v:t.slice(i+1,e).trim()}),a.length>1e3&&l("too many tokens"),i=e+1;continue}let o=t.slice(i);if(o.startsWith("24/7")){a.push({t:"always"}),i+=4;continue}if(o.startsWith("||")){a.push({t:"punct",v:"||"}),i+=2;continue}let u=/^(\d{1,2}):(\d{2})(?!\d)/.exec(o);if(u){let e=Number(u[1]),t=Number(u[2]);(t>59||e>48)&&l(`bad time ${u[0]}`),a.push({t:"time",v:60*e+t}),a.length>1e3&&l("too many tokens"),i+=u[0].length;continue}let c=/^\d+/.exec(o);if(c){c[0].length>4&&l("number too long"),a.push({t:"num",v:Number(c[0]),raw:c[0]}),a.length>1e3&&l("too many tokens"),i+=c[0].length;continue}let d=/^[A-Za-z]+/.exec(o);if(d){let e=d[0].toLowerCase();n.includes(e)||r.includes(e)||s.has(e)||l(`unknown word ${d[0]}`),a.push({t:"word",v:e}),a.length>1e3&&l("too many tokens"),i+=d[0].length;continue}if("-,;:[]()+/".includes(e)){a.push({t:"punct",v:e}),a.length>1e3&&l("too many tokens"),i+=1;continue}l(`unexpected ${e}`)}return a}(e.trim())).parse()}}catch(e){if(!(e instanceof u))throw e;a={error:e.message}}return g.size>=500&&g.delete(g.keys().next().value),g.set(e,a),a}(e),d="rules"in o?o.rules:null,A=d?function(e){let a=0;for(let t of e)for(let e of t.times??[]){if(!e.end)continue;if("fixed"!==e.start.kind||"fixed"!==e.end.kind){if("fixed"===e.end.kind){let t=e.end.minutes;t>1440?a=Math.max(a,t-1440):t<720&&(a=Math.max(a,t))}continue}let{minutes:t}=e.start,{minutes:i}=e.end;i>1440?a=Math.max(a,i-1440):i<=t&&(a=Math.max(a,i))}return Math.min(a,1440)}(d):0,m=new Map,p=e=>{let n=m.get(e);return n||(n=d?function(e,t,n){let r=n.isHoliday?n.isHoliday(t):null;if("maybe"===r&&e.some(e=>e.holidays?.includes("ph")))return{known:!1,intervals:[],uncertain:!1};let o=!0===r||!1!==r&&"maybe"!==r&&null,s={known:!0,intervals:[],uncertain:!1},u=!1,l=!1;for(let r of e){if("fallback"===r.sep&&u)continue;let e=function(e,t,i){if(e.always)return"yes";let{year:n}=(0,a.parseISODate)(t);if(e.years&&!e.years.some(([e,a])=>n>=e&&n<=a)||e.dates&&!function(e,t){let{year:i,month:n,day:r}=(0,a.parseISODate)(t),o=100*n+r;return e.some(({from:e,to:a})=>{let t=h(e,i,!1),n=h(a,i,!0);return t<=n?o>=t&&o<=n:o>=t||o<=n})}(e.dates,t))return"no";if(e.weeks){let i=function(e){let{year:t,month:i,day:n}=(0,a.parseISODate)(e),r=new Date(Date.UTC(t,i-1,n+4-(0,a.isoWeekday)(e))),o=Date.UTC(r.getUTCFullYear(),0,1);return Math.floor((r.getTime()-o)/864e5/7)+1}(t);if(!e.weeks.some(([e,a])=>e<=a?i>=e&&i<=a:i>=e||i<=a))return"no"}let r=e.weekdays?!function(e,t){let i=(0,a.isoWeekday)(t),{year:n,month:r,day:o}=(0,a.parseISODate)(t);return e.some(({from:e,to:t,nth:s})=>{if(!(e<=t?i>=e&&i<=t:i>=e||i<=t))return!1;if(!s)return!0;let u=Math.ceil(o/7),l=-(Math.floor(((0,a.daysInMonth)(n,r)-o)/7)+1);return s.includes(u)||s.includes(l)})}(e.weekdays,t)?"no":"yes":null,o=null;if(e.holidays){let a=e.holidays.map(e=>"ph"===e&&null!==i?i?"yes":"no":"maybe");o=a.includes("yes")?"yes":a.includes("maybe")?"maybe":"no"}return null===r&&null===o?"yes":null===r?o:null===o?r:"and"===e.holidayJoin?"no"===r||"no"===o?"no":"yes"===r&&"yes"===o?"yes":"maybe":"yes"===r||"yes"===o?"yes":"no"===r&&"no"===o?"no":"maybe"}(r,t,o);if("maybe"===e&&(l=!0),"yes"!==e)continue;u=!0;let c="additional"===r.sep,d=r.comment,A=r.times?function(e,a,t,n){let r=null,o=e=>"fixed"===e.kind?e.minutes:!t.location||(r??=(0,i.localSunTimes)(a,t.location.lat,t.location.lng,t.location.timeZone)).polar||null===r.sunriseMinutes||null===r.sunsetMinutes?null:("sunrise"===e.event?r.sunriseMinutes:"sunset"===e.event?r.sunsetMinutes:"dawn"===e.event?r.sunriseMinutes-30:r.sunsetMinutes+30)+e.offset,s=[];for(let a of e){let e,t=o(a.start);if(null===t)return{intervals:[],unresolved:!0};if(a.end){let i=o(a.end);if(null===i)return{intervals:[],unresolved:!0};(e=i)<=t&&(e+=1440)}else e=1440;a.end||(e=Math.max(t,1440)),s.push({start:t,end:e,...a.openEnd?{openEnd:!0}:{},...n?{comment:n}:{}})}return{intervals:s,unresolved:!1}}(r.times,t,n,d):{intervals:[{start:0,end:1440,...d?{comment:d}:{}}],unresolved:!1},m=!r.times&&!r.modifier&&!!d&&!r.always;if("unknown"===r.modifier||A.unresolved||m){s=c?{...s,known:!1}:{known:!1,intervals:[],uncertain:!1,...d?{comment:d}:{}};continue}if("closed"===r.modifier){let e=d?{comment:d,uncertain:!0}:{};s=r.times?{...s,intervals:function(e,a){let t=[...e];for(let e of a){let a=[];for(let i of t){if(e.end<=i.start||e.start>=i.end){a.push(i);continue}e.start>i.start&&a.push({...i,end:e.start,openEnd:void 0}),e.end<i.end&&a.push({...i,start:e.end})}t=a.map(e=>{let{openEnd:a,...t}=e;return a?{...t,openEnd:a}:t})}return t}(s.intervals,A.intervals),...e}:c?{...s,intervals:[],...e}:{known:!0,intervals:[],uncertain:!1,...e};continue}s=c?{...s,intervals:f([...s.intervals,...A.intervals]),uncertain:s.uncertain||!!d,...d?{comment:d}:{}}:{known:!0,intervals:f(A.intervals),uncertain:!!d,...d?{comment:d}:{}}}return!u&&l?{known:!1,intervals:[],uncertain:!1}:s}(d,e,t):{known:!1,intervals:[],uncertain:!1},m.set(e,n)),n};return{raw:e,valid:!!d,..."error"in o?{error:o.error}:{},mentionsHolidays:!!d?.some(e=>!!e.holidays?.length),alwaysOpen:!!d&&1===d.length&&d[0].always&&!d[0].modifier&&!d[0].comment,intervalsForDate:e=>{if(!(0,a.isValidISODate)(e))return{date:e,known:!1,intervals:[],carried:[],uncertain:!1};let t=p(e),i=p((0,a.addDays)(e,-1)),n=i.known?i.intervals.filter(e=>e.end>1440).map(e=>({...e,start:Math.max(0,e.start-1440),end:e.end-1440})):[],r=t.intervals.filter(e=>e.start<1440),o=i.known?i.intervals.filter(e=>e.start>=1440).map(e=>({...e,start:e.start-1440,end:e.end-1440})):[];return{date:e,known:t.known,intervals:r,carried:f([...n,...o]),...t.comment?{comment:t.comment}:{},uncertain:t.uncertain}},stateAt:(e,t)=>{if(!d||!(0,a.isValidISODate)(e))return{state:"unknown"};let i=Math.floor(t/1440),n=i?(0,a.addDays)(e,i):e,r=t-1440*i,o=[],s=[],u=new Set;for(let e=-1;e<=8;e++){let t=p((0,a.addDays)(n,e));if(!t.known){s.push(e);continue}for(let a of(t.uncertain&&u.add(e),t.intervals))o.push({...a,start:a.start+1440*e,end:a.end+1440*e})}let l=f(o),c=e=>{let t=Math.floor(e/1440);return{date:(0,a.addDays)(n,t),minutes:e-1440*t}},m=e=>{let a=s.find(a=>(a+1)*1440>e);return void 0===a?1/0:Math.max(e,1440*a)},h=l.find(e=>e.start<=r&&r<e.end);if(h){let e=h.comment;if(h.openEnd||h.end>=11520)return{state:"open",...e?{comment:e}:{}};let a=m(r);return h.end>a?{state:"open",...e?{comment:e}:{}}:{state:"open",nextChange:c(h.end),minutesToChange:h.end-r,...e?{comment:e}:{}}}if(s.includes(0)||s.includes(-1)&&r<A)return{state:"unknown"};let g=p(n),y=l.find(e=>e.start>r),E=m(r),k=y&&y.start<E&&y.start<11520?y.start:null;return{state:u.has(0)?"unknown":"closed",...null!==k?{nextChange:c(k),minutesToChange:k-r}:{},...g.comment?{comment:g.comment}:{}}}}}function E(e,t,i,n){if(!e.valid)return{kind:"unknown"};let r=e.stateAt(t,i);if("unknown"===r.state)return{kind:"unknown"};if("closed"===r.state){let n=Math.floor(i/1440),o=n?(0,a.addDays)(t,n):t,s=e.intervalsForDate(o),u=s.known&&0===s.intervals.length&&0===s.carried.length,l=r.nextChange,c=l&&l.date===o?l.minutes:void 0;return{kind:"closed",closedAllDay:u,...void 0!==c?{opensAt:c}:{}}}if(n<=i||void 0===r.minutesToChange)return{kind:"ok"};if(r.comment)return{kind:"unknown"};let o=i+r.minutesToChange;return o>=n?{kind:"ok"}:{kind:"closesEarly",closesAt:o,minutesLeft:o-i}}e.s(["checkVisit",0,E,"mondayOf",0,function(e){return(0,a.addDays)(e,1-(0,a.isoWeekday)(e))},"openingHours",0,y,"weekFrom",0,function(e,t=7){return Array.from({length:t},(t,i)=>(0,a.addDays)(e,i))}],37432);var k=e.i(55289);function M(e,a,i,n){let r=e?.openingHours?.raw;if(!r)return null;let o="string"==typeof a?a:a.placeZone(e,n),s=(0,t.placeHolidayCheck)(i,e);return y(r,{location:{lat:e.lat,lng:e.lng,timeZone:o},...s?{isHoliday:s}:{}})}function C(e,t,i){let n="string"==typeof t?t:t.placeZone(e,t.zoneAt(i));return{date:(0,a.todayIn)(n,i),minutes:(0,a.minutesOfDayIn)(n,i),timeZone:n}}function S(e,t,i,n,r){let o="string"==typeof n?n:n.planZone(t,i.start),s="string"==typeof n?n:n.placeZone(e,o),u=M(e,s,r);if(!u)return null;let l=(0,k.zoneShiftMinutes)(t,i.start,o,s),c=t,d=i.start+l;d<0&&(c=(0,a.addDays)(t,-1),d+=1440);let A=E(u,c,d,d+(i.end-i.start)),m=e=>e-l+(c===t?0:-1440);return"closed"===A.kind?{kind:"closed",closedAllDay:A.closedAllDay,...void 0!==A.opensAt?{opensAt:m(A.opensAt)}:{}}:"closesEarly"===A.kind?{kind:"closesEarly",closesAt:m(A.closesAt),minutesLeft:A.minutesLeft}:null}e.s(["dayHoursConflicts",0,function(e,a,t,i,n){let r=new Map;for(let{item:o,place:s}of e){if("place"!==o.kind||!s?.openingHours)continue;let e=a.get(o.id);if(!e)continue;let u=S(s,t,e,i,n);u&&r.set(o.id,u)}return r},"hoursOfPlace",0,M,"openStateAt",0,function(e,a,t,i){let n=C(e,a,t),r=M(e,n.timeZone,i);return r?r.stateAt(n.date,n.minutes).state:"unknown"},"placeNow",0,C,"plannedHoursTone",0,function(e,a){return e?"open":a?"closed"===a.kind?"danger":"warning":"info"},"visitConflict",0,S],27595)},86208,e=>{"use strict";var a=e.i(99506);let t=e=>e*Math.PI/180,i=e=>180*e/Math.PI;function n(e){let a=(e-2451545)/36525,n=((280.46646+a*(36000.76983+3032e-7*a))%360+360)%360,r=357.52911+a*(35999.05029-1537e-7*a),o=.016708634-a*(42037e-9+1267e-10*a),s=n+(Math.sin(t(r))*(1.914602-a*(.004817+14e-6*a))+Math.sin(t(2*r))*(.019993-101e-6*a)+289e-6*Math.sin(t(3*r))),u=125.04-1934.136*a,l=s-.00569-.00478*Math.sin(t(u)),c=23+(26+(21.448-a*(46.815+a*(59e-5-.001813*a)))/60)/60+.00256*Math.cos(t(u)),d=i(Math.asin(Math.sin(t(c))*Math.sin(t(l)))),A=Math.tan(t(c/2))**2;return{declination:d,eqTime:4*i(A*Math.sin(2*t(n))-2*o*Math.sin(t(r))+4*o*A*Math.sin(t(r))*Math.cos(2*t(n))-.5*A*A*Math.sin(4*t(n))-1.25*o*o*Math.sin(2*t(r)))}}function r(e,a){let n=Math.cos(t(90.833))/(Math.cos(t(e))*Math.cos(t(a)))-Math.tan(t(e))*Math.tan(t(a));return n>1||n<-1?n>1?NaN:1/0:i(Math.acos(n))}e.s(["localSunTimes",0,function(e,t,i,o){let s=function(e,t,i){let{year:o,month:s,day:u}=(0,a.parseISODate)(e),l=Date.UTC(o,s-1,u),c=l/864e5+2440587.5,d=n(c+(720-4*i)/1440),A=n(c+(720-4*i-d.eqTime)/1440),m=720-4*i-A.eqTime,p=new Date(l+6e4*m),h=r(t,A.declination);if(Number.isNaN(h))return{sunrise:null,sunset:null,solarNoon:p,polar:"night",dayLengthMinutes:0};if(!Number.isFinite(h))return{sunrise:null,sunset:null,solarNoon:p,polar:"day",dayLengthMinutes:1440};let f=e=>{let a=m+4*e*h;for(let o=0;o<2;o++){let o=n(c+a/1440),s=r(t,o.declination);if(!Number.isFinite(s))break;a=720-4*i-o.eqTime+4*e*s}return a},g=f(-1),y=f(1);return{sunrise:new Date(l+6e4*g),sunset:new Date(l+6e4*y),solarNoon:p,polar:null,dayLengthMinutes:Math.round(y-g)}}(e,t,i),u=t=>{if(!t)return null;let i=(0,a.timeZoneOffsetMinutes)(t,o),{year:n,month:r,day:s}=(0,a.parseISODate)(e);return Math.round((t.getTime()-Date.UTC(n,r-1,s))/6e4+i)},l=u(s.sunrise),c=u(s.sunset);return{sunrise:null===l?null:(0,a.formatHHMM)(l),sunset:null===c?null:(0,a.formatHHMM)(c),sunriseMinutes:null===l?null:(l%1440+1440)%1440,sunsetMinutes:null===c?null:c,polar:s.polar,dayLengthMinutes:s.dayLengthMinutes}}])},55289,e=>{"use strict";var a=e.i(12268),t=e.i(41478),i=e.i(93440),n=e.i(99506),r=e.i(58162),o=e.i(49913),s=e.i(25395),u=e.i(38520);let l=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/,c=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng),d=e=>!!e&&(0,n.isValidTimeZone)(e);function A(e,a){if(d(a))return a;let t=l.exec(e?.name.trim()??""),i=(0,o.airportByCode)(t?.[1]??t?.[2])?.timeZone;return d(i)?i:void 0}function m(e){return{base:e,multi:!1,zones:[e],changes:[],zoneAt:()=>e,zoneAtLocal:()=>e,planZone:()=>e,zoneOn:()=>e,zoneNear:()=>e,placeZone:()=>e}}e.s(["daySunPoint",0,function(e,t,i,n){if(!e.multi)return null;let r=(0,a.baseLatLng)(t.end)??(0,a.baseLatLng)(t.start)??n;return{lat:r.lat,lng:r.lng,timeZone:e.placeZone(r,e.zoneOn(i))}},"singleZone",0,m,"tripZones",0,function(e,o=[],l=[]){let p=e.timeZone,h=[],f=e.destination;c(f)&&!(0,r.isWideDestination)(f)&&h.push({lat:f.lat,lng:f.lng,zone:p});let g=o.filter(a.isTransport).sort((e,a)=>e.start<a.start?-1:+(e.start>a.start)),y=g.map(e=>({from:A(e.from,e.startTimeZone),to:A(e.to,e.endTimeZone)}));g.forEach((e,a)=>{let{from:t,to:i}=y[a];t&&c(e.from)&&h.push({lat:e.from.lat,lng:e.from.lng,zone:t}),i&&c(e.to)&&h.push({lat:e.to.lat,lng:e.to.lng,zone:i})});let E=y[0]?.from,k=[];g.forEach((t,i)=>{let r=y[i].to;if(!r||!t.end)return;let o=(0,a.bookingInstant)(t,"end",p);if(null===o)return;let s=(0,n.datePart)(t.end);if(e.endDate&&s>e.endDate)return;let u=g[i+1],l=u?(0,a.bookingInstant)(u,"start",p):null;null!==l&&l>=o&&l-o<432e5||i>0&&i===g.length-1&&r===E&&E!==p||k.push({at:o,date:s,zone:r,source:"arrival"})});let M=(0,u.tripCountries)(e,o,l).anchors,C=e=>{let a,t=u.COUNTRY_ANCHOR_KM;for(let i of h){let n=(0,s.haversineKm)(e,i);n<=t&&(a=i.zone,t=n)}return a},S=(e,...a)=>{let n;for(let e of a)n??=(0,t.countryCodeFromAddress)(e);if(!n&&e&&(n=(0,u.countryAt)(e,M)),!n)return;if(e){let a=(0,i.suggestTimeZone)(e,n)??void 0;if(d(a))return a}let r=(0,i.countryTimeZones)(n).filter(d);return 1===r.length?r[0]:void 0},P=new Map(l.map(e=>[e.id,e]));for(let t of o.filter(a.isStay).sort((e,a)=>e.start<a.start?-1:+(e.start>a.start))){let i=t.placeId?P.get(t.placeId):void 0,r=c(i)?{lat:i.lat,lng:i.lng}:c(t.location)?{lat:t.location.lat,lng:t.location.lng}:void 0,o=(0,n.datePart)(t.start);if(e.endDate&&o>e.endDate)continue;let s=k.find(e=>"arrival"===e.source&&(e.date===o||e.date===(0,n.addDays)(o,1))),u=(r?C(r):void 0)??S(r,i?.address,t.location?.name)??(r?void 0:s?.zone);if(!u)continue;r&&h.push({...r,zone:u});let l=(0,a.localInstant)(`${o}T${(0,n.timePart)(t.start)??"15:00"}`,u);if(null===l)continue;let d=s?Math.max(l,s.at):l;k.push({at:d,date:o,zone:u,source:"stay"})}if(k.sort((e,a)=>e.at-a.at),!k.some(e=>e.zone!==p))return m(p);let B=[p];for(let e of k)B.includes(e.zone)||B.push(e.zone);let b=k[0].zone,L=e=>{let t=b;for(let i of k){let n=(0,a.localInstant)(e,i.zone);if(null===n||n<i.at)break;t=i.zone}return t},T=e=>{if(!e)return;let a=c(e)?{lat:e.lat,lng:e.lng}:void 0;return(a?C(a):void 0)??S(a,e.address)};return{base:p,multi:!0,zones:B,changes:k,zoneAt:e=>{let a=e.getTime(),t=b;for(let e of k){if(e.at>a)break;t=e.zone}return t},zoneAtLocal:L,planZone:(e,a)=>L(`${e}T${(0,n.formatHHMM)(Math.max(0,Math.min(1439,Math.round(a))))}`),zoneOn:e=>L(`${e}T23:59`),zoneNear:T,placeZone:(e,a)=>T(e)??a??p}},"zoneShiftMinutes",0,function(e,t,i,r){if(i===r)return 0;let o=(0,a.localInstant)(`${e}T${(0,n.formatHHMM)(Math.max(0,Math.min(1439,Math.round(t))))}`,i);if(null===o)return 0;let s=new Date(o);return(0,n.timeZoneOffsetMinutes)(s,r)-(0,n.timeZoneOffsetMinutes)(s,i)}])}]);