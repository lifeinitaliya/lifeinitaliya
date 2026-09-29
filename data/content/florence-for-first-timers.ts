import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Florence for First-Time Visitors". Booking systems, passes and
// transport links were checked on the official sites listed at the end
// (September 2026). Prices and opening hours are deliberately not quoted —
// they change; readers are sent to the official source instead.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/florence-for-first-timers";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const florenceForFirstTimers: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Florence packs an extraordinary amount into a small space. The cathedral, the Uffizi, the Ponte Vecchio and Palazzo Pitti are all within a walk of one another, and the city sits on the main high-speed rail line between Rome, Bologna and Milan. That makes it one of the easiest Italian cities to include on a first trip — and one of the easiest to rush."),
    p("This guide is for planning your first visit: how long to stay, what to prioritise, where to base yourself, how to arrive and get around, what to book in advance and how to fit in food, neighbourhoods and day trips without turning the city into a checklist."),
    answer("**Florence suits a first trip to Italy** if you're interested in Renaissance art, architecture and food, and it's compact enough to explore on foot. **Two to three days** covers the essentials at a sensible pace; one day shows you the highlights, four or more leaves room for a day trip into Tuscany. **Book ahead** for the Duomo climbs, the Uffizi and the Accademia, especially in spring, summer and holidays — through the official sites. **You don't need a car**: most visitors arrive by train at Firenze Santa Maria Novella and walk, and most of the historic centre is a restricted traffic zone."),
    {
      type: "facts",
      title: "Florence at a glance",
      rows: [
        { label: "Recommended first visit", value: "2–3 days; 1 day for highlights only" },
        { label: "Best for", value: "Renaissance art, architecture, museums, food, walking" },
        { label: "Getting around", value: "Mostly on foot; buses and trams for longer hops" },
        { label: "Main arrival point", value: "Firenze Santa Maria Novella station" },
        { label: "Airport", value: "Florence Airport (Amerigo Vespucci), linked to the centre by the T2 tram" },
        { label: "Car needed?", value: "Usually not; the historic centre is a camera-controlled ZTL" },
        { label: "Book ahead", value: "Duomo climbs, Uffizi, Accademia, and other timed-entry museums" },
        { label: "Day trips", value: "Siena, Pisa, Lucca, Chianti, San Gimignano, Bologna" },
      ],
    },

    // ——— 1 ———
    h2("Is Florence worth visiting?"),
    p("For most first-time visitors to Italy, yes — with one caveat about expectations. Florence is where much of the early Renaissance happened, and the city still shows it: Brunelleschi's dome, the paintings in the Uffizi, Michelangelo's David, the frescoes in Santa Croce and Santa Maria Novella. Its centre is small and mostly flat, so you can see a great deal without transport, and it makes a practical base for Tuscany."),
    p("It's particularly suited to travellers interested in:"),
    ul(
      "**Renaissance art and museums** — few cities concentrate so many major works in so small an area.",
      "**Architecture and historic streets** — the medieval street plan survives, with palaces, churches and piazzas at every turn.",
      "**Food** — Tuscan cooking is simple and seasonal, and the city's markets are part of daily life.",
      "**Compact, walkable sightseeing** — most major sights are close together.",
      "**Access to Tuscany** — Siena, Pisa, Lucca and the Chianti hills are within day-trip range.",
    ),
    p("It's less suited to some trips. The centre is busy for much of the year, especially in spring, summer and around holidays. If you're mainly after beaches, nightlife, dramatic landscapes or a large, varied modern city, Rome, Naples, the coast or the countryside may suit you better — or Florence may work best as a two-day stop within a wider route. See our [complete Italy travel guide](/guides/complete-italy-travel-guide) for how it fits into longer itineraries."),

    // ——— 2 ———
    h2("How many days do you need in Florence?"),
    table(
      ["Trip length", "What it allows", "Trade-offs"],
      [
        ["1 day", "The historic centre: the Duomo area, Piazza della Signoria, the Ponte Vecchio and one major museum", "You'll have to choose between the Uffizi and the Accademia; little time for the Oltrarno or food"],
        ["2 days", "The core Florence experience: the Duomo complex, the Uffizi or Accademia, the Oltrarno and a viewpoint", "Still selective; one museum per day is a comfortable pace"],
        ["3 days", "The main sights plus slower exploration: markets, neighbourhoods, Palazzo Pitti and Boboli, longer meals", "Usually the most balanced length for a first visit"],
        ["4–5 days", "Florence in depth plus one or two day trips into Tuscany", "Worth it if you like museums or want Florence as a base"],
      ],
      "How long to stay in Florence"
    ),
    p("The right length depends on how many museums you want to see. Florence's big collections are demanding: two major museums in one day is tiring for most people. If you're combining Florence with Rome and Venice on a one-week trip, two nights is typical; if Tuscany is part of the plan, three or four nights in Florence gives you a comfortable base."),

    // ——— 3 ———
    h2("The best things to see in Florence"),
    p("The sights below are the ones most first-time visitors prioritise. Ticket prices and opening hours change, so we don't quote them here; check the official website linked for each before you go."),
    {
      type: "image",
      src: `${IMG}/santa-maria-del-fiore-facade-campanile.webp`,
      alt: "The marble façade of Florence Cathedral with Giotto's bell tower rising beside it under a blue sky",
      caption: "Santa Maria del Fiore and Giotto's Campanile. Entry to the cathedral is free; the dome, bell tower, Baptistery and museum need a pass.",
      credit: unsplash("Nicola Pavan", "pavan_nicola"),
    },
    h3("The Duomo: Florence Cathedral and Piazza del Duomo"),
    p("Santa Maria del Fiore, with its green, white and pink marble façade, is the heart of the city. According to the Opera di Santa Maria del Fiore, which runs the complex, entry to the **cathedral** itself is free, while the other monuments on the square require a pass. Queues for the cathedral can be long at busy times. Allow 30–45 minutes inside, longer if you want to study the frescoes of the Last Judgement inside the dome from below."),
    h3("Brunelleschi's Dome"),
    p("Climbing inside Brunelleschi's dome is one of the city's defining experiences: you pass between its two shells and close to the painted ceiling before reaching the lantern at the top. The Opera states that the climb is **463 steps with no lift**, and that a **time slot must be booked** — without a reservation you can't climb, even with a valid pass. It's included only in the Brunelleschi Pass. Allow around an hour including queues. It's not suitable for anyone uncomfortable with narrow stairways or heights."),
    h3("Giotto's Campanile"),
    p("The bell tower beside the cathedral offers a view of the dome itself, which the dome climb obviously can't. The Opera lists **414 steps, again with no lift**, and a time slot is booked with the Giotto Pass. If you can only do one climb, choose the dome for the experience of the structure or the Campanile for the view of the dome."),
    h3("The Baptistery and the Museo dell'Opera del Duomo"),
    p("The octagonal Baptistery of San Giovanni is known for its gilded bronze doors and mosaic ceiling. The doors on the building today are copies; the originals, including Ghiberti's \"Gates of Paradise\", are in the **Museo dell'Opera del Duomo**, along with sculpture from the cathedral and Michelangelo's late Pietà. The museum is often less crowded than the climbs and is one of the best-value visits in the complex for art lovers. Allow 1–1½ hours."),
    table(
      ["Pass (Opera di Santa Maria del Fiore)", "Includes", "Timed booking for"],
      [
        ["Brunelleschi Pass", "Dome, Campanile, Baptistery, Museum, Santa Reparata", "The dome climb"],
        ["Giotto Pass", "Campanile, Baptistery, Museum, Santa Reparata", "The Campanile climb"],
        ["Ghiberti Pass", "Baptistery, Museum, Santa Reparata", "Santa Reparata"],
      ],
      "Duomo passes, according to the Opera's official website"
    ),
    p("According to the Opera, passes are valid for three calendar days from the chosen date, with one entry per monument, and should be bought only through its official ticket site, [tickets.duomo.firenze.it](https://tickets.duomo.firenze.it/)."),
    h3("The Uffizi Galleries"),
    p("The Uffizi holds one of the world's great collections of Italian painting — Botticelli's Birth of Venus and Primavera, Leonardo, Raphael, Titian, Caravaggio. It's large: allow at least 2–3 hours and decide in advance which rooms matter most to you. Tickets are sold on the official site (the Uffizi Galleries also manage Palazzo Pitti and the Boboli Gardens, and sell a combined ticket for all three). Booking a time slot is strongly advisable in busy periods."),
    {
      type: "image",
      src: `${IMG}/uffizi-courtyard-arno.webp`,
      alt: "The long courtyard of the Uffizi in Florence, framed by colonnades and opening onto the Arno",
      caption: "The Uffizi courtyard, looking towards the Arno.",
      credit: unsplash("Matteo Lezzi", "matteo_lezzi"),
    },
    h3("Galleria dell'Accademia"),
    p("Most visitors come to the Accademia for one work: Michelangelo's **David**. The gallery also holds his unfinished Prisoners, which show his figures emerging from the marble, and a collection of Florentine painting and musical instruments. It's smaller than the Uffizi — around an hour is enough for most people — but it's one of the most booked museums in Italy, so reserve through the gallery's official ticket page, which uses an authorised booking system run on behalf of the Ministry of Culture."),
    h3("Piazza della Signoria and Palazzo Vecchio"),
    p("Piazza della Signoria has been Florence's political centre for centuries. Around it stand Palazzo Vecchio, the Loggia dei Lanzi with its outdoor sculpture, the Neptune Fountain and a copy of Michelangelo's David in its original position. The square itself is free and always open. **Palazzo Vecchio**, still the city hall, houses a museum of grand Medici rooms including the Salone dei Cinquecento; allow 1–2 hours. It's run by the city's museum foundation, MUS.E, and is a good choice for travellers interested in Florentine history and politics rather than paintings alone."),
    {
      type: "image",
      src: `${IMG}/piazza-della-signoria-neptune-fountain.webp`,
      alt: "The Neptune Fountain in Piazza della Signoria, Florence, with historic buildings behind it",
      caption: "The Neptune Fountain in Piazza della Signoria, free to see at any time of day.",
      credit: unsplash("Jean Giroux", "jgiroux"),
    },
    h3("Ponte Vecchio"),
    p("The only Florentine bridge to survive the Second World War, the Ponte Vecchio is lined with jewellers' shops and topped by the Vasari Corridor. It's free to cross and takes a few minutes, but it's crowded for most of the day; the bridge looks its best from the neighbouring Ponte Santa Trinita or the riverbanks, and early morning is the quietest time to walk across."),
    {
      type: "image",
      src: `${IMG}/ponte-vecchio-arno.webp`,
      alt: "The Ponte Vecchio in Florence, with its shops built along the bridge, reflected in the Arno",
      caption: "The Ponte Vecchio from the Arno. The view from the next bridge along is often better than the view from the bridge itself.",
      credit: unsplash("Ali Nuredini", "alinuredini"),
    },
    h3("Basilica of Santa Croce"),
    p("Santa Croce is the great Franciscan church of Florence, with tombs and monuments to Michelangelo, Galileo and Machiavelli, frescoes by Giotto in its side chapels and Brunelleschi's Pazzi Chapel in the cloister. It's run by the Opera di Santa Croce and is ticketed. Allow about 1–1½ hours. It suits visitors interested in history as much as art, and the surrounding neighbourhood is lively in the evening."),
    h3("Palazzo Pitti and the Boboli Gardens"),
    p("Across the river, the vast Palazzo Pitti was the residence of the Medici grand dukes and later of Italy's royal family. It contains several museums, including the Palatine Gallery's paintings and the royal apartments. Behind it, the **Boboli Gardens** climb the hillside with fountains, statues and views over the city. Both are managed by the Uffizi Galleries. Pitti can take half a day on its own; the gardens need 1–2 hours and comfortable shoes. The gardens are a good break from indoor museums, especially for families."),
    h3("Piazzale Michelangelo"),
    p("This terrace on the hill south of the Arno, with a bronze copy of David, has the classic view of Florence: the dome, Palazzo Vecchio's tower, the bridges and the hills beyond. It's free and open at all hours. Walk up from San Niccolò (a steady climb of around 10–20 minutes) or take a bus. Sunset is popular and busy; early morning is quieter. The Romanesque church of San Miniato al Monte is a short, steep walk further up."),
    h3("Basilica of Santa Maria Novella"),
    p("Right beside the station, Santa Maria Novella is easy to overlook — and shouldn't be. Its Dominican church holds Masaccio's Holy Trinity and chapels frescoed by Ghirlandaio and Filippino Lippi, with cloisters and a museum. It's ticketed and usually less crowded than the major museums. Allow about an hour. A good choice for an arrival or departure day."),
    h3("San Lorenzo and the Mercato Centrale"),
    p("The San Lorenzo area mixes Medici monuments — the Basilica of San Lorenzo and the Medici Chapels — with commerce. The 19th-century **Mercato Centrale** building has a traditional food market on the ground floor, and an upstairs food hall with counters serving everything from lampredotto to pasta. Street stalls around the market sell leather goods and souvenirs. It's a practical place for a casual lunch and to see how Florentines shop for food."),
    h3("The Oltrarno"),
    p("\"Beyond the Arno\" is the district south of the river, home to Palazzo Pitti, Santo Spirito, the Brancacci Chapel in Santa Maria del Carmine and many artisans' workshops. It's still very central, but it feels more residential than the area around the Duomo. Give it at least half a day on foot, ideally including an evening meal."),
    h3("How to prioritise"),
    p("The table below is a practical planning aid, not a ranking of importance — your own priorities depend on your interests. Visit lengths are approximate and don't include queues."),
    table(
      ["Attraction", "First-time priority", "Typical visit length", "Book ahead?"],
      [
        ["Duomo complex (cathedral, dome, Campanile, Baptistery, museum)", "High", "Half a day for all; 30–45 min for the cathedral alone", "Yes for the dome and Campanile (timed slots); cathedral entry is free"],
        ["Uffizi Galleries", "High", "2–3 hours", "Strongly advisable, especially in busy periods"],
        ["Galleria dell'Accademia", "High", "About 1 hour", "Strongly advisable"],
        ["Ponte Vecchio", "High", "15–30 minutes", "No"],
        ["Piazzale Michelangelo", "High", "30–60 minutes plus the walk", "No"],
        ["Piazza della Signoria", "High", "30 minutes", "No"],
        ["Palazzo Vecchio", "Medium", "1–2 hours", "Useful at busy times"],
        ["Santa Croce", "Medium", "1–1½ hours", "Useful at busy times"],
        ["Palazzo Pitti and Boboli Gardens", "Medium", "2 hours to half a day", "Useful in high season"],
        ["Santa Maria Novella", "Medium", "About 1 hour", "Usually not needed"],
        ["Mercato Centrale and San Lorenzo", "Optional", "1 hour or a meal", "No"],
        ["Oltrarno walk", "Medium", "Half a day", "No"],
      ],
      "Planning priorities for a first visit"
    ),

    // ——— 4 ———
    h2("Florence in 1, 2, 3 or 4 days"),
    p("These frameworks assume a comfortable pace: one major museum per day, time for meals and some unplanned wandering. Swap museums to match your interests."),
    h3("One day in Florence"),
    ul(
      "**Morning:** the Duomo complex — the cathedral, plus the dome or Campanile if you've booked a slot.",
      "**Late morning:** the Accademia for David (booked), or the Uffizi if painting matters more to you — not both.",
      "**Lunch:** a simple meal near San Lorenzo or the Mercato Centrale.",
      "**Afternoon:** Piazza della Signoria and the Ponte Vecchio, then a slow walk along the Arno.",
      "**Evening:** Piazzale Michelangelo for the view, then dinner in San Niccolò or the Oltrarno.",
    ),
    p("One day works if you're passing through, but it means choosing: you'll see the city's highlights, not its museums in depth."),
    h3("Two days in Florence"),
    ul(
      "**Day 1:** the Duomo complex in the morning; Piazza della Signoria and Palazzo Vecchio or the Ponte Vecchio in the afternoon; evening in Santa Croce.",
      "**Day 2:** the Uffizi or the Accademia in the morning; cross to the Oltrarno for lunch; Palazzo Pitti or the Boboli Gardens; sunset at Piazzale Michelangelo.",
    ),
    h3("Three days in Florence"),
    ul(
      "**Day 1:** the Duomo complex and the Museo dell'Opera; San Lorenzo and the Mercato Centrale.",
      "**Day 2:** the Uffizi; the Ponte Vecchio; the Oltrarno, Santo Spirito and dinner south of the river.",
      "**Day 3:** the Accademia early; Santa Croce or Santa Maria Novella; the Boboli Gardens or Piazzale Michelangelo late in the day.",
    ),
    p("Three days leave time to sit in a piazza, return to a favourite area and eat without watching the clock."),
    h3("Four days: adding a day trip"),
    p("With a fourth day, add one excursion: Siena, Pisa and Lucca are the most straightforward without a car; the Chianti hills and San Gimignano are easier with a tour or a driver. The day-trip section below compares the options."),

    // ——— 5 ———
    h2("Where to stay in Florence"),
    p("Florence is compact, so almost anywhere in the centre is walkable. The choice is mostly about atmosphere, noise and how far you'll wheel your luggage from the station."),
    table(
      ["Area", "Best suited to", "Advantages", "Considerations"],
      [
        ["Duomo / historic centre", "Short first visits", "Walking distance to nearly everything", "Busiest streets; often pricier; some rooms are noisy"],
        ["Santa Maria Novella", "Arriving and leaving by train; day trips", "Next to the station, tram and buses", "Area around the station is busy and less atmospheric"],
        ["San Lorenzo", "Food lovers; mid-range budgets", "Central, near the market and the station", "Market stalls make daytime streets crowded"],
        ["Santa Croce", "Evening atmosphere", "Central, with many restaurants and bars", "Some streets are lively late at night"],
        ["Oltrarno / Santo Spirito", "Slower stays; returning visitors", "More residential feel, artisans, piazza life", "A little further from the station; Santo Spirito is lively in the evenings"],
        ["San Niccolò", "Quieter stays near the river", "Calm streets below Piazzale Michelangelo", "Fewer hotels; a longer walk from the station"],
      ],
      "Choosing an area to stay"
    ),
    tip("If you're arriving with large suitcases, check the walking distance from Santa Maria Novella and whether the building has a lift. Many historic buildings don't, and Florence's stone streets are hard work for wheels.", "Luggage matters"),
    p("Most accommodation in Florence charges a city tourist tax per person per night, usually paid at the property; check the amount when you book."),

    // ——— 6 ———
    h2("Getting around Florence"),
    h3("Walking"),
    p("The historic centre is best seen on foot. The Duomo is about ten minutes' walk from Santa Maria Novella station, and the Ponte Vecchio a few minutes more. Wear comfortable shoes: streets are paved in stone, pavements are narrow and there's a lot of standing in museums."),
    h3("Buses and trams"),
    p("Urban buses are run by Autolinee Toscane, and the two tram lines by GEST: the **T1** runs between Villa Costanza (Scandicci), Santa Maria Novella and Careggi hospital, and the **T2** links the airport with the station and Piazza San Marco. Tickets are valid on both buses and trams and can be bought through the operator's app or at authorised sellers; validate or activate them when you board. Buses also run up to Piazzale Michelangelo."),
    h3("Taxis"),
    p("Official taxis wait at ranks, including at Santa Maria Novella station and the airport, and can be booked by phone or app. They can't be hailed easily in the street. They're useful for luggage, late arrivals and reaching accommodation in the hills."),
    h3("Cycling"),
    p("Florence has bike and e-bike sharing and hire, and cycling along the river can be pleasant. In the centre, narrow streets full of pedestrians make cycling slower than walking."),
    h3("Driving"),
    p("A car is a burden inside Florence. The whole historic centre is a **ZTL** (limited traffic zone) monitored by cameras, and unauthorised entry leads to a fine — often arriving months later for hire-car drivers. According to the city's mobility website, the central ZTL sectors are active on weekdays and Saturdays during the day, with an additional summer night ZTL; check the current hours on the [city's ZTL page](https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html). If you're driving on to Tuscany, pick up the car when you leave. Read [driving in Italy](/guides/driving-in-italy) for how ZTLs work."),

    // ——— 7 ———
    h2("Arriving in Florence by train"),
    p("Most visitors arrive at **Firenze Santa Maria Novella** (SMN), the main station on the edge of the historic centre. Both Trenitalia's Frecciarossa and Italo high-speed trains serve it, as do regional trains around Tuscany. Some trains use other Florence stations such as Campo di Marte or Rifredi — check the station on your ticket."),
    table(
      ["From", "Typical approach", "Fastest time (approx.)"],
      [
        ["Rome", "High-speed trains (Trenitalia or Italo)", "About 1½ hours"],
        ["Milan", "High-speed trains", "About 1¾–2 hours"],
        ["Venice", "High-speed trains", "About 2 hours"],
        ["Bologna", "High-speed trains; regional trains are much slower", "About 35–40 minutes"],
        ["Pisa, Lucca, Arezzo and other Tuscan towns", "Regional trains", "Varies by line and train"],
      ],
      "Train connections into Florence (fastest direct services; many trains take longer)"
    ),
    p("Because SMN is walkable to the centre, the train is usually the most practical way to reach Florence from other cities. Times above are approximate fastest services taken from operator timetables in September 2026; check the train you're booking. For tickets, validation and station tips, read [how to travel around Italy by train](/guides/italy-by-train)."),

    // ——— 8 ———
    h2("Getting from Florence Airport to the city"),
    p("Florence Airport (Amerigo Vespucci, sometimes called Peretola) is about four kilometres north-west of the centre. It mainly handles European flights; many long-haul travellers fly into Rome, Milan or Pisa and continue by train."),
    ul(
      "**Tram T2** — the simplest public option. The tram stop is next to the terminal, and the line runs through the station area (Unità and Valfonda–Stazione SMN) and on to Piazza San Marco. Buy tickets before boarding, at the machines or through the operator's app.",
      "**Taxi** — from the official rank outside arrivals. Check the airport's taxi page for current fare conditions for the city centre.",
      "**Private transfer** — worth considering if you're arriving late at night, travelling with young children or several large suitcases, or staying somewhere awkward to reach by tram.",
      "**From Pisa Airport** — the PisaMover shuttle links the airport with Pisa Centrale, from where regional trains run to Florence.",
    ),
    p("For other Italian airports, see our guide to [Italian airport transfers](/guides/italy-airport-transfers)."),

    // ——— 9 ———
    h2("Museums and tickets"),
    p("Florence's most visited sites use timed entry, and the busiest can sell out on popular days. A simple strategy helps."),
    {
      type: "compare",
      title: "Should you book in advance?",
      columns: [
        {
          title: "Book ahead when",
          items: [
            "visiting the Uffizi, the Accademia or the Duomo climbs in spring, summer or on holidays",
            "your dates and itinerary are fixed",
            "you want a specific time, such as first entry of the day",
            "you're visiting at weekends, at Easter or on long weekends",
          ],
        },
        {
          title: "More flexibility when",
          items: [
            "travelling in quieter months, such as November or January",
            "prioritising outdoor sights, churches and neighbourhoods",
            "keeping your itinerary open",
            "visiting smaller museums",
          ],
        },
      ],
    },
    h3("Official sources and resellers"),
    p("Buy from the official websites: the [Uffizi Galleries](https://www.uffizi.it/en/tickets) (also Palazzo Pitti and Boboli), the [Galleria dell'Accademia](https://www.galleriaaccademiafirenze.it/en/tickets/) and the [Opera di Santa Maria del Fiore](https://tickets.duomo.firenze.it/) for the Duomo. Many third-party sites resell the same entries at higher prices, and some look official. Check the web address carefully, and be wary of sites that don't clearly identify themselves as resellers."),
    important("Timed tickets usually require you to enter at the start of your slot. For the Duomo climbs, the Opera states that entry must be at the beginning of the booked time window. Arrive early — queues for security checks can be long.", "Arrive on time"),
    h3("The Firenzecard"),
    p("The [Firenzecard](https://www.firenzecard.it/) is the city's official museum pass. According to its website, it's valid for 72 hours from first use, allows one entry to each participating museum and includes reservations. Whether it saves money depends on how many museums you'll visit in three days; compare the current price with the individual tickets you actually need."),

    // ——— 10 ———
    h2("Food and dining in Florence"),
    p("Florentine cooking is plain in the best sense: good bread, olive oil, beans, grilled meat and vegetables in season. You'll eat best by ordering what the city is known for rather than dishes from elsewhere in Italy."),
    ul(
      "**Bistecca alla fiorentina** — a thick T-bone steak, grilled and served rare, usually for sharing. It's often priced by weight, so check the menu before ordering.",
      "**Ribollita** — a thick soup of bread, beans and cabbage, mainly a cold-weather dish.",
      "**Pappa al pomodoro** — bread and tomato soup, usually served warm or at room temperature in summer.",
      "**Lampredotto** — tripe (a cow's fourth stomach) slow-cooked and served in a bread roll, traditionally from street kiosks. An acquired taste, and a real Florentine institution.",
      "**Schiacciata** — Tuscan flatbread, often filled as a sandwich; one of the easiest lunches in the city.",
      "**Cantucci** — crisp almond biscuits, traditionally dipped in vin santo.",
      "**Gelato** — widely available.",
      "**Tuscan wine** — Chianti Classico is produced between Florence and Siena; Brunello di Montalcino and Vino Nobile di Montepulciano come from southern Tuscany.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-deli-counter.webp`,
      alt: "Customers at a market deli counter in Florence hung with hams, salami and cheeses",
      caption: "A deli counter in a Florence market. Markets are a good place for a quick lunch and to see what's in season.",
      credit: unsplash("Tushar Agarwal", "tagag"),
    },
    p("A few practical points: many restaurants add a cover charge (coperto); lunch is usually from about 12:30 and dinner from 7:30pm; and booking is wise for dinner at popular places, especially at weekends. Restaurants right beside the big sights tend to cater to passing visitors — walking a few streets away usually helps. For more on how Italian meals work, read [Italian food traditions you should know](/food/italian-food-traditions)."),

    // ——— 11 ———
    h2("Florence neighbourhoods"),
    table(
      ["Area", "Character", "Good for"],
      [
        ["Historic centre (Duomo, Signoria)", "The monumental core: cathedral, piazzas, main shopping streets", "First-time sightseeing"],
        ["Santa Maria Novella", "Around the station and the basilica; busy and practical", "Train access, arrival and departure days"],
        ["San Lorenzo", "Markets, Medici monuments, busy streets", "Food, shopping, casual lunches"],
        ["Santa Croce", "Historic streets around the basilica, many restaurants", "Evening atmosphere"],
        ["Oltrarno", "South of the river; artisans' workshops, palaces, quieter streets", "Slow exploration"],
        ["Santo Spirito", "A lively piazza with cafés and restaurants in the Oltrarno", "Evenings out"],
        ["San Niccolò", "Riverside streets at the foot of the hill to Piazzale Michelangelo", "Quieter stays and sunset walks"],
      ],
      "Florence's central neighbourhoods at a glance"
    ),
    p("Walking from one to another is part of the pleasure. A good way to feel the change is to cross the Ponte Santa Trinita into the Oltrarno and wander towards Santo Spirito and San Frediano."),

    // ——— 12 ———
    h2("Day trips from Florence"),
    p("Florence sits in the middle of Tuscany, and several of Italy's best-loved towns are within reach. Choose based on how you want to travel as much as on the destination."),
    table(
      ["Destination", "Planning complexity", "Best for", "Typical approach"],
      [
        ["Siena", "Low to moderate", "A medieval city with Piazza del Campo and its cathedral", "Bus or train; Siena's station is below the walled centre, so the bus can be more convenient"],
        ["Pisa", "Low", "The Leaning Tower and Piazza dei Miracoli", "Regional train to Pisa Centrale, then walk or bus"],
        ["Lucca", "Low", "Walls you can walk or cycle along, churches, a relaxed pace", "Regional train; the station is just outside the walls"],
        ["Chianti", "Moderate to high", "Wine estates, villages and countryside", "Organised tour, private driver or rental car — someone has to stay sober to drive"],
        ["San Gimignano", "Moderate", "A hill town known for its medieval towers", "Train and bus via Poggibonsi, a tour, or a car"],
        ["Bologna", "Low", "Food, porticoes and a different city atmosphere", "High-speed train"],
      ],
      "Day trips from Florence"
    ),
    {
      type: "image",
      src: `${IMG}/siena-piazza-del-campo.webp`,
      alt: "Piazza del Campo in Siena with Palazzo Pubblico and the Torre del Mangia",
      caption: "Piazza del Campo in Siena, one of the easiest day trips from Florence.",
      credit: unsplash("tommao wang", "tommaomaoer"),
    },
    p("For wine country, see [Italy's regional wines](/food/italian-regional-wines); the landscapes of southern Tuscany, such as the Val d'Orcia, are better as an overnight trip than a day trip. If you plan to drive, read [driving in Italy](/guides/driving-in-italy) first."),

    // ——— 13 ———
    h2("Best time to visit Florence"),
    p("Florence is busy for much of the year, and each season involves trade-offs. According to long-term averages for Florence Peretola (Aeronautica Militare, 1971–2000), July averages about 18–31 °C and January about 2–11 °C, with October and November the wettest months. Recent summers have often been hotter than those averages."),
    ul(
      "**Spring (April–June)** — comfortable for walking and green hills around the city, but some of the busiest weeks, with Easter and school groups; book museums early.",
      "**Summer (July–August)** — long days and a lively atmosphere, but heat in the city makes midday sightseeing tiring. Plan museums for the middle of the day and walks for the morning and evening.",
      "**Autumn (September–October)** — often the best balance, with harvest season in the surrounding countryside. Rain becomes more frequent later in the season.",
      "**Winter (November–February)** — quieter museums and more availability, outside Christmas and holidays. Days are short, so plan indoor visits for the afternoon.",
    ),
    p("Local dates also matter: Easter brings the traditional Scoppio del Carro in front of the cathedral, and 24 June, the feast of St John, is Florence's own public holiday. For how Florence fits with the rest of Italy by season, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),
    {
      type: "image",
      src: `${IMG}/florence-skyline-piazzale-michelangelo.webp`,
      alt: "View over Florence from Piazzale Michelangelo, with the Arno, the cathedral dome and the hills beyond",
      caption: "The view from Piazzale Michelangelo. Early morning is quieter than sunset.",
      credit: unsplash("Tom Podmore", "tompodmore86"),
      wide: true,
    },

    // ——— 14 ———
    h2("Florence for different travellers"),
    h3("First-time visitors"),
    p("Keep to one major museum per day, book the few timed entries that matter to you, and leave afternoons flexible. Seeing the Duomo, the Ponte Vecchio and the view from Piazzale Michelangelo gives a strong first impression without exhausting you."),
    h3("Couples"),
    p("Stay in the Oltrarno or San Niccolò for quieter evenings, time a walk to Piazzale Michelangelo or San Miniato for the end of the day, and consider a countryside night in Chianti or southern Tuscany."),
    h3("Families"),
    p("Mix museums with open spaces: the Boboli Gardens, the river and the dome or Campanile climbs for older children (check the steps first). Keep museum visits short and book the ones you want, so you're not queueing with tired children. The Palazzo Vecchio museum runs family activities through its foundation."),
    h3("Solo travellers"),
    p("Florence is compact and easy to navigate on foot, with plenty of casual places to eat alone, from market counters to schiacciata shops. Group walking tours and cooking classes are an easy way to meet people."),
    h3("Older travellers"),
    p("Consider accommodation close to the station or the centre to limit walking, choose buildings with lifts, and book timed entries to avoid long queues on your feet. The dome and Campanile climbs are strenuous; the view from Piazzale Michelangelo can be reached by bus or taxi."),
    h3("Art lovers"),
    p("Give the Uffizi a full morning, add the Museo dell'Opera del Duomo, the Bargello (for sculpture), the Brancacci Chapel and Santa Maria Novella, and consider whether the Firenzecard makes sense for your list."),
    h3("Food-focused travellers"),
    p("Base yourself near San Lorenzo or Santa Croce, spend time at the markets, try lampredotto and schiacciata at lunch, and plan a day in Chianti. Autumn is the richest season for food in the surrounding countryside."),
    h3("Budget travellers"),
    p("Florence's free sights are many: piazzas, the exterior of the Duomo complex, the cathedral itself, the Ponte Vecchio and Piazzale Michelangelo. Travel outside peak weeks, stay a little further from the Duomo, eat lunch as your main meal and check the museums' own free-entry arrangements."),
    h3("Visitors combining Florence with Tuscany"),
    p("Spend your Florence days without a car, then pick one up as you leave for the countryside — or use Florence as a base for train and bus trips to Siena, Pisa and Lucca. Southern Tuscany is better as an overnight stay than a day trip."),

    // ——— 15 ———
    h2("Common first-time mistakes"),
    ol(
      "**Trying to see everything in one day.** Florence rewards a slower pace; choose one major museum.",
      "**Not booking major museums when needed.** The Accademia, the Uffizi and the Duomo climbs can sell out in busy periods.",
      "**Ignoring walking distances and time.** Short distances still mean crowds, queues and security checks.",
      "**Misunderstanding the ZTL.** Driving into the historic centre without authorisation leads to fines.",
      "**Choosing accommodation without thinking about the station.** With heavy luggage, a long walk over stone streets matters.",
      "**Overloading the itinerary.** Two big museums in one day is tiring for most people.",
      "**Relying on unofficial ticket websites.** Check that you're on the museum's own site.",
      "**Forgetting timed entry.** Some sites won't admit you if you miss your slot.",
      "**Treating Florence only as a day trip.** Evenings are when the city feels most like itself.",
      "**Leaving no time for neighbourhoods and food.** The Oltrarno and the markets are part of the experience.",
    ),

    // ——— 16 ———
    h2("Practical planning checklist"),
    p("Tick these off as you plan."),
    {
      type: "checklist",
      id: "florence-first-trip",
      groups: [
        {
          title: "Before booking",
          items: ["Choose how many days to spend", "Choose an area to stay", "Decide whether you want day trips", "Check how you'll arrive: train or plane"],
        },
        {
          title: "Before departure",
          items: ["Book the major museums you care about", "Book Duomo climb time slots", "Confirm trains or airport transfer", "Check current opening information", "Check cancellation conditions"],
        },
        {
          title: "Before each sightseeing day",
          items: ["Confirm reservation times", "Plan a realistic walking route", "Allow time for meals and rest", "Check the weather and pack accordingly"],
        },
      ],
    },
    p("Booking systems, passes and transport links in this guide were checked on the official websites in September 2026. Prices and opening hours change, so confirm them on the official sites before you travel."),
  ],

  faqs: [
    { question: "How many days do you need in Florence?", answer: "Two to three days suits most first visits: enough for the Duomo, one or two major museums, the Oltrarno and a viewpoint at a comfortable pace. One day covers the highlights; four or more leaves room for a day trip into Tuscany." },
    { question: "Is Florence walkable?", answer: "Yes. The historic centre is compact and mostly flat, and most major sights are within about 20 minutes' walk of each other. Piazzale Michelangelo is uphill; buses and taxis help for longer distances." },
    { question: "What should I see first in Florence?", answer: "Most visitors start with the Duomo complex and Piazza della Signoria, then the Ponte Vecchio. Book the Uffizi or the Accademia for a morning, and save Piazzale Michelangelo for the end of a day." },
    { question: "Do I need to book Uffizi tickets in advance?", answer: "It's strongly advisable in spring, summer, at weekends and on holidays, when time slots can sell out. Book on the Uffizi Galleries' official website; in quieter months you may find availability closer to the date." },
    { question: "Do I need to book the Duomo in advance?", answer: "Entry to the cathedral is free and not booked. The dome and Campanile climbs require a pass with a booked time slot, bought from the Opera di Santa Maria del Fiore's official ticket site." },
    { question: "Is Florence good for a first trip to Italy?", answer: "Yes, if you're interested in art, architecture and food. It's compact, easy to reach by high-speed train from Rome, Milan, Venice and Bologna, and works well alongside Rome and Venice on a first itinerary." },
    { question: "Where should first-time visitors stay in Florence?", answer: "The historic centre around the Duomo is the most convenient for a short visit. Santa Maria Novella suits train travellers, San Lorenzo is central and practical, and the Oltrarno or San Niccolò suit visitors who prefer a quieter atmosphere." },
    { question: "Can you visit Florence without a car?", answer: "Yes, and it's easier without one. The historic centre is a camera-controlled limited traffic zone and parking is scarce. Arrive by train, walk, and hire a car only when you leave for the countryside." },
    { question: "How do you get from Florence Airport to the city centre?", answer: "The T2 tram runs from the airport to the Santa Maria Novella station area and on to Piazza San Marco. Taxis wait at the official rank outside arrivals, and private transfers are useful with lots of luggage or late arrivals." },
    { question: "Is Florence expensive?", answer: "It can be, particularly for central accommodation in high season, and there's a city tourist tax. Costs fall outside peak weeks, and many of the city's sights — piazzas, churches' exteriors, the cathedral, the Ponte Vecchio and Piazzale Michelangelo — are free." },
    { question: "Is Florence good for a weekend?", answer: "Yes. A weekend gives you the Duomo, one major museum, the Ponte Vecchio, the Oltrarno and a viewpoint. Book museums ahead, because weekends are among the busiest days." },
    { question: "Can Florence be used as a base for Tuscany?", answer: "Yes. Siena, Pisa, Lucca and Bologna are easy by train or bus, and tours reach Chianti and San Gimignano. For southern Tuscany, such as the Val d'Orcia, an overnight stay closer to the area is better." },
    { question: "Is one day enough for Florence?", answer: "One day is enough for the main outdoor sights and one museum, but you'll have to choose between the Uffizi and the Accademia and skip the Oltrarno. Two or three days is more comfortable." },
    { question: "What are the best day trips from Florence?", answer: "Siena, Pisa and Lucca are the easiest by public transport; Chianti and San Gimignano are simpler with a tour, a driver or a car. Bologna is a short high-speed train ride away." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Feel Florence — official tourism website of the City of Florence", url: "https://www.feelflorence.it/en", note: "visitor information and events" },
    { label: "Opera di Santa Maria del Fiore — plan your visit", url: "https://duomo.firenze.it/it/visita/organizza-la-tua-visita", note: "Duomo passes and time slots" },
    { label: "Opera di Santa Maria del Fiore — official tickets", url: "https://tickets.duomo.firenze.it/", note: "Duomo ticket sales" },
    { label: "Uffizi Galleries — tickets", url: "https://www.uffizi.it/en/tickets", note: "Uffizi, Palazzo Pitti and Boboli Gardens" },
    { label: "Galleria dell'Accademia di Firenze — tickets", url: "https://www.galleriaaccademiafirenze.it/en/tickets/", note: "official booking" },
    { label: "MUS.E — Palazzo Vecchio museum", url: "https://www.musefirenze.it/en/musei/palazzo-vecchio/", note: "Palazzo Vecchio" },
    { label: "Opera di Santa Croce", url: "https://www.santacroceopera.it/en/", note: "Santa Croce visits" },
    { label: "Santa Maria Novella", url: "https://www.smn.it/en/", note: "basilica visits" },
    { label: "Firenzecard", url: "https://www.firenzecard.it/", note: "official museum pass" },
    { label: "Autolinee Toscane — tram line T2", url: "https://www.at-bus.it/it/linee-e-orari/firenze-urbano-t2", note: "airport tram route" },
    { label: "Florence Airport — transport", url: "https://www.aeroporto.firenze.it/en/the-passengers/transport.html", note: "tram, taxi and bus" },
    { label: "City of Florence — ZTL", url: "https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html", note: "limited traffic zone hours" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/en.html", note: "train timetables and tickets" },
    { label: "Italo", url: "https://www.italotreno.com/en", note: "high-speed trains" },
  ],
};
