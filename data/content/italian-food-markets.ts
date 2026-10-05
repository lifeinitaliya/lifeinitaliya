import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Italian Food Markets" — built at the site's established,
// previously unpublished URL. Market facts were checked in October 2026
// against official sources: Turismo Roma (Roma Capitale) and italia.it for
// Campo de' Fiori, Testaccio and Rome's neighbourhood markets; Feel Florence
// (Comune di Firenze) for the Mercato Centrale and Sant'Ambrogio; Bologna
// Welcome for the Mercato delle Erbe and the Quadrilatero; the DMO of the
// Comune di Napoli for Porta Nolana and the Pignasecca; the University of
// Palermo for Ballarò and Capo; Venezia Unica (Città di Venezia) for Rialto
// and the city's other markets; the Comune di Torino (December 2025) and
// Turismo Torino for Porta Palazzo; L'Unione Sarda for the 2025 move of
// Cagliari's San Benedetto market; Fondazione Campagna Amica for producers'
// markets; D.Lgs. 114/1998 art. 14 on price display; Decree-Law 36/2022 on card
// payments. Every PDO/PGI name was checked in eAmbrosia. Superlatives
// ("oldest", "largest") are attributed to the body that makes them or left
// out; opening times are given only where an official page states them, as
// checked in October 2026. No stalls are named or ranked, and no prices are
// quoted.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-food-markets";

