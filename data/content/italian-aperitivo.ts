import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Italian Aperitivo". Replaces a short placeholder in the lifestyle
// section ("aperitivo-ritual") that was never published. Checked in October
// 2026 against: Treccani (etymology of aperitivo; the apericena neologism);
// the EU eAmbrosia register (Vermouth di Torino, a GI since 1991; Prosecco
// PDO) and the Ministry of Agriculture decree of 22 March 2017 setting its
// production rules; Campari Group's own history and the Camparino in Galleria
// history (1860, 1867, 1915); YesMilano (Comune di Milano) on Ramazzotti and
// "Milano da bere"; the Aperol brand history and recipe (1919, Padua; 3-2-1);
// AGI and Gambero Rosso on Crodino (1965); the Highway Code, art. 186 and
// 186-bis (drink-driving limits); D.L. 158/2012 (the Balduzzi decree) on sales
// to minors. Origin stories for the spritz, Negroni, Americano, Negroni
// sbagliato and the Venetian "ombra" are presented as traditions; brand
// histories are attributed to the brands. No bars are named or ranked and no
// prices are given.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-aperitivo";

export const italianAperitivo: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What is aperitivo in Italy?"),
    answer("**Aperitivo is the Italian custom of meeting for a drink and something small to eat in the early evening, before dinner.** The word can mean the drink itself — a spritz, a vermouth, a glass of wine or a non-alcoholic bitter — or the whole occasion: the hour when bars fill up, friends meet after work and plates of olives, crisps or something more substantial arrive with the glasses."),
    p("The word comes from the Latin *aperire*, \"to open\": an aperitif was originally something taken to open the appetite before a meal, and the classic Italian aperitivo drinks — vermouth and bitter liqueurs — grew out of that idea. Today aperitivo is as much social as it is about appetite. It's a way to mark the end of the working day, meet people without committing to a whole dinner, and spend an hour in a square or a bar before going home or on to eat."),
    p("Not every Italian has aperitivo every evening, and it looks different from city to city: a vermouth at a historic café counter in Turin, a spritz and a few cicchetti in a Venetian bacaro, a crowded canal-side bar in Milan, a glass of local wine with taralli in the south. What follows explains the drinks, the food, the regional versions and how to take part."),
    {
      type: "facts",
      title: "Italian aperitivo at a glance",
      rows: [
        { label: "When", value: "Early evening, before dinner — often roughly 6 to 8 pm, later in summer" },
        { label: "Classic drinks", value: "Spritz, vermouth, Campari-based drinks, the Americano and Negroni, wine and Prosecco" },
        { label: "Non-alcoholic", value: "Analcolici (non-alcoholic bitters), alcohol-free spritzes, juices, soft drinks" },
        { label: "Food", value: "From a bowl of crisps to a full buffet; varies widely by bar" },
        { label: "Apericena", value: "A heavier aperitivo that can replace dinner" },
        { label: "Venice", value: "Its own tradition of bacari, cicchetti and the ombra" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Aperitivo vs happy hour",
        "The drinks behind Italian aperitivo",
        "Apericena: when aperitivo becomes dinner",
        "Aperitivo across Italy",
        "How to order aperitivo",
        "Aperitivo, alcohol and responsible travel",
      ],
    },

    // ——— 2 ———
    h2("Aperitivo vs happy hour"),
    p("Bars in tourist areas sometimes advertise \"happy hour\", and the two can overlap. But they aren't the same idea."),
    table(
      ["Aperitivo", "Happy hour"],
      [
        ["An Italian food-and-drink custom with regional forms", "A promotional pricing idea found in many countries"],
        ["Happens before dinner", "Can happen at any time the bar chooses"],
        ["Usually includes something to eat with the drink", "Centred on cheaper drinks; food varies"],
        ["About meeting people and the time of day", "About the price"],
        ["Strongly tied to Italian cities and regions", "Not specifically Italian"],
      ],
    ),
    p("In practice, many Italian bars price their aperitivo drinks a little higher than at other times of day because snacks or a buffet come with them. That's the opposite of a discount: you're paying for the drink and the food together."),
    image("outdoor-bar-evening", "Crowds at outdoor tables beneath awnings advertising spritz and happy hour along the Navigli in Milan, with apartment buildings behind", true),

    // ——— 3 ———
    h2("When Italians have aperitivo"),
    p("There's no national timetable. Aperitivo generally happens in the early evening, between the end of the working day and dinner. In many northern cities that means roughly 6 to 8 pm; in summer, in the south and in holiday places, the whole evening shifts later, because dinner does too. Weekends are busier, and on warm evenings squares and canal-sides fill earlier."),
    p("Bars set their own hours, and some only put out food at certain times. If the food matters to you, it's worth arriving early in the aperitivo period rather than at the end, when plates may already have been cleared."),

    // ——— 3b ———
    h2("A short history of aperitivo"),
    p("Nobody invented aperitivo. It grew out of an old European habit of taking something bitter or aromatic before a meal to stimulate the appetite — the original sense of the word — and out of the café culture of nineteenth-century Italian cities."),
    ul(
      "**Herbal wines and bitters.** Wines and spirits flavoured with herbs, roots and barks were long taken for health and digestion. In the late eighteenth and nineteenth centuries, producers in Turin and Milan turned them into commercial products: vermouth in Turin, bitters and amari in Milan.",
      "**The café era.** In the nineteenth century, cafés in city centres — under Turin's arcades, in Milan's new Galleria — became the places where the urban middle class met before dinner, and the pre-dinner vermouth or bitter became a habit of city life.",
      "**Cocktails.** In the early twentieth century, bitter-based mixed drinks such as the Americano and the Negroni joined the straight vermouth and the bitter with soda.",
      "**The postwar city.** As Italy's cities grew and changed after the war, the evening drink with friends became a broader social custom, and in 1980s Milan *Milano da bere* turned it into an image of the city itself.",
      "**Buffets and apericena.** From the late 1990s, Milanese bars competed with ever larger buffets, giving rise to the apericena.",
      "**The spritz everywhere.** In the twenty-first century the orange spritz spread from the Veneto across Italy and abroad, and aperitivo became one of the best-known Italian habits in the world.",
    ),
    p("Many of the dates attached to individual drinks come from the companies that make them, and some popular origin stories are better documented than others. We've noted the difference below."),

    // ——— 4 ———
    h2("The drinks behind Italian aperitivo"),
    p("Italian aperitivo drinks fall into a few families: aromatised wines such as vermouth, bitter liqueurs (*bitter*), the cocktails built from them, and wine. Some are historic, some modern favourites, and some strongly regional. Many are made by well-known Italian companies; their histories below are told as the companies tell them, which isn't always the same as independent evidence."),
    h3("Vermouth and Turin"),
    p("Vermouth is wine flavoured with herbs and spices — above all wormwood, *Artemisia* — sweetened and strengthened with added alcohol. Turin is its Italian home: the city's tradition credits the distiller Antonio Benedetto Carpano with launching commercial vermouth there in the late eighteenth century, and by the nineteenth century several Turin producers were making it. **Vermouth di Torino** has been a protected geographical indication in EU law since 1991, and in 2017 a ministerial decree set its production rules: an aromatised wine made in Piedmont, flavoured mainly with Artemisia."),
    p("A vermouth on its own, on ice with a slice of citrus, is one of the oldest Italian aperitivi, and it's the base of several classic cocktails. See [Turin for first-time visitors](/cities/turin-first-visit) for the city's cafés."),
    image("bitter-drink-lemon", "A red aperitivo drink on ice with a slice of lemon in a tumbler, seen from above"),
    h3("Campari and Milan's bitters"),
    p("Milan's contribution is the bitter. Campari dates its red bitter to 1860, when Gaspare Campari was working in Novara; in 1867 he opened the Caffè Campari in Milan's newly built Galleria Vittorio Emanuele II, and in 1915 his son Davide opened a second bar next door, the Camparino, with soda water piped from the cellars for Campari and soda. Milan has other historic bitter and amaro makers too — Milan's tourist board traces Ramazzotti to 1815 — and the city's own advertising slogan *Milano da bere* (\"Milan to drink\"), coined for an amaro in the 1980s, came to stand for the whole era."),
    image("milan-bar-bottles", "Rows of red bitter bottles on the shelves of a bar back in Milan, beneath a clock and a Campari sign"),
    h3("The spritz"),
    p("The spritz is the most familiar aperitivo drink today: sparkling wine, a bitter and a splash of soda, served over ice. Its roots are in the north-east. A commonly told story links the name to the nineteenth century, when the Veneto was under Habsburg rule and Austrian soldiers supposedly diluted local wine with a \"spritz\" of water; it's a plausible explanation of the word, but not a documented origin."),
    p("**Aperol**, a lighter, sweeter bitter, was launched by the Barbieri brothers at the Padua trade fair in 1919, according to the brand. The brand's own recipe for an Aperol Spritz is three parts Prosecco, two parts Aperol and one part soda; bartenders adjust it, and in Venice and the Veneto you'll also be offered spritzes made with Campari or other local bitters. Asking for *uno spritz* in the Veneto may get you the house version, so say which bitter you want if it matters to you."),
    image("veneto-spritz-table", "An orange spritz with a straw and a slice of orange on a bar table in the Veneto, beside a dark drink with ice"),
    h3("Americano and Negroni"),
    p("The **Americano** — Campari, sweet vermouth and soda — is often explained as a descendant of a simpler mix called the *Milano-Torino*, named for Campari's Milan and vermouth's Turin; how it came to be called \"Americano\" is told in several ways, and even Campari's own history dates it inconsistently."),
    p("The **Negroni** — equal parts gin, Campari and sweet vermouth — has the most famous origin story: in Florence, around 1919 or 1920, Count Camillo Negroni is said to have asked for his Americano to be strengthened with gin instead of soda. It's the story Florence and Campari tell, but drinks historians have pointed out that the early documentation is thin, so treat it as tradition rather than settled fact."),
    p("Milan has its own variation: the **Negroni sbagliato** (\"mistaken Negroni\"), made with sparkling wine instead of gin, which Milan's Bar Basso says was born there by accident — in 1967, 1969 or 1972, depending on who tells the story."),
    image("negroni-being-mixed", "A bartender's hand pouring into a mixing glass beside bottles of Campari and sweet vermouth, with glasses of ice and orange slices"),
    h3("Wine, Prosecco and beer"),
    p("Plenty of Italians simply have a glass of wine. In the Veneto that may be Prosecco (a protected designation of origin) or a still white; in Lombardy, Franciacorta sparkling wine; elsewhere, whatever is local. Beer is common too, especially with heavier food. To order, ask for *un calice* (a glass) of *bianco*, *rosso* or *bollicine* (sparkling); many bars have a house wine and a short list by the glass, and it's fine to ask what's local. For the wine regions, see [regional wines of Italy](/food/italian-regional-wines)."),
    h3("Non-alcoholic aperitivo"),
    p("Aperitivo is a social ritual, not a drinking requirement. Ask for an *analcolico* and you'll usually be offered a non-alcoholic bitter in a small bottle — Italy has had them for decades; Crodino, for example, was launched in Piedmont in 1965 — or a fruit juice, a soft drink or sparkling water. Many bars now make alcohol-free spritzes and other zero-alcohol versions of classic drinks. What's on offer varies from bar to bar, so just ask: *Cosa avete di analcolico?*"),

    // ——— 5 ———
    h2("What food is served with aperitivo?"),
    p("The food is part of the point, but how much you get varies enormously — from a small bowl of crisps to a buffet that could be dinner. You might see:"),
    ul(
      "**Simple snacks** — olives, crisps, salted nuts, small crackers or taralli.",
      "**Bread-based bites** — pieces of focaccia or pizza, small sandwiches (*tramezzini*), crostini.",
      "**Cured meats and cheese** — especially in central and northern Italy, often on a shared board.",
      "**Regional snacks** — fried bites, small portions of pasta or rice salad, vegetables in oil.",
      "**A buffet** — in some bars, a self-service spread of hot and cold dishes included with the drink.",
    ),
    image("tuscany-aperitivo-platter", "A tray of cured meats, cheese, grilled aubergine and bread with a glass of beer on a café table in Tuscany"),
    p("Some bars bring food to every table automatically; others put out a buffet; some charge for a board of cured meats separately. If you're not sure, ask whether food comes with the drink (*Il cibo è incluso?*) before you order."),

    // ——— 6 ———
    h2("Apericena: when aperitivo becomes dinner"),
    p("*Apericena* blends *aperitivo* and *cena*, dinner. The Treccani dictionary records it as a newer word for an aperitivo served with a large spread of savoury and sweet dishes, eaten instead of dinner. It's usually traced to Milan around the turn of the millennium, when bars began competing with ever more generous buffets for the price of a drink."),
    p("An apericena can be good value and fun, and it's a popular choice for students and young people. But it isn't the same as traditional aperitivo, nor a substitute for a regional dinner. If you want to taste a city's cooking, use aperitivo as the prelude, not the meal."),
    table(
      ["Experience", "What it means", "Typical setting", "Food"],
      [
        ["Aperitivo", "A pre-dinner drink and the social occasion around it", "Bars, cafés, wine bars, some restaurants", "From small snacks to more substantial plates"],
        ["Apericena", "A heavier aperitivo that replaces dinner", "Bars and restaurants, often with a buffet", "A full spread of savoury (and sometimes sweet) dishes"],
        ["Cicchetti", "Venice's small bar snacks", "Bacari, Venice's wine bars", "Small individual bites, usually paid for one by one"],
      ],
      "Everyday terms, not legal categories: the line between them varies from bar to bar.",
    ),

    // ——— 7 ———
    h2("Aperitivo across Italy"),
    h3("Milan"),
    p("Milan is where aperitivo became a large-scale urban ritual. In the evening, bars in Brera, along the Navigli canals, in Porta Venezia and Isola fill with people after work, and many offer generous food with drinks. This is the city of Campari, the Camparino and the Negroni sbagliato, and of the buffet aperitivo that gave rise to apericena. See [Milan beyond the Duomo](/cities/milan-beyond-the-duomo)."),
    h3("Turin"),
    p("Turin has the strongest historical claim to the aperitivo through vermouth, and its historic cafés under the arcades are part of the experience. A vermouth or an Americano at a café counter is the classic; many bars also serve larger spreads. See [Turin for first-time visitors](/cities/turin-first-visit)."),
    h3("Venice: bacari and cicchetti"),
    p("Venice does things its own way. A **bacaro** is a small, traditional wine bar; **cicchetti** are the bar snacks it serves — crostini topped with *baccalà mantecato* (whipped salt cod), meatballs, sardines in *saor* (sweet-and-sour onions), fried seafood, slices of salami. They're bought individually and usually eaten standing at the counter or outside, with an *ombra*, a small glass of wine — the word is popularly said to come from the shade (*ombra*) of St Mark's bell tower, where wine sellers once kept their wine cool."),
    p("A *giro di ombre* means drifting from one bacaro to the next, a glass and a bite at each. Cicchetti are often compared to tapas, and the comparison is only rough: they're Venetian in ingredients and habits, and a bacaro is a local wine bar rather than a restaurant. It overlaps with aperitivo — a spritz and a cicchetto before dinner is very Venetian — but cicchetti are eaten at other times of day too. See [Venice for first-timers](/cities/venice-quieter-neighbourhoods)."),
    image("crostini-cicchetti", "Hands topping small crostini with prawns and other toppings at a counter, in the style of Venetian cicchetti"),
    h3("Rome"),
    p("Rome has no single aperitivo format. You'll find wine bars with boards of cheese and cured meats, cocktail bars, neighbourhood bars with a few snacks, and squares in districts such as Trastevere and Monti that fill in the early evening. Dinner in Rome tends to be later than in the north, so aperitivo often stretches later too. See [Rome in three days](/guides/rome-in-three-days) and, for what comes after, [Roman pasta](/food/roman-pasta-classics)."),
    image("rome-trattoria-bar-shelf", "Bottles of Italian wine, bitters and spirits, including an aperitivo bitter, lined up on a wooden shelf in a trattoria in Rome"),
    h3("Bologna and other cities"),
    p("In Bologna, aperitivo often means a glass of wine with mortadella, cheese and other cured meats in the osterie and bars around the Quadrilatero, Via del Pratello or the university quarter; see [Bologna in two days](/cities/bologna-in-two-days). In Florence, the Negroni's home city, wine bars and squares such as Santo Spirito are popular in the evening; see [Florence for first-timers](/cities/florence-for-first-timers). Smaller towns have their own rhythms, often centred on the main square."),
    h3("Southern Italy"),
    p("Aperitivo is part of life in the south too, though it's less formalised than in the north and often later in the evening. Drinks lean towards local wine, beer and spritzes, and food towards regional snacks: taralli in Campania and Puglia, fried street food in Naples or Palermo, local cheeses and vegetables. As everywhere, the best guide is what people around you are doing."),

    // ——— 8 ———
    h2("Aperitivo as part of food culture"),
    p("It's easy to see aperitivo as just drinking, but its place in Italian life is broader. It's a bridge between work and evening: an hour to sit down, talk and eat a little before going home or out to dinner. Because the food comes in small portions and the drinks are usually light, it suits meeting friends, colleagues or a first date without the commitment of a meal."),
    p("It also shows regional food culture in miniature: Piedmontese vermouth, Venetian cicchetti, Bolognese mortadella, southern taralli. And it's a natural companion to the other daily rituals of the bar — the morning coffee at the same counter ([Italian coffee](/food/italian-coffee-culture)) — and to the evening *passeggiata*, which may end with a gelato ([Italian gelato](/food/italian-gelato))."),

    // ——— 9 ———
    h2("How to order aperitivo"),
    p("Every bar has its own system, but these are common patterns."),
    ul(
      "**Counter or table.** At the counter you order and often pay straight away; at a table you're usually served and pay at the end. Table service can cost more.",
      "**Sitting down.** In most bars you can sit at any free table, but in busy or smarter places it's polite to ask first.",
      "**Ask what's included.** Food may arrive automatically, be on a buffet, or cost extra. Ask before you order.",
      "**Choose your drink.** A spritz, a vermouth, a glass of wine, an analcolico — or ask what the house recommends.",
      "**The buffet.** If there is one, you'll usually be given a plate with your drink; one or two trips is normal.",
      "**Paying.** Ask for the bill (*il conto*) when you're ready; many bars accept cards, but small amounts are often paid in cash.",
    ),
    table(
      ["Italian", "English"],
      [
        ["Vorrei uno spritz, per favore.", "I'd like a spritz, please."],
        ["Un Negroni, per favore.", "A Negroni, please."],
        ["Uno spritz con il Campari / con l'Aperol.", "A spritz with Campari / with Aperol."],
        ["Posso avere un analcolico?", "Could I have a non-alcoholic aperitivo?"],
        ["Il cibo è incluso?", "Is the food included?"],
        ["Cosa è incluso nell'aperitivo?", "What's included with the aperitivo?"],
        ["Possiamo sederci qui?", "Can we sit here?"],
        ["Il conto, per favore.", "The bill, please."],
      ],
    ),
    tip("We don't list prices: they vary with the city, the neighbourhood, the bar, the drink and how much food comes with it, and a drink by a famous view can cost several times more than one a few streets away. Check the menu or ask before you order. For wider budgeting, see [how much a trip to Italy costs](/guides/italy-trip-cost).", "What it costs"),

    // ——— 9b ———
    h2("Choosing where to go"),
    p("There's no need for a ranking: the right place depends on what you want from the evening."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Classic", title: "A historic café or bar", text: "Counter service, vermouth and bitters, a few snacks. Best for a short, traditional aperitivo, especially in Turin and Milan." },
        { label: "Wine", title: "A wine bar (enoteca) or osteria", text: "A glass of local wine with cheese and cured meats. Good in Bologna, Florence, Rome and wine regions." },
        { label: "Venice", title: "A bacaro", text: "Standing at the counter with an ombra and a few cicchetti, then moving on to the next." },
        { label: "Big evening", title: "A bar with a buffet", text: "A drink with enough food to make an apericena. Common in Milan and university cities." },
        { label: "Drinks", title: "A cocktail bar", text: "Carefully made Negronis, spritzes and new creations; food is usually secondary." },
        { label: "Local", title: "A neighbourhood bar", text: "The same bar that serves breakfast coffee, with a few snacks in the evening and a local crowd." },
      ],
    },
    p("A few practical signs help. A menu with prices shown before you sit down avoids surprises. Tables on the most famous squares and waterfronts cost more for the view; a few streets away, prices and crowds are often lower. A bar full of people from the neighbourhood is a good sign, though a busy tourist bar isn't automatically a bad one. And if the food matters to you, look at what's on other people's tables before you order."),

    // ——— 10 ———
    h2("Aperitivo etiquette for travellers"),
    ul(
      "**Don't assume food is unlimited.** Snacks with your drink are a courtesy; a buffet usually means a plate or two, not dinner for the evening.",
      "**Ask what's included** rather than helping yourself.",
      "**Take modest portions** from shared plates and buffets, and use the serving utensils.",
      "**Don't occupy a table for hours** with one drink when the bar is full.",
      "**Tipping isn't expected.** Leaving small change or rounding up for good service is appreciated but optional.",
      "**Follow the bar's system** for ordering and paying.",
      "**Photograph considerately** — other people are there to relax.",
      "**Drink at your own pace.** Aperitivo is about conversation; drinking heavily is out of place.",
    ),

    // ——— 11 ———
    h2("Aperitivo, alcohol and responsible travel"),
    p("Alcohol is optional at aperitivo, and nobody will think it odd to order an analcolico or a soft drink."),
    ul(
      "**Driving.** Italy's general legal blood-alcohol limit for drivers is 0.5 grams per litre, and it's zero for drivers in their first three years after passing their test, drivers under 21 and professional drivers. The simplest rule is not to drive after drinking.",
      "**Getting back.** Public transport, taxis and walking are the easy alternatives in cities; see [getting between Italian cities](/guides/getting-between-italian-cities) for longer journeys and [driving in Italy](/guides/driving-in-italy) for the rules of the road.",
      "**Age.** Bars may not sell or serve alcohol to anyone under 18, and staff can ask for ID.",
      "**Pace yourself.** Spritzes are light, but Negroni-style drinks are strong.",
    ),
    note("This is general travel information, not medical or legal advice. Rules can change; check them if you plan to drive.", "Good to know"),

    // ——— 12 ———
    h2("Italian aperitivo vocabulary"),
    table(
      ["Italian", "Meaning"],
      [
        ["Aperitivo", "A pre-dinner drink, and the social occasion around it"],
        ["Apericena", "An aperitivo with enough food to replace dinner"],
        ["Spritz", "Sparkling wine, a bitter and soda; also a family of variations"],
        ["Vermouth / vermut", "Aromatised, fortified wine flavoured with wormwood and herbs"],
        ["Bitter", "A bitter-sweet aperitif liqueur"],
        ["Amaro", "A herbal bitter liqueur, more often drunk after dinner"],
        ["Analcolico", "Non-alcoholic; also a non-alcoholic bitter drink"],
        ["Stuzzichini", "Small snacks served with drinks"],
        ["Tramezzino", "A small, soft sandwich"],
        ["Cicchetti", "Venetian bar snacks, bought one by one"],
        ["Bacaro", "A traditional Venetian wine bar"],
        ["Ombra", "In Venice, a small glass of wine"],
        ["Alla spina", "On tap (beer)"],
        ["Il conto", "The bill"],
      ],
    ),
    p("Aperitivo is one of the easiest ways to feel part of an Italian evening: an hour at a table, a drink of the place, a few local bites, and the city going about its own business around you. Order something regional, ask what comes with it, take your time — and then go on to dinner. For the rest of your trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide) and [Italian food traditions](/food/italian-food-traditions)."),
  ],

  faqs: [
    { question: "What is aperitivo in Italy?", answer: "The custom of meeting for a drink and something small to eat in the early evening, before dinner. The word can mean the drink itself or the whole social occasion." },
    { question: "What time do Italians have aperitivo?", answer: "In the early evening, before dinner — often roughly 6 to 8 pm in northern cities, later in summer and in the south. There's no national timetable." },
    { question: "Is aperitivo the same as happy hour?", answer: "Not really. Happy hour is a discount on drinks; aperitivo is a pre-dinner custom in which drinks usually come with food, and aperitivo drinks are often priced a little higher for that reason." },
    { question: "Is food included with aperitivo?", answer: "Often, but not always. It may be a few snacks brought to your table, a buffet, or a board you pay for separately. Ask \"Il cibo è incluso?\" before ordering." },
    { question: "What drinks are traditional for aperitivo?", answer: "Vermouth, bitters such as Campari, the spritz, the Americano and the Negroni, plus wine and Prosecco. Which is most traditional depends on the city." },
    { question: "What is an Aperol Spritz?", answer: "A spritz made with Prosecco, the bitter Aperol and soda. The brand's own recipe is three parts Prosecco, two parts Aperol and one part soda; bartenders vary it." },
    { question: "What is the difference between a spritz and a Negroni?", answer: "A spritz is long, light and fizzy: sparkling wine, a bitter and soda. A Negroni is short and strong: equal parts gin, Campari and sweet vermouth." },
    { question: "What is apericena?", answer: "A heavier aperitivo with enough food to replace dinner, usually from a buffet. The word blends aperitivo and cena (dinner)." },
    { question: "What are cicchetti, and what is a bacaro?", answer: "Cicchetti are Venice's small bar snacks, bought one by one; a bacaro is a traditional Venetian wine bar where they're eaten, often standing, with a small glass of wine called an ombra." },
    { question: "Is aperitivo always alcoholic?", answer: "No. Non-alcoholic bitters, alcohol-free spritzes, juices and soft drinks are all normal. Ask for an analcolico." },
    { question: "How much does aperitivo cost in Italy?", answer: "It varies widely by city, neighbourhood, bar, drink and how much food is included, so we don't give a figure. Check the menu or ask before ordering." },
    { question: "Do you tip at aperitivo?", answer: "Tipping isn't expected in Italian bars. Leaving small change for good service is appreciated but optional." },
    { question: "Where was the Negroni invented?", answer: "Tradition says Florence, around 1919–1920, when Count Camillo Negroni asked for gin in his Americano. It's the accepted story, but early documentation is thin." },
    { question: "Which Italian cities are known for aperitivo?", answer: "Milan for its large-scale aperitivo and Campari; Turin for vermouth; Venice for spritz, bacari and cicchetti. But aperitivo is part of evening life across Italy." },
    { question: "What should tourists know about aperitivo etiquette?", answer: "Ask what's included, take modest portions from shared food, don't hold a table for hours with one drink when it's busy, and drink at your own pace." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Treccani — aperitivo", url: "https://www.treccani.it/vocabolario/aperitivo/", note: "definition and etymology; in Italian" },
    { label: "Treccani — apericena (neologismi)", url: "https://www.treccani.it/vocabolario/apericena_(Neologismi)/", note: "in Italian" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Vermouth di Torino (GI since 1991); Prosecco PDO" },
    { label: "Gazzetta Ufficiale — Decree of 22 March 2017, Vermouth di Torino production rules", url: "https://www.gazzettaufficiale.it/eli/id/2017/04/03/17A02417/sg", note: "in Italian" },
    { label: "Campari — Our history", url: "https://www.campari.com/our-history/", note: "brand history" },
    { label: "Camparino in Galleria — History", url: "https://www.camparino.com/history/", note: "1867 and 1915" },
    { label: "YesMilano — \"Milano da bere\": the swinging '80s", url: "https://www.yesmilano.it/en/see-and-do/itineraries/la-milano-da-bere-swinging-80s", note: "Milan's official tourism site" },
    { label: "Aperol — brand history and Aperol Spritz recipe", url: "https://www.aperol.com/", note: "brand information" },
    { label: "AGI — Il compleanno del Crodino e la storia dell'aperitivo \"biondo\" (29 July 2022)", url: "https://www.agi.it/cronaca/news/2022-07-29/food-compleanno-crodino-storia-aperitivo-17590182/", note: "launched 1965; in Italian" },
    { label: "Codice della Strada, art. 186 and 186-bis", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-04-30;285", note: "drink-driving limits; in Italian" },
    { label: "D.L. 13 settembre 2012, n. 158 (decreto Balduzzi)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-09-13;158", note: "no sale of alcohol to under-18s; in Italian" },
  ],
};
