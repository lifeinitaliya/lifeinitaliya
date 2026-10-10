import type { ArticleContent, ContentBlock } from "@/lib/types";

// Italian Regional Cheeses. Fact-checked against:
// EU eAmbrosia geographical indications register (all PDO/PGI status),
// official consortium specifications (Parmigiano Reggiano Consortium,
// Grana Padano Consortium, Mozzarella di Bufala Campana Consortium,
// Gorgonzola Consortium, Asiago Consortium, Fontina Consortium,
// Pecorino Romano Consortium, Taleggio Consortium),
// Treccani (terminology, etymology), Accademia della Crusca (usage),
// Regione Puglia and Consortium Burrata di Andria for burrata/IGP status,
// Consorzio Tutela Provolone Valpadana, Consorzio Pecorino Toscano PDO,
// Consorzio Ragusano DOP, Consorzio Fiore Sardo DOP.
// Flavor descriptions are editorial characterizations, not official definitions.
// No prices, restaurant recommendations, producer endorsements, or
// nutritional claims are made.

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

export const italianRegionalCheeses: ArticleContent = {
  body: [
    h2("Why Italian cheese is regional"),
    answer("**Italian cheese traditions are regional because the livestock, pastures, climate, and food cultures of each area developed separately over centuries.** A mountain valley in Piedmont, a volcanic plain in Campania, a limestone plateau in Puglia, and a high Alpine meadow in Valle d'Aosta produce entirely different milk, and the traditions around that milk reflect local conditions rather than national policy. The result is a country with one of the most diverse cheese landscapes in the world — not a single Italian cheese style, but dozens of distinct regional traditions."),
    p("This guide covers a representative selection of Italian regional cheeses, explains how they are classified, and gives practical information for anyone shopping, eating, or cooking with them. Every PDO and PGI designation mentioned here has been verified against the European Commission's eAmbrosia register."),
    {
      type: "facts",
      title: "Italian regional cheese at a glance",
      rows: [
        { label: "PDO cheeses", value: "Italy has more PDO (Protected Designation of Origin) cheeses than any other EU country — over 50 registered designations as of 2026" },
        { label: "Milk types", value: "Cow, sheep, goat, and water buffalo — different regions have strong traditions with each" },
        { label: "Styles", value: "From fresh milky mozzarella to aged 36-month Parmigiano Reggiano; from soft Taleggio to hard Pecorino Romano" },
        { label: "Regions", value: "Every Italian region has at least one recognised cheese; the north tends toward cow's milk, the centre and south toward sheep's milk" },
        { label: "Protected names", value: "A protected name refers to a specific production specification; cheese with the same name but made outside the zone may not use the designation" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "How Italian cheese is classified",
        "Northern Italy: Piedmont and the Alps",
        "Lombardy: the great Po Valley cheeses",
        "Veneto and Friuli: mountain milk traditions",
        "Emilia-Romagna: Parmigiano Reggiano",
        "Tuscany and Lazio: sheep's milk country",
        "The south: mozzarella, burrata and caciocavallo",
        "Sicily and Sardinia",
        "Comparison table",
        "How to build an Italian cheese board",
        "Cheese and Italian wine",
        "Cooking with regional cheeses",
        "Shopping for cheese in Italy",
        "Storage and food safety",
        "Common misconceptions",
        "Italian cheese vocabulary",
      ],
    },

    // ——— Classification ———
    h2("How Italian cheese is classified"),
    p("Italian cheeses are described by a handful of terms that cross-cut each other: milk type, texture, age, and production method. Understanding these makes labels and conversations in a cheese shop much easier."),
    h3("Milk type"),
    ul(
      "**Latte vaccino (cow's milk):** Most common in northern Italy, where Alpine and Po Valley cattle are abundant. Includes Parmigiano Reggiano, Grana Padano, Gorgonzola, Taleggio, Asiago, Fontina and many others.",
      "**Latte ovino (sheep's milk):** The dominant tradition in central and southern Italy, Sardinia and Sicily. Sheep's milk produces richer, more intensely flavoured cheeses. Pecorino Romano, Pecorino Toscano, Fiore Sardo, Pecorino Siciliano and others.",
      "**Latte bufalino (water buffalo milk):** Concentrated in Campania and parts of Lazio. Higher in fat and protein than cow's milk. Used for Mozzarella di Bufala Campana PDO.",
      "**Latte caprino (goat's milk):** Found in various regions, particularly Piedmont (Robiola varieties), Lombardy and Sardinia. Often used for fresh, tangy cheeses.",
      "**Mixed milk:** Some cheeses specify a blend — Robiola di Roccaverano PDO, for example, uses goat's milk alone or blended with cow's or sheep's milk, within defined ratios.",
    ),
    h3("Texture and age"),
    ul(
      "**Fresco (fresh):** Not aged or lightly aged. Moist, mild, often used within days of production — mozzarella, ricotta, burrata, stracciatella, certain Robiola styles.",
      "**Semistagionato (semi-aged):** Aged for weeks to a few months. Develops more flavour while retaining some softness. Asiago Pressato, younger Taleggio.",
      "**Stagionato (aged):** Aged for several months to years. Firmer, drier, more concentrated flavour. Parmigiano Reggiano (12–36+ months), aged Pecorino, Grana Padano, Ragusano.",
      "**A pasta filata (stretched-curd):** A distinct production technique in which the curd is heated and pulled to create a fibrous, elastic texture. Mozzarella, provolone, scamorza, caciocavallo.",
    ),
    h3("PDO, PGI, and what they mean"),
    p("A **PDO (Protected Designation of Origin — DOP in Italian)** means that the cheese must be produced, processed, and prepared within a defined geographical area using a verified production specification. The name can only be used on products that meet all requirements. A **PGI (Protected Geographical Indication — IGP in Italian)** requires that at least one stage of production occurs in the defined area. Both are regulated under EU law and registered with the European Commission."),
    note("A protected designation protects a *name*, not a general cheese style. Other producers can make a cheese in a similar style without the designation; they simply cannot use the protected name. Parmigiano Reggiano and Grana Padano, for example, are two distinct PDO products with separate specifications — they are not interchangeable names for the same cheese."),
    image("cheese-shop-display", "A display cabinet filled with whole cheese wheels and wedges in an Italian specialist food shop", true),

    // ——— Piedmont ———
    h2("Northern Italy: Piedmont and the Alps"),
    h3("Castelmagno PDO"),
    p("Castelmagno is produced in the mountain communes of Castelmagno, Pradleves and Monterosso Grana in Cuneo province, Piedmont. It is made from semi-skimmed cow's milk, sometimes with small additions of sheep's or goat's milk. The cheese is aged for at least 60 days; older versions develop a natural rind and a crumbly, irregular interior that may show blue-green veining, though it is not classified as a blue cheese in the traditional sense."),
    p("Castelmagno is intensely savory, sometimes compared to a dry, concentrated cow's-milk cheese with occasional pungent or floral notes depending on age and pasture. It is traditionally used in *gnocchi al Castelmagno* and as a risotto finish in Piedmontese cooking. It has held PDO status since 1996."),
    h3("Robiola di Roccaverano PDO"),
    p("Robiola di Roccaverano is a soft, fresh or briefly aged cheese from the Langhe and Monferrato hills of Asti and Alessandria provinces. It is produced from goat's milk alone, or from a regulated blend of goat's, cow's and sheep's milk. The cheese is small and cylindrical, with a fresh, slightly tangy flavour — milder and more delicate when very young. It has held PDO status since 1996."),
    p("The term *robiola* is also used more broadly in Piedmont and Lombardy for a family of soft fresh cheeses, not all of which are PDO products. Robiola di Roccaverano is the protected designation."),

    // ——— Lombardy ———
    h2("Lombardy: the great Po Valley cheeses"),
    image("cheese-aging-rack", "Multiple whole cheese rounds and wedges arranged on wooden shelves in an aging room", true),
    h3("Gorgonzola PDO"),
    p("Gorgonzola is Italy's best-known blue cheese, produced in the provinces of Novara, Vercelli, Cuneo, Biella, Verbano-Cusio-Ossola, and Alessandria in Piedmont, and in Bergamo, Brescia, Como, Cremona, Lecco, Lodi, Milano, Monza-Brianza, Pavia and Varese in Lombardy. It is made from whole cow's milk with specific mold cultures (*Penicillium glaucum* strains) introduced to create its characteristic blue-green veining."),
    p("Two main types are produced: **Gorgonzola Dolce** (also called *cremificato*) is soft, mild and creamy, aged approximately two to three months; **Gorgonzola Piccante** (also *Montagna*) is firmer, more crumbly, and more intensely flavoured, aged around six to twelve months. Both have held PDO status since 1996. Gorgonzola Dolce is often spread on bread or paired with pears; Piccante is frequently used to finish risotto or pasta, and paired with full-bodied wines."),
    h3("Taleggio PDO"),
    p("Taleggio is a washed-rind cheese from the Val Taleggio valley and adjacent areas of Bergamo province, with production now extending across a wider PDO zone including Bergamo, Brescia, Como, Cremona, Lecco, Lodi, Milano, Monza-Brianza, Pavia, and Treviso. It is made from whole cow's milk. The cheese is square, approximately 18–20 cm on each side, with a thin washed rind that can range from orange-pink to grey depending on age."),
    p("Taleggio has a soft, slightly elastic interior and a distinctive aromatic character that is stronger on the rind than the paste. The flavour is savory, mildly tangy, and becomes more pronounced with age. It melts well and is used in polenta, risotto and pasta dishes. PDO status since 1996."),
    h3("Grana Padano PDO"),
    p("Grana Padano is a hard, granular cow's-milk cheese produced across a large PDO zone covering the Po Valley: Piedmont, Lombardy, Trentino-Alto Adige, Veneto and Emilia-Romagna, with specific provinces named in its production specification. It is aged for a minimum of nine months, with extended ageing categories (*Oltre 16 mesi* and *Riserva* over 20 months) carrying additional markings."),
    p("Grana Padano and Parmigiano Reggiano are both granular aged cow's-milk cheeses from the Po Valley, and both are PDO products, but they are distinct cheeses with different production rules, zones, and flavour profiles. Grana Padano can use partially skimmed milk and permits the use of lysozyme (an enzyme derived from egg white) as a preservative; Parmigiano Reggiano does not. This is relevant for people with egg allergies. PDO status since 1996."),
    h3("Bitto PDO"),
    p("Bitto is produced in the Valtellina valley of Sondrio province, Lombardy, and certain adjacent Alpine communes. It is made from cow's milk with the possible addition of up to ten percent goat's milk from local breeds. Bitto is an aged cheese, required to age for a minimum of 70 days; it can be aged for several years and is sometimes marketed as a long-aged speciality. PDO status since 1996."),

    // ——— Veneto ———
    h2("Veneto and Friuli: mountain milk traditions"),
    h3("Asiago PDO"),
    p("Asiago is produced on the Asiago plateau in Vicenza province and in parts of Treviso, Padova and Trento. The production zone covers a mountain area with distinct pasture conditions. Two main styles exist: **Asiago Pressato** is a fresh or briefly aged version, made from whole milk, with a soft white paste and a mild flavour; **Asiago d'Allevo** is aged from a minimum of three months up to two years or more, with a firmer, more granular texture and a more developed flavour. PDO status since 1996."),
    h3("Montasio PDO"),
    p("Montasio comes from Friuli-Venezia Giulia and parts of Veneto. It is a cow's-milk cheese produced in three ageing categories: *Fresco* (60 days minimum), *Mezzano* (5–10 months), and *Stagionato* (over 10 months). The young version is mild and slightly elastic; the aged version becomes harder, more flavorful, and suitable for grating. Montasio is the basis for the Friulian dish *frico* — a fried cheese crisp made by melting and crisping grated Montasio in a pan. PDO status since 1996."),

    // ——— Emilia-Romagna ———
    h2("Emilia-Romagna: Parmigiano Reggiano"),
    image("mozzarella-making", "Workers in white coats handling fresh cheese curd in a large production facility", true),
    h3("Parmigiano Reggiano PDO"),
    p("Parmigiano Reggiano is produced in the provinces of Parma, Reggio Emilia, Modena, Bologna (left bank of the Reno river) and Mantova (right bank of the Po river). Its production specification is precise: raw, unpasteurized whole cow's milk from local herds, no additives, a natural rind, and ageing of at least 12 months. The Parmigiano Reggiano Consortium grades wheels and applies its oval mark only to those that pass inspection; wheels that don't meet standards are de-rinded and sold under other names."),
    p("Parmigiano Reggiano is sold at different ageing stages. Wheels aged 12–18 months are milder and more elastic; 24 months is the most common commercial sweet spot; 36 months or more produces a harder, more granular, intensely savory cheese with a characteristic crystalline texture from tyrosine amino acid clusters. It is used grated over pasta and risotto, eaten in chunks as part of an antipasto, paired with aceto balsamico tradizionale, and incorporated into many northern Italian recipes. PDO status since 1996."),
    tip("When buying Parmigiano Reggiano, look for the dotted rind marking and the Consortium's oval stamp. The ageing duration (12, 24, 36 months) is often marked and affects both flavour and price."),

    // ——— Tuscany and Lazio ———
    h2("Tuscany and Lazio: sheep's milk country"),
    h3("Pecorino Toscano PDO"),
    p("Pecorino Toscano is produced in Tuscany and in defined municipalities of Umbria and Lazio. It is made from whole sheep's milk. Two styles exist: *Fresco* (aged at least 20 days) has a soft, pale paste and a mild flavour; *Stagionato* (aged at least four months) is firmer, with a harder rind and a more pronounced flavour. It is lighter and less salty than Pecorino Romano. PDO status since 1996."),
    h3("Pecorino Romano PDO"),
    p("Despite its name, Pecorino Romano is now produced primarily in Sardinia, with a smaller part of production coming from Lazio and the province of Grosseto in Tuscany. The cheese uses sheep's milk and is heavily salted during production, resulting in a hard, dry, intensely savory and salty cheese with a distinctive sharp flavour. It is traditionally used grated over pasta dishes including carbonara (historically), cacio e pepe and *pasta e cacio*."),
    p("Pecorino Romano is one of Italy's oldest documented cheeses, with references in classical sources, though the current PDO production specification defines modern standards. PDO status since 1996. Note that Pecorino Romano is not the same as Pecorino Toscano — the two are made from sheep's milk but have different production zones, production methods, and flavour profiles."),
    image("sliced-cheese-board", "Slices and wedges of different hard and semi-hard cheeses arranged on a wooden cutting board", true),

    // ——— South ———
    h2("The south: mozzarella, burrata and caciocavallo"),
    h3("Mozzarella di Bufala Campana PDO"),
    p("Mozzarella di Bufala Campana is produced in defined areas of Campania (Caserta, Salerno, Naples, Benevento), Lazio (Latina, Frosinone, Rome), Apulia and Molise. It is made from the milk of water buffalo (*Bubalus bubalis*) using the *pasta filata* (stretched-curd) technique: the curd is heated in hot water and pulled and folded until it becomes smooth and elastic, then formed into balls. The cheese is sold in its whey or brine."),
    p("Fresh Mozzarella di Bufala Campana has a soft, milky, slightly elastic texture with a clean, faintly tangy flavour and a distinctive milky aroma. It is eaten fresh — often within a day or two of production at its best — with tomato and basil, or on its own with good bread and oil. It has held PDO status since 1996. Note: standard cow's-milk mozzarella (*fior di latte*) is a related product but not Mozzarella di Bufala Campana PDO."),
    h3("Burrata di Andria PGI"),
    p("Burrata originated in Andria, in the Puglia region, and its name comes from *burro* (butter), referring to its rich, creamy interior. It is made from cow's milk using the *pasta filata* technique: an outer shell of fresh mozzarella is formed by hand, then filled with *stracciatella* — shredded curd soaked in cream — before being sealed. The result is a soft outer layer containing a liquid, cream-drenched interior that flows when cut."),
    p("Burrata di Andria PGI was registered in the EU's geographical indications register. Unlike fresh mozzarella, burrata is eaten immediately — it has a shelf life of only a few days and is best consumed the day it is made. It is typically served at room temperature, dressed simply with good olive oil and salt, or with cured meats and seasonal vegetables."),
    h3("Caciocavallo Silano PDO"),
    p("Caciocavallo Silano is produced across a large southern production zone covering parts of Basilicata, Calabria, Campania, Molise and Puglia. It is a *pasta filata* cow's-milk cheese with a distinctive gourd or teardrop shape, formed by tying the top and hanging the cheese in pairs across a rod (*a cavallo* means 'astride'). It is aged for a minimum of 30 days for the standard version; a more aged version (*stagionato*) is firmer and more pungent."),
    p("Young Caciocavallo Silano is mild and slightly sweet; as it ages it develops a more complex, savory and sometimes sharp character. PDO status since 1996. The name *caciocavallo* is also used more broadly for similarly-shaped *pasta filata* cheeses across the south, but Caciocavallo Silano is the PDO product."),
    h3("Mozzarella and Fior di Latte in Campania"),
    p("Alongside Mozzarella di Bufala Campana PDO, Campania also produces *fior di latte* — fresh cow's-milk mozzarella made by the same *pasta filata* technique but using cow's rather than buffalo milk. Fior di latte is used widely on pizza (including Neapolitan pizza PDO, where it is the more commonly specified milk type), in caprese-style salads, and in baked dishes. It is distinct from Mozzarella di Bufala Campana in milk type and in its flavour, which is milder."),
    image("cheese-deli-counter", "An Italian deli display case showing a range of whole and cut cheeses alongside cured meats and olives", true),

    // ——— Sicily and Sardinia ———
    h2("Sicily and Sardinia"),
    h3("Ragusano PDO"),
    p("Ragusano is produced in the Iblean plateau area of Ragusa and Siracusa provinces in eastern Sicily. It is a *pasta filata* cow's-milk cheese, traditionally made from the milk of *Modicana* cattle — a native Sicilian breed. Ragusano is rectangular in shape (a block rather than the rounded *caciocavallo* form), with a smooth yellow rind that deepens with age. Young Ragusano is mild and milky; aged versions become sharper, drier and more concentrated. PDO status since 1996."),
    h3("Pecorino Siciliano PDO"),
    p("Pecorino Siciliano is one of the oldest documented cheeses in the Mediterranean basin, with references to Sicilian sheep's-milk cheese production going back to classical antiquity, though the modern PDO production specification defines current standards. It is made from whole sheep's milk and aged for at least four months. It is harder and more strongly flavoured than Pecorino Toscano, with a distinctive spicy character in longer-aged versions. Some traditional versions are made with whole black peppercorns pressed into the paste, giving the cheese a characteristic appearance. PDO status since 1996."),
    h3("Fiore Sardo PDO"),
    p("Fiore Sardo is a sheep's-milk cheese from Sardinia, traditionally made by small-scale producers using a specific production method that includes smoking the young cheese wheels over a fire of local wood and mastic resin. This gives Fiore Sardo a distinctive smoky, slightly bitter and complex flavour unlike other Sardinian cheeses. It is aged for a minimum of three months; older versions are harder and more intensely flavoured. PDO status since 1996."),
    h3("Pecorino Sardo PDO"),
    p("Pecorino Sardo is also a PDO sheep's-milk cheese from Sardinia, but it is distinct from Fiore Sardo in its production method — it is not smoked. Two types: *Dolce* (aged 20–60 days, semi-soft, mild and slightly tangy) and *Maturo* (aged over 2 months, firmer, more flavourful, suitable for grating). The *Maturo* type can develop a very firm, dry texture with extended ageing. PDO status since 1996."),

    // ——— Valle d'Aosta ———
    h3("Fontina PDO"),
    p("Fontina is produced exclusively in the Valle d'Aosta, Italy's smallest and most Alpine region. It is made from the raw milk of *Valdostana* cattle, which graze at different altitudes depending on the season — the cheese made in summer from high-altitude pasture milk is considered to have a distinctive character reflecting the mountain herbs. Fontina has a semi-soft to semi-hard texture with a natural washed rind, and a flavour that is nutty, milky and slightly earthy, becoming more complex with age. It melts exceptionally well. PDO status since 1996."),
    p("Fontina is central to Valle d'Aosta cooking — it is the traditional cheese used in *fonduta*, the region's fondue-like preparation, and in *zuppa alla Valpellinentze*, a baked bread and vegetable soup enriched with Fontina. The protected name is Fontina PDO; other products called 'Fontal' or 'Fontinella' are made elsewhere using different specifications and are not PDO products."),

    // ——— Comparison table ———
    h2("Comparison table"),
    table(
      ["Cheese", "Region/Production zone", "Milk", "Texture", "Style", "Designation"],
      [
        ["Parmigiano Reggiano", "Parma, Reggio Emilia, Modena, Bologna (part), Mantova (part)", "Cow (raw)", "Hard, granular", "Grated, antipasto, cooking", "PDO"],
        ["Grana Padano", "Po Valley (broad zone)", "Cow (semi-skimmed)", "Hard, granular", "Grated, cooking", "PDO"],
        ["Gorgonzola Dolce/Piccante", "Piedmont and Lombardy (specific provinces)", "Cow (whole)", "Soft–crumbly", "Dolce: spread, dessert; Piccante: pasta, risotto", "PDO"],
        ["Taleggio", "Bergamo and broader zone", "Cow (whole)", "Soft, washed rind", "Melted in polenta/risotto; cheese board", "PDO"],
        ["Asiago Pressato / d'Allevo", "Asiago plateau and Trento (part)", "Cow", "Soft–hard (by age)", "Sandwich, grating (aged)", "PDO"],
        ["Montasio", "Friuli-Venezia Giulia and Veneto (part)", "Cow", "Semi-soft–hard (by age)", "Frico, table cheese", "PDO"],
        ["Fontina", "Valle d'Aosta only", "Cow (raw)", "Semi-soft to semi-hard", "Fonduta, melted, cheese board", "PDO"],
        ["Castelmagno", "Three communes, Cuneo province", "Cow (+ optional sheep/goat)", "Semi-hard, crumbly", "Risotto, pasta, cheese board", "PDO"],
        ["Pecorino Toscano", "Tuscany + parts of Umbria, Lazio", "Sheep", "Soft–firm (by age)", "Table cheese, light grating", "PDO"],
        ["Pecorino Romano", "Mainly Sardinia; Lazio; Grosseto (part)", "Sheep (heavily salted)", "Hard, dry", "Grated over pasta (cacio e pepe, carbonara)", "PDO"],
        ["Pecorino Siciliano", "Sicily", "Sheep", "Hard", "Table, grating, traditional dishes", "PDO"],
        ["Pecorino Sardo Dolce/Maturo", "Sardinia", "Sheep", "Semi-soft–hard (by age)", "Table, grating (maturo)", "PDO"],
        ["Fiore Sardo", "Sardinia (smoked)", "Sheep", "Hard", "Cheese board, grated, cooking", "PDO"],
        ["Mozzarella di Bufala Campana", "Campania and adjacent areas", "Buffalo", "Soft, fresh", "Fresh, caprese, pizza (less typical)", "PDO"],
        ["Burrata di Andria", "Andria, Puglia", "Cow", "Fresh (cream-filled)", "Fresh, with olive oil and bread", "PGI"],
        ["Caciocavallo Silano", "Southern Italy (5 regions)", "Cow (pasta filata)", "Semi-soft–hard (by age)", "Table, cooking, grated (aged)", "PDO"],
        ["Ragusano", "Ragusa and Siracusa (Sicily)", "Cow (pasta filata)", "Semi-hard–hard (by age)", "Table, grating", "PDO"],
        ["Robiola di Roccaverano", "Langhe-Monferrato, Piedmont", "Goat (or blended)", "Soft, fresh", "Spread, cheese board", "PDO"],
      ],
      "Designation status verified against EU eAmbrosia register (2026). Texture and serving suggestions are general guidelines.",
    ),
    image("cheese-board-varieties", "A wooden board with a range of Italian cheeses of different textures, colours and ages, with crackers and small accompaniments", true),

    // ——— Cheese board ———
    h2("How to build an Italian cheese board"),
    p("A useful Italian cheese board combines texture contrast, milk type variety, and flavour range rather than assembling as many cheeses as possible. Three to five cheeses is enough for most occasions."),
    ul(
      "**Vary the texture:** include one soft or fresh cheese (burrata, fresh Robiola, young Pecorino Toscano *fresco*), one semi-hard (Asiago, Fontina, younger Montasio), and one hard aged cheese (Parmigiano Reggiano, Pecorino Romano, Caciocavallo *stagionato*).",
      "**Vary the milk:** mixing cow's-milk and sheep's-milk cheeses gives contrast. If you include a buffalo-milk mozzarella, it works best as a centrepiece rather than competing with aged cheeses.",
      "**Blue cheese:** Gorgonzola Dolce melts into a board beautifully; Piccante is more assertive. Use in moderation — one blue at a time is usually enough.",
      "**Bread and crackers:** plain unsalted crackers, grissini (breadsticks), and good sourdough or ciabatta work well. Flavoured crackers can compete with the cheese.",
      "**Seasonal fruit and preserves:** fresh pears, grapes, figs, and sliced apple work with most cheeses. Mostarda (northern Italian fruit preserve in mustard syrup) is a traditional match for aged Grana and Parmigiano. Honey pairs well with Pecorino and Gorgonzola.",
      "**Nuts:** walnut halves, toasted almonds and hazelnuts work well; keep them separate so guests can choose.",
    ),
    tip("Serve cheese at room temperature, not straight from the refrigerator. Flavours are muted when cold. Remove from the fridge at least 30 minutes before serving."),

    // ——— Wine ———
    h2("Cheese and Italian wine"),
    p("There is no single rule matching Italian cheese to wine. The more useful principle is that high-acidity wines cut through rich, fatty cheeses, while full-bodied reds can overwhelm delicate fresh cheeses. A few well-supported pairings:"),
    ul(
      "**Parmigiano Reggiano:** Often paired in Emilia-Romagna with Lambrusco — the sparkling, slightly tannic quality of Lambrusco Grasparossa di Castelvetro cuts through the fat and complements the savoriness. Still red wines from the region (Sangiovese-based) also work.",
      "**Gorgonzola Dolce:** Sweet dessert wines — Moscato d'Asti, Passito di Pantelleria — are a classic pairing. The sweetness contrasts with the cheese's richness. Gorgonzola Piccante can also match with structured reds.",
      "**Taleggio:** Works with medium-bodied reds (Barbera d'Asti, Chianti) and with Franciacorta or other Italian sparkling wines.",
      "**Fontina:** Paired traditionally with Valle d'Aosta reds — Donnas, Arnad-Montjovet — or with Pinot Nero. The wine doesn't need to dominate.",
      "**Pecorino Toscano:** Pairs naturally with Tuscan reds of appropriate weight — Morellino di Scansano, Monteregio di Massa Marittima. Lighter wines work with *fresco*; more aged versions handle bigger reds.",
      "**Mozzarella di Bufala Campana:** Prosecco and other light sparkling whites; light Campanian whites (Greco di Tufo, Fiano di Avellino) complement without overwhelming.",
    ),
    p("For more on Italian regional wines and the regions that produce them, see the [Italian Regional Wines guide](/food/italian-regional-wines)."),

    // ——— Cooking ———
    h2("Cooking with regional cheeses"),
    p("Italian regional cheeses each have cooking properties tied to their texture and fat content."),
    h3("Grating cheeses"),
    p("Parmigiano Reggiano and Grana Padano are the standard grating cheeses for pasta, risotto, and soups in northern Italy. Pecorino Romano is traditional in several central and southern Italian pasta dishes — it is the cheese used in cacio e pepe and, in its traditional Roman form, in pasta alla gricia. Mixing Parmigiano and Pecorino is a common practice. See the [Roman pasta classics article](/food/roman-pasta-classics) for context on which pasta dishes use which cheese."),
    h3("Melting cheeses"),
    p("Taleggio, Fontina, and Gorgonzola Dolce melt smoothly and are used in risotto, polenta, pasta and on pizza. Scamorza (a *pasta filata* cow's-milk cheese common in the south) is often grilled or used in baked dishes; it develops a crust when melted. Mozzarella *fior di latte* is standard for baked pasta and pizza. Buffalo mozzarella is less well-suited to baking as its high moisture content can make dough or bases soggy."),
    h3("Fresh cheeses in cooking"),
    p("Ricotta (technically not a cheese but a byproduct — made from the whey of other cheeses) is used widely in pasta fillings (tortellini, ravioli), baked pasta, stuffed vegetables and as a base for desserts and tarts. Burrata is essentially a fresh serving cheese and doesn't cook well — it should be served raw. Soft Robiola can be stirred into warm pasta as a sauce."),
    p("For context on regional pasta dishes and the cheeses used in them, see the [Italian food traditions](/food/italian-food-traditions) article."),
    image("cheese-counter-man", "A specialist cheese counter with rows of labelled cheese wheels and wedges; a person browses the selection", true),

    // ——— Shopping ———
    h2("Shopping for cheese in Italy"),
    p("Cheese in Italy is available at **supermercati** (supermarkets), **gastronomie** (delicatessens), **caseifici** (dairy producers, sometimes with direct-sale shops), and **mercati** (markets). Specialist cheese shops are found in most towns of any size. The quality and range at a good gastronomia or a fresh market is usually significantly better than what's available in a supermarket."),
    h3("At the counter"),
    p("When buying at a counter (al banco), you can usually ask for a portion, specify how much you want, and taste before buying. Standard portions are sold by weight: asking for *un etto* (100 grams) or *due etti* (200 grams) is how most Italian shoppers buy. At a busy market counter, be ready to order promptly."),
    ul(
      "**Un etto di Parmigiano, per favore** — 100 grams of Parmigiano, please.",
      "**Posso assaggiare?** — Can I taste?",
      "**Quanto si conserva?** — How long will it keep?",
      "**È latte vaccino o ovino?** — Is it cow's milk or sheep's milk?",
      "**È stagionato o fresco?** — Is it aged or fresh?",
      "**Ha qualcosa di locale?** — Do you have anything local?",
    ),
    h3("Labels and PDO marks"),
    p("On a shop-cut piece of PDO cheese, the original whole cheese (which carries the rind markings and consortium stamps) has been cut, so you may not see the full marks. Ask the vendor or look at the label on the cut piece. On a whole portion of Parmigiano Reggiano you bought from a wheel, the dotted rind markings and oval Consortium stamp should be visible on the rind — this confirms the designation."),
    p("When buying pre-packaged cheese, look for the PDO/DOP logo (a red-and-yellow circular design on EU-registered products) or the PGI/IGP logo (a blue-and-yellow equivalent). These confirm the designation. On Italian packaging, look for the abbreviation DOP or IGP."),
    p("For more on what to look for at Italian food markets, see the [Italian food markets guide](/food/italian-food-markets)."),

    // ——— Storage ———
    h2("Storage and food safety"),
    p("How you store Italian cheese at home depends significantly on its type. Follow the vendor's or producer's storage guidance as a first reference — it will be more specific than any general rule."),
    ul(
      "**Fresh cheeses (mozzarella, burrata, ricotta, Robiola fresco):** Refrigerate and consume quickly — most should be eaten within one to three days, or by the use-by date. Fresh mozzarella and burrata are best at or near room temperature, so remove them from the refrigerator before serving but don't leave them out for extended periods.",
      "**Semi-hard and hard cheeses (Asiago, Montasio, Parmigiano, Pecorino):** Wrap cut pieces in wax paper or parchment paper rather than plastic wrap, which can make rind sweat. Store in the refrigerator. Hard cheeses keep for several weeks when stored carefully.",
      "**Blue cheeses (Gorgonzola):** Store wrapped in foil or in an airtight container in the refrigerator, separate from other cheeses. Gorgonzola Dolce should be consumed sooner than Piccante.",
      "**Washed-rind cheeses (Taleggio):** Keep wrapped and in a cool, humid part of the refrigerator. The smell is strong — keep it well-sealed.",
    ),
    note("Raw-milk cheeses present different considerations from pasteurized products. Certain groups — pregnant women, immunocompromised individuals, elderly people and very young children — are generally advised to avoid raw-milk cheeses. Consult official guidance for your jurisdiction and, if in doubt, discuss with a health professional rather than relying on general editorial content."),

    // ——— Misconceptions ———
    h2("Common misconceptions"),
    ul(
      "**\"All Italian cheeses are hard.\"** Italy produces a wide range of fresh and soft cheeses — Mozzarella di Bufala Campana, burrata, Taleggio, Robiola, ricotta and many others. Hard aged cheeses are prominent but not representative of the whole.",
      "**\"Parmesan and Parmigiano Reggiano are the same thing.\"** 'Parmesan' is a term used outside the EU for hard grating cheeses in a similar style; within the EU, the name Parmigiano Reggiano is protected and can only be used on cheese meeting the PDO specification. The two may differ significantly in production method, milk source, and flavour.",
      "**\"All Pecorino tastes the same.\"** Pecorino Romano, Pecorino Toscano, Pecorino Sardo and Pecorino Siciliano are different PDO products from different regions with different production methods, ageing requirements and flavour profiles. The only shared characteristic is that all are made from sheep's milk.",
      "**\"PDO means the cheese will suit every taste.\"** A PDO designation confirms that the cheese meets a specific production specification — it says nothing about individual flavour preference. Fiore Sardo's smoke and intensity, Gorgonzola Piccante's pungency, and Pecorino Romano's saltiness are authentic to their respective designations; they are not universally liked.",
      "**\"Mozzarella and burrata are the same.\"** Mozzarella is a solid, fresh stretched-curd cheese; burrata has the same outer shell but is filled with cream and stracciatella. They have different textures and serve different purposes — burrata should not be cooked.",
      "**\"A cheese named after a region comes only from that region.\"** Only when the name is a registered PDO or PGI does geographical origin have legal force. Some generic cheese names reference a region without carrying a protected designation. Check the label for DOP or IGP markings.",
    ),

    // ——— Vocabulary ———
    h2("Italian cheese vocabulary"),
    table(
      ["Italian", "Meaning"],
      [
        ["formaggio", "cheese"],
        ["formaggiaio / casaro", "cheese maker"],
        ["caseificio", "dairy, cheese producer"],
        ["gastronomia", "delicatessen, specialist food shop"],
        ["al banco", "at the counter (as opposed to pre-packaged)"],
        ["fresco", "fresh (not aged, or briefly aged)"],
        ["stagionato", "aged"],
        ["semistagionato", "semi-aged"],
        ["latte vaccino", "cow's milk"],
        ["latte ovino", "sheep's milk"],
        ["latte caprino", "goat's milk"],
        ["latte bufalino / di bufala", "water buffalo milk"],
        ["latte crudo", "raw milk (unpasteurised)"],
        ["latte pastorizzato", "pasteurised milk"],
        ["a pasta filata", "stretched-curd technique (mozzarella, caciocavallo, provolone)"],
        ["a pasta dura", "hard-paste cheese"],
        ["a pasta molle", "soft-paste cheese"],
        ["crosta", "rind"],
        ["crosta lavata", "washed rind"],
        ["erborinato", "blue-veined (erborinatura = blue-green veining)"],
        ["DOP (Denominazione di Origine Protetta)", "PDO — Protected Designation of Origin"],
        ["IGP (Indicazione Geografica Protetta)", "PGI — Protected Geographical Indication"],
        ["un etto", "100 grams (standard unit at counters)"],
        ["due etti", "200 grams"],
        ["mezzo chilo / mezzo kg", "half a kilo (500g)"],
        ["affettato", "sliced"],
        ["grattugiato", "grated"],
      ],
    ),
    image("cheese-stone-cellar", "A long stone-vaulted underground corridor or cellar used for aging and storing food or drink", true),
  ],

  faqs: [
    { question: "Which Italian cheeses should a first-time visitor try?", answer: "For variety, try fresh Mozzarella di Bufala Campana in the south, a wedge of Parmigiano Reggiano eaten in chunks in Emilia-Romagna, and a local Pecorino wherever you are in central Italy. Each represents a genuinely different Italian tradition. Burrata in Puglia is memorable if you find it made that day. In the north, Taleggio and Fontina give you the washed-rind and Alpine styles." },
    { question: "What is the difference between Parmigiano Reggiano and Grana Padano?", answer: "Both are hard, granular aged cow's-milk PDO cheeses from the Po Valley, but they are distinct products. Parmigiano Reggiano comes from a narrower zone (Parma, Reggio Emilia, Modena and parts of Bologna and Mantova) and uses raw milk with no additives. Grana Padano comes from a wider area and permits the use of lysozyme (from egg white) as a preservative. Their flavours differ — Parmigiano Reggiano tends to be more complex and intensely savory at equivalent ages; Grana Padano is often milder. The lysozyme in Grana Padano is relevant for people with egg allergies." },
    { question: "What does DOP (or PDO) mean on an Italian cheese label?", answer: "DOP stands for Denominazione di Origine Protetta — the Italian equivalent of the EU's PDO (Protected Designation of Origin). It means the cheese has been produced, processed and prepared within a defined geographical area according to a verified production specification, and the name is legally protected. The designation is registered with the European Commission. A DOP mark confirms geographical origin and production method; it doesn't guarantee every consumer will prefer that cheese." },
    { question: "Which Italian cheeses are made from sheep's milk?", answer: "The Pecorino family — Pecorino Romano, Pecorino Toscano, Pecorino Sardo, Pecorino Siciliano and Fiore Sardo — are all sheep's-milk PDO cheeses. Castelmagno may include a proportion of sheep's milk. Robiola di Roccaverano can include sheep's milk in its blend. Sheep's-milk traditions are strongest in central and southern Italy, Sardinia and Sicily." },
    { question: "What is the difference between mozzarella and burrata?", answer: "Mozzarella is a fresh pasta filata cheese — a solid, slightly elastic ball of pulled curd made from cow's or buffalo milk. Burrata has the same outer shell of fresh mozzarella, but it is filled with stracciatella (shredded curd and cream). Burrata is much richer and more liquid inside when cut, and has a very short shelf life — ideally eaten the day it is made. Mozzarella di Bufala Campana is a PDO product; Burrata di Andria is a PGI product." },
    { question: "Which Italian cheeses are commonly grated over pasta?", answer: "Parmigiano Reggiano and Grana Padano are grated over pasta, risotto and soups throughout northern Italy. Pecorino Romano is traditional in central and southern Italian dishes — it is the cheese used in cacio e pepe, and is blended with Parmigiano in carbonara in many recipes. Pecorino Sardo Maturo and aged Caciocavallo are used in Sardinian and southern dishes respectively. The choice of grating cheese is often regional and recipe-specific." },
    { question: "Is Mozzarella di Bufala Campana good on pizza?", answer: "It can be used on pizza, but it is less commonly used than fior di latte (cow's-milk mozzarella) for baking. Mozzarella di Bufala Campana has a much higher water content, which can make a baked dough wet if not drained and handled carefully. The Neapolitan pizza PDO specification permits both fior di latte and buffalo mozzarella; in practice, fior di latte is more widely used in pizza production because it behaves more predictably in a hot oven. Buffalo mozzarella is at its best eaten fresh and uncooked." },
    { question: "How do visitors order cheese at an Italian market or deli?", answer: "Point to what you want, say 'un etto' (100g) or 'due etti' (200g), or indicate a portion. You can ask 'Posso assaggiare?' (Can I taste?) — this is normal at a specialist counter. Ask 'È latte vaccino o ovino?' (Is it cow's or sheep's milk?) or 'Quanto si conserva?' (How long will it keep?) if you need to know. In a busy market context, be ready to order promptly." },
    { question: "How should Italian cheese be stored at home?", answer: "Follow the vendor's guidance as a first reference. As a general rule: fresh cheeses (mozzarella, burrata, ricotta) should be refrigerated and consumed quickly — within one to three days. Cut hard cheeses (Parmigiano, Pecorino) keep longer wrapped in wax paper rather than plastic. Blue cheese (Gorgonzola) should be kept sealed in foil or an airtight container. Washed-rind cheeses (Taleggio) should be kept well-wrapped in the refrigerator." },
    { question: "Are all Italian cheeses made from cow's milk?", answer: "No. Italy has strong sheep's-milk traditions (Pecorino Romano, Pecorino Toscano, Fiore Sardo), a significant water buffalo tradition (Mozzarella di Bufala Campana), and several goat's-milk cheeses (Robiola di Roccaverano). While cow's milk dominates production in northern Italy, the south, Sardinia and Sicily have historically relied more heavily on sheep. Mixed-milk cheeses also exist." },
    { question: "What is the difference between PDO and PGI?", answer: "A PDO (DOP in Italian) requires that the entire production — sourcing of milk, processing and aging — occurs within the defined geographical area. A PGI (IGP in Italian) requires that at least one stage of production takes place in the defined area. For cheese, PDO is the more common and stricter designation. Both are registered with the EU and legally protected within EU member states. On Italian packaging: look for 'DOP' (PDO) or 'IGP' (PGI)." },
    { question: "What does 'a pasta filata' mean?", answer: "Pasta filata (stretched curd) is a production technique in which the fresh curd is submerged in hot water or whey and then kneaded, pulled and stretched until it becomes smooth and elastic. This creates the fibrous, slightly chewy texture characteristic of mozzarella, burrata, scamorza, provolone, and caciocavallo. The technique originated in southern Italy and is used across the south and in some other Italian regions." },
    { question: "Is Fontina the same as Fontal?", answer: "No. Fontina PDO is produced exclusively in Valle d'Aosta from local raw cow's milk, meeting a specific production specification. Fontal and Fontinella are trade names used for cheeses made elsewhere, often in larger quantities and with pasteurized milk, in a broadly similar style. They are distinct products and cannot use the Fontina PDO name." },
    { question: "Can I find Italian regional cheeses outside Italy?", answer: "Many Italian PDO cheeses are exported and available in specialist food shops, good supermarkets and Italian delicatessens in most countries. Parmigiano Reggiano and Grana Padano are widely available internationally. Fresh cheeses like Mozzarella di Bufala Campana are exported but degrade quickly; imported versions may be days old by the time you buy them. Specialty cheeses like Fiore Sardo, Castelmagno, or Robiola di Roccaverano are harder to find outside Italy." },
    { question: "What is Pecorino Romano used for?", answer: "Pecorino Romano is a hard, dry, heavily salted sheep's-milk cheese traditionally used as a grating cheese. It is central to several Roman pasta dishes: cacio e pepe uses only Pecorino Romano (sometimes blended with Parmigiano), pasta alla gricia uses it, and it appears in traditional amatriciana. It is saltier and sharper than Parmigiano Reggiano, so it is generally used in smaller quantities. Eating it in chunks as a table cheese is less common because of its intensity." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "EU eAmbrosia — geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "All PDO and PGI designations verified" },
    { label: "Consorzio del Parmigiano Reggiano", url: "https://www.parmigianoreggiano.com/", note: "Production specification, ageing stages, Consortium grading" },
    { label: "Consorzio per la Tutela del Formaggio Grana Padano", url: "https://www.granapadano.it/", note: "Production zone, milk requirements, lysozyme note" },
    { label: "Consorzio per la Tutela del Formaggio Gorgonzola", url: "https://www.gorgonzola.com/", note: "Dolce vs Piccante types, production zone" },
    { label: "Consorzio Tutela del Taleggio", url: "https://www.taleggio.it/", note: "Production zone, production method" },
    { label: "Consorzio Tutela Asiago", url: "https://www.asiagocheese.it/", note: "Pressato and d'Allevo types, production zone" },
    { label: "Consorzio Fontina Valle d'Aosta", url: "https://www.fontina-vda.it/", note: "Valle d'Aosta exclusivity, Valdostana cattle" },
    { label: "Consorzio Mozzarella di Bufala Campana", url: "https://www.mozzarelladop.it/", note: "PDO production zone, production method" },
    { label: "Consorzio per la Tutela del Formaggio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "Current production zone (primarily Sardinia)" },
    { label: "Consorzio per la Tutela del Pecorino Toscano DOP", url: "https://www.pecorinotoscano.it/", note: "Fresco and Stagionato types" },
    { label: "Treccani — Enciclopedia Italiana", url: "https://www.treccani.it/", note: "Terminology, etymology (formaggio, erborinatura, pasta filata)" },
  ],
};
