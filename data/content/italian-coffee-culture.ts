import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Italian Coffee" — the rebuilt version of the site's short
// how-to-order piece, kept at its established URL (/food/italian-coffee-culture).
// It is the coffee pillar: national food culture, desserts, Sicily and city
// guides have their own articles and are linked rather than repeated.
// Sources checked in September 2026: the University of Padua on Prospero
// Alpini; Caffè Florian on its 1720 opening; Turismo Roma on the Antico Caffè
// Greco (and news reports on its 2025 closure); the Caffè Al Bicerin and
// Turismo Torino on Turin's historic cafés; Unioncamere's register of historic
// businesses and the Gran Caffè Gambrinus on its 1860 founding; Treccani on
// the caffè sospeso; the Comune di Trieste and Friuli Venezia Giulia tourism
// on Trieste's cafés and vocabulary; MUMAC (the espresso-machine museum) on
// Moriondo, Bezzera and Pavoni; Gaggia on its 1938 and 1947 patents; Bialetti
// on the Moka Express; and INEI on its espresso definition. Prices are left out
// on purpose; legends are presented as legends.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/italian-coffee-culture";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const italianCoffeeCulture: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What does \"Italian coffee\" really mean?"),
    answer("**Italian coffee is less a single drink than a way of having coffee.** At its centre is the **bar** — Italy's word for a café — where most people drink a short **espresso**, often standing at the counter, in a minute or two. Around it sit the milky breakfast drinks, the **moka pot** on the stove at home, and a set of local habits that change from Naples to Trieste. Ask for *un caffè* in a traditional bar and you'll get an espresso; everything else is a variation you have to name."),
    p("What makes it cultural rather than merely culinary is the routine. A coffee marks the start of the working day, the end of a meal, a break with a colleague or a quick hello with a neighbour. It is cheap, fast and repeated several times a day by many people — which is why a small cup can carry so much social meaning."),
    p("This article covers the drinks, the bar, the history and the regional traditions. For the wider food picture, see [Italian food traditions](/food/italian-food-traditions); for what goes with coffee, [traditional Italian desserts](/food/traditional-italian-desserts)."),
    {
      type: "facts",
      title: "Italian coffee at a glance",
      rows: [
        { label: "\"Un caffè\"", value: "An espresso, in most traditional bars" },
        { label: "Where", value: "The bar: counter (banco) or table (tavolo)" },
        { label: "Milky coffee", value: "Mostly a breakfast habit, not a rule" },
        { label: "At home", value: "Often the moka pot, increasingly capsule machines" },
        { label: "Regional words", value: "Trieste, Naples and Turin have their own drinks and terms" },
        { label: "Changing scene", value: "Specialty coffee shops alongside traditional bars" },
      ],
    },

    // ——— 2 ———
    h2("The Italian bar"),
    p("An Italian *bar* is not primarily a place for alcohol. It serves coffee from early morning, pastries and sandwiches through the day, and aperitivo drinks in the evening; many also sell bus tickets or lottery tickets. Neighbourhood bars are part of daily infrastructure, and regulars are often greeted by name."),
    {
      type: "image",
      src: `${IMG}/radicofani-bar.webp`,
      alt: "A barman in a light-blue shirt working behind the wooden counter of a village bar, with bottles on shelves and a clear screen along the counter",
      caption: "Behind the counter of a bar in Radicofani, southern Tuscany.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Standing at the counter"),
    p("The counter, or *banco*, is where most coffee is drunk. You order, the barista makes it in front of you, you drink it and leave. There's no expectation to linger, and nobody will think it rude that you finish in a few sips."),
    h3("Sitting at a table"),
    p("Many bars also have tables inside or outside. Sitting down usually means table service — a waiter takes your order and brings it — and it often costs more than the same drink at the counter, sometimes much more in famous squares. Prices should be displayed in the bar; if in doubt, check the price list or ask before you sit. Some bars, especially in smaller towns, don't charge extra for sitting."),
    h3("Paying first or after"),
    p("Practice varies. In busy city bars you often pay at the till (*cassa*) first, then take the receipt (*scontrino*) to the counter and order. In quieter bars you order first and pay on the way out. If you're unsure, watch what the person in front of you does, or simply ask: *Pago prima?* — \"Do I pay first?\""),
    tip("Placing a small coin on your receipt when you hand it to the barista is a common habit in some cities and can speed things up. It isn't required.", "At a busy bar"),

    // ——— 3 ———
    h2("What to order: the coffee vocabulary"),
    p("Italian coffee words are simple once you know them, but they don't always match what the same words mean abroad — a \"latte\" in Italy is a glass of milk. Terms also vary between regions and even between bars, so treat this as a guide rather than a rulebook."),
    table(
      ["Order", "What to expect", "Typical context", "Notes"],
      [
        ["Caffè / espresso", "A short, strong coffee in a small cup", "Any time of day", "\"Un caffè\" normally means this"],
        ["Caffè doppio", "A double espresso", "Any time", "Less common as an order than abroad"],
        ["Caffè ristretto", "A shorter, more concentrated espresso", "Any time", "Ask \"ristretto\" or \"corto\""],
        ["Caffè lungo", "An espresso made with more water", "Any time", "Still small; not a filter coffee"],
        ["Caffè macchiato", "Espresso \"stained\" with a little milk or foam", "Any time", "Some bars ask \"caldo o freddo?\" — hot or cold milk"],
        ["Cappuccino", "Espresso with steamed milk and foam, in a larger cup", "Mostly morning", "Often with a cornetto"],
        ["Caffè latte", "Hot milk with coffee, usually in a glass or large cup", "Morning", "Say \"caffè latte\", not just \"latte\""],
        ["Latte macchiato", "Hot milk with a little espresso added, in a tall glass", "Morning", "Milkier than a caffè latte"],
        ["Marocchino", "Espresso with cocoa and milk foam in a small glass", "Anytime", "Recipe varies by city; often associated with Piedmont"],
        ["Caffè americano", "Espresso topped up with hot water", "Any time", "Closest to a large black coffee"],
        ["Decaffeinato / deca", "Decaffeinated espresso", "Often after meals", "Widely available"],
        ["Caffè shakerato", "Espresso shaken with ice and sugar, served chilled", "Summer", "Usually in a stemmed glass"],
        ["Caffè corretto", "Espresso with a dash of spirit, such as grappa or sambuca", "After meals", "\"Corrected\" coffee"],
        ["Caffè d'orzo", "A caffeine-free drink made from roasted barley", "Any time", "A long-standing alternative"],
      ],
      "Names and serving styles vary between regions and bars.",
    ),

    // ——— 4 ———
    h2("Espresso culture"),
    h3("Why \"un caffè\" means espresso"),
    p("In most Italian bars, coffee *is* espresso: hot water forced at pressure through finely ground coffee to make a small, concentrated drink. Everything else on the list is built on it or named in relation to it. That's why a request for \"a coffee\" gets an espresso, and why a large mug of filter coffee is a foreign concept in a traditional bar."),
    h3("What makes an espresso"),
    p("The Istituto Nazionale Espresso Italiano (INEI), an industry body that certifies espresso, defines its benchmark as roughly 7 grams of ground coffee producing about 25 millilitres in the cup, with a layer of *crema*, the fine foam on top. Real bar espresso varies around that, depending on the blend, the machine and the barista. Crema is part of the look people expect; on its own it doesn't prove a coffee is good."),
    h3("Why it's drunk quickly"),
    p("An espresso is small and served hot, and it's at its best in the first minute or two. Add the counter culture — no seat, no table service, a queue behind you — and it becomes a drink of a few sips. Many people stir in sugar; others drink it plain. In Naples in particular it's often served with a small glass of water."),
    {
      type: "image",
      src: `${IMG}/rome-espresso-macchiato.webp`,
      alt: "A small espresso with a light layer of foam in a patterned blue cup on a white saucer with a spoon, on a wooden bar table in Rome",
      caption: "A short coffee in Rome — the basic unit of Italian coffee culture.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 5 ———
    h2("Cappuccino and the morning"),
    p("The cappuccino — espresso with steamed milk and foam — is the classic breakfast coffee, usually with a *cornetto*, the Italian cousin of the croissant, plain or filled with jam, custard or chocolate. In the north the cornetto is often called a *brioche*; in parts of the south the same word can mean something different, like Sicily's round brioche eaten with granita."),
    p("Why mornings? For many Italians a milky coffee is a light meal in itself, and a large quantity of milk after lunch or dinner simply doesn't appeal. It's a habit, not a law. Plenty of Italians drink cappuccino in the afternoon, and no bar will refuse to make one. You may get a raised eyebrow after a big dinner, but nothing more."),
    {
      type: "image",
      src: `${IMG}/milan-cappuccino-brioche.webp`,
      alt: "A cappuccino dusted with cocoa in a cream-coloured cup, with a sugared brioche on a plate behind it",
      caption: "Breakfast in Milan: a cappuccino and a brioche, as a cornetto is often called in the north.",
      credit: unsplash("laura adai", "lauraadaiphoto"),
    },

    // ——— 6 ———
    h2("Coffee through the day"),
    p("There's no fixed timetable, but an ordinary day in many Italian towns looks something like this:"),
    h3("Breakfast"),
    p("A cappuccino, caffè latte or espresso with a cornetto at the bar on the way to work, or coffee and biscuits or bread at home. Italian breakfast is usually small and sweet rather than cooked."),
    h3("Late morning and after lunch"),
    p("A mid-morning espresso is a common break. After lunch, an espresso — or a decaf — closes the meal, whether at the restaurant table or at a bar on the way back to work."),
    h3("Afternoon"),
    p("A coffee break with colleagues, or a quick stop between errands. In summer, a shakerato or an iced coffee; in the south, perhaps a coffee granita."),
    h3("After dinner"),
    p("An espresso at the end of a restaurant meal is common, sometimes followed by — or \"corrected\" with — a digestivo such as an amaro or grappa. Some people avoid caffeine in the evening and order a decaf or skip coffee altogether."),

    // ——— 7 ———
    h2("Coffee and food"),
    p("Coffee in Italy is rarely eaten with a large meal: it comes after. At breakfast it goes with something small and sweet — a cornetto, a slice of cake, biscuits to dip. Regional pastries do the same job: a sfogliatella in Naples, a brioche in Sicily, a slice of crostata almost anywhere. Coffee also flavours desserts, from tiramisù to affogato, gelato \"drowned\" in espresso."),
    p("Compared with the cooked breakfasts familiar in Britain or the United States, an Italian breakfast can seem sparse. That's the point: coffee is the main event, and lunch is the main meal. For sweets, see [traditional Italian desserts](/food/traditional-italian-desserts)."),

    // ——— 8 ———
    h2("The moka pot: coffee at home"),
    p("Walk into many Italian kitchens and you'll find a moka pot on or near the stove. This stovetop coffee maker has three parts: a lower chamber for water, a funnel-shaped filter for ground coffee, and an upper chamber where the coffee collects. As the water heats, steam pressure pushes it up through the coffee and into the top."),
    p("Bialetti, the company that made the design famous, says Alfonso Bialetti created the octagonal aluminium Moka Express in 1933; the company credits his son Renato with turning it into a worldwide success. It remains in production in a form close to the original, and its shape is recognisable around the world."),
    h3("Why moka isn't espresso"),
    p("A moka works at a far lower pressure than an espresso machine, so the result is strong and aromatic but different: usually no thick crema, and a slightly different body and taste. Italians call it simply *caffè* and it is many households' everyday coffee, but it's more accurate to call it moka coffee than espresso. Today capsule and pod machines also sit in many kitchens, alongside or instead of the moka."),
    {
      type: "image",
      src: `${IMG}/rome-moka-pot.webp`,
      alt: "A small red Bialetti moka pot on a gas ring in a home kitchen in Rome, with a blue flame beneath",
      caption: "A moka pot on the stove in a Rome kitchen.",
      credit: unsplash("Sten Ritterfeld", "stenslens"),
    },

    // ——— 9 ———
    h2("Naples"),
    p("Few cities are as closely associated with coffee as Naples. It's usually drunk short and strong at the counter, often with sugar, and frequently served with a glass of water. The city's historic cafés include the **Gran Caffè Gambrinus**, which opened in 1860 near the Royal Palace and Piazza del Plebiscito and is listed in the Italian chambers of commerce's register of historic businesses."),
    p("At home, before the moka spread, many Neapolitan families used the *napoletana* (or *cuccumella*), a flip-over drip pot. Coffee also runs through Neapolitan theatre and song: one of Eduardo De Filippo's best-known scenes, in *Questi fantasmi!* (1946), is a monologue about making coffee on the balcony."),
    h3("The caffè sospeso"),
    p("The *caffè sospeso* (\"suspended coffee\") is a Neapolitan custom: you pay for two coffees, drink one, and leave the other paid for anyone who needs it. The Treccani dictionary describes it as a practice of Neapolitan origin. How widespread it was historically is hard to document, and how often it's practised today varies from bar to bar; since the 2010s the idea has also been revived in other cities and countries."),
    p("For the rest of the city, see our [Naples guide](/cities/naples-first-visit)."),
    {
      type: "image",
      src: `${IMG}/campania-sfogliatella-coffee.webp`,
      alt: "Two glasses of iced coffee on saucers beside a crisp, shell-shaped sfogliatella pastry on a café table",
      caption: "Iced coffee and a sfogliatella: a southern breakfast, photographed in Campania.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/naples-cafe-street.webp`,
      alt: "Black-and-white photo of people at café tables along a narrow street in central Naples, with strings of lights overhead",
      caption: "Café tables in a narrow street in the centre of Naples.",
      credit: unsplash("Bunny Pickard", "bunny_01"),
    },

    // ——— 10 ———
    h2("Turin and the bicerin"),
    p("Turin has one of Italy's strongest traditions of elegant historic cafés, many of them under the arcades of the centre, and a long connection with chocolate. Turismo Torino describes **Caffè Fiorio**, opened in 1780, as a meeting place for Risorgimento politicians including Cavour."),
    p("The city's signature drink is the **bicerin**: coffee, chocolate and milk cream layered in a small glass and traditionally drunk without stirring. It is closely associated with the **Caffè Al Bicerin** in Piazza della Consolata, which dates itself to 1763 and describes the drink as its speciality. The name comes from the Piedmontese word for a small glass. Our [Turin guide](/cities/turin-first-visit) covers the cafés and the city."),
    {
      type: "image",
      src: `${IMG}/turin-al-bicerin.webp`,
      alt: "A wooden display case of cornetti and pastries on glass stands inside the Caffè Al Bicerin in Turin",
      caption: "Pastries in the wooden display case of the Caffè Al Bicerin, Piazza della Consolata, Turin.",
      credit: unsplash("Carmen Laezza", "_elleci"),
    },

    // ——— 11 ———
    h2("Venice and the first coffeehouses"),
    p("Venice's trade with the eastern Mediterranean made it one of Europe's early doors for coffee. The Paduan physician and botanist Prospero Alpini, who had travelled in Egypt, described the coffee plant in *De plantis Aegypti* (1592) — one of the first European scientific descriptions of it, according to the University of Padua. Coffeehouses multiplied in Venice over the following century and became places for conversation, business and news."),
    p("The best-known survivor is **Caffè Florian**, under the arcades of the Procuratie Nuove on Piazza San Marco. It opened on 29 December 1720 as \"Alla Venezia Trionfante\" and soon took the name of its founder, Floriano Francesconi. Florian describes itself as the oldest coffeehouse in Italy. Sitting at a table there, especially with the music on the square, is expensive and priced accordingly — a spectacle as much as a coffee. See our [Venice guide](/cities/venice-quieter-neighbourhoods) for quieter corners of the city."),
    {
      type: "image",
      src: `${IMG}/venice-piazza-san-marco-cafe.webp`,
      alt: "Rows of empty café tables and chairs on the Piazzetta di San Marco at dawn, beside the Doge's Palace and its two columns",
      caption: "Café tables beside the Doge's Palace, San Marco, early in the morning.",
      credit: unsplash("Lukas Krasa", "kraasa"),
    },

    // ——— 12 ———
    h2("Trieste: a different language of coffee"),
    p("Trieste was declared a free port by the Habsburgs in 1719 and became a major coffee port, and the city still has a strong roasting and trading tradition. It also has its own coffee vocabulary, which visitors from the rest of Italy find as confusing as foreigners do. According to the city's tourism sites:"),
    ul(
      "**Nero** — an espresso.",
      "**Capo** — what elsewhere is a caffè macchiato: espresso with a little milk.",
      "**Goccia / gocciato** — espresso with just a drop of milk foam.",
      "**Capo in b** — a capo served in a small glass (*in bicchiere*).",
    ),
    p("Order a \"cappuccino\" in Trieste and you may get something smaller than you expect. The city's historic cafés include the **Tommaseo** (1825), the **Caffè degli Specchi** (1839) on Piazza Unità and the **Caffè San Marco** (1914), all listed by the Comune di Trieste."),

    // ——— 13 ———
    h2("Rome"),
    p("Rome's coffee culture is as counter-based as anywhere, with busy bars around every piazza. Its most famous historic café, the **Antico Caffè Greco** on Via dei Condotti, opened in 1760 according to the city's tourism office and was frequented by writers and artists for more than two centuries. It closed in October 2025 after a long legal dispute over its lease; check its status before planning a visit. For the rest of the city, see [Rome in three days](/guides/rome-in-three-days)."),

    // ——— 14 ———
    h2("Sicily"),
    p("In Sicily coffee meets the island's summer traditions. **Coffee granita** — a soft, semi-frozen coffee ice — is often served with whipped cream and a brioche, especially in eastern Sicily, and almond milk (*latte di mandorla*) is a traditional cold drink. Everyday bar coffee follows the national pattern. For the rest, see [Sicilian food traditions](/food/sicily-food-traditions) and our [Palermo guide](/cities/palermo-markets-monuments)."),

    // ——— 15 ———
    h2("Regional traditions compared"),
    table(
      ["Place", "Coffee tradition", "Distinctive drink or custom", "Context"],
      [
        ["Naples", "Short, strong espresso at the counter", "Caffè sospeso; glass of water with coffee", "Gran Caffè Gambrinus, 1860; the napoletana pot"],
        ["Turin", "Historic cafés under the arcades", "Bicerin", "Caffè Al Bicerin (dates itself to 1763), Caffè Fiorio (1780)"],
        ["Venice", "Early coffeehouse city", "Café sitting on Piazza San Marco", "Caffè Florian, 1720"],
        ["Trieste", "Coffee port with its own vocabulary", "Nero, capo, capo in b", "Free port from 1719; cafés from 1825"],
        ["Rome", "Busy counter culture", "—", "Antico Caffè Greco, 1760 (closed 2025)"],
        ["Sicily", "Summer coffee traditions", "Coffee granita with brioche", "Especially eastern Sicily"],
        ["Piedmont", "Chocolate and coffee", "Marocchino (often associated with Alessandria)", "Recipes vary by city"],
      ],
      "Dates as given by the cafés, local tourism offices or official registers.",
    ),

    // ——— 16 ———
    h2("A short history of Italian coffee"),
    table(
      ["Period", "Development", "Why it mattered"],
      [
        ["1590s", "Prospero Alpini describes the coffee plant after travelling in Egypt", "Early European scientific knowledge of coffee"],
        ["17th–18th centuries", "Coffeehouses spread in Venice and other cities", "Cafés become places for conversation and news"],
        ["1720–1780", "Florian (Venice, 1720), Antico Caffè Greco (Rome, 1760), Fiorio (Turin, 1780) open", "Several of today's historic cafés date from this period"],
        ["1884", "Angelo Moriondo patents a steam coffee apparatus and shows it in Turin", "An early step towards bar machines"],
        ["1901–1906", "Luigi Bezzera's patent; La Pavoni builds machines from 1903 and shows them in Milan in 1906", "Coffee made quickly to order, cup by cup"],
        ["1933", "Bialetti's Moka Express", "Strong coffee at home"],
        ["1938–1948", "Achille Gaggia's patents and the first lever-piston machines", "High-pressure espresso with crema"],
        ["Post-war decades", "Espresso bars spread across Italy", "The counter coffee becomes an everyday habit"],
        ["2000s–today", "Capsule machines at home; specialty coffee shops in cities", "More choice alongside the traditional bar"],
      ],
    ),

    // ——— 17 ———
    h2("Espresso machines: more than one inventor"),
    p("The espresso machine wasn't invented in a single moment. In 1884 **Angelo Moriondo** of Turin patented a steam apparatus for preparing coffee quickly and presented it at the General Italian Exhibition in Turin. According to MUMAC, the museum of coffee machines near Milan, it made coffee in quantity rather than cup by cup, and Moriondo never put it into industrial production."),
    p("**Luigi Bezzera** of Milan filed a patent in 1901 for a machine with a *gruppo erogatore* — the group head that makes a single serving to order. **Desiderio Pavoni** acquired the rights and began production in 1903, and machines of this kind were shown at the Milan International Exhibition of 1906. These steam-driven machines produced a stronger, faster coffee, but not the espresso we know today."),
    p("That came later. **Achille Gaggia** filed a patent in 1938 for a system using hot-water pressure rather than steam, and in 1947 another for a lever-driven piston that pushed water through the coffee at much higher pressure. The company says the result was espresso with a layer of natural crema; the first machines were built with Faema in 1948. Many other engineers and firms refined the design since — espresso is a story of successive improvements, not a single hero."),
    {
      type: "image",
      src: `${IMG}/rome-lever-espresso-machine.webp`,
      alt: "A polished chrome two-group espresso machine with levers and pressure gauges on a counter in a Roman trattoria",
      caption: "A traditional espresso machine in a trattoria in Rome.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 18 ———
    h2("Traditional bars and specialty coffee"),
    p("Most Italian coffee is still drunk in traditional bars, often made from blends that include robusta beans alongside arabica and roasted fairly dark. Over the past decade or so, a growing number of **specialty coffee shops** in cities such as Milan, Turin, Rome and Florence have offered single-origin beans, lighter roasts and alternative methods such as filter, pour-over and cold brew."),
    p("It's not a battle of old against new. Many specialty cafés still serve espresso and cappuccino at the counter, and some traditional roasters and bars have raised their own standards. Younger customers often move between both. What the specialty scene has changed is the conversation — about where coffee comes from, how it's roasted and what it should cost — rather than the everyday ritual of *un caffè al banco*."),

    // ——— 19 ———
    h2("How to order coffee in Italy"),
    p("Keep it short and polite. A *buongiorno* when you arrive, the order, *grazie* when you leave."),
    table(
      ["If you want…", "Say…", "What you'll generally get"],
      [
        ["An espresso", "\"Un caffè, per favore.\"", "A single espresso"],
        ["Two espressos", "\"Due caffè, per favore.\"", "Two espressos"],
        ["A cappuccino", "\"Un cappuccino, per favore.\"", "A cappuccino in a cup"],
        ["Espresso with a little milk", "\"Un caffè macchiato.\"", "Espresso with a touch of milk or foam"],
        ["A milky coffee", "\"Un caffè latte.\"", "Hot milk with coffee, in a glass or large cup"],
        ["A decaf", "\"Un decaffeinato\" or \"un deca.\"", "A decaffeinated espresso"],
        ["A longer black coffee", "\"Un caffè americano.\"", "Espresso with added hot water"],
        ["Plant milk", "\"Con latte di soia / d'avena?\"", "Many bars have soy or oat milk; not all"],
      ],
      "Local terms can differ, especially in Trieste.",
    ),

    // ——— 20 ———
    h2("Common mistakes visitors make"),
    ul(
      "**Expecting a big filter coffee.** \"Coffee\" means espresso; ask for an americano if you want something longer.",
      "**Ordering a \"latte\".** You'll get a glass of milk. Say *caffè latte*.",
      "**Mixing up caffè latte and latte macchiato.** Both are milky; the latte macchiato is milk with a little coffee added.",
      "**Thinking cappuccino is forbidden after noon.** It's a habit, not a rule — order what you like.",
      "**Assuming every bar charges the same.** Counter, table and famous-square prices can be very different.",
      "**Assuming standing and sitting work the same everywhere.** Some bars charge for table service, some don't.",
      "**Assuming words mean the same in every city.** Trieste in particular has its own vocabulary.",
      "**Expecting takeaway cups everywhere.** Many traditional bars serve coffee in a cup at the counter; takeaway is more common than it was, but not universal.",
    ),

    // ——— 21 ———
    h2("Coffee etiquette"),
    ul(
      "**Greet and order clearly** — *buongiorno*, then the drink.",
      "**Follow the local payment system** — pay first at the till if that's what others are doing.",
      "**At the counter, keep it brief** — drink and make room for the next person.",
      "**At a table, take your time** — once you've paid for table service, nobody will hurry you.",
      "**Don't move from counter to table** with a counter-priced drink unless the bar says it's fine.",
      "**Tipping isn't expected** — leaving a coin or rounding up for good service is a personal choice.",
      "**Cover charges** (*coperto*) are a restaurant practice; bars don't normally charge one, though table service may be priced higher.",
    ),

    // ——— 22 ———
    h2("Coffee and social life"),
    p("\"Prendiamo un caffè?\" — \"Shall we get a coffee?\" — is one of the most common invitations in Italian. It can mean a genuine break, a way to continue a conversation, a quick business meeting, or simply a gesture of friendliness. Offering to pay for someone's coffee is a small courtesy, and people often take turns."),
    p("At work, a coffee break is a moment to talk away from the desk. In a neighbourhood, the bar is where people meet, read the paper and catch up on news. The coffee itself takes a minute; the ritual around it is what matters. In the evening, the same bars switch to aperitivo, and in many towns coffee is part of the *passeggiata*, the evening stroll."),
    {
      type: "image",
      src: `${IMG}/rome-espresso-outdoor-table.webp`,
      alt: "A man with glasses and a beard in a tan leather jacket sipping an espresso at an outdoor café table in Rome, with people talking in the background",
      caption: "A coffee at an outdoor table in Rome.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 23 ———
    h2("Coffee and identity"),
    p("Coffee carries a surprising amount of meaning in Italy. For many people it is tied to family memory — the sound of the moka in the morning, a grandparent's way of making it. It expresses regional pride, from Neapolitan coffee to Turin's bicerin and Trieste's vocabulary. Offering coffee to a guest at home is a basic act of hospitality."),
    p("It is also a modern industry. Italian roasters and machine makers sell around the world, and the idea of \"Italian espresso\" is part of how Italy presents itself abroad. At home, meanwhile, habits keep changing: capsules, decaf, plant milks and specialty cafés sit alongside the counter espresso. There isn't one Italian way of drinking coffee — but there is a shared expectation that coffee should be good, quick and part of the day."),

    // ——— 24 ———
    h2("Coffee glossary"),
    table(
      ["Term", "Meaning"],
      [
        ["Caffè", "Coffee; at the bar, an espresso"],
        ["Espresso", "A short coffee made under pressure"],
        ["Doppio", "Double"],
        ["Ristretto / corto", "Shorter, more concentrated"],
        ["Lungo", "Made with more water"],
        ["Macchiato", "\"Stained\" — with a little milk"],
        ["Cappuccino", "Espresso with steamed milk and foam"],
        ["Caffè latte", "Milk with coffee"],
        ["Latte macchiato", "Milk \"stained\" with coffee"],
        ["Marocchino", "Espresso with cocoa and milk foam"],
        ["Shakerato", "Espresso shaken with ice"],
        ["Corretto", "With a dash of spirit"],
        ["Decaffeinato / deca", "Decaf"],
        ["Orzo", "Roasted barley drink"],
        ["Moka", "Stovetop coffee maker"],
        ["Bar", "Café"],
        ["Banco", "The counter"],
        ["Tavolo", "Table (table service)"],
        ["Scontrino", "Receipt"],
        ["Cornetto / brioche", "Breakfast pastry"],
        ["Bicerin", "Turin's layered coffee, chocolate and cream drink"],
      ],
    ),
    p("For the rest of your trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What does \"caffè\" mean in Italy?", answer: "At a bar, \"un caffè\" means an espresso. At home it often means moka coffee." },
    { question: "Is Italian coffee always espresso?", answer: "At the bar, most drinks are built on espresso. At home many people use a moka pot or capsule machine, and specialty cafés also offer filter coffee." },
    { question: "What is a caffè macchiato?", answer: "An espresso with a small amount of milk or milk foam. Some bars ask whether you want the milk hot or cold." },
    { question: "What's the difference between caffè latte and latte macchiato?", answer: "Both are milky. A caffè latte is milk with coffee; a latte macchiato is hot milk with a little espresso added, usually in a tall glass." },
    { question: "Do Italians drink cappuccino after breakfast?", answer: "Many prefer it in the morning, but it's a habit rather than a rule. You can order one at any time." },
    { question: "What is a moka pot?", answer: "A stovetop coffee maker that pushes hot water up through ground coffee using steam pressure. Bialetti's Moka Express dates from 1933." },
    { question: "Is moka coffee the same as espresso?", answer: "No. The moka works at much lower pressure, so the coffee is strong but different, usually without thick crema." },
    { question: "What coffee should a tourist order in Italy?", answer: "Whatever you like. \"Un caffè\" is an espresso; for something longer, ask for an americano; for a milky coffee, a cappuccino or caffè latte." },
    { question: "What is a bicerin?", answer: "A Turin speciality of coffee, chocolate and milk cream layered in a small glass, associated with the Caffè Al Bicerin." },
    { question: "What is caffè sospeso?", answer: "A Neapolitan custom of paying for an extra coffee that is left for someone who can't afford one." },
    { question: "Which Italian cities are known for coffee culture?", answer: "Naples, Turin, Venice and Trieste are all closely associated with coffee, each in its own way — but every city has a strong bar culture." },
    { question: "Can you get decaf coffee in Italy?", answer: "Yes. Ask for \"un decaffeinato\" or \"un deca\". Barley coffee (caffè d'orzo) is another caffeine-free option." },
    { question: "Do Italian cafés have table service?", answer: "Many do. If you sit at a table, a waiter usually takes your order, and the price may be higher than at the counter." },
    { question: "Do you pay more when sitting at a café?", answer: "Often, yes, especially in busy squares and famous historic cafés. Prices should be displayed; check before sitting down." },
    { question: "Do you tip at an Italian bar?", answer: "It isn't expected. Some people leave a small coin or round up for good service." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "University of Padua (Il Bo Live) — Prospero Alpini", url: "https://ilbolive.unipd.it/it/news/medicina-padova-nei-secoli-prospero-alpini", note: "in Italian" },
    { label: "Caffè Florian — History", url: "https://caffeflorian.com/en/florian-venezia/history/", note: "1720 opening" },
    { label: "Turismo Roma — Antico Caffè Greco", url: "https://www.turismoroma.it/en/places/antico-caff%C3%A8-greco", note: "1760 opening" },
    { label: "Caffè Al Bicerin — History", url: "https://bicerin.it/en/history/", note: "café and drink" },
    { label: "Turismo Torino — Caffè Fiorio", url: "https://turismotorino.org/en/visit/things-to-do-and-things-to-see/food-and-wine/historical-cafes/caffe-fiorio", note: "historic cafés" },
    { label: "Unioncamere — Registro delle imprese storiche: Gran Caffè Gambrinus", url: "https://www.unioncamere.gov.it/imprese-storiche/gran-caffe-gambrinus-srl", note: "in Italian" },
    { label: "Treccani — caffè sospeso", url: "https://www.treccani.it/vocabolario/caffe-sospeso_(Neologismi)/", note: "in Italian" },
    { label: "Comune di Trieste — Historic cafés", url: "https://itinerari.comune.trieste.it/en/historic-cafes/", note: "founding dates" },
    { label: "Discover Trieste — Historical cafés", url: "https://discover-trieste.it/en/23059/Historical-Cafes", note: "coffee vocabulary" },
    { label: "MUMAC — The early years of the espresso machine", url: "https://www.mumac.it/le-sale/sala1-albori", note: "Moriondo, Bezzera, Pavoni (in Italian)" },
    { label: "Gaggia — Our history", url: "https://www.gaggia.com/our-history/", note: "1938 and 1947 patents" },
    { label: "Bialetti — Our history", url: "https://www.bialetti.com/it_en/la-storia", note: "Moka Express" },
    { label: "Istituto Nazionale Espresso Italiano", url: "https://www.espressoitaliano.org/", note: "espresso definition" },
  ],
};
