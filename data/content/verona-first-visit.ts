import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Verona for First-Time Visitors". Arena visiting rules and the
// 2027 festival dates, Casa di Giulietta access and booking, civic museum
// closing days and the October 2026 ticketing change, church tickets, the
// airport shuttle and the UNESCO listing were checked on official sites in
// September 2026. Prices, timetables and journey times are deliberately not
// quoted.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });

const IMG = "/images/cities/verona-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const veronaFirstVisit: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Verona sits in a double bend of the River Adige, between the plain of the Veneto and the first hills of the Alps. It was a Roman town, the seat of the della Scala (Scaliger) lords in the Middle Ages and, for almost four centuries, part of the Republic of Venice. Those layers survive side by side: a Roman amphitheatre still used for opera, a Roman bridge, medieval towers and Gothic tombs, Venetian palaces and one of Italy's finest Romanesque churches. It's also the city Shakespeare chose for Romeo and Juliet, which brings its own kind of visitor."),

    // ——— 1 ———
    h2("Is Verona worth visiting?"),
    answer("**Yes — Verona suits a first trip to Italy well**, especially for travellers interested in history, architecture, food and wine. Its historic centre is compact and walkable, so **one day** covers the Arena, Piazza delle Erbe and the medieval core, and **two days** adds San Zeno, Castelvecchio, the Roman Theatre and the far bank of the Adige at an easy pace. It's quieter than Venice, smaller than Milan and less crowded with museums than Florence, and it's on the main railway lines between Milan, Venice and Bologna. It also works as a base for **Lake Garda** and the **Valpolicella** wine hills. **You don't need a car** in the city; the centre is a camera-controlled traffic zone. **Book ahead** for Juliet's House, where online booking is compulsory."),
    p("Verona is more than its Shakespeare connection. The Juliet sites are part of the city's tourism, but the Arena, the Roman and medieval streets and the Venetian-era palaces are the reasons UNESCO listed the whole historic centre."),

    // ——— 2 ———
    h2("Verona at a glance"),
    {
      type: "facts",
      title: "Verona at a glance",
      rows: [
        { label: "Best for", value: "Roman and medieval history, architecture, food and wine" },
        { label: "Minimum time", value: "1 full day" },
        { label: "Ideal first visit", value: "2 days; 3 with Lake Garda or Valpolicella" },
        { label: "Main historic area", value: "The Città Antica, inside the bend of the Adige" },
        { label: "Main landmark", value: "The Arena, the Roman amphitheatre on Piazza Bra" },
        { label: "Main museums", value: "Castelvecchio, the Roman Theatre and Archaeological Museum, the Arena" },
        { label: "Main railway station", value: "Verona Porta Nuova, south of the centre" },
        { label: "Airport", value: "Verona Villafranca (Valerio Catullo), with a shuttle bus to Porta Nuova" },
        { label: "Getting around", value: "On foot, with ATV buses for the station and outer areas" },
        { label: "Easy nearby trips", value: "Lake Garda (Peschiera, Sirmione), Valpolicella, Vicenza, Mantua" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/verona-ponte-pietra-adige.webp`,
      alt: "The Ponte Pietra, a stone and brick arched bridge over the fast-flowing River Adige in Verona, with pastel houses and red roofs behind",
      caption: "The Ponte Pietra over the Adige, rebuilt after the Second World War with its original stones.",
      credit: unsplash("Leandro Silva", "leandro_gs"),
      wide: true,
    },

    // ——— 3 ———
    h2("How many days do you need in Verona?"),
    table(
      ["Plan", "What it allows", "Trade-offs"],
      [
        ["1 day", "The Arena, Piazza delle Erbe, Piazza dei Signori, Juliet's House and the river", "Little time for San Zeno or museums"],
        ["2 days", "Adds San Zeno, Castelvecchio, the Roman Theatre and Veronetta", "Enough for most first visits"],
        ["3 days", "A slower pace and more churches and museums, or a day trip", "Choose between the city, the lake and the wine hills"],
        ["Verona + Lake Garda", "A day at Sirmione or Peschiera, or a night by the lake", "Northern lake towns are a long day from Verona"],
        ["Verona + Valpolicella", "Wine-country villages and tastings", "Much easier with a tour or driver"],
      ],
      "How long to stay in Verona"
    ),
    p("Travellers passing between Milan and Venice often stop for a few hours; that's enough to see the Arena and the main squares, but staying overnight lets you see the centre in the evening, when day visitors have left."),

    // ——— 4 ———
    h2("The essential sights"),
    p("Most of Verona's civic museums close on Mondays, and from 1 October 2026 the Musei Civici are moving to a new online ticketing platform. Check the [Musei Civici website](https://museicivici.comune.verona.it/) for current arrangements. A VeronaCard city pass covers many civic sites and churches; check what's included before buying."),
    h3("Piazza Bra and the Arena"),
    p("Piazza Bra, the largest square in the city, is where most visits begin, with the Arena on one side and the Liston, a broad pavement lined with cafés and restaurants, on the other. The Arena has its own section below."),
    {
      type: "image",
      src: `${IMG}/piazza-bra-arena.webp`,
      alt: "Piazza Bra in Verona with people walking across the square and the Roman Arena's arches on the right",
      caption: "Piazza Bra and the Arena.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Piazza delle Erbe"),
    p("Built over the Roman forum, Piazza delle Erbe is the lively heart of the old city: market stalls, the 14th-century Madonna Verona fountain, frescoed house fronts and the Venetian lion on its column. It's busy all day and a natural place for a coffee or an aperitivo."),
    {
      type: "image",
      src: `${IMG}/verona-market-square.webp`,
      alt: "Piazza delle Erbe in Verona with closed market umbrellas, the Madonna Verona fountain and historic palaces, with people walking",
      caption: "Piazza delle Erbe, on the site of the Roman forum.",
      credit: unsplash("Ivan Ovych", "kehl"),
    },
    h3("Piazza dei Signori, the Torre dei Lamberti and the Arche Scaligere"),
    p("Through an archway from Piazza delle Erbe, the quieter Piazza dei Signori was the seat of government, with a statue of Dante — who found refuge at the Scaliger court during his exile. The **Torre dei Lamberti**, rising above the Palazzo della Ragione, can be climbed by stairs or a lift for views over the rooftops and hills. Nearby, the **Arche Scaligere** are the elaborate Gothic tombs of the Scaliger lords; according to the Musei Civici, the enclosure is open to visitors in summer, but the tombs can be seen from the street all year. Allow an hour for the square, the tower and the tombs."),
    {
      type: "image",
      src: `${IMG}/view-from-torre-dei-lamberti.webp`,
      alt: "View over Verona's red-tiled rooftops and bell towers from the Torre dei Lamberti, with hills and mountains in the distance",
      caption: "Verona from the Torre dei Lamberti, with the hills and the first Alpine ridges beyond.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Castelvecchio and its bridge"),
    p("Built in the 14th century under Cangrande II della Scala, Castelvecchio is a brick fortress on the river. It houses the civic art museum — sculpture and painting from the medieval period to the 18th century — in rooms redesigned by the architect Carlo Scarpa in the mid-20th century, a landmark of museum design. The castle's fortified bridge, the Ponte di Castelvecchio, was blown up in 1945 and rebuilt after the war. According to the museum, it's closed on Mondays. Allow one and a half to two hours."),
    {
      type: "image",
      src: `${IMG}/ponte-di-castelvecchio.webp`,
      alt: "The red-brick Ponte di Castelvecchio with its battlements and tower spanning the River Adige in Verona, with gulls flying over the water",
      caption: "The Ponte di Castelvecchio, the castle's fortified bridge over the Adige.",
      credit: unsplash("Antonio Vivace", "avivace"),
    },
    h3("The Basilica of San Zeno"),
    p("A 20-minute walk west of the centre, San Zeno is one of the most important Romanesque churches in northern Italy, with a rose window, bronze door panels and, above the altar, a triptych by Andrea Mantegna. It's managed with the Cathedral, Sant'Anastasia and San Fermo by the Chiese Vive association, whose ticket covers all four; according to its website, no booking is needed, and on Sundays and religious holidays tourist visits are only in the afternoon. Allow 45 minutes, plus the walk."),
    {
      type: "image",
      src: `${IMG}/san-zeno-interior.webp`,
      alt: "The interior of the Basilica of San Zeno in Verona, with a painted wooden ceiling, striped arches and frescoes above the raised altar",
      caption: "Inside the Basilica of San Zeno.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("The Cathedral and Sant'Anastasia"),
    p("Verona's Cathedral, at the northern tip of the old town, combines a Romanesque exterior with later interiors, including an *Assumption* by Titian. Sant'Anastasia, the city's largest church, is Gothic, with Pisanello's fresco of Saint George and the Princess. Both are on the Chiese Vive ticket."),
    h3("The Roman Theatre and Ponte Pietra"),
    p("Across the river, the Roman Theatre is built into the hillside, with an archaeological museum above it in a former monastery; according to the Comune, it's closed on Mondays. Allow an hour. Just downstream, the **Ponte Pietra** is Verona's Roman bridge; blown up in 1945, it was rebuilt using stones recovered from the river. Steps lead up from the theatre area to Castel San Pietro, the best viewpoint over the city at sunset."),
    h3("Giardino Giusti"),
    p("In Veronetta, the Giardino Giusti is a Renaissance garden with an avenue of tall cypresses, terraces and grottoes climbing the hillside. It's privately owned and ticketed; check opening arrangements before you go. Allow an hour."),
    h3("The Adige riverfront"),
    p("The river loops around three sides of the old town, and the walk along the embankments between Castelvecchio, the Ponte Pietra and the Roman Theatre is one of the most pleasant in the city."),

    // ——— 5 ———
    h2("The Arena di Verona"),
    p("The Arena is a Roman amphitheatre from the 1st century AD, built outside the Roman walls and later enclosed within the city. Most of its outer ring was lost after an earthquake in the 12th century; four arches of it, known as the *Ala*, still stand above the complete inner ring. It's among the best-preserved Roman amphitheatres, and unlike most it's still used for large performances."),
    {
      type: "image",
      src: `${IMG}/arena-interior.webp`,
      alt: "Inside the Roman Arena of Verona, with rows of stone steps rising around the oval floor and a few visitors below",
      caption: "Inside the Arena, where the stone tiers still seat audiences for summer performances.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Visiting as a monument"),
    p("According to the Musei Civici, the Arena is open to visitors from Tuesday to Sunday and closed on Mondays, except on days when performances are scheduled, when it closes early or doesn't open to visitors. The monument visit takes about 45 minutes to an hour; climb to the upper tiers for the view over Piazza Bra."),
    h3("Opera and events"),
    p("The Arena has hosted an opera festival every summer since 1913. According to the Fondazione Arena di Verona, the 2027 festival runs from 12 June to 11 September, with tickets already on sale on the official site. Outside the festival the Arena hosts concerts and other events. An evening performance is a different experience from a daytime visit: tickets, seat types and rules are set by the organiser of each event."),
    important("During the opera season and on event days, the Arena's daytime opening changes, sometimes at short notice. If seeing the monument matters to you, check the Musei Civici calendar for your dates.", "Performance days"),

    // ——— 6 ———
    h2("Verona and Romeo and Juliet"),
    p("Shakespeare set *Romeo and Juliet* in Verona, but he didn't invent the story. It developed in Italian novellas of the 16th century, notably Luigi da Porto's, which placed two feuding families in Verona; Shakespeare drew on an English version of the tale. There's no historical evidence that Romeo and Juliet existed. The names of the Montecchi and Cappelletti families do appear in medieval Italian writing, including Dante, but as political factions rather than as the families of two lovers."),
    p("**Casa di Giulietta** is a medieval house near Piazza delle Erbe associated with the Dal Cappello family, whose name recalls Capulet; the famous balcony was added in the 20th century. It's now a civic museum. According to the Comune, since 1 April 2026 entry to the courtyard and house is only through the Teatro Nuovo in Piazzetta Navona, on a one-way route that exits on Via Cappello. **Online booking is compulsory**, even for visitors entitled to free entry, and you choose between a route that includes the courtyard and one that also includes the house. It's open every day, with afternoon-only opening on Mondays."),
    {
      type: "image",
      src: `${IMG}/juliet-balcony.webp`,
      alt: "The stone balcony on the brick façade of Casa di Giulietta in Verona, with ivy on the courtyard wall",
      caption: "The balcony at Casa di Giulietta, added to the medieval house in the 20th century.",
      credit: unsplash("Maksym Harbar", "maksym_harbar"),
    },
    p("You'll find Juliet elsewhere too: at the so-called Tomb of Juliet, in the former monastery of San Francesco al Corso, now home to the civic fresco museum, and in shops, events and the letters that visitors still send to \"Juliet\". It's a literary tradition that has become part of Verona's culture — enjoyable on its own terms, as long as it isn't mistaken for the city's history."),

    // ——— 7 ———
    h2("Roman and medieval Verona"),
    p("According to UNESCO, which listed the City of Verona as a World Heritage Site in 2000, Verona became a Roman municipium in the 1st century BC and rose quickly in importance. Its Roman core, inside the loop of the river, keeps the grid of streets and several monuments: the Arena, the Roman Theatre, the Ponte Pietra, the Porta Borsari and Porta Leoni gates and the Arco dei Gavi, rebuilt next to Castelvecchio in the 1930s."),
    p("After Roman rule, Verona was held by the Ostrogoth king Theodoric, the Lombards and Charlemagne. In the 12th century it became an independent commune, and in the 13th and 14th centuries it flourished under the della Scala family, especially Cangrande I, who hosted Dante. The Scaligers built Castelvecchio, their tombs and new walls. From 1405 Verona was part of the Republic of Venice, which left palaces, the lion of Saint Mark and later fortifications; after 1797 it passed to Austria, which added more military works, and it joined the Kingdom of Italy in 1866."),

    // ——— 8 ———
    h2("Neighbourhoods and where to stay"),
    table(
      ["Area", "Atmosphere and location", "For first-time visitors", "Getting around"],
      [
        ["Città Antica (centro storico)", "Inside the loop of the Adige: the Arena, Piazza delle Erbe, Juliet's House, shops and restaurants", "The most convenient base", "On foot; the area is a ZTL for cars"],
        ["Around Piazza Bra", "The southern edge of the centre, facing the Arena", "Very convenient; busy in the evening, especially in opera season", "On foot; closest to the station"],
        ["Piazza delle Erbe and Piazza dei Signori", "The medieval heart, with bars and restaurants", "Atmospheric; can be noisy late", "On foot"],
        ["San Zeno", "A residential quarter west of Castelvecchio around the basilica", "A quieter, local base with its own restaurants", "About a 20-minute walk to the centre"],
        ["Veronetta", "Across the river to the east, with the university, the Roman Theatre and Giardino Giusti", "Good value and lively with students", "Walk over the bridges"],
        ["Borgo Trento", "North of the river, residential and green", "Calm, but further from the sights", "Walk or bus"],
        ["Near Porta Nuova", "Around the station, south of the historic walls", "Practical for trains and the airport shuttle", "Walk or bus to Piazza Bra"],
      ],
      "Verona's neighbourhoods"
    ),
    p("For a first visit, stay in the Città Antica or near Piazza Bra. If you're arriving by car, check whether your accommodation is inside the traffic zone and how access works before arrival. Hotels fill during the opera season and during large trade fairs such as Vinitaly in spring, so book early for those periods. Verona applies a tourist tax per person per night."),

    // ——— 9 ———
    h2("What to eat in Verona"),
    p("Verona's cooking belongs to the Veneto but has its own dishes, shaped by the plain, the lake and the hills."),
    h3("Strongly associated with Verona"),
    ul(
      "**Risotto all'Amarone** — risotto made with Amarone wine, from Valpolicella, often finished with Monte Veronese cheese.",
      "**Pastissada de caval** — horse meat slowly stewed in red wine, a traditional Veronese dish usually served with polenta.",
      "**Pearà** — a peppery sauce of bread, bone marrow and broth, served with *bollito* (boiled meats).",
      "**Gnocchi** — Verona has a long carnival tradition connected with gnocchi, and they appear often on local menus.",
      "**Tortellini di Valeggio** — very thin, delicate tortellini from Valeggio sul Mincio, south-west of Verona.",
      "**Pandoro** — the star-shaped Christmas cake, associated with Verona, where it was first produced industrially in the late 19th century.",
      "**Monte Veronese** — a cow's-milk cheese from the Lessini mountains north of the city.",
    ),
    h3("Found across the Veneto"),
    ul(
      "**Bigoli** — thick, rough spaghetti, served with duck ragù or anchovy and onion sauce.",
      "**Polenta** — served with meat stews and cheese.",
      "**Risotto** — in many versions, using rice from the Veronese plain.",
      "**Spritz and aperitivo** — the early-evening drink with small snacks, common across the north-east.",
    ),
    p("Menus around Piazza Bra and Piazza delle Erbe are often more expensive; a few streets away, or in Veronetta and San Zeno, prices and atmosphere change. Check menus for cover charges. For how meals work across Italy, see [Italian food traditions](/food/italian-food-traditions)."),
    {
      type: "image",
      src: `${IMG}/verona-street-life.webp`,
      alt: "A cyclist and pedestrians passing a traditional delicatessen with a painted sign on a street in Verona",
      caption: "Everyday life on a street in central Verona.",
      credit: unsplash("Micaela Parente", "mparente"),
    },

    // ——— 10 ———
    h2("Verona's wine country"),
    p("The province of Verona is one of Italy's most important wine areas, but its wines come from distinct zones:"),
    ul(
      "**Valpolicella** — the hills north-west of the city, source of Valpolicella, Ripasso, **Amarone** (a dry red made from grapes dried for several months after harvest) and **Recioto** (a sweet red from dried grapes).",
      "**Soave** — hills to the east, known for white wine from the Garganega grape.",
      "**Bardolino** and **Custoza** — the eastern and south-eastern shores of Lake Garda, for lighter reds, rosé and whites.",
      "**Lugana** — white wine from the southern shore of Lake Garda.",
    ),
    p("A Valpolicella visit suits travellers interested in wine and landscape. Public buses reach some villages, but wineries are scattered and tastings mean you shouldn't drive, so an organised tour or a driver is the realistic option; most wineries ask visitors to book. For the wider picture, see [our guide to Italian regional wines](/food/italian-regional-wines)."),

    // ——— 11 ———
    h2("Verona in one day"),
    steps(
      ["Morning: the Arena and Piazza Bra", "Visit the Arena when it opens (not on Mondays), then walk up Via Mazzini."],
      ["Late morning: Juliet's House and Piazza delle Erbe", "Enter Casa di Giulietta through the Teatro Nuovo with a booked slot, then walk to Piazza delle Erbe."],
      ["Lunch", "Eat in the streets around the squares; try risotto or bigoli."],
      ["Afternoon: Piazza dei Signori and the river", "See the Arche Scaligere, climb the Torre dei Lamberti, then cross the Ponte Pietra to the Roman Theatre and climb to Castel San Pietro."],
      ["Evening", "Aperitivo in Piazza delle Erbe or Veronetta, and dinner in the centre."],
    ),

    // ——— 12 ———
    h2("Verona in two days"),
    p("Use day one above, then:"),
    steps(
      ["Morning: Castelvecchio", "The museum (closed Mondays) and a walk across its bridge."],
      ["Late morning: San Zeno", "Walk west along the river to the Basilica of San Zeno, and have lunch in the San Zeno quarter."],
      ["Afternoon: churches and gardens", "Sant'Anastasia and the Cathedral on the Chiese Vive ticket, or the Giardino Giusti in Veronetta."],
      ["Evening", "Dinner in Veronetta or San Zeno, or a performance at the Arena in summer."],
    ),
    tip("Skip what doesn't interest you: art lovers can drop the Torre dei Lamberti for more time at Castelvecchio; wine lovers can swap the churches for an early-evening tasting in town.", "Adapt the plan"),

    // ——— 13 ———
    h2("A third day"),
    p("A third day doesn't have to be a day trip. Stay in Verona to see the Roman Theatre's museum, the Giardino Giusti and quieter churches at an easy pace. Or choose one excursion:"),
    ul(
      "**Lake Garda** — the southern shore is the easiest, especially Sirmione and Peschiera.",
      "**Valpolicella** — for wine, with a tour or driver.",
      "**Vicenza or Mantua** — for Renaissance architecture and art, both easy by train.",
    ),

    // ——— 14 ———
    h2("Getting around Verona"),
    p("The historic centre is compact: from the Arena to Piazza delle Erbe is about 10 minutes on foot, and San Zeno and Veronetta are walkable from there. Comfortable shoes matter more than transport. **ATV** runs the city and suburban buses, useful between Porta Nuova and the centre and for outer areas; its website explains how to pay by bank card. **Taxis** can be found at ranks, such as at the station, or booked by phone. Cycling is possible along the river, but the old town's paving and pedestrian streets make walking easier."),
    p("A car isn't useful inside Verona. The historic centre, the Città Antica, is a limited traffic zone (ZTL) controlled by cameras; if you drive, park outside it and walk in, and check the Comune's rules — especially if your accommodation is inside the zone. See [driving in Italy](/guides/driving-in-italy) for how ZTLs work."),

    // ——— 15 ———
    h2("Arriving in Verona"),
    h3("Verona Porta Nuova"),
    p("Verona's main station, Porta Nuova, lies south of the historic walls, about a 20-minute walk from Piazza Bra, or a short bus or taxi ride. It sits where the Milan–Venice line crosses the line north over the Brenner Pass to Austria and Germany, so it's well connected in all directions."),
    h3("Verona Airport"),
    p("Verona's airport, Valerio Catullo, is south-west of the city. According to ATV, the **Airlink shuttle bus** runs daily between the airport and Porta Nuova station in about 15 minutes; according to the airport, tickets can be bought from the machine in the arrivals area or on board with a bank card. **Taxis** wait outside arrivals. ATV also runs a seasonal direct bus from the airport to Peschiera del Garda; check whether it's running for your dates."),
    h3("By train"),
    p("High-speed Frecciarossa and Italo trains link Verona with Milan and Venice on the east–west line, and with Bologna, Florence and Rome to the south; regional trains serve Vicenza, Padua, Mantua and the lake. Check current timetables with the operators, and read [Italy by train](/guides/italy-by-train) for how tickets work. For combining several cities, see [getting between Italian cities](/guides/getting-between-italian-cities)."),

    // ——— 16 ———
    h2("Lake Garda from Verona"),
    p("Lake Garda's southern shore is close to Verona, and the Milan–Venice railway runs along it. The northern end is much further."),
    table(
      ["Destination", "Why go", "How", "Planning notes"],
      [
        ["Peschiera del Garda", "A walled town at the lake's outlet (UNESCO Venetian fortifications)", "Train", "The simplest lake trip"],
        ["Sirmione", "The Scaliger castle, old town and Roman villa ruins on a narrow peninsula", "Train to Desenzano or Peschiera, then bus or boat", "Very busy in summer; go early"],
        ["Desenzano del Garda", "A lakeside town with a harbour", "Train", "Good base for boats on the southern lake"],
        ["Bardolino, Lazise, Garda", "Eastern-shore towns and wine", "Bus", "Allow a full day"],
        ["Malcesine, Limone, Riva", "The northern, mountainous lake", "Long bus or boat journeys", "Better as an overnight stay"],
      ],
      "Lake Garda from Verona"
    ),
    {
      type: "image",
      src: `${IMG}/sirmione-scaliger-castle.webp`,
      alt: "The Scaliger castle at Sirmione on Lake Garda, with crenellated towers rising from the water and boats moored in front",
      caption: "The Scaliger castle at Sirmione, on Lake Garda's southern shore.",
      credit: unsplash("Rachel van Elk", "vanelkphotography"),
    },
    p("Public boats on Lake Garda are run by [Navigazione Laghi](https://www.navigazionelaghi.it/en/). Services are most frequent between late spring and early autumn and reduced outside the main season, so check the current timetable. Choose one or two towns rather than trying to see the whole lake in a day. If you want to compare lakes, see [a weekend at Lake Como](/travel/lake-como-weekend)."),

    // ——— 17 ———
    h2("Other day trips"),
    table(
      ["Destination", "Type of trip", "Why go", "Notes"],
      [
        ["Valpolicella", "Easy with a tour", "Wine villages and Amarone", "Tours or a driver; book wineries"],
        ["Vicenza", "Easy excursion", "Palladio's architecture (UNESCO)", "On the Milan–Venice line"],
        ["Padua", "Easy excursion", "Giotto's frescoes in the Scrovegni Chapel", "The chapel must be booked in advance"],
        ["Mantua", "Easy excursion", "The Gonzaga palaces (UNESCO)", "Regional train"],
        ["Venice", "Full day", "The lagoon city", "Possible by train, but better with an overnight stay"],
        ["The Dolomites", "Complicated", "Mountain scenery", "Too far for a comfortable day trip; plan a separate stay"],
      ],
      "Day trips from Verona"
    ),
    p("If you're adding Venice, read [Venice for first-time visitors](/cities/venice-quieter-neighbourhoods); for the mountains, see [visiting the Dolomites](/guides/visiting-the-dolomites)."),

    // ——— 18 ———
    h2("When to visit Verona"),
    ul(
      "**Spring (April–June)** — pleasant for walking and the lake; large trade fairs, such as Vinitaly, can fill hotels.",
      "**Summer (July–August)** — hot, and the busiest time, with the Arena opera festival; sightseeing is best early and late.",
      "**Autumn (September–November)** — grape harvest in Valpolicella and Soave in early autumn, milder weather and quieter streets.",
      "**Winter (December–February)** — cold and sometimes foggy, but quiet; Christmas decorations in Piazza Bra, and pandoro season.",
    ),
    p("For Verona's place in the Italian calendar, see [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 19 ———
    h2("Verona for different travellers"),
    ul(
      "**First-time Italy visitors** — Verona combines easily with Milan and Venice by train and gives a manageable introduction to Italian history.",
      "**Couples** — stay in the old town, climb to Castel San Pietro at sunset and consider an evening at the Arena.",
      "**Families** — the Arena, Castelvecchio's armour and battlements, and the lake appeal to children; the centre is compact.",
      "**History lovers** — follow the Roman, Scaliger and Venetian layers from the Arena to the Arche Scaligere and Castelvecchio.",
      "**Architecture lovers** — San Zeno, Scarpa's Castelvecchio and a day in Vicenza for Palladio.",
      "**Food and wine travellers** — local dishes such as risotto all'Amarone and pearà, and a day in Valpolicella.",
      "**Museum visitors** — Castelvecchio and the archaeological museum at the Roman Theatre; remember Monday closures.",
      "**Without a car** — the city, Peschiera, Sirmione, Vicenza and Mantua are all easy by public transport.",
      "**Combining Verona with Venice** — Verona is on the same railway line; stay in Verona for the city and visit Venice overnight rather than as a rushed return trip.",
      "**Using Verona as a Lake Garda base** — works well for the southern lake; for the northern shore, stay by the lake.",
    ),

    // ——— 20 ———
    h2("Common first-time mistakes"),
    ol(
      "**Reducing Verona to Juliet.** The Arena, San Zeno and Castelvecchio are the city's real history.",
      "**Only visiting Piazza Bra.** The medieval squares, the river and Veronetta are within a few minutes' walk.",
      "**Skipping San Zeno.** It's a short walk from the centre and one of the city's highlights.",
      "**Underestimating walking.** Distances are short, but cobbles and steps add up.",
      "**Trying to see too much of Lake Garda.** One or two southern towns are plenty for a day.",
      "**Driving into the historic centre.** It's a camera-controlled ZTL; check the rules first.",
      "**Assuming every Arena event works the same way.** Monument visits, opera and concerts each have their own access and tickets.",
      "**Treating all northern Italian food as the same.** Veronese dishes and wines are distinct from those of Venice or Piedmont.",
      "**Not checking museum and event schedules.** Many civic museums close on Mondays, and the Arena changes its hours for performances.",
    ),

    // ——— 21 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "verona-first-visit",
      groups: [
        {
          title: "Before booking",
          items: ["Stay in the Città Antica or near Piazza Bra", "Check opera-season and trade-fair dates", "Decide on Lake Garda or Valpolicella"],
        },
        {
          title: "Before departure",
          items: ["Book Casa di Giulietta online", "Book Arena performance tickets if you want one", "Check train tickets and the airport shuttle", "Check the ZTL if you're driving"],
        },
        {
          title: "During the trip",
          items: ["Wear comfortable shoes", "Check Monday closures and Arena hours", "Plan lake boats and wine-tour transport", "Allow for summer heat"],
        },
      ],
    },
    p("The opening arrangements, booking rules, event dates and transport links in this guide were checked on official sites in September 2026. They can change: confirm them before you travel. For costs, see [how much a trip to Italy costs](/guides/italy-trip-cost); to plan a wider route, see our [complete Italy travel guide](/guides/complete-italy-travel-guide), [Milan beyond the Duomo](/cities/milan-beyond-the-duomo), [Bologna in two days](/cities/bologna-in-two-days) or [Florence for first-time visitors](/cities/florence-for-first-timers)."),
  ],

  faqs: [
    { question: "Is Verona worth visiting for the first time?", answer: "Yes. It combines a Roman amphitheatre, medieval squares, Romanesque churches and Venetian-era palaces in a compact, walkable centre, with food, wine and Lake Garda nearby." },
    { question: "How many days do you need in Verona?", answer: "One full day covers the main sights; two days allows San Zeno, Castelvecchio and the Roman Theatre at a relaxed pace. Add a third day for Lake Garda or Valpolicella." },
    { question: "Is Verona walkable?", answer: "Yes. The historic centre sits inside a bend of the Adige, and most sights are within 20 minutes' walk of each other. Buses are useful for the station and the airport shuttle." },
    { question: "What is Verona famous for?", answer: "The Arena and its summer opera festival, its Roman and medieval centre listed by UNESCO, the Scaliger monuments, the Romeo and Juliet tradition, and Valpolicella wines such as Amarone." },
    { question: "Is the Verona Arena worth visiting?", answer: "Yes. It's one of the best-preserved Roman amphitheatres and is still used for performances. Visit the monument by day (not on Mondays) or see a summer opera for a different experience." },
    { question: "Is Juliet's House actually connected to Shakespeare?", answer: "Only through tradition. Romeo and Juliet are fictional; the house is a medieval building associated with the Dal Cappello family, and its balcony was added in the 20th century. It's now a civic museum that requires online booking." },
    { question: "What should you not miss in Verona?", answer: "The Arena, Piazza delle Erbe and Piazza dei Signori, the Basilica of San Zeno, Castelvecchio and its bridge, and the view from Castel San Pietro across the Ponte Pietra." },
    { question: "What food is Verona famous for?", answer: "Risotto all'Amarone, pastissada de caval, bollito with pearà, gnocchi, tortellini di Valeggio and pandoro, along with Veneto staples such as bigoli and polenta." },
    { question: "Is Verona expensive?", answer: "Accommodation prices vary with demand and rise sharply during the opera season and large trade fairs. Eating a few streets away from Piazza Bra and Piazza delle Erbe usually costs less." },
    { question: "Can you visit Verona without a car?", answer: "Yes. The centre is walkable and a ZTL, the airport has a shuttle bus to the station, and trains reach Lake Garda, Vicenza, Padua, Mantua and Venice." },
    { question: "Can you visit Lake Garda from Verona?", answer: "Yes. Peschiera and Desenzano are on the railway, and Sirmione is a short bus or boat ride from them. Northern lake towns are better visited with an overnight stay." },
    { question: "Is Verona a good alternative to staying in Venice?", answer: "It's a different experience rather than a substitute. Verona can be a calmer base in the Veneto, but Venice is best seen with at least one night in the city itself." },
    { question: "Is Verona good for a weekend?", answer: "Yes. Two days covers the Arena, the medieval squares, San Zeno, Castelvecchio and the Roman Theatre, with time for good meals." },
    { question: "Can you combine Verona with Venice or Milan?", answer: "Easily. Verona is on the main railway line between Milan and Venice, with high-speed trains in both directions, and it's also linked to Bologna, Florence and Rome." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Musei Civici di Verona", url: "https://museicivici.comune.verona.it/", note: "the Arena, Castelvecchio, museums and ticketing" },
    { label: "Casa di Giulietta", url: "https://casadigiulietta.comune.verona.it/", note: "entry and compulsory booking" },
    { label: "Fondazione Arena di Verona — Opera Festival", url: "https://www.arena.it/en/arena-verona-opera-festival/", note: "festival dates and tickets" },
    { label: "Chiese Vive — Verona's historic churches", url: "https://www.chieseverona.it/en/visit-info", note: "San Zeno, the Cathedral, Sant'Anastasia and San Fermo" },
    { label: "UNESCO — City of Verona", url: "https://whc.unesco.org/en/list/797/", note: "World Heritage listing" },
    { label: "ATV Verona — airport shuttle", url: "https://www.atv.verona.it/flex/cm/pages/ServeBLOB.php/L/EN/IDPagina/90", note: "Airlink and lake buses" },
    { label: "Verona Airport — transport", url: "https://www.aeroportoverona.it/en_gb/transport", note: "getting to and from the airport" },
    { label: "Comune di Verona — ZTL", url: "https://www.comune.verona.it/nqcontent.cfm?a_id=30870&tt=verona_agid", note: "limited traffic zone rules" },
    { label: "Navigazione Laghi — Lake Garda", url: "https://www.navigazionelaghi.it/en/tickets-and-timetables-lake-garda/", note: "boat timetables" },
  ],
};
