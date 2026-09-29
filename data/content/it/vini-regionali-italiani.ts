import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Approfondimento: "I vini regionali italiani" — edizione italiana, scritta in
// modo autonomo rispetto a quella inglese (/food/italian-regional-wines). È
// l'articolo di riferimento sul vino; cucina, Sicilia, dolci, caffè e mercati
// hanno articoli propri. Fonti verificate a settembre 2026: tutte le
// denominazioni nel registro UE eAmbrosia (categoria vino); lo status DOCG nel
// Registro nazionale delle varietà di vite e delle denominazioni del Ministero
// dell'Agricoltura; il significato di DOCG, DOC, IGT, classico, riserva,
// superiore e gran selezione nella Legge 238/2016 (Testo Unico del Vino, via
// Normattiva); l'UNESCO per i paesaggi vitivinicoli di Langhe-Roero e
// Monferrato, per le colline del Prosecco e per l'alberello di Pantelleria; le
// regole UE su ingredienti e dichiarazione nutrizionale; l'art. 186 del Codice
// della strada, come nella nostra guida alla guida. Niente classifiche,
// punteggi, prezzi o cantine consigliate.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/italian-regional-wines";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const viniRegionaliItaliani: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Perché il vino italiano è così regionale"),
    answer("**In Italia non c'è una cultura del vino: ce ne sono tante, regionali.** Tutte le 20 regioni producono vino, dalle valli alpine alle isole vulcaniche, e quasi ovunque contano soprattutto i vitigni locali, spesso poco coltivati altrove. Geografia, clima, secoli di Stati diversi e tradizioni gastronomiche fanno sì che un Nebbiolo delle Langhe, un Sangiovese toscano e un Nerello Mascalese dell'Etna abbiano in comune poco più del Paese scritto in etichetta."),
    p("Qualche fattore spiega gran parte di questa varietà:"),
    ul(
      "**Montagne e colline** — Alpi e Appennini danno altitudine, pendenze e notti fresche; la viticoltura di qualità è soprattutto collinare.",
      "**Mare e isole** — coste lunghissime, Sicilia, Sardegna e isole minori portano condizioni molto diverse da quelle delle valli interne.",
      "**Suoli** — dalle marne delle Langhe ai terreni vulcanici di Etna, Vesuvio e Vulture.",
      "**Vitigni locali** — il Registro nazionale conta centinaia di varietà da vino, e molte regioni hanno conservato le proprie.",
      "**Storia** — fino al 1861 la penisola era divisa in molti Stati; commerci, dominazioni e mercati locali hanno deciso che cosa piantare.",
      "**Cucina** — il vino è cresciuto accanto alla cucina regionale, e gli abbinamenti locali lo riflettono ancora.",
    ),
    p("Il **terroir** — o, come si dice sempre più spesso, il territorio — è l'insieme dei fattori del luogo (suolo, esposizione, altitudine, clima) e delle scelte umane (vitigni, tecniche, tradizioni) che fanno sì che un vino sappia di dove nasce. Spiega molto, ma non è una formula magica: nessun suolo garantisce da solo un buon vino."),
    p("Qui parliamo di vino. Per la cucina, vedi [Tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana); per la Sicilia, [Tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),
    {
      type: "facts",
      title: "Il vino italiano in breve",
      rows: [
        { label: "Regioni", value: "Tutte le 20 regioni producono vino" },
        { label: "Classificazioni", value: "DOCG e DOC (per l'UE: DOP), IGT (IGP) e \"vino\"" },
        { label: "Denominazioni", value: "Oltre 500 nomi tutelati nel registro europeo" },
        { label: "Rossi principali", value: "Sangiovese, Nebbiolo, Barbera, Montepulciano, Aglianico, Nero d'Avola, Primitivo" },
        { label: "Bianchi principali", value: "Glera, Garganega, Verdicchio, Fiano, Vermentino, Trebbiano, Friulano" },
        { label: "Spumanti", value: "Metodo Martinotti (Prosecco, Asti) e metodo classico (Franciacorta, Trento, Alta Langa)" },
      ],
    },

    // ——— 2 ———
    h2("Come si classificano i vini italiani"),
    p("La disciplina di riferimento è oggi la Legge 238/2016, il *Testo Unico del Vino*, che si inserisce nel sistema europeo delle denominazioni protette. In etichetta si incontrano quattro livelli:"),
    table(
      ["Menzione", "Equivalente UE", "Che cosa indica"],
      [
        ["DOCG — Denominazione di Origine Controllata e Garantita", "DOP", "Origine protetta con le regole più severe; il vino deve essere stato DOC (per almeno sette anni, secondo la legge del 2016); le bottiglie hanno il contrassegno di Stato numerato"],
        ["DOC — Denominazione di Origine Controllata", "DOP", "Origine protetta con zona, vitigni, rese e tecniche fissati dal disciplinare di produzione"],
        ["IGT — Indicazione Geografica Tipica", "IGP", "Indicazione geografica più ampia e regole meno strette, spesso un'intera regione (Toscana, Terre Siciliane)"],
        ["Vino", "—", "Vino senza indicazione geografica; in alcuni casi può riportare vitigno e annata"],
      ],
      "Fonte: Legge 238/2016, articoli 28 e 33; registro UE eAmbrosia.",
    ),
    p("Sono categorie che parlano di **origine e regole**, non di punteggi. Le DOCG hanno disciplinari più severi e controlli anche organolettici, ma un DOC o un IGT può valere quanto un DOCG: alcuni celebri vini toscani sono nati proprio fuori dalle regole delle DOC. Nel registro europeo i nomi italiani del vino superano i 500; nell'elenco del Ministero le DOCG sono più di 70, le DOC oltre 300 e le IGT più di 100."),
    {
      type: "image",
      src: `${IMG}/serralunga-langhe.webp`,
      alt: "Il castello e il paese di Serralunga d'Alba su un crinale sopra i filari delle Langhe, con le Alpi sullo sfondo",
      caption: "Serralunga d'Alba, nella zona del Barolo, con l'arco alpino all'orizzonte.",
      credit: unsplash("Luis van den Bos", "bossoptics"),
      wide: true,
    },

    // ——— 3 ———
    h2("Regione per regione"),
    table(
      ["Regione", "Denominazioni rappresentative", "Vitigni importanti", "Stili tipici"],
      [
        ["Valle d'Aosta", "Valle d'Aosta", "Petit Rouge, Fumin, Prié Blanc", "Rossi e bianchi di montagna"],
        ["Piemonte", "Barolo, Barbaresco, Barbera d'Asti, Asti, Roero", "Nebbiolo, Barbera, Dolcetto, Moscato, Arneis", "Rossi strutturati, spumanti dolci"],
        ["Lombardia", "Franciacorta, Valtellina Superiore, Oltrepò Pavese", "Chardonnay, Pinot nero, Nebbiolo (Chiavennasca)", "Metodo classico, rossi di montagna"],
        ["Trentino-Alto Adige", "Trento, Trentino, Alto Adige, Teroldego Rotaliano", "Lagrein, Schiava, Teroldego, Gewürztraminer, Pinot grigio", "Bianchi e rossi alpini, spumanti"],
        ["Veneto", "Prosecco, Conegliano Valdobbiadene, Valpolicella, Amarone, Soave", "Glera, Corvina, Garganega", "Spumanti, rossi da uve appassite, bianchi"],
        ["Friuli Venezia Giulia", "Collio, Friuli Colli Orientali, Carso", "Friulano, Ribolla gialla, Pinot grigio, Refosco", "Bianchi, Picolit e Ramandolo dolci"],
        ["Liguria", "Cinque Terre, Riviera Ligure di Ponente, Colli di Luni", "Vermentino, Pigato, Bosco", "Bianchi di costa, Sciacchetrà"],
        ["Emilia-Romagna", "Lambrusco di Sorbara, Romagna, Romagna Albana", "Lambrusco, Sangiovese, Albana, Pignoletto", "Rossi frizzanti, rossi e bianchi fermi"],
        ["Toscana", "Chianti Classico, Chianti, Brunello di Montalcino, Vino Nobile di Montepulciano, Bolgheri", "Sangiovese, Vernaccia, internazionali sulla costa", "Rossi, Vin Santo"],
        ["Umbria", "Montefalco Sagrantino, Orvieto, Torgiano", "Sagrantino, Sangiovese, Grechetto", "Rossi potenti, bianchi"],
        ["Marche", "Verdicchio dei Castelli di Jesi, Rosso Cònero, Offida", "Verdicchio, Montepulciano, Pecorino", "Bianchi, rossi"],
        ["Lazio", "Frascati, Cesanese del Piglio, Est! Est!! Est!!! di Montefiascone", "Malvasia, Trebbiano, Cesanese", "Bianchi, rossi"],
        ["Abruzzo", "Montepulciano d'Abruzzo, Cerasuolo d'Abruzzo, Trebbiano d'Abruzzo", "Montepulciano, Trebbiano, Pecorino", "Rossi, rosati, bianchi"],
        ["Molise", "Molise, Tintilia del Molise", "Tintilia, Montepulciano", "Rossi"],
        ["Campania", "Taurasi, Fiano di Avellino, Greco di Tufo, Falanghina del Sannio, Vesuvio", "Aglianico, Fiano, Greco, Falanghina", "Rossi e bianchi, anche vulcanici"],
        ["Puglia", "Primitivo di Manduria, Salice Salentino, Castel del Monte", "Primitivo, Negroamaro, Nero di Troia", "Rossi, rosati"],
        ["Basilicata", "Aglianico del Vulture", "Aglianico", "Rossi vulcanici"],
        ["Calabria", "Cirò, Greco di Bianco", "Gaglioppo, Greco", "Rossi, bianchi dolci"],
        ["Sicilia", "Sicilia, Etna, Cerasuolo di Vittoria, Marsala, Pantelleria", "Nero d'Avola, Nerello Mascalese, Grillo, Carricante, Zibibbo", "Rossi, bianchi, liquorosi, dolci"],
        ["Sardegna", "Cannonau di Sardegna, Vermentino di Gallura, Carignano del Sulcis", "Cannonau, Vermentino, Carignano", "Rossi, bianchi, Vernaccia ossidativa"],
      ],
      "Qualche esempio per regione: nessuno la rappresenta tutta. Nomi verificati nel registro UE eAmbrosia.",
    ),

    // ——— 4 ———
    h2("Piemonte"),
    p("I vini piemontesi più noti nascono sulle colline di **Langhe**, **Roero** e **Monferrato**, i cui paesaggi vitivinicoli sono Patrimonio mondiale UNESCO dal 2014."),
    ul(
      "**Nebbiolo** — il vitigno di **Barolo** e **Barbaresco** (entrambi DOCG), prodotti solo con quest'uva e con affinamenti più lunghi della media. Nebbiolo è anche la base del Roero (DOCG), del Nebbiolo d'Alba e, nel nord della regione, di Gattinara e Ghemme.",
      "**Barbera** — il rosso più diffuso del Piemonte, di bella acidità; Barbera d'Asti e Nizza sono DOCG.",
      "**Dolcetto** — rossi più morbidi e pronti ad Alba, Dogliani e Ovada.",
      "**Moscato** — l'uva della DOCG **Asti**, che comprende lo spumante Asti e il **Moscato d'Asti**, dolce e leggermente frizzante.",
      "**Bianchi** — Arneis nel Roero, Cortese per il Gavi, Erbaluce di Caluso.",
    ),
    p("La cucina piemontese — tajarin, agnolotti, brasati, il tartufo d'autunno — è cresciuta insieme a questi vini. Per il capoluogo, vedi [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/serralunga-nebbiolo-harvest.webp`,
      alt: "Un vendemmiatore in maglietta rossa solleva una cassetta di Nebbiolo su una pila di cassette arancioni",
      caption: "Vendemmia del Nebbiolo a Serralunga d'Alba, nella zona del Barolo.",
      credit: unsplash("Andrea Cairone", "kaicaironejpg"),
    },

    // ——— 5 ———
    h2("Toscana"),
    p("La Toscana è terra di Sangiovese, ma lo stesso vitigno dà vini molto diversi a seconda di dove cresce e di come viene lavorato."),
    ul(
      "**Chianti Classico** (DOCG) — dalla zona storica tra Firenze e Siena, delimitata con un decreto del 1932; è una denominazione distinta dal Chianti.",
      "**Chianti** (DOCG) — un'area più ampia intorno al Classico, con sottozone come Rufina e Colli Senesi. Per legge i vigneti della zona Classico non possono essere destinati al Chianti DOCG.",
      "**Brunello di Montalcino** (DOCG) — Sangiovese di Montalcino, con un lungo affinamento prima dell'uscita; il Rosso di Montalcino è il fratello più giovane, DOC.",
      "**Vino Nobile di Montepulciano** (DOCG) — rosso a base di Sangiovese della città di Montepulciano, nel sud della Toscana.",
      "**Vernaccia di San Gimignano** (DOCG) — il bianco della città delle torri.",
      "**Bolgheri e la costa** — tra la fine degli anni Sessanta e gli anni Settanta alcuni produttori scelsero di lavorare fuori dalle regole delle DOC, spesso con Cabernet Sauvignon e Merlot: nacquero i cosiddetti \"Supertuscan\". Molti sono poi rientrati nelle denominazioni: Bolgheri è DOC, e il Bolgheri Sassicaia ha una DOC tutta sua.",
    ),
    p("La Toscana produce anche **Vin Santo**, passito con diverse DOC. Per la città, vedi [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/greve-in-chianti-vineyards.webp`,
      alt: "Filari dai colori autunnali al tramonto su una collina vicino a Greve in Chianti, con boschi sullo sfondo",
      caption: "Vigneti vicino a Greve in Chianti, nella zona del Chianti Classico.",
      credit: unsplash("Ken Shono", "kenshono"),
    },

    // ——— 6 ———
    h2("Veneto"),
    ul(
      "**Prosecco** — spumante ottenuto soprattutto dall'uva **Glera**. La DOC Prosecco copre un'ampia area tra Veneto e Friuli Venezia Giulia; le colline di **Conegliano Valdobbiadene** e di **Asolo** sono DOCG. Il metodo più diffuso è quello Martinotti (in autoclave), con diversi livelli di dolcezza e di effervescenza. Le colline del Prosecco di Conegliano e Valdobbiadene sono Patrimonio UNESCO dal 2019.",
      "**Valpolicella** — le colline a nord di Verona, dove Corvina e uve affini danno rossi leggeri (Valpolicella), il più corposo **Ripasso** e i vini da uve appassite.",
      "**Amarone della Valpolicella** (DOCG) — da uve lasciate appassire per mesi prima della fermentazione, fino a un rosso secco e concentrato; il **Recioto della Valpolicella** (DOCG) ne è la versione dolce.",
      "**Soave** — bianco da uve Garganega, a est di Verona; il Recioto di Soave è la versione dolce.",
      "**Bardolino** — rossi leggeri e Chiaretto sul Lago di Garda.",
    ),
    p("Per Valpolicella e Soave, vedi [Verona per la prima volta](/it/citta/verona-per-la-prima-volta); per i bacari, [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/valdobbiadene-prosecco-hills.webp`,
      alt: "Colline ripide coperte di filari intorno a Valdobbiadene viste dall'alto nella luce del mattino",
      caption: "Le colline del Prosecco intorno a Valdobbiadene, Patrimonio UNESCO dal 2019.",
      credit: unsplash("Alberto Caliman", "supercaliman"),
    },

    // ——— 7 ———
    h2("Friuli Venezia Giulia"),
    p("L'angolo nord-orientale d'Italia è noto soprattutto per i bianchi. **Friulano** (il vitigno un tempo chiamato Tocai friulano), **Ribolla gialla**, **Pinot grigio** e **Sauvignon** sono diffusi nelle DOC **Collio** e **Friuli Colli Orientali**, al confine con la Slovenia; **Refosco** e **Schioppettino** sono rossi locali; **Picolit** e **Ramandolo** sono bianchi dolci con DOCG. Sul Carso, vicino a Trieste, si coltivano Terrano e Vitovska. Qui le tradizioni vitivinicole attraversano il confine, e alcuni produttori sono noti per i bianchi macerati, i cosiddetti \"orange wine\"."),

    // ——— 8 ———
    h2("Trentino-Alto Adige"),
    p("Due province autonome, due identità diverse. L'**Alto Adige / Südtirol** (Bolzano), bilingue, ha una propria DOC — in etichetta anche *Südtirol* — e vigneti di montagna con Gewürztraminer, Pinot grigio, Pinot bianco, Sauvignon e i rossi locali **Lagrein** e **Schiava** (Vernatsch). Il **Trentino** ha la DOC Trentino, la DOC Teroldego Rotaliano per il **Teroldego** e la DOC **Trento**, metodo classico promosso collettivamente con il marchio *Trentodoc*."),
    {
      type: "image",
      src: `${IMG}/south-tyrol-hocheppan-vineyards.webp`,
      alt: "Castel d'Appiano su uno sperone boscoso sopra un'ampia valle di vigneti e frutteti in Alto Adige, con montagne calcaree sullo sfondo",
      caption: "Vigneti sotto Castel d'Appiano (Hocheppan), vicino a Bolzano.",
      credit: unsplash("Patrick Federi", "federi"),
    },

    // ——— 9 ———
    h2("Lombardia"),
    ul(
      "**Franciacorta** (DOCG) — metodo classico delle colline a sud del Lago d'Iseo, soprattutto da Chardonnay e Pinot nero.",
      "**Valtellina** — vigneti a terrazze nella valle alpina dell'Adda, dove il Nebbiolo si chiama **Chiavennasca**; Valtellina Superiore e Sforzato (Sfursat) di Valtellina, da uve appassite, sono DOCG.",
      "**Oltrepò Pavese** — le colline a sud di Pavia, con Pinot nero, Croatina (per la Bonarda) e una DOCG metodo classico.",
      "**Lugana** — bianchi della sponda meridionale del Garda, condivisi con il Veneto.",
    ),
    p("Per le enoteche milanesi, vedi [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo)."),

    // ——— 10 ———
    h2("Liguria"),
    p("In Liguria le vigne si arrampicano su terrazze tra monti e mare, e la produzione resta piccola. **Vermentino** e **Pigato** sono i bianchi principali della Riviera Ligure di Ponente; i Colli di Luni, al confine con la Toscana, puntano sul Vermentino. La DOC **Cinque Terre** comprende bianchi secchi e lo **Sciacchetrà**, vino dolce da uve appassite coltivate sui terrazzamenti a picco sul mare."),

    // ——— 11 ———
    h2("Emilia-Romagna"),
    p("Il **Lambrusco** è una famiglia di vitigni e di DOC più che un vino solo — Lambrusco di Sorbara, Grasparossa di Castelvetro, Salamino di Santa Croce tra gli altri — con stili che vanno dal secco al dolce, dal rosato al rosso cupo, quasi sempre frizzanti. È il compagno naturale di salumi e primi ricchi. In Romagna ci sono il **Sangiovese** (DOC Romagna) e l'**Albana** (Romagna Albana DOCG), e vicino a Bologna il Colli Bolognesi Pignoletto (DOCG). Vedi [Bologna in due giorni](/it/citta/bologna-in-due-giorni)."),
    {
      type: "image",
      src: `${IMG}/val-dorcia-wine-tasting.webp`,
      alt: "Un tavolo a lume di candela preparato per una degustazione, con file di calici, una bottiglia e piatti di salumi e bruschette",
      caption: "Una degustazione con prodotti locali in Val d'Orcia.",
      credit: unsplash("Meg von Haartman", "traveleroohlala"),
    },

    // ——— 12 ———
    h2("Il Centro: Marche, Umbria, Lazio"),
    h3("Marche"),
    p("Sul versante adriatico il bianco simbolo è il **Verdicchio**: dei Castelli di Jesi e di Matelica, con la DOCG per le versioni Riserva. Sulla costa di Ancona il **Montepulciano** dà il Rosso Cònero (DOC) e il Cònero (DOCG); il Rosso Piceno unisce Montepulciano e Sangiovese; la DOCG Offida comprende anche bianchi da uva **Pecorino**."),
    h3("Umbria"),
    p("Il **Sagrantino** dà rossi densi e tannici nella DOCG Montefalco Sagrantino; il Sangiovese conta a Torgiano e Montefalco; l'**Orvieto**, a base di Grechetto e Trebbiano (il Procanico), è il bianco più noto. Vini adatti a una cucina di maiale, legumi, tartufo e carni alla brace."),
    h3("Lazio"),
    p("I Castelli Romani producono il **Frascati**, bianco da Malvasia e Trebbiano, con il Frascati Superiore e il dolce Cannellino di Frascati come DOCG. Il **Cesanese** è il rosso locale, con la DOCG Cesanese del Piglio. A nord di Roma, l'**Est! Est!! Est!!! di Montefiascone** deve il nome a una leggenda sul servitore di un vescovo che segnava le locande migliori: una storia, non un fatto documentato. Vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),

    // ——— 13 ———
    h2("Abruzzo e Molise"),
    p("Il **Montepulciano d'Abruzzo** è un rosso prodotto con l'**uva Montepulciano**. Non ha nulla a che fare con il **Vino Nobile di Montepulciano**, a base di Sangiovese, che prende il nome dalla **città** toscana: una confusione frequente anche tra gli italiani. L'Abruzzo produce anche il **Cerasuolo d'Abruzzo**, rosato intenso da uve Montepulciano, e il **Trebbiano d'Abruzzo**; l'area delle Colline Teramane è DOCG. Il vicino Molise ha un vitigno tutto suo, la **Tintilia**, con una DOC dedicata."),

    // ——— 14 ———
    h2("Campania"),
    p("La Campania ha alcuni dei vini più riconoscibili del Sud. L'**Aglianico** dà il **Taurasi** e l'Aglianico del Taburno (entrambi DOCG) nell'entroterra dell'Irpinia e del Sannio; **Fiano di Avellino** e **Greco di Tufo** sono bianchi DOCG; la **Falanghina** è molto diffusa, soprattutto nel Sannio. Contano anche i suoli vulcanici: la DOC **Vesuvio** sulle pendici del vulcano e i **Campi Flegrei** a ovest di Napoli. In Costiera Amalfitana piccole vigne a terrazze ospitano vitigni locali. Vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/ravello-terraced-vineyards.webp`,
      alt: "Vigneti e orti a terrazze sotto il paese di Ravello, in Costiera Amalfitana",
      caption: "Vigne a terrazze sotto Ravello, in Costiera Amalfitana.",
      credit: unsplash("Ian Mackey", "ianmackey"),
    },

    // ——— 15 ———
    h2("Puglia, Basilicata e Calabria"),
    h3("Puglia"),
    p("Il Sud pianeggiante e caldo e il Nord più alto e fresco danno vini diversi. Il **Primitivo** — che le analisi del DNA hanno dimostrato identico allo Zinfandel californiano — è al centro del Primitivo di Manduria (DOC) e del Gioia del Colle; il **Negroamaro** domina il Salento, Salice Salentino compreso; il **Nero di Troia** cresce a nord, intorno a Castel del Monte, che ha tre DOCG. Il rosato ha una lunga tradizione, e la **Verdeca** è un bianco locale. Si va dalle grandi cantine sociali alle piccole aziende."),
    {
      type: "image",
      src: `${IMG}/puglia-grape-harvest.webp`,
      alt: "Grappoli d'uva bianca in una cassetta gialla sulla terra rossa durante la vendemmia in Puglia",
      caption: "Uva bianca in vendemmia, in Puglia.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Basilicata"),
    p("Il vino chiave è l'**Aglianico del Vulture**, coltivato sulle pendici del Monte Vulture, vulcano spento; la versione Superiore è DOCG."),
    h3("Calabria"),
    p("Il rosso più noto è il **Cirò**, soprattutto da **Gaglioppo**, sulla costa ionica; il **Greco di Bianco** è un bianco dolce dell'estremo sud."),

    // ——— 16 ———
    h2("Sicilia"),
    p("La Sicilia è una delle grandi regioni vinicole italiane, con paesaggi che vanno dalle pianure costiere alle pendici vulcaniche. I nomi chiave: la DOC **Sicilia** e l'IGT **Terre Siciliane**, che coprono tutta l'isola; il **Nero d'Avola**, il rosso più diffuso; **Grillo** e **Catarratto** tra i bianchi; il **Cerasuolo di Vittoria**, da Nero d'Avola e Frappato, unica DOCG siciliana; e l'**Etna**, con rossi da Nerello Mascalese e bianchi da Carricante sulle pendici del vulcano. Il **Marsala** è un vino liquoroso della provincia di Trapani; a Pantelleria lo **Zibibbo** (Moscato d'Alessandria) dà i passiti, e la coltivazione tradizionale della vite ad alberello dell'isola è Patrimonio immateriale UNESCO dal 2014. Per la cucina, [Tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana) e [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/etna-wine-bottle.webp`,
      alt: "Una bottiglia verde di vino bianco dell'Etna con etichetta color crema su un tavolo scuro accanto a foglie verdi",
      caption: "Un bianco dell'Etna: l'etichetta indica il produttore, la denominazione (Etna DOC) e l'annata.",
      credit: unsplash("Egor Myznik", "vonshnauzer"),
    },

    // ——— 17 ———
    h2("Sardegna"),
    p("La Sardegna ha un patrimonio di vitigni tutto suo. Il **Cannonau** (DOC Cannonau di Sardegna) è geneticamente la stessa varietà del Grenache; dove sia nato è ancora discusso. Il **Vermentino** dà bianchi freschi in tutta l'isola, e il Vermentino di Gallura, nel nord-est, è l'unica DOCG sarda. Il **Carignano del Sulcis** viene dal sud-ovest, e la **Vernaccia di Oristano** è un vino particolare, affinato in legno, dove sviluppa note ossidative. I legami tra Cannonau e longevità dei sardi sono popolari, ma non dimostrati."),

    // ——— 18 ———
    h2("Valle d'Aosta"),
    p("La regione più piccola d'Italia ha una sola DOC, **Valle d'Aosta / Vallée d'Aoste**, con sottozone e vitigni locali come Petit Rouge, Fumin e Prié Blanc. Qui si trovano alcuni dei vigneti più alti d'Italia, sui ripidi versanti della valle."),

    // ——— 19 ———
    h2("Gli spumanti"),
    p("Lo spumante italiano non è una cosa sola: cambiano metodo, vitigni e tradizioni."),
    table(
      ["Vino", "Dove", "Uve principali", "Metodo"],
      [
        ["Prosecco", "Veneto e Friuli Venezia Giulia", "Glera", "Soprattutto Martinotti (autoclave)"],
        ["Franciacorta", "Lombardia", "Chardonnay, Pinot nero", "Metodo classico"],
        ["Trento DOC (Trentodoc)", "Trentino", "Chardonnay, Pinot nero", "Metodo classico"],
        ["Alta Langa", "Piemonte", "Pinot nero, Chardonnay", "Metodo classico"],
        ["Oltrepò Pavese Metodo Classico", "Lombardia", "Pinot nero", "Metodo classico"],
        ["Asti / Moscato d'Asti", "Piemonte", "Moscato bianco", "Autoclave; dolce e aromatico"],
        ["Lambrusco", "Emilia-Romagna, Lombardia", "Lambruschi", "Soprattutto autoclave; anche rifermentato in bottiglia"],
      ],
      "Metodi e stili variano secondo produttore e disciplinare; nessuna classifica.",
    ),

    // ——— 20 ———
    h2("Vini dolci, passiti e liquorosi"),
    ul(
      "**Dolce** — vino con zuccheri residui, qualunque sia il metodo.",
      "**Passito** — da uve appassite dopo la raccolta (o sulla pianta): Vin Santo in Toscana, Recioto in Veneto, Passito di Pantelleria in Sicilia, Sciacchetrà alle Cinque Terre.",
      "**Spumante dolce** — Moscato d'Asti e Asti in Piemonte.",
      "**Liquoroso** — vino con aggiunta di alcol, soprattutto il **Marsala**.",
      "**Bianchi dolci** — Picolit e Ramandolo in Friuli, Greco di Bianco in Calabria, Cannellino di Frascati nel Lazio.",
    ),
    p("Molti accompagnano tradizionalmente dolci e biscotti: Vin Santo e cantucci sono un classico toscano. Vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),

    // ——— 21 ———
    h2("I vitigni autoctoni"),
    p("Un **vitigno autoctono** è una varietà coltivata storicamente in una zona, a differenza degli internazionali come Chardonnay o Merlot. \"Autoctono\" non significa antico né immutato: le origini di molte uve sono incerte o discusse, e le analisi del DNA hanno smentito diverse storie tradizionali."),
    table(
      ["Vitigno", "Colore", "Zone principali"],
      [
        ["Nebbiolo", "Rosso", "Piemonte, Valtellina"],
        ["Sangiovese", "Rosso", "Toscana, Romagna, Umbria, Marche"],
        ["Barbera", "Rosso", "Piemonte"],
        ["Montepulciano", "Rosso", "Abruzzo, Marche"],
        ["Aglianico", "Rosso", "Campania, Basilicata"],
        ["Nerello Mascalese", "Rosso", "Etna"],
        ["Nero d'Avola", "Rosso", "Sicilia"],
        ["Negroamaro", "Rosso", "Puglia"],
        ["Cannonau", "Rosso", "Sardegna"],
        ["Fiano", "Bianco", "Campania"],
        ["Greco", "Bianco", "Campania, Calabria"],
        ["Verdicchio", "Bianco", "Marche"],
        ["Vermentino", "Bianco", "Sardegna, Liguria, costa toscana"],
        ["Ribolla gialla", "Bianco", "Friuli Venezia Giulia"],
        ["Garganega", "Bianco", "Veneto (Soave)"],
      ],
    ),

    // ——— 22 ———
    h2("Vino e cucina"),
    p("In Italia l'abbinamento raramente è una scienza: il vino fa parte del pasto, e quello del posto di solito va con la cucina del posto. Qualche principio generale:"),
    h3("Pesce"),
    p("Bianchi freschi e non affinati in legno delle zone costiere — Vermentino, Verdicchio, Falanghina, Etna bianco — ma anche rosati e rossi leggeri."),
    h3("Primi"),
    p("Conta il condimento: pomodoro e acidità chiamano rossi freschi come Barbera o Chianti; burro e formaggi bianchi più ricchi o un Lambrusco; i primi di mare un bianco."),
    h3("Formaggi e salumi"),
    p("Gli abbinamenti regionali sono la guida più semplice: Lambrusco con i salumi emiliani e il Parmigiano Reggiano, Sagrantino con il pecorino stagionato, vini dolci con gli erborinati."),
    h3("Carni rosse"),
    p("I rossi più strutturati — Barolo, Brunello, Taurasi, Aglianico del Vulture, Amarone — accompagnano tradizionalmente brasati e arrosti."),
    h3("Dolci"),
    p("Vino dolce con un dolce: Vin Santo, Moscato d'Asti, Passito di Pantelleria, Recioto. Di più in [Tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 23 ———
    h2("L'enoturismo"),
    p("L'enoturismo in Italia è una realtà consolidata, e dal 2019 un decreto ministeriale fissa i requisiti minimi delle attività enoturistiche. I modi per conoscere il vino sul posto:"),
    ul(
      "**Cantine** — molte offrono degustazioni e visite, di solito su prenotazione.",
      "**Enoteche** — negozi e wine bar, spesso con mescita al calice.",
      "**Strade del vino** — itinerari segnalati che collegano cantine, ristoranti e borghi.",
      "**Agriturismi** — molti producono il proprio vino.",
      "**Vendemmia** — indicativamente tra agosto e ottobre, secondo zona e vitigno; alcune cantine accolgono visitatori, altre sono troppo impegnate.",
      "**Tour organizzati** — il modo più semplice per degustare senza guidare.",
    ),
    tip("Chi degusta non guida. Il limite generale è 0,5 g/l di alcol nel sangue, e zero per chi ha meno di 21 anni o la patente da meno di tre anni. Meglio un tour, un taxi, i mezzi pubblici o un guidatore che non beve. Vedi [Guidare in Italia](/it/guide/guidare-in-italia).", "Prima si organizza il ritorno"),
    {
      type: "image",
      src: `${IMG}/radicofani-wine-shop.webp`,
      alt: "Sedie impagliate e un tavolino davanti a scaffali di bottiglie in un'enoteca di Radicofani, in Toscana",
      caption: "Un'enoteca con degustazione a Radicofani, nella Toscana meridionale.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 24 ———
    h2("Come funziona una degustazione"),
    p("Non serve essere sommelier. Di solito chi guida la degustazione accompagna in pochi passaggi:"),
    ul(
      "**Vista** — colore e intensità: chiaro o profondo, giovane o evoluto.",
      "**Olfatto** — si fa roteare il vino e si annusa: frutta, fiori, erbe, spezie, legno.",
      "**Gusto** — dolcezza e **acidità**, la freschezza che fa salivare.",
      "**Tannino** — la sensazione asciugante dei rossi, da bucce e legno.",
      "**Corpo** — quanto il vino è leggero o pieno.",
      "**Persistenza** — quanto dura il sapore dopo aver deglutito.",
    ),
    p("Sputare durante una degustazione è normale, soprattutto se i vini sono molti."),

    // ——— 25 ———
    h2("Leggere un'etichetta"),
    ul(
      "**Produttore o imbottigliatore** — nome e sede di chi ha prodotto o imbottigliato il vino.",
      "**Denominazione** — il nome tutelato (per esempio Chianti Classico) e la categoria (DOCG, DOC, IGT, o DOP/IGP).",
      "**Annata** — l'anno della vendemmia, se indicato.",
      "**Vitigno** — a volte indicato, a volte implicito nella denominazione.",
      "**Titolo alcolometrico** — in % vol.",
      "**Volume** — per esempio 750 ml.",
      "**Provenienza** — il Paese e le eventuali indicazioni geografiche.",
      "**Lotto** — per la tracciabilità; i DOCG hanno anche il contrassegno di Stato numerato sul collo.",
      "**Ingredienti e valori nutrizionali** — obbligatori per i vini prodotti dall'8 dicembre 2023; possono essere indicati tramite QR code, con il valore energetico in etichetta.",
      "**Altre menzioni** — riserva, superiore, classico o vigna, tutte regolamentate (vedi sotto).",
    ),

    // ——— 26 ———
    h2("Ordinare il vino"),
    p("Le frasi più utili, anche per accompagnare ospiti stranieri:"),
    table(
      ["Frase", "Quando usarla"],
      [
        ["\"Un calice di…\"", "Per un bicchiere"],
        ["\"Una bottiglia di…\"", "Per la bottiglia intera"],
        ["\"Quali vini avete al calice?\"", "Per sapere cosa c'è alla mescita"],
        ["\"È fermo o frizzante?\"", "Per capire se ha le bollicine"],
        ["\"È secco o dolce?\"", "Per lo stile"],
        ["\"Da quale regione viene?\"", "Per la provenienza"],
        ["Vino della casa", "Spesso locale, servito in caraffa"],
        ["Carta dei vini", "La lista dei vini"],
        ["Enoteca / mescita", "Negozio di vini / locale che serve al bicchiere"],
      ],
    ),

    // ——— 27 ———
    h2("Bere responsabilmente"),
    p("L'alcol comporta rischi per la salute; l'Organizzazione mondiale della sanità ricorda che non esiste un livello di consumo sicuro. Non serve bere per vivere la cultura gastronomica italiana: molti italiani bevono poco o per niente, e acqua, bibite e aperitivi analcolici ci sono sempre. Mai guidare dopo aver bevuto; nelle zone del vino meglio taxi, mezzi pubblici o tour organizzati."),

    // ——— 28 ———
    h2("Luoghi comuni da sfatare"),
    ul(
      "**\"DOCG vuol dire migliore.\"** Vuol dire regole e controlli più severi, non una bottiglia migliore per forza.",
      "**\"Montepulciano d'Abruzzo e Vino Nobile di Montepulciano sono la stessa cosa.\"** Uno è un vitigno abruzzese, l'altro una città toscana.",
      "**\"Il Prosecco è tutto uguale.\"** Cambiano zona (DOC o DOCG), dolcezza e metodo.",
      "**\"Chianti e Chianti Classico sono la stessa cosa.\"** Sono due DOCG distinte, con zone diverse.",
      "**\"Il vino italiano è soprattutto rosso.\"** L'Italia produce moltissimi bianchi, rosati, spumanti e vini dolci.",
      "**\"Esiste uno stile italiano.\"** Esistono tanti stili regionali.",
      "**\"Autoctono vuol dire antico.\"** Molte uve locali hanno storie incerte o discusse.",
    ),

    // ——— 29 ———
    h2("Le parole del vino"),
    table(
      ["Termine", "Significato"],
      [
        ["DOCG / DOC", "Menzioni italiane per le denominazioni di origine protetta (UE: DOP)"],
        ["IGT", "Menzione italiana per l'indicazione geografica protetta (UE: IGP)"],
        ["Denominazione", "Nome tutelato di un vino"],
        ["Disciplinare", "Le regole di produzione di una denominazione"],
        ["Vitigno", "Varietà d'uva"],
        ["Vendemmia", "Raccolta dell'uva"],
        ["Cantina", "Azienda vinicola o locale di affinamento"],
        ["Annata", "Anno della vendemmia"],
        ["Classico", "Vino della zona d'origine più antica di una denominazione"],
        ["Riserva", "Affinamento più lungo: per la Legge 238/2016 almeno due anni per i rossi e uno per i bianchi, salvo disciplinari preesistenti"],
        ["Superiore", "Regole più severe: rese più basse e almeno 0,5% di alcol in più"],
        ["Gran Selezione", "Menzione riservata a vini DOCG con requisiti ulteriori"],
        ["Passito", "Vino da uve appassite"],
        ["Spumante / frizzante", "Con effervescenza piena / leggera"],
        ["Secco / amabile / dolce", "Senza, con poco o con molto zucchero residuo"],
        ["Tannino / acidità", "Sensazione astringente / freschezza"],
        ["Calice", "Bicchiere da vino"],
      ],
    ),
    p("Per organizzare il viaggio, c'è la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Quali sono le principali regioni del vino in Italia?", answer: "Tutte le 20 regioni producono vino. Piemonte, Toscana, Veneto, Sicilia, Puglia e Campania sono tra le più note, ma Friuli, Alto Adige, Marche, Abruzzo e Sardegna hanno tradizioni altrettanto forti." },
    { question: "Che differenza c'è tra DOC e DOCG?", answer: "Sono entrambe denominazioni di origine protetta. La DOCG ha disciplinari e controlli più severi e il contrassegno di Stato numerato, e il vino deve essere stato prima DOC. Nessuna delle due garantisce una bottiglia migliore." },
    { question: "Che cosa significa IGT?", answer: "Indicazione Geografica Tipica, la menzione italiana per le IGP. Le regole sono meno stringenti delle DOC e le zone spesso coincidono con intere regioni, come Toscana o Terre Siciliane." },
    { question: "Che cos'è il Chianti Classico?", answer: "Una DOCG a base di Sangiovese della zona storica tra Firenze e Siena, distinta dalla DOCG Chianti, che copre un'area più ampia." },
    { question: "Che cos'è il Barolo?", answer: "Un rosso DOCG delle Langhe, in Piemonte, prodotto solo con uve Nebbiolo e con affinamenti più lunghi della media." },
    { question: "Con quale uva si fa il Prosecco?", answer: "Soprattutto con la Glera. Si produce tra Veneto e Friuli Venezia Giulia; le colline di Conegliano Valdobbiadene e di Asolo sono DOCG, e il metodo più diffuso è il Martinotti." },
    { question: "Che cos'è l'Amarone?", answer: "Un rosso secco della Valpolicella, vicino a Verona, da uve appassite per mesi prima della fermentazione. Il Recioto della Valpolicella ne è la versione dolce." },
    { question: "Montepulciano d'Abruzzo e Vino Nobile di Montepulciano sono lo stesso vino?", answer: "No. Il primo si fa con l'uva Montepulciano in Abruzzo; il secondo è un vino a base di Sangiovese della città toscana di Montepulciano." },
    { question: "Che cos'è il Marsala?", answer: "Un vino liquoroso della provincia di Trapani, nella Sicilia occidentale, prodotto in versioni secche e dolci." },
    { question: "Che cos'è il Franciacorta?", answer: "Uno spumante metodo classico DOCG della Lombardia, a sud del Lago d'Iseo, soprattutto da Chardonnay e Pinot nero." },
    { question: "Quali vini sono tipici della Sicilia?", answer: "Nero d'Avola, Grillo, i rossi e i bianchi dell'Etna, il Cerasuolo di Vittoria, il Marsala e i passiti di Pantelleria." },
    { question: "Quali vini sono tipici della Sardegna?", answer: "Cannonau, Vermentino (compreso il Vermentino di Gallura DOCG), Carignano del Sulcis e Vernaccia di Oristano." },
    { question: "Si possono visitare le cantine?", answer: "Sì. Molte offrono degustazioni e visite, di solito su prenotazione, e le strade del vino collegano i produttori in molte zone. Meglio organizzare il ritorno senza guidare." },
    { question: "Che cosa vuol dire Riserva in etichetta?", answer: "Che il vino ha avuto un affinamento più lungo: per la Legge 238/2016 almeno due anni per i rossi e uno per i bianchi, salvo regole diverse dei disciplinari preesistenti." },
    { question: "Che cosa significa Superiore?", answer: "Che il disciplinare prevede regole più severe rispetto alla versione base: rese per ettaro più basse di almeno il 10% e un grado alcolico più alto di almeno 0,5%." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Normattiva — Legge 12 dicembre 2016, n. 238 (Testo Unico del Vino)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2016-12-12;238", note: "classificazioni e menzioni" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "DOP e IGP del vino italiano" },
    { label: "Ministero dell'Agricoltura — Registro nazionale delle varietà di vite: DOCG, DOC, IGT", url: "http://catalogoviti.politicheagricole.it/dopigp.php" },
    { label: "Ministero dell'Agricoltura — Elenchi e disciplinari vini DOP e IGP", url: "https://www.masaf.gov.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/4625" },
    { label: "UNESCO — Paesaggi vitivinicoli del Piemonte: Langhe-Roero e Monferrato", url: "https://whc.unesco.org/en/list/1390", note: "2014 (in inglese)" },
    { label: "UNESCO — Le Colline del Prosecco di Conegliano e Valdobbiadene", url: "https://whc.unesco.org/en/list/1571", note: "2019 (in inglese)" },
    { label: "UNESCO — La pratica agricola della vite ad alberello di Pantelleria", url: "https://ich.unesco.org/en/RL/traditional-agricultural-practice-of-cultivating-the-vite-ad-alberello-head-trained-bush-vines-of-the-community-of-pantelleria-00720", note: "2014 (in inglese)" },
    { label: "Commissione europea — Etichettatura del vino", url: "https://agriculture.ec.europa.eu/farming/crop-productions-and-plant-based-products/wine/wine-labelling_en", note: "ingredienti e valori nutrizionali (in inglese)" },
    { label: "OMS Europa — Nessun livello di consumo di alcol è sicuro per la salute", url: "https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health", note: "2023 (in inglese)" },
    { label: "ACI — Codice della strada, art. 186", url: "https://aci.gov.it/codice-della-strada/art-186/", note: "guida in stato di ebbrezza" },
  ],
};
