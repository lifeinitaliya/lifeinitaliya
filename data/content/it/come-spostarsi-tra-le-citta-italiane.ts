import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guida: "Come spostarsi tra le città italiane" — edizione italiana, scritta
// in modo autonomo rispetto a quella inglese. È una guida alla scelta del
// mezzo; biglietti e regole a bordo sono nella guida al treno. I tempi di
// viaggio sono i treni diretti Trenitalia più veloci in un giorno feriale di
// riferimento (14 ottobre 2026), dal motore di ricerca ufficiale di Trenitalia,
// consultato a settembre 2026. Intercity per la Sicilia, FrecciaLink, Italo +
// Itabus, traghetti per la Sardegna e regole ferroviarie verificati su fonti
// ufficiali a settembre 2026. Nessuna tariffa: cambiano con la domanda.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/getting-between-italian-cities";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const comeSpostarsiTraLeCittaItaliane: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Qual è il modo migliore per spostarsi tra le città italiane?"),
    answer("**Un modo migliore in assoluto non c'è: dipende dalla distanza, dalla tratta e da dove parti e arrivi.** Tra le grandi città sulle linee principali — Torino, Milano, Venezia, Bologna, Firenze, Roma, Napoli — i **treni ad alta velocità** sono di solito la soluzione più pratica, da centro a centro. **Regionali** e **autobus** coprono i centri minori. L'**aereo** può avere senso per i tragitti lunghi verso il Sud, la Sicilia o la Sardegna. L'**auto** dà il meglio in campagna, in montagna e quando le tappe rurali sono tante. I **traghetti** portano alle isole. E i viaggi vanno confrontati **porta a porta**, non solo in base agli orari di partenza e arrivo."),
    p("L'Italia è lunga e montuosa, e i trasporti lo riflettono. La rete ad alta velocità rende velocissimi alcuni collegamenti tra grandi città; altri percorsi, brevi sulla carta, richiedono molto più tempo per via di montagne, coste o mare. Questa guida è uno schema per decidere: come funziona ogni mezzo, quando conviene, come confrontarli e come costruire un viaggio in più città senza affidarsi a orari superati. Per biglietti, stazioni e regole a bordo c'è la guida dettagliata su [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 2 ———
    h2("I mezzi a disposizione"),
    p("Ogni mezzo ha un ruolo preciso, e nessuno vince ovunque."),
    table(
      ["Mezzo", "Adatto a", "Vantaggi", "Limiti", "Prenotazione"],
      [
        ["Treno ad alta velocità", "Grandi città sulle linee principali", "Da centro a centro, veloce, frequente sulle tratte principali, posto assegnato", "Raggio limitato oltre le grandi città; tariffe in salita quando il treno si riempie", "Prenota appena le date sono certe"],
        ["Intercity", "Tratte lunghe fuori dall'alta velocità, viaggi notturni", "Raggiunge coste e Sud; posto prenotato", "Più lento dell'alta velocità", "In anticipo nei periodi di punta e per le cuccette"],
        ["Regionale", "Brevi tratte, piccoli centri, gite in giornata", "Tariffa fissa, nessun bisogno di prenotare", "Più lento; posti non assegnati; a volte affollato", "Si compra quando si parte; i biglietti cartacei vanno convalidati"],
        ["Pullman / autobus", "Località senza treni comodi, budget ridotto, alcune tratte notturne", "Arriva dove il treno non arriva; spesso economico", "Traffico; meno spazio; meno corse", "Prenota le tratte più richieste"],
        ["Aereo", "Lunghe distanze, soprattutto verso Sicilia, Sardegna e profondo Sud", "Veloce in volo", "Trasferimenti, controlli e bagagli aggiungono tempo", "Confronta il costo totale con i bagagli"],
        ["Auto a noleggio", "Campagna, montagna, più tappe rurali", "Libertà; arriva ovunque", "ZTL, parcheggi, pedaggi, carburante, traffico", "Prenota presto il cambio automatico e i noleggi di sola andata"],
        ["Traghetto", "Isole e alcune tratte costiere", "Spesso l'unico collegamento", "Maltempo; orari stagionali", "D'estate prenota presto posti auto e cabine"],
      ],
      "Un confronto, non una classifica. Molti viaggi combinano più mezzi.",
    ),

    // ——— 3 ———
    h2("L'alta velocità: Frecciarossa e Italo"),
    p("I treni ad alta velocità sono l'ossatura dei viaggi tra città. Li gestiscono due aziende: **Trenitalia**, con le Frecce — soprattutto il **Frecciarossa** — e l'operatore privato **Italo**. Servono l'asse principale da Torino e Milano, attraverso Bologna e Firenze, fino a Roma, Napoli e Salerno; la linea da Milano verso Verona, Padova e Venezia; e diramazioni come la linea adriatica verso Bari e Lecce. Trenitalia ha anche treni diretti tra Napoli e Bari."),
    {
      type: "image",
      src: `${IMG}/frecciabianca-roma-termini.webp`,
      alt: "Un treno Frecciabianca rosso, bianco e grigio di Trenitalia fermo a un binario di Roma Termini",
      caption: "Un treno Trenitalia a Roma Termini, la stazione più trafficata d'Italia e snodo per nord e sud.",
      credit: unsplash("Nico Ruge", "nico_ruge"),
    },
    ul(
      "**Biglietti e posti** — il biglietto vale per un treno preciso, con carrozza e posto assegnati. Non si può salire su un treno diverso da quello indicato.",
      "**Operatori non intercambiabili** — un biglietto Trenitalia non vale su Italo, e viceversa, anche sulla stessa tratta e dallo stesso binario.",
      "**Tariffe** — funzionano come quelle aeree: dipendono dalla domanda, dall'anticipo e dalla flessibilità. Le tariffe flessibili costano di più ma consentono modifiche; quelle economiche hanno condizioni più rigide.",
      "**Stazioni** — i treni veloci servono le stazioni centrali, come Milano Centrale, Firenze Santa Maria Novella e Roma Termini, ma alcuni fermano in stazioni secondarie (Roma Tiburtina, Napoli Afragola). Controlla quella sul biglietto.",
      "**Bagagli** — niente check-in: le valigie le sistemi tu, sulle cappelliere o negli spazi appositi.",
      "**Cambi e rimborsi** — dipendono dalle condizioni della tariffa; vanno fatti prima della partenza sul sito, sull'app o in biglietteria.",
    ),
    p("Conviene confrontare le due aziende per la tua tratta e la tua data: orari, prezzi e condizioni sono diversi. Livelli di servizio, dettagli del biglietto e salita a bordo sono spiegati nella guida su [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 4 ———
    h2("Gli Intercity"),
    p("Gli **Intercity** di Trenitalia stanno a metà tra alta velocità e regionali. Percorrono tratte lunghe, spesso lontano dalle linee veloci — lungo le coste tirrenica e adriatica e verso il Sud — e fermano in più località delle Frecce. Il biglietto è per un treno preciso, di norma con posto. Gli **Intercity Notte** viaggiano di notte, anche da Milano, Bologna, Firenze, Roma e Napoli verso la Sicilia."),
    p("La Sicilia è un caso a sé. Secondo Trenitalia, ogni giorno ci sono dieci collegamenti Intercity per l'isola, sei dei quali notturni, e i treni attraversano lo Stretto di Messina sul traghetto: circa 30 minuti in cui si può scendere dal treno e salire sul ponte. Un viaggio memorabile, ma lungo: nel giorno di riferimento, l'Intercity diretto più veloce da Roma a Palermo impiegava circa 11 ore e mezza."),

    // ——— 5 ———
    h2("I treni regionali"),
    p("I regionali (Regionale e il più rapido Regionale Veloce) servono tragitti brevi, città minori e gite in giornata. La tariffa è fissa in base alla distanza e non cresce quando il treno si riempie, i posti non sono assegnati e nelle ore di punta si può viaggiare in piedi. In alcune regioni il servizio è gestito da aziende locali — Trenord in Lombardia, per esempio — e alcune linee turistiche, come la Circumvesuviana da Napoli verso Pompei e Sorrento, hanno biglietti propri."),
    ul(
      "**Convalida** — secondo Trenitalia, i biglietti regionali cartacei vanno convalidati in stazione prima di salire, mentre quelli digitali si attivano da soli all'orario di partenza del treno scelto. Con altri operatori le regole possono cambiare: segui le istruzioni del tuo biglietto.",
      "**Binari** — il binario compare spesso sul tabellone solo poco prima della partenza.",
      "**Coincidenze** — un regionale può non aspettare un treno in ritardo: tieni un margine.",
      "**Bagagli** — lo spazio è poco sui treni pendolari e sulle linee costiere affollate.",
    ),
    table(
      ["Tipo di treno", "Ruolo", "Posti", "Prenotazione"],
      [
        ["Alta velocità (Frecciarossa, Italo)", "Da grande città a grande città", "Assegnati", "Treno preciso; tariffe variabili"],
        ["Intercity / Intercity Notte", "Tratte lunghe fuori dall'alta velocità; notturni verso Sud e Sicilia", "Assegnati", "Treno preciso; in anticipo nei periodi di punta e per le cuccette"],
        ["Regionale (Regionale, Regionale Veloce)", "Brevi tratte, piccoli centri, gite", "Non assegnati", "Tariffa fissa; si compra quando si parte"],
      ],
      "Tre tipi di treno, tre modi di viaggiare",
    ),
    {
      type: "image",
      src: `${IMG}/manarola-station-sea.webp`,
      alt: "La banchina della stazione di Manarola, alle Cinque Terre, con il cartello e i binari affacciati sul mare",
      caption: "La stazione di Manarola, alle Cinque Terre: il regionale è il modo principale per muoversi tra i cinque borghi.",
      credit: unsplash("Filiz Elaerts", "filizelaerts"),
    },

    // ——— 6 ———
    h2("Le tratte principali tra le città"),
    p("Questi sono i collegamenti **diretti** Trenitalia più rapidi in un giorno feriale di riferimento, il 14 ottobre 2026, ricavati dal motore di ricerca ufficiale di Trenitalia a settembre 2026. Molti treni impiegano di più, i tempi di Italo possono essere diversi e gli orari cambiano: controlla il treno che prenoti davvero."),
    table(
      ["Tratta", "Soluzione più comune", "Diretto più veloce (giorno di riferimento)", "Da sapere"],
      [
        ["Roma – Firenze", "Alta velocità", "1 h 35 min", "A Roma i treni partono da Termini o Tiburtina: controlla quale"],
        ["Roma – Napoli", "Alta velocità", "1 h 13 min", "Alcuni treni fermano a Napoli Afragola anziché Centrale"],
        ["Roma – Milano", "Alta velocità; ci sono anche voli", "2 h 55 min", "Prima di scegliere l'aereo, confronta porta a porta"],
        ["Roma – Venezia", "Alta velocità", "3 h 59 min", "Scendi a Venezia Santa Lucia se dormi in città"],
        ["Firenze – Venezia", "Alta velocità", "2 h 14 min", "Bologna e Padova sono lungo il percorso"],
        ["Milano – Venezia", "Alta velocità", "2 h 29 min", "Verona è una tappa comoda lungo la strada"],
        ["Milano – Firenze", "Alta velocità", "1 h 54 min", "Molti treni proseguono per Roma"],
        ["Milano – Verona", "Alta velocità o regionale", "1 h 13 min", "Il regionale è più lento ed economico"],
        ["Milano – Torino", "Alta velocità o regionale", "1 h 1 min", "Controlla Porta Nuova o Porta Susa"],
        ["Bologna – Firenze", "Alta velocità", "37 min", "I regionali percorrono la vecchia linea, più lenta"],
        ["Napoli – Firenze", "Alta velocità", "2 h 56 min", "I diretti passano per Roma"],
        ["Milano – Napoli", "Alta velocità", "4 h 33 min", "Lungo ma diretto; si può spezzare a Roma o Firenze"],
        ["Roma – Bari", "Alta velocità o Intercity", "4 h 14 min", "Meno diretti rispetto all'asse principale"],
        ["Roma – Lecce", "Alta velocità", "5 h 41 min", "Una giornata lunga; l'aereo è un'alternativa"],
      ],
      "Collegamenti diretti Trenitalia più veloci di mercoledì 14 ottobre 2026. Verifica sempre la tua data.",
    ),
    p("Per l'arrivo in città ci sono le nostre guide a [Roma](/it/guide/roma-in-tre-giorni), [Firenze](/it/citta/firenze-per-la-prima-volta), [Venezia](/it/citta/venezia-per-la-prima-volta), [Milano](/it/citta/milano-oltre-il-duomo), [Napoli](/it/citta/napoli-per-la-prima-volta), [Bologna](/it/citta/bologna-in-due-giorni), [Torino](/it/citta/torino-per-la-prima-volta) e [Verona](/it/citta/verona-per-la-prima-volta)."),

    // ——— 7 ———
    h2("Raggiungere i centri minori"),
    p("Fuori dalle linee principali, quasi ogni viaggio combina due mezzi. È normale, e di solito semplice se il cambio è pianificato."),
    ul(
      "**Alta velocità più regionale** — per esempio per Lucca passando da Firenze, o per i paesi del Lago di Como passando da Milano.",
      "**Treno più autobus** — Siena è spesso più comoda in autobus da Firenze, perché la stazione è in basso rispetto al centro murato; a San Gimignano si arriva con treno e bus via Poggibonsi.",
      "**Treno e bus con un unico biglietto** — il **FrecciaLink** di Trenitalia unisce un Frecciarossa e un autobus in coincidenza, per esempio fino a Salerno e poi a Matera; Italo vende collegamenti treno più **Itabus** per località come Cortina, Aosta, Courmayeur, il Lago di Garda e diversi centri di Puglia, Calabria e Sicilia.",
      "**Treno più taxi locale** — utile per agriturismi e alberghi fuori paese.",
      "**Treno più traghetto** — per Capri o Ischia da Napoli, o lungo la Costiera Amalfitana da Salerno in stagione.",
      "**Aeroporto più bus** — per le località di montagna, come le Dolomiti dall'aeroporto di Venezia.",
    ),
    p("Alcune zone sono semplicemente più facili in auto: gran parte della campagna toscana, la Puglia fuori dai centri principali, l'entroterra siciliano e le valli dolomitiche fuori stagione. Per i dettagli locali vedi le guide alle [Dolomiti](/it/guide/dolomiti-prima-volta), al [Lago di Como](/it/viaggi/lago-di-como-weekend) e a [Palermo](/it/citta/palermo-per-la-prima-volta)."),

    // ——— 8 ———
    h2("Confrontare i viaggi porta a porta"),
    p("L'abitudine più utile quando si organizza un viaggio in Italia è confrontare **il tragitto intero**: dall'albergo alla stazione o all'aeroporto, il viaggio vero e proprio, e dal punto d'arrivo all'albergo successivo. Un volo breve può richiedere più tempo di un treno, e un treno economico può costare di più se ai due capi servono due taxi."),
    h3("Esempio: da Roma a Milano"),
    table(
      ["Fase", "In treno", "In aereo"],
      [
        ["Arrivare alla partenza", "A Roma Termini, in centro", "A Fiumicino: il Leonardo Express da Termini impiega 32 minuti, più l'attesa"],
        ["Prima della partenza", "Qualche minuto d'anticipo per trovare il binario", "Il tempo che la compagnia chiede per check-in e controlli"],
        ["Il viaggio", "Diretto più veloce: 2 h 55 min nel giorno di riferimento", "Il volo, più rullaggio e sbarco"],
        ["All'arrivo", "Milano Centrale, con le metro M2 e M3", "Ritiro bagagli e trasferimento: da Linate la M4 arriva a San Babila in circa 12 minuti, secondo l'aeroporto"],
        ["Bagagli", "Li porti a bordo; nessun costo", "Controlla franchigia e costi della compagnia"],
      ],
      "Somma le fasi per i tuoi alberghi e le tue date.",
    ),
    p("Nessuna delle due soluzioni vince sempre: dipende da dove sono gli alberghi, da quali aeroporti usi e da quanto presto dovresti partire. Sulle tratte lunghe, come Milano–Sicilia, l'aereo è spesso più rapido nel complesso; sulle tratte sotto le tre ore circa con il treno veloce, di solito il treno regge bene il confronto."),
    {
      type: "image",
      src: `${IMG}/trenitalia-carriage-window.webp`,
      alt: "L'interno di una carrozza Trenitalia, con sedili attorno a un tavolino, due bicchieri di carta e il paesaggio dal finestrino",
      caption: "In treno, il tempo di viaggio è tempo che puoi usare.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 9 ———
    h2("Quando conviene l'aereo"),
    p("I voli nazionali sono utili soprattutto sulle lunghe distanze, dove il treno è lento o richiede il traghetto: dal Nord verso Sicilia, Sardegna o l'estremo Sud di Puglia e Calabria. Sulle tratte più brevi, il tempo in più nei due aeroporti spesso annulla la velocità del volo."),
    ul(
      "**Trasferimenti** — alcuni aeroporti sono lontani dalla città: aggiungi il tragitto a entrambi i capi. Vedi la guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia).",
      "**Check-in e controlli** — segui le indicazioni della compagnia sull'orario di arrivo.",
      "**Bagagli** — le tariffe low cost spesso escludono il bagaglio in stiva.",
      "**Ritardi** — un volo in ritardo condiziona la giornata tanto quanto un treno.",
      "**Quale aeroporto** — Milano ne ha tre e Roma due, in posti molto diversi.",
    ),

    // ——— 10 ———
    h2("Pullman e autobus"),
    p("I pullman a lunga percorrenza servono dove il treno è lento o poco diretto, per alcuni collegamenti con gli aeroporti e per chi viaggia con poco budget. Aziende nazionali come FlixBus e Itabus coprono tratte tra le città, anche notturne. Gli autobus regionali raggiungono borghi e paesi dove il treno non arriva: in Toscana, in Costiera Amalfitana e in buona parte del Sud sono spesso l'unico mezzo pubblico."),
    ul(
      "**Quando servono** — borghi collinari, paesi sulla costa, aeroporti senza ferrovia, e tratte come quelle da Roma verso alcune zone del Sud.",
      "**Biglietti** — online, in stazione, nelle rivendite o a bordo, secondo l'azienda; per alcuni autobus regionali si comprano in tabaccheria o sull'app anziché a bordo.",
      "**Tempi** — dipendono dal traffico, e la domenica e nei festivi le corse si riducono.",
      "**Bagagli** — di solito in stiva sui pullman; poco spazio sui bus locali.",
    ),

    // ——— 11 ———
    h2("Traghetti e isole"),
    p("I traghetti fanno parte di molti itinerari italiani, dalle brevi traversate nel Golfo di Napoli alle notti in nave verso la Sardegna."),
    ul(
      "**Sicilia** — i treni attraversano lo Stretto di Messina sui traghetti, e mezzi veloci per passeggeri collegano Villa San Giovanni e Messina. Trenitalia vende i biglietti degli aliscafi Blu Jet insieme a quelli del treno.",
      "**Sardegna** — traghetti diurni e notturni partono da porti come Genova e Civitavecchia, secondo le compagnie GNV e Tirrenia. Alcune rotte sono stagionali: la Genova–Olbia di GNV, per esempio, è attiva da maggio a ottobre.",
      "**Golfo di Napoli** — traghetti e aliscafi partono da Napoli (Molo Beverello e Calata Porta di Massa) per Capri, Ischia, Procida e Sorrento, e in stagione per la Costiera Amalfitana.",
      "**Laghi** — i battelli collegano i paesi dei laghi di Como, Garda e Maggiore.",
    ),
    {
      type: "image",
      src: `${IMG}/messina-strait-ferry.webp`,
      alt: "Un aliscafo bianco che attraversa acque blu verso l'obiettivo, con la città di Messina e le colline alle spalle",
      caption: "Un mezzo veloce sullo Stretto di Messina, il collegamento tra Calabria e Sicilia.",
      credit: unsplash("Giuseppe Famiani", "gieffe22"),
    },
    p("Traghetti per passeggeri e traghetti con auto si prenotano in modo diverso: un posto auto o una cabina su una rotta lunga in estate vanno prenotati con largo anticipo, mentre per i brevi tragitti a piedi spesso basta comprare più avanti. Gli orari cambiano con la stagione, e vento o mare mosso possono cancellare le corse, soprattutto degli aliscafi: tieni un margine prima di un volo o di un treno. Arriva al porto con il tempo di trovare il molo giusto. Rotte, porti e consigli pratici sono nel nostro articolo sui [traghetti in Italia](/it/trasporti/traghetti-in-italia)."),
    {
      type: "image",
      src: `${IMG}/naples-ferry-vesuvius.webp`,
      alt: "La scia bianca di un traghetto che lascia Napoli, con il Vesuvio all'orizzonte e i gabbiani in volo",
      caption: "In partenza da Napoli, con il Vesuvio alle spalle. Gli aliscafi sono più veloci ma risentono di più del mare mosso.",
      credit: unsplash("Kentaro Komada", "kenta_k"),
    },

    // ——— 12 ———
    h2("Noleggiare un'auto"),
    p("L'auto conviene quando il viaggio è soprattutto rurale: i borghi toscani, le masserie pugliesi, le valli delle Dolomiti, l'entroterra siciliano o tanti piccoli posti in un giorno. Nelle grandi città, invece, è di solito un peso."),
    ul(
      "**Documenti** — le patenti UE e SEE sono riconosciute in Italia. Secondo il Codice della Strada, le patenti di altri Paesi devono di norma essere accompagnate da un permesso internazionale o da una traduzione ufficiale, con eccezioni previste da accordi internazionali; le società di noleggio possono comunque richiederlo.",
      "**Pedaggi** — la maggior parte delle autostrade è a pagamento.",
      "**Carburante e parcheggi** — mettili nel budget; in città i parcheggi sono pochi e spesso cari.",
      "**Noleggio di sola andata** — restituire l'auto altrove costa di solito un supplemento.",
      "**Cambio** — nelle flotte di noleggio le auto manuali sono molto diffuse: l'automatico va prenotato espressamente e per tempo.",
      "**Assicurazione** — leggi che cosa è incluso e la franchigia prima di firmare.",
      "**Strade** — passi di montagna e strade costiere, come quella della Costiera Amalfitana, sono strette e lente.",
    ),
    p("Uno schema frequente è treno per le città e auto per qualche giorno in mezzo: la si ritira lasciando una città e la si restituisce prima di entrare nella successiva. Per regole, pedaggi e noleggio, leggi [guidare in Italia](/it/guide/guidare-in-italia)."),
    {
      type: "image",
      src: `${IMG}/brenner-motorway.webp`,
      alt: "Una piccola auto su una strada in una valle verde dell'Alto Adige, accanto al viadotto dell'autostrada del Brennero, con le montagne sullo sfondo",
      caption: "Vicino all'autostrada del Brennero, in Alto Adige. Quasi tutte le autostrade italiane sono a pedaggio.",
      credit: unsplash("Ilse", "iml"),
    },

    // ——— 13 ———
    h2("ZTL: la regola che sorprende chi guida"),
    p("La **ZTL** (*zona a traffico limitato*) copre di solito un centro storico. Roma, Firenze, Milano, Bologna, Napoli, Pisa, Siena e Verona le hanno, come tantissimi centri minori. In certi orari l'accesso è vietato ai non autorizzati e i varchi sono controllati da telecamere: passare da un varco attivo senza permesso comporta una multa, che la società di noleggio gira al cliente con una commissione, a volte a mesi di distanza. Ogni passaggio può essere una multa a sé."),
    p("L'albergo non vuol dire accesso libero. Alcune città consentono agli ospiti di raggiungere un albergo dentro la zona se la struttura comunica la targa in tempo, ma le auto a noleggio non sono autorizzate di default. Chiedi all'albergo prima di arrivare, segui le istruzioni alla lettera e fai attenzione al cartello \"varco attivo\"."),
    important("Se visiti solo città, quasi certamente l'auto non ti serve. Se guidi, parcheggia fuori dalla ZTL ed entra a piedi o con i mezzi pubblici.", "Prima di entrare in un centro"),

    // ——— 14 ———
    h2("Treno o auto?"),
    table(
      ["Aspetto", "Treno", "Auto"],
      [
        ["Centri città", "Le stazioni sono di solito centrali", "ZTL, traffico e pochi parcheggi"],
        ["Tratte tra grandi città", "Veloce e frequente sulle linee principali", "Per una o due persone, pedaggi, carburante e parcheggi costano spesso di più"],
        ["Campagna e piccoli borghi", "Limitato", "Molto più flessibile"],
        ["Più tappe in un giorno", "Difficile", "Facile"],
        ["Bagagli", "Li porti su e giù da solo", "Restano in auto — ma non in un'auto parcheggiata in città"],
        ["Costo per un gruppo", "A persona", "Per auto, il che può convenire alle famiglie"],
        ["Stress", "Niente guida; attenzione alle coincidenze", "Regole nuove, strade strette, multe ZTL"],
      ],
      "Molti viaggi usano entrambi.",
    ),

    // ——— 15 ———
    h2("Come prenotare i treni"),
    ul(
      "**Siti e app ufficiali** — Trenitalia e Italo vendono online, con biglietti digitali e aggiornamenti in tempo reale.",
      "**Biglietterie automatiche** — accettano carte; le due aziende hanno macchinette separate.",
      "**Biglietterie** — nelle stazioni principali, per viaggi complessi, cambi e carnet.",
      "**Codice di prenotazione** — tieni il codice o il QR del biglietto sul telefono, possibilmente anche offline.",
      "**La stazione giusta** — controlla le stazioni di partenza e arrivo, non solo la città.",
    ),
    p("Comprare direttamente dall'azienda rende più semplici cambi, rimborsi e richieste di indennizzo. I siti di terze parti sono comodi per confrontare gli operatori, ma possono applicare commissioni e gestire loro le modifiche."),

    // ——— 16 ———
    h2("Orientarsi in stazione"),
    p("I tabelloni indicano i treni per numero, destinazione finale e orario: la destinazione può essere oltre la tua fermata. Ecco le voci che contano, con l'equivalente inglese che compare spesso sui display e negli annunci delle grandi stazioni."),
    table(
      ["Italiano", "In inglese"],
      [
        ["Partenze", "Departures"],
        ["Arrivi", "Arrivals"],
        ["Binario", "Platform"],
        ["Ritardo", "Delay"],
        ["Cancellato / Soppresso", "Cancelled"],
        ["Carrozza", "Carriage / coach"],
        ["Posto", "Seat"],
        ["Coincidenza", "Connection"],
        ["Biglietteria", "Ticket office"],
        ["Uscita", "Exit"],
      ],
      "Il lessico della stazione",
    ),
    {
      type: "image",
      src: `${IMG}/pisa-platform-exit-sign.webp`,
      alt: "Un treno a lunga percorrenza a un binario della stazione di Pisa, con il monitor delle partenze, l'orologio e il cartello giallo Uscita",
      caption: "Alla stazione di Pisa: il monitor del binario, l'orologio e il cartello giallo \"Uscita\".",
      credit: unsplash("Tim Photoguy", "tim0at0unsplash"),
    },

    // ——— 17 ———
    h2("Cambiare treno"),
    p("Molti viaggi prevedono un cambio, e poche precauzioni lo rendono semplice."),
    ul(
      "**Non dare per scontato che un treno aspetti** una coincidenza in ritardo.",
      "**Tieni un margine realistico** — più ampio nelle grandi stazioni come Roma Termini, Milano Centrale o Bologna Centrale, dove i binari dell'alta velocità possono essere lontani o molto in profondità.",
      "**Meglio un'unica prenotazione** — secondo i diritti UE dei passeggeri ferroviari, la tutela per le coincidenze perse vale quando il viaggio è su un unico biglietto. Con biglietti separati, un ritardo sul primo treno non protegge automaticamente il secondo.",
      "**Controlla i binari** — possono cambiare: continua a guardare il tabellone.",
      "**Operatori diversi** — un treno Trenitalia e uno Italo sono per forza biglietti separati.",
    ),

    // ——— 18 ———
    h2("Bagagli"),
    p("Sui treni italiani non c'è check-in: le valigie le carichi e le sistemi tu, sulle cappelliere o negli spazi dedicati. Lo spazio varia da treno a treno e si esaurisce nelle ore di punta. Italo fissa per l'ambiente Smart un limite di 75 × 53 × 30 cm; Trenitalia chiede di tenere i bagagli negli spazi previsti senza intralciare gli altri. Sui pullman le valigie vanno di solito in stiva, e i traghetti hanno regole proprie. Prima di viaggiare con bici, sci, strumenti o altri oggetti ingombranti, controlla le condizioni dell'azienda, e fai la valigia in modo da poterla sollevare sui gradini del treno."),

    // ——— 19 ———
    h2("In viaggio con i bambini"),
    ul(
      "**Posti vicini** — sull'alta velocità, prenota i posti in un'unica prenotazione.",
      "**Tariffe** — Trenitalia e Italo prevedono riduzioni per i bambini; limiti d'età e regole per i più piccoli cambiano da azienda ad azienda e da tariffa a tariffa, quindi verificale alla prenotazione.",
      "**Passeggini** — meglio compatti e pieghevoli; Italo li considera bagagli.",
      "**Seggiolini** — in auto privata la legge li impone: portali o noleggiali se guidi.",
      "**Tempi** — evita coincidenze strette e organizzati intorno a pasti e sonnellini.",
    ),

    // ——— 20 ———
    h2("Accessibilità"),
    p("Rete Ferroviaria Italiana (RFI), che gestisce la rete, offre in molte stazioni il servizio gratuito di assistenza **Sala Blu** per persone con disabilità o mobilità ridotta. Va richiesto in anticipo online, con l'app Sala Blu+ o presso un ufficio Sala Blu; il preavviso necessario dipende dalla stazione e dall'orario. Quando compri il biglietto, prenota con l'azienda un posto accessibile o per sedia a rotelle. Non tutte le stazioni sono prive di barriere, e autobus, traghetti e taxi variano: verifica con ogni azienda veicoli accessibili e modalità di imbarco prima di partire."),

    // ——— 21 ———
    h2("Quante città mettere insieme?"),
    p("Ogni spostamento costa più del viaggio in sé: valigie, check-out, tragitto in stazione, ricerca del nuovo albergo e sistemazione occupano di solito mezza giornata. Qualche principio aiuta:"),
    ul(
      "**Almeno due notti per base**, tre per le grandi città come Roma.",
      "**Gite in giornata** da una base invece di cambiare albergo: Bologna, Firenze e Napoli sono ottimi punti d'appoggio.",
      "**Segui le linee** — le città sullo stesso asse veloce si combinano facilmente; zigzagare da una costa all'altra no.",
      "**Un tratto più lento** — qualche giorno in campagna o al lago bilancia un viaggio tutto città.",
    ),

    // ——— 22 ———
    h2("Esempi di viaggi in più città"),
    p("Queste combinazioni funzionano perché seguono le linee principali. Sono punti di partenza, non itinerari fissi."),
    table(
      ["Viaggio", "Percorso", "Perché funziona", "Mezzi principali"],
      [
        ["Nord Italia", "Milano → Verona → Venezia", "Tre città diversissime sulla stessa linea veloce", "Alta velocità e regionali"],
        ["L'Italia classica", "Roma → Firenze → Venezia", "Le città più visitate, collegate direttamente", "Alta velocità"],
        ["Centro e Sud", "Roma → Napoli → Puglia", "Roma e Napoli in treno veloce, poi il Sud", "Alta velocità; auto o treni in Puglia"],
        ["Dal Nord al Centro", "Milano → Firenze → Roma", "Dritto lungo l'asse principale", "Alta velocità; auto facoltativa in Toscana"],
        ["Con la montagna", "Venezia → Dolomiti → Verona", "Città, montagna e città", "Treno e bus, oppure auto in montagna"],
      ],
    ),
    p("Per itinerari in base alla durata del viaggio, vedi la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
    {
      type: "image",
      src: `${IMG}/bellagio-lake-como-ferry.webp`,
      alt: "Un battello bianco e un motoscafo in legno sul Lago di Como davanti al paese di Bellagio",
      caption: "Battelli a Bellagio, sul Lago di Como, dove la navigazione è il modo principale per spostarsi tra i paesi.",
      credit: unsplash("Claudio Carrozzo", "erbampo"),
    },

    // ——— 23 ———
    h2("Prenotare prima o comprare il giorno stesso?"),
    p("Dipende dal mezzo, dalla tratta e da quanta flessibilità ti serve."),
    table(
      ["Mezzo", "Prenotare prima?", "Perché"],
      [
        ["Alta velocità", "Di solito sì, appena le date sono certe", "Le tariffe più economiche sono limitate e si esauriscono; i treni più richiesti si riempiono"],
        ["Intercity e cuccette", "Nei periodi di punta", "Posti e cuccette sono limitati"],
        ["Regionali", "Non serve", "Tariffa fissa: si compra quando si parte"],
        ["Pullman", "Sulle tratte e date più richieste", "I posti possono finire"],
        ["Traghetti con auto", "Sì, d'estate", "Posti auto e cabine si esauriscono presto"],
        ["Brevi traghetti per passeggeri", "Spesso no", "Ma controlla in alta stagione e nei fine settimana"],
        ["Voli", "Di solito sì", "Le tariffe in genere salgono man mano che il volo si riempie"],
      ],
    ),
    tip("Tieni le tariffe flessibili per i viaggi che potresti cambiare, e quelle economiche per quelli certi.", "Mescola le tariffe"),

    // ——— 24 ———
    h2("I periodi di punta"),
    p("La domanda cresce il venerdì sera, la domenica pomeriggio, intorno ai giorni festivi e d'estate. Muoviti prima per Pasqua, per i ponti del 25 aprile, del 1° maggio e del 2 giugno, per agosto — soprattutto intorno a Ferragosto — e per Natale e Capodanno. Grandi eventi, come le fiere a Milano o i festival nelle città più piccole, possono riempire treni e alberghi a livello locale. I ritmi stagionali sono spiegati nella guida su [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 25 ———
    h2("Gli errori più comuni"),
    ul(
      "**Sbagliare stazione** — Roma, Milano, Venezia, Napoli e Torino ne hanno più di una.",
      "**Confondere gli aeroporti** — i tre di Milano e i due di Roma sono lontani tra loro.",
      "**Pensare che ogni treno sia veloce** — un regionale sulla stessa tratta può impiegare molto di più.",
      "**Non verificare se il collegamento è diretto.**",
      "**Lasciare troppo poco tempo per un cambio**, o credere che un treno in ritardo verrà aspettato.",
      "**Non leggere le condizioni del biglietto** — le tariffe economiche possono non consentire cambi.",
      "**Entrare in una ZTL.**",
      "**Ignorare il rischio maltempo sui traghetti** prima di un volo o di un treno.",
      "**Mettere troppe città** nei giorni a disposizione.",
      "**Confrontare il prezzo del biglietto invece del tempo e del costo totali.**",
      "**Fidarsi di orari vecchi trovati sui blog** — verifica sempre con l'azienda per la tua data.",
    ),

    // ——— 26 ———
    h2("Checklist per organizzare gli spostamenti"),
    p("Usala per ogni tappa del viaggio. Spunta le voci man mano: i progressi restano salvati su questo dispositivo."),
    checklist(
      "italia-spostamenti-tra-citta",
      ["Il viaggio", ["Partenza e destinazione decise", "Data scelta", "Mezzo scelto", "Stazione o aeroporto di partenza verificati", "Stazione o aeroporto di arrivo verificati", "Diretto o con cambio"]],
      ["Biglietti e bagagli", ["Bagagli adatti al mezzo", "Condizioni del biglietto lette", "Tempo sufficiente per i cambi"]],
      ["Ai due capi", ["Posizione dell'albergo rispetto alla stazione", "Mezzi locali o taxi organizzati", "Alternativa di riserva annotata"]],
    ),
    p("Tempi di viaggio e regole di questa guida sono stati verificati su fonti ufficiali a settembre 2026. Gli orari cambiano: controlla sempre l'azienda per la tua data. Per il resto dell'organizzazione, vedi la [checklist per un viaggio in Italia](/it/guide/checklist-viaggio-italia) e [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia)."),
  ],

  faqs: [
    { question: "È facile spostarsi in treno tra le città italiane?", answer: "Tra le grandi città sì: l'alta velocità collega Torino, Milano, Venezia, Bologna, Firenze, Roma e Napoli, da centro a centro. Per i centri minori di solito serve anche un regionale o un autobus." },
    { question: "Conviene prenotare in anticipo l'alta velocità?", answer: "Di solito sì, appena le date sono certe: le tariffe dipendono dalla domanda e quelle economiche sono limitate. I regionali hanno tariffa fissa e non serve prenotarli." },
    { question: "Quali aziende ferroviarie operano in Italia?", answer: "Trenitalia, l'operatore nazionale, gestisce Frecce, Intercity e gran parte dei regionali; Italo solo treni ad alta velocità. Alcune regioni hanno operatori propri, come Trenord in Lombardia." },
    { question: "Si può girare l'Italia senza auto?", answer: "Sì, se il viaggio è soprattutto di città. Per le zone rurali, come la campagna toscana o le valli dolomitiche fuori stagione, servono auto, autista o escursioni organizzate." },
    { question: "Costa meno il treno o l'auto?", answer: "Dipende da quante persone viaggiano e dove. Per una o due persone tra città, il treno spesso costa meno considerando pedaggi, carburante e parcheggi; per un gruppo in campagna l'auto può convenire." },
    { question: "Conviene prendere l'aereo tra città italiane?", answer: "Sulle lunghe distanze, come Milano–Sicilia, può far risparmiare tempo. Sulle tratte più brevi confronta porta a porta: trasferimenti e controlli rendono spesso il treno altrettanto rapido o più rapido." },
    { question: "Gli autobus sono utili in Italia?", answer: "Sì, per le località senza treni comodi, per alcuni collegamenti con gli aeroporti e per viaggiare spendendo poco. Gli autobus regionali raggiungono molti borghi e paesi costieri." },
    { question: "Si possono portare valigie grandi sui treni?", answer: "Sì, ma le carichi e le sistemi tu, e lo spazio varia. Italo fissa per l'ambiente Smart un limite di 75 × 53 × 30 cm. Per gli oggetti ingombranti controlla le regole dell'azienda." },
    { question: "Come si cambia treno?", answer: "Tieni un margine realistico, soprattutto nelle grandi stazioni, segui il tabellone per il binario e preferisci un'unica prenotazione, così le coincidenze perse sono tutelate." },
    { question: "Bisogna convalidare i biglietti del treno?", answer: "Secondo Trenitalia, i biglietti regionali cartacei vanno convalidati prima di salire; quelli digitali si attivano da soli. I biglietti per un treno e un posto precisi non si timbrano." },
    { question: "Che cosa succede se il treno è in ritardo?", answer: "Controlla l'app dell'azienda e i tabelloni. A seconda del ritardo e delle condizioni dell'azienda, puoi avere diritto a un indennizzo; le regole UE fissano i diritti minimi." },
    { question: "I treni italiani sono accessibili?", answer: "Il servizio gratuito Sala Blu di RFI offre assistenza in molte stazioni, su prenotazione. Prenota con l'azienda un posto accessibile o per sedia a rotelle. Non tutte le stazioni sono prive di barriere." },
    { question: "Si può andare dal Nord al Sud in treno?", answer: "Sì. L'alta velocità va da Milano a Napoli e Salerno e lungo l'Adriatico fino a Bari e Lecce, mentre Intercity e treni notturni arrivano in Calabria e in Sicilia." },
    { question: "Meglio prenotare direttamente con l'azienda ferroviaria?", answer: "Di solito sì. Prenotando con Trenitalia o Italo, cambi, rimborsi e indennizzi sono più semplici; i siti di terze parti possono applicare commissioni." },
  ],

  sourcesTitle: "Fonti ufficiali",
  sources: [
    { label: "Trenitalia", url: "https://www.trenitalia.com/it.html", note: "orari, biglietti e ricerca viaggi" },
    { label: "Italo", url: "https://www.italotreno.com/it", note: "treni ad alta velocità" },
    { label: "Trenitalia — raggiungi la Sicilia in treno", url: "https://www.trenitalia.com/it/intercity/collegamenti/raggiungi-la-sicilia-in-treno.html", note: "Intercity e traghettamento sullo Stretto" },
    { label: "Trenitalia — FrecciaLink Matera", url: "https://www.trenitalia.com/it/frecciarossa/collegamenti-frecciarossa/freccialink-matera.html", note: "treno e bus con un unico biglietto" },
    { label: "Italo — collegamenti con Itabus (in inglese)", url: "https://www.italotreno.com/en/destinations-timetable/itabus", note: "treno e bus in coincidenza" },
    { label: "Trenitalia — viaggiare sui treni regionali (in inglese)", url: "https://www.trenitalia.com/en/information/travelling-on-regional-trains.html", note: "convalida dei biglietti" },
    { label: "RFI — assistenza Sala Blu (in inglese)", url: "https://www.rfi.it/en/for-persons-with-disability.html", note: "servizio Sala Blu" },
    { label: "La tua Europa — diritti dei passeggeri ferroviari", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_it.htm", note: "ritardi e coincidenze" },
    { label: "GNV — traghetti per la Sardegna", url: "https://www.gnv.it/it/destinazioni-traghetti/sardegna", note: "rotte e stagionalità" },
    { label: "Tirrenia — traghetti per la Sardegna", url: "https://www.tirrenia.it/", note: "rotte" },
    { label: "Italo — regole sui bagagli (in inglese)", url: "https://blog.italotreno.com/en/train-world/luggage-and-suitcases-on-italo-all-the-rules/", note: "misure dei bagagli in Smart" },
  ],
};
