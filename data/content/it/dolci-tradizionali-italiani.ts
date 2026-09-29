import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Approfondimento: "Dolci tradizionali italiani" — edizione italiana, scritta
// in modo autonomo rispetto a quella inglese (/food/traditional-italian-desserts).
// È l'articolo di riferimento su dolci e pasticceria; cucina italiana, Sicilia,
// caffè, gelato, vini, pizza e pasta hanno articoli propri e vengono linkati.
// DOP, IGP e date di registrazione verificate nel registro UE eAmbrosia a
// settembre 2026. Altre fonti: schede dei prodotti tradizionali della Regione
// Campania; Arsial sul maritozzo; Regione Veneto e turismo veneto su fritole,
// zaleti, baicoli e tiramisù di Treviso; SardegnaTurismo su seadas, pardulas e
// amaretti; elenco piemontese dei prodotti tradizionali sui baci di dama di
// Tortona; Caffarel sul gianduiotto; Bologna Welcome sul certosino; Regione
// Toscana sulla farina di castagne; Treccani sui nomi del Carnevale; decreto
// ministeriale del 2005 su panettone, pandoro e colomba. Le leggende restano
// leggende.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/traditional-italian-desserts";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const dolciTradizionaliItaliani: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cosa intendiamo per dolci tradizionali italiani?"),
    answer("**Una tradizione dolciaria italiana unica non esiste: ne esistono centinaia, locali.** I dolci sono nati da ciò che ogni territorio offriva — ricotta, mandorle, nocciole, castagne, agrumi, miele —, dal calendario religioso (Natale, Carnevale, Quaresima, Pasqua, feste dei santi) e da secoli di Stati diversi, monasteri, corti e cucine di famiglia. Per questo il cannolo siciliano, il panforte senese e le fritole veneziane sono tutti \"dolci tradizionali\", pur non avendo quasi nulla in comune."),
    p("Conviene distinguere. C'è la **specialità locale**, legata a un luogo e spesso a una sola città; il **dolce delle feste**, che compare attorno a una ricorrenza; il **classico di pasticceria**, che si trova ogni giorno in vetrina; e ci sono dolci italiani **famosi nel mondo**, come il tiramisù, nati in tempi relativamente recenti. Nessuna di queste categorie è più \"autentica\" delle altre: sono tradizioni di tipo diverso."),
    p("Qui parliamo di dolci e pasticceria. Per il quadro generale c'è [Tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana); per il caffè che li accompagna, [Il caffè italiano](/it/cibo/caffe-italiano)."),
    {
      type: "facts",
      title: "I dolci italiani in breve",
      rows: [
        { label: "Da che cosa nascono", value: "Ingredienti locali, calendario religioso, monasteri, corti, cucine di casa" },
        { label: "Ingredienti chiave", value: "Ricotta, mandorle, nocciole, pistacchi, agrumi, castagne, miele, cioccolato" },
        { label: "Stagioni forti", value: "Natale, Carnevale, Pasqua, feste patronali" },
        { label: "Dolci con marchio UE", value: "Tra gli altri Panforte e Ricciarelli di Siena, Cantucci Toscani, Seadas di Sardegna, Torrone di Bagnara" },
        { label: "Dove comprarli", value: "Pasticcerie, bar, forni, bancarelle stagionali" },
        { label: "I nomi", value: "Cambiano spesso da una regione all'altra, anche per lo stesso dolce" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/venice-pastry-counter.webp`,
      alt: "Il bancone di una pasticceria veneziana con vassoi di sfogliatelle di pasta sfoglia, cannoli alla crema e croccante di noci sotto cartellini gialli",
      caption: "Una vetrina a Venezia. \"Sfogliatelle\" e \"cannoli\" qui sono quelli di sfoglia del Nord: i nomi viaggiano più delle ricette.",
      credit: unsplash("Gene Gallin", "genefoto"),
      wide: true,
    },

    // ——— 2 ———
    h2("Perché i dolci cambiano così tanto da regione a regione"),
    ul(
      "**Gli ingredienti** — Sud e isole hanno ricotta, mandorle, agrumi e pistacchi; il Piemonte le nocciole; l'Appennino le castagne; le Alpi burro, panna e mele.",
      "**La storia** — fino al 1861 l'Italia era divisa in molti Stati: corti, commerci e dominazioni hanno lasciato tracce diverse a Napoli, Palermo, Torino o Venezia.",
      "**I monasteri** — molti dolci, soprattutto al Sud, sono legati per tradizione ai conventi, dove le monache li preparavano e li vendevano.",
      "**Il calendario** — i periodi di magro (Avvento, Quaresima) e le feste (Natale, Carnevale, Pasqua) hanno dato a ogni stagione i suoi dolci.",
      "**Casa e pasticceria** — alcuni dolci si fanno soprattutto in famiglia per una festa, altri sono il lavoro quotidiano dei pasticcieri.",
    ),

    // ——— 3 ———
    h2("Il quadro regione per regione"),
    table(
      ["Regione o area", "Dolci rappresentativi", "Ingredienti o tradizioni"],
      [
        ["Sicilia", "Cannoli, cassata, frutta martorana, granita", "Ricotta, mandorle, pistacchi, agrumi"],
        ["Campania", "Sfogliatella, babà, pastiera, struffoli", "Ricotta, grano cotto, agrumi, miele"],
        ["Lazio", "Maritozzo, crostate di ricotta", "Panna, ricotta, pani quaresimali"],
        ["Toscana", "Cantucci, panforte, ricciarelli, castagnaccio", "Mandorle, spezie, farina di castagne"],
        ["Piemonte", "Gianduiotti, baci di dama, bonet", "Nocciole, cioccolato"],
        ["Veneto", "Fritole, galani, zaleti, baicoli, pandoro", "Fritture di Carnevale, farina di mais, burro"],
        ["Emilia-Romagna", "Certosino, zuppa inglese", "Miele, spezie, crema"],
        ["Lombardia", "Panettone, torrone, sbrisolona", "Burro, canditi, mandorle"],
        ["Sardegna", "Seadas, pardulas, amaretti", "Formaggio, ricotta, semola, miele, mandorle"],
        ["Calabria", "Torrone, dolci di fichi", "Miele, mandorle, fichi secchi"],
      ],
      "Qualche esempio per regione: molti dolci attraversano i confini.",
    ),

    // ——— 4 ———
    h2("Sicilia"),
    p("La Sicilia ha una delle pasticcerie più ricche d'Italia, fondata su ricotta di pecora, mandorle, pistacchi e agrumi. La cucina dell'isola è raccontata in [Tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana); qui ci fermiamo ai dolci."),
    ul(
      "**Cannoli** — scorze fritte e croccanti ripiene di ricotta zuccherata, spesso con arancia candita, cioccolato o pistacchio. Le pasticcerie migliori li riempiono al momento.",
      "**Cassata siciliana** — pan di Spagna e ricotta ricoperti di pasta reale e canditi, legata soprattutto a Palermo e alla Pasqua.",
      "**Frutta martorana** — pasta reale modellata e dipinta a forma di frutta, tipica della festa dei Morti, il 2 novembre.",
      "**Granita e brioche** — la colazione d'estate, soprattutto nella Sicilia orientale.",
      "**Dolci di mandorla e pistacchio** — paste di mandorla morbide e dolci con il Pistacchio Verde di Bronte (DOP).",
      "**Cioccolato di Modica** — granuloso, lavorato a bassa temperatura; IGP dal 2018.",
    ),
    p("Cannolo e cassata condividono la ricotta, ma il primo è una cialda fritta da mangiare con le mani, la seconda una torta da tagliare a fette. Per le pasticcerie palermitane, vedi [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta)."),

    // ——— 5 ———
    h2("Napoli e la Campania"),
    p("A Napoli la pasticceria conta quanto la pizza, e le schede dei prodotti tradizionali della Regione Campania raccontano le storie di molti dolci — alcune dichiaratamente leggendarie."),
    ul(
      "**Sfogliatella** — riccia, a sfoglie croccanti, o frolla, ripiena di ricotta, semola e canditi. Secondo il racconto riportato dalla Regione, l'antenata nacque circa quattro secoli fa nel convento di Santa Rosa a Conca dei Marini, in Costiera Amalfitana, e la ricetta arrivò a Napoli intorno al 1800.",
      "**Babà** — pasta lievitata bagnata nello sciroppo al rum. La Regione riporta la storia della corte del re polacco Stanislao Leszczyński, del passaggio in Francia e dell'arrivo a Napoli con i *monsù*, i cuochi francesi delle famiglie nobili, dove prese la forma a fungo.",
      "**Pastiera** — il dolce di Pasqua: frolla ripiena di ricotta, grano cotto, uova e acqua di fiori d'arancio. La sua origine è legata alla leggenda della sirena Partenope, che la Regione stessa presenta come leggenda.",
      "**Struffoli** — palline di pasta fritte e legate con il miele, decorate con canditi e confettini: il dolce di Natale delle case campane.",
      "**Delizia al limone** — pan di Spagna ripieno e ricoperto di crema al limone. Secondo la Regione è nata sulle costiere sorrentina e amalfitana negli anni Settanta: tradizionale oggi, ma non antica.",
      "**I biscotti di Natale** — mustaccioli, susamielli e roccocò accompagnano gli struffoli a dicembre.",
    ),
    p("I limoni della costa sono tutelati come Limone Costa d'Amalfi e Limone di Sorrento (entrambi IGP). Vedi anche [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/naples-baba-display.webp`,
      alt: "Un cliente indica vassoi di dolci lucidi in una vetrina illuminata di una pasticceria di Napoli",
      caption: "La scelta in vetrina a Napoli, dove il babà non manca mai.",
      credit: unsplash("Cenk Batuhan Özaltun", "c_b_ozaltun"),
    },
    {
      type: "image",
      src: `${IMG}/amalfi-pasticceria.webp`,
      alt: "Tavolini pieni di clienti davanti a una storica pasticceria in piazza del Duomo ad Amalfi, con il campanile sullo sfondo",
      caption: "Una pasticceria storica in piazza del Duomo ad Amalfi. I limoni della costiera profumano molti dolci locali.",
      credit: unsplash("Giusi Borrasi", "giusiborrasi"),
    },

    // ——— 6 ———
    h2("Roma e il Lazio"),
    p("Il dolce simbolo di Roma è il **maritozzo**: un panino dolce, soffice e ovale, aperto e farcito di panna; nella versione tradizionale l'impasto ha l'uvetta. Arsial, l'agenzia regionale per l'agricoltura del Lazio, ricorda il suo ingresso nell'elenco nazionale dei prodotti agroalimentari tradizionali e cita fonti che lo collegano ai panini quaresimali con miele, uvetta e pinoli. Oggi si mangia soprattutto a colazione, con il cappuccino: vedi [Il caffè italiano](/it/cibo/caffe-italiano)."),
    p("Tra gli altri dolci romani, le **crostate di ricotta**, a volte con le visciole, con la Ricotta Romana (DOP); le **frappe** di Carnevale; bignè e frittelle per San Giuseppe, il 19 marzo. Per la città, vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),

    // ——— 7 ———
    h2("Toscana"),
    p("I dolci toscani sono spesso secchi, speziati e a base di frutta secca — fatti per durare — e diversi sono tutelati dall'Unione europea. Meglio essere precisi sulle provenienze:"),
    ul(
      "**Cantucci / cantuccini** — biscotti alle mandorle cotti due volte, tutelati come Cantuccini Toscani / Cantucci Toscani (IGP dal 2016) in tutta la regione e legati soprattutto a Prato. Con il vin santo, a fine pasto.",
      "**Panforte di Siena** (IGP dal 2013) — impasto compatto di miele, zucchero, frutta secca, canditi e spezie, dolce natalizio senese.",
      "**Ricciarelli di Siena** (IGP dal 2010) — morbidi biscotti di mandorle a losanga, anch'essi senesi.",
      "**Castagnaccio** — torta bassa di farina di castagne con olio, pinoli e rosmarino, dolce d'autunno e d'inverno in Toscana e nelle vicine Liguria ed Emilia. Tra le farine toscane c'è la Farina di Neccio della Garfagnana (DOP).",
      "**Cenci** — il nome toscano delle sfoglie fritte di Carnevale; a Firenze c'è anche la **schiacciata alla fiorentina**.",
    ),
    p("I dolci di Siena restano senesi: oggi si trovano ovunque, ma il legame è con la città. Per Firenze, vedi [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),

    // ——— 8 ———
    h2("Piemonte e Torino"),
    p("La pasticceria piemontese si fonda sulle nocciole — la Nocciola del Piemonte è IGP — e sul cioccolato, e Torino vanta una delle più antiche culture italiane del caffè e della cioccolata."),
    ul(
      "**Gianduia e gianduiotto** — il gianduia è una pasta liscia di cioccolato e nocciole macinate. Un racconto molto diffuso lo lega alla scarsità di cacao in epoca napoleonica; Caffarel fa risalire il suo gianduiotto a forma di barchetta al Carnevale del 1865, con il nome della maschera torinese Gianduja.",
      "**Baci di dama** — due biscottini di nocciole o mandorle uniti dal cioccolato. La versione di Tortona è nell'elenco piemontese dei prodotti tradizionali, anche se altre città ne rivendicano la paternità.",
      "**Bonet** — budino al cacao e amaretti, classico fine pasto piemontese.",
      "**Bicerin** — la bevanda torinese di caffè, cioccolato e crema, raccontata in [Il caffè italiano](/it/cibo/caffe-italiano).",
    ),
    p("La nostra guida a [Torino per la prima volta](/it/citta/torino-per-la-prima-volta) racconta caffè storici e pasticcerie."),
    {
      type: "image",
      src: `${IMG}/turin-pasticceria.webp`,
      alt: "Due persone guardano la vetrina illuminata di una pasticceria con l'ingresso in legno scuro, nel centro di Torino",
      caption: "Una pasticceria tradizionale nel centro di Torino.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 9 ———
    h2("Venezia e il Veneto"),
    p("I dolci veneti seguono il calendario, con il Carnevale al centro. Diversi sono nell'elenco regionale dei prodotti tradizionali:"),
    ul(
      "**Fritole** — le frittelle del Carnevale veneziano, spesso con uvetta e pinoli, oggi anche ripiene di crema o zabaione.",
      "**Galani** — sottili nastri di pasta fritta, la versione veneziana di chiacchiere e crostoli.",
      "**Zaleti** — biscotti di farina di mais e uvetta, dal colore giallo che dà loro il nome.",
      "**Baicoli** — biscotti sottili e secchi da inzuppare nel caffè, nella cioccolata o nel vino dolce.",
      "**Pandoro** — l'alto dolce a stella di Verona, il cui nome e la cui ricetta di base sono regolati da un decreto ministeriale del 2005.",
    ),
    p("Il **tiramisù** è un caso a parte: Veneto e Friuli Venezia Giulia se ne contendono da anni l'origine. Nel 2017 il Ministero dell'Agricoltura ha inserito due versioni friulane nell'elenco dei prodotti tradizionali; nel 2024 è stato aggiunto, per il Veneto, il Tiramisù di Treviso. Di certo è un dolce del Novecento, il che non lo rende meno amato. Per la città, vedi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta), che racconta anche il Carnevale."),
    {
      type: "image",
      src: `${IMG}/venice-tiramisu.webp`,
      alt: "Una coppetta di tiramisù spolverata di cacao accanto a un piattino di biscotti e croccante su una tovaglia bianca a Venezia",
      caption: "Tiramisù e biscotti a Venezia. L'origine del dolce è contesa tra Veneto e Friuli.",
      credit: unsplash("Alexandra Tran", "alexgoesglobal"),
    },

    // ——— 10 ———
    h2("Emilia-Romagna"),
    p("Più nota per la pasta che per i dolci, l'Emilia-Romagna ha comunque le sue specialità. A Natale Bologna prepara il **certosino**, o *pan speziale*: un impasto compatto di miele, mandorle, canditi, cioccolato e spezie. Secondo l'ufficio turistico bolognese, un tempo lo vendevano gli speziali e poi i monaci certosini, da cui i due nomi. La **zuppa inglese**, dolce al cucchiaio di pan di Spagna bagnato nel liquore e crema, è diffusa in tutta la regione e in quelle vicine. Vedi [Bologna in due giorni](/it/citta/bologna-in-due-giorni)."),

    // ——— 11 ———
    h2("Sardegna"),
    p("I dolci sardi nascono dall'economia pastorale — formaggio, ricotta, miele — e da mandorle e semola. Secondo il sito turistico della Regione, la pasticceria era tradizionalmente un sapere femminile ed è oggi anche un artigianato di qualità."),
    ul(
      "**Seadas (sebadas)** — grande disco di pasta ripieno di formaggio fresco e acidulo profumato di scorza d'agrumi, fritto e servito caldo con il miele. Dal 2023 è IGP, registrata con diverse grafie: Sebadas / Seadas / Sabadas / Seattas / Savadas / Sevadas di Sardegna.",
      "**Pardulas** — cestini di pasta ripieni di ricotta o formaggio, spesso con zafferano e agrumi, legati alla Pasqua.",
      "**Amaretti** — morbidi, di mandorle; in parte del nord dell'isola si fanno con la *sapa*, il mosto cotto.",
    ),
    p("Le ricette cambiano da paese a paese, e lo stesso dolce può avere più nomi."),

    // ——— 12 ———
    h2("Il Nord"),
    p("Oltre a Piemonte e Veneto, i dolci del Nord usano spesso burro, panna, frutta secca, mele e farina di mais, e in alcuni si sentono influenze alpine e mitteleuropee."),
    ul(
      "**Lombardia** — il **panettone** milanese, con uvetta e scorze candite; il **torrone**, a lungo legato a Cremona; la **sbrisolona** mantovana, torta friabile di mandorle.",
      "**Liguria** — il **pandolce genovese** di Natale, con frutta secca, e una parte della tradizione delle castagne.",
      "**Trentino-Alto Adige** — lo **strudel di mele**, fatto con mele locali come la Mela Alto Adige (IGP), segno dei legami con il mondo austriaco.",
      "**Friuli Venezia Giulia** — la **gubana** delle Valli del Natisone, a spirale con frutta secca, e la contesa del tiramisù.",
    ),
    p("Non è solo \"burro al Nord, olio e ricotta al Sud\": il castagnaccio è fatto con olio e castagne, e le nocciole contano nel Lazio e in Campania quanto in Piemonte."),

    // ——— 13 ———
    h2("Il Centro"),
    p("Oltre a Toscana e Lazio, il Centro ha dolci meno noti all'estero ma molto radicati. L'Abruzzo è conosciuto per i **confetti di Sulmona**, protagonisti di matrimoni e ricorrenze, e per il **parrozzo** pescarese di Natale, ricoperto di cioccolato. Umbria e Marche hanno dolci natalizi e di Carnevale propri, spesso condivisi con le regioni vicine sotto altri nomi. Con le nocciole del Viterbese (Nocciola Romana, DOP) si fanno biscotti come i tozzetti."),

    // ——— 14 ———
    h2("Il Sud"),
    p("I dolci del Sud usano mandorle, miele, agrumi, ricotta, frutta secca e grano duro: la stessa dispensa della cucina salata."),
    ul(
      "**Puglia** — il **pasticciotto**, frolla ripiena di crema, legato a Lecce e al Salento; le **cartellate** di Natale, rose di pasta fritta nel miele o nel vincotto.",
      "**Calabria** — il **Torrone di Bagnara** (IGP dal 2014), di mandorle, da Bagnara Calabra; i dolci di fichi secchi (Fichi di Cosenza, DOP); agrumi come le Clementine di Calabria (IGP) e il Cedro di Santa Maria del Cedro (DOP).",
      "**Basilicata** — dolci fritti e di mandorle preparati in casa per le feste, spesso comuni a Puglia e Calabria.",
    ),

    // ——— 15 ———
    h2("I dolci di Natale"),
    p("Il Natale è la grande stagione dei dolci. Dal 2005 un decreto ministeriale stabilisce che cosa si può vendere con il nome di panettone, pandoro e colomba: per questo in etichetta quei nomi hanno un significato preciso."),
    table(
      ["Dolce", "Legato a", "Che cos'è"],
      [
        ["Panettone", "Milano, oggi tutta Italia", "Lievitato alto con uvetta e scorze candite"],
        ["Pandoro", "Verona, oggi tutta Italia", "Alto dolce a stella, burroso, con zucchero a velo"],
        ["Panforte", "Siena", "Impasto compatto di miele, frutta secca e spezie"],
        ["Torrone", "Cremona, Calabria, Sicilia e altrove", "Miele, albume e frutta secca"],
        ["Struffoli", "Napoli e Campania", "Palline fritte con il miele"],
        ["Cartellate", "Puglia", "Rose di pasta fritta con miele o vincotto"],
        ["Certosino", "Bologna", "Dolce speziato di miele, frutta e mandorle"],
        ["Buccellati", "Sicilia", "Pasta ripiena di fichi e frutta secca"],
        ["Pandolce", "Genova", "Pane dolce con frutta secca"],
      ],
    ),
    p("Panettone e pandoro industriali fanno parte del Natale di oggi; quelli artigianali di forni e pasticcerie sono un altro prodotto, e molte famiglie comprano entrambi. Il panettone, poi, si mangia fino a gennaio inoltrato."),
    {
      type: "image",
      src: `${IMG}/naples-christmas-sweets.webp`,
      alt: "Un mucchio di biscotti natalizi lucidi a forma di ciambella con mandorle, su un vassoio",
      caption: "Biscotti di Natale a Napoli, dove roccocò e mustaccioli arrivano puntuali ogni dicembre.",
      credit: unsplash("Emiliano Vittoriosi", "emilianovittoriosi"),
    },

    // ——— 16 ———
    h2("I dolci di Pasqua"),
    p("La Pasqua chiude la Quaresima, e la festeggiano dolci con uova, ricotta e formaggio fresco. Un dolce pasquale nazionale non c'è:"),
    ul(
      "**Colomba** — lievitato a forma di colomba con scorze candite e glassa di mandorle, diffuso ovunque e regolato dal decreto del 2005.",
      "**Pastiera** — Napoli e Campania.",
      "**Cassata** — Sicilia, soprattutto Palermo, dove le pasticcerie preparano anche gli agnelli di pasta reale.",
      "**Pardulas** — Sardegna.",
      "**Pani e biscotti pasquali** — in molte case del Sud si preparano pani dolci o biscotti con le uova intere incastonate nell'impasto, con nomi diversi da paese a paese.",
    ),

    // ——— 17 ———
    h2("I dolci di Carnevale"),
    p("Il Carnevale, prima della Quaresima, è la stagione del fritto. Quasi ogni regione ha le sue frittelle, e il dolce più diffuso — nastri sottili di pasta fritti e spolverati di zucchero — ha decine di nomi, documentati dai linguisti di Treccani e dell'Accademia della Crusca."),
    table(
      ["Nome", "Dove si sente"],
      [
        ["Chiacchiere", "Lombardia, Campania e gran parte del Sud"],
        ["Frappe", "Lazio, Umbria, Marche"],
        ["Cenci", "Toscana"],
        ["Bugie", "Piemonte e Liguria"],
        ["Galani", "Venezia e Veneto"],
        ["Crostoli", "Trentino, Friuli e parte del Veneto"],
      ],
      "Stessa famiglia di dolci, nomi diversi e piccole differenze di spessore e forma.",
    ),
    p("Le **castagnole**, palline di pasta fritta, e le **fritole** veneziane sono gli altri classici; a Firenze c'è la schiacciata alla fiorentina."),
    {
      type: "image",
      src: `${IMG}/venice-carnival-costume.webp`,
      alt: "Una persona in un elaborato costume di Carnevale veneziano rosso e oro, con maschera bianca, su un balcone di pietra",
      caption: "Carnevale a Venezia, la stagione di fritole e galani.",
      credit: unsplash("Graham Guenther", "pidgey"),
    },

    // ——— 18 ———
    h2("Santi, feste e ricorrenze"),
    p("Molti dolci locali sono legati a un santo o a una festa, anche se non tutti hanno un'origine religiosa e alcuni legami sono stati costruiti dopo."),
    ul(
      "**San Giuseppe, 19 marzo** — le zeppole a Napoli, frittelle e bignè a Roma.",
      "**Commemorazione dei defunti, 2 novembre** — la frutta martorana in Sicilia e le \"ossa dei morti\" in molte regioni.",
      "**Santa Lucia, 13 dicembre** — la cuccìa, grano cotto con ricotta, a Palermo.",
      "**Matrimoni e battesimi** — i confetti, per tradizione quelli di Sulmona.",
      "**Autunno e vendemmia** — dolci di castagne come il castagnaccio in Appennino e dolci di mosto.",
    ),

    // ——— 19 ———
    h2("Gli ingredienti che fanno i dolci italiani"),
    table(
      ["Ingrediente", "Regioni e tradizioni", "Usi più comuni"],
      [
        ["Ricotta", "Sicilia, Campania, Lazio, Sardegna", "Cannoli, cassata, sfogliatella, pastiera, crostate"],
        ["Mandorle", "Sicilia, Puglia, Sardegna, Toscana", "Pasta reale, amaretti, cantucci, ricciarelli, torrone"],
        ["Nocciole", "Piemonte, Lazio, Campania", "Gianduia, baci di dama, tozzetti"],
        ["Pistacchi", "Sicilia (Bronte)", "Creme, gelato, paste"],
        ["Agrumi", "Sicilia, Campania, Calabria", "Canditi, creme al limone, scorze"],
        ["Castagne", "Toscana, Liguria, Piemonte, Appennino", "Castagnaccio, dolci di farina di castagne"],
        ["Miele", "Tutta Italia; forte in Sardegna e al Sud", "Struffoli, panforte, torrone, seadas"],
        ["Cioccolato", "Torino, Modica", "Gianduiotti, tavolette di Modica, bicerin"],
        ["Mascarpone", "Lombardia e Nord", "Tiramisù e creme"],
        ["Caffè", "Tutta Italia", "Tiramisù, affogato, granita"],
        ["Frutta secca", "Sud, Siena, Genova", "Buccellati, panforte, pandolce"],
        ["Semola", "Campania, Sardegna", "Ripieno della sfogliatella, dolci sardi"],
      ],
      "Nessun ingrediente appartiene a una sola regione.",
    ),

    // ——— 20 ———
    h2("Ricotta, mandorle, pistacchi e agrumi"),
    p("Questi quattro ingredienti spiegano buona parte della pasticceria del Sud e delle isole. La **ricotta** — di pecora in Sicilia e Sardegna, vaccina, ovina o di bufala in Campania e nel Lazio — si zucchera e si aromatizza per i ripieni; deve essere freschissima, ed è per questo che i dolci di ricotta vanno comprati dove si fanno ogni giorno. La **pasta di mandorle** diventa frutta martorana, paste morbide e base di tanti dolci delle feste. Il **pistacchio** è passato da specialità siciliana a gusto di moda ovunque. Gli **agrumi** compaiono canditi in cassata, sfogliatella e panettone, e freschi nelle creme al limone. Sui prodotti — pistacchio di Bronte, arance rosse, limoni della costiera — vedi [Tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),

    // ——— 21 ———
    h2("Il cioccolato"),
    p("Le due tradizioni del cioccolato più note in Italia non potrebbero essere più diverse. Quella di **Torino** è liscia e ricca di nocciole: gianduia, gianduiotti e una lunga storia di cioccolatieri e caffè. Quella di **Modica**, nella Sicilia sud-orientale, è granulosa: secondo il consorzio di tutela, il cioccolato si lavora a bassa temperatura senza concaggio, così i cristalli di zucchero restano interi. Il Cioccolato di Modica è IGP dal 2018. Chi parla di metodi \"antichi e immutati\" fa più marketing che storia."),

    // ——— 22 ———
    h2("Dolci e caffè"),
    p("Molti dolci italiani non si mangiano a fine cena, ma con il caffè: cornetto o maritozzo con il cappuccino a colazione, una pasta con l'espresso a metà mattina, biscotti da inzuppare a casa. Al ristorante, dopo il dolce arriva spesso il caffè, e talvolta un amaro. Bar e pasticceria si sovrappongono: molte pasticcerie hanno il banco del caffè. Come ordinare è spiegato in [Il caffè italiano](/it/cibo/caffe-italiano)."),

    // ——— 23 ———
    h2("Gelato, semifreddo, granita e sorbetto"),
    ul(
      "**Gelato** — più denso e servito meno freddo di molti gelati stranieri.",
      "**Sorbetto** — gelato di frutta senza latte.",
      "**Granita** — ghiaccio semicongelato, più o meno cremoso, specialità siciliana.",
      "**Semifreddo** — dolce di panna e uova congelato in stampo e servito a fette.",
      "**Affogato** — gelato \"annegato\" in un caffè espresso.",
    ),

    // ——— 24 ———
    h2("Un dolce, tanti nomi"),
    p("Lo stesso dolce può avere più nomi, e lo stesso nome può indicare dolci diversi. Le sfoglie di Carnevale sono il caso più noto, ma non l'unico:"),
    ul(
      "**Cannoli** — in Sicilia, cialda fritta con ricotta; in molte pasticcerie del Nord, cornetto di pasta sfoglia ripieno di crema o panna.",
      "**Sfogliatella** — a Napoli, la conchiglia ripiena di ricotta; altrove può indicare una generica pasta sfoglia.",
      "**Brioche / cornetto** — lo stesso dolce della colazione al Nord e al Centro; in Sicilia la brioche è il panino tondo col tuppo.",
      "**Seadas** — nel registro europeo sono tutelate sei grafie, specchio delle varianti sarde.",
      "**Castagnole** — anche qui nomi e ripieni cambiano da zona a zona.",
    ),
    p("\"Tradizionale\" raramente significa una ricetta sola. Famiglie, paesi e pasticcerie hanno la loro versione, e discutere su quale sia quella giusta fa parte della tradizione."),

    // ——— 25 ———
    h2("Pasticceria tradizionale e contemporanea"),
    p("I pasticcieri di oggi reinterpretano i dolci della tradizione: creme più leggere, meno zucchero, gusti nuovi, monoporzioni dei grandi dolci delle feste, presentazioni curate. Allo stesso tempo molte pasticcerie di famiglia custodiscono ricette e tecniche tramandate da generazioni, e il sistema dei marchi europei e gli elenchi regionali dei prodotti tradizionali documentano come certi dolci vanno fatti. Le due cose convivono: nella stessa vetrina possono stare la pastiera di famiglia e la mousse moderna, e i clienti comprano entrambe."),

    // ——— 26 ———
    h2("Cosa assaggiare, meta per meta"),
    h3("Sicilia"),
    p("Cannoli riempiti al momento, una fetta di cassata, frutta martorana, paste di mandorla e, d'estate, granita con brioche."),
    h3("Napoli e Costiera"),
    p("Sfogliatella riccia o frolla, babà, pastiera (soprattutto a Pasqua), struffoli a Natale e delizia al limone in costiera."),
    h3("Roma"),
    p("Un maritozzo con la panna a colazione, una crostata di ricotta e le frappe a Carnevale."),
    h3("Torino"),
    p("Gianduiotti, baci di dama, un bonet a fine pasto e un bicerin in un caffè storico."),
    h3("Toscana"),
    p("Cantucci e vin santo, panforte e ricciarelli a Siena, castagnaccio nei mesi freddi."),
    h3("Venezia"),
    p("Fritole e galani a Carnevale, baicoli e zaleti con il caffè, e il tiramisù, da qualunque parte venga."),
    h3("Sardegna"),
    p("Seadas con il miele, pardulas a Pasqua e amaretti di mandorle."),
    {
      type: "image",
      src: `${IMG}/verona-biscuits.webp`,
      alt: "Un mucchio di biscotti croccanti con mandorle intere su una bancarella di mercato a Verona",
      caption: "Biscotti alle mandorle in vendita a Verona.",
      credit: unsplash("Mike Houser", "mike_romeo_hotel"),
    },

    // ——— 27 ———
    h2("Le parole della pasticceria"),
    p("Poche parole per ordinare, utili soprattutto a chi accompagna ospiti stranieri:"),
    table(
      ["Parola", "Significato", "Quando serve"],
      [
        ["Dolce", "Dessert, dolce", "\"Cosa avete di dolce?\""],
        ["Pasticceria", "Il negozio del pasticciere", "Dove si fanno e si vendono i dolci"],
        ["Pasticcino / mignon", "Dolcetto monoporzione", "Spesso venduto a peso, sul vassoio"],
        ["Fetta", "Porzione tagliata", "\"Una fetta di cassata\""],
        ["Porzione", "Porzione", "Per torte e crostate"],
        ["A peso / all'etto", "A peso / ogni 100 g", "Biscotti e pasticcini"],
        ["Da portare via", "Da asporto", "Il negozio incarta"],
        ["Al banco / al tavolo", "In piedi / seduti", "I prezzi possono cambiare"],
        ["Vassoio", "Il vassoio incartato", "Per le visite e il pranzo della domenica"],
      ],
    ),

    // ——— 28 ———
    h2("Il galateo dei dolci"),
    ul(
      "**In pasticceria** si indica, si ordina e si mangia al banco o si porta via; in alcune si paga prima alla cassa.",
      "**Sedersi** in un bar o in una pasticceria può costare di più: conviene guardare il listino.",
      "**Portare un vassoio di pasticcini** quando si è invitati, soprattutto a pranzo la domenica, è un'usanza radicata.",
      "**Dividere un dolce** al ristorante va benissimo: basta chiedere due cucchiaini.",
      "**I dolci di stagione sono di stagione**: pastiera, colomba e fritole fuori periodo si trovano poco, ed è anche questo il loro fascino.",
      "**La freschezza conta**: i dolci con ricotta e panna vanno mangiati in giornata.",
    ),
    tip("Al ristorante i dolci sono spesso in una carta a parte o li elenca il cameriere. Vale la pena chiedere quali sono fatti in casa.", "Al ristorante"),

    // ——— 29 ———
    h2("Piccolo glossario"),
    table(
      ["Termine", "Significato"],
      [
        ["Cannolo", "In Sicilia, cialda fritta ripiena di ricotta"],
        ["Cassata", "Torta siciliana di ricotta, pan di Spagna e pasta reale"],
        ["Pasta reale", "Pasta di mandorle, marzapane"],
        ["Sfogliatella", "Conchiglia napoletana ripiena di ricotta"],
        ["Babà", "Dolce lievitato bagnato nel rum, Napoli"],
        ["Pastiera", "Crostata pasquale napoletana di ricotta e grano"],
        ["Struffoli", "Palline fritte con il miele, Napoli"],
        ["Maritozzo", "Panino dolce romano con la panna"],
        ["Cantucci", "Biscotti toscani alle mandorle"],
        ["Panforte", "Dolce senese di miele, frutta secca e spezie"],
        ["Ricciarelli", "Morbidi biscotti senesi di mandorle"],
        ["Castagnaccio", "Torta di farina di castagne"],
        ["Gianduiotto", "Cioccolatino torinese alle nocciole"],
        ["Baci di dama", "Biscottini uniti dal cioccolato"],
        ["Fritole", "Frittelle del Carnevale veneziano"],
        ["Chiacchiere / frappe / cenci", "Sfoglie fritte di Carnevale"],
        ["Castagnole", "Palline fritte di Carnevale"],
        ["Seadas", "Dolce sardo di formaggio e miele"],
        ["Pardulas", "Dolcetti sardi di ricotta o formaggio"],
        ["Torrone", "Dolce di miele, albume e frutta secca"],
      ],
    ),
    p("Per il resto del viaggio, c'è la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia); per i vini da dessert, [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
  ],

  faqs: [
    { question: "Quali sono i dolci tradizionali italiani?", answer: "Dolci regionali nati da ingredienti locali e dal calendario delle feste: dai cannoli siciliani alla sfogliatella napoletana, dal panforte senese ai gianduiotti torinesi e alle fritole veneziane." },
    { question: "Perché i dolci italiani cambiano tanto da regione a regione?", answer: "Per gli ingredienti diversi, i secoli di Stati separati, le tradizioni di monasteri e corti e le feste locali. Molti dolci sono legati a una sola città." },
    { question: "Quali sono i dolci tipici siciliani?", answer: "Cannoli, cassata, frutta martorana, dolci di mandorla e pistacchio, e granita con brioche. Ricotta, mandorle, pistacchi e agrumi sono il filo che li unisce." },
    { question: "Che differenza c'è tra cannolo e cassata?", answer: "Entrambi usano la ricotta zuccherata: il cannolo è una cialda fritta, la cassata una torta di pan di Spagna e ricotta ricoperta di pasta reale e canditi." },
    { question: "Che cos'è la sfogliatella?", answer: "Un dolce napoletano a forma di conchiglia ripieno di ricotta, semola e canditi, riccio o frolla." },
    { question: "Che cos'è la pastiera?", answer: "Il dolce pasquale napoletano: frolla ripiena di ricotta, grano cotto, uova e acqua di fiori d'arancio." },
    { question: "Quali sono i dolci di Natale tradizionali?", answer: "Panettone e pandoro in tutta Italia, e poi panforte a Siena, struffoli a Napoli, torrone, cartellate in Puglia e certosino a Bologna." },
    { question: "Quali sono i dolci di Pasqua tradizionali?", answer: "La colomba ovunque, la pastiera in Campania, la cassata in Sicilia, le pardulas in Sardegna e tanti pani pasquali locali." },
    { question: "Quali sono i dolci di Carnevale?", answer: "Le sfoglie fritte (chiacchiere, frappe, cenci, bugie, galani, crostoli), le castagnole e, a Venezia, le fritole." },
    { question: "Che differenza c'è tra panettone e pandoro?", answer: "Il panettone milanese ha uvetta e canditi; il pandoro veronese è semplice, burroso e a forma di stella." },
    { question: "Il tiramisù è veneto o friulano?", answer: "L'origine è contesa. Nel 2017 due versioni friulane sono entrate nell'elenco dei prodotti tradizionali; nel 2024 è stato aggiunto il Tiramisù di Treviso per il Veneto." },
    { question: "Che cos'è il gianduia?", answer: "Una pasta liscia di cioccolato e nocciole macinate nata a Torino, base del gianduiotto." },
    { question: "Che cosa sono le seadas?", answer: "Dolci sardi ripieni di formaggio fresco, fritti e serviti caldi con il miele. Sono IGP dal 2023." },
    { question: "Quali dolci si mangiano con il caffè?", answer: "Cornetti e maritozzi con il cappuccino a colazione, e biscotti come cantucci o baicoli da inzuppare." },
    { question: "Perché lo stesso dolce ha nomi diversi?", answer: "Dialetti e tradizioni locali li hanno battezzati in modo indipendente: così un dolce può avere molti nomi, e un nome come \"cannolo\" può indicare dolci diversi." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "DOP, IGP e date di registrazione" },
    { label: "Regione Campania — prodotti tradizionali: dolci", url: "https://agricoltura.regione.campania.it/tipici/tradizionali-dolci.htm", note: "sfogliatella, pastiera, babà, struffoli, delizia al limone" },
    { label: "Arsial — Il maritozzo tra i nuovi PAT del Lazio", url: "https://www.arsial.it/riconosciuti-dal-masaf-nove-nuovi-pat-del-lazio-ce-anche-il-maritozzo/" },
    { label: "Veneto turismo — Frittelle alla veneziana", url: "https://www.veneto.eu/IT/Frittelle-veneziana/" },
    { label: "Regione Veneto — Il tiramisù di Treviso nell'elenco dei prodotti tradizionali (2024)", url: "https://www.regione.veneto.it/article-detail?articleId=13984088" },
    { label: "SardegnaTurismo — I dolci della tradizione", url: "https://www.sardegnaturismo.it/it/ogni-festa-e-buona-con-i-dolci-della-tradizione" },
    { label: "Piemonte Agri Qualità — Baci di dama di Tortona", url: "https://www.piemonteagri.it/qualita/it/prodotti/paste-e-dolci/272-baci-di-dama-di-tortona" },
    { label: "Caffarel — Il Gianduiotto", url: "https://caffarel.com/gianduiotto/", note: "storia aziendale" },
    { label: "Bologna Welcome — Certosino di Bologna", url: "https://www.bolognawelcome.com/it/altro/ricette-e-prodotti-tipici/certosino-di-bologna" },
    { label: "Regione Toscana — Farina di Neccio della Garfagnana DOP", url: "https://www.regione.toscana.it/-/farina-di-neccio-della-garfagnana-dop" },
    { label: "Treccani — Parole e sapori di Carnevale", url: "https://www.treccani.it/magazine/lingua_italiana/articoli/scritto_e_parlato/parole_carnevale.html" },
    { label: "Gazzetta Ufficiale — Decreto 22 luglio 2005", url: "https://www.gazzettaufficiale.it/eli/id/2005/08/01/05A07670/sg", note: "panettone, pandoro e colomba" },
    { label: "Consorzio di Tutela del Cioccolato di Modica", url: "https://www.cioccolatodimodica.it/" },
    { label: "ANSA — Il tiramisù tra i prodotti tradizionali del Friuli (2017)", url: "https://www.ansa.it/canale_terraegusto/notizie/prodotti_tipici/2017/08/05/friuli-brucia-il-veneto-e-suo-il-tiramisu-tradizionale_37ade614-a40c-4886-9df2-4497db376292.html" },
  ],
};
