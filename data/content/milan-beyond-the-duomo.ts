import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Milan Beyond the Duomo". Last Supper booking rules, event
// dates, museum closing days and transport links were checked on official
// sites in September 2026. Prices and opening hours are deliberately not
// quoted; they change.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/milan-beyond-the-duomo";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const milanBeyondTheDuomo: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Many visitors see Milan as a stopover: a train change, a look at the cathedral, a walk through the Galleria and on to Lake Como or Venice. That misses most of the city. Milan's appeal is spread across its neighbourhoods and institutions — Leonardo's Last Supper, the Brera gallery, the Sforza Castle, the canals of the Navigli, the design and fashion districts and a food culture of its own."),
    answer("**Milan rewards more than a quick Duomo visit.** **Two to three days** lets you add the Last Supper, Brera, the Castello Sforzesco and one or two neighbourhoods; a single day covers the centre. Unlike Rome, Florence or Venice, Milan is a working, modern city whose history sits alongside contemporary architecture, design and business — it particularly suits travellers interested in art, design, fashion, food and city life. **You don't need a car**: the metro, trams and walking cover the city, and trains link it to Lake Como and the rest of northern Italy. **Book the Last Supper well ahead** through its official site."),
    {
      type: "facts",
      title: "Milan at a glance",
      rows: [
        { label: "Recommended first visit", value: "2–3 days" },
        { label: "Best for", value: "Art, design, fashion, food, architecture and shopping" },
        { label: "Main arrival stations", value: "Milano Centrale, plus Porta Garibaldi, Rogoredo or Cadorna depending on the route" },
        { label: "Main airports", value: "Malpensa, Linate and Milan Bergamo (Orio al Serio)" },
        { label: "Getting around", value: "Metro, trams and walking" },
        { label: "Car needed?", value: "Usually not for the city" },
        { label: "Major cultural highlight", value: "Leonardo's Last Supper — booking is mandatory" },
        { label: "Popular day trip", value: "Lake Como, by regional train" },
      ],
    },

    // ——— 1 ———
    h2("Is Milan worth visiting beyond the Duomo?"),
    p("Yes, for travellers who enjoy cities as they are lived in today as well as for their history. Milan has one of the world's most famous paintings, a major Renaissance and Baroque gallery at Brera, a castle full of museums, a strong programme of contemporary art and design, and neighbourhoods with very different characters, from the canals of the Navigli to the towers of Porta Nuova."),
    p("It's different from Rome, Florence and Venice. Its historic centre is smaller relative to the city, much of it was rebuilt after the Second World War, and business, fashion and design shape daily life. If your priority is ancient ruins or a preserved Renaissance townscape, other cities may appeal more; if you like museums, architecture old and new, shopping and eating well, Milan makes a strong two- or three-day stay — and an easy base for Lake Como."),
    {
      type: "image",
      src: `${IMG}/duomo-di-milano-dusk.webp`,
      alt: "The white marble façade and spires of Milan Cathedral at dusk",
      caption: "The Duomo is where most visits start — this guide is about what comes next.",
      credit: unsplash("Ouael Ben Salah", "benwksi"),
    },

    // ——— 2 ———
    h2("How many days do you need in Milan?"),
    table(
      ["Trip length", "What it allows", "Trade-offs"],
      [
        ["1 day", "The Duomo, the Galleria and one major sight — the Last Supper if booked, or Brera — plus an evening in the Navigli", "Little time for museums or neighbourhoods"],
        ["2 days", "Add the Castello Sforzesco, the Pinacoteca di Brera and a second neighbourhood", "A day trip would take one of the two days"],
        ["3 days", "Design, contemporary art, another museum and slower meals", "Usually the best balance for a first visit"],
        ["4+ days", "Milan plus Lake Como, Bergamo or Turin", "Consider staying at the lake rather than making it a day trip"],
      ],
      "How long to stay in Milan"
    ),

    // ——— 3 ———
    h2("What to see beyond the Duomo"),
    p("Opening days vary, and several museums close one day a week — the Castello Sforzesco's museums, for example, are closed on Mondays. Check official websites before you plan a day around a museum."),
    h3("The Duomo and its rooftop terraces"),
    p("Before going beyond it, it's worth going up it. The cathedral's rooftop terraces, reached by stairs or lift with a separate ticket, put you among the spires with views across the city. Tickets and dress rules are on the [Duomo's official website](https://www.duomomilano.it/en/). Allow one to two hours for the cathedral and terraces."),
    h3("Galleria Vittorio Emanuele II"),
    p("The glass-roofed arcade linking Piazza del Duomo and Piazza della Scala, built in the 1860s and 1870s, is both a shopping gallery and a public passageway. It's free to walk through."),
    h3("Teatro alla Scala"),
    p("Opened in 1778, La Scala is one of the world's best-known opera houses. Its museum gives a glimpse of the auditorium when it's not in use; performances sell quickly, so check the theatre's official site well ahead if you want to attend. Allow about an hour for the museum. Of particular interest to music lovers."),
    h3("The Last Supper at Santa Maria delle Grazie"),
    p("Leonardo da Vinci painted the Last Supper on the wall of the Dominican refectory of Santa Maria delle Grazie in the 1490s; the church and convent are a UNESCO World Heritage Site. It's one of the most important — and most fragile — paintings in the world, and visits are strictly controlled."),
    ul(
      "**Booking is mandatory.** According to the Museo del Cenacolo Vinciano, visits are always by reservation to protect the painting.",
      "**Visits are short.** Groups of up to 40 people enter for 15-minute slots.",
      "**Tickets are released in batches.** Sales open for three- or four-month periods at a time, and additional tickets are released every Wednesday at 12:00 for the following week, according to the museum.",
      "**Use the official channels.** Book through the museum's [official website](https://cenacolovinciano.org/) and its ticketing platform; resellers and tours offer entry at higher prices.",
    ),
    important("Last Supper tickets can sell out as soon as each batch is released. If it matters to you, check the museum's news page for the next sale date and book as soon as your dates are fixed; if you miss out, the weekly Wednesday release is the next chance.", "Plan early"),
    {
      type: "image",
      src: `${IMG}/santa-maria-delle-grazie.webp`,
      alt: "The brick exterior and domed tribune of Santa Maria delle Grazie in Milan",
      caption: "Santa Maria delle Grazie. The Last Supper is in the former refectory beside the church.",
      credit: unsplash("Diane Picchiottino", "diane_soko"),
    },
    h3("Brera and the Pinacoteca"),
    p("Brera is the city's historic artists' quarter, with narrow streets, galleries and cafés. The Pinacoteca di Brera, in the Palazzo di Brera, holds one of Italy's great collections of painting, including Mantegna's Lamentation over the Dead Christ, Raphael's Marriage of the Virgin, Piero della Francesca's Brera Altarpiece, Caravaggio's Supper at Emmaus and Hayez's The Kiss. The palace also houses the Brera Botanical Garden. Allow two hours for the gallery; the neighbourhood is at its best in the early evening."),
    {
      type: "image",
      src: `${IMG}/brera-street-night.webp`,
      alt: "A street in the Brera district of Milan at night, with people walking past lit shopfronts",
      caption: "Brera in the evening. The neighbourhood's streets fill up around aperitivo time.",
      credit: unsplash("Ken Anzai", "nzai_ken"),
    },
    h3("Castello Sforzesco and Parco Sempione"),
    p("The castle of the Sforza dukes houses a group of civic museums under one ticket, including Michelangelo's last sculpture, the unfinished Rondanini Pietà, and the Sala delle Asse, decorated by Leonardo. According to the castle's website, the museums are open Tuesday to Sunday and closed on Mondays. Allow two to three hours. Behind it, Parco Sempione stretches to the Arco della Pace and is home to the Triennale."),
    {
      type: "image",
      src: `${IMG}/castello-sforzesco-fountain.webp`,
      alt: "The fountain in front of the Castello Sforzesco in Milan with the castle's tower behind",
      caption: "The Castello Sforzesco. One ticket covers the castle's museums.",
      credit: unsplash("Maria Cappelli", "rikku72"),
    },
    h3("The Navigli"),
    p("The Naviglio Grande and Naviglio Pavese are the surviving canals of a network that once linked Milan with rivers and lakes. Today their banks, and the Darsena basin where they meet, are lined with restaurants and bars and are among the liveliest places in the city in the evening. Weekend daytime brings markets and walkers. Allow an evening."),
    h3("Porta Nuova, Piazza Gae Aulenti and the Bosco Verticale"),
    p("North of the centre, the Porta Nuova district shows contemporary Milan: the raised Piazza Gae Aulenti ringed by towers, the Biblioteca degli Alberi park and the Bosco Verticale, two residential towers designed by Stefano Boeri's studio and planted with trees. It's free to walk around and takes one to two hours with the neighbouring Isola district."),
    {
      type: "image",
      src: `${IMG}/bosco-verticale.webp`,
      alt: "The Bosco Verticale towers in Milan, with trees and plants growing from their balconies",
      caption: "The Bosco Verticale in the Porta Nuova district.",
      credit: unsplash("Mattia Spotti", "spockmon"),
    },
    h3("Museo del Novecento"),
    p("On Piazza del Duomo, in the Palazzo dell'Arengario, the Museo del Novecento covers 20th-century Italian art, from Futurism onwards. Its upper floors look directly onto the cathedral. Allow one to two hours. Easy to combine with the Duomo."),
    h3("Fondazione Prada"),
    p("In a former distillery in the south of the city, redesigned by the architecture firm OMA, Fondazione Prada presents contemporary art exhibitions in a complex that includes a gold-leaf-clad building and a tower. Programmes change; check what's on before you go. Allow two to three hours."),
    h3("Triennale Milano"),
    p("In the Palazzo dell'Arte in Parco Sempione, the Triennale is dedicated to design, architecture and the visual arts, with a permanent design museum and temporary exhibitions. A natural stop for design travellers, and easy to combine with the castle."),
    h3("The Monumental Cemetery"),
    p("The Cimitero Monumentale, north of the centre, is an open-air collection of 19th- and 20th-century sculpture and architecture, entered through the striped marble Famedio. Many visitors find it one of the city's most striking places. Free entry; check opening days on the city's website. Allow one to two hours."),
    {
      type: "image",
      src: `${IMG}/cimitero-monumentale.webp`,
      alt: "The striped marble Famedio building at the entrance of Milan's Monumental Cemetery",
      caption: "The Famedio at the entrance to the Monumental Cemetery.",
      credit: unsplash("Natalia Martini Uliana", "natalliamartini"),
    },
    h3("How to prioritise"),
    p("A practical planning aid, not a ranking — adjust it to your interests."),
    table(
      ["Sight", "First-time priority", "Typical visit", "Book ahead?"],
      [
        ["The Last Supper", "High", "15-minute visit, plus arrival time", "Mandatory — often weeks ahead"],
        ["Duomo and rooftop terraces", "High", "1–2 hours", "Useful at busy times"],
        ["Pinacoteca di Brera", "High", "About 2 hours", "Usually not"],
        ["Castello Sforzesco museums", "Medium", "2–3 hours", "Usually not; closed Mondays"],
        ["Navigli", "High", "An evening", "No"],
        ["Porta Nuova and Bosco Verticale", "Medium", "1–2 hours", "No"],
        ["Museo del Novecento", "Medium", "1–2 hours", "Usually not"],
        ["Fondazione Prada", "Optional", "2–3 hours", "Check the exhibition"],
        ["Triennale Milano", "Optional", "1–2 hours", "Check the exhibition"],
        ["Monumental Cemetery", "Optional", "1–2 hours", "No"],
      ],
      "Planning priorities for a first visit"
    ),

    // ——— 4 ———
    h2("Milan in 1, 2 or 3 days"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "One day", title: "The centre and Brera", text: "**Morning:** the Duomo and its terraces. **Late morning:** the Galleria and Piazza della Scala. **Afternoon:** the Last Supper if you've booked a slot, or the Pinacoteca di Brera. **Evening:** aperitivo and dinner in Brera or the Navigli." },
        { label: "Two days", title: "Add Leonardo and the castle", text: "Day 1 as above. **Day 2:** the Last Supper (if not already done) or Brera in the morning; the Castello Sforzesco and Parco Sempione in the afternoon; the Navigli in the evening." },
        { label: "Three days", title: "Design and contemporary Milan", text: "Days 1 and 2 as above. **Day 3:** the Triennale or Fondazione Prada; Porta Nuova, the Bosco Verticale and Isola; a slower dinner in Porta Venezia or Isola." },
      ],
    },
    tip("Build each day around one fixed booking — the Last Supper or the Duomo terraces — and keep the rest flexible. Milan is easy to cross by metro, so you don't need to group everything by area.", "Plan around one booking"),

    // ——— 5 ———
    h2("Milan's neighbourhoods"),
    table(
      ["Area", "Character", "Good for", "Considerations"],
      [
        ["Centro Storico (Duomo)", "The historic core: cathedral, Galleria, La Scala", "First-time sightseeing", "Busiest area; shops dominate some streets"],
        ["Brera", "Historic artists' quarter, galleries, narrow streets", "Art, cafés, evening walks", "Popular and often pricier"],
        ["Navigli", "Canals and the Darsena, restaurants and bars", "Evenings out", "Lively and busy at night and at weekends"],
        ["Porta Venezia", "Liberty (Art Nouveau) architecture, restaurants, public gardens", "Food, a central base with good metro links", "Some streets busy in the evening"],
        ["Porta Nuova / Isola", "Contemporary towers beside a smaller-scale neighbourhood", "Modern architecture, restaurants", "Further from the Duomo"],
        ["Corso Como / Garibaldi", "Pedestrian street near Porta Garibaldi station", "Shopping, evenings, trains", "Busy at night"],
        ["Tortona", "Former industrial area of studios and showrooms", "Design, especially during design week", "Quieter outside events"],
        ["Porta Romana", "Residential area south-east of the centre", "A calmer stay, near Fondazione Prada", "A metro ride to the main sights"],
        ["Paolo Sarpi", "Milan's Chinatown, largely pedestrian", "Food and shopping", "Busy daytime shopping street"],
      ],
      "Milan's neighbourhoods at a glance"
    ),

    // ——— 6 ———
    h2("Where to stay in Milan"),
    p("Milan's metro makes most central areas practical. Choose based on how you'll arrive and what you want outside your door in the evening."),
    table(
      ["If you want…", "Consider", "Why"],
      [
        ["The simplest first visit", "Centro Storico or Brera", "Walk to the Duomo, La Scala and Brera"],
        ["Easy train and airport links", "Around Milano Centrale or Porta Garibaldi", "High-speed trains, the Malpensa Express and airport buses"],
        ["Restaurants and nightlife", "Navigli or Porta Venezia", "Evening life on your doorstep"],
        ["A quieter stay", "Porta Romana or residential streets near the centre", "Calmer evenings with metro access"],
        ["Contemporary Milan", "Porta Nuova or Isola", "Modern architecture and good transport"],
        ["Access to Linate", "Areas on metro line M4", "M4 runs directly to Linate airport"],
      ],
      "Choosing where to stay"
    ),
    p("Hotel prices can rise sharply during major trade fairs and fashion weeks; check the event calendar before you book. Milan applies a city tourist tax per person per night."),

    // ——— 7 ———
    h2("Art and museums"),
    p("Milan's cultural identity has a different emphasis from Florence's or Rome's. Florence is defined by the early Renaissance, Rome by antiquity and the Baroque; Milan's story runs from the court of the Sforza dukes, where Leonardo worked for nearly two decades, through the Enlightenment and the academy at Brera to 20th-century modernism, industrial design and today's contemporary art foundations."),
    ul(
      "**Leonardo da Vinci** — the Last Supper, the Sala delle Asse in the Castello Sforzesco, and his work on the city's canals and engineering.",
      "**Brera** — the Pinacoteca's Renaissance and later Italian painting.",
      "**Castello Sforzesco** — sculpture, decorative arts and Michelangelo's Rondanini Pietà.",
      "**Modern and contemporary art** — the Museo del Novecento, Fondazione Prada, Pirelli HangarBicocca and a busy gallery scene.",
      "**Architecture** — from the Gothic Duomo and Bramante's work at Santa Maria delle Grazie to Liberty villas, post-war towers such as the Torre Velasca and the Pirelli Tower, and the new skyline of Porta Nuova and CityLife.",
    ),

    // ——— 8 ———
    h2("Fashion and design"),
    p("Fashion and design are part of Milan's economy and everyday life, not just its image."),
    h3("Fashion"),
    p("Milano Fashion Week is organised by the Camera Nazionale della Moda Italiana. Women's collections are shown twice a year, in late February or early March and in late September (22–28 September in 2026), with men's collections in separate weeks; the official calendar is published on the Camera's website. The shows themselves are industry events, mostly by invitation, but fashion weeks affect the whole city, filling hotels and restaurants. The Quadrilatero della Moda — Via Montenapoleone, Via della Spiga, Via Sant'Andrea and Via Manzoni — is the heart of luxury fashion."),
    h3("Design"),
    p("The Salone del Mobile, the international furniture fair, is held at the Rho Fiera exhibition centre. According to the organisers, the 2027 edition runs from 13 to 18 April, with the last two days open to the general public. During the same week, the city hosts hundreds of design events — collectively known as the Fuorisalone — in districts such as Tortona and Brera. The Triennale's design museum and showrooms across the city are there all year."),
    important("Design week and fashion weeks bring some of the highest hotel demand of the year. If your dates coincide, book early — or choose other dates if you'd rather avoid the crowds.", "Check the event calendar"),
    h3("Shopping"),
    ul(
      "**Luxury fashion** — the Quadrilatero della Moda.",
      "**Italian high-street and mid-range brands** — Corso Vittorio Emanuele and Corso Buenos Aires.",
      "**Department store** — La Rinascente on Piazza del Duomo.",
      "**Independent boutiques and design shops** — Brera, Isola and Porta Venezia.",
      "**Vintage and markets** — the Navigli area hosts markets on set days; check the city's calendar.",
      "**Food** — covered markets and delicatessens across the city.",
    ),

    // ——— 9 ———
    h2("Food and aperitivo"),
    p("Milanese cooking is northern and rich, built on rice, butter and slow cooking rather than olive oil and pasta."),
    ul(
      "**Risotto alla milanese** — saffron risotto, often served with ossobuco.",
      "**Cotoletta alla milanese** — a breaded veal cutlet, traditionally on the bone and fried in butter.",
      "**Ossobuco** — braised veal shank.",
      "**Polenta** — common across Lombardy, especially in colder months.",
      "**Panettone** — the sweet bread closely associated with Milan, especially at Christmas.",
    ),
    p("**Aperitivo** is a daily ritual: an early-evening drink, often served with snacks or a buffet, in bars across Brera, the Navigli, Isola and Porta Venezia. The Negroni sbagliato is commonly said to have been created in Milan. Lombardy also has notable wines, from Franciacorta sparkling wines to Valtellina reds — see [Italian regional wines](/food/italian-regional-wines) — and [Italian food traditions you should know](/food/italian-food-traditions) explains how meals work."),
    h3("The Navigli and evening Milan"),
    p("Evening life in Milan centres on the Navigli, Brera, Porta Venezia, Isola and Corso Como. Aperitivo usually runs from about 6pm, dinner from around 8pm. On warm evenings the canal banks fill with people, and at weekends they can be very busy; for a quieter evening, walk further along the Naviglio Grande or choose Isola."),
    {
      type: "image",
      src: `${IMG}/navigli-canal-evening.webp`,
      alt: "The Naviglio canal in Milan in the evening, lined with buildings and restaurant lights",
      caption: "The Navigli in the evening, when the canal banks fill for aperitivo and dinner.",
      credit: unsplash("Daniel Kirby", "dsk_"),
    },

    // ——— 10 ———
    h2("Getting around Milan"),
    p("Milan is mostly flat, and its centre is walkable, but distances between neighbourhoods are best covered by metro or tram. The public transport company ATM runs five metro lines (M1–M5), trams and buses."),
    table(
      ["For…", "Use", "Notes"],
      [
        ["Central sightseeing", "Walking", "The Duomo, the Galleria, La Scala, Brera and the castle are within walking distance"],
        ["Neighbourhood hopping", "Metro", "Fast and frequent; five lines cross the city"],
        ["Short scenic trips", "Tram", "Slower but useful, and some historic trams still run"],
        ["Linate airport", "Metro M4", "Direct to the airport"],
        ["Late at night", "Metro, night buses or taxi", "Check ATM's current night services"],
      ],
      "Getting around Milan"
    ),
    p("According to ATM, you can pay for metro, bus and tram journeys by tapping a contactless bank card, phone or smartwatch at the orange-marked readers at the metro gates and on board; paper and app tickets are also available. Taxis wait at ranks and can be booked by phone or app. Milan also has bike and e-scooter sharing. For more, see [ATM's official site](https://www.atm.it/en/)."),

    // ——— 11 ———
    h2("Milan airports"),
    table(
      ["Airport", "Where", "Getting to the city", "Convenient for"],
      [
        ["Milan Malpensa (MXP)", "North-west of Milan, some way out of the city", "Malpensa Express train to Cadorna, Porta Garibaldi and Centrale; buses; taxis and transfers", "Most long-haul and many European flights; travellers heading to Lake Como or Lake Maggiore"],
        ["Milan Linate (LIN)", "East of the centre, close to the city", "Metro M4 — about 12 minutes to San Babila, according to the airport; taxis", "Domestic and European flights; short city stays"],
        ["Milan Bergamo (BGY)", "Near Bergamo, north-east of Milan", "Buses to Milan; or the ATB bus to Bergamo station and a train", "Many low-cost flights; visiting Bergamo"],
      ],
      "Milan's airports"
    ),
    p("Always check which airport your flight uses: \"Milan\" can mean any of the three, and they're in very different places. See our guide to [Italian airport transfers](/guides/italy-airport-transfers)."),

    // ——— 12 ———
    h2("Milan by train"),
    p("Milano Centrale is one of Italy's main rail hubs; high-speed trains also call at Porta Garibaldi and Rogoredo. Trenitalia and Italo high-speed services link Milan with Turin, Bologna, Florence, Rome, Naples and Venice. Based on operator timetables checked in September 2026, the fastest trains take about 45 minutes to an hour to Turin, 1¾–2 hours to Florence and 2¼–2½ hours to Venice; check current timetables for other routes."),
    p("For Lake Como, Trenord regional trains run from Milano Centrale to Como San Giovanni (about 40 minutes) and to Varenna (about an hour), and from Milano Cadorna to Como Nord Lago. Read [how to travel around Italy by train](/guides/italy-by-train) for tickets and validation."),

    // ——— 13 ———
    h2("Day trips from Milan"),
    h3("Milan and Lake Como"),
    p("Lake Como is the most popular trip from Milan, and it can work either way. As a day trip, it's realistic to see one town — Como, or Varenna with a short boat hop. To explore the central lake — Bellagio, Varenna and Menaggio by ferry — at least one night there is better. Milan works as a base if you prefer city evenings and want to keep one hotel; staying at the lake suits travellers who want the slower pace and the views without a train journey each way. Our guide to [Lake Como in a weekend](/travel/lake-como-weekend) explains where to stay and how ferries work."),
    table(
      ["Destination", "Best for", "Planning complexity", "Typical approach"],
      [
        ["Lake Como", "Lakeside towns, villas, boat trips", "Low for Como; moderate for the central lake", "Trenord train, then ferry; better with a night"],
        ["Bergamo", "The walled upper town (Città Alta)", "Low", "Regional train, then bus or funicular to the upper town"],
        ["Turin", "Royal palaces, the Egyptian Museum, cafés", "Low", "High-speed train"],
        ["Lake Maggiore", "The Borromean Islands and lakeside towns", "Moderate", "Train to Stresa, then boats"],
        ["Bologna", "Food, porticoes and a medieval centre", "Low", "High-speed train"],
        ["[Verona](/cities/verona-first-visit)", "Roman arena and historic centre", "Low", "Train"],
      ],
      "Day trips from Milan"
    ),
    p("One day trip is plenty on a short stay; the lakes in particular are more enjoyable with an overnight."),

    // ——— 14 ———
    h2("Best time to visit Milan"),
    ul(
      "**Spring (April–June)** — pleasant for walking and outdoor dining; design week in April fills the city.",
      "**Summer (July–August)** — hot and humid, and many residents leave in August, when some shops and restaurants close for part of the month. Quieter for sightseeing, but less lively.",
      "**Autumn (September–November)** — a good season for museums and food, with fashion week in late September; rain is more frequent later in the season.",
      "**Winter (December–February)** — cold and sometimes foggy, but festive in December: 7 December (Sant'Ambrogio, the city's patron saint) is a local holiday, and panettone is everywhere. February brings women's fashion week.",
    ),
    p("Major trade fairs, fashion weeks and design week raise hotel demand and prices, sometimes sharply. For how Milan compares with the rest of Italy through the year, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 15 ———
    h2("Milan for different travellers"),
    h3("First-time visitors"),
    p("Book the Last Supper first, then plan the Duomo, Brera and the castle around it. Leave an evening for the Navigli."),
    h3("Couples"),
    p("Stay in Brera or near the Navigli, time a rooftop visit at the Duomo for late afternoon, and add a night at Lake Como."),
    h3("Families"),
    p("Parco Sempione, the Castello Sforzesco and the Natural History Museum in the public gardens of Porta Venezia work well with children. Keep museum visits short and use the metro to save walking."),
    h3("Solo travellers"),
    p("Milan is easy to navigate alone by metro, and bar counters and aperitivo make eating alone straightforward."),
    h3("Art lovers"),
    p("Combine the Last Supper, the Pinacoteca di Brera and the castle's museums with the Museo del Novecento and Fondazione Prada."),
    h3("Fashion and design travellers"),
    p("Walk the Quadrilatero della Moda, visit the Triennale, explore Tortona's showrooms, and if you can, time your trip for design week — booking accommodation well ahead."),
    h3("Food travellers"),
    p("Try risotto alla milanese, cotoletta and ossobuco, explore aperitivo in different neighbourhoods and consider a day trip to Bergamo or Bologna."),
    h3("Business travellers"),
    p("Porta Nuova, Porta Garibaldi and the area around Centrale are practical for offices and trains. Check the trade fair calendar before booking."),
    h3("Budget travellers"),
    p("Many of the best experiences cost nothing: the Galleria, Brera's streets, Porta Nuova, the Navigli and the Monumental Cemetery. Travel outside major events, stay near a metro line rather than in the centre, and look at state museums' free-entry arrangements."),
    h3("Weekend visitors"),
    p("A weekend covers the Duomo, the Last Supper or Brera, the castle and a night in the Navigli. Book the Last Supper before you book anything else."),

    // ——— 16 ———
    h2("Common first-time mistakes"),
    ol(
      "**Treating Milan as only the Duomo.** Allow time for Brera, the castle and a neighbourhood.",
      "**Underestimating booking requirements.** The Last Supper requires a reservation, often weeks ahead.",
      "**Choosing accommodation without checking transport.** Stay near a metro line or station.",
      "**Using a car unnecessarily.** Traffic and restricted areas make driving in the city harder than taking the metro.",
      "**Ignoring the neighbourhoods.** Much of Milan's character is outside the centre.",
      "**Combining too many day trips.** One is plenty on a short stay.",
      "**Relying on outdated event information.** Check official calendars for fashion weeks, design week and trade fairs.",
      "**Confusing the airports.** Malpensa, Linate and Bergamo are far apart.",
      "**Forgetting major events.** They can fill hotels and raise prices across the city.",
    ),
    p("If you're driving on to the lakes or mountains, read [driving in Italy](/guides/driving-in-italy) first — central Milan has restricted traffic zones."),

    // ——— 17 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "milan-beyond-the-duomo",
      groups: [
        {
          title: "Before booking",
          items: ["Choose a neighbourhood", "Decide how many days to stay", "Check Last Supper ticket availability", "Check the event calendar"],
        },
        {
          title: "Before departure",
          items: ["Book the Last Supper and Duomo terraces", "Confirm your airport and transfer", "Check museum closing days", "Save official museum links"],
        },
        {
          title: "During the trip",
          items: ["Use the metro and trams", "Allow buffer time for bookings", "Keep one evening free for the Navigli", "Keep plans flexible"],
        },
      ],
    },
    p("Booking rules, event dates and transport links in this guide were checked on official sites in September 2026. They change; confirm them before you travel. For Milan in a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Is Milan worth visiting beyond the Duomo?", answer: "Yes. Milan has Leonardo's Last Supper, the Pinacoteca di Brera, the Castello Sforzesco's museums, the Navigli canals, contemporary architecture and a strong design and food culture." },
    { question: "How many days do you need in Milan?", answer: "Two to three days suits most first visits: enough for the Duomo, the Last Supper, Brera, the castle and a neighbourhood or two. Add a day for Lake Como or Bergamo." },
    { question: "What should I see in Milan besides the Duomo?", answer: "The Last Supper, the Pinacoteca di Brera, the Castello Sforzesco, the Galleria Vittorio Emanuele II, the Navigli, Porta Nuova and the Bosco Verticale, and the Museo del Novecento." },
    { question: "Do you need to book the Last Supper in advance?", answer: "Yes. According to the museum, booking is mandatory, visits last 15 minutes, and tickets are released in batches, with extra tickets every Wednesday at noon for the following week. Book through the official website." },
    { question: "Is Milan walkable?", answer: "The centre is walkable and mostly flat — the Duomo, the Galleria, La Scala, Brera and the castle are close together. Use the metro or trams for the Navigli, Porta Nuova and other neighbourhoods." },
    { question: "Where should first-time visitors stay in Milan?", answer: "The Centro Storico or Brera for walking to the main sights; the area around Milano Centrale or Porta Garibaldi for trains and airports; the Navigli or Porta Venezia for evenings out." },
    { question: "Is Milan expensive?", answer: "It can be, especially for hotels during fashion weeks, design week and trade fairs. Outside those periods, and with free sights such as the Galleria, Brera's streets and the Navigli, it's easier to manage." },
    { question: "Do you need a car in Milan?", answer: "No. The metro, trams and buses cover the city, and trains reach Lake Como and other cities. A car is only useful for exploring beyond the rail network." },
    { question: "How do you get from Malpensa to Milan?", answer: "The Malpensa Express train runs to Milano Cadorna, Porta Garibaldi and Centrale; buses and taxis are alternatives. Check current timetables with the operators." },
    { question: "How do you get from Linate to Milan city centre?", answer: "By metro line M4, which runs directly from the airport to the centre — about 12 minutes to San Babila, according to the airport. Taxis are the alternative." },
    { question: "Is Milan good for a weekend?", answer: "Yes. A weekend covers the Duomo, the Last Supper or Brera, the castle and an evening in the Navigli — provided you book the Last Supper well ahead." },
    { question: "What food is Milan famous for?", answer: "Risotto alla milanese, cotoletta alla milanese, ossobuco and panettone, along with the city's aperitivo culture." },
    { question: "Can you visit Lake Como as a day trip from Milan?", answer: "Yes, but a day trip usually covers one town — Como, or Varenna with a short boat hop. According to Trenord, direct trains take about 40 minutes from Milano Centrale to Como San Giovanni and about an hour to Varenna. For the central lake, stay at least one night." },
    { question: "What is Milan known for besides fashion?", answer: "Leonardo's Last Supper, the Duomo, design and the Salone del Mobile, La Scala opera house, the Brera gallery, business and finance, and Milanese food." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Museo del Cenacolo Vinciano — the Last Supper", url: "https://cenacolovinciano.org/", note: "booking rules and ticket releases" },
    { label: "Duomo di Milano", url: "https://www.duomomilano.it/en/", note: "cathedral and rooftop terraces" },
    { label: "Pinacoteca di Brera", url: "https://pinacotecabrera.org/en/", note: "collection and visits" },
    { label: "Castello Sforzesco", url: "https://www.milanocastello.it/en", note: "museum opening days" },
    { label: "Triennale Milano", url: "https://triennale.org/en", note: "design museum and exhibitions" },
    { label: "Fondazione Prada", url: "https://www.fondazioneprada.org/", note: "exhibitions" },
    { label: "Camera Nazionale della Moda Italiana", url: "https://www.cameramoda.it/en/", note: "fashion week calendar" },
    { label: "Salone del Mobile.Milano", url: "https://www.salonemilano.it/en", note: "design week dates" },
    { label: "ATM Milano", url: "https://www.atm.it/en/", note: "metro, trams, tickets and contactless" },
    { label: "Milano Linate airport — by metro", url: "https://www.milanolinate-airport.com/en", note: "M4 connection" },
    { label: "Milan Bergamo airport", url: "https://www.milanbergamoairport.it/en/", note: "bus and train connections" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/en/tickets/travel-titles/malpensa-express/", note: "Malpensa airport link" },
  ],
};
