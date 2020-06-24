import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'
import * as Isotope from 'isotope-layout'

const ITEMS = [
  {
    text:
      'In afgelopen jaren heeft NJON deuren voor mij geopend, waarvan ik niet eens wist dat ze bestonden. Ik heb geleerd samen te werken en mijn beste beentje vóór te zetten voor het geheel. Dit heeft mij een netwerk gebracht, waar ik ontzettend dankbaar voor ben en kracht uit kan putten op mijn weg naar een muzikale carrière. Zonder NJON zou ik niet daar zijn, waar ik nu ben.',
    name: 'Hugo Pieters',
    occupation:
      'NJO member, Jong Metropole lid, voormalig JONner en student Hoorn, Conservatorium Maastricht',
    age: '22',
  },
  {
    text:
      'Ik ben één van de vele jonge mensen voor wie het NJON ontzettend veel betekend heeft. Bij het JON krijgen middelbare scholieren de kans hun muzikale talenten op een hoog niveau te ontwikkelen en een onmisbare ervaring op te doen die nergens anders te vinden is. Door middel van uiterst leerzame repetities met een hoogstaande dirigent, prestatiedruk en het geven van concerten door heel Europa geeft het JON niet alleen een eerste stap in de professionele muziekwereld, maar draagt het bij aan een ervaring die in elke toekomstige carrière van toepassing zal zijn. Het NJO, wat elk seizoen gevuld is met fanatieke conservatorium studenten, geeft de studenten de kans om op het hoogste niveau te repeteren, netwerken en presteren. Het is voor hun van groot belang om deze ervaring op te doen en zich daardoor veel beter te kunnen voorbereiden op een carrière in professionele orkesten. Beide orkesten zijn praktisch gezien onmisbaar geweest in de levens van duizenden succesvolle muzikanten!',
    name: 'Emma Steinmann',
    occupation: '',
    age: '20',
  },
  {
    text:
      'Het JON en het NJO zijn voor mij onmisbaar geweest in mijn ontwikkeling als musicus, zowel op muzikaal als persoonlijk vlak. Hier heb ik geleerd om in een (koper-)groep te functioneren, hetgeen van fundamenteel belang is voor een orkestmusicus. In een professioneel orkest, waar de projecten elkaar in rap tempo opvolgen, heb je immers niet de tijd om dit te leren. Onder begeleiding van kundige coaches en dirigenten ging er voor mij in dit opzicht een wereld open.  De onvergetelijke repetities, concerten en tournees hebben een blijvende indruk gelaten, waar ik met ongelofelijk veel plezier aan terugdenk. Maar ook de vele blijvende vriendschappen die in deze jeugdorkesten zijn ontstaan, zijn van grote invloed geweest op mijn leven. Ik kan me niet voorstellen dat ik zonder de ervaring in deze orkesten professioneel (orkest)musicus had kunnen worden. Dat gun ik de huidige en toekomstige generaties jonge musici natuurlijk ook. Daarom mogen onze nationale Jeugdorkesten nooit verdwijnen!',
    name: 'Wouter Iseger',
    occupation:
      '(contra-)bastrombonist Nederlands Philharmonisch Orkest / Nederlands Kamerorkest',
    age: '42',
  },
  {
    text:
      "Het NJO is voor mij een zeer waardevolle ervaring geweest naast mijn tijd op de conservatoria. Hier leerde ik al vroeg op hoog niveau samen spelen met musici van over de hele wereld. Ik heb goede herinneringen aan de kundige coaches en dirigenten en de mooie concertprogramma's die wij op podia door het hele land hebben gespeeld. Ook zorgde het bij mij voor een besef dat ik harder moest werken, en kwam ik na ieder project weer terug met een grote dosis motivatie om net weer een tandje bij te zetten. Ik denk dat het veilig is om te zeggen dat ik zonder het NJO nooit de muzikant was geworden die ik nu ben.  Ik gun iedereen die ervaring.",
    name: 'Martijn Appelo',
    occupation: 'Freelance hoornist',
    age: '28',
  },
  {
    text:
      "Als nét 16-jarig meisje uit Twente kwam ik terecht in het Jeugdorkest Nederland. Het was voor het eerst dat ik met 'lotgenoten' muziek maakte; leeftijdsgenoten die ook maar één ding wilden, namelijk; mooie muziek maken. Natuurlijk gaat het hebben van een gezamenlijke passie gepaard met een hoop gezelligheid en verbinding, waardoor je de tijd in het orkest echt nooit meer zult vergeten. Na 3 jaar was een mooi vervolg op het JON het NJO. Het JON heeft mij onder andere geïnspireerd tot een vervolgstudie aan het Conservatorium van Amsterdam en uiteindelijk in het buitenland.  Ik kan gerust zeggen dat ik in beide orkesten 'vrienden voor het leven' heb gemaakt en een deel van deze mensen zijn nu mijn collega's in de beroepsorkesten. We blikken nog vaak terug op de tijd in een van de orkesten van de NJON. De NJON is van onschatbare grote waarde voor een voortzetting van ieders muzikale ontwikkeling!!",
    name: 'Rebecca Fransen',
    occupation:
      'Professioneel musicus / Contrabassist in Phion, orkest van Gelderland en Overijssel',
    age: '27',
  },
  {
    text:
      'Van mijn 13e tot mijn 20e speelde ik in het JON. Ik heb daar een enorme persoonlijke en muzikale ontwikkeling kunnen meemaken. Ben gegroeid van tutti speler naar aanvoerder en concertmeester. Een enorme educatieve ontwikkeling, mag je dat toch wel noemen. Daarna heb ik ook nog jaren in het NJO gespeeld.  Altijd onder leiding van de meest inspirerende dirigenten muziek maken op zeer hoog niveau. Met vrienden. Gelijkgestemden. Die elkaar bij de orkesten vinden in plaats van het buitenbeentje te zijn op school.  Alle kansen die de jeugdorkesten aan jonge musici bieden. De tournees, de concerten. Onvergetelijke herinneringen.  Er is de tijd om het repertoire echt te leren kennen. En veel repertoire kennis op te doen. In de professionele orkesten teer je nog op die kennis!  NJON is een enorme kweekvijver voor de professionele wereld!  Zonder die orkesten zou ik nooit zijn wat ik nu ben! Een echte orkest musicus! Die muziek en die manier van spelen zit in mijn DNA. Dankzij NJON!',
    name: 'Hester van der Vlugt',
    occupation: '1e violiste bij het Nederlands Philharmonisch Orkest',
    age: '38',
  },
  {
    text:
      'Bij het NJON worden nieuwe generaties musici gecreëerd. De enorm inspirerende omgeving en de unieke ervaringen die het NJON biedt aan jonge, talentvolle musici, maken dat de orkesten van Nederland steeds weer aangevuld kunnen worden met talenten die zich dankzij organisaties als NJON hebben kunnen ontwikkelen. NJON draagt zo onmisbaar bij aan de toekomst van het Nederlandse muziekleven. Het niet willen subsidiëren van zo’n ongelooflijk belangrijke zaak is een grove fout en getuigt van een gebrek aan lange termijn visie op de Nederlandse muziekwereld.',
    name: 'Rogier van Gulick',
    occupation: 'Muziekwetenschapper',
    age: '27',
  },
  {
    text:
      'Tijdens mijn conservatorium opleiding was het een geweldige ervaring om met de top van de Nederlandse en internationale conservatoria samen te spelen. Een onmisbare stap die ik nodig had om later te kunnen spelen bij de beroepsorkesten. Tot op de dag van vandaag heb ik veel profijt van deze ervaringen bij het beoefenen van mijn baan in een defensieorkest. Musici van de toekomst hebben deze orkesten nodig om een brug te bouwen van student naar professional! Ongelooflijk dat de RvC zo onkundig is dat ze dit niet inziet. Het lijkt me verstandig dat ze het advies gaan herzien!',
    name: 'Kenneth Zandbergen',
    occupation:
      'Bastrombonist Regimentsfanfare ‘garde grenadiers en jagers‘ / docent scholen in de kunst Amersfoort',
    age: '36',
  },
  {
    text:
      'Het JON is voor mij de groeivijver voor mijn muzikaal spel geworden, ik vind hier uitdaging en mogelijkheid tot ontwikkeling die ik anders nooit had kunnen krijgen. Ook is het JON belangrijk voor mijn vriendschappen en contacten binnen de muziekwereld. Het JON is voor mij uniek omdat het mij heeft geleerd op hoog niveau met anderen muziek te maken en dit is dan ook heel waardevol geweest sociale en muzikale ontwikkeling en heeft het mij muzikale contacten geboden die verzekeren dat ik door zal gaan met muziek maken.',
    name: 'Marit',
    occupation: 'Student Global Sustainability Science, altviolist',
    age: '18',
  },
  {
    text:
      'Het NJON is een onmisbare kweekvijver voor jong talent, ik heb het destijds ook nodig gehad voor mijn ontwikkeling.  Verbijsterend dit advies, denk na en zie af van dit plan....',
    name: 'Bart van Grinsven',
    occupation: 'Musicus',
    age: '34',
  },
  {
    text:
      'Ik heb jaren in het JON en NJO gespeeld en ben intussen professioneel violiste. Zonder JON en NJO had ik nooit gekozen voor een carriere in de muziek. De regionale jeugdorkesten zijn leuk om in te spelen, maar om professionele musici in dit land te kunnen hebben is het hebben van Nationale Jeugdorkesten noodzakelijk! Het niveau is niet te vergelijken met regionale plaatselijke jeugdorkesten. Op het grond van dit niveau en opleidingstraject kan talent groeien, wat anders niet zo kan groeien. Dit is een hele belangrijke community voor het voortbestaan van de Nederlandse orkestcultuur. We bezuinigen het jong Oranje toch ook niet weg? Zonder dit traject zal er bijna niemand meer kiezen voor een carriere in de klassieke muziek en wordt onze cultuur aangetast op breed niveau: veel minder muziekdocenten, componisten, orkestmusici, kamermusici etc. Vrijwel elke beroepsmusicus heeft dit traject doorlopen en het is van essentieel belang voor het land dat het blijft bestaan.',
    name: 'Marthe Lasthuis',
    occupation: 'Violiste/Componiste/Viooldocent',
    age: '30',
  },
  {
    text:
      'Elke zomer in mijn studententijd was het  vaste prik, het NJO. Wat vond ik het heerlijk, de hele zomer muziek maken met medestudenten. Uitdagende stukken, beroemde dirigenten, het was elke keer een uitdaging en een belangrijke leerschool. Het is een veilige plek om ervaring op te doen, die essentieel is om na je studie door te stromen naar de professionele orkesten.  Zonder het NJO acht ik de kans erg klein dat ik nu een vaste baan zou hebben bij een professioneel orkest. Dus voor het professionele orkestleven is het noodzakelijk dat de Nederlandse jeugdorkesten blijven bestaan en gesubsidieerd worden.',
    name: 'Marijke Zijlstra',
    occupation: 'Fagottist bij het Noord Nederlands Orkest',
    age: '',
  },
  {
    text:
      'De NJON hebben voor mij veel betekend. Als jochie van 15 kwam ik bij het JON en heb ik geleerd samen te spelen in een groot orkest, maar ook hoe je op sociaal gebied moet functioneren in een grote groep. Daarna ben ik doorgestroomd naar het NJO waar je op een professionele manier leert werken met gelijkgestemde conservatorium studenten. Beide deze orkest zijn onmisbaar voor de ontwikkeling van jonge musici!',
    name: 'Kobus Prins',
    occupation: 'Ex-JON’er, Member NJO, Student Klassiek Slagwerk CvA',
    age: '21',
  },
  {
    text:
      'Als ouder van een JON-ner zie ik hoe mijn kind is gegroeid. Als 14-jarige kwam ze in het orkest, vlak voor de zomertournee. Ze kwam als 15-jarige terug. Letterlijk omdat ze jarig was tijdens de tournee, maar ook figuurlijk: wat had ze veel geleerd!! Sociaal, want ga er maar aan staan met > 80 deelnemers die je nog niet kent, maar ook muzikaal.  Die groei zet zich voort nu ze zo’n beetje aan het eind van haar JON-carrière deel uitmaakt van het jongerenbestuur, een hechte groep vrienden heeft gemaakt die ook samen in wisselende samenstelling met elkaar muziek maakt. Deze ervaringen hebben haar mede gevormd tot wie ze nu is.',
    name: 'Gini Westera',
    occupation: 'Moeder van Marit, altviolist in het JON vanaf 2016',
    age: '60',
  },
  {
    text:
      "Ik heb zelf tweemaal meegedaan in het Jong Metropole en deze ervaring heeft ervoor gezorgd dat ik zoveel meer kon leren, dan waar dan ook. De orkesten van NJON zijn educatief en geven je de ruimte je snel te ontwikkelen in een zeer korte tijd. Ook kun je snel bouwen aan een netwerk van collega's en professionals met wie je werkt.",
    name: 'Damyan Vermaas',
    occupation: 'Student Bastrombone aan Codarts',
    age: '20',
  },
  {
    text:
      'Zonder orkesten als het JON en het NJO mist Nederland een van de belangrijkste schakels richting het professionele muziekleven. NJON is onmisbaar voor de ervaring van jonge muzikanten!',
    name: 'Vincent Verhage',
    occupation: 'Dirigent HaFaBra, professioneel tubaist',
    age: '32',
  },
  {
    text:
      'Mijn eerste orkest ervaring heb ik opgedaan bij het NJO. Tot op de dag van vandaag herinner ik me de inspirerende repetities en concerten van elk project dat ik er gespeeld heb. Achteraf blijkt die periode de basis geweest waarvan ik mijn hele muzikale carrière geprofiteerd heb en dat overigens nog steeds doe. Het niveau van de orkestmusici, de dirigenten, de concertzalen, de programma’s, de sociale omgang etc etc hebben een ontzettend grote bijdrage geleverd aan mijn muzikale vorming als trompettist en later als dirigent. Het advies van de Raad van Cultuur (???) is dan ook totaal onbegrijpelijk en slaat de plank volledig mis. Hopelijk zal de beslissing met gezond verstand heroverwogen worden. We zijn toch geen cultuurbarbaren aan het worden in het zo cultuur rijke Nederland? Alle succes voor de toekomst NJON!',
    name: 'Bram Sniekers',
    occupation: 'Voormalig solo trompettist KMK, dirigent',
    age: '47',
  },
  {
    text:
      'As former member of the NJO, I feel I have to say that the Netherlands is such a lucky country to develop a project as NJON, with its complexity and versatility. Not only the Dutch students, but many young people from all around Europe can share a fantastic project with wonderful programme, team and artistic direction. I sincerely think that, by disappearing those youth orchestras, there would be many young students who would miss something in their education, while the society in general would for sure miss such a valuable actor among their culture field.',
    name: 'Guillem Serra',
    occupation:
      'Freelance Horn player, former student Master Maastricht Conservatorium and former NJO member',
    age: '25',
  },
  {
    text:
      'Ik heb zowel in het JON als in het NJO ontzettend belangrijke en onmisbare ervaring opgedaan wat betreft het functioneren en spelen in een professioneel orkest. Ik ben nu werkzaam bij o.a. de Nederlandse Bachvereniging en het Orkest vd 18e eeuw en ik kan me niet voorstellen hoe jonge mensen zich fatsoenlijk kunnen voorbereiden op de (al steeds kleiner wordende) beroepswereld. Deze orkesten zijn echt essentieel voor de ontwikkeling van toekomstige orkestmusici en het zou een erg domme actie zijn om deze orkesten de nek om te draaien. Het is zo belangrijk dat we (vooral in een land als Nederland) blijven investeren in dat wat de wereld mooi maakt. Neem deze orkesten hun steun NIET af alsjeblieft! “Before a child speaks, it sings. Before they write, they paint. As soon as they stand, they dance. Art is the basis of human expression.” (Citaat: Phylicia Rashad)',
    name: 'Mark Geelen',
    occupation: 'Historische Trompettist / Instrumentbouwer',
    age: '42',
  },
  {
    text:
      'Nooit de kwaliteit gehad om in zo’n mooi orkest te spelen. Maar het moge duidelijk zijn dat klassieke muziek van groot belang is in een gezonde maatschappij. Los van alle economische argumenten over de cultuursector mag het leven vooral ook leuk zijn, zo lijkt mij. Daar hebben we musici voor nodig! En publiek! Dus ga door met het opleiden van de beide groepen en het bouwen aan een goede infrastructuur van professionele muziekdocenten. Je kunt er met je kop niet bij: als je een financieel onafhankelijke sector wilt dan heb je top professionals nodig en top publiek. Deze kortetermijn onzin kun je dan dus echt niet gebruiken. Het zullen wel de regeltjes zijn, het toetsingskader of weet ik wat voor krampachtige argumenten. Diepe zucht.',
    name: 'Toine',
    occupation: 'Liefhebber van goeie muziek!',
    age: '31',
  },
  {
    text:
      'Deze jeugdorkesten zorgen ervoor dat de gedreven jeugd die daarin spelen zijn/haar talenten nog meer ontwikkelen. Een kans die niet altijd binnen elk orkest gerealiseerd kunnen worden, omdat daar al spelers zitten die een traject/opleiding hebben gehad. Via deze jeugdorkesten wordt ook de binding en het plezier in spelen vergroot. Er ontstaan mogelijkheden tot kansen die anders alleen blijven voor de mensen die deze connecties al hebben. Cultuur is belangrijk en heeft een zeer goed effect op de ontwikkeling van deze jonge mensen.  Ik had gewild dat ik in mijn jongere jaren had geweten over deze orkesten! Dan had ik er zeker bij willen zitten!',
    name: 'Martine',
    occupation: 'Leerkracht',
    age: '32',
  },
  {
    text:
      'Ik heb nog niet eens meegespeeld met het orkest, maar heb wel de afgelopen twee jaar auditie gedaan. Voor alle conservatoriumstudenten zal er in hun toekomst wel ergens een auditie gedaan moeten worden. Dat er in Nederland en België een instituut is dat de studenten een auditie laat voorbereiden is geweldig. Ik ervaarde de spanning die bij een auditie komt kijken. Na de auditie krijg je videomateriaal van je eigen auditie met feedback op de auditie van de jury, mensen die jou niet kennen (i.t.t. je docent). Dit is allemaal zeer leerzaam voor mij geweest. De eerste keer werd ik niet aangenomen, heb hiervan geleerd en hard gewerkt om de tweede keer wel aangenomen te worden. Ik keek ernaar uit mee te spelen deze lente of zomer, maar dat kan helaas niet (jammer maar pindakaas). Ik keek ernaar uit mensen te leren kennen van ándere Conservatoria en kennis en muziek en plezier uit te wisselen.',
    name: 'Rodo Nijhoff',
    occupation: 'Student Altviool HKU (2e jaar)',
    age: '25',
  },
  {
    text: 'Deze jeugdorkesten zijn onmisbaar voor de toekomst!',
    name: 'Anne Oelers',
    occupation: 'Freelance trompettist',
    age: '30',
  },
  {
    text:
      'It makes you develop as a musician and it prepares you at a professional level which you will be confronting afterwards. Meeting people and friends and being able to play together makes it even more motivating!',
    name: 'Clara Garcia',
    occupation: 'Viola student at the Royal Conservatory in The Hague',
    age: '23',
  },
  {
    text:
      'The experiences of NJO are some of the best memories I have of my life! Always playing with the great players, that later became friends and with professional teachers and conductors helping us to become better musicians and persons! This initiatives give as experience for our professional life preparing us for the future.',
    name: 'Marta Vilaça',
    occupation: 'Bachelor student at Conservatorium van Amsterdam',
    age: '20',
  },
  {
    text:
      'Het NJO is door het hoge en professionele niveau een van de allerbelangrijkste omgevingen om je als muzikant in Nederland te kunnen ontwikkelen!',
    name: 'Wilma de Bruijn',
    occupation: 'Student cello aan het Koninklijk Conservatorium, Den haag',
    age: '22',
  },
  {
    text:
      'Juist een orkest als het NJON is een kraamkamer voor talent in de klassieke muziek. Daarin moeten we zeker investeren om Nederland een land van kunst en cultuur te laten zijn. Het goed kunnen musiceren in een orkest is één groot leerproces, en dus een en al een kwestie van educatie. Als we dat niet meer kunnen zien, dan is er iets grondig mis met ons onderscheidingsvermogen.',
    name: 'Liesbeth Feikema',
    occupation: 'Onderzoeker',
    age: '53',
  },
  {
    text:
      'Als jongen van 14 kwam ik voor het eerst bij het JON. De jaren die ik er sindsdien heb gespeeld hebben ontzettend veel betekend voor mij, zowel op muzikaal als sociaal gebied. Ik heb er enorm veel geleerd over samen spelen in een grote groep en muziekstukken op hoog niveau leren doorgronden. Het is de perfecte omgeving voor jonge musici om kennis te maken met het orkestspel en zich daarin te ontwikkelen. Het is ook een hele unieke kans voor jonge musici om contacten te leggen met leeftijdsgenoten in een bijzondere omgeving die je nergens anders vindt. De orkesten van het NJON zijn essentieel voor de ontwikkeling van jonge musici en mogen absoluut niet verdwijnen!',
    name: 'Mischa Niemel',
    occupation: 'Contrabassist bij het JON',
    age: '19',
  },
  {
    text:
      'De NJON is een onmisbaar onderdeel van de Nederlandse muziekwereld. Onontbeerlijk voor orkestmusici in spe om te leren hoe een orkest werkt. Als je de NJON gaat afzagen is dat een verlies dat  gevolgen zal hebben voor de kwaliteit van de klassieke muziek in Nederland. Helaas blijft het niet bij de kwaliteit, ook wordt het web kapotgemaakt, aangezien de NJON een cruciaal opstapje is in de infrastructuur van klassieke muziek die over vele jaren is opgebouwd. Werkelijk onmisbare en waardevolle instanties!  Je kan ook niet zomaar jong oranje verwijderen omdat het niet genoeg vernieuwd...  Staat bovendien internationaal ook heel lelijk als je je succesvolle uithangbord voor jonge musici gaat wegsnijden.  Zowel het JON als het NJO hebben mij enorm geholpen om mijn doelen te kunnen realiseren!!',
    name: 'Jonathan Wegloop',
    occupation:
      'Hoornist Mahler Chamber Orchestra, Luzern Festival Orchestra, WDR symfonie orkest',
    age: '34',
  },
  {
    text:
      'Bij het NJO leerde ik om mijn vaardigheden als goede muzikant te ontwikkelen.  NJO heeft een zeer hoog niveau van spelen en daardoor leer ik veel van mijn jonge muzikale collega’s.',
    name: 'Wilker Paredes',
    occupation: 'Student altviool in CODARTS Rotterdam',
    age: '23',
  },
  {
    text:
      'Mijn zoon ging als 14 jarige alleen naar het JON. Hij zei bij thuiskomst, "eindelijk heb ik ze gevonden, er zijn nog meer mensen van mijn leeftijd die echt samen muziek willen maken!" Hij maakt er vrienden voor het leven! Hij groeide ieder jaar, begon als muzikant, deed taken voor het bestuur, werd uitgedaagd om te arrangeren en dirigeren.  Hij heeft deelgenomen aan masterclasses van bevlogen musici die hem steeds dat extra zetje gaven. Door zijn deelname aan het jong Metropool is hij tijdens zijn studie zich extra gaan verdiepen in de Jazz.  Zelf heb ik ook genoten van vele concerten. In de buitenlucht, North Sea Jazz, maar ook in het concertgebouw of op het grachtenfestival. En steeds is er opvallend veel jeugd aanwezig. Mijn zoon heeft het NJO nog steeds nodig als goede basis om straks zijn droom waar te kunnen maken. Ik hoop alleen niet dat dit in het buitenland zal zijn omdat wij in Nederland dit prachtig stuk cultuur zullen moeten missen!',
    name: 'Marianne',
    occupation: 'Moeder van een zeer enthousiaste en bevlogen musicus in spe.',
    age: '',
  },
  {
    text:
      'Tussen 2015 en 2019 heb ik deel uit mogen maken van het JON. Dit waren vier jaren waarin ik me als musicus ontzettend heb kunnen ontwikkelen. Hoewel ik uiteindelijk de beslissing heb genomen om niet professioneel musicus te willen zijn, blijven de ervaringen die ik bij het JON heb opgedaan altijd van waarde en heb ik nog regelmatig plezier van alles wat ik heb geleerd over muziek en orkestspel.',
    name: 'Evelien Müller',
    occupation: 'Student Radboud Universiteit',
    age: '22',
  },
  {
    text:
      'Ik heb gespeeld in het JON en wil graag ook in het NJO spelen. Van het spelen in orkesten leer je zo ontzettend veel. Het is heel belangrijk voor de toekomst van iedere muzikant. Je bouwt kennissen op, leert stukken kennen en je groeit snel. Het is belangrijk voor jongeren en conservatorium studenten om ervaring op te bouwen voor de toekomst en dat gaat hardstikke goed bij NJON.',
    name: 'Sofie Booy',
    occupation: 'Student altviool aan Codarts',
    age: '21',
  },
  {
    text:
      'Het NJON is een cruciale schakel tussen muziekopleiding en beroepspraktijk. De kennis, ervaring en contacten die ik tijdens de vijf jaar dat ik in het NJO heb gespeeld heb opgedaan zijn onmisbaar geweest voor mijn muzikale ontwikkeling. Er is geen andere plek in Nederland waar jonge musici zo intensief kunnen samenwerken met vooraanstaande dirigenten, componisten, coaches en solisten, uitgebreid ervaring kunnen opdoen in diverse ensembles en genres (van barok met authentiek instrumentarium tot gloednieuwe composities, en van grote romantische orkestwerken tot samenwerkingen met pop en jazz), waar ze hun netwerk kunnen opbouwen en ook nog eens met enorm veel plezier en passie kunnen werken aan hun vakmanschap, orkestspel en muzikaal inzicht. De kwaliteit en de noodzaak van het NJO staat voor mij buiten kijf en het is voor mij onverteerbaar dat de Raad van Cultuur geen oog heeft voor de fundamentele rol die het NJO heeft in het Nederlandse muzieklandschap.',
    name: 'Tiara Kobald',
    occupation: 'Freelance violiste, en student orkestdirectie en compositie',
    age: '29',
  },
  {
    text:
      'Ik kwam als 14-jarige voor het eerst bij het JON. Bij de eerste repetitie was ik diep onder de indruk van alles wat er om me heen gebeurde. Ik had nog nooit zoiets meegemaakt, onderdeel te zijn van zo’n mooie grote klank, voortgebracht door een groep enthousiaste jongeren met dezelfde passie voor muziek. Die dag besloot ik dat ik violist wilde worden. Een paar jaar later stroomde ik door naar het NJO, een leerschool die perfect aansloot op het JON, waar ik nog meer bijzondere en belangrijke lessen heb geleerd over muziek maken en samenwerken. Het NJON was voor mij de doorslaggevende stimulans voor een toekomst in de muziek, en daarin ben ik zeker niet de enige.',
    name: 'Valentine Blangé',
    occupation: 'Student viool aan Koninklijk Conservatorium, Den Haag',
    age: '',
  },
  {
    text:
      'Toen ik in 2016 begon heeft het JON voor mij de deuren opengezet richting de muziekwereld! Zowel het JON als NJO speelt een ontzettend belangrijke rol in de ontwikkeling van muzikanten en daarom is het NJON onmisbaar! Ook voor mij was het JON een hele goede plek om mijzelf te ontplooien in het orkest en hoop dat de NJON nog lang mag blijven bestaan!',
    name: 'Camiel Lemmens',
    occupation: 'Hoornstudent aan het Conservatorium Maastricht, JON orkestlid',
    age: '20',
  },
  {
    text:
      'Als ouder kan ik zien hoeveel mijn kind geniet als hij kan spelen met dit fantastische orkest, dit moet blijven!',
    name: 'G. Wassenaar',
    occupation: 'Directeur Wassenaar Inspecties',
    age: '55',
  },
  {
    text:
      "Zonder de 3 jaar in het JON en 5 projecten met het NJO, was ik niet geweest waar ik nu ben als musicus. Beide orkesten hebben me enorm veel geleerd, me meer zelfvertrouwen gegeven en - niet ombelangrijk - mijn netwerk en kansen in 'het veld' enorm vergroot. Ik had de ervaringen in deze orkesten voor geen goud willen missen en vind het dan ook uiterst belangrijk dat het NJON kan blijven voortbestaan, zodat ook in de toekomst zo veel mogelijk musici hier ervaring kunnen opdoen en kunnen genieten en leren van op hoog niveau samen muziek maken.",
    name: 'Rosanne Sloots',
    occupation: 'Afgestudeerd Altviool, Koninklijk Conservatorium',
    age: '24',
  },
  {
    text:
      'Het NJON komt het dichtste in de buurt van een professioneel klassiek orkest, onmisbaar geweest voor mij als conservatorium student, maar ook heeft het mij veel ervaring en contacten laten opdoen die voor mij nog tot ver na mijn studie hebben geholpen. Het NJON heeft mij de mogelijkheid gegeven onmisbaar repertoire te laten uitvoeren en is alles wat het educatief programma, die de meeste conservatoria in Nederland missen, af maakt.',
    name: 'Rachel Daniels',
    occupation: 'Student cello / freelance musicus',
    age: '24',
  },
  {
    text:
      'Geweldig veel geleerd bij de diverse nationale jeugdorkesten. Niet alleen op muzikaal vlak, maar je komt met zoveel verschillende mensen in contact en daar leer je ook van. Muziek als bindmiddel ten top',
    name: 'Paul van Aubel',
    occupation: 'Saxofonist en docent geschiedenis',
    age: '40',
  },
  {
    text:
      'Ik heb zelf nog nooit meegespeeld in orkesten NJON. Ik ken echter wel heel veel mensen met ervaringen in 1 van de orkesten. Ik kwam pas achter het bestaan van het JON toen ik te oud was om me op te geven. Sinds ik dit jaar het conservatorim begonnen ben wil ik wel heel graag een keer meedoen met NJO. Door de mensen die ik heb gesproken weet ik dat het één van de beste leerervaringen mogelijk is voor een beginnend professioneel muzikant.',
    name: 'Sander Bos',
    occupation: 'Student klassiek Harp aan Codarts Rotterdam',
    age: '23',
  },
  {
    text: 'Zonder basis geen top, zonder jeugd geen toekomst',
    name: 'Wietze Eizenga',
    occupation: 'Amateur',
    age: '62',
  },
  {
    text:
      'Ik heb gezien hoe het NJON mijn vriendin de kans heeft gegeven om zichzelf muzikaal maar ook op breder niveau te ontwikkelen. Zonder de steun en de kansen die dit orkest biedt aan jonge muzikanten gaat er veel verloren. Een klassiek jeugdorkest is op zichzelf al waardevol, maar het biedt ook een mooie weg voor muzikanten om door te stromen naar de professionele klassieke muziekwereld. Waarom bezuinigen op zoiets moois?',
    name: 'Sam',
    occupation: 'Student Geschiedenis',
    age: '19',
  },
  {
    text:
      'Bij het JON leer ik super veel over muziek! Naast dat we prachtige klassieke stukken spelen, spelen we ook nieuwe (moderne) werken (wat voor mij totaal nieuw was), krijgen we workshops (over bijvoorbeeld gamemuziek, alexander techniek, mind & body) en leer je om echt samen muziek te maken. Bovendien leer je ook nog eens goede vaardigheden, zoals doorzettingsvermogen, discipline en vrienden maken!',
    name: 'Noa Pierik',
    occupation: 'Altviolist bij het JON',
    age: '18',
  },
  {
    text:
      'Simpel gezegd: in mijn 4 jaren in het JON is er een onmisbare basis gelegd. Zonder deze ervaringen was ik absoluut niet geweest waar ik nu ben! Het kunnen opdoen van deze ervaringen is van essentieel belang voor iedere jonge musicus die de ambitie heeft in een professioneel symfonieorkest te willen spelen. Om de kwaliteit van de komende generaties musici te waarborgen moeten deze orkesten vanzelfsprekend blijven bestaan!',
    name: 'Mechthild Drop',
    occupation:
      'Trompettist Beethoven Orchester Bonn - Masterstudent Folkwang Universität der Künste Essen',
    age: '25',
  },
  {
    text:
      'Het NJO heeft een heel belangrijke rol gespeeld in mijn ontwikkeling als muzikant. Het begint al bij het auditeren. Het NJO zorgt voor een veilige omgeving waar je leert hoe audities in zijn werk gaan. Daarna bieden ze fantastische projecten met een enorm professionele ondersteuning aan. Het NJO is essentieel geweest voor mijn muzikale groei, orkestervaring maar vooral ook zelfvertrouwen. Wat het NJO verwezenlijkt is uniek. De variëteit aan projecten op een enorm hoog niveau is ongezien en voor mij enorm waardevol.',
    name: 'Willem-Jan Hendrickx',
    occupation: 'Leraar/dirigent/trompettist',
    age: '25',
  },
  {
    text:
      'Het is een onmisbaar stuk van je opleiding en dè plek om samenspel ervaring op te doen. Daarnaast leer je heel veel mensen kennen waarmee je een netwerk kunt creëren, ook erg belangrijk! Zonder mijn ervaringen in het JON en NJO had ik nooit bereikt waar ik nu ben.',
    name: 'Rick Huls',
    occupation:
      'Soloklarinettist Nedpho en hoofdvakdocent klarinet aan het Koninklijk Conservatorium te Den Haag',
    age: '50',
  },
  {
    text:
      'Young people should be able to explore music and the arts more freely. More art makes for a better society.',
    name: 'Michael Boggia',
    occupation: '',
    age: '19',
  },
  {
    text: 'De NJON is voor jeugdige muziekanten heel belangrijk',
    name: 'Ricardo Meye',
    occupation: 'Gepensioneerd',
    age: '73',
  },
  {
    text:
      'Bij het JON pas echt in een orkest leren spelen. Hier heb ik onvergetelijke ervaringen opgedaan en is mijn passie voor de muziek pas echt opgelaaid. Voor mijn gevoel zijn deze orkesten onmisbaar voor de jeugd. Het is zo moeilijk jongeren aan het spelen te houden, en om dan dé leerschool en springplank binnen de orkestwereld weg te nemen betekent naar mijn mening een enorme terugslag in talentontwikkeling.',
    name: 'Nicolien Verburg',
    occupation: 'Student geneeskunde en amateur celliste',
    age: '27',
  },
  {
    text:
      'Het deelnemen aan tot nu toe nog maar één concertreeks heeft mij nu al veel meer geleerd over samenspel en het bespelen van mijn instrument dan welke eerdere ervaring dan ook. Het niveau en enthousiasme bij alle leden van het JON is ongeëvenaard, waardoor je alles uit jezelf wilt halen en enorm snel groeit. Bezuinigen op de jeugd ontwortelt de Nederlandse klassieke muziekindustrie van morgen.',
    name: 'Wiek van Venetië',
    occupation: 'Contrabassist in het JON',
    age: '18',
  },
  {
    text:
      'Het begin van mijn prachtige carriere. Alle contacten die ik nu heb kan ik herleiden naar mijn periode mijn het NJO van 2001-2005. Een geweldige tijd waar ik met veel plezier vaak aan terugdenk. De geweldige ervaringen op en naast het podium doe ik daar heb mogen opdoen hebben mij gebracht waar ik nu ben.  Zonder het NJO had ik dit letterlijk niet gered! De jeugdorkesten in Nederland zijn DE bakermat van de musici en de orkesten in NL. Schaf je dit af, raak je de muziekwereld van de toekomst in haar Ziel!!',
    name: 'Jeroen Schippers',
    occupation: 'Solo-trompettist Marinierskapel',
    age: '37',
  },
  {
    text:
      'Als oud lid van het NJO heb ik vele projecten in binnen- en buitenland mogen doen. De gehele basis van het spelen in een orkest heb ik te danken aan het NJO. In het NJO heb ik zo veel ontzettend geleerd, mede door de fantastische musici en de geweldige coaches. Vanuit het NJO heb ik meerdere malen als uitwisselingsstudent mogen deelnemen aan projecten van de andere Nationale Jeugdorkesten van Europa. Ook tijdens deze projecten heb ik zo veel geleerd en zonder deze ervaringen zou ik niet de violist zijn die ik vandaag ben. Ik denk nog vaak met enorm veel enthousiasme terug aan mijn geweldige tijd met NJO. Ik dank het NJO hiervoor! Ik wens deze ervaringen ook aan de studenten van nu toe en ik zou het eeuwig zonde vinden voor de Nederlandse cultuur als het NJON zou ophouden met bestaan.',
    name: 'Jouko Kuijk',
    occupation: 'Freelance violist',
    age: '31',
  },
  {
    text:
      'Het meespelen in het NJO was voor mij een van de mooiste en leerrijke ervaringen die ik heb mogen meemaken. Dit gun ik elke jonge musicus en mag dan ook onder geen enkele voorwaarde verdwijnen.',
    name: 'Martijn Pepels',
    occupation: 'Dirigent',
    age: '41',
  },
  {
    text: 'Zonder jeugd geen toekomst!',
    name: 'Valdemar Semedo Moreira',
    occupation: 'Audicien',
    age: '47',
  },
  {
    text:
      'Via een regionaal jeugdorkest als de Vuurvogel, naar JON, NJO en dan rijp voor de kwalitatief hoogstaande orkesten die ons land rijk is. Daar MAG niet een schakel ontbreken.',
    name: 'Albert Dam',
    occupation: 'dirigent Vuurvogel Jeugdorkest, docent Muziek V.O.',
    age: '47',
  },
  {
    text:
      'Het NJON is voor mij en vele anderen een plek geweest waar ik heel veel geleerd heb en het plezier van samenspelen heb ontdekt. Onmisbaar in het opleiden en aanmoedigen van jonge talenten.',
    name: 'Julia Kleinsmann',
    occupation: 'Freelance violist en student CvA',
    age: '25',
  },
  {
    text:
      'Het ervaren en beleven van het ‘top-repertoire’ samen met andere jeugdige top-talenten is onontbeerlijk in de ontwikkeling van een beroepsmuzikant.  Voeg daarbij een gerenommeerd dirigent en er is een geweldige kweekschool voor topmusici. Het NJON mag daarom zeker niet ontbreken in de cultuursector.',
    name: 'Christiaan Janssen',
    occupation: 'Componist',
    age: '',
  },
  {
    text:
      'Auditeren, groepsrepetities van professionals in jouw instrument groep, workshops, professionele houding aannemen, dagenlang reperteren onder leiding van gerenommeerde dirigenten, spelen in de betere zalen, optreden voor groter publiek, samenspelen met gelijkgestemden en ontelbare indrukken en verhalen. Allemaal dingen die ik gemist zou hebben. Ik weet ook niet of ik ooit gedacht zou hebben aan een conservatorium-studie als ik niet van jongs af aan (14) dit allemaal mee had kunnen maken. Zo veel ervaringen die je nergens anders (maar dan ook echt, nergens anders) kunt krijgen!! En dan heb ik het nog niets eens over het sociale aspecten de overstap naar het professionele leven.',
    name: 'Erik Klinkhamer',
    occupation: 'Docent Muziek op een MBO',
    age: '36',
  },
  {
    text:
      'De NJO tournees die ik mee heb mogen maken waren stuk voor stuk onvergetelijke en onmisbare ervaringen... Turangalila en de Wonderbaarlijke Mandarijn met Reinbert, Mahler 6 met Wigglesworth... Het is ook nu nog steeds enorm leerzaam en inspirerend om al het nieuwe talent te mogen beluisteren als jurylid tijdens audities en groepsrepetities. De Raad voor Cultuur vindt dat er te weinig innovatie is? Hoeveel nieuwe publieksconcepten zijn er de laatste jaren wel niet met succes uitgeprobeerd tijdens de NJO muziekzomer, jonge artists en composers in residence, en nog eens wat: een fantastisch aanbod voor het publiek in de provincie Gelderland. Kan nog wel even doorgaan, maar dit zou toch boven iedere twijfel verheven moeten zijn? Het is waar dat er steeds minder banen zijn in Nederland, maar er wordt toch ook in topsport / teamsport geinvesteerd? Kan iemand me vertellen hoeveel overheidsgeld er naar jong sporttalent gaat?',
    name: 'Twan Dubbers',
    occupation: 'Bastrombonist Residentie Orkest',
    age: '44',
  },
  {
    text:
      'Talent moet groeien en bloeien. Jeugdorkesten zijn de humus voor cultuur.  Zonder vruchtbare bodem ontkiemt talent niet.  Daarnaast heeft jeugd gelijkgestemden nodig om elkaar energie te geven.',
    name: 'Johan Meesters',
    occupation:
      'Voorzitter OMF (Organisatie van Muziekverenigingen in Fryslân)',
    age: '51',
  },
  {
    text:
      'Ik ben zelf geen professioneel musicus, maar ik heb in diverse jeugd- en studentenorkesten gespeeld. Ik heb ontzettend veel geleerd in die periode. Ik heb geleerd hoe een partij in te studeren, ik heb geleerd hoe samen te spelen, ik heb inzicht gekregen in de structuur van de werken die we gespeeld hebben. Ik heb audities moeten doen en heb geleerd me hierop voor te bereiden. Dit moet van onschatbare waarde geweest zijn voor mijn medeorkestleden die wel uiteindelijk professioneel geworden zijn. De bewering dat de jeugdorkesten van NJON te weinig een rol in de educatie spelen (wat een belangrijke reden was om de subsidie te stoppen) is ofwel een flagrante leugen ofwel getuigt van complete onwetendheid. Juist deze orkesten zijn van onmisbaar belang in de educatie van jonge, aankomende musici! Ik roep op deze beslissing terug te draaien!',
    name: 'Bert Lindenhovius',
    occupation: 'Postdoc, Tulane University, New Orleans',
    age: '35',
  },
  {
    text:
      'In het JON heb ik dingen geleerd waarvan ik al 20 jaar plezier en profijt heb. Uiteraard vioolspelen in groepsverband, goed luisteren, orkestspel. Liefde en kennis voor en over muziek. Concentratie, discipline. Vele waardevolle vriendschappen die tot op de dag van vandaag levend zijn. En vooral dat samenspel nog meer kan opleveren dan de som der delen. Ik ben uiteindelijk een ander beroep gaan uitoefenen maar ook in mijn huidige werk als neuroloog gebruik ik dagelijks de skills die ik in het JON heb opgedaan. Ik gun ieder kind een dergelijke leerzame en inspirerende ervaring.  Laat dit schitterende instituut niet verloren gaan!',
    name: 'Judith Schouten',
    occupation: 'Neuroloog, amateur violist',
    age: '40',
  },
  {
    text:
      'NJO is een belangrijk orkest voor muziekstudenten in Spee! Mendig musicus is ooit in het NJO begonnen. Het is ondenkbaar dat het NJO ophoud te bestaan!',
    name: '',
    occupation: '',
    age: '',
  },
  {
    text:
      'NJON was absoluut ONMISBAAR voor mijn carrière en mijn ontwikkeling als mens. Meer kwaliteit en passie op een kluitje heb ik nergens anders ooit gezien. Nederland kan echt niet zonder NJON!!!!',
    name: 'Andrea Vasi',
    occupation: 'Pianist',
    age: '31',
  },
  {
    text:
      "I've been a member of NJON in my youth, this international experience at the highest artistical level has meant a lot in my learning process.",
    name: 'Elisa Schack',
    occupation:
      'Professional musician, violinist member of Italian national Radio Symphony Orchestra - RAI',
    age: '',
  },
  {
    text:
      'Mijn dochter speelt in het NJON en wij, en vele anderen met ons, hebben in de loop der jaren genoten van deze jonge talentvolle musici. Ik heb er jongeren zien groeien, zij vormen één groot familie! Zij doen ervaring op zowel in het binnen-, als buitenland. Met veel trots hebben wij vorige seizoen onze eigen NJON bewonderd in het Rudolfinum in Praag! Het NJON moet blijven zodat deze jonge talenten op niveau muziek kunnen blijven maken en door kunnen ontwikkelen voor hun carrière als muzikant.',
    name: 'Etienne',
    occupation: 'Pedagogisch coach',
    age: '43',
  },
  {
    text:
      'Enorm veel geleerd van meerdere NJO projecten! Onmisbaar, essentieel voor de ontwikkeling van een conservatorium student.',
    name: 'Anna Jurriaanse',
    occupation: 'Student altviool Koninklijk Conservatorium Den Haag',
    age: '22',
  },
  {
    text:
      'Het NJO is onmisbaar voor muzikanten in wording. Het geeft hen de kans om ervaring op te doen en te groeien.',
    name: '',
    occupation: 'Student hobo aan het conservatorium van Brussel',
    age: '',
  },
  {
    text:
      "Ikzelf ben op 6-jarige leeftijd begonnen met piano, 9 was ik op de blokfluit, 12 op de hoorn en 18 op de bariton-tuba. Die kans krijg je alleen in een kweekvijver. NJON is zo'n broodnodige kweekvijver. Zonder de jeugd stopt uiteindelijk de muziek. Don't stop the music! Ik ben zelf al ruim 40 jaar actief in Zaate Hermenie De Batjakkers, 9 jaar in Joekshermenie Limburg Orange en 6 jaar in dans/swing/etcetera-orkest Mixed Harmony Maastricht en al ruim 46 jaar actief musicerend.",
    name: 'Guido Herben',
    occupation: '(Documentair) Informatiekundige werkzaam als lab-ICTer',
    age: '52',
  },
  {
    text:
      'One of the finest programs of its kind in the world. An invaluable asset to the world of classical music for professionals and appreciators alike.',
    name: '',
    occupation: 'BM String Performance Student',
    age: '20',
  },
  {
    text:
      'NJO was a fantastic experience I had the opportunity to be apart of many times! More youth orchestras need to exist! We should not tear down the ones that already function and give tremendous opportunities to students from all types of nationalities and backgrounds.',
    name: 'Rita Proença',
    occupation: 'Student Viola CvA',
    age: '',
  },
  {
    text:
      'Mijn dochter heeft zeer veel geleerd in jeugdorkest en is ook opengebloeid in deze jaren!',
    name: 'Michele Quagliara',
    occupation: '',
    age: '52',
  },
  {
    text:
      'Het NJON is onmisbaar voor het ontplooien van toekomstige topmusici.',
    name: 'Jacob Hiemstra',
    occupation: 'Bas-tubaïst',
    age: '36',
  },
  {
    text:
      'Mijn tijd bij het JON is voor mij zeer waardevol geweest en in die lijn is het NJO nu ook erg belangrijk voor mij, voor mijn ontwikkeling als orkestmusicus maar ook voor het maken van vriendschappen en het leggen van contacten in de muziekwereld. Ik koester waardevolle herinneringen aan alle projecten bij het NJON en kijk reikhalzend uit naar de dag waarop we weer samen kunnen leren en musiceren. Dat de toekomst van het NJON misschien wel onzeker is, is onbegrijpelijk: deze leerschool voor orkestspel specifiek en klassiek musicus zijn in het algemeen is fundamenteel voor de Nederlandse muziek- en orkestcultuur. Daarom steun ik van harte dit initiatief en hoop ik dat velen met mij staan.',
    name: 'Ester Potjes',
    occupation:
      'Student altviool aan HKU Utrechts Conservatorium, voormalig JONer en huidig NJO-lid',
    age: '22',
  },
  {
    text:
      'Bij het NJO heb ik, naast levenslange vriendschappen, onmisbare ervaring in het orkestspel opgedaan, waardoor ik beter wist wat ik wou en groeide in het vioolspelen. Het NJO is een essentiële kweekvijver in de overgang van student naar professionele musicus. Laat het NJO doen waar het goed in is!',
    name: 'Coraline Groen',
    occupation: 'Violist in het Concertgebouworkest',
    age: '24',
  },
  {
    text:
      'Als er een moment in mijn leven is, dat ik zou kunnen zien als een heus keerpunt, is het wel het moment dat ik werd aangenomen bij het JON. Geen andere instantie heeft mij zo veel geleerd, en zo veel voor mij mogelijk gemaakt. Zonder dit prachtige jeugdorkest zou ik nooit zo ver zijn gekomen in de professionele muziekwereld als ik nu ben. Het heeft een grote liefde voor klassieke muziek op laten waaien, waar ik de rest van mijn leven van kan genieten. De NJON hebben recht op de BIS, zodat ze meer jonge talenten verder kunnen helpen, en kunnen onderwijzen op het gebied van klassieke muziek.',
    name: 'Niels Jacobs',
    occupation: 'Student trombone aan het CvA, beroepsmusicus',
    age: '21',
  },
  {
    text:
      'Lees het stuk in de Groene Amsterdammer, vrijdag 4 juli 2008. Luister naar Radio Doc, NPO Radio 1, zondag 21 juni 2020, 21.00 uur. Waarom is Maxima een voorstander van muziek in de klas? Muziek is het zout in de pap! Muziek is zoveel meer dan een aardighied. Je kunt er niet alleen van genieten, maar het beoefenen ervan is een uitdaging en leuk! Blij was ik, toen mijn zoon koos voor muziek als eindexamenvak. Het is een expressiemiddel. Het is zo belangrijk jonge mensen kennis te laten maken met de mogelijkheden van muziek. En dat geldt voor het hele spectrum, waar ook klassieke muziek toe behoort. Joe Jackson is niet voor niets geïnspireerd geweest door Beethoven en Grieg. Laat jonge mensen struinen en ontdekken, dan vinden ze vanzelf wat bij hen past. Laat dat niet over aan beleidsmakers. Laten die een samenleving met ontwikkelde mensen voorstaan, waar niet alleen de in geld uit te drukken waarden wegen. Alles van waarde is weerloos, was het niet zo?',
    name: 'Mirjam Goddijn',
    occupation: 'Apotheker',
    age: '54',
  },
  {
    text:
      'Ik heb er zelf een aantal keer meegespeeld en je leert hier zoveel en leert zoveel nieuwe mensen kennen. Onmisbaar orkest voor de jeugd die orkest en ensemble ervaring op wil doen!!',
    name: 'Hanna Koens',
    occupation: 'Violiste',
    age: '42',
  },
  {
    text:
      "As a former member of NJO I can't stress enough the quality and excellence of their orchestra and ensemble programs. They are such a valuable institution for young musicians in the Netherlands and give us remarkable assets for our future career. This institution is essential for music education and aspiring young musicians, providing us top scene conductors, a very professional staff team, on-field orchestra experience and colleagues and friends which go beyond NJO tours and programs. Personally, NJO was very influential during my academic education and my membership still plays a very important role on my Curriculum. Please allow them to keep contributing for so many young musicians lives!",
    name: 'Rita Mendes',
    occupation: 'Clarinet Player, Professional',
    age: '25',
  },
  {
    text:
      "Het is onvoorstelbaar dat in ons land een nationaal jeugdorkest, dat een voorname rol speelt bij de vorming van toekomstige musici, het stimuleren van hun muzikale talent, en het bieden van een podium aan deze jonge jeugdmusici, de das omgedaan wordt. Topmusici zijn het, die er spelen, die keer op keer topprestaties neerzetten. Het belang van NJON voor de gehele Nederlandse cultuursector, maar ook de gehele Nederlandse samenleving is van onschatbare waarde en wordt ernstig onderschat. Deze jonge mensen zijn de toekomstige spelers in onze nationale orkesten, en verdienen het om zich te kunnen ontplooien in de bloei van hun leven, om later, het Nederlandse publiek te kunnen voorzien van de mooiste klanken, gecomponeerd door 's werelds grootste meesters. Dit besluit zal uiteindelijk bijdragen aan een verdere verschraling, versimplificering en verval van het Nederlandse cultuurlandschap. Dit kunnen en mogen we niet op ons geweten hebben. Daarom svp dit besluit herzien!",
    name: 'ir. L. Niemel',
    occupation: 'Ouder jeugdspeler JON',
    age: '53',
  },
  {
    text:
      'Ik ben twee jaar lid geweest van het Nationaal Jeugdorkest. Ik heb er ontzettend veel geleerd over samenspel op allerlei manieren*, en natuurlijk ook vriendschappen gesloten en repertoire van de bovenste plank gespeeld. Het NJO is van onschatbare waarde geweest voor mijn ontwikkeling als altviolist. Daarnaast heb ik zelf kunnen zien hoe de muziek van het NJO voor zoveel genietende gezichten kan zorgen - zowel in het skatepark als het Concertgebouw.',
    name: 'Ursula Skaug',
    occupation:
      'Student Altviool aan het Koninklijk Conservatorium Den Haag, beroepsmusicus',
    age: '23',
  },
  {
    text:
      'Er zijn maar weinig plekken waar ik zoveel heb geleerd als bij het Nationaal Jeugdorkest (NJO). Ik heb er jarenlang met enorm veel plezier gespeeld en een grote variëteit aan muziek mogen uitvoeren, van oude muziek tot jazz en pop. Het NJO heeft mij mede gevormd tot wie ik ben als mens en musicus: veelzijdig, breed georiënteerd, zelfverzekerd en een echte teamspeler.  Dat de NJON volgend de Raad voor Cultuur "te weinig doen aan educatie" vind ik dan ook verbazingwekkend en lijkt op niets te zijn gebaseerd. De NJON vormen een onmisbaar onderdeel van de (klassieke) muziekopleiding in Nederland, en dragen daarmee bij aan het fundament van de Nederlandse muziekcultuur.',
    name: 'Saskia Frijns',
    occupation: 'Freelance violiste',
    age: '27',
  },
]

