import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Approfondimento: "Tradizioni della cucina siciliana" — edizione italiana,
// scritta in modo autonomo rispetto a quella inglese. È l'articolo di
// riferimento sulla Sicilia a tavola; cucina italiana in generale, dolci,
// caffè, vini, mercati e pizza hanno articoli propri e vengono solo linkati.
// Tutte le DOP e IGP citate sono state verificate nel registro UE eAmbrosia a
// settembre 2026. Altre fonti: Accademia della Crusca su arancina/arancino;
// Consorzio del Cioccolato di Modica e Ministero dell'Agricoltura sul
// cioccolato di Modica; Visit Sicily (Regione Siciliana) su pasta alla Norma,
// mercati di Catania, Favignana e saline di Trapani; Regione Siciliana sulla
// riserva delle Saline di Trapani e Paceco e sul pistacchio di Bronte; Comune
// di Agrigento e Parco della Valle dei Templi sul Mandorlo in Fiore;
// couscousfest.it per le date 2026; UNESCO per Val di Noto, Etna e Palermo
// arabo-normanna. Le origini non documentabili sono presentate come
// associazioni o omesse; il vino resta breve e rimanda all'articolo dedicato.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/sicily-food-traditions";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const tradizioniDellaCucinaSiciliana: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cosa rende unica la cucina siciliana?"),
    answer("**La cucina siciliana è quella di una grande isola al centro del Mediterraneo: secoli di scambi e di dominazioni, un clima caldo e moltissima costa.** I suoi tratti distintivi sono **grano duro, pesce, agrumi, mandorle e pistacchi, ricotta di pecora, l'agrodolce e un cibo di strada** che non ha eguali in Italia. Ma non è una cucina sola: Palermo, Catania, Siracusa, Trapani e l'entroterra hanno piatti, parole e abitudini diverse."),
    p("Questa è la nostra guida alla Sicilia a tavola: cosa mangiare, da dove arriva, come cambia tra est e ovest e come viverla da viaggiatori. Per il quadro nazionale c'è [Tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana); per il caffè [Il caffè italiano](/it/cibo/caffe-italiano); per i dolci [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani); per i vini [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
    {
      type: "facts",
      title: "La Sicilia a tavola in breve",
      rows: [
        { label: "Basi", value: "Grano duro (pasta e pane), pesce, ortaggi, agrumi, olio, ricotta" },
        { label: "Sapori tipici", value: "Agrodolce, mandorle, pistacchi, capperi, finocchietto selvatico, pangrattato tostato" },
        { label: "Cibo di strada", value: "Arancine, panelle, crocchè, sfincione, pani ca' meusa" },
        { label: "Dolci", value: "Cannoli, cassata, frutta martorana, granita" },
        { label: "Prodotti tutelati", value: "Decine di DOP e IGP, dal pistacchio di Bronte al cioccolato di Modica" },
        { label: "Da dove cominciare", value: "Un mercato di mattina, un pranzo di strada, una colazione con granita" },
      ],
    },

    // ——— 2 ———
    h2("Una storia che si legge negli ingredienti"),
    p("In circa tremila anni la Sicilia è stata abitata, governata o frequentata da Fenici, Greci, Romani, Bizantini, emiri arabi, Normanni, Svevi, Angioini, Aragonesi e corona spagnola, Borbone, fino all'Unità del 1861. Nel dichiarare patrimonio mondiale la Palermo arabo-normanna, l'UNESCO parla di un \"sincretismo socio-culturale\" tra cultura occidentale, islamica e bizantina: una chiave che vale anche per la cucina."),
    p("Nel racconto popolare ogni popolo ha \"portato\" qualcosa. Alcuni legami sono solidi in termini generali: pomodoro, mais e cacao sono arrivati dalle Americhe dopo il Cinquecento, in Sicilia come nel resto d'Europa. Molte altre attribuzioni sono tradizioni più che fatti documentati, e l'origine dei singoli piatti resta quasi sempre discussa. Per questo parliamo di influenze e associazioni, non di un'unica civiltà che avrebbe \"inventato\" un cibo."),
    ul(
      "**Il grano** — già nell'antichità la Sicilia era terra di cereali; il grano duro regge ancora oggi pasta e pane.",
      "**Agrumi, mandorle, zucchero e riso** — spesso associati al periodo arabo e comunque centrali nei dolci e nel cibo di strada di oggi.",
      "**L'agrodolce** — aceto e zucchero o miele, uvetta e pinoli: lo si ritrova nella caponata e nella pasta con le sarde.",
      "**La pasticceria dei monasteri** — molti dolci, a cominciare dalla frutta di marzapane, sono legati per tradizione ai conventi di clausura.",
      "**Gli ingredienti del Nuovo Mondo** — pomodoro, peperoni e cacao, adottati nel corso dei secoli.",
    ),
    p("In sintesi: la cucina siciliana nasce da **ciò che l'isola coltiva e pesca**, rielaborato da culture diverse e poi da generazioni di cuoche, cuochi e pasticcieri."),

    // ——— 3 ———
    h2("I tratti che la distinguono"),
    ul(
      "**Agrodolce** — l'equilibrio fra aceto e zucchero, uvetta e capperi, tipico di piatti di verdure come la caponata.",
      "**Frutta secca** — mandorle e pistacchi nel pesto, nei dolci, nella granita e anche nei piatti salati.",
      "**Agrumi** — arance, limoni e mandarini in insalate, dolci, granite e conserve.",
      "**Muddica** — il pangrattato tostato che sulla pasta, soprattutto di pesce, prende il posto del formaggio.",
      "**Ricotta** — fresca, di pecora, nei cannoli e nella cassata; salata e stagionata, grattugiata sulla pasta.",
      "**Il mare** — sarde, alici, pesce spada, tonno e crostacei, secondo la costa.",
      "**La frittura** — gran parte del cibo di strada è fritto: riso, farina di ceci, patate, pasta.",
      "**Erbe spontanee** — su tutte il finocchietto selvatico, anima della pasta con le sarde.",
    ),
    p("Nessuno di questi elementi è esclusivo della Sicilia. A distinguerla è la combinazione, e la frequenza con cui dolce, acido, salato e sapido convivono nello stesso piatto."),
    {
      type: "image",
      src: `${IMG}/ballaro-market-cheese.webp`,
      alt: "Un banco affollato al mercato di Ballarò a Palermo, carico di formaggi, olive e alimenti confezionati sotto una tenda a righe",
      caption: "Un banco di Ballarò, uno dei mercati storici di Palermo.",
      credit: unsplash("Piermario Eva", "p1mm1"),
      wide: true,
    },

    // ——— 4 ———
    h2("Sicilia orientale e occidentale"),
    p("I siciliani parlano spesso delle due metà dell'isola come di due mondi a parte, e a tavola qualche differenza c'è davvero. Sono tendenze, non confini: molti piatti si trovano ovunque."),
    {
      type: "compare",
      title: "Ovest ed est a confronto",
      columns: [
        {
          title: "Ovest — Palermo, Trapani, Agrigento",
          items: [
            "Il cibo di strada palermitano: panelle, crocchè, sfincione, pani ca' meusa",
            "Arancine tonde, al femminile",
            "Cuscus di pesce nel Trapanese",
            "Busiate al pesto alla trapanese",
            "Saline, tradizione del tonno, capperi di Pantelleria",
            "Il Marsala",
          ],
        },
        {
          title: "Est — Catania, Messina, Siracusa, Ragusa",
          items: [
            "Pasta alla Norma a Catania",
            "Arancini, spesso a punta, al maschile",
            "Granita e brioche a colazione",
            "Il pistacchio di Bronte, sulle pendici dell'Etna",
            "Cioccolato di Modica e Ragusano nel sud-est",
            "I vini dell'Etna",
          ],
        },
      ],
    },
    p("L'entroterra — tra Enna e Caltanissetta — ha tradizioni proprie, fatte di grano, legumi, formaggi di pecora e carne, lontane dall'immagine marinara che molti visitatori hanno dell'isola."),

    // ——— 5 ———
    h2("Palermo"),
    p("Il capoluogo ha la cultura del cibo di strada più celebre dell'isola: si mangia in piedi, ai banchi dei mercati, nei panifici, nelle friggitorie e nei chioschi. La nostra guida a [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta) racconta città e mercati nel dettaglio; qui l'essenziale:"),
    ul(
      "**Arancina** — tonda, con ragù di carne (*accarne*) o burro, prosciutto e formaggio (*abburro*). A Palermo si mangia soprattutto il 13 dicembre, giorno di Santa Lucia.",
      "**Panelle** — frittelle sottili di farina di ceci, spesso nel pane con il sesamo (*pane e panelle*).",
      "**Crocchè** — crocchette di patate, dette anche *cazzilli*, vendute di solito insieme alle panelle.",
      "**Sfincione** — un pane alto e soffice con pomodoro, cipolla, acciughe, caciocavallo e pangrattato.",
      "**Pani ca' meusa** — panino con milza e polmone di vitello cotti a lungo, \"schietto\" o \"maritato\" con il formaggio.",
      "**Pasta con le sarde** — sarde fresche, finocchietto selvatico, pinoli, uvetta e muddica tostata.",
      "**Anelletti al forno** — pasta ad anello al forno con ragù, piatto della domenica e delle feste.",
      "**Cassata e frutta martorana** — la torta di ricotta e marzapane e la frutta di marzapane dipinta, entrambe legate soprattutto a Palermo.",
    ),
    p("I mercati storici — **Ballarò**, il **Capo** e la **Vucciria** — sono il posto migliore per vedere questa cultura da vicino, a pochi passi dai monumenti arabo-normanni, patrimonio UNESCO dal 2015."),
    {
      type: "image",
      src: `${IMG}/palermo-market-stalls.webp`,
      alt: "Banchi di un mercato di Palermo al tramonto, con fritture in primo piano e ghirlande di peperoncini e luci appese",
      caption: "Sera al mercato a Palermo, dove il cibo di strada è quotidianità.",
      credit: unsplash("Andrea Vaiuso", "andreavaiuso"),
    },

    // ——— 6 ———
    h2("Catania"),
    p("La seconda città dell'isola vive ai piedi dell'**Etna**, che l'UNESCO definisce la montagna più alta di un'isola del Mediterraneo e uno degli stratovulcani più attivi al mondo. I suoli vulcanici ospitano vigneti, frutteti e pistacchieti."),
    ul(
      "**Pasta alla Norma** — maccheroni con pomodoro, melanzane fritte, ricotta salata e basilico. Il portale regionale Visit Sicily la lega a Catania e riporta diverse versioni sull'origine del nome: la più diffusa richiama la *Norma* di Bellini, catanese di nascita, ma l'origine esatta resta incerta.",
      "**Arancino** — a Catania e nella Sicilia orientale al maschile e spesso a punta. Per l'Accademia della Crusca sono corrette entrambe le forme, arancina e arancino, come varianti regionali.",
      "**Granita e brioche** — la colazione per eccellenza, soprattutto d'estate (vedi più avanti).",
      "**Pesce** — la **Pescheria**, il mercato del pesce alle spalle del Duomo, è uno spettacolo del mattino; il mercato generale, la **Fera o' Luni**, occupa piazza Carlo Alberto.",
    ),
    {
      type: "image",
      src: `${IMG}/catania-fish-market.webp`,
      alt: "Un pescivendolo seleziona un vassoio di pesce azzurro al mercato del pesce di Catania, tra cassette e secchi sul selciato bagnato",
      caption: "Pesce azzurro alla Pescheria di Catania.",
      credit: unsplash("E H", "wasichvonhieraussehenkann"),
    },

    // ——— 7 ———
    h2("Siracusa e il sud-est"),
    p("Il sud-est — province di Siracusa e Ragusa — unisce la cucina di mare alle campagne degli Iblei. Otto centri dell'area, tra cui Noto, Modica, Ragusa e Scicli, sono iscritti dall'UNESCO come Città tardo barocche del Val di Noto, ricostruite dopo il terremoto del 1693."),
    ul(
      "**Ortigia**, il centro storico di Siracusa, ha un mercato mattutino con pesce, frutta, verdura e gastronomia.",
      "**Prodotti tutelati** — il Limone di Siracusa (IGP), il Pomodoro di Pachino (IGP) e la Carota Novella di Ispica (IGP) vengono da quest'angolo dell'isola.",
      "**Ragusano** (DOP) — un grande formaggio a pasta filata di latte vaccino, a forma di parallelepipedo, tipico dell'area iblea.",
      "**Monti Iblei** (DOP) — uno degli oli extravergine tutelati della Sicilia.",
    ),
    h3("Il cioccolato di Modica"),
    p("Modica è nota per un cioccolato granuloso e friabile. Il **Cioccolato di Modica** è IGP dal 2018 (Regolamento (UE) 2018/1529) e il Ministero dell'Agricoltura lo indica come il primo cioccolato IGP d'Europa. Secondo il consorzio di tutela si lavora a bassa temperatura e senza concaggio, così i cristalli di zucchero restano intatti; documenti d'archivio attestano cioccolatieri a Modica già nel 1746. Il consorzio definisce di derivazione spagnola i gesti della lavorazione: più che una ricetta \"originale\" sopravvissuta, è una tradizione locale nata nel periodo della dominazione spagnola."),
    {
      type: "image",
      src: `${IMG}/ortigia-fish-market.webp`,
      alt: "Un pescivendolo in maglia rossa e grembiule bianco dietro un lungo bancone piastrellato di pesce fresco al mercato di Ortigia",
      caption: "Un banco del pesce al mercato di Ortigia, a Siracusa.",
      credit: unsplash("Dagnija Berzina", "dagnijaab"),
    },
    {
      type: "image",
      src: `${IMG}/modica-town.webp`,
      alt: "La facciata barocca di una chiesa a Modica, con statue lungo un'ampia scalinata sotto il cielo azzurro",
      caption: "Modica, una delle città barocche del Val di Noto e patria dell'omonimo cioccolato.",
      credit: unsplash("Dagnija Berzina", "dagnijaab"),
    },

    // ——— 8 ———
    h2("Trapani e la Sicilia occidentale"),
    p("L'estremo ovest guarda l'Africa oltre il Canale di Sicilia, e la sua cucina rispecchia questa vicinanza al mare e ad altre sponde."),
    ul(
      "**Cuscus** — nel Trapanese si serve tradizionalmente con il pesce o con il suo brodo. San Vito Lo Capo ospita ogni anno il **Cous Cous Fest**: l'edizione 2026 si è svolta dal 18 al 27 settembre.",
      "**Busiate al pesto alla trapanese** — pasta attorcigliata con un condimento a crudo di pomodoro, mandorle, aglio e basilico.",
      "**Sale** — la riserva naturale **Saline di Trapani e Paceco** copre circa 1.000 ettari ed è zona umida Ramsar; il **Sale Marino di Trapani** è IGP. Più a sud, le saline di Marsala e dello Stagnone sono un altro paesaggio simbolo.",
      "**Tonno** — a Favignana l'ex stabilimento Florio della tonnara, tra i più grandi del Mediterraneo, è oggi un museo dedicato alla pesca del tonno.",
      "**Capperi** — il Cappero di Pantelleria (IGP), dall'isola omonima.",
      "**Valle del Belice** — olive Nocellara del Belice (DOP), olio Valle del Belice (DOP) e Vastedda della valle del Belìce (DOP), formaggio di pecora a pasta filata.",
    ),
    {
      type: "image",
      src: `${IMG}/marsala-salt-pans.webp`,
      alt: "Un mulino a vento in pietra e le basse costruzioni di una salina vicino a Marsala, incorniciati da foglie di palma nella luce della sera",
      caption: "Saline e mulino a vento vicino a Marsala, in provincia di Trapani.",
      credit: unsplash("Joshua Kettle", "joshuakettle"),
    },

    // ——— 9 ———
    h2("La Sicilia zona per zona"),
    table(
      ["Zona", "Conosciuta per", "Piatti da cercare", "Prodotti tutelati"],
      [
        ["Palermo", "Cibo di strada, mercati, pasticceria", "Arancina, panelle, sfincione, pasta con le sarde, cassata", "—"],
        ["Trapani e l'ovest", "Sale, tonnare, cuscus", "Cuscus di pesce, busiate alla trapanese", "Sale Marino di Trapani IGP, Cappero di Pantelleria IGP, Nocellara del Belice DOP"],
        ["Catania e l'Etna", "Pescheria, agricoltura vulcanica", "Pasta alla Norma, arancino, granita", "Pistacchio Verde di Bronte DOP, Ficodindia dell'Etna DOP, olio Monte Etna DOP"],
        ["Siracusa e Ragusa", "Città barocche, orti e mercati", "Pesce, verdure, cioccolato di Modica", "Limone di Siracusa IGP, Pomodoro di Pachino IGP, Ragusano DOP, Cioccolato di Modica IGP"],
        ["Messina e le Eolie", "Lo Stretto, le isole", "Piatti di pesce spada, capperi", "Limone Interdonato Messina IGP, Cappero delle Isole Eolie DOP"],
        ["Enna e l'entroterra", "Grano, pecore, formaggi", "Paste e legumi", "Piacentinu Ennese DOP, Pagnotta del Dittaino DOP"],
      ],
      "Tendenze, non confini: molti piatti si preparano in tutta l'isola. Denominazioni verificate nel registro UE eAmbrosia.",
    ),

    // ——— 10 ———
    h2("La pasta"),
    p("La pasta siciliana è di grano duro, e i condimenti puntano su verdure, pesce, frutta secca e muddica più che su carne o burro. Alcuni piatti da conoscere:"),
    table(
      ["Piatto", "Com'è", "Zona"],
      [
        ["Pasta con le sarde", "Sarde, finocchietto, pinoli, uvetta, muddica tostata", "Palermo e l'ovest"],
        ["Pasta alla Norma", "Pomodoro, melanzane fritte, ricotta salata, basilico", "Catania"],
        ["Busiate al pesto alla trapanese", "Pomodoro, mandorle, aglio e basilico a crudo", "Trapani"],
        ["Anelletti al forno", "Pasta ad anello al forno con ragù", "Palermo"],
        ["Pasta 'ncasciata", "Pasta al forno con melanzane e formaggio", "Sicilia orientale, specie Messina"],
        ["Pasta con il pesce spada", "Pesce spada, spesso con pomodoro, melanzane o menta", "Coste, soprattutto nel Messinese"],
      ],
      "Le ricette cambiano da famiglia a famiglia e da paese a paese.",
    ),

    // ——— 11 ———
    h2("Il pesce"),
    p("Con coste sul Tirreno, sullo Ionio e sul Canale di Sicilia, il pesce è al centro della cucina isolana. Sarde e alici sono il pesce di tutti i giorni; il tonno ha una lunga storia di pesca a ovest; lo Stretto di Messina è legato alla tradizione del pesce spada. Ricci, gamberi, polpo e cozze compaiono nei menu costieri secondo stagione."),
    p("Per capire questo lato della cucina conviene partire da un mercato del pesce al mattino — la Pescheria di Catania, Ortigia a Siracusa, i banchi dei mercati palermitani — e da una trattoria semplice sul mare. I prodotti surgelati o congelati vanno segnalati nel menu, spesso con un asterisco: vale la pena controllare."),
    tip("Il pesce si paga spesso a peso, all'etto o al chilo. Prima di ordinare un pesce intero, chiedete quanto pesa la porzione.", "Ordinare il pesce"),

    // ——— 12 ———
    h2("Il cibo di strada"),
    p("In Sicilia il cibo di strada non è una curiosità per turisti: è il pranzo o lo spuntino di molte persone. Palermo ne è la capitale, ma ogni città ha il suo."),
    table(
      ["Cibo", "Che cos'è", "Dove trovarlo"],
      [
        ["Arancina / arancino", "Palla di riso ripiena e fritta", "Ovunque; tonda a Palermo, spesso a punta a est"],
        ["Panelle", "Frittelle di farina di ceci, spesso nel pane", "Palermo"],
        ["Crocchè / cazzilli", "Crocchette di patate", "Palermo"],
        ["Sfincione", "Pane alto e soffice condito", "Palermo"],
        ["Pani ca' meusa", "Panino con milza e polmone", "Palermo"],
        ["Scacce", "Focaccia ripiena ripiegata", "Ragusa e il sud-est"],
        ["Brioche con gelato", "Gelato dentro una brioche", "In tutta l'isola"],
      ],
    ),

    // ——— 13 ———
    h2("Il pane"),
    p("Il pane siciliano si fa di solito con semola rimacinata di grano duro, che dà una mollica gialla; le pagnotte ricoperte di sesamo sono diffuse, soprattutto a Palermo. La **Pagnotta del Dittaino** (DOP), dell'area di Enna, è tutelata dall'Unione europea. Il pane è a ogni pasto, e il pangrattato è un ingrediente a sé."),
    {
      type: "image",
      src: `${IMG}/palermo-orange-cart.webp`,
      alt: "Un'Ape Piaggio carica di cassette di arance e verdura parcheggiata in una strada di Palermo accanto a una casa in pietra",
      caption: "L'Ape di un fruttivendolo a Palermo: gli ambulanti fanno parte della spesa quotidiana.",
      credit: unsplash("Christian Lue", "christianlue"),
    },

    // ——— 14 ———
    h2("I formaggi"),
    p("Domina il latte di pecora, ma nel sud-est contano molto i formaggi vaccini. Cinque formaggi siciliani sono DOP:"),
    ul(
      "**Pecorino Siciliano** — di latte ovino, stagionato.",
      "**Ragusano** — vaccino a pasta filata, tra Ragusa e Siracusa.",
      "**Piacentinu Ennese** — ovino, dell'Ennese, con zafferano e pepe.",
      "**Vastedda della valle del Belìce** — ovino a pasta filata, della valle del Belice.",
      "**Provola dei Nebrodi** — vaccino a pasta filata, dei monti Nebrodi.",
    ),
    p("La **ricotta** fresca di pecora è la base di cannoli e cassata; quella salata si grattugia sulla pasta alla Norma. Il **caciocavallo** si usa in cucina, anche sullo sfincione."),

    // ——— 15 ———
    h2("Agrumi e frutta"),
    p("Gli agrumi sono una delle colture simbolo dell'isola. Tra le denominazioni tutelate ci sono l'**Arancia Rossa di Sicilia** (IGP), coltivata nella Sicilia orientale; l'**Arancia di Ribera** (DOP), nell'Agrigentino; e tre limoni: **Limone di Siracusa**, **Limone Interdonato Messina** e **Limone dell'Etna** (tutti IGP)."),
    p("Tra la frutta tutelata ci sono anche i fichi d'India (**Ficodindia dell'Etna** e **Ficodindia di San Cono**, entrambi DOP), la **Ciliegia dell'Etna** (DOP), la **Pesca di Leonforte** (IGP) e l'**Uva da tavola di Canicattì** (IGP). Gli agrumi vanno dall'inverno alla primavera; il resto segue l'estate e l'autunno."),

    // ——— 16 ———
    h2("Pistacchi e mandorle"),
    p("Il **Pistacchio Verde di Bronte** (DOP) cresce sulle sciare laviche dell'Etna, intorno a Bronte. Secondo la Regione Siciliana si raccoglie a mano e ad anni alterni. È tutelato anche il **Pistacchio di Raffadali** (DOP), dell'Agrigentino. Il pistacchio finisce nel pesto, nella granita, nel gelato, nei dolci ripieni e anche nei piatti salati."),
    p("Le mandorle contano altrettanto: pasta reale, biscotti, granita, latte di mandorla e pesto alla trapanese. Ad Agrigento il **Mandorlo in Fiore** festeggia ogni anno la fioritura, di solito a marzo — l'edizione 2026, la 78ª, si è tenuta dal 7 al 15 marzo — con un festival internazionale del folklore e una fiaccolata nella Valle dei Templi."),

    // ——— 17 ———
    h2("I dolci"),
    p("La pasticceria siciliana è famosa in tutta Italia. I dolci italiani in generale sono in [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani); questi sono quelli siciliani da conoscere."),
    ul(
      "**Cannoli** — cialde fritte e croccanti ripiene di ricotta di pecora zuccherata. I migliori si riempiono al momento, così la scorza resta croccante.",
      "**Cassata siciliana** — pan di Spagna e ricotta rivestiti di pasta reale e decorati con frutta candita, legata soprattutto a Palermo e alla Pasqua.",
      "**Cassatelle e cassatine** — versioni piccole e dolci affini.",
      "**Frutta martorana** — marzapane modellato e dipinto a forma di frutta, dal nome del monastero della Martorana a Palermo, tipico della festa dei Morti, il 2 novembre.",
      "**Paste di mandorla** — morbide, in tutte le pasticcerie dell'isola.",
      "**Cuccìa** — chicchi di grano cotti con ricotta o crema, che a Palermo si mangiano per Santa Lucia.",
    ),
    p("Molti di questi dolci sono legati per tradizione ai monasteri e alle feste religiose. Le storie su chi li abbia inventati fanno parte della cultura locale, ma quasi mai sono documentabili."),
    {
      type: "image",
      src: `${IMG}/erice-pastry-counter.webp`,
      alt: "Il bancone di una pasticceria di Erice con cassatine glassate di verde, un cannolo spolverato di zucchero e vassoi di paste di mandorla",
      caption: "Cassatine, cannoli e paste di mandorla in una pasticceria di Erice, sopra Trapani.",
      credit: unsplash("Valentina Locatelli", "valentina_locatelli"),
    },
    {
      type: "image",
      src: `${IMG}/cassata-siciliana-trapani.webp`,
      alt: "Una piccola cassata monoporzione con pasta reale verde e ciliegia candita su un piatto bianco con forchetta",
      caption: "Una cassatina monoporzione, fotografata a Trapani.",
      credit: unsplash("Valentina Locatelli", "valentina_locatelli"),
    },

    // ——— 18 ———
    h2("Granita e colazione"),
    p("D'estate — e nella Sicilia orientale per buona parte dell'anno — la colazione può essere una **granita con la brioche**: un ghiaccio morbido al limone, alla mandorla, al caffè, al pistacchio, ai gelsi o al cioccolato, da mangiare al cucchiaio intingendo la *brioche col tuppo*, il panino dolce con il \"chignon\". Non è una bibita ghiacciata: la consistenza cambia da paese a paese e da bar a bar. Le differenze con gelato e sorbetto sono spiegate in [Il gelato italiano](/it/cibo/gelato-italiano)."),
    p("Per il resto la colazione è quella italiana di sempre, cappuccino o espresso e cornetto al bar. Approfondimenti in [Il caffè italiano](/it/cibo/caffe-italiano)."),

    // ——— 19 ———
    h2("Il vino"),
    p("La Sicilia è una delle grandi regioni vinicole italiane. Due nomi da conoscere: l'**Etna**, dove sulle pendici del vulcano si fanno rossi da Nerello Mascalese e bianchi da Carricante (la DOC Etna è del 1968 ed è indicata di solito come la prima DOC siciliana), e il **Marsala**, vino liquoroso della provincia di Trapani. Nero d'Avola e Grillo sono tra i vitigni più diffusi. Per saperne di più c'è [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
    {
      type: "image",
      src: `${IMG}/sicily-vineyard.webp`,
      alt: "Vigneti dai colori autunnali su una collina siciliana, tra boschi e macchia verde",
      caption: "Vigneti nella campagna siciliana in autunno.",
      credit: unsplash("Owen Roth", "owenroth_v1"),
    },

    // ——— 20 ———
    h2("L'olio"),
    p("L'olio d'oliva è il grasso di cottura dell'isola. Oltre all'IGP regionale **Sicilia**, ci sono diverse DOP locali, tra cui **Val di Mazara**, **Valle del Belice**, **Monti Iblei** e **Monte Etna**. In etichetta conviene guardare la data di raccolta: l'olio dà il meglio entro un anno circa. In autunno, dopo la raccolta, frantoi e agriturismi propongono spesso degustazioni."),

    // ——— 21 ———
    h2("I mercati"),
    p("È nei mercati che la cultura del cibo siciliano si vede meglio. I grandi mercati danno il meglio di mattina; il pomeriggio e la domenica sono più tranquilli e alcuni banchi chiudono."),
    table(
      ["Mercato", "Città", "Cosa aspettarsi"],
      [
        ["Ballarò", "Palermo", "Grande e vivace, frutta, verdura e cibo di strada nell'Albergheria"],
        ["Capo", "Palermo", "Frutta, pesce e carne nei vicoli vicino alla Cattedrale"],
        ["Vucciria", "Palermo", "Più piccola di giorno, oggi nota soprattutto per la vita serale"],
        ["Pescheria", "Catania", "Mercato del pesce alle spalle del Duomo"],
        ["Fera o' Luni", "Catania", "Mercato generale in piazza Carlo Alberto"],
        ["Mercato di Ortigia", "Siracusa", "Pesce, frutta, verdura e gastronomia nel centro storico"],
      ],
      "Verificate gli orari sul posto: i banchi cambiano con i giorni e le stagioni.",
    ),

    // ——— 22 ———
    h2("Feste e calendario gastronomico"),
    p("Feste religiose e raccolti scandiscono il calendario della tavola siciliana. Le date cambiano di anno in anno: controllate i siti ufficiali prima di organizzare un viaggio attorno a un evento."),
    ul(
      "**Santa Lucia, 13 dicembre** — a Palermo molti evitano pane e pasta e mangiano arancine e cuccìa.",
      "**Natale** — buccellati ai fichi secchi e altri dolci delle feste.",
      "**Pasqua** — cassata e agnelli di pasta reale.",
      "**Mandorlo in Fiore, Agrigento** — festa della fioritura del mandorlo, di solito a marzo.",
      "**Cous Cous Fest, San Vito Lo Capo** — festival internazionale del cuscus, nel 2026 a settembre.",
      "**Festa dei Morti, 2 novembre** — frutta martorana e altri dolci tradizionali.",
      "**Sagre** — feste di paese dedicate a un solo prodotto, come pistacchio, fico d'India o ricotta, in tutta l'isola.",
    ),

    // ——— 23 ———
    h2("Mangiare secondo le stagioni"),
    table(
      ["Stagione", "Il meglio del periodo"],
      [
        ["Primavera", "Carciofi, fave, finocchietto selvatico, mandorli in fiore, dolci pasquali"],
        ["Estate", "Pomodori, melanzane, peperoni, frutta estiva, meloni, granita; a fine estate la raccolta del pistacchio a Bronte"],
        ["Autunno", "Uva e vendemmia, fichi d'India, olio nuovo"],
        ["Inverno", "Arance rosse, limoni, mandarini, cavolfiori e broccoli, dolci natalizi"],
      ],
      "Indicazioni di massima: i tempi cambiano con l'altitudine e con l'annata.",
    ),

    // ——— 24 ———
    h2("Come funziona il pasto"),
    p("Il pasto segue lo schema italiano — antipasto, primo, secondo di pesce o carne con contorno, poi frutta, dolce o caffè — ma pochi lo fanno completo ogni giorno. Il pranzo è spesso il pasto principale, la cena si fa tardi (spesso dalle 20:30 o 21, d'estate anche dopo) e un pranzo di cibo di strada è normalissimo."),
    ul(
      "**Coperto** — quota a persona per pane e servizio al tavolo, che deve essere indicata nel menu.",
      "**Servizio** — a volte aggiunto nelle zone turistiche; anch'esso va indicato nel menu.",
      "**Mancia** — non obbligatoria; arrotondare per un buon servizio è apprezzato.",
      "**La scarpetta** — raccogliere il sugo con il pane va bene nei locali informali.",
      "**Formaggio sulla pasta di pesce** — di solito no; in molti piatti siciliani il suo posto lo prende la muddica.",
    ),

    // ——— 25 ———
    h2("Luoghi comuni da sfatare"),
    ul(
      "**\"È la solita cucina italiana.\"** Fa parte della cultura gastronomica italiana, ma con piatti, parole e ingredienti propri.",
      "**\"È piccante.\"** È saporita più che piccante; il peperoncino conta meno che in certe zone della Calabria.",
      "**\"È tutto arabo.\"** L'influenza del periodo arabo è una parte importante della storia, ma solo una parte.",
      "**\"C'è una sola ricetta giusta.\"** Caponata, arancine e pasta con le sarde esistono in tante versioni di famiglia e di paese.",
      "**\"Arancina o arancino: uno dei due è sbagliato.\"** Per l'Accademia della Crusca sono corrette entrambe.",
      "**\"Il cannolo si ordina a fine cena.\"** Si mangia a ogni ora, spesso in pasticceria più che al ristorante.",
    ),

    // ——— 26 ———
    h2("Come vivere la cucina siciliana"),
    ul(
      "**Un mercato di mattina** — Ballarò o il Capo a Palermo, la Pescheria a Catania, Ortigia a Siracusa.",
      "**Pranzo di strada** — arancine, panelle o sfincione da un panificio o una friggitoria affollati.",
      "**Granita a colazione** — soprattutto a est, d'estate.",
      "**Dolci in pasticceria** — cannoli riempiti al momento, pasta reale, paste di mandorla.",
      "**Seguire le stagioni** — chiedere cosa c'è *di stagione* e ordinarlo.",
      "**Visitare i produttori** — cantine sull'Etna, frantoi, saline tra Trapani e Marsala.",
      "**Un corso o un tour** — corsi di cucina e visite ai mercati sono diffusi: meglio quelli tenuti da cuochi del posto.",
    ),
    tip("Se girate l'isola, vedete [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane) e [traghetti in Italia](/it/trasporti/traghetti-in-italia) per lo Stretto di Messina e le isole minori.", "Spostarsi"),

    // ——— 27 ———
    h2("Parole della cucina siciliana"),
    table(
      ["Parola", "Significato"],
      [
        ["Arancina / arancino", "Palla di riso ripiena e fritta"],
        ["Accarne / abburro", "Ripieni dell'arancina: ragù / burro, prosciutto e formaggio"],
        ["Panelle", "Frittelle di farina di ceci"],
        ["Cazzilli", "Crocchette di patate (Palermo)"],
        ["Friggitoria", "Negozio di fritti"],
        ["Pasta reale", "Marzapane"],
        ["Muddica", "Pangrattato"],
        ["Schietto / maritato", "Pani ca' meusa senza / con formaggio"],
        ["Tuppo", "Il \"chignon\" della brioche da granita"],
        ["Sciara", "Terreno lavico (come quello dei pistacchi di Bronte)"],
        ["Pesce spada", "Il pesce simbolo dello Stretto di Messina"],
        ["Coperto", "Quota a persona per pane e servizio"],
      ],
    ),
    p("Per il resto del viaggio: [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta) e la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Per cosa è famosa la cucina siciliana?", answer: "Arancine, cannoli, cassata, caponata, pasta con le sarde, pasta alla Norma, granita, pistacchio di Bronte, arance rosse, cioccolato di Modica e moltissimo pesce." },
    { question: "In cosa è diversa dal resto della cucina italiana?", answer: "Nell'incontro di grano duro, pesce, agrumi, mandorle, pistacchi, ricotta e agrodolce, oltre che in una cultura del cibo di strada molto forte e in tanti piatti locali." },
    { question: "Si dice arancina o arancino?", answer: "Entrambi. Per l'Accademia della Crusca sono varianti regionali: arancina a Palermo e nella Sicilia occidentale, arancino a est, dove spesso ha la forma a punta." },
    { question: "Che differenze ci sono tra Sicilia orientale e occidentale?", answer: "In linea di massima a ovest il cibo di strada palermitano, il cuscus di pesce e il pesto alla trapanese; a est la pasta alla Norma, la cultura della granita, il pistacchio di Bronte e i vini dell'Etna. Molti piatti però si trovano ovunque." },
    { question: "Che cos'è il cibo di strada palermitano?", answer: "Arancine, panelle, crocchè, sfincione e pani ca' meusa, venduti nei mercati, nei panifici, nelle friggitorie e nei chioschi." },
    { question: "Che cos'è la pasta alla Norma?", answer: "Pasta con pomodoro, melanzane fritte, ricotta salata e basilico, legata a Catania. L'origine del nome è incerta." },
    { question: "Che cos'è la caponata?", answer: "Un piatto agrodolce di melanzane fritte con sedano, olive e capperi in una salsa di pomodoro, aceto e zucchero, con molte varianti locali." },
    { question: "Com'è la granita siciliana?", answer: "Un ghiaccio morbido e vellutato, al limone, alla mandorla, al caffè o al pistacchio, spesso mangiato a colazione con la brioche, soprattutto nella Sicilia orientale." },
    { question: "Che cos'è il cioccolato di Modica?", answer: "Un cioccolato granuloso lavorato a bassa temperatura e senza concaggio. Il Cioccolato di Modica è IGP dal 2018." },
    { question: "Da dove viene il pistacchio di Bronte?", answer: "Dai terreni lavici intorno a Bronte, sulle pendici dell'Etna. Il Pistacchio Verde di Bronte è DOP." },
    { question: "Quali sono i dolci siciliani più tipici?", answer: "Cannoli, cassata, frutta martorana, paste di mandorla e, d'estate, granita e brioche con gelato." },
    { question: "La cucina siciliana è piccante?", answer: "In genere no. È ricca di sapori — dolce, acido, sapido, di frutta secca — ma il peperoncino ha un ruolo minore che in altre regioni del Sud." },
    { question: "Che cos'è il cuscus trapanese?", answer: "Nel Trapanese il cuscus si serve tradizionalmente con il pesce o con il suo brodo. San Vito Lo Capo ospita ogni anno il Cous Cous Fest." },
    { question: "Che cos'è il coperto?", answer: "Una quota a persona per pane e servizio al tavolo, diffusa in tutta Italia, che deve essere indicata nel menu." },
    { question: "Qual è il periodo migliore per scoprire la cucina siciliana?", answer: "Tutto l'anno: la primavera per carciofi e dolci pasquali, l'estate per granita e ortaggi, l'autunno per vendemmia, fichi d'India e olio nuovo, l'inverno per arance rosse e dolci di Natale." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "DOP e IGP siciliane" },
    { label: "Accademia della Crusca — Si dice arancino o arancina?", url: "https://accademiadellacrusca.it/it/consulenza/si-dice-arancino-o--arancina/1043" },
    { label: "Consorzio di Tutela del Cioccolato di Modica", url: "https://www.cioccolatodimodica.it/", note: "lavorazione e storia" },
    { label: "Regolamento di esecuzione (UE) 2018/1529 — Cioccolato di Modica IGP", url: "https://eur-lex.europa.eu/eli/reg_impl/2018/1529/oj", note: "registrazione" },
    { label: "Visit Sicily — portale turistico della Regione Siciliana", url: "https://www.visitsicily.info/", note: "pasta alla Norma, mercati, Favignana" },
    { label: "Regione Siciliana — Riserva Naturale Saline di Trapani e Paceco", url: "https://www.regione.sicilia.it/", note: "riserva e saline" },
    { label: "Comune di Agrigento — Mandorlo in Fiore", url: "https://www.comune.agrigento.it/", note: "edizione 2026" },
    { label: "Cous Cous Fest", url: "https://www.couscousfest.it/", note: "date 2026" },
    { label: "UNESCO — Palermo arabo-normanna", url: "https://whc.unesco.org/en/list/1487", note: "iscrizione 2015 (in inglese)" },
    { label: "UNESCO — Città tardo barocche del Val di Noto", url: "https://whc.unesco.org/en/list/1024", note: "in inglese" },
    { label: "UNESCO — Monte Etna", url: "https://whc.unesco.org/en/list/1427", note: "iscrizione 2013 (in inglese)" },
  ],
};
