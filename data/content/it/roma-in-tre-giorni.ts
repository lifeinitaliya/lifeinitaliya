import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Rome in Three Days", scritta per chi legge in italiano.
// Biglietti del Colosseo, aperture dei Musei Vaticani, ingresso a San Pietro,
// accesso a Pantheon e Fontana di Trevi, Tap & Go ATAC, metro C e
// collegamenti con gli aeroporti sono stati verificati su fonti ufficiali a
// settembre 2026. Prezzi, orari, attese e tempi non vengono citati.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });

const IMG = "/images/guides/rome-in-three-days";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const romaInTreGiorni: ArticleContent = {
  body: [
    // ——— Apertura ———
    answer("**Tre giorni bastano per una vera prima visita a Roma, non per vederla tutta.** La città è troppo grande e stratificata per un fine settimana lungo, ma tre giornate ben organizzate permettono di vedere la Roma antica, il Vaticano e il centro storico, con il tempo per i quartieri e per mangiare con calma. Il programma che segue funziona perché **raggruppa i luoghi per zona**, così non attraversi la città avanti e indietro, **prenota solo ciò che serve**, alterna monumenti e ore più lente a Monti, Trastevere o in centro, e **lascia spazi liberi** per camminare, mangiare e gli imprevisti. L'auto non serve: si cammina molto, con metro, bus o taxi per i tragitti più lunghi."),
    {
      type: "facts",
      title: "Roma in tre giorni in sintesi",
      rows: [
        { label: "Durata consigliata", value: "3 giorni pieni (più arrivo e partenza)" },
        { label: "Ideale per", value: "Chi visita Roma per la prima volta e vuole l'essenziale senza correre" },
        { label: "Zone principali", value: "Roma antica, Vaticano e Prati, centro storico e Trastevere" },
        { label: "Quanto si cammina", value: "Molto: diversi chilometri al giorno, spesso su selciato irregolare" },
        { label: "Da prenotare", value: "Colosseo e Musei Vaticani; il Pantheon ha ingressi a orario" },
        { label: "Mezzi pubblici", value: "Metro A, B e C, bus e tram; pagamento contactless Tap & Go" },
        { label: "Dagli aeroporti", value: "Fiumicino: treno, bus o taxi; Ciampino: bus, bus più treno o taxi" },
        { label: "Regola d'oro", value: "Una zona al giorno, una prenotazione per mattina" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/rome-rooftops-domes.webp`,
      alt: "Tetti, cupole e campanili di Roma sotto il cielo azzurro, con il Vittoriano bianco a sinistra e le colline all'orizzonte",
      caption: "Il centro storico di Roma dall'alto, con il Vittoriano a sinistra.",
      credit: unsplash("Gabriel Tovar", "gabrielrana"),
      wide: true,
    },

    // ——— 1 ———
    h2("Si può vedere Roma in tre giorni?"),
    p("Si possono vedere i luoghi più importanti e capire come funziona la città. Non si può vedere tutto, e provarci significa ricordare solo code e taxi. Questo itinerario sceglie poche grandi visite — l'area del Colosseo, il Vaticano e il Pantheon — e costruisce ogni giornata intorno a una di esse, con percorsi a piedi tra i luoghi vicini e tempo libero."),
    p("Il programma presuppone tre giornate piene. Se arrivi nel pomeriggio, dedica la sera a una passeggiata fino a Fontana di Trevi e piazza Navona e comincia l'itinerario la mattina dopo."),

    // ——— 2 ———
    h2("Il programma in sintesi"),
    table(
      ["Giorno", "Zona", "Luoghi principali", "Ritmo"],
      [
        ["Primo giorno", "Roma antica e Monti", "Colosseo, Foro Romano, Palatino, Campidoglio", "Mattina intensa, pomeriggio più tranquillo"],
        ["Secondo giorno", "Vaticano e Prati", "Musei Vaticani e Cappella Sistina, Basilica di San Pietro, Castel Sant'Angelo (facoltativo)", "Lunga mattina al chiuso; sera tranquilla"],
        ["Terzo giorno", "Centro storico e Trastevere", "Pantheon, piazza Navona, Fontana di Trevi, piazza di Spagna, Trastevere", "Giornata a piedi, con scelte"],
      ],
      "Roma in tre giorni"
    ),
    p("Puoi invertire il primo e il secondo giorno se i biglietti lo rendono più comodo, ma tieni ogni zona nella sua giornata. I Musei Vaticani sono chiusi quasi tutte le domeniche: non programmare il Vaticano di domenica."),

    // ——— 3 ———
    h2("Primo giorno: la Roma antica"),
    p("Colosseo, Foro Romano e Palatino sono uno accanto all'altro nel parco archeologico gestito dal Parco archeologico del Colosseo, e un unico biglietto li comprende tutti e tre. Rendono al meglio di mattina, prima del caldo e della folla più fitta, e in quest'ordine."),
    steps(
      ["Mattina: il Colosseo (1 ora–1 ora e mezza)", "Arriva un po' prima dell'orario prenotato. La fermata Colosseo della metro B è di fronte; da dicembre 2025 anche la metro C ferma a Colosseo–Fori Imperiali, con interscambio con la linea B."],
      ["Tarda mattinata: Foro Romano e Palatino (2–3 ore)", "Entra nel Foro, il cuore politico dell'antica Roma, poi sali sul Palatino, dove gli imperatori costruirono i loro palazzi, per la vista sul Foro e sul Circo Massimo. C'è poca ombra: d'estate porta acqua e cappello."],
      ["Pranzo a Monti", "Esci dal parco e raggiungi Monti, quartiere di stradine appena a nord del Foro, per pranzare e riposare."],
      ["Pomeriggio: il Campidoglio", "Sali in piazza del Campidoglio, disegnata da Michelangelo. Dietro il Palazzo Senatorio c'è una vista gratuita dall'alto sul Foro. I Musei Capitolini sono facoltativi, se hai ancora energie."],
      ["Sera: da piazza Venezia a Monti o al centro", "Passa davanti al Vittoriano in piazza Venezia e trascorri la serata a Monti o nel centro storico."],
    ),
    {
      type: "image",
      src: `${IMG}/colosseum-sunrise.webp`,
      alt: "Il Colosseo di Roma nella luce del primo mattino, con le arcate esterne dorate sotto un cielo chiaro",
      caption: "Il Colosseo, da visitare all'inizio della giornata.",
      credit: unsplash("Matteo del Piano", "matteodelpiano"),
    },
    h3("I biglietti del Colosseo"),
    p("Secondo il Parco archeologico del Colosseo, i biglietti sono nominativi e prevedono un ingresso a orario al Colosseo; il biglietto ordinario comprende anche un ingresso al Foro Romano e uno al Palatino, da visitare prima o dopo il Colosseo entro la validità del biglietto. Altri biglietti aggiungono aree come l'arena. Acquista solo sul [sito ufficiale di biglietteria](https://ticketing.colosseo.it/), perché i rivenditori spesso fanno pagare di più, e controlla che cosa comprende ciascun biglietto prima di scegliere."),
    {
      type: "image",
      src: `${IMG}/roman-forum-temple-columns.webp`,
      alt: "Le rovine del Foro Romano con le colonne del Tempio di Saturno, un arco trionfale e cupole di chiese sullo sfondo, sotto il cielo azzurro",
      caption: "Il Foro Romano sotto il Campidoglio, con le colonne del Tempio di Saturno a destra.",
      credit: unsplash("Massimo Virgilio", "massimovirgilio"),
    },
    tip("Se le energie finiscono, rinuncia al Palatino piuttosto che correre nel Foro, oppure salta i Musei Capitolini e goditi solo la vista dal Campidoglio. Le aree archeologiche sono faticose, su pietre irregolari.", "Poche energie?"),

    // ——— 4 ———
    h2("Secondo giorno: Vaticano e Prati"),
    p("La Città del Vaticano è uno Stato indipendente dentro Roma, e i suoi luoghi principali funzionano in modo diverso:"),
    ul(
      "**Musei Vaticani** — un insieme vastissimo di collezioni, dalla scultura antica alle Stanze di Raffaello. Si entra con biglietto, e la prenotazione online è il modo più sicuro.",
      "**Cappella Sistina** — la volta e il *Giudizio universale* di Michelangelo. Si trova alla fine del percorso dei Musei e non ha un biglietto a parte.",
      "**Basilica di San Pietro** — la chiesa principale della Chiesa cattolica. L'ingresso è gratuito, dopo i controlli di sicurezza in piazza San Pietro.",
      "**Piazza San Pietro** — la piazza colonnata del Bernini davanti alla basilica, aperta a tutti.",
    ),
    steps(
      ["Mattina: Musei Vaticani e Cappella Sistina (3–4 ore)", "Prenota una fascia del mattino presto sul [sito ufficiale dei Musei Vaticani](https://tickets.museivaticani.va/). Secondo i Musei, sono aperti dal lunedì al sabato e l'ultima domenica del mese, quando l'ingresso è gratuito e c'è moltissima gente. Non provare a vedere ogni galleria: segui il percorso verso le Stanze di Raffaello e la Sistina."],
      ["Pranzo a Prati", "Esci a Prati, l'ordinato quartiere ottocentesco a est del Vaticano, per un pranzo meno turistico."],
      ["Pomeriggio: Basilica di San Pietro (1 ora–1 ora e mezza)", "Raggiungi piazza San Pietro e mettiti in fila ai controlli. Chi visita da solo di solito esce dai Musei e arriva a piedi in piazza: verifica le modalità in vigore invece di contare su scorciatoie. Se hai energie, sali sulla cupola, che ha un biglietto a parte."],
      ["Tardo pomeriggio: Castel Sant'Angelo (facoltativo)", "Il mausoleo di Adriano, poi fortezza papale, è a 10 minuti a piedi da San Pietro. Visitalo se hai ancora energie, oppure attraversa semplicemente Ponte Sant'Angelo verso il centro."],
      ["Sera", "Cena a Prati, oppure oltre il fiume, nel centro storico."],
    ),
    {
      type: "image",
      src: `${IMG}/vatican-museums-spiral-staircase.webp`,
      alt: "La scala elicoidale dei Musei Vaticani vista dall'alto, con i visitatori che scendono lungo le rampe curve",
      caption: "La scala elicoidale all'uscita dei Musei Vaticani.",
      credit: unsplash("Jonathan Singer", "jbsinger1970"),
    },
    {
      type: "image",
      src: `${IMG}/st-peters-basilica.webp`,
      alt: "La facciata e la cupola della Basilica di San Pietro in Vaticano sotto un cielo azzurro",
      caption: "La Basilica di San Pietro: ingresso gratuito, dopo i controlli in piazza.",
      credit: unsplash("Fabio Fistarol", "fabiofistarol"),
    },
    p("Secondo la basilica, l'ingresso a San Pietro è gratuito e la prenotazione non è obbligatoria; chi vuole la garanzia di una fascia oraria può prenotare a pagamento, con audioguida digitale inclusa. Nella basilica spalle e ginocchia devono essere coperte, e lo stesso vale per la Cappella Sistina. Le celebrazioni religiose possono cambiare l'accesso con poco preavviso: controlla il [sito della basilica](https://www.basilicasanpietro.va/) per il giorno della visita."),
    important("La giornata in Vaticano è lunga e quasi tutta in piedi. È normale uscire stanchi dai Musei: in quel caso, sposta San Pietro alla mattina del terzo giorno invece di forzare.", "Il Vaticano non è una visita veloce"),

    // ——— 5 ———
    h2("Terzo giorno: centro storico e Trastevere"),
    p("Il centro storico è raccolto e va visto a piedi. Questa giornata collega le piazze e le fontane principali in un anello, poi attraversa il fiume per la sera. Non serve entrare dappertutto."),
    steps(
      ["Mattina: il Pantheon (30–45 minuti)", "Costruito sotto Adriano come tempio e consacrato come chiesa nel VII secolo, il Pantheon ha ancora la più grande cupola in calcestruzzo non armato del mondo. L'ingresso è a pagamento: compra il biglietto a orario sui canali ufficiali Musei Italiani oppure in loco."],
      ["Piazza Navona", "Cinque minuti a ovest, la Fontana dei Quattro Fiumi del Bernini fronteggia Sant'Agnese in Agone di Borromini. Prosegui fino a Campo de' Fiori, dove il mercato del mattino è attivo quasi tutti i giorni."],
      ["Pranzo e una scelta", "Mangia vicino a Campo de' Fiori o nel Ghetto ebraico, noto per la cucina giudaico-romanesca. Poi scegli: Fontana di Trevi e piazza di Spagna verso nord-est, oppure un pomeriggio più lento tra il Ghetto e il lungotevere."],
      ["Tardo pomeriggio: Fontana di Trevi e piazza di Spagna", "Da febbraio 2026 per entrare nell'area più vicina a Fontana di Trevi serve un biglietto del Comune; la fontana resta visibile dalla piazza, e dopo le 22 l'accesso è libero. Piazza di Spagna è a 10 minuti; sulla scalinata non ci si può sedere."],
      ["Sera: Trastevere", "Attraversa il Tevere su Ponte Sisto fino a Trastevere per la cena. Vicoli, la basilica di Santa Maria in Trastevere e la sua piazza sono più vivi la sera."],
    ),
    {
      type: "image",
      src: `${IMG}/pantheon-piazza-della-rotonda.webp`,
      alt: "Il pronao del Pantheon a Roma, con le colonne di granito e la cupola, affacciato su piazza della Rotonda e la sua fontana",
      caption: "Il Pantheon su piazza della Rotonda.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/piazza-navona-winter.webp`,
      alt: "Piazza Navona a Roma con una fontana barocca in primo piano, la chiesa di Sant'Agnese e i palazzi color ocra intorno alla lunga piazza",
      caption: "Piazza Navona, sorta sul luogo di un antico stadio.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/trevi-fountain.webp`,
      alt: "La Fontana di Trevi a Roma, con le statue di marmo, l'acqua che scende a cascata e la facciata del palazzo alle spalle",
      caption: "La Fontana di Trevi: per l'area più vicina alla vasca serve un biglietto del Comune.",
      credit: unsplash("Cristina Gottardi", "cristina_gottardi"),
    },
    p("Combinazioni realistiche: Pantheon, Navona e Campo de' Fiori stanno comodamente in una mattina. Aggiungere Trevi e piazza di Spagna nel pomeriggio è fattibile; aggiungere anche la Galleria Borghese no, a meno di rinunciare a Trastevere."),
    {
      type: "image",
      src: `${IMG}/trastevere-street-evening.webp`,
      alt: "Un vicolo lastricato di Trastevere la sera, con edera sui muri, lampioni e tavoli di ristoranti all'aperto",
      caption: "Trastevere di sera.",
      credit: unsplash("Mariano Alvarez", "theurbaneyecatcher"),
    },

    // ——— 6 ———
    h2("Alternative da scambiare"),
    table(
      ["Se sei…", "Sostituisci", "Con"],
      [
        ["Appassionato d'arte", "Fontana di Trevi e piazza di Spagna", "La Galleria Borghese (prenotazione obbligatoria) e il suo parco"],
        ["In viaggio con bambini", "I Musei Capitolini", "Villa Borghese, oppure un gelato e una visita al Foro più breve"],
        ["Già stato a Roma", "I Musei Vaticani", "L'Appia Antica e le catacombe, o le Terme di Caracalla"],
        ["Appassionato di archeologia", "Piazza di Spagna", "Le Terme di Caracalla, oppure mezza giornata a Ostia Antica"],
        ["Un viaggiatore lento", "Castel Sant'Angelo", "Un lungo pranzo e una passeggiata serale lungo il Tevere"],
        ["Attento alla cucina", "I Musei Capitolini", "Una mattina al mercato di Campo de' Fiori o di Testaccio e un tour gastronomico"],
      ],
      "Scambi che non stravolgono il programma"
    ),

    // ——— 7 ———
    h2("Cosa prenotare in anticipo"),
    table(
      ["Luogo", "Organizzazione", "Perché"],
      [
        ["Colosseo, Foro e Palatino", "Prenota sul sito ufficiale", "Biglietti nominativi e ingresso a orario al Colosseo"],
        ["Musei Vaticani e Cappella Sistina", "Prenota sul sito ufficiale", "La prenotazione garantisce l'orario; i Musei sono chiusi quasi tutte le domeniche"],
        ["Basilica di San Pietro", "Non obbligatorio", "Ingresso gratuito; prenotazione a pagamento facoltativa. La cupola ha un biglietto a parte"],
        ["Pantheon", "Nei periodi di punta compra prima il biglietto a orario", "Ingresso a pagamento; si vendono biglietti anche in loco"],
        ["Fontana di Trevi (area della vasca)", "Sul sito ufficiale del Comune o all'ingresso", "Fino alle 22 serve un biglietto per l'area più vicina alla fontana"],
        ["Galleria Borghese", "Prenotazione obbligatoria", "Ingressi a orario per un numero limitato di visitatori"],
      ],
      "Cosa prenotare prima di partire"
    ),
    p("Diffida dei rivenditori che promettono di «saltare la fila» a prezzi maggiorati: compra sui siti ufficiali indicati in questa guida. Le finestre di prenotazione variano, quindi prenota appena le date sono certe."),

    // ——— 8 ———
    h2("Come muoversi a Roma"),
    p("Il centro storico va visto a piedi: tra Pantheon, Navona, Trevi e piazza di Spagna le distanze sono brevi, e molte strade sono chiuse al traffico. Mezzi pubblici o taxi servono per risparmiare tempo sui tragitti lunghi — verso il Vaticano, da Termini, o alla fine di una giornata faticosa."),
    ul(
      "**Metro** — tre linee: A (comoda per il Vaticano a Ottaviano e per piazza di Spagna a Spagna), B (Colosseo e Termini) e C (che ora arriva a Colosseo–Fori Imperiali). La metro non attraversa il centro storico vero e proprio.",
      "**Bus e tram** — coprono il centro e Trastevere; il tram 8 collega la zona di Largo di Torre Argentina con Trastevere. Con il traffico i bus possono essere lenti.",
      "**Biglietti** — secondo ATAC, si può avvicinare una carta contactless o lo smartphone ai lettori sui bus e ai tornelli della metro (Tap & Go); il biglietto ordinario vale 100 minuti e comprende una corsa in metro. Esistono anche biglietti cartacei e app.",
      "**Taxi** — usa i taxi bianchi autorizzati ai posteggi, o prenotali per telefono o via app.",
    ),
    p("Il centro storico di Roma è una zona a traffico limitato e guidare in città non conviene a chi è in vacanza; se noleggi un'auto per il resto del viaggio leggi [guidare in Italia](/it/guide/guidare-in-italia). Porta una borraccia: le fontanelle pubbliche, i *nasoni*, si trovano in tutta la città."),

    // ——— 9 ———
    h2("Arrivare dagli aeroporti di Roma"),
    h3("Fiumicino"),
    p("Fiumicino, il principale aeroporto di Roma, è sulla costa a ovest della città. Il **Leonardo Express** di Trenitalia arriva senza fermate a Roma Termini in circa mezz'ora; i treni regionali servono anche le stazioni di Trastevere, Ostiense e Tiburtina, che possono essere più vicine all'alloggio. Diverse compagnie di **autobus** vanno a Termini. I **taxi** autorizzati applicano una tariffa fissa per le destinazioni dentro le Mura Aureliane: confermala con l'autista prima di partire."),
    h3("Ciampino"),
    p("Ciampino, usato soprattutto dalle compagnie low cost, è a sud-est della città. Gli **autobus** vanno direttamente a Termini, e il **Ciampino Airlink** di Trenitalia unisce una navetta per la stazione di Ciampino al treno per Termini. Anche i **taxi** hanno una tariffa fissa per il centro."),
    p("Per gli aeroporti di tutta Italia c'è la nostra guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia). Termini è anche il principale nodo ferroviario per [proseguire in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 10 ———
    h2("Dove dormire per tre giorni"),
    table(
      ["Zona", "Atmosfera", "Per questo itinerario", "Da considerare"],
      [
        ["Centro storico (Pantheon, Navona)", "Vicoli storici, piazze e ristoranti", "Terzo giorno a piedi e il resto a portata di mano", "Affollato e spesso caro; può essere rumoroso"],
        ["Monti", "Stradine, negozi indipendenti, enoteche", "Colosseo a piedi; metro vicina", "Alcune strade in salita; animato la sera"],
        ["Prati", "Ordinato, residenziale, buoni ristoranti", "Vicino al Vaticano e alla metro A", "Più lontano dalla Roma antica; tranquillo la sera"],
        ["Trastevere", "Vicoli lastricati e serate vivaci", "Il centro a piedi oltre il fiume", "Niente metro; rumoroso di notte in alcune zone"],
        ["Vicino a Termini (Esquilino)", "Nodo di trasporti, alberghi di ogni tipo", "Treni per l'aeroporto e due linee di metro", "Meno atmosfera; controlla bene la via"],
      ],
      "Dove dormire a Roma"
    ),
    p("Alla prima visita, centro storico e Monti tengono a portata di passeggiata il maggior numero di luoghi. Roma applica il contributo di soggiorno, a persona e a notte."),

    // ——— 11 ———
    h2("Mangiare lungo il percorso"),
    p("Organizza i pasti seguendo l'itinerario invece di attraversare la città per un ristorante: Monti il primo giorno, Prati il secondo, il Ghetto e Trastevere il terzo. Si pranza di solito dalle 13 e si cena dalle 20. Per come funzionano pasti e ordinazioni, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    h3("Specialità romane"),
    ul(
      "**Carbonara, cacio e pepe, gricia e amatriciana** — le paste classiche romane, a base di guanciale, pecorino romano e pepe nero; l'amatriciana prende il nome da Amatrice, nel Lazio.",
      "**Supplì** — crocchette di riso fritte con pomodoro e un filo di mozzarella che si allunga.",
      "**Pizza** — la tonda romana, sottile e croccante, la sera, e la *pizza al taglio* per un pranzo veloce.",
      "**Carciofi** — *alla romana* (stufati) o *alla giudia* (fritti interi, piatto della tradizione giudaico-romanesca), di stagione tra fine inverno e primavera.",
      "**Maritozzo** — una brioche morbida tagliata e farcita di panna montata, per colazione.",
      "**Saltimbocca** e **coda alla vaccinara** — vitello con salvia e prosciutto, e il tradizionale stufato di coda.",
    ),
    h3("Piatti italiani che trovi anche a Roma"),
    p("Pizza napoletana, lasagne, tiramisù e piatti di ogni regione sono diffusissimi a Roma. Possono essere buoni, ma non sono specialità romane."),

    // ——— 12 ———
    h2("Roma senza fretta"),
    ul(
      "**Non attraversare la città avanti e indietro.** Tieni ogni giornata in una zona e muoviti a piedi.",
      "**Non programmare troppi musei.** Un grande museo al giorno basta; due stancano.",
      "**Non sottovalutare le camminate.** Aree archeologiche e sampietrini rallentano: calcola meno di quanto dica la mappa.",
      "**Non prenotare ingressi troppo ravvicinati.** Lascia almeno un'ora tra visite a orario in zone diverse.",
      "**Tieni un margine.** Ogni giorno lascia un blocco libero per riposare, una chiesa scoperta per caso o un pranzo lungo.",
      "**Sfrutta la sera.** Piazze e fontane sono più tranquille e fresche dopo il tramonto.",
    ),

    // ——— 13 ———
    h2("Roma per ogni tipo di viaggiatore"),
    ul(
      "**Alla prima visita** — segui il programma e prenota per primi Colosseo e Vaticano.",
      "**In coppia** — aggiungi passeggiate serali: il Campidoglio al tramonto, il Tevere e Trastevere per cena.",
      "**Con la famiglia** — visite ai musei più brevi, pause a Villa Borghese, soste per gelato e pizza; ai bambini di solito piacciono Colosseo e Castel Sant'Angelo.",
      "**Viaggiatori più anziani** — usa i taxi tra una zona e l'altra, scegli un alloggio vicino alla metro e prevedi pause nella mattina archeologica.",
      "**Per chi ama i musei** — aggiungi Galleria Borghese e Musei Capitolini, e dedica al Vaticano una giornata intera.",
      "**Per chi ama l'archeologia** — aggiungi Terme di Caracalla o Appia Antica, oppure mezza giornata a Ostia Antica.",
      "**Per chi viaggia per la tavola** — organizzati intorno a mercati e trattorie, e valuta un tour gastronomico a piedi.",
      "**Con mobilità ridotta** — molti luoghi hanno fondi irregolari e gradini, ma alcuni prevedono percorsi accessibili: controlla le informazioni ufficiali sull'accessibilità di ogni sito prima di prenotare, e usa i taxi per le distanze lunghe.",
      "**Per chi non ama la folla** — prendi le prime fasce del mattino, visita le fontane presto o tardi e passa più tempo a Monti, Prati e nel Ghetto.",
    ),

    // ——— 14 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Voler fare troppo.** Tre giorni bastano per l'essenziale, non per tutto.",
      "**Non prenotare i luoghi principali.** Colosseo e Musei Vaticani sono molto più semplici con la prenotazione.",
      "**Non controllare le regole in vigore.** Cambiano: Fontana di Trevi, per esempio, ora ha un'area a pagamento.",
      "**Sottovalutare le distanze.** Il Vaticano è lontano dal Colosseo: non provare a vederli nella stessa mattina.",
      "**Considerare il Vaticano una visita veloce.** I soli Musei richiedono diverse ore.",
      "**Visitare in un ordine poco logico.** Raggruppa i luoghi per zona, non per fama.",
      "**Dimenticare l'abbigliamento.** Spalle e ginocchia coperte a San Pietro e nelle altre chiese.",
      "**Pensare che ogni biglietto comprenda tutto ciò che c'è intorno.** Il biglietto del Colosseo include Foro e Palatino, ma non i Musei Capitolini.",
      "**Non lasciare tempo per pasti e quartieri.** Fanno parte di Roma, non sono una pausa da Roma.",
    ),

    // ——— 15 ———
    h2("Quando andare per un viaggio di tre giorni"),
    ul(
      "**Primavera (aprile–giugno)** — ideale per camminare ma affollata, soprattutto intorno a Pasqua: prenota presto.",
      "**Estate (luglio–agosto)** — caldo: visita le aree archeologiche per prime; ad agosto alcune trattorie chiudono per ferie.",
      "**Autunno (settembre–novembre)** — caldo a settembre e ottobre, con giornate ancora lunghe; più avanti piove più spesso.",
      "**Inverno (dicembre–febbraio)** — giornate più corte e fresche, ma meno folla; Natale e Capodanno sono affollati.",
    ),
    p("Le festività religiose possono cambiare l'accesso a San Pietro e al Vaticano. Per confrontare Roma con altre mete nei vari mesi, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 16 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "roma-in-tre-giorni",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli l'alloggio in centro, a Monti o a Prati", "Programma il Vaticano dal lunedì al sabato", "Controlla le date rispetto alle grandi festività"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota il Colosseo sul sito ufficiale", "Prenota i Musei Vaticani sul sito ufficiale", "Compra i biglietti di Pantheon e Trevi, se ti interessano", "Organizza il trasferimento dall'aeroporto"],
        },
        {
          title: "Durante il viaggio",
          items: ["Scarpe comode e acqua sempre con te", "Spalle e ginocchia coperte nelle chiese", "Usa il Tap & Go o compra il biglietto prima di salire", "Lascia un blocco libero ogni giorno"],
        },
      ],
    },
    p("Biglietti e regole di accesso citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Cambiano: controllali prima di partire, e porta con te i documenti necessari per i biglietti nominativi. Per un viaggio più ampio c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia), con tappe come [Firenze](/it/citta/firenze-per-la-prima-volta), [Napoli](/it/citta/napoli-per-la-prima-volta), [Bologna](/it/citta/bologna-in-due-giorni) o [Venezia](/it/citta/venezia-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/castel-sant-angelo-tiber.webp`,
      alt: "Castel Sant'Angelo, fortezza rotonda sul Tevere a Roma, con Ponte Sant'Angelo in primo piano e nuvole nel cielo",
      caption: "Castel Sant'Angelo e il suo ponte, tra il Vaticano e il centro storico.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },
  ],

  faqs: [
    { question: "Tre giorni bastano per Roma?", answer: "Per una prima visita sì: bastano per la Roma antica, il Vaticano e il centro storico con un ritmo ragionevole. Non bastano per vedere tutto, quindi scegli ciò che ti interessa di più." },
    { question: "Cosa vedere a Roma in tre giorni?", answer: "Colosseo, Foro Romano e Palatino un giorno; Musei Vaticani, Cappella Sistina e San Pietro un altro; Pantheon, piazza Navona, Fontana di Trevi e Trastevere il terzo." },
    { question: "Cosa prenotare prima di andare a Roma?", answer: "Il Colosseo (biglietti nominativi con ingresso a orario) e i Musei Vaticani, entrambi sui siti ufficiali. La Galleria Borghese va prenotata; il Pantheon e l'area della vasca di Fontana di Trevi hanno biglietti propri." },
    { question: "Si possono vedere Colosseo e Vaticano nello stesso giorno?", answer: "Si può, ma significa due visite lunghe ai lati opposti della città. In un viaggio di tre giorni è molto meglio dedicare a ciascuno una mattina." },
    { question: "Quanto si cammina?", answer: "Molto: diversi chilometri al giorno, in gran parte su pietre irregolari. Le scarpe giuste contano più di tutto, e un taxi a fine giornata vale la spesa." },
    { question: "Roma si visita facilmente senza auto?", answer: "Sì. Gran parte dell'itinerario è a piedi, e metro, bus, tram e taxi coprono il resto. Guidare in centro è limitato e non conviene." },
    { question: "Dove dormire per tre giorni a Roma?", answer: "Centro storico o Monti tengono a portata di passeggiata il maggior numero di luoghi. Prati è comodo per il Vaticano, Trastevere per la sera, la zona di Termini per i treni." },
    { question: "Vale la pena visitare il Vaticano in un viaggio breve?", answer: "Per la maggior parte di chi visita Roma la prima volta sì: Cappella Sistina e San Pietro sono tra i luoghi essenziali. Calcola gran parte della giornata e prenota i Musei in anticipo." },
    { question: "Quanto tempo serve per il Colosseo?", answer: "Da un'ora a un'ora e mezza all'interno, più due o tre ore per Foro Romano e Palatino, compresi nello stesso biglietto." },
    { question: "Si può visitare Roma con i bambini in tre giorni?", answer: "Sì, con visite ai musei più brevi e più pause. Colosseo, Castel Sant'Angelo, le fontane e Villa Borghese di solito funzionano bene con i bambini." },
    { question: "Cosa mangiare a Roma?", answer: "Carbonara, cacio e pepe, gricia e amatriciana, supplì, pizza tonda romana e pizza al taglio, carciofi di stagione e un maritozzo a colazione." },
    { question: "Cosa saltare se ho poco tempo?", answer: "Rinuncia al Palatino, ai Musei Capitolini o a Castel Sant'Angelo prima di togliere una delle tre zone principali, e non aggiungere gite fuori città." },
    { question: "Come si arriva da Fiumicino al centro di Roma?", answer: "Il Leonardo Express arriva senza fermate a Termini in circa mezz'ora; in alternativa ci sono treni regionali, autobus e taxi a tariffa fissa." },
    { question: "A Roma conviene camminare o usare i mezzi?", answer: "Cammina nel centro storico e usa metro, bus o taxi tra una zona e l'altra — per esempio per il Vaticano o per tornare in albergo dopo una lunga giornata." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Parco archeologico del Colosseo — biglietteria", url: "https://ticketing.colosseo.it/", note: "Colosseo, Foro Romano e Palatino" },
    { label: "Musei Vaticani — biglietti", url: "https://tickets.museivaticani.va/", note: "prenotazione ufficiale" },
    { label: "Musei Vaticani — giorni di apertura", url: "https://www.museivaticani.va/content/museivaticani/it/info/orari-musei-vaticani.html", note: "aperture e chiusure" },
    { label: "Basilica di San Pietro", url: "https://www.basilicasanpietro.va/it", note: "ingresso, cupola e prenotazioni" },
    { label: "Pantheon — Ministero della Cultura", url: "https://cultura.gov.it/luogo/pantheon", note: "biglietti e visite" },
    { label: "Fontana di Trevi — Roma Capitale", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "area della vasca a pagamento" },
    { label: "Turismo Roma", url: "https://www.turismoroma.it/it", note: "informazioni turistiche ufficiali" },
    { label: "ATAC — Tap & Go", url: "https://www.atac.roma.it/biglietti-e-abbonamenti/tap-and-go", note: "pagamento contactless sui mezzi" },
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/", note: "treno per Fiumicino" },
    { label: "Aeroporti di Roma", url: "https://www.adr.it/", note: "trasporti per Fiumicino e Ciampino" },
  ],
};
