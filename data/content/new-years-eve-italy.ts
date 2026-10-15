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

const IMG = "/images/events/new-years-eve-italy";

export const newYearsEveItaly: ArticleContent = {
  body: [
    answer("**New Year's Eve in Italy is best spent in a city.** Restaurants fill for long *cenoni* dinners, public squares draw crowds for midnight countdowns, and Italy's long tradition of celebrating with fireworks, music, and communal meals makes *Capodanno* one of the livelier nights of the year. Planning the 2026–2027 New Year requires patience: most official municipal programs and event announcements for 31 December 2026 will not be published until November or December 2026. This guide covers what is confirmed and what visitors should verify closer to their trip."),

    {
      type: "facts",
      title: "New Year's Eve in Italy at a glance",
      rows: [
        { label: "Key date", value: "31 December 2026 (New Year's Eve) → 1 January 2027 (New Year's Day, public holiday)" },
        { label: "Public holiday", value: "1 January (Capodanno) is a national public holiday; most shops and businesses close. 31 December is a normal working day." },
        { label: "Municipal programs", value: "Most official 2026–2027 event programs have not been announced as of October 2026 — check city tourism websites in November–December" },
        { label: "Rome tradition", value: "Free Circus Maximus concert (ran 2022–2025 under Roma Capitale); 2026 edition not yet confirmed" },
        { label: "Milan development", value: "As of July 2026, Comune di Milano was seeking an organiser for a free Piazza Duomo concert — first since 2019" },
        { label: "Best for", value: "Visitors who enjoy dining, city culture, piazza atmosphere, and can be flexible about specific confirmed events" },
        { label: "Book early", value: "Accommodation and restaurant reservations should be made well in advance; NYE is one of the busiest nights of the year" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Is New Year's Eve a good time to visit Italy?",
        "Where to spend New Year's Eve",
        "City by city guide",
        "Italian New Year's Eve traditions",
        "Restaurant and dining planning",
        "Weather and what to pack",
        "Getting around on New Year's Eve",
        "Planning and safety checklist",
        "Sample itineraries",
      ],
    },

    image("rome-piazza-del-popolo-nye", "A large crowd gathered around an illuminated Christmas tree in Piazza del Popolo, Rome, on a winter evening", true),

    h2("Is New Year's Eve a good time to visit Italy?"),
    p("New Year's Eve is one of the busiest nights of the year in every major Italian city. It is also one of the most expensive: accommodation prices surge across Rome, Florence, Venice, and Naples, and most restaurants operate only on fixed-price *cenone* menus with mandatory booking. Museums and attractions are often closed on 1 January; some reopen with free or reduced-price entry as part of municipal *Capodanno* programming."),
    p("For the right kind of traveller — someone who enjoys the communal energy of Italian piazzas, is happy to plan around a long *cenone* dinner, and is comfortable in large crowds — New Year's Eve in Italy is genuinely memorable. For visitors who prefer quiet evenings, are travelling with young children in cold weather, or expect guaranteed events at specific times, a different period may suit better."),
    p("The practical case for New Year's Eve is the atmosphere. Italians celebrate *Capodanno* with more warmth than formality: piazzas fill spontaneously, neighbours appear on balconies with spumante, and even the smallest towns find a way to mark the midnight hour. You do not need to be at a paid event to feel part of it."),
    note("**About the 2026–2027 programs.** As of October 2026, no Italian city had published its full New Year's Eve programme for 31 December 2026. City tourism offices typically release event details in November or December. Throughout this guide, we distinguish between established recurring traditions (what has happened in previous years) and confirmed 2026–2027 announcements (what is formally confirmed for this season). Always verify directly with the relevant official source before booking travel around a specific event."),

    h2("Where to spend New Year's Eve"),
    p("Each Italian city offers a distinct character for New Year's Eve. The table below summarises the key planning considerations as of October 2026."),
    table(
      ["City", "Celebration style", "2026–2027 status", "Key planning note"],
      [
        ["Rome", "Free outdoor concert tradition (Circus Maximus) + thousands in piazzas", "Concert not yet announced; check turismoroma.it", "Book accommodation and restaurants months in advance"],
        ["Naples", "Free concert at Piazza del Plebiscito tradition + fireworks near Castel dell'Ovo", "Program not yet announced; check comune.napoli.it", "Fireworks permitted in Naples in recent years; check current rules"],
        ["Florence", "Private fireworks at midnight; piazza concerts", "No central program; individual venues announce separately", "Book *cenone* well in advance; pedestrian zones apply"],
        ["Milan", "Possible return of Piazza Duomo free concert for 2027 (first since 2019–2020)", "Organiser search under way as of July 2026; not yet confirmed", "Piazza capacity limits apply; book accommodation early"],
        ["Venice", "Fireworks over Bacino di San Marco; street parties", "Specific rules not yet published; check veneziaunica.it", "Glass bottles and certain fireworks banned; pedestrian gates apply"],
        ["Bologna", "Piazza Maggiore countdown; restaurant cenoni", "No large municipal event announced", "Quieter than Rome/Naples; easier restaurant access"],
        ["Turin", "City squares, restaurant events, winter atmosphere", "No large outdoor event announced", "Good base for northern Italy; combine with Christmas market remnants"],
      ],
      "Confirmation status as of October 2026. Check official city tourism websites for updates."
    ),

    h2("City by city guide"),

    h3("Rome"),
    p("Rome's New Year's Eve centres on the *Capodanno al Circo Massimo* — a free outdoor concert at the Circus Maximus, organised each year by Roma Capitale in partnership with promoters and a radio media partner. The event has run every year since 2022, drawing tens of thousands to the ancient chariot-racing venue. Midnight is marked with a countdown and fireworks. A separate daytime *Capodarte* programme on 1 January offers free or reduced-price access to museums, galleries, and cultural sites across the city."),
    p("The 2026–2027 edition has not been officially confirmed as of October 2026. Roma Capitale and its partners typically announce the programme and the artists in late November or early December. Check [turismoroma.it](https://www.turismoroma.it/) and the Roma Capitale communications office for updates."),
    p("Whatever the official programme, Rome's piazzas — Piazza Navona, Piazza del Popolo, Piazza di Spagna, Campo de' Fiori — fill independently at midnight. The city does not guarantee a fireworks display from a specific location; private fireworks from balconies and rooftops have historically been widespread, though recent years have seen bans on some types of consumer fireworks across central areas."),
    tip("The Circus Maximus area, if the concert returns, fills to capacity. Arrive early; late arrivals may find pedestrian access restricted. The perimeter of the Terme di Caracalla is often a good alternative gathering point nearby."),
    image("rome-colosseum-night", "The Colosseum lit up at night with a crowd gathered below at the base of the ancient amphitheatre"),

    h3("Naples"),
    p("Naples celebrates *Capodanno* with more noise than almost any other Italian city. The tradition of private consumer fireworks — still permitted in Naples in recent years, when many northern cities have banned them — means the sky across the bay fills with colour from around 23:30 on 31 December. The official centrepiece is typically a free concert at Piazza del Plebiscito, the grand Baroque square in front of the Palazzo Reale, with the concert spilling into 1 January."),
    p("The 2026–2027 programme has not been confirmed. In previous years the Comune di Napoli funded a three-day *Capodanno lungo* (extended New Year) with concerts on 29–31 December and 1 January, spending around €750,000 on the programme. For confirmed details, check comune.napoli.it and the Città di Napoli tourism pages when they are published."),
    p("The most atmospheric viewing point for the unofficial fireworks display over the bay is the Lungomare Caracciolo, the seafront promenade running from Castel dell'Ovo towards Mergellina. The view across the bay to Vesuvius, with fireworks erupting from boats, balconies, and the hillside neighborhoods, is unlike any other city in Italy."),
    image("naples-waterfront-night", "The lights of Naples reflected in the bay at night, with the city climbing up the hillside behind the waterfront"),

    h3("Florence"),
    p("Florence's New Year's Eve is organised at city and neighbourhood level rather than through a single municipal spectacular. The main piazzas — Piazza della Repubblica, Piazza Santa Croce, Piazza della Signoria — draw midnight crowds. A German *Weihnachtsmarkt* (Christmas market) sometimes continues into late December at Piazza Santa Croce, providing a venue with some atmosphere. Private fireworks appear at midnight across the city."),
    p("There is no single official municipal fireworks display; the city's one guaranteed civic pyrotechnic moment is the feast of San Giovanni (24 June). Visitors should not travel to Florence on the assumption of a confirmed public fireworks show on 31 December; check what is announced by the Comune di Firenze closer to the date at comune.fi.it."),
    p("Florence is well-suited to a quieter New Year's Eve focused on dinner and atmosphere. The restaurant *cenone* here is often exceptional — the city has some of the best trattorie in Tuscany — and the streets of Oltrarno and Santa Croce are beautiful in winter."),
    image("florence-night-skyline", "The illuminated skyline of Florence at night, with the Duomo's dome and the tower of Palazzo Vecchio rising above the city"),

    h3("Milan"),
    p("Milan had not held a major free outdoor concert in Piazza Duomo at New Year since the 2019–2020 edition. As of July 2026, the *Comune di Milano* had published a notice inviting organisations to bid for the role of co-organiser of a Capodanno 2027 event in Piazza Duomo, with the organiser expected to cover the costs. Mayor Beppe Sala had publicly stated his support for the return of the concert. The process was ongoing as of the time of writing; no date, programme, or artist lineup had been confirmed."),
    p("If a Piazza Duomo event is confirmed, it would be the city's first large outdoor New Year concert since before the pandemic. In years without a Piazza Duomo event, Milan's celebrations centre on private restaurant events, hotel parties, and smaller square gatherings across the *navigli* and Brera neighbourhoods. For updates, check comune.milano.it."),
    p("Milan in winter has its own appeal: the Christmas lights in the streets around the Duomo, the fashion district, and the *Galleria* remain up into January. The Pinacoteca di Brera and the Museo del Novecento are open and uncrowded on weekdays in early January."),
    image("milan-duomo-night", "The Milan Cathedral illuminated in golden light against a deep blue night sky"),

    h3("Venice"),
    p("Venice's New Year's Eve fireworks display over the Bacino di San Marco has been one of the city's signature celebrations for decades. The display is best viewed from the Riva degli Schiavoni — the waterfront promenade east of Piazza San Marco — and from the area near the Arsenale vaporetto stop. Fireworks are **not** visible from Piazza San Marco itself or Piazzetta San Marco; the view from those points is blocked by the Doge's Palace and surrounding buildings."),
    p("Venice applies strict crowd-management and safety rules on New Year's Eve, typically published in December by the Questura (police headquarters) and the Comune di Venezia. In recent years these have included: pedestrian access gates on the main *calli* (lanes) leading to the historic centre; a ban on selling or consuming drinks in glass bottles, plastic bottles, and cans from 7 pm on 31 December until 6 am on 1 January; and restrictions on boat mooring near the display area from 9 pm. Capacity limits may lead to access gates being closed once a zone is full. Check [veneziaunica.it](https://www.veneziaunica.it/) for the 2026–2027 rules when published."),
    tip("Arrive at the Riva degli Schiavoni viewing area by 22:00 to secure a good position. Vaporetto services continue on New Year's Eve but run on a modified schedule; check actv.avmspa.it for the confirmed timetable."),
    image("venice-canal-night", "Illuminated buildings and their reflections in a Venetian canal on a calm winter night"),

    h3("Bologna"),
    p("Bologna's New Year's Eve is lower-key than Rome or Naples, and better suited to visitors who want a genuine Italian city experience without the crowd pressures of the largest celebrations. Piazza Maggiore draws a midnight crowd, and the porticoes — those covered walkways that make Bologna uniquely walkable in any weather — make the city comfortable even in cold or wet conditions."),
    p("The city's food culture is at its finest in the winter *cenone*. Traditional Bologna restaurants serve tortellini in brodo, cotechino with lentils, and tagliatelle al ragù with a formality and precision that reflects the city's culinary pride. Booking well in advance is essential; the best *trattorie* fill months ahead for New Year's Eve. For city orientation, the [Bologna in two days guide](/cities/bologna-in-two-days) covers the main areas."),

    h3("Turin"),
    p("Turin celebrates New Year's Eve with a combination of private restaurant events and piazza gatherings, particularly in Piazza Castello and along the Po riverside. The city's hot-chocolate and *bicerin* café culture makes it one of the most comfortable Italian cities for a cold-weather visit. The Mole Antonelliana, one of Italy's most distinctive buildings, is often illuminated for the holiday."),
    p("Turin's NYE offer is supplemented by its proximity to the Alps: within 45 minutes of the city centre, several ski resorts are in full winter operation by the end of December, making Turin a practical base for a ski-and-city New Year break. For city information, the [Turin first visit guide](/cities/turin-first-visit) covers the essentials."),

    image("rome-spanish-steps-night", "The Spanish Steps in Rome illuminated at night, with the Trinità dei Monti church at the top and people gathered in the piazza below"),

    h2("Italian New Year's Eve traditions"),
    p("*Capodanno* in Italy carries a distinct set of customs that vary by region and family, but share a common thread: the transition to the new year should be celebrated at the table, in the company of people who matter, and with food that brings luck."),

    h3("The cenone"),
    p("The *cenone di Capodanno* — literally the 'big dinner' — is the central event of the Italian New Year's Eve. It is a long, multi-course meal shared with family or friends, typically beginning around 8 or 9 pm and running to midnight or beyond. Restaurants offer fixed *cenone* menus that include everything from antipasto through to a midnight champagne toast; some add a live band, DJ, or countdown event. Private homes hold their own *cenoni*, often going into the early hours."),
    p("For visitors, the *cenone* is both an experience and a planning imperative. Restaurants operating on a *cenone* basis do not take walk-in reservations on 31 December; they book out weeks or months in advance. The fixed menu is typically more expensive than a regular dinner — sometimes substantially so — and menus often require confirmation and payment of a deposit. Check cancellation terms before booking."),

    h3("Lentils and cotechino"),
    p("Among Italy's New Year's Eve food traditions, the most widely observed is lentils (*lenticchie*) served with cotechino or zampone. Lentils symbolise money and prosperity — their coin-like shape is cited by Roman-era sources and the tradition has persisted for centuries. Cotechino is a large, slow-cooked pork sausage from Emilia-Romagna (Modena holds PGI status for its version); zampone is a pig's trotter stuffed with a similar mixture. Both are intensely flavoured and served with the lentils and often a side of mashed potato or mostarda."),
    p("In coastal areas and the south, the *cenone* is more likely to centre on seafood — often a 'feast of the fishes' running through multiple courses. In the north, particularly in Piedmont and Lombardy, the pork-based dishes dominate. The variation matters for visitors with dietary restrictions: always specify your requirements when booking and confirm what the fixed menu contains."),

    h3("Midnight and afterwards"),
    p("At midnight, the toast is with spumante — Italy's sparkling wine, whether Prosecco, Franciacorta, or Asti Spumante. The custom of eating a spoonful of lentils at midnight is observed in some households and restaurants. Red underwear for the new year is a widespread good-luck tradition, visible in shop windows across Italy from November. Pomegranate seeds, for their wealth of seeds implying prosperity, appear on some *cenone* tables."),
    p("After midnight, cities fill and empty in waves: some revellers head home after the countdown while others move to clubs, bars, or piazzas for the continuation. Public transport in most cities runs a limited overnight service on New Year's Eve; check schedules in advance."),

    h2("Restaurant and dining planning"),
    p("New Year's Eve is one of the most heavily booked nights of the Italian dining calendar. Key points for visitors:"),
    ul(
      "**Book as early as possible** — ideally two to three months in advance for the best restaurants. The most sought-after trattorie in Rome, Florence, and Bologna can be fully booked from October.",
      "**Fixed menus are the norm** — most restaurants operate a *cenone* fisso on 31 December, with a set price covering multiple courses and often including a toast at midnight. Prices vary widely, from around €50 to €200 or more per person depending on the venue.",
      "**Confirm dietary requirements** — fixed menus are not always flexible. If you are vegetarian, vegan, or have allergies, confirm what substitutions are possible at the time of booking.",
      "**Read the cancellation terms** — many restaurants require a non-refundable deposit and have strict cancellation policies for New Year's Eve bookings.",
      "**Hotels offer cenoni** — many hotels run their own *cenone* events, which can be a practical option if you want to combine accommodation and dinner in a single booking.",
    ),
    p("For a general introduction to dining customs in Italy, the [Italian dining etiquette guide](/food/italian-dining-etiquette) and the [Italian food traditions guide](/food/italian-food-traditions) cover the norms that apply year-round. For budget context, the [Italy trip cost guide](/guides/italy-trip-cost) includes a section on dining costs."),

    h2("Weather and what to pack"),
    p("31 December is mid-winter in Italy. Conditions vary significantly by region and year; climate averages are a guide to typical conditions, not a forecast for 2026."),
    table(
      ["City", "Typical Dec 31 temperature range", "Conditions"],
      [
        ["Rome", "6–13 °C", "Often clear or partly cloudy; occasional rain; mild by European winter standards"],
        ["Naples", "8–14 °C", "Mild; occasional rain; the waterfront is exposed to wind"],
        ["Florence", "3–11 °C", "Cooler than Rome; possible fog in the Arno valley; occasional frost"],
        ["Milan", "1–7 °C", "Cold, often foggy; damp rather than snowy; check forecasts"],
        ["Venice", "2–8 °C", "Cold and damp; possible high water (*acqua alta*); waterfront is very exposed"],
        ["Bologna", "2–9 °C", "Cold; fog is common in the Po plain; the porticoes offer shelter"],
        ["Turin", "1–7 °C", "Cold; can be foggy; snowfall possible"],
        ["Palermo", "11–16 °C", "Mild; occasional rain; the warmest major Italian city in December"],
      ],
      "Long-run climate averages. Check a weather service for the actual 2026 forecast closer to your travel date."
    ),
    note("Always check the actual weather forecast for 31 December 2026 a few days before you travel. Historical averages do not predict specific conditions."),
    ul(
      "A warm, waterproof outer layer — essential everywhere in Italy in December, particularly outdoors at midnight",
      "Comfortable, warm walking shoes or boots with a non-slip sole — cobblestones in cities like Venice, Florence, and Rome can be slippery when wet",
      "Warm underlayers and gloves — outdoor midnight countdowns in northern cities can be genuinely cold",
      "A small bag that fits close to your body — busy piazzas and crowded areas are environments where pickpockets operate",
      "A compact umbrella — useful in all cities",
      "A portable phone charger — useful for navigation and communication during a long night out",
    ),

    h2("Getting around on New Year's Eve"),
    p("New Year's Eve is one of the most logistically complex nights of the year in Italian cities. Planning transport in advance avoids the most common frustrations."),

    h3("Public transport"),
    p("Most major Italian cities run extended public transport on New Year's Eve, but schedules vary by city and year and are usually published only in December. Do not assume that services run all night; check the official operator's website before travelling."),
    ul(
      "**Rome (ATAC)** — traditionally runs an extended night service on New Year's Eve, but the specific timetable is confirmed closer to the date at atac.roma.it",
      "**Naples (ANM)** — typically runs extended metro and bus services; check anm.it for the confirmed schedule",
      "**Milan (ATM)** — extended night services; check atm.it for the confirmed schedule",
      "**Venice (ACTV)** — vaporetti run on a modified schedule; the Piazzale Roma bus terminal has reduced services overnight; check actv.avmspa.it",
      "**Florence (BUSITALIA)** — check the Comune di Firenze or BUSITALIA Toscana for the confirmed schedule",
    ),

    h3("Taxis and private transfers"),
    p("Taxis are scarce in all major Italian cities after midnight on New Year's Eve. Surge pricing applies through ride-hailing apps. If you intend to use a taxi, book a car service in advance through an established transfer company — many offer fixed-price bookings for New Year's Eve nights. Confirm the pick-up location carefully: addresses in historic centres can be confusing, and some areas have pedestrian restrictions that affect vehicle access."),

    h3("Road closures and ZTL zones"),
    p("Every major Italian city imposes temporary road closures and extended ZTL (restricted traffic zone) hours around New Year's Eve. Driving into or through the historic centre of Rome, Florence, Milan, or Venice's connecting roads on the night of 31 December risks automatic number-plate-recognition fines. Car parks near city centres fill early. If you are driving, arrive and park before the closures take effect (typically by 6 pm or earlier) or stay well outside the centre. Specific closure maps are published by each city's police authority in December."),
    tip("For a detailed guide to driving rules, ZTL zones, and motorway navigation in Italy, see the [driving in Italy guide](/guides/driving-in-italy)."),

    h3("Intercity travel"),
    p("High-speed trains run a reduced service on 31 December and 1 January (public holiday). The last Frecciarossa services of the evening may be earlier than on a normal day, and trains returning on 1 January are often fully booked by people heading home after the holiday. Book intercity train travel for New Year's Eve and New Year's Day well in advance through Trenitalia or Italo. The [Italy by train guide](/guides/italy-by-train) covers booking and ticketing in detail."),

    h2("Planning and safety checklist"),
    {
      type: "checklist",
      id: "nye-planning-checklist",
      groups: [
        {
          title: "Booking",
          items: [
            "Book accommodation as early as possible — prices rise steeply as New Year's Eve approaches",
            "Make restaurant reservations (cenone) at least 2–3 months in advance for top venues; confirm deposit and cancellation terms",
            "If travelling by intercity train, book outbound and return journeys well in advance",
            "Check travel insurance covers New Year's Eve events and any specific activities",
          ],
        },
        {
          title: "Before you go",
          items: [
            "Check official city tourism websites in November–December for municipal event announcements",
            "Research specific public transport schedules for the city you are visiting (ATAC, ATM, ACTV, ANM, etc.) — published in December",
            "Check any access restrictions or pedestrian management areas for your chosen celebration area",
            "Review current rules on consumer fireworks in the city — these vary and change year to year",
            "Confirm your hotel or apartment's access arrangements for late-night return",
          ],
        },
        {
          title: "On the night",
          items: [
            "Keep a digital and paper copy of your accommodation address in Italian, including the specific entrance details",
            "Agree a meeting point with your group before entering a crowded piazza — phone signal can be unreliable in very large crowds",
            "Keep valuables secured in an inner pocket or crossbody bag in crowded areas",
          ],
        },
      ],
    },

    h2("Sample itineraries"),

    h3("3–4 nights in Rome"),
    p("A short city break centred on Rome is the most straightforward New Year's Eve in Italy option. Rome has the highest density of confirmed annual NYE activity and the widest range of accommodation."),
    {
      type: "steps",
      items: [
        { title: "Days 1–2: Cultural Rome", text: "Colosseum, Forum, Palatine Hill; Vatican Museums and Sistine Chapel (pre-book entry). Palazzo Altemps, Capitoline Museums, Piazza Navona." },
        { title: "Day 3 (31 December)", text: "Visit the Borghese Gallery in the morning (book in advance). Late afternoon: check the latest Circo Massimo programme at turismoroma.it. If not attending a free concert: cenone dinner at a booked Roman trattoria (8–10 pm), then piazza gathering at midnight." },
        { title: "Day 4 (1 January — Capodarte)", text: "Many museums offer free or reduced entry for Capodarte. Check turismoroma.it for the full programme, published in late November or December." },
      ],
    },

    h3("5–7 nights in northern Italy"),
    p("A longer trip combining Milan, Bologna, and Turin takes in three cities with distinct New Year atmospheres."),
    {
      type: "steps",
      items: [
        { title: "Days 1–2: Milan", text: "Duomo and Galleria Vittorio Emanuele II; Brera Gallery; The Last Supper (pre-book at vivaticket.com). Check for any confirmed Piazza Duomo NYE event at comune.milano.it." },
        { title: "Days 3–4: Turin", text: "Egyptian Museum; Palazzo Reale; Mole Antonelliana. Day trip option: ski resort in the Alps (45 minutes by car or bus)." },
        { title: "Days 5–6 (31 Dec – 1 Jan): Bologna", text: "Base yourself in Bologna for New Year's Eve. Cenone at a classic Bolognese trattoria; midnight at Piazza Maggiore. 1 January: portico walk to the Santuario di San Luca (40-minute uphill walk under 666 arches)." },
        { title: "Day 7: Florence", text: "Day trip from Bologna (37 minutes by high-speed train) for the Uffizi or Accademia." },
      ],
    },

    h3("New Year's Eve at sea: Naples and the south"),
    p("Naples is the most vivid choice for visitors who want to experience Italian New Year's Eve at its most exuberant."),
    {
      type: "steps",
      items: [
        { title: "Day 1–2: Naples cultural programme", text: "National Archaeological Museum; Spaccanapoli; underground Naples (Napoli Sotterranea or the Bourbon Tunnel). Pizza at a traditional pizzeria." },
        { title: "Day 3 (31 December)", text: "Pompeii in the morning (buy timed tickets at pompeiisites.org). Return to Naples by early afternoon. Check the Comune di Napoli programme for confirmed Piazza del Plebiscito events. Cenone dinner. Midnight at the Lungomare for the bay fireworks." },
        { title: "Extension: Palermo or Sicily", text: "Fly or take the ferry from Naples to Palermo for a warmer, quieter New Year's — Sicily in late December is mild at 15–18 °C with fewer crowds than the mainland cities." },
      ],
    },
  ],

  faqs: [
    {
      question: "Is New Year's Eve a good time to visit Italy?",
      answer: "It depends on your travel style. If you enjoy communal piazza celebrations, long *cenone* dinners, and city atmosphere, Italian New Year's Eve can be excellent. If you prefer quieter evenings or guaranteed events at specific times and locations, another period may suit better. Accommodation is expensive and must be booked months in advance.",
    },
    {
      question: "Which Italian cities are best for New Year's Eve 2026–2027?",
      answer: "Rome has the most established track record for a large free outdoor event (Circus Maximus concert, not yet confirmed for 2026); Naples is the most energetic for atmosphere and fireworks; Venice offers a unique setting with fireworks over the lagoon; Bologna is the best choice for a quieter, food-focused celebration. Milan may return a free Piazza Duomo concert for 2027 — not yet confirmed. The right city depends on what kind of evening you are after.",
    },
    {
      question: "Are public celebrations and fireworks confirmed for 2026–2027?",
      answer: "No — as of October 2026, no Italian city had published its official New Year's Eve 2026 programme. Most programmes are announced in November or December. Rome's Circus Maximus free concert has run every year since 2022 but is not yet confirmed for 2026. Naples' Piazza del Plebiscito concert is a recurring tradition but not yet announced. Always check the relevant city's official tourism website before travelling.",
    },
    {
      question: "Do restaurants require advance reservations for New Year's Eve?",
      answer: "Yes. Most restaurants operate a fixed *cenone* menu on 31 December and are fully booked weeks or months in advance. Walk-in dining on New Year's Eve is not realistic at quality venues. Book as early as possible — two to three months ahead for popular restaurants — and confirm deposit and cancellation terms.",
    },
    {
      question: "Does public transport run after midnight on New Year's Eve?",
      answer: "Most major Italian cities run extended public transport on New Year's Eve, but specific timetables are not published until December. Do not assume that your usual route runs all night; check the official operator's website (ATAC for Rome, ATM for Milan, ACTV for Venice, ANM for Naples) before your trip.",
    },
    {
      question: "What should I pack for New Year's Eve in Italy?",
      answer: "A warm, waterproof outer layer is essential everywhere. Warm walking shoes or boots with a non-slip sole for wet cobblestones. Gloves and underlayers for outdoor midnight gatherings in northern cities. A crossbody or inner-pocket bag for valuables in crowded piazzas. A portable phone charger for navigation during a long night.",
    },
    {
      question: "Should I book accommodation early?",
      answer: "Yes, as early as possible. New Year's Eve is one of the busiest and most expensive accommodation nights of the year in all major Italian cities. Prices rise steeply as December approaches. Booking in October or November gives the best selection at more reasonable prices.",
    },
    {
      question: "Are fireworks allowed in Italian cities on New Year's Eve?",
      answer: "Rules vary by city and change year to year. Recent years have seen bans on consumer fireworks in several Italian cities including Rome, Milan, Florence, and Venice, while Naples has continued to permit them. Organised municipal fireworks displays (as at Venice) are separate from consumer products. Check the specific rules for the city you are visiting once they are published, typically in late November or December.",
    },
    {
      question: "What is a cenone di Capodanno?",
      answer: "The *cenone di Capodanno* is the traditional Italian New Year's Eve dinner — a long, multi-course meal that typically begins around 8 or 9 pm and runs to midnight or beyond. Restaurants offer fixed menus that include multiple courses and a midnight toast. Lentils with cotechino or zampone are the central good-luck dish. Booking is essential; the best venues fill months in advance.",
    },
    {
      question: "Is Venice crowded on New Year's Eve?",
      answer: "Yes. Venice applies strict crowd-management measures, including pedestrian access gates on key routes and restrictions on glass bottles and certain fireworks. The fireworks over the Bacino di San Marco are best seen from the Riva degli Schiavoni, not from Piazza San Marco itself. Arrive early to secure a good position. Check veneziaunica.it for the specific 2026–2027 rules once published.",
    },
    {
      question: "What does a typical Italian New Year's Eve involve?",
      answer: "A long *cenone* dinner with family or friends, typically featuring lentils with cotechino or zampone as a luck-bringing dish. A spumante toast at midnight. In many cities, gathering in a piazza for the countdown and unofficial fireworks. Red underwear and pomegranate seeds are widespread good-luck traditions. The atmosphere varies significantly by region: Naples is noisy and exuberant; Bologna is quieter and more food-focused; Venice is uniquely beautiful but tightly managed.",
    },
  ],

  sources: [
    { label: "Turismo Roma — turismoroma.it", url: "https://www.turismoroma.it/", note: "Official Rome tourism authority — NYE event programmes published annually in Nov–Dec" },
    { label: "Comune di Napoli — comune.napoli.it", url: "https://www.comune.napoli.it/", note: "Official Naples municipality — Capodanno programme published annually in Dec" },
    { label: "Venezia Unica — veneziaunica.it", url: "https://www.veneziaunica.it/", note: "Official Venice tourism and events portal — NYE regulations and events" },
    { label: "Comune di Milano — comune.milano.it", url: "https://www.comune.milano.it/", note: "Official Milan municipality — NYE programme; organiser search under way July 2026" },
    { label: "Comune di Firenze — comune.fi.it", url: "https://www.comune.fi.it/", note: "Official Florence municipality — check for NYE programme closer to date" },
    { label: "ATAC Roma — atac.roma.it", url: "https://www.atac.roma.it/", note: "Rome public transport — NYE timetable published in December" },
    { label: "ACTV Venice — actv.avmspa.it", url: "https://actv.avmspa.it/", note: "Venice vaporetto service — NYE modified timetable" },
    { label: "Pompeii sites — pompeiiites.org", url: "https://www.pompeiiites.org/", note: "Official booking for Pompeii and Herculaneum timed entry" },
  ],
  sourcesTitle: "Official sources and tourism authorities",
};
