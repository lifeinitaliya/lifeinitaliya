import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Traditional Italian Desserts" — the rebuilt version of the site's
// short desserts piece, kept at its established URL. It is the dessert and
// pastry pillar: national food culture, Sicily, coffee, gelato, wine, pizza and
// pasta have their own articles and are linked rather than repeated. Every
// PDO/PGI name and registration date was checked in the EU eAmbrosia register
// in September 2026. Other sources: the Regione Campania's traditional-product
// sheets (sfogliatella, pastiera, babà, struffoli, delizia al limone and the
// Christmas sweets); Arsial on the maritozzo; the Regione Veneto and Veneto
// tourism on fritole, zaleti and baicoli; SardegnaTurismo on seadas, pardulas
// and amaretti; Piedmont's traditional-product list on the baci di dama di
// Tortona; Caffarel on the gianduiotto; Bologna Welcome on the certosino;
// Regione Toscana on chestnut flour; Treccani on Carnival names; the 2005
// ministerial decree on panettone, pandoro and colomba; and news reports on the
// tiramisù listings. Origin stories are presented as stories.

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

export const traditionalItalianDesserts: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What counts as a traditional Italian dessert?"),
    answer("**There is no single Italian dessert tradition — there are hundreds of local ones.** Italian sweets grew out of what each area produced (ricotta, almonds, hazelnuts, chestnuts, citrus, honey), out of the religious calendar (Christmas, Carnival, Lent, Easter, saints' days), and out of centuries of separate states, convents, courts and family kitchens. That is why Sicily's ricotta-filled cannoli, Siena's spiced panforte and Venice's Carnival fritters can all be \"traditional Italian desserts\" and still have almost nothing in common."),
    p("It helps to separate a few categories. A **regional or local speciality** belongs to a particular place, often a single city. A **seasonal or festival sweet** appears mainly around one feast. A **pastry-shop classic** is the everyday stock of a *pasticceria*. And some **internationally famous Italian desserts**, such as tiramisù, are relatively recent. None of these is more \"authentic\" than the others; they are simply different kinds of tradition."),
    p("This article is about desserts and pastry. For Italy's food culture more broadly, see [Italian food traditions](/food/italian-food-traditions); for coffee with your pastry, [Italian coffee](/food/italian-coffee-culture)."),
    {
      type: "facts",
      title: "Italian desserts at a glance",
      rows: [
        { label: "Shaped by", value: "Local ingredients, the religious calendar, convents, courts and family kitchens" },
        { label: "Key ingredients", value: "Ricotta, almonds, hazelnuts, pistachios, citrus, chestnuts, honey, chocolate" },
        { label: "Big seasons", value: "Christmas, Carnival, Easter and saints' days" },
        { label: "EU-protected sweets", value: "Including Panforte and Ricciarelli di Siena, Cantucci Toscani, Seadas di Sardegna, Torrone di Bagnara" },
        { label: "Where to buy", value: "The pasticceria, the bar, bakeries and seasonal market stalls" },
        { label: "Names", value: "Often change from region to region, even for the same sweet" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/venice-pastry-counter.webp`,
      alt: "A pastry-shop counter in Venice with trays of puff-pastry sfogliatelle, cream-filled cannoli and nut brittle under yellow price signs",
      caption: "A pastry counter in Venice. The \"sfogliatelle\" and \"cannoli\" here are northern puff-pastry versions — a reminder that names travel further than recipes.",
      credit: unsplash("Gene Gallin", "genefoto"),
      wide: true,
    },

    // ——— 2 ———
    h2("Why desserts differ so much from region to region"),
    ul(
      "**Ingredients** — the south and islands have ricotta, almonds, citrus and pistachios; Piedmont has hazelnuts; the Apennines have chestnuts; the Alps have butter, cream and apples.",
      "**History** — until 1861 Italy was divided among many states. Courts, trade routes and foreign rulers left different traces in Naples, Palermo, Turin or Venice.",
      "**Convents** — many sweets, especially in the south, are linked by tradition to convents, where nuns made and sold them.",
      "**The calendar** — lean periods (Advent, Lent) and feasts (Christmas, Carnival, Easter) gave each season its own sweets.",
      "**Home baking and pastry shops** — some sweets are mostly made at home for a feast; others are the daily business of professional *pasticcerie*.",
    ),

    // ——— 3 ———
    h2("A regional overview"),
    table(
      ["Region or area", "Representative sweets", "Key ingredients or traditions"],
      [
        ["Sicily", "Cannoli, cassata, frutta martorana, granita", "Ricotta, almonds, pistachios, citrus"],
        ["Campania", "Sfogliatella, babà, pastiera, struffoli", "Ricotta, cooked wheat, citrus, honey"],
        ["Lazio", "Maritozzo, ricotta tarts", "Cream, ricotta, Lenten buns"],
        ["Tuscany", "Cantucci, panforte, ricciarelli, castagnaccio", "Almonds, spices, chestnut flour"],
        ["Piedmont", "Gianduiotti, baci di dama, bonet", "Hazelnuts, chocolate"],
        ["Veneto", "Fritole, galani, zaleti, baicoli, pandoro", "Carnival frying, cornmeal, butter"],
        ["Emilia-Romagna", "Certosino, zuppa inglese", "Honey, spices, custard"],
        ["Lombardy", "Panettone, torrone, sbrisolona", "Butter, candied fruit, almonds"],
        ["Sardinia", "Seadas, pardulas, amaretti", "Cheese, ricotta, semolina, honey, almonds"],
        ["Calabria", "Torrone, fig sweets", "Honey, almonds, dried figs"],
      ],
      "A handful of examples per region. Many sweets cross regional borders.",
    ),

    // ——— 4 ———
    h2("Sicily"),
    p("Sicily has one of Italy's richest pastry traditions, built on sheep's-milk ricotta, almonds, pistachios and citrus. Our [Sicilian food traditions](/food/sicily-food-traditions) feature covers the island's cooking; these are its sweets in brief:"),
    ul(
      "**Cannoli** — crisp, fried pastry tubes filled with sweetened ricotta, often finished with candied orange, chocolate or pistachio. Good pastry shops fill them to order so the shell stays crisp.",
      "**Cassata siciliana** — sponge and ricotta covered in marzipan and candied fruit, strongly associated with Palermo and with Easter.",
      "**Frutta martorana** — marzipan (*pasta reale*) shaped and painted like fruit, traditionally made for the Day of the Dead, 2 November.",
      "**Granita and brioche** — a summer breakfast, especially in eastern Sicily.",
      "**Almond and pistachio sweets** — soft almond biscuits, and pastries made with Pistacchio Verde di Bronte (PDO).",
      "**Modica chocolate** — a grainy chocolate worked at low temperature; Cioccolato di Modica has been an EU PGI since 2018.",
    ),
    p("The difference between the two famous ricotta sweets is easy: a **cannolo** is a fried tube you eat by hand; a **cassata** is a cake, cut in slices. For Palermo's pastry shops, see our [Palermo guide](/cities/palermo-markets-monuments)."),

    // ——— 5 ———
    h2("Naples and Campania"),
    p("Naples has a pastry culture as strong as its [pizza culture](/food/neapolitan-pizza), and the Regione Campania's own list of traditional products tells the stories behind many of its sweets — some of them clearly legends."),
    ul(
      "**Sfogliatella** — a shell-shaped pastry, either *riccia* (many crisp layers) or *frolla* (shortcrust), filled with ricotta, semolina and candied citrus. The region's account traces it to the Santa Rosa convent at Conca dei Marini on the Amalfi Coast, where a nun is said to have created its ancestor about four centuries ago; the recipe reached Naples around 1800.",
      "**Babà** — a light yeast cake soaked in rum syrup. The region repeats the story that it began at the court of the Polish king Stanisław Leszczyński, passed through France and reached Naples with the French cooks (*monsù*) of noble households, where it took its familiar mushroom shape.",
      "**Pastiera** — the Easter tart of shortcrust filled with ricotta, cooked wheat, eggs and orange-blossom water. Its origin is attached to the legend of the siren Parthenope; the region presents this as a legend, and so do we.",
      "**Struffoli** — small fried dough balls bound with honey and decorated with candied fruit and sprinkles: a Christmas sweet made in homes across Campania.",
      "**Delizia al limone** — a small sponge filled and coated with lemon cream. According to the region, it was created on the Sorrento and Amalfi coasts in the 1970s: traditional now, but not old.",
      "**Christmas biscuits** — mustaccioli, susamielli and roccocò appear in December alongside struffoli.",
    ),
    p("Lemons from the coast are protected as Limone Costa d'Amalfi and Limone di Sorrento (both PGI). See [Naples for first-time visitors](/cities/naples-first-visit)."),
    {
      type: "image",
      src: `${IMG}/naples-baba-display.webp`,
      alt: "A customer points at trays of glazed pastries in a lit glass display case at a pastry shop in Naples",
      caption: "Choosing pastries in Naples, where the babà is a fixture of the counter.",
      credit: unsplash("Cenk Batuhan Özaltun", "c_b_ozaltun"),
    },
    {
      type: "image",
      src: `${IMG}/amalfi-pasticceria.webp`,
      alt: "Tables of customers outside a historic pastry shop on the cathedral square in Amalfi, with the bell tower behind",
      caption: "A historic pasticceria on the cathedral square in Amalfi. The coast's lemons flavour many local sweets.",
      credit: unsplash("Giusi Borrasi", "giusiborrasi"),
    },

    // ——— 6 ———
    h2("Rome and Lazio"),
    p("Rome's signature pastry is the **maritozzo**, a soft, oval sweet bun split and filled with whipped cream; the traditional version includes raisins in the dough. Arsial, Lazio's agricultural agency, notes that it was added to the national list of traditional agri-food products and cites sources linking it to Lenten buns with honey, raisins and pine nuts. Today it's eaten above all at breakfast with a cappuccino — see [Italian coffee](/food/italian-coffee-culture)."),
    p("Other Roman sweets include **ricotta tarts** (crostate), sometimes with sour cherries, made with Ricotta Romana (PDO); **frappe** at Carnival; and cream puffs and fritters around the feast of San Giuseppe on 19 March. For the city itself, see [Rome in three days](/guides/rome-in-three-days)."),

    // ——— 7 ———
    h2("Tuscany"),
    p("Tuscany's sweets are often dry, spiced and nut-based — made to keep — and several are protected by the EU. It's worth being precise about where each comes from:"),
    ul(
      "**Cantucci / cantuccini** — twice-baked almond biscuits, protected as Cantuccini Toscani / Cantucci Toscani (PGI, 2016) across the region and especially associated with Prato. Dipping them in vin santo after dinner is a Tuscan custom.",
      "**Panforte di Siena** (PGI, 2013) — a dense cake of honey, sugar, nuts, candied fruit and spices, a Sienese Christmas speciality.",
      "**Ricciarelli di Siena** (PGI, 2010) — soft, diamond-shaped almond biscuits, also from Siena.",
      "**Castagnaccio** — a flat chestnut-flour cake with olive oil, pine nuts and rosemary, made in autumn and winter in Tuscany and in neighbouring Liguria and Emilia. Tuscany's chestnut flours include Farina di Neccio della Garfagnana (PDO).",
      "**Cenci** — the Tuscan name for Carnival's fried pastry ribbons, and in Florence the *schiacciata alla fiorentina*, a Carnival sponge cake.",
    ),
    p("Siena's sweets are Siena's, not Tuscany's in general — you'll find them everywhere now, but the association is local. See [Florence for first-timers](/cities/florence-for-first-timers) for Florence's pastry shops."),

    // ——— 8 ———
    h2("Piedmont and Turin"),
    p("Piedmont's sweets are built on hazelnuts — Nocciola del Piemonte is a PGI — and chocolate, and Turin has one of Italy's oldest café and chocolate cultures."),
    ul(
      "**Gianduja and the gianduiotto** — gianduja is a smooth blend of chocolate and ground hazelnuts. A widely told story links it to cocoa shortages in the Napoleonic era; the Turin firm Caffarel dates its boat-shaped gianduiotto to Carnival 1865, named after Gianduja, the city's Carnival mask.",
      "**Baci di dama** — \"lady's kisses\": two small hazelnut or almond biscuits joined with chocolate. Tortona's version is on Piedmont's list of traditional products, though other towns have their own claims.",
      "**Bonet** — a baked cocoa and amaretti pudding, common at the end of Piedmontese meals.",
      "**Bicerin** — Turin's layered drink of coffee, chocolate and cream, covered in our [coffee article](/food/italian-coffee-culture).",
    ),
    p("Our [Turin guide](/cities/turin-first-visit) covers the city's historic cafés and pastry shops."),
    {
      type: "image",
      src: `${IMG}/turin-pasticceria.webp`,
      alt: "Two people looking into the lit window of a traditional pasticceria with a dark wooden shopfront in central Turin",
      caption: "A traditional pastry shop in the centre of Turin.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 9 ———
    h2("Venice and the Veneto"),
    p("The Veneto's sweets follow its calendar, with Carnival at the centre. Several are on the region's list of traditional products:"),
    ul(
      "**Fritole** — Venetian Carnival fritters, often with raisins and pine nuts; today also filled with custard or zabaione.",
      "**Galani** — thin, crisp ribbons of fried pastry, the Venetian version of the Carnival sweet known elsewhere as chiacchiere or crostoli.",
      "**Zaleti** — small biscuits of cornmeal and raisins; the name refers to their yellow colour.",
      "**Baicoli** — thin, dry biscuits for dipping in coffee, hot chocolate or sweet wine.",
      "**Pandoro** — Verona's tall, star-shaped Christmas cake, whose name and basic recipe are regulated by an Italian ministerial decree of 2005.",
    ),
    p("**Tiramisù** is a special case. Veneto and Friuli Venezia Giulia have long disputed its origin. In 2017 the Ministry of Agriculture added two Friulian versions to the national list of traditional products; in 2024 the Tiramisù di Treviso was added for the Veneto. What's clear is that tiramisù is a 20th-century creation — which doesn't make it any less loved. For the city and its Carnival, see [our Venice guide](/cities/venice-quieter-neighbourhoods)."),
    {
      type: "image",
      src: `${IMG}/venice-tiramisu.webp`,
      alt: "A cup of tiramisù dusted with cocoa beside a plate of biscuits and nut brittle on a white tablecloth in Venice",
      caption: "Tiramisù with biscuits in Venice. The dessert's origin is disputed between the Veneto and Friuli.",
      credit: unsplash("Alexandra Tran", "alexgoesglobal"),
    },

    // ——— 10 ———
    h2("Emilia-Romagna"),
    p("Emilia-Romagna is better known for pasta than pastry, but it has distinctive sweets. Bologna's Christmas cake is the **certosino**, or *pan speziale* — a dense mix of honey, almonds, candied fruit, chocolate and spices. According to Bologna's tourism office, it was once sold by apothecaries (*speziali*) and later by Carthusian monks, hence both names. **Zuppa inglese**, a spoon dessert of liqueur-soaked sponge and custard, is widely made across the region and its neighbours. See [Bologna in two days](/cities/bologna-in-two-days)."),

    // ——— 11 ———
    h2("Sardinia"),
    p("Sardinia's sweets draw on the island's pastoral economy — cheese, ricotta, honey — and on almonds and semolina. According to the regional tourism board, pastry-making was traditionally a women's craft and is now also an artisan industry."),
    ul(
      "**Seadas (sebadas)** — a large round pastry filled with fresh, slightly sour cheese flavoured with citrus zest, fried and served hot with honey. Since 2023 it has been an EU PGI, registered under several spellings: Sebadas / Seadas / Sabadas / Seattas / Savadas / Sevadas di Sardegna.",
      "**Pardulas** — small pastry \"baskets\" filled with ricotta or cheese, often flavoured with saffron and citrus, associated with Easter.",
      "**Amaretti** — soft almond biscuits; in parts of northern Sardinia they are made with *sapa*, cooked grape must.",
    ),
    p("Recipes vary between villages, and the same sweet can have several local names."),

    // ——— 12 ———
    h2("The north"),
    p("Beyond Piedmont and the Veneto, northern Italy's sweets often use butter, cream, nuts, apples and cornmeal, and some show Alpine and Central European influences. A few examples:"),
    ul(
      "**Lombardy** — **panettone**, Milan's tall Christmas bread with raisins and candied peel; **torrone**, the nougat of almonds and honey long associated with Cremona; and **sbrisolona**, a crumbly almond cake from Mantua.",
      "**Liguria** — **pandolce genovese**, a Christmas sweet bread with dried fruit, and a share of the chestnut tradition.",
      "**Trentino-Alto Adige** — **apple strudel**, made with local apples such as Mela Alto Adige (PGI), shows the region's Austrian links.",
      "**Friuli Venezia Giulia** — **gubana**, a spiral pastry filled with nuts and dried fruit, from the Natisone valleys; and the tiramisù claim.",
    ),
    p("It's not simply \"butter in the north, olive oil and ricotta in the south\": castagnaccio uses oil and chestnuts, and hazelnuts matter as much in Lazio and Campania as in Piedmont."),

    // ——— 13 ———
    h2("Central Italy"),
    p("Besides Tuscany and Lazio, central Italy has fewer internationally known sweets but strong local ones. Abruzzo is known for the **confetti** (sugared almonds) of Sulmona, used at weddings and celebrations, and for **parrozzo**, a Pescara Christmas cake covered in chocolate. Umbria and the Marche have their own Christmas and Carnival sweets, often shared with neighbouring regions under different names. Hazelnuts from the Viterbo area (Nocciola Romana, PDO) go into biscuits such as tozzetti."),

    // ——— 14 ———
    h2("The south"),
    p("Southern sweets lean on almonds, honey, citrus, ricotta, dried fruit and durum wheat — the same pantry as the savoury cooking."),
    ul(
      "**Puglia** — the **pasticciotto**, a shortcrust pastry filled with custard, associated with Lecce and the Salento; and **cartellate**, fried pastry roses soaked in honey or cooked must at Christmas.",
      "**Calabria** — **Torrone di Bagnara** (PGI, 2014), an almond nougat from Bagnara Calabra; sweets made with dried figs (Fichi di Cosenza, PDO); and citrus such as Clementine di Calabria (PGI) and the cedro of Santa Maria del Cedro (PDO).",
      "**Basilicata** — home-made fried and almond sweets for feasts, often shared with Puglia and Calabria.",
    ),

    // ——— 15 ———
    h2("Christmas sweets"),
    p("Christmas is Italy's biggest dessert season, and each area has its own. In 2005 a ministerial decree set out what may be sold as panettone, pandoro and colomba, which is why the names mean something consistent on a label."),
    table(
      ["Sweet", "Associated with", "What it is"],
      [
        ["Panettone", "Milan, now all of Italy", "Tall leavened bread with raisins and candied peel"],
        ["Pandoro", "Verona, now all of Italy", "Tall, star-shaped buttery cake dusted with sugar"],
        ["Panforte", "Siena", "Dense honey, nut and spice cake"],
        ["Torrone", "Cremona, Calabria, Sicily and elsewhere", "Nougat of honey, egg white and nuts"],
        ["Struffoli", "Naples and Campania", "Fried dough balls with honey"],
        ["Cartellate", "Puglia", "Fried pastry roses with honey or cooked must"],
        ["Certosino", "Bologna", "Spiced honey cake with fruit and nuts"],
        ["Buccellati", "Sicily", "Pastry filled with figs and dried fruit"],
        ["Pandolce", "Genoa", "Sweet bread with dried fruit"],
      ],
    ),
    p("Supermarket panettone and pandoro are part of modern Christmas; artisan versions from bakeries and pastry shops are a different product, and many families buy both. Panettone is also eaten well into January."),
    {
      type: "image",
      src: `${IMG}/naples-christmas-sweets.webp`,
      alt: "A heap of glazed, ring-shaped Christmas biscuits studded with almonds on a tray",
      caption: "Ring-shaped Christmas biscuits in Naples, where roccocò and mustaccioli appear every December.",
      credit: unsplash("Emiliano Vittoriosi", "emilianovittoriosi"),
    },

    // ——— 16 ———
    h2("Easter sweets"),
    p("Easter ends the Lenten fast, and sweets made with eggs, ricotta and fresh cheese mark it. There's no single Italian Easter dessert:"),
    ul(
      "**Colomba** — a dove-shaped leavened cake with candied peel and an almond glaze, sold nationwide and covered by the 2005 decree.",
      "**Pastiera** — Naples and Campania.",
      "**Cassata** — Sicily, especially Palermo; Sicilian pastry shops also make marzipan lambs.",
      "**Pardulas** — Sardinia.",
      "**Easter breads and biscuits** — many southern families bake sweet breads or biscuits with whole eggs set into the dough, under local names.",
    ),

    // ——— 17 ———
    h2("Carnival sweets"),
    p("Carnival, before Lent, is the season of frying. Almost every region has its own fried sweets, and the most common — thin ribbons of dough fried and dusted with sugar — has dozens of names. Linguists at Treccani and the Accademia della Crusca have documented dozens of regional names for it."),
    table(
      ["Name", "Where you'll hear it"],
      [
        ["Chiacchiere", "Lombardy, Campania and much of the south"],
        ["Frappe", "Lazio, Umbria, Marche"],
        ["Cenci", "Tuscany"],
        ["Bugie", "Piedmont and Liguria"],
        ["Galani", "Venice and the Veneto"],
        ["Crostoli", "Trentino, Friuli and parts of the Veneto"],
      ],
      "Same family of sweets, different local names — and small differences in thickness and shape.",
    ),
    p("**Castagnole** — small fried dough balls — and Venice's **fritole** are the other Carnival classics; in Florence there's the schiacciata alla fiorentina."),
    {
      type: "image",
      src: `${IMG}/venice-carnival-costume.webp`,
      alt: "A person in an elaborate red and gold Venetian Carnival costume and white mask on a stone balcony",
      caption: "Carnival in Venice, the season of fritole and galani.",
      credit: unsplash("Graham Guenther", "pidgey"),
    },

    // ——— 18 ———
    h2("Saints' days and other feasts"),
    p("Many local sweets are tied to a saint's day or feast, although not every dessert has a religious origin, and some links were made later."),
    ul(
      "**San Giuseppe, 19 March** — zeppole in Naples and fritters or cream puffs in Rome.",
      "**Day of the Dead, 2 November** — frutta martorana in Sicily and \"bones of the dead\" biscuits in many regions.",
      "**Santa Lucia, 13 December** — cuccìa, wheat berries with ricotta, in Palermo.",
      "**Weddings and christenings** — sugared almonds (confetti), traditionally from Sulmona.",
      "**Harvest and autumn** — chestnut sweets such as castagnaccio in the Apennines, and grape-must sweets at the vintage.",
    ),

    // ——— 19 ———
    h2("The ingredients that define Italian desserts"),
    table(
      ["Ingredient", "Regions and traditions", "Common uses"],
      [
        ["Ricotta", "Sicily, Campania, Lazio, Sardinia", "Cannoli, cassata, sfogliatella, pastiera, tarts"],
        ["Almonds", "Sicily, Puglia, Sardinia, Tuscany", "Marzipan, amaretti, cantucci, ricciarelli, torrone"],
        ["Hazelnuts", "Piedmont, Lazio, Campania", "Gianduja, baci di dama, tozzetti"],
        ["Pistachios", "Sicily (Bronte)", "Creams, gelato, pastries"],
        ["Citrus", "Sicily, Campania, Calabria", "Candied peel, lemon creams, zest"],
        ["Chestnuts", "Tuscany, Liguria, Piedmont, Apennines", "Castagnaccio, chestnut-flour sweets"],
        ["Honey", "Across Italy; strong in Sardinia and the south", "Struffoli, panforte, torrone, seadas"],
        ["Chocolate", "Turin, Modica", "Gianduiotti, Modica bars, bicerin"],
        ["Mascarpone", "Lombardy and the north", "Tiramisù and creams"],
        ["Coffee", "Nationwide", "Tiramisù, affogato, granita"],
        ["Dried fruit", "The south, Siena, Genoa", "Buccellati, panforte, pandolce"],
        ["Semolina", "Campania, Sardinia", "Sfogliatella filling, Sardinian pastry"],
      ],
      "No ingredient belongs to one region alone.",
    ),

    // ——— 20 ———
    h2("Ricotta, almonds, pistachios and citrus"),
    p("These four ingredients explain a large part of southern and island pastry. **Ricotta** — sheep's milk in Sicily and Sardinia, cow's, sheep's or buffalo in Campania and Lazio — is sweetened and flavoured for fillings; it must be fresh, which is why ricotta sweets are best from a shop that makes them daily. **Almond paste** becomes marzipan fruit, soft biscuits and the base of many festive sweets. **Pistachio** has moved from a Sicilian speciality to a fashionable flavour everywhere. **Citrus** appears as candied peel in cassata, sfogliatella and panettone, and fresh in lemon creams. The ingredients themselves — Bronte pistachios, Sicilian blood oranges, Amalfi lemons — are covered in our [Sicilian food traditions](/food/sicily-food-traditions) article."),

    // ——— 21 ———
    h2("Chocolate"),
    p("Italy's two best-known chocolate traditions are very different. **Turin**'s is smooth and hazelnut-rich: gianduja, gianduiotti and a long history of chocolate-makers and cafés. **Modica**'s, in south-eastern Sicily, is grainy: its protection consortium says it is worked at low temperature without conching, so the sugar crystals remain. Cioccolato di Modica was registered as an EU PGI in 2018. Claims that either tradition preserves an unchanged ancient method should be taken as marketing rather than history."),

    // ——— 22 ———
    h2("Desserts and coffee"),
    p("Many Italian sweets are eaten not after dinner but with coffee: a cornetto or maritozzo with a cappuccino at breakfast, a pastry with an espresso mid-morning, biscuits dipped at home. After a restaurant meal, dessert is often followed by an espresso, and sometimes a digestivo. The bar and the pastry shop overlap — many *pasticcerie* have a coffee counter. See [Italian coffee](/food/italian-coffee-culture) for how to order."),

    // ——— 23 ———
    h2("Gelato, semifreddo, granita and sorbetto"),
    ul(
      "**Gelato** — Italian ice cream, usually denser and served less cold than many ice creams.",
      "**Sorbetto** — a fruit ice without milk.",
      "**Granita** — a coarser or smoother semi-frozen ice, a Sicilian speciality.",
      "**Semifreddo** — a \"half-cold\" dessert of cream and eggs, frozen in a mould and served in slices.",
      "**Affogato** — gelato \"drowned\" in a shot of espresso.",
    ),

    // ——— 24 ———
    h2("How dessert names change across Italy"),
    p("The same sweet can have several names, and the same name can mean different sweets. The Carnival ribbons above are the best-known case, but there are many others:"),
    ul(
      "**Cannoli** — in Sicily, a fried tube filled with ricotta; in many northern pastry shops, a puff-pastry horn filled with custard or cream.",
      "**Sfogliatella** — in Naples, the ricotta-filled shell; elsewhere the word may mean a generic puff pastry.",
      "**Brioche / cornetto** — the same breakfast pastry in the north and centre; in Sicily, a brioche is a round bun.",
      "**Seadas** — six spellings are protected in the EU register, reflecting Sardinian variants.",
      "**Castagnole** — the name changes locally too, and so do the fillings.",
    ),
    p("\"Traditional\" rarely means one fixed recipe. Families, towns and pastry shops each have their own version, and disagreements about the right one are part of the tradition."),

    // ——— 25 ———
    h2("Traditional and modern pastry"),
    p("Contemporary Italian pastry chefs reinterpret traditional sweets: lighter creams, less sugar, new flavours, single-portion versions of big festive cakes, and refined presentations. At the same time, many family *pasticcerie* keep heritage recipes and techniques — some of them for several generations — and the protected-name system and regional product lists document how certain sweets should be made. The two coexist: the same shop may sell a century-old pastiera recipe and a modern mousse, and customers buy both."),

    // ——— 26 ———
    h2("What to try, by destination"),
    h3("Sicily"),
    p("Cannoli filled to order, a slice of cassata, marzipan fruit, almond biscuits, and granita with brioche in summer."),
    h3("Naples and the Amalfi Coast"),
    p("Sfogliatella riccia or frolla, babà, pastiera (especially around Easter), struffoli at Christmas, and delizia al limone on the coast."),
    h3("Rome"),
    p("A maritozzo with cream at breakfast, a ricotta tart, and frappe during Carnival."),
    h3("Turin"),
    p("Gianduiotti, baci di dama, a bonet at the end of a meal and a bicerin in a historic café."),
    h3("Tuscany"),
    p("Cantucci with vin santo, panforte and ricciarelli in Siena, and castagnaccio in the colder months."),
    h3("Venice"),
    p("Fritole and galani at Carnival, baicoli and zaleti with coffee, and tiramisù — whatever its origin."),
    h3("Sardinia"),
    p("Seadas with honey, pardulas around Easter, and almond amaretti."),
    {
      type: "image",
      src: `${IMG}/verona-biscuits.webp`,
      alt: "A pile of crunchy almond biscuits studded with whole nuts at a market stall in Verona",
      caption: "Almond biscuits for sale in Verona.",
      credit: unsplash("Mike Houser", "mike_romeo_hotel"),
    },

    // ——— 27 ———
    h2("How to order desserts"),
    table(
      ["Word", "Meaning", "When you'll need it"],
      [
        ["Dolce", "Dessert, sweet", "\"Cosa avete di dolce?\" — What sweets do you have?"],
        ["Pasticceria", "Pastry shop", "Where most sweets are made and sold"],
        ["Pasticcino / mignon", "Small individual pastry", "Often sold by weight on a tray"],
        ["Fetta", "Slice", "\"Una fetta di cassata\""],
        ["Porzione", "Portion", "Used for tarts and cakes"],
        ["A peso / all'etto", "By weight / per 100 g", "Biscuits and small pastries"],
        ["Da portare via", "To take away", "The shop will wrap it"],
        ["Al banco / al tavolo", "At the counter / at a table", "Prices may differ"],
        ["Vassoio", "Tray", "Wrapped trays of pastries for visits and Sunday lunch"],
      ],
    ),

    // ——— 28 ———
    h2("Dessert etiquette"),
    ul(
      "**At a pastry shop**, you usually point, order, and either eat at the counter or take away. Some shops have you pay at the till first.",
      "**Sitting down** in a café may cost more than standing; check the price list.",
      "**Buying a tray** of small pastries to bring to someone's home — especially for Sunday lunch — is a long-standing custom.",
      "**Sharing** a dessert at a restaurant is fine; ask for two spoons (*due cucchiaini*).",
      "**Seasonal sweets are seasonal**: pastiera, colomba and fritole may be hard to find out of season, and that's part of their appeal.",
      "**Freshness matters** — ricotta and cream pastries are best the same day.",
    ),
    tip("In restaurants, desserts are often listed separately or recited by the waiter. Ask what's made in-house (*fatto in casa*).", "At a restaurant"),

    // ——— 29 ———
    h2("Glossary"),
    table(
      ["Term", "Meaning"],
      [
        ["Cannolo (pl. cannoli)", "Sicily: fried tube filled with ricotta"],
        ["Cassata", "Sicilian ricotta, sponge and marzipan cake"],
        ["Pasta reale / marzapane", "Almond paste, marzipan"],
        ["Sfogliatella", "Neapolitan shell-shaped ricotta pastry"],
        ["Babà", "Rum-soaked yeast cake, Naples"],
        ["Pastiera", "Neapolitan Easter tart of ricotta and wheat"],
        ["Struffoli", "Honey-coated fried dough balls, Naples"],
        ["Maritozzo", "Roman cream-filled bun"],
        ["Cantucci", "Tuscan twice-baked almond biscuits"],
        ["Panforte", "Sienese honey, nut and spice cake"],
        ["Ricciarelli", "Sienese soft almond biscuits"],
        ["Castagnaccio", "Chestnut-flour cake"],
        ["Gianduiotto", "Turin's hazelnut chocolate"],
        ["Baci di dama", "Nut biscuits joined with chocolate"],
        ["Fritole", "Venetian Carnival fritters"],
        ["Chiacchiere / frappe / cenci", "Carnival pastry ribbons"],
        ["Castagnole", "Small fried Carnival dough balls"],
        ["Seadas", "Sardinian cheese pastry with honey"],
        ["Pardulas", "Sardinian ricotta or cheese pastries"],
        ["Torrone", "Nougat"],
        ["Panettone / pandoro", "Milan's and Verona's Christmas cakes"],
      ],
    ),
    p("For more on regional food, see [Italian food traditions](/food/italian-food-traditions), [Italy's regional wines](/food/italian-regional-wines) — sweet wines included — and the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What are traditional Italian desserts?", answer: "Regional sweets shaped by local ingredients and the religious calendar — from Sicily's cannoli and Naples's sfogliatella to Siena's panforte, Turin's gianduiotti and Venice's fritole. Some are everyday pastry-shop classics; others appear only for Christmas, Carnival or Easter." },
    { question: "Why are Italian desserts so different from region to region?", answer: "Because of different ingredients, centuries of separate states, convent and court traditions, and local feasts. Many sweets are tied to one city." },
    { question: "What dessert is traditional in Sicily?", answer: "Cannoli, cassata, frutta martorana, almond and pistachio sweets, and granita with brioche. Ricotta, almonds, pistachios and citrus run through most of them." },
    { question: "What's the difference between cannoli and cassata?", answer: "Both use sweetened ricotta. A cannolo is a fried pastry tube; a cassata is a sponge-and-ricotta cake covered in marzipan and candied fruit." },
    { question: "What is a sfogliatella?", answer: "A Neapolitan shell-shaped pastry filled with ricotta, semolina and candied citrus, made either with crisp layers (riccia) or shortcrust (frolla)." },
    { question: "What is pastiera?", answer: "The Neapolitan Easter tart of shortcrust filled with ricotta, cooked wheat, eggs and orange-blossom water. Many families make it at home in the days before Easter." },
    { question: "What are traditional Italian Christmas desserts?", answer: "Panettone and pandoro nationwide, plus regional sweets such as panforte in Siena, struffoli in Naples, torrone, cartellate in Puglia and certosino in Bologna." },
    { question: "What are traditional Italian Easter desserts?", answer: "The colomba nationwide, pastiera in Campania, cassata in Sicily, pardulas in Sardinia and many local Easter breads." },
    { question: "What are Italian Carnival sweets?", answer: "Fried pastry ribbons (chiacchiere, frappe, cenci, bugie, galani), castagnole and, in Venice, fritole." },
    { question: "What is the difference between panettone and pandoro?", answer: "Panettone, from Milan, contains raisins and candied peel; pandoro, from Verona, is plain, buttery and star-shaped." },
    { question: "Is tiramisù from the Veneto or Friuli?", answer: "Its origin is disputed. Two Friulian versions were added to the national list of traditional products in 2017, and the Tiramisù di Treviso was added for the Veneto in 2024." },
    { question: "What are cantucci?", answer: "Twice-baked Tuscan almond biscuits, protected as Cantucci Toscani PGI, often dipped in vin santo." },
    { question: "What is gianduja?", answer: "A smooth blend of chocolate and ground hazelnuts from Turin, the basis of the gianduiotto. Piedmont's hazelnuts are protected as Nocciola del Piemonte PGI." },
    { question: "What are seadas?", answer: "Sardinian pastries filled with fresh cheese, fried and served hot with honey. They are an EU PGI." },
    { question: "Which desserts are eaten with coffee in Italy?", answer: "Breakfast pastries such as cornetti and maritozzi with a cappuccino, and biscuits like cantucci or baicoli for dipping. After a meal, dessert usually comes before the espresso." },
    { question: "Why do Italian desserts have different names in different places?", answer: "Local dialects and traditions named them independently, so the same sweet can have many names — and the same name, such as cannoli, can mean different pastries." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "PGI and PDO names and registration dates" },
    { label: "Regione Campania — traditional sweets", url: "https://agricoltura.regione.campania.it/tipici/tradizionali-dolci.htm", note: "sfogliatella, pastiera, babà, struffoli, delizia al limone (in Italian)" },
    { label: "Arsial — Maritozzo added to Lazio's traditional products", url: "https://www.arsial.it/riconosciuti-dal-masaf-nove-nuovi-pat-del-lazio-ce-anche-il-maritozzo/", note: "in Italian" },
    { label: "Veneto tourism — Frittelle alla veneziana", url: "https://www.veneto.eu/IT/Frittelle-veneziana/", note: "in Italian" },
    { label: "Regione Veneto — traditional products", url: "https://www.regione.veneto.it/web/agricoltura-e-foreste/prodotti-tradizionali", note: "in Italian" },
    { label: "SardegnaTurismo — traditional sweets", url: "https://www.sardegnaturismo.it/it/ogni-festa-e-buona-con-i-dolci-della-tradizione", note: "in Italian" },
    { label: "Piemonte Agri Qualità — Baci di dama di Tortona", url: "https://www.piemonteagri.it/qualita/it/prodotti/paste-e-dolci/272-baci-di-dama-di-tortona", note: "in Italian" },
    { label: "Caffarel — Il Gianduiotto", url: "https://caffarel.com/gianduiotto/", note: "company history (in Italian)" },
    { label: "Bologna Welcome — Certosino di Bologna", url: "https://www.bolognawelcome.com/en/other/recipes-and-typical-products/certosino-di-bologna-2" },
    { label: "Regione Toscana — Farina di Neccio della Garfagnana DOP", url: "https://www.regione.toscana.it/-/farina-di-neccio-della-garfagnana-dop", note: "in Italian" },
    { label: "Treccani — Parole e sapori di Carnevale", url: "https://www.treccani.it/magazine/lingua_italiana/articoli/scritto_e_parlato/parole_carnevale.html", note: "in Italian" },
    { label: "Gazzetta Ufficiale — Decree of 22 July 2005", url: "https://www.gazzettaufficiale.it/eli/id/2005/08/01/05A07670/sg", note: "panettone, pandoro and colomba" },
    { label: "Consorzio di Tutela del Cioccolato di Modica", url: "https://www.cioccolatodimodica.it/", note: "production method" },
    { label: "Regione Veneto — Tiramisù di Treviso added to the traditional-products list (2024)", url: "https://www.regione.veneto.it/article-detail?articleId=13984088", note: "in Italian" },
    { label: "ANSA — Tiramisù listed as a Friulian traditional product (2017)", url: "https://www.ansa.it/canale_terraegusto/notizie/prodotti_tipici/2017/08/05/friuli-brucia-il-veneto-e-suo-il-tiramisu-tradizionale_37ade614-a40c-4886-9df2-4497db376292.html", note: "in Italian" },
  ],
};
