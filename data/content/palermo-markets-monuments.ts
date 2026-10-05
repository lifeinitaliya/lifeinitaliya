import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Palermo for First-Time Visitors" — the rebuilt version of the
// site's original short "Palermo: Markets, Monuments and Street Food" article,
// kept at its established URL. The UNESCO listing, Palazzo Reale visiting
// rules and restoration notice, airport links, rail disruptions, the Monreale
// bus and museum closing days were checked on official sites or official
// listings in September 2026. Prices, timetables and journey times are
// deliberately not quoted, apart from the airport train as given by the Comune.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/palermo-markets-monuments";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const palermoMarketsMonuments: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Palermo sits on a bay on Sicily's north coast, ringed by mountains, and has been a capital for much of its long history — of an Arab emirate, of a Norman kingdom and, today, of the Sicilian Region. That history is visible on almost every street: gold mosaics and red domes from the 12th century, Baroque churches and squares, 19th-century theatres, and markets whose streets have traded for centuries. For a first visit, the city rewards time and a little planning."),
    answer("**Palermo is well worth visiting**, especially for architecture, history and food. **Two to three days** covers the historic centre, the Arab-Norman monuments, a market or two and the street food; add more if you want day trips to Monreale, Cefalù or Segesta. What makes Palermo distinctive is its 12th-century Arab-Norman heritage — listed by UNESCO together with the cathedrals of Cefalù and Monreale — alongside a strong food culture centred on its markets. **You don't need a car** for the city: the historic centre is walkable, and trains, buses and taxis cover the essentials. Prioritise the Cathedral, the Palazzo dei Normanni with the Cappella Palatina, the Quattro Canti and Piazza Pretoria, one market, and a proper street-food lunch."),
    {
      type: "facts",
      title: "Palermo at a glance",
      rows: [
        { label: "Recommended first visit", value: "2–3 days" },
        { label: "Best known for", value: "Arab-Norman architecture, markets, street food, history and culture" },
        { label: "Main arrival points", value: "Palermo Falcone Borsellino airport (Punta Raisi), Palermo Centrale station and the port" },
        { label: "Getting around", value: "On foot in the historic centre, with AMAT buses for longer distances" },
        { label: "Car needed?", value: "No for a central city stay — the centre has a limited traffic zone" },
        { label: "Main markets", value: "Ballarò, Capo and Vucciria" },
        { label: "Good day trips", value: "Monreale, Cefalù, Segesta, and Mondello for the beach" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/palermo-rooftops-domes-mountains.webp`,
      alt: "The dome and Gothic towers of Palermo Cathedral rising above the city's rooftops, with mountains behind",
      caption: "Palermo Cathedral above the rooftops of the historic centre, with the mountains that ring the city behind.",
      credit: unsplash("Ricardo Gomez Angel", "rgaleriacom"),
      wide: true,
    },

    // ——— 1 ———
    h2("Is Palermo worth visiting?"),
    p("Yes. Few cities in Italy have such a concentrated sequence of history in their monuments. In the space of a morning you can see a Norman king's chapel decorated by Byzantine mosaicists and craftsmen from the Islamic world, a cathedral rebuilt and remodelled over eight centuries, a Baroque crossroads, and a Renaissance fountain originally made for a Florentine villa. Palermo is also a lively working city: its markets, bars and street food are part of daily life for its residents, not just for visitors."),
    p("It's a large city, and the historic centre has a mix of restored palaces, busy streets and buildings still awaiting restoration. Walking is the best way to understand it. Visitors who plan around a few key sights, eat well and leave time to wander usually find it one of the most rewarding cities in the south."),

    // ——— 2 ———
    h2("How many days do you need in Palermo?"),
    table(
      ["Trip length", "What it allows", "Trade-offs"],
      [
        ["1 day", "The core historic centre: Cathedral, Palazzo dei Normanni, Quattro Canti, one market", "A fast pace; little time for meals or museums"],
        ["2 days", "The main sights, markets and street food, plus the Teatro Massimo and the Kalsa", "The best minimum for a first visit"],
        ["3 days", "A deeper look at Palermo, a museum, and a half-day in Monreale", "Usually the most balanced"],
        ["4–5 days", "Palermo plus Cefalù, Segesta or a beach day", "Some trips are easier with a car or organised tour"],
      ],
      "How long to stay in Palermo"
    ),
    p("There's no single correct length. If Palermo is your only stop in Sicily, three days lets you see the city properly and take one excursion. If it's the start of a longer island trip, two days in the city followed by a car or train onwards works well."),

    // ——— 3 ———
    h2("What Palermo is known for"),
    ul(
      "**Arab-Norman monuments** — the Cappella Palatina, the Cathedral, the Martorana, San Cataldo and San Giovanni degli Eremiti, part of a UNESCO World Heritage Site.",
      "**Markets** — Ballarò, Capo and Vucciria, historic market streets in the old quarters.",
      "**Street food** — arancine, panelle, crocchè, sfincione and more, eaten standing up or on the move.",
      "**Baroque Palermo** — the Quattro Canti, Piazza Pretoria and many richly decorated churches and oratories.",
      "**Theatres** — the Teatro Massimo, one of Europe's largest opera houses, and the Teatro Politeama.",
      "**Setting** — a bay between mountains, with Monte Pellegrino to the north and the beach at Mondello nearby.",
      "**Santa Rosalia** — the city's patron saint, whose Festino in mid-July is Palermo's biggest festival.",
    ),

    // ——— 4 ———
    h2("Palermo in 1, 2 or 3 days"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "One day", title: "The historic core", text: "**Morning:** the Palazzo dei Normanni and Cappella Palatina (book ahead). **Late morning:** the Cathedral. **Lunch:** street food at Ballarò. **Afternoon:** the Quattro Canti, Piazza Pretoria, and the Martorana and San Cataldo on Piazza Bellini. **Evening:** dinner in the centre." },
        { label: "Two days", title: "Theatres, markets and the Kalsa", text: "Day one as above. **Day two:** a guided tour of the Teatro Massimo; the Capo market; lunch; an afternoon walk through the Kalsa to Piazza Marina and the seafront. *Optional:* Santa Maria dello Spasimo or the Orto Botanico. **Evening:** the Vucciria area or a slow dinner." },
        { label: "Three days", title: "Museums and Monreale", text: "Days one and two as above. **Day three:** a half-day in Monreale for its cathedral mosaics and cloister, then a museum back in Palermo — Palazzo Abatellis or the Museo Salinas (both usually closed on Mondays). *Optional:* an evening at Mondello. Keep time free." },
      ],
    },
    tip("Build each day around one timed visit — the Palazzo dei Normanni or the Teatro Massimo — and keep the rest flexible. Allow proper time for lunch: street food is part of the sightseeing.", "One booking per day"),

    // ——— 5 ———
    h2("Palermo's main sights"),
    p("Opening hours change, several museums close one day a week, and churches can close for services. Check the official site before planning a day around any of them."),
    h3("The Palazzo dei Normanni and the Cappella Palatina"),
    p("The Royal Palace, on the highest point of the old city, was the seat of the Norman kings and is now the seat of the Sicilian Regional Assembly. Its highlight is the **Cappella Palatina**, the royal chapel begun under Roger II after his coronation in 1130, with gold Byzantine mosaics and a carved and painted wooden ceiling in the style of the Islamic world. According to the [Fondazione Federico II](https://www.federicosecondo.org/visita/), which manages visits, the complex is open daily; the Royal Apartments are not included on Tuesdays and Wednesdays, and the chapel closes to visitors during Sunday morning Mass. As the seat of the regional parliament, the palace can close wholly or partly at short notice. Allow two hours, and buy tickets online in busy periods."),
    important("Restoration of the mosaics in the Cappella Palatina's presbytery is under way, and the Fondazione Federico II has warned that opening hours may change and some areas may not be accessible. Check the official site for the latest notices before you go.", "Restoration in progress"),
    {
      type: "image",
      src: `${IMG}/palazzo-dei-normanni-interior.webp`,
      alt: "A room in the Palazzo dei Normanni with walls and vault covered in mosaics of animals and palm trees on a gold ground, under a skylight",
      caption: "Mosaic decoration inside the Palazzo dei Normanni.",
      credit: unsplash("Lothar Boris Piltz", "lotharborispiltz"),
    },
    h3("Palermo Cathedral"),
    p("The Cathedral was rebuilt from 1185 under Archbishop Walter of the Mill on a site that had held earlier churches and a mosque, then remodelled many times: its Gothic towers and portico, and its later dome and neoclassical interior, reflect different centuries. It holds the tombs of Norman and Swabian rulers, including Roger II and Frederick II, and the chapel of Santa Rosalia. Entry to the church is free; a separate ticket covers the monumental areas, such as the treasury, crypt, royal tombs and roof. Allow an hour, more if you go up to the roof."),
    {
      type: "image",
      src: `${IMG}/palermo-cathedral.webp`,
      alt: "Palermo Cathedral in sunlight, with its Gothic towers, dome and long side portico, and palm trees in the garden in front",
      caption: "Palermo Cathedral, remodelled over many centuries.",
      credit: unsplash("Vincenzo Inzone", "vincent_61"),
    },
    h3("The Quattro Canti and Piazza Pretoria"),
    p("The **Quattro Canti** is the Baroque crossroads where the two main streets of the old city — Via Maqueda and Corso Vittorio Emanuele, the ancient Cassaro — meet, dividing the centre into its four historic quarters. Its four curved façades, from the early 17th century, carry statues of the seasons, Spanish kings and the city's patron saints. A few steps away, **Piazza Pretoria** is filled by a large Renaissance fountain, made in Florence in the 1550s and moved to Palermo in the 1570s, in front of the city hall. Both take only a few minutes, and you'll pass them several times."),
    {
      type: "image",
      src: `${IMG}/palermo-square-fountain.webp`,
      alt: "Piazza Pretoria in Palermo with its large marble fountain and statues, surrounded by palaces, with a church dome on the left",
      caption: "Piazza Pretoria and its fountain, with the dome of Santa Caterina on the left.",
      credit: unsplash("Dominique Josse", "djosse"),
    },
    h3("The Martorana and San Cataldo"),
    p("Side by side on Piazza Bellini, these two small churches are among Palermo's finest Norman-era buildings. The **Martorana** (Santa Maria dell'Ammiraglio) was founded in the 1140s by George of Antioch, Roger II's admiral, and its interior is covered in Byzantine mosaics, including one of Roger II being crowned by Christ. It now serves a Byzantine-rite Catholic community, so visits pause for services. **San Cataldo**, with its three red domes, has an austere interior. Each takes 20–30 minutes; both charge a small entry fee."),
    h3("Santa Caterina"),
    p("Across the square, the Baroque church of Santa Caterina d'Alessandria has one of the city's most lavish marble interiors. The former Dominican convent next door has a cloister and rooftop terraces with views over the centre; check current visiting arrangements. Allow 45 minutes."),
    h3("The Teatro Massimo"),
    p("Opened in 1897, the Teatro Massimo is one of the largest opera houses in Europe, a neoclassical temple at the top of Via Maqueda. According to the theatre, it can be visited every day with a guided tour; individual visitors buy tickets at the box office or online. Better still, see a performance — check the programme on the theatre's website."),
    h3("The Teatro Politeama"),
    p("At the northern end of the historic centre, the Politeama Garibaldi, completed in the late 19th century, marks the start of the 19th- and 20th-century city. It hosts concerts and is a landmark rather than a sight to plan around; you'll pass it walking towards Via Libertà."),
    h3("Santa Maria dello Spasimo"),
    p("In the Kalsa, this 16th-century church was never completed. Its roofless Gothic nave, open to the sky, is one of the most atmospheric spaces in Palermo and is used for concerts and events. Check it's open before making a special trip."),
    h3("The Orto Botanico"),
    p("The University of Palermo's botanical garden, founded at the end of the 18th century, lies just beyond the Kalsa. It's known for its large ficus trees and subtropical collections — a quiet break of an hour or so after the busy centre."),
    h3("Museums"),
    p("Two regional museums stand out. **Palazzo Abatellis**, in a late-15th-century palace in the Kalsa, is the regional art gallery, with the fresco of the *Triumph of Death* and Antonello da Messina's *Annunciata*. The **Museo Archeologico Salinas** holds Sicily's major archaeological collections, including sculpture from the Greek temples of Selinunte. According to the Comune, both are usually closed on Mondays. Allow one and a half to two hours for each."),
    table(
      ["Place", "Time to allow", "Book ahead?", "Where it fits"],
      [
        ["Palazzo dei Normanni and Cappella Palatina", "About 2 hours", "Useful — online tickets", "Day 1 morning"],
        ["Palermo Cathedral", "About 1 hour", "No; separate ticket for the monumental areas", "Day 1"],
        ["Quattro Canti and Piazza Pretoria", "15–30 minutes", "No", "Day 1"],
        ["Martorana and San Cataldo", "About 1 hour for both", "No", "Day 1 afternoon"],
        ["Teatro Massimo", "Under an hour for a tour", "Buy at the box office or online", "Day 2 morning"],
        ["Santa Maria dello Spasimo", "30 minutes", "Check it's open", "Day 2, in the Kalsa"],
        ["Palazzo Abatellis or Museo Salinas", "1½–2 hours", "Usually not; closed Mondays", "Day 3"],
        ["Monreale Cathedral and cloister", "Half a day including travel", "Usually not", "Day 3"],
      ],
      "Main sights and where they fit"
    ),

    // ——— Arab-Norman ———
    h2("Arab-Norman Palermo"),
    p("Palermo's most distinctive monuments come from a specific moment in its history. Muslim forces from North Africa took Palermo in 831, and for more than two centuries it was the capital of an Islamic emirate in Sicily and one of the largest cities in the Mediterranean. In the 11th century, Norman knights from northern France, led by Robert Guiscard and his brother Roger, conquered the island; Palermo fell in 1072. In 1130, Roger's son, Roger II, was crowned king of Sicily, making Palermo the capital of a kingdom that lasted until 1194."),
    p("The Norman kings ruled a population of Muslims, Greek-speaking Byzantine Christians, Latin Christians and Jews. Rather than replacing existing traditions, the court used them: Arabic and Greek served alongside Latin in administration, and the kings commissioned buildings that combined Latin church plans, Byzantine mosaics made by artists trained in the Greek tradition, and Islamic-style domes, arches, muqarnas ceilings and inscriptions. The result is an architecture found nowhere else in quite the same form."),
    p("In 2015, UNESCO inscribed **\"Arab-Norman Palermo and the Cathedral Churches of Cefalù and Monreale\"** on the World Heritage List. According to UNESCO, the site comprises nine monuments from the Norman kingdom, seven of them in Palermo:"),
    ul(
      "The Royal Palace and the Cappella Palatina",
      "The Zisa Palace",
      "Palermo Cathedral",
      "The Church of San Giovanni degli Eremiti",
      "The Church of Santa Maria dell'Ammiraglio (the Martorana)",
      "The Church of San Cataldo",
      "The Admiral's Bridge (Ponte dell'Ammiraglio)",
      "Monreale Cathedral",
      "Cefalù Cathedral",
    ),
    p("UNESCO describes them as an example of a social and cultural syncretism between Western, Islamic and Byzantine cultures, and as testimony to the coexistence of people of different origins and religions. That coexistence took place under Norman rule, and it did not last: after revolts in the late 12th and early 13th centuries, Frederick II deported Sicily's remaining Muslims to Lucera, on the mainland, by the middle of the 13th century. The monuments are a record of a particular court and period, not of a permanent harmony."),

    // ——— 6 ———
    h2("Palermo's historic centre"),
    p("The historic centre is divided by Via Maqueda and Corso Vittorio Emanuele into four quarters, or *mandamenti*, which meet at the Quattro Canti: the **Kalsa** to the south-east, the **Albergheria** to the south-west, the **Capo** (Seralcadio) to the north-west and **La Loggia** (Castellammare) to the north-east. Each has its own churches, squares and, in three of them, a market. Stretches of Via Maqueda and Corso Vittorio Emanuele are pedestrianised, which makes walking between the main sights pleasant."),
    p("The centre is flat and compact enough to cross on foot in under an hour. The historic centre is a limited traffic zone (ZTL) monitored by cameras, which matters if you drive but not if you walk."),
    {
      type: "image",
      src: `${IMG}/palermo-pedestrian-street.webp`,
      alt: "A pedestrian street in central Palermo on a summer day, lined with historic buildings with balconies, with people walking",
      caption: "A pedestrian street in the historic centre.",
      credit: unsplash("Stefano Huang", "stefanohuang"),
    },

    // ——— 7 ———
    h2("Palermo's markets"),
    p("Palermo's three historic markets occupy streets rather than halls: stalls line the lanes, with shops, bars and street-food stands behind them. They're working markets for residents, selling fish, meat, fruit, vegetables and household goods, and they're also the easiest places to try the city's street food. Go in the morning, when the stalls are fullest; activity quietens in the afternoon, and trading on Sundays and public holidays varies. Our guide to [Italian food markets](/food/italian-food-markets) has tips on shopping and market etiquette."),
    table(
      ["Market", "Where", "Known for", "Good for"],
      [
        ["Ballarò", "Albergheria, between the station and the Palazzo dei Normanni", "The largest and busiest market: produce, fish, meat and street-food stalls", "A first market visit and street-food lunch"],
        ["Capo", "The Capo quarter, behind the Teatro Massimo and near the Cathedral", "A long market street with food stalls and small shops", "Combining with the Cathedral or Teatro Massimo"],
        ["Vucciria", "La Loggia, near Piazza San Domenico", "A historic market now smaller by day, known for its evening bars and street food", "An evening out"],
      ],
      "Palermo's historic markets"
    ),
    {
      type: "image",
      src: `${IMG}/ballaro-market-street.webp`,
      alt: "A stall at Ballarò market in Palermo piled with cheeses, cured meats and packaged foods with price labels, and a stallholder behind",
      caption: "Ballarò, the largest of Palermo's historic markets.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },
    p("In the markets, point and ask; many stallholders will let you taste before buying. Keep your phone and wallet secure in the crowds, and carry some cash for small purchases. If you want context, a guided street-food walk can be a good introduction."),
    {
      type: "image",
      src: `${IMG}/albergheria-grains-legumes.webp`,
      alt: "Open sacks of grains, pulses and dried legumes with handwritten price labels at a market stall in the Albergheria district",
      caption: "Pulses and grains on sale in the Albergheria, the district around Ballarò.",
      credit: unsplash("Bernd Dittrich", "hdbernd"),
    },

    // ——— 8 ———
    h2("Where to stay in Palermo"),
    p("For a first visit, staying in or near the historic centre means you can walk to the main sights and markets. The Politeama–Libertà area suits travellers who prefer wider streets and a quieter evening. Mondello works for a beach-focused stay but not for sightseeing."),
    table(
      ["Area", "Good for", "Advantages", "Considerations"],
      [
        ["Centro storico (around the Quattro Canti and Via Maqueda)", "First visits, short stays", "Walk to almost everything; pedestrian streets", "Busy by day and evening; check noise"],
        ["Kalsa", "Culture, the seafront", "Museums, historic squares, near the Foro Italico", "Some streets are quiet at night; check the exact location"],
        ["Albergheria", "Markets, the Palazzo dei Normanni", "Ballarò on the doorstep; near the station", "Lively market streets; varied building conditions"],
        ["Politeama / Libertà", "A calmer, more modern base", "Wide streets, shops, Teatro Massimo nearby, airport bus", "A walk of 15 minutes or more to the Cathedral"],
        ["Near Palermo Centrale", "Early trains, day trips", "Trains, coaches and the airport link", "Less atmospheric; further from the northern sights"],
        ["Mondello", "A beach holiday", "The beach and seafront", "A bus or taxi ride from the centre; busy in summer"],
      ],
      "Where to stay in Palermo"
    ),
    p("In the historic centre, look at the street and building before booking: a restored palazzo on a quiet square and a room above a late-night bar can be a few streets apart. Palermo applies a tourist tax per person per night."),

    // ——— 9 ———
    h2("Palermo's neighbourhoods"),
    ul(
      "**Kalsa** — the south-eastern quarter, whose name comes from the Arabic *al-Khalisa*. It includes Palazzo Abatellis, Santa Maria dello Spasimo, Piazza Marina with the Giardino Garibaldi and the Foro Italico seafront. Good for walking and museums.",
      "**Albergheria** — the south-western quarter, with the Palazzo dei Normanni, the Ballarò market and Baroque churches such as the Gesù (Casa Professa). Lively by day.",
      "**Capo** — the north-western quarter, around the Capo market, close to the Cathedral and the Teatro Massimo.",
      "**La Loggia (Castellammare)** — the north-eastern quarter, with the Vucciria, Piazza San Domenico and the old harbour at La Cala. Busy in the evening.",
      "**Politeama and Libertà** — north of the historic centre, the 19th- and early 20th-century city, with Via Libertà's shops, Liberty-style buildings and the Teatro Politeama.",
      "**Mondello** — a seaside district below Monte Pellegrino, reached by bus or taxi, with a long sandy beach and an Art Nouveau bathing pavilion.",
    ),
    {
      type: "image",
      src: `${IMG}/piazza-san-domenico.webp`,
      alt: "Piazza San Domenico in Palermo, with the Baroque church of San Domenico, a tall column topped by a statue and palm trees",
      caption: "Piazza San Domenico in La Loggia, a few steps from the Vucciria.",
      credit: unsplash("Giuseppe Buccola", "giuseppe_buccola"),
    },

    // ——— 10 ———
    h2("What to eat in Palermo"),
    p("Sicilian cooking varies by city and region: Catania, Syracuse, Trapani and the interior each have their own dishes. Palermo has its own traditions, especially street food, and shares others with the whole island. It helps to know which is which."),
    h3("Palermo specialities"),
    ul(
      "**Arancina** — a fried rice ball, round in Palermo and usually filled with meat ragù (*accarne*) or with butter, ham and cheese (*abburro*). In Palermo the word is feminine, *arancina*; in eastern Sicily it's *arancino*, often cone-shaped. Palermitans eat arancine on 13 December, the feast of Santa Lucia.",
      "**Panelle** — thin fritters of chickpea flour, often eaten in a sesame bun (*pane e panelle*).",
      "**Crocchè** — potato croquettes, sometimes called *cazzilli*, often sold with panelle.",
      "**Sfincione** — a thick, soft pizza-like bread topped with tomato, onion, anchovies, caciocavallo cheese and breadcrumbs.",
      "**Pani ca' meusa** — a bun filled with slow-cooked veal spleen and lung, served plain or with cheese: a traditional Palermo street food.",
      "**Pasta con le sarde** — pasta with fresh sardines, wild fennel, pine nuts, raisins and toasted breadcrumbs.",
      "**Cassata** — a sponge and ricotta cake covered in marzipan and candied fruit, especially associated with Palermo.",
      "**Frutta martorana** — marzipan shaped and painted like fruit, named after the Martorana convent.",
    ),
    h3("Found across Sicily"),
    ul(
      "**Cannoli** — crisp fried pastry tubes filled with sweetened sheep's-milk ricotta; eaten all over Sicily, with famous versions in the Palermo area.",
      "**Caponata** — sweet-and-sour aubergine with celery, olives and capers, made in many local versions.",
      "**Pasta alla Norma** — pasta with tomato, fried aubergine and salted ricotta, associated with Catania rather than Palermo.",
      "**Granita** — semi-frozen water ice, often eaten with a brioche, especially in eastern Sicily; in summer you'll find it in Palermo too.",
      "**Brioche con gelato** — ice cream served in a soft brioche bun.",
      "**Seafood** — swordfish, tuna, sardines and anchovies appear across the island's coasts.",
    ),
    p("For the wider picture, see our guide to [Sicilian food traditions](/food/sicily-food-traditions), and for cannoli, cassata and other sweets, [traditional Italian desserts](/food/traditional-italian-desserts)."),
    h3("Street-food guide"),
    table(
      ["Food", "What it is", "Where visitors may find it"],
      [
        ["Panelle", "Chickpea-flour fritters, often in a sesame bun", "Markets and street-food stalls"],
        ["Crocchè", "Potato croquettes", "Markets and fry shops (friggitorie)"],
        ["Arancina", "Fried rice ball with ragù or butter and ham", "Bars, fry shops and bakeries across the city"],
        ["Sfincione", "Thick tomato, onion and anchovy bread", "Bakeries, markets and street vendors"],
        ["Pani ca' meusa", "Bun with slow-cooked spleen and lung", "Specialist stalls, particularly around the markets"],
        ["Cannolo", "Fried pastry shell filled with sweet ricotta", "Pastry shops (pasticcerie) and bars"],
        ["Granita with brioche", "Water ice with a soft bun", "Bars and ice-cream shops, mainly in summer"],
      ],
      "Palermo street food"
    ),
    p("Street food is eaten standing up, usually at lunchtime or as an early-evening snack. For sit-down meals, trattorias in the centre serve pasta con le sarde, fish and vegetables. Menus near the main sights can be more expensive; walk a few streets away and check for cover charges. On how Italian meals work more generally, see [Italian food traditions](/food/italian-food-traditions)."),

    // ——— 11 ———
    h2("Getting around Palermo"),
    p("You'll walk almost everywhere in the historic centre, which is flat and compact. **AMAT** runs the city buses and a tram network that mostly serves outer districts. Tickets can be bought in advance or through AMAT's apps; buying on board costs more. Buses reach the Politeama–Libertà area, Monte Pellegrino and Mondello. **Taxis** can be found at ranks, such as outside the station and in the main squares, or booked by phone or app. Some areas have cycle lanes, but traffic outside the pedestrian streets makes cycling less relaxed than walking."),
    p("Beyond the centre, distances grow and the land rises towards Monte Pellegrino and the hills around the city, so use buses or taxis for Mondello, Monreale and the Zisa."),

    // ——— 12 ———
    h2("Palermo airport"),
    p("Palermo Falcone Borsellino airport, also known as Punta Raisi, is on the coast west of the city. According to the Comune di Palermo, it's connected to the centre by:"),
    ul(
      "**Train** — Trenitalia's Trinacria Express service runs from the airport station, below the terminal, to Palermo Centrale in about 45 minutes, stopping at stations in the city.",
      "**Bus** — Prestia e Comandè buses run between the airport and Palermo Centrale, with stops in the city.",
      "**Taxi** — from the rank outside the terminal; the fare depends on your destination in the city.",
      "**Car hire and private transfers** — rental desks at the airport, or a pre-booked car with driver (NCC).",
    ),
    important("Works on the railway between the airport and the city have caused timetable changes and replacement buses at times. Check [Trenitalia](https://www.trenitalia.com/) or the [airport's website](https://www.aeroportodipalermo.it/) for current services before you travel.", "Check the airport train"),

    // ——— 13 ———
    h2("Palermo by train"),
    p("Palermo Centrale, on Piazza Giulio Cesare at the southern end of Via Roma, is the city's main station; intercity coaches leave from a terminal next to it. Sicily's rail network is less dense than the mainland's, so trains suit some destinations much better than others:"),
    ul(
      "**Cefalù and Messina** — regional trains run east along the coast; Cefalù is an easy day trip.",
      "**Agrigento** — regional trains run inland to Agrigento for the Valley of the Temples; it makes a long day trip.",
      "**Catania** — regional trains cross the interior. The line reopened in September 2026 after a three-month closure for works; coaches are an alternative.",
      "**Syracuse** — there's no direct train from Palermo. Between 1 October 2026 and 31 January 2027, trains between Catania and Syracuse are replaced by buses for works.",
      "**Mainland Italy** — Intercity day and night trains run to Rome and beyond, crossing the Strait of Messina on a train ferry.",
    ),
    p("Timetables change often because of engineering works, so check Trenitalia before you travel. For how Italian tickets and trains work, read [Italy by train](/guides/italy-by-train). Ferries also link Palermo's port, in the city centre, with several mainland ports, including Naples; if you're travelling on, see [Naples for first-time visitors](/cities/naples-first-visit)."),

    // ——— 14 ———
    h2("Day trips from Palermo"),
    table(
      ["Destination", "Best for", "Transport approach", "Planning notes"],
      [
        ["Monreale", "The cathedral's golden mosaics and the cloister (UNESCO)", "AMAT bus 389 from Piazza Indipendenza, a taxi or a tour", "Half day. The bus was interrupted at times in 2026, so check it's running"],
        ["Cefalù", "The Norman cathedral (UNESCO), the old town and a beach", "Regional train along the coast", "Half or full day; the easiest trip by public transport"],
        ["Mondello", "The beach below Monte Pellegrino", "City bus or taxi", "Half day; very busy on summer weekends"],
        ["Segesta", "A Greek Doric temple and a hilltop theatre", "Car, organised tour or limited coach services", "Full day, often combined with Erice; hot in summer"],
        ["Erice", "A medieval hilltop town above Trapani", "Train or coach to Trapani, then cable car or bus; easier by car", "Full day; check the cable car is running"],
        ["San Vito Lo Capo", "Beaches in summer", "Seasonal coaches or car", "Long day; better as an overnight stay"],
      ],
      "Day trips from Palermo"
    ),
    {
      type: "image",
      src: `${IMG}/monreale-cathedral-mosaics.webp`,
      alt: "The nave of Monreale Cathedral, with walls and apse covered in gold mosaics and a large mosaic figure of Christ above the altar",
      caption: "Monreale Cathedral, part of the same UNESCO site as the Arab-Norman monuments of Palermo.",
      credit: unsplash("Peter Boccia", "peterboccia"),
    },
    p("Monreale and Cefalù complete the UNESCO Arab-Norman site and are the natural first choices. Segesta, Erice and San Vito Lo Capo are much easier with a car or a tour, and in summer the heat and crowds make an early start worthwhile."),

    // ——— 15 ———
    h2("Best time to visit Palermo"),
    ul(
      "**Spring (April–June)** — mild and good for walking; one of the busiest periods, particularly around Easter.",
      "**Summer (July–August)** — hot and dry, with sightseeing best early and late in the day. It's beach season at Mondello and along the coast. The Festino di Santa Rosalia peaks on the evening of 14 July with a procession along the Cassaro.",
      "**Autumn (September–November)** — warm in September and October, with the sea still pleasant; rain becomes more frequent later.",
      "**Winter (December–February)** — mild compared with most of Italy and quieter, though some days are wet; good for museums and food.",
    ),
    p("For how Sicily compares with other Italian regions through the year, see [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 16 ———
    h2("Palermo without a car"),
    p("For a city stay, a car isn't needed and can be a burden. The historic centre is a limited traffic zone with camera-controlled gates, streets are narrow and busy, and parking is scarce. You can walk between the main sights, take buses to Mondello and Monreale, and use trains for Cefalù and other coastal towns. Organised excursions cover Segesta, Erice and other places that are awkward by public transport."),
    p("A rental car becomes useful for a wider Sicily itinerary — the west coast, the Madonie mountains, the interior or the south-east — where public transport is limited. Pick it up when you leave Palermo, not on arrival. Before you drive, read our guide to [driving in Italy](/guides/driving-in-italy), which covers ZTLs and Sicilian roads."),

    // ——— 17 ———
    h2("Practical safety and awareness"),
    p("Palermo is a large city, and the usual city-travel precautions apply:"),
    ul(
      "**Keep valuables secure** — use a bag that closes, and keep your phone and wallet out of back pockets, especially in markets, on buses and in crowds.",
      "**Keep documents safe** — carry a copy of your passport and leave the original in your accommodation's safe if you don't need it.",
      "**Use official transport** — take taxis from ranks or booked by app or phone, and use licensed transfer companies.",
      "**Stay aware in crowded places** — markets, festivals and busy streets are where bag theft is most likely.",
      "**Check your accommodation's location** — look at the street on a map before booking, and ask the host about arriving at night.",
      "**Follow local rules** — respect dress codes in churches, the ZTL if you drive, and bathing rules at beaches.",
    ),
    p("None of this is specific to Palermo; it's what you'd do in any large European city."),

    // ——— 18 ———
    h2("Palermo for different travellers"),
    ul(
      "**First-time visitors** — follow the two- or three-day plan, book the Palazzo dei Normanni and leave time for a market lunch.",
      "**Couples** — stay in the Kalsa or near Piazza Marina, walk the seafront at sunset and see a performance at the Teatro Massimo.",
      "**Solo travellers** — street food and market counters make eating alone easy, and guided walks are a good way to meet people.",
      "**Families** — the Orto Botanico, the seafront, Mondello's beach and street food all work well with children; use taxis to save walking in the heat.",
      "**Food travellers** — visit all three markets, take a street-food tour and try pasta con le sarde and a Palermo cassata.",
      "**History and culture travellers** — pair the Arab-Norman monuments with Monreale and Cefalù, Palazzo Abatellis and the Museo Salinas.",
      "**Beach-focused travellers** — base yourself partly in Mondello or Cefalù, and come into the city for sightseeing.",
      "**Budget travellers** — street food, the markets, free church visits and walking keep costs down; stay near the station or in the Albergheria.",
      "**Using Palermo as a Sicily base** — it works for the north-west; for the east (Catania, Etna, Syracuse), moving on is easier than long return trips.",
    ),

    // ——— 19 ———
    h2("Common first-time mistakes"),
    ol(
      "**Trying to see all of Sicily from Palermo.** The island is large; Syracuse, Etna and the south-east are better visited from the east.",
      "**Overloading a two-day itinerary.** Choose the essentials and leave time to walk.",
      "**Confusing Palermo specialities with all Sicilian food.** Pasta alla Norma is from Catania; arancine differ from city to city.",
      "**Ignoring market logistics.** Go in the morning, carry some cash and keep valuables secure.",
      "**Renting a car for the city.** You don't need one in Palermo, and the ZTL can bring fines.",
      "**Not checking attraction information.** The Palazzo dei Normanni can close at short notice, and restoration can affect the Cappella Palatina.",
      "**Relying on outdated transport schedules.** Rail works and bus changes are frequent; check before each trip.",
      "**Not allowing time for meals.** Street food and long lunches are part of the visit.",
      "**Choosing accommodation without considering transport.** Check the distance to the sights, the station and the airport link.",
      "**Assuming every day trip is easy without a car.** Cefalù is simple by train; Segesta and Erice are not.",
    ),

    // ——— 20 ———
    h2("Planning checklist"),
    {
      type: "checklist",
      id: "palermo-markets-monuments",
      groups: [
        {
          title: "Before booking",
          items: ["Choose your neighbourhood", "Decide how long to stay", "Decide whether you need day trips or a car"],
        },
        {
          title: "Before departure",
          items: ["Check attraction information and notices", "Book the Palazzo dei Normanni and Teatro Massimo if needed", "Check the airport train or bus", "Check current rail and bus information for day trips"],
        },
        {
          title: "During the trip",
          items: ["Allow flexible time", "Check same-day transport", "Keep valuables secure in markets", "Leave time for food and markets"],
        },
      ],
    },
    p("The visiting rules, transport information and closures in this guide were checked on official sites in September 2026. They change often: confirm them before you travel. To fit Palermo into a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Is Palermo worth visiting?", answer: "Yes. It has some of Italy's most distinctive monuments, including the Arab-Norman buildings on the UNESCO World Heritage List, historic markets and a strong street-food culture, all in a walkable historic centre." },
    { question: "How many days do you need in Palermo?", answer: "Two to three days suits a first visit: two for the main sights, markets and food, three to add a museum and a half-day in Monreale. Four or five days leaves time for Cefalù or Segesta." },
    { question: "What is Palermo famous for?", answer: "Its Arab-Norman monuments such as the Cappella Palatina and the Cathedral, its markets — Ballarò, Capo and Vucciria — its street food, Baroque squares like the Quattro Canti and the Teatro Massimo opera house." },
    { question: "Is Palermo walkable?", answer: "Yes. The historic centre is flat and compact, and parts of Via Maqueda and Corso Vittorio Emanuele are pedestrianised. Use buses or taxis for Mondello, Monreale and the outer districts." },
    { question: "Where should first-time visitors stay in Palermo?", answer: "In the historic centre around the Quattro Canti and Via Maqueda, in the Kalsa for museums and the seafront, or in the Politeama–Libertà area for a calmer base. Check the exact street before booking." },
    { question: "What food is Palermo famous for?", answer: "Street food above all: arancine, panelle, crocchè, sfincione and pani ca' meusa. Also pasta con le sarde, cassata and frutta martorana, alongside Sicily-wide favourites such as cannoli and caponata." },
    { question: "What are the main markets in Palermo?", answer: "Ballarò in the Albergheria, the largest; the Capo, near the Cathedral and Teatro Massimo; and the Vucciria near Piazza San Domenico, smaller by day and busy in the evening." },
    { question: "Do you need a car in Palermo?", answer: "Not for the city. The centre is walkable and a limited traffic zone, and buses, trains and taxis cover the rest. A car is useful for a wider Sicily trip or places such as Segesta and Erice." },
    { question: "How do you get from Palermo Airport to the city?", answer: "By the Trinacria Express train to Palermo Centrale, about 45 minutes according to the Comune, by the Prestia e Comandè bus, or by taxi. Check for rail works before you travel." },
    { question: "Can you visit Monreale from Palermo?", answer: "Yes — it's a half-day trip. AMAT bus 389 runs from Piazza Indipendenza, though the service was interrupted at times in 2026; taxis and tours are alternatives." },
    { question: "Can you visit Cefalù from Palermo?", answer: "Yes. Regional trains run along the coast from Palermo Centrale, making Cefalù one of the easiest day trips by public transport." },
    { question: "Is Palermo a good base for exploring Sicily?", answer: "For the north-west, yes: Monreale, Cefalù, Segesta and Erice are all within reach. For Catania, Etna and Syracuse, it's easier to move on to the east of the island." },
    { question: "Is Palermo expensive?", answer: "It's generally more affordable than many northern Italian cities. Street food and markets are inexpensive, and many churches are free, though some monuments, tours and central accommodation cost more in peak season." },
    { question: "What should you not miss in Palermo?", answer: "The Cappella Palatina, the Cathedral, the Martorana, the Quattro Canti and Piazza Pretoria, a market such as Ballarò, and a street-food lunch — plus Monreale if you have a third day." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "UNESCO — Arab-Norman Palermo and the Cathedral Churches of Cefalù and Monreale", url: "https://whc.unesco.org/en/list/1487/", note: "World Heritage listing" },
    { label: "Palazzo Reale — Fondazione Federico II", url: "https://www.federicosecondo.org/visita/", note: "tickets, opening and notices" },
    { label: "Palermo Cathedral", url: "https://www.cattedrale.palermo.it/", note: "opening and the monumental areas" },
    { label: "Teatro Massimo — guided tours", url: "https://www.teatromassimo.it/en/visite-guidate/", note: "tours and programme" },
    { label: "Comune di Palermo — tourism portal", url: "https://turismo.comune.palermo.it/", note: "sights, museums and arrivals" },
    { label: "Visit Sicily", url: "https://www.visitsicily.info/en/", note: "regional tourism and events" },
    { label: "AMAT Palermo", url: "https://www.amat.pa.it/", note: "buses, trams and tickets" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/", note: "airport train and regional services" },
    { label: "Palermo airport", url: "https://www.aeroportodipalermo.it/", note: "flights and connections" },
  ],
};
