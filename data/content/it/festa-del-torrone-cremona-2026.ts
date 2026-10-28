import type { ArticleContent, ContentBlock } from "@/lib/types";

// Immagini riprese dalla directory christmas-markets-italy (già attribuite lì).
const mkt = (file: string, alt: string, wide = false): ContentBlock => ({
  type: "image",
  src: `/images/events/christmas-markets-italy/${file}.webp`,
  alt,
  wide,
});

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

export const festaDelTorroneCremona2026It: ArticleContent = {
  body: [
    answer("**La Festa del Torrone 2026 si svolge da sabato 7 a domenica 22 novembre 2026** a Cremona, in Lombardia. Per oltre due settimane, il centro storico della città si anima di stand di dolciumi, dimostrazioni di produzione del torrone, rievocazioni storiche e produttori alimentari da tutta la Lombardia. L'accesso alle aree a cielo aperto è gratuito. I dettagli del programma sono ancora in aggiornamento sul sito ufficiale; controlla [festadeltorrone.com](https://www.festadeltorrone.com/) prima di partire."),

    {
      type: "facts",
      title: "La Festa del Torrone 2026 in sintesi",
      rows: [
        { label: "Date", value: "Sabato 7 – domenica 22 novembre 2026" },
        { label: "Luogo", value: "Cremona, Lombardia — centro storico, principalmente Piazza del Comune e le vie adiacenti" },
        { label: "Tema principale", value: "Torrone, confetteria italiana, produttori alimentari lombardi" },
        { label: "Ingresso", value: "Le aree all'aperto sono gratuite; alcune degustazioni o eventi al chiuso potrebbero richiedere un biglietto — verifica sul sito ufficiale" },
        { label: "Sito ufficiale", value: "festadeltorrone.com" },
        { label: "Stato del programma", value: "Date confermate; programma dettagliato in pubblicazione progressiva — controlla il sito ufficiale per gli aggiornamenti" },
        { label: "Come arrivare", value: "Cremona è a circa 1 ora da Milano in treno regionale (Trenitalia, nessun servizio ad alta velocità)" },
        { label: "Adatto a", value: "Appassionati di cibo, visitatori che abbinano Cremona a Milano o alla Pianura Padana, chi viaggia in novembre" },
      ],
    },

    {
      type: "jumpLinks",
      label: "In questa pagina",
      targets: [
        "Cos'è la Festa del Torrone?",
        "Date e programma 2026",
        "Cos'è il torrone?",
        "Cosa mangiare alla festa",
        "Cosa fare a Cremona",
        "Come arrivare a Cremona",
        "Dove dormire",
        "Itinerario consigliato",
        "Consigli pratici per la visita",
      ],
    },

    mkt("market-stall-warm-lights", "Uno stand di mercato con luci ambrate calde che illuminano esposizioni di dolciumi e prodotti regionali al crepuscolo", true),

    h2("Cos'è la Festa del Torrone?"),
    p("La Festa del Torrone è una manifestazione gastronomica annuale a Cremona dedicata al torrone — il classico dolce italiano a base di miele, zucchero, albume e frutta secca — e al legame secolare della città con questo prodotto. Per oltre due settimane ogni novembre, il centro medievale di Cremona si trasforma in una vetrina della confetteria italiana e della cultura alimentare lombarda."),
    p("Nel cuore della festa ci sono gli stand: decine di produttori espongono varietà di torrone cremonese e non, con possibilità di assaggiare e confrontare prima di acquistare. Accanto al torrone troviamo formaggi e salumi locali, mostarda di Cremona, vini regionali, rievocazioni in costume e dimostrazioni di lavorazione. Il pubblico è eterogeneo: famiglie cremonesi, visitatori da tutta la Lombardia, turisti italiani e stranieri che programmano il viaggio appositamente."),
    p("Cremona a novembre è grigia, spesso avvolta nella nebbia tipica della pianura padana, e fa freddo — esattamente l'atmosfera giusta per un mercato di torroni, caldarroste e vin brulé. Non è una sagra estiva spostata all'autunno: il contesto le appartiene davvero."),

    h2("Date e programma 2026"),
    note("I dettagli del programma per l'edizione 2026 vengono aggiunti progressivamente al sito ufficiale [festadeltorrone.com](https://www.festadeltorrone.com/). Le informazioni qui riportate riflettono quanto pubblicato a ottobre 2026. Verifica il sito prima della visita per gli orari aggiornati."),

    table(
      ["Periodo", "Stato", "Luogo", "Note"],
      [
        ["7–22 novembre 2026", "Date confermate", "Centro storico di Cremona", "Manifestazione aperta su più giornate; orari giornalieri non ancora pubblicati — verifica sul sito ufficiale"],
        ["Stand del torrone", "Attesi — programma in pubblicazione", "Piazza del Comune e strade del centro", "Elemento centrale della festa; confermati per il 2026"],
        ["Rievocazione storica", "Attesa — date da confermare", "Piazza del Comune", "Tradizionalmente include un corteo ispirato alla leggenda cinquecentesca; date 2026 non ancora confermate"],
        ["Dimostrazioni di produzione", "Attese — programma in pubblicazione", "Varie location nel centro storico", "I produttori mostrano la lavorazione del torrone; controlla gli orari programmati sul sito ufficiale"],
        ["Mercato dei prodotti regionali", "Atteso — programma in pubblicazione", "Centro storico", "Produttori alimentari lombardi accanto agli stand del torrone"],
      ],
      "Le voci contrassegnate come 'programma in pubblicazione' sono elementi tipici della manifestazione, confermati nelle edizioni precedenti; i dettagli 2026 non erano stati ancora pubblicati a ottobre 2026. Verifica su festadeltorrone.com."
    ),

    p("I weekend sono tradizionalmente i giorni di maggiore afflusso: 8, 9, 15, 16, 21 e 22 novembre 2026 saranno probabilmente i più frequentati. Le visite nei giorni feriali — in particolare nelle prime due settimane — consentono di esplorare gli stand con più calma e di parlare direttamente con i produttori."),
    tip("Controlla il sito ufficiale e la pagina del turismo di Cremona nei giorni prima della visita: i programmi vengono spesso aggiornati nelle ultime settimane prima dell'apertura, soprattutto per concerti serali, dimostrazioni ed eventuali degustazioni a pagamento."),

    mkt("browsing-market-stall", "Una visitatrice a uno stand di mercato che esamina vasetti di prodotti artigianali sotto le tettoie di legno del mercato"),

    h2("Cos'è il torrone?"),
    p("Il torrone è un dolce preparato con miele, zucchero, albume d'uovo e frutta secca — mandorle, nocciole o pistacchi, in genere. È tra le categorie di confetteria italiana più antiche e si trova in forme diverse in tutta la penisola, oltre che in Spagna (turrón) e in altri paesi con proprie tradizioni nougat."),

    h3("Le due varianti principali"),
    ul(
      "**Torrone duro**: friabile e compatto. Le nocciole o le mandorle sono inglobate in un composto di miele e zucchero cotto ad alta temperatura. Si presenta tipicamente a barrette o blocchi. Ha una consistenza decisa, da mordere.",
      "**Torrone morbido**: cedevole e masticabile, spesso avvolto in ostia sottile, con una gamma più ampia di gusti: cioccolato, caffè, frutta, pistacchio. La cottura si ferma a temperature più basse, lasciando il prodotto più elastico.",
      "**Varianti artigianali e creative**: i confettieri contemporanei producono torrone in decine di combinazioni — con coperture di cioccolato fondente, diversi mix di frutta secca, paste di frutta e aggiunte stagionali. Vanno oltre la classificazione tradizionale, ma rappresentano una parte significativa di ciò che rende interessante il mercato cremonese."
    ),

    h3("Cremona e la tradizione del torrone"),
    p("Cremona rivendica una paternità su questo dolce. La leggenda locale vuole che il primo torrone sia stato preparato a Cremona nel 1441 in occasione delle nozze tra Francesco Sforza e Bianca Maria Visconti, plasmato a forma del Torrazzo. Questa storia è ampiamente ripetuta, ma gli storici dell'alimentazione fanno notare che dolci simili a base di miele e frutta secca compaiono in fonti italiane ben precedenti. La data del 1441 va intesa come una tradizione che esprime il legame di Cremona con il torrone, non come un documento storico di prima produzione."),
    p("Ciò che è documentato è che l'industria dolciaria cremonese ha sviluppato nel tempo una vera specializzazione nel torrone, con famiglie produttrici attive dall'Ottocento fino ad oggi. Il \"Torrone di Cremona\" è oggi un prodotto IGP (Indicazione Geografica Protetta) riconosciuto dall'Unione Europea, con disciplinare di produzione e areale definiti."),

    h2("Cosa mangiare alla festa"),
    p("Gli stand della Festa del Torrone spaziano dalle grandi aziende dolciarie cremonesi — alcune delle quali producono torrone da generazioni — ai piccoli artigiani di tutta la Lombardia. La varietà disponibile nel corso di due settimane è molto più ampia di quella che si trova in qualsiasi singolo negozio."),
    ul(
      "**Torrone cremonese tradizionale**: le versioni dure e morbide realizzate secondo il disciplinare IGP, in versione classica con mandorle e nocciole. Comprare direttamente dagli stand dei produttori permette di assaggiare prima di acquistare.",
      "**Mostarda di Cremona**: non una salsa alla senape in senso stretto, ma una conserva di frutta intera o a pezzi in sciroppo dolce con olio di senape. Si abbina tradizionalmente al bollito misto e ai formaggi stagionati. È uno dei prodotti tipici più caratteristici di Cremona insieme al torrone.",
      "**Prodotti lombardi di stagione**: formaggi — tra cui [Grana Padano, Taleggio](/it/cibo/formaggi-regionali-italiani) e altre varietà lombarde — salumi, vini regionali e altri prodotti del raccolto autunnale.",
      "**Bevande calde e cibo di strada**: caldarroste, vin brulé e bevande calde sono elementi fissi dei mercati invernali in tutta l'Italia settentrionale. Nel centro storico ci sono bar e ristoranti dove fermarsi per un pasto più sostanzioso."
    ),
    p("I prezzi del torrone variano sensibilmente a seconda del produttore e della tipologia. Il torrone duro secondo la ricetta tradizionale è in genere meno costoso al chilogrammo rispetto alle varianti morbide artigianali con ingredienti di pregio. Acquistare direttamente alla festa — piuttosto che in aeroporto o nei negozi di souvenir — dà accesso a una selezione più ampia e spesso a qualità superiore."),
    tip("Se vuoi portare il torrone a casa, le versioni dure (*torrone duro*) si trasportano meglio di quelle morbide e non richiedono refrigerazione. Molti produttori confezionano scatole regalo pensate appositamente per il viaggio."),
    p("Per approfondire la tradizione dolciaria italiana di cui fa parte il torrone, consulta la guida ai [dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani). Per scoprire come funzionano i mercati alimentari in Italia, vedi la guida ai [mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani)."),

    mkt("gluhwein-vin-brule-stall", "Un venditore di mercato dietro un bancone in legno con bottiglie di vino e bevande calde, in un mercato alimentare all'aperto nell'Italia settentrionale"),

    h2("Cosa fare a Cremona"),
    p("Il centro storico di Cremona è abbastanza piccolo da percorrere interamente a piedi ed abbastanza ricco da meritare mezza giornata al di là degli stand. La città è nota per due cose — il torrone e la liuteria — e i suoi principali monumenti riflettono la prosperità medievale che ha permesso a entrambe le tradizioni di radicarsi."),

    h3("Piazza del Comune e il Duomo"),
    p("Il cuore del centro storico è Piazza del Comune, una grande piazza medievale incorniciata da edifici di grande rilevanza. Il **Duomo di Cremona** risale al 1107 e presenta una facciata romanica ornata di sculture e rilievi. L'interno conserva importanti affreschi cinquecenteschi. Accanto al Duomo si erge il **Torrazzo**, uno dei simboli più riconoscibili dell'Italia settentrionale: un campanile medievale in mattoni alto circa 112 metri, tra i più alti campanili medievali d'Europa. I visitatori possono salire sulla torre per ammirare il panorama della pianura padana — nelle giornate terse le Alpi sono visibili a nord. Il **Battistero** completa l'insieme medievale."),
    p("La festa si svolge in questa piazza e nelle strade adiacenti, quindi passerai naturalmente davanti a questi monumenti. Vale la pena entrare nella cattedrale per qualche minuto — l'ingresso è generalmente libero, ma verifica le condizioni attuali."),

    h3("Musei e liuteria"),
    p("Cremona è centro mondiale della liuteria dal Cinquecento. Le botteghe di Antonio Stradivari, Nicolò Amati e della famiglia Guarneri hanno fondato la reputazione internazionale della città, una tradizione che continua ancora oggi con oltre cento botteghe artigianali attive. Due musei sono direttamente dedicati a questa storia:"),
    ul(
      "**Museo del Violino**: aperto nel 2013 nel Palazzo dell'Arte, conserva la più grande collezione pubblica di strumenti cremonesi storici, tra cui strumenti di Stradivari e Amati. L'ingresso è a pagamento. Verifica orari e prezzi attuali su [museodelviolino.org](https://www.museodelviolino.org/) prima della visita.",
      "**Palazzo Comunale**: il municipio storico in Piazza del Comune ospita una piccola raccolta di strumenti Stradivari, tra cui un violino e una viola del 1715. Gli orari e le modalità di accesso possono variare; verifica con il Comune o presso l'ufficio turistico."
    ),
    p("Durante il periodo della festa, alcune botteghe liutaie aprono le porte ai visitatori o organizzano dimostrazioni. Controlla il programma dell'ufficio del turismo o della manifestazione per eventuali eventi aperti al pubblico."),
    tip("Il Museo del Violino è chiuso il lunedì. Se visiti nei giorni feriali, verifica in anticipo l'orario di chiusura e gli orari su museodelviolino.org."),

    h3("Il centro storico"),
    p("Oltre alla piazza principale, il centro di Cremona ha strade medievali ben conservate, il **Palazzo Raimondi** (sede della scuola internazionale di liuteria), la **chiesa di San Pietro al Po** con notevoli decorazioni cinquecentesche e la zona di mercato vicino a Piazza Stradivari. La città è piccola: dalla stazione alla piazza principale si cammina circa 15 minuti su terreno pianeggiante, senza salite o scalinate."),

    h2("Come arrivare a Cremona"),

    h3("In treno"),
    p("Cremona è collegata in treno regionale da Milano e da Brescia. Non è servita dall'alta velocità; tutti i treni sono regionali Trenitalia."),
    ul(
      "**Da Milano Centrale**: treno regionale Trenitalia, circa 55–65 minuti diretto. I treni partono regolarmente durante la giornata. È il collegamento più comodo per chi arriva dagli aeroporti milanesi.",
      "**Da Brescia**: circa 45 minuti in treno regionale. Utile per chi è già in Veneto o viene da Verona.",
      "**Da Mantova**: circa 1 ora, con alcune corse che richiedono un cambio.",
      "**Da Parma o Bologna**: queste tratte richiedono cambi e tempi più lunghi. Verifica le opzioni dirette e con cambio sul sito Trenitalia."
    ),
    p("La stazione di Cremona si trova a circa 15 minuti a piedi da Piazza del Comune, su percorso pianeggiante. I taxi sono disponibili in stazione."),
    p("Prenota i biglietti di ritorno con anticipo, soprattutto nei weekend del festival, quando i treni sulla tratta Milano–Cremona si riempiono. Controlla gli orari su [trenitalia.com](https://www.trenitalia.com/)."),
    tip("Nei weekend del festival, l'ultimo treno serale per Milano può esaurire i posti. Se prevedi una cena in centro, controlla l'orario dell'ultimo treno prima di prenotare un ristorante a orario tardivo."),
    p("Per una guida completa al viaggio in treno in Italia — prenotazione, tipologie di biglietti e consigli pratici — consulta [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno). Per un confronto tra tutti i mezzi di trasporto tra le città italiane, vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),

    h3("In auto"),
    p("Cremona è raggiungibile dall'autostrada A21 Brescia–Piacenza (uscite Cremona Ovest o Cremona Est). Il centro storico è ZTL; i parcheggi sono nelle strade circostanti e nelle aree di sosta ufficiali vicino al centro. Nei weekend del festival i parcheggi si riempiono presto: è consigliabile arrivare prima delle 10:00 o usare un approccio park-and-walk dai margini del centro. Per i visitatori in giornata da Milano, il treno è in genere più pratico."),

    h2("Dove dormire"),
    p("Cremona ha un'offerta limitata di hotel e bed & breakfast raggiungibili a piedi dal centro, con alcune strutture nella periferia. Nei weekend di punta della festa — in particolare l'ultimo weekend del 21–22 novembre — la disponibilità in città può essere ridotta: prenota con anticipo."),

    h3("Pernottare a Cremona"),
    p("Soggiornare a Cremona permette di vivere la città la sera, dopo che i visitatori in giornata se ne sono andati, e di visitare la festa in settimana al mattino, quando gli stand sono meno affollati e i produttori hanno più tempo per parlare. Se vuoi visitare il Museo del Violino ed esplorare il quartiere liutaio, una notte consente un ritmo più rilassato."),

    h3("Gita in giornata da Milano"),
    p("Per chi è a Milano, la gita in giornata è pratica: il treno di circa un'ora in ciascun senso permette una giornata intera, con la mattina per il Duomo e il Torrazzo e il pomeriggio per gli stand. Funziona meglio in settimana o al sabato mattina, quando gli stand sono meno affollati e i treni più facili da prendere. Se hai più tempo a disposizione a Milano, la nostra guida [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo) copre la città nel dettaglio."),

    note("L'offerta ricettiva di Cremona è limitata rispetto alle grandi città italiane. Se prevedi di pernottare durante il festival, verifica la disponibilità e prenota per tempo."),

    h2("Itinerario consigliato"),

    h3("Una giornata a Cremona per la Festa del Torrone"),
    p("Arriva entro le 10:00 (significa prendere un treno mattutino da Milano o aver dormito in città). Comincia da **Piazza del Comune**: ammira il Torrazzo, gira intorno alla facciata del Duomo, poi entra nella cattedrale per qualche minuto prima che gli stand si animino. Dalle 10:30 alle 12:30, percorri gli stand del festival in piazza e nelle strade adiacenti. È il momento migliore per assaggiare e confrontare: i produttori hanno appena rifornito e il personale è disponibile. Se vuoi acquistare torrone da portare a casa, fallo ora piuttosto che alla fine della giornata."),
    p("Dalle 12:30 alle 13:30, stacca dalla festa per un pranzo in un ristorante o in un'osteria del centro. Cremona ha locali specializzati nella cucina locale, tra cui il bollito misto con mostarda. Dalle 13:30 alle 15:00, visita il **Museo del Violino** se è aperto (chiuso il lunedì; verifica gli orari prima). Dalle 15:00 alle 17:00, torna agli stand per un secondo giro e passeggia per Via Solferino e Via Palestro. Parti in tempo per raggiungere la stazione entro le 17:30 o dopo, a seconda dei piani serali."),
    note("Questo itinerario è un suggerimento editoriale basato su una visita tipica. Orari del festival, apertura dei musei e programma degli eventi cambiano — verifica sempre le informazioni aggiornate prima di partire."),

    h2("Consigli pratici per la visita"),
    ul(
      "**Vestiti per novembre in Pianura Padana.** Cremona a novembre è fredda (massime tipicamente intorno a 8–12°C), umida e spesso nebbiosa. Gli strati sono fondamentali: mattine e serate sono molto più fredde del mezzogiorno. Porta sempre un capo impermeabile, anche nelle giornate che sembrano asciutte.",
      "**Scarpe comode.** Il festival si svolge prevalentemente all'aperto su acciottolato e piazze. Se camminerai per diverse ore, le scarpe contano.",
      "**Porta contanti.** Molti produttori artigiani e stand più piccoli funzionano principalmente in contanti. Gli stand più grandi di solito accettano carte, ma avere euro in tagli piccoli semplifica gli acquisti.",
      "**Visita presto nella manifestazione, se puoi.** I primi due weekend (7–9 novembre e 14–16 novembre) hanno in genere meno code e più varietà rispetto al weekend finale. Una visita feriale nelle prime due settimane è l'opzione più tranquilla.",
      "**Controlla il programma ufficiale prima di partire.** Gli eventi serali, le dimostrazioni e le eventuali degustazioni a pagamento sono indicati su [festadeltorrone.com](https://www.festadeltorrone.com/) e possono cambiare fino al giorno stesso.",
      "**Metti in conto la nebbia.** La Pianura Padana è famosa per la *nebbia* autunnale e invernale, che in novembre può essere fitta. Raramente interferisce con la festa, ma può ridurre la visibilità dalla cima del Torrazzo e influire sulla circolazione dei treni. Controlla le previsioni meteo locali.",
      "**Tieni conto del Museo del Violino.** È chiuso il lunedì e potrebbe avere orari ridotti durante il festival. Verifica su [museodelviolino.org](https://www.museodelviolino.org/) prima di inserirlo nel programma."
    ),

    note("**Prima di partire:** verifica il programma aggiornato su [festadeltorrone.com](https://www.festadeltorrone.com/) — i dettagli vengono pubblicati progressivamente nelle settimane prima dell'apertura. Prenota i biglietti del treno su [trenitalia.com](https://www.trenitalia.com/), specialmente nei weekend del festival. Per pianificare un viaggio più lungo in Italia a novembre, consulta la guida [l'Italia a novembre](/it/viaggi/italia-a-novembre); per la pianificazione generale, la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia) è un buon punto di partenza.", "Prima di partire"),
  ],

  faqs: [
    {
      question: "Quando si svolge la Festa del Torrone 2026?",
      answer: "La Festa del Torrone 2026 si svolge da sabato 7 a domenica 22 novembre 2026 a Cremona, in Lombardia. Per il programma completo e gli orari giornalieri, consulta il sito ufficiale festadeltorrone.com.",
    },
    {
      question: "Dove si svolge la Festa del Torrone?",
      answer: "L'area principale della festa è Piazza del Comune — la piazza medievale della cattedrale di Cremona — e le strade storiche adiacenti. Il Duomo, il Torrazzo e gli stand della festa sono tutti nella stessa area centrale, raggiungibili a piedi.",
    },
    {
      question: "La Festa del Torrone è gratuita?",
      answer: "Le aree all'aperto della festa, gli stand e gli eventi in strada sono a ingresso libero. Alcune degustazioni al chiuso, dimostrazioni speciali o eventi serali potrebbero prevedere un biglietto — controlla il programma ufficiale su festadeltorrone.com per eventuali attività a pagamento.",
    },
    {
      question: "Cosa si mangia alla Festa del Torrone?",
      answer: "Il protagonista è il torrone nelle versioni dura e morbida, dai classici gusti mandorla e nocciola alle varianti artigianali. Si trovano anche la mostarda di Cremona (frutta conservata in sciroppo con olio di senape), formaggi regionali, salumi, vini lombardi, caldarroste e altre specialità autunnali.",
    },
    {
      question: "Qual è la differenza tra torrone duro e morbido?",
      answer: "Il torrone duro è friabile e compatto, ottenuto cuocendo il composto di miele e zucchero a temperatura elevata. Il torrone morbido è cedevole e masticabile, spesso avvolto in ostia, e si declina in una gamma più ampia di gusti. Alla festa è possibile assaggiare entrambi prima di acquistare.",
    },
    {
      question: "Come si arriva a Cremona?",
      answer: "Da Milano Centrale, i treni regionali Trenitalia raggiungono Cremona in circa 55–65 minuti. È il collegamento più comodo per chi arriva dagli aeroporti milanesi. Cremona non è servita dall'alta velocità. Controlla gli orari e prenota i biglietti di ritorno su trenitalia.com, specialmente nei weekend del festival.",
    },
    {
      question: "Si può visitare Cremona in gita da Milano?",
      answer: "Sì. Il treno di circa un'ora rende Cremona pratica come gita in giornata da Milano. Una giornata intera (arrivo entro le 10:00, partenza verso le 17:30–18:00) permette di visitare gli stand, il Duomo e il Torrazzo o il Museo del Violino. I treni mattutini e le visite feriali evitano i momenti di punta.",
    },
    {
      question: "Il Museo del Violino è aperto durante la festa?",
      answer: "Il Museo del Violino è aperto in novembre, ma è chiuso il lunedì e potrebbe avere orari specifici per il periodo della festa. Controlla orari e prezzi aggiornati su museodelviolino.org prima di pianificare la visita.",
    },
    {
      question: "Com'è il tempo a Cremona in novembre?",
      answer: "Novembre in Pianura Padana è freddo, spesso umido e frequentemente nebbbioso. Le massime diurne si aggirano tipicamente intorno a 8–12°C, con temperature notevolmente più basse di sera. La nebbia (*nebbia*) è un elemento caratteristico dell'autunno padano. Vesti a strati e porta un impermeabile: il festival continua anche con pioggia leggera.",
    },
    {
      question: "Dove trovo il programma aggiornato della Festa del Torrone 2026?",
      answer: "Il programma ufficiale viene pubblicato progressivamente su festadeltorrone.com. A ottobre 2026 le date erano confermate ma gli orari giornalieri erano ancora in aggiornamento. Controlla il sito ufficiale nei giorni prima della visita per le informazioni più recenti.",
    },
    {
      question: "Cosa posso portare a casa dalla Festa del Torrone?",
      answer: "Il torrone duro si trasporta bene e non richiede refrigerazione — molti produttori confezionano scatole regalo adatte al viaggio. La mostarda di Cremona in vasetto è un altro acquisto tipico. Evita le varietà morbide al cioccolato se prevedi tempi di trasporto lunghi o temperature elevate.",
    },
  ],

  sources: [
    {
      label: "Festa del Torrone — sito ufficiale della manifestazione",
      url: "https://www.festadeltorrone.com/",
      note: "Fonte ufficiale per date, programma e aggiornamenti. Manifestazione confermata per il 7–22 novembre 2026. Programma in pubblicazione progressiva; verificato ottobre 2026.",
    },
    {
      label: "Museo del Violino, Cremona",
      url: "https://www.museodelviolino.org/",
      note: "Sito ufficiale del Museo del Violino di Cremona — orari, biglietti e informazioni sulle mostre.",
    },
    {
      label: "Trenitalia — orari e biglietti",
      url: "https://www.trenitalia.com/",
      note: "Prenotazione ufficiale per i treni Milano–Cremona e altri collegamenti.",
    },
    {
      label: "Torrone di Cremona IGP — banca dati DOOR (Commissione europea)",
      url: "https://ec.europa.eu/agriculture/quality/door/",
      note: "Il registro UE delle indicazioni geografiche protette, che conferma lo status IGP del Torrone di Cremona.",
    },
    {
      label: "Comune di Cremona",
      url: "https://www.comune.cremona.it/",
      note: "Sito istituzionale del Comune — informazioni per i visitatori, ZTL e avvisi locali.",
    },
    {
      label: "Visitcremona — portale turistico ufficiale",
      url: "https://www.visitcremona.it/",
      note: "Portale turistico ufficiale di Cremona — attrazioni, informazioni pratiche e calendario eventi.",
    },
  ],

  sourcesTitle: "Fonti e verifiche",
};
