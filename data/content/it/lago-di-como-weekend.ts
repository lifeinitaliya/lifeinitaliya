import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Lake Como in a Weekend", scritta per chi legge in
// italiano. Tempi dei treni, servizi di navigazione e modalità di visita delle
// ville sono stati verificati sui siti ufficiali a settembre 2026. Orari,
// tariffe e date di apertura non vengono citati perché cambiano con le stagioni.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/travel/lake-como-weekend";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const lagoDiComoWeekend: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Sulla cartina il Lago di Como sembra una meta da vedere in un pomeriggio. In realtà è un lago lungo e stretto, a forma di Y rovesciata, con tre rami, decine di paesi e montagne che scendono ripide fino all'acqua. Per passare da un paese all'altro si prende quasi sempre il battello, e i battelli hanno i loro orari. La differenza tra un weekend rilassato e uno faticoso dipende soprattutto da una scelta: dove dormire."),
    answer("**Un fine settimana basta per un primo assaggio del Lago di Como** — due o tre paesi, un giro in battello e magari il giardino di una villa — purché non si provi a vedere tutto il lago. Per la prima volta conviene **dormire nel centro lago** (Bellagio, Varenna o Menaggio), se si vuole passare da un paese all'altro in battello, oppure a **Como**, se si preferiscono treni comodi e una piccola città. **L'auto non serve**: da Milano i treni arrivano a Como e a Varenna, e i battelli collegano i paesi. La formula più semplice: treno fino alla base, battello tra due o tre paesi, il resto a piedi."),
    {
      type: "facts",
      title: "Il Lago di Como in sintesi",
      rows: [
        { label: "Durata ideale", value: "2–3 giorni" },
        { label: "Da dove si arriva", value: "Milano, poi treno per Como o Varenna" },
        { label: "Mezzi migliori", value: "Treno + battello + a piedi" },
        { label: "Serve l'auto?", value: "Di solito no, per una prima visita breve" },
        { label: "Paesi principali", value: "Como, Bellagio, Varenna, Menaggio" },
        { label: "Ideale per", value: "Paesaggio, borghi sul lago, ville e giardini, giri in battello" },
        { label: "Priorità", value: "Dove dormire e come è collegato a treni e battelli" },
        { label: "Navigazione", value: "Navigazione Laghi (servizio pubblico sul lago)" },
      ],
    },

    // ——— 1 ———
    h2("Vale la pena un weekend sul Lago di Como?"),
    p("Sì, se si cercano paesaggi, ritmi lenti e tempo sull'acqua. In un fine settimana si può conoscere bene un paese, raggiungerne uno o due in battello, camminare tra i vicoli affacciati sul lago e visitare un giardino o una villa. È anche una delle fughe più semplici da Milano, con treni regionali diretti sia per Como sia per Varenna."),
    p("È meno adatto a chi viaggia per spuntare una lista di attrazioni. Il lago ha pochi «luoghi imperdibili» nel senso museale: il suo fascino sta nell'insieme di borghi, acqua e montagne, e premia le giornate senza fretta. Ed è molto frequentato: d'estate e nei fine settimana i paesi del centro lago e i battelli possono essere affollatissimi. Chi cerca spiagge e una stagione balneare lunga potrebbe trovarsi meglio al mare."),

    // ——— 2 ———
    h2("Quanti giorni servono?"),
    table(
      ["Durata", "Che cosa permette", "Da considerare"],
      [
        ["Gita in giornata da Milano", "Un paese — di solito Como, oppure Varenna con un breve tragitto in battello", "Giornata lunga; gran parte del lago resta fuori portata"],
        ["2 giorni", "La base e uno o due paesi in battello", "Meglio scegliere una zona del lago e restarci"],
        ["3 giorni", "Due zone del lago, una villa o un giardino e tempo per rallentare", "La durata più comoda per una prima visita"],
        ["4 giorni o più", "Più zone, camminate in collina, una giornata a Como", "Utile quando meteo e orari dei battelli richiedono flessibilità"],
      ],
      "Quanto fermarsi sul Lago di Como"
    ),
    p("Il lago è più grande di quanto sembri, e gli spostamenti tra una zona e l'altra richiedono tempo. Una regola utile per un weekend: una sola base, una zona del lago al giorno, non più di due o tre paesi al giorno."),

    // ——— 3 ———
    h2("Dove dormire"),
    p("La base determina quanto sarà facile prendere il treno, quanti paesi si potranno raggiungere in battello e come saranno le serate. Non esiste un paese migliore in assoluto: dipende da che cosa conta di più per te."),
    table(
      ["Base", "Adatta a", "Vantaggi", "Da considerare"],
      [
        ["Como", "Chi viaggia in treno, chi vuole i servizi di una città, prima o ultima notte", "Treni diretti per Milano da due stazioni; negozi, ristoranti e centro storico", "All'estremità sud-ovest: il centro lago è lontano in battello"],
        ["Bellagio", "Chi vuole spostarsi in battello nel centro lago; atmosfera classica", "Sulla punta dove si incontrano i rami del lago, con traversate frequenti", "Niente stazione ferroviaria; molto frequentato in stagione; alloggi che si esauriscono presto"],
        ["Varenna", "Soggiorni brevi con arrivo in treno; atmosfera di borgo", "Stazione sulla linea Milano–Lecco–Tirano e imbarcadero nel centro lago", "Piccola, quindi pochi alloggi; tra stazione e imbarcadero c'è un breve tratto a piedi"],
        ["Menaggio", "La sponda occidentale e le sue ville; un paese un po' più grande", "Collegamenti in battello nel centro lago; vicino alle ville della Tremezzina", "Niente stazione ferroviaria: si combinano battelli e autobus"],
      ],
      "Scegliere la base sul Lago di Como"
    ),
    p("Vanno bene anche altre località. La Tremezzina (Tremezzo, Lenno e i paesi vicini) è la più vicina a Villa Carlotta e a Villa del Balbianello; Lecco, sul ramo orientale, ha buoni collegamenti ferroviari ma è fuori dal centro lago. Per un primo weekend, però, i quattro paesi della tabella rendono tutto più semplice."),

    // ——— 4 ———
    h2("Como, Bellagio, Varenna o Menaggio?"),
    h3("Como"),
    p("Como è una piccola città più che un borgo: un centro storico murato, il Duomo, le passeggiate sul lungolago e molti posti dove mangiare. È la località più facile da raggiungere da Milano: i treni partono da Milano Centrale per Como San Giovanni e da Milano Cadorna per Como Nord Lago, proprio sul lungolago. È adatta a chi vuole trasporti affidabili, una prima o ultima notte vicino ai treni o un po' di vita la sera. Il rovescio della medaglia è la distanza: Bellagio e il centro lago sono lontani in battello."),
    {
      type: "image",
      src: `${IMG}/como-lakefront-dusk.webp`,
      alt: "La città di Como al crepuscolo, con le luci lungo la riva e le montagne intorno al lago",
      caption: "Como, all'estremità sud-occidentale del lago: la base meglio collegata in treno.",
      credit: unsplash("Roman Volkov", "romanvolkov"),
    },
    h3("Bellagio"),
    p("Bellagio sorge sul promontorio dove il lago si divide, ed è quindi la base più centrale per gli spostamenti in battello. Le salite a gradini, il lungolago e i giardini delle ville ne fanno uno dei paesi più visitati. Conviene dormire qui se il programma è passare da Bellagio a Varenna e Menaggio. Tieni presente che non c'è la stazione: da Milano si arriva di solito in treno a Varenna o a Como e poi in battello, oppure su strada."),
    {
      type: "image",
      src: `${IMG}/bellagio-lane-wine-bar.webp`,
      alt: "Un vicolo di Bellagio con i tavolini di un'enoteca e, sullo sfondo, il lago e le montagne",
      caption: "Uno dei vicoli di Bellagio. Buona parte del paese è a gradini: meglio viaggiare leggeri.",
      credit: unsplash("Claudio Carrozzo", "erbampo"),
    },
    h3("Varenna"),
    p("Varenna, sulla sponda orientale, unisce le due cose che servono di più in un weekend: una stazione sulla linea Milano–Lecco–Tirano e un imbarcadero nel centro lago. Secondo Trenord, i treni diretti da Milano Centrale impiegano circa un'ora. Il paese è raccolto, con la passeggiata a lago e i giardini di Villa Monastero, ed è una base pratica per un fine settimana. Proprio perché è piccolo, gli alloggi sono pochi e in stagione si esauriscono presto."),
    {
      type: "image",
      src: `${IMG}/varenna-waterfront.webp`,
      alt: "Le case colorate di Varenna sulla riva del Lago di Como sotto un cielo nuvoloso",
      caption: "Varenna, il borgo del centro lago con la sua stazione ferroviaria.",
      credit: unsplash("Karl Moran", "morank"),
    },
    h3("Menaggio"),
    p("Menaggio, sulla sponda occidentale, è un po' più grande di Bellagio e Varenna ed è servito dai battelli del centro lago. È una buona base per le ville della Tremezzina, appena a sud, e per le camminate sul versante occidentale. Senza stazione, ci si arriva in battello da Varenna o su strada, e la sponda occidentale è servita dagli autobus."),
    h3("Quale scegliere?"),
    table(
      ["Se ti interessa soprattutto…", "Valuta"],
      [
        ["Arrivare facilmente in treno", "Varenna (diretta da Milano Centrale) o Como (due stazioni milanesi)"],
        ["Spostarti in battello nel centro lago", "Bellagio, Varenna o Menaggio"],
        ["I servizi di una città e le serate", "Como"],
        ["L'atmosfera di borgo", "Varenna o Bellagio"],
        ["Un primo weekend breve", "Varenna: treno e battello nello stesso posto"],
        ["Le ville della sponda occidentale", "Menaggio o la Tremezzina"],
        ["La massima flessibilità nei trasporti", "Como, collegata in treno a Milano e oltre"],
      ],
      "Scegliere la base in base alle priorità"
    ),

    // ——— 5 ———
    h2("Itinerario di due giorni"),
    p("Questo programma presuppone una base nel centro lago — Varenna, Bellagio o Menaggio — e sfrutta le traversate tra i tre paesi. Controlla gli orari del giorno prima di partire."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Primo giorno", title: "La base e un paese vicino", text: "**Mattina:** arrivo, bagagli in albergo e giro a piedi della base. **Pranzo:** sul lago. **Pomeriggio:** battello per un paese vicino — da Varenna, Bellagio è una traversata breve — tra vicoli e lungolago. **Sera:** rientro in battello e cena nella base. *In alternativa:* il giardino della villa del tuo paese invece di un secondo paese." },
        { label: "Secondo giorno", title: "La sponda occidentale", text: "**Mattina:** battello per Menaggio o la Tremezzina. **Metà giornata:** giardini e museo di Villa Carlotta, oppure Villa del Balbianello (da prenotare). **Pomeriggio:** pranzo sulla sponda occidentale, poi di nuovo oltre il lago. **Sera:** partenza in treno da Varenna, oppure in battello e treno via Como. *In alternativa:* una mattinata tranquilla a Bellagio se il tempo è brutto." },
      ],
    },
    tip("Due paesi al giorno bastano e avanzano. Ogni traversata comporta un'attesa all'imbarcadero, e nei momenti di punta i battelli possono essere pieni: una giornata tranquilla con due paesi vale più di una di corsa con quattro.", "Meno è meglio"),

    // ——— 6 ———
    h2("Itinerario di tre giorni"),
    p("Con tre giorni il ritmo rallenta e si ha un margine per una giornata di pioggia o un buco negli orari dei battelli."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Primo giorno", title: "Arrivo e ambientamento", text: "Viaggio da Milano, check-in e giro a piedi della base. Pomeriggio leggero: una passeggiata sul lago, un giardino, una cena presto." },
        { label: "Secondo giorno", title: "Il centro lago in battello", text: "In stagione Bellagio, Varenna e Menaggio sono collegati da traversate frequenti. Visitane due, con il pranzo nell'uno e un giardino nell'altro." },
        { label: "Terzo giorno", title: "Una villa e una partenza senza fretta", text: "Mattina a Villa Carlotta o a Villa del Balbianello, oppure a Brunate in funicolare se riparti da Como. Rientro a Milano nel pomeriggio." },
      ],
    },
    p("Se dormi a Como, inverti l'ordine: il primo giorno a Como (centro storico, lungolago e funicolare per Brunate), il secondo in battello verso il centro lago, il terzo sulla sponda occidentale o con una mattinata tranquilla prima del treno. Fuori dall'alta stagione i battelli si riducono, e maltempo o affollamento possono cambiare il programma della giornata: ogni itinerario va considerato una traccia, non un orario."),

    // ——— 7 ———
    h2("Come arrivare al Lago di Como"),
    p("Quasi tutti arrivano passando da Milano. Secondo Trenord, che gestisce i treni regionali lombardi:"),
    table(
      ["Da", "A", "Come", "Tempo indicativo (Trenord)"],
      [
        ["Milano Centrale", "Varenna-Esino", "Regionale sulla linea Milano–Lecco–Tirano", "Circa 1 ora, diretto"],
        ["Milano Centrale", "Como San Giovanni", "Regionale", "Circa 40 minuti, diretto"],
        ["Milano Cadorna", "Como Nord Lago (sul lungolago)", "Regionale via Saronno", "Circa 1 ora"],
      ],
      "I collegamenti ferroviari da Milano"
    ),
    p("I tempi sono indicativi e variano secondo il treno: controlla l'orario di Trenord per la tua data. Per come funzionano i biglietti regionali, convalida compresa, leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),
    h3("Dagli aeroporti"),
    ul(
      "**Milano Malpensa** — il Malpensa Express arriva a Milano Cadorna, Porta Garibaldi e Centrale, dove si cambia per Como o Varenna. Il sistema di ricerca di Trenord mostra anche i percorsi con cambio a Saronno per Como.",
      "**Milano Linate** — vicino alla città; la metropolitana M4 lo collega al centro di Milano, da dove si prosegue in treno.",
      "**Transfer privato** — da valutare per arrivi a tarda sera, molti bagagli o un albergo lontano da stazione e imbarcadero.",
      "**Auto a noleggio** — possibile, ma leggi prima la sezione dedicata all'auto più avanti.",
    ),
    p("Se passi qualche giorno anche a Milano, c'è la nostra guida a [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo)."),

    // ——— 8 ———
    h2("Come spostarsi sul lago"),
    p("Il Lago di Como è lungo e stretto, e le strade lungo le sponde sono lente e tortuose. Di solito si combinano:"),
    ul(
      "**Battelli** — il mezzo principale tra un paese e l'altro, e una gita di per sé.",
      "**Treni** — lungo la sponda orientale (Varenna e Bellano, per esempio) e verso Como.",
      "**Autobus** — servono le sponde senza ferrovia, compresa quella occidentale.",
      "**A piedi** — i paesi sono raccolti ma spesso ripidi, con vicoli a gradini.",
      "**Taxi e transfer privati** — utili con i bagagli, per gli arrivi a tarda sera o per gli alberghi lontani dagli imbarcaderi.",
      "**Auto** — flessibile, ma in stagione i parcheggi nei paesi sul lago sono pochi.",
    ),
    p("Attraversare il lago è semplice nel centro lago, dove i tre paesi principali si guardano. Percorrerlo in lunghezza — da Como a Bellagio, per esempio — richiede molto più tempo di quanto suggerisca la distanza. Tieni sempre un margine, controlla l'orario della giornata ed evita programmi che dipendono da coincidenze strette."),

    // ——— 9 ———
    h2("Battelli e navigazione"),
    p("Il servizio pubblico di navigazione sul Lago di Como è gestito da [Navigazione Laghi](https://www.navigazionelaghi.it/), che opera anche sul Lago Maggiore e sul Lago di Garda. Orari, tariffe e avvisi di servizio sono pubblicati sul suo sito."),
    h3("Come funzionano i servizi"),
    ul(
      "**Battelli** — servizi più lenti con molte fermate; panoramici, ma sulle lunghe distanze richiedono tempo.",
      "**Servizi rapidi** — coprono le distanze più lunghe in meno tempo; per le modalità di prenotazione fa fede il sito ufficiale.",
      "**Traghetti** — attraversano il centro lago tra i paesi principali, con auto e passeggeri a piedi.",
    ),
    h3("Stagioni, code e meteo"),
    p("Gli orari cambiano con le stagioni: in primavera e d'estate le corse sono più frequenti, d'inverno si riducono, e singole linee possono essere sospese — l'operatore pubblica gli avvisi, come la sospensione temporanea del servizio traghetto di Bellagio a inizio 2026. Nei fine settimana e d'estate le code agli imbarcaderi possono essere lunghe e i battelli pieni. Vento forte o temporali, a volte, interrompono il servizio."),
    important("Usa solo l'orario aggiornato dell'operatore per la tua data — non screenshot, vecchi PDF o elenchi di terzi. Tieni un margine prima dell'ultimo battello di rientro e di qualsiasi treno o volo.", "Controlla l'orario del giorno"),
    h3("I biglietti"),
    p("I biglietti si acquistano agli imbarcaderi e sui canali ufficiali dell'operatore. Se prenderai più battelli nella stessa giornata, confronta le soluzioni indicate nella pagina delle tariffe con i singoli biglietti per i tragitti che farai davvero."),
    {
      type: "image",
      src: `${IMG}/lake-como-car-ferry.webp`,
      alt: "Un traghetto bianco per passeggeri e auto attraversa il Lago di Como con le montagne sullo sfondo",
      caption: "Un traghetto sul lago. Nel centro lago le traversate collegano Bellagio, Varenna e Menaggio.",
      credit: unsplash("Nathan Staz", "nathanstaz"),
    },

    // ——— 10 ———
    h2("Cosa vedere e cosa fare"),
    h3("Bellagio"),
    p("Si passeggia sul lungolago e tra le salite a gradini, poi si raggiunge la punta del promontorio per la vista sui rami del lago. I giardini di Villa Melzi, sul lago a sud del centro, aprono in stagione (dalla primavera all'autunno). Bellagio si presta bene a una mezza giornata in battello da Varenna o Menaggio."),
    h3("Varenna"),
    p("Il bello di Varenna sono le sue dimensioni: la passeggiata a lago, pochi vicoli di case colorate, il giardino e la casa museo di Villa Monastero, con orari che cambiano nel corso della stagione. Due o tre ore bastano per il paese, di più se visiti la villa."),
    h3("Como"),
    p("Il centro storico ha il Duomo e vie piacevoli da percorrere a piedi; il lungolago è perfetto a fine giornata. La funicolare Como–Brunate, gestita da ATM, sale in circa sette minuti fino al paese di Brunate, con la vista su lago e città. Da mezza giornata a una giornata intera."),
    h3("Menaggio"),
    p("Un paese sul lago con lungolago e un piccolo centro storico, punto di partenza naturale per la sponda occidentale e le sue ville. Funziona come base o come breve tappa in una giornata in battello."),
    {
      type: "image",
      src: `${IMG}/menaggio-lakeside.webp`,
      alt: "Le case di Menaggio lungo la riva del Lago di Como, sotto montagne boscose",
      caption: "Menaggio, sulla sponda occidentale: la porta d'accesso alle ville della Tremezzina.",
      credit: unsplash("Chahriar Hariri", "cfhariri"),
    },
    h3("Sull'acqua"),
    p("Il battello di linea è già uno dei modi migliori per vedere il lago. In diversi paesi operano anche tour in barca privati e taxi boat: se ne prenoti uno, verifica chi lo gestisce e che cosa comprende."),

    // ——— 11 ———
    h2("Ville e giardini"),
    p("Le ville del Lago di Como nacquero come residenze di villeggiatura di famiglie aristocratiche e facoltose, e diverse sono aperte al pubblico. Quasi tutte sono stagionali: verifica le date di apertura prima di inserirle nel programma."),
    h3("Villa Carlotta"),
    p("A Tremezzo (Tremezzina), sulla sponda occidentale, di fronte a Bellagio. Villa Carlotta unisce un museo — con opere di Canova, Hayez e Thorvaldsen, secondo la villa — e un grande giardino botanico che cambia volto con le stagioni. Ci si arriva in battello a Cadenabbia o Tremezzo, oppure in autobus lungo la sponda occidentale. Il calendario delle aperture e i biglietti sono sul sito ufficiale. Calcola due o tre ore."),
    {
      type: "image",
      src: `${IMG}/villa-carlotta-tremezzo.webp`,
      alt: "La facciata bianca di Villa Carlotta a Tremezzo con una fontana e il giardino all'italiana davanti",
      caption: "Villa Carlotta a Tremezzo. Il giardino botanico è tra le attrazioni principali del lago.",
      credit: unsplash("Renaud Confavreux", "renaudcfx"),
    },
    h3("Villa del Balbianello"),
    p("Sulla punta della piccola penisola boscosa di Lavedo, vicino a Lenno, Villa del Balbianello è un bene del FAI — Fondo per l'Ambiente Italiano — celebre per il giardino a terrazze e la loggia sul lago. Secondo il FAI, l'ingresso al parco richiede la prenotazione online; gli interni della villa hanno modalità di accesso proprie. Si arriva a piedi da Lenno — circa 1 km in salita su un sentiero in parte sterrato, circa 25 minuti, non adatto a passeggini né a persone con difficoltà motorie — oppure con un taxi boat a pagamento dal lido di Lenno, gestito da un operatore privato e non dal FAI. Calcola due ore più il tragitto."),
    {
      type: "image",
      src: `${IMG}/villa-del-balbianello-lenno.webp`,
      alt: "Villa del Balbianello sulla sua punta boscosa sopra il Lago di Como, vicino a Lenno",
      caption: "Villa del Balbianello, vicino a Lenno. Il parco va prenotato online in anticipo.",
      credit: unsplash("Stefano Bucciarelli", "stbuccia"),
    },
    h3("Altri giardini"),
    p("A Bellagio i giardini di Villa Melzi aprono in stagione; a Varenna Villa Monastero ha un giardino botanico e una casa museo. Entrambi si abbinano facilmente a una passeggiata in paese."),

    // ——— 12 ———
    h2("Cosa mangiare"),
    p("La cucina del Lago di Como attinge al lago e alle montagne lombarde intorno. Tra i piatti più diffusi:"),
    ul(
      "**Pesce di lago** — il pesce persico, spesso in filetti con il risotto, e il lavarello.",
      "**Missoltini** — agoni salati ed essiccati secondo la tradizione, spesso serviti con la polenta.",
      "**Polenta** — un classico della cucina di montagna lombarda.",
      "**Vino** — la Valtellina, appena a nord del lago, è nota per i rossi da Nebbiolo; i vini del lago sono commercializzati con l'indicazione Terre Lariane.",
    ),
    p("Le terrazze sul lago sono il posto classico, soprattutto a pranzo; nei punti più panoramici il prezzo tiene conto della vista. L'aperitivo nel tardo pomeriggio è un buon modo per godersi il lago senza un pasto completo. Nei fine settimana e d'estate conviene prenotare la cena: nei piccoli paesi del centro lago i ristoranti si riempiono. Sulle abitudini della tavola italiana c'è il nostro approfondimento sulle [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 13 ———
    h2("Quando andare"),
    ul(
      "**Primavera (aprile–maggio)** — giardini al massimo della fioritura, clima ideale per camminare e stagione dei battelli che entra nel vivo. Il tempo può essere variabile.",
      "**Estate (giugno–agosto)** — giornate calde e lunghe e orari più completi, ma anche i battelli più affollati, la massima richiesta di alloggi e qualche temporale.",
      "**Inizio autunno (settembre–inizio ottobre)** — spesso il periodo più equilibrato: giornate ancora calde, meno folla, ville e giardini ancora aperti.",
      "**Tardo autunno (fine ottobre–novembre)** — più tranquillo e più economico, ma più piovoso, con giornate corte, battelli ridotti e alcune chiusure stagionali.",
      "**Inverno (dicembre–marzo)** — calmo e suggestivo, con pochissimi visitatori, ma molti alberghi, ristoranti e alcune ville chiudono e i battelli si riducono.",
    ),
    p("I giardini delle ville sono aperti in genere dalla primavera all'autunno, con date che cambiano ogni anno. Per confrontare i laghi con il resto d'Italia nel corso dell'anno, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 14 ———
    h2("Se il tempo cambia: il piano B"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Bel tempo", title: "Tutti sull'acqua", text: "Battelli tra i paesi, passeggiate sul lago, giardini delle ville, belvedere come la punta di Bellagio o Brunate sopra Como." },
        { label: "Tempo incerto", title: "Programma flessibile", text: "Resta vicino alla base, scegli traversate brevi, visita i musei delle ville e lascia caffè e passeggiate in paese ai momenti grigi." },
        { label: "Navigazione interrotta", title: "Resta a terra", text: "Scopri con calma il tuo paese, usa il treno lungo la sponda orientale o dedica tempo al centro storico di Como. Prima di uscire, controlla gli avvisi dell'operatore." },
      ],
    },
    p("Orari di ville e giardini cambiano e alcuni chiudono in caso di maltempo: verifica sul sito di ciascuno prima di andare."),

    // ——— 15 ———
    h2("Il Lago di Como senza auto"),
    p("Per una prima visita breve, l'auto di solito non serve. Da Milano i treni arrivano direttamente a Como e a Varenna, i battelli collegano i paesi principali, gli autobus coprono le sponde e i paesi si visitano a piedi. Taxi e transfer privati risolvono arrivi a tarda sera e bagagli."),
    p("Viaggiare senz'auto conviene alla maggior parte di chi va per un weekend: alla prima visita, alle coppie con una sola base, a chi preferisce evitare strade strette e parcheggi introvabili e a chi abbina il lago a Milano. Ed è più rilassante: il battello fa parte del viaggio."),

    // ——— 16 ———
    h2("Il Lago di Como in auto"),
    p("L'auto ha più senso se dormi fuori dai paesi principali, vuoi esplorare borghi e colline meno collegati, viaggi con molti bagagli o con bambini, oppure prosegui verso la montagna o altre zone del Nord."),
    p("Mettiti in conto strade litoranee strette e tortuose, traffico intenso nei weekend estivi e pochi parcheggi nei paesi sul lago, alcuni dei quali hanno zone a traffico limitato in centro. Chiedi all'alloggio del parcheggio prima di prenotare. Pedaggi, ZTL e parcheggi sono spiegati nella guida su come [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 17 ———
    h2("Errori comuni"),
    ol(
      "**Dormire in un posto scomodo per i propri spostamenti.** Una base senza stazione né imbarcadero complica ogni giornata.",
      "**Voler visitare troppi paesi.** Due al giorno è un ritmo realistico.",
      "**Sottovalutare la logistica dei battelli.** Code, battelli pieni e servizi lenti si sommano.",
      "**Ignorare gli orari stagionali.** Fuori dall'alta stagione le corse si riducono.",
      "**Cambiare alloggio senza motivo.** In un weekend basta una base.",
      "**Noleggiare l'auto senza conoscere strade e parcheggi.** Le litoranee sono lente e i parcheggi scarsi.",
      "**Affidarsi a un orario non verificato.** Usa le informazioni aggiornate dell'operatore per la tua data.",
      "**Prenotare l'alloggio senza guardare i collegamenti.** Controlla la distanza da imbarcadero e stazione, e se ci sono scalini.",
      "**Considerare il lago un'unica attrazione compatta.** È lungo, e le sue zone sono molto diverse.",
      "**Non lasciare margini per il meteo.** Tieni pronto un piano per la giornata di pioggia.",
    ),

    // ——— 18 ———
    h2("Checklist per il weekend"),
    {
      type: "checklist",
      id: "lago-di-como-weekend",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli la base", "Verifica i collegamenti in treno e in battello", "Decidi se ti serve l'auto", "Confronta posizione e accessibilità degli alloggi"],
        },
        {
          title: "Prima di partire",
          items: ["Controlla gli orari dei battelli per le tue date", "Prenota le ville con ingresso su prenotazione", "Verifica orari e avvisi dei treni", "Prepara un'alternativa per la pioggia"],
        },
        {
          title: "Durante il viaggio",
          items: ["Controlla gli avvisi di navigazione del giorno", "Tieni un margine per i battelli", "Non riempire troppo la giornata", "Tieni a mente l'ultimo battello e l'ultimo treno"],
        },
      ],
    },
    p("Tempi dei treni, servizi di navigazione e modalità di visita delle ville citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Orari e aperture cambiano con le stagioni: controllali prima di partire. Per inserire il lago in un viaggio più lungo, c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Due giorni bastano per il Lago di Como?", answer: "Sì, per una prima visita concentrata su una zona. In due giorni si vedono la base, uno o due paesi in battello e magari il giardino di una villa. Tre giorni sono più rilassati e lasciano margine per il maltempo." },
    { question: "Dove conviene dormire sul Lago di Como?", answer: "Dipende dalle priorità. Varenna unisce stazione ferroviaria e battelli del centro lago; Bellagio è la più centrale per gli spostamenti in battello; Menaggio è comoda per la sponda occidentale; Como ha i treni migliori e i servizi di una città." },
    { question: "Si può visitare il Lago di Como senza auto?", answer: "Sì. Da Milano i treni diretti arrivano a Como e a Varenna, i battelli collegano i paesi principali e gli autobus servono le sponde. Per una prima visita breve, l'auto è più un problema che un aiuto." },
    { question: "Meglio il Lago di Como con o senza auto?", answer: "Senza, per la maggior parte di chi va per un weekend. L'auto è utile se dormi fuori dai paesi principali, vuoi esplorare le colline o viaggi con molti bagagli, ma le litoranee sono lente e i parcheggi nei paesi pochi." },
    { question: "Come si arriva da Milano al Lago di Como?", answer: "In treno regionale. Secondo Trenord, i treni diretti impiegano circa un'ora da Milano Centrale a Varenna e circa 40 minuti fino a Como San Giovanni, mentre da Milano Cadorna si arriva a Como Nord Lago, sul lungolago." },
    { question: "Meglio Como o Bellagio per la prima volta?", answer: "Bellagio se vuoi girare il centro lago in battello; Como se preferisci treni comodi, una piccola città e un po' di vita la sera. Varenna è una buona via di mezzo, con stazione e battelli del centro lago." },
    { question: "Varenna è una buona base per il Lago di Como?", answer: "Sì, soprattutto per un soggiorno breve. Ha una stazione con treni diretti da Milano Centrale e un imbarcadero nel centro lago. È piccola: in stagione conviene prenotare presto." },
    { question: "Come funzionano i battelli sul Lago di Como?", answer: "Il servizio pubblico è di Navigazione Laghi: battelli più lenti con molte fermate, servizi rapidi per le distanze lunghe e traghetti che attraversano il centro lago anche con le auto. Gli orari cambiano con le stagioni: controlla quello ufficiale per la tua data." },
    { question: "Cosa vedere sul Lago di Como in due giorni?", answer: "La tua base, uno o due paesi del centro lago in battello — Bellagio, Varenna o Menaggio — e una villa, come Villa Carlotta o Villa del Balbianello. Meglio non provare a coprire tutto il lago." },
    { question: "Cosa fare sul Lago di Como quando piove?", answer: "Restare vicino alla base, scegliere traversate brevi, visitare i musei delle ville e dedicarsi a centri storici e caffè. Se la navigazione è interrotta, il treno lungo la sponda orientale e il centro di Como sono buone alternative." },
    { question: "Qual è il periodo migliore per il Lago di Como?", answer: "Aprile–giugno e settembre–inizio ottobre offrono di solito il miglior equilibrio tra clima, giardini aperti e battelli frequenti. L'estate è il periodo più affollato; tardo autunno e inverno sono tranquilli, ma con meno corse e diverse chiusure." },
    { question: "Si può visitare il Lago di Como in giornata da Milano?", answer: "Sì, ma in giornata si vede di solito un solo paese — Como, oppure Varenna con un breve tragitto in battello. Per il centro lago conviene fermarsi almeno una notte." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Navigazione Laghi — Lago di Como", url: "https://www.navigazionelaghi.it/", note: "orari, tariffe e avvisi di navigazione" },
    { label: "Trenord — Milano Centrale–Varenna-Esino", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-central-station-varenna-esino/", note: "tempi di percorrenza" },
    { label: "Trenord — Milano Centrale–Como San Giovanni", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-centrale-como-s-giovanni-route/", note: "tempi di percorrenza" },
    { label: "Trenord — Milano Cadorna–Como Lago", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-cadorna-como/", note: "tempi di percorrenza" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/biglietti/titoli-di-viaggio/malpensa-express/", note: "collegamento con Malpensa" },
    { label: "ATM — Funicolare Como–Brunate", url: "https://www.atm.it/it/altriservizi/trasporto/pagine/funicolarecomobrunate.aspx", note: "funicolare" },
    { label: "Villa Carlotta", url: "https://www.villacarlotta.it/", note: "calendario delle aperture e biglietti" },
    { label: "FAI — Villa del Balbianello", url: "https://fondoambiente.it/luoghi/villa-del-balbianello", note: "prenotazione e accesso" },
    { label: "Giardini di Villa Melzi", url: "https://www.giardinidivillamelzi.it/", note: "apertura stagionale dei giardini" },
    { label: "Villa Monastero", url: "https://www.villamonastero.eu/", note: "orari di giardino e casa museo" },
    { label: "Lake Como is — portale turistico di Fondazione Lariofiere", url: "https://www.lakecomo.is/", note: "informazioni sulla destinazione" },
  ],
};
