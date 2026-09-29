import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "Italy Travel Planning Checklist" — the rebuilt version of the site's
// original short checklist, kept at its established URL. Entry rules (EES,
// ETIAS, passport validity) were checked on official EU sources in September
// 2026; attraction booking rules come from the official sources used in our
// city guides. Nationality-dependent requirements are never stated as
// universal.

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
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/italy-travel-planning-checklist";
const GUIDE_IMG = "/images/guides/complete-italy-travel-guide";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const italyTravelPlanningChecklist: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What should you arrange before travelling to Italy?"),
    answer("**Most of the work of planning Italy is getting about ten decisions right, in the right order.** Fix your **dates**, then your **destinations** and how many bases, then **flights** (ideally into one city and out of another), then **accommodation** in well-connected areas. Book **intercity transport** — usually high-speed trains — and the handful of **major attractions** that need timed tickets. Check your **documents** against the rules for your nationality, set a **budget**, arrange **payments, phone data and insurance**, and do your **final checks** in the last week. The rest — which church, which trattoria — can be decided on the spot."),
    p("The order matters because each decision limits the next: your dates set prices and opening days, your cities set your airports and trains, and your hotels decide how easy each day will be. This checklist follows that order, explains why each step matters and links to our detailed guides where you need more."),
    {
      type: "image",
      src: `${IMG}/traveller-resting-rome-sunset.webp`,
      alt: "A traveller with her bags sitting near the Vittoriano monument in Rome at sunset, with Italian flags flying above",
      caption: "Arrival day in Rome. A little preparation makes the first hours much easier.",
      credit: unsplash("Claudio Hirschberger", "hd24"),
      wide: true,
    },
    steps(
      ["Dates", "Season, holidays and events affect prices, crowds and opening days."],
      ["Destinations", "Choose regions and a realistic number of bases."],
      ["Flights", "Pick arrival and departure airports that suit your route."],
      ["Accommodation", "Location and transport access matter as much as price."],
      ["Transport", "Book high-speed trains, or plan a car for rural areas."],
      ["Major attractions", "Reserve the few that need timed tickets."],
      ["Documents", "Check passport validity and entry rules for your nationality."],
      ["Budget", "Price accommodation and trains first; add the rest."],
      ["Connectivity and money", "Phone data, cards and insurance."],
      ["Final checks", "Confirmations, tickets offline, transfers and weather."],
    ),

    // ——— 2 ———
    h2("The master timeline"),
    p("Timings vary — a weekend in Rome needs less lead time than two weeks across three regions — so treat these as a guide. Tick items off as you go; your progress is saved on this device."),
    checklist(
      "italy-planning-timeline",
      ["2–6 months before", ["Choose dates, regions and number of bases", "Check passport validity and entry rules for your nationality", "Book flights (consider open-jaw)", "Book accommodation, especially for peak periods and events", "Set a first budget"]],
      ["1–2 months before", ["Book high-speed trains when fares are released", "Reserve timed-entry attractions", "Arrange travel insurance", "Book a rental car if needed and check licence requirements", "Plan airport transfers"]],
      ["2–4 weeks before", ["Draft a day-by-day plan grouped by area", "Book tours or experiences", "Check cards, fees and cash plans", "Arrange phone data (roaming, SIM or eSIM)"]],
      ["1 week before", ["Confirm flights, hotels and bookings", "Download tickets and save addresses offline", "Check the weather and any announced strikes", "Pack, following the church and walking considerations"]],
      ["24–48 hours before", ["Check flight status and online check-in", "Confirm your airport transfer and hotel check-in time", "Charge devices and pack a power bank", "Put documents and payment cards in your carry-on"]],
      ["Departure day", ["Passport, cards and phone in reach", "Allow time for check-in and security", "Keep the first hotel's address and transfer details offline"]],
      ["Arrival day", ["Follow your transfer plan", "Leave luggage if check-in is later", "Keep the first day light"]],
    ),

    // ——— 3 ———
    h2("Before you book anything"),
    p("Decide the shape of the trip before booking any single piece of it. A few questions settle most of it:"),
    ul(
      "**Which regions?** Italy is long: the north, centre and south are different trips. Two or three regions are plenty for two weeks.",
      "**How many cities?** A useful rule is at least two nights in each base, and three for major cities such as Rome.",
      "**Same airport in and out, or open-jaw?** Flying into one city and out of another (for example, into Venice and out of Rome) avoids a long journey back to your starting point.",
      "**Trains or a car?** Trains suit city-to-city trips; a car suits countryside, islands and small towns. Many trips combine both: trains between cities, a car for a few rural days.",
      "**How many hotel changes?** Each move costs roughly half a day. Fewer bases, with day trips, usually feel better than one night everywhere.",
    ),
    p("Our [complete Italy travel guide](/guides/complete-italy-travel-guide) covers these decisions in depth, and [how much a trip to Italy costs](/guides/italy-trip-cost) shows how each choice affects your budget."),

    // ——— 4 ———
    h2("Choose your route"),
    p("There's no single best itinerary. These examples show how different routes work; choose by trip length, interests, transport and season."),
    table(
      ["Route", "Suits", "Transport", "Planning notes"],
      [
        ["Rome + Florence + Venice", "First visits, art and history", "High-speed trains", "Fly into Venice and out of Rome, or the reverse"],
        ["Milan + Lake Como + Verona", "Lakes, cities, food and wine", "Trains; boats on the lake", "Lake boats run less often outside the main season"],
        ["Naples + Amalfi Coast + Rome", "Coast, archaeology, food", "Trains, ferries, buses", "Coastal transport is seasonal and busy in summer"],
        ["Sicily-focused trip", "Food, history, landscapes", "Car helpful; trains limited outside main lines", "Fly in and out of Palermo or Catania"],
        ["Northern Italy", "Cities, lakes, mountains", "Excellent rail network", "Check events and trade fairs in Milan, Bologna and Verona"],
        ["Southern Italy", "Coasts, food, slower pace", "Trains plus buses, ferries or a car", "Summer heat and seasonal closures matter"],
        ["Slower regional trip", "Repeat visitors, road trips", "Car", "One or two bases with day trips"],
      ],
      "Example routes"
    ),
    p("For individual destinations, see our guides to [Rome](/guides/rome-in-three-days), [Florence](/cities/florence-for-first-timers), [Venice](/cities/venice-quieter-neighbourhoods), [Milan](/cities/milan-beyond-the-duomo), [Lake Como](/travel/lake-como-weekend), [Verona](/cities/verona-first-visit), [Bologna](/cities/bologna-in-two-days), [Naples](/cities/naples-first-visit), [Turin](/cities/turin-first-visit), [Palermo](/cities/palermo-markets-monuments) and [the Dolomites](/guides/visiting-the-dolomites). For timing, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),
    {
      type: "image",
      src: `${IMG}/traveller-with-map-bari.webp`,
      alt: "A young woman in a pink cap studying a map on a street in the old town of Bari",
      caption: "Planning a route in Bari's old town. Fewer bases usually means more time to explore.",
      credit: unsplash("Fred Moon", "fwed"),
    },

    // ——— 5 ———
    h2("Flights"),
    ul(
      "**Departure and arrival airports** — Rome Fiumicino, Milan Malpensa and Venice Marco Polo are the main international gateways; Naples, Bologna, Pisa, Florence, Catania and Palermo also have international flights.",
      "**Return airport** — an open-jaw or multi-city ticket (into one city, out of another) often saves a day of backtracking.",
      "**Baggage allowance** — check it for every flight, including any short internal or low-cost legs.",
      "**Connection times** — allow for passport and border checks when connecting into the Schengen area.",
      "**Arrival time** — a late-evening arrival limits transfer options; plan how you'll reach your hotel.",
      "**Terminal and airport transfer** — note the terminal and how you'll get into the city.",
      "**Airline check-in rules** — some airlines require online check-in or document checks before travel.",
    ),

    // ——— 6 ———
    h2("Passport, entry and documents"),
    important("Entry requirements depend on your nationality, your passport and the purpose and length of your stay. Check the official sources for your situation — the Italian Ministry of Foreign Affairs' visa portal, the EU's Your Europe site and your own government's travel advice — rather than relying on general articles, including this one.", "Rules depend on your nationality"),
    p("A few points apply to many visitors from outside the EU:"),
    ul(
      "**Passport validity** — according to the EU, non-EU nationals' passports should be valid for at least three months after the date you intend to leave the EU, and must have been issued within the last ten years.",
      "**Visas** — some nationalities need a Schengen visa for short stays; others don't. Check before booking.",
      "**The Entry/Exit System (EES)** — according to the European Commission, the EES has been fully operational since 10 April 2026. It replaces passport stamps for non-EU short-stay visitors with a digital record, including fingerprints and a facial image, taken at the border. Allow extra time on your first entry.",
      "**ETIAS** — a future travel authorisation for visa-exempt visitors. According to the official ETIAS website, as of September 2026 it is not yet in operation and no applications are being collected; the EU will announce the start date several months in advance. Beware of unofficial sites offering applications.",
      "**Supporting documents** — border officials may ask for proof of accommodation, a return or onward ticket, or other documents.",
    ),
    p("EU citizens can travel with a valid passport or national identity card. Children need their own travel documents."),
    h3("Documents to carry or save"),
    ul(
      "Passport (and visa, if required)",
      "Travel insurance policy and emergency number",
      "Flight, hotel, train and attraction confirmations",
      "Driving licence, and an International Driving Permit if required for your licence",
      "A copy of your passport, stored separately from the original",
      "Emergency contacts, including your embassy or consulate in Italy",
    ),

    // ——— 7 ———
    h2("Accommodation"),
    p("Choose the location first and the hotel second: a well-placed room saves time and taxis every day."),
    table(
      ["Check", "Why it matters"],
      [
        ["Location", "Walking distance to what you'll see, or close to the metro"],
        ["Transport access", "Distance from the station you'll arrive at, and luggage over steps or bridges (Venice especially)"],
        ["Check-in time", "Often mid-afternoon; ask about luggage storage for early arrivals"],
        ["Late arrival", "Some small properties need advance notice for evening check-in"],
        ["Cancellation policy", "Flexible rates cost more but protect you if plans change"],
        ["Room occupancy", "Italian rooms can be small; check beds for families"],
        ["Lift and accessibility", "Historic buildings may have stairs and no lift"],
        ["Breakfast", "Included or not; many travellers prefer a bar breakfast"],
        ["Tourist tax", "Often charged separately at the property"],
      ],
      "Accommodation checks"
    ),
    p("Tourist taxes and prices vary by city and season; see [how much a trip to Italy costs](/guides/italy-trip-cost)."),

    // ——— 8 ———
    h2("Itinerary planning"),
    p("The most common planning mistake is fitting too much into each day. A simple framework keeps days realistic:"),
    ol(
      "**One major attraction** — a timed museum or site, usually in the morning.",
      "**Supporting sights nearby** — churches, squares and views within walking distance.",
      "**A proper meal break** — lunch is part of the day, not a gap in it.",
      "**Neighbourhood time** — a slow afternoon or evening in one area.",
      "**A buffer** — an hour or two unplanned for rest, queues or discoveries.",
    ),
    p("Group sights by area rather than by fame, and avoid crossing a city twice in one day. Our city guides show how this works in practice: [Rome in three days](/guides/rome-in-three-days), [Florence](/cities/florence-for-first-timers), [Venice](/cities/venice-quieter-neighbourhoods), [Bologna in two days](/cities/bologna-in-two-days) and [Naples](/cities/naples-first-visit)."),
    tip("Check opening days before fixing a plan: many museums close one day a week — Mondays in much of Italy, but not everywhere — and churches can close for services.", "Opening days"),

    // ——— 9 ———
    h2("Attractions that need planning"),
    p("Most sights in Italy don't need advance booking — squares, many churches, markets and neighbourhoods are free and open. A limited number of major attractions do, and for those, booking is the difference between a smooth visit and a lost morning."),
    table(
      ["Attraction", "Planning needed", "Why"],
      [
        ["Colosseum, Rome", "Book on the official site", "Named tickets with timed Colosseum entry"],
        ["Vatican Museums, Rome", "Book on the official site", "Booking secures entry; closed most Sundays"],
        ["The Last Supper, Milan", "Book well ahead", "Booking is compulsory and visits are limited"],
        ["Uffizi, Florence", "Book for peak periods", "Timed entry helps avoid long queues"],
        ["Doge's Palace, Venice", "Booking recommended", "Online tickets bought well ahead cost less"],
        ["Museo Egizio, Turin", "Book online", "Tickets are sold online only"],
        ["Borghese Gallery, Rome", "Book in advance", "Booking is compulsory"],
        ["Casa di Giulietta, Verona; Archiginnasio, Bologna", "Book online", "Online booking is compulsory"],
        ["Arena di Verona performances", "Book per event", "Summer opera and other events have their own tickets"],
      ],
      "Attractions to plan ahead"
    ),
    p("Always use the official ticket sites linked from our city guides; resellers often charge more. Check the date and time on every ticket before paying — mistakes are usually non-refundable."),

    // ——— 10 ———
    h2("Train planning"),
    ul(
      "**High-speed or regional?** High-speed trains (Frecciarossa and Italo) link the main cities with assigned seats and demand-based fares; regional trains are slower, with fixed fares and no seat reservations.",
      "**Book high-speed trains early** for busy days, especially Fridays, Sundays and holidays.",
      "**Choose the right station** — several cities have more than one major station: Termini and Tiburtina in Rome, Centrale and Porta Garibaldi in Milan, Santa Lucia and Mestre in Venice, Porta Nuova and Porta Susa in Turin. Not every station is in the historic centre.",
      "**Validation** — paper regional tickets must be validated before boarding; digital tickets for a specific train generally don't need it. Check your ticket's conditions.",
      "**Luggage** — there's no check-in; you carry your bags on board and store them yourself.",
      "**Connections** — leave generous time between trains, and between a train and a flight.",
      "**Strikes** — transport strikes are announced in advance on the Italian Ministry of Infrastructure's strike calendar.",
    ),
    p("Read [Italy by train](/guides/italy-by-train) for tickets and stations, and [getting between Italian cities](/guides/getting-between-italian-cities) for routes."),
    {
      type: "image",
      src: `${GUIDE_IMG}/milano-centrale-high-speed-train.webp`,
      alt: "A red high-speed train under the arched iron-and-glass roof of Milano Centrale station",
      caption: "High-speed trains link the main cities; book busy routes early.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },
    {
      type: "image",
      src: `${IMG}/sestri-levante-station.webp`,
      alt: "The yellow station building and platform at Sestri Levante in Liguria, with railway tracks under a blue sky",
      caption: "Sestri Levante station, on the Ligurian coast. Regional trains serve smaller towns at fixed fares.",
      credit: unsplash("Nick Fewings", "jannerboy62"),
    },

    // ——— 11 ———
    h2("Car and road-trip planning"),
    ul(
      "**Rental requirements** — minimum age, credit card and deposit rules vary by company.",
      "**Licence** — depending on where your licence was issued, you may need an International Driving Permit as well; check with your licensing authority and the rental company.",
      "**Insurance** — understand the excess and what's covered.",
      "**ZTL** — limited traffic zones in historic centres are enforced by cameras; driving in without permission can bring fines.",
      "**Tolls** — most motorways are tolled by distance.",
      "**Parking** — often paid in towns and hard to find in cities.",
      "**Fuel** — know whether your car takes petrol or diesel, and check self-service pumps.",
      "**Pickup and drop-off** — pick up as you leave a city rather than driving into one; one-way rentals may cost extra.",
      "**Transmission** — manual cars are more common; book early if you need an automatic.",
    ),
    p("Our guide to [driving in Italy](/guides/driving-in-italy) covers the rules in detail."),
    {
      type: "image",
      src: `${GUIDE_IMG}/liguria-coastal-road-car.webp`,
      alt: "A small red car on a narrow road between rocky cliffs and buildings on the Ligurian coast near Grimaldi",
      caption: "Coastal and rural roads suit a car; cities are easier without one.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },

    // ——— 12 ———
    h2("Airport transfers"),
    p("Plan your airport transfer before you fly, especially for late arrivals. Most major airports have a train or bus into the city, and taxis at the terminal; some cities set fixed taxi fares to the centre. Compare journey time, luggage and arrival time: a train is often quickest, a taxi easiest with heavy bags or children, and a pre-booked private transfer useful for very late arrivals. Our guide to [Italian airport transfers](/guides/italy-airport-transfers) covers the main airports."),

    // ——— 13 ———
    h2("Money and payments"),
    ul(
      "**Cards** — contactless card and phone payments are widely accepted, including on public transport in several cities.",
      "**A backup card** — carry a second card, kept separately.",
      "**Your bank** — check foreign transaction and ATM fees, and whether you need to tell the bank you're travelling.",
      "**ATMs** — use machines attached to banks where possible; check the fees shown on screen.",
      "**Currency conversion** — when a card machine or ATM offers to charge in your home currency, choosing euros usually avoids a conversion mark-up.",
      "**Some cash** — useful for small purchases, markets and places that prefer it.",
      "**Payment apps** — set up and test any app you plan to use before you leave.",
    ),

    // ——— 14 ———
    h2("Phone and internet"),
    ul(
      "**Roaming** — EU mobile plans can generally be used in Italy under the EU's roaming rules; for other plans, check your provider's charges.",
      "**eSIM or local SIM** — an eSIM can be set up before you travel if your phone supports it; a local SIM needs ID to buy.",
      "**Wi-Fi** — common in hotels and cafés, but don't rely on it for tickets.",
      "**Offline maps** — download maps for each city.",
      "**Translation app** — download the Italian language pack for offline use.",
      "**Travel apps** — the Trenitalia or Italo apps for trains, and your airline's app.",
    ),

    // ——— 15 ———
    h2("Travel insurance"),
    p("Read the policy, not just the price. Check:"),
    ul(
      "**Medical cover** — the level of cover, emergency treatment and repatriation.",
      "**Cancellation and curtailment** — what reasons are covered.",
      "**Delays and missed connections** — including strikes, which some policies treat differently.",
      "**Baggage and valuables** — limits per item.",
      "**Exclusions** — activities, pre-existing conditions and alcohol-related claims.",
      "**Destination and dates** — that Italy and all your travel days are covered.",
    ),
    p("EU citizens should also carry their European Health Insurance Card, which covers necessary state healthcare but isn't a substitute for travel insurance. Insurance terms vary widely; this is a list of questions, not advice on any particular policy."),

    // ——— 16 ———
    h2("What to pack"),
    checklist(
      "italy-packing",
      ["Documents", ["Passport or EU ID card", "Visa or travel authorisation if required", "Insurance details", "Printed or offline booking confirmations", "Driving licence (and permit if needed)"]],
      ["Clothing", ["Layers for changing temperatures", "Something covering shoulders and knees for churches", "A light rain jacket or umbrella", "Swimwear for coasts and lakes"]],
      ["Shoes", ["Comfortable, broken-in walking shoes for cobbles and stairs", "A second pair in case the first get wet"]],
      ["Electronics", ["Phone and charger", "Power bank", "Plug adaptor for Italian sockets (types C, F and L)", "Headphones"]],
      ["Travel accessories", ["Refillable water bottle", "Small padlock for luggage", "Reusable shopping bag", "Basic medicines and prescriptions in original packaging"]],
      ["Day bag", ["A bag that closes, worn in front in crowds", "Water, sunscreen and a light layer", "A scarf or shawl for church visits"]],
      ["Seasonal extras", ["Summer: hat, sunscreen, breathable clothes", "Winter: warm coat, gloves, waterproof shoes", "Mountains: layers and walking boots even in summer"]],
    ),
    {
      type: "image",
      src: `${IMG}/luggage-bicycle-bosa.webp`,
      alt: "A stack of vintage suitcases and a bicycle outside a building on a stone-paved street in Bosa, Sardinia",
      caption: "Pack light: stairs, cobbles and train racks reward smaller bags.",
      credit: unsplash("Bernhard", "bernhardbar"),
    },

    // ——— 17 ———
    h2("Italy-specific practical preparation"),
    ul(
      "**Churches** — many expect covered shoulders and knees; some large basilicas enforce it at the door.",
      "**Meal times** — lunch is usually from about 12:30–13:00 and dinner from about 19:30–20:00, later in the south; many restaurants close between services.",
      "**Cafés** — standing at the counter is common and often cheaper than table service; you may pay first at the till.",
      "**Luggage** — historic centres have stairs, cobbles and, in Venice, bridges; smaller bags make every move easier.",
      "**Public transport** — validate paper tickets; many cities also accept contactless payment.",
      "**Pedestrian zones and ZTL** — much of every historic centre is closed to unauthorised traffic.",
      "**Uneven streets** — cobbles and steps are normal; good shoes matter.",
      "**Water** — many cities have public drinking fountains; carry a refillable bottle.",
      "**Toilets** — public toilets can be scarce; cafés usually expect a purchase.",
      "**Service charges** — restaurants may add a cover charge (*coperto*) or service charge; tipping beyond that is your choice.",
      "**Emergencies** — 112 is the European emergency number.",
    ),
    {
      type: "image",
      src: `${IMG}/window-view-lake-como.webp`,
      alt: "A woman reading a magazine at a window overlooking Lake Como, with houses on the far shore",
      caption: "Plan some slow time: a quiet hour by Lake Como is part of the trip too.",
      credit: unsplash("Stanley Kustamin", "kyelnats"),
    },

    // ——— 18 ———
    h2("One week before"),
    checklist(
      "italy-one-week-before",
      ["Confirm", ["Flights, times and baggage", "Hotels and check-in times", "Major attraction bookings", "Train tickets and stations"]],
      ["Prepare", ["Download tickets and boarding passes", "Save hotel addresses offline", "Download offline maps", "Save emergency contacts"]],
      ["Check", ["The weather forecast", "Announced transport strikes", "Your bank and card fees", "Passport and documents"]],
    ),

    // ——— 19 ———
    h2("24–48 hours before"),
    checklist(
      "italy-48-hours-before",
      ["Final checks", ["Flight status and online check-in", "Airport transfer plan", "Accommodation check-in details", "Train and museum tickets accessible offline", "Weather for your first days", "Luggage weight and liquids", "Phone charged and power bank packed", "Documents and payment cards in your carry-on"]],
    ),

    // ——— 20 ———
    h2("Arrival day"),
    p("The first day is for arriving, not sightseeing. A few things make it smoother:"),
    ul(
      "**Find your transfer** — follow airport signs to trains, buses or the taxi rank, and use official taxis only.",
      "**Reach your accommodation** — keep the address and directions offline, and message the property if you'll be late.",
      "**Arriving late?** — confirm late check-in in advance, and consider a taxi rather than the last train or bus.",
      "**Arriving early?** — most hotels will store luggage until check-in; stations in larger cities have luggage deposits.",
      "**Jet lag** — spend time outdoors, eat at local times and keep plans light.",
      "**Keep the first day simple** — a walk, a good dinner and an early night; save major bookings for day two.",
    ),
    {
      type: "image",
      src: `${IMG}/train-bardonecchia-mountains.webp`,
      alt: "A train at the platform in Bardonecchia, in the Alps of Piedmont, with green mountains behind",
      caption: "Bardonecchia, in the Piedmont Alps. Leave slack in the plan for transfers and connections.",
      credit: unsplash("Casey Lovegrove", "clovegrove7"),
    },

    // ——— 21 ———
    h2("First-time mistakes to avoid"),
    ol(
      "**Too many cities.** Two nights per base is a sensible minimum.",
      "**Too many hotel changes.** Each move costs time and energy.",
      "**Booking attractions without checking the date.** Timed tickets are usually non-refundable.",
      "**Forgetting the airport transfer.** Especially after a late flight.",
      "**Assuming stations are in the centre.** Check which station your train uses.",
      "**Ignoring ZTLs.** Camera-enforced fines can arrive months later.",
      "**Not checking church and museum rules.** Dress codes, closing days and bag restrictions vary.",
      "**Leaving no flexibility for weather.** Keep an indoor option for rainy or very hot days.",
      "**Not keeping confirmations accessible.** Save them offline, not just in your inbox.",
    ),

    // ——— 22 ———
    h2("The master checklist"),
    p("Save or print this list and work through it; it's grouped by topic rather than by date."),
    checklist(
      "italy-planning-master",
      ["Documents", ["Passport valid for your whole trip plus the required margin", "Visa or travel authorisation checked for your nationality", "Insurance policy saved", "Copies of key documents"]],
      ["Flights", ["Outbound and return booked", "Baggage allowance checked", "Online check-in done"]],
      ["Hotels", ["All nights booked", "Check-in times and late arrival confirmed", "Tourist tax noted"]],
      ["Transport", ["High-speed trains booked", "Stations checked", "Airport transfers planned", "Car rental and licence requirements checked, if driving"]],
      ["Attractions", ["Timed tickets booked on official sites", "Dates and times double-checked", "Closing days checked"]],
      ["Money", ["Two cards, kept separately", "Bank fees checked", "Some cash for small purchases"]],
      ["Phone", ["Roaming, SIM or eSIM arranged", "Offline maps downloaded", "Train and airline apps installed"]],
      ["Packing", ["Walking shoes", "Church-appropriate layer", "Plug adaptor and power bank", "Medicines in original packaging"]],
      ["Final checks", ["Weather checked", "Strikes checked", "Tickets saved offline", "First day kept light"]],
    ),
    p("The entry rules in this guide were checked on official EU sources in September 2026 and can change. Check the rules that apply to you before you travel."),
  ],

  faqs: [
    { question: "How far in advance should I plan a trip to Italy?", answer: "For peak seasons, start two to six months ahead so you can book flights, accommodation and the few attractions that sell out. High-speed trains are best booked once fares are released for your dates." },
    { question: "What documents do I need to travel to Italy?", answer: "It depends on your nationality. Non-EU visitors need a passport that meets the EU's validity rules and, for some nationalities, a visa; EU citizens can use a passport or national ID card. Check official sources for your situation." },
    { question: "Should I book Italian trains in advance?", answer: "Book high-speed trains in advance for the best choice of fares and seats, especially at busy times. Regional trains have fixed fares and can be bought on the day." },
    { question: "Which Italy attractions need reservations?", answer: "A small number: the Colosseum, Vatican Museums, the Last Supper, the Borghese Gallery, the Museo Egizio and some smaller sites with compulsory booking. Most churches, squares and markets don't." },
    { question: "Do I need travel insurance for Italy?", answer: "It isn't generally required for visa-exempt visitors, but it's strongly advisable, particularly for medical costs. Some visa applications require it." },
    { question: "Should I rent a car in Italy?", answer: "Only for countryside, islands or small towns. For city-to-city travel, trains are simpler and avoid ZTL fines and parking." },
    { question: "Do I need an eSIM in Italy?", answer: "Not necessarily. EU plans can generally roam under EU rules; others can use roaming, a local SIM or an eSIM. Mobile data is useful for maps and tickets." },
    { question: "How much cash should I bring?", answer: "Cards are widely accepted, so a modest amount for small purchases and markets is usually enough, with ATMs available for more." },
    { question: "Should I book hotels in advance?", answer: "Yes for peak periods, events and central locations, where the best-placed rooms go first. Flexible rates help if your plans may change." },
    { question: "How many cities should I visit in one trip?", answer: "Roughly one base for every two to four nights: two or three for a week, three or four for two weeks." },
    { question: "What should I pack for Italy?", answer: "Comfortable walking shoes, layers, a cover-up for churches, a plug adaptor and a power bank — plus seasonal extras such as sun protection or waterproofs." },
    { question: "Do I need to print my Italy travel documents?", answer: "Digital tickets are widely accepted, but keep offline copies on your phone and consider printing key documents such as insurance details and your first hotel's address in case your phone fails." },
    { question: "What should I do the day before leaving?", answer: "Check your flight, confirm your airport transfer and hotel check-in, save tickets offline, charge your devices and put documents and cards in your carry-on." },
    { question: "What should I check when I arrive?", answer: "Your route to the hotel, your first day's bookings and the weather — then keep the rest of the day light." },
  ],

  sourcesTitle: "Official sources",
  sources: [
    { label: "Your Europe — travel documents for non-EU nationals", url: "https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm", note: "passport validity and entry" },
    { label: "Entry/Exit System (EES) — European Commission", url: "https://home-affairs.ec.europa.eu/news/entryexit-system-ees-fully-operational-2026-04-10_en", note: "status of the EES" },
    { label: "ETIAS — official website", url: "https://travel-europe.europa.eu/en/etias", note: "current status and start date" },
    { label: "Italian Ministry of Foreign Affairs — visas", url: "https://vistoperitalia.esteri.it/", note: "visa requirements by nationality" },
    { label: "Italian Ministry of Infrastructure — strikes", url: "https://scioperi.mit.gov.it/", note: "announced transport strikes" },
  ],
};
