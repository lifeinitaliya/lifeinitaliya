import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "Visiting the Dolomites: A First-Timer's Guide" — the rebuilt version
// of the site's original short Dolomites guide, kept at its established URL.
// Access rules (Lago di Braies, the Tre Cime toll road, Alpe di Siusi, Passo
// Gardena), the Südtirol Guest Pass, the Val di Fassa Guest Card, Italian ski
// rules and the UNESCO listing were checked on official sources in September
// 2026. Lift seasons, timetables, prices and road conditions change every
// year and are pointed to official sources rather than stated as fixed.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/visiting-the-dolomites";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const visitingTheDolomites: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What are the Dolomites?"),
    answer("**The Dolomites are a mountain range in north-eastern Italy, not a town or a single resort.** They spread across several valleys and three regions, each with its own villages, lifts, roads and even languages. For a first trip, the key decisions are **which area to base yourself in**, **which season you're travelling in** and **whether you'll drive**. Pick one or two bases, match your plans to the season, and leave room for the weather — that matters more than trying to see every famous viewpoint."),
    p("The pale, jagged peaks you see in photos rise from green valleys and high pastures. What makes planning confusing is that the famous places — Seceda, the Tre Cime, Lago di Braies, the Alpe di Siusi — sit in different valleys, sometimes a long drive apart, and some have access rules that change with the season. This guide explains how the region fits together, so you can choose where to go, when, for how long and how to get around."),
    p("In 2009 UNESCO inscribed the Dolomites on the World Heritage List. The listed site is made up of nine separate mountain areas covering 141,903 hectares, with 18 peaks above 3,000 metres, recognised both for the landscape and for its geology. The World Heritage areas are the mountains themselves; the valleys, villages and roads around them are where you'll actually stay."),

    // ——— 2 ———
    h2("Where are the Dolomites?"),
    p("The range lies in the north-east of Italy, south of the Austrian border. It spans five provinces: **Bolzano** (South Tyrol) and **Trento** (Trentino), which together form the Trentino-Alto Adige/Südtirol region; **Belluno** in the Veneto; and **Pordenone** and **Udine** in Friuli Venezia Giulia. Most first-time visitors spend their time in South Tyrol, Trentino and the Belluno area."),
    {
      type: "facts",
      title: "The Dolomites at a glance",
      rows: [
        { label: "Regions", value: "Trentino-Alto Adige/Südtirol, Veneto, Friuli Venezia Giulia" },
        { label: "UNESCO status", value: "World Heritage Site since 2009 (nine component areas)" },
        { label: "Languages", value: "Italian and German in South Tyrol, Italian in Trentino and the Veneto, and Ladin in several valleys" },
        { label: "Main rail gateways", value: "Bolzano, Bressanone, Brunico and Dobbiaco in South Tyrol; Trento; Calalzo di Cadore for Cortina" },
        { label: "Nearby airports", value: "Venice, Treviso, Verona, Innsbruck and Munich are common gateways" },
        { label: "Emergency number", value: "112" },
      ],
    },
    p("Culture changes as you cross the valleys. South Tyrol belonged to Austria until after the First World War, and German is the first language for most people there; road signs are bilingual, so Ortisei is also St. Ulrich and Lago di Braies is also Pragser Wildsee. In Val Gardena, Val Badia, Val di Fassa, Livinallongo and Ampezzo, many people also speak Ladin, a language of its own. Cortina d'Ampezzo is in the Veneto and feels more Italian again."),
    p("For many visitors the Dolomites are one part of a longer trip. [Verona](/cities/verona-first-visit) and [Venice](/cities/venice-quieter-neighbourhoods) are the most natural cities to combine with them, and [Milan](/cities/milan-beyond-the-duomo) or [Lake Como](/travel/lake-como-weekend) work too if you're coming from the west."),

    // ——— 3 ———
    h2("Which part of the Dolomites should you visit first?"),
    p("There's no single \"best\" area. Each valley suits a slightly different trip, and the right one depends on what you want to do and how you're travelling. These are the areas most first-time visitors choose between."),
    table(
      ["Area", "Useful for", "Transport considerations", "Typical trip style"],
      [
        ["Val Gardena (Ortisei, Santa Cristina, Selva)", "Seceda, the Alpe di Siusi, lifts, walks of all levels", "Buses from Bolzano and nearby stations; good local buses and lifts in season", "Active holiday with plenty of lift-assisted walks"],
        ["Alpe di Siusi", "Gentle high-pasture walks, families, views of Sassolungo and the Sciliar", "Cable car from Siusi; private cars restricted in the day in season", "Slow, scenic, low-stress"],
        ["Alta Badia (Corvara, La Villa, San Cassiano)", "Walks, lifts, food, Ladin culture", "Buses and seasonal lifts; well placed for the passes by car", "Relaxed village base between big passes"],
        ["Cortina d'Ampezzo", "A lively town, dramatic peaks, Lagazuoi, access to Tre Cime", "Direct buses from Venice; buses to Dobbiaco and its railway", "Town base with good shops and restaurants"],
        ["Val di Fassa (Canazei, Campitello)", "Lifts, the Sella and Marmolada area, family trips", "Buses from Trento and Bolzano; Guest Card covers local buses", "Practical base with many lifts"],
        ["Alta Pusteria (Dobbiaco, San Candido, Sesto)", "Lago di Braies, Tre Cime, flatter valley cycling", "On the Val Pusteria railway, with buses to the lakes and valleys", "Good for public transport and families"],
        ["Val di Funes", "Quiet villages below the Odle peaks, gentle walks", "Buses from Bressanone and Chiusa; a car is easier", "Peaceful, rural, short stays"],
      ],
      "Characteristics, not a ranking. Lift and bus services vary by season.",
    ),
    h3("Val Gardena"),
    p("The valley of **Ortisei**, **Santa Cristina** and **Selva** is the most popular first base, and it's easy to see why: lifts climb straight from the villages to Seceda, the Alpe di Siusi and the Sella group, so you can reach high places without long hikes. Ortisei is the largest village, with a pedestrian centre and a tradition of woodcarving. It's busy in high summer, and it suits people who want lots of choice within a short distance."),
    {
      type: "image",
      src: `${IMG}/passo-sella-sassolungo-road.webp`,
      alt: "The Sassolungo and Sassopiatto peaks rising above green slopes, with a mountain road crossing the pass below",
      caption: "Sassolungo and Sassopiatto from Passo Sella, at the head of Val Gardena.",
      credit: unsplash("Domenico Adornato", "domix_629"),
    },
    h3("Alpe di Siusi"),
    p("Above Val Gardena, the **Alpe di Siusi** (Seiser Alm) is a vast high pasture that its tourist board describes as the largest in Europe, at around 56 km². It's part of the Sciliar-Catinaccio Nature Park, with wide, rolling paths and views of Sassolungo and the Sciliar — ideal for easy walks, families and anyone who wants big scenery without steep climbs. It is also one of the places with the strictest access rules (see below)."),
    h3("Alta Badia"),
    p("East of the Sella group, **Corvara**, **La Villa** and **San Cassiano** are quieter villages with a strong Ladin identity and a reputation for good food. Lifts lead onto high plateaus with gentle walks, and the valley sits between several passes, which makes it a good base if you want to combine Val Gardena, Cortina and the Sella roads."),
    h3("Cortina d'Ampezzo"),
    p("**Cortina** is a real town rather than a village, with a busy pedestrian street, shops, restaurants and a long history as a mountain resort. It's surrounded by some of the most dramatic peaks in the range, has lifts to places such as the Cinque Torri and Lagazuoi, and is within reach of the Tre Cime. Direct buses from Venice make it one of the easiest areas to reach without a car."),
    {
      type: "image",
      src: `${IMG}/cortina-church-tower.webp`,
      alt: "The tall bell tower and church in the centre of Cortina d'Ampezzo, with hotels, people walking and mountains behind",
      caption: "The centre of Cortina d'Ampezzo: a town, not a village, with restaurants and shops within walking distance.",
      credit: unsplash("Elena Crobu", "elenacrobu"),
    },
    h3("Val di Fassa"),
    p("In Trentino, **Canazei** and **Campitello di Fassa** sit below the Sella group and near the Marmolada, the range's highest peak. The valley has a dense network of lifts and a practical, family-friendly feel. Guests at participating accommodation receive the Val di Fassa Guest Card, which includes local public transport."),
    h3("Alta Pusteria and Val di Funes"),
    p("In the north-east, **Dobbiaco**, **San Candido** and the Val di Sesto are on the Val Pusteria railway and close to Lago di Braies and the Tre Cime — a strong choice if you'll rely on public transport. To the west, **Val di Funes** is small and quiet, famous for the church of Santa Maddalena below the Odle peaks, and better for a peaceful night or two than as a base for the whole range."),
    {
      type: "image",
      src: `${IMG}/val-di-funes-santa-maddalena.webp`,
      alt: "The village and church of Santa Maddalena in green meadows, below the jagged grey Odle peaks in Val di Funes",
      caption: "Santa Maddalena in Val di Funes, below the Odle group.",
      credit: unsplash("Krzysztof Kowalik", "kowalikus"),
    },

    // ——— 4 ———
    h2("How many days do you need?"),
    p("The Dolomites reward slowness. Distances look short on a map, but mountain roads are winding, lifts have operating hours and the weather can change a plan. As a rule, give each base at least three nights."),
    table(
      ["Duration", "What is realistic", "Planning approach"],
      [
        ["2–3 days", "One area, a few lift-assisted walks and viewpoints, time in a village", "One base, such as Val Gardena or Cortina; avoid long drives"],
        ["4–5 days", "One base with day trips, or two nearby areas; a full-day hike if the weather allows", "One or two bases; keep a flexible day for bad weather"],
        ["7+ days", "Several areas, longer hikes, a night in a mountain hut", "Two or three bases on different sides of the range"],
      ],
    ),
    p("If the Dolomites are one stop on a wider Italy trip, three or four nights in one area is often the best compromise. Trying to see Seceda, the Tre Cime and Braies on consecutive days from one base usually means more time in the car than on the trails."),

    // ——— 5 ———
    h2("Best time to visit the Dolomites"),
    p("The Dolomites have two main seasons — summer for hiking and winter for skiing — with quieter periods in between when many lifts, huts and some hotels close. Which is \"best\" depends entirely on what you want to do."),
    table(
      ["Season", "Main activities", "Access considerations", "What to expect"],
      [
        ["Spring (April–May)", "Valley walks, cycling, quieter villages", "Many lifts and huts closed between seasons; snow lingers high up", "Low season; check what's open"],
        ["Summer (late June–August)", "Hiking, lifts, huts, scenic drives", "Access rules at the busiest sites; roads and car parks busy", "Peak season; warm days, afternoon storms are common"],
        ["Early autumn (September–early October)", "Hiking, clearer views, autumn colours", "Lifts and huts start closing through September and October", "Often calmer than August"],
        ["Late autumn (late October–November)", "Valley walks, quiet towns", "Most lifts and many hotels closed; first snow possible", "Off-season"],
        ["Winter (December–April)", "Skiing, snowshoeing, winter walks", "Winter tyres or chains where required; some passes affected by snow", "Ski season; busiest around holidays"],
      ],
      "Exact lift and hut dates change every year and vary by area.",
    ),
    p("For a first summer trip, **late June to mid-September** is the core window, when most lifts run, most high trails are clear of snow and the huts are open. September often brings more settled weather and fewer people than August, but services start to wind down. Our guide to the [best time to visit Italy](/guides/best-time-to-visit-italy) shows how the mountains fit into the rest of the year."),

    // ——— 6 ———
    h2("The Dolomites in summer"),
    p("Summer is the classic first visit: green pastures, open lifts and trails for every level. Most lifts run from late May or June until September or October, with dates that differ by lift — the Alpe di Siusi cable car, for example, runs from 22 May to 2 November in 2026. Check each lift's own website for the current season and hours."),
    ul(
      "**Hiking** — from flat valley paths to high routes. Lifts let you start high, which makes great scenery accessible without long climbs.",
      "**Mountain huts** — for lunch on a walk or a night up high (see below).",
      "**Scenic drives** — the high passes around the Sella group, Passo Giau and Passo Falzarego.",
      "**Crowds** — July and August are the busiest months. Start early, especially at famous viewpoints, and book accommodation well ahead.",
      "**Weather** — summer mornings are often clear, with cloud and thunderstorms building in the afternoon. Plan high walks for the morning.",
    ),
    {
      type: "image",
      src: `${IMG}/campitello-di-fassa-lift.webp`,
      alt: "Cable car cabins crossing a valley towards a massive grey rock wall above Campitello di Fassa",
      caption: "Lifts above Campitello di Fassa. In summer they turn high trails into half-day outings.",
      credit: unsplash("Hans Ott", "hansott"),
    },

    // ——— 7 ———
    h2("The Dolomites in winter"),
    p("Winter changes everything. The same valleys become ski resorts, with lifts linking village to village and the high passes busy with skiers rather than hikers. The **Dolomiti Superski** pass covers 12 ski areas, from Cortina and Alta Badia to Val Gardena and Val di Fassa, and the **Sellaronda** is a classic ski circuit around the Sella group."),
    ul(
      "**Season** — skiing usually runs from late November or December into April, but opening dates depend on the area, altitude and snow each year.",
      "**Rules on the slopes** — Italian law requires skiers to have third-party liability insurance, and under-18s must wear a helmet. Insurance can usually be bought with the ski pass.",
      "**Roads** — winter tyres or chains on board are required where signs say so, and that's common in the mountains. Passes can close temporarily after heavy snow.",
      "**Accommodation** — hotels fill up around Christmas, New Year and the February school holidays. Some hotels set minimum stays in peak weeks.",
      "**Not only skiing** — snowshoeing, winter walking paths, sledging and cross-country skiing are good options for non-skiers.",
    ),
    {
      type: "image",
      src: `${IMG}/alpe-di-siusi-winter.webp`,
      alt: "Snow-covered pastures and wooden huts on the Alpe di Siusi, below the Sciliar massif in winter",
      caption: "The Alpe di Siusi in winter, below the Sciliar.",
      credit: unsplash("Giandomenico Pozzi", "gdpozzi"),
    },
    p("We don't predict snow conditions: they vary from season to season. Check the ski areas' own websites and the avalanche bulletin before heading off-piste or on winter hikes."),

    // ——— 8 ———
    h2("How to get to the Dolomites"),
    p("There's no airport inside the range, so most visitors fly to a nearby city and continue by train, bus or car. Choose your gateway according to your base."),
    h3("By train and bus"),
    ul(
      "**For Val Gardena, the Alpe di Siusi and Val di Funes** — take a train on the main line through Bolzano, then a regional bus into the valleys. Bolzano is on the railway from Verona to the Brenner Pass.",
      "**For Alta Pusteria, Braies and the Tre Cime** — take the Val Pusteria railway to Brunico, Dobbiaco or San Candido, then local buses.",
      "**For Val di Fassa** — take buses from Trento, or from Bolzano to Vigo di Fassa.",
      "**For Cortina** — Cortina Express runs direct buses from Venice airport, Mestre and Treviso. Alternatively, take a train to Calalzo di Cadore and a Dolomiti Bus to Cortina.",
    ),
    p("Timetables change between summer, winter and the quiet seasons, so check the operators before you travel. See our guides to [Italy by train](/guides/italy-by-train) and [getting between Italian cities](/guides/getting-between-italian-cities) for the main rail network, and [airport transfers](/guides/italy-airport-transfers) for getting out of the arrival airport."),
    h3("By car"),
    p("Driving from Venice, Verona or Innsbruck is straightforward on motorways, and the mountain roads are well built. The last stretch into the valleys and over the passes is slower than it looks. Read [driving in Italy](/guides/driving-in-italy) for tolls, road rules and rental advice."),

    // ——— 9 ———
    h2("Do you need a car?"),
    p("Not necessarily. A car makes it easier to link valleys, reach trailheads early and change plans with the weather. Public transport works well if you choose the right base and travel in the main seasons."),
    {
      type: "compare",
      title: "Car or public transport?",
      columns: [
        { title: "A car helps if…", items: ["You want to combine several areas in one trip", "You want early starts at popular trailheads", "You're travelling outside the main seasons, when buses are fewer", "You're staying somewhere remote, such as a farm stay"] },
        { title: "Public transport works if…", items: ["You stay in a well-connected village for several nights", "Your plans focus on lifts and walks from one valley", "Your accommodation includes a guest pass", "You'd rather avoid mountain roads and busy car parks"] },
      ],
    },
    p("In South Tyrol, participating accommodation includes the **Südtirol Guest Pass** in the price. It covers regional trains, regional and city buses and selected cable cars during your stay, but not long-distance trains. In Val di Fassa, the **Val di Fassa Guest Card** includes Trentino Trasporti buses. Ask your accommodation before you book: a pass can make a car unnecessary."),
    p("If you drive, expect hairpin bends, steep gradients and plenty of cyclists and motorcyclists on the passes in summer. Car parks at popular trailheads fill early, and several major sites restrict private cars, as the next section explains."),
    {
      type: "image",
      src: `${IMG}/passo-giau-road.webp`,
      alt: "A mountain road winding across green slopes and rocks below jagged peaks near Passo Giau",
      caption: "The road near Passo Giau, between Cortina and the Val Fiorentina.",
      credit: unsplash("Luca Cavallin", "lucavallin"),
    },

    // ——— 10 ———
    h2("Access rules at the busiest places"),
    p("To manage traffic and protect fragile landscapes, several famous places limit cars during the busiest months. These were the rules in 2026; they are reviewed each year, so check the official pages before you go."),
    table(
      ["Place", "What applies (2026)", "Alternatives"],
      [
        ["Lago di Braies", "From 1 July to 15 September, 9:00–16:00, access to the valley is only by public transport, on foot, by bike or with an online booking or valid permit", "Bus; arrive before 9:00 or after 16:00 (parking not guaranteed)"],
        ["Tre Cime (Rifugio Auronzo)", "Driving the toll road to the car park requires an online booking made in advance; €40 per car in 2026. The road is generally open from late May to late October, weather permitting", "Check local bus options for your dates, or reach the area on foot from other valleys"],
        ["Alpe di Siusi", "The road is closed to private cars from 9:00 to 17:00 while the cable car operates; parking must be booked online from 29 June 2026", "Cable car from Siusi; bus line 10"],
      ],
      "Rules and prices checked on official sites in September 2026.",
    ),
    p("Visiting **Lago di Braies** itself is free, but visitors are asked not to swim, as it lies in a nature park. At the **Tre Cime**, the toll road may close for safety reasons in bad weather. On the **Alpe di Siusi**, the road is open all day in the quiet seasons, when the cable car is closed."),
    p("The Province of Bolzano has also begun a digital test phase for a planned traffic-calming scheme at **Passo Gardena**, starting in September 2026. There were no physical restrictions in 2026, but further measures on the Sella passes have been discussed for future summers. Other popular spots have introduced local crowd-management measures too, so check the latest before relying on a plan."),
    important("Rules at Braies, the Tre Cime and the Alpe di Siusi are set each year. Book early for July and August, and always check the official page for the current year before you travel.", "Check before you go"),

    // ——— 11 ———
    h2("Where to stay in the Dolomites"),
    p("Choose your base by how you'll get around and what you want to do. Moving once during a week is fine; moving every night isn't."),
    ul(
      "**Ortisei** — the liveliest village in Val Gardena, with lifts to Seceda and the Alpe di Siusi and good bus links. Good for first-timers without a car.",
      "**Selva di Val Gardena** — at the head of the valley, close to the Sella passes and lifts. Good for active trips and winter skiing.",
      "**Corvara and San Cassiano** — quieter Alta Badia villages with good restaurants. Good for a relaxed base between the passes.",
      "**Cortina d'Ampezzo** — a town with more choice for shopping and dining, and direct buses from Venice. Good if you want a town atmosphere.",
      "**Canazei** — the main village of Val di Fassa, with many lifts. Good for families and for the Guest Card transport.",
      "**Dobbiaco or San Candido** — on the Val Pusteria railway. Good for Braies, the Tre Cime and car-free trips.",
    ),
    p("Accommodation ranges from large hotels to family-run guesthouses and farm stays, many offering half board. Most municipalities charge a nightly tourist tax, usually paid at the accommodation, with rates depending on the area and type of accommodation. For budgeting, see [how much a trip to Italy costs](/guides/italy-trip-cost)."),

    // ——— 12 ———
    h2("What to see on a first trip"),
    p("Rather than a checklist of famous viewpoints, think in terms of experiences: a high ridge, a lake, a pasture walk, a pass and a village. These places cover them well."),
    h3("Seceda"),
    p("Above Ortisei, a lift climbs to Seceda, where the grass slopes end abruptly at the jagged Odle ridge — one of the most photographed views in the range. From the top station, easy paths follow the ridge with wide views. It gets very busy on summer days; the first lifts of the morning are calmer."),
    h3("Tre Cime di Lavaredo"),
    p("The three rock towers of the Tre Cime are the symbol of the Dolomites. A popular loop walk circles them on well-trodden paths from Rifugio Auronzo, but it starts at over 2,300 metres, so the weather and your fitness still matter. Plan the access in advance (see above)."),
    {
      type: "image",
      src: `${IMG}/tre-cime-dreizinnenhuette.webp`,
      alt: "The three rock towers of the Tre Cime di Lavaredo rising above a rocky plateau, with a mountain hut on the left",
      caption: "The north faces of the Tre Cime, with the Dreizinnenhütte (Rifugio Locatelli) on the left.",
      credit: unsplash("Jarco Penning", "jarcopenning"),
      wide: true,
    },
    h3("Lago di Braies"),
    p("A green lake with wooden boats and a boathouse, below the steep Croda del Becco. The level path around the shore is one of the easiest walks in the Dolomites. It's very busy in summer; early morning and late afternoon are the calmest times, subject to the access rules."),
    {
      type: "image",
      src: `${IMG}/lago-di-braies-boathouse.webp`,
      alt: "A wooden boathouse and rowing boats on the calm green water of Lago di Braies, with mountains reflected in it",
      caption: "Lago di Braies (Pragser Wildsee), in the Fanes-Sennes-Braies Nature Park.",
      credit: unsplash("Samuele Errico Piccarini", "samuele_piccarini"),
    },
    h3("Alpe di Siusi"),
    p("Rolling pastures, wooden huts and wide views of Sassolungo and the Sciliar. It's perfect for gentle walks and for families, and lovely in both summer and winter."),
    h3("The high passes"),
    p("Passo Gardena, Passo Sella, Passo Pordoi and Passo Campolongo encircle the Sella group, and Passo Giau and Passo Falzarego lie near Cortina. Each has viewpoints, huts and trailheads, and several have lifts. Even without hiking, a day on the passes shows the scale of the range."),
    h3("Val di Funes"),
    p("A quiet valley with one of the Dolomites' most recognisable views: the church of Santa Maddalena with the Odle peaks behind. Stay for a night, or combine it with Bressanone."),

    // ——— 13 ———
    h2("Hiking for first-time visitors"),
    p("Dolomites trails range from flat paths suitable for pushchairs to exposed routes that need mountaineering experience. The difference matters: a route that looks short can involve steep ground, loose scree or sections with fixed cables."),
    ul(
      "**Choose the right level** — easy walks follow wide paths or forest roads. Mountain trails are marked in red and white and numbered, and can be steep and rocky. A **via ferrata** (a route with fixed cables and ladders) needs a harness, a helmet, a via ferrata set and experience, or a certified mountain guide.",
      "**Footwear** — hiking boots or shoes with a good grip, even for popular walks. Trainers slip on scree and wet rock.",
      "**Weather** — check the forecast the evening before and in the morning. Start early, and turn back if storms build.",
      "**Altitude** — many walks start above 2,000 metres, where you'll tire faster and the temperature is much lower than in the valley.",
      "**Navigation** — carry a map or an offline map app, and don't rely on mobile signal.",
      "**Trail conditions** — snow can linger on high trails into early summer, and landslides occasionally close paths. Ask at the local tourist office.",
      "**Etiquette** — stay on marked paths, close gates, take your rubbish home and don't pick flowers. Many areas are protected.",
    ),
    important("In an emergency, call 112. Tell someone your route, carry water, a charged phone and a warm layer, and consider insurance that covers mountain rescue.", "Safety"),
    p("If you're new to mountain walking, a lift-assisted route on a high plateau — the Alpe di Siusi, the Seceda ridge or the Pralongià plateau in Alta Badia — is a good introduction. Local mountain guides and tourist offices can suggest routes and organise guided walks."),

    // ——— 14 ———
    h2("Mountain huts and rifugi"),
    p("A **rifugio** is a mountain hut, often reachable only on foot or by lift, that serves hot meals to walkers and usually has simple rooms or dormitories. Many are run by families or by alpine clubs such as the CAI (Club Alpino Italiano). They're not hotels: rooms are basic, bathrooms are often shared, and the main attraction is waking up in the mountains."),
    ul(
      "**Season** — high huts usually open from around mid-June to late September; lower huts and those near lifts may open longer, and some open in winter. Dates vary by hut.",
      "**Booking** — for an overnight stay, book ahead, especially in July and August. Many huts take bookings directly; the CAI also has an online booking platform.",
      "**Food** — hearty local dishes at lunch; half board (dinner, bed and breakfast) is the usual formula for overnight stays.",
      "**Payment** — card acceptance varies at remote huts, so carry some cash.",
      "**What to bring** — a sleeping-bag liner (often required), a small towel, toiletries, a head torch and earplugs.",
    ),
    {
      type: "image",
      src: `${IMG}/rifugio-lagazuoi.webp`,
      alt: "Rifugio Lagazuoi, a large wooden-clad mountain hut on a rocky summit, surrounded by grey peaks",
      caption: "Rifugio Lagazuoi, above Passo Falzarego near Cortina, reached by cable car or on foot.",
      credit: unsplash("Tim Cheung", "timtimbo"),
    },
    p("Before you set out, check that the hut is open, how long the approach takes, and when the last lift runs if you're relying on one to get back down."),

    // ——— 15 ———
    h2("The Dolomites without hiking"),
    p("You don't have to be a hiker to love the Dolomites. Lifts and roads bring the scenery within reach of anyone."),
    ul(
      "**Scenic lifts** — ride up to Seceda, the Alpe di Siusi or Lagazuoi for the views and lunch at a hut.",
      "**Villages** — stroll through Ortisei, Cortina or Corvara, visit a church or two, and enjoy a coffee in the square.",
      "**Viewpoints by car** — many passes have car parks with views over the peaks.",
      "**Lakes** — the level walk around Lago di Braies, and other lakeside paths in the valleys.",
      "**History** — the First World War front ran through these mountains, and open-air sites around Lagazuoi and the Cinque Torri preserve trenches and tunnels.",
      "**Museums and culture** — local museums in the valleys explain Ladin language, woodcarving and mountain life.",
      "**Food** — long lunches at mountain huts are part of the experience.",
    ),

    // ——— 16 ———
    h2("What to pack"),
    p("Mountain weather varies more than in the cities, even within one day. Pack in layers."),
    table(
      ["Season", "Essentials"],
      [
        ["Summer", "Hiking shoes, a waterproof jacket, a warm fleece or down layer, sun cream, a hat, sunglasses, a small backpack and a water bottle"],
        ["Spring and autumn", "The summer list, plus a warmer jacket, gloves and a hat for cold mornings"],
        ["Winter", "Warm waterproof layers, gloves, a hat, sunglasses or goggles, sun cream and winter boots with grip"],
        ["All seasons", "A power bank, offline maps, a small first-aid kit, some cash and a copy of your insurance details"],
      ],
    ),
    p("Our [Italy travel planning checklist](/guides/italy-travel-planning-checklist) covers documents, money and the rest of your packing."),

    // ——— 17 ———
    h2("Food and local specialties"),
    p("Dolomites food reflects the region's mix of cultures, and it's quite different from what most people think of as \"Italian food\"."),
    ul(
      "**South Tyrol** — Alpine and Austrian influences: **canederli** (Knödel, bread dumplings), **Speck Alto Adige** (a smoked, cured ham with protected status), **Schlutzkrapfen** (half-moon ravioli filled with spinach and cheese), apple strudel and **Kaiserschmarrn** (a torn, caramelised pancake).",
      "**Trentino** — polenta, mountain cheeses such as Puzzone di Moena, and hearty mushroom and game dishes.",
      "**Cortina and the Ampezzo valley** — **casunziei**, pasta filled with beetroot, served with butter and poppy seeds.",
      "**Ladin valleys** — dishes such as **turtres**, fried pastries with savoury fillings, often served at huts and family restaurants.",
    ),
    p("Lunch at a mountain hut is part of a Dolomites day. In the evening, many hotels offer half board, which is convenient if your village has few restaurants."),

    // ——— 18 ———
    h2("Common first-time mistakes"),
    ul(
      "**Trying to cover too much territory.** Driving between Seceda, Braies and the Tre Cime in two days leaves little time to enjoy any of them.",
      "**Underestimating the mountain weather.** Sunny mornings can end in afternoon storms, and it's much colder at altitude.",
      "**Assuming everything is open all year.** Lifts, huts and some roads work to seasonal timetables.",
      "**Not checking access rules.** Braies, the Tre Cime and the Alpe di Siusi all have rules that can stop you at the gate.",
      "**Treating the mountains like a city.** Distances take longer, and trails need proper shoes and preparation.",
      "**Choosing accommodation without thinking about transport.** A cheap room far from a bus route can cost you hours every day.",
      "**Following one fixed itinerary regardless of the season.** A summer plan doesn't work in winter, and vice versa.",
    ),

    // ——— 19 ———
    h2("Sample planning frameworks"),
    p("These aren't fixed itineraries — they're frameworks to adapt to the season, the weather and your interests. Check timetables and access rules for your dates."),
    h3("3 days: one compact area"),
    p("Base yourself in **Val Gardena**. Spend one day on the Alpe di Siusi, one at Seceda and on the ridge walks, and the third on the Sella passes by car or bus, or in Ortisei. Swap days around according to the forecast."),
    h3("5 days: a wider view"),
    p("Stay in **Val Gardena or Alta Badia** for three nights and **Cortina or Alta Pusteria** for two. From the first base, visit Seceda, the Alpe di Siusi and the passes; from the second, the Tre Cime and Lago di Braies, remembering to book access in summer."),
    h3("7 days: several bases"),
    p("Combine **Val di Funes** (one night), **Val Gardena or Alta Badia** (three nights) and **Cortina or Alta Pusteria** (three nights). Add a longer hike, a night in a rifugio, or a rest day in a village. Arrive from Verona or Bolzano and leave towards Venice, or the other way round."),
    tip("Keep one flexible day in every plan. If the forecast is poor, use it for a village, a museum or a lower walk, and save the high routes for the clear day.", "Weather day"),

    // ——— 20 ———
    h2("Practical planning checklist"),
    p("Tick items off as you plan; your progress is saved on this device."),
    checklist(
      "dolomites-planning",
      ["Season and base", ["Season chosen (summer hiking or winter sports)", "One or two bases selected", "Accommodation booked", "Tourist tax and half board noted"]],
      ["Transport", ["Car or public transport decided", "Guest pass checked with the accommodation", "Train and bus timetables checked for your dates", "Winter tyres or chains, if driving in winter"]],
      ["Access and lifts", ["Braies, Tre Cime or Alpe di Siusi access booked if needed", "Lift seasons and hours checked", "Parking planned for trailheads"]],
      ["Mountain safety", ["Forecast checked", "Hiking shoes and layers packed", "Routes matched to your experience", "Mountain huts booked for overnight stays"]],
      ["Documents and apps", ["Travel insurance, including mountain rescue", "Offline maps downloaded", "Emergency number saved: 112", "Booking confirmations saved offline"]],
    ),
    p("The access rules, prices and dates in this guide were checked on official sources in September 2026. They change each year, so check the official pages before you travel. For the rest of your trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "Are the Dolomites suitable for first-time visitors?", answer: "Yes. Lifts, well-marked paths and good accommodation make it easy to enjoy the scenery without mountaineering experience. The key is choosing one or two bases and matching activities to your fitness and the season." },
    { question: "How many days should I spend in the Dolomites?", answer: "Three days is enough for one area, four to five for a broader view, and a week or more to combine several valleys. Give each base at least three nights." },
    { question: "Do I need a car in the Dolomites?", answer: "No, if you stay in a well-connected village such as Ortisei, Cortina or Dobbiaco and travel in the main seasons. A car makes it easier to combine several valleys and reach trailheads early." },
    { question: "What is the best time to visit the Dolomites?", answer: "Late June to mid-September for hiking, when most lifts and huts are open, and roughly December to April for skiing. The weeks in between are quiet, with many services closed." },
    { question: "Can I visit the Dolomites without hiking?", answer: "Yes. Scenic lifts, mountain roads, lakes, villages, huts serving lunch and First World War sites make it enjoyable without long walks." },
    { question: "Where should I stay in the Dolomites for the first time?", answer: "Val Gardena (Ortisei or Selva) is the most versatile base; Cortina suits people who want a town; Dobbiaco or San Candido suit trips by train; Alta Badia and Val di Fassa are good all-rounders." },
    { question: "Are the Dolomites expensive?", answer: "Summer and the ski season are high season, and accommodation, lifts and parking add up. Half board, guest passes that include public transport and travelling in June or September can help." },
    { question: "Can I visit the Dolomites in winter?", answer: "Yes. Winter is ski season, with the Dolomiti Superski areas usually open from around December to April. Non-skiers can enjoy snowshoeing, winter walks and sledging. Check road and snow conditions before driving." },
    { question: "Can I use public transport in the Dolomites?", answer: "Yes. Regional trains and buses serve the main valleys, and many South Tyrol hotels include the Südtirol Guest Pass. Timetables change between seasons, so check them for your dates." },
    { question: "Are the main attractions open all year?", answer: "The landscapes are always there, but lifts, huts and access roads work on seasonal schedules. The Tre Cime toll road, for example, is generally open from late May to late October." },
    { question: "Do I need to book mountain huts?", answer: "For overnight stays, yes, especially in July and August. For lunch you usually don't need to book, but check the hut is open." },
    { question: "Do I need a reservation for Lago di Braies or the Tre Cime?", answer: "In 2026, driving into the Braies valley between 9:00 and 16:00 from 1 July to 15 September required an online booking, and driving the toll road to the Tre Cime car park required an online booking. Check the official sites for the current year." },
    { question: "What should I pack for the Dolomites?", answer: "Hiking shoes with a good grip, a waterproof jacket, a warm layer, sun protection and a small backpack in summer; warm, waterproof layers and boots with grip in winter." },
  ],

  sourcesTitle: "Official sources",
  sources: [
    { label: "UNESCO World Heritage Centre — The Dolomites", url: "https://whc.unesco.org/en/list/1237/", note: "World Heritage listing" },
    { label: "Dolomites UNESCO Foundation", url: "https://www.dolomitiunesco.info/en/", note: "the nine World Heritage areas" },
    { label: "Braies/Prags — official site", url: "https://www.prags.bz/en", note: "access rules and parking for Lago di Braies" },
    { label: "Tre Cime di Lavaredo parking — Auronzo", url: "https://auronzo.info/en/parking-tre-cime-di-lavaredo/", note: "toll road booking and prices" },
    { label: "Seiser Alm — access to the Alpe di Siusi", url: "https://www.seiseralm.it/en/info-service/mobility/access-to-seiser-alm.html", note: "road rules and parking reservations" },
    { label: "Province of Bolzano — Passo Gardena digital test phase", url: "https://news.provinz.bz.it/de/news/verkehrsberuhigung-am-grodner-joch-ab-september-digitale-testphase", note: "traffic-calming plans" },
    { label: "Südtirol Guest Pass", url: "https://www.suedtirol.info/en/en/information/suedtirol-guest-pass", note: "public transport for guests" },
    { label: "Val di Fassa Guest Card", url: "https://www.fassa.com/en/card-and-benefits/val-di-fassa-guest-card", note: "transport and benefits" },
    { label: "südtirolmobil", url: "https://www.suedtirolmobil.info/en/", note: "South Tyrol timetables" },
    { label: "Cortina Express", url: "https://www.cortinaexpress.it/en/", note: "buses from Venice and Treviso" },
    { label: "Dolomiti Bus", url: "https://tourism.dolomitibus.it/en/", note: "buses in the Belluno Dolomites" },
    { label: "Dolomiti Superski", url: "https://www.dolomitisuperski.com/en", note: "ski areas, season dates and insurance" },
    { label: "CAI — mountain hut bookings", url: "https://www.prenotarifugi.cai.it/", note: "book CAI huts" },
    { label: "Avalanche.report", url: "https://avalanche.report/", note: "avalanche bulletin for South Tyrol, Trentino and Tyrol" },
  ],
};
