(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12268,e=>{"use strict";var t=e.i(99506),a=e.i(49913),n=e.i(25395),r=e.i(32751);function i(e){return"stay"===e.type}function o(e){return r.W.includes(e.type)}function l(e){if(!e.end)return[];let a=(0,t.L)(e.start),n=(0,t.L)(e.end),r=(0,t.F)(a,n),i=[];for(let e=0;e<r;e++)i.push((0,t.b)(a,e));return i}function s(e,a){return e.filter(i).filter(e=>e.end&&(0,t.L)(e.start)<=a&&a<(0,t.L)(e.end)).sort((e,t)=>e.start<t.start?-1:+(e.start>t.start))[0]}function u(e,t,a){let n=e[t];if(n&&void 0!==n.lat&&void 0!==n.lng)return n;if("location"===t&&e.placeId&&a){let t=a.find(t=>t.id===e.placeId);if(t)return{name:n?.name??t.name,lat:t.lat,lng:t.lng}}return n}function d(e,t,a){var n;if(!t)return null;let r="stay"===e.type&&!!e.title.trim()&&e.title.trim()!==t.name&&((n=t.name).includes(",")||n.length>40);return{name:r?e.title.trim():t.name,...r&&t.name?{address:t.name}:{},...void 0!==t.lat?{lat:t.lat}:{},...void 0!==t.lng?{lng:t.lng}:{},bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:a}}function p(e,t,a){return d(e,u(e,"location",a),t)??{name:e.title.trim(),bookingId:e.id,...e.placeId?{placeId:e.placeId}:{},source:t}}function c(e,t){let a="string"==typeof t?t:t.base;if(e.type&&!r.W.includes(e.type)){let n=e.startTimeZone&&e.endTimeZone||"string"==typeof t?void 0:t.bookingZone(e),r=e.startTimeZone??n??a;return{start:r,end:e.endTimeZone??e.startTimeZone??n??(e.end?a:r)}}let n=e.startTimeZone??a;return{start:n,end:e.endTimeZone??(e.end?a:n)}}function m(e,a,n="UTC"){let r="start"===a?e.start:e.end??e.start,i=c(e,n)[a];return f(r.length>=16?r:`${(0,t.L)(r)}T00:00`,i)}function f(e,a){try{let n=(0,t.K)(e,a).getTime();return Number.isFinite(n)?n:null}catch{return null}}function h(e,t){if(t&&void 0!==t.lat&&void 0!==t.lng)return{lat:t.lat,lng:t.lng};if("flight"!==e.type)return null;let n=(0,a.U)(t?.name);return n&&Number.isFinite(n.lat)&&Number.isFinite(n.lng)?{lat:n.lat,lng:n.lng}:null}function g(e){return"flight"===e.type&&void 0!==(0,t.e)(e.start)&&(!e.end||void 0===(0,t.e)(e.end))}let A=new WeakSet,E=new WeakMap;function L(e,r){if(!g(e))return e;let i=E.get(e);if(i&&i.key===r)return i.value;let o=e,l=h(e,e.from),s=h(e,e.to),u=c(e,r).start,d=l&&s?f(e.start,u):null;if(l&&s&&null!==d){let i=e.endTimeZone??(0,a.U)(e.to?.name)?.timeZone??("string"==typeof r?r:r.base);try{var p;let a=(0,t.c)(new Date(d+6e4*(p=(0,n._)(l,s),5*Math.round((40+Math.max(0,p)/800*60)/5))),i);o={...e,end:a,endTimeZone:i},A.add(o)}catch{o=e}}return E.set(e,{key:r,value:o}),o}function M(e,t){let a=!1,n=e.map(e=>{let n=L(e,t);return n!==e&&(a=!0),n});return a?n:e}function S(e,a,n,r){let i=e=>"start"===n?e.start:e.end??e.start;return e.filter(o).filter(e=>"start"===n?(0,t.L)(e.start)===a:e.end?(0,t.L)(e.end)===a:(0,t.L)(e.start)===a).sort((e,t)=>{let a=m(e,n,r),o=m(t,n,r);return null!==a&&null!==o&&a!==o?a-o:i(e)<i(t)?-1:+(i(e)>i(t))})}e.s(["W",0,{stay:"bed",flight:"plane",train:"train",bus:"bus",ferry:"ferry",car:"car",activity:"ticket",restaurant:"utensils",other:"bookings"},"n",0,g,"C",0,function(e){return e&&void 0!==e.lat&&void 0!==e.lng?{lat:e.lat,lng:e.lng}:null},"i",0,m,"$",0,c,"x",0,function(e,a){let n=(0,t.y)(e).map((e,t)=>({kind:"day",date:e,dayIndex:t}));for(let e of a)n.push({kind:"booking",booking:e,date:(0,t.L)(e.start),at:e.start,edge:"start"}),i(e)&&e.end&&n.push({kind:"booking",booking:e,date:(0,t.L)(e.end),at:e.end,edge:"end"});let r=e=>{if("day"===e.kind)return`${e.date}|0`;let a=(0,t.e)(e.at)??"00:00";return`${e.date}|1|${a}|${+("end"!==e.edge)}|${e.booking.title}`};return n.sort((e,t)=>{let a=r(e),n=r(t);return a<n?-1:+(a>n)})},"Z",0,function(e,a,n,r){let i=s(a,(0,t.b)(n,-1)),o=s(a,n),l=e.timeZone??"UTC",c=M(a,l).filter(e=>"car"!==e.type),f=i?p(i,"stay",r):null;if(!f){let e=S(c,n,"end",l),a=e.filter(e=>(0,t.L)(e.start)!==n),i=a[a.length-1]??e[0];i&&(f=d(i,u(i,"to",r),"arrival"))}!f&&o&&(f=p(o,(0,t.L)(o.start)===n?"destination":"stay",r));let h=o?p(o,"stay",r):null;if(!h){let a=S(c,n,"start",l).filter(e=>f?.source!=="arrival"||f.bookingId!==e.id),i=a[a.length-1];if(i){let a=u(i,"to",r);h=n<e.endDate&&i.end&&(0,t.L)(i.end)===n&&(m(i,"end",l)??0)>=(m(i,"start",l)??0)&&a&&void 0!==a.lat&&void 0!==a.lng?d(i,a,"arrival"):d(i,u(i,"from",r),"departure")}}return h||(h=f),o?{start:f,end:h,stay:o}:{start:f,end:h}},"k",0,function(e,a){let n=[];for(let e of a)e.end&&e.end<e.start&&!(e.endTimeZone||e.startTimeZone)&&n.push({type:"invalid-range",bookingId:e.id});let r=a.filter(i).filter(e=>e.end&&e.end>e.start);for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++){let a=r[e],i=r[t],o=new Set(l(i)),s=l(a).filter(e=>o.has(e));s.length>0&&n.push({type:"overlapping-stays",bookingIds:[a.id,i.id],nights:s})}let o=new Set(r.flatMap(l));for(let a of(0,t.y)(e).slice(0,-1))o.has(a)||n.push({type:"missing-stay",date:a});return n},"j",0,function(e){return A.has(e)},"t",0,i,"E",0,o,"A",0,f,"T",0,l,"F",0,s,"b",0,h,"o",0,M,"q",0,L])},49913,e=>{"use strict";let t=`
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
`,a={WAW:"Warschau (Chopin)",WMI:"Warschau-Modlin",KRK:"Krakau",GDN:"Danzig",WRO:"Breslau",POZ:"Posen",SZZ:"Stettin",LIS:"Lissabon",PDL:"Ponta Delgada (Azoren)",AGP:"Málaga",SVQ:"Sevilla",TFS:"Teneriffa Süd",TFN:"Teneriffa Nord",BIA:"Bastia (Korsika)",AJA:"Ajaccio (Korsika)",NCE:"Nizza",FCO:"Rom (Fiumicino)",CIA:"Rom (Ciampino)",MXP:"Mailand (Malpensa)",LIN:"Mailand (Linate)",VCE:"Venedig",NAP:"Neapel",FLR:"Florenz",MUC:"München",DUS:"Düsseldorf",CGN:"Köln/Bonn",NUE:"Nürnberg",HAJ:"Hannover",BRU:"Brüssel",CRL:"Brüssel (Charleroi)",LUX:"Luxemburg",ZRH:"Zürich",GVA:"Genf",VIE:"Wien",CPH:"Kopenhagen",GOT:"Göteborg",TOS:"Tromsø",KEF:"Reykjavík (Keflavík)",PRG:"Prag",KSC:"Košice",BEG:"Belgrad",OTP:"Bukarest",KIV:"Chișinău",ATH:"Athen",HER:"Heraklion (Kreta)",CHQ:"Chania (Kreta)",RHO:"Rhodos",CFU:"Korfu",SAW:"Istanbul (Sabiha Gökçen)",TBS:"Tiflis",EVN:"Eriwan",CAI:"Kairo",RAK:"Marrakesch",SSH:"Scharm El-Scheich",ZNZ:"Sansibar",CPT:"Kapstadt",MEX:"Mexiko-Stadt",CUN:"Cancún",HAV:"Havanna",BOG:"Bogotá",GRU:"São Paulo",SGN:"Ho-Chi-Minh-Stadt",SIN:"Singapur",PEK:"Peking",MLE:"Malé (Malediven)"},n=new Map(`
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
`.trim().split(/[;\n]/).map(e=>{let[t="",a="",n=""]=e.trim().split(" ");return[t,[Number(a),Number(n)]]})),r=new Map(t.trim().split("\n").map(e=>{let[t="",r="",i="",o=""]=e.split("|"),[l=0/0,s=0/0]=n.get(t)??[];return[t,{code:t,city:{pl:r,en:i||r,de:a[t]??(i||r)},timeZone:o,lat:l,lng:s}]}));function i(e){return e?r.get(e.toUpperCase()):void 0}let o=/\(([A-Z]{3})\)\s*$|^([A-Z]{3})$/;e.s(["p",0,{FR:"Ryanair",RK:"Ryanair UK",W6:"Wizz Air",W4:"Wizz Air Malta",W9:"Wizz Air UK",LO:"LOT Polish Airlines",U2:"easyJet",EC:"easyJet Europe",DS:"easyJet Switzerland",LH:"Lufthansa",EW:"Eurowings",VY:"Vueling",KL:"KLM",AF:"Air France",BA:"British Airways",IB:"Iberia",TP:"TAP Air Portugal",LX:"SWISS",OS:"Austrian Airlines",SN:"Brussels Airlines",SK:"SAS",DY:"Norwegian",D8:"Norwegian",AY:"Finnair",A3:"Aegean Airlines",TK:"Turkish Airlines",PC:"Pegasus",EK:"Emirates",QR:"Qatar Airways",EY:"Etihad",LS:"Jet2",BY:"TUI Airways",X3:"TUIfly",HV:"Transavia",TO:"Transavia France",V7:"Volotea",AZ:"ITA Airways",UX:"Air Europa",NT:"Binter Canarias",BT:"airBaltic",OK:"Czech Airlines",QS:"Smartwings",RO:"TAROM",FB:"Bulgaria Air",JU:"Air Serbia",OU:"Croatia Airlines",E4:"Enter Air",XQ:"SunExpress",LG:"Luxair",EI:"Aer Lingus",FI:"Icelandair",DL:"Delta",UA:"United",AA:"American Airlines",AC:"Air Canada"},"N",0,function(e){let t=e.trim().toLowerCase();if(t)for(let e of r.values())for(let a of Object.values(e.city)){let n=a.toLowerCase();if(n===t||n.startsWith(`${t} (`))return e}},"h",0,i,"U",0,function(e){let t=o.exec(e?.trim()??"");return i(t?.[1]??t?.[2])},"O",0,function(e,t,a){let n=i(e),r=(n?.city[t]??a)?.replace(/\s*\([^)]*\)\s*$/,"");return r?`${r} (${e.toUpperCase()})`:e.toUpperCase()}])},90170,e=>{"use strict";var t=e.i(25395);function a(e){return"car"===e||"foot"===e||"bike"===e?e:null}let n=e=>(Math.round(1e5*e)/1e5+0).toFixed(5),r=(e,t)=>(e[0]-t.lng)**2+(e[1]-t.lat)**2;e.s(["l",0,function(e,t="car"){let a=new Map,n=null,r=0;for(let t of e){if("none"===t)continue;let e=(a.get(t)??0)+1;a.set(t,e),e>r&&(n=t,r=e)}return n??t},"L",0,function(e){let a=(0,t._)(e.from,e.to),n="none"===e.mode?1:t.h[e.mode].detour;return{minutes:(0,t.v)(e.from,e.to,e.mode),km:Math.round(a*n*10)/10}},"o",0,function(e,t=25){let n=[],r=null;for(let i of e){let e=a(i.mode);if(!e){r=null;continue}let o=r?.legs[r.legs.length-1];r&&o&&r.mode===e&&o.toId===i.fromId&&r.points.length<t?(r.legs.push(i),r.points.push(i.to)):(r={mode:e,legs:[i],points:[i.from,i.to]},n.push(r))}return n},"m",0,function(e,t,a){return`${a}|${n(e.lat)},${n(e.lng)}|${n(t.lat)},${n(t.lng)}`},"Z",0,a,"e",0,function(e,t){let a=t.length-1;if(a<=0)return[];let n=e=>[e.lng,e.lat];if(e.length<2)return Array.from({length:a},(e,a)=>[n(t[a]),n(t[a+1])]);let i=[0],o=0;for(let n=1;n<a;n++){let a=t[n],l=o,s=1/0;for(let t=o;t<e.length;t++){let n=r(e[t],a);n<s&&(s=n,l=t)}i.push(l),o=l}i.push(e.length-1);let l=[];for(let r=0;r<a;r++){let a=i[r],o=i[r+1],s=e.slice(a,o+1);l.push(s.length>=2?s:[n(t[r]),n(t[r+1])])}return l},"w",0,function(e){let t={car:0,foot:0,bike:0,transit:0,none:0},a=0,n=0;for(let r of e)t[r.spec.mode]+=r.minutes,a+=r.minutes,n+=r.km;return{byMode:t,minutes:a,km:Math.round(10*n)/10}}])},52344,e=>{"use strict";var t=e.i(25395);e.s(["V",0,120,"Q",0,2,"F",0,25,"E",0,function(e,a=25,n={}){let r=e.length;if(0===r)return[];let{maxRegions:i=1/0,tinyReachKm:o=0,minRegionSize:l=2}=n,s=e.map(a=>e.map(e=>(0,t._)(a,e))),u=e.map(()=>1),d=e.map(()=>!0),p=e.map((e,t)=>t),c=(e,t)=>{let a=e,n=null;for(let e=0;e<r;e++){if(!d[e])continue;let i=s[e];for(let o=e+1;o<r;o++)d[o]&&!(i[o]>=a-1e-9)&&t(e,o)&&(a=i[o],n=[e,o])}return n},m=e=>u[e]<l;for(let e=r;;e--){let t=c(a,()=>!0)??(o>0?c(o,(e,t)=>m(e)||m(t)):null)??(e>Math.max(1,i)?c(1/0,()=>!0):null);if(!t)break;let[n,l]=t,f=u[n],h=u[l];for(let e=0;e<r;e++){if(!d[e]||e===n||e===l)continue;let t=(f*s[n]?.[e]+h*s[l]?.[e])/(f+h);s[n][e]=t,s[e][n]=t}u[n]=f+h,d[l]=!1;for(let e=0;e<r;e++)p[e]===l&&(p[e]=n)}let f=new Map;return p.map(e=>(f.has(e)||f.set(e,f.size),f.get(e)))}])},10013,e=>{"use strict";var t=e.i(12268),a=e.i(41478),n=e.i(99506),r=e.i(52344),i=e.i(58162),o=e.i(25395),l=e.i(90170),s=e.i(32751);let u=r.F,d=/(?:^|\s)(?:〒\s?\d{3}-\d{4}|\d{2,4}-\d{3,4}|\d{4,6}|[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})(?=\s|$)/u,p=new Set(["MC","SG","VA","GI","HK","MO"]),c=new Set(["LU","SM"]),m=/\d|(?<!\p{L})(?:rue|route|avenue|boulevard|place|street|road|lane|stra(?:ss|ß)e|via|viale|piazza|contrada|calle|ulica)(?!\p{L})/iu;function f(e,t=[]){let n,r=(e??"").split(/[,，、]/).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);if(0===r.length)return"";let i=function(e,t){let n=new Set(t.filter(e=>!!e).map(e=>e.trim().toLocaleLowerCase())),r=e.filter((e,t)=>!n.has(e.toLocaleLowerCase())&&!(t>0&&!/\d/.test(e)&&(0,a.A)(e,10)));for(let t of(0===r.length&&(r=[...e]),r.slice(1))){if(!d.test(t))continue;let e=t.replace(d," ").replace(/\s+/g," ").trim();if(/\p{L}/u.test(e))return e}if(1===r.length)return r[0];e.length>=3&&r.length===e.length&&(r=r.slice(0,-1));for(let e=r.length-1;e>=1;e--)if(!/\d/.test(r[e]))return r[e];return r[r.length-1]}(r,t);for(let e of r.slice(1)){let t=/\d/.test(e)?void 0:(0,a.A)(e,10);t&&(p.has(t)||c.has(t))&&(n={part:e,code:t})}return n&&i!==n.part&&(p.has(n.code)||m.test(i))?n.part:i}function h(e,t){let a=e.location;if(a&&void 0!==a.lat&&void 0!==a.lng)return{lat:a.lat,lng:a.lng};let n=e.placeId?t.find(t=>t.id===e.placeId):void 0;return n?{lat:n.lat,lng:n.lng}:null}let g=e=>e.trim().toLocaleLowerCase();function A(e){return e.length?{lat:e.reduce((e,t)=>e+t.lat,0)/e.length,lng:e.reduce((e,t)=>e+t.lng,0)/e.length}:null}let E={flight:5,train:4,ferry:3,bus:2,car:1};function L(e){return s.W.includes(e.type)&&"car"!==e.type}let M=(e,t)=>e.start<t.start?-1:e.start>t.start?1:e.id<t.id?-1:1;function S(e,t){try{let a=(0,n.K)(e,t).getTime();return Number.isFinite(a)?a:null}catch{return null}}function y(e,a,r,i,l=null){let s=e.reduce((e,t)=>{let a=t.type;return!e||E[a]>E[e]?a:e},null),u=e.map(e=>{let a=(0,t.b)(e,e.from),n=(0,t.b)(e,e.to);return a&&n?(0,o._)(a,n):null}),d=u.every(e=>null!==e)?u.reduce((e,t)=>e+t,0):null,p=e[e.length-1],c=p?(0,t.b)(p,p.to):null;return{bookings:e,mode:s,minutes:function(e,a){let n=e[0],r=e[e.length-1];if(!n||!r?.end)return null;let i=S(n.start,(0,t.$)(n,a).start),o=S(r.end,(0,t.$)(r,a).end);return null===i||null===o||o<i?null:Math.round((o-i)/6e4)}(e,a),estimated:!1,overnight:e.some(e=>!!e.end&&(0,n.L)(e.end)>(0,n.L)(e.start)),rental:null,km:d??i,kmSource:"straight",...c&&l&&(0,o._)(c,l)>50?{endsElsewhere:!0}:{},missing:!1,date:r}}let w=e=>({spec:e,...(0,l.L)(e),status:"estimate"});e.s(["a",0,u,"g",0,f,"J",0,function(e){if("destination"===e.source)return[];let t=e.stops.flatMap(e=>e.point?[{name:e.name,lat:e.point.lat,lng:e.point.lng}]:[]);return t.length>=2?t:[]},"l",0,function(e){if("destination"===e.source)return[];let t=[];for(let a of e.stops){let e=a.name.trim();e&&t[t.length-1]?.toLocaleLowerCase()!==e.toLocaleLowerCase()&&t.push(e)}return t},"p",0,function(e){return e.stops.length>=2||e.gapNights>0||e.missingLegs>0},"c",0,function(e,t){let a=e.stops.findIndex(e=>e.startDate<=t&&t<e.endDate);if(a>=0)return a;let n=e.stops[e.stops.length-1];return n&&n.endDate===t?n.index:-1},"u",0,function(e){let a,s,d,{trip:p,bookings:c}=e,m=Array.from({length:Math.max(0,(0,n.F)(p.startDate,p.endDate))},(e,t)=>(0,n.b)(p.startDate,t)),E=function(e,a){let{trip:r,bookings:l}=e,s=e.places??[],d=[r.destination.country,"country"===(0,i.n)(r.destination)?r.destination.name:void 0],p=a.map(e=>({date:e,stay:(0,t.F)(l,e)}));if(!p.some(e=>e.stay))return null;let c=[],m=[],E=null,M=null,S=[],y=()=>{if(E){var e,t;let a,r=(e=E,t=m.length,a=(0,n.b)(e.lastNight,1),{id:`stop-${t}`,index:t,name:e.name,point:A(e.points),startDate:e.startDate,endDate:a,nights:(0,n.F)(e.startDate,a),stayIds:e.stayIds});m.push(r),c.push({kind:"stop",stop:r}),E=null}for(let e of S)c.push({kind:"gap",gap:e});S=[]};for(let{date:e,stay:t}of p){if(!t){if(function(e,t){return e.some(e=>L(e)&&!!e.end&&(0,n.L)(e.start)<=t&&t<(0,n.L)(e.end))}(l,e)){y(),M=null;continue}M||(M={nights:[]},E?S.push(M):c.push({kind:"gap",gap:M})),M.nights.push(e);continue}M=null;let a=h(t,s),r=function(e,t=[],a=[]){let n=e.placeId?t.find(t=>t.id===e.placeId):void 0;return f(n?.address,a)||f(e.location?.name,a)||n?.name.trim()||e.title.trim()}(t,s,d),i=E,p=null!==i&&(i.stayIds.includes(t.id)||(a&&i.anchor?(0,o._)(a,i.anchor)<=u:!a&&!i.anchor&&g(r)===g(i.name)));if(i&&p){i.lastNight=e,!i.stayIds.includes(t.id)&&(i.stayIds.push(t.id),a&&i.points.push(a));continue}y(),E={name:r,points:a?[a]:[],anchor:a,startDate:e,lastNight:e,stayIds:[t.id]}}return y(),{entries:c,stops:m}}(e,m);if(E)a="stays",{stops:s,entries:d}=E;else{let t=function(e){let{trip:t}=e,a=new Map((e.places??[]).map(e=>[e.id,e])),l=(0,n.y)(t),s=l.map(t=>(e.items??[]).filter(e=>e.date===t&&e.placeId).map(e=>a.get(e.placeId)).filter(e=>!!e&&"stay"!==e.category&&Number.isFinite(e.lat)&&Number.isFinite(e.lng))),d=l.map((e,t)=>t).filter(e=>(s[e]?.length??0)>0);if(0===d.length)return null;let p=d.map(e=>A(s[e])),c=(0,r.E)(p),m=l.map(()=>null);d.forEach((e,t)=>{m[e]=c[t]??0});for(let e=0;e<l.length;e++)null===m[e]&&e>0&&(m[e]=m[e-1]??null);for(let e=l.length-1;e>=0;e--)null===m[e]&&(m[e]=m[e+1]??0);let h=[];m.forEach((e,t)=>{let a=h[h.length-1];a&&a.region===e?a.to=t:h.push({region:e??0,from:t,to:t})}),h=h.reduce((e,t,a,n)=>{let r=e[e.length-1],i=n[a+1];return r&&i&&t.from===t.to&&r.region===i.region||r&&r.region===t.region?r.to=t.to:e.push({...t}),e},[]);let g="city"!==(0,i.n)(t.destination),E=[t.destination.country,g?t.destination.name:void 0],L={lat:t.destination.lat,lng:t.destination.lng};return h.map((e,a)=>{let r=s.slice(e.from,e.to+1).flat(),i=A(r),d=l[e.from],p=a===h.length-1?t.endDate:l[e.to+1],c="";if(!g&&i&&(0,o._)(i,L)<=u&&(c=t.destination.name),!c){let e=new Map;for(let t of r){let a=f(t.address,E);a&&e.set(a,(e.get(a)??0)+1)}c=[...e.entries()].sort((e,t)=>t[1]-e[1])[0]?.[0]??r[0]?.name??t.destination.name}return{id:`stop-${a}`,index:a,name:c,point:i,startDate:d,endDate:p,nights:(0,n.F)(d,p),stayIds:[]}})}(e);a=t?"plan":"destination",d=(s=t??[{id:"stop-0",index:0,name:p.destination.name,point:Number.isFinite(p.destination.lat)&&Number.isFinite(p.destination.lng)?{lat:p.destination.lat,lng:p.destination.lng}:null,startDate:p.startDate,endDate:p.endDate,nights:m.length,stayIds:[]}]).map(e=>({kind:"stop",stop:e}))}let S=new Set,b=e.places??[],B=e=>{let t=e?c.find(t=>t.id===e):void 0;return t?h(t,b):null};for(let t=0;t<s.length-1;t++){let a=s[t],r=s[t+1],i={from:B(a.stayIds[a.stayIds.length-1]),to:B(r.stayIds[0])};a.next=function(e,t,a,r,i,s,d){let p=e.point&&t.point?(0,o._)(e.point,t.point):null,c=a.filter(e=>L(e)&&!r.has(e.id)).filter(a=>{let r=(0,n.L)(a.start);return r>=e.endDate&&r<=t.startDate}).sort(M);if(c.length){for(let e of c)r.add(e.id);return y(c,i,t.startDate,p,t.point)}let m=a.filter(e=>"car"===e.type&&(0,n.L)(e.start)<=t.startDate&&(0,n.L)(e.end??e.start)>=t.startDate).sort(M)[0];if(m){let a=s.from??e.point,n=s.to??t.point;if(!a||!n)return{bookings:[],mode:"car",minutes:null,estimated:!1,overnight:!1,rental:m,km:p,kmSource:"straight",missing:!1,date:t.startDate};let r=d({key:(0,l.m)(a,n,"car"),fromId:e.id,toId:t.id,from:a,to:n,mode:"car"}),i="route"===r.status;return{bookings:[],mode:"car",minutes:Math.round(r.minutes),estimated:!i,overnight:!1,rental:m,km:r.km,kmSource:i?"road":"estimate",missing:!1,date:t.startDate}}let f=null!==p&&p<=u||!!e.name.trim()&&g(e.name)===g(t.name);return{bookings:[],mode:null,minutes:null,estimated:!1,overnight:!1,rental:null,km:p,kmSource:"straight",missing:!f,date:t.startDate}}(a,r,c,S,p.timeZone,i,e.resolve??w)}let T=s[0],C=s[s.length-1],k=c.filter(e=>L(e)&&!S.has(e.id)).sort(M),N=T?k.filter(e=>(0,n.L)(e.start)<=T.startDate):[],v=C?k.filter(e=>!N.includes(e)&&(0,n.L)(e.start)>=C.endDate):[],R=e=>{let t=e[e.length-1];return t?y(e,p.timeZone,(0,n.L)(t.end??t.start),null):null};return{source:a,stops:s,entries:d,inbound:R(N),outbound:R(v),gapNights:d.reduce((e,t)=>e+("gap"===t.kind?t.gap.nights.length:0),0),missingLegs:s.filter(e=>e.next?.missing).length}}])},86208,e=>{"use strict";var t=e.i(99506);let a=e=>e*Math.PI/180,n=e=>180*e/Math.PI;function r(e){let t=(e-2451545)/36525,r=((280.46646+t*(36000.76983+3032e-7*t))%360+360)%360,i=357.52911+t*(35999.05029-1537e-7*t),o=.016708634-t*(42037e-9+1267e-10*t),l=r+(Math.sin(a(i))*(1.914602-t*(.004817+14e-6*t))+Math.sin(a(2*i))*(.019993-101e-6*t)+289e-6*Math.sin(a(3*i))),s=125.04-1934.136*t,u=l-.00569-.00478*Math.sin(a(s)),d=23+(26+(21.448-t*(46.815+t*(59e-5-.001813*t)))/60)/60+.00256*Math.cos(a(s)),p=n(Math.asin(Math.sin(a(d))*Math.sin(a(u)))),c=Math.tan(a(d/2))**2;return{declination:p,eqTime:4*n(c*Math.sin(2*a(r))-2*o*Math.sin(a(i))+4*o*c*Math.sin(a(i))*Math.cos(2*a(r))-.5*c*c*Math.sin(4*a(r))-1.25*o*o*Math.sin(2*a(i)))}}function i(e,t){let r=Math.cos(a(90.833))/(Math.cos(a(e))*Math.cos(a(t)))-Math.tan(a(e))*Math.tan(a(t));return r>1||r<-1?r>1?0/0:1/0:n(Math.acos(r))}e.s(["f",0,function(e,a,n,o){let l=function(e,a,n){let{year:o,month:l,day:s}=(0,t.d)(e),u=Date.UTC(o,l-1,s),d=u/864e5+2440587.5,p=r(d+(720-4*n)/1440),c=r(d+(720-4*n-p.eqTime)/1440),m=720-4*n-c.eqTime,f=new Date(u+6e4*m),h=i(a,c.declination);if(Number.isNaN(h))return{sunrise:null,sunset:null,solarNoon:f,polar:"night",dayLengthMinutes:0};if(!Number.isFinite(h))return{sunrise:null,sunset:null,solarNoon:f,polar:"day",dayLengthMinutes:1440};let g=e=>{let t=m+4*e*h;for(let o=0;o<2;o++){let o=r(d+t/1440),l=i(a,o.declination);if(!Number.isFinite(l))break;t=720-4*n-o.eqTime+4*e*l}return t},A=g(-1),E=g(1);return{sunrise:new Date(u+6e4*A),sunset:new Date(u+6e4*E),solarNoon:f,polar:null,dayLengthMinutes:Math.round(E-A)}}(e,a,n),s=a=>{if(!a)return null;let n=(0,t.o)(a,o),{year:r,month:i,day:l}=(0,t.d)(e);return Math.round((a.getTime()-Date.UTC(r,i-1,l))/6e4+n)},u=s(l.sunrise),d=s(l.sunset);return{sunrise:null===u?null:(0,t.z)(u),sunset:null===d?null:(0,t.z)(d),sunriseMinutes:null===u?null:(u%1440+1440)%1440,sunsetMinutes:null===d?null:d,polar:l.polar,dayLengthMinutes:l.dayLengthMinutes}}])},91019,e=>{"use strict";let t;var a=e.i(2583),n=e.i(52530);let r=new Map,i={get:async e=>(await (0,a.$)().kv.get(e))?.value,async set(e,t,n){await (0,a.$)().kv.put({key:e,value:t,updatedAt:new Date().toISOString(),expiresAt:Date.now()+n})}};function o(){return void 0!==t?t:(0,a._)()?i:null}function l(e,t){if(r.delete(e),r.set(e,t),r.size>300){let e=r.keys().next().value;void 0!==e&&r.delete(e)}}async function s(e){let t=o();if(t)try{let a=await t.get(e);return"object"==typeof a&&null!==a&&"t"in a&&"v"in a&&"ttl"in a?a:void 0}catch{return}}let u=new Map;async function d(e,t,a){let i,u=Date.now(),d=r.get(e);if(d&&u-d.t<a.ttlMs)return{value:d.v,source:"memory",fetchedAt:d.t};if(a.persist&&(i=await s(e))&&u-i.t<a.ttlMs)return l(e,i),{value:i.v,source:"persisted",fetchedAt:i.t};try{let n=await t(),r={v:n,t:Date.now(),ttl:a.ttlMs};if(l(e,r),a.persist){let t=o();t&&await t.set(e,r,Math.max(a.keepMs??2592e6,a.ttlMs)).catch(()=>void 0)}return{value:n,source:"network",fetchedAt:r.t}}catch(e){if(!1!==a.staleOnError&&!(0,n.q)(e)){let e=d??i;if(e)return{value:e.v,source:"stale",fetchedAt:e.t}}throw e}}async function p(e,t=!0){let a=r.get(e);if(a)return{value:a.v,source:"memory",fetchedAt:a.t};if(!t)return;let n=await s(e);return n?{value:n.v,source:"persisted",fetchedAt:n.t}:void 0}async function c(e,t,a){let n={v:t,t:Date.now(),ttl:a.ttlMs};if(l(e,n),a.persist){let t=o();t&&await t.set(e,n,Math.max(a.keepMs??31536e6,a.ttlMs)).catch(()=>void 0)}}e.s(["Y",0,function e(t,a,r){let i=u.get(t);if(i)return i.catch(i=>{if((0,n.q)(i))return e(t,a,r);throw i});let o=d(t,a,r).finally(()=>{u.get(t)===o&&u.delete(t)});return u.set(t,o),o},"g",0,function(e,t,a=4){return`${e.toFixed(a)},${t.toFixed(a)}`},"z",0,p,"M",0,c])},52530,e=>{"use strict";class t extends Error{service;code;status;constructor(e,t,a={}){super(a.message??`${e}: ${t}${a.status?` (${a.status})`:""}`,void 0!==a.cause?{cause:a.cause}:void 0),this.name="ServiceError",this.service=e,this.code=t,void 0!==a.status&&(this.status=a.status)}get retryable(){return"timeout"===this.code||"network"===this.code||"offline"===this.code||"rate-limited"===this.code||"http"===this.code&&(this.status??0)>=500}}async function a(e,n,r={}){let i,{signal:o,timeoutMs:l=1e4}=r;if(o?.aborted)throw new t(e,"aborted");let s=new AbortController,u=!1,d=setTimeout(()=>{u=!0,s.abort()},l),p=()=>s.abort();o?.addEventListener("abort",p,{once:!0});try{i=await fetch(n,{signal:s.signal,cache:"no-cache",referrerPolicy:"no-referrer"})}catch(a){if(u)throw new t(e,"timeout",{cause:a});if(o?.aborted)throw new t(e,"aborted",{cause:a});throw new t(e,"u">typeof navigator&&!1===navigator.onLine?"offline":"network",{cause:a})}finally{clearTimeout(d),o?.removeEventListener("abort",p)}if(!i.ok)throw new t(e,429===i.status?"rate-limited":404===i.status?"not-found":400===i.status?"invalid-input":"http",{status:i.status});if(204===i.status)return null;try{return await i.json()}catch(a){if(o?.aborted)throw new t(e,"aborted",{cause:a});throw new t(e,"bad-response",{cause:a})}}e.s(["n",0,t,"d",0,function(e,t){let a=new URLSearchParams;for(let[e,n]of Object.entries(t))if(void 0!==n)if(Array.isArray(n))for(let t of n)a.append(e,String(t));else a.append(e,String(n));let n=a.toString();return n?`${e}${e.includes("?")?"&":"?"}${n}`:e},"g",0,function(e,a=350,n="photon"){let r,i,o,l=()=>{r&&clearTimeout(r),r=void 0,i?.abort(),i=void 0,o?.(new t(n,"aborted")),o=void 0};return Object.assign((...t)=>(l(),new Promise((n,l)=>{o=l,r=setTimeout(()=>{r=void 0;let a=new AbortController;i=a,e(a.signal,...t).then(e=>{i===a&&(i=void 0,o=void 0),n(e)},e=>{i===a&&(i=void 0,o=void 0),l(e)})},a)})),{cancel:l})},"b",0,a,"q",0,function(e){return e instanceof t&&"aborted"===e.code||e instanceof Error&&"AbortError"===e.name},"A",0,function(e){return e instanceof t}])},12769,e=>{"use strict";var t=e.i(99506),a=e.i(86208),n=e.i(91019),r=e.i(52530);let i="https://api.open-meteo.com/v1/forecast",o="https://archive-api.open-meteo.com/v1/archive";function l(e){return e<=1?"sun":2===e?"partly":3===e?"cloud":45===e||48===e?"fog":e>=71&&e<=77||85===e||86===e?"snow":e>=95?"storm":e>=51&&e<=67||e>=80&&e<=82?"rain":"cloud"}function s(e,t,a){let n=l(e);return"rain"!==n?n:null!==t&&t>=40||a>=1?"rain":"cloud"}let u=e=>e&&e.length>=16?e.slice(11,16):null,d=(e,t=0)=>"number"==typeof e&&Number.isFinite(e)?e:t;async function p(e,t,a={}){let o=(0,r.d)(i,{latitude:e.lat.toFixed(4),longitude:e.lng.toFixed(4),daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,sunrise,sunset,uv_index_max,snowfall_sum",timezone:t,forecast_days:16}),l=(await (0,n.Y)(`cache:meteo:forecast:${(0,n.g)(e.lat,e.lng,2)}:${t}`,()=>(0,r.b)("open-meteo",o,a),{ttlMs:108e5,persist:!0,keepMs:6048e5})).value.daily;if(!l||!Array.isArray(l.time))throw new r.n("open-meteo","bad-response");return l.time.map((e,t)=>{let a=d(l.weather_code?.[t]),n=l.precipitation_probability_max?.[t],r=l.uv_index_max?.[t];return{date:e,code:a,kind:s(a,"number"==typeof n?n:null,d(l.precipitation_sum?.[t])),tempMax:d(l.temperature_2m_max?.[t]),tempMin:d(l.temperature_2m_min?.[t]),precipitationSum:d(l.precipitation_sum?.[t]),precipitationProbability:"number"==typeof n?n:null,windMax:d(l.wind_speed_10m_max?.[t]),sunrise:u(l.sunrise?.[t]),sunset:u(l.sunset?.[t]),...l.uv_index_max?{uvIndexMax:"number"==typeof r&&Number.isFinite(r)?r:null}:{},...l.snowfall_sum?{snowfallSum:d(l.snowfall_sum[t])}:{},source:"forecast"}})}function c(e,a){let{year:n,month:r,day:i}=(0,t.d)(e),o=n-a,l=o%4==0&&o%100!=0||o%400==0;return(0,t.G)(o,r,2!==r||29!==i||l?i:28)}function m(e){let t,a=new Map,n=0;for(let r of e){let e=(a.get(r)??0)+1;a.set(r,e),e>n&&(t=r,n=e)}return t}async function f(e,i,u,p={}){if(0===u.length)return[];if(!u.every(t.r))throw new r.n("open-meteo","invalid-input");let h=[...u].sort(),g=h[0],A=h[h.length-1];if((0,t.F)(g,A)>31)throw new r.n("open-meteo","invalid-input",{message:"open-meteo: max 31 days"});let E=Math.min(Math.max(p.years??5,1),10),L=(0,t.b)((0,t.g)(i,p.at),-6),M=[];for(let e=1;M.length<E&&e<=E+3;e++)c(A,e)<=L&&M.push(e);if(0===M.length)throw new r.n("open-meteo","unsupported");let S=new Map;for(let t of M){let a=c(g,t),l=c(A,t),s=(0,r.d)(o,{latitude:e.lat.toFixed(2),longitude:e.lng.toFixed(2),start_date:a,end_date:l,daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max",timezone:i}),u=(await (0,n.Y)(`cache:meteo:archive:${(0,n.g)(e.lat,e.lng,2)}:${i}:${a}:${l}`,()=>(0,r.b)("open-meteo",s,p),{ttlMs:15552e6,persist:!0})).value.daily;if(u)for(let e of h){let a=u.time.indexOf(c(e,t));if(a<0)continue;let n=u.temperature_2m_max?.[a],r=u.temperature_2m_min?.[a];if("number"!=typeof n||"number"!=typeof r)continue;let i=S.get(e)??[];i.push({code:d(u.weather_code?.[a]),tMax:n,tMin:r,precip:d(u.precipitation_sum?.[a]),wind:d(u.wind_speed_10m_max?.[a])}),S.set(e,i)}}let y=e=>Math.round(e.reduce((e,t)=>e+t,0)/e.length*10)/10;return h.flatMap(t=>{let n=S.get(t);if(!n||0===n.length)return[];let r=m(n.map(e=>l(e.code)))??"cloud",o=m(n.filter(e=>l(e.code)===r).map(e=>e.code))??3,u=(0,a.f)(t,e.lat,e.lng,i),d=y(n.map(e=>e.precip)),p=Math.round(n.filter(e=>e.precip>=1).length/n.length*100);return[{date:t,code:o,kind:s(o,p,d),tempMax:y(n.map(e=>e.tMax)),tempMin:y(n.map(e=>e.tMin)),precipitationSum:d,precipitationProbability:p,windMax:y(n.map(e=>e.wind)),sunrise:u.sunrise,sunset:u.sunset,source:"typical",years:n.length}]})}async function h(e,a,n,r={}){let i;if(0===n.length)return[];let o=(0,t.g)(a,r.at),l=(0,t.b)(o,15),s=n.filter(e=>e>=o&&e<=l),u=n.filter(e=>e<o||e>l),d=new Map;if(s.length)try{for(let t of(await p(e,a,r)))s.includes(t.date)&&d.set(t.date,t)}catch(e){i=e}if(u.length){let n=[...u].sort(),o=[],l=async()=>{if(o.length){try{for(let t of(await f(e,a,o,r)))d.set(t.date,t)}catch(e){i??=e}o=[]}};for(let e of n){let a=o[o.length-1];a&&(1!==(0,t.F)(a,e)||(0,t.F)(o[0],e)>31)&&await l(),o.push(e)}await l()}if(0===d.size&&i)throw i;return[...d.values()].sort((e,t)=>e.date<t.date?-1:1)}async function g(e,t={}){let a=(0,r.d)(i,{latitude:e.lat.toFixed(3),longitude:e.lng.toFixed(3),timezone:"auto",forecast_days:1,daily:"sunrise"});return(await (0,n.Y)(`cache:meteo:tz:${(0,n.g)(e.lat,e.lng,2)}`,async()=>{let e=await (0,r.b)("open-meteo",a,t);if(!e.timezone)throw new r.n("open-meteo","bad-response");return e.timezone},{ttlMs:31536e6,persist:!0})).value}e.s(["W",0,o,"M",0,h,"q",0,g])},71538,e=>{"use strict";var t=e.i(71645);function a(e){return window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}}e.s(["f",0,function(){return(0,t.useSyncExternalStore)(a,()=>navigator.onLine,()=>!0)}])}]);