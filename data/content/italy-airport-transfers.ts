import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "How Italian Airport Transfers Work" — the rebuilt version of the
// site's original short airport guide, kept at its established URL. Fixed taxi
// fares (Rome, Milan Malpensa and Linate), taxi and NCC rules at Fiumicino and
// Ciampino, airport rail and bus links, Naples airport's night closure, the
// child-restraint exemption in art. 172 of the Codice della Strada and EU
// assistance rights were checked on official sources in September 2026. Links
// already verified for our city guides are reused. Private-transfer prices are
// deliberately not given: they depend on the booking.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/italy-airport-transfers";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const italyAirportTransfers: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("How do you get from an Italian airport to your destination?"),
    answer("**There's no single system: each Italian airport has its own mix of trains, buses, taxis and pre-booked cars, and the right choice depends on where you're going.** For a city centre, an airport train or bus is often simplest and cheapest, and several cities set **fixed taxi fares** from the airport. A **pre-booked private transfer** makes most sense with lots of luggage, a group, a late arrival or a destination beyond the city. Before you fly, check **which airport** you're using, **how late** public transport runs and **exactly where** you'll be met or picked up."),
    p("Italian airports differ more than most visitors expect. Rome Fiumicino has a railway station next to the terminals; Venice's airport isn't on the railway at all; Bologna has a monorail; Florence a tram; Bergamo, used for many \"Milan\" flights, is a bus ride from any train. Taxi rules are set locally, so a fixed fare in Rome tells you nothing about Naples. This guide explains how each option works, how the main airports compare, and what to check before you book anything."),

    // ——— 2 ———
    h2("What counts as an airport transfer in Italy?"),
    p("\"Airport transfer\" simply means getting from the airport to where you're staying — or on to your next destination. In Italy, the options fall into a few clear categories, and the terms matter because the rules differ."),
    ul(
      "**Taxi** — a licensed vehicle, usually white, with a \"TAXI\" roof sign and a licence number. At airports you take one from the official rank; fares are either metered or fixed, depending on the route and the city.",
      "**Private transfer (NCC)** — *noleggio con conducente*, a car or minibus with driver that you book in advance at an agreed price. Under Italian rules, NCC vehicles can't be hailed or picked up from a taxi rank.",
      "**Shared transfer or shuttle** — a pre-booked seat in a vehicle carrying other passengers, often with several drop-offs.",
      "**Airport train** — a rail link from an airport station, such as Rome's Leonardo Express or the Malpensa Express.",
      "**Airport bus** — scheduled coaches or city buses to the main station, the city centre or other towns.",
      "**Local public transport** — a tram, metro or monorail, such as Florence's T2 tram or Milan's M4 metro to Linate.",
      "**Rental car** — collected at or near the airport; useful for rural trips, less so for city stays.",
    ),

    // ——— 3 ———
    h2("The main ways to leave an Italian airport"),
    p("Each option suits a different kind of traveller. None is best in every case."),
    table(
      ["Option", "Best suited to", "Booking", "Cost structure", "Main consideration"],
      [
        ["Official taxi", "Direct door-to-door trips, small groups, late arrivals", "No booking needed at the rank", "Metered, or a fixed fare on some routes", "Rules differ by city; use only the official rank"],
        ["Private transfer (NCC)", "Families, groups, heavy luggage, destinations beyond the city", "Must be booked in advance", "Price agreed when booking", "Check the meeting point, waiting time and what's included"],
        ["Shared transfer", "Solo travellers and couples going to popular areas", "Book in advance", "Per person", "Other passengers' stops add time"],
        ["Airport train", "City-centre stays near a station, light luggage", "Buy before boarding", "Per person, fixed fare", "Check the last train and whether your hotel is near the station"],
        ["Airport bus", "Budget trips, airports without rail links", "Buy online, at machines or on board, depending on the operator", "Per person", "Traffic, luggage space and timetable gaps"],
        ["Rental car", "Rural touring, several destinations", "Book in advance", "Daily rate plus fuel, tolls and parking", "City centres have limited-traffic zones (ZTL)"],
      ],
      "A comparison, not a ranking. The best option depends on your airport, destination and group.",
    ),

    // ——— 4 ———
    h2("Official airport taxis"),
    p("Every major Italian airport has a taxi rank outside arrivals. Taxis are licensed by the local municipality; at Rome's airports, for example, they are white, with a \"TAXI\" sign on the roof and the licence number shown on the doors, at the back and inside the car. Airport operators warn that other vehicles waiting near the exits may not be licensed."),
    {
      type: "image",
      src: `${IMG}/rome-taxis-rank.webp`,
      alt: "White licensed taxis with roof signs and door stickers waiting in a line on a street in central Rome",
      caption: "Licensed taxis at a rank in central Rome. At the airports, use the official rank outside arrivals.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
      wide: true,
    },
    h3("Fixed fares and metered fares"),
    p("Some cities set a **fixed fare** (*tariffa fissa* or *predeterminata*) for specific routes between the airport and the city. It's per car, not per person, and normally includes supplements for luggage, night or holidays — but it usually applies only to a direct trip with no extra stops. Everywhere else, the **meter** runs, with supplements set by the municipality."),
    table(
      ["Airport", "Route", "Fixed fare (per car)"],
      [
        ["Rome Fiumicino", "Central Rome, inside the Aurelian Walls", "€55"],
        ["Rome Fiumicino", "Roma Ostiense station / Roma Tiburtina station", "€50 / €60"],
        ["Rome Fiumicino", "Civitavecchia port", "€130"],
        ["Rome Ciampino", "Central Rome inside the Aurelian Walls, Ostiense or Tiburtina", "€40"],
        ["Rome Fiumicino ↔ Ciampino", "Between the two airports", "€55"],
        ["Milan Malpensa", "Any address in the city of Milan", "€114"],
        ["Milan Malpensa ↔ Linate", "Between the two airports", "€128"],
      ],
      "Published by Aeroporti di Roma and Milan Airports, September 2026. Fares are set by the municipality or region and can change without notice.",
    ),
    p("In Rome, fixed fares apply in both directions and include all supplements; for Fiumicino, trips to other destinations inside the Grande Raccordo Anulare ring road can't exceed €80. Naples and Florence also have fixed fares from their airports to set areas of the city, with conditions that differ from Rome's — in Florence, for example, holiday, night and luggage supplements apply. Milan Linate, close to the city, is metered for trips into Milan."),
    h3("Before you get in"),
    ul(
      "**Queue at the official rank** and ignore offers from people inside the terminal.",
      "**Check it's a licensed taxi** — roof sign, licence number and meter.",
      "**Say your destination and ask for the fixed fare** if one applies, before you set off.",
      "**Ask about card payment** if you don't have cash; acceptance is common but worth confirming.",
      "**Ask for a receipt** (*ricevuta*) at the end — useful for any complaint, with the licence number.",
      "**Mention bulky luggage** — a standard car may not fit several large cases.",
    ),

    // ——— 5 ———
    h2("Private airport transfers"),
    p("A private transfer is a car, van or minibus with a driver, booked in advance for your group only. In Italian terms it's an **NCC** service. At Fiumicino, Aeroporti di Roma notes that NCC cars must be requested in advance, can't be taken from the taxi rank, and are generally blue or grey, and that you should agree the meeting point, route and cost beforehand."),
    ul(
      "**Pre-booking** — you give your flight number, arrival time, passengers, luggage and destination, and receive a confirmation.",
      "**Meeting point** — an agreed place: in the arrivals hall, at an exit or in a designated area, depending on the airport and operator.",
      "**Driver identification** — a name sign, a message with the driver's name and phone number, or the vehicle's details.",
      "**Flight tracking** — many operators monitor arrivals, but policies differ.",
      "**Waiting time** — usually a set period included after landing, with charges or conditions beyond it.",
      "**Vehicle category** — sedan, minivan or minibus; choose by luggage as well as passengers.",
      "**Drop-off** — direct to your address where vehicles can reach it; not inside limited-traffic zones or car-free centres unless permitted.",
      "**Payment and cancellation** — prepaid or paid to the driver, with cancellation terms set by the company.",
    ),
    p("The advantages are predictability and convenience: someone is expecting you, the price is agreed and the vehicle is sized for your group. The limitations are that you must book and describe your needs accurately, and that a private transfer isn't automatically cheaper or faster than a taxi or train — in Rome, a fixed-fare taxi to the centre may cost less; in Milan, the train can beat road traffic. Compare quotes against the fixed fares and public options for your route."),

    // ——— 6 ———
    h2("Shared transfers and shuttles"),
    p("Shared transfers sell individual seats in a vehicle that collects several bookings and drops passengers at different addresses or at a few set points. They can be good value for solo travellers and couples heading to popular areas, but the journey takes longer because of the other stops, and you may wait at the airport until the vehicle fills or other flights land. Book in advance, give your flight details, and check the drop-off point — some shuttles stop at a central square rather than your door."),
    p("Some cities also have regulated shared taxis. At Naples airport, for example, a *taxi collettivo* runs to the central station and the port at Molo Beverello for a fixed **€6 per passenger**, including luggage, leaving once enough passengers have boarded."),

    // ——— 7 ———
    h2("Airport trains"),
    p("A train is often the easiest way into a city if your accommodation is near the arrival station and you can manage your luggage on steps and platforms. Buy tickets from official machines, ticket offices or the operator's app, and validate paper regional tickets if required."),
    ul(
      "**Rome Fiumicino** — Trenitalia's non-stop **Leonardo Express** runs to Roma Termini in 32 minutes, every 15 minutes; **FL1** regional trains serve other Rome stations such as Trastevere, Ostiense and Tiburtina.",
      "**Milan Malpensa** — the **Malpensa Express** runs to Milano Cadorna, Porta Garibaldi and Centrale.",
      "**Bologna** — the **Marconi Express** monorail reaches Bologna Centrale in about seven minutes, according to the operator.",
      "**Pisa** — the **Pisa Mover** shuttle reaches Pisa Centrale in about five minutes, for trains to Florence and the rest of Tuscany.",
      "**Palermo, Bari and Turin** — trains run from airport stations to Palermo Centrale, Bari Centrale and Turin Porta Susa.",
      "**Catania** — Trenitalia's **Fontanarossa Airlink** combines a short bus ride to the Catania Aeroporto Fontanarossa station with regional trains to Catania, Taormina, Messina and Siracusa.",
    ),
    {
      type: "image",
      src: `${IMG}/roma-termini-frecciarossa.webp`,
      alt: "A red high-speed Frecciarossa train standing at a platform under the canopy of Roma Termini station",
      caption: "Roma Termini, where the Leonardo Express from Fiumicino arrives and many onward trains leave.",
      credit: unsplash("Nico Ruge", "nico_ruge"),
    },
    p("Timetables change, and lines are occasionally replaced by buses for engineering work. Check the operator's site for your date, and see our guide to [Italy by train](/guides/italy-by-train) for how tickets work."),

    // ——— 8 ———
    h2("Airport buses"),
    p("Buses serve every major airport. Some are city buses with standard tickets; others are private coach lines with their own fares, often running to the main railway station."),
    ul(
      "**Where they go** — usually the main station, sometimes the city centre, the port or other towns and resorts.",
      "**Tickets** — online, at machines or kiosks in arrivals, or on board, depending on the operator. Some city buses accept contactless cards.",
      "**Luggage** — usually carried in the hold on coaches; space on city buses is limited.",
      "**Timing** — road traffic affects journey times, and services thin out late at night.",
      "**Seasonal routes** — some airports add summer buses to resorts or winter buses to ski areas.",
    ),
    {
      type: "image",
      src: `${IMG}/rome-city-buses.webp`,
      alt: "City buses and cars on a wide street near the Theatre of Marcellus in Rome on a cloudy day",
      caption: "City buses near the Theatre of Marcellus in Rome. Airport coaches mostly run to the main stations.",
      credit: unsplash("Levi Ari Pronk", "leviaripronk"),
    },

    // ——— 9 ———
    h2("Italy's main airports at a glance"),
    p("Transfer options differ a lot between airports. This table covers the airports most visitors use."),
    table(
      ["Airport", "Main city or area", "Common transfer options", "Important planning point"],
      [
        ["Rome Fiumicino (FCO)", "Rome, Civitavecchia", "Leonardo Express, FL1 trains, buses, fixed-fare taxis, NCC", "Taxi rank at Terminals 1 and 3; fixed fare to the centre"],
        ["Rome Ciampino (CIA)", "Rome", "Buses, bus and train via Ciampino station, fixed-fare taxis", "No airport rail station"],
        ["Milan Malpensa (MXP)", "Milan, Lake Como, Lake Maggiore", "Malpensa Express, buses, fixed-fare taxis, NCC", "Far from the city: the airport name isn't the journey time"],
        ["Milan Linate (LIN)", "Milan", "Metro M4, taxis", "Close to the centre"],
        ["Milan Bergamo (BGY)", "Bergamo, Milan", "Bus to Bergamo station, coaches to Milano Centrale, taxis", "No rail station at the airport"],
        ["Venice Marco Polo (VCE)", "Venice, Mestre, the Dolomites", "Buses, Alilaguna water bus, water taxis, road taxis", "Road transport ends at Piazzale Roma"],
        ["Bologna (BLQ)", "Bologna", "Marconi Express monorail, night bus, taxis", "Check for maintenance suspensions"],
        ["Florence (FLR)", "Florence", "T2 tram, taxis", "Mainly European flights; many long-haul travellers use Rome, Milan or Pisa"],
        ["Pisa (PSA)", "Pisa, Lucca, Florence", "Pisa Mover then train, taxis", "Change at Pisa Centrale for Florence"],
        ["Naples (NAP)", "Naples, Sorrento, Amalfi Coast", "Alibus, fixed-fare and shared taxis, buses to Sorrento, NCC", "Closed to flights 22:30–03:30 except in exceptional cases"],
        ["Palermo (PMO)", "Palermo, western Sicily", "Trinacria Express train, buses, taxis", "Train stops at stations in the city"],
        ["Catania (CTA)", "Catania, Taormina, eastern Sicily", "Train plus bus, city buses, taxis", "Rail station is a short bus ride from the terminal"],
      ],
      "Services and rules change; check the airport's own site before you fly.",
    ),

    // ——— 10 ———
    h2("Rome airport transfers"),
    h3("Fiumicino"),
    p("Rome's main airport is on the coast, west of the city. The railway station is inside the airport area, a short walk from the terminals. The **Leonardo Express** runs non-stop to Termini; according to Aeroporti di Roma, the first train leaves the airport at 05:38 and the last at 23:27. **FL1** regional trains are better if you're staying near Trastevere, Ostiense or Tiburtina. **Buses** run to Termini and other points. Official **taxis** wait at arrivals for Terminals 1 and 3, with the fixed fare of €55 to anywhere inside the Aurelian Walls. **NCC** transfers meet you in front of the airport exit by prior arrangement. A **rental car** is only worth it if you're heading out of Rome — driving and parking in the centre are difficult."),
    h3("Ciampino"),
    p("Ciampino, used mainly by low-cost airlines, is south-east of the city and has no railway station. **Buses** run from stops opposite international departures to Roma Termini and Anagnina (metro line A), with tickets sold online, in the arrivals hall or on board. The **Ciampino Airlink** combines a shuttle bus to Ciampino station with a train to Termini. **Taxis** charge a fixed €40 to the centre. See [Rome in three days](/guides/rome-in-three-days) for getting around once you arrive."),

    // ——— 11 ———
    h2("Milan airport transfers"),
    p("\"Milan\" can mean three airports in very different places, so the airport name tells you little about how long your final journey will take."),
    ul(
      "**Malpensa** — north-west of Milan, some way out. The **Malpensa Express** runs to Cadorna, Porta Garibaldi and Centrale; buses run to Centrale; taxis charge a fixed **€114** to any address in Milan. For Lake Como or Lake Maggiore, Malpensa is often the most practical airport.",
      "**Linate** — east of the centre and close to it. **Metro line M4** runs to San Babila in about 12 minutes, according to the airport. Taxis are metered.",
      "**Bergamo (Orio al Serio)** — used by many low-cost flights and the furthest from Milan. There's no train at the airport: an ATB bus runs to Bergamo station in about 10 minutes, and continues to the upper town, while several coach companies run to Milano Centrale. A rail link is planned.",
    ),
    {
      type: "image",
      src: `${IMG}/milano-centrale-travellers.webp`,
      alt: "Travellers with luggage and a bicycle beside a green and white regional train on a platform at Milano Centrale",
      caption: "Milano Centrale, the hub for onward trains from all three Milan airports.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },
    p("Our guide to [Milan](/cities/milan-beyond-the-duomo) explains which areas suit each airport."),

    // ——— 12 ———
    h2("Venice airport transfers"),
    p("Venice Marco Polo is on the mainland at Tessera and isn't on the railway. How you travel depends on whether your accommodation is in the historic centre, which has no roads, or somewhere a car can reach."),
    ul(
      "**Bus to Piazzale Roma** — ACTV's **5-AeroBus** takes about 20 minutes, according to the city's Venezia Unica service, and ATVO runs express buses. From Piazzale Roma you continue on foot or by water bus.",
      "**Bus to Mestre** — ACTV lines 15 and 45 serve central Mestre and the railway station.",
      "**Alilaguna water bus** — slower, but goes directly by boat to stops in the historic centre, Murano and the Lido.",
      "**Water taxi** — a private boat, the most direct and most expensive option, useful for groups with luggage going to a canal-side hotel.",
      "**Road taxi or NCC** — to Piazzale Roma, Mestre or the mainland; the car can't take you further into the historic centre.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-water-taxi.webp`,
      alt: "A polished wooden water taxi with a taxi flag speeding across the water in Venice",
      caption: "A water taxi in Venice: direct, but priced as a private boat.",
      credit: unsplash("Piero Nigro", "pieronigro"),
    },
    p("Tickets for ACTV buses and the Alilaguna are sold at machines in baggage reclaim, at the Venezia Unica office in arrivals and online. Venice streets have bridges with steps, so heavy cases are hard work: check how close your stop is to your hotel. Our [Venice guide](/cities/venice-quieter-neighbourhoods) explains arriving in the city in more detail."),
    {
      type: "image",
      src: `${IMG}/venice-piazzale-roma.webp`,
      alt: "Evening at Piazzale Roma in Venice, with street lamps and the green dome of San Simeone Piccolo in the distance",
      caption: "Piazzale Roma, where road transport from the airport ends and Venice continues on foot or by boat.",
      credit: unsplash("Vladislav Glukhotko", "azzurobudgie"),
    },

    // ——— 13 ———
    h2("Florence, Pisa and Bologna"),
    p("Tuscany and Emilia-Romagna have three airports close together, and many travellers to Florence actually fly into Pisa or Bologna."),
    ul(
      "**Florence (Amerigo Vespucci)** — about four kilometres north-west of the centre. The **T2 tram** stops next to the terminal and runs through the Santa Maria Novella station area to Piazza San Marco; buy tickets before boarding. **Taxis** use a fixed fare to the central area, with supplements. Car rental desks are in a separate rental area.",
      "**Pisa (Galileo Galilei)** — the **Pisa Mover** runs to Pisa Centrale from 06:00 to midnight (until 01:00 from June to September), according to the operator. From Pisa Centrale, regional trains serve Florence, Lucca and the coast.",
      "**Bologna (Guglielmo Marconi)** — the **Marconi Express** monorail runs to Bologna Centrale from early morning until midnight, and TPER bus line Q replaces it overnight. The monorail is occasionally suspended for maintenance, with replacement buses — as announced for early October 2026 — so check before you fly.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-tram.webp`,
      alt: "The front of a silver and red Florence tram showing T2 Peretola Aeroporto on its destination display",
      caption: "Florence's T2 tram, which links the airport with the station area and the centre.",
      credit: unsplash("Mihaela Claudia Puscas", "mihaela_claudia_p"),
    },
    p("See our guides to [Florence](/cities/florence-for-first-timers) and [Bologna](/cities/bologna-in-two-days) for where to stay near each link."),

    // ——— 14 ———
    h2("Naples airport transfers"),
    p("Naples International Airport (Capodichino) is close to the city. The **Alibus**, run by ANM, links it with Piazza Garibaldi/Napoli Centrale and the port at Molo Beverello. **Taxis** leave from the rank in front of arrivals, with fixed fares on set routes — to the city centre, Molo Beverello, Mergellina, Pompeii, Caserta and others — which include supplements except the motorway toll and a radio-taxi call. The shared taxi described above is another option."),
    p("A private transfer becomes particularly relevant for the **Amalfi Coast** and hotels outside the city, where public transport means changes and steep, narrow roads. The Curreri bus runs from the airport to Sorrento station on a published timetable, with seats bookable in advance. Note that, for security reasons, Naples airport is closed to flights from 22:30 to 03:30, except for exceptional delays. Our [Naples guide](/cities/naples-first-visit) covers the city itself."),

    // ——— 15 ———
    h2("Transfers to destinations beyond the airport city"),
    p("Many trips don't end in the airport's city. You might land in Rome and head for a cruise at Civitavecchia, or land in Naples and go straight to the Amalfi Coast. Compare these approaches:"),
    ul(
      "**Direct private transfer** — door to door, no changes; the most expensive per trip, but it can compare well for groups.",
      "**Airport train plus onward train** — often efficient between cities, but involves changes with luggage.",
      "**Airport bus plus onward bus** — usually cheapest, but slower, with fewer departures.",
      "**Airport taxi** — useful for short onward hops, or where a fixed fare exists, such as Fiumicino to Civitavecchia port (€130).",
      "**Rental car** — best for rural areas, several stops and flexible plans.",
    ),
    table(
      ["Example route", "Main options", "What to weigh"],
      [
        ["Fiumicino → Civitavecchia cruise port", "Fixed-fare taxi, private transfer, or train with a change in Rome", "Luggage and embarkation time; allow plenty of margin"],
        ["Naples airport → Amalfi Coast", "Private transfer, or bus to Sorrento and onward bus or ferry", "Coastal roads are narrow and slow; changes with luggage"],
        ["Malpensa → Lake Como", "Malpensa Express and a regional train, or private transfer", "Which side of the lake you're staying on"],
        ["Venice airport → Dolomites", "Direct coach to Cortina and other resorts, private transfer or rental car", "Season and your base"],
        ["Florence or Pisa airport → Tuscan countryside", "Rental car, or train to a town and a local taxi", "Villages and farm stays usually need a car"],
      ],
    ),
    p("See [getting between Italian cities](/guides/getting-between-italian-cities) for city-to-city trains, [Lake Como in a weekend](/travel/lake-como-weekend) and [visiting the Dolomites](/guides/visiting-the-dolomites) for those regions, and [driving in Italy](/guides/driving-in-italy) if you're renting a car."),

    // ——— 16 ———
    h2("How to choose the right option"),
    p("Think about your group, luggage and arrival time as well as price."),
    table(
      ["Situation", "Often works well", "Watch out for"],
      [
        ["Solo traveller", "Airport train or bus", "Late arrivals, when public transport thins out"],
        ["Couple", "Train or bus; taxi where a fixed fare applies", "Two large cases on crowded buses"],
        ["Family", "Fixed-fare taxi or private transfer", "Child seats and luggage space"],
        ["Large group", "Private minivan or minibus", "Book the right vehicle size"],
        ["Heavy luggage", "Taxi or private transfer", "Steps at stations and in Venice"],
        ["Late-night arrival", "Taxi or pre-booked transfer", "Last trains and buses; flight delays"],
        ["Early-morning departure", "Pre-booked taxi or transfer; first train if it's early enough", "First departures may be too late for your check-in"],
        ["Remote destination", "Private transfer or rental car", "Limited buses, especially on Sundays"],
        ["Several hotel stops", "Private transfer booked with all stops", "Fixed taxi fares usually cover direct trips only"],
        ["Cruise passenger", "Private transfer or fixed-fare taxi", "Embarkation times and luggage"],
        ["Reduced mobility", "Accessible vehicle booked in advance", "Standard taxis and cars aren't wheelchair-accessible"],
      ],
    ),

    // ——— 17 ———
    h2("Booking a private transfer: what to check"),
    p("Most transfer problems come from missing details. Before you confirm, make sure the booking covers each of these."),
    table(
      ["Check", "Why it matters"],
      [
        ["Exact pickup location and terminal", "Large airports have several terminals and exits"],
        ["Flight number and arrival time", "Lets the company follow delays"],
        ["Passenger count, including children", "Decides the vehicle and seating"],
        ["Number and size of bags", "A sedan for four people may not fit four large cases"],
        ["Child seats", "Must be requested; not every vehicle carries them"],
        ["Driver meeting point and identification", "Avoids confusion in a busy arrivals area"],
        ["Waiting policy and delay policy", "How long they wait, and whether extra waiting costs more"],
        ["Cancellation terms", "What happens if your flight is cancelled or your plans change"],
        ["Payment method and what's included", "Whether tolls, parking, night or luggage charges are extra"],
        ["Receipt or invoice", "Needed for expenses or complaints"],
        ["Contact number and emergency procedure", "Who to call if you can't find the driver"],
      ],
    ),

    // ——— 18 ———
    h2("How airport pickup works"),
    p("The exact procedure differs between airports and operators — not every driver can wait inside the terminal or at baggage claim — but the sequence is usually similar."),
    steps(
      ["Land and clear arrivals", "Pass passport control if you're arriving from outside the Schengen area, and turn your phone on."],
      ["Collect your luggage", "Check your messages: transfer companies often send the driver's details now."],
      ["Follow the signs", "To the taxi rank, the railway station, the bus stops or your agreed meeting point."],
      ["Find the rank or your driver", "Queue at the official taxi rank, or look for your driver at the agreed place."],
      ["Confirm who they are", "Check the name, company, licence number or vehicle details before handing over bags."],
      ["Load the luggage", "Keep valuables and documents with you."],
      ["Confirm the destination", "Show the full address, and confirm the fixed fare if one applies."],
      ["Arrive and pay", "Pay as agreed and ask for a receipt."],
    ),
    {
      type: "image",
      src: `${IMG}/baggage-reclaim-belt.webp`,
      alt: "Suitcases on a baggage reclaim belt in an airport arrivals hall",
      caption: "Baggage reclaim: a good moment to check messages from your transfer company.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 19 ———
    h2("What if your flight is delayed?"),
    p("Give the correct flight number when you book. Many private-transfer companies use it to follow your arrival and adjust the pickup; if you give only a time, the driver may leave before you land. Waiting policies vary — some include a set time after landing, some charge for extra waiting, and none should be assumed to wait indefinitely. If you're delayed, message or call the company as soon as you can, and keep their number to hand. For trains and buses, check the last departure: a delay can mean missing it."),

    // ——— 20 ———
    h2("Late-night and early-morning arrivals"),
    p("Public transport doesn't run all night. At Fiumicino, the last Leonardo Express leaves just before 23:30; at Bologna, a night bus replaces the monorail after midnight; Naples airport is closed to flights overnight. Before a late or very early flight, check:"),
    ul(
      "The **last train** or bus from the airport, and the **first** one on your departure day.",
      "Whether taxis are usually available at that hour, and the night rate or fixed fare.",
      "That your private transfer knows your flight number and how to reach you.",
      "Your accommodation's check-in hours — some small hotels close reception at night.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-airport-landing.webp`,
      alt: "A passenger jet landing on the runway at Venice Marco Polo airport, with its landing gear down",
      caption: "Landing at Venice Marco Polo. Late arrivals leave fewer public transport options.",
      credit: unsplash("Edoardo Bortoli", "edo_bor"),
    },

    // ——— 21 ———
    h2("Luggage and vehicle size"),
    p("Passenger numbers alone don't decide the vehicle. Tell the company exactly what you're carrying: checked suitcases, cabin bags, pushchairs, sports equipment such as bikes, skis or golf clubs, and wheelchairs or other mobility aids. A standard sedan may take three passengers and their luggage comfortably, but not four people with four large cases. Undeclared oversized items can mean a vehicle that doesn't fit, or an extra charge. On trains and buses, you manage your own bags, sometimes on steps."),

    // ——— 22 ———
    h2("Airport transfers for families"),
    ul(
      "**Child seats** — request them when you book, with each child's age and weight. Not every taxi or transfer vehicle carries them.",
      "**The rules** — in private cars, Italian law requires child restraints. Article 172 of the road code allows children up to 1.50 m to travel in taxis and NCC vehicles without a child seat, provided they don't sit in front and travel with someone aged at least 16. A proper seat is still safer, so ask for one.",
      "**Pushchairs and luggage** — mention them, as they take space.",
      "**Late arrivals** — a pre-booked vehicle avoids queuing at a taxi rank with tired children.",
      "**Access to your accommodation** — check whether a car can reach the door; historic centres and Venice often mean a walk.",
    ),

    // ——— 23 ———
    h2("Accessibility"),
    p("Airport accessibility and vehicle accessibility are separate. Under EU rules, passengers with reduced mobility are entitled to free assistance at the airport; the European Commission advises requesting it from your airline or tour operator at least 48 hours before travelling. That assistance ends at the airport, though — the vehicle for the onward journey must be arranged separately."),
    p("Standard taxis and private cars aren't wheelchair-accessible. Book an accessible vehicle in advance and describe your needs, including whether the wheelchair folds and whether you can transfer to a seat. In Milan, for example, the airport operator says wheelchair-accessible taxis can be booked through the radio-taxi companies. For trains, ask the operator about station assistance."),

    // ——— 24 ———
    h2("Common airport transfer mistakes"),
    table(
      ["Mistake", "How to avoid it"],
      [
        ["Accepting a ride from an unofficial driver", "Use the official taxi rank or your pre-booked driver"],
        ["Assuming every airport has the same taxi system", "Check the rules and fixed fares for your airport"],
        ["Confusing the Milan airports", "Malpensa, Linate and Bergamo are far apart; check your ticket"],
        ["Confusing the Rome airports", "Fiumicino and Ciampino have different links"],
        ["Booking a transfer to the wrong airport", "Match the airport code on your booking and ticket"],
        ["Forgetting luggage in the booking", "Declare every bag and oversized item"],
        ["Not checking the meeting point", "Save the pickup instructions offline"],
        ["Assuming public transport runs all night", "Check last and first departures"],
        ["Ignoring cancellation terms", "Read them before paying"],
        ["Not giving a flight number", "Include it so delays can be followed"],
        ["Relying on an old price found online", "Check the official fare or ask for a current quote"],
      ],
    ),

    // ——— 25 ———
    h2("Airport transfer safety and scams"),
    p("Most transfers are uneventful. A few simple habits avoid the common problems."),
    ul(
      "**Use official taxi ranks.** Airport operators warn that vehicles waiting near exits outside the ranks may not be licensed.",
      "**Don't follow people offering rides** inside the terminal, however official they look.",
      "**Check your pre-booked driver's identity** against your confirmation: name, company and vehicle.",
      "**Keep the booking confirmation** and the company's phone number on your phone and offline.",
      "**Agree the fare first** — the fixed fare, the meter or the booking price.",
      "**Use the airport's own website** for transport information and official links.",
    ),

    // ——— 26 ———
    h2("Before-you-fly checklist"),
    p("Tick items off as you prepare; your progress is saved on this device."),
    checklist(
      "airport-transfer-before-you-fly",
      ["Airport and booking", ["Airport confirmed (and not a different one in the same city)", "Terminal confirmed", "Destination address copied", "Flight number given to the transfer company"]],
      ["Passengers and luggage", ["Passenger count confirmed", "Luggage and oversized items declared", "Vehicle size and child seats confirmed", "Accessibility needs confirmed"]],
      ["On the day", ["Pickup instructions saved offline", "Payment method understood", "Cancellation terms checked", "Company's emergency contact saved", "Official train, bus and taxi options checked as a back-up"]],
    ),
    tip("Save a screenshot of your transfer confirmation and the address of your accommodation, in case you have no signal at arrivals.", "Offline back-up"),
    p("Fares and rules in this guide were checked on official sources in September 2026 and can change. For the rest of your planning, see our [Italy travel planning checklist](/guides/italy-travel-planning-checklist), [how much a trip to Italy costs](/guides/italy-trip-cost) and the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What is the easiest way to get from an Italian airport to the city centre?", answer: "It depends on the airport. Where there's a direct train, tram or monorail — Rome Fiumicino, Milan Malpensa, Bologna, Florence, Pisa — it's usually simplest. At airports without rail, such as Venice or Rome Ciampino, buses and taxis are the main options." },
    { question: "Are airport taxis in Italy fixed-price?", answer: "On some routes. Rome has fixed fares from both airports to the centre, Milan from Malpensa to the city, and Naples and Florence for set areas. Elsewhere the meter runs. Check your airport's official taxi page." },
    { question: "Should I pre-book an airport transfer?", answer: "It's worth it for late arrivals, families, groups, heavy luggage and destinations outside the city. For a solo traveller heading to a central hotel, a train, bus or taxi from the rank is often enough." },
    { question: "What is the difference between a taxi and a private transfer?", answer: "A taxi is taken from the official rank or booked by phone, with a metered or fixed fare. A private transfer (NCC) must be booked in advance at an agreed price and can't pick up from the taxi rank." },
    { question: "Are airport transfers available late at night?", answer: "Taxis and pre-booked transfers usually are; trains and buses often stop around midnight or earlier. Check the last departure for your airport and date." },
    { question: "Do private transfers track flight delays?", answer: "Many do if you give your flight number, but policies differ. Check how long they wait and whether extra waiting costs more." },
    { question: "How much luggage can I take?", answer: "It depends on the vehicle. Tell the company the number and size of your bags and any oversized items so they send a vehicle that fits." },
    { question: "Can I request a child seat?", answer: "Yes, when you book, with the child's age and weight. Not every vehicle carries them. Italian law exempts taxis and NCC vehicles from child-seat requirements under certain conditions, but a seat is safer." },
    { question: "Can I travel from the airport directly to another Italian city?", answer: "Yes — by train from airports with rail links, by coach, or by private transfer. Compare the time and cost against flying into a closer airport." },
    { question: "Which Milan airport should I use?", answer: "Linate is closest to the city; Malpensa handles most long-haul flights and suits the lakes; Bergamo has many low-cost flights and is furthest from Milan. Check your ticket and plan the transfer for that airport." },
    { question: "How do I get from Fiumicino to Rome?", answer: "The Leonardo Express runs non-stop to Termini in 32 minutes; FL1 trains serve other Rome stations; buses run to Termini; and taxis charge a fixed €55 to the centre inside the Aurelian Walls." },
    { question: "How do I get from Naples Airport to the Amalfi Coast?", answer: "By private transfer, or by bus to Sorrento and then a local bus or ferry. There's no direct train. Coastal roads are slow, so allow time." },
    { question: "Can I book an airport transfer to a cruise port?", answer: "Yes. Private transfers commonly serve Civitavecchia, Naples and other ports, and Rome's taxis have a fixed fare from Fiumicino to Civitavecchia port. Allow a margin for embarkation." },
    { question: "What should I check before confirming a transfer?", answer: "Airport and terminal, flight number, passengers, luggage, vehicle size, child seats, meeting point, waiting and cancellation terms, what the price includes, and an emergency contact number." },
  ],

  sourcesTitle: "Official sources",
  sources: [
    { label: "Aeroporti di Roma — Fiumicino taxis", url: "https://www.adr.it/pax-fco-taxi", note: "official taxis and fixed fares" },
    { label: "Aeroporti di Roma — Fiumicino trains", url: "https://www.adr.it/pax-fco-treno", note: "Leonardo Express and FL1" },
    { label: "Aeroporti di Roma — Fiumicino NCC", url: "https://www.adr.it/pax-fco-noleggio-con-conducente", note: "pre-booked private hire" },
    { label: "Aeroporti di Roma — Ciampino taxis", url: "https://www.adr.it/pax-cia-taxi", note: "fixed fares" },
    { label: "Aeroporti di Roma — Ciampino buses", url: "https://www.adr.it/pax-cia-autobus", note: "bus operators and stops" },
    { label: "Milan Malpensa — by taxi", url: "https://www.milanomalpensa-airport.com/en/from-to/by-taxi", note: "fixed fares and accessible taxis" },
    { label: "Milan Linate — by taxi", url: "https://www.milanolinate-airport.com/en/from-to/by-taxi", note: "taxi information" },
    { label: "Malpensa Express", url: "https://www.malpensaexpress.it/en/", note: "Malpensa trains" },
    { label: "Milan Bergamo Airport — bus", url: "https://www.milanbergamoairport.it/en/bus/", note: "buses to Bergamo and Milan" },
    { label: "Venezia Unica — Marco Polo airport", url: "https://www.veneziaunica.it/en/plan-your-trip/getting-to-venice/marco-polo-airport", note: "ACTV buses and tickets" },
    { label: "Alilaguna", url: "https://www.alilaguna.it/en/", note: "water bus from the airport" },
    { label: "Pisa Mover", url: "https://pisa-mover.com/en/shuttle-service/", note: "Pisa airport shuttle" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/en/", note: "Bologna airport monorail" },
    { label: "Naples Airport — by taxi", url: "https://www.aeroportodinapoli.it/en/by-taxi", note: "fixed fares, shared taxis, night closure" },
    { label: "Trenitalia — Fontanarossa Airlink", url: "https://www.trenitalia.com/it/regionale/collegamenti-regionale/fontanarossa-airlink.html", note: "Catania airport train and bus" },
    { label: "Ferrotramviaria — Bari airport", url: "https://www.ferrotramviaria.it/web/guest/da-aeroporto", note: "Bari airport train" },
    { label: "Your Europe — passengers with reduced mobility", url: "https://europa.eu/youreurope/citizens/travel/transport-disability/reduced-mobility/index_en.htm", note: "assistance rights" },
  ],
};
