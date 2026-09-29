import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Destination guide: "Lake Como in a Weekend". Rail journey times, ferry
// services and villa visiting arrangements were checked on the operators' and
// venues' official sites in September 2026. Timetables, prices and opening
// dates are deliberately not quoted — they change by season.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/travel/lake-como-weekend";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const lakeComoWeekend: ArticleContent = {
  body: [
    // ——— Opening ———
    p("On a map, Lake Como looks like something you could see in an afternoon. In practice it's a long, narrow lake shaped like an upside-down Y, with three branches, dozens of towns and steep mountains dropping into the water. Getting between towns usually means a boat, and boats run to timetables. The difference between a relaxed weekend and a frustrating one comes down mostly to one decision: where you stay."),
    answer("**A weekend is enough for a first taste of Lake Como** — two or three towns, a boat trip and perhaps one villa garden — as long as you don't try to see the whole lake. For a first visit, **stay in the central lake** (Bellagio, Varenna or Menaggio) if you want to hop between villages by ferry, or in **Como** if you want easy trains and a small city. **You don't need a car**: trains from Milan reach Como and Varenna, and ferries link the towns. The simplest plan is train to your base, ferries between two or three towns, and walking."),
    {
      type: "facts",
      title: "Lake Como at a glance",
      rows: [
        { label: "Ideal short trip", value: "2–3 days" },
        { label: "Main arrival hubs", value: "Milan, then train to Como or Varenna" },
        { label: "Best transport mix", value: "Train + ferry + walking" },
        { label: "Car necessary?", value: "Usually not for a short first visit" },
        { label: "Main towns", value: "Como, Bellagio, Varenna, Menaggio" },
        { label: "Best for", value: "Scenery, lakeside villages, villas and gardens, boat trips" },
        { label: "Planning priority", value: "Where you stay and how it connects to trains and ferries" },
        { label: "Ferry operator", value: "Navigazione Laghi (public lake services)" },
      ],
    },

    // ——— 1 ———
    h2("Is Lake Como worth visiting for a weekend?"),
    p("Yes, if what you want is scenery, slow travel and time on the water. A weekend lets you settle into one town, take the ferry to one or two others, walk lakeside lanes and visit a garden or villa. It's also an easy escape from Milan, with direct regional trains to both Como and Varenna."),
    p("It's less suited to trips built around ticking off sights. Lake Como has few \"must-see\" attractions in the museum sense; its appeal is the combination of villages, water and mountains, which rewards unhurried days. It's also popular: in summer and at weekends the central towns and the ferries can be very busy. If you'd rather have beaches and a longer sea season, the coast may suit you better."),

    // ——— 2 ———
    h2("How many days do you need?"),
    table(
      ["Trip length", "What it allows", "Consider"],
      [
        ["Day trip from Milan", "One town — usually Como, or Varenna with a short boat hop", "A long day; most of the lake stays out of reach"],
        ["2 days", "Your base plus one or two other towns by ferry", "Choose one area of the lake and stay there"],
        ["3 days", "Two areas of the lake, a villa or garden, and time to slow down", "The most comfortable length for a first visit"],
        ["4+ days", "Several areas, walks in the hills, a day around Como", "Useful if weather or ferry timetables need flexibility"],
      ],
      "How long to spend on Lake Como"
    ),
    p("The lake is bigger than it looks, and travel between areas takes time. A useful rule for a short trip is: one base, one area of the lake per day, and no more than two or three towns in a day."),

    // ——— 3 ———
    h2("Choosing where to stay"),
    p("Your base decides how easily you'll reach trains, how many towns you can visit by ferry, and what your evenings feel like. There's no single best town — the right one depends on your priorities."),
    table(
      ["Base", "Best suited to", "Advantages", "Considerations"],
      [
        ["Como", "Rail travellers, city facilities, a first or last night", "Direct trains to Milan from two stations; shops, restaurants and a historic centre", "At the south-western tip: the central lake is a long boat ride away"],
        ["Bellagio", "Ferry-hopping in the central lake; classic lakeside atmosphere", "On the point where the lake's branches meet, with frequent boats across", "No railway station; busy in season; accommodation can book up early"],
        ["Varenna", "Short stays arriving by train; village atmosphere", "Railway station on the Milan–Lecco–Tirano line and a ferry pier in the central lake", "Small, so accommodation is limited; the station is a short walk from the pier"],
        ["Menaggio", "The western shore and its villas; a slightly larger town", "Central-lake ferry connections; close to Tremezzina's villas", "No railway station; you'll combine boats and buses"],
      ],
      "Choosing a base on Lake Como"
    ),
    p("Other towns work too. Tremezzina (Tremezzo, Lenno and neighbouring villages) is closest to Villa Carlotta and Villa del Balbianello; Lecco, on the eastern branch, has good trains but is outside the central lake. For a first weekend, though, the four towns above keep things simplest."),

    // ——— 4 ———
    h2("Como, Bellagio, Varenna or Menaggio?"),
    h3("Como"),
    p("Como is a small city rather than a village: a walled historic centre, a cathedral, lakefront promenades and plenty of places to eat. It's the easiest place to reach from Milan — trains run from Milano Centrale to Como San Giovanni and from Milano Cadorna to Como Nord Lago, right beside the lake. It suits travellers who want reliable transport, a first or last night near the trains, or somewhere lively in the evening. The trade-off is distance: Bellagio and the central lake are a long boat trip away."),
    {
      type: "image",
      src: `${IMG}/como-lakefront-dusk.webp`,
      alt: "The city of Como at dusk, with lights along the shore and mountains around the lake",
      caption: "Como at the south-western tip of the lake: the best-connected base by train.",
      credit: unsplash("Roman Volkov", "romanvolkov"),
    },
    h3("Bellagio"),
    p("Bellagio sits on the promontory where the lake divides, which makes it the most central base for ferry trips. Its steep stepped lanes, lakefront and villa gardens make it one of the lake's most visited towns. Stay here if your plan is to hop between Bellagio, Varenna and Menaggio. Bear in mind that there's no railway station: arriving from Milan usually means a train to Varenna or Como and then a boat, or a road transfer."),
    {
      type: "image",
      src: `${IMG}/bellagio-lane-wine-bar.webp`,
      alt: "A narrow lane in Bellagio with tables outside a wine bar and the lake and mountains beyond",
      caption: "One of Bellagio's lanes. Much of the town is built on steps, so pack light.",
      credit: unsplash("Claudio Carrozzo", "erbampo"),
    },
    h3("Varenna"),
    p("Varenna, on the eastern shore, combines the two things a short trip needs most: a railway station on the Milan–Lecco–Tirano line and a ferry pier in the central lake. According to Trenord, direct trains from Milano Centrale take about an hour. The village is compact, with a lakeside walkway and the gardens of Villa Monastero, which makes it a practical base for a weekend. Its small size means accommodation is limited and fills early in season."),
    {
      type: "image",
      src: `${IMG}/varenna-waterfront.webp`,
      alt: "The colourful houses of Varenna on the shore of Lake Como under a cloudy sky",
      caption: "Varenna, the central-lake village with its own railway station.",
      credit: unsplash("Karl Moran", "morank"),
    },
    h3("Menaggio"),
    p("Menaggio, on the western shore, is a little larger than Bellagio or Varenna and has central-lake ferry connections. It's a good base for the villas of Tremezzina, just to the south, and for walks on the western side. Without a railway station, you'll arrive by boat from Varenna or by road, and buses serve the western shore."),
    h3("Which should you choose?"),
    table(
      ["If you prioritise…", "Consider"],
      [
        ["Easy rail arrival", "Varenna (direct from Milano Centrale) or Como (two Milan stations)"],
        ["Central ferry connections", "Bellagio, Varenna or Menaggio"],
        ["City facilities and evenings out", "Como"],
        ["Village atmosphere", "Varenna or Bellagio"],
        ["A short first-time trip", "Varenna — train and ferry in one place"],
        ["The western-shore villas", "Menaggio or Tremezzina"],
        ["Wider transport flexibility", "Como, with rail links to Milan and beyond"],
      ],
      "Matching your priorities to a base"
    ),

    // ——— 5 ———
    h2("Two-day itinerary"),
    p("This plan assumes a base in the central lake — Varenna, Bellagio or Menaggio — and uses the ferry triangle between them. Check that day's timetable before you set out."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Day 1", title: "Your base and one neighbour", text: "**Morning:** arrive, drop your bags and walk your base town. **Midday:** lunch by the water. **Afternoon:** take the ferry to one neighbouring town — from Varenna, Bellagio is a short crossing — and walk its lanes and waterfront. **Evening:** return by boat and eat in your base. *Alternative:* visit your base's villa garden instead of a second town." },
        { label: "Day 2", title: "The western shore", text: "**Morning:** ferry to Menaggio or Tremezzina. **Midday:** Villa Carlotta's gardens and museum, or Villa del Balbianello (book ahead). **Afternoon:** lunch on the western shore, then back across the lake. **Evening:** leave by train from Varenna, or by boat and train via Como. *Alternative:* a slow morning in Bellagio if the weather is poor." },
      ],
    },
    tip("Two towns per day is plenty. Every crossing involves waiting at the pier, and boats can be full at busy times — an unhurried day with two towns usually beats a rushed one with four.", "Keep it simple"),

    // ——— 6 ———
    h2("Three-day itinerary"),
    p("Three days allow a slower pace and some protection against a rainy day or a gap in the timetable."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Day 1", title: "Arrive and settle in", text: "Travel from Milan, check in and explore your base on foot. Keep the afternoon light: a lakeside walk, a garden, an early dinner." },
        { label: "Day 2", title: "The central lake by ferry", text: "Bellagio, Varenna and Menaggio are linked by frequent crossings in season. Visit two of them, with lunch in one and a garden in the other." },
        { label: "Day 3", title: "A villa and a relaxed departure", text: "Morning at Villa Carlotta or Villa del Balbianello, or up to Brunate by funicular if you're leaving via Como. Head back to Milan in the afternoon." },
      ],
    },
    p("If you're based in Como, swap the order: spend day 1 in Como (the historic centre, the lakefront and the funicular to Brunate), day 2 on a boat to the central lake, and day 3 on the western shore or a slower morning before your train. Ferry services are reduced outside the main season, and bad weather or high demand can change the day's plan, so treat any itinerary as a framework rather than a schedule."),

    // ——— 7 ———
    h2("How to get to Lake Como"),
    p("Most visitors arrive via Milan. According to Trenord, which runs Lombardy's regional trains:"),
    table(
      ["From", "To", "How", "Typical journey (Trenord)"],
      [
        ["Milano Centrale", "Varenna-Esino", "Regional train on the Milan–Lecco–Tirano line", "About 1 hour, direct"],
        ["Milano Centrale", "Como San Giovanni", "Regional train", "About 40 minutes, direct"],
        ["Milano Cadorna", "Como Nord Lago (on the lakefront)", "Regional train via Saronno", "About 1 hour"],
      ],
      "Rail links from Milan"
    ),
    p("Times are approximate and depend on the train; check Trenord's timetable for your date. For how Italian regional tickets work, including validation, read [how to travel around Italy by train](/guides/italy-by-train)."),
    h3("From the airports"),
    ul(
      "**Milan Malpensa** — the Malpensa Express runs to Milano Cadorna, Porta Garibaldi and Centrale, where you can change for Como or Varenna. Trenord's journey planner will also show routes that change at Saronno for Como.",
      "**Milan Linate** — close to the city; metro line M4 links it to central Milan, from where you continue by train.",
      "**Private transfer** — worth considering for late arrivals, lots of luggage or a hotel far from a station or pier.",
      "**Rental car** — possible, but read the section on driving below before deciding.",
    ),
    p("If you're spending time in Milan as well, see [Milan beyond the Duomo](/cities/milan-beyond-the-duomo)."),

    // ——— 8 ———
    h2("Getting around the lake"),
    p("Lake Como is long and narrow, and roads along the shore are slow and winding. Most visitors combine:"),
    ul(
      "**Ferries** — the main way to move between towns, and a sightseeing trip in itself.",
      "**Trains** — along the eastern shore (Varenna and Bellano, for example) and to Como.",
      "**Buses** — serve the shores where there's no railway, including the western shore.",
      "**Walking** — towns are compact but often steep, with stepped lanes.",
      "**Taxis and private transfers** — useful for luggage, late arrivals or reaching hotels away from the piers.",
      "**Car** — flexible, but parking in the lakeside towns is limited in season.",
    ),
    p("Crossing the lake is easy in the central area, where the three main towns face each other. Travelling the length of the lake — from Como to Bellagio, for example — takes much longer than the distance suggests. Build in buffer time, check the timetable for your day, and avoid plans that depend on a tight connection."),

    // ——— 9 ———
    h2("Ferries and boat travel"),
    p("Public boat services on Lake Como are run by [Navigazione Laghi](https://www.navigazionelaghi.it/en/), which also operates on Lake Maggiore and Lake Garda. Timetables, fares and service notices are published on its website."),
    h3("How the services work"),
    ul(
      "**Passenger boats** — slower services stopping at many towns; scenic, but they take time over longer distances.",
      "**Fast services** — the operator's Rapid Service covers longer distances more quickly; check its booking arrangements on the official site.",
      "**Car ferries** — cross the central lake between the main towns, carrying vehicles as well as foot passengers.",
    ),
    h3("Seasons, queues and weather"),
    p("Timetables change with the seasons: services are more frequent in spring and summer and reduced in winter, and individual routes can be suspended — the operator publishes notices, such as a temporary suspension of the Bellagio car-ferry service in early 2026. At weekends and in summer, queues at the piers can be long and boats full. Strong wind or storms occasionally disrupt services."),
    important("Use only the operator's current timetable for your date — not screenshots, old PDFs or third-party lists. Leave a margin before your last boat back and before any train or flight.", "Check the timetable on the day"),
    h3("Planning tickets"),
    p("Tickets are sold at the piers and through the operator's official channels. If you'll take several boats in a day, compare the options on the operator's fares page with individual tickets for your actual journeys."),
    {
      type: "image",
      src: `${IMG}/lake-como-car-ferry.webp`,
      alt: "A white passenger and car ferry crossing Lake Como with mountains behind",
      caption: "A passenger and car ferry on the lake. In the central lake, crossings link Bellagio, Varenna and Menaggio.",
      credit: unsplash("Nathan Staz", "nathanstaz"),
    },

    // ——— 10 ———
    h2("What to see and do"),
    h3("Bellagio"),
    p("Walk the lakefront and the stepped lanes, then head to the tip of the promontory for views down the lake's branches. The gardens of Villa Melzi, on the lakeshore south of the centre, open seasonally (spring to autumn). Bellagio fits well into a half-day by ferry from Varenna or Menaggio."),
    h3("Varenna"),
    p("Varenna's appeal is its size: a lakeside walkway, a few lanes of colourful houses and the gardens and house museum of Villa Monastero, whose opening hours change through the season. Two or three hours is enough for the village, longer if you visit the villa."),
    h3("Como"),
    p("The historic centre has the cathedral and pleasant streets for walking; the lakefront promenades are good at the end of the day. The Como–Brunate funicular, run by Milan's transport company ATM, climbs to the village of Brunate in about seven minutes, with views over the lake and city. Half a day to a full day."),
    h3("Menaggio"),
    p("A lakeside town with a promenade and a small historic centre, and the natural starting point for the western shore and its villas. Menaggio works as a base or as a short stop on a ferry day."),
    {
      type: "image",
      src: `${IMG}/menaggio-lakeside.webp`,
      alt: "The houses of Menaggio along the shore of Lake Como below wooded mountains",
      caption: "Menaggio on the western shore, the gateway to Tremezzina's villas.",
      credit: unsplash("Chahriar Hariri", "cfhariri"),
    },
    h3("On the water"),
    p("The ferry itself is one of the best ways to see the lake. Private boat tours and water taxis operate from several towns; if you book one, check who is running it and what's included."),

    // ——— 11 ———
    h2("Villas and gardens"),
    p("Lake Como's villas were built as retreats by aristocratic and wealthy families, and several are open to visitors. Most are seasonal, so check opening dates before building them into your plan."),
    h3("Villa Carlotta"),
    p("In Tremezzo (Tremezzina), on the western shore facing Bellagio. Villa Carlotta combines a museum — with works by Canova, Hayez and Thorvaldsen, according to the villa — and a large botanical garden that changes through the seasons. Reach it by ferry to Cadenabbia or Tremezzo, or by bus along the western shore. It publishes its opening calendar and sells tickets on its official website. Allow two to three hours."),
    {
      type: "image",
      src: `${IMG}/villa-carlotta-tremezzo.webp`,
      alt: "The white façade of Villa Carlotta in Tremezzo with a fountain and formal garden in front",
      caption: "Villa Carlotta in Tremezzo. Its botanical garden is one of the lake's major attractions.",
      credit: unsplash("Renaud Confavreux", "renaudcfx"),
    },
    h3("Villa del Balbianello"),
    p("On the wooded point of Lavedo near Lenno, Villa del Balbianello is owned by FAI (the National Trust for Italy) and is famous for its terraced garden and loggia over the lake. According to FAI, entry to the park requires online booking; the villa's interiors have their own access arrangements. You can walk from Lenno — about 1 km uphill on a partly gravel path, roughly 25 minutes, not suitable for pushchairs or people with limited mobility — or take a paid taxi boat from Lenno's lido, which is run by a private operator, not by FAI. Allow two hours plus travel."),
    {
      type: "image",
      src: `${IMG}/villa-del-balbianello-lenno.webp`,
      alt: "Villa del Balbianello on its wooded point above Lake Como near Lenno",
      caption: "Villa del Balbianello near Lenno. The park must be booked online in advance.",
      credit: unsplash("Stefano Bucciarelli", "stbuccia"),
    },
    h3("Other gardens"),
    p("In Bellagio, the gardens of Villa Melzi open seasonally; in Varenna, Villa Monastero has a botanical garden and a house museum. Both are easy to combine with a walk around the town."),

    // ——— 12 ———
    h2("Food and dining"),
    p("Lake Como's cooking draws on the lake and the Lombard mountains around it. Dishes you'll often see include:"),
    ul(
      "**Lake fish** — perch (pesce persico), often served as fillets with risotto, and whitefish (lavarello).",
      "**Missoltini** — a traditional preserve of salted, dried lake shad, often served with polenta.",
      "**Polenta** — a staple of Lombard mountain cooking.",
      "**Wine** — the Valtellina, just north of the lake, is known for Nebbiolo-based reds; local lake wines are sold under the Terre Lariane designation.",
    ),
    p("Lakeside terraces are the classic setting, especially at lunch; prices at the most scenic spots tend to reflect the view. Aperitivo in the early evening is a good way to enjoy the lake without a full meal. Book ahead for dinner at weekends and in summer, as restaurants in the small central towns fill up. For more on how meals work in Italy, read [Italian food traditions you should know](/food/italian-food-traditions)."),

    // ——— 13 ———
    h2("Best time to visit"),
    ul(
      "**Spring (April–May)** — gardens at their most colourful, pleasant walking weather and the ferry season getting into full swing. Weather can be changeable.",
      "**Summer (June–August)** — warm, long days and the fullest timetables, but also the busiest ferries, the highest demand for accommodation and occasional thunderstorms.",
      "**Early autumn (September–early October)** — often the best balance, with warm days, easing crowds and villas and gardens still open.",
      "**Late autumn (late October–November)** — quieter and cheaper, but wetter, with shorter days, reduced ferries and some seasonal closures.",
      "**Winter (December–March)** — calm and atmospheric, with the fewest visitors, but many hotels, restaurants and some villas close, and ferry services are reduced.",
    ),
    p("Villa gardens are generally open from spring to autumn, with dates that change each year. For how the lakes compare with the rest of Italy through the year, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 14 ———
    h2("If the weather changes: a backup plan"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Good weather", title: "Get on the water", text: "Ferries between towns, lakeside walks, villa gardens, viewpoints such as Bellagio's point or Brunate above Como." },
        { label: "Uncertain weather", title: "Keep plans flexible", text: "Stay close to your base, choose shorter crossings, visit villa museums, and leave cafés and town walks for the grey spells." },
        { label: "Lake travel disrupted", title: "Stay on land", text: "Explore your base town properly, use trains along the eastern shore, or spend time in Como's historic centre. Check the operator's notices before setting out." },
      ],
    },
    p("Opening times for villas and gardens vary and some close in bad weather; check each venue's own website before you go."),

    // ——— 15 ———
    h2("Lake Como without a car"),
    p("For a short first visit, a car is usually unnecessary. Trains from Milan reach Como and Varenna directly, ferries link the main towns, buses fill the gaps along the shores and the towns themselves are best seen on foot. Taxis and private transfers cover late arrivals and luggage."),
    p("Travelling without a car suits most weekend visitors: first-timers, couples staying in one base, anyone who'd rather not deal with narrow roads and limited parking, and those combining the lake with Milan. It's also more relaxing — the ferry is part of the experience."),

    // ——— 16 ———
    h2("Lake Como with a car"),
    p("A car makes more sense if you're staying outside the main towns, want to explore less-connected villages and the hills, are travelling with lots of luggage or children, or are continuing to the mountains or elsewhere in northern Italy."),
    p("Be ready for narrow, winding shore roads, heavy traffic on summer weekends and limited parking in the lakeside towns, some of which have restricted traffic zones in their centres. Ask your accommodation about parking before you book. Read [driving in Italy](/guides/driving-in-italy) for how tolls, ZTLs and parking work."),

    // ——— 17 ———
    h2("Common mistakes"),
    ol(
      "**Staying somewhere inconvenient for your transport plan.** A base without a station or a pier makes every day harder.",
      "**Trying to visit too many towns.** Two per day is realistic.",
      "**Underestimating ferry logistics.** Queues, full boats and slow services add up.",
      "**Ignoring seasonal schedules.** Timetables are reduced outside the main season.",
      "**Changing accommodation unnecessarily.** On a weekend, one base is enough.",
      "**Renting a car without understanding parking and roads.** Shore roads are slow and parking scarce.",
      "**Relying on an unverified timetable.** Use the operator's current information for your date.",
      "**Booking accommodation without checking transport.** Check the distance to the pier and station, and whether there are steps.",
      "**Treating the lake as one compact attraction.** It's long, and its areas feel quite different.",
      "**Leaving no weather flexibility.** Keep a backup plan for a rainy day.",
    ),

    // ——— 18 ———
    h2("Weekend planning checklist"),
    {
      type: "checklist",
      id: "lake-como-weekend",
      groups: [
        {
          title: "Before booking",
          items: ["Choose your base", "Check its train and ferry connections", "Decide whether you need a car", "Compare accommodation locations and access"],
        },
        {
          title: "Before departure",
          items: ["Check the ferry timetable for your dates", "Book time-sensitive villas", "Check train times and service notices", "Save a rainy-day alternative"],
        },
        {
          title: "During the trip",
          items: ["Check same-day ferry notices", "Allow buffer time for boats", "Don't overload the day", "Keep your last boat and train in mind"],
        },
      ],
    },
    p("Rail journey times, ferry services and villa arrangements in this guide were checked on the official websites in September 2026. Timetables and opening dates change by season; confirm them before you travel. For planning Lake Como within a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Is two days enough for Lake Como?", answer: "Yes, for a first visit focused on one area. Two days allow a base town, one or two others by ferry and perhaps a villa garden. Three days is more relaxed and leaves room for bad weather." },
    { question: "What is the best town to stay in on Lake Como?", answer: "It depends on your priorities. Varenna combines a railway station with central-lake ferries; Bellagio is the most central for boat trips; Menaggio suits the western shore; and Como has the best trains and city facilities." },
    { question: "Can you visit Lake Como without a car?", answer: "Yes. Direct trains from Milan reach Como and Varenna, ferries link the main towns, and buses serve the shores. For a short first visit, a car is usually more trouble than help." },
    { question: "Is Lake Como better with or without a car?", answer: "Without a car for most weekend visitors. A car helps if you're staying outside the main towns, exploring the hills or travelling with lots of luggage, but shore roads are slow and parking in the towns is limited." },
    { question: "How do you get from Milan to Lake Como?", answer: "By regional train. According to Trenord, direct trains take about an hour from Milano Centrale to Varenna and about 40 minutes to Como San Giovanni, and trains from Milano Cadorna reach Como Nord Lago on the lakefront." },
    { question: "Is Como or Bellagio better for a first visit?", answer: "Bellagio if you want to explore the central lake by ferry; Como if you want easy trains, a small city and evenings out. Varenna is a good middle ground, with both a station and central-lake ferries." },
    { question: "Is Varenna a good base for Lake Como?", answer: "Yes, especially for a short trip. It has a railway station with direct trains from Milano Centrale and a ferry pier in the central lake. It's small, so book accommodation early in season." },
    { question: "How do Lake Como ferries work?", answer: "Navigazione Laghi runs public boats: slower services stopping at many towns, faster services over longer distances, and car ferries across the central lake. Timetables change by season; check the official timetable for your date." },
    { question: "What should you see on Lake Como in two days?", answer: "Your base town, one or two central-lake towns by ferry — Bellagio, Varenna or Menaggio — and one villa, such as Villa Carlotta or Villa del Balbianello. Don't try to cover the whole lake." },
    { question: "What should you do on Lake Como if it rains?", answer: "Stay close to your base, choose short crossings, visit villa museums, and explore town centres and cafés. If boats are disrupted, trains along the eastern shore and Como's historic centre are good alternatives." },
    { question: "What is the best time to visit Lake Como?", answer: "April–June and September–early October usually balance good weather, open gardens and full ferry services. Summer is busiest; late autumn and winter are quiet but bring reduced ferries and closures." },
    { question: "Can you visit Lake Como as a day trip from Milan?", answer: "Yes, but a day trip usually covers one town — Como, or Varenna with a short boat hop. To see the central lake properly, stay at least one night." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Navigazione Laghi — Lake Como", url: "https://www.navigazionelaghi.it/en/", note: "ferry timetables, fares and service notices" },
    { label: "Trenord — Milano Centrale to Varenna-Esino", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-central-station-varenna-esino/", note: "rail journey time" },
    { label: "Trenord — Milano Centrale to Como San Giovanni", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-centrale-como-s-giovanni-route/", note: "rail journey time" },
    { label: "Trenord — Milano Cadorna to Como Lago", url: "https://www.trenord.it/en/routes-and-timetables/most-searched-lines/milano-cadorna-como/", note: "rail journey time" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/en/tickets/travel-titles/malpensa-express/", note: "Malpensa airport link" },
    { label: "ATM — Como–Brunate funicular", url: "https://www.atm.it/en/AltriServizi/Trasporto/Pages/FunicolareComoBrunate.aspx", note: "funicular information" },
    { label: "Villa Carlotta", url: "https://www.villacarlotta.it/en/", note: "opening calendar and tickets" },
    { label: "FAI — Villa del Balbianello", url: "https://fondoambiente.it/villa-del-balbianello-eng", note: "booking and access" },
    { label: "Giardini di Villa Melzi", url: "https://www.giardinidivillamelzi.it/en/home2/", note: "seasonal garden opening" },
    { label: "Villa Monastero", url: "https://www.villamonastero.eu/", note: "garden and house museum hours" },
    { label: "Lake Como is — tourism portal of Fondazione Lariofiere", url: "https://www.lakecomo.is/", note: "destination information" },
  ],
};
