import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Bologna in Two Days" — the rebuilt version of the site's
// original short itinerary, kept at its established URL. The Two Towers
// closure, airport monorail status, porticoes figures, museum booking rules,
// traffic zones and bus payment were checked on official sites in September
// 2026. Prices, opening hours and train times are deliberately not quoted,
// apart from Florence, which matches our train guide.

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

const IMG = "/images/cities/bologna-in-two-days";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const bolognaInTwoDays: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Bologna is the capital of Emilia-Romagna, home to one of Europe's oldest universities and a city of red-brick palaces, medieval towers and kilometres of covered walkways. It sits at the centre of the rail network between Florence, Milan and Venice, so many travellers pass through it; relatively few stay long enough to understand it. Two days changes that."),

    // ——— 1 ———
    h2("Is two days enough for Bologna?"),
    answer("**Yes — two days suits a first visit to Bologna.** The historic centre is compact and flat, so one day covers Piazza Maggiore, San Petronio, the Archiginnasio, the market streets of the Quadrilatero and the Two Towers area, and a second day leaves time for Santo Stefano, the university quarter, a museum and the long portico walk up to San Luca. **Food is part of the itinerary, not an extra**: plan your days around lunch, aperitivo and dinner. **You don't need a car** — you'll walk almost everywhere, and trains and the airport monorail connect the city. **Book ahead** for the Archiginnasio's Anatomical Theatre, where online booking is compulsory. Add a third day if you want a day trip to Modena, Parma, Ferrara or Ravenna."),
    p("Note that the Two Towers can currently be seen only from outside: the Asinelli tower has been closed to visitors since October 2023 while the leaning Garisenda is made safe, and the Comune expects the restoration to continue for several years."),

    // ——— 2 ———
    h2("Bologna at a glance"),
    {
      type: "facts",
      title: "Bologna at a glance",
      rows: [
        { label: "Recommended stay", value: "2 days; 3 with a day trip" },
        { label: "Best known for", value: "Food, porticoes, the university, medieval towers and red-brick architecture" },
        { label: "Main station", value: "Bologna Centrale, on the high-speed line between Milan, Florence and Rome" },
        { label: "Airport", value: "Bologna Guglielmo Marconi, linked to Bologna Centrale by the Marconi Express monorail" },
        { label: "Getting around", value: "On foot, with TPER buses for longer hops" },
        { label: "Car needed?", value: "No for a city stay — the centre has traffic restrictions" },
        { label: "Book ahead", value: "The Archiginnasio and Anatomical Theatre (online booking compulsory)" },
        { label: "Nearby by train", value: "Modena, Parma, Reggio Emilia, Ferrara and Ravenna" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/bologna-rooftops-towers-blue-hour.webp`,
      alt: "Bologna's red and ochre rooftops seen from the hills at dusk, with the tall Asinelli tower, church domes and bell towers rising above the city",
      caption: "Bologna from the hill of San Michele in Bosco, with the Asinelli tower above the rooftops.",
      credit: unsplash("Petr Slováček", "grwood"),
      wide: true,
    },

    // ——— 3 ———
    h2("Bologna in two days"),
    p("The plan below keeps each day on foot and leaves space for meals, which in Bologna are part of the sightseeing. Swap the order of the two days if you arrive in the afternoon."),
    h3("Day 1: The historic centre"),
    steps(
      ["Morning coffee near Piazza Maggiore", "Start with a coffee and a pastry at a bar counter, then walk into Piazza Maggiore while it's still quiet. Look at Palazzo d'Accursio, Palazzo del Podestà and the unfinished façade of San Petronio."],
      ["San Petronio and Piazza del Nettuno", "Visit the basilica (about 45 minutes) and find the meridian line in the floor. Step next door into Piazza del Nettuno for Giambologna's fountain and the courtyard of Palazzo d'Accursio."],
      ["The Archiginnasio", "Walk along the Pavaglione portico to the Archiginnasio for your booked visit to the Anatomical Theatre (40 minutes with the audio guide)."],
      ["Lunch in the Quadrilatero", "Wander the old market lanes behind the piazza — Via Pescherie Vecchie, Via Drapperie, Via Clavature — and have lunch in a trattoria or at the Mercato di Mezzo."],
      ["The Two Towers and Via Zamboni", "Walk to Piazza di Porta Ravegnana to see the Asinelli and Garisenda from outside, then continue along the porticoes of Strada Maggiore or into the university quarter."],
      ["Aperitivo and dinner", "Take a break at your hotel, then have an early-evening aperitivo and a dinner of tortellini or tagliatelle al ragù."],
    ),
    h3("Day 2: Porticoes, Santo Stefano and a slower pace"),
    steps(
      ["Santo Stefano", "Start in Piazza Santo Stefano, a triangular square lined with porticoes, and visit the basilica complex known as the Sette Chiese (Seven Churches) — allow about 45 minutes."],
      ["Market or museum", "Choose one: the covered Mercato delle Erbe on Via Ugo Bassi, or the Pinacoteca Nazionale in the university quarter for Bolognese painting."],
      ["Lunch", "Keep it simple: a plate of crescentine with cured meats, or a light lunch before the walk."],
      ["The portico of San Luca", "Walk from Porta Saragozza under the longest portico in the world to the Sanctuary of the Madonna di San Luca — a mostly flat first stretch, then a long climb with steps. Allow at least three hours there and back, or walk up and take a bus back down part of the way."],
      ["Evening", "Explore a different neighbourhood — Via del Pratello, the university quarter or the streets around Santo Stefano — for aperitivo and dinner."],
    ),
    tip("If the weather is bad or you'd rather not climb, swap San Luca for MAMbo and a longer walk under the city-centre porticoes, which keep you dry anyway.", "Alternative for day 2"),
    table(
      ["If you prefer…", "Prioritise…"],
      [
        ["History", "The historic centre, the Archiginnasio and Santo Stefano"],
        ["Food", "The Quadrilatero, the markets and long traditional meals"],
        ["Architecture", "The porticoes, Piazza Maggiore and Strada Maggiore"],
        ["Art", "The Pinacoteca Nazionale and MAMbo"],
        ["Walking", "The historic centre and the portico of San Luca"],
        ["Slower travel", "Neighbourhood walks and unhurried meals"],
      ],
      "Adapting the itinerary — a planning aid, not a ranking"
    ),

    // ——— 4 ———
    h2("What to see"),
    p("Opening days change and some places close one day a week. Check the official site before planning a morning around any of them."),
    h3("Piazza Maggiore"),
    p("The city's main square is surrounded by public buildings: Palazzo d'Accursio (the town hall, with the Municipal Art Collections upstairs), Palazzo del Podestà, Palazzo dei Banchi and the Basilica of San Petronio. It's the natural starting point and a place you'll cross several times a day."),
    {
      type: "image",
      src: `${IMG}/piazza-maggiore-palazzo-del-podesta.webp`,
      alt: "Palazzo del Podestà on Piazza Maggiore in Bologna, a long arcaded building with a brick clock tower, under a blue sky",
      caption: "Palazzo del Podestà on Piazza Maggiore.",
      credit: unsplash("Oleksandr", "pan_snig"),
    },
    h3("The Basilica of San Petronio"),
    p("Dedicated to Bologna's patron saint, San Petronio is one of the largest churches in Italy, begun in 1390; its façade was never finished, so the upper half is still bare brick. Inside, a meridian line traced by the astronomer Gian Domenico Cassini in 1655 runs across the floor. Entry to the basilica is free; three chapels, including the frescoed Bolognini Chapel, are a paid visit. Cover shoulders and knees, and note that suitcases and luggage aren't allowed inside. The panoramic terrace on the roof is now permanently closed, according to the basilica."),
    {
      type: "image",
      src: `${IMG}/basilica-san-petronio-facade.webp`,
      alt: "The façade of the Basilica of San Petronio in Bologna, with marble on the lower part and unfinished bare brick above",
      caption: "San Petronio's façade: marble below, unfinished brick above.",
      credit: unsplash("Arno Senoner", "arnosenoner"),
    },
    h3("Piazza del Nettuno"),
    p("Next to Piazza Maggiore, this smaller square holds the bronze Fountain of Neptune by Giambologna, from the 1560s. On one side is Palazzo Re Enzo; on the other, Salaborsa, a public library in a former stock exchange with Roman and medieval remains visible under its glass floor."),
    h3("The Archiginnasio and the Anatomical Theatre"),
    p("Built in 1562–63 to bring the university's teaching under one roof, the Archiginnasio is now the city library. Its walls are covered with thousands of students' coats of arms, and its Anatomical Theatre, a wooden amphitheatre designed in 1637 for anatomy lessons, is one of the city's most memorable rooms. According to Bologna Welcome, which manages visits, **online booking is compulsory**: choose an audio-guided visit (about 40 minutes) or a guided tour (about 1 hour 15 minutes), which also opens rooms that are usually closed."),
    h3("The Two Towers"),
    p("The Asinelli and Garisenda towers, at Piazza di Porta Ravegnana, are the best-known survivors of the many towers built by Bologna's families in the Middle Ages. The Garisenda leans noticeably, and in October 2023 the Comune closed the area around it and the Asinelli tower to visitors while the Garisenda is monitored and stabilised. According to the city, the restoration will continue until at least 2028, although officials have said the Asinelli could reopen earlier. You can still see both from the square; check [Bologna Welcome](https://www.bolognawelcome.com/en/) for any change before you go."),
    h3("Piazza Santo Stefano and the Seven Churches"),
    p("A short walk from the towers, Piazza Santo Stefano is a wedge-shaped square framed by porticoes and palaces. At its end is the Santo Stefano complex, a group of interlinked churches, cloisters and courtyards built over many centuries, known locally as the Sette Chiese. It's a quiet, atmospheric visit of about 45 minutes."),
    h3("The Quadrilatero and the markets"),
    p("The grid of narrow streets east of Piazza Maggiore has been Bologna's market district since the Middle Ages. Today it's lined with delicatessens, fishmongers, greengrocers and small restaurants. The **Mercato di Mezzo** on Via Clavature is a food hall where you can eat, and the covered **Mercato delle Erbe** on Via Ugo Bassi is a working market with stalls and places to eat. Go in the morning to see the shops at their busiest."),
    h3("The Pinacoteca Nazionale"),
    p("Bologna's national gallery, in the university quarter, holds the city's painting tradition, from Gothic altarpieces to the Carracci family, Guido Reni and Guercino, as well as Raphael's *Ecstasy of Saint Cecilia*. It's usually closed on Mondays; allow one and a half to two hours."),
    h3("MAMbo"),
    p("The Museum of Modern Art of Bologna occupies a former municipal bakery on the north-western edge of the centre, by the Parco del Cavaticcio. It hosts contemporary exhibitions and the Museo Morandi, devoted to Bologna's best-known 20th-century painter, Giorgio Morandi. It's usually closed on Mondays; check the current exhibitions before you go."),
    table(
      ["Place", "Time to allow", "Book ahead?", "Where it fits"],
      [
        ["Piazza Maggiore and Piazza del Nettuno", "30–45 minutes", "No", "Day 1 morning"],
        ["San Petronio", "About 45 minutes", "No; chapels are a paid visit", "Day 1 morning"],
        ["Archiginnasio and Anatomical Theatre", "40 minutes–1¼ hours", "Yes — compulsory online", "Day 1 late morning"],
        ["Quadrilatero and Mercato di Mezzo", "1–2 hours with lunch", "No", "Day 1 lunch"],
        ["Two Towers (outside only)", "15 minutes", "Tower visits currently suspended", "Day 1 afternoon"],
        ["Santo Stefano", "About 45 minutes", "No", "Day 2 morning"],
        ["Pinacoteca Nazionale", "1½–2 hours", "Usually not", "Day 2, if you prefer art"],
        ["Portico of San Luca", "At least 3 hours return", "No", "Day 2 afternoon"],
        ["MAMbo", "1–2 hours", "Depends on the exhibition", "Day 2 alternative"],
      ],
      "Main sights and where they fit"
    ),

    // ——— 5 ———
    h2("Bologna's historic centre"),
    p("The historic centre lies within the ring road that follows the line of the old city walls; several of the old gates, such as Porta Saragozza, Porta Maggiore and Porta Galliera, still stand. Inside, streets radiate from Piazza Maggiore and the Two Towers towards the gates, and most of them are lined with porticoes. It's flat and compact: you can cross it on foot in well under an hour."),
    p("Via Rizzoli and Via Ugo Bassi, the main east–west axis, form the \"T\" zone with Via Indipendenza. According to the Comune, Via Rizzoli and Via Ugo Bassi become pedestrian-only on Saturdays, Sundays and public holidays — the *T Days* — which makes weekends especially pleasant for walking in the centre."),
    {
      type: "image",
      src: `${IMG}/porta-maggiore-street-tower.webp`,
      alt: "Strada Maggiore in Bologna seen through the brick arch of Porta Maggiore, with arcaded buildings and a tall medieval tower at the far end",
      caption: "Strada Maggiore through the arch of Porta Maggiore, with the Asinelli tower at the far end.",
      credit: unsplash("Petr Slováček", "grwood"),
    },
    important("Bologna is building a new tram line. According to local reports, construction was being completed and testing began in September 2026, with some streets and bus routes still affected. Check [TPER](https://www.tper.it/) for current routes and diversions.", "Tram works"),

    // ——— 6 ———
    h2("The porticoes of Bologna"),
    p("Porticoes — covered walkways formed by arcades along the fronts of buildings — are Bologna's defining feature. According to the Comune di Bologna, they started in the Middle Ages as private extensions over public land; their usefulness was soon recognised, and from the 1288 municipal statutes they became compulsory in new buildings. Built on private land but open to everyone, they remain a shared public space."),
    p("In July 2021, UNESCO inscribed the Porticoes of Bologna on the World Heritage List. The site is made up of 12 groups of porticoes, chosen from the city's 62 kilometres of porticoed streets to represent different periods, materials and uses — from medieval wooden porticoes on Strada Maggiore to the 20th-century concrete porticoes of the Barca district."),
    {
      type: "image",
      src: `${IMG}/bologna-porticoes-piazza.webp`,
      alt: "Arcaded porticoes with red and ochre columns in central Bologna, with people sitting and walking beneath them",
      caption: "Porticoes in the historic centre: sheltered from sun and rain, and full of daily life.",
      credit: unsplash("Caio Fernandes", "caiovxf"),
    },
    p("For visitors, the porticoes are simply the way you move around: shade in summer, shelter from the rain and a continuous route between most sights. Some of the UNESCO components are also excellent short walks, such as Strada Maggiore, Via Galliera, and the portico linking Piazza Maggiore with the Archiginnasio."),
    h3("The portico of San Luca"),
    p("The most famous portico climbs from the city to the Sanctuary of the Madonna di San Luca on the Colle della Guardia. Built from 1674 to shelter the procession that carries the sacred icon of the Madonna into the city, it's the longest portico in the world, about 3.6 kilometres according to the Comune. The first stretch, from the Bonaccorsi Arch near Porta Saragozza, runs along Via Saragozza on flat ground for about a kilometre and a half. At the Meloncello Arch it crosses the road and begins more than two kilometres of uphill walking and steps to the sanctuary. The arch count is often given as 666, though the Comune notes it's slightly fewer, depending on how you count."),
    {
      type: "image",
      src: `${IMG}/portico-di-san-luca.webp`,
      alt: "Looking along the long, narrow portico of San Luca in Bologna, a repeating row of arches in shadow",
      caption: "The portico of San Luca, the longest in the world.",
      credit: unsplash("Francesco Luca Labianca", "ieeah"),
    },
    tip("Wear comfortable shoes and bring water for San Luca, and allow time at the top for the views and the sanctuary. The climb is steady but manageable at an easy pace.", "Walking to San Luca"),

    // ——— 7 ———
    h2("Where to stay in Bologna"),
    p("For a two-day visit, staying inside the historic centre means you'll walk everywhere and can drop by your hotel between outings. Staying near the station makes arrival and day trips easier. Rooms fill up and prices rise when large trade fairs take place at BolognaFiere, so check the fair calendar before you book."),
    table(
      ["Area", "Best suited to", "Advantages", "Considerations"],
      [
        ["Around Piazza Maggiore", "First visits and short stays", "Everything within walking distance; many restaurants", "Busier and often more expensive"],
        ["Santo Stefano and Strada Maggiore", "Couples, slower trips", "Elegant streets and squares; a few minutes from the centre", "Quieter in the evening; fewer budget options"],
        ["University quarter", "Budget travellers, nightlife", "Lively, with student prices", "Noisy until late, especially around Piazza Verdi"],
        ["Near Bologna Centrale", "Day trips, early trains, luggage", "Direct access to trains and the airport monorail", "About 15–20 minutes' walk to Piazza Maggiore; less atmospheric"],
        ["Saragozza and Porta Saragozza", "Walkers heading to San Luca", "Residential, near the start of the San Luca portico", "Further from the station"],
      ],
      "Where to stay in Bologna"
    ),
    p("Wherever you stay, check whether the building has a lift and how far it is from a bus stop if you're travelling with heavy luggage. Bologna applies a tourist tax per person per night."),

    // ——— 8 ———
    h2("Bologna's neighbourhoods"),
    ul(
      "**The centre (Piazza Maggiore and the Quadrilatero)** — the civic and commercial heart, with markets, shops and restaurants. Most sights are here, and you'll reach it on foot from everywhere else.",
      "**Santo Stefano and Strada Maggiore** — south-east of the towers, with elegant palaces, the Santo Stefano complex and long porticoes. Calmer than the centre.",
      "**The university quarter (Via Zamboni and Piazza Verdi)** — north-east of the towers, home to the university's historic buildings, the Pinacoteca and a young, lively evening scene.",
      "**Via del Pratello** — a street west of the centre known for its informal bars and osterias, busy in the evening.",
      "**Saragozza** — south-west, residential, with Porta Saragozza and the start of the San Luca portico.",
      "**Bolognina** — north of the railway line, a residential and multicultural district. Not a sightseeing area, but it's close to the station.",
    ),

    // ——— 9 ———
    h2("What to eat in Bologna"),
    p("Bologna's cooking belongs to Emilia-Romagna, a region known for fresh egg pasta, cured pork, aged cheese and slow-cooked sauces. What people abroad call \"spaghetti bolognese\" isn't a Bolognese dish: here, ragù is served with fresh egg tagliatelle, or baked in green lasagne."),
    ul(
      "**Tagliatelle al ragù** — fresh egg ribbons with a slow-cooked meat sauce. The Bologna delegation of the Accademia Italiana della Cucina deposited a reference recipe for the ragù with the city's Chamber of Commerce.",
      "**Tortellini in brodo** — small stuffed pasta, filled with pork, cured ham, mortadella and Parmigiano Reggiano, served in meat broth, especially in winter.",
      "**Tortelloni** — larger stuffed pasta, usually filled with ricotta and herbs and served with butter and sage.",
      "**Lasagne verdi** — green (spinach) pasta layered with ragù and béchamel.",
      "**Mortadella** — the large, finely ground cooked pork sausage studded with cubes of fat; Mortadella Bologna has PGI (Protected Geographical Indication) status.",
      "**Crescentine and tigelle** — in Bologna, *crescentine* are puffs of fried dough (called *gnocco fritto* elsewhere in the region) eaten with cured meats and soft cheese. *Tigelle* are small round flatbreads from the Modenese hills, cooked in moulds.",
      "**Cotoletta alla bolognese** — a breaded veal cutlet topped with ham and Parmigiano, finished in broth.",
      "**Regional products** — Parmigiano Reggiano, Prosciutto di Parma and traditional balsamic vinegar from Modena and Reggio Emilia, all with protected designations, and local wines such as Pignoletto and, from nearby Modena and Reggio Emilia, Lambrusco.",
    ),
    {
      type: "image",
      src: `${IMG}/bologna-delicatessen.webp`,
      alt: "Inside a delicatessen in Bologna, with shelves and counters full of cheeses, cured meats, olives and prepared dishes",
      caption: "A Bologna delicatessen. Many shops in the Quadrilatero will slice cured meats and cheese to take away.",
      credit: unsplash("Max Nayman", "maxniceman"),
    },
    h3("Where and how to eat"),
    p("A **trattoria** or **osteria** is the classic place for home-style pasta; the names overlap today, though an osteria traditionally started as a place to drink wine. **Pasta shops** (*sfogline* make pasta by hand) sell fresh tortellini and tagliatelle, and some serve it to eat in. The **markets** offer everything from fruit to lunch counters, and **aperitivo** in the early evening means a drink with a few snacks. Lunch is usually from about 12:30 and dinner from about 19:30–20:00; book for dinner at popular places, especially at weekends."),
    {
      type: "image",
      src: `${IMG}/bologna-market-cheese-stall.webp`,
      alt: "A market stall in Bologna with wheels and wedges of cheese, hams and an Italian flag",
      caption: "A market stall in central Bologna selling cheeses and hams.",
      credit: unsplash("Kristijan Arsov", "aarsoph"),
    },
    h3("Food glossary"),
    table(
      ["Italian term", "What it means"],
      [
        ["Tagliatelle al ragù", "Fresh egg pasta ribbons with slow-cooked meat sauce"],
        ["Tortellini (in brodo)", "Small pasta rings stuffed with meat, traditionally served in broth"],
        ["Tortelloni", "Larger stuffed pasta, usually filled with ricotta and herbs"],
        ["Mortadella", "Large, finely ground cooked pork sausage with cubes of fat"],
        ["Crescentine", "In Bologna, fried dough puffs eaten with cured meats"],
        ["Tigelle", "Small round flatbreads cooked in moulds, from the Modena area"],
        ["Sfoglia / sfoglina", "Hand-rolled fresh egg pasta / the woman who makes it"],
        ["Trattoria", "A casual, usually family-run restaurant serving traditional dishes"],
        ["Osteria", "Originally a wine tavern; today often a simple traditional restaurant"],
        ["Tagliere", "A board of cured meats and cheeses to share"],
        ["Coperto", "A per-person cover charge added to the bill in many restaurants"],
      ],
      "Bologna food glossary"
    ),
    p("To understand the food, a guided market walk or tasting can help. For how meals work across Italy, read [Italian food traditions](/food/italian-food-traditions), and for the region's wines, [our guide to Italian regional wines](/food/italian-regional-wines)."),

    // ——— 10 ———
    h2("Getting around Bologna"),
    p("You'll walk almost everywhere: the centre is flat, and the porticoes keep you out of the sun and rain. **TPER** runs the city buses. You can buy tickets in advance or, according to TPER, pay on board by tapping a contactless Mastercard, Visa, Maestro or VPay card on the green reader — tap again each time you change buses. **Taxis** can be found at ranks, including outside the station, or booked by phone or app. Bologna has good cycle lanes and a bike-sharing scheme, though cycling in the narrow centre needs care among pedestrians."),
    p("Most of the city now has a 30 km/h speed limit, and the historic centre is a limited traffic zone (ZTL) with cameras. That matters if you drive, but not if you walk and take the bus."),

    // ——— 11 ———
    h2("Bologna by train"),
    p("Bologna Centrale is one of Italy's main rail hubs, where the high-speed lines from Milan, Florence–Rome and Venice meet. The station is north of the historic centre, about 15–20 minutes' walk from Piazza Maggiore along Via Indipendenza, or a short bus ride. The high-speed platforms are deep underground, so allow extra time to reach them."),
    ul(
      "**Florence** — high-speed trains take about 35–40 minutes, making Bologna and Florence easy to combine.",
      "**Milan, Rome, Venice and Naples** — direct high-speed trains run by Trenitalia (Frecciarossa) and Italo.",
      "**Emilia-Romagna** — regional trains run to Modena, Parma, Reggio Emilia, Ferrara, Ravenna and the Adriatic coast.",
    ),
    p("Check current timetables with Trenitalia and Italo. For how tickets, validation and seat reservations work, read [Italy by train](/guides/italy-by-train)."),

    // ——— 12 ———
    h2("Bologna airport"),
    p("Bologna Guglielmo Marconi airport is just north-west of the city. The main link is the **Marconi Express**, an elevated monorail between the airport and Bologna Centrale, with an intermediate stop at Lazzaretto. According to the operator, the ride takes about seven minutes and runs from early morning until midnight; you can pay by tapping a contactless card at the gates. Overnight, from midnight to 05:40, TPER's **line Q** bus connects the airport with the station."),
    important("The Marconi Express sometimes suspends the monorail for maintenance and runs replacement shuttle buses instead — for example from 29 September to 1 October and from 3 to 6 October 2026. Check the [Marconi Express website](https://www.marconiexpress.it/en/) before you travel.", "Check before you fly"),
    p("**Taxis** wait outside arrivals and take you directly to your hotel, which is useful with luggage or late at night. **Private transfers** (NCC, car with driver) can be booked in advance with licensed operators. From Bologna Centrale, continue on foot, by bus or by taxi into the centre."),

    // ——— 13 ———
    h2("Day trips from Bologna"),
    p("Bologna is an excellent base for exploring Emilia-Romagna by train. On a two-day visit, a day trip means giving up half your time in the city, so most visitors add a third day for it."),
    table(
      ["Destination", "Good for", "Transport approach", "Planning notes"],
      [
        ["Modena", "The cathedral and Piazza Grande (UNESCO), balsamic vinegar, food", "Regional or fast train", "Half day or full day; the easiest trip from Bologna"],
        ["Parma", "The cathedral and baptistery, Prosciutto di Parma and Parmigiano Reggiano", "Regional or fast train", "Full day"],
        ["Ferrara", "Renaissance city walls, the Este Castle, cycling", "Regional train", "Half day or full day"],
        ["Ravenna", "Early Christian and Byzantine mosaics (UNESCO)", "Regional train", "Full day; mosaic sites have their own tickets and hours"],
        ["Reggio Emilia", "A quieter historic centre and Parmigiano Reggiano country", "Regional train, or high-speed to Reggio Emilia AV Mediopadana outside the centre", "Half day; best combined with food visits"],
      ],
      "Day trips from Bologna"
    ),
    p("Food tours to Parmigiano Reggiano dairies and balsamic vinegar producers usually include transport, since many producers are outside the towns. If you're planning several days across the region, a car becomes more useful; see below."),

    // ——— 14 ———
    h2("Best time to visit Bologna"),
    ul(
      "**Spring (April–June)** — pleasant for walking and outdoor tables; one of the busiest periods, especially at weekends and around holidays.",
      "**Summer (July–August)** — hot and humid in the Po Valley. Porticoes help, and there's open-air cinema and music in the evenings, but some restaurants close for part of August.",
      "**Autumn (September–November)** — good walking weather in September and October, with the university back in session. On 4 October the city celebrates its patron saint, San Petronio.",
      "**Winter (December–February)** — cold and often foggy, but ideal for tortellini in brodo, museums and long lunches. Christmas markets and the city's traditions liven December.",
    ),
    p("Large trade fairs at BolognaFiere can fill hotels at any time of year. For how Bologna compares with other Italian destinations through the year, see [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 15 ———
    h2("Bologna for different travellers"),
    ul(
      "**First-time visitors** — follow the two-day plan above, book the Archiginnasio and save San Luca for the second day.",
      "**Couples** — stay near Santo Stefano, walk the porticoes of Strada Maggiore in the evening and book a long dinner.",
      "**Solo travellers** — market counters, bars and aperitivo make eating alone easy, and the centre is compact and busy into the evening.",
      "**Families** — the flat centre suits strollers under the porticoes, markets are fun for children, and the San Luca walk can be shortened by taking a bus for part of the way.",
      "**Food-focused travellers** — spend a morning in the Quadrilatero and the Mercato delle Erbe, take a food tour or a pasta class, and add a day trip to Modena or Parma.",
      "**Art and culture lovers** — pair the Pinacoteca with the Archiginnasio, Santo Stefano and MAMbo's Museo Morandi.",
      "**Budget travellers** — many of the best things, such as the porticoes, the squares, San Petronio and the San Luca walk, are free; eat at market counters and pasta shops.",
      "**Weekend visitors** — the T Days make Saturday and Sunday good for walking in the centre, but book restaurants and the Archiginnasio ahead.",
    ),

    // ——— 16 ———
    h2("Bologna without a car"),
    p("For a city visit, a car is a burden rather than a help. The centre is a limited traffic zone monitored by cameras, streets are narrow, and parking is limited and paid. Everything you'll want to see is within walking distance or a short bus ride, and trains cover the main day trips."),
    p("A car becomes useful if you're touring Emilia-Romagna more widely — the Apennine hills, the countryside around Parma and Modena, or small towns off the rail network. In that case, pick it up when you leave Bologna, or park outside the ZTL and walk in. Before driving, read our guide to [driving in Italy](/guides/driving-in-italy), which covers ZTLs and speed limits."),

    // ——— 17 ———
    h2("Common first-time mistakes"),
    ol(
      "**Trying to see too many museums.** Choose one or two and leave time for the streets and markets.",
      "**Staying only around Piazza Maggiore.** Santo Stefano, the university quarter and Strada Maggiore show different sides of the city.",
      "**Treating food as an afterthought.** In Bologna, meals are part of the itinerary; plan and book them.",
      "**Skipping the porticoes.** Walk at least one of the UNESCO porticoes, ideally the one to San Luca.",
      "**Overloading the itinerary.** Two days is enough for the essentials, not for everything.",
      "**Renting a car for the city.** You don't need one, and the ZTL can bring fines.",
      "**Choosing accommodation without considering the trade-offs.** Near the station is convenient for trains; the centre is better for evenings.",
      "**Not checking current attraction information.** The Two Towers are closed to climbing, the San Petronio terrace is closed permanently and the Archiginnasio requires booking.",
      "**Relying on old transport information.** Tram works and monorail maintenance can change routes; check TPER and Marconi Express.",
      "**Adding too many day trips.** One day trip is plenty for a short stay.",
    ),

    // ——— 18 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "bologna-in-two-days",
      groups: [
        {
          title: "Before booking",
          items: ["Choose your accommodation area", "Decide how long to stay", "Decide whether to add a day trip", "Check the BolognaFiere trade-fair calendar"],
        },
        {
          title: "Before departure",
          items: ["Check current information for the main sights", "Book the Archiginnasio and Anatomical Theatre", "Book dinner at popular restaurants", "Check the Marconi Express or train connections"],
        },
        {
          title: "During the trip",
          items: ["Leave time for meals", "Check current bus routes and diversions", "Keep one period unplanned", "Dress appropriately for San Petronio"],
        },
      ],
    },
    p("The closures, booking rules, transport links and traffic rules in this guide were checked on official sites in September 2026. They can change: confirm them before you travel. To fit Bologna into a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Is two days enough for Bologna?", answer: "Yes. Two days covers Piazza Maggiore, San Petronio, the Archiginnasio, the Quadrilatero, Santo Stefano, a museum and the portico walk to San Luca, with time for proper meals. Add a third day for a day trip." },
    { question: "What is Bologna famous for?", answer: "Its food, especially tagliatelle al ragù, tortellini and mortadella; its porticoes, a UNESCO World Heritage Site; its medieval towers; and one of the oldest universities in Europe." },
    { question: "Is Bologna walkable?", answer: "Very. The historic centre is flat and compact, and most streets are lined with porticoes that give shelter from sun and rain. You can cross it on foot in well under an hour." },
    { question: "Where should first-time visitors stay in Bologna?", answer: "In the historic centre near Piazza Maggiore for convenience, around Santo Stefano for a quieter stay, or near Bologna Centrale if you're planning day trips or early trains." },
    { question: "What food is Bologna famous for?", answer: "Tagliatelle al ragù, tortellini in brodo, tortelloni, green lasagne, mortadella and crescentine with cured meats, along with regional products such as Parmigiano Reggiano." },
    { question: "Do you need a car in Bologna?", answer: "No. The centre is walkable, TPER buses cover longer distances, and trains reach nearby cities. The historic centre is a limited traffic zone, so a car is more trouble than help for a city stay." },
    { question: "How do you get from Bologna Airport to the city?", answer: "The Marconi Express monorail runs to Bologna Centrale in about seven minutes, from early morning until midnight; at night, TPER bus line Q replaces it. Taxis go directly to the centre. Check the Marconi Express site for temporary suspensions." },
    { question: "Can you climb the Two Towers in Bologna?", answer: "Not at present. The Asinelli tower has been closed to visitors since October 2023 while the leaning Garisenda is stabilised, with work expected to continue for several years. You can still see both from Piazza di Porta Ravegnana." },
    { question: "Is Bologna good for a weekend?", answer: "Yes. It's compact, easy to reach by train, and at weekends the main streets of the centre become pedestrian-only. Book restaurants and the Archiginnasio in advance." },
    { question: "Can you visit Bologna from Florence by train?", answer: "Yes. High-speed trains take about 35–40 minutes, so a day trip from Florence is easy — although Bologna deserves at least one night." },
    { question: "What should you not miss in Bologna?", answer: "Piazza Maggiore and San Petronio, the Anatomical Theatre in the Archiginnasio, the Quadrilatero, Santo Stefano, the Two Towers from outside and the portico walk to San Luca — plus tagliatelle al ragù or tortellini." },
    { question: "Are Bologna's porticoes worth visiting?", answer: "Yes. They're a UNESCO World Heritage Site and the way you'll get around the city. Walk Strada Maggiore and the portico to San Luca, the longest in the world." },
    { question: "Can you take day trips from Bologna?", answer: "Yes. Modena, Parma, Ferrara, Ravenna and Reggio Emilia are all reachable by train. For a two-day stay, add a third day rather than giving up half your time in Bologna." },
    { question: "Is Bologna expensive?", answer: "Generally less than Venice or Florence, though hotels can be expensive during large trade fairs. Many of the best experiences, such as the porticoes, the squares and San Petronio, are free, and market counters and trattorias keep food costs reasonable." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Bologna Welcome — official tourist information", url: "https://www.bolognawelcome.com/en/", note: "sights, bookings and updates" },
    { label: "Porticoes of Bologna — Comune di Bologna", url: "https://portici.comune.bologna.it/en", note: "the UNESCO porticoes and San Luca" },
    { label: "UNESCO — The Porticoes of Bologna", url: "https://whc.unesco.org/en/list/1650/", note: "World Heritage listing" },
    { label: "Basilica of San Petronio", url: "https://www.basilicadisanpetronio.org/en/info-and-opening-hours/", note: "visits, rules and chapels" },
    { label: "Archiginnasio and Anatomical Theatre — booking", url: "https://www.bolognawelcome.com/en/experiences/331861/Palazzo-dell-Archiginnasio-and-Teatro-Anatomico---Guided-or-audio-guided-tour", note: "compulsory online booking" },
    { label: "Pinacoteca Nazionale di Bologna", url: "https://pinacotecabologna.cultura.gov.it/en/", note: "opening and exhibitions" },
    { label: "MAMbo — Museo d'Arte Moderna di Bologna", url: "https://www.museibologna.it/mambo/", note: "exhibitions and Museo Morandi" },
    { label: "Zona T and T Days — Comune di Bologna", url: "https://www.comune.bologna.it/informazioni/zona-t-t-days", note: "pedestrian weekends in the centre" },
    { label: "TPER", url: "https://www.tper.it/", note: "buses, tickets and contactless payment" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/en/", note: "airport monorail and service updates" },
  ],
};
