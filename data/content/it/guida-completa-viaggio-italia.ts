import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "The Complete Italy Travel Guide". Riscritta per chi
// legge in italiano; i dati soggetti a cambiamenti sono gli stessi della
// versione inglese, verificati sulle fonti ufficiali elencate in fondo
// (settembre 2026). Vanno ricontrollati a ogni aggiornamento.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/complete-italy-travel-guide";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const guidaCompletaViaggioItalia: ArticleContent = {
  body: [
    // ——— Introduzione ———
    p("Questa guida è pensata per chi organizza il primo viaggio in Italia, di solito tra i cinque giorni e le due settimane. Serve anche a chi in Italia ci vive ma non ha mai messo insieme un itinerario con più tappe: le domande, in fondo, sono le stesse. Quanto tempo serve, quali luoghi combinare, in che periodo partire, quanto si spende, come spostarsi tra le città, dove dormire e che cosa prenotare prima di partire."),
    p("L'ordine dei capitoli segue l'ordine in cui conviene prendere le decisioni. Alla fine dovresti avere un percorso realistico, un'idea del budget e un breve elenco di cose da prenotare. Dove le informazioni cambiano spesso — prezzi, orari, regole d'ingresso — rimandiamo alla fonte ufficiale invece di citare cifre che potrebbero essere già superate."),

    // ——— 1 ———
    h2("In breve: organizzare un viaggio in Italia"),
    answer("Per un primo viaggio, la formula che funziona meglio è di solito **7–14 giorni** con **due, tre o quattro basi** collegate dall'alta velocità. Roma, Firenze e Venezia sono la combinazione classica. Treni a lunga percorrenza e musei con ingresso a orario si prenotano appena le date sono certe; l'auto conviene noleggiarla solo per i giorni in campagna, non per le città."),
    table(
      ["Domanda", "Risposta rapida"],
      [
        ["Quanti giorni servono?", "Dipende dall'itinerario; 7–14 giorni permettono di combinare più destinazioni"],
        ["Come spostarsi tra le grandi città?", "Il treno è spesso la soluzione più pratica"],
        ["Serve un'auto?", "Dipende dal percorso: utile in campagna, al Sud e nelle isole; scomoda nei centri storici"],
        ["Qual è il periodo migliore?", "Dipende dal tipo di viaggio, dalla regione e dalla stagione"],
        ["Da dove si arriva di solito?", "Roma Fiumicino, Milano Malpensa e Venezia Marco Polo, oltre a Napoli, Bologna, Pisa, Catania e Palermo"],
        ["Moneta", "Euro (€)"],
        ["Fuso orario", "Ora dell'Europa centrale (UTC+1); UTC+2 con l'ora legale"],
        ["Prese elettriche", "Tipi C, F e L; 230 V, 50 Hz"],
        ["Numero di emergenza", "112"],
      ],
      "L'Italia in sintesi"
    ),

    // ——— 2 ———
    h2("Da dove iniziare"),
    p("La maggior parte dei problemi nasce dal prendere le decisioni nell'ordine sbagliato: prenotare l'hotel prima di conoscere il percorso, oppure scegliere sei città prima di contare le notti. Questa sequenza aiuta a evitarlo."),
    {
      type: "steps",
      items: [
        { title: "Conta le notti, non i giorni", text: "Dopo un volo lungo il giorno d'arrivo rende poco, e l'ultimo giorno è quasi sempre condizionato dal trasferimento in aeroporto." },
        { title: "Scegli il tipo di viaggio", text: "Città e musei, cibo, mare, montagna o campagna senza fretta: ogni scelta porta verso regioni e ritmi diversi." },
        { title: "Individua le basi", text: "Scegli due, tre o al massimo quattro luoghi coerenti con il tipo di viaggio e non troppo distanti fra loro. Il resto diventa una gita in giornata, o un viaggio futuro." },
        { title: "Costruisci il percorso in una sola direzione", text: "Disponi le basi in modo da non tornare indietro. Un volo «open jaw» — arrivo in una città, ripartenza da un'altra — rende tutto più semplice." },
        { title: "Prenota i trasporti principali", text: "Prima i voli, poi i treni ad alta velocità tra una base e l'altra. D'estate, traghetti e auto a noleggio vanno prenotati con largo anticipo." },
        { title: "Prenota i luoghi con ingresso a orario", text: "Diversi siti tra i più visitati vendono biglietti a fascia oraria che finiscono presto. Prenotali appena le date sono definitive." },
        { title: "Scegli dove dormire", text: "Conta più la posizione della metratura. Un alloggio ben collocato fa risparmiare ore di spostamenti ogni giorno." },
        { title: "Pianifica i trasporti locali", text: "Chiarisci come arriverai dall'aeroporto o dalla stazione all'alloggio, soprattutto se atterri tardi." },
        { title: "Prepara documenti e pagamenti", text: "Verifica i requisiti d'ingresso per la tua cittadinanza, stipula un'assicurazione e porta più di un metodo di pagamento." },
        { title: "Lascia spazio all'imprevisto", text: "Tieni almeno mezza giornata libera in ogni base: per riposare, per il maltempo o per qualcosa scoperto lungo la strada." },
      ],
    },

    // ——— 3 ———
    h2("Quanti giorni servono per un primo viaggio?"),
    answer("Una settimana basta per due o tre basi; con dieci-quattordici giorni si aggiunge una regione da vivere con più calma. Conviene prevedere **almeno due notti in ogni tappa**, e tre o più a Roma."),
    table(
      ["Durata", "Che cosa si riesce a vedere, realisticamente", "Basi consigliate"],
      [
        ["3–4 giorni", "Una grande città, eventualmente con una gita in giornata", "1"],
        ["5–7 giorni", "Due destinazioni, o tre se una è una tappa breve", "2–3"],
        ["8–10 giorni", "Più città importanti, oppure città e campagna", "3"],
        ["11–14 giorni", "Un percorso più ampio tra due o tre regioni", "3–4"],
        ["2–3 settimane", "Viaggio più approfondito, anche al Sud o in un'isola", "4–5"],
      ],
      "Uno schema di partenza, non una regola"
    ),
    p("Sono punti di partenza. Chi viaggia lentamente può passare dieci giorni solo in Toscana; chi punta sui luoghi più celebri può vedere quattro città nello stesso tempo."),
    h3("Perché meno tappe significano, di solito, vedere di più"),
    p("Ogni cambio di base costa circa mezza giornata: check-out, trasferimento in stazione, viaggio, arrivo all'alloggio e attesa del check-in, che in molti hotel è a metà pomeriggio. In un viaggio di sette notti con quattro basi, tre spostamenti possono assorbire un giorno e mezzo senza che ce ne si accorga."),
    tip("Prima di prenotare, scrivi il piano come notti per base (per esempio Roma 3 · Firenze 2 · Venezia 2). Se una tappa ha una sola notte, chiediti se non possa diventare una gita in giornata."),

    // ——— 4 ———
    h2("Dove andare in Italia?"),
    answer("Roma, Firenze e Venezia sono la combinazione più pratica per un primo viaggio: sono collegate da treni veloci e frequenti e hanno centri che si girano a piedi. Da lì si aggiunge una zona in linea con i propri interessi: la costa, i laghi, la campagna o il Sud."),
    p("Non esiste una destinazione migliore in assoluto. La tabella serve ad abbinare i luoghi a ciò che ti piace fare e al modo in cui preferisci viaggiare."),
    table(
      ["Destinazione", "Ideale per", "Soggiorno consigliato", "Stile di viaggio"],
      [
        ["Roma", "Siti archeologici, Vaticano, chiese, cucina", "3–4 notti", "Grande città; a piedi, in metro e in autobus; snodo ferroviario nazionale"],
        ["Firenze", "Arte e architettura del Rinascimento in un centro compatto", "2–3 notti", "Città da girare a piedi; base per gite in Toscana in treno o in autobus"],
        ["Venezia", "Canali, isole della laguna, passeggiate senza meta", "2–3 notti", "Senz'auto; a piedi e in vaporetto"],
        ["Milano", "Il Cenacolo, il Duomo, il design; porta d'accesso ai laghi", "1–2 notti", "Città; grande nodo ferroviario e aeroportuale"],
        ["Napoli", "Vita di strada, pizza, Museo Archeologico; base per Pompei", "2–3 notti", "Città vivace; treni regionali per i siti vicini"],
        ["Bologna", "Cucina, portici, un centro storico rilassato", "1–2 notti", "Tappa comoda tra Firenze e Venezia o Milano"],
        ["Palermo", "Mercati, monumenti arabo-normanni, cibo di strada", "2–3 notti", "Città; porta d'ingresso alla Sicilia occidentale"],
        ["Lago di Como", "Borghi sul lago e giardini", "2–3 notti", "Ritmo lento; treno da Milano, poi battelli"],
        ["Costiera Amalfitana", "Paesi a picco sul mare e panorami", "3–4 notti", "Costa; traghetti e autobus in stagione; guidare è impegnativo"],
        ["Campagna toscana", "Borghi, vigneti, paesaggi", "3–5 notti", "Rurale; con l'auto è molto più semplice"],
        ["Dolomiti", "Escursioni, impianti, paesaggi alpini", "3–5 notti", "Montagna; autobus e impianti stagionali; l'auto aiuta"],
        ["Puglia", "Paesi bianchi, trulli, due coste", "5–7 notti", "Viaggio on the road; l'auto è fortemente consigliata"],
        ["Sicilia", "Palermo, l'Etna, templi greci, città barocche", "7 notti o più", "Viaggio on the road; treni limitati fuori dalle linee principali"],
        ["Sardegna", "Spiagge e acqua limpida", "5–7 notti", "Vacanza al mare; di solito serve l'auto, oltre a traghetto o volo"],
        ["Matera", "Gli antichi rioni dei Sassi", "1–2 notti", "Estensione dalla Puglia; in auto o con i mezzi regionali da Bari"],
      ],
      "Destinazioni e interessi"
    ),
    p("Per approfondire le singole destinazioni: [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta), [Napoli](/it/citta/napoli-per-la-prima-volta), [il Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend) e [le Dolomiti](/it/guide/dolomiti-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/rome-piazza-navona.webp`,
      alt: "Piazza Navona a Roma, con la fontana e la cupola di Sant'Agnese in Agone",
      caption: "Piazza Navona, a Roma. Molti primi viaggi iniziano o finiscono qui: Fiumicino è l'aeroporto più trafficato del Paese e da Roma partono treni veloci in tutte le direzioni.",
      credit: unsplash("Marialaura Gionfriddo", "gionsnow"),
    },

    // ——— 5 ———
    h2("Le principali regioni italiane"),
    p("Le regioni sono venti, e sono davvero diverse per paesaggio, cucina, dialetto e facilità di spostamento. Per organizzare il viaggio è utile ragionare per quattro grandi aree."),
    ul(
      "**Il Nord** — Milano, Venezia, i laghi, le Alpi e le Dolomiti. È la parte del Paese meglio collegata, con una rete ferroviaria fitta e grandi aeroporti.",
      "**Il Centro** — Roma, Firenze, la Toscana e l'Umbria. È il cuore di quasi tutti i primi itinerari, con Roma e Firenze unite dall'alta velocità.",
      "**Il Sud** — Napoli, la Costiera Amalfitana, la Puglia, la Basilicata e la Calabria. Regala molto ed è spesso meno affollato, ma le distanze si allungano e l'auto diventa più utile.",
      "**Le isole** — Sicilia e Sardegna. Ognuna merita almeno una settimana, e di solito un'auto."
    ),
    {
      type: "regionMap",
      caption: "Uno schema delle regioni, non una carta geografica. I colori riflettono il nostro giudizio editoriale su quanto ogni regione si presti a un primo viaggio — in base ai collegamenti ferroviari e a quanto sono vicini i luoghi principali — non su quanto valga la pena visitarla.",
    },
    table(
      ["Regione", "Nota per", "Adatta a un primo viaggio?", "Tipo di viaggio"],
      [
        ["Lazio", "Roma, la Città del Vaticano (uno Stato a sé) e le ville di Tivoli", "Sì, è il punto di partenza più comune", "Città con gite in giornata"],
        ["Toscana", "Firenze, Siena, Pisa, il Chianti e la Val d'Orcia", "Sì", "Città, più la campagna in auto"],
        ["Veneto", "Venezia, Verona, Padova e le prime Dolomiti", "Sì", "Città in treno"],
        ["Lombardia", "Milano, il Lago di Como e Bergamo", "Sì", "Città e laghi in treno"],
        ["Campania", "Napoli, Pompei, Ercolano, la Costiera Amalfitana e Capri", "Sì, con un po' di organizzazione", "Città e costa"],
        ["Liguria", "Le Cinque Terre, Genova e la Riviera", "Sì, ma molto affollata d'estate", "Costa in treno"],
        ["Emilia-Romagna", "Bologna, Parma, Modena e i mosaici di Ravenna", "Sì, facile in treno", "Tappe in città all'insegna del cibo"],
        ["Umbria", "Assisi, Perugia e Orvieto", "Sì, come estensione", "Borghi in collina; l'auto aiuta"],
        ["Piemonte", "Torino, le colline delle Langhe e le Alpi", "Sì, per un viaggio di cibo e vino", "Città e zone vinicole"],
        ["Trentino-Alto Adige", "Le Dolomiti, Bolzano e Trento", "Sì, per un viaggio in montagna", "Escursioni o sci; stagionale"],
        ["Sicilia", "Palermo, l'Etna, i templi di Agrigento e Siracusa", "Sì, con almeno una settimana", "Giro dell'isola"],
        ["Puglia", "I trulli di Alberobello, Lecce e il Salento", "Sì, con l'auto", "Viaggio on the road"],
        ["Friuli-Venezia Giulia", "Trieste, Udine e l'Aquileia romana", "Meglio per un viaggio successivo", "Città tranquille e natura"],
        ["Valle d'Aosta", "Il Monte Bianco e il Parco Nazionale del Gran Paradiso", "Meglio per un viaggio successivo", "Montagna"],
        ["Marche", "Urbino, il Conero e i borghi dell'entroterra", "Meglio per un viaggio successivo", "Viaggio lento in auto"],
        ["Abruzzo", "Parchi nazionali, paesi di montagna e costa adriatica", "Meglio per un viaggio successivo", "Natura in auto"],
        ["Molise", "Piccoli borghi collinari e pochissima folla", "Meglio per un viaggio successivo", "Viaggio lento in auto"],
        ["Basilicata", "Matera e la costa di Maratea", "Matera, come estensione dalla Puglia", "Soggiorno breve; auto o autobus"],
        ["Calabria", "Tropea, la Sila, il Pollino e un lungo tratto di costa", "Meglio per un viaggio successivo", "Mare o viaggio on the road"],
        ["Sardegna", "Spiagge, acqua limpida e nuraghi", "Meglio come viaggio a sé", "Vacanza al mare in auto"],
      ],
      "Le venti regioni in sintesi"
    ),

    // ——— 6–9 Itinerari ———
    h2("Itinerari di 5 giorni"),
    answer("Un buon primo itinerario va in una sola direzione, prevede almeno due notti per base e usa il treno tra le città. In cinque giorni, la scelta più equilibrata è Roma e Firenze."),
    p("I tempi di viaggio indicati negli itinerari sono quelli, approssimativi, dei treni ad alta velocità più rapidi. Al momento della prenotazione controlla gli orari aggiornati su [Trenitalia](https://www.trenitalia.com/it.html) o [Italo](https://www.italotreno.com/it)."),
    table(
      ["Notti", "Base", "Da non perdere"],
      [
        ["2", "Roma", "Colosseo e Foro; Musei Vaticani e San Pietro; il centro storico"],
        ["2", "Firenze", "Duomo, Uffizi o Accademia; l'Oltrarno; il tramonto da Piazzale Michelangelo"],
      ],
      "Roma e Firenze"
    ),
    p("**Perché funziona:** tra Roma e Firenze ci vuole circa un'ora e mezza di alta velocità, quindi l'unico spostamento pesa poco. Due notti a Roma sono poche: se trovi una notte in più, dalla a Roma. Si arriva a Roma e si riparte da Firenze o da Pisa, oppure si torna a Roma in treno per il volo."),

    h2("Itinerari di 7 giorni"),
    table(
      ["Notti", "Base", "Da non perdere"],
      [
        ["2", "Venezia", "San Marco presto la mattina o la sera; sestieri più quieti come Cannaregio e Castello; un'isola della laguna"],
        ["2", "Firenze", "I grandi musei, il Duomo e l'Oltrarno"],
        ["2–3", "Roma", "La Roma antica, il Vaticano e il centro storico"],
      ],
      "Venezia, Firenze e Roma"
    ),
    p("**Perché funziona:** il percorso scende da nord a sud con due viaggi in treno di circa due ore (Venezia–Firenze) e un'ora e mezza (Firenze–Roma). Si arriva a Venezia e si riparte da Roma. È il primo viaggio classico perché mette insieme tre città molto diverse senza quasi perdere tempo negli spostamenti."),
    {
      type: "image",
      src: `${IMG}/venice-grand-canal-gondolas-rialto.webp`,
      alt: "Gondole ormeggiate sul Canal Grande vicino al ponte di Rialto, a Venezia, al tramonto",
      caption: "Il Canal Grande vicino a Rialto. Dormire almeno una notte a Venezia permette di vederla dopo che i visitatori giornalieri se ne sono andati.",
      credit: unsplash("Rebe Adelaida", "rrebba"),
    },

    h2("Itinerari di 10 giorni"),
    table(
      ["Notti", "Base", "Da non perdere"],
      [
        ["2", "Venezia", "La città e un'isola della laguna"],
        ["2", "Firenze", "Musei e architettura"],
        ["2", "Campagna toscana (in auto)", "Borghi come Siena, Pienza o Montepulciano; cantine"],
        ["3", "Roma", "I luoghi principali con più calma, più una gita in giornata"],
      ],
      "Venezia, Firenze, campagna toscana e Roma"
    ),
    p("**Perché funziona:** i giorni in più vanno a un tratto rurale e più lento, invece che a un'altra città. L'auto si ritira uscendo da Firenze e si riconsegna prima di arrivare a Roma: in nessuna delle due città ti servirà. Se preferisci non guidare, sostituisci la campagna con gite da Firenze a Siena o a Lucca in treno o in autobus. Prima di metterti al volante, leggi la nostra guida su come [guidare in Italia](/it/guide/guidare-in-italia)."),

    h2("Itinerari di 14 giorni"),
    table(
      ["Notti", "Base", "Da non perdere"],
      [
        ["2–3", "Venezia", "La città con calma"],
        ["3", "Firenze", "La città, più una gita in Toscana"],
        ["4", "Roma", "I luoghi principali e una giornata più lenta"],
        ["3–4", "Napoli o Costiera Amalfitana", "Pompei o Ercolano; i paesi della costa in traghetto o in autobus"],
      ],
      "Da Venezia alla Costiera Amalfitana"
    ),
    p("**Perché funziona:** l'alta velocità prosegue da Roma a Napoli in circa un'ora e dieci, quindi la costa è un'estensione naturale. Si riparte da Napoli per non tornare indietro. In alternativa, al posto del Sud si possono mettere Milano e il Lago di Como all'inizio del viaggio."),

    // ——— 10 ———
    h2("Quando andare in Italia"),
    answer("Per un primo viaggio centrato sulle città, **da fine aprile a giugno** e **da settembre a ottobre** offrono di solito il miglior equilibrio tra clima e affollamento. Per il mare si va da giugno a settembre, per le escursioni su Alpi e Dolomiti l'estate è il periodo ideale, e l'inverno è la stagione dello sci."),
    p("Il periodo giusto dipende da che cosa vuoi fare, da come sopporti caldo e folla e dal budget. Anche il clima, nello stesso mese, cambia molto tra Nord e Sud."),
    h3("Primavera"),
    p("Clima piacevole per camminare in città, giornate lunghe e campagna verde. Pasqua e i ponti del 25 aprile e del 1° maggio portano molti viaggiatori italiani: in quei periodi conviene prenotare presto."),
    h3("Estate"),
    p("Alta stagione su coste e isole. Luglio e agosto possono essere molto caldi in città, e agosto è il mese delle ferie: le località di mare si riempiono intorno a Ferragosto, mentre in città alcune attività chiudono per una parte del mese. È invece il momento migliore per la montagna."),
    h3("Autunno"),
    p("Settembre conserva il caldo estivo con meno folla. Ottobre porta vendemmia, raccolta delle olive e, in alcune zone, la stagione del tartufo; le piogge però aumentano e alcuni servizi su coste e isole si riducono con la fine della stagione."),
    h3("Inverno"),
    p("Freddo al Nord e in montagna, più mite al Sud ma non da spiaggia. Le città sono più tranquille, tranne nel periodo natalizio, e sulle Alpi e sulle Dolomiti è stagione di sci. Molte attività di mare e delle isole restano chiuse."),
    table(
      ["Mese", "Clima", "Affollamento", "Vantaggi", "Da considerare"],
      [
        ["Gennaio", "Freddo al Nord, mite al Sud", "Basso (tranne le località sciistiche)", "Musei tranquilli; saldi invernali", "Giornate corte; chiusure stagionali al mare"],
        ["Febbraio", "Freddo, spesso umido", "Basso, tranne a Carnevale", "Carnevale a Venezia e altrove", "Tempo variabile"],
        ["Marzo", "In miglioramento, variabile", "Medio; alto se Pasqua è presto", "Inizio della primavera; meno folla", "La data di Pasqua cambia ogni anno"],
        ["Aprile", "Mite", "In crescita; alto a Pasqua e il 25 aprile", "Ottimo per camminare", "Prenotare presto i ponti"],
        ["Maggio", "Caldo gradevole", "Alto", "Giornate lunghe; giardini; si apre la stagione al mare", "Festività del 1° maggio; gite scolastiche nei siti principali"],
        ["Giugno", "Da caldo a molto caldo", "Alto", "Giornate lunghe; il mare si scalda", "Il caldo cresce, soprattutto al Sud"],
        ["Luglio", "Molto caldo", "Molto alto sulle coste", "Mare, festival, montagna", "Città calde; prezzi più alti"],
        ["Agosto", "Il mese più caldo", "Coste e isole affollatissime", "Mare e montagna", "Ferragosto (15 agosto); chiusure in città; prezzi di punta"],
        ["Settembre", "Caldo", "Alto all'inizio, poi in calo", "Mare ancora caldo; inizia la vendemmia", "Nella prima metà può fare ancora molto caldo"],
        ["Ottobre", "Mite, più piovoso verso fine mese", "Medio", "Raccolti; meno folla", "Giornate più corte; servizi al mare in chiusura"],
        ["Novembre", "Fresco e spesso piovoso", "Basso", "Città tranquille; prezzi più bassi", "Chiusure stagionali su coste e isole"],
        ["Dicembre", "Freddo al Nord, mite al Sud", "Basso fino a Natale", "Mercatini di Natale, soprattutto al Nord", "Festività l'8, il 25 e il 26 dicembre"],
      ],
      "L'Italia mese per mese"
    ),
    p("Per un quadro regione per regione c'è la nostra guida su [quando andare in Italia](/it/guide/quando-andare-in-italia)."),
    {
      type: "image",
      src: `${IMG}/val-dorcia-tuscany-countryside.webp`,
      alt: "Colline verdi, uliveti e un casale circondato da cipressi vicino a San Quirico d'Orcia, in Toscana",
      caption: "La Val d'Orcia vicino a San Quirico d'Orcia. Primavera e inizio autunno sono le stagioni più piacevoli per la campagna toscana.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },

    // ——— 11 ———
    h2("Quanto costa un viaggio in Italia?"),
    answer("Non esiste una cifra giornaliera affidabile. Il totale dipende soprattutto dall'**alloggio**, che è quasi sempre la voce più alta, poi dalla **stagione** e da **quanto ti sposti**. Meglio costruire il budget partendo dai prezzi reali per le tue date che dalle medie."),
    p("I prezzi variano molto tra città e stagioni e cambiano spesso: per questo ci concentriamo su che cosa si ottiene a ogni livello di spesa e sulle voci che colgono di sorpresa."),
    table(
      ["Voce", "Budget contenuto", "Fascia media", "Fascia alta"],
      [
        ["Alloggio", "Ostelli, B&B semplici o affittacamere, spesso fuori dal centro", "Hotel a tre stelle, B&B o appartamenti in centro", "Hotel a quattro e cinque stelle nei centri storici o con vista"],
        ["Cibo", "Forni, mercati, pizza al taglio, caffè al banco", "Pasti in trattoria e aperitivo", "Menu degustazione e alta cucina"],
        ["Trasporti in città", "A piedi, autobus e metropolitana", "Mezzi pubblici e qualche taxi", "Taxi e transfer privati"],
        ["Trasporti tra città", "Treni regionali e tariffe economiche dell'alta velocità", "Alta velocità prenotata in anticipo", "Classi superiori o autista privato"],
        ["Visite", "Luoghi gratuiti, chiese, piazze e giornate a ingresso libero", "I musei principali, prenotati", "Visite guidate e piccoli gruppi"],
      ],
      "Come si traduce ogni fascia di spesa"
    ),
    h3("Le spese che colgono di sorpresa"),
    ul(
      "**Coperto** — molti ristoranti lo applicano a persona; deve essere indicato nel menu.",
      "**Imposta di soggiorno** — quasi tutte le città la applicano a persona e a notte, spesso da pagare a parte in struttura.",
      "**Contributi d'accesso** — Venezia applica un contributo d'accesso ai visitatori giornalieri in date prestabilite (chi pernotta è esente, ma può dover registrarsi), e da febbraio 2026 Roma ha introdotto un biglietto per l'area più vicina alla Fontana di Trevi.",
      "**Multe stradali** — entrare in una ZTL senza autorizzazione può costare una multa che arriva mesi dopo il viaggio.",
      "**Taxi a tariffa fissa** — alcuni aeroporti hanno tariffe fisse ufficiali. Al momento della verifica, secondo Aeroporti di Roma, il taxi autorizzato tra Fiumicino e il centro di Roma entro le Mura Aureliane costava 55 € a tariffa fissa."
    ),
    tip("Calcola prima l'alloggio per le tue date reali, poi aggiungi i treni tra le città, infine una cifra giornaliera per cibo, visite e trasporti locali. Tieni un margine del 10–15% per le voci qui sopra.", "Come costruire il budget"),
    p("La nostra guida su [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia) entra nel dettaglio di ogni voce."),

    // ——— 12 ———
    h2("Come muoversi in Italia"),
    answer("Tra le grandi città conviene il **treno**, che una volta conteggiati i tempi in aeroporto è di solito più rapido dell'aereo. L'**auto** serve nelle zone rurali, i **traghetti** per isole e costa, i **voli interni** per le lunghe distanze, come dal Nord alla Sicilia o alla Sardegna."),
    table(
      ["Mezzo", "Ideale per", "Vantaggi", "Limiti"],
      [
        ["Treni ad alta velocità", "Spostamenti tra grandi città", "Veloci, frequenti, da centro a centro", "Le tariffe salgono con l'avvicinarsi della partenza; il biglietto vale per un treno preciso"],
        ["Treni regionali", "Tragitti brevi e centri minori", "Prezzo fisso; raggiungono molti paesi", "Più lenti; meno comodi sulle linee affollate"],
        ["Autobus", "Borghi collinari e località senza stazione", "Arrivano dove il treno non arriva", "Orari ridotti la domenica e fuori stagione"],
        ["Auto a noleggio", "Campagna, Sud e isole", "Libertà di esplorare le zone rurali", "ZTL, parcheggi, pedaggi e carburante"],
        ["Traghetti", "Isole e alcuni tratti di costa", "Panoramici; evitano il traffico costiero", "Meteo e orari stagionali"],
        ["Voli interni", "Lunghe distanze, per esempio dal Nord alla Sicilia", "Fanno risparmiare una giornata", "Trasferimenti e controlli in aeroporto"],
        ["Taxi e transfer", "Aeroporti, arrivi a tarda ora, bagagli pesanti", "Porta a porta", "Costosi sulle lunghe distanze"],
      ],
      "Come scegliere il mezzo"
    ),
    {
      type: "image",
      src: `${IMG}/milano-centrale-high-speed-train.webp`,
      alt: "Un treno ad alta velocità rosso sotto la volta in ferro e vetro della stazione di Milano Centrale",
      caption: "Un treno ad alta velocità a Milano Centrale. La rete veloce va da Torino e Milano a Napoli e Salerno passando per Bologna, Firenze e Roma, con collegamenti rapidi anche per Venezia.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },
    h3("Treni ad alta velocità"),
    p("L'alta velocità è gestita da due aziende: Trenitalia (Frecciarossa e servizi collegati) e l'operatore privato Italo. I biglietti valgono per un treno e un posto precisi, e le tariffe più economiche tendono a esaurirsi con l'avvicinarsi della partenza: conviene prenotare appena il percorso è deciso. I biglietti di un operatore non valgono sui treni dell'altro."),
    h3("Treni regionali"),
    p("I regionali hanno un prezzo fisso, quindi non serve prenotarli in anticipo. Secondo Trenitalia, **i biglietti regionali cartacei vanno convalidati** nelle apposite macchinette in stazione prima della partenza, mentre **quelli digitali si attivano automaticamente** all'orario di partenza del treno scelto: conviene quindi acquistare il biglietto digitale per il treno che si prenderà davvero."),
    p("Per tutti i dettagli su biglietti, classi e stazioni leggi la nostra guida su come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno); per i tempi di viaggio e la scelta del mezzo, [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),
    h3("Autobus"),
    p("Gli autobus extraurbani coprono i vuoti della rete ferroviaria, soprattutto per i borghi di Toscana e Umbria e in parte del Sud. Le corse si riducono spesso la domenica, nei festivi e fuori stagione."),
    h3("Auto a noleggio"),
    p("Con l'auto, la campagna toscana, la Puglia, la Sicilia o le Dolomiti diventano molto più semplici. In città, invece, è quasi sempre un peso: la maggior parte dei centri storici è una **ZTL** (zona a traffico limitato) controllata da telecamere, e i parcheggi sono pochi."),
    important("Se la tua patente è stata rilasciata fuori dall'UE/SEE, le norme italiane richiedono di portare con sé un permesso internazionale di guida o una traduzione ufficiale insieme alla patente. Verifica il requisito per la tua patente prima di partire e fai attenzione ai cartelli delle ZTL: entrarci senza autorizzazione può costare una multa.", "Prima di guidare"),
    p("Limiti di velocità, pedaggi, ZTL e parcheggi sono spiegati nella guida su come [guidare in Italia](/it/guide/guidare-in-italia)."),
    {
      type: "image",
      src: `${IMG}/liguria-coastal-road-car.webp`,
      alt: "Una piccola auto rossa su una strada stretta tra scogliere ed edifici sulla costa ligure vicino a Grimaldi",
      caption: "Una strada costiera vicino a Grimaldi, in Liguria. Le strade di costa e di montagna sono spesso strette e lente: calcola più tempo di quanto suggerisca la mappa.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },
    h3("Traghetti"),
    p("I traghetti collegano la terraferma con Sicilia, Sardegna e le isole del Golfo di Napoli, e in stagione percorrono alcuni tratti di costa. Le traversate estive, soprattutto con l'auto, vanno prenotate con largo anticipo. Per rotte, porti e check-in vedi l'articolo sui [traghetti in Italia](/it/trasporti/traghetti-in-italia)."),
    h3("Voli interni"),
    p("L'aereo ha senso sulle lunghe distanze, per esempio da Milano o Venezia a Palermo, Catania o Cagliari. Tra Roma, Firenze, Venezia, Milano e Napoli il treno è di solito più rapido, porta a porta."),
    h3("Taxi e trasferimenti dagli aeroporti"),
    p("Usa solo taxi ufficiali presi ai posteggi segnalati. Molti aeroporti hanno treni o autobus diretti per la città: da Fiumicino, per esempio, il Leonardo Express porta senza fermate a Roma Termini. La nostra guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia) mette a confronto i principali scali."),

    // ——— 13 ———
    h2("Dove soggiornare"),
    answer("Per le visite brevi in città conviene dormire in centro, vicino a una stazione principale se si riparte presto, e in campagna solo se si ha l'auto. Nella maggior parte delle città conta più la posizione della grandezza della camera."),
    h3("Tipi di alloggio"),
    ul(
      "**Hotel** — classificati da una a cinque stelle; negli edifici storici le camere sono spesso piccole.",
      "**B&B e affittacamere** — spesso poche stanze in un palazzo residenziale; se arrivi tardi, controlla gli orari della reception.",
      "**Agriturismi** — alloggi in aziende agricole, in genere in campagna e spesso con cucina a base di prodotti locali. Serve quasi sempre l'auto.",
      "**Appartamenti** — comodi per famiglie e soggiorni lunghi; verifica le modalità di check-in e se c'è l'ascensore.",
      "**Ostelli** — camerate e stanze private nelle città principali.",
      "**Resort** — soprattutto su coste e isole, molti aperti solo in stagione."
    ),
    h3("Scegliere il quartiere"),
    table(
      ["Zona", "Ideale per", "Compromessi"],
      [
        ["Roma — Centro storico", "Raggiungere a piedi Pantheon, Piazza Navona e Fontana di Trevi", "Più caro e affollato; poche fermate della metro"],
        ["Roma — zona Termini", "Arrivare e ripartire in treno o con il collegamento per l'aeroporto", "Meno atmosfera; cambia molto da strada a strada"],
        ["Roma — Trastevere", "Atmosfera serale e ristoranti", "Può essere rumoroso la sera; lontano dalla metro"],
        ["Roma — Prati", "Strade più tranquille vicino al Vaticano, servite dalla metro", "Lontano a piedi dai siti antichi"],
        ["Firenze — Centro storico", "Tutto raggiungibile a piedi", "Affollato in alta stagione"],
        ["Firenze — Santa Maria Novella", "Vicino alla stazione principale", "Più trafficato intorno alla stazione"],
        ["Firenze — Santa Croce", "Centrale, con molti ristoranti", "Alcune vie sono animate la sera"],
        ["Venezia — San Marco", "La zona più vicina ai luoghi più famosi", "La più affollata e di solito la più cara"],
        ["Venezia — Cannaregio", "Vicino alla stazione, con un'aria più residenziale", "Più lontano da San Marco"],
        ["Venezia — Dorsoduro", "Musei, atmosfera più calma, le Zattere", "Più tranquillo la sera"],
        ["Mestre (terraferma)", "Prezzi più bassi, con treni e autobus per Venezia", "La sera non sei nella città storica"],
      ],
      "Pro e contro dei quartieri nelle tre città più visitate"
    ),
    p("A Venezia, dormire nella città storica significa vederla dopo la partenza dei visitatori giornalieri. Chi pernotta è esente dal contributo d'accesso, ma potrebbe dover comunque registrarsi: le regole aggiornate sono sul [sito ufficiale del Contributo d'Accesso](https://cda.ve.it/it/)."),

    // ——— 14 ———
    h2("Cosa prenotare in anticipo"),
    answer("Alloggio, treni a lunga percorrenza e luoghi con ingresso a orario vanno prenotati appena le date sono certe. Quasi tutti i ristoranti, i treni regionali e i trasporti locali si possono organizzare sul posto."),
    table(
      ["Quando", "Che cosa prenotare"],
      [
        ["Appena le date sono fissate", "L'alloggio, soprattutto d'estate, a Pasqua o in occasione di grandi eventi; i voli; il Cenacolo di Leonardo a Milano, che si esaurisce molto presto"],
        ["Qualche settimana prima", "I treni ad alta velocità; Musei Vaticani, Uffizi, Colosseo e gli altri siti con ingresso a orario; traghetti e auto a noleggio per l'estate"],
        ["Da qualche giorno a una settimana prima", "Visite guidate e corsi di cucina più richiesti; ristoranti per un'occasione speciale o una cena nel weekend"],
        ["Di solito basta il giorno stesso", "Treni regionali; autobus e metro in città; gran parte delle chiese; il pranzo nella maggior parte delle trattorie"],
      ],
      "Quando prenotare che cosa"
    ),
    p("Prenota sempre dal sito ufficiale del museo o dell'operatore — per esempio le [Gallerie degli Uffizi](https://www.uffizi.it/), i [Musei Vaticani](https://www.museivaticani.va/content/museivaticani/it.html) e il [Cenacolo Vinciano](https://cenacolovinciano.org/). I rivenditori spesso costano di più, e le disponibilità che mostrano non sono sempre aggiornate."),
    tip("Controlla la pagina di prenotazione di ogni luogo per le tue date precise, non solo le regole generali: giornate gratuite, festività e orari stagionali cambiano i tempi in cui i biglietti si esauriscono."),

    // ——— 15 ———
    h2("Mangiare in Italia: cosa sapere"),
    answer("Scegli i piatti per cui la regione è nota, metti in conto orari di cena più tardi rispetto a molti Paesi e non sentirti obbligato a ordinare tutte le portate. Il coperto è frequente; la mancia non è attesa come in altri Paesi."),
    p("La cucina italiana è prima di tutto regionale. La carbonara è un piatto romano, il pesto è ligure, i tortellini sono emiliani. Ordinare le specialità locali è quasi sempre il modo migliore per mangiare bene. Approfondisci con le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    h3("Orari e ordinazioni"),
    ul(
      "Il pranzo va in genere dalle 12:30 alle 14:30. La cena inizia spesso alle 19:30 o alle 20, e più tardi al Sud.",
      "Un pasto completo prevede antipasto, primo, secondo con contorno e dolce. Una o due portate sono del tutto normali.",
      "Il conto arriva di solito solo quando lo chiedi.",
      "Nei locali più frequentati conviene prenotare la cena, soprattutto nel fine settimana."
    ),
    h3("Caffè, aperitivo e bar"),
    p("Il bar italiano è tanto un caffè quanto un luogo dove bere. Il caffè si prende in piedi al banco, dove spesso costa meno che al tavolo; in molti bar si paga prima alla cassa e si mostra lo scontrino al barista. Il cappuccino è in genere una bevanda della mattina. L'aperitivo — un drink nel tardo pomeriggio, di solito con qualcosa da mangiare — è un rito quotidiano in molte città."),
    {
      type: "image",
      src: `${IMG}/italian-coffee-bar-counter.webp`,
      alt: "Un barista chiacchiera con un cliente al banco di un piccolo bar a San Quirico d'Orcia, in Toscana",
      caption: "Un bar a San Quirico d'Orcia. Il caffè al banco è il modo quotidiano di prendere un caffè in Italia.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Pagare: coperto, servizio e mance"),
    p("Molti ristoranti applicano un coperto a persona, e alcuni una percentuale di servizio; entrambi devono comparire nel menu. La mancia non è attesa come in altri Paesi, ma arrotondare o lasciare qualcosa per un buon servizio è comune e apprezzato."),

    // ——— 16 ———
    h2("Pagamenti, internet e aspetti pratici"),
    ul(
      "**Moneta** — l'euro. Le carte, anche contactless, sono accettate quasi ovunque in città, ma tieni un po' di contanti per mercati, piccoli bar e zone rurali.",
      "**Bancomat** — gli sportelli delle banche riducono il rischio di commissioni elevate. Se il POS o lo sportello propongono l'addebito nella valuta del tuo Paese, scegliere l'euro evita di solito un cambio sfavorevole.",
      "**Dati mobili** — con una SIM di un Paese dell'UE si può in genere usare il proprio piano in Italia secondo le regole del roaming europeo. Chi arriva da fuori UE può acquistare una eSIM prima di partire o una SIM italiana, per cui serve un documento d'identità.",
      "**Wi-Fi** — è la norma in hotel e appartamenti, anche se la velocità varia negli edifici storici e nelle zone rurali.",
      "**Corrente** — prese di tipo C, F e L a 230 V, 50 Hz. Controlla che i caricatori supportino i 230 V; quasi tutti quelli di telefoni e computer lo fanno.",
      "**Emergenze** — il numero è il 112, il numero unico europeo."
    ),

    // ——— 17 ———
    h2("Documenti e preparazione"),
    answer("I requisiti d'ingresso dipendono dalla cittadinanza. Vanno verificati sulle fonti ufficiali, non su siti di terze parti, prima di prenotare."),
    ul(
      "**Passaporto o carta d'identità** — verifica le regole di validità che ti riguardano. I cittadini dell'UE possono viaggiare con una carta d'identità valida.",
      "**Visti e regole d'ingresso** — il Ministero degli Affari Esteri mette a disposizione un [questionario ufficiale sui visti](https://vistoperitalia.esteri.it/) in base a cittadinanza, residenza, motivo e durata del soggiorno.",
      "**Sistema di ingressi/uscite (EES)** — ai cittadini di Paesi terzi in soggiorno breve vengono registrati in forma digitale, anche con impronte e immagine del volto, gli attraversamenti delle frontiere esterne dei Paesi aderenti. Il sistema è pienamente operativo dal 10 aprile 2026 e sostituisce il timbro sul passaporto.",
      "**ETIAS** — l'autorizzazione di viaggio per chi è esente dal visto è stata annunciata, ma al momento della stesura (settembre 2026) non era ancora in funzione. Verifica lo stato sul [sito ufficiale ETIAS](https://travel-europe.europa.eu/it/etias) prima di partire.",
      "**Assicurazione di viaggio** — controlla che copra spese mediche, annullamenti e le attività che hai in programma.",
      "**Copie** — tieni copie digitali di passaporto, assicurazione, patente e prenotazioni, consultabili anche offline.",
      "**Conferme** — salva sul telefono le conferme di alloggi, treni e musei, con uno screenshot nel caso manchi il segnale."
    ),
    important("Le regole su visti, validità del passaporto e registrazione alle frontiere possono cambiare. Verifica sempre i requisiti aggiornati per la tua cittadinanza sulle fonti ufficiali, a ridosso della partenza.", "Prima di partire"),

    // ——— 18 ———
    h2("Errori comuni da evitare"),
    table(
      ["Errore", "Perché conta", "Che cosa fare invece"],
      [
        ["Voler vedere troppo", "I giorni di viaggio tolgono spazio ai luoghi", "Meno basi, soggiorni più lunghi"],
        ["Cambiare hotel ogni notte", "Valigie e check-in erodono ogni giornata", "Almeno due notti per tappa"],
        ["Sottovalutare i tempi di spostamento", "Le mappe non contano stazioni, traghetti e strade tortuose", "Calcola mezza giornata per ogni cambio di base"],
        ["Non verificare le prenotazioni obbligatorie", "I luoghi con ingresso a orario si esauriscono con settimane d'anticipo", "Prenota per primi quelli che contano di più"],
        ["Pensare che i trasporti funzionino ovunque allo stesso modo", "Il treno è ottimo tra le grandi città, meno nelle zone rurali", "Prevedi l'auto o visite organizzate per la campagna"],
        ["Mangiare solo accanto ai monumenti", "I menu pensati per chi passa sono spesso i meno convenienti", "Allontanati di qualche strada e segui chi abita lì"],
        ["Dimenticare le chiusure stagionali", "Hotel di mare, traghetti e impianti chiudono fuori stagione", "Controlla le date per costa e montagna"],
        ["Non convalidare il biglietto del treno", "I biglietti regionali cartacei vanno convalidati prima di salire", "Convalida in stazione, o acquista il biglietto digitale per il tuo treno"],
        ["Preparare la valigia per la stagione sbagliata", "In chiesa servono spalle e ginocchia coperte; la sera può fare fresco", "Vestiti a strati e un capo più sobrio"],
        ["Non lasciare margini", "Maltempo, scioperi o stanchezza possono far saltare un piano troppo stretto", "Mezza giornata libera per ogni base"],
      ],
      "Errori frequenti e come evitarli"
    ),
    {
      type: "image",
      src: `${IMG}/rome-cafe-tables-street.webp`,
      alt: "Tavolini di un ristorante all'aperto lungo una strada di Roma",
      caption: "Una strada di Roma. Alcuni dei pasti migliori sono a pochi minuti a piedi dai monumenti principali.",
      credit: unsplash("Sara Abilova", "sarahabilova"),
    },

    // ——— 19 ———
    h2("Checklist prima della partenza"),
    p("Spunta ogni voce man mano che procedi."),
    {
      type: "checklist",
      id: "primo-viaggio-italia",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Decidi la durata in notti", "Scegli il tipo di viaggio", "Scegli da due a quattro basi", "Verifica i requisiti d'ingresso per la tua cittadinanza", "Fissa un budget"],
        },
        {
          title: "Prima della partenza",
          items: ["Prenota gli alloggi", "Prenota i treni ad alta velocità", "Prenota i luoghi con ingresso a orario", "Stipula l'assicurazione di viaggio", "Attiva eSIM o roaming", "Prepara carte di pagamento e un po' di contanti"],
        },
        {
          title: "Prima di uscire di casa",
          items: ["Passaporto o carta d'identità", "Conferme salvate offline", "Contatti di emergenza", "Farmaci ed effetti personali", "Copie dei documenti importanti", "Permesso di guida, se guiderai"],
        },
      ],
    },
    {
      type: "image",
      src: `${IMG}/positano-amalfi-coast.webp`,
      alt: "Le case di Positano arroccate sulla scogliera sopra il mare, in Costiera Amalfitana",
      caption: "Positano, in Costiera Amalfitana: una tappa finale naturale per un itinerario di due settimane che scende da Roma verso sud.",
      credit: unsplash("Jānis Beitiņš", "jbeitins"),
    },
  ],

  faqs: [
    { question: "Quanti giorni servono per visitare l'Italia?", answer: "Per un primo viaggio, di solito tra sette e quattordici giorni. Una settimana permette di vedere bene due o tre città; con dieci-quattordici giorni si aggiungono campagna, mare o Sud. Conviene prevedere almeno due notti in ogni tappa." },
    { question: "Quali sono le mete migliori per un primo viaggio in Italia?", answer: "Roma, Firenze e Venezia sono la combinazione più pratica, perché i treni veloci le collegano e ognuna ha un centro da girare a piedi. A queste si aggiungono spesso la Costiera Amalfitana e Napoli, Milano e il Lago di Como, oppure la campagna toscana, a seconda degli interessi." },
    { question: "È facile viaggiare in Italia in treno?", answer: "Sì, tra le grandi città. L'alta velocità collega Milano, Venezia, Bologna, Firenze, Roma e Napoli in modo rapido e frequente. Zone rurali, gran parte del Sud e le isole sono invece più difficili da raggiungere solo in treno." },
    { question: "Serve un'auto per visitare l'Italia?", answer: "Dipende dall'itinerario. Per le città non serve ed è spesso un ostacolo, a causa delle ZTL e dei parcheggi. Per la campagna toscana, la Puglia, la Sicilia, la Sardegna o le Dolomiti, invece, l'auto semplifica molto il viaggio." },
    { question: "Qual è il mese migliore per andare in Italia?", answer: "Non ce n'è uno solo. Per un viaggio in città, da fine aprile a giugno e da settembre a ottobre di solito si trovano il clima e l'affollamento più equilibrati. Da giugno a settembre è la stagione del mare, l'estate è ideale per la montagna e l'inverno per lo sci." },
    { question: "Quanto costa un viaggio in Italia?", answer: "Dipende soprattutto dall'alloggio, dalla stagione e da quanto ci si sposta. Conviene calcolare alloggi e treni per le date reali, aggiungere una cifra giornaliera per cibo e visite e poi un margine per imposta di soggiorno, coperto e altre voci minori." },
    { question: "Bisogna prenotare i musei in anticipo?", answer: "Per i luoghi più celebri sì. Il Cenacolo a Milano, i Musei Vaticani, gli Uffizi e il Colosseo usano biglietti a orario che possono esaurirsi. Vanno prenotati sui siti ufficiali appena le date sono definite." },
    { question: "Che cosa sapere sui ristoranti in Italia?", answer: "Si cena più tardi che in molti Paesi, non è necessario ordinare tutte le portate e il conto arriva quando lo si chiede. Molti ristoranti applicano un coperto a persona. La mancia non è obbligatoria, anche se arrotondare è comune." },
    { question: "Si possono vedere Roma, Firenze e Venezia in una settimana?", answer: "Sì. Con due notti a Venezia, due a Firenze e due o tre a Roma, i due viaggi in treno durano circa due ore e un'ora e mezza. Arrivando a Venezia e ripartendo da Roma si evita di tornare indietro." },
    { question: "Quali errori evitare nel primo viaggio in Italia?", answer: "Voler vedere troppe città, cambiare hotel ogni notte ed entrare in auto nei centri storici. Meglio prenotare per tempo i luoghi con ingresso a orario, convalidare i biglietti regionali cartacei prima di salire sul treno e tenere un po' di tempo libero in ogni tappa." },
  ],

  sourcesTitle: "Fonti ufficiali consultate",
  sources: [
    { label: "Italia.it — portale ufficiale del turismo in Italia", url: "https://www.italia.it/it", note: "informazioni generali sulle destinazioni" },
    { label: "Ministero degli Affari Esteri — Il visto per l'Italia", url: "https://vistoperitalia.esteri.it/", note: "questionario ufficiale sui visti" },
    { label: "Commissione europea — Sistema di ingressi/uscite (EES)", url: "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_it", note: "funzionamento dell'EES" },
    { label: "Travel to Europe — ETIAS", url: "https://travel-europe.europa.eu/it/etias", note: "stato di ETIAS" },
    { label: "Trenitalia — Viaggiare con il Regionale", url: "https://www.trenitalia.com/it/regionale/viaggiare-con-il-regionale.html", note: "convalida dei biglietti" },
    { label: "Trenitalia — Biglietto Digitale Regionale", url: "https://www.trenitalia.com/it/treni_regionali/nuovo-biglietto-digitale-regionale.html", note: "attivazione automatica" },
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html", note: "collegamento Fiumicino–Termini" },
    { label: "Italo", url: "https://www.italotreno.com/it", note: "operatore dell'alta velocità" },
    { label: "Aeroporti di Roma — Taxi da Fiumicino", url: "https://www.adr.it/pax-fco-taxi", note: "tariffa fissa" },
    { label: "Comune di Venezia — Contributo d'Accesso", url: "https://cda.ve.it/it/", note: "contributo per i visitatori giornalieri" },
    { label: "Roma Capitale — Biglietto d'ingresso alla Fontana di Trevi", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "accesso alla Fontana di Trevi" },
    { label: "112 — Numero unico europeo di emergenza", url: "https://112.gov.it/", note: "numero di emergenza" },
  ],
};
