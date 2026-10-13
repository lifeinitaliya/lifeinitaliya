import type { ArticleContent, ContentBlock } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/events/christmas-markets-italy";

export const christmasMarketsItaly: ArticleContent = {
  body: [
    h2("Christmas markets in Italy: where to go in 2026"),
    answer("**Italy's Christmas market season runs from mid-November through Epiphany on 6 January.** The South Tyrol markets in Bolzano, Merano, Bressanone and Trento open earliest and run the longest. Milan's Piazza Duomo market and Rome's Piazza Navona fair are confirmed for 1 December 2026 to 6 January 2027. As of October 2026, Verona and Florence had not published official 2026 dates — these should be treated as estimated until the organisers confirm."),
    {
      type: "facts",
      title: "Italian Christmas markets at a glance",
      rows: [
        { label: "Earliest opening", value: "Trento (20 Nov 2026) and Aosta (21 Nov 2026)" },
        { label: "Latest closing", value: "6 January 2027 (Epiphany) for all Alpine markets, Milan and Rome" },
        { label: "Alpine markets", value: "Bolzano, Merano, Bressanone, Trento, Aosta — Central European in character, running to 6 January" },
        { label: "City markets", value: "Milan, Verona, Florence, Rome — Italian in atmosphere, city-centre settings" },
        { label: "Best time to visit", value: "Weekdays in the first two weeks of December for manageable crowds; evenings for the best light and atmosphere" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Two traditions, nine markets",
        "2026 dates at a glance",
        "The Alpine markets",
        "Markets in Italy's cities",
        "What to eat and drink",
        "What to buy",
        "Planning your visit",
      ],
    },

    h2("Two traditions, nine markets"),
    p("Italian Christmas markets split into two distinct traditions. In the Alpine north — South Tyrol (Alto Adige), Trentino, and the Aosta Valley — the markets draw on a centuries-old Central European custom. South Tyrol was part of the Austro-Hungarian Empire until 1919, and a large share of its population still speaks German as a first language. The Bolzano *Christkindlmarkt*, which dates to 1991 in its current form but draws on a tradition going back to the 14th century, is widely regarded as the original Italian Christmas market; it influenced the format of most that followed."),
    p("In the cities — Milan, Verona, Florence, Rome — the markets are a more recent addition to the festive calendar. They are Italian in atmosphere rather than Tyrolean: noisier, more varied in merchandise, and more focused on food and spectacle than on craftsmanship. Both types of market are worth visiting; the choice depends on what you are after."),
    note("The markets covered here are established, recurring events. Not every Italian city has a Christmas market, and some that run one year do not repeat it the next. For anything beyond the nine covered below, check directly with the local tourism office before planning travel around it."),
    image("alpine-village-snowy-street", "A snow-covered street in an Alpine mountain village lined with traditional stone and timber buildings", true),

    h2("2026 dates at a glance"),
    note("**About these dates.** *Confirmed* means the event organiser or a municipal authority published the specific 2026 dates. *Not yet confirmed* means they had not done so as of October 2026 — the dates shown are estimates based on previous editions and should be treated as provisional. Always check with the official organiser before booking accommodation around a specific market."),
    table(
      ["Market", "City", "2026 dates", "Status"],
      [
        ["Mercatino di Natale", "Trento", "20 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Marché Vert Noël", "Aosta", "21 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Meraner Weihnacht", "Merano", "26 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Christkindlmarkt", "Bolzano", "27 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Mercatino di Natale", "Bressanone", "27 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Mercatino in Duomo", "Milan", "1 Dec 2026 – 6 Jan 2027", "Confirmed"],
        ["Natale a Verona", "Verona", "Est. late Nov – late Dec 2026", "Not yet confirmed"],
        ["Weihnachtsmarkt", "Florence", "Est. mid-Nov – mid-Dec 2026", "Not yet confirmed"],
        ["Befana e Natale in Piazza Navona", "Rome", "1 Dec 2026 – 6 Jan 2027", "Confirmed"],
      ],
      "2026 Italian Christmas market dates. Estimated dates are based on previous years; verify with the official organiser before booking."
    ),

    h2("The Alpine markets"),
    p("The South Tyrol and Trentino markets are the most atmospheric in Italy. They are set against a backdrop of mountains, medieval squares, and Baroque cathedrals, and they run the longest — most to Epiphany on 6 January. They are also the most crowded on weekends in December; arriving mid-week or in the first two weeks after opening makes a significant difference."),
    image("market-stall-warm-lights", "A cozy Christmas market stall with warm amber lights, wooden structure, and festive decorations", true),

    h3("Trento — Mercatino di Natale"),
    p("Trento's market is confirmed for **20 November 2026 to 6 January 2027**. The stalls fill Piazza Fiera, Piazza Cesare Battisti, and the surrounding streets; from Piazza Duomo you look across a sea of fairy-lit wooden chalets to the 16th-century Fontana del Nettuno and the Duomo beyond. The market has a distinctly Italian-Alpine character — the language here is Italian (not German), but the *vin brulé*, the wooden toys, and the handmade ornaments are typical of the whole region. The Visit Trento website and the APT Trento tourist authority confirmed the 20 November opening."),
    tip("Trento is served by frequent Trenitalia regional trains from Verona (around 60–70 minutes) and Bolzano (around 30 minutes), making it easy to combine with either city in a single day. No advance booking is needed for regional trains on this route."),

    h3("Aosta — Marché Vert Noël"),
    p("The Valle d'Aosta's *Marché Vert Noël* (Green Christmas Market) runs **21 November 2026 to 6 January 2027**, with an opening ceremony on 20 November at 18:00. The market fills the streets of Aosta's Roman historic centre — including the area around the Arco d'Augusto, a triumphal arch from the 1st century BC — with over 100 chalets. The Valle d'Aosta is officially bilingual (Italian and French), and the market reflects this: signs appear in both languages, and the food includes regional specialities such as fontina cheese, *seuppa à la valpellinentze*, and Aosta Valley wines."),
    p("Aosta sits at 583 metres in the foothills of the Alps, surrounded by the highest peaks in Europe — Mont Blanc, the Matterhorn, the Gran Paradiso. It sees fewer tourists than the South Tyrol markets, which makes it one of the more relaxed options if you want to browse without jostling for space. The nearest major hub is Turin, roughly 1 hour 50 minutes by train."),

    h3("Merano — Meraner Weihnacht"),
    p("Merano's *Meraner Weihnacht* (Merano Christmas) opens **26 November 2026 and runs to 6 January 2027**, with a formal opening ceremony at 17:00 on 26 November. The market fills the elegant *Kurpromenade* — the riverside promenade built in the early 20th century around this spa town's thermal heyday — with around 100 artisan stalls. The Kurhaus colonnade, a grand Jugendstil building that serves as a concert hall, provides an unusually elegant backdrop. Several of the larger Merano hotels offer spa packages timed around the market season. The official Merano tourism authority (merano-suedtirol.it) confirmed the 26 November 2026 opening."),
    tip("Merano is a 45-minute drive south of the Brenner motorway, or around 30 minutes by regional train from Bolzano. The train ride passes through the Adige valley, which is worth the trip in its own right. A day visiting both markets is very practical."),

    h3("Bolzano — Christkindlmarkt"),
    p("The oldest and best-known Christmas market in Italy. The Bolzano *Christkindlmarkt* celebrated its 35th edition in 2025; the 2026 edition opens **27 November 2026** (with a tree-lighting inauguration on 26 November at 17:00) and runs until **6 January 2027**. The market is closed on 25 December. Over 80 stalls spread across Piazza Walther and the lanes around the Duomo."),
    p("What distinguishes Bolzano's market from most others is an explicit quality standard: stalls selling mass-produced goods are excluded, and the quality of the wooden decorations, knitwear, local food products, and handmade ornaments is consistently high. The market also runs live music, craft workshops, and a children's programme throughout the season. Bolzano is served by high-frequency regional trains from Verona (around 1 hour 30 minutes) and Trento (around 30 minutes). For the wider South Tyrol region, see the [Dolomites guide](/guides/visiting-the-dolomites)."),

    h3("Bressanone — Mercatino di Natale"),
    p("The smallest of the major South Tyrol markets, and many visitors' favourite. Bressanone's market **opens 27 November 2026 with an inauguration at 17:00** and runs to **6 January 2027** (closed 25 December). The setting is exceptional: around 60 hand-selected artisan stalls in Piazza Duomo, the square in front of Bressanone's Romanesque cathedral, whose twin towers are strung with lights throughout the season. The market is organised by Bressanone Turismo, the cooperative that manages it on behalf of the municipality."),
    p("Because access to the square from the main shopping street passes through a narrow medieval gateway, the market retains an intimate feel even when busy. Adjacent to the cathedral, the Hofburg palace hosts *OOPS*, a light-and-sound installation running from 26 November 2026 to 9 January 2027. Bressanone is 40 minutes north of Bolzano by regional train."),

    h2("Markets in Italy's cities"),
    p("Italy's urban Christmas markets arrived on the calendar much later than the Alpine ones and have a different character: louder, more varied, more commercial. What they offer that the Alpine markets cannot is the chance to pair a market visit with a city's year-round attractions. A weekend in Milan or Rome in December that combines a Christmas market with museums, restaurants, and architecture is a particularly satisfying combination."),

    h3("Milan — Mercatino di Natale in Piazza Duomo"),
    p("The Comune di Milano published an *avviso pubblico* (official public notice) setting out two consecutive editions of the Piazza Duomo market: December 2025–January 2026 and **1 December 2026 – 6 January 2027**. The 2026 edition is therefore officially confirmed. The market surrounds the base of the Duomo — one of Europe's most spectacular Gothic cathedrals — and the combination of festive stalls against the white marble façade is striking, especially in the evening when the building is lit."),
    p("Alongside the Piazza Duomo market, Milan's *Oh Bej! Oh Bej!* fair takes place **7–8 December 2026** at Castello Sforzesco. This is one of Milan's oldest festive fairs, dating to the 16th century, with hundreds of stalls of antiques, gifts, and street food. It coincides with the feast of Sant'Ambrogio (7 December), Milan's patron saint. For a wider view of the city, see the [Milan guide](/cities/milan-beyond-the-duomo)."),

    h3("Verona — Natale a Verona"),
    p("Verona has hosted Christmas market events in Piazza dei Signori and, in 2025, in Piazza Bra. The organiser — a consortium including the local *Confcommercio* and *Confesercenti* trade associations — typically runs the market across the Advent period, broadly from late November to late December."),
    note("**2026 dates not yet confirmed.** As of October 2026, the Verona Christmas market organiser had not published the official 2026 programme. The estimate of late November to late December is based on the 2025 edition. Check nataleinpiazza.it or the Comune di Verona website for the confirmed announcement before booking. For other Verona planning, see the [Verona guide](/cities/verona-first-visit)."),

    image("florence-cathedral-piazza", "Visitors in motion in front of the ornate Gothic facade of Florence's Cathedral of Santa Maria del Fiore", true),

    h3("Florence — Weihnachtsmarkt in Piazza Santa Croce"),
    p("Florence's main Christmas market is a German-style *Weihnachtsmarkt* in Piazza Santa Croce — the large square in front of the Gothic Basilica di Santa Croce. Around 50 wooden stalls sell Central European crafts, foods, and drinks. One Florence tourism source listed **14 November – 20 December 2026** as expected dates, but this has not been confirmed by the organiser."),
    note("**2026 dates not yet confirmed.** No official dates for the 2026 Florence Weihnachtsmarkt had been published as of October 2026. The estimate is based on previous years. Check feelflorence.it for the confirmed schedule before booking. For general Florence planning, see the [Florence guide](/cities/florence-for-first-timers)."),

    image("rome-st-peters-dusk", "St Peter's Basilica illuminated at dusk with visitors gathered in the square in front", true),

    h3("Rome — Befana e Natale in Piazza Navona"),
    p("Rome's longest-running Christmas event is the fair in Piazza Navona — one of the most beautiful Baroque squares in Europe. The market is confirmed for **1 December 2026 – 6 January 2027** from multiple tourism sources, consistent with a multi-year schedule. Over 100 stalls fill the square; unlike the Alpine markets, the Piazza Navona fair is as much a *Befana* fair as a Christmas one. Many stalls specialise in sweets, toys, stockings, and *carbone dolce* — the coal-shaped candy Italian tradition associates with Befana, the gift-giving witch who arrives on the night of 5–6 January."),
    p("The atmosphere is vivid and festive — street performers, a carousel, roasted-chestnut vendors, and crowds from across Europe. Entry is free. Check comune.roma.it for the official 2026 announcement. For more on Rome and Lazio, see the [Lazio region guide](/region/lazio)."),

    h2("What to eat and drink"),
    image("gluhwein-vin-brule-stall", "A decorated hot wine stall at a Christmas market with steaming ceramic mugs and festive lights", true),
    p("The food and drink at Italian Christmas markets differs significantly between the Alpine and the city markets. At the Alpine markets — Bolzano, Merano, Bressanone, Trento — the offer is Central European in character:"),
    ul(
      "***Vin brulé*** (German: *Glühwein*): spiced red wine served hot in ceramic or disposable cups. It is the defining drink of the Alpine market season; the local version often uses Trentino or South Tyrol wines as the base.",
      "***Strudel***: apple strudel (*strudel di mele*) served warm, often with cream or vanilla sauce, is ubiquitous across the Trentino-Alto Adige markets.",
      "***Canederli*** (German: *Knödel*): bread dumplings, a staple of South Tyrol cuisine, served in broth or with butter and sage. Found at stalls and nearby restaurants.",
      "***Speck***: cured, smoked, and air-dried pork leg, a DOP product of Alto Adige. It appears on charcuterie boards at stalls across the region and makes a compact, durable gift.",
      "***Zelten***: a dense fruit-and-nut bread traditional in Trentino and South Tyrol, made with dried figs, raisins, walnuts, and candied peel. It is baked specifically for the Christmas period.",
      "***Torrone***: nougat, available across all markets. The Valle d'Aosta version, often made with local honey, is particularly good.",
    ),
    p("In the city markets — Milan, Verona, Florence, Rome — the food is more Italian: roasted chestnuts (*caldarroste*) from street vendors, hot chocolate, *panettone* and *pandoro* (the rival Christmas breads of Milan and Verona respectively), and regional street food. Wine mulled Italian-style is common here too."),
    tip("The best food at an Italian Christmas market is often not at the market itself but in the restaurants and cafés nearby. The South Tyrol towns have some of the richest cooking in Italy — drawing on Italian, Austrian, and Germanic traditions — and a sit-down lunch in a *Stube* (a traditional Tyrolean tavern) is a worthwhile side of any market visit."),

    h2("What to buy"),
    image("christmas-ornaments-handmade", "Various handmade Christmas ornaments in wood, glass and fabric hanging on a rustic wooden wall", true),
    p("The South Tyrol and Trentino markets have a well-founded reputation for handmade quality, at least at curated markets like Bolzano and Bressanone where commercially produced goods are explicitly excluded. Categories worth exploring:"),
    ul(
      "**Wooden decorations**: carved nativity figures, tree ornaments, nutcrackers, and *Räuchermänner* (hollow wooden figures that smoke incense) are a South Tyrol speciality, made locally in the Val Gardena woodcarving communities.",
      "**Ceramics and glassware**: hand-painted tree ornaments, bells, and candleholders from small workshops across the region.",
      "**Textiles**: knitted wool scarves, socks, and mittens; embroidered linens; and felt goods made by local craftspeople.",
      "**Local food products**: *strudel*, *zelten*, *speck*, local wines, *grappa*, honey, jams, and specialty food items from across the Alpine regions. These make compact, non-fragile gifts.",
      "**Jewellery and accessories**: silver jewellery, amber pieces, leather goods, and felt items from Alpine artisans.",
    ),
    image("browsing-market-stall", "Visitors browsing handmade items at a well-stocked outdoor Christmas market stall", true),
    p("In the city markets, the mix is more eclectic. Rome's Piazza Navona is particularly associated with confectionery and Befana gifts. Milan's Piazza Duomo market includes Italian artisan goods, fashion accessories, and food products. Florence's Weihnachtsmarkt leans toward the Central European craft tradition."),
    tip("Many smaller stalls at the Alpine markets do not accept cards, or strongly prefer cash. Bring at least €50–100 in notes if you plan to shop seriously. Larger artisan vendors generally accept cards, but it is worth asking before loading up a basket."),

    h2("Planning your visit"),
    image("night-market-crowd", "A crowd of visitors at a brightly lit outdoor night market with stalls glowing in the darkness", true),

    h3("When to go"),
    p("The Alpine markets are busiest on weekends in December, particularly the second and third. If you have flexibility, arrive mid-week and aim for the first two weeks of December — crowds and atmosphere are in better balance than in the final run to Christmas. Evenings (after 17:00) have the best atmosphere because of the lights, but also the largest crowds; late morning on a weekday is quieter and more pleasant for browsing stalls."),
    p("The city markets are generally busiest on weekends throughout December. In Rome, the final days before Epiphany (3–6 January) are also very busy as the Piazza Navona fair reaches its traditional climax."),

    h3("Getting there by train"),
    p("Italy's rail network makes combining multiple markets in a single trip very practical. Bolzano, Merano, Trento, and Bressanone are all on or close to the Verona–Brenner main line; it is possible to visit two or even three markets in a day. Aosta requires a separate leg from Turin. The high-speed network connects Milan, Florence, and Rome for city combinations. For full details on Italian train travel, see the [Italy by train guide](/guides/italy-by-train)."),

    h3("Accommodation"),
    p("Book accommodation several months in advance for the Alpine markets in December, particularly Bolzano and Merano. Availability is limited and demand is high from October onwards. In the city markets, December accommodation is generally easier to find, though central Milan, Florence, and Rome remain in demand year-round."),

    h3("Combining markets on one trip"),
    p("A four- or five-day trip using Verona as a base can cover Trento (60–70 minutes by train), Bolzano (90 minutes), and Bressanone (a further 40 minutes north), with two nights in Bolzano and one each in Trento and Verona. Merano is a straightforward day trip from Bolzano. For a week-long Alpine markets trip, Aosta fits naturally at the start (fly into Turin, travel Turin → Aosta, then Turin → Verona)."),
    p("For a combined Alpine-and-city itinerary, the Verona–Bolzano–Trento cluster is one circuit, with Milan a two-hour train ride away as a city day-trip or overnight. Florence and Rome are best visited separately, either before or after the northern markets."),
  ],

  faqs: [
    {
      question: "When do Italy's Christmas markets open in 2026?",
      answer: "The earliest confirmed openings in 2026 are Trento (20 November) and Aosta (21 November). Merano opens 26 November, and Bolzano and Bressanone on 27 November. Milan's Piazza Duomo market and Rome's Piazza Navona fair open 1 December. Verona and Florence had not yet published official 2026 dates as of October 2026 — check the official organisers' websites before booking.",
    },
    {
      question: "Which Italian Christmas market is the oldest and most famous?",
      answer: "The Bolzano Christkindlmarkt, running since 1991, is widely regarded as the original Italian Christmas market and the one that inspired most of those that followed. It is set in Piazza Walther in the centre of Bolzano, and has strict standards for artisan quality that set it apart from many markets across Europe.",
    },
    {
      question: "Do Italian Christmas markets stay open until January?",
      answer: "The Alpine markets — Bolzano, Merano, Bressanone, Trento, and Aosta — all run to 6 January 2027 (Epiphany), which is an important gift-giving day in Italian tradition. City markets tend to close earlier: Verona and Florence typically close by late December. Milan and Rome both run to 6 January.",
    },
    {
      question: "Are Italian Christmas markets free to enter?",
      answer: "Entry to the market areas themselves is free at all nine locations covered here. There may be charges for specific events within the market area (concerts, the Bressanone light installation). Milan's Artigiano in Fiera at Fiera Milano in Rho is a separate event that charges an entry fee.",
    },
    {
      question: "Which Italian Christmas market is the best?",
      answer: "For craftsmanship and atmosphere combined, Bolzano and Bressanone are consistently the most highly regarded. For setting alone, Bressanone's Piazza Duomo location is hard to beat. For a city experience, Milan's combination of the Duomo market and the Oh Bej! Oh Bej! fair is excellent. Rome's Piazza Navona fair is the most distinctly Italian in character.",
    },
    {
      question: "How is the South Tyrol different from the rest of Italy?",
      answer: "South Tyrol (Alto Adige) is an autonomous province in northern Italy. Much of its population is German-speaking, a legacy of the region's centuries as part of the Habsburg Empire before 1919. Street signs, menus, and official communications appear in both Italian and German. The food, architecture, and cultural traditions reflect both Central European and Italian influences. The Christmas markets are essentially Austrian in origin, transplanted into an Italian administrative context.",
    },
    {
      question: "What is vin brulé?",
      answer: "*Vin brulé* (Italian) and *Glühwein* (German and South Tyrolian) both mean spiced hot wine — the same drink as mulled wine. At the Alpine markets, the base is typically a robust local red wine — often a Trentino or South Tyrol variety — heated with cinnamon, cloves, star anise, orange peel, and sugar. It is served hot in ceramic or disposable cups and is the defining drink of the Alpine market season.",
    },
    {
      question: "What is Befana and why does it matter for the Rome Christmas market?",
      answer: "Befana is an Italian folk figure — a kindly old woman who delivers gifts to children on the night of 5–6 January (Epiphany). Good children receive sweets; naughty ones receive *carbone dolce* (coal-shaped candy). In Italian tradition, Epiphany is often as important as Christmas Day for children. The Rome Piazza Navona fair runs through Epiphany, and many of its stalls specialise in the sweets, stockings, and gifts associated with Befana.",
    },
    {
      question: "How do I get to the Bolzano Christmas market from Verona?",
      answer: "Bolzano is served by frequent regional trains from Verona Porta Nuova, with the journey taking around 1 hour 30 minutes. Trains run several times per hour and no advance booking is needed. From Bolzano station, the market in Piazza Walther is a five-minute walk.",
    },
    {
      question: "Are the South Tyrol Christmas markets suitable for children?",
      answer: "Yes. All the major Alpine markets have children's programming — craft workshops, a Santa's house, carousel rides, and nativity displays — as well as child-friendly food. Entry is free. The main practical consideration is the weather: temperatures in Bolzano and Bressanone can drop below zero at night in December, so warm layers are essential.",
    },
    {
      question: "Can I combine multiple Christmas markets in one trip?",
      answer: "Yes, easily. Bolzano, Trento, Merano, and Bressanone are all connected by frequent regional trains and are within 90 minutes of Verona. A four-day itinerary can comfortably cover all four Alpine markets. Aosta is a separate cluster, best reached from Turin. City markets in Milan, Florence, and Rome are linked by the high-speed rail network.",
    },
    {
      question: "What should I bring to an Italian Christmas market?",
      answer: "Warm, comfortable walking shoes are essential, as the Alpine markets are on cobblestones and evening temperatures can drop sharply. Bring cash: many smaller stalls do not accept cards, particularly at the Alpine markets. A bag for purchases, a refillable water bottle, and layers you can add or remove as the day warms up are all useful.",
    },
  ],

  sourcesTitle: "Sources",
  sources: [
    {
      label: "Bolzano Christkindlmarkt — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-di-natale-bolzano",
      note: "Market operator's site; 2026 opening dates (27 Nov 2026 – 6 Jan 2027) and hours",
    },
    {
      label: "Merano Christmas Market — merano-suedtirol.it",
      url: "https://www.merano-suedtirol.it/en/merano/info-service/events/merano-christmas-market.html",
      note: "Official Merano tourism authority; confirmed 26 Nov 2026 opening date",
    },
    {
      label: "Trento Christmas Market — natale.visittrento.it",
      url: "https://natale.visittrento.it/en/christmas-market",
      note: "Official Visit Trento website; confirmed 20 Nov 2026 opening date",
    },
    {
      label: "Bressanone Christmas Market — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-natale-bressanone",
      note: "Market listing with confirmed 27 Nov 2026 – 6 Jan 2027 dates from Bressanone Turismo",
    },
    {
      label: "Aosta Marché Vert Noël — lovevda.it",
      url: "https://www.lovevda.it/it/banca-dati/2/artigianato-fiere-mercatini/aosta/mercatino-di-natale-marche-vert-noel/22493",
      note: "Valle d'Aosta official regional tourism database; confirmed 21 Nov 2026 – 6 Jan 2027",
    },
    {
      label: "Milan Mercatino di Natale in Duomo — Comune di Milano",
      url: "https://servizi.comune.milano.it/dettaglio-contenuto/-/asset_publisher/pqxq/content/avviso-pubblico-per-lorganizzazione-delle-seguenti-due-edizioni-della-manifestazione-denominata-mercatino-di-natale-in-duomo-dal-1-dicembre-2025-al-6-gennaio-2026-e-dal-1-dicembre-2026-al-6-gennaio-2027",
      note: "Official Comune di Milano public notice confirming the 1 Dec 2026 – 6 Jan 2027 edition",
    },
    {
      label: "Verona Christmas Market — nataleinpiazza.it",
      url: "https://www.nataleinpiazza.it/",
      note: "Official organiser website; 2026 dates not yet published as of October 2026",
    },
    {
      label: "Florence Weihnachtsmarkt — feelflorence.it",
      url: "https://www.feelflorence.it/en/events/christmas-market-piazza-santa-croce",
      note: "Florence tourism event listing; 2026 dates estimated, not yet officially confirmed",
    },
  ],
};
