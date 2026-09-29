import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Practical guide: "Best Time to Visit Italy: Weather and Seasons by Region".
// Climate figures are long-term averages from the Italian Air Force
// meteorological service (Aeronautica Militare) climate normals, labelled by
// station and period. Season dates (ski lifts, mountain huts, holidays) were
// checked in September 2026 — re-check them whenever this guide is updated.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/best-time-to-visit-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const bestTimeToVisitItaly: ArticleContent = {
  body: [
    // ——— Introduction ———
    p("Ask when to visit Italy and you'll usually hear \"spring or autumn\". That's a reasonable starting point for a city trip, but it isn't an answer for someone planning to swim off Sardinia, hike in the Dolomites or ski in the Alps. Italy runs from glaciers to the latitude of North Africa, and the right time depends on where you're going, what you want to do, how you cope with heat and crowds, and what you're prepared to spend."),
    p("This guide is a decision tool rather than a verdict. It explains how the seasons play out across the country, what each month tends to be like, which periods suit each region and popular destination, and how to match the calendar to the kind of trip you have in mind."),

    // ——— 1 ———
    h2("Quick answer: the best time to visit Italy"),
    answer("**There's no single best month for all of Italy.** For cities and sightseeing, **April–June** and **September–October** often balance mild weather with manageable demand. **Summer** is the season for beaches, islands and the high mountains, but it brings heat in the cities and the highest demand on the coast. **Winter** suits museums, Christmas travel and skiing, with shorter days and many seaside businesses closed. Choose the region and the type of trip first, then the month."),
    h3("Choose your timing based on your trip"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "I want beaches", title: "Late June to early September", text: "The sea is warmest and seaside services are fully open. June and September are often calmer than July and August. The far south and the islands stay warm longer than the north." },
        { label: "I want cities and museums", title: "April–June and September–October", text: "Comfortable temperatures for walking. Winter works well too if you don't mind cold mornings — just avoid Christmas and holiday weekends if you want quieter museums." },
        { label: "I want hiking", title: "Late June to September in the mountains", text: "High trails and mountain huts open once the snow clears. For the hills, the coast and the south, spring and autumn are usually more comfortable than midsummer." },
        { label: "I want skiing", title: "Roughly December to April", text: "The Alps and Dolomites usually open from late November or early December into April; dates depend on the resort and the snow. Christmas, New Year and February holidays are the busiest weeks." },
        { label: "I want food and wine", title: "September to November", text: "Grape harvest, then olives, chestnuts, mushrooms and, in some areas, truffles. Spring is good too, with lighter dishes and outdoor dining." },
        { label: "I want lower demand", title: "Shoulder and low season", text: "Late autumn, winter (outside the holidays) and early spring are generally quieter — but coastal and island resorts may be partly closed, and mountain areas are between seasons in spring and late autumn." },
      ],
    },
    {
      type: "image",
      src: `${IMG}/tuscany-hills-spring-wildflowers.webp`,
      alt: "Rolling green hills in Tuscany in spring, with cypress trees, a farmhouse and red wildflowers",
      caption: "Tuscany in spring. Countryside regions are at their greenest from April to early June.",
      credit: unsplash("Jacek Urbanski", "jacek24"),
    },

    // ——— 2 ———
    h2("Italy's seasons at a glance"),
    table(
      ["Season", "Good for", "Things to consider"],
      [
        ["Spring (March–May)", "Cities, countryside, gardens, walking", "Weather is changeable, especially in March; Easter and the late-April/May holidays are busy; many beach services open gradually"],
        ["Summer (June–August)", "Beaches, islands, mountains, long daylight", "Heat in the cities and inland; the highest demand and prices on the coast; book early"],
        ["Autumn (September–November)", "Food and wine, cities, countryside", "September can still be hot; rain becomes more frequent from October in much of Italy; days shorten"],
        ["Winter (December–February)", "Cities, museums, skiing, Christmas atmosphere", "Short days; cold in the north and the mountains; many coastal and island businesses close"],
      ],
      "The four seasons in broad terms — regions don't all follow the same pattern"
    ),
    h3("Weather and climate are not the same thing"),
    p("**Climate** describes long-term patterns — typically 30-year averages of temperature and rainfall. **Weather** is what actually happens during your week. A historically dry month can bring a wet spell; an \"average\" October can feel like summer or like winter. Use the averages to choose a season, then check a forecast from an official meteorological service a few days before you travel, and pack for the range rather than the mean."),
    h3("Average temperatures in eight cities"),
    p("The table shows long-term averages from the climate normals of the Italian Air Force meteorological service (Aeronautica Militare), for the station and period shown. They describe typical conditions, not what you should expect on a given day — and recent summers in particular have often been hotter than these older averages."),
    table(
      ["Station (period)", "January: average low–high", "July: average low–high", "Wettest months on average"],
      [
        ["Bolzano (1961–1990)", "−5 to 6 °C", "15 to 29 °C", "July and August (summer storms)"],
        ["Milan Linate (1971–2000)", "−1 to 6 °C", "18 to 29 °C", "October, then September and May"],
        ["Venice Tessera (1971–2000)", "0 to 7 °C", "18 to 28 °C", "Spread through the year; slightly more in June and October"],
        ["Florence Peretola (1971–2000)", "2 to 11 °C", "18 to 31 °C", "November and October"],
        ["Rome Ciampino (1971–2000)", "3 to 12 °C", "18 to 30 °C", "November and October; July is the driest"],
        ["Naples Capodichino (1971–2000)", "4 to 13 °C", "19 to 30 °C", "November and October"],
        ["Palermo Punta Raisi (1961–1990)", "10 to 15 °C", "23 to 28 °C", "October to January; summer is very dry"],
        ["Cagliari Elmas (1981–2010)", "5 to 14 °C", "20 to 31 °C", "November; summer is very dry"],
      ],
      "Approximate long-term averages, rounded to whole degrees"
    ),
    p("Two things stand out. The north has cold winters and a much wider range between seasons than the south and the islands. And there's no nationwide rainy season: in Rome, Florence, Naples and on the islands, autumn is the wettest time and summer the driest, while in the Alps summer thunderstorms make July and August among the wettest months."),

    // ——— 3 ———
    h2("Italy weather by month"),
    p("Jump to any month, or use the table for a quick comparison. Each month is described in more detail in the seasonal sections below."),
    { type: "jumpLinks", label: "Months", targets: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },
    table(
      ["Month", "Overall character", "Good for", "Watch for"],
      [
        ["January", "Cold north and mountains, mild but not warm south", "Museums, cities, skiing", "Short days; coastal closures; New Year and Epiphany (6 January) holidays"],
        ["February", "Still winter; hints of spring in the south", "Skiing, Carnival, quiet cities", "Carnival week in Venice; school ski holidays"],
        ["March", "Changeable, warming", "Cities, Sicily and the south, early gardens", "Rain and cool spells; Easter if it falls early"],
        ["April", "Mild, green, lively", "Cities, countryside, walking", "Easter and 25 April demand; sea still cool"],
        ["May", "Warm, long days", "Almost everything except skiing", "1 May holiday; school groups; rising demand"],
        ["June", "Early summer", "Beaches, lakes, mountains from late June", "Heat building inland; 2 June holiday"],
        ["July", "Hot and sunny across most of Italy", "Beaches, islands, high mountains", "City heat; peak demand on the coast"],
        ["August", "Peak holiday month", "Beaches, mountains, festivals", "Ferragosto (15 August); busiest coast; some city closures"],
        ["September", "Still summery, gradually calmer", "Beaches, cities, early harvest", "Early-month heat; storms later in the month"],
        ["October", "Mild, more rain later", "Food and wine, cities, countryside", "Shorter days; coastal services winding down"],
        ["November", "Cool and often wet", "Cities, museums, food seasons", "Rain; acqua alta in Venice is more likely; closures on the coast"],
        ["December", "Winter; festive from early in the month", "Christmas travel, cities, skiing from mid-month", "8 December and Christmas holidays; short days"],
      ],
      "Italy month by month — for decisions, not guarantees"
    ),

    // ——— 4 ———
    h2("Spring in Italy"),
    p("Spring is when most of Italy feels welcoming: days lengthen quickly, the countryside is green and outdoor tables reappear. It's also the season when conditions differ most from week to week, and from north to south. Spring is excellent for city breaks, gardens and walking; it's less reliable for the beach, and the high mountains are still in winter or between seasons."),
    h3("March"),
    p("March is a transition month. Sicily and the far south can be pleasantly mild, with almond blossom and early wildflowers, while the north can still be grey and cold and the Alps are still in ski season. Rain and wind are common, so it suits travellers who want quieter museums and lower demand more than those who need predictable weather. If Easter falls in March — it moves every year — expect Rome and major sights to be much busier that week. Many beach establishments are still closed."),
    h3("April"),
    p("April is one of the most popular months for a first trip, and for good reason: comfortable temperatures for walking, long evenings and a green landscape. Gardens around the lakes and in the cities begin to flower. The trade-off is demand. Easter (in most years) and the 25 April Liberation Day holiday bring Italian and international travellers to the cities and the countryside, and hotels on those dates fill early. The sea is still cool for most swimmers, and showers are part of the deal."),
    h3("May"),
    p("May is a strong all-round month. It's usually warm enough for outdoor dining everywhere and for the first swims in the south, while cities are rarely as hot as they'll be in July. Lakes, Tuscany, Umbria, the Amalfi Coast and Sicily are all at their best. Two things to plan around: the 1 May holiday and the school trips that fill major museums in spring. Higher Alpine trails are often still under snow until June."),
    {
      type: "image",
      src: `${IMG}/varenna-lake-como.webp`,
      alt: "The colourful houses of Varenna beside Lake Como, with boats and mountains in the background",
      caption: "Varenna on Lake Como. The lakes are at their best from spring to early autumn; boat timetables are reduced out of season.",
      credit: unsplash("Evan Verni", "evanv"),
    },
    p("For planning a lake weekend in spring, see [Lake Como in a weekend](/travel/lake-como-weekend)."),

    // ——— 5 ———
    h2("Summer in Italy"),
    p("Summer is the season of the sea, the islands and the high mountains. It's also when cities are hottest, when coastal accommodation is in highest demand and when advance booking matters most. Around the June solstice, daylight in Rome lasts roughly 15 hours — ideal for long days outdoors, as long as you plan around the midday heat."),
    h3("June"),
    p("June combines summer weather with slightly less pressure than July and August. The sea has warmed up in most of the south and the islands, lake towns are fully open, and the high-mountain season begins in the second half of the month as lifts and huts open. Inland cities are warm to hot, particularly later in June. The 2 June Republic Day holiday can make a long weekend busy. For many travellers who want the beach and a few cities in one trip, June is a good compromise."),
    h3("July"),
    p("July is reliably sunny and dry across most of the country — Rome averages only a couple of rainy days — and often very hot, especially inland and in the Po plain. It suits beach holidays, sailing, island trips and the Alps and Dolomites, where it's the heart of the hiking season (with afternoon thunderstorms to plan around). For city sightseeing, start early, rest at midday and save outdoor sites for the morning or evening. Coastal accommodation is in high demand, so book well ahead."),
    h3("August"),
    p("August is Italy's main holiday month. Many Italians take their holidays in the weeks around Ferragosto, the 15 August public holiday, so coasts, islands and mountain resorts are at their busiest and most expensive. At the same time, some businesses in the cities close for part of the month — fewer than in the past, but it still happens, especially with small family-run shops and restaurants. That makes August a poor fit for travellers who want quiet beaches or low prices, and a reasonable one for visitors who want lively seaside towns, summer festivals and long days in the mountains, and who book early. Cities can be hot but less congested with commuters."),
    {
      type: "image",
      src: `${IMG}/san-vito-lo-capo-beach-summer.webp`,
      alt: "Aerial view of the beach at San Vito Lo Capo in Sicily in summer, with rows of umbrellas and turquoise water",
      caption: "San Vito Lo Capo, Sicily. Beach establishments on the islands and in the south are fully open from June to September.",
      credit: unsplash("Paul Sebastian Saliba", "paulinpixels"),
    },
    tip("In summer, book accommodation on the coast, on the islands and in mountain resorts as early as you can, and check ferry timetables for your exact dates. For inland cities, choose a room with air conditioning and plan outdoor sightseeing for the cooler hours.", "Summer planning"),

    // ——— 6 ———
    h2("Autumn in Italy"),
    p("Autumn is the season of food and wine, and for many travellers the most comfortable time for cities. It changes a lot between early September and late November: the first weeks are often still summer, while late autumn is cool, shorter and, in much of Italy, the wettest part of the year."),
    h3("September"),
    p("September often feels like a gentler August. The sea is still warm — sometimes warmest of the year — and beaches empty noticeably once Italian schools restart in mid-September. The grape harvest begins in many wine regions, and cities are usually more comfortable than in midsummer, although the first half of the month can still be hot. Mountain huts in the Dolomites typically stay open until around late September. Thunderstorms become more frequent as the month goes on."),
    h3("October"),
    p("October is a favourite for food-focused travel: harvests, autumn menus, chestnuts, mushrooms and, in areas such as Piedmont, the start of the white truffle season. It's also a good month for Rome, Florence and the south, which are usually mild. The catch is rain: in Rome, Florence and Naples, October and November are the wettest months on average. Days shorten quickly — especially after the clocks change at the end of the month — and many coastal and island businesses close for the winter from mid-October."),
    {
      type: "image",
      src: `${IMG}/rome-tiber-autumn.webp`,
      alt: "Autumn trees along the Tiber in Rome, with the dome of St Peter's Basilica in the distance",
      caption: "The Tiber in autumn. Rome is usually mild in October, though it's also one of the city's wetter months.",
      credit: unsplash("Nicolò Salinetti", "nicolosali"),
    },
    h3("November"),
    p("November is usually the quietest month outside winter holidays. It's cool and often wet, particularly in the north and in the centre, and many seaside and island resorts are closed. In return, cities are calm, museums are uncrowded and accommodation is often more affordable. It's the month for olive oil, truffles and slow food trips, for Venice without summer crowds (but with a higher chance of acqua alta), and for travellers who don't mind carrying an umbrella. 1 November is a public holiday."),

    // ——— 7 ———
    h2("Winter in Italy"),
    p("Winter divides Italy clearly. The Alps and Dolomites are in ski season, the north is cold and sometimes foggy, and the south is mild but not warm enough for the beach. In Rome, daylight around the December solstice is roughly nine hours, so plan days that start early and end indoors."),
    h3("December"),
    p("Early December is quiet in most cities until the 8 December holiday (the Immaculate Conception), which is traditionally when Christmas decorations go up and many families travel. Christmas markets are a tradition in the north, particularly in Trentino-Alto Adige, and many cities hold their own; check each year's dates, as they change. Ski resorts usually open between late November and mid-December, depending on the area and the snow. The weeks around Christmas and New Year are among the busiest and most expensive of the year in cities and ski resorts."),
    h3("January"),
    p("After Epiphany on 6 January, January is one of the calmest months to travel in Italy — outside the ski resorts. Museums are quiet, accommodation is often cheaper, and winter sales start in the shops. The north can be cold and foggy, and the mountains are snowy; the south and Sicily are mild during the day. Many coastal hotels, beach clubs and some island ferries operate reduced services or close altogether."),
    h3("February"),
    p("February is still winter, but Carnival livens things up. Venice's Carnival is the best known, and its dates, like Easter's, change every year; during Carnival, Venice becomes very busy. School holidays make ski resorts busy in parts of the month. Elsewhere, February is quiet, and in Sicily and the far south the first signs of spring can appear by the end of the month."),
    {
      type: "image",
      src: `${IMG}/val-di-funes-dolomites-winter.webp`,
      alt: "A snowy path and fence among snow-covered trees below the jagged peaks of the Dolomites in Val di Funes",
      caption: "Near the Zannes pastures in Val di Funes, South Tyrol. Ski areas in the Dolomites usually open from late November or early December into April.",
      credit: unsplash("Daniel Seßler", "danielsessler"),
    },

    // ——— 8 ———
    h2("Best time by region"),
    h3("Italy is not one climate"),
    p("It helps to think of five broad zones rather than one country. They overlap, and local geography — altitude, the sea, a sheltering mountain range — matters as much as latitude."),
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Northern Italy", text: "Cold, often foggy winters in the Po plain; hot, humid summers; rain spread through the year. Spring and autumn are the most comfortable seasons for Milan, Turin, Bologna and Venice." },
        { title: "Central Italy", text: "Mild to cool winters and hot, dry summers, especially inland. Autumn is the wettest season. Tuscany, Umbria and Rome are at their best in spring and early autumn." },
        { title: "Southern Italy", text: "Mild winters and long, hot, dry summers. The sea season runs longer than in the north. Inland areas and the mountains of the south can be much cooler than the coast." },
        { title: "Islands", text: "Sicily and Sardinia have the mildest winters and very dry summers. Wind — such as the mistral in Sardinia or the scirocco from the south — can shape a day at the beach." },
        { title: "Alpine areas", text: "Long snowy winters, short summers and the wettest weather in July and August, often as afternoon storms. Mountain seasons follow lifts and huts rather than the calendar." },
      ],
    },
    h3("All 20 regions compared"),
    table(
      ["Region", "Good periods", "Particularly suited to", "Seasonal considerations"],
      [
        ["Abruzzo", "June–September; December–March for snow", "National parks, hiking, mountain villages, the Adriatic coast", "Mountain winters are cold and snowy; ski areas such as Roccaraso depend on snow"],
        ["Basilicata", "April–June, September–October", "Matera, the Maratea coast, the Pollino mountains", "Summer is hot in Matera; winter nights are cold inland"],
        ["Calabria", "June–September for the coast; May and October are quieter", "Beaches, Tropea, the Sila and Aspromonte", "Many seaside businesses are seasonal; the mountains are much cooler"],
        ["Campania", "April–June, September–October", "Naples, Pompeii, the Amalfi Coast, Capri", "Coastal ferries and many hotels run seasonally; July–August is hot and busy"],
        ["Emilia-Romagna", "April–June, September–October; summer for the Riviera", "Bologna, Parma, Modena, food; Adriatic beaches", "Foggy winters in the plain; the Rimini coast peaks in July and August"],
        ["Friuli-Venezia Giulia", "May–September; winter for the mountains", "Trieste, Udine, Grado and Lignano, the Julian Alps", "Trieste can be windswept by the bora in winter"],
        ["Lazio", "March–June, September–November", "Rome, Tivoli, the Etruscan towns, day trips", "Rome is hot in July–August; Easter and major Church events add demand"],
        ["Liguria", "April–June, September–October", "The Cinque Terre, Genoa, Riviera towns", "Very busy in summer; heavy autumn rain can close coastal paths"],
        ["Lombardy", "April–October for the lakes; any season for Milan", "Milan, Lake Como, Bergamo, Alpine valleys", "Hot, humid summers in Milan; big trade fairs raise hotel demand"],
        ["Marche", "June–September for the coast; spring and autumn inland", "Urbino, the Conero, hill towns", "Inland towns are quiet in winter"],
        ["Molise", "May–October", "Hill villages, slow travel", "Limited public transport; small towns are very quiet in winter"],
        ["Piedmont", "April–June, September–November", "Turin, the Langhe wine hills, the Alps", "Autumn is harvest and truffle season; winters are cold and foggy in the plain"],
        ["Puglia", "May–June, September–early October", "Trulli, white towns, two coastlines, masserie", "August is the busiest month on the coast; summer heat inland"],
        ["Sardinia", "June and September for beaches; spring for walking", "Beaches, sailing, the interior", "July–August peak; many coastal businesses close in winter; the mistral can be strong"],
        ["Sicily", "April–June, September–October; summer for the beach", "Palermo, Etna, temples, baroque towns, beaches", "Summer heat inland; the mildest winters in Italy; Etna's summit can be snowy in winter"],
        ["Tuscany", "April–June, September–October", "Florence, Siena, hill towns, wine", "Hot inland summers; Florence is busy most of the year; harvest in September–October"],
        ["Trentino-Alto Adige / Südtirol", "Late June–September for hiking; December–April for skiing", "Dolomites, lakes, Christmas markets, wellness", "Between-season months (spring and November) bring closures of lifts and some hotels"],
        ["Umbria", "April–June, September–October", "Assisi, Perugia, Orvieto, slow countryside trips", "Winters are cold in the hills; autumn brings truffle and olive oil seasons"],
        ["Valle d'Aosta", "Late June–September; December–April for skiing", "Mont Blanc, Gran Paradiso, hiking, skiing", "Snow at altitude lingers into early summer; many lifts close between seasons"],
        ["Veneto", "April–June, September–October; summer for the Dolomites", "Venice, Verona, Padua, the Dolomites", "Venice is busiest at Carnival and in summer; acqua alta is more likely in late autumn and winter"],
      ],
      "Best time by region"
    ),
    p("For regions best explored slowly by road, see [driving in Italy](/guides/driving-in-italy); for those well served by rail, see [Italy by train](/guides/italy-by-train)."),

    // ——— 9 ———
    h2("Best time to visit popular Italian destinations"),
    table(
      ["Destination", "Strong periods", "Why", "Consider"],
      [
        ["Rome", "March–May, late September–November", "Comfortable for walking between sites", "Easter week and major Church events are very busy; July–August is hot"],
        ["Florence", "April–June, September–October", "Mild weather for a compact, walkable centre", "Busy most of the year; Uffizi and Accademia need booking"],
        ["Venice", "April–June, September–October; January for quiet", "Pleasant for walking and the lagoon islands", "Carnival and summer are busiest; acqua alta is more likely in late autumn and winter; the day-visitor access fee applies on set dates"],
        ["Milan", "April–June, September–October", "Mild weather for the city and trips to the lakes", "Trade fairs and fashion weeks fill hotels; August is quiet with some closures"],
        ["Naples", "March–June, September–November", "Pompeii and Herculaneum are more comfortable outside midsummer", "July–August is hot at the excavations"],
        ["Amalfi Coast", "May–June, September–early October", "Warm enough to swim, with full ferry services", "July–August is the busiest; many hotels and ferry routes are seasonal"],
        ["Lake Como", "April–October", "Gardens, boat services and outdoor dining", "Boat timetables are reduced and some hotels close in winter"],
        ["Tuscany", "April–June, September–October", "Green hills in spring; harvest in autumn", "Inland summers are hot; the Palio in Siena brings big crowds in early July and mid-August"],
        ["Dolomites", "Late June–September for hiking; December–April for skiing", "Open trails, huts and lifts in each season", "Spring and November are between seasons; July–August is busy"],
        ["Sicily", "April–June, September–October", "Sightseeing without midsummer heat; the sea is warm from June", "Inland heat in July–August; winters are mild but not beach weather"],
        ["Sardinia", "June, September", "Warm sea with fewer people than midsummer", "July–August peak; many coastal businesses are closed in winter"],
        ["Puglia", "May–June, September", "Warm days for towns and the coast", "August is busy with Italian holidaymakers"],
        ["Matera", "April–June, September–October", "Comfortable for walking the Sassi's steps and lanes", "Summer afternoons are hot; winter evenings are cold"],
      ],
      "Popular destinations and their stronger periods"
    ),
    p("For mountain trips in particular, see [visiting the Dolomites](/guides/visiting-the-dolomites)."),
    {
      type: "image",
      src: `${IMG}/cala-di-volpe-sardinia.webp`,
      alt: "Aerial view of a sheltered bay with turquoise water and a moored boat at Cala di Volpe in Sardinia",
      caption: "Cala di Volpe on Sardinia's north-east coast. June and September are often calmer than midsummer on the island's beaches.",
      credit: unsplash("Nicolò Canu", "nicontents"),
    },

    // ——— 10 ———
    h2("Best time for different types of trips"),
    h3("Best time for city sightseeing"),
    p("For Rome, Florence, Venice, Naples and Milan, spring (April–June) and early autumn (September–October) usually give the most comfortable walking weather. Winter is a strong alternative for museum-heavy trips: days are short and mornings cold, but queues are shorter outside the holidays. Midsummer city trips are possible with an early start and a long lunch break, but heat makes outdoor sites such as the Roman Forum or Pompeii tiring."),
    h3("Best time for beaches"),
    p("Late June to early September is the main beach season, when the sea is warm and beach establishments, ferries and seaside restaurants are fully open. June and the first half of September are usually calmer than July and August. The season lasts longer in Sicily, Sardinia and the far south than on the northern Adriatic or in Liguria. Outside summer, many coastal businesses operate reduced hours or close — check before planning a beach trip in spring or autumn."),
    h3("Best time for hiking"),
    p("In the Alps and Dolomites, the high-mountain season usually runs from late June to late September, when trails are clear of snow and mountain huts are open; exact dates vary each year with the snow. For hill walking in Tuscany, Umbria, Liguria, the south and the islands, spring and autumn are usually better than midsummer, when heat and shadeless paths make long walks hard. Always check local conditions and trail closures."),
    {
      type: "image",
      src: `${IMG}/dolomites-meadow-rocca-pietore.webp`,
      alt: "A green alpine meadow with rocks and conifers below Dolomite peaks near Rocca Pietore in summer",
      caption: "Summer meadows near Rocca Pietore in the Dolomites. The hiking season follows the snow, not the calendar.",
      credit: unsplash("Tomáš Hirsch", "tomashirsch"),
    },
    h3("Best time for skiing"),
    p("Skiing in the Alps and the Dolomites generally runs from late November or December until April, depending on the resort, altitude and snow. The Dolomiti Superski area, for example, has recently opened its first lifts at the end of November and kept some areas open into April. January (after Epiphany) and March are often less crowded than the Christmas period and the February school holidays. The Apennines, such as Roccaraso in Abruzzo, have shorter and less predictable seasons."),
    h3("Best time for food and wine"),
    p("Autumn is the richest season for food-focused travel: the grape harvest (usually September to October), then olives, new olive oil, chestnuts, mushrooms and, in Piedmont and parts of central Italy, truffles. Many towns hold food festivals (sagre) through summer and autumn; check the local calendar for your dates. Spring has its own appeal — artichokes, broad beans, asparagus and outdoor dining — and is less rainy than late autumn."),
    h3("Best time for road trips"),
    p("For driving routes through Tuscany, Puglia, Sicily or Sardinia, May–June and September–October usually combine long days with lighter traffic than August. In the mountains, some high passes are only open in summer, and from mid-November to mid-April winter tyres or chains on board are required where signed. Read [driving in Italy](/guides/driving-in-italy) before you set off."),
    h3("Best time for families"),
    p("Most families travel in school holidays, which means summer and Easter. If you have that flexibility, June and early September give warm weather with a little less pressure than July and August. Mountain resorts in summer, lakes in late spring and beach towns in June suit families well. In cities, avoid the midday heat in July and August with young children."),
    h3("Best time for budget travel"),
    p("Accommodation — usually the largest cost — is generally cheaper in low and shoulder season: November, January (outside the ski resorts) and much of February and March, as well as the weeks either side of the summer peak. Prices vary a lot by destination and date, so compare real prices for your trip; see [how much a trip to Italy costs](/guides/italy-trip-cost)."),
    h3("Best time for avoiding the busiest periods"),
    p("Demand depends on the destination. As a rule, cities are quietest in November, January and early February (outside holidays and events); the coast and islands are quietest in the months when many businesses are closed; and the mountains are quietest between the ski and hiking seasons. The busiest times are Easter, the late-April and May holiday weekends, July and August on the coast, Ferragosto, the Christmas period and major events."),

    // ——— 11 ———
    h2("Peak, shoulder and low season"),
    p("Tourism seasons in Italy aren't one national calendar. August is peak season on a Sardinian beach and a relatively quiet month for business hotels in Milan; February is low season in Sicily and high season in a ski resort. Use these terms for each destination rather than for the country as a whole."),
    h3("Peak season"),
    p("The periods of highest demand for a particular place: summer on the coast and the islands, the ski holidays in the mountains, and Easter, spring weekends and much of the summer in the major cities. Expect higher prices, fuller trains and the need to book ahead."),
    h3("Shoulder season"),
    p("The weeks either side of the peak — typically spring and early autumn in cities and on the coast, and late spring or early autumn in the mountains. Weather is often good and demand lower, but it varies: early June on the Amalfi Coast feels like summer, while early June in the high Dolomites can still mean snow on the trails."),
    h3("Low season"),
    p("The quietest months for a destination. Accommodation is often cheaper and sights calmer, but some hotels, restaurants, ferries and lifts close or run reduced services, particularly on the coast, on the islands and in the mountains between seasons."),
    table(
      ["Season type", "Typical characteristics", "Who may prefer it"],
      [
        ["Peak", "Best conditions for the main activity; highest demand and prices; everything open", "Travellers tied to school holidays; beach and ski trips; those who want lively resorts"],
        ["Shoulder", "Good but less predictable weather; moderate demand; most services open", "Flexible travellers; city and countryside trips; walkers"],
        ["Low", "Quieter sights and lower prices; shorter days; some closures", "Museum-focused and budget travellers; those who value calm over sunshine"],
      ],
      "Peak, shoulder and low season compared"
    ),

    // ——— 12 ———
    h2("How the season shapes an itinerary"),
    p("The same route can work very differently depending on the month. These examples show the planning logic; for full route ideas see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
    h3("7 days in spring"),
    p("Spring suits a city-focused week — Rome, Florence and Venice, for example — because temperatures are comfortable for long walking days. The things to plan around are demand and rain: check whether Easter or 25 April falls in your week, book timed-entry museums early, and keep one indoor option for each day in case of showers. If you want the sea, the south and Sicily warm up sooner than the north."),
    h3("10 days in summer"),
    p("In summer, reverse the usual logic: spend the hottest days by the sea, in the lakes or in the mountains, and keep city visits short, with sightseeing early and late. A 10-day summer trip might combine a few days in a city with a longer stay on the coast or in the Dolomites. Book coastal accommodation and ferries early, and allow for the fact that July and August are the busiest months in most resort areas."),
    h3("14 days in autumn"),
    p("Autumn rewards a slower route that follows the harvest: cities in the first days of the trip, then wine and food country — Tuscany, Umbria or Piedmont — and perhaps the south, which stays warm longer. In late October and November, expect shorter days and more rain, check that coastal hotels are still open, and plan indoor alternatives."),

    // ——— 13 ———
    h2("What to pack"),
    p("Pack for the season and the region you're visiting, not for Italy's sunny reputation — and check the forecast a few days before you leave."),
    h3("Spring packing"),
    table(
      ["Item", "Why"],
      [
        ["Layers and a light jacket", "Mornings and evenings can be cool, afternoons warm"],
        ["Compact umbrella or rain jacket", "Showers are common, especially in March and April"],
        ["Comfortable walking shoes", "Cobbles, steps and long sightseeing days"],
        ["Sunglasses and sunscreen", "The sun is strong from April, especially in the south"],
      ]
    ),
    h3("Summer packing"),
    table(
      ["Item", "Why"],
      [
        ["Light, breathable clothes", "Heat in the cities and inland"],
        ["A layer that covers shoulders and knees", "Required in many churches — and useful in air conditioning"],
        ["Sun protection and a refillable bottle", "Long, hot days outdoors"],
        ["Warm layer and waterproof for the mountains", "It can be cold and stormy at altitude even in July"],
      ]
    ),
    h3("Autumn packing"),
    table(
      ["Item", "Why"],
      [
        ["Layers, from T-shirt to sweater", "September can be hot; November is cool"],
        ["Waterproof jacket and shoes that handle rain", "October and November are wet months in much of Italy"],
        ["Comfortable walking shoes", "Wet stone streets can be slippery"],
      ]
    ),
    h3("Winter packing"),
    table(
      ["Item", "Why"],
      [
        ["Warm coat, hat and gloves", "Cold in the north, in the mountains and on winter evenings everywhere"],
        ["Waterproof footwear", "Rain, fog and, in Venice, possible high water"],
        ["Mountain equipment appropriate to your activity", "Ski and winter hiking gear can be hired locally in most resorts"],
      ]
    ),

    // ——— 14 ———
    h2("Planning around holidays and closures"),
    p("Public holidays, school holidays and major events can change availability and prices more than the weather does. National public holidays are fixed by law; Easter moves each year, and cities also celebrate their own patron saints' days."),
    table(
      ["Date", "Holiday", "What it can mean for travellers"],
      [
        ["1 January", "New Year's Day", "Quiet morning; some sights closed"],
        ["6 January", "Epiphany", "End of the Christmas holidays; busy travel days"],
        ["March or April (varies)", "Easter Sunday and Easter Monday", "One of the busiest periods for cities, Rome in particular"],
        ["25 April", "Liberation Day", "Often a long weekend; high demand"],
        ["1 May", "Labour Day", "Long weekends; some closures"],
        ["2 June", "Republic Day", "Long weekends; celebrations in Rome"],
        ["15 August", "Ferragosto (Assumption)", "Peak of the summer holidays; busy coasts, some city closures"],
        ["1 November", "All Saints' Day", "A holiday weekend for many"],
        ["8 December", "Immaculate Conception", "Start of the Christmas season; busy weekend"],
        ["25–26 December", "Christmas Day and St Stephen's Day", "Closures on Christmas Day; high demand around the holidays"],
      ],
      "National public holidays in Italy"
    ),
    p("Local holidays include, for example, 24 June (St John) in Florence, 29 June (Saints Peter and Paul) in Rome and 7 December (St Ambrose) in Milan. Carnival, major festivals, trade fairs and sporting events can also fill hotels. Check what's happening in your destination for your exact dates before you book."),
    important("Opening seasons for beach establishments, ferries, lifts and mountain huts change every year. Check the operator's or venue's own website for your dates rather than assuming a service will be running.", "Seasonal services"),
    p("Our [Italy travel planning checklist](/guides/italy-travel-planning-checklist) covers the booking steps in order."),

    // ——— 15 ———
    h2("Common mistakes"),
    ol(
      "**Assuming all of Italy has the same weather.** Milan in January and Palermo in January are very different trips.",
      "**Treating historical averages as guarantees.** Averages describe typical conditions; check the forecast before you go.",
      "**Planning a beach trip without checking seasonal operations.** In spring and late autumn, many beach clubs, hotels and ferries are closed or reduced.",
      "**Ignoring mountain conditions.** Snow can linger on high trails into June, and lifts and huts close between seasons.",
      "**Visiting major cities without considering heat.** In July and August, plan outdoor sights for the morning and evening.",
      "**Assuming shoulder season is the same everywhere.** Early June is summer on the Amalfi Coast and late spring in the Alps.",
      "**Forgetting daylight differences.** A December day in Rome is roughly six hours shorter than a June day.",
      "**Not checking holidays.** Easter, long weekends and Ferragosto change availability and prices.",
      "**Booking too late for high-demand periods.** Summer on the coast, ski holidays and Easter in Rome fill early.",
      "**Packing for Italy's reputation rather than the season.** Bring layers and rain protection outside summer."
    ),

    // ——— 16 ———
    h2("Month-by-month planning table"),
    p("Use this alongside the weather table above: it focuses on demand, booking and dates to check."),
    table(
      ["Month", "Demand (varies by destination)", "Book early for", "Dates to check"],
      [
        ["January", "Low in cities; high in ski resorts", "Ski accommodation", "New Year, Epiphany, winter sales"],
        ["February", "Low in cities; high in ski resorts and Venice at Carnival", "Venice during Carnival; ski weeks", "Carnival dates; school ski holidays"],
        ["March", "Rising", "Rome if Easter is early", "Easter date"],
        ["April", "High in cities", "City hotels, timed museum tickets", "Easter, 25 April"],
        ["May", "High", "Amalfi Coast, lakes, Florence", "1 May, long weekends"],
        ["June", "High and rising on the coast", "Coast and islands, ferries", "2 June; start of the mountain season"],
        ["July", "Peak on the coast and in the mountains", "Beach and mountain accommodation, ferries, hire cars", "Local festivals and events"],
        ["August", "Peak on the coast; mixed in cities", "Everything on the coast, as early as possible", "Ferragosto; city closures"],
        ["September", "High early, easing later", "Coast early in the month; cities", "Trade fairs; end of the hut season"],
        ["October", "Moderate", "Food and wine areas at weekends", "Harvest festivals; seasonal closures on the coast"],
        ["November", "Low in most places", "Little needs early booking", "1 November; closures on the coast and in the mountains"],
        ["December", "Low early; very high over Christmas", "Ski resorts and cities over the holidays", "8 December, Christmas, New Year"],
      ],
      "Planning table by month"
    ),
    p("Rules, opening seasons and averages mentioned in this guide were checked against the sources below in September 2026. Conditions vary from year to year; check forecasts and operators' own information before you travel."),
  ],

  faqs: [
    { question: "What is the best month to visit Italy?", answer: "There isn't one best month for all of Italy. For cities, April, May, June, September and October are often the most comfortable. For beaches, late June to early September; for hiking in the Alps and Dolomites, July to September; for skiing, December to March. Choose the region and type of trip first." },
    { question: "Is April a good month to visit Italy?", answer: "Yes, for cities and countryside. April is usually mild and green, with long days, though showers are common and the sea is still cool. Easter and the 25 April holiday make some weeks busy, so book early if your dates include them." },
    { question: "Is May a good month to visit Italy?", answer: "Yes, May is one of the most versatile months. It's usually warm enough for outdoor dining everywhere and early swims in the south, without midsummer heat in the cities. Expect busy museums and the 1 May holiday; high mountain trails may still have snow." },
    { question: "Is June a good month to visit Italy?", answer: "Yes, especially for combining cities with the sea or the mountains. The beach season is under way and the high-mountain season begins in the second half of the month. Inland cities get hot later in June, and demand on the coast rises." },
    { question: "Is July too hot for Italy?", answer: "It can be for city sightseeing. July is hot in most of Italy, particularly inland and in the Po plain, and recent summers have often been hotter than long-term averages. It's a good month for the coast, the islands and the mountains; in cities, sightsee early and late." },
    { question: "Is August a good time to visit Italy?", answer: "It depends on the trip. August suits travellers who want lively seaside towns, summer festivals and the mountains, and who book early. It's less suitable if you want quiet beaches or lower prices, since it's Italy's main holiday month and some city businesses close around Ferragosto." },
    { question: "Is September a good month to visit Italy?", answer: "Yes, for many trips. The sea is still warm, beaches get quieter after mid-September, the grape harvest begins and cities become more comfortable than in midsummer. The first half can still be hot, and storms become more likely later in the month." },
    { question: "Is October a good month to visit Italy?", answer: "Yes, particularly for food and wine and for cities in the centre and south. October is usually mild, but it's one of the wetter months in Rome, Florence and Naples, days are shorter and many coastal businesses start closing for the winter." },
    { question: "Is Italy worth visiting in winter?", answer: "Yes, for city breaks, museums, Christmas travel and skiing. Winter brings shorter days, cold in the north and the mountains, and closures on the coast and islands, but cities are calmer outside the holidays and accommodation is often cheaper." },
    { question: "What is the rainy season in Italy?", answer: "Italy doesn't have a single rainy season. In Rome, Florence, Naples and on the islands, October and November are usually the wettest months and summer the driest. In the Alps, July and August are among the wettest months because of summer thunderstorms." },
    { question: "When is Italy least crowded?", answer: "It depends on the destination. Cities are usually quietest in November, January and early February, outside holidays and events. Coasts and islands are quietest in winter, when many businesses are closed, and mountain areas between the ski and hiking seasons." },
    { question: "What is the cheapest time to visit Italy?", answer: "Generally the low season for your destination — often November, January and February outside ski resorts and holidays. Prices vary widely by place, accommodation and date, so compare real prices for your trip rather than relying on a rule." },
    { question: "What is the best time for the Amalfi Coast?", answer: "May–June and September–early October are often the best balance: warm enough to swim, with seasonal ferries running and less pressure than July and August. Many hotels and ferry routes are seasonal, so winter visits need checking." },
    { question: "What is the best time for Sicily?", answer: "April–June and September–October suit sightseeing and walking; June to September suits the beach. Sicily has Italy's mildest winters, which makes it one of the better choices for a winter trip, but it's not beach weather." },
    { question: "What is the best time for the Dolomites?", answer: "Late June to September for hiking, when trails are clear and huts are open, and roughly December to April for skiing. Spring and November are between seasons, when many lifts and some hotels close." },
    { question: "What is the best time for Tuscany?", answer: "April–June and September–October. Spring brings green hills and wildflowers; autumn brings the harvest. Summer is hot inland, and Florence is busy for much of the year." },
    { question: "What is the best time for Rome?", answer: "March–May and late September–November usually offer comfortable weather for walking between sites. July and August are hot, and Easter week is very busy." },
    { question: "What is the best time for Venice?", answer: "April–June and September–October are pleasant for walking and the lagoon islands; January and early December are quiet. Carnival and summer are the busiest periods, and acqua alta is more likely in late autumn and winter." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Aeronautica Militare — Italian Air Force meteorological service", url: "https://www.meteoam.it/it/home", note: "forecasts and climate normals (Atlante climatico d'Italia)" },
    { label: "Italia.it — official tourism website of Italy", url: "https://www.italia.it/en", note: "regional and destination information" },
    { label: "City of Venice — tide forecast and alert centre", url: "https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree", note: "acqua alta" },
    { label: "City of Venice — access fee", url: "https://cda.ve.it/en/", note: "day-visitor access fee dates" },
    { label: "Dolomiti Superski", url: "https://www.dolomitisuperski.com/en", note: "ski season dates" },
    { label: "ACI — Highway Code, art. 6 (winter tyres and chains)", url: "https://aci.gov.it/codice-della-strada/art-6/", note: "winter tyres or chains where signed" },
  ],
};
