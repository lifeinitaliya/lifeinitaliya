import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Italian Food Traditions" — the rebuilt version of the site's
// original short food-customs piece, kept at its established URL. It is the
// broad food-culture article; coffee, Roman pasta, pizza, Sicily, desserts,
// markets and wine have their own articles and are linked rather than repeated.
// Every PDO/PGI name was checked in the EU's eAmbrosia register in September
// 2026; the TSG status of Pizza Napoletana against Regulation (EU) 97/2010;
// the EU label definitions on the European Commission's site; UNESCO listings
// on ich.unesco.org; PAT rules via the Italian Ministry of Agriculture; the
// Pane Toscano and Pecorino Romano details with their consortia; and the 2005
// decree on panettone, pandoro and colomba in the Gazzetta Ufficiale. City
// food facts reuse those verified for our city guides. Origin stories that
// could not be supported are left out or phrased as associations.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/italian-food-traditions";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const italianFoodTraditions: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Why is Italian food so regional?"),
    answer("**There isn't one Italian cuisine so much as many local ones.** What people eat in Italy has been shaped by **geography** — Alps, plains, hills, long coastlines and islands — by **climate** and what grows or grazes there, by **centuries of separate states** before unification in 1861, by **trade and migration**, and by **religious and family calendars**. The result is that a dish famous in one city may be unknown a few hours away, and the same dish may be made differently in the next town. Understanding that is the key to eating well in Italy."),
    p("In 2025 UNESCO added \"Italian cooking, between sustainability and biocultural diversity\" to its Representative List of the Intangible Cultural Heritage of Humanity, describing it as a blend of culinary traditions tied to raw materials, artisanal techniques, anti-waste recipes and shared time at the table. It joins two earlier inscriptions involving Italy: the Mediterranean diet, shared with other Mediterranean countries, and the art of the Neapolitan *pizzaiuolo*. None of these recognises a single fixed cuisine; together they describe a way of cooking and eating that varies from place to place."),
    p("This feature explains where that variety comes from and how to read it as a visitor: the regions, the staples, the meal, the seasons and the calendar. For individual topics, see our articles on [Italian coffee](/food/italian-coffee-culture), [Sicilian food](/food/sicily-food-traditions), [traditional desserts](/food/traditional-italian-desserts) and [regional wines](/food/italian-regional-wines)."),

    // ——— 2 ———
    h2("What shapes regional food"),
    p("A handful of forces explain most of Italy's regional differences. They work together, and none is the whole story."),
    ul(
      "**Mountains and plains** — the Alps and Apennines favour dairy, cured meats, chestnuts and hearty grains; the flat Po plain is one of Europe's great farming areas, with rice, maize and livestock.",
      "**The sea** — Italy's long coastline and islands put fish and seafood at the centre of many local cooking traditions.",
      "**Climate** — olive trees, citrus and durum wheat thrive in the warmer centre and south; butter and cream appear more often in the colder north, although olive oil is used everywhere.",
      "**Preservation** — before refrigeration, curing, drying, salting and preserving in oil turned seasonal gluts into year-round food, and many of those techniques became specialities.",
      "**History** — until 1861 the peninsula was divided among kingdoms, duchies, republics and the Papal States, with different rulers, trading partners and borders. Coastal cities traded across the Mediterranean; the north looked towards central Europe.",
      "**New crops** — tomatoes, maize, potatoes and peppers came from the Americas after the 16th century and were adopted gradually. According to the EU specification for Pizza Napoletana, tomato began to be used on pizza in Naples in the early 18th century.",
      "**Family and community** — recipes pass from one generation to the next and differ between households, which is why \"the\" recipe for a dish is so often disputed.",
    ),
    {
      type: "image",
      src: `${IMG}/tuscany-olive-grove-artimino.webp`,
      alt: "Rows of olive trees on a hillside in Tuscany, with a hill village and wooded ridges behind at dusk",
      caption: "Olive groves near Artimino, in Tuscany. Landscape and climate decide what's grown — and what's cooked.",
      credit: unsplash("Andreas Weilguny", "aweilguny"),
      wide: true,
    },

    // ——— 3 ———
    h2("Northern Italy"),
    p("The north stretches from the Alps across the Po plain to the Ligurian and Adriatic coasts, and its food is as varied as that geography."),
    ul(
      "**Piedmont** — filled pasta such as agnolotti, rich multi-course menus, hazelnuts (Nocciola del Piemonte IGP) and, around Alba, white truffles in autumn. Turin has a long café and chocolate culture, and Vermouth di Torino is a protected geographical indication.",
      "**Lombardy** — rice and butter: risotto alla milanese with saffron, ossobuco, cotoletta. Cheeses include Gorgonzola, Taleggio and Grana Padano (all PDO), and in the Valtellina, buckwheat pizzoccheri (IGP) and Bresaola della Valtellina (IGP).",
      "**Veneto** — risotto in many versions, polenta, seafood from the lagoon and, in Venice, *cicchetti* in wine bars. Verona is associated with pandoro and with Vialone Nano rice (Riso Nano Vialone Veronese IGP).",
      "**Liguria** — basil (Basilico Genovese PDO) and pesto, focaccia, and the cheese-filled Focaccia di Recco col formaggio (IGP).",
      "**Emilia-Romagna** — fresh egg pasta such as tagliatelle and tortellini, Parmigiano Reggiano, Prosciutto di Parma and Culatello di Zibello (PDO), Mortadella Bologna (IGP) and traditional balsamic vinegar of Modena (PDO).",
      "**Trentino-Alto Adige** — Alpine and Austrian influences: bread dumplings (canederli), Speck Alto Adige (IGP), apple strudel.",
      "**Friuli Venezia Giulia** — Prosciutto di San Daniele (PDO) and dishes shaped by its borders with Austria and Slovenia.",
    ),
    p("Our guides to [Milan](/cities/milan-beyond-the-duomo), [Turin](/cities/turin-first-visit), [Verona](/cities/verona-first-visit), [Venice](/cities/venice-quieter-neighbourhoods), [Bologna](/cities/bologna-in-two-days) and [the Dolomites](/guides/visiting-the-dolomites) cover local food in more detail."),
    {
      type: "image",
      src: `${IMG}/bologna-cheese-ham-stall.webp`,
      alt: "A market stall in Bologna stacked with wheels of cheese, cured hams and salami, draped with an Italian flag",
      caption: "Cheese and cured meats at a stall in Bologna, in the heart of Emilia-Romagna's food country.",
      credit: unsplash("Kristijan Arsov", "aarsoph"),
    },

    // ——— 4 ———
    h2("Central Italy"),
    p("The centre is a land of hills, olive groves, sheep and pigs, and bread — cooking that often makes much of a few good ingredients."),
    ul(
      "**Tuscany** — bread is central: Pane Toscano (PDO) is made without salt, according to its consortium, and turns up in soups such as ribollita. Florence is known for bistecca alla fiorentina and lampredotto; the countryside for Pecorino Toscano (PDO), olive oil, Lardo di Colonnata (IGP) and, in Siena, panforte, ricciarelli and cantucci (all IGP).",
      "**Lazio** — Rome's pasta — carbonara, cacio e pepe, gricia and amatriciana — built on guanciale and Pecorino Romano; Carciofo Romanesco del Lazio (IGP) artichokes in spring; and Porchetta di Ariccia (IGP).",
      "**Umbria** — legumes such as Lenticchia di Castelluccio di Norcia (IGP), pork and cured meats, black truffles and olive oil.",
      "**Marche** — a long Adriatic coast and inland hills: fish soups on the coast, meat and baked pasta inland.",
      "**Abruzzo** — pastoral and coastal traditions: lamb skewers (arrosticini), sheep's cheeses and *maccheroni alla chitarra*, cut on a stringed frame.",
    ),
    p("Read more in [Florence for first-timers](/cities/florence-for-first-timers) and [Rome in three days](/guides/rome-in-three-days)."),
    {
      type: "image",
      src: `${IMG}/florence-fresh-pasta-sant-ambrogio.webp`,
      alt: "Trays of fresh filled pasta — cappellacci and ravioli — with handwritten price labels at a market in Florence",
      caption: "Fresh filled pasta at the Sant'Ambrogio market in Florence.",
      credit: unsplash("mana5280", "mana5280"),
    },

    // ——— 5 ———
    h2("Southern Italy"),
    p("The south is often summed up as tomatoes and dried pasta, which is fair as far as it goes — but it leaves out a great deal: vegetables, legumes, fish, cheeses, breads and preserves. And southern food isn't uniformly spicy: chilli matters in Calabria and elsewhere, far less in many dishes."),
    ul(
      "**Campania** — [Neapolitan pizza](/food/neapolitan-pizza) (Pizza Napoletana is a Traditional Speciality Guaranteed), Mozzarella di Bufala Campana (PDO), dried pasta from Gragnano (Pasta di Gragnano IGP), San Marzano tomatoes (PDO) and, on the Amalfi Coast, Colatura di alici di Cetara (PDO), an anchovy extract.",
      "**Puglia** — orecchiette and other durum-wheat pasta, Pane di Altamura (PDO), Burrata di Andria (IGP), Mozzarella di Gioia del Colle and Canestrato Pugliese (PDO), and olive oil such as Terra di Bari (PDO).",
      "**Basilicata** — an inland, pastoral region with sheep's cheeses such as Pecorino di Filiano (PDO), legumes and cured pork.",
      "**Calabria** — Caciocavallo Silano (PDO), Liquirizia di Calabria (PDO) and spicy spreadable 'nduja — a traditional product with no EU label, which shows that protection and tradition aren't the same thing.",
    ),
    p("See [Naples for first-time visitors](/cities/naples-first-visit)."),

    // ——— 6 ———
    h2("Sicily and Sardinia"),
    h3("Sicily"),
    p("Sicily's cooking reflects a long history of rule and trade — Greek, Roman, Byzantine, Arab, Norman, Spanish and more. UNESCO describes Palermo's Arab-Norman monuments as evidence of a syncretism of Western, Islamic and Byzantine cultures, and ingredients common in Sicilian cooking — almonds, citrus, sweet-and-sour (*agrodolce*) flavours — are often linked to that mix, although no single influence explains the whole cuisine. Local agriculture and the sea matter just as much: blood oranges (Arancia Rossa di Sicilia IGP), pistachios from Bronte (PDO), capers from Pantelleria (IGP), cheeses such as Ragusano and Pecorino Siciliano (PDO), chocolate from Modica (IGP) and abundant fish."),
    p("Palermo's street food and markets are among the liveliest in Italy — see [Palermo's markets and monuments](/cities/palermo-markets-monuments) and [Sicilian food traditions](/food/sicily-food-traditions)."),
    h3("Sardinia"),
    p("Sardinia's food grew from sheep-rearing and farming as much as the sea. Its breads include thin, crisp *pane carasau*; its cheeses include Pecorino Sardo and Fiore Sardo (both PDO), and most Pecorino Romano is also made on the island — its consortium lists Sardinia, Lazio and the province of Grosseto as the production areas. Pasta traditions include *malloreddus* and *fregola*, and the filled Culurgionis d'Ogliastra (IGP). Sardinian cooking has its own character, but it has always been connected to the mainland and the wider Mediterranean."),

    // ——— 7 ———
    h2("A regional snapshot"),
    table(
      ["Region", "Representative traditions", "Example foods", "Typical ingredients"],
      [
        ["Piedmont", "Multi-course menus, cafés, autumn truffles", "Agnolotti, bicerin, gianduiotti", "Hazelnuts, beef, rice, white truffles"],
        ["Lombardy", "Rice and butter cooking", "Risotto alla milanese, cotoletta, panettone", "Rice, butter, cheeses"],
        ["Veneto", "Lagoon cooking, wine-bar snacks", "Cicchetti, risotto, bigoli, polenta", "Seafood, rice, maize"],
        ["Liguria", "Herbs and focaccia", "Pesto, trofie, focaccia", "Basil, olive oil, pine nuts"],
        ["Emilia-Romagna", "Fresh egg pasta and cured meats", "Tagliatelle al ragù, tortellini", "Eggs, pork, Parmigiano Reggiano"],
        ["Tuscany", "Bread-based cooking, grilled meats", "Ribollita, bistecca, lampredotto", "Unsalted bread, beans, olive oil"],
        ["Lazio", "Roman pasta classics", "Carbonara, cacio e pepe, supplì", "Guanciale, Pecorino Romano, artichokes"],
        ["Campania", "Pizza and dried pasta", "Pizza, pasta and seafood", "Tomatoes, buffalo mozzarella, durum wheat"],
        ["Puglia", "Durum-wheat pasta and bread", "Orecchiette, Pane di Altamura", "Olive oil, vegetables, fresh cheeses"],
        ["Sicily", "Street food and sweets", "Arancine, panelle, cannoli", "Citrus, almonds, pistachios, fish"],
        ["Sardinia", "Pastoral cooking", "Pane carasau, culurgionis, malloreddus", "Sheep's cheeses, durum wheat"],
      ],
      "A handful of examples per region — not the full picture.",
    ),

    // ——— 8 ———
    h2("Pasta is regional"),
    p("\"Italian pasta\" is really hundreds of local shapes, each tied to a place, a kind of flour and the sauces that suit it. Broadly, the north has a strong tradition of fresh egg pasta, while the south is known for durum-wheat pasta, both dried and fresh — but there are many exceptions, and families and towns make shapes their own way."),
    table(
      ["Pasta", "Associated with", "Traditional context"],
      [
        ["Tagliatelle", "Emilia-Romagna", "Fresh egg ribbons, classically with ragù in Bologna"],
        ["Tortellini", "Bologna and Modena", "Small filled pasta, often served in broth in winter"],
        ["Trofie", "Liguria", "Short twists, commonly served with pesto"],
        ["Bigoli", "Veneto", "Thick strands; bigoli in salsa, with onion and anchovy, in Venice"],
        ["Pizzoccheri", "Valtellina, Lombardy", "Buckwheat pasta, protected as Pizzoccheri della Valtellina IGP"],
        ["Pici", "Tuscany, especially around Siena", "Thick hand-rolled strands"],
        ["Bucatini", "Lazio", "Hollow strands, used for amatriciana in Rome"],
        ["Maccheroni alla chitarra", "Abruzzo", "Cut on a stringed wooden frame (the chitarra)"],
        ["Orecchiette", "Puglia", "\"Little ears\" of durum wheat, often with greens"],
        ["Cavatelli", "Across the south", "Short shells of durum-wheat dough"],
        ["Malloreddus", "Sardinia", "Small ridged shells"],
        ["Culurgionis", "Ogliastra, Sardinia", "Filled pasta, protected as Culurgionis d'Ogliastra IGP"],
      ],
      "Associations, not boundaries: many shapes are made well beyond their home region.",
    ),
    p("Sauces follow shapes: long, thin strands suit oil- and tomato-based sauces; ridged and hollow shapes hold chunkier ones; filled pasta may need little more than butter or broth. These are conventions rather than laws, and cooks break them."),
    {
      type: "image",
      src: `${IMG}/rome-handmade-pasta.webp`,
      alt: "Two cooks in white hats rolling fresh pasta by hand at a counter in a shop window in Rome",
      caption: "Pasta made by hand in a shop window in Rome.",
      credit: unsplash("Matej Buchla", "matejbuchla"),
    },

    // ——— 9 ———
    h2("Bread"),
    p("Bread is on the table at almost every meal, and every region has its own. A few examples:"),
    ul(
      "**Pane Toscano** (PDO) — made without salt, which suits Tuscany's salty cured meats and bread soups.",
      "**Pane di Altamura** (PDO) — a durum-wheat bread from Puglia.",
      "**Focaccia** — in Liguria, a flat, oily bread eaten at any time of day; Focaccia di Recco col formaggio (IGP) is a thin, cheese-filled version.",
      "**Pane carasau** — Sardinia's thin, crisp sheets of bread, which keep for a long time.",
      "**Schiacciata and piadina** — Tuscan flatbread and Romagna's flatbread (Piadina Romagnola IGP), both eaten filled.",
      "**Festive breads** — from panettone at Christmas to the colomba at Easter (see below).",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-focaccia-bakery.webp`,
      alt: "A bakery counter in Genoa with trays of focaccia and loaves on shelves behind, and a baker at work",
      caption: "A focaccia bakery in Genoa, where focaccia is breakfast, snack and lunch.",
      credit: unsplash("Waleed Derhem", "waleed_rbeshr"),
    },

    // ——— 10 ———
    h2("Cheese"),
    p("Italy's cheeses follow its animals and landscapes: cow's-milk cheeses in the Alps and the Po plain, sheep's cheeses in the centre, south and islands, and buffalo mozzarella in Campania. Many have protected names — among them Parmigiano Reggiano, Grana Padano, Gorgonzola, Taleggio, Asiago, Fontina, Pecorino Romano, Pecorino Toscano, Pecorino Sardo and Mozzarella di Bufala Campana, all PDO — but countless local cheeses have no EU label at all, and are no less traditional for that."),
    ul(
      "**Hard, long-aged cheeses** such as Parmigiano Reggiano and Grana Padano are grated over pasta and eaten in chunks.",
      "**Pecorino** means sheep's-milk cheese, and there are many: Romano, Toscano, Sardo, Siciliano and others, each with its own character.",
      "**Fresh cheeses** such as mozzarella, burrata and ricotta are eaten as soon as possible after they're made.",
      "**Mountain cheeses** from Alpine pastures vary with the altitude and season.",
    ),

    // ——— 11 ———
    h2("Olive oil"),
    p("Olive oil is the everyday cooking fat in most of Italy and the finishing touch on countless dishes. Olives are grown from Liguria to Sicily, with major production in the south, and many oils carry protected names — for example Riviera Ligure and Terra di Bari (PDO), and Toscano (IGP). Different local olive varieties give different flavours, from mild to peppery and bitter. *Extra vergine* (extra virgin) is the top grade under EU rules. In autumn and early winter, new oil (*olio nuovo*) is pressed and celebrated in many producing areas."),
    {
      type: "image",
      src: `${IMG}/cappuccino-cornetti.webp`,
      alt: "A cappuccino with latte art beside two sugar-dusted cornetti filled with jam and cream on a marble table",
      caption: "Cappuccino and cornetti: a common Italian breakfast at the bar.",
      credit: unsplash("Andrea Riezzo", "andriezzo"),
    },

    // ——— 12 ———
    h2("Rice and polenta"),
    p("In much of northern Italy, rice and polenta matter as much as pasta. According to the Italian Ministry of Agriculture, Italy is Europe's leading rice producer, and the great majority of its rice fields lie in Piedmont and Lombardy, around Vercelli, Novara and Pavia. Rice varieties bred for risotto absorb liquid while staying firm; protected rices include Riso di Baraggia Biellese e Vercellese (PDO) and Riso Nano Vialone Veronese (IGP). Risotto takes many regional forms, from saffron in Milan to cuttlefish ink in Venice and Amarone wine around Verona."),
    p("Polenta, a porridge of cornmeal, became a staple of the north after maize arrived from the Americas. It's served soft or set and grilled, with stews, cheese, mushrooms or fish, and it remains typical of the Veneto, Lombardy, Friuli and the Alps."),

    // ——— 13 ———
    h2("The Italian meal"),
    p("A traditional Italian meal follows a clear structure. It's a framework for a full, often festive meal — not a rule for every lunch and dinner. Most people eat one or two courses on an ordinary day, and restaurants don't expect you to order everything."),
    table(
      ["Course", "What it is"],
      [
        ["Aperitivo", "A pre-dinner drink, often with snacks"],
        ["Antipasto", "Starters: cured meats, cheeses, vegetables, seafood"],
        ["Primo", "First course: pasta, risotto, soup or gnocchi"],
        ["Secondo", "Main course: meat or fish"],
        ["Contorno", "Side dish of vegetables or salad, ordered with the secondo"],
        ["Formaggi / frutta", "Cheese or fruit, in some meals"],
        ["Dolce", "Dessert"],
        ["Caffè", "An espresso, after the meal"],
        ["Digestivo", "A digestive such as an amaro or grappa"],
      ],
      "The full sequence belongs to long lunches and special occasions.",
    ),
    tip("It's normal to order a primo and a contorno, or an antipasto to share and a secondo. Order what you'll enjoy.", "One or two courses is fine"),

    // ——— 14 ———
    h2("Breakfast"),
    p("Breakfast is usually light and often sweet, and many people have it standing at a bar: a cappuccino or espresso with a cornetto or another pastry. At home it may be coffee with biscuits, bread and jam, or yoghurt. There are regional variations — a maritozzo filled with cream in Rome, and in Sicily, particularly in summer, granita with a brioche. Cappuccino is mostly a morning drink; later in the day most Italians order an espresso — but nobody will refuse to serve you one. Read more in [Italian coffee culture](/food/italian-coffee-culture)."),

    // ——— 15 ———
    h2("Aperitivo and eating together"),
    p("*Aperitivo* — an early-evening drink with something to eat — is a social ritual in many cities, especially in the north. It takes different local forms: vermouth in Turin; a spritz in the Veneto; in Venice, *cicchetti* — small snacks eaten standing at the counter of a *bacaro* — with an *ombra*, a small glass of wine; and in Milan, bars that serve generous plates or buffets with the drink. The buffet version, sometimes called *apericena*, is a more recent development and can replace dinner; traditional aperitivo is lighter. Beyond the drink, food in Italy is above all social: long Sunday lunches, family festivals and village *sagre* (food fairs) are where many traditions are kept alive."),

    // ——— 16 ———
    h2("Markets"),
    p("Markets show what a place eats and what's in season. Fresh produce, cheeses, cured meats, fish and bread are laid out by producers and traders, and in many cities markets double as places for a quick lunch. Our guide to [Italian food markets](/food/italian-food-markets) explains the different kinds and how to shop at them."),
    ul(
      "**Florence** — the Mercato Centrale, with its food hall upstairs, and the neighbourhood market at Sant'Ambrogio.",
      "**Bologna** — food shops and market stalls around the old centre, selling fresh pasta, cheeses and cured meats.",
      "**Palermo** — street markets such as Ballarò, where fruit, fish and street food share the lanes.",
      "**Venice** — the Rialto market, with its fish and produce stalls beside the Grand Canal.",
      "**Genoa** — the covered Mercato Orientale.",
    ),
    p("Go in the morning, buy small amounts and ask before handling produce."),
    {
      type: "image",
      src: `${IMG}/palermo-ballaro-market.webp`,
      alt: "A crowded counter at Ballarò market in Palermo, piled with cheeses, olives, cured meats and prepared foods",
      caption: "Ballarò, one of Palermo's historic street markets.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },

    // ——— 17 ———
    h2("Eating by season"),
    p("Italian menus change with the seasons, and restaurants often write the dishes of the day on a board. Seasons vary with latitude and altitude — spring comes weeks earlier in Sicily than in the Alps — so these are broad patterns, not a calendar."),
    table(
      ["Season", "Typical produce", "What you might see on menus"],
      [
        ["Spring", "Artichokes, asparagus, broad beans, peas, early greens", "Artichokes in Rome; risotto with spring vegetables"],
        ["Summer", "Tomatoes, aubergines, peppers, courgettes, peaches, melons", "Cold dishes, grilled vegetables, seafood"],
        ["Autumn", "Mushrooms, chestnuts, grapes, truffles, new olive oil", "Truffle dishes in Piedmont; chestnuts and game"],
        ["Winter", "Legumes, cabbages and kale, citrus in the south", "Bean soups such as ribollita; stews; tortellini in brodo"],
      ],
      "Availability varies by region and year.",
    ),
    p("Autumn is harvest time: grapes, olives, chestnuts and mushrooms, and around Alba the white truffle. The International Alba White Truffle Fair runs on weekends from 10 October to 6 December in 2026. For timing a trip, see our guide to the [best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 18 ———
    h2("Festivals and the religious calendar"),
    p("Many of Italy's best-known foods belong to a particular day or season. Some are eaten nationwide; many are local."),
    ul(
      "**Christmas** — panettone, associated with Milan, and pandoro, associated with Verona, are eaten across Italy; Italian law has defined what can be sold as panettone, pandoro and colomba since a 2005 decree. Local sweets include panforte and ricciarelli in Siena and struffoli in Naples.",
      "**Christmas Eve and New Year** — many families eat fish on Christmas Eve, and lentils — a symbol of prosperity — with cotechino or zampone at New Year.",
      "**Carnival** — fried pastries eaten across Italy under many regional names: chiacchiere, frappe, crostoli, bugie and more.",
      "**Easter** — the dove-shaped colomba, Neapolitan pastiera and many regional Easter breads, some baked with whole eggs.",
      "**Saints' days** — patron saints bring local specialities; in Palermo, for example, arancine are eaten on 13 December, the feast of Santa Lucia.",
      "**Sagre** — local food festivals, usually in summer and autumn, celebrating a single product, from chestnuts to fish.",
    ),
    p("Read more in [traditional Italian desserts](/food/traditional-italian-desserts)."),
    {
      type: "image",
      src: `${IMG}/panettoni-for-sale.webp`,
      alt: "Panettoni wrapped in clear cellophane with red ribbons on a stall covered with a red cloth",
      caption: "Panettoni for sale at Christmas, when they appear all over Italy.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 19 ———
    h2("Street food"),
    p("Every region has food to eat standing up. Names and recipes are often matters of local pride — and debate."),
    ul(
      "**Arancine / arancini** — fried rice balls from Sicily. In Palermo the word is feminine, *arancina*, and they're usually round; in eastern Sicily it's *arancino*, often cone-shaped. Both are correct locally.",
      "**Panelle and sfincione** — chickpea fritters and a thick, spongy pizza, in Palermo.",
      "**Supplì** — Rome's fried rice croquettes.",
      "**Pizza al taglio** — pizza by the slice, sold by weight, especially in Rome.",
      "**Lampredotto** — tripe in a bread roll, from Florence's kiosks.",
      "**Piadina** — Romagna's flatbread, filled with cheese, ham or greens.",
      "**Focaccia** — Liguria's everyday snack.",
      "**Porchetta** — rolled roast pork, often in a sandwich; Porchetta di Ariccia (IGP) comes from the Castelli Romani near Rome.",
      "**Panzerotti** — fried filled half-moons of dough, associated with Puglia.",
    ),

    // ——— 20 ———
    h2("Preserving: curing, drying and salting"),
    p("Many of Italy's most famous foods began as ways to make a harvest or a slaughter last. Curing, drying, salting, smoking, fermenting and preserving in oil all have long local histories, and the results are now specialities in their own right."),
    ul(
      "**Curing** — hams such as Prosciutto di Parma and Prosciutto di San Daniele (PDO), Culatello di Zibello (PDO), Bresaola della Valtellina (IGP) and Speck Alto Adige (IGP), which is also smoked.",
      "**Salting** — Lardo di Colonnata (IGP), cured in marble basins in Tuscany; capers from Pantelleria (IGP); anchovies.",
      "**Fermenting and extracting** — Colatura di alici di Cetara (PDO), made from salted anchovies on the Amalfi Coast.",
      "**Drying** — pasta, sun-dried tomatoes, dried figs and legumes, and ageing for hard cheeses.",
      "**Preserving in oil** — vegetables such as aubergines and artichokes *sott'olio*, and tuna.",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-sun-dried-tomatoes.webp`,
      alt: "Crates of dark red sun-dried tomatoes with price labels at a market stall in Genoa",
      caption: "Sun-dried tomatoes at the Mercato Orientale in Genoa — preservation turned summer into year-round food.",
      credit: unsplash("Elisabeth Bertrand", "dolcevia"),
    },

    // ——— 21 ———
    h2("DOP, IGP, STG and PAT: what the labels mean"),
    p("Italy has hundreds of protected names for food and wine. The labels are useful, but they measure specific rules — not whether something is \"real\" Italian food."),
    table(
      ["Label", "In English", "What it means"],
      [
        ["DOP", "PDO — Protected Designation of Origin", "Every stage of production, processing and preparation takes place in the defined area, according to the European Commission"],
        ["IGP", "PGI — Protected Geographical Indication", "The product's quality or reputation is linked to the area, and at least one stage of production takes place there"],
        ["STG", "TSG — Traditional Speciality Guaranteed", "Protects a traditional recipe or production method rather than a place — for example Pizza Napoletana"],
        ["PAT", "Traditional agri-food product (Italian list)", "Products whose methods have been practised locally for at least 25 years, listed nationally by the Italian Ministry of Agriculture"],
      ],
    ),
    p("DOP, IGP and STG are EU schemes with legally binding specifications. PAT is an Italian national list, updated each year; according to the Ministry, the 2025 update brought it to more than 5,700 products. Plenty of traditional foods have no label at all."),

    // ——— 22 ———
    h2("What \"authentic\" means"),
    p("Arguments about the \"authentic\" version of a dish are part of Italian food culture — but authenticity rarely means a single fixed recipe. Recipes vary from town to town and family to family; restaurants adapt dishes; historical recipes change as ingredients and tastes change; and several traditions can coexist in one city. Protected products do have fixed specifications, but most dishes don't. A better question than \"is this authentic?\" is \"is this how it's made here?\""),

    // ——— 23 ———
    h2("Common misconceptions"),
    ul(
      "**\"Italian food is pizza and pasta.\"** They're important, but rice, polenta, bread, soups, vegetables, legumes, fish and cheese are just as central in many regions.",
      "**\"Every region cooks the same way.\"** Cooking changes between regions, provinces and even neighbouring towns.",
      "**\"You can never order cappuccino after breakfast.\"** It's mostly a morning drink, but it's a habit, not a rule.",
      "**\"Every meal has every course.\"** The full sequence is for special occasions.",
      "**\"There's one authentic recipe.\"** Most dishes exist in many legitimate versions.",
      "**\"Any sauce goes with any pasta.\"** Shapes and sauces are usually matched — although conventions vary.",
      "**\"Italian food is always heavy.\"** Everyday Italian food is often simple and vegetable-based; rich dishes belong to particular places and occasions.",
      "**\"Every regional dish is ancient.\"** Some are old, others are 19th- or 20th-century creations, and many have changed over time.",
    ),

    // ——— 24 ———
    h2("How to experience Italian food traditions"),
    ul(
      "**Visit a market in the morning** and see what's in season.",
      "**Order regional dishes** — ask what's local (*un piatto tipico?*), and look for the dishes of the day.",
      "**Eat seasonally** — the specials board usually tells you.",
      "**Try neighbourhood trattorias and osterie** away from the main sights.",
      "**Go to bakeries and pastry shops** for regional breads and sweets.",
      "**Take a food tour or cooking class** to learn from people who know the area.",
      "**Learn a few menu words** (see below).",
      "**Time a trip for a sagra or seasonal fair**, from truffles to chestnuts.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-mercato-centrale-stall.webp`,
      alt: "Customers at a busy counter in Florence's Mercato Centrale, below hanging hams, salami and wheels of cheese",
      caption: "A cheese and cured-meat counter at Florence's Mercato Centrale.",
      credit: unsplash("Tushar Agarwal", "tagag"),
    },

    // ——— 25 ———
    h2("Menu words to know"),
    table(
      ["Italian", "Meaning"],
      [
        ["Antipasto", "Starter"],
        ["Primo", "First course (pasta, risotto, soup)"],
        ["Secondo", "Main course (meat or fish)"],
        ["Contorno", "Side dish"],
        ["Dolce", "Dessert"],
        ["Piatto del giorno", "Dish of the day"],
        ["Di stagione", "Seasonal"],
        ["Fatto in casa", "Homemade"],
        ["Al forno", "Baked"],
        ["Alla griglia", "Grilled"],
        ["Fritto", "Fried"],
        ["Coperto", "Cover charge, per person"],
      ],
    ),
    p("For planning the rest of your trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Why is Italian food so regional?", answer: "Because of geography and climate, centuries of separate states before unification in 1861, trade and migration, and local farming and preservation traditions. Recipes also vary between families and towns." },
    { question: "What are the main regional cuisines of Italy?", answer: "Every region has its own, but broadly: northern cooking with rice, polenta, butter and fresh egg pasta; central cooking built on bread, legumes, olive oil and grilled meats; southern cooking with durum wheat, tomatoes, vegetables and seafood; and the distinct traditions of Sicily and Sardinia." },
    { question: "What does a traditional Italian meal look like?", answer: "Antipasto, primo, secondo with a contorno, dessert and coffee — but that's the structure of a full or festive meal. On a normal day most people eat one or two courses." },
    { question: "What is a primo?", answer: "The first course: usually pasta, risotto, soup or gnocchi." },
    { question: "What is an antipasto?", answer: "A starter, such as cured meats, cheeses, vegetables or seafood, often shared." },
    { question: "What is aperitivo?", answer: "An early-evening drink with snacks, before dinner. It varies by city — vermouth in Turin, spritz and cicchetti in the Veneto, larger buffets in some Milan bars." },
    { question: "Which foods are traditional in northern Italy?", answer: "Risotto, polenta, fresh egg pasta such as tagliatelle and tortellini, cheeses such as Parmigiano Reggiano and Gorgonzola, cured meats, pesto in Liguria and speck in Alto Adige." },
    { question: "What foods are associated with southern Italy?", answer: "Dried durum-wheat pasta, tomatoes, vegetables, olive oil, seafood and cheeses such as buffalo mozzarella and burrata — plus Neapolitan pizza, orecchiette in Puglia and 'nduja in Calabria." },
    { question: "What are common Italian pasta shapes by region?", answer: "Tagliatelle and tortellini in Emilia-Romagna, trofie in Liguria, bigoli in the Veneto, pici in Tuscany, maccheroni alla chitarra in Abruzzo, orecchiette in Puglia and malloreddus in Sardinia, among many others." },
    { question: "What are DOP and IGP foods?", answer: "EU-protected names. DOP (PDO) products are made entirely in their defined area; IGP (PGI) products have at least one stage of production there and a reputation linked to it." },
    { question: "What do Italians typically eat for breakfast?", answer: "Often something light and sweet: a cappuccino or espresso with a cornetto at a bar, or coffee with biscuits or bread at home. Regional variations include granita and brioche in Sicily." },
    { question: "What foods are seasonal in Italy?", answer: "Artichokes and asparagus in spring, tomatoes and stone fruit in summer, mushrooms, chestnuts and truffles in autumn, and legumes, cabbages and citrus in winter — with regional differences." },
    { question: "What is Italian street food?", answer: "Regional snacks eaten on the go, such as arancine and panelle in Sicily, supplì and pizza al taglio in Rome, lampredotto in Florence, piadina in Romagna and focaccia in Liguria." },
    { question: "Is there one authentic Italian cuisine?", answer: "No. Italian food is a collection of regional and local traditions, and most dishes exist in many legitimate versions." },
    { question: "How can travellers experience local Italian food?", answer: "Visit morning markets, order regional and seasonal dishes, try neighbourhood trattorias and bakeries, and consider a food tour or cooking class." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "UNESCO — Italian cooking, between sustainability and biocultural diversity", url: "https://ich.unesco.org/en/RL/italian-cooking-between-sustainability-and-biocultural-diversity-02093", note: "2025 inscription" },
    { label: "UNESCO — Mediterranean diet", url: "https://ich.unesco.org/en/RL/mediterranean-diet-00884", note: "2013 inscription" },
    { label: "UNESCO — Art of Neapolitan 'Pizzaiuolo'", url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722", note: "2017 inscription" },
    { label: "European Commission — quality schemes explained", url: "https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes/geographical-indications-and-quality-schemes-explained_en", note: "PDO, PGI and TSG definitions" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "status of protected names" },
    { label: "Commission Regulation (EU) No 97/2010 — Pizza Napoletana TSG", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32010R0097", note: "specification" },
    { label: "Italian Ministry of Agriculture — traditional agri-food products (PAT)", url: "https://www.masaf.gov.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/398", note: "national list" },
    { label: "Consorzio Tutela Pane Toscano DOP", url: "https://www.panetoscanodop.it/en/the-bread", note: "salt-free bread" },
    { label: "Consorzio per la Tutela del Formaggio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "production areas" },
    { label: "Gazzetta Ufficiale — Decree of 22 July 2005", url: "https://www.gazzettaufficiale.it/eli/id/2005/08/01/05A07670/sg", note: "panettone, pandoro and colomba" },
    { label: "International Alba White Truffle Fair", url: "https://www.fieradeltartufo.org/", note: "2026 dates" },
  ],
};