export const italianFoodMarkets: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What is an Italian food market?"),
    answer("**An Italian food market can be a daily covered hall of butchers, fishmongers and greengrocers, an open-air street of stalls that sets up each morning, a weekly market that sells socks alongside cheese, a producers' market where farmers sell their own harvest, or a modern food hall built for eating rather than shopping.** For travellers, the most useful thing is to know which kind you're walking into: they serve different people, keep different hours and offer very different experiences."),
    p("What they share is food sold loose, by weight, from people who talk to their customers. That makes markets one of the clearest windows onto how a city actually eats — what's in season this week, what the region grows and catches, and what people buy to cook at home."),
    {
      type: "facts",
      title: "Italian food markets at a glance",
      rows: [
        { label: "Main types", value: "Covered markets, street markets, producers' markets, fish markets, food halls" },
        { label: "Best time", value: "Mornings; many fresh-food markets wind down by early afternoon" },
        { label: "Usual days", value: "Monday to Saturday for most daily markets; some close on Mondays or have weekly days only" },
        { label: "How you buy", value: "Ask the stallholder, by weight or by the piece; prices must be displayed" },
        { label: "Paying", value: "Card payments are a legal requirement for traders, but cash is still handy for small amounts" },
        { label: "Eating there", value: "Some markets have street-food counters or a food hall; many don't" },
      ],
    },
    p("This guide explains how markets fit into Italian food culture, what you can buy, how they differ across the country, and how to shop and eat at them. It isn't a ranking: the markets described below are examples of different types, chosen because they help explain how markets work."),
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "How markets differ across Italy",
        "Markets worth understanding as a traveller",
        "How to shop at an Italian food market",
        "Eating at Italian markets",
        "Useful Italian phrases for markets",
      ],
    },

    // ——— 2 ———
    h2("The different kinds of market"),
    p("The Italian word *mercato* covers a lot of ground, and terms and rules vary from city to city — markets are licensed and organised by municipalities, under regional law. These are the main types you're likely to meet."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Daily", title: "Fresh-food markets", text: "Fruit, vegetables, meat, fish, cheese, bread and groceries, open most mornings from Monday to Saturday. Many cities have one in each district, the *mercato rionale*." },
        { label: "Indoors", title: "Covered markets", text: "Purpose-built halls, many from the late nineteenth or early twentieth century, such as Florence's iron-and-glass markets or Bologna's Mercato delle Erbe. Some have been rebuilt or partly converted." },
        { label: "Outdoors", title: "Street markets", text: "Stalls set up in squares and streets, from daily food markets like Rome's Campo de' Fiori to weekly markets that mix food with clothes and household goods." },
        { label: "Direct", title: "Producers' markets", text: "Farmers selling what they grow or make themselves, often weekly. The Coldiretti-linked Campagna Amica network runs many of them as *mercati a km 0*." },
        { label: "Coast", title: "Fish markets", text: "From Venice's Rialto fish market to the fish stalls of Naples and Sicily. Formats vary: some are dedicated markets, others a section of a general one." },
        { label: "Eating", title: "Food halls", text: "Modern spaces of counters and seating, often inside or beside a historic market — Florence's and Rome's Mercato Centrale, for instance. Made for eating, not for weekly shopping." },
      ],
    },
    image("florence-santa-croce-market-stalls", "Shoppers among white-canopied market stalls in Piazza Santa Croce in Florence, with the marble façade of the basilica behind", true),

    // ——— 3 ———
    h2("How markets fit into Italian food culture"),
    p("Markets matter in Italy because so much cooking starts with fresh, seasonal ingredients bought in small quantities. A market lets you buy two artichokes, a slice of cheese or a handful of herbs, ask what's good today, and take advice on how to cook it. For many regular shoppers — often older residents and people who cook every day — the relationship with a trusted stallholder is part of the point."),
    p("It would be wrong to imagine that every Italian shops at the market every morning. Most households also use supermarkets, and in many cities market numbers have fallen as habits, working hours and rents have changed. In Venice, a 2019 report citing figures from the civic group Gruppo 25 counted around twenty produce stalls left at Rialto, against 84 about 25 years earlier, and only six fishmongers. Elsewhere markets have been rebuilt, reorganised or given new life with food counters and events."),
    p("What remains is a strong local character. A market reflects its region — the cheeses of the Alps, the citrus of Sicily, the fish of whichever sea is nearby — and its neighbourhood: Turismo Roma describes the Esquilino market as the city's most multicultural, with stalls for Chinese, Indian, halal, Romanian, Bengali and Senegalese shoppers. Markets are also places where small producers can still sell directly. For the wider context, see [Italian food traditions](/food/italian-food-traditions)."),

    // ——— 4 ———
    h2("What you can buy at an Italian market"),
    p("Not every market sells everything, but these are the categories you'll commonly find in a general fresh-food market."),
    table(
      ["Category", "What to look for", "Good to know"],
      [
        ["Fruit and vegetables", "Whatever is in season locally, often with the region of origin on the label", "The core of most markets; usually priced per kilo"],
        ["Herbs and greens", "Basil, parsley, wild greens, salad mixes such as Rome's *misticanza*", "Often sold by the bunch"],
        ["Cheese", "Fresh cheeses such as mozzarella and ricotta; aged regional cheeses", "Ask for a piece cut to the weight you want"],
        ["Cured meats", "Prosciutto, salami, mortadella and local specialities, sliced to order", "Bought by the *etto* (100 g)"],
        ["Bread", "Local breads, from saltless Tuscan bread to southern durum-wheat loaves", "Often a separate bakery stall or shop"],
        ["Fresh and dried pasta", "Filled pasta and egg pasta in the north and centre; durum-wheat shapes in the south", "Fresh pasta needs refrigeration"],
        ["Fish and seafood", "Local catch, shellfish, salted cod (*baccalà*)", "Best early in the day; many fish stalls close in the early afternoon"],
        ["Meat", "Butchers' counters, sometimes with poultry or offal specialists", "Cooking advice is usually happily given"],
        ["Olives, preserves and dried goods", "Olives, capers, pulses, dried mushrooms, spices, oil", "Easier to take home than fresh produce"],
        ["Prepared food", "Street food, sandwiches, roast porchetta, fried snacks", "Only at some markets; see below"],
      ],
    ),
    p("Wine and spirits appear at some markets and shops, under normal licensing rules. If you plan to take food home, check your own country's import rules: fresh meat, dairy and plants are restricted in many places."),
    image("naples-olives-preserves-stall", "Bowls of different olives and blue trays of salted cod with handwritten price labels on a market stall in Naples"),

    // ——— 5 ———
    h2("Fresh food and the seasons"),
    p("Seasonality is the easiest thing to see at a market and the hardest to fake. A greengrocer's stall in March looks nothing like one in September, and the difference is a large part of why regional cooking changes through the year."),
    p("Italy stretches over a thousand kilometres from the Alps to Sicily, so the same vegetable can appear weeks apart in different regions, and greenhouses and imports blur the calendar further. Rather than a precise national timetable, think in broad seasons:"),
    ul(
      "**Late winter and spring** — artichokes (the Carciofo Romanesco del Lazio is a protected PGI), broad beans and peas, wild greens, and, in the Veneto, white asparagus such as the PDO Asparago Bianco di Bassano.",
      "**Summer** — tomatoes, aubergines, courgettes, peppers, melons and stone fruit.",
      "**Autumn** — grapes, figs, chestnuts (Castagna Cuneo is a PGI in Piedmont), mushrooms including porcini (Fungo di Borgotaro PGI comes from the Apennines of Emilia-Romagna and Tuscany), squash and new olive oil.",
      "**Winter** — chicories and radicchio (Radicchio Rosso di Treviso PGI), cabbages and greens, and citrus from the south, including Sicily's blood oranges (Arancia Rossa di Sicilia PGI).",
    ),
    p("The labels on loose produce often name the region or country of origin, which tells you a lot: tomatoes from Sicily in May, or apples from Trentino in winter, are part of the normal flow of a national market. If something is local and in season, the stallholder will usually be glad to tell you."),

    // ——— 6 ———
    h2("How markets differ across Italy"),
    p("Markets everywhere sell fruit, vegetables and cheese. What changes is which cheese, which bread, which fish — and how much is eaten on the spot."),
    h3("Northern Italy"),
    p("In the north you'll see more butter, rice and mountain cheese. Piedmont's markets carry cheeses such as Toma Piemontese and Castelmagno (both PDO), hazelnuts and, in autumn, chestnuts; Lombardy has rice, Bitto and other Alpine cheeses from the Valtellina; the Veneto has radicchio, white asparagus and, in Venice, lagoon and Adriatic fish. Covered halls and large organised squares are common, Turin's Porta Palazzo being the most striking example."),
    h3("Central Italy"),
    p("Emilia-Romagna is the heartland of fresh egg pasta, Parmigiano Reggiano (PDO) and cured pork such as Mortadella Bologna (PGI). Tuscany brings unsalted bread, Prosciutto Toscano (PDO), Lardo di Colonnata (PGI) and olive oil; Lazio has its artichokes, puntarelle and *porchetta*, the herb-roasted pork that is a PGI around Ariccia. Umbria and the Marche add legumes, truffles and mountain cured meats. Florence, Bologna and Rome all have historic covered markets as well as open-air ones."),
    h3("Southern Italy"),
    p("In Campania, buffalo mozzarella (Mozzarella di Bufala Campana PDO), tomatoes and fish dominate; Puglia adds burrata (Burrata di Andria PGI), durum-wheat bread and orecchiette; Calabria brings red onions from Tropea (Cipolla Rossa di Tropea Calabria PGI), chilli and 'nduja. Southern markets are more often street markets than halls, and the line between shopping and street food is thinner — fried snacks and ready-to-eat dishes are sold alongside raw ingredients."),
    h3("Sicily and Sardinia"),
    p("Sicily's markets are among the most vivid in Italy for food: citrus, almonds and pistachios, swordfish and tuna, and street food such as *arancine*, *panelle* and *sfincione* in Palermo. Sardinia's markets carry sheep's-milk cheeses such as Pecorino Sardo and Fiore Sardo (both PDO), flatbreads such as *pane carasau*, and fish from its long coast. For Sicily in depth, see [Sicilian food traditions](/food/sicily-food-traditions)."),

    // ——— 7 ———
    h2("Markets worth understanding as a traveller"),
    p("These examples were chosen to show different types of market, not because they are \"the best\". We checked each against an official or institutional source in October 2026; opening times are given only where that source states them, and they can change."),
    h3("Rome: Campo de' Fiori and Testaccio"),
    image("rome-campo-de-fiori-market", "A three-wheeled Ape van stacked with crates of artichokes among the stalls of Campo de' Fiori in Rome, with a trattoria and a pork butcher's shop behind"),
    p("**Campo de' Fiori** has hosted Rome's market since 1869, when it moved from Piazza Navona, and according to Turismo Roma it traditionally runs every morning from Monday to Saturday, with flowers, fruit, meat and fish. It sits in one of the busiest squares of the historic centre, so you'll share it with many visitors; it's a lively introduction rather than a neighbourhood's weekly shop."),
    p("**Testaccio** has a different character. Since 2012 the market has occupied a modern covered building between Via Galvani and Via Franklin, opposite the former slaughterhouse, with stalls of fruit, bread, meat and fish and — according to Italy's national tourism site — food kiosks serving Roman street food such as fried pasta, sandwiches and fried salt cod; lunchtime is when they're busiest. In places you can see ancient walls beneath your feet."),
    p("Rome also has many other *mercati rionali*, from the large Trionfale market near the Vatican to the multicultural Esquilino and a weekend farmers' market at Garbatella — plus a Mercato Centrale food hall at Termini station. For Rome's pasta classics, see [Roman pasta](/food/roman-pasta-classics); for planning, [Rome in three days](/guides/rome-in-three-days)."),
    h3("Florence: Mercato Centrale and Sant'Ambrogio"),
    image("florence-mercato-centrale-counter", "Shoppers at a counter in Florence's Mercato Centrale beneath hanging hams, salami and cheeses"),
    p("Florence shows clearly how a historic market and a food hall can share a building. The **Mercato Centrale** in the San Lorenzo district was designed by Giuseppe Mengoni and inaugurated in 1874. According to the city's tourism site, its ground floor still houses fruit, vegetable, meat, fish and bread sellers, open in the daytime and closed on Sundays, while the first floor is a food hall of counters and restaurants open daily until late. The street stalls in the surrounding area are mostly non-food — clothing, leather and souvenirs."),
    p("**Sant'Ambrogio**, near Santa Croce, was inaugurated in 1873, about a year earlier. It's a smaller covered market with food shops inside and stalls outside selling flowers, clothes and household goods, open in the morning from Monday to Saturday. It's the place to see an everyday Florentine market at work."),
    image("florence-sant-ambrogio-fresh-pasta", "Fresh filled pasta — cappellacci, ravioli and lasagne sheets — under handwritten per-kilo price labels at Sant'Ambrogio market in Florence"),
    p("For the city itself, see [Florence for first-timers](/cities/florence-for-first-timers)."),
    h3("Bologna: the Quadrilatero and the Mercato delle Erbe"),
    p("Bologna's food culture is spread across shops and streets rather than concentrated in one market. The **Quadrilatero**, the grid of narrow streets just off Piazza Maggiore, is a market area of medieval origin, and street names such as Via Pescherie Vecchie still recall the trades once practised there. Bologna Welcome describes daily stalls and shops selling fresh pasta, fish, meat, fruit and vegetables, alongside historic workshops and taverns."),
    p("A short walk away on Via Ugo Bassi, the **Mercato delle Erbe** is, in Bologna Welcome's words, the largest covered market in the historic centre: fruit, vegetables, meat, cheese, fish and wine. Its hall dates from 1910, was rebuilt after wartime damage and reopened in 1949, and since 2014 part of it has been given over to places to eat."),
    image("bologna-delicatessen-counter", "A delicatessen counter in Bologna with shelves of cheeses, cured meats and jars, a meat slicer, and trays of prepared dishes"),
    p("No single market sums up Bolognese food — much of it is bought in specialist shops: *pastifici* for fresh pasta, *salumerie* for cured meats and cheese. See [Bologna in two days](/cities/bologna-in-two-days)."),
    h3("Naples: Porta Nolana and the Pignasecca"),
    image("naples-seafood-market-stall", "Fish, prawns, mussels and small tubs of prepared seafood on ice in white crates at a street market in Naples, with price labels"),
    p("Naples' markets are street markets, folded into the life of the neighbourhoods around them. **Porta Nolana**, named after one of the city's old gates near the central station, is best known for fish and seafood, though it also sells vegetables, spices and meat; the city's tourism office notes that it is at its busiest on 23 and 24 December, when Neapolitans shop for the Christmas Eve fish dinner."),
    p("The **Pignasecca**, on the edge of the Spanish Quarters a few steps from Via Toledo, is described by the city as Naples' oldest market. Its street mixes fish, fruit and vegetables, cheese, bread and preserves with household goods and food to eat on the spot — fried pizza, arancini, croquettes and paper cones of fried seafood."),
    p("Food is one of the main reasons to visit Naples: see [Naples for first-time visitors](/cities/naples-first-visit) and [Neapolitan pizza](/food/neapolitan-pizza)."),
    h3("Palermo: Ballarò and Capo"),
    image("palermo-fish-stall", "Fishmongers at work at a covered fish stall under red awnings at a street market in Palermo"),
    p("Palermo's historic markets are long streets of stalls in the old quarters. The University of Palermo counts **Ballarò**, which runs through the Albergheria between Corso Tukory and Piazza Casa Professa, and **Capo**, behind the Teatro Massimo, among the city's biggest and busiest markets. Both sell produce, fish, meat and groceries, and both are places to try street food. The **Vucciria**, near Piazza San Domenico, is much smaller by day and better known now for its evenings."),
    p("Sources disagree about which of Palermo's markets is the oldest, which is a good reason to treat such claims with caution. For practical advice, see our [Palermo guide](/cities/palermo-markets-monuments) and [Sicilian food traditions](/food/sicily-food-traditions)."),
    h3("Venice: Rialto"),
    image("venice-fruit-vegetable-stall", "A fruit and vegetable stall in a Venetian street, half covered by a canvas awning, with crates stacked on the paving"),
    p("**Rialto** has been the site of Venice's market for close to a thousand years, according to the city's official tourism site. Today it has two parts: a fruit and vegetable market, open Monday to Saturday, and the fish market in an early twentieth-century neo-Gothic hall by the Grand Canal, open from Tuesday to Saturday in the morning and closed on Sundays and Mondays. Come early, especially for the fish."),
    p("Rialto is also a lesson in how markets change: as Venice's resident population has fallen, so has the number of stalls. The city lists other neighbourhood markets too, such as those on Via Garibaldi in Castello and Rio Terà San Leonardo in Cannaregio. See [Venice for first-timers](/cities/venice-quieter-neighbourhoods)."),
    h3("Turin: Porta Palazzo"),
    p("**Porta Palazzo**, in Piazza della Repubblica, is on a different scale. Turismo Torino calls it Europe's largest open-air market, and the city calls it Turin's most important. Its markets were officially established in 1835; the fish and food pavilions followed in 1836 and the Clock Pavilion in 1916, and there is a dedicated pavilion for farmers selling their own produce. The Mercato Centrale food hall occupies a modern building on the square. The city describes Porta Palazzo as a melting pot of origins and languages, from the farmers of the surrounding hills to traders from all over the world."),
    p("In late 2025 the square was part of a major redevelopment programme, so parts may be affected by works. For Piedmontese food and the rest of the city, see [Turin for first-time visitors](/cities/turin-first-visit)."),
    note("Cagliari's **San Benedetto** covered market, long one of Sardinia's main food markets, closed its historic building for rebuilding in March 2025 and moved to a temporary structure in Piazza Nazzari; the city's schedule aimed to finish the works by the end of 2027. Check the current situation before you go.", "A market on the move"),

    // ——— 8 ———
    h2("How to shop at an Italian food market"),
    p("Most of this is common sense, but a few habits make it easier."),
    ul(
      "**Greet the stallholder.** A *buongiorno* goes a long way, and it's usually how a purchase starts.",
      "**Let them serve you.** At many stalls the vendor picks and weighs the produce; reaching in to choose your own tomatoes is often unwelcome. Some stalls let you choose — if so, they'll say, or hand you a bag. When in doubt, ask: *Posso scegliere io?* (\"Can I choose?\").",
      "**Ask for an amount.** Produce is usually sold by the kilo and cured meats and cheese by the *etto*, 100 grams. You can also ask for a number — *tre pomodori*, three tomatoes — or for \"enough for two people\".",
      "**Check the price.** Italian law requires prices to be clearly displayed on goods for sale, including on market stalls. Loose goods are normally priced per kilo, so the final price depends on the weight.",
      "**Don't expect to bargain.** Prices on food stalls are set; haggling isn't the norm, though a stallholder may round down or add an extra lemon for a regular. Non-food stalls at street markets are a different world.",
      "**Ask for advice.** *Cosa mi consiglia?* — \"What do you recommend?\" — often gets you the best thing on the stall and a recipe as well.",
      "**Taste only if offered or after asking.** Some cheese and salumi counters will offer a taste; produce isn't for sampling.",
      "**Paying.** Since 2022, Italian law has required traders, including market stallholders, to accept card payments. Small, quick purchases are still often paid in cash, and having some coins and small notes makes life easier.",
      "**Bring a bag.** Many regular shoppers bring their own; plastic bags, where offered, are usually charged.",
    ),
    tip("Market prices aren't always lower than supermarket prices: seasonal local produce can be very good value, while speciality cheeses or fish can cost more. Compare per-kilo prices, and buy for quality and freshness rather than assuming a bargain.", "Is the market cheaper?"),

    // ——— 9 ———
    h2("Market etiquette"),
    p("Markets are workplaces first. A few considerate habits make a big difference to the people who work there."),
    ul(
      "**Don't handle food unnecessarily**, especially fruit, bread and anything unwrapped.",
      "**Queue, or note who's next.** At busy stalls people may not stand in a neat line, but they know who arrived when; the vendor often asks *Chi è il prossimo?* — \"Who's next?\"",
      "**Follow the vendor's lead** on choosing, tasting and paying.",
      "**Photograph considerately.** Stalls are beautiful, but stallholders and shoppers are people at work or doing their shopping. Ask before photographing someone close up, and don't block a stall or the aisle while you take pictures.",
      "**Buy something if you've had a long chat or a taste.** It isn't required, but it's appreciated.",
      "**Don't assume English.** Many vendors speak some, many don't; a few words of Italian and pointing work well everywhere.",
      "**Respect the rhythm.** Mornings are busy with regular shoppers; if you mostly want to look, mid-morning is easier for everyone.",
    ),

    // ——— 10 ———
    h2("Eating at Italian markets"),
    p("This is where travellers' expectations most often go wrong. Some markets are excellent places to eat; others are almost entirely for shopping."),
    {
      type: "compare",
      title: "Shopping market or eating market?",
      columns: [
        {
          title: "Shopping market",
          items: [
            "Mostly raw ingredients to take home",
            "Busy in the morning, closes early in the afternoon",
            "Few or no seats",
            "Great for picnic supplies: bread, cheese, salumi, fruit",
            "Examples: Sant'Ambrogio's food stalls, the Rialto fish market",
          ],
        },
        {
          title: "Eating market or food hall",
          items: [
            "Counters cooking food to order, often with shared seating",
            "Open for lunch and often dinner",
            "Mix of local specialities and food from elsewhere",
            "Good for a quick, varied meal",
            "Examples: the upper floor of Florence's Mercato Centrale, the Mercato Centrale halls in Rome and Turin",
          ],
        },
      ],
    },
    p("Between the two are markets with street-food stalls among the produce, such as Testaccio's food kiosks, Palermo's market streets and the Pignasecca in Naples. A simple approach is to shop for a picnic at a fresh-food market and eat at a food hall or a trattoria nearby."),
    h3("What to eat at markets around Italy"),
    p("These are regional associations, not a menu every market offers."),
    ul(
      "**Bologna and Emilia-Romagna** — fresh filled pasta to cook at home, mortadella and Parmigiano Reggiano.",
      "**Rome and Lazio** — Roman street food such as tripe or boiled-beef sandwiches and fried salt cod at Testaccio's kiosks; porchetta from the Lazio countryside; seasonal artichokes to take home.",
      "**Florence and Tuscany** — salumi and cheese with Tuscan bread; at food counters, Florentine specialities such as lampredotto, a tripe sandwich.",
      "**Naples** — fried pizza, arancini and paper cones of fried seafood; buffalo mozzarella eaten fresh. See [Neapolitan pizza](/food/neapolitan-pizza).",
      "**Palermo** — arancine, panelle (chickpea fritters) and sfincione. More in [Sicilian food traditions](/food/sicily-food-traditions).",
      "**Coastal markets** — seafood, sometimes eaten raw or fried at nearby counters; ask how it's prepared.",
      "**Everywhere** — seasonal fruit, eaten on the spot, and regional pastries from nearby bakeries. See [traditional Italian desserts](/food/traditional-italian-desserts), and finish with a coffee at the bar: [Italian coffee](/food/italian-coffee-culture).",
    ),

    // ——— 11 ———
    h2("Market or supermarket?"),
    table(
      ["Market", "Supermarket"],
      [
        ["Seasonal and local products are often more prominent", "A broader, more standardised selection"],
        ["Served by a vendor; you can ask questions", "Self-service"],
        ["Regional specialities and small producers", "Wide range of packaged goods"],
        ["Mostly mornings; days vary by market", "Longer, more predictable hours"],
        ["Each market is different", "Much the same from branch to branch"],
        ["Prices vary: some things good value, some not", "Prices easy to compare"],
      ],
    ),
    p("Supermarkets are useful for water, snacks and basics, and many Italians use both. Markets are where you'll find the season and the region most clearly."),

    // ——— 12 ———
    h2("Tourist markets and local markets"),
    p("Some markets have changed a great deal over the past two decades. Historic markets in city centres now often combine fresh-food stalls with food halls, souvenir food products and stalls aimed at visitors; others still mostly serve their neighbourhood. Neither is \"fake\": a food hall can be a good place for lunch, and a market full of visitors can still have excellent stallholders."),
    p("What matters is knowing what you're visiting. Signs of a market used for everyday shopping include raw ingredients rather than gift packs, prices per kilo, locals with shopping trolleys, and a morning rush that fades by early afternoon. Signs of a market oriented to visitors include vacuum-packed products for travel, prices per item, many ready-to-eat counters and long opening hours. A good visit can include both."),
    tip("To find markets, start with the city's own tourism or municipal website, which usually lists neighbourhood markets with days and hours; Venice, Rome and Florence all publish such information. For producers' markets, the Campagna Amica website has a search of its *mercati a km 0*. Local neighbourhood guides and your accommodation's hosts are often the best source of all.", "Finding a market"),

    // ——— 13 ———
    h2("Food safety and dietary needs"),
    p("Market food is as safe as the care taken with it, as it is anywhere. A few common-sense habits help."),
    ul(
      "**Choose busy stalls** with a quick turnover, especially for fish and prepared food.",
      "**Watch how food is handled and stored**: fish and fresh cheese should be on ice or refrigerated.",
      "**Keep perishables cool.** Fresh mozzarella, ricotta, fish and fresh pasta don't travel well in a warm bag; buy them last, or for that day.",
      "**Wash produce** before eating it, unless you're told it has been washed.",
      "**Follow the vendor's advice** on storing and cooking.",
    ),
    p("For dietary needs, markets are both easy and tricky: raw ingredients are simple to identify, while prepared foods may contain things you don't expect."),
    ul(
      "**Vegetarian** (*vegetariano/a*) — produce, cheese and many fried snacks are suitable, but ask about stock, anchovies and lard (*strutto*), which appears in some breads and pastries.",
      "**Vegan** (*vegano/a*) — fruit, vegetables, nuts and some breads are easy; check prepared foods for cheese, egg or lard.",
      "**Gluten-free** (*senza glutine*) — fresh produce, cheese and cured meats are naturally gluten-free, but fried snacks and pasta usually aren't, and cross-contamination is hard to avoid at busy counters. Coeliac is *celiaco/a*.",
      "**Nut allergies** — nuts are common in southern sweets, pesto and some salumi; ask, and remember that vendors can't guarantee a nut-free environment.",
      "**Lactose intolerance** (*intolleranza al lattosio*) — long-aged cheeses such as Parmigiano Reggiano are naturally very low in lactose; fresh cheeses aren't.",
    ),
    p("No stall can promise to accommodate a serious allergy. If you have one, carry a written note in Italian and buy packaged products with ingredient lists when in doubt."),

    // ——— 14 ———
    h2("Useful Italian phrases for markets"),
    table(
      ["Italian", "English"],
      [
        ["Buongiorno!", "Good morning / Hello"],
        ["Quanto costa?", "How much does it cost?"],
        ["Quanto viene al chilo?", "How much is it per kilo?"],
        ["Vorrei…", "I would like…"],
        ["Un chilo, per favore.", "One kilogram, please."],
        ["Mezzo chilo, per favore.", "Half a kilogram, please."],
        ["Un etto, per favore.", "100 grams, please."],
        ["Posso assaggiare?", "May I taste it?"],
        ["Cosa mi consiglia?", "What do you recommend?"],
        ["Da dove viene?", "Where does it come from?"],
        ["Basta così, grazie.", "That's all, thank you."],
        ["Posso pagare con la carta?", "Can I pay by card?"],
        ["Sono allergico / allergica a…", "I'm allergic to… (man / woman)"],
        ["È senza glutine?", "Is it gluten-free?"],
      ],
    ),
    p("*È fresco?* — \"Is it fresh?\" — is correct Italian, but asked of a stallholder it can sound like a doubt about their goods. *Da dove viene?* or *Cosa mi consiglia oggi?* are friendlier ways to find the best of the day."),
    p("Markets are one of the best ways to understand Italian food: not as a postcard, but as the place where a city works out what to cook tonight. Go in the morning, ask questions, buy a little, and you'll see more of a region in an hour than in many restaurant meals. For planning the rest of the trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide), and for wine to go with your picnic, [Italy's regional wines](/food/italian-regional-wines)."),
  ],

  faqs: [
    { question: "Are Italian food markets worth visiting?", answer: "Yes. They show what is in season and what a region grows, catches and cooks, and some also have excellent street food. Go in the morning, when fresh-food markets are at their busiest." },
    { question: "What do people buy at Italian food markets?", answer: "Mainly fruit and vegetables, plus cheese, cured meats, bread, fish, meat, olives and preserves, and in some markets fresh pasta and prepared food. The mix depends on the market and the region." },
    { question: "Are Italian food markets cheaper than supermarkets?", answer: "Not always. Seasonal local produce can be very good value, while speciality cheeses or fish can cost more. Compare the per-kilo prices, which must be displayed." },
    { question: "Can tourists eat at Italian food markets?", answer: "At some. Food halls such as the first floor of Florence's Mercato Centrale, and markets with street-food stalls such as Testaccio in Rome or Palermo's markets, are good for eating. Many other markets are mainly for shopping." },
    { question: "Do Italian markets sell fresh pasta?", answer: "Many do, especially in the north and centre: Bologna's market streets and shops and Florence's Sant'Ambrogio sell fresh and filled pasta. It needs refrigeration, so buy it for the same day." },
    { question: "Do you bargain at Italian food markets?", answer: "Generally no. Food prices are set and displayed; a vendor may round down or add a little extra for a regular, but haggling isn't expected." },
    { question: "What should you not do at an Italian market?", answer: "Don't handle produce unless the vendor invites you, don't taste without asking, don't block stalls while taking photos, and don't photograph people close up without asking." },
    { question: "Which Italian cities are known for food markets?", answer: "Palermo, Naples, Rome, Florence, Bologna, Venice and Turin all have markets worth understanding, from Palermo's Ballarò and Capo to Turin's Porta Palazzo. Most Italian towns have their own weekly or daily markets too." },
    { question: "What is the difference between a market and a food hall?", answer: "A market sells ingredients, mostly in the morning, to take home and cook. A food hall has counters cooking food to eat on the spot, often with seating and long hours. Some historic markets now include both." },
    { question: "Are Italian markets open every day?", answer: "No. Most daily fresh-food markets run Monday to Saturday, mainly in the morning; some close on Mondays, such as the Rialto fish market, and many smaller markets are weekly. Check the city's official information." },
    { question: "Can I find vegetarian food at Italian markets?", answer: "Yes: produce, cheese, bread and many snacks are vegetarian. Ask about prepared foods, which can contain stock, anchovies or lard (strutto)." },
    { question: "Can I find gluten-free food at Italian markets?", answer: "Fresh produce, cheese and cured meats are naturally gluten-free, but fried snacks and pasta usually aren't, and busy counters can't rule out cross-contamination. Ask \"È senza glutine?\"" },
    { question: "Can I pay by card at Italian markets?", answer: "Traders are legally required to accept card payments, but small purchases are often paid in cash, so carrying some coins and small notes is still useful." },
    { question: "What Italian phrases are useful at food markets?", answer: "Buongiorno; Quanto costa?; Vorrei…; Un etto, per favore (100 grams); Mezzo chilo (half a kilo); Posso assaggiare? (may I taste?); Cosa mi consiglia? (what do you recommend?); Basta così, grazie (that's all, thanks)." },
    { question: "How do I find a good local market?", answer: "Start with the city's official tourism or municipal website, which lists neighbourhood markets and their days; ask your hosts; and look for signs of everyday shopping — per-kilo prices, raw ingredients and a morning rush." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Turismo Roma — Campo de' Fiori", url: "https://turismoroma.it/it/node/1514", note: "market since 1869; Monday–Saturday mornings" },
    { label: "Turismo Roma — Mercati rionali", url: "https://turismoroma.it/en/node/36086", note: "Rome's neighbourhood markets" },
    { label: "italia.it — Mercato di Testaccio", url: "https://www.italia.it/it/lazio/roma/mercato-di-testaccio", note: "2012 building and street food" },
    { label: "Feel Florence — Mercato Centrale (San Lorenzo)", url: "https://feelflorence.it/en/node/12042", note: "1874 building, floors and opening" },
    { label: "Feel Florence — Mercato di Sant'Ambrogio", url: "https://feelflorence.it/en/node/12043", note: "1873; stalls and opening" },
    { label: "Bologna Welcome — Mercato delle Erbe", url: "https://www.bolognawelcome.com/en/places/shopping-places/mercato-delle-erbe-2", note: "history and current use" },
    { label: "Bologna Welcome — The old market in the Quadrilatero", url: "https://www.bolognawelcome.com/en/places/shopping-places/the-old-market-in-the-quadrilatero", note: "market streets" },
    { label: "Comune di Napoli (DMO) — Porta Nolana market", url: "https://dmo-napoli.inera.it/en/article/porta-nolana-market-the-kingdom-of-fresh-fish-and-popular-rituals/", note: "fish market" },
    { label: "Comune di Napoli (DMO) — La Pignasecca", url: "https://dmo-napoli.inera.it/en/article/la-pignasecca-naples-oldest-market/", note: "street market" },
    { label: "Università di Palermo — I mercati di Palermo", url: "https://www.unipa.it/I-mercati-di-Palermo/", note: "Ballarò, Capo and Vucciria; in Italian" },
    { label: "Venezia Unica (Città di Venezia) — Mercati", url: "https://www.veneziaunica.it/it/cosa-fare-a-venezia/il-territorio-di-venezia/mercati", note: "Rialto and neighbourhood markets, days and hours; in Italian" },
    { label: "Comune di Torino — Porta Palazzo. The thread of memory (December 2025)", url: "https://compravicino.comune.torino.it/wp-content/uploads/2025/12/Porta-Palazzo-The-thread-of-memory-ENG.pdf", note: "history and redevelopment" },
    { label: "Turismo Torino — Porta Palazzo", url: "https://turismotorino.org/en/territory/torino-metropoli/torino/instagrammable-itineraries-torino-and-sourroundigs/discover-torinos", note: "description of the market" },
    { label: "L'Unione Sarda — San Benedetto market closes for works (1 March 2025)", url: "https://www.unionesarda.it/news-sardegna/cagliari/lacrime-rabbia-qualche-sorriso-chiude-mercato-san-benedetto-pxh8abkq", note: "temporary move; in Italian" },
    { label: "Fondazione Campagna Amica", url: "https://www.campagnamica.it/", note: "producers' markets" },
    { label: "Gambero Rosso — Rialto market (4 February 2019)", url: "https://www.gamberorosso.it/notizie/e-venezia-scommette-sulla-rinascita-del-mercato-di-rialto-nel-futuro-museo-e-polo-gastronomico", note: "stall numbers reported by Gruppo 25; in Italian" },
    { label: "D.Lgs. 31 marzo 1998, n. 114 — art. 14 (price display)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-03-31;114", note: "in Italian" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "PDO and PGI names" },
  ],
};
