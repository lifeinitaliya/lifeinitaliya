import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Italian Breakfast" — built October 2026.
// Key facts checked against: Accademia della Crusca for terminology
// (colazione, cornetto, brioche, marmellata, confettura); EU Directive
// 2001/113/EC (implementing in Italy the distinction between marmellata and
// confettura under food law); the Italian Coffee article on this site for
// coffee terminology; regional tourism portals (Turismo Sicilia, Naples DMO)
// for regional breakfast traditions; Barilla Center for Food & Nutrition on
// Italian eating habits (cited for pattern, not statistics); ISTAT data where
// generalised. The cappuccino-after-breakfast cultural tendency is presented
// as a tendency and cultural norm, not a rule. Regional variation is
// emphasised throughout. No specific café, bakery, hotel or food brand is
// named or ranked. No prices are given.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-breakfast";

export const italianBreakfast: ArticleContent = {
  body: [
    // ——— 1 Introduction ———
    h2("What is a typical Italian breakfast?"),
    answer("**A typical Italian breakfast is quick, sweet and built around coffee. At an Italian bar, the most common combination is a cappuccino or espresso and a cornetto — a soft, slightly sweet pastry related to the French croissant but made with a lighter, less buttery dough.** At home, it might be a moka-pot coffee with milk and a few biscuits or some bread with jam. Breakfast in Italy is not a big meal; it's the briefest stop of the day."),
    p("This is where the gap between expectation and experience opens for many travellers. People arrive from countries where breakfast means eggs, bacon, toast and a spread of savoury foods, and find that Italians seem to be getting by on a pastry and a small coffee. This is not asceticism or indifference — it reflects a different relationship between the meals of the day, and between sweetness and the morning. Italian breakfast is light, quick and sweet by design."),
    p("That said, not every Italian has the same breakfast every morning. There are regional differences, differences between home and bar breakfast, and significant variation in what hotels serve. This article covers all of these: the standard café breakfast, what people eat at home, how breakfast varies by region, and what to expect when you walk into an Italian bar in the morning."),
    {
      type: "facts",
      title: "Italian breakfast at a glance",
      rows: [
        { label: "Italian word", value: "Colazione (breakfast); prima colazione (first meal of the day)" },
        { label: "Typical bar breakfast", value: "Cappuccino (or espresso) and a cornetto" },
        { label: "Typical home breakfast", value: "Moka coffee with milk, biscuits, bread with jam or yogurt" },
        { label: "Character", value: "Sweet and light; usually taken standing at the bar counter" },
        { label: "Regional variation", value: "Significant, especially in Sicily (granita and brioche) and Naples (pastries)" },
        { label: "Hotel breakfast", value: "Often more international; may include eggs, cured meats, cheese" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Why Italian breakfast is often sweet",
        "Coffee at breakfast",
        "Cornetto, brioche and other morning pastries",
        "Breakfast at home",
        "Breakfast at an Italian bar",
        "Regional Italian breakfast traditions",
        "Italian hotel breakfast",
        "How to order breakfast in Italy",
        "Italian breakfast vocabulary",
        "Italian breakfast myths",
        "Italian breakfast FAQ",
      ],
    },

    // ——— 2 Why Sweet ———
    h2("Why Italian breakfast is often sweet"),
    p("Sweetness in the morning isn't accidental in Italy — it's a reflection of how the day's meals are organised. Italian culinary tradition places the main protein and savoury content of the day at lunch and dinner. Breakfast is a preparation for the morning, not a meal that needs to sustain you until the next. A cornetto and a cappuccino provide sugar, caffeine and a modest amount of fat and protein — enough to get to mid-morning, at which point a second coffee or a small snack might follow."),
    p("This pattern is common across much of southern Europe and parts of the Mediterranean and is not unique to Italy. But in Italy it's particularly consistent and is reinforced by the bar culture: the Italian bar is set up for quick, standing-up consumption of coffee and a pastry, not for lingering over eggs."),
    p("The sweetness of the cornetto itself deserves a note. Italian cornetti are made with a softer, sweeter dough than a French croissant; the typical version is mildly sweet even when plain (*cornetto vuoto* or *cornetto semplice*). This is the version most commonly eaten — just the dough — or with a filling: *crema* (pastry cream), *marmellata* (jam, typically citrus) or chocolate. The bar you go to will have its cornetti already made; you pick plain or with filling and that's the decision."),
    image("cappuccino-saucer-table", "A cappuccino in a white ceramic cup on a saucer at a café table", false),

    // ——— 3 Coffee ———
    h2("Coffee at breakfast"),
    p("Coffee is the anchor of Italian breakfast, and the type of coffee matters. For a full account of Italian coffee culture, terms and traditions, the [Italian Coffee article](/food/italian-coffee-culture) is the dedicated guide. Here are the basics for breakfast:"),
    ul(
      "**Cappuccino** is the classic Italian breakfast coffee: one shot of espresso topped with steamed and frothed milk. It's considered a breakfast drink — strongly associated with the morning meal. The idea that Italians never order cappuccino outside breakfast is a cultural tendency rather than a strict rule, but it's real: cappuccino is associated with milk and digestion, and in traditional Italian coffee culture, having a large milky coffee after a meal is unusual. At breakfast, it's standard.",
      "**Espresso** (*un caffè*) is a small, concentrated shot of coffee. Ordering *un caffè* in Italy means espresso; if you want a long coffee, specify. Espresso is drunk at breakfast but also at mid-morning, after lunch and at other times of day — it's not specifically a breakfast drink.",
      "**Caffè latte** is espresso with steamed milk — typically more milk than a cappuccino, and less froth. It's a home drink more than a bar drink; at a bar you might ask for it but it's less standard than cappuccino.",
      "**Latte macchiato** is hot steamed milk 'marked' with a shot of espresso, served in a glass. It's milkier and milder than a cappuccino and popular as an alternative for those who find espresso strong.",
      "**Caffè americano** is espresso diluted with hot water. If you want a longer, weaker coffee, this is what to ask for.",
    ),
    p("At home, the moka pot is the most common way to make coffee. The moka brews by forcing pressurised hot water through ground coffee — the result is stronger than filter coffee but less concentrated than espresso. It's served with or without milk, often in a large cup or mug, and sits alongside whatever else is on the breakfast table."),
    image("cappuccino-ceramic-mug", "A cappuccino in a white and blue ceramic cup on a white saucer", false),
    tip("**Ordering coffee at an Italian bar** is usually fast: walk in, go to the counter and say *Un cappuccino, per favore* or *Un caffè, per favore*. The barista will make it immediately. You pay when you're done (or in some bars, before, at a till). Standing at the counter is standard and expected."),
    image("moka-pot-brewing", "A moka pot on a hob with dark coffee rising through the central column into the upper chamber", false),

    // ——— 4 Pastries ———
    h2("Cornetto, brioche and other morning pastries"),
    p("The cornetto is the most widely eaten morning pastry in Italy, found from north to south, though its exact form changes by region and by bakery. It's related to the Austrian *Kipferl* and the French croissant — both shaped pastries descended from similar buttery, laminated dough traditions — but the Italian version is not simply an Italian name for a croissant. The dough tends to be softer and slightly sweeter; the lamination is less pronounced; the result is chewier and less flaky. This varies between bakeries, and some Italian cornetti are closer to a croissant than others, but as a rule the everyday Italian cornetto is a softer, sweeter product."),
    p("Common fillings at the bar or bakery counter:"),
    ul(
      "**Vuoto** (empty) — just the dough, no filling",
      "**Alla crema** — filled with crema pasticcera (custard cream); the most common filling",
      "**Alla marmellata** — filled with jam (typically citrus-based, hence the use of *marmellata* rather than *confettura* — see the vocabulary table)",
      "**Al cioccolato** — filled with chocolate cream or Nutella",
      "**Integrale** — a wholemeal version, increasingly available",
    ),
    image("cornetto-pastry-table", "A croissant-style pastry resting on a café table", false),
    p("**Brioche** is a more complex term in Italy than it might initially appear. In most of northern and central Italy, *brioche* at a bar counter describes a cornetto-like pastry or a soft enriched roll, not what a French or British person would recognise as brioche (an egg-and-butter enriched bread). The word is used differently in different regions and different contexts, and it's worth asking what a specific bar means by it rather than assuming you know."),
    p("The most important exception is **Sicily**, where *brioche* means something specific and quite different: a large, soft, dome-shaped roll made with egg, butter and sometimes orange flower water, topped with a small sphere of dough called the *tuppo*. The Sicilian *brioche col tuppo* is designed to accompany granita — the traditional Sicilian summer breakfast. More on this below."),
    p("Other morning pastries you'll encounter in different regions:"),
    ul(
      "**Sfogliatella** in Naples — either *riccia* (with a flaky, layered shell) or *frolla* (with a shortcrust pastry shell), filled with sweetened ricotta with semolina, candied peel and cinnamon",
      "**Maritozzo** in Rome — a soft, enriched bun split and filled with whipped cream; traditional in Rome, now found more widely",
      "**Bombolone** — a fried doughnut filled with cream or jam, found across Italy",
      "**Fagottino** — a small puff-pastry parcel with a sweet filling; found in many bars",
    ),
    image("pastry-display-case", "An assortment of pastries and desserts arranged in a café display case", true),

    // ——— 5 Breakfast at home ———
    h2("Breakfast at home"),
    p("Home breakfast in Italy is different from the bar in one key respect: the coffee is moka-pot coffee, not espresso. Everything else follows a similar logic — something sweet, something to drink, something quick."),
    p("A typical weekday home breakfast might include:"),
    ul(
      "Moka coffee with milk (caffè latte) in a large mug",
      "Biscuits (*biscotti*) — the dry, plain sort eaten by dunking in coffee, not the spiced biscotti of international bakeries",
      "Bread (*pane*) with butter and jam, or with a spread",
      "Yogurt (*yogurt*), plain or fruit",
      "Fresh or canned fruit",
      "Packaged breakfast cereals, especially in households with children",
      "Fette biscottate — a dried, rusk-like crispbread made from lightly sweetened dough, very common as a packaged breakfast staple",
    ),
    image("biscotti-coffee-basket", "A basket of Italian biscuits beside a cup of coffee", false),
    p("Industrial breakfast products have a large market in Italy — breakfast cereals, packaged biscuits, milk-and-cereal drinks, individually wrapped pastries. This is the reality of Italian weekday breakfast for many households, and it's worth knowing because it's often absent from accounts that focus on the romantic version of a bar breakfast. The bar with the great cornetto is the weekend and special-occasion breakfast; Monday through Friday, it's often a biscuit and a moka at home."),
    note("There is a tendency in writing about Italian food to describe a single 'traditional Italian breakfast' as though it's universal. It isn't — it varies by region, age, household, time of week and preference, just as breakfast does everywhere else."),

    // ——— 6 Bar Breakfast ———
    h2("Breakfast at an Italian bar"),
    p("The Italian *bar* is not the same as a pub or a cocktail bar. It's a café that serves coffee, pastries, light food, soft drinks and (often) wine and spirits, from early morning to late at night. Breakfast at a bar is a quick stop, not a meal — usually fifteen minutes standing at the counter."),
    p("Walking into an Italian bar for breakfast typically works like this:"),
    ul(
      "Go to the counter (banco). Sit-down service at a table is available in many bars but costs more — you pay for being waited on.",
      "Order directly from the barista: *Un cappuccino e un cornetto, per favore* (A cappuccino and a cornetto, please).",
      "The barista makes your coffee immediately — not in five minutes, immediately.",
      "The cornetto may be taken from a warm display or basket; you may be asked if you want it *caldo* (warm, briefly heated) or as it is.",
      "Eat and drink standing at the counter. This is the normal thing to do; you won't be given a strange look.",
      "Pay when you've finished, either at the counter or at a separate till (*cassa*). In some bars, especially in Naples, the protocol is to pay first, then collect.",
    ),
    image("cafe-bar-interior", "Tables and chairs inside an Italian café bar with morning light coming through the windows", false),
    p("The pace is quick. Italian bar breakfasts are not designed for lingering — there's no brunch culture here, no bottomless coffee, no one asking if you're ready to order your eggs. You drink your coffee, eat your pastry, pay and move on. That's not unfriendliness; it's the rhythm."),
    tip("In Naples, many bars operate a *pagamento anticipato* system (pay first). You go to the till, tell the cashier what you want, pay, take your receipt (*scontrino*), and hand it to the barista. This surprises visitors who aren't expecting it; just look at what others are doing when you walk in."),
    image("ornate-cafe-interior", "The ornate interior of a traditional Italian café with vintage décor and plush seating", false),

    // ——— 7 Regional ———
    h2("Regional Italian breakfast traditions"),

    h3("Sicily"),
    p("Sicily's most distinctive breakfast tradition is the summer combination of **granita and brioche col tuppo**. Granita is a semi-frozen Sicilian dessert — coarser and more granular than gelato or sorbet, made from water, sugar and a flavouring (coffee, almond, pistachio, strawberry, citrus, mulberry) — and in Sicily it's eaten for breakfast alongside a soft *brioche col tuppo*, which is used to scoop and absorb the granita. In towns like Catania, Messina and Palermo, a granita col tuppo at the bar is a hot-morning staple, particularly in summer."),
    p("The Sicilian brioche is nothing like a French brioche — it's a large, soft, dome-shaped roll made with egg and often flavoured with vanilla or orange flower water, topped with a little sphere of dough. The gelato [article on Italian gelato](/food/italian-gelato) touches on the broader connection between frozen desserts and the Sicilian table; the [Sicilian Food Traditions article](/food/sicily-food-traditions) covers Sicilian food culture more broadly."),
    p("Sicilian bars also typically serve a wider range of morning pastries — small brioche-based pastries, local variations of filled rolls — and the coffee tradition is strong and particular."),

    h3("Naples and Campania"),
    p("Neapolitan breakfast is famous for its pastries, and for the seriousness with which Neapolitans regard their espresso. Naples claims — with some justification — to be the home of espresso as it's now understood: the strong, quickly made, stand-at-the-counter coffee that spread across Italy and beyond."),
    p("At a Neapolitan bar in the morning, alongside cappuccino and espresso you'll find sfogliatella (either the *riccia* version with its characteristic layered shell, or the *frolla* with shortcrust pastry), *graffa* (a fried potato-dough doughnut dusted with sugar) and *babà* — though babà is typically more of an afternoon or dessert item. The sfogliatella is specifically Neapolitan and is worth seeking out: the riccia version, still warm from the oven, with its flaky, crunchy exterior and slightly grainy, sweetened ricotta filling, is unlike anything sold outside Campania."),

    h3("Rome and Lazio"),
    p("Roman breakfast follows the national bar template closely — cappuccino and a cornetto is the standard — but with a few local variations. The *maritozzo*, a soft enriched bun filled generously with whipped cream, has become popular in Rome and is eaten in the morning or as an afternoon snack. It's traditional in Rome and is now found in many Italian cities, but it belongs to the Roman table."),
    p("Roman bars are generally no-nonsense: quick, efficient, standing at the counter, and often crowded at 8am with people stopping on the way to work."),

    h3("Tuscany and central Italy"),
    p("In Tuscany, breakfast follows national patterns — espresso or cappuccino, a cornetto or a slice of *schiacciata* — with some regional variations in pastry. Florentine bars are known for good coffee and for an understated approach to service: you order, you get what you ordered, it's good."),
    p("The *schiacciata* (the Tuscan flatbread made with olive oil and salt) sometimes appears as a breakfast item, either plain or in the autumn version with grapes baked into the dough. It's lighter than a cornetto and less sweet."),

    h3("Northern Italy"),
    p("In Lombardy and the northern cities, the bar breakfast follows the same pattern as elsewhere — espresso or cappuccino and a cornetto — but the pastry range at the counter may include brioche in the French sense (more buttery, more laminated) as well as softer cornetti. The word *brioche* at a northern Italian bar counter may mean something closer to a croissant than in southern Italy."),
    p("In parts of the north-east (the Veneto and Friuli), the bar breakfast culture connects with the broader bar culture — the same bar might serve coffee at 8am and a glass of prosecco at 10am, and the line between breakfast and mid-morning is slightly less defined."),

    // ——— 8 Hotel ———
    h2("What to expect at an Italian hotel breakfast"),
    p("Hotel breakfast in Italy is typically more international than breakfast at a local bar. This is practical: hotels serve guests from many countries, and guests from Germany, the UK or the United States expect eggs, bread, yogurt and more than a single pastry. What you'll find depends on the type and size of the hotel."),
    p("A typical mid-range to upscale Italian hotel breakfast might include:"),
    ul(
      "Pastries — cornetti, croissants, small pastries",
      "Bread rolls and toast with butter and jam",
      "Yogurt (individual cups)",
      "Fresh fruit and fruit juice",
      "Cereals",
      "Cheese and cured meats (*salumi*) — more common in northern Italy and at three-star-plus hotels",
      "Hard-boiled eggs or scrambled eggs at some hotels",
      "Coffee machine or service, usually including espresso, cappuccino, latte, americano",
    ),
    p("Smaller hotels, *agriturismi* (farm-stay guesthouses) and B&Bs may serve a more personal, homemade breakfast — freshly baked cakes, home-made jam, local cheese, fruit from the garden — which can be the most pleasant breakfast in Italy if you're lucky enough to find it. It varies enormously by the property."),
    note("If you're staying at a hotel and want to experience breakfast as most Italians actually have it, step out and go to the nearest neighbourhood bar. A cappuccino and a cornetto at a local bar is faster, cheaper and — in terms of experiencing how Italians start the day — more authentic than the hotel spread."),

    // ——— 9 How to order ———
    h2("How to order breakfast in Italy"),
    p("Ordering breakfast at an Italian bar is one of the simplest interactions you'll have in Italy, and the language barrier is rarely an issue. These phrases cover most situations:"),
    table(
      ["What you want", "What to say"],
      [
        ["A cappuccino", "Un cappuccino, per favore"],
        ["An espresso", "Un caffè, per favore"],
        ["A coffee with milk", "Un caffè latte, per favore"],
        ["A cornetto (plain)", "Un cornetto vuoto, per favore"],
        ["A cornetto with cream", "Un cornetto alla crema, per favore"],
        ["A cornetto with jam", "Un cornetto alla marmellata, per favore"],
        ["Warm it up please", "Scaldalo, per favore"],
        ["To eat here", "Da consumare qui"],
        ["To take away", "Da portare via"],
        ["At the counter", "Al banco, grazie"],
        ["What fillings do you have?", "Che gusti avete?"],
        ["Do you have a decaffeinated version?", "Avete il decaffeinato?"],
      ],
    ),
    tip("At many Italian bars the price is the same whether you order at the counter or sit at a table — but at some, especially in tourist areas, sitting at a table comes with a *coperto* (cover charge) or higher prices. You don't have to sit unless you want to."),

    // ——— 10 Vocabulary ———
    h2("Italian breakfast vocabulary"),
    table(
      ["Italian", "Meaning / note"],
      [
        ["colazione", "Breakfast (from colazione, the general term for any meal; prima colazione is formal for the morning meal)"],
        ["cornetto", "Italian morning pastry, related to but distinct from a French croissant"],
        ["brioche", "Context-dependent: a soft enriched pastry or roll in most of Italy; specifically a dome-shaped roll with tuppo in Sicily"],
        ["crema", "Custard cream (crema pasticcera)"],
        ["marmellata", "In Italian food law and formal usage: jam made from citrus fruit. In everyday speech, often used for any jam"],
        ["confettura", "Fruit preserve/jam (the legally correct term for non-citrus fruit jams)"],
        ["cappuccino", "Espresso with steamed and frothed milk; associated with morning in Italian culture"],
        ["espresso / caffè", "Concentrated coffee; ordering 'un caffè' in Italy means espresso"],
        ["caffè latte", "Coffee with milk, usually a larger amount of milk than cappuccino"],
        ["latte macchiato", "Steamed milk 'marked' (macchiato) with a small amount of espresso; served in a glass"],
        ["caffè americano", "Espresso diluted with hot water; longer and weaker than espresso"],
        ["moka", "A stovetop coffee maker (Moka pot); produces the standard home coffee in Italy"],
        ["al banco", "At the counter (standing, as opposed to sitting at a table)"],
        ["al tavolo", "At the table"],
        ["vuoto", "Empty/plain (as in cornetto vuoto — an unfilled cornetto)"],
        ["fette biscottate", "Dried crispbread slices, a very common packaged Italian breakfast product"],
        ["scontrino", "Receipt; in some bars (notably Naples), you pay first at the till and present your receipt to the barista"],
      ],
    ),

    // ——— 11 Myths ———
    h2("Italian breakfast myths"),
    p("A few widely repeated ideas about Italian breakfast deserve scrutiny."),
    ul(
      "**\"Italians only eat coffee and a croissant for breakfast.\"** The bar cappuccino-and-cornetto combination is real and common, but Italian home breakfast is often different: cereal, biscuits, bread with jam and yogurt are all normal. The bar breakfast is a public ritual; home breakfast is more varied.",
      "**\"You must never order cappuccino after 11am in Italy.\"** This is a cultural tendency, not a law or a universal rule. Cappuccino is associated with breakfast and morning; ordering one after lunch is unusual and may draw a gentle comment in some bars. But Italians do order cappuccino at other times, and you will not be turned away. The rule version of this idea is an exaggeration of a real cultural tendency.",
      "**\"A cornetto is just a croissant with an Italian name.\"** The cornetto and the French croissant share a common ancestry, but the products are typically different: the Italian cornetto is softer, less flaky, slightly sweeter. The formulation varies between bakeries and regions — some cornetti are closer to a croissant than others — but treating them as identical misses a real difference.",
      "**\"Italian breakfast is always sweet.\"** This is largely true but not universal. Some hotels, especially in northern Italy, serve savoury options alongside pastries. Agriturismi breakfast can include local cheese and bread. The generalization holds but isn't absolute.",
      "**\"Hotels in Italy only serve pastries.\"** Hotel breakfast in Italy is typically more international than a neighbourhood bar, often including eggs, bread, cheese, cured meats and yogurt alongside pastries. The quality and range vary by hotel.",
      "**\"Espresso is always drunk standing up.\"** Espresso is commonly drunk standing at the counter in an Italian bar (and is cheaper that way), but this isn't a rule. You can sit, and many Italians do.",
    ),

  ],

  faqs: [
    { question: "What is a typical Italian breakfast?", answer: "A typical Italian bar breakfast is a cappuccino or espresso and a cornetto. At home, it's usually a moka-pot coffee with milk and biscuits, bread with jam or yogurt. Breakfast in Italy is light, quick and sweet — the main meals of the day are lunch and dinner." },
    { question: "What do Italians eat for breakfast?", answer: "At a bar, most commonly a cornetto (a soft pastry) and coffee — cappuccino or espresso. At home, biscuits (biscotti) dunked in coffee with milk, bread with butter and jam, yogurt or fette biscottate (dried crispbread). Regional pastries — sfogliatella in Naples, granita with brioche in Sicily — are part of local morning traditions." },
    { question: "Do Italians eat eggs for breakfast?", answer: "Not typically. Eggs are not part of the standard Italian bar or home breakfast. They may appear in hotel breakfasts catering to an international clientele and occasionally in agriturismo breakfasts. In everyday Italian food culture, eggs belong in pasta, frittata and other dishes — not the morning meal." },
    { question: "What is a cornetto?", answer: "A cornetto is the standard Italian morning pastry — a soft, slightly sweet pastry related to the croissant but made with a lighter dough. It comes plain (vuoto) or filled with custard cream (crema), jam (marmellata) or chocolate. The name means 'little horn'. Eaten at the bar counter with a cappuccino or espresso." },
    { question: "Is a cornetto the same as a croissant?", answer: "Related, but not the same. Both use enriched dough, but the Italian cornetto is typically softer, less flaky and slightly sweeter than a French croissant. The formulation varies by bakery — some cornetti are closer to a croissant than others — but as a general rule they're distinct products with different textures." },
    { question: "What do Italians drink for breakfast?", answer: "Cappuccino is the most characteristic Italian breakfast coffee — espresso topped with steamed and frothed milk. Espresso (caffè) is also drunk at breakfast. At home, coffee from a moka pot with milk is standard. Younger Italians and children may have milk, fruit juice or hot chocolate (cioccolata calda)." },
    { question: "Do Italians drink cappuccino in the morning?", answer: "Yes — cappuccino is strongly associated with the morning in Italian food culture. It's the most common coffee ordered at an Italian bar at breakfast, and Italians don't typically drink it with lunch or dinner. The association is genuine: the milk content makes it feel like a breakfast drink." },
    { question: "Can you order cappuccino after breakfast?", answer: "Yes, you can. The idea that ordering cappuccino after 11am is forbidden or will cause offence is an exaggeration. It's associated with morning and Italians don't typically drink it later in the day, but there's no rule. You might get a mild raised eyebrow at a traditional bar; most places will simply make it." },
    { question: "What is a Sicilian breakfast?", answer: "The most distinctive Sicilian breakfast (especially in summer) is granita with brioche col tuppo. Granita is a semi-frozen Sicilian preparation made from water, sugar and a flavouring (coffee, almond, pistachio, citrus); in Sicily it's traditionally eaten for breakfast alongside the dome-shaped brioche roll. This tradition is specific to Sicily." },
    { question: "What is granita con brioche?", answer: "Granita con brioche is a Sicilian breakfast of semi-frozen granular granita eaten alongside a soft Sicilian brioche roll. The brioche is used to scoop and absorb the granita. Most traditional in summer, and associated with eastern Sicily (Catania, Messina), though found across the island. The Sicilian brioche is dome-shaped and soft — distinct from French brioche." },
    { question: "What do you order at an Italian breakfast bar?", answer: "The standard order is: un cappuccino e un cornetto, per favore (a cappuccino and a cornetto, please). For espresso: un caffè, per favore. For a filled cornetto: alla crema (custard), alla marmellata (jam) or al cioccolato (chocolate). Stand at the counter, drink, eat and pay when done." },
    { question: "Is Italian hotel breakfast different from breakfast at home?", answer: "Yes, usually. Italian hotel breakfast is typically more international — more varied, with pastries, bread, yogurt, fruit, cereals and often eggs or savoury items. Home and bar breakfast is lighter and simpler. To experience Italian breakfast as most Italians have it, go out to the neighbourhood bar." },
    { question: "Is Italian breakfast sweet or savoury?", answer: "Sweet is the strong default. The standard Italian bar and home breakfast centres on sweet pastry and coffee. Savoury elements — cheese, cured meats, eggs — appear at hotels and in some agriturismo stays, but they're not the norm at a neighbourhood bar." },
    { question: "What does colazione mean?", answer: "Colazione means breakfast in Italian — specifically the first meal of the day. The full formal term is prima colazione. The word also appears for a light midday snack in some traditional texts, but in modern usage colazione almost universally means the morning meal." },
    { question: "How do you order breakfast in Italian?", answer: "At the bar counter: Un cappuccino e un cornetto, per favore. For espresso: Un caffè, per favore. For a filled cornetto: Un cornetto alla crema (custard), alla marmellata (jam) or al cioccolato (chocolate). Pay at the counter when you're done." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Accademia della Crusca — terminology and definitions", url: "https://www.accademiadellacrusca.it/", note: "colazione, cornetto, marmellata, confettura, brioche" },
    { label: "EU Council Directive 2001/113/EC on fruit jams and marmalades", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32001L0113", note: "distinction between marmellata (citrus) and confettura (other fruit)" },
    { label: "Regione Siciliana — Turismo", url: "https://www.visitsicily.info/", note: "granita and brioche breakfast tradition" },
    { label: "Comune di Napoli / DMO — Portale del Turismo di Napoli", url: "https://dmo-napoli.inera.it/", note: "sfogliatella and Neapolitan pastry traditions" },
    { label: "Barilla Center for Food & Nutrition (BCFN)", url: "https://www.barillacfn.com/", note: "general pattern of Italian meal structure — not cited for specific statistics" },
    { label: "D.Lgs. 231/2017 (food information); EU Reg. 1169/2011 (allergen labelling)", url: "https://www.normattiva.it/", note: "food labelling and allergen requirements" },
  ],
};
