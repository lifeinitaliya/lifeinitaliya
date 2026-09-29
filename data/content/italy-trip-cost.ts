import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "How Much Does a Trip to Italy Cost?" — the rebuilt version of the
// site's original short cost guide, kept at its established URL. Every euro
// figure below was checked on the operator's or attraction's official site in
// September 2026, except where the text says a figure comes from an official
// listing we could not load directly. Accommodation, food, flights and most
// train fares are dynamic and are deliberately not given as numbers.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });

const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});
const GUIDE_IMG = "/images/guides/complete-italy-travel-guide";

export const italyTripCost: ArticleContent = {
  body: [
    // ——— Opening ———
    answer("**There's no single honest figure for \"the cost of Italy\".** Two travellers on the same route can spend very different amounts, depending mostly on **accommodation**, then **destination**, **season**, **how you move around**, **how you eat**, **which attractions you pay for** and **how long you stay**. This guide doesn't invent averages. Instead it shows which costs are fixed and which vary, gives verified September 2026 prices for things that have a set price — airport trains, city transport tickets, major museums — and walks you through building a budget from real quotes for your own dates."),
    p("Throughout, prices are in euros, for one adult, and were checked on official sites in September 2026. They change: treat them as a snapshot and confirm them before you book. Flights to Italy are excluded unless we say otherwise."),
    {
      type: "image",
      src: `${GUIDE_IMG}/rome-cafe-tables-street.webp`,
      alt: "Outdoor restaurant tables set up beside a building on a street in Rome",
      caption: "Where you eat, and where you stay, shape a trip's cost more than almost anything else.",
      credit: unsplash("Sara Abilova", "sarahabilova"),
      wide: true,
    },

    // ——— 1 ———
    h2("Italy budget at a glance"),
    p("This table describes budget levels by what you choose rather than by invented euro amounts. Your own quotes for accommodation and trains will turn it into numbers."),
    table(
      ["Travel style", "Accommodation", "Food", "Transport", "Attractions", "Overall approach"],
      [
        ["Budget", "Hostels, simple guesthouses, rooms outside the centre", "Bakeries, markets, street food, one simple sit-down meal", "Regional trains, early high-speed fares, walking, buses", "Free sights plus one or two major tickets per city", "Few bases, slow pace, shoulder or low season"],
        ["Mid-range", "Central 2–3-star hotels, B&Bs, apartments", "Café breakfast, casual lunch, trattoria dinner", "High-speed trains booked ahead, public transport", "The main museums and sites you care about", "The comfortable default for most first trips"],
        ["Comfortable", "Central 4-star or boutique hotels", "Sit-down lunches and dinners, aperitivo", "Flexible train tickets, occasional taxis", "Most major sights, some guided tours", "More convenience, fewer compromises on location"],
        ["Premium", "5-star or luxury hotels, villas", "Fine dining, wine experiences", "First-class trains, private transfers, drivers", "Private tours and special access", "Budget set by choices, not by Italy"],
      ],
      "Budget levels by choice, not by price"
    ),
    important("Italy isn't uniformly expensive or cheap. A night in a central hotel in Venice in September and a night in a guesthouse in a small town in November are different products at very different prices. Always price your actual destinations and dates.", "Why we don't give one daily figure"),

    // ——— 2 ———
    h2("The biggest costs, fixed and variable"),
    p("It helps to separate costs that have a published price from those that move with demand."),
    table(
      ["Cost", "Fixed or variable?", "What drives it"],
      [
        ["Accommodation", "Highly variable", "City, neighbourhood, season, weekday vs weekend, how far ahead you book"],
        ["Flights to Italy", "Highly variable", "Departure country, season, airport, baggage, booking timing"],
        ["High-speed trains", "Variable", "Demand-based fares; cheaper fares sell out; flexible tickets cost more"],
        ["Regional trains", "Mostly fixed", "Set fares by distance, whenever you buy"],
        ["City public transport", "Fixed", "Published single tickets and passes in each city"],
        ["Airport trains and buses", "Fixed", "Published fares (see below)"],
        ["Museums and sites", "Mostly fixed", "Published prices; some add online booking fees or seasonal rates"],
        ["Food", "Variable by choice", "Where and how you eat more than the city itself"],
        ["Tours and experiences", "Variable", "Group or private, length, inclusions"],
        ["Car rental", "Highly variable", "Season, car size, insurance, one-way fees, plus fuel, tolls and parking"],
        ["Tourist taxes", "Fixed locally", "Set by each municipality; vary by accommodation type"],
        ["Travel insurance and mobile data", "Variable", "Your provider and cover"],
      ],
      "Fixed and variable costs"
    ),

    // ——— 3 ———
    h2("Verified reference prices (September 2026)"),
    p("These are published prices for things most visitors pay for, checked on the operator's official site. They're per adult, one way or one entry, unless stated."),
    table(
      ["Item", "Price", "Notes and source"],
      [
        ["Leonardo Express, Fiumicino ↔ Roma Termini", "€14", "Non-stop train; a 4-ticket group fare costs €40 (Trenitalia)"],
        ["Malpensa Express, Malpensa ↔ Milan stations", "€15 (children 4–13: €7.50)", "Trenord / Malpensa Express"],
        ["Rome public transport, 100-minute ticket", "€1.50", "Includes one metro ride; contactless Tap & Go accepted (ATAC)"],
        ["Venice ACTV ticket, 75 minutes", "€9.50", "Water buses, buses and trams; 3-day pass €45 (Venezia Unica)"],
        ["Venice airport transfers", "ACTV bus from €10; Alilaguna water bus from €18", "Venezia Unica sales listings"],
        ["Turin public transport, 100-minute ticket", "€1.90", "Buy on board by contactless card (GTT)"],
        ["Turin airport train to Porta Susa", "€3.70", "Torino Airport"],
        ["Turin airport bus (Arriva)", "€7.50", "Stops at Porta Nuova and Porta Susa (Arriva)"],
        ["Verona Airlink bus, airport ↔ Porta Nuova", "€7", "Valid 75 minutes, including city buses (ATV)"],
        ["Vatican Museums and Sistine Chapel", "€20, or €25 booked online", "The €5 difference is the official online booking fee (Vatican Museums)"],
        ["Trevi Fountain, basin area", "€2", "Ticket required until 22:00; the fountain is free to see from the square (Roma Capitale)"],
        ["Doge's Palace, Venice", "€35; €30 online 30+ days ahead", "Includes the Correr and other St Mark's Square museums (Musei Civici)"],
        ["Gallerie dell'Accademia, Venice", "€20", "Gallerie dell'Accademia"],
        ["Castelvecchio, Verona", "€9", "Musei Civici di Verona"],
        ["Archiginnasio and Anatomical Theatre, Bologna", "From €10; €12 with a guide", "Online booking compulsory (Bologna Welcome)"],
        ["San Petronio chapels, Bologna", "€5", "The basilica itself is free (Basilica di San Petronio)"],
        ["Palazzo Reale and Cappella Palatina, Palermo", "€19 (Thu–Mon); €15.50 (Tue–Wed)", "Royal Apartments not included Tue–Wed (Fondazione Federico II)"],
        ["St Peter's Basilica", "Free", "Optional paid timed booking; the dome has its own ticket"],
      ],
      "Verified prices, September 2026"
    ),
    p("Two widely used prices come from official listings we couldn't load directly from here, so check them before relying on them: according to the Parco archeologico del Colosseo's listings, its standard 24-hour Colosseum, Forum and Palatine ticket costs €18, with a small online booking fee; and according to the Ministry of Culture's listings, Pantheon entry rose to €7 from 1 July 2026."),
    tip("Under-18s get free entry to Italy's state museums and archaeological sites, and many other museums offer reductions for children and young people. Check each site's concessions before paying full price.", "Travelling with children or students?"),

    // ——— 4 ———
    h2("How much does it cost per day?"),
    p("A daily budget only means something if you say what it includes. Use these frameworks to set yours; add real numbers from your own quotes."),
    table(
      ["", "Budget traveller", "Mid-range traveller", "Comfortable traveller"],
      [
        ["Accommodation", "Included — dorm or simple private room", "Included — central double, shared cost", "Included — central 4-star or boutique"],
        ["Food", "Bakery or market breakfast and lunch, one simple dinner", "Café breakfast, casual lunch, trattoria dinner", "Two sit-down meals, aperitivo, some wine"],
        ["Local transport", "Walking and single tickets", "Tickets or day passes", "Public transport plus occasional taxis"],
        ["Major attractions", "About one paid site a day, averaged", "One or two a day where you want them", "Most you're interested in, some with tours"],
        ["Intercity trains", "Excluded — add per journey", "Excluded — add per journey", "Excluded — add per journey"],
        ["International flights", "Excluded", "Excluded", "Excluded"],
        ["Shopping and souvenirs", "Excluded", "Excluded", "Excluded"],
      ],
      "What a daily budget includes"
    ),
    p("Keep intercity trains, flights and shopping outside the daily figure, because they happen on particular days and vary enormously between trips. Comparing \"daily budgets\" online is only useful when you know what the other person included."),

    // ——— 5 ———
    h2("How trip length changes the cost"),
    p("Longer trips don't cost the same per day as short ones. A three-day city break concentrates the expensive parts — airport transfers, the most famous museums, central hotels at weekend rates — into a few days. On a longer trip, those fixed costs are spread out, and travellers tend to slow down."),
    table(
      ["Length", "Typical shape", "Effect on daily cost"],
      [
        ["3 days", "One city", "Airport transfers and big-ticket sights weigh heavily; weekends can be the priciest nights"],
        ["5 days", "One or two cities", "Similar to a city break, with one train journey"],
        ["7 days", "Two or three bases", "Intercity trains added; fewer major tickets per day than on a city break"],
        ["10 days", "Three bases, or two plus day trips", "Room for a slower day or a cheaper town; more meals out overall"],
        ["14 days", "Three or four bases, or a regional road trip", "Weekly apartment rates and slower days can lower the average"],
        ["21 days", "Several regions", "More regional travel and possibly car rental; daily attraction spend usually falls"],
      ],
      "Budget effects of trip length"
    ),
    p("Changing hotels often also costs money — each move adds a train fare, perhaps a taxi, and sometimes a fee for a single-night stay — so fewer bases usually cost less as well as feeling less rushed."),

    // ——— 6 ———
    h2("How costs differ between destinations"),
    p("We don't rank Italian cities by price, because the same city can be expensive in one week and reasonable in another. It's more useful to understand what pushes costs up in each place."),
    table(
      ["Destination", "What raises costs", "What helps"],
      [
        ["Rome", "Central hotels near the main sights; several paid major sites; peak holidays", "Walkable centre, cheap public transport (€1.50 for 100 minutes), many free churches and squares"],
        ["Venice", "Limited, high-demand accommodation in the historic centre; water transport (€9.50 per 75-minute ticket); luggage logistics", "Walking, multi-day transport passes, staying longer to spread costs"],
        ["Florence", "Compact centre with strong demand; seasonal pricing at major museums", "Everything walkable; bakeries and markets"],
        ["Milan", "Trade fairs and fashion and design weeks push up hotel prices", "Good public transport; many free sights and neighbourhoods"],
        ["Naples", "Peak-season coast trips from the city", "Street food and pizza; walkable centre"],
        ["Bologna", "Large trade fairs fill hotels", "Compact centre, free basilica and porticoes"],
        ["Turin", "Major events and fairs", "Walkable centre, public transport (€1.90 for 100 minutes)"],
        ["Verona", "Opera season and trade fairs push up hotel prices", "Compact centre; lake and wine trips by public transport"],
        ["Palermo", "Tours to sites outside the city", "Street food and markets; free churches"],
        ["Smaller towns", "Few hotels in peak season; car often needed", "Often lower accommodation prices outside holidays"],
      ],
      "What drives costs in different destinations"
    ),
    p("For more on each city, see our guides to [Rome](/guides/rome-in-three-days), [Florence](/cities/florence-for-first-timers), [Venice](/cities/venice-quieter-neighbourhoods), [Milan](/cities/milan-beyond-the-duomo), [Naples](/cities/naples-first-visit), [Bologna](/cities/bologna-in-two-days), [Turin](/cities/turin-first-visit), [Verona](/cities/verona-first-visit) and [Palermo](/cities/palermo-markets-monuments)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/venice-grand-canal-gondolas-rialto.webp`,
      alt: "Gondolas moored on the Grand Canal near the Rialto Bridge in Venice at sunset",
      caption: "In Venice, water transport and limited historic-centre accommodation shape the budget.",
      credit: unsplash("Rebe Adelaida", "rrebba"),
    },

    // ——— 7 ———
    h2("Accommodation"),
    p("Accommodation is usually the largest cost and the one you control most. The main types:"),
    ul(
      "**Hostels** — dorm beds and private rooms; mostly in larger cities.",
      "**Budget hotels and guesthouses** — simple rooms, sometimes with shared bathrooms or no breakfast.",
      "**Mid-range hotels and B&Bs** — the most common choice; check the location as carefully as the price.",
      "**Apartments** — good for families and longer stays; watch cleaning fees and check-in arrangements.",
      "**Agriturismi** — farm stays in the countryside; usually need a car.",
      "**Boutique and luxury hotels** — location, service and design at a premium.",
    ),
    p("What moves the price: the city and neighbourhood, season, weekdays versus weekends, local events and trade fairs, room type, whether breakfast is included, cancellation terms and how far ahead you book. Staying a little outside the most expensive core — in a well-connected neighbourhood rather than next to the main sight — often saves more than any other decision."),

    // ——— 8 ———
    h2("Tourist taxes and extra fees"),
    p("Many Italian municipalities charge a tourist tax (*imposta* or *contributo di soggiorno*) per person per night. Amounts are set locally, usually vary with the type and category of accommodation, may apply only for a set number of nights and can change from year to year. It's often paid at the accommodation and may not be included in the price you see when booking."),
    p("Venice has also trialled an access fee for day visitors on set dates; according to the City of Venice, the 2026 trial ended on 26 July, and future use is for the city to decide. Don't assume one city's rules apply elsewhere: check the municipality's or accommodation's information for each stop."),

    // ——— 9 ———
    h2("Food"),
    p("How you eat changes your budget more than where you eat. A day of bar breakfasts, bakery lunches and a trattoria dinner costs very differently from a day of restaurant lunches and a wine-led dinner, in the same city."),
    table(
      ["Type of meal", "How it fits a budget"],
      [
        ["Coffee and pastry at the bar", "One of Italy's best-value habits; standing at the counter is usually cheaper than table service"],
        ["Bakery or market lunch", "Pizza al taglio, focaccia, sandwiches or street food keep lunch simple"],
        ["Casual lunch", "A pasta course on its own is normal in most trattorias"],
        ["Aperitivo", "A drink with snacks in the early evening; sometimes a light dinner substitute"],
        ["Pizza", "Usually one of the most affordable sit-down dinners"],
        ["Trattoria or osteria dinner", "The mid-range default"],
        ["Fine dining", "A separate budget line"],
      ],
      "Food choices and budget"
    ),
    p("Many restaurants add a *coperto* (cover charge) per person, and some a service charge; both should be shown on the menu. Tipping isn't expected in the way it is in some countries; leaving a little for good service is up to you. For how meals work, see [Italian food traditions](/food/italian-food-traditions) and [Italian coffee culture](/food/italian-coffee-culture)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/italian-coffee-bar-counter.webp`,
      alt: "A bartender chatting with a customer across the counter of a small bar in San Quirico d'Orcia, Tuscany",
      caption: "Coffee at the counter: a small daily cost that adds up over a long trip.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Small daily expenses"),
    ul(
      "**Coffee and snacks** — small amounts, several times a day.",
      "**Water** — carry a bottle; many cities have public drinking fountains.",
      "**Gelato** — one of the cheaper treats, but daily treats add up.",
      "**Public toilets** — some charge a small fee; cafés usually expect you to buy something.",
      "**Luggage storage** — useful on travel days between check-out and your train.",
    ),

    // ——— 10 ———
    h2("Train costs"),
    p("Italy has two kinds of train that price very differently:"),
    ul(
      "**High-speed trains** (Trenitalia's Frecciarossa and Italo) — fares work like airline fares: they depend on demand, booking time and flexibility. Cheaper fares are limited and sell out; flexible fares cost more but can be changed. Seats are assigned.",
      "**Regional trains** — fixed fares by distance, whenever you buy, with no seat reservations. They're slower but cheap for short hops and day trips.",
    ),
    p("Book high-speed trains as soon as your dates are fixed, especially for Fridays, Sundays and holidays. Trenitalia also sells a pass for international visitors, and European rail passes cover Italy, but high-speed trains usually need a paid seat reservation on top; compare the pass with point-to-point fares for your actual route. Read [Italy by train](/guides/italy-by-train) for how tickets work, and [getting between Italian cities](/guides/getting-between-italian-cities) for route planning."),
    {
      type: "image",
      src: `${GUIDE_IMG}/milano-centrale-high-speed-train.webp`,
      alt: "A red high-speed train under the arched iron-and-glass roof of Milano Centrale station",
      caption: "High-speed fares vary with demand, so booking early matters most on busy routes.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },

    // ——— 11 ———
    h2("Local transport and airport transfers"),
    p("In most historic centres you'll walk, so local transport is modest. It becomes significant in Venice, where most journeys by boat require a ticket, and whenever you use taxis. Airport transfers are a fixed, easily forgotten cost: use the verified fares above, and compare a train or bus with a taxi. Some cities set fixed taxi fares between the airport and the centre — Rome's apply per car to destinations inside the Aurelian Walls — which can make a taxi reasonable for a family or group. See [Italian airport transfers](/guides/italy-airport-transfers)."),

    // ——— 12 ———
    h2("Renting a car"),
    p("A car's cost is far more than the daily rental rate:"),
    ul(
      "**Rental** — varies by season, car size and how far ahead you book; automatic cars are less common and can cost more.",
      "**Insurance and excess** — check what's included and what you'd pay after damage.",
      "**Fuel** — Italy publishes official fuel price data, and prices vary by region and road.",
      "**Tolls** — most motorways (*autostrade*) are tolled by distance; the operator's calculator shows the cost of a route.",
      "**Parking** — often paid in towns and hard to find in cities.",
      "**ZTL fines** — driving into a limited traffic zone without permission can bring fines, sometimes arriving months later.",
      "**One-way fees** — picking up in one city and dropping off in another often adds a charge.",
    ),
    p("A car makes economic sense for countryside, islands and small towns, especially for families or groups sharing the cost. For city-to-city travel, trains are usually simpler and avoid parking and ZTL costs. Read [driving in Italy](/guides/driving-in-italy) before deciding."),
    {
      type: "image",
      src: `${GUIDE_IMG}/liguria-coastal-road-car.webp`,
      alt: "A small red car on a narrow road between rocky cliffs and buildings on the Ligurian coast near Grimaldi",
      caption: "A car suits rural areas and coasts; in cities, parking and ZTLs add cost.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },

    // ——— 13 ———
    h2("Attractions and museums"),
    p("Italy has countless free sights — squares, fountains, many churches, views and markets — alongside ticketed museums and archaeological sites. If you plan to visit several major sites, give attractions their own budget line rather than treating them as incidental: in Rome alone, the Vatican Museums (€25 booked online), the Colosseum area and the Pantheon add up quickly. Some sites add online booking fees, some charge more in high season, and special exhibitions or guided routes cost extra. State museums offer free entry on certain days, but those days are usually the busiest."),

    // ——— 14 ———
    h2("Tours and experiences"),
    p("Walking tours, food tours, wine tastings, boat trips, cooking classes, guided museum visits and day trips are optional, and they can change a budget substantially. Decide which one or two matter most, price them for your dates, and add them as separate lines. Group tours cost much less per person than private ones; for families or groups of four or more, a private guide can sometimes compare reasonably."),
    {
      type: "image",
      src: `${GUIDE_IMG}/val-dorcia-tuscany-countryside.webp`,
      alt: "Rolling green hills, olive groves and a farmhouse ringed by cypress trees near San Quirico d'Orcia in Tuscany",
      caption: "Countryside stays and wine experiences usually mean a car or a tour — budget for both.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },

    // ——— 15 ———
    h2("Flights to Italy"),
    p("International airfare depends on where you fly from, when, which Italian airport you use, whether you fly direct, baggage allowances and when you book. It can be the largest single cost for long-haul travellers and a small one for short flights within Europe. We exclude flights from every budget in this guide: price them separately, and remember to add baggage fees and airport transfers at both ends."),

    // ——— 16 ———
    h2("Hidden and often-forgotten costs"),
    ul(
      "**Tourist taxes** — often paid on arrival or departure at the accommodation.",
      "**Baggage fees** — especially on low-cost flights.",
      "**Airport transfers** — at both ends of the trip.",
      "**Luggage storage** — on moving days.",
      "**Booking fees** — some official attraction sites add them for online reservations.",
      "**Card and currency fees** — check your bank's charges, and when a card machine offers to charge you in your home currency, choosing euros usually avoids a conversion mark-up.",
      "**Travel insurance** — including medical cover.",
      "**Mobile data** — roaming, a local SIM or an eSIM.",
      "**Laundry** — on longer trips.",
      "**Cover and service charges** — at restaurants.",
      "**Tolls, parking and fuel** — on road trips.",
    ),

    // ——— 17 ———
    h2("How to save without making the trip miserable"),
    ul(
      "**Travel in the shoulder season** when your dates are flexible, and avoid major events and holidays for accommodation.",
      "**Stay slightly outside the most expensive core**, in a neighbourhood with good transport links.",
      "**Book high-speed trains early**, and use regional trains for short journeys.",
      "**Group sights geographically** so you walk more and pay for fewer taxis.",
      "**Mix free and paid sights**: many of Italy's best experiences are squares, churches and views.",
      "**Alternate sit-down meals with casual food**: a bakery lunch pays for a better dinner.",
      "**Change hotels less often**: fewer moves mean fewer fares and less lost time.",
      "**Compare group and family fares**, such as the Leonardo Express group ticket.",
    ),

    // ——— 18 ———
    h2("Sample budgets: who pays for what"),
    p("Costs scale differently depending on who's travelling. That's why the same trip can cost a solo traveller more per person than a couple:"),
    table(
      ["Traveller", "Key assumptions", "How costs behave"],
      [
        ["Solo traveller", "Single room or hostel; public transport", "Accommodation isn't shared, so it's the biggest per-person cost; single rooms may cost almost as much as doubles"],
        ["Couple", "Double room; shared taxis", "Accommodation and taxis are split; tickets and food are per person"],
        ["Family (2 adults, 2 children)", "Family room or apartment; public transport", "Children often get reduced or free entry; family and group fares help (e.g. Malpensa Express child fare €7.50); taxis with fixed fares can compete with four train tickets"],
        ["Budget traveller", "Hostel or simple room; regional trains; free sights", "Low fixed costs; high-speed trains only if booked early"],
        ["Mid-range traveller", "Central 2–3-star hotel; high-speed trains booked ahead", "Balanced spending across categories"],
        ["Comfortable traveller", "Central 4-star; flexible tickets; taxis", "Accommodation and convenience dominate the total"],
      ],
      "How budgets scale by traveller"
    ),

    // ——— 19 ———
    h2("Worked examples: seven days in Rome, Bologna and Venice"),
    p("These examples use one route: arrive at Rome Fiumicino, three nights in Rome, two in Bologna, two in Venice, and fly home from Venice Marco Polo. Lines marked **verified** use the September 2026 prices above, per adult. Lines marked **your quote** vary too much to estimate honestly: fill them in with real prices for your dates. They are planning examples, not averages."),
    h3("Example A: seven days, budget-conscious"),
    table(
      ["Category", "Choices", "Amount"],
      [
        ["Accommodation (7 nights)", "Hostel or simple room outside the busiest core", "Your quote"],
        ["Intercity trains", "Rome–Bologna and Bologna–Venice, earliest cheap fares or regional trains", "Your quote"],
        ["Airport and local transport", "Leonardo Express €14; four Rome 100-minute tickets €6; two Venice 75-minute tickets €19; ACTV airport bus from €10", "About €49 (verified)"],
        ["Attractions", "Colosseum area (€18 + booking fee, per park listings); Pantheon €7; St Peter's and Bologna's basilica free", "About €27 (mostly verified)"],
        ["Food", "Bakery and market lunches, pizza or simple trattoria dinners", "Your estimate"],
        ["Extras", "Tourist taxes, contingency", "Your quote"],
      ],
      "Example A: budget-conscious"
    ),
    h3("Example B: seven days, mid-range"),
    table(
      ["Category", "Choices", "Amount"],
      [
        ["Accommodation (7 nights)", "Central 2–3-star hotels or B&Bs", "Your quote"],
        ["Intercity trains", "High-speed trains booked a few weeks ahead", "Your quote"],
        ["Airport and local transport", "Leonardo Express €14; eight Rome 100-minute tickets €12; Venice one-day transport plus airport transfer from €32", "About €58 (verified)"],
        ["Attractions", "Vatican Museums €25; Colosseum area about €20; Pantheon €7; Trevi basin €2; Archiginnasio with guide €12; San Petronio chapels €5; Doge's Palace €30 booked early; Accademia €20", "About €121 (mostly verified)"],
        ["Food", "Café breakfasts, casual lunches, trattoria dinners, one aperitivo", "Your estimate"],
        ["Extras", "Tourist taxes, one tour, contingency", "Your quote"],
      ],
      "Example B: mid-range"
    ),
    h3("Example C: seven days, comfortable"),
    table(
      ["Category", "Choices", "Amount"],
      [
        ["Accommodation (7 nights)", "Central 4-star or boutique hotels", "Your quote"],
        ["Intercity trains", "Flexible or higher-class high-speed fares", "Your quote"],
        ["Airport and local transport", "Fixed-fare taxi from Fiumicino (per car); Venice water taxi or ACTV; taxis when tired", "Your quote, plus verified tickets as needed"],
        ["Attractions", "As Example B, plus the Doge's Palace Secret Itineraries tour (€40 instead of €30) and guided visits", "About €131 (mostly verified), plus tours"],
        ["Food", "Sit-down lunches and dinners, wine, aperitivo", "Your estimate"],
        ["Extras", "Tourist taxes (higher for higher-category hotels), private tour, contingency", "Your quote"],
      ],
      "Example C: comfortable"
    ),
    p("The verified lines show how much of a trip's cost has a published price — and how small it is next to accommodation, trains and food, which is why those deserve the most attention when you plan. For the route itself, see [Rome in three days](/guides/rome-in-three-days), [Bologna in two days](/cities/bologna-in-two-days) and [Venice for first-time visitors](/cities/venice-quieter-neighbourhoods)."),

    // ——— 20 ———
    h2("Cost by trip type"),
    ul(
      "**City break** — few transfers, but the most famous sights and central hotels in a short time.",
      "**First-time multi-city trip** — intercity trains added; book the busiest routes early.",
      "**Northern Italy** — excellent rail links; city accommodation varies with fairs and events.",
      "**Southern Italy** — cities by train, but coasts and countryside often need ferries, buses or a car.",
      "**Family trip** — apartments, child concessions and fixed-fare taxis change the maths.",
      "**Couple's trip** — shared accommodation lowers per-person costs; restaurants and experiences often rise.",
      "**Food-focused trip** — meals and tastings become a main budget line rather than an extra.",
      "**Road trip** — rental, fuel, tolls and parking replace train fares; rural accommodation can be cheaper.",
      "**Train-based trip** — predictable local costs; high-speed fares reward early booking.",
      "**Luxury trip** — costs set by choices of hotel, dining and private services.",
    ),

    // ——— 21 ———
    h2("How to build your own budget"),
    steps(
      ["Choose your dates", "Season and events affect almost everything else."],
      ["Choose your cities or regions", "Keep bases to a sensible number for your trip length."],
      ["Count the nights in each place", "This drives accommodation, the largest cost."],
      ["Get real accommodation quotes", "For your exact dates, including taxes and fees where shown."],
      ["Add intercity transport", "Check train fares for your dates, or price a car with all its extras."],
      ["Add local transport", "Airport transfers and city tickets from official fares."],
      ["Add food", "Decide on a daily eating pattern and estimate from local menus."],
      ["Add attractions", "List the paid sights you actually want, with official prices."],
      ["Add experiences", "Tours, classes, tastings and day trips."],
      ["Add insurance, mobile data and other costs", "Including tourist taxes and luggage storage."],
      ["Add a contingency", "For the unexpected (see below)."],
    ),
    table(
      ["Line", "How to estimate", "Your figure"],
      [
        ["Accommodation", "Nights × quoted rate, plus fees", ""],
        ["Tourist taxes", "People × nights × local rate", ""],
        ["Intercity transport", "Train or car quotes for your dates", ""],
        ["Airport transfers", "Official fares, both ends", ""],
        ["Local transport", "Tickets or passes per city", ""],
        ["Food", "Daily pattern × days × people", ""],
        ["Attractions", "Official prices for your list", ""],
        ["Experiences", "Tours and classes you've chosen", ""],
        ["Insurance and mobile data", "Your provider's quotes", ""],
        ["Contingency", "Your chosen buffer", ""],
        ["Flights", "Kept separate", ""],
      ],
      "Budget worksheet"
    ),

    // ——— 22 ———
    h2("Leave a contingency"),
    p("Plans change: a train is cancelled and you rebook at a higher fare, rain sends you into a taxi, a missed slot means buying a new ticket, luggage goes astray, or you need to pay an insurance excess. Leaving a buffer turns these into inconveniences rather than budget problems. How much is your choice; many travellers use a percentage of the total, such as 10–15%, as a planning convention rather than a rule."),

    // ——— 23 ———
    h2("When to visit Italy on a budget"),
    p("Seasons affect hotel prices most, and flights, crowds and availability with them. Summer, Easter, Christmas and major events are typically the most expensive and heavily booked periods for cities and coasts; cities are often quieter in winter outside the holidays, while ski resorts are at their busiest. Coastal and island resorts may be partly closed outside the season. No month is guaranteed to be cheap everywhere, so compare prices for your own dates. See [the best time to visit Italy](/guides/best-time-to-visit-italy) for how seasons differ by region."),

    // ——— 24 ———
    h2("Before you book"),
    {
      type: "checklist",
      id: "italy-trip-cost",
      groups: [
        {
          title: "Price first",
          items: ["Accommodation for your exact dates", "High-speed trains for your busiest routes", "The paid attractions on your list"],
        },
        {
          title: "Don't forget",
          items: ["Airport transfers at both ends", "Tourist taxes", "Insurance and mobile data", "A contingency buffer"],
        },
        {
          title: "Keep separate",
          items: ["International flights", "Shopping", "One-off experiences"],
        },
      ],
    },
    p("The prices in this guide were checked on official sites in September 2026 and will change. For a full planning sequence, see our [complete Italy travel guide](/guides/complete-italy-travel-guide) and the [Italy travel planning checklist](/guides/italy-travel-planning-checklist); for other trip styles, [a weekend at Lake Como](/travel/lake-como-weekend) and [visiting the Dolomites](/guides/visiting-the-dolomites)."),
  ],

  faqs: [
    { question: "How much does a trip to Italy cost for one week?", answer: "It depends mostly on your accommodation, destinations and season, so price those for your dates first. Our seven-day examples show that published costs such as airport trains, city transport and major museums typically add up to tens of euros to a couple of hundred per person; accommodation, trains and food usually matter far more." },
    { question: "How much money do you need per day in Italy?", answer: "There's no reliable single figure. Decide what your daily budget includes — accommodation, food, local transport and one or two sights — and price those for your cities; keep intercity trains and flights separate." },
    { question: "Is Italy expensive for tourists?", answer: "It can be, especially for central accommodation in popular cities at busy times, but many costs are moderate: regional trains, public transport, bakeries and many free sights. Choices matter more than the country." },
    { question: "Is Italy cheaper than France or Switzerland?", answer: "We don't compare countries with a single figure, because costs depend on the cities, season and travel style. Compare real quotes for the specific places and dates you're considering." },
    { question: "How much does food cost in Italy?", answer: "It depends on how you eat: counter coffee, bakery lunches and pizza keep costs down, while daily restaurant lunches and wine-led dinners raise them. Check menus for cover and service charges." },
    { question: "How much does accommodation cost in Italy?", answer: "It varies more than anything else — by city, neighbourhood, season, day of the week and events. Get quotes for your exact dates, and compare staying just outside the most expensive areas." },
    { question: "Is it cheaper to travel Italy by train or car?", answer: "Between cities, trains are usually simpler and avoid parking, tolls and ZTL fines. A car can make sense for countryside and islands, especially for groups sharing costs — once you add insurance, fuel, tolls and parking." },
    { question: "How much should a couple budget for Italy?", answer: "Start from accommodation and taxis, which a couple shares, then add per-person costs such as trains, tickets and food. The per-person cost is usually lower than for a solo traveller." },
    { question: "How much should a family budget for Italy?", answer: "Look for family rooms or apartments, check child concessions — under-18s enter state museums free — and compare family or group fares and fixed-fare taxis with individual train tickets." },
    { question: "Is Venice more expensive than other Italian destinations?", answer: "Some costs are structurally higher: limited accommodation in the historic centre and water transport at €9.50 for a 75-minute ticket. Multi-day passes, walking and staying longer help." },
    { question: "How much should I budget for museums and attractions?", answer: "List the paid sites you want and add their official prices, including booking fees. For example, the Vatican Museums cost €25 booked online and the Doge's Palace €30–35." },
    { question: "Are tourist taxes included in hotel prices?", answer: "Not always. Many municipalities charge a per-person, per-night tax that's often paid at the accommodation. Check what your booking includes." },
    { question: "How much cash should I carry?", answer: "Cards are widely accepted, but carry some cash for small purchases, markets and places that prefer it. Check your bank's foreign transaction and withdrawal fees before you travel." },
    { question: "Can you travel around Italy on a budget?", answer: "Yes: travel outside peak periods, use regional trains or book high-speed fares early, stay in well-connected neighbourhoods, mix casual food with sit-down meals and enjoy the many free sights." },
    { question: "What are the biggest hidden costs in Italy?", answer: "Tourist taxes, airport transfers, restaurant cover charges, booking fees for attractions, luggage storage, and on road trips, tolls, parking and ZTL fines." },
    { question: "Should I budget separately for flights?", answer: "Yes. Airfare varies so much by departure point and season that it distorts any comparison of trip costs. Keep it as a separate line, including baggage fees." },
  ],

  sourcesTitle: "Official price sources",
  sources: [
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html", note: "Fiumicino train fare" },
    { label: "Malpensa Express — prices", url: "https://www.malpensaexpress.it/en/tickets/travel-documents/prices/", note: "Malpensa train fare" },
    { label: "Venezia Unica — ACTV tickets", url: "https://www.veneziaunica.it/en/buy-tickets/public-trasport-in-venice/actv-ticket-75", note: "Venice public transport" },
    { label: "GTT — Tap&Go", url: "https://www.gtt.to.it/cms/index.php?option=com_content&view=article&id=8456&catid=14", note: "Turin public transport" },
    { label: "ATV Verona — airport shuttle", url: "https://www.atv.verona.it/flex/cm/pages/ServeBLOB.php/L/EN/IDPagina/90", note: "Verona Airlink" },
    { label: "Vatican Museums — tickets", url: "https://www.museivaticani.va/content/museivaticani/it/organizza-visita/tariffe-e-biglietti.html", note: "admission and booking fee" },
    { label: "Trevi Fountain access — Roma Capitale", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "basin-area ticket" },
    { label: "Doge's Palace — visitor information", url: "https://palazzoducale.visitmuve.it/en/visitor-information/", note: "tickets" },
    { label: "Palazzo Reale di Palermo", url: "https://www.federicosecondo.org/visita/", note: "tickets" },
    { label: "Parco archeologico del Colosseo", url: "https://ticketing.colosseo.it/", note: "Colosseum tickets" },
  ],
};
