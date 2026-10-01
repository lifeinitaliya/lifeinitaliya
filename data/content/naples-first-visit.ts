import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Naples for First-Time Visitors". Museum, archaeological-park
// and transport arrangements were checked on official sites in September 2026.
// Prices, timetables and opening hours are deliberately not quoted.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/naples-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const naplesFirstVisit: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Naples is Italy's third-largest city and one of its oldest. Its historic centre, a UNESCO World Heritage Site since 1995, still follows the street plan of the Greek city of Neapolis; its archaeological museum holds much of what was found at Pompeii and Herculaneum; and it's the birthplace of pizza as the world knows it. It's also the natural gateway to Pompeii, Herculaneum, Sorrento, Capri and the Amalfi Coast."),
    answer("**Naples suits a first trip to Italy** if you're interested in history, archaeology, food and cities with a strong character of their own. **Two to three days** covers the historic centre, a major museum and the waterfront; with four or five you can add Pompeii or Herculaneum and another day trip. **You don't need a car**: the centre is walkable, with metro lines, funiculars and regional trains for longer distances. Book the Sansevero Chapel ahead, check the archaeological parks' official sites before a day trip, and base yourself somewhere well connected to the metro or the station."),
    {
      type: "facts",
      title: "Naples at a glance",
      rows: [
        { label: "Recommended first visit", value: "2–3 days; 4–5 with day trips" },
        { label: "Best for", value: "History, archaeology, food, culture and day trips" },
        { label: "Main arrival points", value: "Napoli Centrale station and Naples International Airport (Capodichino)" },
        { label: "Getting around", value: "Walking, plus metro, funiculars and buses" },
        { label: "Car needed?", value: "Usually not for a city stay" },
        { label: "Major nearby destination", value: "Pompeii, reached by regional train" },
        { label: "Good longer-trip combinations", value: "Pompeii, Herculaneum, Sorrento, the Amalfi Coast, Capri, Caserta" },
        { label: "Emergency number", value: "112" },
      ],
    },

    // ——— 1 ———
    h2("Is Naples worth visiting?"),
    p("For many travellers, yes. Naples' strengths are distinctive:"),
    ul(
      "**The historic centre** — a dense grid of streets, churches, cloisters and palaces laid out on the lines of the ancient city.",
      "**Archaeology** — the Museo Archeologico Nazionale is one of the world's great collections of Roman art, and Pompeii and Herculaneum are close by.",
      "**Art and architecture** — from medieval churches to the Baroque, including the Sansevero Chapel and the Capodimonte museum.",
      "**Food** — pizza, pastries, coffee and a strong home-cooking tradition.",
      "**The waterfront** — the seafront promenade and views across the bay to Vesuvius.",
      "**Its location** — a practical base for Campania's major sites.",
    ),
    p("It's a large, busy working city rather than a compact museum town, and it's hilly in places. Travellers who prefer quiet streets, a small historic centre or a mainly relaxing seaside stay may find another base suits them better — Sorrento, for example, for a slower trip around the bay."),
    {
      type: "image",
      src: `${IMG}/naples-historic-centre-rooftops.webp`,
      alt: "The historic centre of Naples seen from above, with the long straight street of Spaccanapoli running through it",
      caption: "The historic centre from the hills. The straight line through the middle is Spaccanapoli, following the route of an ancient street.",
      credit: unsplash("Gherardo Sava", "gherardo_sava"),
    },

    // ——— 2 ———
    h2("How many days do you need in Naples?"),
    table(
      ["Trip length", "What it allows", "Trade-offs"],
      [
        ["1 day", "The core historic centre, one major sight and a pizza", "No time for the archaeological museum and the waterfront as well"],
        ["2 days", "The major sights, food and time in more than one neighbourhood", "Pompeii would take one of the two days"],
        ["3 days", "Naples plus the archaeological museum and a slower pace, or one day trip", "Usually the most balanced first visit"],
        ["4–5 days", "Naples plus Pompeii or Herculaneum and one more nearby destination", "Choose between Capri, Sorrento and the Amalfi Coast rather than doing all three"],
      ],
      "How long to stay in Naples"
    ),
    p("Naples rewards time. Its sights are close together, but the streets are busy and many churches and museums close at midday or on set days, so a slower plan usually sees more. Day trips take a full day each, so count them separately from your Naples days."),

    // ——— 3 ———
    h2("The best things to see in Naples"),
    p("Ticket prices and opening hours change, and some sites close on fixed weekdays; check the official website before you go."),
    h3("Spaccanapoli and the historic centre"),
    p("Spaccanapoli — \"Naples-splitter\" — is the popular name for the long straight street (Via Benedetto Croce and Via San Biagio dei Librai) that runs through the historic centre along the line of an ancient street. Walking it, and the parallel Via dei Tribunali, is the best introduction to the city: churches, palaces, workshops and food shops line the way. Allow half a day. Free, and suited to everyone."),
    h3("Via dei Tribunali and San Gregorio Armeno"),
    p("Via dei Tribunali, the other main street of the ancient grid, is known for its churches and pizzerias. Just off it, Via San Gregorio Armeno is lined with workshops making figures for Nativity scenes (presepi), a Neapolitan craft tradition. Busy all year and especially around Christmas."),
    h3("Naples Cathedral"),
    p("The cathedral is dedicated to San Gennaro, the city's patron saint, whose chapel is one of Naples' most important religious sites; the Treasure of San Gennaro is displayed in a museum alongside. Allow about an hour. Of particular interest to visitors interested in religious history and Baroque art."),
    h3("Santa Chiara"),
    p("The monastic complex of Santa Chiara is known for its cloister decorated with majolica tiles, a quiet space in the middle of the centre. The church is free; the cloister and museum are ticketed. Allow about an hour."),
    h3("Sansevero Chapel"),
    p("This small chapel holds Giuseppe Sanmartino's Veiled Christ, an 18th-century marble in which the figure appears to lie beneath a transparent veil. According to the museum, capacity is limited, advance booking on its official website is strongly recommended, and tickets can't be changed or refunded; late arrivals may lose their slot. The visit itself is short — about 30–45 minutes. Book early, especially at weekends."),
    h3("Piazza del Plebiscito, the Royal Palace and San Carlo"),
    p("Piazza del Plebiscito, one of the city's largest squares, is framed by the church of San Francesco di Paola and the Royal Palace (Palazzo Reale), which is open as a museum. Beside it, the Teatro di San Carlo, opened in 1737, offers guided tours as well as performances; check its official website. Allow one to two hours for the area, more with the palace."),
    {
      type: "image",
      src: `${IMG}/piazza-del-plebiscito.webp`,
      alt: "Piazza del Plebiscito in Naples with the colonnade and dome of the church of San Francesco di Paola",
      caption: "Piazza del Plebiscito and San Francesco di Paola. The Royal Palace stands on the opposite side of the square.",
      credit: unsplash("Christos Christou", "ochristosdemeneipiaedw"),
    },
    h3("Galleria Umberto I"),
    p("A glass-roofed shopping arcade from the late 19th century, opposite the Teatro di San Carlo. It takes a few minutes to walk through and is free. Good for architecture lovers and for a coffee break between the historic centre and the waterfront."),
    {
      type: "image",
      src: `${IMG}/galleria-umberto-i.webp`,
      alt: "The glass and iron dome of the Galleria Umberto I shopping arcade in Naples",
      caption: "The Galleria Umberto I, opposite the Teatro di San Carlo.",
      credit: unsplash("Emma Harrisova", "emm_harri"),
    },
    h3("Castel Nuovo"),
    p("The medieval castle on Piazza Municipio, also known as the Maschio Angioino, houses the city's civic museum. Allow about an hour. It's close to the port for ferries."),
    h3("Castel dell'Ovo and the seafront"),
    p("Castel dell'Ovo sits on a small island linked to the seafront by a causeway, beside the Borgo Marinari. It was closed for restoration from 2023; a reopening has been announced, but the city's official page still listed it as closed when we checked in September 2026, so confirm access before you go. The seafront promenade (the lungomare along Via Partenope and Via Caracciolo) is one of the city's favourite walks, with views across the bay to Vesuvius. Best in the late afternoon."),
    {
      type: "image",
      src: `${IMG}/castel-dell-ovo-sunset.webp`,
      alt: "Castel dell'Ovo on the Naples seafront at sunset, seen across the water",
      caption: "Castel dell'Ovo on the seafront. The promenade nearby is one of the city's classic evening walks.",
      credit: unsplash("Brad Weaver", "bweaver"),
    },
    h3("Quartieri Spagnoli"),
    p("The Spanish Quarter, a grid of narrow streets laid out in the 16th century uphill from Via Toledo, is a residential neighbourhood that has become a popular place to walk, eat and see street art, including the well-known mural of Diego Maradona. Visit with the same everyday awareness as any busy city neighbourhood."),
    h3("The Vomero and its viewpoints"),
    p("The Vomero hill, reached by funicular or metro, has the city's classic views. Castel Sant'Elmo and the Certosa e Museo di San Martino, a former monastery with a museum, sit at the top; their terraces look over the historic centre, the bay and Vesuvius. Allow half a day."),
    h3("How to prioritise"),
    p("A practical planning aid rather than a ranking — adjust it to your interests."),
    table(
      ["Sight", "First-time priority", "Typical visit", "Book ahead?"],
      [
        ["Spaccanapoli and Via dei Tribunali", "High", "Half a day", "No"],
        ["Museo Archeologico Nazionale", "High", "2–3 hours", "Useful at busy times"],
        ["Sansevero Chapel", "High", "30–45 minutes", "Strongly recommended"],
        ["Naples Cathedral", "Medium", "About 1 hour", "No"],
        ["Santa Chiara cloister", "Medium", "About 1 hour", "Usually not"],
        ["Piazza del Plebiscito and Royal Palace", "Medium", "1–2 hours", "Usually not"],
        ["Seafront and Castel dell'Ovo area", "High", "1–2 hours", "No; check castle access"],
        ["Vomero viewpoints (Sant'Elmo, San Martino)", "Medium", "Half a day", "Usually not"],
        ["Pompeii (day trip)", "High", "Most of a day", "Yes — named, capped tickets"],
      ],
      "Planning priorities for a first visit"
    ),

    // ——— 4 ———
    h2("Naples in 1, 2 or 3 days"),
    p("These frameworks keep each day realistic. Check opening days first — some museums close on a fixed weekday."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "One day", title: "The historic centre", text: "**Morning:** Spaccanapoli and Santa Chiara. **Late morning:** the Sansevero Chapel (booked). **Lunch:** pizza on or near Via dei Tribunali. **Afternoon:** the cathedral and San Gregorio Armeno, then walk down to Piazza del Plebiscito. **Evening:** the seafront promenade." },
        { label: "Two days", title: "Add a museum and the waterfront", text: "Day 1 as the one-day plan. **Day 2:** the archaeological museum in the morning; the Vomero by funicular in the afternoon for the views; dinner in Chiaia or near the seafront." },
        { label: "Three days", title: "A slower pace or one day trip", text: "Days 1 and 2 as above. **Day 3:** Pompeii or Herculaneum by regional train, returning for a relaxed dinner — or stay in Naples for Capodimonte, the Royal Palace and the Quartieri Spagnoli." },
      ],
    },
    tip("Pompeii, the Amalfi Coast and Capri each take most of a day. On a short trip, choose one; trying to combine them with Naples in three days means spending most of your time in transit.", "One day trip at a time"),

    // ——— 5 ———
    h2("Where to stay in Naples"),
    p("The right area depends on how you'll arrive, what you want to be near and how much evening activity you like."),
    table(
      ["Area", "Good for", "Advantages", "Considerations"],
      [
        ["Centro Storico", "Sightseeing on foot", "Walk to Spaccanapoli, churches and pizzerias; metro nearby", "Busy, narrow streets; can be lively at night"],
        ["Around Via Toledo / Municipio", "A central base with good transport", "Metro lines, near Plebiscito and the port", "Busy shopping street"],
        ["Chiaia", "Shops, restaurants, the seafront", "Elegant streets, near the promenade and funiculars", "Further from the historic centre and the main station"],
        ["Santa Lucia", "Sea views and the waterfront", "Next to the promenade and Castel dell'Ovo", "Often pricier; a walk or ride to the centre"],
        ["Vomero", "A quieter, residential feel", "Viewpoints, shops; funicular and metro links", "Uphill from the centre; relies on public transport"],
        ["Quartieri Spagnoli", "Central, lively stays", "Near Via Toledo; many places to eat", "Narrow, steep streets; can be noisy"],
        ["Around Napoli Centrale", "Early trains and day trips", "Station, Circumvesuviana and airport bus close by", "Busy transport hub; less atmospheric"],
      ],
      "Choosing an area to stay"
    ),
    p("For a first visit, the Centro Storico or the area around Via Toledo and Municipio usually balances sightseeing and transport best. Whatever you choose, check the walking route from the nearest metro station, and whether the building has a lift."),

    // ——— 6 ———
    h2("Naples neighbourhoods"),
    table(
      ["Area", "Where", "Character", "Useful for"],
      [
        ["Centro Storico", "The historic grid between the station and Via Toledo", "Churches, cloisters, workshops, pizzerias", "The main sights on foot"],
        ["Toledo and Municipio", "Along Via Toledo down to the port", "Main shopping street, squares, public buildings", "Transport, Plebiscito, ferries"],
        ["Quartieri Spagnoli", "Uphill from Via Toledo", "Dense residential streets, street art, small restaurants", "Food and a central base"],
        ["Chiaia", "West of Plebiscito, near the sea", "Shops, cafés and restaurants", "Evenings and the seafront"],
        ["Santa Lucia and Borgo Marinari", "The seafront around Castel dell'Ovo", "Waterfront hotels and restaurants", "Promenade walks"],
        ["Vomero", "On the hill above the centre", "Residential, with viewpoints and museums", "Views and a calmer stay"],
      ],
      "Central Naples at a glance"
    ),

    // ——— 7 ———
    h2("Getting around Naples"),
    p("Naples is walkable in the centre, but it's built on hills: the Vomero and Posillipo sit well above the historic centre and the sea. Combine walking with public transport."),
    ul(
      "**Walking** — the best way to see the historic centre and the area between Via Toledo and the seafront.",
      "**Metro** — Line 1, run by ANM, links the central station area with the historic centre, Via Toledo, Municipio and the Vomero; several stations are decorated with contemporary art, Toledo being the best known. Line 6 runs from Municipio towards Mergellina, and Line 2 is a cross-city rail line run by Trenitalia.",
      "**Funiculars** — four funicular lines climb to the Vomero and Posillipo areas and save a steep walk.",
      "**Buses** — useful for the seafront and some hill areas, though slower in traffic.",
      "**Taxis** — use official taxis from ranks or booked by phone or app. Official taxis offer predetermined fares on some routes; ask before setting off.",
      "**Regional trains** — the Circumvesuviana (run by EAV) serves Herculaneum, Pompeii and Sorrento; other lines serve Pozzuoli and the Phlegraean Fields.",
      "**Ferries and hydrofoils** — from the port (Molo Beverello and Calata Porta di Massa) to Capri, Ischia, Procida, Sorrento and, in season, the Amalfi Coast.",
    ),
    p("Timetables and ticket rules change; check the operators' current information on the day. For island and coastal boats, see [ferries in Italy](/transport/ferries-in-italy)."),

    // ——— 8 ———
    h2("Naples Airport to the city"),
    p("Naples International Airport (Capodichino) is close to the city."),
    ul(
      "**Alibus** — the airport bus run by ANM links the airport with Piazza Garibaldi/Napoli Centrale and the port at Molo Beverello. According to ANM, the ride to the central station takes about 15 minutes, traffic permitting.",
      "**Taxi** — from the official rank. Check the current predetermined fares before you set off.",
      "**Private transfer** — useful for late arrivals, lots of luggage, or if you're heading straight to Sorrento or the Amalfi Coast.",
      "**Metro Line 1** — an airport station is being built on Line 1. Until trains serve it, check ANM for the current connection.",
    ),
    p("For other airports, see our guide to [Italian airport transfers](/guides/italy-airport-transfers)."),

    // ——— 9 ———
    h2("Naples by train"),
    p("Napoli Centrale, on Piazza Garibaldi, is the main station. High-speed trains run by Trenitalia (Frecciarossa) and Italo connect it directly with Rome, Florence, Bologna and Milan; some high-speed trains also call at Napoli Afragola, outside the city — check your ticket. Between Rome and Naples, the fastest high-speed trains take about an hour to an hour and a quarter; journeys from Florence and Milan take longer, so check the current timetable."),
    p("Beneath and beside the main station, you'll find metro lines 1 and 2 and the Circumvesuviana station for Herculaneum, Pompeii and Sorrento (Napoli Garibaldi, with the line's terminus at Porta Nolana nearby). For tickets, validation and station tips, read [how to travel around Italy by train](/guides/italy-by-train). If you're coming from Rome, see [Rome in three days](/guides/rome-in-three-days) for the other half of the trip."),

    // ——— 10 ———
    h2("Pompeii and Herculaneum"),
    p("Pompeii is the reason many travellers come to Naples. The Roman town buried by the eruption of Vesuvius in AD 79 is one of the most visited archaeological sites in the world, and the finds in Naples' archaeological museum complete the picture."),
    h3("Visiting Pompeii"),
    p("According to the Archaeological Park of Pompeii, tickets are nominal (issued in the visitor's name), there's a daily limit of 20,000 visitors, and timed entry slots apply from mid-March; the park's official seller is Vivaticket, and tickets are also sold at the entrances. Large bags aren't allowed. Allow at least half a day — many visitors spend most of the day — and bring water, a hat and comfortable shoes: the site is large, exposed and paved with uneven stone."),
    {
      type: "image",
      src: `${IMG}/pompeii-forum-vesuvius.webp`,
      alt: "The ruins of the Forum at Pompeii with Mount Vesuvius rising behind under a blue sky",
      caption: "The Forum at Pompeii with Vesuvius behind. The site is large and exposed: plan for heat in summer.",
      credit: unsplash("D Jonez", "cooljonez"),
    },
    important("Buy Pompeii tickets from the park's official channels. Because tickets carry the visitor's name and entries are capped each day, check availability for your date before you travel, especially in spring and summer.", "Tickets are named and capped"),
    h3("How to get there"),
    table(
      ["Option", "Advantages", "Considerations"],
      [
        ["Regional train (Circumvesuviana)", "Direct from central Naples to Pompei Scavi–Villa dei Misteri, near an entrance; inexpensive", "Trains can be crowded; check EAV's current timetable and service notices"],
        ["Campania Express (EAV)", "A tourist service on the same line with fewer stops", "Runs on its own schedule; check current dates and times with EAV"],
        ["Organised tour", "Transport and a guide in one; no planning", "Fixed timings; less flexibility"],
        ["Private transfer", "Door to door; easy to combine with Herculaneum or the coast", "The most expensive option; traffic can be heavy"],
        ["Rental car", "Flexibility for other stops", "Traffic, parking and city driving; rarely needed from Naples"],
      ],
      "Getting from Naples to Pompeii"
    ),
    p("Trenitalia's regional trains on the Naples–Salerno line also stop at Pompei station in the modern town, a walk from the Piazza Anfiteatro entrance."),
    h3("Herculaneum as an alternative"),
    p("Herculaneum (Ercolano), closer to Naples on the same Circumvesuviana line, is smaller than Pompeii and often less crowded. Buried differently in the same eruption, it preserves upper floors, wooden elements and colours to a remarkable degree. Two to three hours is usually enough, which makes it easier to combine with an afternoon in Naples. Check the [Herculaneum Archaeological Park's](https://ercolano.cultura.gov.it/) official site for current information."),

    // ——— 11 ———
    h2("Naples food"),
    p("Food is one of the main reasons to visit Naples, and much of the best is simple and inexpensive."),
    ul(
      "**Neapolitan pizza** — soft, with a puffy rim and a short, very hot bake. The art of the Neapolitan pizzaiuolo is on UNESCO's list of intangible cultural heritage. The Margherita and the marinara are the classics; our [guide to Neapolitan pizza](/food/neapolitan-pizza) covers its history and how to eat it.",
      "**Pizza fritta** — fried, filled pizza, a traditional street food.",
      "**Pizza a portafoglio** — a small pizza folded in four and eaten on the go.",
      "**Street food** — the cuoppo (a paper cone of fried snacks) and the frittatina di pasta (fried pasta bites).",
      "**Ragù napoletano** — a slow-cooked meat and tomato sauce, traditionally a Sunday dish; the Genovese, despite its name, is a Neapolitan onion and meat sauce.",
      "**Pasta** — dishes such as pasta e patate con la provola, and seafood pasta such as spaghetti alle vongole.",
      "**Seafood** — fish, clams and mussels from the bay, especially near the seafront.",
      "**Pastries** — the sfogliatella (riccia, with crisp layers, or frolla, with a soft shortcrust) and the rum-soaked babà.",
    ),
    {
      type: "image",
      src: `${IMG}/pizza-margherita.webp`,
      alt: "A Margherita pizza with tomato, mozzarella and fresh basil",
      caption: "A Margherita: tomato, mozzarella and basil.",
      credit: unsplash("Alfonso Scarpa", "lucidistortephoto"),
    },
    p("Practical notes: many pizzerias don't take bookings and queues form at popular places — arrive early or late; pizza is usually eaten whole, one per person, with a knife and fork; and some restaurants add a cover charge. For how Italian meals work in general, see [Italian food traditions you should know](/food/italian-food-traditions), and for pastries across the country, [traditional Italian desserts](/food/traditional-italian-desserts)."),
    h3("Coffee and café culture"),
    p("Coffee in Naples is usually an espresso drunk at the counter, often served with a glass of water. At many bars you pay at the till first and show the receipt to the barista; others let you pay after. Sitting at a table can cost more than standing. Morning is the time for a pastry with your coffee, and the tradition of the caffè sospeso — paying for an extra coffee for someone who can't afford one — is part of the city's coffee lore. Habits vary from bar to bar, so follow what others do. More in [how to order at an Italian bar](/food/italian-coffee-culture)."),

    // ——— 12 ———
    h2("Naples museums"),
    h3("Museo Archeologico Nazionale di Napoli (MANN)"),
    p("If you visit only one museum in Naples, for many travellers this is it. The MANN holds a large share of the frescoes, mosaics and objects found at Pompeii, Herculaneum and other sites around Vesuvius, the Farnese collection of classical sculpture, and the Secret Cabinet of erotic art from the excavations. Seeing it before or after Pompeii makes both visits richer: the sites give you the setting, the museum the detail. According to the museum, it's closed on Tuesdays; some rooms are temporarily closed during renovation works, and the celebrated Alexander Mosaic is off display while it's restored, with the restoration visible from observation points. Allow two to three hours. It's near the Museo metro station."),
    h3("Capodimonte"),
    p("The Museo e Real Bosco di Capodimonte, a former royal palace in a large park north of the centre, holds a major collection of Italian painting, including works by Caravaggio and Titian. Allow half a day with the park."),
    h3("Other museums"),
    p("The Royal Palace, the Certosa e Museo di San Martino on the Vomero, the Treasure of San Gennaro and the Castel Nuovo civic museum add depth for longer stays. Check each museum's opening days before you plan around it."),

    // ——— 13 ———
    h2("Day trips from Naples"),
    table(
      ["Destination", "Planning complexity", "Half or full day?", "Typical approach"],
      [
        ["Pompeii", "Moderate — tickets are named and capped", "Full day or a long half-day", "Circumvesuviana, tour or transfer"],
        ["Herculaneum", "Low", "Half day", "Circumvesuviana"],
        ["Sorrento", "Low", "Full day", "Circumvesuviana or ferry"],
        ["Amalfi Coast", "High", "Full day at least; better overnight", "Seasonal ferries, buses or a driver"],
        ["Capri", "Moderate", "Full day", "Ferry or hydrofoil from the port; weather dependent"],
        ["Caserta", "Low", "Half to full day", "Regional train to Caserta for the Royal Palace (Reggia)"],
        ["Procida or Ischia", "Moderate", "Full day", "Ferry or hydrofoil"],
      ],
      "Day trips from Naples"
    ),
    p("The Amalfi Coast in particular is better as an overnight stay than a day trip from Naples; boat services to the islands and the coast are more frequent in summer and can be cancelled in rough seas — see [ferries in Italy](/transport/ferries-in-italy)."),

    // ——— 14 ———
    h2("Best time to visit Naples"),
    ul(
      "**Spring (April–June)** — comfortable for walking the city and the archaeological sites, and the start of the boat season to the islands and the coast. Easter and long weekends are busy.",
      "**Summer (July–August)** — hot, particularly at Pompeii and Herculaneum, where there's little shade. Visit sites early, and expect the islands and the coast to be at their busiest.",
      "**Autumn (September–October)** — often the most comfortable season, with warm days, the sea still warm and demand easing. October and November are, on long-term averages, among the wettest months in Naples.",
      "**Winter (November–March)** — mild compared with northern Italy and quieter at the sites, but with shorter days, reduced ferry services and closures on the coast. Christmas brings crowds to San Gregorio Armeno.",
    ),
    p("For how Naples compares with the rest of Italy through the year, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 15 ———
    h2("Naples without a car"),
    p("Visitors staying in Naples generally don't need a car. The city's traffic is heavy, parking is scarce, and much of the centre is best on foot. Public transport covers what you need: the metro and funiculars within the city, the Circumvesuviana to Herculaneum, Pompeii and Sorrento, regional trains to Caserta and the Phlegraean Fields, and ferries to the islands. Taxis fill the gaps."),
    p("A car becomes useful if you're touring inland Campania, staying in the countryside or combining several less-connected places. Even then, many travellers pick it up when they leave Naples rather than using it in the city."),
    h3("Driving in Naples and Campania"),
    p("City traffic, parking and restricted traffic zones make driving in central Naples demanding. Coastal roads such as the Amalfi Coast road are narrow and winding, with seasonal traffic restrictions. Before hiring a car, read [driving in Italy](/guides/driving-in-italy), which covers ZTLs, tolls and the Amalfi Coast's alternate number-plate scheme."),

    // ——— 16 ———
    h2("Staying safe and aware"),
    p("Naples calls for the same everyday precautions as any large city:"),
    ul(
      "Keep valuables secure and out of sight, and carry bags in front of you in crowded places and on busy public transport.",
      "Use official taxis and licensed transport.",
      "Check where your accommodation is and how you'll get there, especially if you arrive late.",
      "Keep copies of documents and carry only what you need.",
      "Avoid displaying expensive jewellery, phones or cameras unnecessarily.",
      "In an emergency, call 112.",
    ),
    p("Official travel advice for your country is the most reliable source for current guidance."),
    {
      type: "image",
      src: `${IMG}/naples-alley-evening.webp`,
      alt: "A narrow street in central Naples at night with string lights, balconies and restaurant signs",
      caption: "An evening street in central Naples. Many neighbourhoods are busiest after dark, when people go out to eat.",
      credit: unsplash("Stepan Loktionov", "swt13"),
    },

    // ——— 17 ———
    h2("Common first-time mistakes"),
    ol(
      "**Trying to see everything in one day.** Choose a few sights and walk between them.",
      "**Using a car unnecessarily.** Public transport and walking cover the city.",
      "**Ignoring booking requirements.** The Sansevero Chapel and Pompeii both have booking or ticket rules worth checking in advance.",
      "**Planning Pompeii without checking transport.** Check EAV's timetable and the park's official site the day before.",
      "**Staying far from useful transport.** A base near a metro station makes every day easier.",
      "**Underestimating hills and walking.** Use funiculars for the Vomero.",
      "**Assuming everything is open every day.** Several museums close on a fixed weekday.",
      "**Relying on outdated transport information.** Services and timetables change; use operators' current sites.",
      "**Packing in too many day trips.** One or two is realistic for a short stay.",
      "**Skipping the local food.** Leave time for pizza, pastries and coffee.",
    ),

    // ——— 18 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "naples-first-visit",
      groups: [
        {
          title: "Before booking",
          items: ["Choose an area to stay", "Decide on trip length", "Decide which day trips you want", "Check how you'll arrive: train or plane"],
        },
        {
          title: "Before departure",
          items: ["Book the Sansevero Chapel", "Buy Pompeii tickets from the official seller", "Check museum closing days", "Save official transport links"],
        },
        {
          title: "During the trip",
          items: ["Check transport notices on the day", "Allow buffer time for trains and boats", "Keep the plan flexible", "Leave time for meals"],
        },
      ],
    },
    p("Museum, archaeological-park and transport arrangements in this guide were checked on official websites in September 2026. Prices, timetables and opening hours change; confirm them before you go. For Naples within a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Is Naples worth visiting for the first time?", answer: "Yes, especially if you're interested in history, archaeology and food. It has a UNESCO-listed historic centre, one of the world's great archaeological museums and easy access to Pompeii and Herculaneum." },
    { question: "How many days do you need in Naples?", answer: "Two to three days for the city itself — the historic centre, the archaeological museum and the waterfront. Add a day for each trip to Pompeii, Herculaneum, Capri or the Amalfi Coast." },
    { question: "Is Naples walkable?", answer: "The historic centre and the area down to the seafront are walkable. The city is hilly, so use the funiculars or the metro to reach the Vomero and other higher districts." },
    { question: "Where should first-time visitors stay in Naples?", answer: "The Centro Storico or the area around Via Toledo and Municipio usually balances sightseeing and transport best. Chiaia and Santa Lucia suit visitors who want the seafront; the area around Napoli Centrale suits early trains and day trips." },
    { question: "Is Naples safe for tourists?", answer: "Take the same precautions as in any large city: keep valuables secure, be aware in crowds and on public transport, and use official taxis. Check your government's official travel advice for current guidance." },
    { question: "Do you need a car in Naples?", answer: "No. Traffic and parking make driving in the city hard, and the metro, funiculars, regional trains and ferries cover the city and its main day trips." },
    { question: "How do you get from Naples Airport to the city?", answer: "The Alibus airport bus run by ANM goes to Piazza Garibaldi/Napoli Centrale and the port; ANM gives about 15 minutes to the station. Official taxis and private transfers are the alternatives." },
    { question: "Can you visit Pompeii from Naples?", answer: "Yes. The Circumvesuviana regional train runs from central Naples to Pompei Scavi–Villa dei Misteri, near an entrance. Tours and private transfers are alternatives. Tickets are nominal and capped at 20,000 a day, so buy them from the official seller." },
    { question: "How far is Pompeii from Naples?", answer: "Pompeii lies south-east of Naples, along the Circumvesuviana line towards Sorrento. Allow a full day for the round trip and the visit, and check the current timetable with EAV." },
    { question: "What food is Naples famous for?", answer: "Neapolitan pizza above all, plus pizza fritta, street food such as the cuoppo, ragù and Genovese sauces, seafood, and pastries such as the sfogliatella and babà — with espresso at the bar." },
    { question: "Is Naples good for a weekend?", answer: "Yes. A weekend covers the historic centre, a major museum or the Sansevero Chapel, the seafront and plenty of food. Pompeii would take one of the two days." },
    { question: "Can you visit the Amalfi Coast from Naples?", answer: "Yes, but it's a long day. Ferries run in season, and buses and drivers are alternatives. The coast is more enjoyable with at least one night there." },
    { question: "What should you not miss in Naples?", answer: "Spaccanapoli and the historic centre, the archaeological museum, the Sansevero Chapel, the seafront and a Neapolitan pizza. Add Pompeii or Herculaneum if you have an extra day." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Comune di Napoli", url: "https://www.comune.napoli.it/", note: "city information, including Castel dell'Ovo" },
    { label: "Museo Archeologico Nazionale di Napoli", url: "https://www.museoarcheologiconapoli.it/en/", note: "opening days and room closures" },
    { label: "Archaeological Park of Pompeii", url: "https://pompeiisites.org/en/", note: "tickets, time slots and visitor rules" },
    { label: "Archaeological Park of Herculaneum", url: "https://ercolano.cultura.gov.it/", note: "visiting information" },
    { label: "Museo Cappella Sansevero", url: "https://www.museosansevero.it/", note: "booking rules" },
    { label: "ANM — Alibus airport bus", url: "https://www.anm.it/index.php?option=com_content&task=view&id=2578&Itemid=373", note: "airport bus route" },
    { label: "Naples International Airport — by bus", url: "https://www.aeroportodinapoli.it/en/by-bus", note: "airport connections" },
    { label: "EAV — Circumvesuviana", url: "https://www.eavsrl.it/", note: "trains to Herculaneum, Pompeii and Sorrento" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/en.html", note: "high-speed and regional trains" },
    { label: "Italo", url: "https://www.italotreno.com/en", note: "high-speed trains" },
  ],
};
