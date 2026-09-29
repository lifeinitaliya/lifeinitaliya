import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Cornerstone guide: "The Complete Italy Travel Guide: How to Plan Your First Trip".
// Time-sensitive facts were checked against the sources listed at the end
// (September 2026). Re-check them whenever this guide is updated.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/complete-italy-travel-guide";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const completeItalyTravelGuide: ArticleContent = {
  body: [
    // ——— Introduction ———
    p("This guide is for anyone planning a first trip to Italy, usually somewhere between five days and two weeks. It works through the decisions in the order you'll need to make them: how long to go for, which places to combine, when to travel, what it's likely to cost, how to get between cities, where to stay and what to book before you leave."),
    p("By the end you should have a realistic route, a sense of your budget, and a short list of things to reserve. Where information changes often — prices, timetables, entry rules — we point you to the official source rather than quoting figures that may already be out of date."),
    answer("For most first trips, plan **7–14 days** with **two to four bases** linked by high-speed train. Rome, Florence and Venice is the classic combination. Book long-distance trains and timed-entry sights once your dates are fixed, and hire a car only for countryside days, not for cities."),
    {
      type: "facts",
      title: "Italy at a glance",
      rows: [
        { label: "Ideal first trip", value: "7–14 days, with 2–4 bases" },
        { label: "Best way between major cities", value: "High-speed train" },
        { label: "When a car helps", value: "Countryside, hill towns, much of the south and the islands" },
        { label: "Main international gateways", value: "Rome Fiumicino, Milan Malpensa and Venice Marco Polo, plus Naples, Bologna, Pisa, Catania and Palermo" },
        { label: "Currency", value: "Euro (€)" },
        { label: "Language", value: "Italian (German and French are also official in parts of the north)" },
        { label: "Time zone", value: "Central European Time (UTC+1); UTC+2 in summer" },
        { label: "Plugs and power", value: "Types C, F and L; 230 V, 50 Hz" },
        { label: "Emergency number", value: "112" },
        { label: "Driving", value: "On the right" },
      ],
    },

    // ——— 1. Planning process ———
    h2("How to plan your first trip to Italy"),
    p("Most planning problems come from making decisions in the wrong order — booking a hotel before knowing the route, or choosing six cities before counting the nights. This sequence avoids that."),
    {
      type: "steps",
      items: [
        { title: "Decide how many nights you have", text: "Count nights, not days. After a long-haul flight your arrival day is rarely productive, and your last day is usually shaped by getting to the airport." },
        { title: "Choose a travel style", text: "Cities and museums, food, coast, mountains or slow countryside. Each points to different regions and a different pace." },
        { title: "Select your bases", text: "Pick two to four places that match your style and sit reasonably close together. Everything else becomes a day trip or a future trip." },
        { title: "Build the route in one direction", text: "Arrange your bases so you travel in a line rather than doubling back. An 'open-jaw' flight — into one city, home from another — makes this easy." },
        { title: "Book major transport", text: "Flights first, then high-speed trains between bases. In summer, reserve ferries and hire cars early." },
        { title: "Reserve timed-entry sights", text: "Several of Italy's best-known sights sell timed tickets that run out. Book these as soon as your dates are firm." },
        { title: "Choose accommodation", text: "Prioritise location over room size. A well-placed hotel saves hours of daily travel." },
        { title: "Plan local transport", text: "Work out how you'll get from each airport or station to your accommodation, especially if you arrive late." },
        { title: "Prepare documents and payments", text: "Check entry requirements for your nationality, arrange insurance, and bring more than one way to pay." },
        { title: "Leave room for flexibility", text: "Keep at least one unplanned half-day per base for rest, bad weather or something you discover along the way." },
      ],
    },

    // ——— 2. How many days ———
    h2("How many days do you need in Italy?"),
    answer("A week is enough for two or three bases; ten to fourteen days lets you add a region with a slower pace. Allow **at least two nights in every place** you stay, and three or more in Rome."),
    table(
      ["Trip length", "What it can realistically cover", "Suggested bases"],
      [
        ["3–4 days", "One major city, possibly with a day trip", "1"],
        ["5–7 days", "Two destinations, or three if one is a short stop", "2–3"],
        ["8–10 days", "Several major cities, or cities plus countryside", "3"],
        ["11–14 days", "A broader route across two or three regions", "3–4"],
        ["2–3 weeks", "Deeper regional travel, including the south or an island", "4–5"],
      ],
      "A planning framework, not a rule"
    ),
    p("These are starting points. A slow traveller might spend ten days in Tuscany alone; someone focused on the big sights might cover four cities in the same time."),
    h3("Why fewer places usually means seeing more"),
    p("Every move between bases costs roughly half a day: checking out, getting to the station, the journey itself, finding your accommodation and waiting for check-in, which in many hotels is mid-afternoon. On a seven-night trip with four bases, three moves can quietly consume a day and a half — time that could have been spent in the places you came to see."),
    tip("Write your plan as nights per base (for example, Rome 3 · Florence 2 · Venice 2) before you book anything. If any base has one night, ask whether it could be a day trip instead."),

    // ——— 3. Where to go ———
    h2("Where should you go?"),
    answer("Rome, Florence and Venice are the most practical combination for a first trip because they're linked by fast, frequent trains and pack a lot into walkable centres. From there, add a region that matches your interests: the coast, the lakes, the countryside or the south."),
    p("There's no single best destination. The table below is meant to help you match places to what you enjoy and how you like to travel."),
    table(
      ["Destination", "Best for", "Suggested stay", "Travel style"],
      [
        ["Rome", "Ancient sites, the Vatican, churches, food", "3–4 nights", "Big city; walk plus metro and buses; national rail hub"],
        ["Florence", "Renaissance art and architecture in a compact centre", "2–3 nights", "Walkable city; base for Tuscan day trips by train or bus"],
        ["Venice", "Canals, lagoon islands, wandering", "2–3 nights", "Car-free; walking and water buses"],
        ["Milan", "The Last Supper, the Duomo, design, gateway to the lakes", "1–2 nights", "City; major rail and airport hub"],
        ["Naples", "Street life, pizza, the archaeological museum; base for Pompeii", "2–3 nights", "Lively city; regional trains to nearby sites"],
        ["Bologna", "Food, porticoes, a relaxed historic centre", "1–2 nights", "Easy stop between Florence and Venice or Milan"],
        ["Palermo", "Markets, Arab-Norman monuments, street food", "2–3 nights", "City; entry point for western Sicily"],
        ["Lake Como", "Lakeside villages and gardens", "2–3 nights", "Slow; train from Milan, then ferries"],
        ["Amalfi Coast", "Cliffside towns and sea views", "3–4 nights", "Coastal; ferries and buses in season; driving is stressful"],
        ["Tuscan countryside", "Hill towns, vineyards, landscapes", "3–5 nights", "Rural; a car makes it much easier"],
        ["Dolomites", "Hiking, cable cars, alpine scenery", "3–5 nights", "Mountains; seasonal buses and lifts; a car helps"],
        ["Puglia", "Whitewashed towns, trulli, two coastlines", "5–7 nights", "Road trip; a car is strongly recommended"],
        ["Sicily", "Palermo, Etna, Greek temples, baroque towns", "7+ nights", "Road trip; trains are limited outside the main lines"],
        ["Sardinia", "Beaches and clear water", "5–7 nights", "Beach trip; usually needs a car, plus a ferry or flight"],
        ["Matera", "The ancient cave districts of the Sassi", "1–2 nights", "Add-on from Puglia; by car or regional transport from Bari"],
      ],
      "Matching destinations to interests"
    ),
    p("For deeper planning on individual places, see our guides to [Florence for first-timers](/cities/florence-for-first-timers), [a first visit to Naples](/cities/naples-first-visit), [Bologna in two days](/cities/bologna-in-two-days), [Palermo's markets and monuments](/cities/palermo-markets-monuments), [a weekend on Lake Como](/travel/lake-como-weekend) and [the Dolomites](/guides/visiting-the-dolomites)."),
    {
      type: "image",
      src: `${IMG}/rome-piazza-navona.webp`,
      alt: "Piazza Navona in Rome, with its fountain and the dome of Sant'Agnese in Agone",
      caption: "Rome's Piazza Navona. Most first trips start or end in Rome, which has Italy's busiest airport and fast trains in every direction.",
      credit: unsplash("Marialaura Gionfriddo", "gionsnow"),
    },

    // ——— 4. Regions ———
    h2("Italy's regions and what they offer"),
    p("Italy has 20 regions, and they are genuinely different — in landscape, food, dialect and how easy they are to travel around. For planning purposes it helps to think of four broad areas."),
    ul(
      "**The north** — Milan, Venice, the lakes, the Alps and the Dolomites. The best-connected part of the country, with dense rail networks and major airports.",
      "**The centre** — Rome, Florence, Tuscany and Umbria. The heart of most first itineraries, with Rome and Florence linked by high-speed rail.",
      "**The south** — Naples, the Amalfi Coast, Puglia, Basilicata and Calabria. Rewarding and often less crowded, but distances are longer and a car becomes more useful.",
      "**The islands** — Sicily and Sardinia. Each deserves at least a week on its own, and usually a car."
    ),
    {
      type: "regionMap",
      caption: "A schematic view of Italy's regions, not a geographic map. Shading reflects our editorial judgement of how easily each region fits a first trip — based on rail connections and how closely its main sights are grouped — not how worthwhile it is to visit.",
    },
    table(
      ["Region", "Known for", "Good for a first trip?", "Typical trip style"],
      [
        ["Lazio", "Rome, Vatican City (a separate state) and Tivoli's villas", "Yes — the most common starting point", "City break with day trips"],
        ["Tuscany", "Florence, Siena, Pisa, Chianti and the Val d'Orcia", "Yes", "Cities, plus countryside by car"],
        ["Veneto", "Venice, Verona, Padua and the Dolomite foothills", "Yes", "City hopping by train"],
        ["Lombardy", "Milan, Lake Como and Bergamo", "Yes", "City plus lakes by train"],
        ["Campania", "Naples, Pompeii, Herculaneum, the Amalfi Coast and Capri", "Yes, with some planning", "City plus coast"],
        ["Liguria", "The Cinque Terre, Genoa and the Riviera", "Good — very busy in summer", "Coast by train"],
        ["Emilia-Romagna", "Bologna, Parma, Modena and Ravenna's mosaics", "Good — easy by rail", "Food-focused city stops"],
        ["Umbria", "Assisi, Perugia and Orvieto", "Good as an add-on", "Hill towns; a car helps"],
        ["Piedmont", "Turin, the Langhe wine hills and the Alps", "Good for a food or wine trip", "City plus wine country"],
        ["Trentino-Alto Adige / Südtirol", "The Dolomites, Bolzano and Trento", "Good for mountain trips", "Hiking or skiing; seasonal"],
        ["Sicily", "Palermo, Etna, Agrigento's temples and Syracuse", "Good with a week or more", "Island road trip"],
        ["Puglia", "Alberobello's trulli, Lecce and the Salento coast", "Good with a car", "Road trip"],
        ["Friuli Venezia Giulia", "Trieste, Udine and Roman Aquileia", "Better for a return trip", "Quiet cities and nature"],
        ["Aosta Valley", "Mont Blanc (Monte Bianco) and Gran Paradiso National Park", "Better for a return trip", "Mountains"],
        ["Marche", "Urbino, the Conero coast and hill towns", "Better for a return trip", "Slow travel by car"],
        ["Abruzzo", "National parks, mountain villages and the Adriatic coast", "Better for a return trip", "Nature by car"],
        ["Molise", "Small hill villages and very few crowds", "Better for a return trip", "Slow travel by car"],
        ["Basilicata", "Matera and the Maratea coast", "Matera works as an add-on from Puglia", "Short stay; car or bus"],
        ["Calabria", "Tropea, the Sila and Pollino mountains and a long coastline", "Better for a return trip", "Beach or road trip"],
        ["Sardinia", "Beaches, clear water and prehistoric nuraghi", "Better as a trip of its own", "Beach holiday by car"],
      ],
      "All 20 regions at a glance"
    ),

    // ——— 5. Itineraries ———
    h2("Sample itineraries for a first trip"),
    answer("Good first itineraries move in one direction, give each base at least two nights and use the train between cities. Fly into your first stop and home from your last."),
    p("Journey times below are approximate fastest high-speed times. Check current timetables with [Trenitalia](https://www.trenitalia.com/en.html) or [Italo](https://www.italotreno.com/en) when you book."),
    h3("5 days: Rome and Florence"),
    table(
      ["Nights", "Base", "Focus"],
      [
        ["2", "Rome", "Colosseum and Forum; Vatican Museums and St Peter's; the historic centre"],
        ["2", "Florence", "Duomo, Uffizi or Accademia; the Oltrarno; an evening view from Piazzale Michelangelo"],
      ]
    ),
    p("**Why it works:** Rome and Florence are about an hour and a half apart by high-speed train, so the one move barely dents your time. Two nights in Rome is tight — if you can find an extra night, give it to Rome. Fly into Rome and either fly home from Florence or Pisa, or take the train back to Rome for your flight."),
    h3("7 days: Venice, Florence and Rome"),
    table(
      ["Nights", "Base", "Focus"],
      [
        ["2", "Venice", "St Mark's area early or late; quieter districts such as Cannaregio and Castello; a lagoon island"],
        ["2", "Florence", "Major museums, the Duomo and the Oltrarno"],
        ["2–3", "Rome", "Ancient Rome, the Vatican and the centro storico"],
      ]
    ),
    p("**Why it works:** the route runs north to south with two train journeys of about two hours (Venice–Florence) and an hour and a half (Florence–Rome). Fly into Venice and home from Rome. This is the classic first trip because it covers three very different cities with almost no wasted travel."),
    h3("10 days: Venice, Florence, the Tuscan countryside and Rome"),
    table(
      ["Nights", "Base", "Focus"],
      [
        ["2", "Venice", "The city and a lagoon island"],
        ["2", "Florence", "Museums and architecture"],
        ["2", "Tuscan countryside (by car)", "Hill towns such as Siena, Pienza or Montepulciano; wine estates"],
        ["3", "Rome", "The main sights at a slower pace, plus a day trip"],
      ]
    ),
    p("**Why it works:** the extra days go to a slower rural stretch rather than more cities. Pick up a hire car as you leave Florence and drop it before you reach Rome — you don't want a car in either city. If you'd rather not drive, replace the countryside with day trips from Florence by train or bus to Siena or Lucca."),
    h3("14 days: Venice to the Amalfi Coast"),
    table(
      ["Nights", "Base", "Focus"],
      [
        ["2–3", "Venice", "The city at a slower pace"],
        ["3", "Florence", "The city, plus a day trip into Tuscany"],
        ["4", "Rome", "The main sights plus a slower day"],
        ["3–4", "Naples or the Amalfi Coast", "Pompeii or Herculaneum; coastal towns by ferry or bus"],
      ]
    ),
    p("**Why it works:** the high-speed line continues from Rome to Naples in around an hour and ten minutes, so the coast is an easy extension. Fly home from Naples to avoid backtracking. For a northern alternative, replace the south with Milan and Lake Como at the start of the trip."),
    {
      type: "image",
      src: `${IMG}/venice-grand-canal-gondolas-rialto.webp`,
      alt: "Gondolas moored on the Grand Canal near the Rialto Bridge in Venice at sunset",
      caption: "The Grand Canal near the Rialto Bridge. Staying at least one night in Venice lets you see the city after day visitors leave.",
      credit: unsplash("Rebe Adelaida", "rrebba"),
    },

    // ——— 6. When to visit ———
    h2("When to visit Italy"),
    answer("For a first trip centred on cities, **late April to June** and **September to October** usually offer the best balance of weather and crowds. Beach trips suit June to September, hiking in the Alps and Dolomites is at its best in summer, and skiing runs through winter."),
    p("The right time depends on what you want to do, how you cope with heat and crowds, and your budget. Weather also varies a lot from north to south at the same time of year."),
    h3("Spring"),
    p("Comfortable for walking in cities, with long days and green countryside. Easter and the national holidays of 25 April and 1 May bring domestic travellers and busier sights, so book around those dates early."),
    h3("Summer"),
    p("Peak season on the coast and islands. Cities can be very hot in July and August, and August is Italy's main holiday month: coastal areas fill up around Ferragosto on 15 August, while some city businesses close for part of the month. The mountains are at their best."),
    h3("Autumn"),
    p("September keeps summer warmth with thinning crowds. October brings the grape and olive harvests and truffle season in some areas, but rain becomes more frequent and some coastal and island services reduce as the season ends."),
    h3("Winter"),
    p("Cold in the north and the mountains, milder in the south but not beach weather. Cities are quieter apart from the Christmas period, and ski season runs in the Alps and Dolomites. Many coastal and island businesses close for the winter."),
    table(
      ["Month", "Weather character", "Crowds", "Advantages", "Things to consider"],
      [
        ["January", "Cold north, mild south", "Low (except ski resorts)", "Quiet museums; winter sales", "Short days; seasonal closures on the coast"],
        ["February", "Cold, often damp", "Low, except around Carnival", "Carnival in Venice and elsewhere", "Changeable weather"],
        ["March", "Warming, changeable", "Moderate; busy if Easter is early", "Spring begins; fewer crowds", "Easter dates move each year"],
        ["April", "Mild", "Rising; busy at Easter and 25 April", "Good walking weather", "Book holiday weekends early"],
        ["May", "Warm", "Busy", "Long days; gardens; coast season starts", "1 May holiday; school groups at major sites"],
        ["June", "Warm to hot", "Busy", "Long days; the sea warms up", "Heat builds, especially in the south"],
        ["July", "Hot", "Very busy on the coast", "Beach season; festivals; mountains", "Hot cities; higher prices"],
        ["August", "Hottest month", "Coasts and islands very busy", "Beaches and mountains", "Ferragosto (15 Aug); some city closures; peak prices"],
        ["September", "Warm", "Busy early, easing later", "Warm sea; harvest season begins", "Can still be hot early in the month"],
        ["October", "Mild, rainier later", "Moderate", "Harvests; fewer crowds", "Shorter days; coastal services wind down"],
        ["November", "Cool and often rainy", "Low", "Quiet cities; lower prices", "Seasonal closures on the coast and islands"],
        ["December", "Cold north, mild south", "Low until Christmas", "Christmas markets, especially in the north", "Holidays on 8, 25 and 26 December"],
      ],
      "Italy month by month"
    ),
    p("For a region-by-region breakdown, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),
    {
      type: "image",
      src: `${IMG}/val-dorcia-tuscany-countryside.webp`,
      alt: "Rolling green hills, olive groves and a farmhouse ringed by cypress trees near San Quirico d'Orcia in Tuscany",
      caption: "The Val d'Orcia near San Quirico d'Orcia. Spring and early autumn are the most comfortable seasons for the Tuscan countryside.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },

    // ——— 7. Cost ———
    h2("How much does a trip to Italy cost?"),
    answer("There's no reliable single daily figure. Your total depends mainly on **accommodation**, which is usually the largest cost, then **season** and **how much you move around**. Build your budget from real prices for your dates rather than from averages."),
    p("Prices vary widely between cities and seasons and change often, so this section focuses on what each level of spending typically buys and on the charges that catch people out."),
    table(
      ["Expense", "Budget traveller", "Mid-range traveller", "Higher-end traveller"],
      [
        ["Accommodation", "Hostels, simple B&Bs or guesthouses, often outside the centre", "Three-star hotels, central B&Bs or apartments", "Four- and five-star hotels in historic centres or with views"],
        ["Food", "Bakeries, markets, pizza by the slice, standing at the bar", "Trattoria meals and aperitivo", "Tasting menus and fine dining"],
        ["Local transport", "Walking, buses and metro", "Public transport plus the occasional taxi", "Taxis and private transfers"],
        ["Intercity transport", "Regional trains and early high-speed fares", "High-speed trains booked in advance", "Premium train classes or private drivers"],
        ["Attractions", "Free sights, churches, piazzas and free-entry days", "Main museums, booked ahead", "Guided and small-group tours"],
      ],
      "What each budget level typically looks like"
    ),
    h3("Charges that catch people out"),
    ul(
      "**Coperto** — a per-person cover charge that many restaurants add. It should be shown on the menu.",
      "**Tourist tax** (imposta di soggiorno) — most cities charge a per-person, per-night tax, often paid separately at your accommodation.",
      "**Access fees** — Venice charges day visitors an access fee on set dates (overnight guests are exempt but must register), and Rome introduced a ticket for the area closest to the Trevi Fountain in February 2026.",
      "**Traffic fines** — driving into a restricted traffic zone (ZTL) can bring a fine months after your trip.",
      "**Fixed-fare taxis** — some airports have official fixed fares. At the time of writing, licensed taxis between Rome Fiumicino and central Rome inside the Aurelian Walls charged a fixed €55, according to the airport operator."
    ),
    tip("Price your accommodation for your actual dates first, then add intercity trains, then a daily amount for food, sights and local transport. Add a buffer of around 10–15% for the extras above.", "How to build a budget"),
    p("Our guide to [how much a trip to Italy costs](/guides/italy-trip-cost) goes into each category in more detail."),

    // ——— 8. Getting around ———
    h2("Getting around Italy"),
    answer("Use **trains** between major cities — they're usually faster than flying once you count airport time. Add a **car** only for rural areas, **ferries** for islands and the coast, and **domestic flights** for long hops such as the north to Sicily or Sardinia."),
    table(
      ["Transport", "Best for", "Advantages", "Limitations"],
      [
        ["High-speed trains", "Travel between major cities", "Fast, frequent, city-centre to city-centre", "Fares rise as departure approaches; tied to a specific train"],
        ["Regional trains", "Short trips and smaller towns", "Fixed fares; reach many towns", "Slower; less comfortable on busy lines"],
        ["Buses", "Hill towns and places without a station", "Reach places trains don't", "Timetables thinner on Sundays and out of season"],
        ["Hire cars", "Countryside, the south and islands", "Freedom to explore rural areas", "Restricted traffic zones, parking, tolls and fuel costs"],
        ["Ferries", "Islands and parts of the coast", "Scenic; avoid coastal traffic", "Weather and seasonal timetables"],
        ["Domestic flights", "Long distances, e.g. north to Sicily", "Save a day of travel", "Airport transfers and security time"],
        ["Taxis and transfers", "Airports, late arrivals, heavy luggage", "Door-to-door", "Expensive over long distances"],
      ],
      "Choosing how to travel"
    ),
    {
      type: "image",
      src: `${IMG}/milano-centrale-high-speed-train.webp`,
      alt: "A red high-speed train under the arched iron-and-glass roof of Milano Centrale station",
      caption: "A high-speed train at Milano Centrale. Italy's high-speed network runs from Turin and Milan through Bologna, Florence and Rome to Naples and Salerno, with fast services to Venice.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },
    h3("High-speed trains"),
    p("Two companies run high-speed services: Trenitalia (Frecciarossa and related services) and the private operator Italo. Tickets are for a specific train and seat, and cheaper fares tend to sell out as departure approaches, so book once your route is fixed. Tickets from one operator aren't valid on the other's trains."),
    h3("Regional trains"),
    p("Regional trains have fixed fares, so there's no need to book early. According to Trenitalia, **paper regional tickets must be validated** in the machines at the station before your train departs, while **digital regional tickets are validated automatically** at the scheduled departure time of the train you chose — so buy the digital ticket for the train you'll actually catch."),
    p("For the full picture on tickets, classes and stations, read [how to travel around Italy by train](/guides/italy-by-train), and for journey times between the main cities see [getting between Italian cities](/guides/getting-between-italian-cities)."),
    h3("Buses"),
    p("Intercity buses fill gaps in the rail network, particularly for hill towns in Tuscany and Umbria and for parts of the south. Services are often reduced on Sundays, holidays and outside the main season."),
    h3("Hire cars"),
    p("A car turns the Tuscan countryside, Puglia, Sicily or the Dolomites from difficult to easy. It's usually a burden in cities: most historic centres are **ZTLs** (limited traffic zones) monitored by cameras, and parking is scarce."),
    important("If your driving licence was issued outside the EU/EEA, Italian rules require you to carry an International Driving Permit or an official translation alongside your licence. Check the requirement for your licence before you travel, and watch for ZTL signs — entering one without authorisation can lead to a fine.", "Before you drive"),
    p("Read [what to know before driving in Italy](/guides/driving-in-italy) for speed limits, tolls and parking."),
    {
      type: "image",
      src: `${IMG}/liguria-coastal-road-car.webp`,
      alt: "A small red car on a narrow road between rocky cliffs and buildings on the Ligurian coast near Grimaldi",
      caption: "A coast road near Grimaldi in Liguria. Coastal and mountain roads are often narrow and slow, so allow more time than a map suggests.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },
    h3("Ferries"),
    p("Ferries connect the mainland with Sicily, Sardinia and the islands of the Bay of Naples, and run along some coasts in season. Book summer crossings — especially with a car — well ahead. See [ferries in Italy](/transport/ferries-in-italy)."),
    h3("Domestic flights"),
    p("Flights make sense for long distances, such as Milan or Venice to Palermo, Catania or Cagliari. Between Rome, Florence, Venice, Milan and Naples, the train is usually faster door to door."),
    h3("Taxis and airport transfers"),
    p("Use only official taxis from marked ranks. Many airports have direct trains or buses into the city — Rome Fiumicino's Leonardo Express, for example, runs non-stop to Roma Termini. Our guide to [Italian airport transfers](/guides/italy-airport-transfers) covers the main airports."),

    // ——— 9. Where to stay ———
    h2("Where to stay"),
    answer("Stay central for short city visits, near a main station if you're moving on quickly, and in the countryside only if you have a car. In most cities, location matters more than the size of the room."),
    h3("Types of accommodation"),
    ul(
      "**Hotels** — rated from one to five stars; rooms in historic buildings are often small.",
      "**B&Bs and guesthouses** — often a few rooms in a residential building; check reception hours if you're arriving late.",
      "**Agriturismi** — accommodation on working farms, usually in the countryside and often with meals made from local produce. You'll almost always need a car.",
      "**Apartments** — useful for families and longer stays; check the check-in arrangements and whether there's a lift.",
      "**Hostels** — dorms and private rooms in the main cities.",
      "**Resorts** — mostly on the coast and islands, many open only in season."
    ),
    h3("Choosing a neighbourhood"),
    table(
      ["Area", "Good for", "Trade-offs"],
      [
        ["Rome — Centro Storico", "Walking to the Pantheon, Piazza Navona and the Trevi Fountain", "Busier and pricier; limited metro access"],
        ["Rome — Termini area", "Arriving and leaving by train or airport express", "Less atmospheric; varies street by street"],
        ["Rome — Trastevere", "Evening atmosphere and restaurants", "Can be noisy at night; further from the metro"],
        ["Rome — Prati", "Quieter streets near the Vatican, with metro access", "A walk or ride from the ancient sites"],
        ["Florence — Historic centre", "Everything within walking distance", "Crowded in high season"],
        ["Florence — Santa Maria Novella", "Close to the main station", "Busier around the station itself"],
        ["Florence — Santa Croce", "Central, with plenty of restaurants", "Some streets are lively at night"],
        ["Venice — San Marco", "Closest to the most famous sights", "The busiest and usually the most expensive area"],
        ["Venice — Cannaregio", "Near the station, with a more residential feel", "Longer walk to San Marco"],
        ["Venice — Dorsoduro", "Museums, a calmer atmosphere, the Zattere waterfront", "Quieter in the evening"],
        ["Mestre (mainland)", "Lower prices, with trains and buses into Venice", "You're not in the historic city in the evening"],
      ],
      "Neighbourhood trade-offs in the three most visited cities"
    ),
    p("In Venice, staying overnight in the historic city means you'll see it after the day visitors leave. Overnight guests are exempt from the day-visitor access fee but may still need to register — check the [official Venice access fee site](https://cda.ve.it/en/) for current rules."),

    // ——— 10. What to book ———
    h2("What to book in advance"),
    answer("Book accommodation, long-distance trains and timed-entry sights as soon as your dates are fixed. Most restaurants, regional trains and local transport can be sorted when you're there."),
    table(
      ["When", "What to book"],
      [
        ["As soon as your dates are fixed", "Accommodation, especially for summer, Easter or major events; flights; Leonardo's Last Supper in Milan, which sells out quickly"],
        ["Several weeks ahead", "High-speed trains; the Vatican Museums, Uffizi, Colosseum and other major sights with timed entry; summer ferries and hire cars"],
        ["A few days to a week ahead", "Popular tours and cooking classes; restaurants for a special occasion or a weekend dinner"],
        ["Usually fine on the day", "Regional trains; city buses and metros; most churches; lunch at most trattorias"],
      ],
      "A booking timeline"
    ),
    p("Always book through the official website of the attraction or operator — for example the [Uffizi Galleries](https://www.uffizi.it/en), the [Vatican Museums](https://www.museivaticani.va/content/museivaticani/en.html) and the [Last Supper](https://cenacolovinciano.org/en/). Resellers often charge more, and their availability isn't always accurate."),
    tip("Check each sight's booking page for your exact dates, not just its general rules. Free-entry days, holidays and seasonal hours change how far ahead tickets sell out."),

    // ——— 11. Food and dining ———
    h2("Italian food and dining basics"),
    answer("Eat what the region is known for, expect dinner later than in many countries, and don't feel you have to order every course. A cover charge (coperto) is common; tipping isn't expected in the way it is in some countries."),
    p("Italian food is regional first. Pasta alla carbonara is a Roman dish, pesto belongs to Liguria, and tortellini to Emilia-Romagna. Ordering local specialities is usually the best way to eat well. Read more in [Italian food traditions you should know](/food/italian-food-traditions)."),
    h3("Timing and ordering"),
    ul(
      "Lunch is typically from around 12:30 to 2:30pm. Dinner often starts at 7:30 or 8pm, and later in the south.",
      "A full meal runs antipasto, primo (pasta or risotto), secondo (meat or fish) with a contorno (side dish), then dolce. One or two courses is perfectly normal.",
      "The bill usually comes only when you ask for it.",
      "Book ahead for dinner at popular places, especially at weekends."
    ),
    h3("Coffee, aperitivo and bars"),
    p("An Italian bar is a café as much as a place to drink. Coffee is usually drunk quickly at the counter, where it's often cheaper than at a table. In many bars you pay at the till first and show your receipt to the barista. Cappuccino is generally a morning drink. See [Italian coffee culture](/food/italian-coffee-culture) for how to order."),
    p("Aperitivo — an early-evening drink, usually with something to eat — is a daily ritual in many cities."),
    {
      type: "image",
      src: `${IMG}/italian-coffee-bar-counter.webp`,
      alt: "A bartender chatting with a customer across the counter of a small bar in San Quirico d'Orcia, Tuscany",
      caption: "A bar in San Quirico d'Orcia, Tuscany. Standing at the counter is the everyday way to have a coffee in Italy.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Paying: coperto, service and tipping"),
    p("Many restaurants add a coperto (cover charge) per person, and some add a service charge (servizio); both should appear on the menu. Tipping isn't expected in the way it is in some countries, but rounding up or leaving a little for good service is common and appreciated."),
    h3("A few words to know"),
    table(
      ["Italian term", "Meaning"],
      [
        ["Colazione", "Breakfast"],
        ["Pranzo", "Lunch"],
        ["Cena", "Dinner"],
        ["Aperitivo", "Pre-dinner drink, usually with snacks"],
        ["Coperto", "Cover charge, where applicable"],
        ["Servizio", "Service charge, where applicable"],
        ["Il conto", "The bill"],
        ["Primo / secondo", "First course (pasta, risotto) / main course"],
        ["Contorno", "Side dish, ordered separately"],
        ["Acqua naturale / frizzante", "Still / sparkling water"],
        ["Trattoria / osteria", "Traditionally simpler, family-style restaurants"],
        ["Enoteca", "Wine shop or wine bar"],
      ],
      "Useful dining vocabulary"
    ),
    { type: "quote", text: "Order what the region is known for. The best meal of a first trip is rarely the one nearest the most famous monument.", cite: "Life in Italia editors" },

    // ——— 12. Money and connectivity ———
    h2("Money, payments and connectivity"),
    ul(
      "**Currency** — the euro. Cards, including contactless payments, are widely accepted in cities, but carry some cash for markets, small cafés and rural areas.",
      "**ATMs** — called bancomat. Using machines attached to banks reduces the risk of high fees. If a card machine or ATM offers to charge you in your home currency, choosing euros usually avoids a poor conversion rate.",
      "**Mobile data** — travellers with an EU mobile plan can generally use it in Italy under EU roaming rules. Others can buy an eSIM before departure or a local SIM in Italy; buying a local SIM requires identification.",
      "**Wi-Fi** — standard in most hotels and apartments, though speeds vary in older buildings and rural areas.",
      "**Power** — Italy uses plug types C, F and L at 230 V, 50 Hz. Check that your chargers support 230 V; most phone and laptop chargers do.",
      "**Emergencies** — call 112, the European emergency number."
    ),

    // ——— 13. Documents ———
    h2("Documents and travel preparation"),
    answer("Entry requirements depend on your nationality. Check them on official government sources, not on third-party websites, before you book."),
    ul(
      "**Passport or ID** — check the validity rules that apply to you. EU citizens can travel with a valid national ID card.",
      "**Visa and entry rules** — the Italian Ministry of Foreign Affairs has an official [visa checker](https://vistoperitalia.esteri.it/) based on nationality, residence, purpose and length of stay.",
      "**EU Entry/Exit System (EES)** — non-EU nationals on short stays are registered digitally, including fingerprints and a facial image, at the external borders of participating countries. The system became fully operational on 10 April 2026 and replaces passport stamping.",
      "**ETIAS** — a travel authorisation for visa-exempt travellers has been announced but was not yet in operation at the time of writing (September 2026). Check the [official ETIAS site](https://travel-europe.europa.eu/en/etias) for its status before you travel.",
      "**Travel insurance** — check that it covers medical care, cancellations and any activities you're planning.",
      "**Copies** — keep digital copies of your passport, insurance, driving licence and bookings somewhere you can reach them offline.",
      "**Confirmations** — save accommodation, train and museum confirmations to your phone, with screenshots in case you lose signal."
    ),
    important("Rules on visas, passport validity and border registration can change. Always confirm current requirements with official sources for your nationality shortly before you travel.", "Check before you go"),

    // ——— 14. Mistakes ———
    h2("Common first-time mistakes"),
    table(
      ["Mistake", "Why it matters", "What to do instead"],
      [
        ["Trying to see too much", "Travel days crowd out the places themselves", "Choose fewer bases and stay longer in each"],
        ["Changing hotels every night", "Packing and check-ins eat into every day", "Stay at least two nights everywhere"],
        ["Ignoring travel time", "Maps underestimate stations, ferries and winding roads", "Allow half a day for every move"],
        ["Not checking booking requirements", "Timed-entry sights can sell out weeks ahead", "Book the sights that matter most first"],
        ["Assuming transport is the same everywhere", "Rail is excellent between big cities but patchy in rural areas", "Plan a car or tours for the countryside"],
        ["Eating only next to the big sights", "Menus aimed at passing visitors are often poorer value", "Walk a few streets away and follow the locals"],
        ["Forgetting seasonal closures", "Coastal hotels, ferries and lifts close out of season", "Check dates for coastal and mountain areas"],
        ["Not validating train tickets", "Paper regional tickets must be validated before boarding", "Validate at the station, or buy a digital ticket for your train"],
        ["Packing for the wrong season", "Churches require covered shoulders and knees; evenings can be cool", "Pack layers and one modest outfit"],
        ["Leaving no flexibility", "Weather, strikes or fatigue can derail a tight plan", "Keep a free half-day in each base"],
      ],
      "Mistakes and how to avoid them"
    ),
    {
      type: "image",
      src: `${IMG}/rome-cafe-tables-street.webp`,
      alt: "Outdoor restaurant tables set up beside a building on a street in Rome",
      caption: "A street in Rome. Some of the best meals are a few minutes' walk from the main sights.",
      credit: unsplash("Sara Abilova", "sarahabilova"),
    },

    // ——— 15. Checklist ———
    h2("Your Italy travel checklist"),
    p("Tick off each step as you go. For a longer version with timings, see our [Italy travel planning checklist](/guides/italy-travel-planning-checklist)."),
    {
      type: "checklist",
      id: "italy-first-trip",
      groups: [
        {
          title: "Before booking",
          items: ["Decide your trip length in nights", "Choose your travel style", "Choose two to four bases", "Check entry requirements for your nationality", "Set a budget"],
        },
        {
          title: "Before departure",
          items: ["Book accommodation", "Book high-speed trains", "Reserve timed-entry sights", "Arrange travel insurance", "Set up an eSIM or roaming", "Sort payment cards and some cash"],
        },
        {
          title: "Before leaving home",
          items: ["Passport or ID card", "Booking confirmations saved offline", "Emergency contacts", "Medication and personal essentials", "Copies of important documents", "Driving permit, if you'll drive"],
        },
      ],
    },
    {
      type: "image",
      src: `${IMG}/positano-amalfi-coast.webp`,
      alt: "Positano's houses stacked on the cliffs above the sea on the Amalfi Coast",
      caption: "Positano on the Amalfi Coast, a natural final stop on a two-week route south from Rome.",
      credit: unsplash("Jānis Beitiņš", "jbeitins"),
    },
  ],

  faqs: [
    { question: "How many days are enough for a first trip to Italy?", answer: "Seven to fourteen days suits most first trips. A week covers two or three cities comfortably; with ten to fourteen days you can add countryside, the coast or the south. Allow at least two nights in each place you stay." },
    { question: "What are the best places to visit in Italy for a first trip?", answer: "Rome, Florence and Venice are the most practical combination because fast trains link them and each has a walkable centre. Popular additions include the Amalfi Coast and Naples, Milan and Lake Como, or the Tuscan countryside, depending on your interests." },
    { question: "Is Italy easy to travel around by train?", answer: "Yes, between major cities. High-speed trains connect Milan, Venice, Bologna, Florence, Rome and Naples quickly and frequently. Rural areas, much of the south and the islands are harder to reach by train, so a car or bus is often needed there." },
    { question: "Is it better to rent a car or use trains in Italy?", answer: "Use trains between cities and hire a car only for countryside days. Cars are difficult in historic centres because of restricted traffic zones and limited parking, but they make rural Tuscany, Puglia, Sicily and the Dolomites much easier to explore." },
    { question: "What month is best for visiting Italy?", answer: "There's no single best month. For city-focused trips, late April to June and September to October usually balance weather and crowds well. June to September suits beaches, summer suits the mountains, and winter suits skiing and quieter cities." },
    { question: "How much money do I need for a trip to Italy?", answer: "It depends mainly on accommodation, the season and how much you travel. Price your accommodation and trains for your actual dates, add a daily amount for food and sights, then a buffer for extras such as tourist taxes and cover charges." },
    { question: "Do I need to book attractions in Italy in advance?", answer: "For the most famous sights, yes. The Last Supper in Milan, the Vatican Museums, the Uffizi and the Colosseum use timed tickets that can sell out. Book them through official websites as soon as your dates are fixed." },
    { question: "What should I know about eating at restaurants in Italy?", answer: "Meal times are later than in many countries, you don't have to order every course, and the bill comes when you ask for it. Many restaurants add a per-person cover charge (coperto). Tipping isn't expected, though rounding up is common." },
    { question: "Can I visit Rome, Florence and Venice in one week?", answer: "Yes. With two nights in Venice, two in Florence and two or three in Rome, the two train journeys take about two hours and an hour and a half. Fly into Venice and home from Rome to avoid backtracking." },
    { question: "What should I avoid doing on my first trip to Italy?", answer: "Avoid squeezing in too many cities, changing hotels every night and driving into historic centres. Don't leave timed-entry sights unbooked, validate paper regional train tickets before boarding, and keep some free time in each place." },
  ],

  sources: [
    { label: "Italia.it — official tourism website of Italy", url: "https://www.italia.it/en", note: "general destination information" },
    { label: "Italian Ministry of Foreign Affairs — Visa for Italy", url: "https://vistoperitalia.esteri.it/", note: "official visa checker" },
    { label: "European Commission — Entry/Exit System (EES)", url: "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en", note: "EES operation" },
    { label: "Travel to Europe — ETIAS", url: "https://travel-europe.europa.eu/en/etias", note: "ETIAS status" },
    { label: "Trenitalia — travelling on regional trains", url: "https://www.trenitalia.com/en/information/travelling-on-regional-trains.html", note: "ticket validation" },
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/en/connections/leonardo-express.html", note: "Fiumicino–Termini service" },
    { label: "Italo", url: "https://www.italotreno.com/en", note: "high-speed rail operator" },
    { label: "Aeroporti di Roma — Fiumicino taxis", url: "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-taxi", note: "fixed taxi fare" },
    { label: "City of Venice — access fee", url: "https://cda.ve.it/en/", note: "day-visitor access fee" },
    { label: "Roma Capitale — Trevi Fountain ticket (Italian)", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "Trevi Fountain access" },
    { label: "112 — European emergency number in Italy", url: "https://112.gov.it/", note: "emergency number" },
  ],
};
