import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Story: "Ferries in Italy" — the rebuilt version of the site's original short
// ferry overview, kept at its established URL. It covers sea and lake travel
// only; train travel and choosing between modes are covered in "Italy by
// Train" and "Getting Between Italian Cities". Routes, seasons, ports,
// check-in times (GNV, Moby), luggage (Travelmar), Strait of Messina services
// (Caronte & Tourist, Blu Jet, Trenitalia), the 2026 Cinque Terre boat
// calendar and EU ship-passenger rights were checked on the operators' and
// authorities' own sites in September 2026. No fares or timetables are given.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/ferries-in-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const ferriesInItaly: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Where are ferries useful in Italy?"),
    answer("**Ferries matter wherever the sea — or a lake — is in the way.** They're the main surface link to **Sicily's** islands, **Sardinia**, and the islands of the **Bay of Naples**; the way across the **Strait of Messina**; a scenic alternative to coastal roads on the **Amalfi Coast** and in the **Cinque Terre**; and everyday transport on **Lake Como, Garda and Maggiore**. Services range from 20-minute car ferries to overnight ships with cabins. Most run on seasonal timetables, some depend on the weather, and the rules differ by operator — so check the route, the season and the port before you plan around a sailing."),
    p("Ferry travel works differently from trains. There are several operators on many routes, each with its own tickets; ports can be some distance from the city centre; vehicle and foot passengers board differently; and the sea itself can change the plan. This guide explains how Italy's ferries and boats work, region by region, and how to plan a crossing. For trains, see [Italy by train](/guides/italy-by-train); for choosing between modes on city-to-city trips, see [getting between Italian cities](/guides/getting-between-italian-cities)."),

    // ——— 2 ———
    h2("Types of boat service"),
    p("\"Ferry\" covers many kinds of vessel, and the names vary by region and operator. What matters most is whether a service carries vehicles, how fast it is and how exposed it is to rough seas."),
    table(
      ["Service", "What it is", "Vehicles?", "Good to know"],
      [
        ["Ferry (traghetto)", "A conventional ship carrying passengers and, usually, vehicles", "Usually", "Slower but steadier; the only way to take a car"],
        ["Fast ferry / fast passenger ship", "A quicker vessel, often passengers only", "Sometimes", "Faster, but more affected by rough seas"],
        ["Hydrofoil (aliscafo)", "A fast passenger boat that lifts on foils", "No", "Common in the Bay of Naples and to Sicily's islands; can be cancelled in rough seas"],
        ["Overnight ferry", "A large ship on long routes, with cabins or seats", "Yes", "Mainland to Sardinia and Sicily"],
        ["Water bus (vaporetto)", "Public transport on Venice's lagoon", "No", "Part of the city bus network, not a sea ferry"],
        ["Water taxi (taxi acqueo)", "A private boat hired for your group", "No", "Direct and expensive"],
        ["Lake boats and car ferries", "Passenger boats and car ferries on the lakes", "On car-ferry routes only", "Local tickets and timetables"],
        ["Local coastal boats", "Seasonal services between coastal towns", "No", "Timetables and stops depend on season and sea conditions"],
      ],
      "Terminology differs between operators; check what your ticket covers.",
    ),

    // ——— 3 ———
    h2("Italy's main ferry regions"),
    table(
      ["Region", "Main connections", "Typical services", "Planning note"],
      [
        ["Strait of Messina", "Calabria ↔ Sicily", "Car ferries, fast passenger boats, train ferries", "Short, frequent crossings"],
        ["Sicily's small islands", "Aeolian, Egadi, Pelagie, Pantelleria, Ustica", "Hydrofoils and ferries", "Weather and season affect services"],
        ["Mainland ↔ Sicily (long routes)", "Genoa, Civitavecchia, Naples, Salerno ↔ Sicily", "Overnight ferries", "Cabins and vehicle spaces sell out in summer"],
        ["Mainland ↔ Sardinia", "Genoa, Livorno, Civitavecchia ↔ Olbia, Porto Torres and others", "Day and overnight ferries", "Some routes are seasonal"],
        ["Bay of Naples", "Naples, Pozzuoli, Sorrento ↔ Capri, Ischia, Procida", "Hydrofoils and ferries", "Several departure ports and terminals"],
        ["Amalfi Coast", "Salerno ↔ Amalfi, Positano and other towns", "Fast ferries", "More routes in the main season"],
        ["Cinque Terre", "La Spezia and nearby ports ↔ the villages", "Seasonal passenger boats", "Stops depend on sea conditions"],
        ["Venice", "The lagoon, islands and airport", "Water buses, water taxis, airport boats", "Public transport rather than ferries"],
        ["Northern lakes", "Towns on Como, Garda and Maggiore", "Passenger boats and car ferries", "Timetables change with the season"],
      ],
    ),

    // ——— 4 ———
    h2("Mainland to island: what's different"),
    p("Island travel needs more planning than a train journey. There's no single ticket for the whole network, departures are fewer, some routes are seasonal, and the crossing can be affected by the weather. The biggest decision is whether you're travelling with a vehicle."),
    table(
      ["", "As a foot passenger", "With a vehicle"],
      [
        ["Booking", "Often possible close to departure on short routes; book ahead in peak season", "Book ahead, especially in summer — vehicle space is limited"],
        ["Check-in", "Usually simpler and later", "Earlier, with vehicle details (plate, make, model)"],
        ["Boarding", "On foot, often by a separate passenger walkway", "Drive on to the vehicle deck, following crew directions"],
        ["Luggage", "You carry it; storage on board varies", "Stays in the car, but decks are usually closed during the crossing"],
        ["On arrival", "You need onward transport from the port", "Drive straight off"],
      ],
    ),
    p("On long routes you also choose between a seat and a cabin, and between a day and an overnight crossing. The sections below cover the main regions."),

    // ——— 5 ———
    h2("Sicily by ferry"),
    p("Sicily is the region where ferries matter most, for short crossings, long routes and the smaller islands."),
    ul(
      "**Across the Strait of Messina** — Caronte & Tourist runs car and passenger ferries between Villa San Giovanni and Messina (Rada San Francesco); the operator gives a crossing time of about 20 minutes and departures every 40 minutes, around the clock. Blu Jet runs fast passenger boats between Villa San Giovanni and Messina, with tickets sold at the ports, in the MooneyGo app and as an add-on to Trenitalia and Italo train tickets.",
      "**Train and ferry** — Trenitalia's Intercity trains to Sicily cross the strait on a train ferry; the crossing takes about 30 minutes, and you can leave the train and go on deck.",
      "**From Reggio Calabria** — Blu Jet no longer runs its Reggio Calabria–Messina service, which ended in 2023; check the current options if you're starting from Reggio.",
      "**Long routes** — overnight ferries link Sicily with the mainland: GNV sails to Palermo from Genoa, Civitavecchia and Naples, Tirrenia runs Naples–Palermo, and Caronte & Tourist runs Salerno–Messina.",
      "**Smaller islands** — Liberty Lines runs hydrofoils to the Aeolian Islands (from Milazzo and other ports), the Egadi Islands (from Trapani), Ustica, Pantelleria and the Pelagie Islands; ferries also serve several islands.",
    ),
    {
      type: "image",
      src: "/images/guides/getting-between-italian-cities/messina-strait-ferry.webp",
      alt: "A white fast ferry crossing deep blue water towards the camera, with the city of Messina and hills behind",
      caption: "A fast ferry on the Strait of Messina, the link between Calabria and Sicily.",
      credit: unsplash("Giuseppe Famiani", "gieffe22"),
    },
    p("Island hydrofoils are sensitive to wind and sea conditions: in late September 2026, for example, Liberty Lines' own homepage listed suspended sailings for the day. Check the operator's notices before heading to the port. Our [Palermo guide](/cities/palermo-markets-monuments) covers arriving in the city, and [Sicilian food traditions](/food/sicily-food-traditions) what to eat once you're on the island."),

    // ——— 6 ———
    h2("Sardinia by ferry"),
    p("Sardinia is further from the mainland, so most crossings are long — several hours by day, or overnight."),
    ul(
      "**Main mainland ports** — Genoa, Livorno and Civitavecchia. GNV and Tirrenia sail from Genoa to Olbia and Porto Torres and from Civitavecchia to Olbia; Moby runs Livorno–Olbia, which it describes as operating all year.",
      "**Seasonal routes** — not everything runs all year. GNV's Genoa–Olbia service runs from May to October, and Moby's Genoa–Olbia from 23 May to 1 November 2026.",
      "**Which port?** — none is best for everyone: it depends on where you're coming from and where in Sardinia you're going.",
      "**Cabins** — on overnight crossings you can usually choose a cabin or a seat; cabins are limited and sell out early in summer.",
      "**Vehicles** — most visitors take or rent a car in Sardinia, where public transport outside the towns is limited. Book vehicle space well ahead for July and August.",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-port-ferries.webp`,
      alt: "The port of Genoa with ferries and a cruise ship moored in front of the city's towers and hills",
      caption: "The port of Genoa, one of the main departure points for Sardinia and Sicily.",
      credit: unsplash("Nikolai Kolosov", "nikolaikolosov"),
    },

    // ——— 7 ———
    h2("Naples and the islands"),
    p("Capri, Ischia and Procida are all reached from Naples, and some from nearby ports too. Several companies run hydrofoils and ferries, from different terminals — the city has more than one."),
    table(
      ["Destination", "Common departure ports", "Typical boat types", "Seasonal considerations"],
      [
        ["Capri", "Naples; Sorrento; some services from Castellammare and the islands", "Hydrofoils and ferries", "SNAV and Caremar run year-round services; more departures in summer"],
        ["Ischia", "Naples; Pozzuoli; Procida", "Hydrofoils and ferries, including car ferries", "Ports include Ischia Porto and Casamicciola"],
        ["Procida", "Naples; Pozzuoli; Ischia", "Hydrofoils and ferries", "Caremar boats arrive at Marina Grande"],
      ],
      "Check your ticket for the exact departure terminal.",
    ),
    ul(
      "**Naples terminals** — according to Caremar, its ferries to Procida leave from Calata Porta di Massa and its hydrofoils from Molo Beverello; SNAV uses the Stazione Marittima at Molo Angioino. They're close to each other on the waterfront, but not the same place.",
      "**Year-round core services** — Caremar says its ports of Naples, Pozzuoli, Sorrento, Capri, Ischia, Casamicciola and Procida are connected daily all year; SNAV runs Naples–Capri hydrofoils daily all year.",
      "**Weather** — hydrofoils are more likely than ferries to be cancelled in rough seas.",
      "**Vehicles** — small islands often limit visitors' cars; check the current local rules before planning to take one.",
    ),
    {
      type: "image",
      src: `${IMG}/capri-marina-grande.webp`,
      alt: "The harbour of Marina Grande on Capri, with boats, colourful buildings and steep limestone cliffs above",
      caption: "Marina Grande, Capri's main harbour, where ferries and hydrofoils arrive.",
      credit: unsplash("Jordi Vich Navarro", "jvich"),
    },
    {
      type: "image",
      src: `${IMG}/ischia-ferry-wake.webp`,
      alt: "The white wake of a ferry leaving the harbour of Ischia, with the island's green hills and waterfront behind",
      caption: "Leaving Ischia Porto on the ferry back to Naples.",
      credit: unsplash("Arno Senoner", "arnosenoner"),
    },
    p("Our [Naples guide](/cities/naples-first-visit) explains how the port area connects with the rest of the city."),

    // ——— 8 ———
    h2("The Amalfi Coast by boat"),
    p("On the Amalfi Coast, the boat is often the most pleasant way between towns: the coast road is narrow, winding and busy in summer, and the views from the sea are the classic ones. Boats aren't always faster than the bus, but they avoid the traffic."),
    ul(
      "**Where they go** — Travelmar's fast ferries link Salerno, Vietri sul Mare, Cetara, Maiori, Minori, Atrani, Amalfi, Praiano and Positano, and other companies run services along the coast and to Capri.",
      "**Season** — Travelmar says its service runs all year, with more routes and departures in the main season. Timetables change during the year, so don't assume every route runs every day.",
      "**Luggage** — Travelmar includes one piece of hand luggage up to 45 × 35 × 20 cm in the ticket; check the rules for larger bags.",
      "**Piers** — boats use small piers such as Positano's beach pier and Amalfi's harbour, often with steps up to town.",
    ),

    // ——— 9 ———
    h2("The Cinque Terre by boat"),
    p("Seasonal boats link the Cinque Terre with La Spezia and the Gulf of Poets, offering a view of the villages from the sea."),
    ul(
      "**Season** — Navigazione Golfo dei Poeti's Cinque Terre line runs from 28 March to 1 November in 2026, in several periods with different timetables. Outside that, a reduced \"Cinque Terre Trip\" runs on set dates in March and from November to early December.",
      "**Stops** — La Spezia, Lerici, Levanto, Porto Venere, Riomaggiore, Manarola, Vernazza and Monterosso. Corniglia, high on its cliff, isn't among them.",
      "**Sea conditions** — the operator notes that the stops served depend on the time of year and the weather and sea conditions on the day.",
      "**Alternative** — the regional train along the coast runs all year.",
    ),
    {
      type: "image",
      src: `${IMG}/manarola-boat.webp`,
      alt: "The colourful houses of Manarola on a rocky headland above the blue sea, with a boat passing offshore",
      caption: "Manarola from above, with a boat heading along the coast.",
      credit: unsplash("Oscar Se balade", "oscar_se_balade"),
    },

    // ——— 10 ———
    h2("Venice: water buses, water taxis and the airport boat"),
    p("Venice's boats are public transport rather than ferries in the usual sense."),
    ul(
      "**Vaporetti** — ACTV water buses run along the Grand Canal and to the islands, on the city's public transport tickets.",
      "**Water taxis** — private boats hired for your group; direct, and priced accordingly.",
      "**From the airport** — the Alilaguna water bus runs from Marco Polo airport to the historic centre, Murano and the Lido; see [airport transfers](/guides/italy-airport-transfers).",
      "**Traghetti** — in Venice, the word also means the gondola crossings of the Grand Canal at a few points.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-vaporetto-grand-canal.webp`,
      alt: "A vaporetto water bus on the Grand Canal in Venice, passing a floating stop and canal-side buildings",
      caption: "A vaporetto on the Grand Canal. In Venice, boats are everyday public transport.",
      credit: unsplash("Henri Picot", "henrip"),
    },
    p("Our [Venice guide](/cities/venice-quieter-neighbourhoods) explains the water bus network."),

    // ——— 11 ———
    h2("Lake boats and car ferries"),
    p("On the northern lakes, boats are part of local transport — but they're lake services, with calm-water boats and local tickets, not sea ferries."),
    ul(
      "**Who runs them** — Navigazione Laghi runs the public services on Lake Maggiore, Lake Garda and Lake Como.",
      "**Passenger boats** — slow boats and faster services link the lakeside towns; timetables change with the season.",
      "**Car ferries** — on some routes only, such as between Cadenabbia, Bellagio, Menaggio and Varenna on Lake Como, Maderno–Torri on Garda and Intra–Laveno on Maggiore. The operator publishes notices when services are limited — in September 2026, for example, buses and lorries couldn't use some Maderno–Torri crossings.",
      "**Tickets** — from lakeside ticket offices, the operator's app or, at smaller stops, on board.",
    ),
    {
      type: "image",
      src: `${IMG}/lake-garda-ferry-limone.webp`,
      alt: "A white passenger boat on Lake Garda near Limone, with misty mountains behind",
      caption: "A Lake Garda boat near Limone. Lake services have their own tickets and timetables.",
      credit: unsplash("Sebastian Marx", "samx"),
    },
    p("For Lake Como in detail, see [Lake Como in a weekend](/travel/lake-como-weekend)."),

    // ——— 12 ———
    h2("Do you need to book in advance?"),
    p("It depends on the route, the season, the operator and whether you have a vehicle or want a cabin."),
    ul(
      "**Foot passengers on short routes** — outside peak times you can often buy near departure; in summer and on weekends, book or buy early on the day.",
      "**Vehicles** — book ahead, especially in summer and on long routes.",
      "**Overnight crossings and cabins** — book early for summer and holiday periods.",
      "**Holiday peaks** — August, Easter and long weekends fill quickly on island routes.",
      "**Seasonal services** — check that the service is running before you book anything that depends on it.",
    ),

    // ——— 13 ———
    h2("How early should you arrive?"),
    p("There's no single rule: it depends on the operator, the port, the route and whether you have a vehicle. Operators publish their own requirements, and missing check-in can mean losing your place."),
    ul(
      "**GNV** — for sailings within Italy and to Spain, check-in is two hours before departure for passengers with vehicles and one hour for passengers without, according to GNV's FAQ.",
      "**Moby** — times vary by port and season: at Livorno, Civitavecchia and Olbia, for example, from June to September it asks foot passengers to arrive at least an hour before departure and passengers with vehicles within 90 minutes of departure.",
      "**Short crossings and hydrofoils** — times are usually shorter, but queues and ticket collection take time in summer.",
    ),
    important("Follow the time shown on your ticket or your operator's website — not a general rule of thumb.", "Your ticket decides"),

    // ——— 14 ———
    h2("Taking a car on an Italian ferry"),
    ul(
      "**Book the vehicle** — with its category, length and height if asked; vans, campers, roof boxes and trailers change the fare and the space needed.",
      "**Registration details** — you'll be asked for the plate, make and model, at booking or check-in.",
      "**Check-in** — earlier than for foot passengers; have your ticket, documents and vehicle registration to hand.",
      "**Boarding** — drive on when directed; crews position vehicles closely. Take what you need for the crossing with you.",
      "**During the crossing** — vehicle decks are usually closed to passengers.",
      "**Disembarking** — return to the car when announced; vehicles leave in the order the crew directs.",
    ),
    p("Driving on arrival brings its own rules — see [driving in Italy](/guides/driving-in-italy), especially for ZTLs in island and coastal towns."),

    // ——— 15 ———
    h2("Travelling as a foot passenger"),
    p("For Capri, Ischia, Procida, the Amalfi Coast, the Cinque Terre and the lakes, travelling without a car is usually easiest."),
    ul(
      "**Boarding** — walk on by the passenger gangway, showing your ticket.",
      "**Luggage** — you carry it on; storage space near the entrance fills quickly on busy boats.",
      "**Getting to the port** — check the walking distance, bus or taxi from your hotel or the station.",
      "**On arrival** — plan the onward bus, funicular or taxi, and remember that small islands often have limited taxis at busy times.",
    ),

    // ——— 16 ———
    h2("Overnight ferries"),
    ul(
      "**Accommodation** — depending on the ship, you choose between seats (sometimes reclining), shared or private cabins, and other options; not every overnight service offers every option.",
      "**Sleeping** — cabins are the comfortable choice on long crossings; bring what you need for the night in a small bag.",
      "**Meals** — larger ships usually have restaurants or cafés, but check what's available on board.",
      "**Arrival** — early-morning arrivals are common; plan how you'll get from the port if you're on foot.",
      "**Vehicles** — you can't usually return to the car deck during the crossing.",
    ),

    // ——— 17 ———
    h2("Luggage"),
    p("Luggage rules vary by operator and vessel. Large ferries usually allow normal luggage, sometimes with storage areas; small fast boats have limited space, and some set allowances — Travelmar, for example, includes one hand-luggage item up to 45 × 35 × 20 cm. With a vehicle, most luggage stays in the car. Tell the operator in advance about bicycles, surfboards, pushchairs or mobility equipment."),

    // ——— 18 ———
    h2("Tickets: what to check"),
    ul(
      "**Passenger names** — some operators require them for every passenger.",
      "**Route, date and time** — the right direction and day.",
      "**Departure and arrival ports** — and the terminal within the port.",
      "**Vehicle details** — plate, category and size.",
      "**Cabin or seat** — what's included.",
      "**Cancellation and change terms** — and what happens if the operator cancels.",
      "**Boarding instructions** — check-in time and where to go.",
    ),
    p("Buy from the operator's official website, app or port ticket office where you can: changes and disruption are simplest to handle that way. Ticket systems differ between operators, and local boats — such as Venice water buses or lake boats — use their own tickets."),

    // ——— 19 ———
    h2("Getting to the port"),
    p("The port is part of the journey. Before you go, confirm the exact terminal and entrance, how you'll get there — on foot, by bus, train or taxi — and, if driving, the vehicle access and any parking. Big ports such as Naples and Genoa have several terminals, and small towns may have separate piers for different operators."),
    {
      type: "image",
      src: `${IMG}/procida-corricella.webp`,
      alt: "The colourful houses of Corricella on Procida curving around a small harbour full of boats",
      caption: "Corricella, on Procida. Ferries and hydrofoils arrive at the island's main port, Marina Grande.",
      credit: unsplash("Kentaro Komada", "kenta_k"),
    },

    // ——— 20 ———
    h2("Weather and cancellations"),
    p("Sea conditions can delay or cancel sailings, particularly on fast boats and hydrofoils, which are more affected by wind and waves than large ferries. Operators post disruption notices on their websites and apps, and at the ports. Check on the morning of travel and again before leaving for the port, and avoid planning a tight connection — to a flight, say — straight after an island crossing."),
    p("EU rules on ship passenger rights apply to most ferries, and set out what you're entitled to if your sailing is cancelled or delayed. They don't cover every boat — very small vessels, very short crossings and some excursion boats are excluded — so check the operator's conditions too."),
    tip("If an island visit is the highlight of your trip, give it a spare day in case the weather cancels your first choice.", "Keep a buffer"),

    // ——— 21 ———
    h2("Accessibility"),
    p("Under EU rules, passengers with disabilities or reduced mobility are entitled to free assistance getting on and off ships and at ports. To make sure it's in place, tell the carrier, ticket seller or tour operator **at least 48 hours before travelling**, and explain the help you need. Facilities differ between vessels and ports: large ferries often have lifts and accessible cabins, while small boats and piers may involve steps and gangways. Ask the operator about the specific boat and port, and about wheelchair spaces and vehicle arrangements."),

    // ——— 22 ———
    h2("Families and children"),
    ul(
      "**Child tickets** — most operators offer reduced fares for children, with age bands and rules for infants that vary by company; check when booking.",
      "**Seating** — on busy boats, board early to sit together.",
      "**Pushchairs** — a compact, foldable one is easiest on gangways and small boats.",
      "**Vehicle travel** — with small children and lots of luggage, taking the car on a long crossing can be simpler.",
      "**Seasickness** — a calmer seat and a steadier ship help (see below).",
    ),

    // ——— 23 ———
    h2("Seasickness and comfort"),
    ul(
      "Check the sea forecast and choose a larger, slower ferry on rough days if you have the option.",
      "Sit where movement is least noticeable — often lower down and towards the middle of the boat.",
      "Carry water, and don't travel hungry or rushed.",
      "Allow extra time: a delayed or cancelled boat is easier to handle if you're not in a hurry.",
      "Follow the crew's safety instructions, and stay seated on fast boats when asked.",
    ),
    p("If you're prone to motion sickness, ask a pharmacist or doctor for advice before your trip."),

    // ——— 24 ———
    h2("Ferry, train or car?"),
    table(
      ["Option", "Works well for", "Main advantage", "Main limitation"],
      [
        ["Ferry", "Islands; coastal hops; lakes", "Often the only surface link; scenic", "Seasonal timetables; weather"],
        ["Train", "City-to-city travel on the mainland", "Frequent, central, predictable", "Can't reach the islands, except Sicily by train ferry"],
        ["Car", "Rural areas and large islands like Sardinia and Sicily", "Flexibility", "Vehicle ferry costs; ZTLs; parking"],
      ],
    ),
    p("The right choice depends on where you're going. Read [Italy by train](/guides/italy-by-train), [getting between Italian cities](/guides/getting-between-italian-cities), [driving in Italy](/guides/driving-in-italy) and [airport transfers](/guides/italy-airport-transfers) for the rest of the network."),

    // ——— 25 ———
    h2("Sample ferry journeys"),
    table(
      ["Journey", "Typical service", "Planning note"],
      [
        ["Naples → Capri", "Hydrofoils and ferries, all year", "Check the Naples terminal on your ticket"],
        ["Naples → Ischia", "Hydrofoils and ferries, including car ferries", "Several ports on Ischia"],
        ["Naples → Procida", "Hydrofoils and ferries", "Arrive at Marina Grande"],
        ["Salerno → Amalfi / Positano", "Fast ferries", "More departures in the main season"],
        ["Villa San Giovanni → Messina", "Car ferries and fast passenger boats", "Short, frequent crossings"],
        ["Genoa, Livorno or Civitavecchia → Sardinia", "Day and overnight ferries", "Some routes are seasonal"],
        ["Genoa, Civitavecchia or Naples → Palermo", "Overnight ferries", "Cabins sell out in summer"],
        ["Milazzo → Aeolian Islands", "Hydrofoils and ferries", "Weather can cancel hydrofoils"],
        ["Bellagio ↔ Varenna, Lake Como", "Passenger boats and car ferries", "Local lake tickets"],
      ],
      "Routes checked on operators' sites in September 2026. Check timetables for your date.",
    ),

    // ——— 26 ———
    h2("Planning a ferry day"),
    steps(
      ["Check the route", "Which operators serve it, and from which ports."],
      ["Confirm the port", "And the exact terminal or pier."],
      ["Check the season", "Is the service running on your date?"],
      ["Check the sailing", "Times for your day, including the return."],
      ["Book if needed", "Vehicles, cabins and peak dates first."],
      ["Check requirements", "Passenger names, vehicle details, check-in time."],
      ["Plan the arrival", "How you'll reach the port, and when."],
      ["Check the weather and notices", "On the morning of travel."],
      ["Keep onward plans flexible", "Especially flights and trains after a crossing."],
      ["Save contacts", "The operator's phone number and your booking reference."],
    ),

    // ——— 27 ———
    h2("Common ferry mistakes"),
    ul(
      "**Going to the wrong port or terminal** — Naples alone has several.",
      "**Confusing passenger and vehicle services** — hydrofoils don't take cars.",
      "**Assuming a seasonal route runs all year.**",
      "**Arriving too late** for check-in, especially with a vehicle.",
      "**Ignoring vehicle check-in requirements.**",
      "**Booking the wrong date** — overnight sailings arrive the next day.",
      "**Overlooking cancellation terms.**",
      "**Assuming every boat sails in bad weather.**",
      "**Not checking the return sailing** — the last boat back can be early.",
      "**Relying on old timetables from blogs.**",
      "**Forgetting that local boats have their own tickets** — Venice water buses and lake boats included.",
    ),

    // ——— 28 ———
    h2("Ferry planning checklist"),
    p("Tick items off as you plan; your progress is saved on this device."),
    checklist(
      "italy-ferry-planning",
      ["Route and booking", ["Route and operator chosen", "Departure port and terminal confirmed", "Service running on your date", "Return sailing checked", "Ticket booked, if needed"]],
      ["Before the day", ["Passenger names and vehicle details entered", "Check-in time noted", "Luggage and special items declared", "Assistance requested 48 hours ahead, if needed"]],
      ["On the day", ["Weather and service notices checked", "Route to the port planned", "Onward transport arranged", "Operator's contact number saved"]],
    ),
    p("Routes, seasons and rules in this guide were checked on the operators' and authorities' own sites in September 2026. They change every season, so always check the operator for your date. For the rest of your planning, see the [Italy travel planning checklist](/guides/italy-travel-planning-checklist), [how much a trip to Italy costs](/guides/italy-trip-cost) and the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Are ferries a good way to travel around Italy?", answer: "For islands, some coasts and the lakes, yes — often they're the only surface link. Between mainland cities, trains are usually more practical." },
    { question: "Do I need to book Italian ferries in advance?", answer: "It depends. Vehicles, cabins and summer or holiday sailings should be booked ahead; foot passengers on short routes can often buy nearer departure outside peak times." },
    { question: "Can I take a car on an Italian ferry?", answer: "On conventional ferries, yes, with a vehicle booking. Hydrofoils and most fast passenger boats don't carry vehicles, and some small islands limit visitors' cars." },
    { question: "Which Italian islands can I reach by ferry?", answer: "Sicily and Sardinia, the Bay of Naples islands (Capri, Ischia, Procida), Sicily's smaller islands such as the Aeolian and Egadi Islands, and many others." },
    { question: "How do I get from Naples to Capri?", answer: "By hydrofoil or ferry from Naples; SNAV and Caremar run all year. Check which Naples terminal your ticket uses. Boats also run from Sorrento." },
    { question: "Can I take a ferry from Naples to Ischia?", answer: "Yes — hydrofoils and ferries, including car ferries, run from Naples, and also from Pozzuoli and Procida." },
    { question: "How do I travel between Sicily and mainland Italy?", answer: "Across the Strait of Messina by car ferry or fast passenger boat from Villa San Giovanni, by Intercity train on the train ferry, or on overnight ferries from ports such as Genoa, Civitavecchia and Naples." },
    { question: "How do I get to Sardinia by ferry?", answer: "From Genoa, Livorno or Civitavecchia to ports such as Olbia and Porto Torres, by day or overnight. Some routes are seasonal, so check dates." },
    { question: "Are Amalfi Coast ferries available year-round?", answer: "Travelmar says its service runs all year, with more routes and departures in the main season. Don't assume every route runs every day; check the timetable." },
    { question: "Do ferries in Italy operate in bad weather?", answer: "Not always. Rough seas can delay or cancel sailings, especially hydrofoils and fast boats. Check the operator's notices on the day." },
    { question: "How early should I arrive at an Italian ferry port?", answer: "It depends on the operator and port. GNV asks for two hours with a vehicle and one hour without on domestic routes; follow the time on your own ticket." },
    { question: "Can I travel as a foot passenger?", answer: "Yes, on almost every route. It's usually the easiest option for Capri, Ischia, Procida, the Amalfi Coast and the lakes." },
    { question: "Are Italian ferries accessible for wheelchair users?", answer: "EU rules give passengers with reduced mobility the right to free assistance; notify the operator at least 48 hours ahead. Facilities vary by vessel and port." },
    { question: "Are lake ferries the same as sea ferries?", answer: "No. Lake boats are local services on calm water with their own tickets and timetables; some routes carry cars." },
  ],

  sourcesTitle: "Official sources",
  sources: [
    { label: "Caronte & Tourist — Strait of Messina", url: "https://www.carontetourist.it/en/strait-messina", note: "Villa San Giovanni–Messina ferries" },
    { label: "Blu Jet", url: "https://www.blujetlines.it/", note: "fast passenger boats across the Strait" },
    { label: "Trenitalia — trains to Sicily", url: "https://www.trenitalia.com/it/intercity/collegamenti/raggiungi-la-sicilia-in-treno.html", note: "Intercity and train ferry" },
    { label: "Liberty Lines — destinations", url: "https://www.libertylines.it/en/destinations/", note: "hydrofoils to Sicily's islands" },
    { label: "GNV — ferries to Sicily", url: "https://www.gnv.it/en/ferries-destinations/sicily", note: "routes to Palermo" },
    { label: "GNV — ferries to Sardinia", url: "https://www.gnv.it/en/ferries-destinations/sardinia", note: "routes and seasons" },
    { label: "GNV — embarking and check-in FAQ", url: "https://www.gnv.it/en/assistence/faq/embarking-and-check-in", note: "check-in times" },
    { label: "Moby — Livorno–Olbia", url: "https://www.moby.it/rotte/traghetti-sardegna/livorno-olbia-livorno/", note: "route and season" },
    { label: "Moby — check-in", url: "https://www.moby.it/partenza/prepararsi-allimbarco/check-in/", note: "arrival times by port" },
    { label: "Tirrenia", url: "https://en.tirrenia.it/", note: "Sardinia and Sicily routes" },
    { label: "Caremar", url: "https://mobile.caremar.it/it/idee-di-viaggio/ischia-procida/", note: "Bay of Naples ports" },
    { label: "SNAV — Naples–Capri", url: "https://www.snav.it/en/destinations/capri-e-sorrento-2/napoli-capri", note: "hydrofoils" },
    { label: "Travelmar", url: "https://www.travelmar.it/en/index", note: "Amalfi Coast ferries and luggage" },
    { label: "Navigazione Golfo dei Poeti — 2026 calendar", url: "https://blog.navigazionegolfodeipoeti.it/calendario-di-servizio-2026/", note: "Cinque Terre boats" },
    { label: "Navigazione Laghi", url: "https://www.navigazionelaghi.it/en/", note: "Lakes Maggiore, Garda and Como" },
    { label: "Your Europe — ship passenger rights", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/ship/index_en.htm", note: "delays, cancellations and scope" },
    { label: "Your Europe — passengers with reduced mobility", url: "https://europa.eu/youreurope/citizens/travel/transport-disability/reduced-mobility/index_en.htm", note: "assistance and notice" },
  ],
};
