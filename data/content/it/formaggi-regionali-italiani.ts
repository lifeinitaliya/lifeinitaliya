import type { ArticleContent, ContentBlock } from "@/lib/types";

// Edizione italiana: Formaggi regionali italiani.
// Scritta per lettori italiani, non traduzione letterale dell'edizione inglese.
// Fatti verificati contro le stesse fonti dell'edizione inglese (vedi lì).

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-regional-cheeses";

export const formaggiRegionaliItaliani: ArticleContent = {
  body: [
    h2("Perché il formaggio italiano è regionale"),
    answer("**La tradizione casearia italiana è profondamente regionale perché il bestiame, i pascoli, il clima e la cultura alimentare di ogni territorio si sono sviluppati separatamente nel corso dei secoli.** Una valle alpina del Piemonte, una pianura vulcanica della Campania, un altopiano carsico della Puglia e un prato d'alta quota della Valle d'Aosta producono latte completamente diverso, e le tradizioni che ruotano attorno a quel latte riflettono le condizioni locali più che una politica nazionale. Il risultato è un paese con uno dei patrimoni caseari più variegati d'Europa."),
    p("Questa guida copre una selezione rappresentativa di formaggi regionali italiani, spiega come vengono classificati e fornisce informazioni pratiche per chi li acquista, li assaggia o li usa in cucina. Tutte le denominazioni DOP e IGP citate sono state verificate sul registro eAmbrosia della Commissione europea."),
    {
      type: "facts",
      title: "I formaggi regionali italiani in sintesi",
      rows: [
        { label: "Formaggi DOP", value: "L'Italia detiene il maggior numero di denominazioni DOP casearie tra i Paesi UE — oltre 50 designazioni registrate al 2026" },
        { label: "Tipi di latte", value: "Vaccino, ovino, caprino e bufalino — ogni regione ha le proprie tradizioni prevalenti" },
        { label: "Stili", value: "Dalla mozzarella fresca e lattiginosa al Parmigiano Reggiano stagionato 36 mesi; dal Taleggio morbido al Pecorino Romano durissimo" },
        { label: "Distribuzione geografica", value: "Il Nord tende al latte vaccino; Centro e Sud privilegiano il latte ovino; la Campania è la culla del latte bufalino" },
        { label: "Denominazioni protette", value: "Una DOP protegge un nome specifico, non uno stile generico. Un formaggio prodotto fuori dalla zona non può usare la denominazione tutelata" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Come si classificano i formaggi italiani",
        "Nord Italia: Piemonte e Alpi",
        "Lombardia: i grandi formaggi della Pianura Padana",
        "Veneto e Friuli: le tradizioni d'alta quota",
        "Emilia-Romagna: il Parmigiano Reggiano",
        "Toscana e Lazio: la terra del pecorino",
        "Il Sud: mozzarella, burrata e caciocavallo",
        "Sicilia e Sardegna",
        "Tabella comparativa",
        "Come costruire un tagliere di formaggi italiani",
        "Formaggi e vino italiano",
        "Cucinare con i formaggi regionali",
        "Dove comprare il formaggio in Italia",
        "Conservazione e sicurezza alimentare",
        "Luoghi comuni da sfatare",
        "Glossario del formaggio italiano",
      ],
    },

    // ——— Classificazione ———
    h2("Come si classificano i formaggi italiani"),
    p("I formaggi italiani si descrivono attraverso alcune categorie che si intrecciano tra loro: tipo di latte, consistenza, stagionatura e tecnica di produzione. Conoscere questi termini facilita enormemente la lettura delle etichette e il dialogo al bancone."),
    h3("Tipo di latte"),
    ul(
      "**Latte vaccino:** Dominante nel Nord Italia, dove il bestiame delle Alpi e della Pianura Padana è abbondante. Include Parmigiano Reggiano, Grana Padano, Gorgonzola, Taleggio, Asiago, Fontina e molti altri.",
      "**Latte ovino:** La tradizione prevalente nel Centro-Sud, in Sardegna e in Sicilia. Il latte di pecora ha una resa maggiore in grassi e proteine e produce formaggi dal sapore più intenso. Pecorino Romano, Pecorino Toscano, Fiore Sardo, Pecorino Siciliano e altri.",
      "**Latte bufalino:** Concentrato in Campania e in parte del Lazio. Più ricco di grassi e proteine del latte vaccino. È la base della Mozzarella di Bufala Campana DOP.",
      "**Latte caprino:** Presente in varie regioni, in particolare in Piemonte (varietà di Robiola), Lombardia e Sardegna. Spesso usato per formaggi freschi dal sapore fresco e leggermente acidulo.",
      "**Latte misto:** Alcuni formaggi prevedono un blend — la Robiola di Roccaverano DOP, per esempio, può usare solo latte caprino o un mix di caprino, vaccino e ovino entro proporzioni definite.",
    ),
    h3("Consistenza e stagionatura"),
    ul(
      "**Fresco:** Non stagionato o con stagionatura minima. Umido, delicato, da consumare entro pochi giorni — mozzarella, ricotta, burrata, stracchino, alcuni stili di Robiola.",
      "**Semistagionato:** Stagionato da alcune settimane a pochi mesi. Sviluppa più sapore mantenendo una certa morbidezza. Asiago Pressato, Taleggio giovane.",
      "**Stagionato:** Stagionato da diversi mesi a diversi anni. Più compatto, più secco, sapore più concentrato. Parmigiano Reggiano (12–36+ mesi), Pecorino stagionato, Grana Padano, Ragusano.",
      "**A pasta filata:** Tecnica produttiva specifica in cui la cagliata viene scaldata e lavorata per creare una struttura fibrosa ed elastica. Mozzarella, provolone, scamorza, caciocavallo.",
    ),
    h3("DOP, IGP e cosa significano"),
    p("Una **DOP (Denominazione di Origine Protetta)** significa che il formaggio deve essere prodotto, trasformato e preparato in una zona geografica definita, seguendo un disciplinare di produzione verificato. Il nome può essere usato solo sui prodotti che rispettano tutti i requisiti. Una **IGP (Indicazione Geografica Protetta)** richiede che almeno una fase della produzione avvenga nella zona definita. Entrambe sono regolate dal diritto europeo e registrate dalla Commissione europea."),
    note("Una denominazione protetta tutela un *nome*, non uno stile generico. Altri produttori possono realizzare un formaggio di stile simile senza la denominazione: semplicemente non possono usare il nome tutelato. Parmigiano Reggiano e Grana Padano, per esempio, sono due prodotti DOP distinti con disciplinari e zone di produzione diverse — non sono nomi intercambiabili per lo stesso formaggio."),
    image("cheese-shop-display", "Una vetrina espositiva di un negozio italiano con forme intere e porzioni di formaggi di vario tipo", true),

    // ——— Piemonte ———
    h2("Nord Italia: Piemonte e Alpi"),
    h3("Castelmagno DOP"),
    p("Il Castelmagno viene prodotto nei comuni montani di Castelmagno, Pradleves e Monterosso Grana, in provincia di Cuneo. È realizzato con latte vaccino parzialmente scremato, con possibile aggiunta di piccole quantità di latte ovino o caprino. La stagionatura minima è di 60 giorni; le versioni più vecchie sviluppano una crosta naturale e una pasta sbriciolosa con possibili venature blu-verdi, pur non essendo classificato come formaggio erborinato in senso stretto."),
    p("Il Castelmagno ha un sapore intensamente saporito, a volte paragonato a un formaggio vaccino secco e concentrato con note pungenti o floreali a seconda dell'età e del pascolo. In cucina piemontese è usato tradizionalmente negli gnocchi al Castelmagno e come tocco finale del risotto. Denominazione DOP dal 1996."),
    h3("Robiola di Roccaverano DOP"),
    p("La Robiola di Roccaverano è un formaggio fresco o brevemente stagionato proveniente dalle Langhe e dal Monferrato, nelle province di Asti e Alessandria. È prodotta con solo latte caprino o con una miscela regolamentata di latte caprino, vaccino e ovino. Il formaggio è piccolo e cilindrico, dal sapore fresco e leggermente tannico — più delicato e morbido quando giovanissimo. Denominazione DOP dal 1996."),
    p("Il termine *robiola* è usato in modo più ampio in Piemonte e in Lombardia per una famiglia di formaggi freschi molli, non tutti con denominazione protetta. La Robiola di Roccaverano è la designazione tutelata."),

    // ——— Lombardia ———
    h2("Lombardia: i grandi formaggi della Pianura Padana"),
    image("cheese-aging-rack", "Forme e spicchi di formaggio disposti su scaffali di legno in una sala di stagionatura", true),
    h3("Gorgonzola DOP"),
    p("Il Gorgonzola è il più noto formaggio erborinato italiano, prodotto in province specifiche di Piemonte e Lombardia. È realizzato con latte vaccino intero con l'aggiunta di colture di muffa (*Penicillium glaucum*) che creano le caratteristiche venature blu-verdi."),
    p("Esistono due tipologie principali: il **Gorgonzola Dolce** (detto anche *cremificato*) è soffice, delicato e cremoso, con una stagionatura di circa due-tre mesi; il **Gorgonzola Piccante** (detto anche *Montagna*) è più compatto, friabile e dal sapore più deciso, stagionato circa sei-dodici mesi. Entrambi sono DOP dal 1996. Il Dolce si spalma bene sul pane o si abbina alle pere; il Piccante è spesso usato per mantecare risotti o pasta, e si accompagna a vini di struttura."),
    h3("Taleggio DOP"),
    p("Il Taleggio è un formaggio a crosta lavata prodotto nella Val Taleggio e in zone limitrofe della provincia di Bergamo, con una zona DOP che comprende oggi anche Brescia, Como, Cremona, Lecco, Lodi, Milano, Monza-Brianza, Pavia e Treviso. È realizzato con latte vaccino intero. Il formaggio è quadrato, con lato di circa 18–20 cm, e una crosta lavata sottile che può variare dal rosa-arancio al grigio con l'invecchiamento."),
    p("Il Taleggio ha una pasta soffice e leggermente elastica, con un carattere aromatico più pronunciato sulla crosta che nella pasta. Il sapore è saporito, leggermente acidulo, e si intensifica con la stagionatura. Si scioglie bene e viene usato nella polenta, nel risotto e nei primi piatti. DOP dal 1996."),
    h3("Grana Padano DOP"),
    p("Il Grana Padano è un formaggio duro a pasta granulosa prodotto su un'ampia zona DOP che comprende la Pianura Padana: Piemonte, Lombardia, Trentino-Alto Adige, Veneto ed Emilia-Romagna (province specifiche). La stagionatura minima è di nove mesi, con categorie di stagionatura prolungata (*Oltre 16 mesi* e *Riserva* oltre i 20 mesi) che portano ulteriori contrassegni."),
    p("Grana Padano e Parmigiano Reggiano sono entrambi formaggi DOP a pasta granulosa della Pianura Padana, ma sono prodotti distinti con disciplinari, zone di produzione e profili sensoriali differenti. Il Grana Padano può utilizzare latte parzialmente scremato e ammette l'uso del lisozima (un enzima derivato dall'albume d'uovo) come conservante; il Parmigiano Reggiano no. Questo aspetto è rilevante per chi è allergico alle uova. DOP dal 1996."),
    h3("Bitto DOP"),
    p("Il Bitto è prodotto nella Valtellina, in provincia di Sondrio, e in alcuni comuni alpini limitrofi. È realizzato con latte vaccino con possibile aggiunta di fino al dieci per cento di latte caprino di razze locali. Il Bitto è un formaggio a pasta dura con stagionatura minima di 70 giorni; può stagionare per diversi anni e in alcuni casi viene proposto come specialità di lunga stagionatura. DOP dal 1996."),

    // ——— Veneto ———
    h2("Veneto e Friuli: le tradizioni d'alta quota"),
    h3("Asiago DOP"),
    p("L'Asiago viene prodotto sull'Altopiano di Asiago, in provincia di Vicenza, e in parti delle province di Treviso, Padova e Trento. Esistono due tipologie principali: l'**Asiago Pressato** è una versione fresca o brevemente stagionata, a pasta bianca, soffice e dal sapore delicato; l'**Asiago d'Allevo** è stagionato da un minimo di tre mesi fino a due anni o oltre, con una pasta più compatta, granulosa, e un sapore più sviluppato. DOP dal 1996."),
    h3("Montasio DOP"),
    p("Il Montasio proviene dal Friuli-Venezia Giulia e da parte del Veneto. È un formaggio vaccino prodotto in tre categorie di stagionatura: *Fresco* (minimo 60 giorni), *Mezzano* (5–10 mesi) e *Stagionato* (oltre 10 mesi). La versione giovane è delicata e leggermente elastica; quella stagionata diventa più compatta, saporita e adatta alla grattugia. Il Montasio è la base del *frico*, il croccante di formaggio fritto tipico friulano. DOP dal 1996."),

    // ——— Emilia-Romagna ———
    h2("Emilia-Romagna: il Parmigiano Reggiano"),
    image("mozzarella-making", "Operatori in camice bianco lavorano la cagliata fresca in una sala di produzione casearia", true),
    h3("Parmigiano Reggiano DOP"),
    p("Il Parmigiano Reggiano viene prodotto nelle province di Parma, Reggio Emilia, Modena, Bologna (riva sinistra del Reno) e Mantova (riva destra del Po). Il disciplinare è preciso: latte crudo non pastorizzato proveniente da stalle locali, nessun additivo, crosta naturale e stagionatura minima di 12 mesi. Il Consorzio del Parmigiano Reggiano verifica ogni forma e appone il proprio marchio ovale solo a quelle che superano il controllo; le forme che non soddisfano i requisiti vengono scalzate e commercializzate con altri nomi."),
    p("Il Parmigiano Reggiano viene commercializzato a diverse stagionature. Le forme stagionate 12–18 mesi sono più delicate ed elastiche; i 24 mesi rappresentano il punto di equilibrio più diffuso; le stagionature oltre i 36 mesi danno un formaggio più duro, granuloso, intensamente saporito, con la caratteristica grana cristallina dovuta ai cristalli di tirosina. Viene grattugiato su pasta e risotto, consumato a scaglie come antipasto, abbinato all'aceto balsamico tradizionale e usato in numerose ricette del Nord. DOP dal 1996."),
    tip("Quando acquistate il Parmigiano Reggiano, cercate la punzonatura puntinata sulla crosta e il marchio ovale del Consorzio. La durata della stagionatura (12, 24, 36 mesi) è spesso indicata in etichetta e incide sia sul sapore che sul prezzo."),

    // ——— Toscana e Lazio ———
    h2("Toscana e Lazio: la terra del pecorino"),
    h3("Pecorino Toscano DOP"),
    p("Il Pecorino Toscano viene prodotto in Toscana e in alcuni comuni di Umbria e Lazio. È realizzato con latte ovino intero. Esistono due tipologie: il *Fresco* (stagionatura minima 20 giorni), con pasta soffice, chiara e sapore delicato; lo *Stagionato* (stagionatura minima quattro mesi), più compatto, con crosta più dura e sapore più pronunciato. È più leggero e meno salato del Pecorino Romano. DOP dal 1996."),
    h3("Pecorino Romano DOP"),
    p("Nonostante il nome, il Pecorino Romano viene prodotto principalmente in Sardegna, con una quota minore nel Lazio e nella provincia di Grosseto in Toscana. Il formaggio è realizzato con latte ovino fortemente salato in fase di produzione, che dà origine a un formaggio duro, secco, intensamente saporito e sapido dal caratteristico aroma pungente. Viene usato tradizionalmente grattugiato su pasta — è il formaggio della cacio e pepe e della pasta alla gricia — e fa parte del blend storico della carbonara."),
    p("Il Pecorino Romano è uno dei formaggi italiani più antichi documentati, con riferimenti nelle fonti classiche, ma il disciplinare DOP attuale definisce gli standard produttivi moderni. DOP dal 1996. Attenzione: il Pecorino Romano non è la stessa cosa del Pecorino Toscano — pur essendo entrambi a latte ovino, hanno zone di produzione, metodi di lavorazione e profili sensoriali diversi."),
    image("sliced-cheese-board", "Fette e spicchi di diversi formaggi a pasta dura e semidura disposti su un tagliere di legno", true),

    // ——— Sud ———
    h2("Il Sud: mozzarella, burrata e caciocavallo"),
    h3("Mozzarella di Bufala Campana DOP"),
    p("La Mozzarella di Bufala Campana viene prodotta in zone definite di Campania (Caserta, Salerno, Napoli, Benevento), Lazio (Latina, Frosinone, Roma), Puglia e Molise. È realizzata con latte di bufala (*Bubalus bubalis*) con la tecnica della *pasta filata*: la cagliata viene scaldata in acqua calda, lavorata e stesa fino a diventare liscia ed elastica, poi formata in palline. Il formaggio viene venduto nel suo siero o in salamoia."),
    p("La Mozzarella di Bufala Campana fresca ha una consistenza soffice, lattiginosa e leggermente elastica, con un sapore pulito e debolmente acidulo e un aroma lattiginoso caratteristico. Si mangia fresca — al meglio entro uno o due giorni dalla produzione — con pomodoro e basilico, o da sola con buon pane e olio. DOP dal 1996. Attenzione: la comune mozzarella vaccina (*fior di latte*) è un prodotto correlato ma non è Mozzarella di Bufala Campana DOP."),
    h3("Burrata di Andria IGP"),
    p("La burrata nasce ad Andria, in Puglia, e il suo nome deriva da *burro*, per via del suo interno ricco e cremoso. È realizzata con latte vaccino con la tecnica della pasta filata: un involucro esterno di mozzarella fresca viene formato a mano e riempito con la *stracciatella* — filamenti di cagliata imbevuti di panna — prima di essere chiuso. Il risultato è uno strato esterno soffice che racchiude un interno liquido e cremoso che cola quando viene tagliato."),
    p("La Burrata di Andria è stata registrata nel registro europeo delle indicazioni geografiche con status IGP. A differenza della mozzarella fresca, la burrata va consumata immediatamente — ha una shelf life di pochi giorni ed è al meglio il giorno stesso della produzione. Si serve tipicamente a temperatura ambiente, condita semplicemente con olio extravergine di oliva e sale, o con salumi e verdure di stagione."),
    h3("Caciocavallo Silano DOP"),
    p("Il Caciocavallo Silano viene prodotto su un'ampia zona meridionale che comprende parti di Basilicata, Calabria, Campania, Molise e Puglia. È un formaggio vaccino a pasta filata dalla caratteristica forma a pera o goccia, ottenuta legando la cima e appendendo le forme a coppie su un'asta (*a cavallo*). La stagionatura minima è di 30 giorni per la versione standard; la versione *stagionata* è più compatta e più aromatica."),
    p("Il Caciocavallo Silano giovane è delicato e leggermente dolce; con la stagionatura sviluppa un carattere più complesso, saporito e talvolta pungente. DOP dal 1996. Il nome *caciocavallo* viene usato più in generale per formaggi a pasta filata di forma simile prodotti nel Sud, ma il Caciocavallo Silano è il prodotto DOP."),
    h3("Mozzarella e fior di latte in Campania"),
    p("Accanto alla Mozzarella di Bufala Campana DOP, la Campania produce anche il *fior di latte* — mozzarella fresca vaccina realizzata con la stessa tecnica della pasta filata ma con latte di mucca invece di quello di bufala. Il fior di latte è usato ampiamente sulla pizza (inclusa la Pizza Napoletana STG, dove è la tipologia più comunemente indicata), nelle insalate caprese e nei piatti al forno. È distinto dalla Mozzarella di Bufala Campana per tipo di latte e per il sapore, più delicato."),
    image("cheese-deli-counter", "Una vetrina di una gastronomia italiana con forme intere e porzioni di formaggi, salumi e olive", true),

    // ——— Sicilia e Sardegna ———
    h2("Sicilia e Sardegna"),
    h3("Ragusano DOP"),
    p("Il Ragusano viene prodotto nell'Altopiano Ibleo, nelle province di Ragusa e Siracusa nella Sicilia orientale. È un formaggio vaccino a pasta filata, tradizionalmente ottenuto dal latte della razza *Modicana* — una razza bovina autoctona siciliana. Il Ragusano ha una forma rettangolare (un blocco, non la forma rotonda del caciocavallo) e una crosta liscia gialla che si scurisce con la stagionatura. La versione giovane è delicata e lattiginosa; le versioni stagionate diventano più pungenti, secche e concentrate. DOP dal 1996."),
    h3("Pecorino Siciliano DOP"),
    p("Il Pecorino Siciliano è uno dei formaggi più antichi documentati nel bacino del Mediterraneo, con riferimenti alla produzione di formaggio pecorino siciliano nelle fonti classiche, anche se il disciplinare DOP attuale definisce gli standard produttivi moderni. È realizzato con latte ovino intero e stagionato per almeno quattro mesi. È più duro e più deciso del Pecorino Toscano, con un carattere piccante nelle versioni più stagionate. Alcune versioni tradizionali vengono prodotte con grani di pepe nero interi pressati nella pasta, che conferisce al formaggio un aspetto caratteristico. DOP dal 1996."),
    h3("Fiore Sardo DOP"),
    p("Il Fiore Sardo è un formaggio ovino sardo, prodotto tradizionalmente da piccoli produttori con un metodo specifico che prevede l'affumicatura delle forme giovani su un fuoco di legna locale e resina di lentisco. Questo conferisce al Fiore Sardo un sapore affumicato, leggermente amarognolo e complesso, inconfondibile rispetto agli altri formaggi sardi. La stagionatura minima è di tre mesi; le versioni più stagionate sono più dure e più intense. DOP dal 1996."),
    h3("Pecorino Sardo DOP"),
    p("Il Pecorino Sardo è anch'esso un formaggio ovino DOP della Sardegna, ma distinto dal Fiore Sardo nel metodo di produzione — non è affumicato. Esistono due tipologie: il *Dolce* (stagionatura 20–60 giorni, semimorbido, delicato e leggermente acidulo) e il *Maturo* (stagionatura superiore a 2 mesi, più compatto, più saporito, adatto alla grattugia). Il tipo *Maturo* può raggiungere una consistenza molto dura con la stagionatura prolungata. DOP dal 1996."),

    // ——— Valle d'Aosta ———
    h3("Fontina DOP"),
    p("La Fontina viene prodotta esclusivamente in Valle d'Aosta, la più piccola e alpina delle regioni italiane. È ottenuta dal latte crudo delle vacche *Valdostana*, che pascolano a quote diverse a seconda della stagione — il formaggio estivo prodotto con il latte dei pascoli d'alta quota è considerato particolarmente caratteristico per le erbe alpine che riflette. La Fontina ha una consistenza da semimorbida a semidura con una crosta lavata naturale, e un sapore nocciolato, lattiginoso e leggermente terroso, che si complessifica con la stagionatura. Si scioglie in modo eccellente. DOP dal 1996."),
    p("La Fontina è centrale nella cucina valdostana — è il formaggio tradizionale della *fonduta*, la preparazione regionale simile alla fonduta, e della *zuppa alla Valpellinentze*, una zuppa di pane e verdure al forno arricchita di Fontina. La denominazione protetta è Fontina DOP; altri prodotti chiamati 'Fontal' o 'Fontinella' sono realizzati altrove con disciplinari diversi e non sono prodotti DOP."),

    // ——— Tabella ———
    h2("Tabella comparativa"),
    table(
      ["Formaggio", "Zona di produzione", "Latte", "Consistenza", "Usi principali", "Denominazione"],
      [
        ["Parmigiano Reggiano", "Parma, Reggio Emilia, Modena, parte di Bologna e Mantova", "Vaccino crudo", "Duro, granuloso", "Grattugiato, antipasto, cucina", "DOP"],
        ["Grana Padano", "Pianura Padana (zona ampia)", "Vaccino scremato", "Duro, granuloso", "Grattugiato, cucina", "DOP"],
        ["Gorgonzola Dolce/Piccante", "Piemonte e Lombardia (province specifiche)", "Vaccino intero", "Molle–friabile", "Dolce: da spalmare; Piccante: pasta, risotto", "DOP"],
        ["Taleggio", "Bergamo e zona allargata", "Vaccino intero", "Morbido, crosta lavata", "Sciolto in polenta/risotto; tagliere", "DOP"],
        ["Asiago Pressato / d'Allevo", "Altopiano di Asiago e parte del Trentino", "Vaccino", "Morbido–duro (per stagionatura)", "Sandwich, grattugiato (stagionato)", "DOP"],
        ["Montasio", "Friuli-Venezia Giulia e parte del Veneto", "Vaccino", "Semimorbido–duro (per stagionatura)", "Frico, formaggio da tavola", "DOP"],
        ["Fontina", "Solo Valle d'Aosta", "Vaccino crudo", "Semimorbido–semiduro", "Fonduta, sciolto, tagliere", "DOP"],
        ["Castelmagno", "Tre comuni, provincia di Cuneo", "Vaccino (+ eventuale ovi-caprino)", "Semiduro, sbricioloso", "Risotto, pasta, tagliere", "DOP"],
        ["Pecorino Toscano", "Toscana + parti di Umbria e Lazio", "Ovino", "Morbido–compatto (per stagionatura)", "Formaggio da tavola, grattugiato leggero", "DOP"],
        ["Pecorino Romano", "Principalmente Sardegna; Lazio; parte di Grosseto", "Ovino (molto salato)", "Duro, secco", "Grattugiato su pasta (cacio e pepe, carbonara)", "DOP"],
        ["Pecorino Siciliano", "Sicilia", "Ovino", "Duro", "Tavola, grattugiato, piatti tradizionali", "DOP"],
        ["Pecorino Sardo Dolce/Maturo", "Sardegna", "Ovino", "Semimorbido–duro (per stagionatura)", "Tavola, grattugiato (maturo)", "DOP"],
        ["Fiore Sardo", "Sardegna (affumicato)", "Ovino", "Duro", "Tagliere, grattugiato, cucina", "DOP"],
        ["Mozzarella di Bufala Campana", "Campania e zone limitrofe", "Bufalino", "Morbido, fresco", "Fresco, caprese, pizza (uso meno comune)", "DOP"],
        ["Burrata di Andria", "Andria, Puglia", "Vaccino", "Fresco (con ripieno cremoso)", "Fresco, con olio e pane", "IGP"],
        ["Caciocavallo Silano", "Sud Italia (5 regioni)", "Vaccino (pasta filata)", "Semimorbido–duro (per stagionatura)", "Tavola, cucina, grattugiato (stagionato)", "DOP"],
        ["Ragusano", "Ragusa e Siracusa (Sicilia)", "Vaccino (pasta filata)", "Semiduro–duro (per stagionatura)", "Tavola, grattugiato", "DOP"],
        ["Robiola di Roccaverano", "Langhe-Monferrato, Piemonte", "Caprino (o misto)", "Morbido, fresco", "Da spalmare, tagliere", "DOP"],
      ],
      "Stato delle denominazioni verificato sul registro eAmbrosia UE (2026). Consistenze e usi sono indicazioni generali.",
    ),
    image("cheese-board-varieties", "Un tagliere di legno con diversi formaggi italiani di varie consistenze, colori e stagionature, con grissini e accompagnamenti", true),

    // ——— Tagliere ———
    h2("Come costruire un tagliere di formaggi italiani"),
    p("Un buon tagliere di formaggi italiani si costruisce sulla varietà di consistenze, tipi di latte e intensità di sapore, più che sulla quantità di formaggi presenti. Tre o cinque formaggi sono sufficienti per la maggior parte delle occasioni."),
    ul(
      "**Variare la consistenza:** un formaggio fresco o morbido (burrata, Robiola fresca, Pecorino Toscano *fresco*), uno semiduro (Asiago, Fontina, Montasio giovane), uno stagionato a pasta dura (Parmigiano Reggiano, Pecorino Romano, Caciocavallo *stagionato*).",
      "**Variare il tipo di latte:** mescolare formaggi vaccini e ovini dà contrasto. Se includete una mozzarella di bufala, è meglio proporla come elemento centrale piuttosto che metterla in competizione con formaggi stagionati.",
      "**Formaggio erborinato:** il Gorgonzola Dolce si inserisce bene in un tagliere; il Piccante è più deciso. Un solo erborinato alla volta è di solito sufficiente.",
      "**Pane e crackers:** crackers non salati, grissini e buon pane a lievitazione naturale o ciabatta funzionano bene. I crackers aromatizzati rischiano di coprire il sapore del formaggio.",
      "**Frutta di stagione e confetture:** pere fresche, uva, fichi e mele si abbinano alla maggior parte dei formaggi. La mostarda — tipica conserva del Nord Italia a base di frutta e senape — è un accompagnamento tradizionale per il Grana e il Parmigiano stagionati. Il miele si sposa bene con il Pecorino e il Gorgonzola.",
      "**Frutta secca:** noci, mandorle tostate e nocciole funzionano bene; tenetele separate per permettere a ciascuno di scegliere.",
    ),
    tip("Servite i formaggi a temperatura ambiente, non appena tolti dal frigorifero. Il freddo smorza i sapori. Tirate i formaggi fuori dal frigo almeno 30 minuti prima di servire."),

    // ——— Vino ———
    h2("Formaggi e vino italiano"),
    p("Non esiste una regola unica per abbinare il formaggio italiano al vino. Il principio più utile è che i vini ad alta acidità tagliano la grassezza dei formaggi ricchi, mentre i rossi corposi possono sovrastare i formaggi freschi e delicati. Alcune combinazioni ben fondate:"),
    ul(
      "**Parmigiano Reggiano:** Spesso abbinato in Emilia-Romagna al Lambrusco — la qualità frizzante e leggermente tannica del Lambrusco Grasparossa di Castelvetro taglia il grasso e si armonizza con la sapidità del formaggio. Funzionano anche i rossi fermi della regione (a base Sangiovese).",
      "**Gorgonzola Dolce:** I vini dolci da dessert — Moscato d'Asti, Passito di Pantelleria — sono un abbinamento classico. La dolcezza contrasta con la ricchezza del formaggio. Il Gorgonzola Piccante può anche reggere rossi strutturati.",
      "**Taleggio:** Funziona con rossi di medio corpo (Barbera d'Asti, Chianti) e con Franciacorta o altri spumanti italiani.",
      "**Fontina:** Si abbina tradizionalmente ai rossi valdostani — Donnas, Arnad-Montjovet — o con il Pinot Nero. Il vino non deve dominare.",
      "**Pecorino Toscano:** Si abbina naturalmente ai rossi toscani di peso adeguato — Morellino di Scansano, Monteregio di Massa Marittima. Vini più leggeri funzionano con il *fresco*; le versioni più stagionate reggono rossi più importanti.",
      "**Mozzarella di Bufala Campana:** Prosecco e altri bianchi spumanti leggeri; bianchi campani leggeri (Greco di Tufo, Fiano di Avellino) si abbinano senza sovrastare.",
    ),
    p("Per approfondire i vini regionali italiani e le zone di produzione, consultate la [guida ai vini regionali italiani](/it/cibo/vini-regionali-italiani)."),

    // ——— Cucina ———
    h2("Cucinare con i formaggi regionali"),
    p("I formaggi regionali italiani hanno caratteristiche di cottura legate alla loro consistenza e al contenuto di grasso."),
    h3("Formaggi da grattugia"),
    p("Il Parmigiano Reggiano e il Grana Padano sono i formaggi da grattugia standard per pasta, risotto e minestre nel Nord Italia. Il Pecorino Romano è tradizionale in diversi piatti di pasta del Centro e del Sud — è il formaggio della cacio e pepe e della pasta alla gricia nella sua forma romana tradizionale. Mescolare Parmigiano e Pecorino è una pratica comune. Per approfondire quali piatti di pasta usano quale formaggio, consultate l'[articolo sulla pasta romana](/it/cibo/pasta-romana)."),
    h3("Formaggi da sciogliere"),
    p("Taleggio, Fontina e Gorgonzola Dolce si sciolgono in modo omogeneo e vengono usati nel risotto, nella polenta, nella pasta e sulla pizza. La scamorza (un formaggio vaccino a pasta filata diffuso al Sud) viene spesso grigliata o usata in piatti al forno; forma una crosticina quando si scioglie. La mozzarella *fior di latte* è standard per la pasta al forno e la pizza. La mozzarella di bufala è meno adatta alla cottura in forno poiché il suo alto contenuto di umidità può rendere l'impasto o la base molliccia."),
    h3("Formaggi freschi in cucina"),
    p("La ricotta (tecnicamente non un formaggio ma un derivato del siero di altri formaggi) è usata ampiamente per i ripieni di pasta (tortellini, ravioli), pasta al forno, verdure ripiene e come base per dolci e crostate. La burrata è essenzialmente un formaggio da servire fresco e non si presta alla cottura — va servita cruda. La Robiola morbida può essere incorporata nella pasta calda come una salsa."),
    p("Per approfondire le tradizioni regionali del cibo italiano e i formaggi tipici di ogni regione, consultate l'[articolo sulle tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    image("cheese-counter-man", "Un bancone specializzato di formaggi con file di forme e porzioni etichettate; una persona sceglie tra i prodotti", true),

    // ——— Dove comprare ———
    h2("Dove comprare il formaggio in Italia"),
    p("Il formaggio in Italia si trova nei **supermercati**, nelle **gastronomie** (rosticcerie e negozi di alimentari specializzati), nei **caseifici** (produttori di latticini, a volte con spaccio diretto) e nei **mercati**. I negozi specializzati in formaggi si trovano in quasi tutte le città di una certa dimensione. La qualità e la varietà di una buona gastronomia o di un mercato fresco sono di solito nettamente superiori a quelle disponibili al supermercato."),
    h3("Al bancone"),
    p("Quando si acquista al banco, è solitamente possibile chiedere una porzione, specificare il peso desiderato e assaggiare prima di comprare. Le porzioni standard si vendono al peso: *un etto* (100 grammi) o *due etti* (200 grammi) è il modo in cui la maggior parte degli italiani acquista. In un bancone affollato del mercato, siate pronti a ordinare rapidamente."),
    ul(
      "**Un etto di Parmigiano, per favore** — 100 grammi di Parmigiano, per favore.",
      "**Posso assaggiare?** — Posso fare un assaggio?",
      "**Quanto si conserva?** — Per quanto tempo si mantiene?",
      "**È latte vaccino o ovino?** — Di che latte è?",
      "**È stagionato o fresco?** — Stagionato o fresco?",
      "**Ha qualcosa di locale?** — Avete qualcosa della zona?",
    ),
    h3("Etichette e marchi DOP"),
    p("Su un pezzo di formaggio DOP tagliato al banco, la forma originale (che porta le punzonature e i timbri del consorzio) è già stata aperta, quindi potreste non vedere i marchi completi. Chiedete al venditore o guardate l'etichetta sulla porzione tagliata. Su una parte di Parmigiano Reggiano acquistata da una forma intera, la punzonatura puntinata e il marchio ovale del Consorzio dovrebbero essere visibili sulla crosta — questo conferma la denominazione."),
    p("Sulle confezioni preconfezionate, cercate il logo DOP (un design circolare rosso e giallo su prodotti registrati UE) o il logo IGP (equivalente blu e giallo). Questi confermano la denominazione. In Italia, sulle etichette cercate la sigla DOP o IGP."),
    p("Per sapere cosa cercare nei mercati alimentari italiani, consultate la [guida ai mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani)."),

    // ——— Conservazione ———
    h2("Conservazione e sicurezza alimentare"),
    p("Come conservare il formaggio italiano a casa dipende significativamente dal tipo. Seguite sempre le indicazioni del venditore o del produttore come prima fonte — saranno più precise di qualsiasi regola generale."),
    ul(
      "**Formaggi freschi (mozzarella, burrata, ricotta, Robiola fresca):** Conservare in frigorifero e consumare rapidamente — la maggior parte va mangiata entro uno o tre giorni, o entro la data di scadenza. La mozzarella fresca e la burrata sono al meglio a temperatura ambiente, quindi toglietele dal frigo prima di servire, ma non lasciatele fuori per periodi prolungati.",
      "**Formaggi semiduri e duri (Asiago, Montasio, Parmigiano, Pecorino):** Avvolgete i pezzi tagliati in carta da formaggio o carta forno anziché pellicola trasparente, che può far trasudare la crosta. Conservate in frigorifero. I formaggi duri si mantengono per diverse settimane con una cura adeguata.",
      "**Formaggi erborinati (Gorgonzola):** Conservare avvolto in foglio di alluminio o in un contenitore ermetico in frigorifero, separato dagli altri formaggi. Il Gorgonzola Dolce va consumato prima del Piccante.",
      "**Formaggi a crosta lavata (Taleggio):** Conservare ben avvolto nella parte più fresca e umida del frigorifero. Il profumo è intenso — mantenetelo ben sigillato.",
    ),
    note("I formaggi a latte crudo presentano considerazioni diverse rispetto ai prodotti pastorizzati. Alcune categorie di persone — donne in gravidanza, soggetti immunocompromessi, anziani e bambini molto piccoli — sono generalmente invitate a evitare i formaggi a latte crudo. Consultate le indicazioni ufficiali per il vostro Paese e, in caso di dubbi, rivolgetevi a un professionista della salute piuttosto che fare riferimento a contenuti editoriali generali."),

    // ——— Luoghi comuni ———
    h2("Luoghi comuni da sfatare"),
    ul(
      "**«Tutti i formaggi italiani sono formaggi duri.»** L'Italia produce un'ampia gamma di formaggi freschi e morbidi — Mozzarella di Bufala Campana, burrata, Taleggio, Robiola, ricotta e molti altri. I formaggi stagionati a pasta dura sono iconici ma non rappresentativi dell'intera tradizione.",
      "**«Parmesan e Parmigiano Reggiano sono la stessa cosa.»** 'Parmesan' è un termine usato fuori dall'UE per formaggi duri da grattugia di stile simile; nell'UE, il nome Parmigiano Reggiano è tutelato e può essere usato solo su formaggi che rispettano il disciplinare DOP. I due prodotti possono differire significativamente per metodo di produzione, provenienza del latte e profilo sensoriale.",
      "**«Tutti i pecorini hanno lo stesso sapore.»** Pecorino Romano, Pecorino Toscano, Pecorino Sardo e Pecorino Siciliano sono prodotti DOP diversi da regioni diverse, con metodi di produzione, requisiti di stagionatura e profili sensoriali distinti. L'unica caratteristica comune è che tutti sono prodotti con latte ovino.",
      "**«La DOP garantisce che il formaggio piacerà a tutti.»** Una denominazione DOP conferma che il formaggio rispetta un determinato disciplinare di produzione — non dice nulla sulle preferenze di gusto individuali. Il fumo e l'intensità del Fiore Sardo, la pungenza del Gorgonzola Piccante e la sapidità del Pecorino Romano sono autentici nelle rispettive denominazioni; non sono universalmente apprezzati.",
      "**«Mozzarella e burrata sono la stessa cosa.»** La mozzarella è un formaggio fresco a pasta filata solido; la burrata ha lo stesso involucro esterno di mozzarella fresca ma è ripiena di stracciatella (filamenti di cagliata e panna). La burrata è molto più ricca e liquida all'interno quando viene tagliata, e ha una shelf life brevissima. La mozzarella di bufala è DOP; la Burrata di Andria è IGP.",
      "**«Un formaggio che porta il nome di una regione viene solo da quella regione.»** Solo quando il nome è una denominazione DOP o IGP registrata, l'origine geografica ha valore legale. Alcuni nomi di formaggi fanno riferimento a una regione senza portare una designazione protetta. Verificate sempre la presenza delle sigle DOP o IGP in etichetta.",
    ),

    // ——— Glossario ———
    h2("Glossario del formaggio italiano"),
    table(
      ["Italiano", "Significato"],
      [
        ["formaggio", "cheese / formaggio"],
        ["formaggiaio / casaro", "produttore di formaggio"],
        ["caseificio", "stabilimento di produzione casearia"],
        ["gastronomia", "negozio di alimentari specializzato / rosticceria"],
        ["al banco", "al bancone (al contrario di preconfezionato)"],
        ["fresco", "fresco (non stagionato o brevemente stagionato)"],
        ["stagionato", "aged / stagionato"],
        ["semistagionato", "semi-stagionato"],
        ["latte vaccino", "latte di mucca"],
        ["latte ovino", "latte di pecora"],
        ["latte caprino", "latte di capra"],
        ["latte bufalino / di bufala", "latte di bufala"],
        ["latte crudo", "latte non pastorizzato"],
        ["latte pastorizzato", "latte pastorizzato"],
        ["a pasta filata", "tecnica della pasta filata (mozzarella, caciocavallo, provolone)"],
        ["a pasta dura", "formaggio a pasta dura"],
        ["a pasta molle", "formaggio a pasta molle"],
        ["crosta", "crosta (esterna del formaggio)"],
        ["crosta lavata", "crosta lavata"],
        ["erborinato", "formaggio con venature blu-verdi (erborinatura = venatura)"],
        ["DOP (Denominazione di Origine Protetta)", "denominazione europea più restrittiva: produzione, trasformazione e stagionatura nella zona"],
        ["IGP (Indicazione Geografica Protetta)", "almeno una fase in zona"],
        ["un etto", "100 grammi (unità standard al bancone)"],
        ["due etti", "200 grammi"],
        ["mezzo chilo / mezzo kg", "500 grammi"],
        ["affettato", "a fette"],
        ["grattugiato", "grattugiato"],
      ],
    ),
    image("cheese-stone-cellar", "Un lungo corridoio a volta in pietra, tipico di una cantina o grotta usata per la stagionatura di formaggi o vini", true),
  ],

  faqs: [
    { question: "Quali formaggi italiani dovrebbe assaggiare chi visita l'Italia per la prima volta?", answer: "Per varietà, provate la Mozzarella di Bufala Campana fresca nel Sud, uno spicchio di Parmigiano Reggiano consumato a pezzetti in Emilia-Romagna, e un pecorino locale ovunque vi troviate nel Centro Italia. Ognuno rappresenta una tradizione italiana genuinamente diversa. La burrata in Puglia è memorabile se la trovate prodotta in giornata. Nel Nord, Taleggio e Fontina vi offrono gli stili a crosta lavata e alpino." },
    { question: "Qual è la differenza tra Parmigiano Reggiano e Grana Padano?", answer: "Entrambi sono formaggi DOP a pasta granulosa stagionata vaccina della Pianura Padana, ma sono prodotti distinti. Il Parmigiano Reggiano viene da una zona più ristretta (Parma, Reggio Emilia, Modena e parti di Bologna e Mantova) e usa latte crudo senza additivi. Il Grana Padano viene da una zona più ampia e ammette l'uso del lisozima (derivato dall'albume d'uovo) come conservante. I profili sensoriali differiscono — il Parmigiano Reggiano tende a essere più complesso e intensamente saporito; il Grana Padano è spesso più delicato. Il lisozima nel Grana Padano è rilevante per chi è allergico alle uova." },
    { question: "Cosa significa DOP su un'etichetta di formaggio italiano?", answer: "DOP sta per Denominazione di Origine Protetta — la designazione europea più restrittiva. Significa che il formaggio è stato prodotto, trasformato e stagionato in una zona geografica definita secondo un disciplinare di produzione verificato, e il nome è legalmente tutelato. Il marchio DOP conferma l'origine geografica e il metodo di produzione; non garantisce che ogni consumatore apprezzerà quel formaggio." },
    { question: "Quali formaggi italiani sono prodotti con latte di pecora?", answer: "La famiglia dei pecorini — Pecorino Romano, Pecorino Toscano, Pecorino Sardo, Pecorino Siciliano e Fiore Sardo — sono tutti formaggi DOP a latte ovino. Il Castelmagno può includere una quota di latte ovino. La Robiola di Roccaverano può includere latte ovino nel mix. Le tradizioni ovine sono più forti nel Centro-Sud, in Sardegna e in Sicilia." },
    { question: "Qual è la differenza tra mozzarella e burrata?", answer: "La mozzarella è un formaggio fresco a pasta filata — una pallina solida di cagliata filata di latte vaccino o bufalino. La burrata ha lo stesso involucro esterno di mozzarella fresca, ma è ripiena di stracciatella (filamenti di cagliata immersi nella panna). La burrata è molto più ricca e liquida all'interno quando viene tagliata, e ha una shelf life brevissima — idealmente si mangia il giorno stesso della produzione. La Mozzarella di Bufala Campana è DOP; la Burrata di Andria è IGP." },
    { question: "Quali formaggi italiani si grattuggiano sulla pasta?", answer: "Parmigiano Reggiano e Grana Padano si grattuggiano su pasta, risotto e minestre in tutto il Nord Italia. Il Pecorino Romano è tradizionale in diversi piatti del Centro-Sud — è il formaggio della cacio e pepe e della pasta alla gricia. Mescolare Parmigiano e Pecorino è una pratica comune. Il Pecorino Sardo Maturo e il Caciocavallo stagionato sono usati rispettivamente nei piatti sardi e meridionali. La scelta del formaggio da grattugia è spesso regionale e specifica della ricetta." },
    { question: "La Mozzarella di Bufala Campana è adatta alla pizza?", answer: "Può essere usata sulla pizza, ma è meno comune del fior di latte (mozzarella vaccina) per la cottura in forno. La Mozzarella di Bufala Campana ha un contenuto d'acqua molto più alto, che può rendere l'impasto umido se non viene ben scolata e gestita. Il disciplinare della Pizza Napoletana ammette sia il fior di latte che la mozzarella di bufala; in pratica, il fior di latte è più diffuso nella produzione di pizza perché si comporta in modo più prevedibile in forno. La mozzarella di bufala è al suo meglio consumata fresca e cruda." },
    { question: "Come si ordina il formaggio in un mercato o gastronomia italiana?", answer: "Indicate quello che volete, dite 'un etto' (100g) o 'due etti' (200g), o indicate una porzione. Potete chiedere 'Posso assaggiare?' — è normale al bancone di un negozio specializzato. Chiedete 'È latte vaccino o ovino?' o 'Quanto si conserva?' se avete bisogno di sapere. In un contesto di mercato affollato, siate pronti a ordinare rapidamente." },
    { question: "Come si conserva il formaggio italiano a casa?", answer: "Seguite le indicazioni del venditore come primo riferimento. In linea generale: i formaggi freschi (mozzarella, burrata, ricotta) si conservano in frigorifero e si consumano rapidamente — entro uno o tre giorni. I formaggi a pasta dura tagliati (Parmigiano, Pecorino) si conservano meglio avvolti in carta da formaggio anziché pellicola. Il formaggio erborinato (Gorgonzola) va tenuto sigillato in alluminio o in un contenitore ermetico. I formaggi a crosta lavata (Taleggio) vanno ben avvolti in frigorifero." },
    { question: "Tutti i formaggi italiani sono vaccini?", answer: "No. L'Italia ha forti tradizioni ovine (Pecorino Romano, Pecorino Toscano, Fiore Sardo), una significativa tradizione bufalina (Mozzarella di Bufala Campana) e diversi formaggi caprini (Robiola di Roccaverano). Mentre il latte vaccino domina la produzione nel Nord, il Sud, la Sardegna e la Sicilia si sono storicamente affidati maggiormente alle pecore. Esistono anche formaggi a latte misto." },
    { question: "Qual è la differenza tra DOP e IGP?", answer: "Una DOP richiede che l'intera produzione — approvvigionamento del latte, lavorazione e stagionatura — avvenga nella zona geografica definita. Una IGP richiede che almeno una fase della produzione si svolga nella zona definita. Per il formaggio, la DOP è la designazione più comune e più restrittiva. Entrambe sono registrate nell'UE e tutelate legalmente negli Stati membri. Sulle etichette italiane: cercate 'DOP' o 'IGP'." },
    { question: "Cosa significa 'a pasta filata'?", answer: "La pasta filata è una tecnica produttiva in cui la cagliata fresca viene immersa in acqua calda o siero e poi impastata, stirata e filata fino a diventare liscia ed elastica. Questo crea la consistenza fibrosa e leggermente gommosa caratteristica di mozzarella, burrata, scamorza, provolone e caciocavallo. La tecnica è originaria del Sud Italia ed è diffusa in tutto il Mezzogiorno e in alcune altre regioni." },
    { question: "La Fontina è la stessa cosa del Fontal?", answer: "No. La Fontina DOP viene prodotta esclusivamente in Valle d'Aosta con latte vaccino crudo locale, rispettando un disciplinare specifico. Fontal e Fontinella sono marchi commerciali usati per formaggi prodotti altrove, spesso su scala maggiore e con latte pastorizzato, in uno stile vagamente simile. Sono prodotti distinti e non possono usare il nome Fontina DOP." },
    { question: "Il Pecorino Romano viene davvero prodotto principalmente in Sardegna?", answer: "Sì. Nonostante il nome, la maggior parte della produzione del Pecorino Romano DOP avviene oggi in Sardegna, con una quota minore nel Lazio e nella provincia di Grosseto in Toscana. Il nome storico riflette l'utilizzo romano antico e la destinazione commerciale tradizionale verso Roma, ma la zona di produzione attuale è stata codificata nel disciplinare DOP e include la Sardegna come area principale." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Registro eAmbrosia UE — indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Verifica di tutte le denominazioni DOP e IGP" },
    { label: "Consorzio del Parmigiano Reggiano", url: "https://www.parmigianoreggiano.com/", note: "Disciplinare, fasi di stagionatura, marchiatura" },
    { label: "Consorzio Tutela Grana Padano", url: "https://www.granapadano.it/", note: "Zona di produzione, caratteristiche del latte, lisozima" },
    { label: "Consorzio Tutela Gorgonzola", url: "https://www.gorgonzola.com/", note: "Tipologie Dolce e Piccante, zona di produzione" },
    { label: "Consorzio Tutela Taleggio", url: "https://www.taleggio.it/", note: "Zona di produzione, metodo di lavorazione" },
    { label: "Consorzio Tutela Asiago", url: "https://www.asiagocheese.it/", note: "Pressato e d'Allevo, zona di produzione" },
    { label: "Consorzio Fontina Valle d'Aosta", url: "https://www.fontina-vda.it/", note: "Esclusività Valle d'Aosta, vacche Valdostana" },
    { label: "Consorzio Mozzarella di Bufala Campana", url: "https://www.mozzarelladop.it/", note: "Zona DOP, metodo di produzione" },
    { label: "Consorzio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "Zona di produzione attuale (prevalentemente Sardegna)" },
    { label: "Treccani — Enciclopedia Italiana", url: "https://www.treccani.it/", note: "Terminologia, etimologia" },
  ],
};
