import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Regional Wines of Italy" — the rebuilt version of the site's short
// beginner's guide, kept at its established URL (/food/italian-regional-wines).
// It is the wine pillar; food, Sicily, desserts, coffee and markets have their
// own articles. Sources checked in September 2026: every appellation name
// against the EU eAmbrosia register (wine category); DOCG status against the
// Ministry of Agriculture's national register of vine varieties and
// denominations; the meaning of DOCG, DOC, IGT, classico, riserva, superiore
// and gran selezione against Law 238/2016 (the Testo Unico del Vino, via
// Normattiva); UNESCO for the Piedmont and Prosecco vineyard landscapes and the
// Pantelleria alberello; EU labelling rules for ingredients and nutrition
// information; and the Highway Code (art. 186) for drink-driving limits, as in
// our driving guide. No rankings, scores, prices or producer recommendations.

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

export const italianRegionalWines: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Why Italian wine is so regional"),
    answer("**Italy doesn't have one wine culture; it has many regional ones.** Every one of its 20 regions makes wine, from Alpine valleys to volcanic islands, and most rely heavily on local grape varieties that are rarely grown elsewhere. Geography, climate, centuries of separate states and local food traditions mean that a Nebbiolo from Piedmont, a Sangiovese from Tuscany and a Nerello Mascalese from Etna have little in common except the country on the label."),
    p("A few forces explain most of the variety:"),
    ul(
      "**Mountains and hills** — the Alps and the Apennines give altitude, slopes and cooler nights; much of Italy's quality viticulture is on hillsides rather than plains.",
      "**The sea and the islands** — long coastlines, Sicily, Sardinia and many small islands bring maritime air and very different conditions from inland valleys.",
      "**Soils** — from the clays and marls of the Langhe to volcanic soils on Etna, Vesuvius and Monte Vulture.",
      "**Local varieties** — Italy's national register lists hundreds of wine grape varieties, and many regions have kept their own.",
      "**History** — until 1861 the peninsula was divided among many states; trade routes, rulers and local markets shaped what was planted.",
      "**Food** — wine grew up alongside regional cooking, and local pairings still reflect that.",
    ),
    p("**Terroir** — the French word Italians also use — simply means the combination of place factors (soil, slope, altitude, climate) and human choices (grapes, methods, traditions) that make a wine taste of where it comes from. It explains a lot, but it isn't magic, and no soil guarantees a good wine."),
    p("This article is about wine. For Italy's food culture, see [Italian food traditions](/food/italian-food-traditions); for Sicily, [Sicilian food traditions](/food/sicily-food-traditions)."),
    {
      type: "facts",
      title: "Italian wine at a glance",
      rows: [
        { label: "Regions", value: "All 20 regions produce wine" },
        { label: "Classifications", value: "DOCG and DOC (EU: PDO), IGT (EU: PGI), and plain Vino" },
        { label: "Denominations", value: "More than 500 protected wine names in the EU register" },
        { label: "Key red grapes", value: "Sangiovese, Nebbiolo, Barbera, Montepulciano, Aglianico, Nero d'Avola, Primitivo" },
        { label: "Key white grapes", value: "Glera, Garganega, Verdicchio, Fiano, Vermentino, Trebbiano, Friulano" },
        { label: "Sparkling", value: "Tank-method (Prosecco, Asti) and bottle-fermented (Franciacorta, Trento, Alta Langa)" },
      ],
    },

    // ——— 2 ———
    h2("How Italian wine is classified"),
    p("Italian wine law — today Law 238/2016, the *Testo Unico del Vino* — works within the EU system of protected designations. In practice you'll see four levels on labels:"),
    table(
      ["Label term", "EU equivalent", "What it tells you"],
      [
        ["DOCG — Denominazione di Origine Controllata e Garantita", "PDO", "A protected origin with the strictest rules; must first have been a DOC (for at least seven years under the 2016 law); bottles carry a numbered state band"],
        ["DOC — Denominazione di Origine Controllata", "PDO", "A protected origin with a defined area, permitted grapes, yields and methods set out in its production rules (disciplinare)"],
        ["IGT — Indicazione Geografica Tipica", "PGI", "A broader geographical indication with looser rules, often a whole region (e.g. Toscana, Terre Siciliane)"],
        ["Vino", "—", "Wine without a geographical indication; may still show grape and vintage in some cases"],
      ],
      "Source: Law 238/2016, articles 28 and 33; EU eAmbrosia register.",
    ),
    p("These categories describe **origin and rules**, not a tasting score. DOCG rules are stricter and include tasting checks, but a DOC or IGT wine can be every bit as good — some famous Tuscan wines were first sold outside the DOC system entirely. The EU register lists more than 500 Italian wine names; the Ministry's list shows more than 70 DOCGs, over 300 DOCs and over 100 IGTs."),
    {
      type: "image",
      src: `${IMG}/serralunga-langhe.webp`,
      alt: "The castle and village of Serralunga d'Alba on a ridge above rows of vineyards in the Langhe, with the Alps in the distance",
      caption: "Serralunga d'Alba, in the Barolo area of the Langhe, with the Alps beyond.",
      credit: unsplash("Luis van den Bos", "bossoptics"),
      wide: true,
    },

    // ——— 3 ———
    h2("A region-by-region overview"),
    table(
      ["Region", "Representative denominations", "Important grapes", "Typical styles"],
      [
        ["Valle d'Aosta", "Valle d'Aosta", "Petit Rouge, Fumin, Prié Blanc", "Mountain reds and whites"],
        ["Piedmont", "Barolo, Barbaresco, Barbera d'Asti, Asti, Roero", "Nebbiolo, Barbera, Dolcetto, Moscato, Arneis", "Structured reds, sweet sparkling"],
        ["Lombardy", "Franciacorta, Valtellina Superiore, Oltrepò Pavese", "Chardonnay, Pinot Nero, Nebbiolo (Chiavennasca)", "Bottle-fermented sparkling, mountain reds"],
        ["Trentino-Alto Adige", "Trento, Trentino, Alto Adige, Teroldego Rotaliano", "Lagrein, Schiava, Teroldego, Gewürztraminer, Pinot Grigio", "Alpine whites and reds, sparkling"],
        ["Veneto", "Prosecco, Conegliano Valdobbiadene, Valpolicella, Amarone, Soave", "Glera, Corvina, Garganega", "Sparkling, dried-grape reds, whites"],
        ["Friuli Venezia Giulia", "Collio, Friuli Colli Orientali, Carso", "Friulano, Ribolla Gialla, Pinot Grigio, Refosco", "Whites, sweet Picolit and Ramandolo"],
        ["Liguria", "Cinque Terre, Riviera Ligure di Ponente, Colli di Luni", "Vermentino, Pigato, Bosco", "Coastal whites, sweet Sciacchetrà"],
        ["Emilia-Romagna", "Lambrusco di Sorbara, Romagna, Romagna Albana", "Lambrusco, Sangiovese, Albana, Pignoletto", "Sparkling reds, still reds and whites"],
        ["Tuscany", "Chianti Classico, Chianti, Brunello di Montalcino, Vino Nobile di Montepulciano, Bolgheri", "Sangiovese, Vernaccia, international varieties on the coast", "Reds, Vin Santo"],
        ["Umbria", "Montefalco Sagrantino, Orvieto, Torgiano", "Sagrantino, Sangiovese, Grechetto", "Powerful reds, whites"],
        ["Marche", "Verdicchio dei Castelli di Jesi, Rosso Cònero, Offida", "Verdicchio, Montepulciano, Pecorino", "Whites, reds"],
        ["Lazio", "Frascati, Cesanese del Piglio, Est! Est!! Est!!! di Montefiascone", "Malvasia, Trebbiano, Cesanese", "Whites, reds"],
        ["Abruzzo", "Montepulciano d'Abruzzo, Cerasuolo d'Abruzzo, Trebbiano d'Abruzzo", "Montepulciano, Trebbiano, Pecorino", "Reds, rosé, whites"],
        ["Molise", "Molise, Tintilia del Molise", "Tintilia, Montepulciano", "Reds"],
        ["Campania", "Taurasi, Fiano di Avellino, Greco di Tufo, Falanghina del Sannio, Vesuvio", "Aglianico, Fiano, Greco, Falanghina", "Reds and whites, some volcanic"],
        ["Puglia", "Primitivo di Manduria, Salice Salentino, Castel del Monte", "Primitivo, Negroamaro, Nero di Troia", "Reds, rosé"],
        ["Basilicata", "Aglianico del Vulture", "Aglianico", "Volcanic reds"],
        ["Calabria", "Cirò, Greco di Bianco", "Gaglioppo, Greco", "Reds, sweet whites"],
        ["Sicily", "Sicilia, Etna, Cerasuolo di Vittoria, Marsala, Pantelleria", "Nero d'Avola, Nerello Mascalese, Grillo, Carricante, Zibibbo", "Reds, whites, fortified, sweet"],
        ["Sardinia", "Cannonau di Sardegna, Vermentino di Gallura, Carignano del Sulcis", "Cannonau, Vermentino, Carignano", "Reds, whites, oxidative Vernaccia"],
      ],
      "A few examples per region; none represents a whole region. Names checked in the EU eAmbrosia register.",
    ),

    // ——— 4 ———
    h2("Piedmont"),
    p("Piedmont's best-known wines come from the hills of the **Langhe**, **Roero** and **Monferrato**, whose vineyard landscapes were inscribed on UNESCO's World Heritage List in 2014."),
    ul(
      "**Nebbiolo** — the grape of **Barolo** and **Barbaresco** (both DOCG), which are made entirely from it and aged for longer than most Italian reds. Nebbiolo also makes Roero (DOCG), Nebbiolo d'Alba and, in the north of the region, Gattinara and Ghemme.",
      "**Barbera** — Piedmont's most widely planted red, with fresh acidity; Barbera d'Asti and Nizza are DOCGs.",
      "**Dolcetto** — softer, earlier-drinking reds from Alba, Dogliani and Ovada.",
      "**Moscato** — the grape of the **Asti** DOCG, which includes both sparkling Asti and the lightly sparkling, sweet **Moscato d'Asti**.",
      "**Whites** — Arneis in the Roero, Cortese for Gavi, Erbaluce di Caluso.",
    ),
    p("Piedmontese cooking — egg-rich tajarin, agnolotti, braised meats, autumn truffles — has grown up with these wines. See our [Turin guide](/cities/turin-first-visit) for the region's capital."),
    {
      type: "image",
      src: `${IMG}/serralunga-nebbiolo-harvest.webp`,
      alt: "A vineyard worker in a red T-shirt lifting a crate of dark Nebbiolo grapes onto a stack of orange harvest crates",
      caption: "Harvesting Nebbiolo at Serralunga d'Alba, in the Barolo area.",
      credit: unsplash("Andrea Cairone", "kaicaironejpg"),
    },

    // ——— 5 ———
    h2("Tuscany"),
    p("Tuscany is Sangiovese country, but the grape gives very different wines depending on where it grows and how it's made."),
    ul(
      "**Chianti Classico** (DOCG) — from the historic zone between Florence and Siena, whose boundaries were set by a decree of 1932; it is a separate denomination from Chianti.",
      "**Chianti** (DOCG) — a larger area around the Classico zone, with sub-zones such as Rufina and Colli Senesi. Under Italian law, vineyards in the Classico zone can't be used for Chianti DOCG.",
      "**Brunello di Montalcino** (DOCG) — Sangiovese from the hill town of Montalcino, with long ageing before release; Rosso di Montalcino is its younger DOC sibling.",
      "**Vino Nobile di Montepulciano** (DOCG) — Sangiovese-based red from the town of Montepulciano, in southern Tuscany.",
      "**Vernaccia di San Gimignano** (DOCG) — a white from the towered town near Siena.",
      "**Bolgheri and the coast** — from the late 1960s and 1970s some producers made wines outside the DOC rules, often with Cabernet Sauvignon and Merlot, soon nicknamed \"Super Tuscans\". Several are now inside denominations: Bolgheri is a DOC, and Bolgheri Sassicaia has its own DOC.",
    ),
    p("Tuscany also makes **Vin Santo**, a sweet wine from dried grapes, with its own DOCs. For the city, see [Florence for first-timers](/cities/florence-for-first-timers)."),
    {
      type: "image",
      src: `${IMG}/greve-in-chianti-vineyards.webp`,
      alt: "Rows of vines in autumn colours at sunset on a hillside near Greve in Chianti, with wooded hills behind",
      caption: "Vineyards near Greve in Chianti, in the Chianti Classico zone.",
      credit: unsplash("Ken Shono", "kenshono"),
    },

    // ——— 6 ———
    h2("Veneto"),
    ul(
      "**Prosecco** — sparkling wine made mainly from the **Glera** grape. The Prosecco DOC covers a wide area of the Veneto and Friuli Venezia Giulia; the hillside **Conegliano Valdobbiadene** and **Asolo** zones are DOCGs. Most Prosecco is made by the tank (Martinotti or Charmat) method, and it comes in several levels of sweetness and fizz. The Prosecco hills of Conegliano and Valdobbiadene are a UNESCO World Heritage Site (2019).",
      "**Valpolicella** — the hills north of Verona, where Corvina and related grapes make light reds (Valpolicella), fuller **Ripasso**, and wines from dried grapes.",
      "**Amarone della Valpolicella** (DOCG) — made from grapes dried for months before fermentation (*appassimento*) and fermented to a dry, concentrated red. **Recioto della Valpolicella** (DOCG) is its sweet counterpart.",
      "**Soave** — white wine from the Garganega grape, east of Verona; Recioto di Soave is the sweet version.",
      "**Bardolino** — light reds and rosés from the shores of Lake Garda.",
    ),
    p("See our [Verona guide](/cities/verona-first-visit) for Valpolicella and Soave, and [our Venice guide](/cities/venice-quieter-neighbourhoods) for the city's wine bars."),
    {
      type: "image",
      src: `${IMG}/valdobbiadene-prosecco-hills.webp`,
      alt: "Steep green hills covered in vineyard rows around Valdobbiadene, seen from above in soft morning light",
      caption: "The Prosecco hills around Valdobbiadene, a UNESCO World Heritage Site since 2019.",
      credit: unsplash("Alberto Caliman", "supercaliman"),
    },

    // ——— 7 ———
    h2("Friuli Venezia Giulia"),
    p("Italy's north-eastern corner is known above all for white wines. **Friulano** (the grape once labelled Tocai friulano), **Ribolla Gialla**, **Pinot Grigio** and **Sauvignon** are widely grown in the **Collio** and **Friuli Colli Orientali** DOCs, near the Slovenian border; **Refosco** and **Schioppettino** are local reds; and **Picolit** and **Ramandolo** are sweet whites with DOCG status. The Carso DOC, on the limestone plateau near Trieste, has Terrano and Vitovska. Winemaking traditions here are shared across the border with Slovenia, and some producers are known for long-macerated \"orange\" whites."),

    // ——— 8 ———
    h2("Trentino-Alto Adige"),
    p("These are two autonomous provinces with distinct wine identities. **Alto Adige / Südtirol** (Bolzano), bilingual Italian and German, has its own DOC — labels may say *Südtirol* — and mountain vineyards producing Gewürztraminer, Pinot Grigio, Pinot Bianco, Sauvignon and the local reds **Lagrein** and **Schiava** (Vernatsch). **Trentino** (Trento) has the Trentino DOC, the Teroldego Rotaliano DOC for the **Teroldego** grape, and **Trento DOC**, a bottle-fermented sparkling wine promoted collectively as *Trentodoc*."),
    {
      type: "image",
      src: `${IMG}/south-tyrol-hocheppan-vineyards.webp`,
      alt: "Hocheppan castle on a wooded crag above a wide valley of vineyards and orchards in South Tyrol, with limestone mountains beyond",
      caption: "Vineyards below Hocheppan castle, near Bolzano, in Alto Adige / Südtirol.",
      credit: unsplash("Patrick Federi", "federi"),
    },

    // ——— 9 ———
    h2("Lombardy"),
    ul(
      "**Franciacorta** (DOCG) — bottle-fermented sparkling wine from the hills south of Lake Iseo, mainly from Chardonnay and Pinot Nero.",
      "**Valtellina** — steep terraced vineyards in the Alpine valley of the Adda, where Nebbiolo is called **Chiavennasca**; Valtellina Superiore and Sforzato (Sfursat, from dried grapes) di Valtellina are DOCGs.",
      "**Oltrepò Pavese** — the hills south of Pavia, with Pinot Nero, Croatina (for Bonarda) and a metodo classico DOCG.",
      "**Lugana** — white wines from the southern shore of Lake Garda, shared with the Veneto.",
    ),
    p("See [Milan beyond the Duomo](/cities/milan-beyond-the-duomo) for the city's wine bars."),

    // ——— 10 ———
    h2("Liguria"),
    p("Liguria's vineyards cling to terraces between mountains and sea, which keeps production small. **Vermentino** and **Pigato** are the main whites of the Riviera Ligure di Ponente; the Colli di Luni DOC, near the Tuscan border, also focuses on Vermentino. The **Cinque Terre** DOC includes dry whites and **Sciacchetrà**, a sweet wine from dried grapes grown on steep terraces above the sea."),

    // ——— 11 ———
    h2("Emilia-Romagna"),
    p("**Lambrusco** is a family of grapes and several DOCs rather than one wine — Lambrusco di Sorbara, Lambrusco Grasparossa di Castelvetro and Lambrusco Salamino di Santa Croce among them — and styles range from dry to sweet, pale to deep red, usually sparkling. It's the traditional partner of the region's cured meats and rich pasta. Romagna has **Sangiovese** (Romagna DOC), **Albana** (Romagna Albana, DOCG) and, near Bologna, Colli Bolognesi Pignoletto (DOCG). See [Bologna in two days](/cities/bologna-in-two-days)."),
    {
      type: "image",
      src: `${IMG}/val-dorcia-wine-tasting.webp`,
      alt: "A candlelit table set for a wine tasting, with rows of glasses, a bottle, and plates of cured meats and bruschetta",
      caption: "A wine tasting with local food in the Val d'Orcia, Tuscany.",
      credit: unsplash("Meg von Haartman", "traveleroohlala"),
    },

    // ——— 12 ———
    h2("Central Italy: Marche, Umbria, Lazio"),
    h3("Marche"),
    p("On the Adriatic side, **Verdicchio** is the signature white: Verdicchio dei Castelli di Jesi and Verdicchio di Matelica, with DOCG status for their Riserva versions. The coast near Ancona grows **Montepulciano** for Rosso Cònero (DOC) and Cònero (DOCG); Rosso Piceno blends Montepulciano and Sangiovese; and the Offida DOCG includes whites from the **Pecorino** grape."),
    h3("Umbria"),
    p("**Sagrantino** makes dense, tannic reds in the Montefalco Sagrantino DOCG; Sangiovese is important around Torgiano and Montefalco; and **Orvieto**, based on Grechetto and Trebbiano, is Umbria's best-known white. The wines suit a cuisine of pork, legumes, truffles and grilled meats."),
    h3("Lazio"),
    p("The hills south-east of Rome make **Frascati**, a white from Malvasia and Trebbiano, with Frascati Superiore and the sweet Cannellino di Frascati as DOCGs. **Cesanese** is the local red grape, with the Cesanese del Piglio DOCG. North of Rome, **Est! Est!! Est!!! di Montefiascone** takes its unusual name from a legend about a travelling bishop's servant marking good inns — a story, not a documented fact. See [Rome in three days](/guides/rome-in-three-days)."),

    // ——— 13 ———
    h2("Abruzzo and Molise"),
    p("**Montepulciano d'Abruzzo** is a red wine made from the **Montepulciano grape**. It has nothing to do with **Vino Nobile di Montepulciano**, which is made mainly from Sangiovese around the **town** of Montepulciano in Tuscany. Abruzzo also makes **Cerasuolo d'Abruzzo**, a deep-pink rosé from Montepulciano grapes, and **Trebbiano d'Abruzzo**; the Colline Teramane area has DOCG status. Neighbouring Molise has its own grape, **Tintilia**, with a dedicated DOC."),

    // ——— 14 ———
    h2("Campania"),
    p("Campania has some of southern Italy's most distinctive wines. **Aglianico** makes **Taurasi** and Aglianico del Taburno (both DOCG), inland in Irpinia and the Sannio; the whites **Fiano di Avellino** and **Greco di Tufo** are DOCGs; and **Falanghina** is widely grown, notably in the Sannio. Volcanic soils matter here too: the **Vesuvio** DOC grows on the slopes of the volcano, and **Campi Flegrei** on the volcanic fields west of Naples. On the Amalfi Coast, small terraced vineyards grow local varieties. See [Naples for first-time visitors](/cities/naples-first-visit)."),
    {
      type: "image",
      src: `${IMG}/ravello-terraced-vineyards.webp`,
      alt: "Terraced vineyards and vegetable gardens below the hillside village of Ravello on the Amalfi Coast",
      caption: "Terraced vineyards below Ravello, on the Amalfi Coast.",
      credit: unsplash("Ian Mackey", "ianmackey"),
    },

    // ——— 15 ———
    h2("Puglia, Basilicata and Calabria"),
    h3("Puglia"),
    p("Puglia's hot, flat south and cooler, higher north make different wines. **Primitivo**, which DNA studies have shown to be the same variety as California's Zinfandel, is central to Primitivo di Manduria (DOC) and Gioia del Colle; **Negroamaro** dominates the Salento, including Salice Salentino; and **Nero di Troia** is grown in the north, around Castel del Monte, which has three DOCGs. Rosé has a long tradition here, and **Verdeca** is a local white grape. Production ranges from large cooperatives to small estates."),
    {
      type: "image",
      src: `${IMG}/puglia-grape-harvest.webp`,
      alt: "Bunches of pale green grapes in a yellow plastic crate on reddish soil during the harvest in Puglia",
      caption: "White grapes at harvest time in Puglia.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Basilicata"),
    p("Basilicata's key wine is **Aglianico del Vulture**, grown on the slopes of Monte Vulture, an extinct volcano; its Superiore version is a DOCG."),
    h3("Calabria"),
    p("Calabria's best-known red is **Cirò**, made mainly from the **Gaglioppo** grape on the Ionian coast; **Greco di Bianco** is a sweet white from the far south."),

    // ——— 16 ———
    h2("Sicily"),
    p("Sicily is one of Italy's largest wine regions, and its island geography gives it everything from coastal plains to high volcanic slopes. Key names include the island-wide **Sicilia** DOC and **Terre Siciliane** IGT; **Nero d'Avola**, the most widely grown red; **Grillo** and **Catarratto** among the whites; **Cerasuolo di Vittoria**, a blend of Nero d'Avola and Frappato and Sicily's only DOCG; and **Etna**, where Nerello Mascalese reds and Carricante whites grow on the volcano's slopes. **Marsala** is a fortified wine from the province of Trapani, and on Pantelleria the **Zibibbo** grape (Moscato d'Alessandria) makes sweet passito wines; the island's traditional head-trained bush vines (*vite ad alberello*) were inscribed by UNESCO as intangible cultural heritage in 2014. For food, see [Sicilian food traditions](/food/sicily-food-traditions) and our [Palermo guide](/cities/palermo-markets-monuments)."),
    {
      type: "image",
      src: `${IMG}/etna-wine-bottle.webp`,
      alt: "A green bottle of Etna white wine with a cream label on a dark table beside green leaves",
      caption: "An Etna white wine. The label names the producer, the denomination (Etna DOC) and the vintage.",
      credit: unsplash("Egor Myznik", "vonshnauzer"),
    },

    // ——— 17 ———
    h2("Sardinia"),
    p("Sardinia has its own set of grapes. **Cannonau** (Cannonau di Sardegna DOC) is genetically the same variety as Grenache; where it originated is debated. **Vermentino** makes crisp whites across the island, and Vermentino di Gallura in the north-east is Sardinia's only DOCG. **Carignano del Sulcis** comes from the south-west, and **Vernaccia di Oristano** is a distinctive wine aged in wood, where it develops oxidative flavours. Claims linking Cannonau to Sardinian longevity are popular but not established by evidence."),

    // ——— 18 ———
    h2("Valle d'Aosta"),
    p("Italy's smallest region has a single DOC, **Valle d'Aosta / Vallée d'Aoste**, with sub-zones and local grapes such as Petit Rouge, Fumin and Prié Blanc. Some of Italy's highest vineyards grow here, on the steep slopes of the Alpine valley."),

    // ——— 19 ———
    h2("Sparkling wine"),
    p("Italian sparkling wine isn't one thing. It differs in method, grape and tradition:"),
    table(
      ["Wine", "Where", "Main grapes", "Method"],
      [
        ["Prosecco", "Veneto and Friuli Venezia Giulia", "Glera", "Mostly tank (Martinotti/Charmat)"],
        ["Franciacorta", "Lombardy", "Chardonnay, Pinot Nero", "Bottle fermentation (metodo classico)"],
        ["Trento DOC (Trentodoc)", "Trentino", "Chardonnay, Pinot Nero", "Bottle fermentation"],
        ["Alta Langa", "Piedmont", "Pinot Nero, Chardonnay", "Bottle fermentation"],
        ["Oltrepò Pavese Metodo Classico", "Lombardy", "Pinot Nero", "Bottle fermentation"],
        ["Asti / Moscato d'Asti", "Piedmont", "Moscato bianco", "Tank; sweet and aromatic"],
        ["Lambrusco", "Emilia-Romagna, Lombardy", "Lambrusco varieties", "Mostly tank; also bottle-refermented"],
      ],
      "Methods and styles vary by producer and rules; no ranking implied.",
    ),

    // ——— 20 ———
    h2("Sweet, passito and fortified wines"),
    ul(
      "**Sweet** — wine with residual sugar, whatever the method.",
      "**Passito** — made from grapes dried after harvest (or on the vine) to concentrate sugar: Vin Santo in Tuscany, Recioto in the Veneto, Passito di Pantelleria in Sicily, Sciacchetrà in the Cinque Terre.",
      "**Sweet sparkling** — Moscato d'Asti and Asti in Piedmont.",
      "**Fortified** — wine with added alcohol, above all **Marsala** in Sicily.",
      "**Sweet whites** — Picolit and Ramandolo in Friuli, Greco di Bianco in Calabria, Cannellino di Frascati in Lazio.",
    ),
    p("Many of these are traditional with desserts and biscuits — Vin Santo with cantucci is a Tuscan classic. See [traditional Italian desserts](/food/traditional-italian-desserts)."),

    // ——— 21 ———
    h2("Italy's local grape varieties"),
    p("An **indigenous** or **native** variety (*vitigno autoctono*) is one historically grown in a particular area, as opposed to international varieties such as Chardonnay or Merlot. \"Indigenous\" doesn't mean ancient or unchanged, and the origins of many grapes are uncertain or disputed; DNA studies have overturned several traditional stories."),
    table(
      ["Grape", "Colour", "Mainly associated with"],
      [
        ["Nebbiolo", "Red", "Piedmont, Valtellina"],
        ["Sangiovese", "Red", "Tuscany, Romagna, Umbria, Marche"],
        ["Barbera", "Red", "Piedmont"],
        ["Montepulciano", "Red", "Abruzzo, Marche"],
        ["Aglianico", "Red", "Campania, Basilicata"],
        ["Nerello Mascalese", "Red", "Etna"],
        ["Nero d'Avola", "Red", "Sicily"],
        ["Negroamaro", "Red", "Puglia"],
        ["Cannonau", "Red", "Sardinia"],
        ["Fiano", "White", "Campania"],
        ["Greco", "White", "Campania, Calabria"],
        ["Verdicchio", "White", "Marche"],
        ["Vermentino", "White", "Sardinia, Liguria, coastal Tuscany"],
        ["Ribolla Gialla", "White", "Friuli Venezia Giulia"],
        ["Garganega", "White", "Veneto (Soave)"],
      ],
    ),

    // ——— 22 ———
    h2("Wine and Italian food"),
    p("Italians rarely think of pairing as a science; wine is part of the meal, and the local wine usually goes with the local food. A few broad principles help:"),
    h3("Seafood"),
    p("Crisp, unoaked whites from coastal areas — Vermentino, Verdicchio, Falanghina, Etna Bianco — are common with fish, though light reds and rosés also appear."),
    h3("Pasta"),
    p("Follow the sauce: tomato and acidity suit fresher reds such as Barbera or Chianti; butter and cheese suit richer whites or Lambrusco; seafood pasta suits whites."),
    h3("Cheese and cured meats"),
    p("Regional pairings are the easiest guide: Lambrusco with Emilia's cured meats and Parmigiano Reggiano, Sagrantino with aged pecorino, sweet wines with blue cheese."),
    h3("Red meat and game"),
    p("Fuller reds — Barolo, Brunello, Taurasi, Aglianico del Vulture, Amarone — are traditional with braised and roasted meats."),
    h3("Desserts"),
    p("Sweet wine with a sweet dish: Vin Santo, Moscato d'Asti, Passito di Pantelleria or Recioto. More in [Italian food traditions](/food/italian-food-traditions)."),

    // ——— 23 ———
    h2("Visiting wine regions"),
    p("Wine tourism is well established in Italy, and since 2019 a ministerial decree has set basic standards for wine-tourism activities. Ways visitors encounter wine:"),
    ul(
      "**Wineries (cantine)** — many offer tastings and cellar visits, usually by appointment.",
      "**Enoteche** — wine shops and wine bars, often with tastings by the glass.",
      "**Wine roads (strade del vino)** — signposted routes linking wineries, restaurants and villages.",
      "**Agriturismi** — farm stays, many producing their own wine.",
      "**Harvest season** — roughly August to October, depending on region and grape; some wineries welcome visitors, others are too busy.",
      "**Organised tours** — the simplest way to taste without driving.",
    ),
    tip("If you're tasting, don't drive. Italy's general limit is 0.5 g/l of blood alcohol, and zero for drivers under 21 and in their first three years after passing their test. Use a tour, a taxi, public transport or a designated non-drinking driver. See our [driving guide](/guides/driving-in-italy).", "Plan the transport first"),
    {
      type: "image",
      src: `${IMG}/radicofani-wine-shop.webp`,
      alt: "Rush-seated wooden chairs and a small table in front of shelves of wine bottles in a wine shop in Radicofani, Tuscany",
      caption: "A wine shop and tasting room in Radicofani, southern Tuscany.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 24 ———
    h2("How wine tasting works"),
    p("You don't need any training to enjoy a tasting. A host will usually guide you through a few simple steps:"),
    ul(
      "**Appearance** — colour and depth: pale or deep, young or older.",
      "**Aroma** — swirl and smell: fruit, flowers, herbs, spice, wood.",
      "**Taste** — sweetness, and **acidity**, the freshness that makes your mouth water.",
      "**Tannin** — the drying grip in red wines, from grape skins and wood.",
      "**Body** — how light or full the wine feels.",
      "**Finish** — how long the flavour lasts after you swallow.",
    ),
    p("Spitting is normal at tastings, especially if you're tasting several wines."),

    // ——— 25 ———
    h2("Reading an Italian wine label"),
    ul(
      "**Producer or bottler** — the name and location of whoever made or bottled the wine.",
      "**Denomination** — the protected name (e.g. Chianti Classico) and its category (DOCG, DOC, IGT, or DOP/IGP).",
      "**Vintage (annata)** — the harvest year, when stated.",
      "**Grape variety (vitigno)** — sometimes stated, sometimes implied by the denomination.",
      "**Alcohol** — in % vol.",
      "**Volume** — e.g. 750 ml.",
      "**Origin** — the country, and any further geographical detail.",
      "**Lot number** — for traceability; DOCG wines also carry a numbered state band on the neck.",
      "**Ingredients and nutrition** — for wines produced since 8 December 2023, EU rules require this information; much of it may be given via a QR code, with the energy value on the label.",
      "**Other terms** — riserva, superiore, classico or vigna, each regulated (see below).",
    ),

    // ——— 26 ———
    h2("How to order wine"),
    table(
      ["Italian", "Meaning"],
      [
        ["\"Un calice di…\"", "A glass of…"],
        ["\"Una bottiglia di…\"", "A bottle of…"],
        ["\"Quali vini avete al calice?\"", "Which wines do you have by the glass?"],
        ["\"È fermo o frizzante?\"", "Is it still or sparkling?"],
        ["\"È secco o dolce?\"", "Is it dry or sweet?"],
        ["\"Da quale regione viene?\"", "Which region is it from?"],
        ["Vino della casa", "House wine, often local and sold by the carafe"],
        ["Carta dei vini", "Wine list"],
        ["Enoteca / mescita", "Wine shop or bar / a place pouring wine by the glass"],
      ],
    ),

    // ——— 27 ———
    h2("Responsible drinking"),
    p("Alcohol carries health risks; the World Health Organization notes that no level of drinking is safe for health. You don't need to drink to experience Italian food culture — many Italians drink little or not at all, and water, soft drinks and non-alcoholic aperitifs are always available. Never drive after drinking; use taxis, public transport or organised tours when visiting wine areas."),

    // ——— 28 ———
    h2("Common misconceptions"),
    ul(
      "**\"DOCG means better.\"** It means stricter rules and checks, not a guaranteed better bottle.",
      "**\"Montepulciano d'Abruzzo and Vino Nobile di Montepulciano are the same.\"** One is a grape in Abruzzo, the other a town in Tuscany.",
      "**\"Prosecco is all the same.\"** It varies by zone (DOC or DOCG), sweetness level and method.",
      "**\"Chianti and Chianti Classico are the same.\"** They are separate DOCGs with separate areas.",
      "**\"Italian wine is mostly red.\"** Italy makes a great deal of white, rosé, sparkling and sweet wine.",
      "**\"There's an Italian style.\"** There are many regional styles.",
      "**\"Indigenous means ancient.\"** Many local grapes have uncertain or disputed histories.",
    ),

    // ——— 29 ———
    h2("Italian wine words"),
    table(
      ["Term", "Meaning"],
      [
        ["DOCG / DOC", "Italian terms for protected designations of origin (EU: PDO)"],
        ["IGT", "Italian term for a protected geographical indication (EU: PGI)"],
        ["Denominazione", "Protected wine name"],
        ["Disciplinare", "Production rules for a denomination"],
        ["Vitigno", "Grape variety"],
        ["Vendemmia", "Harvest"],
        ["Cantina", "Winery or cellar"],
        ["Annata", "Vintage"],
        ["Classico", "Wine from the oldest, historic zone of a denomination"],
        ["Riserva", "Aged longer: under Law 238/2016, at least two years for reds and one for whites, unless older rules differ"],
        ["Superiore", "Stricter rules: lower yields and at least 0.5% higher alcohol"],
        ["Gran Selezione", "A top tier reserved for DOCG wines meeting extra conditions"],
        ["Passito", "Wine from dried grapes"],
        ["Spumante / frizzante", "Fully sparkling / lightly sparkling"],
        ["Secco / amabile / dolce", "Dry / off-dry / sweet"],
        ["Tannino / acidità", "Tannin / acidity"],
        ["Calice", "Glass (of wine)"],
      ],
    ),
    p("For planning your trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What are the main wine regions of Italy?", answer: "All 20 regions make wine. Piedmont, Tuscany, the Veneto, Sicily, Puglia and Campania are among the best known, but Friuli, Alto Adige, the Marche, Abruzzo and Sardinia all have strong traditions." },
    { question: "What is the difference between DOC and DOCG?", answer: "Both are Italian protected designations of origin. DOCG has stricter rules and checks, bottles carry a numbered state band, and a wine must first have been a DOC. Neither guarantees a better bottle." },
    { question: "What does IGT mean?", answer: "Indicazione Geografica Tipica, the Italian term for a protected geographical indication. Rules are looser than for DOC, and areas are often whole regions, such as Toscana or Terre Siciliane." },
    { question: "What is Chianti Classico?", answer: "A DOCG red, mainly Sangiovese, from the historic Chianti zone between Florence and Siena. It is a separate denomination from Chianti DOCG, which covers a wider area." },
    { question: "What is Barolo?", answer: "A DOCG red from the Langhe hills in Piedmont, made entirely from Nebbiolo and aged for longer than most Italian reds." },
    { question: "What is Prosecco made from?", answer: "Mainly the Glera grape. It comes from the Veneto and Friuli Venezia Giulia, with the Conegliano Valdobbiadene and Asolo hills as DOCGs, and is usually made by the tank method." },
    { question: "What is Amarone?", answer: "A dry red from Valpolicella, near Verona, made from grapes dried for months before fermentation. Recioto della Valpolicella is the sweet version." },
    { question: "Is Montepulciano d'Abruzzo the same as Vino Nobile di Montepulciano?", answer: "No. Montepulciano d'Abruzzo is made from the Montepulciano grape in Abruzzo; Vino Nobile is a mainly Sangiovese wine from the Tuscan town of Montepulciano." },
    { question: "What is Marsala?", answer: "A fortified wine from the province of Trapani in western Sicily, made in dry and sweet styles." },
    { question: "What is Franciacorta?", answer: "A bottle-fermented sparkling DOCG from Lombardy, south of Lake Iseo, made mainly from Chardonnay and Pinot Nero." },
    { question: "What wines are associated with Sicily?", answer: "Nero d'Avola, Grillo, Etna reds and whites, Cerasuolo di Vittoria, Marsala and the sweet wines of Pantelleria." },
    { question: "What wines are associated with Sardinia?", answer: "Cannonau, Vermentino (including Vermentino di Gallura DOCG), Carignano del Sulcis and Vernaccia di Oristano." },
    { question: "Can visitors visit Italian wineries?", answer: "Yes. Many wineries offer tastings and cellar visits, usually by appointment, and wine roads link producers in many areas. Plan transport so nobody drives after drinking." },
    { question: "How do you order wine by the glass in Italy?", answer: "Ask \"Quali vini avete al calice?\" and then \"Un calice di…\". The house wine (vino della casa) is often local and good value." },
    { question: "What does Riserva mean on an Italian label?", answer: "The wine has been aged longer. Under Law 238/2016, the minimum is two years for reds and one year for whites, unless a denomination's older rules set something different." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Normattiva — Law 12 December 2016, no. 238 (Testo Unico del Vino)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2016-12-12;238", note: "classifications and label terms (in Italian)" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Italian wine PDOs and PGIs" },
    { label: "Ministry of Agriculture — National register of vine varieties: DOCG, DOC, IGT", url: "http://catalogoviti.politicheagricole.it/dopigp.php", note: "in Italian" },
    { label: "Ministry of Agriculture — Wine DOP and IGP lists and production rules", url: "https://www.masaf.gov.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/4625", note: "in Italian" },
    { label: "UNESCO — Vineyard Landscape of Piedmont: Langhe-Roero and Monferrato", url: "https://whc.unesco.org/en/list/1390", note: "2014" },
    { label: "UNESCO — Le Colline del Prosecco di Conegliano e Valdobbiadene", url: "https://whc.unesco.org/en/list/1571", note: "2019" },
    { label: "UNESCO — Traditional agricultural practice of cultivating the 'vite ad alberello' of Pantelleria", url: "https://ich.unesco.org/en/RL/traditional-agricultural-practice-of-cultivating-the-vite-ad-alberello-head-trained-bush-vines-of-the-community-of-pantelleria-00720", note: "2014" },
    { label: "European Commission — Wine labelling", url: "https://agriculture.ec.europa.eu/farming/crop-productions-and-plant-based-products/wine/wine-labelling_en", note: "ingredients and nutrition information" },
    { label: "WHO Europe — No level of alcohol consumption is safe for our health", url: "https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health", note: "2023" },
    { label: "ACI — Highway Code, art. 186 (alcohol)", url: "https://aci.gov.it/codice-della-strada/art-186/", note: "drink-driving limits" },
  ],
};