const Item = ({ text, name, occupation, age }) => (
  <div
    className={`text-white grid-item ${
      text.length > 700 ? 'grid-item--width2' : ''
    }`}
  >
    <div className="p-1">
      <div className="p-2 bg-dark">
        <p
          className="lead"
          style={{ marginBottom: name || occupation ? 20 : 0 }}
        >
          {text}
        </p>
        {(name || occupation) && (
          <div className="lead text-right" style={{ fontSize: '1rem' }}>
            {name && name + (age ? ` (${age})` : '')}
            {occupation ? <br /> : undefined}
            <span className="font-italic">{occupation}</span>
          </div>
        )}
      </div>
    </div>
  </div>
)

class Testimonials extends React.Component {
  constructor(props) {
    super(props)

    this.state = { sortByTime: true }

    this.itemsByTime = [...ITEMS]
    this.itemsByTime.reverse()
    this.itemsByName = [...ITEMS]
    this.itemsByName.sort((a, b) => {
      a.sortName = a.name
      if (a.sortName === undefined) {
        a.sortName = 'ZZZ'
      }
      b.sortName = b.name
      if (b.sortName === undefined) {
        b.sortName = 'ZZZ'
      }
      if (a.sortName < b.sortName) {
        return -1
      }
      if (a.sortName > b.sortName) {
        return 1
      }
      return 0
    })
  }

