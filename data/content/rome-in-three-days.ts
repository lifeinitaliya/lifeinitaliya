import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "Rome in Three Days" — the rebuilt version of the site's original
// short itinerary, kept at its established URL. Colosseum ticketing, Vatican
// Museums opening days, St Peter's entry, Pantheon and Trevi Fountain access,
// ATAC Tap & Go, Metro C and airport links were checked on official sources in
// September 2026. Prices, opening hours, queue times and timetables are
// deliberately not quoted.

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

const IMG = "/images/guides/rome-in-three-days";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const romeInThreeDays: ArticleContent = {
  body: [
    // ——— Opening ———
    answer("**Three days gives a real first visit to Rome — not a complete one.** The city is too large and layered to cover in a long weekend, but three well-organised days can take in ancient Rome, the Vatican and the historic centre, with time for neighbourhoods and proper meals. The plan below works because it **groups sights by area** so you don't cross the city repeatedly, **books the few attractions that need it**, mixes landmarks with slower hours in Monti, Trastevere or the centre, and **leaves gaps** for walking, eating and the unexpected. You don't need a car; you'll mostly walk, with the metro, buses or a taxi for longer hops."),
    {
      type: "facts",
      title: "Rome in three days at a glance",
      rows: [
        { label: "Recommended stay", value: "3 full days (plus arrival and departure)" },
        { label: "Best for", value: "First-time visitors who want the essentials without rushing" },
        { label: "Main areas", value: "Ancient Rome, the Vatican and Prati, the historic centre and Trastevere" },
        { label: "Walking level", value: "High — several kilometres a day, often on uneven stone" },
        { label: "Major reservations", value: "Colosseum and Vatican Museums; Pantheon tickets are timed" },
        { label: "Public transport", value: "Metro lines A, B and C, buses and trams; contactless Tap & Go" },
        { label: "Airport options", value: "Fiumicino: train, bus or taxi; Ciampino: bus, bus-and-train or taxi" },
        { label: "Best planning principle", value: "One area per day, one timed booking per morning" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/rome-rooftops-domes.webp`,
      alt: "Rome's rooftops, church domes and bell towers under a blue sky, with the white Vittoriano monument on the left and hills on the horizon",
      caption: "Rome's historic centre from above, with the Vittoriano on the left.",
      credit: unsplash("Gabriel Tovar", "gabrielrana"),
      wide: true,
    },

    // ——— 1 ———
    h2("Can you see Rome in three days?"),
    p("You can see its most important sights and get a feel for how the city works. You can't see everything, and trying to will leave you with a blur of queues and taxis. The itinerary below chooses a small number of major visits — the Colosseum area, the Vatican and the Pantheon — and builds each day around one of them, with walking routes between nearby sights and time left open."),
    p("It assumes three full days. If you arrive in the afternoon, use that evening for a walk to the Trevi Fountain and Piazza Navona, and start the itinerary the next morning."),

    // ——— 2 ———
    h2("The three-day plan at a glance"),
    table(
      ["Day", "Main area", "Major sights", "Pace"],
      [
        ["Day 1", "Ancient Rome and Monti", "Colosseum, Roman Forum, Palatine, Capitoline Hill", "Busy morning, easier afternoon"],
        ["Day 2", "The Vatican and Prati", "Vatican Museums and Sistine Chapel, St Peter's Basilica, Castel Sant'Angelo (optional)", "Long morning indoors; slow evening"],
        ["Day 3", "Historic centre and Trastevere", "Pantheon, Piazza Navona, Trevi Fountain, Spanish Steps, Trastevere", "Walking day with choices"],
      ],
      "Rome in three days"
    ),
    p("You can swap Days 1 and 2 if tickets work out better that way, but keep each area on its own day. The Vatican Museums are closed on most Sundays, so don't plan the Vatican day for a Sunday."),

    // ——— 3 ———
    h2("Day 1: Ancient Rome"),
    p("The Colosseum, the Roman Forum and the Palatine Hill sit side by side in the archaeological park run by the Parco archeologico del Colosseo, and one ticket covers all three. They're best seen in the morning, before the heat and the biggest crowds, and in this order."),
    steps(
      ["Morning: the Colosseum (about 1–1½ hours)", "Arrive a little before your booked time. Metro line B's Colosseo stop is opposite; since December 2025 Metro C also stops at Colosseo–Fori Imperiali, with an interchange to line B."],
      ["Late morning: the Roman Forum and the Palatine (2–3 hours)", "Walk into the Forum, the political heart of ancient Rome, then climb the Palatine, where emperors built their palaces, for views over the Forum and the Circus Maximus. There's little shade: bring water and a hat in summer."],
      ["Lunch in Monti", "Leave the park and walk to Monti, a neighbourhood of small streets just north of the Forum, for lunch and a rest."],
      ["Afternoon: the Capitoline Hill", "Climb to Piazza del Campidoglio, the square designed by Michelangelo. Walk behind the Palazzo Senatorio for a free view down over the Forum. The Capitoline Museums are optional if you still have energy."],
      ["Evening: Piazza Venezia to Monti or the centre", "Pass the Vittoriano monument on Piazza Venezia and spend the evening in Monti or the historic centre."],
    ),
    {
      type: "image",
      src: `${IMG}/colosseum-sunrise.webp`,
      alt: "The Colosseum in Rome in early morning light, its arched outer wall glowing golden under a pale sky",
      caption: "The Colosseum, best visited at the start of the day.",
      credit: unsplash("Matteo del Piano", "matteodelpiano"),
    },
    h3("Colosseum tickets"),
    p("According to the Parco archeologico del Colosseo, tickets are issued in the visitor's name and include a timed entry to the Colosseum; the standard ticket also gives one entry each to the Roman Forum and the Palatine, which you can visit before or after the Colosseum within the ticket's validity. Other ticket types add areas such as the arena floor. Buy only from the [official ticketing site](https://ticketing.colosseo.it/), as resellers often charge more, and check what each ticket includes before choosing."),
    {
      type: "image",
      src: `${IMG}/roman-forum-temple-columns.webp`,
      alt: "Ruins of the Roman Forum with the columns of the Temple of Saturn, a triumphal arch and church domes beyond, under a blue sky",
      caption: "The Roman Forum below the Capitoline, with the columns of the Temple of Saturn on the right.",
      credit: unsplash("Massimo Virgilio", "massimovirgilio"),
    },
    tip("If your energy runs out, skip the Palatine rather than rushing the Forum, or drop the Capitoline Museums and just enjoy the view from the Campidoglio. The ancient sites are hard walking on uneven stone.", "Short on energy?"),

    // ——— 4 ———
    h2("Day 2: The Vatican and Prati"),
    p("Vatican City is a separate state inside Rome, and its main sights work differently from each other:"),
    ul(
      "**The Vatican Museums** — a vast group of collections, from ancient sculpture to the Raphael Rooms. They're ticketed, and booking online is the reliable way in.",
      "**The Sistine Chapel** — Michelangelo's ceiling and *Last Judgement*. It's at the end of the Museums route and has no separate ticket.",
      "**St Peter's Basilica** — the main church of the Catholic Church. Entry is free, after security checks in St Peter's Square.",
      "**St Peter's Square** — Bernini's colonnaded square in front of the basilica, open to everyone.",
    ),
    steps(
      ["Morning: the Vatican Museums and Sistine Chapel (3–4 hours)", "Book an early slot on the [official Vatican Museums site](https://tickets.museivaticani.va/). According to the Museums, they're open Monday to Saturday and on the last Sunday of each month, when entry is free and very busy. Don't try to see every gallery: follow the route to the Raphael Rooms and the Sistine Chapel."],
      ["Lunch in Prati", "Walk out into Prati, the orderly 19th-century district east of the Vatican, for a less touristy lunch."],
      ["Afternoon: St Peter's Basilica (1–1½ hours)", "Walk round to St Peter's Square and join the security line. Independent visitors usually exit the Museums and walk to the square; check current arrangements rather than relying on shortcuts. Climb the dome if you have energy — it has its own ticket."],
      ["Late afternoon: Castel Sant'Angelo (optional)", "Hadrian's mausoleum, later a papal fortress, is a 10-minute walk from St Peter's. Visit if you still have energy, or simply cross the Ponte Sant'Angelo towards the centre."],
      ["Evening", "Dinner in Prati, or cross the river to the historic centre."],
    ),
    {
      type: "image",
      src: `${IMG}/vatican-museums-spiral-staircase.webp`,
      alt: "The double spiral staircase at the Vatican Museums seen from above, with visitors walking down its curving ramps",
      caption: "The spiral staircase at the exit of the Vatican Museums.",
      credit: unsplash("Jonathan Singer", "jbsinger1970"),
    },
    {
      type: "image",
      src: `${IMG}/st-peters-basilica.webp`,
      alt: "The façade and dome of St Peter's Basilica in the Vatican under a clear blue sky",
      caption: "St Peter's Basilica. Entry is free, after security checks in the square.",
      credit: unsplash("Fabio Fistarol", "fabiofistarol"),
    },
    p("According to the basilica, entry to St Peter's is free, and booking isn't required; a paid timed reservation, which includes a digital audio guide, is available for visitors who want a guaranteed slot. Shoulders and knees must be covered in the basilica, and the same is expected in the Sistine Chapel. Religious celebrations can change access at short notice, so check the [basilica's website](https://www.basilicasanpietro.va/) for the day you're visiting."),
    important("The Vatican day is long and mostly on your feet. It's normal to finish the Museums tired; if so, leave St Peter's for a morning visit on Day 3 instead of forcing it.", "Don't treat the Vatican as a quick stop"),

    // ——— 5 ———
    h2("Day 3: The historic centre and Trastevere"),
    p("The historic centre is compact and best seen on foot. This day links the main squares and fountains in a loop, then crosses the river for the evening. You won't need to go inside everything."),
    steps(
      ["Morning: the Pantheon (30–45 minutes)", "Built under Hadrian as a temple and consecrated as a church in the 7th century, the Pantheon still has the largest unreinforced concrete dome in the world. Entry is ticketed; buy timed tickets through the official Musei Italiani channels, or on site."],
      ["Piazza Navona", "Five minutes west, Bernini's Fountain of the Four Rivers faces Borromini's church of Sant'Agnese in Agone. Walk on to Campo de' Fiori, where the morning market runs most days."],
      ["Lunch and a choice", "Eat near Campo de' Fiori or in the Jewish Ghetto, known for Roman-Jewish cooking. Then choose: the Trevi Fountain and the Spanish Steps to the north-east, or a slower afternoon in the Ghetto and along the river."],
      ["Late afternoon: the Trevi Fountain and Spanish Steps", "Since February 2026, entering the area closest to the Trevi Fountain requires a ticket from the city; you can still see it from the square, and after 22:00 access is free. The Spanish Steps are 10 minutes further; sitting on the steps isn't allowed."],
      ["Evening: Trastevere", "Cross the Tiber by the Ponte Sisto into Trastevere for dinner. Its lanes, the church of Santa Maria in Trastevere and its piazza are liveliest in the evening."],
    ),
    {
      type: "image",
      src: `${IMG}/pantheon-piazza-della-rotonda.webp`,
      alt: "The portico of the Pantheon in Rome, with its granite columns and dome, facing Piazza della Rotonda and its fountain",
      caption: "The Pantheon on Piazza della Rotonda.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/piazza-navona-winter.webp`,
      alt: "Piazza Navona in Rome with a Baroque fountain in the foreground, the church of Sant'Agnese and ochre palaces around the long square",
      caption: "Piazza Navona, laid out on the site of an ancient stadium.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/trevi-fountain.webp`,
      alt: "The Trevi Fountain in Rome, with marble statues, cascading water and the palace façade behind it",
      caption: "The Trevi Fountain. A city ticket is required for the area closest to the basin.",
      credit: unsplash("Cristina Gottardi", "cristina_gottardi"),
    },
    p("Realistic combinations: the Pantheon, Navona and Campo de' Fiori fit easily into a morning. Adding the Trevi Fountain and Spanish Steps in the afternoon is manageable; adding the Borghese Gallery as well is not, unless you give up Trastevere."),
    {
      type: "image",
      src: `${IMG}/trastevere-street-evening.webp`,
      alt: "A cobbled lane in Trastevere in the evening, with ivy on the walls, lamps and restaurant tables set outside",
      caption: "Trastevere in the evening.",
      credit: unsplash("Mariano Alvarez", "theurbaneyecatcher"),
    },

    // ——— 6 ———
    h2("Optional swaps"),
    table(
      ["If you are…", "Swap", "For"],
      [
        ["An art lover", "The Trevi Fountain and Spanish Steps", "The Borghese Gallery (booking compulsory) and its park"],
        ["Travelling with children", "The Capitoline Museums", "Time in the Villa Borghese park, or a gelato stop and a shorter Forum visit"],
        ["A repeat visitor", "The Vatican Museums", "The Appian Way and catacombs, or the Baths of Caracalla"],
        ["An archaeology enthusiast", "The Spanish Steps", "The Baths of Caracalla, or Ostia Antica on a separate half-day"],
        ["A slower traveller", "Castel Sant'Angelo", "A long lunch and an evening walk along the Tiber"],
        ["Food-focused", "The Capitoline Museums", "A market morning at Campo de' Fiori or Testaccio, and a food walk"],
      ],
      "Swaps that don't break the plan"
    ),
    p("Prefer a guide? Many visitors book a guided tour for the Colosseum or the Vatican; before booking, check the group size and whether entry tickets and timed reservations are included."),

    // ——— 7 ———
    h2("What to book in advance"),
    table(
      ["Attraction", "Advance planning", "Why"],
      [
        ["Colosseum, Forum and Palatine", "Book on the official site", "Tickets are named and the Colosseum has timed entry"],
        ["Vatican Museums and Sistine Chapel", "Book on the official site", "Booking secures an entry time; the Museums are closed most Sundays"],
        ["St Peter's Basilica", "Not required", "Entry is free; an optional paid timed slot is available. Book the dome separately if you want to climb it"],
        ["Pantheon", "Buy timed tickets ahead in busy periods", "Entry is ticketed; tickets are also sold on site"],
        ["Trevi Fountain (basin area)", "Buy on the city's official site or at the entrance", "A ticket is required for the area closest to the fountain until 22:00"],
        ["Borghese Gallery", "Booking compulsory", "Timed entry for a limited number of visitors"],
      ],
      "What to book before you go"
    ),
    p("Avoid resellers that promise to \"skip the line\" at higher prices; buy from the official sites linked in this guide. Booking windows vary, so book as soon as your dates are fixed."),

    // ——— 8 ———
    h2("Getting around Rome"),
    p("The historic centre is best seen on foot: the distances between the Pantheon, Navona, Trevi and the Spanish Steps are short, and many streets are closed to traffic. Use public transport or a taxi to save time on longer journeys — to the Vatican, from Termini, or at the end of a long day."),
    ul(
      "**Metro** — three lines: A (useful for the Vatican at Ottaviano, and the Spanish Steps at Spagna), B (Colosseo and Termini) and C (now reaching Colosseo–Fori Imperiali). The metro doesn't cross the historic centre itself.",
      "**Buses and trams** — cover the centre and Trastevere; tram 8 links the Largo di Torre Argentina area with Trastevere. Traffic can make buses slow.",
      "**Tickets** — according to ATAC, you can tap a contactless bank card or phone on readers on buses and at metro turnstiles (Tap & Go); a standard ticket is valid for 100 minutes and includes one metro ride. Paper tickets and apps are also available.",
      "**Taxis** — use licensed white taxis from ranks, or book by phone or app.",
    ),
    p("Rome's historic centre is a limited traffic zone, and driving in the city isn't worthwhile for visitors; see [driving in Italy](/guides/driving-in-italy) if you're renting a car for later in your trip. Carry a refillable bottle: public drinking fountains (*nasoni*) are found all over the city."),

    // ——— 9 ———
    h2("Arriving from Rome's airports"),
    h3("Fiumicino"),
    p("Fiumicino, Rome's main airport, is on the coast west of the city. Trenitalia's non-stop **Leonardo Express** runs to Roma Termini in about half an hour; regional trains also serve Trastevere, Ostiense and Tiburtina stations, which may be closer to your accommodation. Several companies run **buses** to Termini. Licensed **taxis** charge a fixed fare to destinations inside the Aurelian Walls — confirm it with the driver before setting off."),
    h3("Ciampino"),
    p("Ciampino, used mainly by low-cost airlines, is south-east of the city. **Buses** run direct to Termini, and Trenitalia's **Ciampino Airlink** combines a shuttle bus to Ciampino station with a train to Termini. **Taxis** also have a fixed fare to the centre."),
    p("For airports across Italy, see our guide to [Italian airport transfers](/guides/italy-airport-transfers). Termini is also Rome's main rail hub for [travelling on by train](/guides/italy-by-train)."),

    // ——— 10 ———
    h2("Where to stay for three days"),
    table(
      ["Area", "Atmosphere", "For this itinerary", "Trade-offs"],
      [
        ["Centro storico (Pantheon, Navona)", "Historic lanes, squares and restaurants", "Walk to Day 3 sights and within reach of the others", "Busy and often expensive; can be noisy"],
        ["Monti", "Small streets, independent shops, wine bars", "Walk to the Colosseum; metro nearby", "Some streets are steep; popular in the evening"],
        ["Prati", "Orderly, residential, good restaurants", "Close to the Vatican and metro line A", "Further from ancient Rome; quieter at night"],
        ["Trastevere", "Cobbled lanes and lively evenings", "Walk to the centre across the river", "Limited metro; noisy at night in places"],
        ["Near Termini (Esquilino)", "Busy transport hub, varied hotels", "Airport trains and two metro lines", "Less atmosphere; check the exact street carefully"],
      ],
      "Where to stay in Rome"
    ),
    p("For a first visit, the centro storico or Monti keep the most sights within walking distance. Rome applies a tourist tax per person per night."),

    // ——— 11 ———
    h2("Food along the way"),
    p("Plan meals around the itinerary rather than crossing the city for a particular restaurant: Monti on Day 1, Prati on Day 2, the Ghetto and Trastevere on Day 3. Lunch is usually from about 13:00 and dinner from about 20:00."),
    h3("Roman specialities"),
    ul(
      "**Carbonara, cacio e pepe, gricia and amatriciana** — Rome's classic pasta dishes, built on guanciale, pecorino romano and black pepper; amatriciana is named after Amatrice, in Lazio.",
      "**Supplì** — fried rice croquettes with tomato and a string of melting mozzarella.",
      "**Pizza** — thin, crisp Roman-style pizza in the evening, and *pizza al taglio* (by the slice) for a quick lunch.",
      "**Carciofi** — artichokes, *alla romana* (braised) or *alla giudia* (fried whole, a Roman-Jewish dish), in season from late winter to spring.",
      "**Maritozzo** — a soft sweet bun split and filled with whipped cream, eaten for breakfast.",
      "**Saltimbocca** and **coda alla vaccinara** — veal with sage and ham, and the traditional oxtail stew.",
    ),
    h3("Italian dishes you'll also find in Rome"),
    p("Neapolitan-style pizza, lasagne, tiramisu and dishes from all over Italy are widely served in Rome. They can be good, but they aren't Roman specialities. For how meals and ordering work, see [Italian food traditions](/food/italian-food-traditions)."),

    // ——— 12 ———
    h2("Rome without rushing"),
    ul(
      "**Don't cross the city repeatedly.** Keep each day in one area and walk between sights.",
      "**Don't schedule too many museums.** One major museum a day is enough; two is tiring.",
      "**Don't underestimate walking.** Ancient sites and cobbles are slow going; plan for less than a map suggests.",
      "**Don't book attractions too close together.** Leave at least an hour between timed entries in different areas.",
      "**Keep a buffer.** Leave one open block each day for a rest, a church you stumble on or a long lunch.",
      "**Use the evenings.** Squares and fountains are calmer and cooler after dark.",
    ),

    // ——— 13 ———
    h2("Rome for different travellers"),
    ul(
      "**First-time visitors** — follow the plan as written and book the Colosseum and Vatican first.",
      "**Couples** — add evening walks: the Campidoglio at dusk, the Tiber, and Trastevere for dinner.",
      "**Families** — shorten museum visits, use Villa Borghese for a break, and plan gelato and pizza stops; children often enjoy the Colosseum and Castel Sant'Angelo.",
      "**Older travellers** — use taxis between areas, choose accommodation near a metro stop, and allow rests during the ancient-sites morning.",
      "**Museum lovers** — add the Borghese Gallery and the Capitoline Museums, and give the Vatican a full day.",
      "**Archaeology lovers** — add the Baths of Caracalla or the Appian Way, or a half-day at Ostia Antica.",
      "**Food travellers** — plan around markets and trattorias, and consider a guided food walk.",
      "**Travellers with limited mobility** — many sites have uneven surfaces and steps, but some provide accessible routes; check each attraction's official accessibility information before booking, and consider taxis for longer distances.",
      "**Travellers who dislike crowds** — take the first entry slots, visit the fountains early or late, and spend more time in Monti, Prati and the Ghetto.",
    ),

    // ——— 14 ———
    h2("Common first-time mistakes"),
    ol(
      "**Attempting too much.** Three days is enough for the essentials, not for everything.",
      "**Not reserving major attractions.** The Colosseum and Vatican Museums are much easier with a booking.",
      "**Not checking current arrangements.** Rules change — the Trevi Fountain now has a ticketed area, for example.",
      "**Underestimating distances.** The Vatican is a long walk from the Colosseum; don't try both in one morning.",
      "**Treating the Vatican as a quick stop.** The Museums alone take several hours.",
      "**Visiting in an inefficient order.** Group sights by area rather than by fame.",
      "**Forgetting dress expectations.** Cover shoulders and knees for St Peter's and other churches.",
      "**Assuming every ticket covers everything nearby.** The Colosseum ticket includes the Forum and Palatine, but not the Capitoline Museums.",
      "**Leaving no time for meals and neighbourhoods.** They're part of Rome, not a break from it.",
    ),

    // ——— 15 ———
    h2("Best time for a three-day trip"),
    ul(
      "**Spring (April–June)** — pleasant for walking but busy, especially around Easter; book early.",
      "**Summer (July–August)** — hot, so visit the ancient sites first thing; some local restaurants close for part of August.",
      "**Autumn (September–November)** — warm in September and October with long enough days; rain becomes more likely later.",
      "**Winter (December–February)** — shorter days and cooler weather, but fewer crowds; Christmas and New Year are busy.",
    ),
    p("Religious holidays can change access to St Peter's and the Vatican. For how Rome compares with other destinations through the year, see [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 16 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "rome-in-three-days",
      groups: [
        {
          title: "Before booking",
          items: ["Choose accommodation in the centre, Monti or Prati", "Plan the Vatican day for Monday–Saturday", "Check dates against major holidays"],
        },
        {
          title: "Before departure",
          items: ["Book the Colosseum on the official site", "Book the Vatican Museums on the official site", "Buy Pantheon and Trevi tickets if you want them", "Plan your airport transfer"],
        },
        {
          title: "During the trip",
          items: ["Wear comfortable shoes and carry water", "Cover shoulders and knees for churches", "Use Tap & Go or buy tickets before travelling", "Leave one open block each day"],
        },
      ],
    },
    p("The ticketing and access arrangements in this guide were checked on official sites in September 2026. They change: confirm them before you travel, and carry the documents you need for any named tickets. For costs, see [how much a trip to Italy costs](/guides/italy-trip-cost); for a wider trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide) and [getting between Italian cities](/guides/getting-between-italian-cities), with next stops such as [Florence](/cities/florence-for-first-timers), [Naples](/cities/naples-first-visit), [Bologna](/cities/bologna-in-two-days) or [Venice](/cities/venice-quieter-neighbourhoods)."),
    {
      type: "image",
      src: `${IMG}/castel-sant-angelo-tiber.webp`,
      alt: "Castel Sant'Angelo, a round fortress on the Tiber in Rome, with the Ponte Sant'Angelo in front and clouds overhead",
      caption: "Castel Sant'Angelo and its bridge, between the Vatican and the historic centre.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },
  ],

  faqs: [
    { question: "Is three days enough for Rome?", answer: "For a first visit, yes: enough for ancient Rome, the Vatican and the historic centre at a sensible pace. It isn't enough to see everything, so choose what matters most to you." },
    { question: "What should I see in Rome in three days?", answer: "The Colosseum, Roman Forum and Palatine on one day; the Vatican Museums, Sistine Chapel and St Peter's on another; and the Pantheon, Piazza Navona, the Trevi Fountain and Trastevere on the third." },
    { question: "What should I book before visiting Rome?", answer: "The Colosseum (named tickets with timed entry) and the Vatican Museums, both on their official sites. The Borghese Gallery requires booking; the Pantheon and the Trevi Fountain's basin area have their own tickets." },
    { question: "Can I see the Colosseum and the Vatican in the same day?", answer: "It's possible, but it means two long visits on opposite sides of the city. On a three-day trip, it's much better to give each its own morning." },
    { question: "How much walking is involved?", answer: "A lot — several kilometres a day, much of it on uneven stone. Good shoes matter more than anything else, and a taxi at the end of the day is worth it." },
    { question: "Is Rome easy to visit without a car?", answer: "Yes. Most of the itinerary is on foot, and the metro, buses, trams and taxis cover the rest. Driving in the centre is restricted and not worthwhile." },
    { question: "Where should I stay for three days in Rome?", answer: "The centro storico or Monti keep the most sights within walking distance. Prati is convenient for the Vatican; Trastevere for evenings; the area near Termini for trains." },
    { question: "Is the Vatican worth visiting on a short trip?", answer: "For most first-time visitors, yes — the Sistine Chapel and St Peter's are among Rome's essential sights. Allow most of a day and book the Museums in advance." },
    { question: "How long do you need for the Colosseum?", answer: "About an hour to an hour and a half inside, plus two to three hours for the Roman Forum and Palatine, which share the same ticket." },
    { question: "Can you visit Rome with children in three days?", answer: "Yes, with shorter museum visits and more breaks. The Colosseum, Castel Sant'Angelo, the fountains and Villa Borghese tend to work well with children." },
    { question: "What food should I try in Rome?", answer: "Carbonara, cacio e pepe, gricia and amatriciana, supplì, Roman-style pizza and pizza al taglio, artichokes in season and a maritozzo for breakfast." },
    { question: "What should I skip if I'm short on time?", answer: "Skip the Palatine, the Capitoline Museums or Castel Sant'Angelo before dropping one of the three main areas, and don't try to add a day trip." },
    { question: "How do I get from Fiumicino Airport to central Rome?", answer: "The Leonardo Express train runs non-stop to Termini in about half an hour; regional trains, buses and fixed-fare taxis are the alternatives." },
    { question: "Should I use public transport or walk in Rome?", answer: "Walk within the historic centre and use the metro, a bus or a taxi between areas — for example to the Vatican or back to your hotel after a long day." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Parco archeologico del Colosseo — tickets", url: "https://ticketing.colosseo.it/", note: "Colosseum, Roman Forum and Palatine" },
    { label: "Vatican Museums — tickets", url: "https://tickets.museivaticani.va/", note: "official booking" },
    { label: "Vatican Museums — opening days", url: "https://www.museivaticani.va/content/museivaticani/it/info/orari-musei-vaticani.html", note: "opening and closures" },
    { label: "St Peter's Basilica", url: "https://www.basilicasanpietro.va/", note: "entry, dome and reservations" },
    { label: "Pantheon — Ministry of Culture", url: "https://cultura.gov.it/luogo/pantheon", note: "tickets and visits" },
    { label: "Trevi Fountain access — Roma Capitale", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "ticketed basin area" },
    { label: "Turismo Roma", url: "https://www.turismoroma.it/en", note: "official tourist information" },
    { label: "ATAC — Tap & Go", url: "https://www.atac.roma.it/en/frequently-asked-questions/how-does-tap-go-work", note: "contactless payment on public transport" },
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/", note: "Fiumicino airport train" },
    { label: "Aeroporti di Roma", url: "https://www.adr.it/", note: "Fiumicino and Ciampino transport" },
  ],
};
