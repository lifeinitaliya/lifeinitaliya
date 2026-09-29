import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Turin for First-Time Visitors". Museum ticketing and closing
// days, the airport rail and bus links, GTT contactless payment, the Superga
// rack tramway and the UNESCO listings were checked on official sites in
// September 2026. Prices, timetables and exact journey times are deliberately
// not quoted, apart from Milan–Turin, which matches our train guide.

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

const IMG = "/images/cities/turin-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const turinFirstVisit: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Turin sits on the Po at the foot of the Alps, in the north-west corner of Italy. For almost three centuries it was the capital of the House of Savoy, and in 1861 it became the first capital of the newly unified Kingdom of Italy. The result is a city of straight, arcaded streets, formal squares and royal palaces, with a strong regional identity, a café culture that gave Italy vermouth and gianduja chocolate, and a 20th century shaped by Fiat and the car industry."),

    // ——— 1 ———
    h2("Is Turin worth visiting?"),
    answer("**Yes — especially if you're interested in museums, architecture and food.** Turin works differently from Italy's best-known cities. It has no single famous monument that defines a visit, as Rome or Florence do; instead, it offers a planned Baroque capital, one of the world's great collections of ancient Egyptian art at the Museo Egizio, the Mole Antonelliana and its cinema museum, the Musei Reali and a café and aperitivo tradition of its own. **Two days** covers the centre and two major museums; **three** leaves time for Superga, a neighbourhood or a royal residence outside the city. **You don't need a car**: the centre is flat and walkable, and trams, buses and a metro line fill the gaps. **Book ahead** for the Museo Egizio, where tickets are sold online only."),
    p("Turin isn't a smaller Milan. The two cities are under an hour apart by high-speed train, but Turin's grid of porticoed streets, its royal squares and its slower pace give it a character of its own, and it's also the natural gateway to Piedmont's wine country and the western Alps."),

    // ——— 2 ———
    h2("Turin at a glance"),
    {
      type: "facts",
      title: "Turin at a glance",
      rows: [
        { label: "Best for", value: "Museums, royal and Baroque architecture, cafés, food and wine" },
        { label: "Recommended first visit", value: "2–3 days" },
        { label: "Minimum time", value: "1 full day for the centre and one major museum" },
        { label: "Ideal time", value: "3 days, or 4–5 with Piedmont" },
        { label: "Main historic area", value: "Piazza Castello, Via Roma, Via Po and the Quadrilatero Romano" },
        { label: "Main museums", value: "Museo Egizio, Museo Nazionale del Cinema (in the Mole), Musei Reali" },
        { label: "Airport", value: "Torino Airport (Caselle), north of the city" },
        { label: "Main railway stations", value: "Torino Porta Nuova and Torino Porta Susa" },
        { label: "Getting around", value: "On foot, with GTT trams, buses and metro line 1" },
        { label: "Easy day trips", value: "Superga, the Reggia di Venaria, Asti; the Langhe with a car or tour" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/turin-skyline-mole-alps.webp`,
      alt: "Turin's rooftops at sunset with the tall spire of the Mole Antonelliana and the snow-capped Alps on the horizon",
      caption: "Turin and the Mole Antonelliana, with the Alps behind the city.",
      credit: unsplash("Matteo Giallongo", "matteogiallongo"),
      wide: true,
    },

    // ——— 3 ———
    h2("How many days do you need in Turin?"),
    table(
      ["Length", "What it allows", "Trade-offs"],
      [
        ["1 day", "Piazza Castello, Via Roma, Piazza San Carlo and one major museum — the Museo Egizio or the Mole", "You'll have to choose between the big museums"],
        ["2 days", "Both the Egizio and the Mole, the Musei Reali or Palazzo Madama, a café tour and an aperitivo", "Little time outside the centre"],
        ["3 days", "Adds Superga, the Valentino, a neighbourhood such as San Salvario, or the Reggia di Venaria", "Enough for most first visits"],
        ["4+ days", "Turin plus Piedmont: the Langhe, Alba, Asti or the Alps", "Wine country is much easier with a car or tour"],
      ],
      "How long to stay in Turin"
    ),
    p("There's no single right length. One day is enough to see why the city is worth returning to; two gives a proper introduction; three lets you slow down."),

    // ——— 4 ———
    h2("What Turin is known for"),
    ul(
      "**The House of Savoy** — the dynasty that ruled from Turin and became Italy's royal family, leaving palaces, squares and residences listed by UNESCO.",
      "**The Museo Egizio** — a collection of ancient Egyptian art and objects that has been in Turin since the 19th century.",
      "**The Mole Antonelliana** — the city's symbol, home to the National Cinema Museum.",
      "**Porticoes** — kilometres of arcaded streets that let you cross the centre under cover.",
      "**Cafés and chocolate** — historic cafés, the bicerin, gianduja and the gianduiotto.",
      "**Vermouth and aperitivo** — Vermouth di Torino is a protected geographical indication.",
      "**Cars and industry** — Fiat, the Lingotto factory and the National Automobile Museum.",
      "**Football** — Juventus and Torino FC.",
    ),

    // ——— 5 ———
    h2("The essential sights"),
    p("Opening days vary by museum, and several close on different weekdays. Check the official site before planning a day around any of them."),
    h3("The Mole Antonelliana and the Museo Nazionale del Cinema"),
    p("Alessandro Antonelli began the Mole in 1863 as a synagogue; the city took it over and it was completed in 1889, with a spire that still dominates the skyline. Inside, the National Cinema Museum fills the vast central hall with film history, sets and projections, and a glass lift rises through the middle of the building to a panoramic terrace. According to the museum, the museum and lift are **closed on Tuesdays**, and buying tickets online is strongly advised to avoid queues. Allow two to three hours for the museum and lift; the lift alone takes much less."),
    h3("The Museo Egizio"),
    p("Founded in 1824, the Museo Egizio holds one of the most important collections of ancient Egyptian material outside Egypt: statues, coffins and mummies, papyri, everyday objects and whole tomb assemblages. According to the museum, **tickets are sold online only**, and it has shorter hours on Mondays. Allow at least two and a half to three hours. If you visit only one museum in Turin, most first-time visitors choose this one."),
    important("The Museo Egizio sells tickets only online, and busy days can sell out. Book your time slot as soon as your dates are fixed, and check the official site for extended openings and changes.", "Book the Egizio ahead"),
    h3("Piazza Castello, the Musei Reali and the Chapel of the Shroud"),
    p("Piazza Castello was the heart of the Savoy capital, framed by the Royal Palace, Palazzo Madama, the Royal Theatre and arcaded government buildings. The **Musei Reali** bring together the Royal Palace's state rooms, the Royal Armoury, the Galleria Sabauda picture gallery, the Museum of Antiquities with the remains of a Roman theatre, and the royal gardens. The single route also includes Guarino Guarini's **Chapel of the Shroud**, with its dizzying dome, restored after a fire in 1997. According to the Musei Reali, they are **closed on Wednesdays**; individual visitors can buy tickets at the museum or online, and online purchase avoids queues. The ticket is valid all day. Allow three hours or more."),
    h3("Palazzo Madama"),
    p("In the middle of Piazza Castello, Palazzo Madama shows Turin's history in one building: a Roman gate, a medieval castle and an 18th-century façade and grand staircase by Filippo Juvarra. It houses the city's museum of ancient art. Listings indicate it's usually closed on Tuesdays; check before you go. Allow one and a half to two hours."),
    {
      type: "image",
      src: `${IMG}/palazzo-madama-piazza-castello.webp`,
      alt: "The Baroque stone façade of Palazzo Madama in Piazza Castello, Turin, with statues along the roofline",
      caption: "Palazzo Madama and Filippo Juvarra's façade on Piazza Castello.",
      credit: unsplash("Riccardo Tuninato", "tuna96"),
    },
    h3("Turin Cathedral"),
    p("Behind the Royal Palace, the Renaissance Cathedral of San Giovanni Battista is connected to the Chapel of the Shroud. The Shroud of Turin is kept here but shown to the public only during rare exhibitions announced in advance. The cathedral itself is a short visit of 15–20 minutes."),
    h3("Via Roma, Piazza San Carlo and the arcades"),
    p("Via Roma runs south from Piazza Castello to Porta Nuova station, lined with arcades and shops. Halfway along, **Piazza San Carlo** is one of Turin's grandest squares, with the twin churches of Santa Cristina and San Carlo at one end and historic cafés under the porticoes. Off Via Roma and Piazza Castello, glass-roofed 19th- and 20th-century galleries — the **Galleria Subalpina** and the **Galleria San Federico** — are worth a detour."),
    {
      type: "image",
      src: `${IMG}/piazza-san-carlo-evening.webp`,
      alt: "Piazza San Carlo in Turin at dusk, with the twin Baroque churches lit up and people crossing the square",
      caption: "The twin churches of Santa Cristina and San Carlo on Piazza San Carlo.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },
    {
      type: "image",
      src: `${IMG}/via-roma-arcades.webp`,
      alt: "The arcades of Via Roma in Turin on both sides of the street, looking towards the churches of Piazza San Carlo at sunset",
      caption: "Via Roma's arcades, looking towards Piazza San Carlo.",
      credit: unsplash("Wendy Dekker", "wendydekker"),
    },
    h3("Porta Palazzo"),
    p("North of the centre, Piazza della Repubblica holds Porta Palazzo, a very large open-air market with fruit and vegetable stalls, covered halls for meat, fish and cheese, and a busy mix of local shoppers. It's at its liveliest in the morning, and a good contrast to the formal centre. Allow an hour."),
    h3("The Parco del Valentino and the Valentino Castle"),
    p("South of the centre along the Po, the Valentino is Turin's main park. The **Valentino Castle**, a Savoy residence now used by the Politecnico's architecture faculty, is part of the UNESCO site; the **Borgo Medievale** nearby is a reconstruction of a medieval village built for an exhibition in 1884. The park is ideal for a walk or a bike ride."),
    {
      type: "image",
      src: `${IMG}/castello-del-valentino-po.webp`,
      alt: "The Valentino Castle seen across the River Po in Turin, with a kayaker on the water in front",
      caption: "The Valentino Castle on the Po, part of the UNESCO Savoy residences.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },
    h3("The Basilica of Superga"),
    p("On a hill east of the city, Juvarra's 18th-century basilica holds the tombs of many members of the House of Savoy and looks out over Turin to the Alps. Behind it is a memorial to the Grande Torino football team, killed when their plane crashed into the hill in 1949. You can reach it by the historic **Sassi–Superga rack tramway**, which GTT reopened in April 2026 after maintenance; according to GTT it doesn't run on Wednesdays, so check the timetable. Allow half a day including the journey."),
    {
      type: "image",
      src: `${IMG}/basilica-di-superga.webp`,
      alt: "The Basilica of Superga with its dome and two bell towers on a wooded hilltop above Turin",
      caption: "The Basilica of Superga on its hill east of the city.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },

    // ——— 6 ———
    h2("Royal and Baroque Turin"),
    p("According to UNESCO, when Duke Emmanuel Philibert of Savoy moved his capital to Turin in 1562, he began a building programme that his successors continued for two centuries. Its centre was the \"Command Area\" around Piazza Castello, with the Royal Palace, Palazzo Madama and the state offices; from there, straight avenues radiated out to a ring of country residences and hunting lodges."),
    p("Architects such as Guarino Guarini and Filippo Juvarra gave the city its Baroque character: planned streets, uniform façades, arcaded squares and churches with complex domes. In 1997, UNESCO listed the **Residences of the Royal House of Savoy**: 22 palaces and villas, 11 in the centre of Turin and 11 around it, including the Royal Palace, Palazzo Madama, the Valentino Castle, the Reggia di Venaria, the Palazzina di Caccia di Stupinigi and the Castle of Rivoli."),
    p("The Savoy went on to become Italy's royal family, and Turin was the capital of the Kingdom of Italy from 1861 until the capital moved to Florence in 1865. That history explains why the city feels more like a planned European capital than a medieval Italian town."),

    // ——— 7 ———
    h2("Turin's museums"),
    table(
      ["Museum", "Best for", "Approx. time", "Booking considerations"],
      [
        ["Museo Egizio", "Ancient Egypt", "2½–3 hours", "Tickets online only; shorter hours on Mondays"],
        ["Museo Nazionale del Cinema (Mole)", "Cinema history and the panoramic lift", "2–3 hours", "Closed Tuesdays; buy online to avoid queues"],
        ["Musei Reali", "Royal apartments, armoury, paintings, antiquities", "3 hours or more", "Closed Wednesdays; online tickets avoid queues"],
        ["Palazzo Madama", "Medieval and Renaissance art in a layered building", "1½–2 hours", "Usually closed Tuesdays; check"],
        ["Museo Nazionale dell'Automobile (MAUTO)", "Car design and industrial history", "About 2 hours", "South of the centre; check opening days"],
        ["Juventus Museum and Allianz Stadium", "Football fans", "About 2 hours with the tour", "Stadium tours have limited places and must be bought online; match days differ"],
      ],
      "Choosing Turin's museums"
    ),
    p("With limited time, don't try to see them all. Choose by interest: the **Egizio** for ancient history, the **Mole** for the building and the view (and for film), the **Musei Reali** for Savoy Turin. Two major museums in a day is plenty; three is tiring."),
    p("Among other museums, the Lingotto area has the former Fiat factory with its rooftop test track, and the Castello di Rivoli, west of the city, is a contemporary art museum in a Savoy residence."),

    // ——— 8 ———
    h2("Cafés, chocolate and food"),
    p("Turin's food is part of Piedmontese cooking, one of Italy's richest regional cuisines, but a few things are specifically Turinese. It helps to know which is which."),
    h3("Strongly associated with Turin"),
    ul(
      "**Bicerin** — a layered drink of coffee, chocolate and milk cream served in a small glass; an 18th-century café tradition in Turin (more in [Italian coffee](/food/italian-coffee-culture)).",
      "**Gianduja and the gianduiotto** — gianduja is a smooth paste of chocolate and Piedmontese hazelnuts developed by Turin chocolatiers in the 19th century; the gianduiotto is the boat-shaped chocolate made from it (see [traditional Italian desserts](/food/traditional-italian-desserts)).",
      "**Vermouth** — aromatised wine flavoured with wormwood and herbs, produced in Turin since the late 18th century. *Vermouth di Torino* has been a protected geographical indication since 2017.",
      "**Grissini** — thin breadsticks, traditionally said to have originated in Turin.",
      "**Historic cafés** — many with 19th-century interiors, particularly around Piazza Castello, Piazza San Carlo and Via Po.",
    ),
    h3("Piedmontese cuisine"),
    ul(
      "**Agnolotti** — small filled pasta; the pinched *agnolotti del plin* are associated with the Langhe and Monferrato.",
      "**Tajarin** — fine, rich egg pasta from the Langhe, often served with butter and, in autumn, white truffle.",
      "**Vitello tonnato** — thin slices of veal with a tuna and caper sauce, served cold as a starter.",
      "**Bagna càuda** — a warm dip of garlic, anchovies and oil with vegetables, a shared autumn and winter dish from southern Piedmont.",
      "**Bollito misto** and **brasato al Barolo** — boiled meats with sauces, and beef braised in red wine.",
      "**Hazelnuts** — the *Nocciola Piemonte* hazelnut is used in chocolate, cakes and gelato.",
      "**Wine** — Barolo and Barbaresco from the Nebbiolo grape, Barbera, Dolcetto and Moscato d'Asti. See [our guide to Italian regional wines](/food/italian-regional-wines).",
      "**Bonet** — a chocolate and amaretti pudding.",
    ),
    p("Piedmontese menus are rich and built around several courses, often starting with a series of antipasti. Many trattorias serve set menus of local dishes; book for dinner at weekends. For how meals are structured across Italy, see [Italian food traditions](/food/italian-food-traditions)."),
    {
      type: "image",
      src: `${IMG}/turin-glass-roofed-arcade.webp`,
      alt: "A glass-roofed shopping arcade in central Turin with marble floors, ornate shopfronts and lamps",
      caption: "One of central Turin's glass-roofed shopping galleries.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 9 ———
    h2("Aperitivo in Turin"),
    p("Aperitivo is the early-evening drink before dinner, usually from about 18:00 to 20:00, and Turin has a strong claim to it through vermouth. Traditionally it means a vermouth, a Negroni or a spritz with a few snacks; many bars now serve larger buffets, sometimes called *apericena*, which can replace a light dinner. It isn't the same as dinner, though: if you want Piedmontese cooking, book a table afterwards."),
    ul(
      "Order at the bar or from your table; snacks usually come with the drink.",
      "Don't treat a buffet as an all-you-can-eat meal unless it's clearly offered as one.",
      "The Quadrilatero Romano, San Salvario and Vanchiglia are popular areas; the historic cafés of the centre are more formal.",
    ),
    {
      type: "image",
      src: `${IMG}/parco-del-valentino-cafe.webp`,
      alt: "People sitting at red tables at an outdoor café under the trees in the Parco del Valentino, Turin",
      caption: "An outdoor café in the Parco del Valentino.",
      credit: unsplash("Antonio Sessa", "antony_sex"),
    },

    // ——— 10 ———
    h2("Turin's neighbourhoods"),
    table(
      ["Area", "Location and character", "Useful for first-time visitors?", "Getting around"],
      [
        ["Centro", "Piazza Castello, Via Roma, Via Po, Via Garibaldi — museums, cafés, shops", "Yes — the easiest base", "Walk to most sights"],
        ["Quadrilatero Romano", "The old Roman grid north-west of Piazza Castello, with small squares, restaurants and bars", "Yes, especially for evenings", "Walk; near Porta Palazzo"],
        ["San Salvario", "South of Porta Nuova, multicultural, lively at night, next to the Valentino", "Yes, for food and nightlife; can be noisy", "Walk or metro from Porta Nuova"],
        ["Vanchiglia", "East of the centre near the Mole and the Po; student bars and restaurants", "Good for evenings", "Walk to the Mole and Via Po"],
        ["Crocetta", "Residential and elegant, south-west of the centre", "Quieter base", "Tram, bus or metro to the centre"],
        ["Borgo Po and Gran Madre", "Across the river below the hills", "For views and quieter evenings", "Walk across the Po bridges"],
        ["Aurora", "North of Porta Palazzo, a changing former industrial area", "Mainly for specific visits", "Tram and bus"],
        ["Porta Nuova / Porta Susa", "Around the two main stations", "Convenient for trains and the airport link", "Metro and trams"],
      ],
      "Turin's neighbourhoods"
    ),
    p("For a first visit, stay in the **Centro** or the **Quadrilatero Romano** to walk everywhere, or near **Porta Nuova** or **Porta Susa** if you have early trains or plan day trips. Check the exact street and noise levels in the livelier areas. Turin applies a tourist tax per person per night."),
    {
      type: "image",
      src: `${IMG}/porta-palatina.webp`,
      alt: "The Porta Palatina in Turin, a Roman brick gateway with two tall polygonal towers, beside green trees",
      caption: "The Porta Palatina, the Roman gate on the edge of the Quadrilatero Romano.",
      credit: unsplash("Chelaxy Designs", "chelaxydp"),
    },

    // ——— 11 ———
    h2("Turin in one day"),
    steps(
      ["Morning: Museo Egizio", "Start at the Museo Egizio with a booked morning slot; allow two and a half to three hours."],
      ["Lunch near Piazza Carignano", "Eat nearby, then walk to Piazza Castello to see Palazzo Madama and the Royal Palace from outside."],
      ["Early afternoon: Via Roma and Piazza San Carlo", "Walk under the arcades, detour through the Galleria Subalpina and stop for a bicerin or coffee."],
      ["Late afternoon: the Mole", "Walk along Via Po to the Mole and take the panoramic lift (not on Tuesdays)."],
      ["Evening: aperitivo and dinner", "Aperitivo in the Quadrilatero Romano or Vanchiglia, then a Piedmontese dinner."],
    ),
    tip("On a Tuesday, when the Mole is closed, swap it for the Musei Reali — but remember they close on Wednesdays.", "Plan around closing days"),

    // ——— 12 ———
    h2("Turin in two days"),
    p("Use day one above, then:"),
    steps(
      ["Morning: Musei Reali", "The Royal Palace, the Chapel of the Shroud, the Armoury and the Galleria Sabauda; take a break in the royal gardens."],
      ["Lunch in the Quadrilatero Romano", "Then walk to Porta Palazzo and past the Porta Palatina."],
      ["Afternoon: the Mole or Palazzo Madama", "Whichever you didn't see on day one, or a slow café stop."],
      ["Evening: across the Po or San Salvario", "Walk to the Gran Madre and the river at sunset, then dinner in San Salvario or Vanchiglia."],
    ),

    // ——— 13 ———
    h2("Turin in three days"),
    p("Keep the third day for Turin itself or a nearby royal residence — you don't have to leave the city:"),
    steps(
      ["Morning: Superga", "Take the Sassi–Superga rack tramway (it doesn't run on Wednesdays; check the timetable) for the basilica and the view."],
      ["Afternoon: the Valentino", "Walk in the Parco del Valentino, see the castle and the Borgo Medievale, and have aperitivo in San Salvario."],
      ["Alternatives", "The Reggia di Venaria, north of the city; the National Automobile Museum and Lingotto; or the Juventus Museum and stadium tour."],
    ),

    // ——— 14 ———
    h2("Getting around Turin"),
    p("The centre is flat and laid out on a grid, and the arcades make walking comfortable in rain or sun. You'll mostly need public transport for the stations, Lingotto, the Valentino's southern end, Superga and the stadium."),
    p("**GTT** runs Turin's trams, buses and **metro line 1**, which links Porta Susa, Porta Nuova and Lingotto. According to GTT, you can pay with a contactless bank card or phone (Tap&Go) at all metro gates and on buses and trams marked with a yellow sticker by the front door; this buys a standard urban ticket valid for 100 minutes, with one metro ride. Tickets are also sold at newsagents, machines and in GTT's app. **Taxis** can be found at ranks or booked by phone or app. Turin has a network of cycle lanes along the river and in the parks."),
    p("The central limited traffic zone (ZTL) is active on weekday mornings; it matters if you drive, not if you walk or use public transport."),

    // ——— 15 ———
    h2("Arriving in Turin"),
    h3("Torino Airport"),
    p("Torino Airport (Caselle) is north of the city. According to the airport, **trains** run seven days a week to **Porta Susa** in about half an hour, from a station opposite the arrivals area. **Arriva buses** run between the airport and the city centre, stopping at **Porta Nuova** and **Porta Susa**; you can pay on board with a contactless card. **Taxis** wait outside arrivals. Check current timetables before you fly."),
    h3("Porta Nuova"),
    p("Porta Nuova is the terminus at the southern end of Via Roma, a short walk from Piazza San Carlo and Piazza Castello. Many high-speed and regional trains use it, and it's on metro line 1."),
    h3("Porta Susa"),
    p("Porta Susa, west of the centre, is a through station on the high-speed line and a hub for regional and airport trains; it's also on the metro. Some high-speed trains stop only here or at both stations, so check your ticket."),
    p("High-speed trains link Turin with Milan in about 45 minutes to an hour, and with Bologna, Florence and Rome. For how tickets and trains work, read [Italy by train](/guides/italy-by-train), and for combining cities, [getting between Italian cities](/guides/getting-between-italian-cities)."),

    // ——— 16 ———
    h2("Turin as a base for Piedmont"),
    h3("Easy excursions from Turin"),
    table(
      ["Destination", "Why go", "How", "Time"],
      [
        ["Superga", "Basilica, royal tombs and views", "Tram to Sassi, then the rack tramway", "Half day"],
        ["Reggia di Venaria", "A vast Savoy palace and gardens (UNESCO)", "Train or bus; about 10 km from the city", "Half to full day; open Tuesday to Sunday"],
        ["Palazzina di Caccia di Stupinigi", "A Juvarra hunting lodge (UNESCO)", "Bus or taxi", "Half day"],
        ["Asti", "A historic town and Moscato and Barbera wines", "Regional train", "Half to full day"],
      ],
      "Easy excursions from Turin"
    ),
    h3("Better with a car or a dedicated trip"),
    table(
      ["Destination", "Why go", "Practical notes"],
      [
        ["Alba", "Truffles, food and wine in the Langhe", "Regional trains reach Alba itself; the villages around it need a car or tour"],
        ["The Langhe (Barolo, La Morra, Barbaresco)", "Vineyards listed by UNESCO in 2014, wineries and hill villages", "Best with a car, a driver or a tour; stay overnight if you can"],
        ["Sacra di San Michele", "A hilltop abbey above the Susa Valley", "Train to the valley then a steep walk, or drive"],
        ["Aosta and the Alps", "Roman remains and mountain scenery", "Regional trains; a long day, better overnight"],
      ],
      "Piedmont trips that need more planning"
    ),
    p("The Langhe-Roero and Monferrato vineyard landscapes are best explored slowly. If you're planning a road trip, read [driving in Italy](/guides/driving-in-italy) for rules on ZTLs and country roads. Lake Como is more easily reached from Milan; see [a weekend at Lake Como](/travel/lake-como-weekend)."),

    // ——— 17 ———
    h2("When to visit Turin"),
    ul(
      "**Spring (April–June)** — good for walking and gardens; clear days show the Alps behind the city.",
      "**Summer (July–August)** — hot and sometimes humid; the arcades and parks help, and some restaurants close for part of August.",
      "**Autumn (September–November)** — harvest and truffle season in Piedmont, ideal for combining Turin with the Langhe.",
      "**Winter (December–February)** — cold and often foggy, but a good city-break season for museums and cafés. In recent years, light installations have decorated the streets over the Christmas period.",
    ),
    p("Turin works as a city break all year because its main attractions are indoors. Major trade fairs and events can fill hotels, so check dates before booking. For comparisons with the rest of Italy, see [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 18 ———
    h2("Turin for different travellers"),
    ul(
      "**First-time visitors to Italy** — Turin pairs well with Milan and the lakes, or as the start of a northern route by train.",
      "**Couples** — stay in the Centro, walk along the Po at sunset, and linger over aperitivo and a long Piedmontese dinner.",
      "**Families** — the Mole's lift and cinema museum, the Egizio and the Valentino park suit children; the Juventus Museum appeals to young football fans.",
      "**Museum lovers** — three days lets you see the Egizio, the Musei Reali, the Mole and Palazzo Madama without rushing.",
      "**Food travellers** — combine historic cafés and aperitivo with Porta Palazzo, a trattoria dinner and a day in the Langhe.",
      "**Architecture and history** — focus on the Savoy capital: Piazza Castello, Guarini's Chapel of the Shroud, Juvarra's Superga and the Reggia di Venaria.",
      "**Football and sports** — book the Juventus Museum and stadium tour online; check the match calendar, as tours change on match days.",
      "**Without a car** — you won't need one in the city, and Superga, Venaria and Asti are easy by public transport.",
      "**Combining Turin with Piedmont** — spend two or three days in Turin, then move to the Langhe with a car or tour.",
    ),

    // ——— 19 ———
    h2("Common first-time mistakes"),
    ol(
      "**Treating Turin as a quick stop.** It deserves at least one full day, ideally two or three.",
      "**Trying to see every museum.** Choose two or three that match your interests.",
      "**Not booking the Museo Egizio.** Its tickets are sold online only.",
      "**Ignoring closing days.** The Mole closes on Tuesdays and the Musei Reali on Wednesdays.",
      "**Confusing Piedmontese dishes with generic Italian food.** Agnolotti, tajarin and vitello tonnato are regional; bicerin and gianduiotti are Turin's own.",
      "**Assuming every Piedmont trip is easy by train.** Alba is, but the Langhe villages aren't.",
      "**Ignoring the city's geography.** Group the centre, the river and Superga sensibly rather than criss-crossing the city.",
      "**Seeing only the Mole.** The squares, arcades and cafés are as much a part of Turin.",
      "**Expecting the rhythm of Rome or Florence.** Turin is calmer and more residential, with fewer crowds and a different pace.",
    ),

    // ——— 20 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "turin-first-visit",
      groups: [
        {
          title: "Before booking",
          items: ["Choose where to stay: Centro, Quadrilatero or near a station", "Decide whether to add Piedmont", "Check trade-fair and event dates"],
        },
        {
          title: "Before departure",
          items: ["Book the Museo Egizio online", "Buy Mole tickets online and check the Tuesday closure", "Check the Musei Reali's Wednesday closure", "Check the airport train or bus"],
        },
        {
          title: "During the trip",
          items: ["Pack for weather: arcades help in rain, but winters are cold", "Plan a café stop and an aperitivo", "Check Superga tramway times (no service on Wednesdays)", "Keep one period flexible"],
        },
      ],
    },
    p("The ticketing rules, closing days and transport links in this guide were checked on official sites in September 2026. They can change: confirm them before you travel. For costs, see [how much a trip to Italy costs](/guides/italy-trip-cost); to build Turin into a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide), or combine it with [Milan beyond the Duomo](/cities/milan-beyond-the-duomo), [Bologna in two days](/cities/bologna-in-two-days) or [Florence for first-time visitors](/cities/florence-for-first-timers)."),
  ],

  faqs: [
    { question: "Is Turin worth visiting for the first time?", answer: "Yes, particularly for museums, royal and Baroque architecture, cafés and food. It's calmer than Rome, Florence or Venice and has a distinct character as the former Savoy capital." },
    { question: "How many days do you need in Turin?", answer: "Two to three days for a first visit: two for the centre and the main museums, three to add Superga, the Valentino or Venaria. Add more days for the Langhe." },
    { question: "Is Turin walkable?", answer: "Yes. The centre is flat, laid out on a grid and lined with arcades. Use trams, buses or the metro for the stations, Lingotto, Superga and the stadium." },
    { question: "What is Turin famous for?", answer: "The House of Savoy and its palaces, the Museo Egizio, the Mole Antonelliana and cinema museum, arcaded streets, historic cafés, gianduja chocolate, vermouth, Fiat and Juventus." },
    { question: "What should you not miss in Turin?", answer: "The Museo Egizio, the Mole Antonelliana, Piazza Castello and the Musei Reali, Piazza San Carlo and Via Roma, a bicerin in a historic café, and an evening aperitivo." },
    { question: "Is the Egyptian Museum worth visiting?", answer: "For most visitors, yes. It holds one of the most important collections of ancient Egyptian material outside Egypt. Allow two and a half to three hours, and buy tickets online, as that's the only way to buy them." },
    { question: "Do you need to book Turin museums in advance?", answer: "For the Museo Egizio, yes — tickets are sold online only. For the Mole and the Musei Reali, booking online is recommended to avoid queues. The Juventus stadium tour must be bought online." },
    { question: "What food is Turin famous for?", answer: "Bicerin, gianduja and gianduiotti, vermouth and grissini, along with Piedmontese dishes such as agnolotti, tajarin, vitello tonnato and bagna càuda." },
    { question: "What is a bicerin?", answer: "A hot drink of coffee, chocolate and milk cream, layered in a small glass and traditionally drunk without stirring. It's been served in Turin's cafés since the 18th century." },
    { question: "Is Turin expensive compared with other Italian cities?", answer: "Costs vary with the season and events: hotel prices rise during major trade fairs and events. Many of the city's pleasures — the squares, arcades, churches, parks and river — are free, and museum passes and aperitivo help keep daily spending down." },
    { question: "Can you visit Turin without a car?", answer: "Yes. The centre is walkable, public transport covers the rest, and trains reach Asti, Alba and Venaria. A car only becomes useful in the Langhe villages." },
    { question: "What are the best day trips from Turin?", answer: "Superga and the Reggia di Venaria are easy by public transport; Asti is an easy train ride. The Langhe wine villages are best with a car, a driver or a tour." },
    { question: "Is Turin good for a weekend?", answer: "Yes. A weekend covers the Egizio, the Mole, the Musei Reali and the historic centre. Book museums online and check closing days before you go." },
    { question: "Can Turin be combined with Milan or other northern Italian destinations?", answer: "Easily. High-speed trains reach Milan in about 45 minutes to an hour, with direct services to Bologna, Florence and Rome, so Turin fits well at the start or end of a northern itinerary." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Museo Egizio", url: "https://www.museoegizio.it/en/", note: "online tickets and opening hours" },
    { label: "Museo Nazionale del Cinema — Mole Antonelliana", url: "https://www.museocinema.it/en/opening-hours-museo-nazionale-del-cinema", note: "opening hours and the panoramic lift" },
    { label: "Musei Reali Torino", url: "https://museireali.beniculturali.it/en/", note: "opening, tickets and route" },
    { label: "Palazzo Madama", url: "https://www.palazzomadamatorino.it/en/", note: "opening and exhibitions" },
    { label: "La Venaria Reale", url: "https://lavenaria.it/en/visit", note: "opening and getting there" },
    { label: "UNESCO — Residences of the Royal House of Savoy", url: "https://whc.unesco.org/en/list/823/", note: "World Heritage listing" },
    { label: "GTT — Tap&Go", url: "https://www.gtt.to.it/cms/index.php?option=com_content&view=article&id=8456&catid=14", note: "contactless payment on public transport" },
    { label: "GTT — Sassi–Superga rack tramway", url: "https://www.gtt.to.it/cms/turismo/sassisup", note: "timetable and closures" },
    { label: "Torino Airport — by train", url: "https://www.aeroportoditorino.it/it/tomove/trasporti-e-parcheggi/in-treno", note: "rail link to Porta Susa" },
    { label: "Arriva — Torino airport bus", url: "https://torino.arriva.it/en/airport-line-torino-city-center-torino-airport/", note: "bus to Porta Nuova and Porta Susa" },
    { label: "Juventus Museum and Stadium Tour", url: "https://www.juventus.com/en/tickets/museum-tour/juventus-museum-stadium-tour", note: "tickets and match-day changes" },
  ],
};