  componentDidMount() {
    this.iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
      },
    })
  }

  componentDidUpdate() {
    this.iso.layout()
  }

  render() {
    let { intl } = this.props

    return (
      <Container>
        <Row className="pt-3" noGutters={true}>
          <Col className="text-right" xs={12}>
            <Link to="/submit" className="mr-sm-1 mb-xs-1">
              <Button variant="primary">
                {intl.formatMessage({ id: 'index.testimonials.short-submit' })}
              </Button>
            </Link>
            <br className="d-sm-none" />
            <Button
              variant="secondary"
              onClick={() => {
                this.setState({ sortByTime: !this.state.sortByTime })
              }}
            >
              {intl.formatMessage({ id: 'index.testimonials.sort-by' })}{' '}
              {intl.formatMessage({
                id: `index.testimonials.sort-by-${
                  this.state.sortByTime ? 'date' : 'name'
                }`,
              })}
            </Button>
          </Col>
        </Row>
        <Row className="pb-3 grid">
          <div className="grid-sizer" />
          {(this.state.sortByTime ? this.itemsByTime : this.itemsByName).map(
            (item, idx) => (
              <Item
                text={item.text}
                name={item.name}
                age={item.age}
                occupation={item.occupation}
                key={idx}
              />
            )
          )}
        </Row>
      </Container>
    )
  }
}

Testimonials.propTypes = { intl: PropTypes.any }

export default injectIntl(Testimonials)
