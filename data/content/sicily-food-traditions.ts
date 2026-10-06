import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Sicilian Food Traditions" — the rebuilt version of the site's short
// Sicily food piece, kept at its established URL. It is the Sicily-specific
// food pillar: national food culture, desserts, coffee, wine, markets and pizza
// have their own articles and are linked rather than repeated. Every PDO/PGI
// name was checked in the EU's eAmbrosia register in September 2026. Other
// sources: the Accademia della Crusca on arancina/arancino; the Consorzio del
// Cioccolato di Modica and the Ministry of Agriculture on Modica chocolate;
// Visit Sicily (Regione Siciliana) on pasta alla Norma, Catania's markets,
// Favignana and the Trapani salt pans; the Regione Siciliana on the Saline di
// Trapani e Paceco reserve and Bronte pistachios; the Comune di Agrigento and
// the Valle dei Templi park on the Mandorlo in Fiore; couscousfest.it for the
// 2026 festival dates; UNESCO for the Val di Noto, Etna and Arab-Norman
// Palermo listings. Origin stories that could not be supported are phrased as
// associations or left out; wine is kept short and linked to the wine article.

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

export const sicilyFoodTraditions: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What makes Sicilian food different?"),
    answer("**Sicilian food is the cooking of a large Mediterranean island with a long history of trade and rule from outside, a warm climate and a great deal of coastline.** Its signatures are **durum wheat, fish, citrus, almonds and pistachios, sheep's-milk ricotta, sweet-and-sour flavours and a street-food culture** unlike anywhere else in Italy. It is also far from uniform: Palermo, Catania, Syracuse, Trapani and the inland towns each have their own dishes, words and habits."),
    p("This article is our Sicily-specific food guide: what to eat, where it comes from, how the island's east and west differ, and how to experience it as a visitor. For Italy-wide food culture, see [Italian food traditions](/food/italian-food-traditions); for sweets, coffee and wine in depth, see [traditional Italian desserts](/food/traditional-italian-desserts), [Italian coffee culture](/food/italian-coffee-culture) and [Italy's regional wines](/food/italian-regional-wines)."),
    {
      type: "facts",
      title: "Sicilian food at a glance",
      rows: [
        { label: "Staples", value: "Durum wheat (pasta and bread), fish, vegetables, citrus, olive oil, ricotta" },
        { label: "Signature flavours", value: "Sweet-and-sour (agrodolce), almonds, pistachios, capers, wild fennel, toasted breadcrumbs" },
        { label: "Street food", value: "Arancine, panelle, crocchè, sfincione, pani ca' meusa" },
        { label: "Sweets", value: "Cannoli, cassata, marzipan fruit, granita" },
        { label: "Protected products", value: "Dozens of PDO and PGI names, from Bronte pistachios to Modica chocolate" },
        { label: "Best way in", value: "A morning market, a street-food lunch, a granita breakfast" },
      ],
    },

    // ——— 2 ———
    h2("A history written in ingredients"),
    p("Sicily sits at the centre of the Mediterranean, and over roughly three thousand years it was settled, ruled or traded with by Phoenicians, Greeks, Romans, Byzantines, Arab rulers, Normans, Swabians, Angevins, Aragonese and Spanish crowns, and the Bourbons, before becoming part of unified Italy in 1861. UNESCO's listing of Arab-Norman Palermo describes a \"social-cultural syncretism between Western, Islamic and Byzantine cultures\" on the island — a useful way to think about its food too."),
    p("Popular accounts often credit particular peoples with particular ingredients or dishes. Some of these links are well grounded in general terms — crops such as tomatoes, maize and cacao came from the Americas and reached Sicily, like the rest of Europe, after the 16th century. Many others are traditions rather than documented facts, and the precise origin of individual dishes is usually debated. We describe influences as associations, not as proof that a single civilisation \"invented\" a food."),
    ul(
      "**Wheat** — Sicily was an important grain-growing land in antiquity, and durum wheat still underpins its pasta and bread.",
      "**Citrus, almonds, sugar and rice** — often associated with the medieval Arab period, and certainly central to Sicilian sweets and street food today.",
      "**Sweet-and-sour cooking** — vinegar and sugar or honey, raisins and pine nuts, which appear in dishes such as caponata and pasta con le sarde.",
      "**Convent pastry-making** — many sweets, including marzipan fruit, are linked by tradition to convents, where nuns made and sold them.",
      "**New World ingredients** — tomatoes, peppers and cacao, adopted over centuries.",
    ),
    p("The honest summary is that Sicilian food grew from **what the island grows and catches**, reworked by many cultures over a long time, and then by generations of home cooks and professional bakers."),

    // ——— 3 ———
    h2("What makes the cuisine distinctive"),
    ul(
      "**Agrodolce** — the sweet-and-sour balance of vinegar and sugar, raisins and capers, that runs through vegetable dishes like caponata.",
      "**Nuts** — almonds and pistachios in pesto, sweets, granita and even savoury dishes.",
      "**Citrus** — oranges, lemons and mandarins in salads, sweets, granita and preserves.",
      "**Toasted breadcrumbs** — scattered over pasta, especially with fish, and used in stuffings.",
      "**Ricotta** — fresh sheep's-milk ricotta in cannoli and cassata, and salted ricotta grated over pasta.",
      "**The sea** — sardines, anchovies, swordfish, tuna and shellfish, depending on the coast.",
      "**Frying** — much of the street food is fried: rice, chickpea flour, potato, pastry.",
      "**Wild herbs and greens** — wild fennel in particular gives pasta con le sarde its flavour.",
    ),
    p("None of these is unique to Sicily on its own. What stands out is the combination, and how often sweet, sour, savoury and nutty flavours appear in the same dish."),
    {
      type: "image",
      src: `${IMG}/ballaro-market-cheese.webp`,
      alt: "A crowded stall at Ballarò market in Palermo piled with cheeses, olives and packaged foods under a striped awning",
      caption: "A stall at Ballarò, one of Palermo's historic street markets.",
      credit: unsplash("Piermario Eva", "p1mm1"),
      wide: true,
    },

    // ——— 4 ———
    h2("East and west: two halves of one island"),
    p("Sicilians often talk about the island's eastern and western sides as if they were different countries, and in food there are real differences. They're tendencies, not borders, and plenty of dishes are made everywhere."),
    {
      type: "compare",
      title: "Western and eastern Sicily",
      columns: [
        {
          title: "West — Palermo, Trapani, Agrigento",
          items: [
            "Palermo's street food: panelle, crocchè, sfincione, pani ca' meusa",
            "Round arancine, called by the feminine name",
            "Couscous with fish around Trapani",
            "Busiate with pesto alla trapanese",
            "Salt pans, tuna-fishing heritage and capers from Pantelleria",
            "Marsala wine",
          ],
        },
        {
          title: "East — Catania, Messina, Syracuse, Ragusa",
          items: [
            "Pasta alla Norma in Catania",
            "Arancini, often cone-shaped, called by the masculine name",
            "Granita and brioche as a classic breakfast",
            "Pistachios from Bronte, on the slopes of Etna",
            "Modica chocolate and Ragusano cheese in the southeast",
            "Etna wines",
          ],
        },
      ],
    },
    p("The interior — around Enna and Caltanissetta — has its own traditions based on wheat, legumes, sheep's cheeses and meat, far from the coastal fish dishes that visitors tend to associate with the island."),

    // ——— 5 ———
    h2("Palermo"),
    p("Sicily's capital has the island's most famous street-food culture, eaten standing up at market stalls, bakeries, *friggitorie* (fry shops) and kiosks. Our [Palermo guide](/cities/palermo-markets-monuments) covers the city and its markets in detail; the essentials:"),
    ul(
      "**Arancina** — a round fried rice ball, typically filled with meat ragù (*accarne*) or with butter, ham and cheese (*abburro*). Palermitans eat arancine on 13 December, the feast of Santa Lucia.",
      "**Panelle** — thin chickpea-flour fritters, often in a sesame bun as *pane e panelle*.",
      "**Crocchè** — potato croquettes, also called *cazzilli*, often sold with panelle.",
      "**Sfincione** — a thick, soft bread topped with tomato, onion, anchovies, caciocavallo cheese and breadcrumbs.",
      "**Pani ca' meusa** — a bun filled with slow-cooked veal spleen and lung, served plain or with cheese.",
      "**Pasta con le sarde** — pasta with fresh sardines, wild fennel, pine nuts, raisins and toasted breadcrumbs.",
      "**Anelletti al forno** — baked ring-shaped pasta with ragù, a Sunday and holiday dish.",
      "**Cassata and frutta martorana** — the ricotta-and-marzipan cake and the painted marzipan fruit, both strongly associated with Palermo.",
    ),
    p("Palermo's historic markets — **Ballarò**, the **Capo** and the **Vucciria** — are the obvious places to see this food culture, and the city's Arab-Norman monuments, a UNESCO World Heritage Site since 2015, are a short walk away."),
    {
      type: "image",
      src: `${IMG}/palermo-market-stalls.webp`,
      alt: "Market stalls in Palermo at dusk, with fried snacks in the foreground and strings of peppers and lights hanging above",
      caption: "Evening at a Palermo market, where street food is part of daily life.",
      credit: unsplash("Andrea Vaiuso", "andreavaiuso"),
    },

    // ——— 6 ———
    h2("Catania"),
    p("Sicily's second city sits at the foot of **Mount Etna**, which UNESCO describes as the highest Mediterranean island mountain and one of the world's most active stratovolcanoes. Volcanic soils around it support vineyards, orchards and pistachio groves."),
    ul(
      "**Pasta alla Norma** — macaroni with tomato, fried aubergine, salted ricotta and basil. Visit Sicily, the regional tourism site, associates it with Catania and notes several competing stories behind the name; the most repeated links it to Bellini's opera *Norma* (Bellini was born in Catania), but the exact origin is uncertain.",
      "**Arancino** — in Catania and the east, usually masculine and often cone-shaped. The Accademia della Crusca, Italy's language authority, treats both *arancina* and *arancino* as correct regional forms.",
      "**Granita and brioche** — a classic breakfast, especially in summer (see below).",
      "**Fish** — the **Pescheria**, Catania's fish market behind the Cathedral, is one of the island's most atmospheric morning sights; the general market known as the **Fera o' Luni** fills Piazza Carlo Alberto.",
    ),
    {
      type: "image",
      src: `${IMG}/catania-fish-market.webp`,
      alt: "A fishmonger sorting a tray of small silver fish at the Catania fish market, with crates and buckets on wet paving",
      caption: "Small fish sorted for sale at Catania's fish market.",
      credit: unsplash("E H", "wasichvonhieraussehenkann"),
    },

    // ——— 7 ———
    h2("Syracuse and the southeast"),
    p("The southeast — the provinces of Syracuse and Ragusa — combines coastal cooking with the farms of the Iblei hills. Eight towns of the area, including Noto, Modica, Ragusa and Scicli, are listed by UNESCO as the Late Baroque Towns of the Val di Noto, rebuilt after the earthquake of 1693."),
    ul(
      "**Ortigia**, Syracuse's old town, has a morning market with fish, produce and delicatessen stalls.",
      "**Protected produce** — Limone di Siracusa (PGI) lemons, Pomodoro di Pachino (PGI) tomatoes and Carota Novella di Ispica (PGI) early carrots all come from this corner of the island.",
      "**Ragusano** (PDO) — a large, rectangular stretched-curd cow's-milk cheese from the Iblei area.",
      "**Monti Iblei** (PDO) — one of Sicily's protected extra virgin olive oils.",
    ),
    h3("Modica chocolate"),
    p("Modica is known for a grainy, crumbly chocolate. **Cioccolato di Modica** has been a PGI since 2018 (Regulation (EU) 2018/1529), and the Italian Ministry of Agriculture describes it as the first chocolate to receive a PGI in Europe. According to its protection consortium, it is worked at low temperatures without conching, which keeps the sugar crystals intact, and archive documents record chocolate-makers in Modica in 1746. The consortium describes the working methods as being of Spanish derivation; it is best understood as a local tradition shaped by the period of Spanish rule, rather than as a surviving \"original\" recipe."),
    {
      type: "image",
      src: `${IMG}/ortigia-fish-market.webp`,
      alt: "A fishmonger in a red shirt and white apron behind a long tiled counter of fresh fish at the market in Ortigia, Syracuse",
      caption: "A fish counter at the market in Ortigia, Syracuse's old town.",
      credit: unsplash("Dagnija Berzina", "dagnijaab"),
    },
    {
      type: "image",
      src: `${IMG}/modica-town.webp`,
      alt: "The Baroque façade of a church in Modica, with statues lining a wide flight of steps under a blue sky",
      caption: "Modica, one of the Baroque towns of the Val di Noto and home of Modica chocolate.",
      credit: unsplash("Dagnija Berzina", "dagnijaab"),
    },

    // ——— 8 ———
    h2("Trapani and the west"),
    p("The far west faces North Africa across the Strait of Sicily, and its cooking reflects that closeness to the sea and to other shores."),
    ul(
      "**Couscous** — around Trapani it is traditionally served with fish or a fish broth. San Vito Lo Capo holds the **Cous Cous Fest** every year; the 2026 edition ran from 18 to 27 September.",
      "**Busiate with pesto alla trapanese** — twisted pasta with a raw sauce of tomato, almonds, garlic and basil.",
      "**Salt** — the **Saline di Trapani e Paceco** nature reserve covers about 1,000 hectares of salt pans and is a Ramsar wetland; **Sale Marino di Trapani** is a PGI. Further south, the salt pans near Marsala and the Stagnone lagoon are another landmark.",
      "**Tuna** — on Favignana, the former Florio tuna-processing plant, one of the largest in the Mediterranean, is now a museum of the island's tuna-fishing tradition.",
      "**Capers** — Cappero di Pantelleria (PGI) from the island of Pantelleria.",
      "**The Belice valley** — Nocellara del Belice (PDO) olives, Valle del Belice (PDO) oil and Vastedda della valle del Belìce (PDO), a sheep's-milk stretched-curd cheese.",
    ),
    {
      type: "image",
      src: `${IMG}/marsala-salt-pans.webp`,
      alt: "A stone windmill and low salt-works buildings beside a salt pan near Marsala, framed by palm leaves in evening light",
      caption: "Salt pans and a windmill near Marsala, in the province of Trapani.",
      credit: unsplash("Joshua Kettle", "joshuakettle"),
    },

    // ——— 9 ———
    h2("A regional comparison"),
    table(
      ["Area", "Known for", "Dishes to look for", "Protected products"],
      [
        ["Palermo", "Street food, markets, pastry", "Arancina, panelle, sfincione, pasta con le sarde, cassata", "—"],
        ["Trapani and the west", "Salt, tuna heritage, couscous", "Couscous with fish, busiate alla trapanese", "Sale Marino di Trapani PGI, Cappero di Pantelleria PGI, Nocellara del Belice PDO"],
        ["Catania and Etna", "Fish market, volcano farming", "Pasta alla Norma, arancino, granita", "Pistacchio Verde di Bronte PDO, Ficodindia dell'Etna PDO, Monte Etna PDO oil"],
        ["Syracuse and Ragusa", "Baroque towns, market produce", "Fish, vegetables, Modica chocolate", "Limone di Siracusa PGI, Pomodoro di Pachino PGI, Ragusano PDO, Cioccolato di Modica PGI"],
        ["Messina and the Aeolians", "The Strait, islands", "Swordfish dishes, capers", "Limone Interdonato Messina PGI, Cappero delle Isole Eolie PDO"],
        ["Enna and the interior", "Wheat, sheep, cheese", "Hearty pasta and legume dishes", "Piacentinu Ennese PDO, Pagnotta del Dittaino PDO"],
      ],
      "Tendencies, not boundaries: many dishes are made across the island. Protected names checked in the EU eAmbrosia register.",
    ),

    // ——— 10 ———
    h2("Pasta"),
    p("Sicilian pasta is built on durum wheat, and sauces lean on vegetables, fish, nuts and breadcrumbs more than on meat or butter. A few dishes to look for:"),
    table(
      ["Dish", "What it is", "Associated with"],
      [
        ["Pasta con le sarde", "Sardines, wild fennel, pine nuts, raisins, toasted breadcrumbs", "Palermo and the west"],
        ["Pasta alla Norma", "Tomato, fried aubergine, salted ricotta, basil", "Catania"],
        ["Busiate al pesto trapanese", "Twisted pasta with tomato, almonds, garlic and basil", "Trapani"],
        ["Anelletti al forno", "Baked ring pasta with ragù", "Palermo"],
        ["Pasta 'ncasciata", "Baked pasta with aubergine and cheese", "Eastern Sicily, especially Messina"],
        ["Pasta with swordfish", "Swordfish, often with tomato, aubergine or mint", "Coasts, especially near Messina"],
      ],
      "Recipes vary by family and town.",
    ),

    // ——— 11 ———
    h2("Seafood"),
    p("With coastlines on three seas — the Tyrrhenian, the Ionian and the Strait of Sicily — seafood is central to Sicilian cooking. Sardines and anchovies are everyday fish; tuna has a long fishing history in the west; the Strait of Messina is known for its swordfish tradition. Sea urchins, prawns, octopus and mussels appear on coastal menus in season."),
    p("The best way to understand this side of the cuisine is at a morning fish market — Catania's Pescheria, Ortigia in Syracuse or the fish stalls of Palermo's markets — and at simple coastal trattorias. Menus should flag frozen products (*surgelato* or *congelato*), often with an asterisk — worth checking if fresh fish matters to you."),
    tip("Fish is often priced by weight (per etto — 100 g — or per kilo). Ask how much a portion weighs before ordering whole fish.", "Ordering fish"),

    // ——— 12 ———
    h2("Street food"),
    p("Street food in Sicily isn't a novelty or a tourist product: it's how many people have lunch or a snack. Palermo is the capital of it, but every city has its own."),
    table(
      ["Food", "What it is", "Where you'll find it"],
      [
        ["Arancina / arancino", "Fried stuffed rice ball", "Everywhere; round in Palermo, often cone-shaped in the east"],
        ["Panelle", "Chickpea-flour fritters, often in a bun", "Palermo"],
        ["Crocchè / cazzilli", "Potato croquettes", "Palermo"],
        ["Sfincione", "Soft, thick topped bread", "Palermo"],
        ["Pani ca' meusa", "Bun with veal spleen and lung", "Palermo"],
        ["Scacce", "Folded, stuffed flatbread", "Ragusa and the southeast"],
        ["Brioche con gelato", "Ice cream in a soft brioche", "Across the island"],
      ],
    ),

    // ——— 13 ———
    h2("Bread"),
    p("Sicilian bread is usually made with durum-wheat semolina (*semola rimacinata*), which gives it a yellow crumb. Loaves topped with sesame seeds are common, especially in Palermo. **Pagnotta del Dittaino** (PDO), a durum-wheat loaf from the Enna area, is protected by the EU. Bread appears at every meal, and breadcrumbs are an ingredient in their own right."),
    {
      type: "image",
      src: `${IMG}/palermo-orange-cart.webp`,
      alt: "A three-wheeled Piaggio Ape loaded with crates of oranges and produce parked on a street in Palermo beside a stone house",
      caption: "A fruit seller's Ape in Palermo. Street vendors are part of how Sicilians shop.",
      credit: unsplash("Christian Lue", "christianlue"),
    },

    // ——— 14 ———
    h2("Cheeses"),
    p("Sheep's milk dominates, although cow's-milk cheeses are important in the southeast. Five Sicilian cheeses are PDO:"),
    ul(
      "**Pecorino Siciliano** — a sheep's-milk cheese, aged.",
      "**Ragusano** — a stretched-curd cow's-milk cheese from the Ragusa and Syracuse area.",
      "**Piacentinu Ennese** — a sheep's-milk cheese from the Enna area, flavoured with saffron and pepper.",
      "**Vastedda della valle del Belìce** — a stretched-curd sheep's-milk cheese from the Belice valley.",
      "**Provola dei Nebrodi** — a stretched-curd cow's-milk cheese from the Nebrodi mountains.",
    ),
    p("**Ricotta** — fresh, from sheep's milk — is the basis of cannoli and cassata; salted and aged ricotta (*ricotta salata*) is grated over pasta alla Norma. **Caciocavallo** is used in cooking, including on sfincione."),

    // ——— 15 ———
    h2("Citrus and fruit"),
    p("Citrus is one of the island's defining crops. EU-protected Sicilian names include **Arancia Rossa di Sicilia** (PGI), the blood orange grown in eastern Sicily; **Arancia di Ribera** (PDO), near Agrigento; and three lemons — **Limone di Siracusa**, **Limone Interdonato Messina** and **Limone dell'Etna** (all PGI)."),
    p("Other protected fruit includes prickly pears (**Ficodindia dell'Etna** and **Ficodindia di San Cono**, both PDO), **Ciliegia dell'Etna** (PDO) cherries, **Pesca di Leonforte** (PGI) peaches and **Uva da tavola di Canicattì** (PGI) table grapes. Citrus season is roughly winter to spring; the others follow summer and autumn."),

    // ——— 16 ———
    h2("Pistachios and almonds"),
    p("**Pistacchio Verde di Bronte** (PDO) is grown on the lava slopes of Etna around Bronte. According to the Regione Siciliana, it is harvested by hand and in alternate years. **Pistacchio di Raffadali** (PDO), from the Agrigento area, is also protected. Pistachio turns up in pesto, granita, gelato, cream-filled pastries and savoury dishes."),
    p("Almonds are just as important: in marzipan (*pasta reale*), biscuits, granita, milk-like almond drinks and pesto alla trapanese. In Agrigento, the **Mandorlo in Fiore** festival celebrates the almond blossom each spring, usually in March — the 2026 edition, the 78th, ran from 7 to 15 March — with an international folklore festival and a torch procession through the Valley of the Temples."),

    // ——— 17 ———
    h2("Sweets"),
    p("Sicilian pastry is famous across Italy. Our [traditional Italian desserts](/food/traditional-italian-desserts) article covers Italy's sweets more broadly; these are the Sicilian ones to know."),
    ul(
      "**Cannoli** — crisp fried pastry tubes filled with sweetened sheep's-milk ricotta. The best are filled to order so the shell stays crisp.",
      "**Cassata siciliana** — sponge and ricotta covered in marzipan and decorated with candied fruit, especially associated with Palermo and Easter.",
      "**Cassatelle and cassatine** — smaller versions and related pastries.",
      "**Frutta martorana** — marzipan shaped and painted like fruit, named after Palermo's Martorana convent and traditionally made for the Day of the Dead, 2 November.",
      "**Almond biscuits** — soft *paste di mandorla*, found in bakeries across the island.",
      "**Cuccìa** — cooked wheat berries with ricotta or cream, eaten in Palermo on the feast of Santa Lucia.",
    ),
    p("Many of these sweets are linked by tradition to convents and to religious feasts. Stories about who first made them are part of local culture but mostly can't be documented."),
    {
      type: "image",
      src: `${IMG}/erice-pastry-counter.webp`,
      alt: "A pastry counter in Erice with green iced cassatine, a sugar-dusted cannolo and trays of almond biscuits",
      caption: "Cassatine, cannoli and almond pastries at a pastry shop in Erice, near Trapani.",
      credit: unsplash("Valentina Locatelli", "valentina_locatelli"),
    },
    {
      type: "image",
      src: `${IMG}/cassata-siciliana-trapani.webp`,
      alt: "A small individual cassata with green marzipan and a candied cherry on a white plate with a fork",
      caption: "A single-portion cassata, photographed in Trapani.",
      credit: unsplash("Valentina Locatelli", "valentina_locatelli"),
    },

    // ——— 18 ———
    h2("Granita and breakfast"),
    p("In summer — and in eastern Sicily for much of the year — breakfast can be a **granita with a brioche**: a soft, semi-frozen ice, typically lemon, almond, coffee, pistachio, mulberry or chocolate, eaten with a spoon and a sweet bun (*brioche col tuppo*, named after its topknot) for dipping. Granita is smoother than a slush; texture varies by town and bar. How it differs from gelato and sorbetto is explained in our guide to [Italian gelato](/food/italian-gelato)."),
    p("Otherwise, breakfast is the usual Italian one: a cappuccino or espresso with a cornetto at a bar. See [Italian coffee culture](/food/italian-coffee-culture) for how bars work."),

    // ——— 19 ———
    h2("Wine"),
    p("Sicily is one of Italy's largest wine regions. Two names to know: **Etna**, where vineyards on the volcano's slopes produce reds from Nerello Mascalese and whites from Carricante (Etna DOC dates from 1968 and is generally described as Sicily's first DOC), and **Marsala**, a fortified wine from the province of Trapani. Nero d'Avola and Grillo are widely planted grapes. For a fuller picture, see [Italy's regional wines](/food/italian-regional-wines)."),
    {
      type: "image",
      src: `${IMG}/sicily-vineyard.webp`,
      alt: "Autumn-coloured vineyards on a hillside in Sicily, surrounded by green woodland and scrub",
      caption: "Vineyards in the Sicilian countryside in autumn.",
      credit: unsplash("Owen Roth", "owenroth_v1"),
    },

    // ——— 20 ———
    h2("Olive oil"),
    p("Olive oil is the island's main cooking fat. Sicily has a regional protected oil, **Sicilia** (PGI), plus several local PDOs: **Val di Mazara**, **Valle del Belice**, **Monti Iblei** and **Monte Etna**, among others. Look for the harvest date on the label: oil is best within about a year. Producers' shops and farm stays often offer tastings in autumn, after the harvest."),

    // ——— 21 ———
    h2("Markets"),
    p("Markets are where Sicilian food culture is most visible. The big ones are busiest in the morning; afternoons and Sundays are quieter, and some stalls close."),
    table(
      ["Market", "City", "What to expect"],
      [
        ["Ballarò", "Palermo", "Large, lively produce and street-food market in the Albergheria district"],
        ["Capo", "Palermo", "Produce, fish and meat in narrow streets near the Cathedral"],
        ["Vucciria", "Palermo", "Smaller by day; better known now for its evening atmosphere"],
        ["Pescheria", "Catania", "Fish market behind the Cathedral"],
        ["Fera o' Luni", "Catania", "General market in Piazza Carlo Alberto"],
        ["Ortigia market", "Syracuse", "Fish, produce and delicatessen stalls in the old town"],
      ],
      "Check current opening times locally; stalls vary by day and season.",
    ),

    // ——— 22 ———
    h2("Festivals and the food calendar"),
    p("Religious feasts and harvests set Sicily's food calendar. Dates vary by year, so check official sites before you plan around an event."),
    ul(
      "**Santa Lucia, 13 December** — in Palermo, many people avoid bread and pasta and eat arancine and cuccìa instead.",
      "**Christmas** — buccellati (fig-filled pastries) and other festive sweets.",
      "**Easter** — cassata and lambs made of marzipan (*agnello pasquale*).",
      "**Mandorlo in Fiore, Agrigento** — almond-blossom festival, usually in March.",
      "**Cous Cous Fest, San Vito Lo Capo** — international couscous festival, in September in 2026.",
      "**Day of the Dead, 2 November** — frutta martorana and other traditional sweets.",
      "**Sagre** — local food fairs dedicated to a single product, such as pistachios, prickly pears or ricotta, held in towns across the island.",
    ),

    // ——— 23 ———
    h2("Eating by season"),
    table(
      ["Season", "What's at its best"],
      [
        ["Spring", "Artichokes, broad beans, wild fennel, almond blossom, Easter sweets"],
        ["Summer", "Tomatoes, aubergines, peppers, stone fruit, melons, granita; the Bronte pistachio harvest in late summer"],
        ["Autumn", "Grapes and the wine harvest, prickly pears, new olive oil"],
        ["Winter", "Blood oranges, lemons, mandarins, cauliflower and broccoli, Christmas sweets"],
      ],
      "A general guide; timing varies with altitude and year.",
    ),

    // ——— 24 ———
    h2("How meals work"),
    p("Meals follow the Italian pattern — antipasto, a primo of pasta, a secondo of fish or meat with a *contorno*, then fruit, dessert or coffee — but few people eat all of it every day. Lunch is often the main meal, dinner is eaten later than in northern Europe (often from 8:30 or 9pm, later in summer), and a street-food lunch is perfectly normal."),
    ul(
      "**Coperto** — a per-person cover charge for bread and table service, which should be shown on the menu.",
      "**Servizio** — a service charge, sometimes added in tourist areas; also shown on the menu if applied.",
      "**Tipping** — not expected the way it is in some countries; rounding up for good service is appreciated.",
      "**Bread** — used to mop up sauce (*fare la scarpetta*), which is fine in informal places.",
      "**Cheese on fish pasta** — traditionally not added; toasted breadcrumbs take its place in many Sicilian dishes.",
    ),

    // ——— 25 ———
    h2("Common misconceptions"),
    ul(
      "**\"Sicilian food is just Italian food.\"** It's part of Italy's food culture, but with its own dishes, words and ingredients.",
      "**\"It's spicy.\"** Sicilian cooking is flavourful rather than hot; chilli plays a smaller role than in parts of Calabria.",
      "**\"Everything is Arab.\"** Arab-period influence is an important part of the story, but only one part.",
      "**\"There's one correct recipe.\"** Caponata, arancine and pasta con le sarde exist in many family and local versions.",
      "**\"Arancina or arancino — one is wrong.\"** Both are correct regional forms, according to the Accademia della Crusca.",
      "**\"Cannoli are a dessert you order after dinner.\"** They are eaten at any time, often from a pastry shop rather than a restaurant.",
    ),

    // ——— 26 ———
    h2("How to experience Sicilian food"),
    ul(
      "**Go to a morning market** — Ballarò or the Capo in Palermo, the Pescheria in Catania, Ortigia in Syracuse.",
      "**Eat street food at lunch** — arancine, panelle or sfincione from a busy bakery or fry shop.",
      "**Have granita for breakfast** — especially in the east, in summer.",
      "**Buy sweets at a pastry shop** — cannoli filled to order, marzipan, almond biscuits.",
      "**Follow the seasons** — ask what's in season (*di stagione*) and order it.",
      "**Visit producers** — wineries on Etna, olive-oil mills, salt pans near Trapani and Marsala.",
      "**Take a class or tour** — cooking classes and market tours are widely available; choose ones run by local cooks.",
    ),
    tip("If you're travelling across the island, see [getting between Italian cities](/guides/getting-between-italian-cities) and [ferries in Italy](/transport/ferries-in-italy) for the Strait of Messina and the smaller islands.", "Getting around"),

    // ——— 27 ———
    h2("Sicilian food words"),
    table(
      ["Word", "Meaning"],
      [
        ["Arancina / arancino", "Fried stuffed rice ball"],
        ["Accarne / abburro", "Arancina fillings: meat ragù / butter, ham and cheese"],
        ["Panelle", "Chickpea-flour fritters"],
        ["Cazzilli", "Potato croquettes (Palermo)"],
        ["Friggitoria", "Fry shop"],
        ["Agrodolce", "Sweet and sour"],
        ["Pasta reale", "Marzipan"],
        ["Muddica", "Breadcrumbs (Sicilian)"],
        ["Ricotta salata", "Salted, aged ricotta"],
        ["Brioche col tuppo", "Brioche with a topknot, served with granita"],
        ["Pesce spada", "Swordfish"],
        ["Coperto", "Cover charge, per person"],
      ],
    ),
    p("For the rest of your trip, see our [Palermo guide](/cities/palermo-markets-monuments) and the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What food is Sicily famous for?", answer: "Arancine, cannoli, cassata, caponata, pasta con le sarde, pasta alla Norma, granita, pistachios from Bronte, blood oranges, Modica chocolate and a great deal of fish." },
    { question: "What makes Sicilian food different from the rest of Italy?", answer: "The combination of durum wheat, fish, citrus, almonds, pistachios, ricotta and sweet-and-sour flavours, plus a strong street-food culture and many local dishes." },
    { question: "Is it arancina or arancino?", answer: "Both. The Accademia della Crusca treats them as regional forms: arancina is used in Palermo and western Sicily, arancino in the east, where the rice balls are often cone-shaped." },
    { question: "What are the main differences between eastern and western Sicily?", answer: "Broadly, the west has Palermo's street food, couscous with fish around Trapani and pesto alla trapanese; the east has pasta alla Norma, granita culture, Bronte pistachios and Etna wines. Many dishes are made everywhere." },
    { question: "What is Palermo street food?", answer: "Arancine, panelle, crocchè, sfincione and pani ca' meusa, sold at markets, bakeries, fry shops and kiosks." },
    { question: "What is pasta alla Norma?", answer: "Pasta with tomato, fried aubergine, salted ricotta and basil, associated with Catania. The origin of the name is uncertain." },
    { question: "What is caponata?", answer: "A sweet-and-sour dish of fried aubergine with celery, olives and capers in a tomato, vinegar and sugar sauce, made in many local versions." },
    { question: "What is Sicilian granita?", answer: "A smooth, semi-frozen ice in flavours such as lemon, almond, coffee or pistachio, often eaten with a brioche for breakfast, especially in eastern Sicily." },
    { question: "What is Modica chocolate?", answer: "A grainy chocolate from Modica, worked at low temperatures without conching. Cioccolato di Modica has been an EU PGI since 2018." },
    { question: "Where do Bronte pistachios come from?", answer: "From around Bronte, on the slopes of Mount Etna. Pistacchio Verde di Bronte is a PDO product." },
    { question: "What are the best Sicilian desserts?", answer: "Cannoli, cassata, frutta martorana, almond biscuits and, in summer, granita and brioche con gelato." },
    { question: "Is Sicilian food spicy?", answer: "Not usually. It is flavourful — sweet, sour, salty and nutty — but chilli plays a small role compared with some other southern regions." },
    { question: "What is couscous in Sicily?", answer: "In the Trapani area, couscous is traditionally served with fish or a fish broth. San Vito Lo Capo holds an annual Cous Cous Fest." },
    { question: "What is the coperto in Sicilian restaurants?", answer: "A per-person cover charge, used across Italy, which should be listed on the menu." },
    { question: "When is the best time to visit Sicily for food?", answer: "Any time: spring for artichokes and Easter sweets, summer for granita and vegetables, autumn for grapes, prickly pears and new oil, winter for blood oranges and Christmas sweets." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "status of Sicilian PDO and PGI names" },
    { label: "Accademia della Crusca — Si dice arancino o arancina?", url: "https://accademiadellacrusca.it/it/consulenza/si-dice-arancino-o--arancina/1043", note: "in Italian" },
    { label: "Consorzio di Tutela del Cioccolato di Modica", url: "https://www.cioccolatodimodica.it/", note: "production method and history" },
    { label: "Commission Implementing Regulation (EU) 2018/1529 — Cioccolato di Modica PGI", url: "https://eur-lex.europa.eu/eli/reg_impl/2018/1529/oj", note: "registration" },
    { label: "Visit Sicily — pasta alla Norma", url: "https://www.visitsicily.info/", note: "regional tourism site" },
    { label: "Regione Siciliana — Riserva Naturale Saline di Trapani e Paceco", url: "https://www.regione.sicilia.it/", note: "reserve and salt pans" },
    { label: "Comune di Agrigento — Mandorlo in Fiore", url: "https://www.comune.agrigento.it/", note: "2026 edition" },
    { label: "Cous Cous Fest", url: "https://www.couscousfest.it/", note: "2026 dates" },
    { label: "UNESCO — Arab-Norman Palermo", url: "https://whc.unesco.org/en/list/1487", note: "2015 inscription" },
    { label: "UNESCO — Late Baroque Towns of the Val di Noto", url: "https://whc.unesco.org/en/list/1024", note: "south-eastern Sicily" },
    { label: "UNESCO — Mount Etna", url: "https://whc.unesco.org/en/list/1427", note: "2013 inscription" },
  ],
};
