(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41478,e=>{"use strict";let a=new Set(["AC","CP","DG","EA","EU","EZ","IC","QO","TA","UM","UN","XA","XB","ZZ"]),r=["pl","en","es","pt","it","fr","de","nl","cs","sk","hr","sl","hu","ro","bg","el","tr","sv","da","nb","fi","is","et","lv","lt","uk","ru","sr","ga","mt","ja","zh","ko","th","vi","id","ar","he"],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=new Map;function o(e){let a=t.get(e);if(void 0===a){try{a=new Intl.DisplayNames([e],{type:"region",fallback:"none"})}catch{a=null}t.set(e,a)}return a}function n(e){return e.normalize("NFD").replace(/\p{M}/gu,"").toLocaleLowerCase("en").replace(/&/g," and ").replace(/[.'’()]/g,"").replace(/[\s\-–]+/g," ").trim()}let s=new Map(Object.entries({"czech republic":"CZ","republika czeska":"CZ","ceska republika":"CZ","united states of america":"US",usa:"US",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB",anglia:"GB",szkocja:"GB",holland:"NL",holandia:"NL",turkey:"TR",turcja:"TR"})),u=0,l=null;function c(e){if(!e)return;let t=n(e);if(!t||t.length<2)return;let c=e.trim();if(!/^[A-Z]{2}$/.test(c))for(;;){let e=s.get(t);if(e)return e;if(u>=r.length)return;!function(e){let r=o(e);if(r)for(let e of function(){if(l)return l;let e=o("en"),r=[];for(let t of i)for(let o of i){let i=t+o;if(!a.has(i))try{e?.of(i)&&Intl.getCanonicalLocales(`und-${i}`)[0]===`und-${i}`&&r.push(i)}catch{}}return l=r,r}()){let a;try{a=r.of(e)}catch{a=void 0}if(!a||a===e)continue;let i=n(a);i&&!s.has(i)&&s.set(i,e)}}(r[u]),u+=1}}e.s(["countryCodeFromAddress",0,function(e){let a=(e??"").split(/[,，、]/).map(e=>e.trim()).filter(Boolean);if(!(a.length<2))return c(a[a.length-1])},"countryCodeFromName",0,c,"countryName",0,function(e,a){try{return o(a)?.of(e)??e}catch{return e}},"flagEmoji",0,function(e){let a=e.trim().toUpperCase();return/^[A-Z]{2}$/.test(a)?String.fromCodePoint(...[...a].map(e=>127462+e.charCodeAt(0)-65)):""},"isCountryCode",0,function(e){return"string"==typeof e&&/^[A-Z]{2}$/.test(e)&&!a.has(e)}])},93440,e=>{"use strict";var a=e.i(99506);let r=`
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
`,i=null;function t(){if(i)return i;for(let e of(i=new Map,r.split("\n"))){let[a,...r]=e.trim().split(" ");a&&0!==r.length&&i.set(a,r.map(e=>{let[a="",r]=e.split("@");if(!r)return{zone:a};let[i,t]=r.split(",").map(Number);return{zone:a,lat:i,lng:t}}))}return i}let o=null;e.s(["countryOfTimeZone",0,function(e){if(e){if(!o)for(let[e,a]of(o=new Map,t()))for(let{zone:r}of a)o.set(r,o.has(r)&&o.get(r)!==e?null:e);return o.get(e)??void 0}},"countryTimeZones",0,function(e){return(t().get(e.toUpperCase())??[]).map(e=>e.zone)},"suggestTimeZone",0,function(e,r){if(!r)return null;let i=(t().get(r.toUpperCase())??[]).filter(e=>(0,a.isValidTimeZone)(e.zone));if(i.length<=1)return i[0]?.zone??null;let o=Math.cos(e.lat*Math.PI/180),n=null,s=1/0;for(let a of i){if(void 0===a.lat||void 0===a.lng)continue;let r=Math.abs(e.lng-a.lng);r>180&&(r=360-r);let i=Math.hypot(r*o,(e.lat-a.lat)*.5);i<s&&(s=i,n=a)}return n?.zone??i[0]?.zone??null}])},49913,e=>{"use strict";let a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},r=new Map(`
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
`.trim().split("\n").map(e=>{let[r="",i="",t="",o=""]=e.split("|");return[r,{code:r,city:{pl:i,en:t||i,de:a[r]??(t||i)},timeZone:o}]}));function i(e){return e?r.get(e.toUpperCase()):void 0}e.s(["AIRLINES",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"airportByCity",0,function(e){let a=e.trim().toLowerCase();if(a)for(let e of r.values())for(let r of Object.values(e.city)){let i=r.toLowerCase();if(i===a||i.startsWith(`${a} (`))return e}},"airportByCode",0,i,"airportLabel",0,function(e,a,r){let t=i(e),o=(t?.city[a]??r)?.replace(/\s*\([^)]*\)\s*$/,"");return o?`${o} (${e.toUpperCase()})`:e.toUpperCase()}])},38520,e=>{"use strict";var a=e.i(12268),r=e.i(41478),i=e.i(93440),t=e.i(99506),o=e.i(58162),n=e.i(49913),s=e.i(25395);let u=["Public","Bank","School","Authorities","Optional","Observance"],l=120,c=(e,a=l)=>"string"==typeof e&&e.trim()?e.trim().slice(0,a):void 0,A=e=>2*(!0===e.status)+ +("national"===e.scope),d=e=>!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng);function p(e,a){let r,i=50,t=new Set;for(let n of a){let a=(0,s.haversineKm)(e,n);a<=i&&(r=n,i=a),(a<=300||n.bbox&&0===(0,o.kmOutsideBBox)(n.bbox,e))&&t.add(n.countryCode)}return r?r.countryCode:1===t.size?[...t][0]:void 0}let m=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;function f(e,a){let t=e?.name.trim()??"",o=(0,r.countryCodeFromAddress)(t);if(o)return o;let s=m.exec(t),u=(0,n.airportByCode)(s?.[1]??s?.[2]);return(0,i.countryOfTimeZone)(u?.timeZone)??(0,i.countryOfTimeZone)(a)}let h=(e,a)=>e.start<a.start?-1:+(e.start>a.start);function g(e,a){let i=(0,r.countryCodeFromAddress)(a?.address);if(i)return i;let t=1===e.countries.length?e.countries[0]:void 0;return d(a)&&0!==e.anchors.length?e.countryNear(a):t}e.s(["COUNTRY_ANCHOR_KM",0,50,"buildHolidayCalendar",0,function(e){let a=new Map,r=new Set;for(let[i,t]of e.data)if(null===t)r.add(i);else{let r=e.region&&e.region.startsWith(`${i}-`)?e.region:void 0;a.set(i,function(e,a,r){let i=a.toUpperCase(),t=new Set(e.flatMap(e=>e.counties??[])),o=e=>t.size>=4&&[...t].every(a=>e.includes(a)),n=new Map;for(let a of e){let e=a.types.includes("Public")||a.types.includes("Bank"),t=a.types.includes("Optional");if(!e&&!t)continue;let s=a.global||!a.counties?.length||o(a.counties);if(!s&&r&&!a.counties?.includes(r))continue;let u=!s,l=!!e&&(!u||!!r)||"maybe",c=e?u?"regional":"national":"optional",d={date:a.date,countryCode:i,localName:a.localName,name:a.name,scope:c,status:l,...u&&a.counties?{counties:a.counties}:{}},p=n.get(a.date)??[],m=p.findIndex(e=>e.name===d.name||e.localName===d.localName);m<0?p.push(d):A(d)>A(p[m])&&(p[m]=d),n.set(a.date,p)}for(let e of n.values())e.sort((e,a)=>A(a)-A(e));return{countryCode:i,byDate:n}}(t,i,r))}let i=e.stays??[],o=e.visits??[],n=e=>i.find(a=>a.from<=e&&e<a.to)?.countryCode??o.find(a=>a.from<e&&e<a.to)?.countryCode??i.find(a=>a.to===e)?.countryCode??o.find(a=>a.from===e)?.countryCode??o.find(a=>a.to===e)?.countryCode,s=e.anchors??[],u=(r,i)=>{let t;return(i?[i]:(t=n(r))?[t]:e.countries).flatMap(e=>a.get(e)?.byDate.get(r)??[])};return{countries:e.countries,supported:new Set(a.keys()),unsupported:r,anchors:s,countryOn:n,countryNear:e=>p(e,s),status:(e,r)=>{var i;let t=a.get(e);return t?(i=t.byDate.get(r),!!i?.length&&(!!i.some(e=>!0===e.status)||"maybe")):null},on:u,inRange(e,a){let r=[],i=Math.min((0,t.diffDays)(e,a),400);for(let a=0;a<=i;a++)r.push(...u((0,t.addDays)(e,a)));return r}}},"countryAt",0,p,"parseNagerHolidays",0,function(e,a){if(!Array.isArray(e))return[];let r=a.toUpperCase(),i=[];for(let a of e.slice(0,400)){if(!a||"object"!=typeof a)continue;let e=a.date,o=c(a.name),n=c(a.localName)??o;if(!(0,t.isValidISODate)(e)||!o||!n||"string"==typeof a.countryCode&&a.countryCode.toUpperCase()!==r)continue;let s=(Array.isArray(a.types)?a.types:["Public"]).filter(e=>u.includes(e)),l=Array.isArray(a.counties)?a.counties.filter(e=>"string"==typeof e&&/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(e)).slice(0,100):[];i.push({date:e,localName:n,name:o,countryCode:r,global:!1!==a.global||0===l.length,...l.length&&!1===a.global?{counties:l}:{},types:s.length?s:["Public"]})}return i.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date))},"placeCountry",0,g,"placeHolidayCheck",0,function(e,a){if(!e||0===e.supported.size)return;let r=g(e,a);return r?a=>e.status(r,a):a=>{let r=e.countries.map(r=>e.status(r,a));return r.some(e=>!0===e||"maybe"===e)?"maybe":!r.includes(!1)&&null}},"tripCountries",0,function(e,i=[],o=[]){var n;let s=[],u=(e,a)=>{a&&d(e)&&s.push({lat:e.lat,lng:e.lng,countryCode:a})},l=(n=e.destination,(0,r.isCountryCode)(n.countryCode)?n.countryCode:(0,r.countryCodeFromName)(n.country));if(l&&d(e.destination)){let a=e.destination.bbox,r=!!a&&4===a.length&&a.every(Number.isFinite)&&a[0]<a[2]&&a[1]<a[3];s.push({lat:e.destination.lat,lng:e.destination.lng,countryCode:l,...r?{bbox:a}:{}})}let c=[],A=(e,a)=>c.push({date:e,code:a}),m=[],g=i.filter(a.isTransport).sort(h),E=g.map(e=>({from:f(e.from,e.startTimeZone),to:f(e.to,e.endTimeZone)})),y=E[0]?.from,M=e=>{let a=g[e],r=g[e+1];if(!a?.end||!r)return!1;let i=(0,t.diffLocalMinutes)(a.end,r.start);return i>=0&&i<720};g.forEach((a,r)=>{let{from:i,to:o}=E[r];r>0&&i&&i!==y&&!M(r-1)&&i!==E[r-1].to&&(A(a.start,i),u(a.from,i));let n=r===g.length-1,s=!!e.endDate&&(0,t.datePart)(a.start)>=e.endDate&&o!==l,c=n&&(r>0&&o===y&&y!==l||s);if(!o||c||M(r))return;u(a.to,o),A(a.end??a.start,o);let d=(0,t.datePart)(a.end??a.start),p=g[r+1]?(0,t.datePart)(g[r+1].start):void 0,f=p&&(0,t.isValidISODate)(p)&&p>d?p:(0,t.addDays)(d,1);(0,t.isValidISODate)(d)&&m.push({from:d,to:f,countryCode:o})});let S=new Map(o.map(e=>[e.id,e])),C=[];for(let e of i.filter(a.isStay).sort(h)){let a=e.placeId?S.get(e.placeId):void 0,i=d(a)?a:d(e.location)?e.location:void 0,o=(0,t.datePart)(e.start),n=(0,r.countryCodeFromAddress)(a?.address)??(0,r.countryCodeFromAddress)(e.location?.name)??(i?p(i,s):m.find(e=>e.from===o)?.countryCode);if(!n)continue;A(e.start,n),u(i,n);let l=e.end?(0,t.datePart)(e.end):(0,t.addDays)(o,1);(0,t.isValidISODate)(o)&&(0,t.isValidISODate)(l)&&(0,t.diffDays)(o,l)>0&&C.push({from:o,to:l,countryCode:n})}let b=[];for(let e of[l,...c.sort((e,a)=>e.date<a.date?-1:+(e.date>a.date)).map(e=>e.code)])e&&!b.includes(e)&&b.length<8&&b.push(e);return{countries:b,stays:C,visits:m,anchors:s}},"tripYears",0,function(e){let a=(0,t.parseISODate)(e.startDate).year,r=(0,t.parseISODate)(e.endDate).year,i=[];for(let e=a;e<=r&&i.length<3;e++)i.push(e);return i}])},80929,e=>{"use strict";var a=e.i(25395);let r=new Set(["de","del","la","las","los","el","da","das","do","dos","di","du","des","le","les","the","of","and","y","e","et","und","der","die","das","van","von","a","o","i","w","na","z","au","al","em","en"]);function i(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"L").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function t(e){return i(e).split(" ").filter(e=>e.length>1&&!r.has(e))}function o(e,a){let r=i(e),o=i(a);if(!r||!o)return 0;if(r===o)return 1;let n=t(e),s=t(a);if(!n.length||!s.length)return 0;let u=(e,a)=>a.length>=4&&` ${e} `.includes(` ${a} `);if(u(r,o)||u(o,r))return .9;let l=(e,a)=>e===a||e.length>=5&&a.length>=5&&e.startsWith(a.slice(0,5))&&a.startsWith(e.slice(0,5)),c=new Set,A=0;for(let e of n){let a=s.findIndex((a,r)=>!c.has(r)&&l(e,a));a>=0&&(c.add(a),A+=1)}return 2*A/(n.length+s.length)}e.s(["OSM_MATCH_RADIUS_M",0,60,"nameSimilarity",0,o,"nameTokens",0,t,"normalizeName",0,i,"overpassNamePattern",0,function(e){let a=[...new Set(t(e))].filter(e=>e.length>=3&&!/^\d+$/.test(e)).sort((e,a)=>a.length-e.length).slice(0,2).map(e=>e.replace(/[aeiouycnszl]/g,"."));return a.length?a.join("|"):null},"pickOsmMatch",0,function(e,r,i=120){let t=null;for(let n of r){let r=o(e.name,n.name);if(r<.5)continue;let s=1e3*(0,a.haversineKm)(e,n);if(s>Math.max(i,400))continue;let u=r+.05*!!n.hasHours-Math.min(s,400)/4e3;(!t||u>t.score)&&(t={c:n,score:u})}return t?.c??null}])},86208,e=>{"use strict";var a=e.i(99506);let r=e=>e*Math.PI/180,i=e=>180*e/Math.PI;function t(e){let a=(e-2451545)/36525,t=((280.46646+a*(36000.76983+3032e-7*a))%360+360)%360,o=357.52911+a*(35999.05029-1537e-7*a),n=.016708634-a*(42037e-9+1267e-10*a),s=t+(Math.sin(r(o))*(1.914602-a*(.004817+14e-6*a))+Math.sin(r(2*o))*(.019993-101e-6*a)+289e-6*Math.sin(r(3*o))),u=125.04-1934.136*a,l=s-.00569-.00478*Math.sin(r(u)),c=23+(26+(21.448-a*(46.815+a*(59e-5-.001813*a)))/60)/60+.00256*Math.cos(r(u)),A=i(Math.asin(Math.sin(r(c))*Math.sin(r(l)))),d=Math.tan(r(c/2))**2;return{declination:A,eqTime:4*i(d*Math.sin(2*r(t))-2*n*Math.sin(r(o))+4*n*d*Math.sin(r(o))*Math.cos(2*r(t))-.5*d*d*Math.sin(4*r(t))-1.25*n*n*Math.sin(2*r(o)))}}function o(e,a){let t=Math.cos(r(90.833))/(Math.cos(r(e))*Math.cos(r(a)))-Math.tan(r(e))*Math.tan(r(a));return t>1||t<-1?t>1?NaN:1/0:i(Math.acos(t))}e.s(["localSunTimes",0,function(e,r,i,n){let s=function(e,r,i){let{year:n,month:s,day:u}=(0,a.parseISODate)(e),l=Date.UTC(n,s-1,u),c=l/864e5+2440587.5,A=t(c+(720-4*i)/1440),d=t(c+(720-4*i-A.eqTime)/1440),p=720-4*i-d.eqTime,m=new Date(l+6e4*p),f=o(r,d.declination);if(Number.isNaN(f))return{sunrise:null,sunset:null,solarNoon:m,polar:"night",dayLengthMinutes:0};if(!Number.isFinite(f))return{sunrise:null,sunset:null,solarNoon:m,polar:"day",dayLengthMinutes:1440};let h=e=>{let a=p+4*e*f;for(let n=0;n<2;n++){let n=t(c+a/1440),s=o(r,n.declination);if(!Number.isFinite(s))break;a=720-4*i-n.eqTime+4*e*s}return a},g=h(-1),E=h(1);return{sunrise:new Date(l+6e4*g),sunset:new Date(l+6e4*E),solarNoon:m,polar:null,dayLengthMinutes:Math.round(E-g)}}(e,r,i),u=r=>{if(!r)return null;let i=(0,a.timeZoneOffsetMinutes)(r,n),{year:t,month:o,day:s}=(0,a.parseISODate)(e);return Math.round((r.getTime()-Date.UTC(t,o-1,s))/6e4+i)},l=u(s.sunrise),c=u(s.sunset);return{sunrise:null===l?null:(0,a.formatHHMM)(l),sunset:null===c?null:(0,a.formatHHMM)(c),sunriseMinutes:null===l?null:(l%1440+1440)%1440,sunsetMinutes:null===c?null:c,polar:s.polar,dayLengthMinutes:s.dayLengthMinutes}}])},2510,e=>{"use strict";var a=e.i(41478),r=e.i(38520),i=e.i(91019),t=e.i(52530);async function o(e,n,s={}){let u=e.toUpperCase();if(!(0,a.isCountryCode)(u)||!Number.isInteger(n)||n<1975||n>2075)throw new t.ServiceError("nager","invalid-input");let l=(await (0,i.cached)(`cache:holidays:${u}:${n}`,async()=>{try{let e=await (0,t.fetchJson)("nager",`https://date.nager.at/api/v3/PublicHolidays/${n}/${u}`,s);if(null===e)return{countryCode:u,year:n,supported:!1,holidays:[]};if(!Array.isArray(e))throw new t.ServiceError("nager","bad-response");return{countryCode:u,year:n,supported:!0,holidays:(0,r.parseNagerHolidays)(e,u)}}catch(e){if(e instanceof t.ServiceError&&"not-found"===e.code)return{countryCode:u,year:n,supported:!1,holidays:[]};throw e}},{ttlMs:15552e6,persist:!0,keepMs:63072e6})).value;return{countryCode:u,year:n,supported:l?.supported!==!1,holidays:(0,r.parseNagerHolidays)(l?.holidays,u)}}e.s(["getPublicHolidays",0,o])},20003,e=>{"use strict";let a;var r=e.i(80929),i=e.i(91019),t=e.i(20403),o=e.i(52530);let n=[{id:"main",url:"https://overpass-api.de/api/interpreter"},{id:"vk",url:"https://maps.mail.ru/osm/tools/overpass/api/interpreter"}];n[0].url;let s=e=>"main"===e?"cache:overpass:backoff":`cache:overpass:backoff:${e}`,u={N:"node",W:"way",R:"relation"};function l(e){let a=e?/^([NWR])(\d{1,15})$/.exec(e):null;if(!a)return null;let r=a[1];return{type:u[r],letter:r,id:Number(a[2])}}function c(e){let a="node"===e.type?"N":"way"===e.type?"W":"relation"===e.type?"R":null;return a&&Number.isInteger(e.id)?`${a}${e.id}`:null}let A=e=>e?.split(";")[0]?.trim()||void 0;function d(e,a){let r=a??{},i={ref:e};r.name&&(i.name=r.name);let t=r.opening_hours?.trim();t&&t.length<=1e3&&(i.openingHours=t);let o=function(e){let a=A(e);if(!a)return;let r=/^https?:\/\//i.test(a)?a:/^www\./i.test(a)?`https://${a}`:null;if(r)try{let e=new URL(r);return"http:"===e.protocol||"https:"===e.protocol?e.href:void 0}catch{return}}(r.website??r["contact:website"]??r.url);o&&(i.website=o);let n=A(r.phone??r["contact:phone"]);n&&n.length<=100&&(i.phone=n);let s="designated"===r.wheelchair?"yes":r.wheelchair;return("yes"===s||"limited"===s||"no"===s)&&(i.wheelchair=s),"yes"===r.fee?i.fee=!0:"no"===r.fee&&(i.fee=!1),i}let p=e=>Math.round(1e6*e)/1e6;function m(e,a){return new Promise((r,i)=>{if(a?.aborted)return i(new o.ServiceError("overpass","aborted"));let t=setTimeout(()=>{a?.removeEventListener("abort",n),r()},e),n=()=>{clearTimeout(t),i(new o.ServiceError("overpass","aborted"))};a?.addEventListener("abort",n,{once:!0})})}function f(e){return"rate-limited"===e.code||"timeout"===e.code||"http"===e.code&&(e.status??0)>=500}async function h(e,a=Date.now()){let r=await (0,i.peek)(s(e));return r&&"number"==typeof r.value&&r.value>a?r.value:void 0}async function g(e=Date.now()){let a;for(let r of n){let i=await h(r.id,e);if(void 0===i)return;a=void 0===a?i:Math.min(a,i)}return a}let E=new Set;async function y(){for(let e of E.size?[...E]:a?[a]:[])await M(e,new o.ServiceError("overpass","timeout"));return g()}async function M(e,a){let r="rate-limited"===a.code?6e5:12e4,t=Date.now()+r;return await (0,i.put)(s(e),t,{ttlMs:r,persist:!0,keepMs:r}),t}async function S(e,r,i){let{retry:t=!0,...s}=r,u=[];for(let e of n)await h(e.id)===void 0&&u.push(e);if(!u.length)throw new o.ServiceError("overpass","rate-limited",{message:"overpass: backoff"});let l=async r=>{i.requests+=1,a=r.id,E.add(r.id);try{let a,i=await (0,o.fetchJson)("overpass",(0,o.buildUrl)(r.url,{data:e}),{timeoutMs:3e4,...s}),t=(a=i?.remark,"string"==typeof a&&/runtime error/i.test(a)?new o.ServiceError("overpass","timeout",{message:`overpass: ${a.slice(0,200)}`}):null);if(t)throw t;return i}finally{E.delete(r.id)}};for(let e=0;e<u.length;e++){let a=u[e],r=e===u.length-1;try{return await l(a)}catch(e){if((0,o.isAborted)(e)||!(e instanceof o.ServiceError)||!e.retryable||"offline"===e.code)throw e;if(r&&t&&"rate-limited"!==e.code){await m(4e3,s.signal);try{return await l(a)}catch(e){throw e instanceof o.ServiceError&&f(e)&&await M(a.id,e),e}}if(f(e)&&await M(a.id,e),r)throw e}}throw new o.ServiceError("overpass","rate-limited",{message:"overpass: backoff"})}let C=e=>`cache:overpass:el:${e}`,b=e=>`cache:overpass:near:${e.lat.toFixed(5)},${e.lng.toFixed(5)}:${(0,r.normalizeName)(e.name).slice(0,60)}`;function w(e,a){let r=[];for(let i=0;i<e.length;i+=a)r.push(e.slice(i,i+a));return r}async function k(e,a={}){let t={info:new Map,fetchedAt:new Map,requests:0,deferred:[]},n={requests:0},s=Date.now(),u=new Map,A=[];for(let a of e)if(l(a.osm)){let e=u.get(a.osm)??[];e.push(a),u.set(a.osm,e)}else(0,r.nameTokens)(a.name).length&&Number.isFinite(a.lat)&&Number.isFinite(a.lng)&&A.push(a);let h=(e,a,r)=>{for(let i of e)t.info.set(i.id,a),t.fetchedAt.set(i.id,r)},E=null,y=await g(s);y&&(E=new o.ServiceError("overpass","rate-limited",{message:"overpass: backoff"}),t.backoffUntil=y);let M=0,B=async()=>E?"stopped":M>=4?"deferred":(M>0&&await m(1e3,a.signal),M+=1,"send"),v=async e=>{if((0,o.isAborted)(e))throw e;let a=e instanceof o.ServiceError?e:new o.ServiceError("overpass","network",{cause:e});if(t.error=a,f(a)){E=a;let e=await g();e&&(t.backoffUntil=e)}else("offline"===a.code||"network"===a.code)&&(E=a)},L=[],P=new Map;for(let[e,r]of u){let t=await (0,i.peek)(C(e));t&&!a.force&&s-t.fetchedAt<12096e5?h(r,t.value,t.fetchedAt):(L.push(e),t&&P.set(e,{value:t.value,fetchedAt:t.fetchedAt}))}for(let e of w(L,50)){let r=await B();if("send"!==r){for(let a of e){let e=P.get(a);e&&h(u.get(a)??[],e.value,e.fetchedAt),"deferred"===r&&t.deferred.push(...(u.get(a)??[]).map(e=>e.id))}"stopped"===r&&(t.error??=E??void 0);continue}try{let r=await S(function(e){let a={node:[],way:[],relation:[]};for(let r of e){let e=l(r);e&&a[e.type].push(e.id)}let r=Object.entries(a).filter(([,e])=>e.length).map(([e,a])=>`${e}(id:${a.join(",")});`).join("");return`[out:json][timeout:25];(${r});out tags;`}(e),a,n),t=new Map;for(let e of r.elements??[]){let a=c(e);a&&t.set(a,d(a,e.tags))}let o=Date.now();for(let a of e){let e=t.get(a)??null;await (0,i.put)(C(a),e,{ttlMs:12096e5,persist:!0,keepMs:7776e6}),h(u.get(a)??[],e,o)}}catch(a){for(let r of(await v(a),e)){let e=P.get(r);e&&h(u.get(r)??[],e.value,e.fetchedAt)}}}let N=[],T=new Map;for(let e of A){let r=await (0,i.peek)(b(e));r&&!a.force&&s-r.fetchedAt<12096e5?h([e],r.value,r.fetchedAt):(N.push(e),r&&T.set(e,{value:r.value,fetchedAt:r.fetchedAt}))}for(let e of w(N,25)){let o=await B();if("send"!==o){for(let a of e){let e=T.get(a);e&&h([a],e.value,e.fetchedAt),"deferred"===o&&t.deferred.push(a.id)}"stopped"===o&&(t.error??=E??void 0);continue}try{let t=await S(function(e){let a=e.map((e,a)=>{let i=(0,r.overpassNamePattern)(e.name),t=i?`[name~"${i}",i]`:"[name]";return`make g i=${a};out;nwr(around:${r.OSM_MATCH_RADIUS_M},${p(e.lat)},${p(e.lng)})${t}[!highway][!railway][!public_transport][type!=route];out tags center 15;`});return`[out:json][timeout:25];${a.join("")}`}(e),a,n),o=function(e,a){let r=Array.from({length:a},()=>[]),i=-1;for(let t of e.elements??[]){if("g"===t.type){let e=Number(t.tags?.i);i=Number.isInteger(e)&&e>=0&&e<a?e:-1;continue}if(i<0)continue;let e=c(t),o=t.center?.lat??t.lat,n=t.center?.lon??t.lon,s=t.tags?.name;e&&s&&"number"==typeof o&&"number"==typeof n&&r[i].push({ref:e,name:s,lat:o,lng:n,hasHours:!!t.tags?.opening_hours,...t.tags?{tags:t.tags}:{}})}return r}(t,e.length),s=Date.now();for(let a=0;a<e.length;a++){let t=e[a],n=(0,r.pickOsmMatch)(t,o[a]??[]),u=n?d(n.ref,n.tags):null;await (0,i.put)(b(t),u,{ttlMs:12096e5,persist:!0,keepMs:7776e6}),u&&await (0,i.put)(C(u.ref),u,{ttlMs:12096e5,persist:!0,keepMs:7776e6}),h([t],u,s)}}catch(a){for(let r of(await v(a),e)){let e=T.get(r);e&&h([r],e.value,e.fetchedAt)}}}return t.requests=n.requests,t}let B=Promise.resolve();function v(e){let a=0x811c9dc5;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,0x1000193)>>>0;return a.toString(16).padStart(8,"0")}async function L(e,a,r,t){var n,s;let u,l=await (0,i.peek)(e);if(l&&!t.force&&Date.now()-l.fetchedAt<6048e5)return l.value;if(await g()){if(l)return l.value;throw new o.ServiceError("overpass","rate-limited",{message:"overpass: backoff"})}return n=async()=>{try{let o=r(await S(a,t,{requests:0}));return await (0,i.put)(e,o,{ttlMs:6048e5,persist:!0,keepMs:7776e6}),o}catch(a){if((0,o.isAborted)(a))throw a;let e=a instanceof o.ServiceError?a:new o.ServiceError("overpass","network",{cause:a});if(l)return l.value;throw e}},s=t.signal,B=(u=B.then(async()=>{if(s?.aborted)throw new o.ServiceError("overpass","aborted");try{return await n()}finally{await new Promise(e=>setTimeout(e,1e3))}})).catch(()=>void 0),u}function P(e){let a=[],r=new Set;for(let i of e.elements??[]){let e=c(i),t=i.center?.lat??i.lat,o=i.center?.lon??i.lon;!e||r.has(e)||"number"!=typeof t||"number"!=typeof o||(r.add(e),a.push({ref:e,lat:t,lng:o,tags:i.tags??{}}))}return a}let N=e=>Math.round(1e4*e)/1e4,T=[["tourism","attraction|museum|gallery|viewpoint|zoo|aquarium|theme_park"],["historic","castle|monument|ruins|fort|archaeological_site|palace|city_gate|church|monastery|manor|tower|memorial"],["natural","peak|volcano|waterfall|beach|cave_entrance|arch|hot_spring|gorge"],["waterway","waterfall"],["leisure","park|garden|nature_reserve"]],R={historic:["memorial","monument"],leisure:["park","garden"]},_={fuel:{filter:"[amenity=fuel]",radiusM:1e3},charging:{filter:"[amenity=charging_station]",radiusM:1e3},rest:{filter:'[highway~"^(rest_area|services)$"]',radiusM:600},viewpoint:{filter:"[tourism=viewpoint]",radiusM:2e3}},D=["type2","type2_combo","chademo","tesla_supercharger","type1_combo","schuko"];function K(e){let a=[];for(let r of P(e??{})){let e=r.tags,i="fuel"===e.amenity?"fuel":"charging_station"===e.amenity?"charging":"rest_area"===e.highway||"services"===e.highway?"rest":"viewpoint"===e.tourism?"viewpoint":null;if(!i)continue;let t=e.name??e.brand??e.operator,o={ref:r.ref,kind:i,lat:r.lat,lng:r.lng};if(t&&(o.name=t),e.brand&&(o.brand=e.brand),"charging"===i){let a=D.filter(a=>e[`socket:${a}`]&&"no"!==e[`socket:${a}`]);a.length&&(o.sockets=a)}"services"===e.highway&&(o.services=!0);let n=d(r.ref,e);n.website&&(o.website=n.website),n.openingHours&&(o.openingHours=n.openingHours),a.push(o)}return a}e.s(["OSM_INFO_TTL_MS",0,12096e5,"fetchAttractions",0,function(e,a,r={}){let i=function(e,a){let r=Math.round(Math.max(100,Math.min(15e3,a))),i=Math.min(r,3e3),t=`${N(e.lat)},${N(e.lng)}`,o=[];for(let[e,a]of T)o.push(`nwr(around:${i},${t})[${e}~"^(${a})$"][name];`),r>i&&o.push(`nwr(around:${r},${t})[${e}~"^(${a})$"][name][wikidata];`);return`[out:json][timeout:15];(${o.join("")});out tags center 200;`}(e,a),{lang:o,...n}=r;return L(`cache:overpass:disc:${v(i)}:${o??""}`,i,e=>(function(e,a){let r=[];for(let i of P(e??{})){let e=i.tags,o=a&&e[`name:${a}`]||e.name;if(!o)continue;let n=T.find(([a,r])=>e[a]&&r.split("|").includes(e[a]));if(!n)continue;let[s]=n,u=e[s],l=e.wikidata&&/^Q\d+$/.test(e.wikidata)?e.wikidata:void 0,c=e.wikipedia&&/^[a-z]{2,3}(?:-[a-z]{2,8})?:.+/.test(e.wikipedia)?e.wikipedia:void 0;if(R[s]?.includes(u)&&!l&&!c)continue;let A=d(i.ref,e).website;r.push({ref:i.ref,name:o,lat:i.lat,lng:i.lng,kind:`${s}=${u}`,category:(0,t.categoryFromOsm)(s,u,o),...l?{wikidata:l}:{},...c?{wikipedia:c}:{},...A?{website:A}:{}})}return r})(e,o),{timeoutMs:18e3,retry:!1,...n})},"fetchOsmInfo",0,k,"fetchRouteStops",0,function(e,a,r={}){if(e.length<2||0===a.length)return Promise.resolve([]);let i=function(e,a,r=1){let i=e.map(e=>`${N(e.lat)},${N(e.lng)}`).join(","),t=a.map(e=>{let{filter:a,radiusM:t}=_[e];return`nwr(around:${Math.round(t*r)},${i})${a};`});return`[out:json][timeout:25];(${t.join("")});out tags center 400;`}(e.length>60?e.filter((a,r)=>r%Math.ceil(e.length/60)==0||r===e.length-1):e,a,r.widen??1);return L(`cache:overpass:route:${v(i)}`,i,K,r)},"overpassBackoffUntil",0,g,"rememberOverpassTimeout",0,y])},94839,e=>{e.v({accent:"Badge-module__tA2fUq__accent",badge:"Badge-module__tA2fUq__badge",chip:"Badge-module__tA2fUq__chip",chipRemove:"Badge-module__tA2fUq__chipRemove",danger:"Badge-module__tA2fUq__danger",dot:"Badge-module__tA2fUq__dot",sm:"Badge-module__tA2fUq__sm",solid:"Badge-module__tA2fUq__solid",success:"Badge-module__tA2fUq__success",warning:"Badge-module__tA2fUq__warning"})},91491,e=>{"use strict";var a=e.i(43476),r=e.i(53185),i=e.i(43434),t=e.i(94839);e.s(["Badge",0,function({tone:e="neutral",size:o="md",icon:n,color:s,dot:u,className:l,style:c,children:A,...d}){return(0,a.jsxs)("span",{className:(0,r.cx)(t.default.badge,"neutral"!==e&&t.default[e],"sm"===o&&t.default.sm,l),style:s?{...c,"--badge-color":s}:c,...d,children:[u?(0,a.jsx)("span",{className:t.default.dot,"aria-hidden":"true"}):null,n?(0,a.jsx)(i.Icon,{name:n,size:14,strokeWidth:2}):null,A]})},"Chip",0,function({selected:e,icon:o,color:n,removeLabel:s,onRemove:u,className:l,children:c,type:A="button",...d}){let p=(0,a.jsxs)(a.Fragment,{children:[n?(0,a.jsx)("span",{className:t.default.dot,style:{"--badge-color":n},"aria-hidden":"true"}):null,o?(0,a.jsx)(i.Icon,{name:o,size:16}):null,c]});return u?(0,a.jsxs)("span",{className:(0,r.cx)(t.default.chip,l),children:[p,(0,a.jsx)("button",{type:"button",className:t.default.chipRemove,"aria-label":s??"Remove",onClick:u,children:(0,a.jsx)(i.Icon,{name:"close",size:14,strokeWidth:2})})]}):(0,a.jsx)("button",{type:A,className:(0,r.cx)(t.default.chip,l),"aria-pressed":e,...d,children:p})}])}]);