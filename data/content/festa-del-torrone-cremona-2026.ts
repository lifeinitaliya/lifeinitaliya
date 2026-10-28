import type { ArticleContent, ContentBlock } from "@/lib/types";

// Body images reuse the christmas-markets-italy directory (already attributed
// there) so no new image downloads are required for this article.
const mkt = (file: string, alt: string, wide = false): ContentBlock => ({
  type: "image",
  src: `/images/events/christmas-markets-italy/${file}.webp`,
  alt,
  wide,
});

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

export const festaDelTorroneCremona2026: ArticleContent = {
  body: [
    answer("**Festa del Torrone 2026 runs from Saturday 7 to Sunday 22 November 2026** in Cremona, Lombardy. For over two weeks, the historic centre of this Po Valley city fills with confectionery stalls, torrone demonstrations, historical re-enactments and food producers from across Lombardy. Entry to the open-air festival areas is free. Full programme details are still being added to the official website; check [festadeltorrone.com](https://www.festadeltorrone.com/) before your visit."),

    {
      type: "facts",
      title: "Festa del Torrone 2026 at a glance",
      rows: [
        { label: "Dates", value: "Saturday 7 – Sunday 22 November 2026" },
        { label: "Location", value: "Cremona, Lombardy — historic centre, primarily Piazza del Comune and surrounding streets" },
        { label: "Main focus", value: "Torrone (Italian nougat), regional confectionery, Lombard food producers" },
        { label: "Admission", value: "Open-air festival areas are free; some indoor tastings or events may require tickets — check the official site" },
        { label: "Official website", value: "festadeltorrone.com" },
        { label: "Programme status", value: "Dates confirmed; detailed programme being published progressively — check the official site for updates" },
        { label: "Getting there", value: "Cremona is approximately 1 hour from Milan by regional train (Trenitalia, no high-speed service)" },
        { label: "Best for", value: "Food enthusiasts, visitors combining Cremona with Milan or the Po Valley, November travellers" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "What is Festa del Torrone?",
        "Dates and programme 2026",
        "What is torrone?",
        "What to eat at the festival",
        "Things to do in Cremona",
        "How to get to Cremona",
        "Where to stay",
        "Suggested itinerary",
        "Practical visitor tips",
      ],
    },

    mkt("market-stall-warm-lights", "A food market stall with warm amber lighting illuminating displays of confectionery and regional produce at dusk", true),

    h2("What is Festa del Torrone?"),
    p("Festa del Torrone is an annual food festival in Cremona centred on torrone — Italy's classic nougat confection — and the city's centuries-old association with it. The event takes over the medieval centre of Cremona for over two weeks each November, turning Piazza del Comune, the cathedral square and the surrounding streets into a concentrated display of Italian confectionery and regional food culture."),
    p("At its core, the festival is a food market and celebration of a local tradition. Visitors can walk between stalls selling dozens of varieties of torrone from Cremona and beyond, watch confectionery makers at work, sample regional cheeses, cured meats, wines and seasonal Lombard produce, and attend historical events that reflect Cremona's particular relationship with this confection. It draws visitors from across Lombardy and northern Italy as well as international food travellers making a dedicated trip."),
    p("Cremona in November is grey, often foggy, and genuinely cold — exactly the atmosphere that makes a market of nougat, mulled wine and roasting chestnuts feel appropriate. The festival is not a summer festival transported to autumn: the setting is genuinely suited to it."),

    h2("Dates and programme 2026"),
    note("Programme details for the 2026 edition are being added progressively to the official website at [festadeltorrone.com](https://www.festadeltorrone.com/). The information below reflects what has been published as of October 2026. Check the official site before your visit for the latest schedule."),

    table(
      ["Period", "Status", "Location", "Notes"],
      [
        ["7–22 November 2026", "Dates confirmed", "Cremona historic centre", "Festival open across multiple days; specific daily hours not yet published — check official site"],
        ["Torrone stalls", "Expected — programme being published", "Piazza del Comune and surrounding streets", "Core feature of the festival; confirmed for 2026"],
        ["Historical re-enactment events", "Expected — dates tbc", "Piazza del Comune", "Typically include a pageant referencing the 15th-century origin legend; exact dates not yet confirmed for 2026"],
        ["Confectionery demonstrations", "Expected — programme being published", "Various locations in the historic centre", "Producers demonstrate torrone-making; check official programme for scheduled times"],
        ["Regional produce market", "Expected — programme being published", "Historic centre", "Lombard food producers alongside the torrone stalls"],
      ],
      "All entries marked 'programme being published' are typical elements of the festival confirmed in prior years; their 2026 details had not been fully released as of October 2026. Verify at festadeltorrone.com."
    ),

    p("The festival typically has higher footfall at weekends, with 8, 9, 15, 16, 21 and 22 November 2026 likely to be the busiest days. Weekday visits — especially early in the festival — are often quieter and allow more time to speak with producers and explore the stalls at a relaxed pace."),
    tip("Check the official website and the Cremona tourism page a week before your visit. Event programmes are often updated in the final weeks before the opening, particularly for evening concerts, demonstrations, and any ticketed tasting events."),

    mkt("browsing-market-stall", "A visitor at a market stall examining jars of artisan food products under wooden market canopies"),

    h2("What is torrone?"),
    p("Torrone is a confection made from honey, sugar, egg white, and nuts — most commonly almonds, hazelnuts or pistachios. It is one of the oldest categories of Italian confectionery and appears in various forms across the country, as well as in Spain (turrón) and other countries with their own nougat traditions."),

    h3("Two main types"),
    ul(
      "**Torrone duro (hard torrone)**: dense, brittle and tooth-resistant. The nuts are set in a firm sugar-and-honey base. It is typically cut into rectangular bars or blocks. Duro varieties are made by cooking the sugar syrup to a higher temperature.",
      "**Torrone morbido (soft torrone)**: chewy and yielding, with a texture somewhere between a sticky sweet and a caramel. Soft varieties are often wrapped in thin wafer paper (*ostia*) and come in a wider range of flavours including chocolate, coffee and fruit.",
      "**Regional and artisan variations**: modern confectioners produce torrone in dozens of flavour combinations — with dark chocolate coatings, different nut combinations, fruit pastes and seasonal additions. These go beyond the traditional classification but are a significant part of what makes the Cremona market interesting for food enthusiasts."
    ),

    h3("Cremona and the torrone tradition"),
    p("Cremona makes a specific claim to this confection. A traditional story holds that the first torrone was prepared in Cremona in 1441 for the wedding of Francesco Sforza and Bianca Maria Visconti, shaped to represent the city's Torrazzo bell tower. This is a well-known local origin legend, and while it has been repeated for generations, food historians note that similar honey-and-nut confections appear in much earlier Italian sources. The 1441 story is better understood as a tradition that expresses Cremona's relationship with torrone rather than a documented first-ever recipe."),
    p("What is historically documented is that Cremona's confectionery industry built a genuine specialisation around torrone over several centuries, with family producers operating continuously through the 19th and 20th centuries. Today, \"Torrone di Cremona\" is a product with IGP (Protected Geographical Indication) status under EU law, which defines the recipe and production area."),

    h2("What to eat at the festival"),
    p("The stalls at Festa del Torrone range from the largest Cremonese confectionery producers — some of whom have been making torrone for generations — to smaller artisan makers from across Lombardy and northern Italy. The variety on offer across two weeks is considerably wider than what you would find in a single shop."),
    ul(
      "**Traditional torrone cremonese**: the hard and soft varieties made to the IGP specification, in both classic almond and hazelnut formats. Buying directly from the producer stalls is the best way to taste before you buy.",
      "**Mostarda di Cremona**: not a mustard sauce in the English sense, but a preserved fruit condiment made with whole or large pieces of candied fruit in a sweet syrup with mustard oil. It is traditionally served alongside bollito misto (boiled meats) and aged cheeses. It is one of Cremona's most distinctive products alongside torrone.",
      "**Seasonal Lombard produce**: cheeses — particularly [Grana Padano, Taleggio](/food/italian-regional-cheeses) and other Lombard varieties — cured meats, wines from the region, and other autumn-harvest products typically appear at the festival market.",
      "**Warm drinks and street food**: roasted chestnuts (*caldarroste*), mulled wine and hot drinks are typical at outdoor November markets in northern Italy. The historic centre has cafés and restaurants where more substantial meals are available."
    ),
    p("Prices for torrone vary considerably by producer and type. Hard torrone made to traditional recipes is generally less expensive per kilogram than artisan soft varieties with premium ingredients. Buying at the festival stalls — rather than at the airport or gift shops — typically gives access to the better-quality makers and more variety. Specific prices are set by individual producers and were not verified in advance of publication; compare before you buy."),
    tip("If you want to bring torrone home, the hard varieties (*torrone duro*) travel better than soft ones and do not require refrigeration. Many producers package it in gift boxes specifically designed for carrying."),
    p("For context on where torrone sits within Italy's wider confectionery tradition, see our guide to [traditional Italian desserts](/food/traditional-italian-desserts). For an overview of how food markets work across Italy, see [Italian food markets](/food/italian-food-markets)."),

    mkt("gluhwein-vin-brule-stall", "A market vendor behind wooden counter with bottles of wine and warming drinks, at an outdoor food market in northern Italy"),

    h2("Things to do in Cremona"),
    p("Cremona's historic centre is small enough to walk in its entirety and distinctive enough to merit half a day beyond the festival stalls. The city is best known for two things — torrone and violin-making — and its main monuments reflect the medieval prosperity that allowed both traditions to take root."),

    h3("Piazza del Comune and the Duomo"),
    p("The heart of the old city is Piazza del Comune, a large medieval square lined with significant buildings. The **Duomo di Cremona** (Cremona Cathedral) dates from 1107 and has a Romanesque façade decorated with statuary and reliefs. Its interior contains significant 16th-century frescoes. Alongside it stands the **Torrazzo**, one of the most distinctive landmarks in northern Italy: a medieval brick campanile standing approximately 112 metres tall, making it one of the tallest medieval towers in Europe. Visitors can climb the Torrazzo for views across the Po Valley flatlands — on a clear day, the Alps are visible to the north. The *Baptistery* on the same square completes the medieval ensemble."),
    p("The festival takes place in and around this piazza, so you will pass these buildings naturally as you move through the stalls. Taking a few minutes to step inside the cathedral is worth doing — entry is typically free, though check current conditions."),

    h3("Violin museums and the lutherie tradition"),
    p("Cremona has been a centre of violin and string instrument making since the 16th century. The workshops of Antonio Stradivari, Nicolò Amati, and the Guarneri family established the city's global reputation in lutherie, and that tradition continues today: over 100 active violin workshops operate in the city. Two museums are directly relevant to this history:"),
    ul(
      "**Museo del Violino**: Cremona's dedicated violin museum, opened in 2013 in the Palazzo dell'Arte, holds the largest public collection of historical Cremonese instruments, including instruments made by Stradivari and Amati. Entry requires a ticket. Check current opening hours and prices at [museodelviolino.org](https://www.museodelviolino.org/) before visiting.",
      "**Palazzo Comunale (Town Hall)**: the historic town hall on Piazza del Comune houses a small collection of Stradivari instruments, including a 1715 violin and viola. Opening hours and access conditions can vary; check with the municipality or at the tourist information point."
    ),
    p("During the festival period, some lutherie workshops in the city open their doors to visitors or offer demonstrations. Check the tourist office or the festival programme for any scheduled open-workshop events."),
    tip("The Museo del Violino is closed on Mondays. If you plan a weekday visit that includes the museum, verify the current closing day and hours before travelling."),

    h3("The historic streets"),
    p("Beyond the main piazza, Cremona's centre has a number of well-preserved medieval streets, the **Palazzo Raimondi** (now the seat of international lutherie training), the **Church of San Pietro al Po** with notable 16th-century decoration, and the market area near Piazza Stradivari. The city is small — the walk from the train station to the main piazza takes about 15 minutes on foot. There are no major hills or stairs, making it straightforward for most visitors to navigate on foot."),

    h2("How to get to Cremona"),

    h3("By train"),
    p("Cremona is served by regional rail from Milan and from Brescia. It is not on a high-speed rail line; all services are standard regional trains."),
    ul(
      "**From Milan Centrale**: Trenitalia regional service, approximately 55–65 minutes direct. Trains run regularly throughout the day. This is the most common route for international visitors arriving through Milan.",
      "**From Brescia**: approximately 45 minutes by regional train. Useful if you are already in Brescia or travelling from the Veneto via Verona.",
      "**From Mantova**: approximately 1 hour by regional train, with some services requiring a change.",
      "**From Parma or Bologna**: these routes require changes and take significantly longer. If travelling from the south, checking direct vs. change options on the Trenitalia journey planner is essential."
    ),
    p("Cremona railway station is approximately 15 minutes on foot from Piazza del Comune. The walk is flat and straightforward. Taxis are available at the station."),
    p("Book return train tickets in advance, particularly for weekend days during the festival when trains between Milan and Cremona can fill. Check timetables at [trenitalia.com](https://www.trenitalia.com/)."),
    tip("On weekends during the festival, the last train back to Milan in the evening can sell out. If you plan to stay for dinner, check the last train time before committing to a restaurant booking that might run late."),
    p("For a full guide to train travel in Italy — booking, pass options and what to expect on board — see [Italy by train](/guides/italy-by-train). For a comparison of all transport options between Italian cities, see [getting between Italian cities](/guides/getting-between-italian-cities)."),

    h3("By car"),
    p("Cremona is accessible from the A21 Brescia–Piacenza motorway (exit Cremona Ovest or Cremona Est). The historic centre has a limited traffic zone (ZTL); parking is available in the surrounding streets and in official parking areas near the centre. During festival weekends, parking fills early — arriving before 10:00 or using a park-and-walk approach from the edges of the centre is advisable. Public transport from Milan (train) is generally more practical for day visitors."),

    h2("Where to stay"),
    p("Cremona has a modest supply of hotels and bed and breakfasts within walking distance of the centre, with more options in the surrounding area. During the festival's weekend days (particularly the final weekend of 21–22 November), availability in the city itself can be limited and booking in advance is recommended."),

    h3("Staying in Cremona"),
    p("Staying in Cremona itself allows you to experience the city in the evenings after the day visitors leave — when the piazza quiets and the atmosphere is more local. It also means you can visit the festival on a weekday morning, when the stalls are less crowded and producers have more time to talk. If you plan to visit the Museo del Violino and explore the lutherie district, an overnight stay allows a more relaxed schedule."),

    h3("Day trip from Milan"),
    p("For visitors based in Milan, a day trip is practical: the approximately 1-hour train journey each way gives a full festival day with time for the cathedral and Torrazzo in the morning and the stalls in the afternoon. This approach works best on a weekday or early Saturday, when the stalls are less crowded and trains are easier to board. If you have time to spend in Milan itself, see our guide to [Milan beyond the Duomo](/cities/milan-beyond-the-duomo)."),

    note("Cremona's hotel inventory is limited compared with larger Italian cities. If you plan to stay overnight during the festival period, check availability and book early."),

    h2("Suggested itinerary"),

    h3("One day in Cremona for Festa del Torrone"),
    p("Arrive by 10:00 (which means taking an early morning train from Milan or having stayed overnight). Start at **Piazza del Comune**: look up at the Torrazzo, walk around the Duomo façade, and then enter the cathedral for a few minutes before the stalls get busy. From 10:30–12:30, walk the festival stalls in the square and surrounding streets. This is the best time to taste and compare: producers have freshly restocked and staff are available to answer questions about their products. Buy any torrone you want to take home now rather than at the end of the day, when you will be carrying it longer."),
    p("From 12:30–13:30, step away from the festival for lunch in a restaurant or osteria in the centre. Cremona has some restaurants specialising in local cuisine, including bollito misto with mostarda — the classic local pairing. From 13:30–15:00, visit the **Museo del Violino** if it is open (closed Mondays; verify hours before travelling). From 15:00–17:00, return to the festival for a second look at any stalls you wanted to revisit, and explore the streets around Via Solferino and Via Palestro. Leave in time to reach the station for a return train by 17:30 or later depending on your plans."),
    note("This itinerary is an editorial suggestion based on a typical festival visit. Festival hours, museum opening times, and event schedules change — always confirm the current programme and hours before your visit."),

    h2("Practical visitor tips"),
    ul(
      "**Dress for November in the Po Valley.** Cremona in November is typically cold (daytime highs around 8–12°C), damp, and frequently foggy. Layering is essential: mornings and evenings are significantly colder than midday. A waterproof outer layer is advisable even on dry-looking days.",
      "**Comfortable shoes.** The festival is largely outdoors on cobblestone streets and the cathedral square. If standing and walking for several hours, footwear matters.",
      "**Bring cash.** Many smaller producers and artisan stalls at Italian food festivals operate primarily in cash. While larger stands usually accept card payment, having euros in small denominations makes buying easier.",
      "**Arrive earlier in the festival if possible.** The first and second weekends (7–9 November and 14–16 November) often see shorter queues and more stall variety than the closing weekend. If your schedule allows, a mid-week visit in the first two weeks is the quietest option.",
      "**Check the official programme before you travel.** Evening events, demonstrations, and any concerts or ticketed tastings are listed on [festadeltorrone.com](https://www.festadeltorrone.com/) and may change up to the day of the event.",
      "**Plan around the fog.** The Po Valley is famous for its autumn and winter fog (*nebbia*), which can be dense in November. This rarely disrupts the festival itself, but it can affect train visibility and reduce long-distance views from the Torrazzo. Check the local weather forecast.",
      "**Factor in the Museo del Violino.** It closes on Mondays and may have restricted hours during the festival period. Check [museodelviolino.org](https://www.museodelviolino.org/) for current hours before building it into your plan."
    ),

    note("**Before you travel:** confirm the current programme and opening times at [festadeltorrone.com](https://www.festadeltorrone.com/) — details are added progressively in the weeks before the festival opens. Book train tickets at [trenitalia.com](https://www.trenitalia.com/), especially for festival weekends. For a broader November trip to Italy, see our [Italy in November](/travel/italy-in-november) guide; for general trip planning, the [complete Italy travel guide](/guides/complete-italy-travel-guide) is a useful starting point.", "Before you travel"),
  ],

  faqs: [
    {
      question: "When is Festa del Torrone 2026?",
      answer: "Festa del Torrone 2026 runs from Saturday 7 to Sunday 22 November 2026 in Cremona, Lombardy. The festival takes place across multiple days and weekends in the historic centre. For the full programme and daily schedule, check the official website at festadeltorrone.com.",
    },
    {
      question: "Where does Festa del Torrone take place?",
      answer: "The main festival area is Piazza del Comune — Cremona's medieval cathedral square — and the surrounding historic streets. The Duomo, the Torrazzo bell tower, and the festival stalls all occupy the same central area, so everything is within easy walking distance.",
    },
    {
      question: "Is Festa del Torrone free to attend?",
      answer: "The open-air festival areas, the stalls, and the street events are free to enter. Some indoor tastings, special demonstrations, or evening events may require tickets — check the official programme at festadeltorrone.com for any ticketed elements.",
    },
    {
      question: "What can I eat at Festa del Torrone?",
      answer: "The central focus is torrone itself — both hard (duro) and soft (morbido) varieties, from traditional almond and hazelnut formats to artisan flavours. You will also find Cremona's other signature product, mostarda di Cremona (fruit preserved in mustard syrup), as well as regional cheeses, cured meats, wines, roasted chestnuts, and other seasonal Lombard produce.",
    },
    {
      question: "What is the difference between hard and soft torrone?",
      answer: "Hard torrone (torrone duro) is brittle and dense, made by cooking the sugar-and-honey mixture to a higher temperature. Soft torrone (torrone morbido) is chewy and yielding, often wrapped in wafer paper, and comes in a wider range of flavours. Both are sold at the festival, and tasting before buying is the best way to find your preference.",
    },
    {
      question: "How do I get to Cremona?",
      answer: "From Milan Centrale, Trenitalia regional trains reach Cremona in approximately 55–65 minutes. This is the most convenient route for visitors arriving through Milan's airports. Cremona is not on a high-speed line. Check timetables and book return tickets at trenitalia.com, especially for festival weekends.",
    },
    {
      question: "Can I visit Cremona as a day trip from Milan?",
      answer: "Yes. The approximately 1-hour train journey makes Cremona workable as a day trip from Milan. A full day (arriving by 10:00, leaving by 17:30–18:00) allows time for the festival stalls, the cathedral, and either the Torrazzo or the Museo del Violino. Earlier trains and weekday visits avoid the busiest periods.",
    },
    {
      question: "Is the Museo del Violino open during the festival?",
      answer: "The Museo del Violino is generally open during November, but it is closed on Mondays and may have specific festival-period hours. Check current hours and ticket prices at museodelviolino.org before including it in your visit plan.",
    },
    {
      question: "What is the weather like in Cremona in November?",
      answer: "November in the Po Valley is cold, often damp, and frequently foggy. Average daytime highs are typically 8–12°C, dropping significantly in the evening. The fog (nebbia) is a characteristic feature of the Lombard plain in autumn. Dress in warm layers and bring a waterproof; the festival itself continues in light rain.",
    },
    {
      question: "Where can I find the latest programme for Festa del Torrone 2026?",
      answer: "The official programme is published progressively at festadeltorrone.com. As of October 2026, dates were confirmed but detailed daily schedules were still being added. Check the official website within a week of your planned visit for the most current information.",
    },
  ],

  sources: [
    {
      label: "Festa del Torrone — official festival website",
      url: "https://www.festadeltorrone.com/",
      note: "Official source for dates, programme, and updates. Festival confirmed for 7–22 November 2026. Programme details being published progressively; verified October 2026.",
    },
    {
      label: "Museo del Violino, Cremona",
      url: "https://www.museodelviolino.org/",
      note: "Official website of Cremona's violin museum — opening hours, tickets and exhibition information. Check before visiting.",
    },
    {
      label: "Trenitalia — train timetables and tickets",
      url: "https://www.trenitalia.com/",
      note: "Official booking for Milan–Cremona and other connections to Cremona.",
    },
    {
      label: "Torrone di Cremona IGP — DOOR database (European Commission)",
      url: "https://ec.europa.eu/agriculture/quality/door/",
      note: "The EU register of protected geographical indications and designations of origin, confirming Torrone di Cremona's IGP status.",
    },
    {
      label: "Comune di Cremona — tourism information",
      url: "https://www.comune.cremona.it/",
      note: "Official municipality website for visitor information, ZTL restrictions and local notices.",
    },
    {
      label: "Cremona tourism — Visitcremona",
      url: "https://www.visitcremona.it/en",
      note: "Official tourism portal for Cremona — city attractions, practical visitor information and festival listings.",
    },
  ],

  sourcesTitle: "Sources and fact-checking",
};
