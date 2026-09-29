import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// City guide: "Venice for First-Time Visitors" — the rebuilt version of the
// site's original "Venice Beyond San Marco" article, kept at its established
// URL. Ticketing rules, airport connections, accessibility figures, the access
// fee and event dates were checked on official sites in September 2026.
// Prices, fares and opening hours are deliberately not quoted; they change.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/venice-quieter-neighbourhoods";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const veniceQuieterNeighbourhoods: ArticleContent = {
  body: [
    // ——— Opening ———
    p("Venice works differently from any other Italian city. There are no cars, the streets are footpaths and bridges, the buses are boats, and where you sleep shapes your whole trip. Most first-time visitors spend nearly all their time between the railway station, the Rialto Bridge and St Mark's Square — the busiest corridor in the city. This guide covers those essentials and then goes beyond them, into the neighbourhoods, museums and lagoon islands that give Venice its depth."),
    answer("**Two to three days** suits a first visit to Venice: enough for St Mark's Basilica, the Doge's Palace and the Rialto, a museum or two, a quieter neighbourhood and possibly an island. The historic centre is **car-free** — you get around **on foot and by water**, using the vaporetto (water bus) for longer hops and walking for everything else. That makes **where you stay** unusually important: every bridge, stair and extra water-bus ride adds up, especially with luggage. Stay in the historic centre if you can, and see Venice in the early morning and evening, when day visitors have left."),
    {
      type: "facts",
      title: "Venice at a glance",
      rows: [
        { label: "Recommended first visit", value: "2–3 days" },
        { label: "Best for", value: "Art, architecture, history, food and atmosphere" },
        { label: "Main arrival station", value: "Venezia Santa Lucia — not Venezia Mestre, which is on the mainland" },
        { label: "Main airport", value: "Venice Marco Polo (Tessera), on the mainland" },
        { label: "Getting around", value: "Walking, plus ACTV water buses (vaporetti)" },
        { label: "Car needed?", value: "No — cars stop at Piazzale Roma and Tronchetto" },
        { label: "Main booking priorities", value: "Accommodation, St Mark's Basilica and the Doge's Palace" },
        { label: "Popular islands", value: "Murano, Burano and Torcello; also the Lido and Giudecca" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/venice-grand-canal-salute-accademia.webp`,
      alt: "The Grand Canal seen from the Accademia Bridge at dusk, with the domes of Santa Maria della Salute at the end",
      caption: "The Grand Canal from the Accademia Bridge, looking towards Santa Maria della Salute.",
      credit: unsplash("Henrique Ferreira", "rickpsd"),
      wide: true,
    },

    // ——— 1 ———
    h2("Is Venice worth visiting?"),
    p("Yes — and it's worth doing properly. Venice was the capital of a maritime republic that lasted more than a thousand years, and the city still shows it: Byzantine mosaics in St Mark's, the Gothic Doge's Palace, Renaissance and Baroque paintings by Bellini, Titian, Tintoretto and Veronese, and palaces lining a canal that serves as the main street. The historic city and its lagoon are a UNESCO World Heritage Site."),
    p("Venice is also crowded, particularly around St Mark's and the Rialto in the middle of the day, and it's a real city with a shrinking resident population and serious pressure from tourism. The practical answer is to stay overnight, move beyond the main corridor, visit the headline sights early or late, and respect the city's rules. Travellers who do this tend to find a quieter, more varied place than the day-trip version suggests."),

    // ——— 2 ———
    h2("How many days do you need in Venice?"),
    table(
      ["Length", "What it allows", "Trade-offs"],
      [
        ["Day trip", "St Mark's Square, the Basilica or the Doge's Palace, the Rialto and a walk", "Mostly the busiest areas at the busiest times; no evening"],
        ["1 night", "Adds an evening and an early morning — the calmest hours in the centre", "Still little time for museums or islands"],
        ["2 days", "The main sights, one major museum and a quieter neighbourhood", "Islands would take most of a day"],
        ["3 days", "Adds Murano and Burano (or Torcello), more art and unplanned time", "Usually the best balance for a first visit"],
        ["4 days or more", "Slower exploring, the Lido or Giudecca, or a trip to Padua or Verona", "Accommodation in the centre adds up over longer stays"],
      ],
      "How long to stay in Venice"
    ),

    // ——— 3 ———
    h2("What to see on a first visit"),
    p("Opening days vary, and several museums close one day a week. The notes below say how each place fits into a first visit; check the official site before planning a day around any of them."),
    h3("St Mark's Square"),
    p("Piazza San Marco is the city's great public space, framed by the Procuratie arcades, the Basilica, the Campanile (bell tower) and, towards the water, the Doge's Palace. It's at its best early in the morning or after dark. It's also one of the lowest points in the city, so it's often the first place to flood during high water."),
    {
      type: "image",
      src: `${IMG}/piazza-san-marco-campanile.webp`,
      alt: "St Mark's Square in Venice with the brick Campanile, the domes of St Mark's Basilica and the arcaded Procuratie on either side",
      caption: "St Mark's Square, with the Campanile and the Basilica. Arrive early to see it before the crowds.",
      credit: unsplash("Claudio Schwarz", "purzlbaum"),
    },
    h3("St Mark's Basilica"),
    p("The Basilica is Venice's cathedral and its most important building, covered inside with gold-ground mosaics. It's a place of worship first: visits can be suspended for services, and on Sundays and religious holidays the Basilica opens to visitors only in the afternoon. Tickets are sold with a timed entry slot through the [official ticket office](https://tickets.basilicasanmarco.it/en/), and separate tickets cover the Pala d'Oro altarpiece, the museum with the original bronze horses, and the Campanile."),
    p("Under a new system introduced by the Procuratoria di San Marco, the Basilica ticket also gives entry, within six months, to the Basilica of Santa Maria Assunta on Torcello, the sacristy of the Salute and more than 40 other churches around the city. Allow about an hour, and book a slot ahead in busy periods."),
    h3("The Doge's Palace"),
    p("The Palazzo Ducale was the seat of the Venetian Republic's government and courts. Its council chambers hold some of the largest paintings in Venice, including Tintoretto's *Paradise*. The standard ticket, the St Mark's Square Museums ticket, also covers the Museo Correr, the National Archaeological Museum and the monumental rooms of the Marciana Library. Guided *Secret Itineraries* tours of the palace's hidden offices and prisons are booked separately. According to the [palace's website](https://palazzoducale.visitmuve.it/en/visitor-information/), buying online at least 30 days ahead is cheaper. Allow two to three hours."),
    h3("The Bridge of Sighs"),
    p("The enclosed white stone bridge links the Doge's Palace with the New Prisons across the canal. You see it from the outside from the Ponte della Paglia on the waterfront, and you cross it from the inside as part of a Doge's Palace visit. It takes only a few minutes to see, but it's always busy."),
    h3("The Rialto Bridge and market"),
    p("The stone Rialto Bridge, completed at the end of the 16th century, was for centuries the only fixed crossing of the Grand Canal. The area around it was Venice's commercial centre and still holds the Rialto Market: fruit and vegetable stalls and the Pescheria, the fish market, which trades in the mornings and is usually closed on Sundays and Mondays. Go early to see it working, and combine it with a walk through San Polo."),
    {
      type: "image",
      src: `${IMG}/rialto-bridge-grand-canal.webp`,
      alt: "The Rialto Bridge in Venice, a single stone arch over the Grand Canal, with boats and palaces along the water",
      caption: "The Rialto Bridge. The market is a short walk away on the San Polo side.",
      credit: unsplash("Claudio Schwarz", "purzlbaum"),
    },
    h3("The Grand Canal"),
    p("The Grand Canal curves for about 4 kilometres through the city, lined with palaces built over several centuries. The simplest way to see it is from a vaporetto: line 1 stops at most landings along the canal, so it's slow but good for looking. A ride from the station or Piazzale Roma to St Mark's is a sensible first trip in Venice."),
    h3("Gallerie dell'Accademia"),
    p("The Accademia holds the most important collection of Venetian painting, from gold-ground altarpieces of the 14th century to the 18th century, including Giorgione's *The Tempest*, Veronese's huge *Feast in the House of Levi* and works by Bellini, Titian and Tintoretto. According to the [museum](https://www.gallerieaccademia.it/en/visit/opening-hours-and-tickets/), it's open Tuesday to Sunday, and online booking is recommended on busy days. Allow two hours."),
    h3("Peggy Guggenheim Collection"),
    p("Peggy Guggenheim's former home on the Grand Canal holds her collection of 20th-century art — Cubism, Surrealism and Abstract Expressionism, with works by Picasso, Pollock, Magritte and others — plus a sculpture garden. The museum is closed on Tuesdays, recommends buying timed tickets online, and doesn't allow large bags inside. Allow one and a half to two hours. It pairs naturally with the Accademia nearby."),
    h3("Teatro La Fenice"),
    p("Venice's opera house has burned and been rebuilt more than once — most recently after a fire in 1996, reopening in 2003. You can see the auditorium on a visit when it's not in use, or go to a performance; check the [theatre's official site](https://www.teatrolafenice.it/en/) for visit arrangements and the programme. Allow about an hour for a visit."),
    h3("Santa Maria della Salute"),
    p("The great domed church at the entrance to the Grand Canal was built as a thank-you for the end of the plague of 1630, and every 21 November Venetians cross a temporary bridge to it for the Festa della Salute. Its sacristy, which holds paintings by Titian and Tintoretto, is included in the St Mark's Basilica ticket. It's a short walk from the Accademia and the Guggenheim."),
    h3("The Jewish Ghetto"),
    p("In 1516 the Venetian Republic confined the city's Jews to an area of Cannaregio around a former foundry, the *getto* — the origin of the word *ghetto*. Its tall houses and synagogues remain, and it's still the centre of the Jewish community. The Jewish Museum is finishing a major renovation, with reopening planned for autumn 2026; synagogue tours have continued. The complex is closed on Saturdays and Jewish holidays — check the [official site](https://www.ghettovenezia.com/en/opening-hours/) before you go."),
    h3("Scuola Grande di San Rocco"),
    p("The headquarters of a religious confraternity founded in 1478, the Scuola holds more than 60 paintings by Tintoretto, still in the rooms they were painted for. It's one of the most rewarding art visits in Venice and rarely as crowded as St Mark's. According to its website it's open every day except 1 January and 25 December, with shorter hours on Sundays. The Frari church, with Titian's *Assumption*, is next door. Allow one to two hours for both."),
    h3("Planning your priorities"),
    p("A planning aid, not a ranking: adjust it to your interests."),
    table(
      ["Place", "First-visit priority", "Typical time", "Book ahead?"],
      [
        ["St Mark's Basilica", "High", "About 1 hour", "Useful — timed slots"],
        ["Doge's Palace", "High", "2–3 hours", "Useful; cheaper online 30+ days ahead"],
        ["Grand Canal by vaporetto", "High", "30–45 minutes", "No"],
        ["Rialto Bridge and market", "High", "1 hour, in the morning", "No"],
        ["Gallerie dell'Accademia", "Medium–high", "About 2 hours", "Recommended on busy days"],
        ["Scuola Grande di San Rocco and the Frari", "Medium–high", "1–2 hours", "Usually not"],
        ["Peggy Guggenheim Collection", "Medium", "1½–2 hours", "Recommended; closed Tuesdays"],
        ["Santa Maria della Salute", "Medium", "30 minutes", "No"],
        ["Jewish Ghetto", "Medium", "1–2 hours", "Check tour availability"],
        ["Teatro La Fenice", "Optional", "About 1 hour", "Check the official site"],
      ],
      "First-visit planning priorities"
    ),

    // ——— 4 ———
    h2("Venice beyond San Marco"),
    p("Venice's historic centre is divided into six *sestieri* (districts): San Marco, Castello, Cannaregio, San Polo, Santa Croce and Dorsoduro, with the island of Giudecca across the water. None of them is undiscovered — all are well known and visited — but the further you walk from the Rialto–San Marco route, the more everyday Venice you see: washing strung across canals, neighbourhood bars, children playing in the *campi* (squares)."),
    h3("Cannaregio"),
    p("North of the station, Cannaregio is where many Venetians live. The Strada Nova carries a stream of people towards the Rialto, but the parallel fondamente — canal-side walkways such as the Fondamenta della Misericordia and Fondamenta degli Ormesini — are lined with bars and restaurants that fill up in the early evening. It's home to the Jewish Ghetto and the Madonna dell'Orto church, where Tintoretto is buried, and from Fondamente Nove boats leave for the northern lagoon."),
    {
      type: "image",
      src: `${IMG}/canal-evening-restaurants.webp`,
      alt: "A wide canal in Venice at dusk, with restaurant tables and lights along the waterside path and moored boats",
      caption: "Early evening along a canal-side fondamenta, when neighbourhood bars and restaurants fill up.",
      credit: unsplash("Albert Canite", "albert_canite"),
    },
    h3("Castello"),
    p("Castello, the largest sestiere, stretches east from St Mark's. Near the Basilica it's busy — this is where you'll find Santi Giovanni e Paolo, the church where many doges are buried — but it becomes more residential the further east you go, towards Via Garibaldi, the Arsenale (the Republic's shipyards) and the Giardini, the gardens where the Biennale is held."),
    h3("Dorsoduro"),
    p("South of the Grand Canal, Dorsoduro combines major museums — the Accademia, the Guggenheim and Punta della Dogana — with a student quarter around Campo Santa Margherita and the Zattere, a long, sunny waterfront facing Giudecca that's ideal for an evening walk."),
    {
      type: "image",
      src: `${IMG}/dorsoduro-salute-aerial.webp`,
      alt: "Aerial view of the tip of Dorsoduro in Venice, with Punta della Dogana and the dome of Santa Maria della Salute, the lagoon on both sides",
      caption: "The tip of Dorsoduro from above: Punta della Dogana and Santa Maria della Salute.",
      credit: unsplash("Martin Katler", "martinkatler"),
    },
    h3("San Polo and Santa Croce"),
    p("These two small sestieri on the far side of the Rialto are threaded with lanes and small squares. San Polo has the market, the Frari, the Scuola Grande di San Rocco and Campo San Polo, the city's largest square after St Mark's; Santa Croce, near Piazzale Roma, is quieter, with squares such as Campo San Giacomo dall'Orio."),
    h3("Giudecca"),
    p("Across the wide Giudecca Canal, this long island has residential streets, former industrial buildings and Palladio's Redentore church, the focus of the Festa del Redentore in July. Its waterfront gives some of the best views back to Venice. It's a few minutes by vaporetto from the Zattere or San Marco."),
    tip("Choose one neighbourhood per day to explore without a plan: walk in, get a little lost, and use the yellow signs (*Per Rialto*, *Per S. Marco*, *Alla Ferrovia*) or a map to find your way out again.", "Walk without an agenda"),

    // ——— 5 ———
    h2("Venice in 1, 2 or 3 days"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "One day", title: "Historic Venice", text: "**Early morning:** St Mark's Square before the crowds, then the Basilica (booked slot). **Late morning:** the Doge's Palace. **Afternoon:** walk to the Rialto, then take line 1 along the Grand Canal. **Evening:** cicchetti in a bacaro, away from St Mark's." },
        { label: "Two days", title: "Art and quieter corners", text: "Day one as above. **Day two:** the Rialto market in the morning; the Frari and the Scuola Grande di San Rocco; the Accademia or the Guggenheim in the afternoon; sunset on the Zattere and dinner in Dorsoduro or Cannaregio." },
        { label: "Three days", title: "The lagoon and slower time", text: "Days one and two as above. **Day three:** a boat from Fondamente Nove to Murano and Burano (or Torcello); back in time for an evening walk through Cannaregio or Castello. Leave one block of time unplanned." },
      ],
    },
    tip("Build each day around one timed booking — the Basilica or the Doge's Palace — and keep the rest flexible. Walking between sights takes longer than a map suggests.", "One booking per day"),

    // ——— 6 ———
    h2("Where to stay in Venice"),
    p("In Venice, location matters more than almost anywhere else. Staying in the historic centre means you can see the city early and late, when it's calmest, but you'll carry your luggage over bridges and pay more. Staying on the mainland in Mestre usually means more choice and lower prices, but every visit starts with a bus, tram or train and you miss Venice at night. Wherever you stay, check the nearest vaporetto stop and the number of bridges between it and your door."),
    table(
      ["Area", "Proximity to sights", "Atmosphere", "Transport and luggage", "Price considerations"],
      [
        ["San Marco", "Closest to the Basilica, the Palace and La Fenice", "Very busy by day; quieter late at night", "Many water-bus stops; bridges from the station", "Usually the most expensive"],
        ["Cannaregio", "Walkable to the Rialto; close to the station", "Residential, lively canal-side evenings", "Near the station reduces luggage hauling", "Often more varied"],
        ["Dorsoduro", "Near the Accademia, the Guggenheim and the Zattere", "Artistic, relaxed, student quarter", "Several stops on the Grand Canal and Zattere", "Mid to high"],
        ["Castello", "Walkable to St Mark's; quieter further east", "From busy to residential", "Waterfront stops along the Riva", "Varies by distance from St Mark's"],
        ["San Polo", "Central, around the Rialto and the Frari", "Lanes and small squares", "Central, but many bridges", "Mid to high"],
        ["Santa Croce", "Near Piazzale Roma; walkable to the Rialto", "Quieter, local", "Easiest for arriving by road or airport bus", "Often more moderate"],
        ["Mestre (mainland)", "A short train ride to Santa Lucia, or bus or tram to Piazzale Roma", "Ordinary modern town", "No bridges or boats with your luggage", "Usually lower"],
      ],
      "Areas to stay in Venice"
    ),
    table(
      ["If you want…", "Consider", "Why"],
      [
        ["The easiest first visit", "San Marco or Castello near St Mark's", "The main sights are on your doorstep"],
        ["An easy arrival with luggage", "Cannaregio near the station or Santa Croce near Piazzale Roma", "Few or no bridges from the train or airport bus"],
        ["Evenings in a lived-in neighbourhood", "Cannaregio or Castello", "Canal-side bars and quieter streets"],
        ["Art and views", "Dorsoduro", "Museums and the Zattere waterfront"],
        ["A lower budget or a car", "Mestre", "Mainland prices and parking; trains to Venice"],
      ],
      "Choosing where to stay"
    ),
    p("The Comune di Venezia charges a tourist tax per person per night in the historic centre, on the islands and on the mainland; the amount depends on the season and type of accommodation. Hotels in the historic centre often ask guests to come by water taxi or give walking directions from a vaporetto stop — follow them."),

    // ——— 7 ———
    h2("Venice's neighbourhoods"),
    table(
      ["Area", "Character", "Good for", "Considerations"],
      [
        ["San Marco", "The political and ceremonial heart: the square, the Basilica, the Palace, shops and hotels", "First-time sightseeing, La Fenice", "The most crowded area by day; floods first at high water"],
        ["Castello", "The largest sestiere, from grand churches near St Mark's to residential streets near the Arsenale", "Walks, the Biennale, a local feel further east", "Distances are long to the far end"],
        ["Cannaregio", "Residential, with long fondamente, the Jewish Ghetto and Fondamente Nove", "Evenings, the Ghetto, boats to the islands", "The Strada Nova is busy with through-traffic"],
        ["San Polo", "The smallest sestiere: the Rialto market, the Frari, San Rocco", "Markets, art, food", "Narrow lanes crowd near the Rialto"],
        ["Santa Croce", "Quieter squares near Piazzale Roma", "Arrivals by road, a calmer base", "Fewer headline sights"],
        ["Dorsoduro", "Museums, a university quarter and the Zattere", "Art, sunsets, relaxed evenings", "The Accademia area is busy at midday"],
        ["Giudecca", "A separate island with residential streets and the Redentore", "Views of Venice, quiet", "You'll rely on the vaporetto to cross"],
        ["Lido", "A long barrier island with beaches, cars and villas", "Beaches in summer, the Film Festival", "A boat ride from the centre"],
      ],
      "Venice's neighbourhoods at a glance"
    ),
    {
      type: "image",
      src: `${IMG}/quiet-residential-canal.webp`,
      alt: "A narrow, quiet residential canal in Venice with a small blue boat moored between old buildings",
      caption: "Away from the main routes, many canals are quiet and residential.",
      credit: unsplash("Annie Spratt", "anniespratt"),
    },

    // ——— 8 ———
    h2("Getting around Venice"),
    p("Venice is compact and almost entirely walkable, but it's not effortless. The historic centre is made up of more than a hundred small islands joined by bridges, and most bridges have steps. Streets can be very narrow, signs point in several directions, and crowds slow everything down around the Rialto and St Mark's. Allow more time than a map suggests."),
    table(
      ["Option", "Best for", "Things to know"],
      [
        ["Walking", "Most journeys within the centre", "Steps on most bridges; comfortable shoes are essential"],
        ["Vaporetto (ACTV water bus)", "The Grand Canal, longer hops, the islands", "Public transport; routes and frequencies change by season"],
        ["Traghetto", "Crossing the Grand Canal where there's no bridge", "A gondola ferry at a few points; availability varies"],
        ["Water taxi", "Luggage, groups, limited mobility, arrivals", "Private motorboats; agree the price before you board"],
        ["Gondola", "The experience, not transport", "Standard fares set by the city; agree price and duration first"],
        ["Buses and trams (mainland)", "Mestre, the airport and Piazzale Roma", "Piazzale Roma is the end of the road for all vehicles"],
      ],
      "Getting around Venice"
    ),
    h3("Gondola rides"),
    p("A gondola ride is a short, slow trip through the canals — typically around half an hour — rowed by a licensed gondolier. It's an experience rather than a means of transport. Standard fares are set by the city for a set duration, with a higher evening rate, and apply per gondola rather than per person, so sharing reduces the cost. Agree the price and the length of the ride before you set off. For a brief, much cheaper taste, a *traghetto* crosses the Grand Canal at a few points."),
    h3("Bridges, luggage and accessibility"),
    p("According to the City of Venice, the historic centre is made up of 129 *insulae* (small islands), of which 66 are accessible to visitors with reduced mobility: 46 through accessible water-bus stops and 20 through bridges fitted with ramps. The city has mapped 14 accessible routes, covering around 14 kilometres, from St Mark's to the Rialto, the Zattere and the Frari, and on Murano, Burano and Torcello. Details, including ACTV concessions for passengers with reduced mobility, are on the [Accessible Venice](https://www.veneziaunica.it/en/plan-your-trip/accessible-venice) page."),
    ul(
      "**Plan routes, not distances.** A short walk can include several stepped bridges; the accessible routes show where the step-free options are.",
      "**Use the water bus for level access.** Many vaporetto stops are floating pontoons, which can be easier than bridges — though the boat moves and boarding can be busy.",
      "**Check each attraction.** The Doge's Palace, for example, has a lift and is on the city's accessible routes; conditions vary elsewhere, so check official information for each place.",
      "**Travel light.** Rolling a large suitcase over bridge steps is hard work for you and those behind you. A smaller bag, a porter service or a water taxi makes arrival easier.",
    ),

    // ——— 9 ———
    h2("Vaporetto and water transport"),
    p("The vaporetto is Venice's water bus, run by the public transport company ACTV. It's used by residents and visitors alike, and it's how you'll reach the islands. Lines run along the Grand Canal, around the outside of the historic centre and out across the lagoon."),
    ul(
      "**Grand Canal.** Line 1 stops at most landings between Piazzale Roma, the station, the Rialto, the Accademia and St Mark's, so it's slow but scenic. Line 2 serves the Grand Canal with fewer stops.",
      "**Around the centre.** Circular lines (such as 4.1 and 4.2, and 5.1 and 5.2) run around the outside of the city, linking the station and Piazzale Roma with Fondamente Nove, the Giudecca Canal, the Lido and Murano.",
      "**The lagoon.** Line 12 runs from Fondamente Nove to Murano, Mazzorbo, Burano and Torcello.",
    ),
    p("Tickets and passes — single journeys and passes for one, two, three or seven days — are sold by Venezia Unica, the official sales network, online, at ticket offices and machines, and in the AVM Venezia app. ACTV also accepts contactless bank cards and phones: you tap in at the reader before stepping onto the floating stop, and again for every boat you change onto; the system applies the best fare for the journeys made. Validate every ticket before boarding."),
    p("Each ticket includes a limited amount of luggage, with size limits; larger or extra bags need their own ticket, and crew can refuse luggage when boats are crowded. Routes, stops and frequencies change with the season, events, works and tides, so check the current timetable on the [ACTV website](https://actv.avmspa.it/en/) or in the app rather than relying on older guides, and look at the signs on each stop — the same line number can run in two directions."),
    {
      type: "image",
      src: `${IMG}/vaporetto-grand-canal.webp`,
      alt: "An ACTV vaporetto water bus on the Grand Canal in Venice, next to a floating stop, with palaces and restaurant awnings along the bank",
      caption: "A vaporetto on the Grand Canal. The floating stops are numbered and signed by direction.",
      credit: unsplash("Henri Picot", "henrip"),
    },
    tip("If you're under 29, the Rolling Venice card from Venezia Unica gives discounts on transport and some attractions.", "Under 29?"),

    // ——— 10 ———
    h2("Venice airport"),
    p("Venice Marco Polo airport is on the mainland at Tessera, north-east of Mestre. It isn't connected to the railway, so you reach Venice by bus, by boat or by car. According to the airport, tickets are sold at the public transport office in the arrivals hall, at machines in baggage reclaim and at the Alilaguna desks by the dock."),
    table(
      ["Option", "Where it goes", "Trade-offs"],
      [
        ["ATVO express bus", "Piazzale Roma (and Mestre), without intermediate stops", "Quick and simple; then walk or take a vaporetto into the city"],
        ["ACTV bus (AEROBUS)", "Piazzale Roma; other ACTV lines serve Mestre", "Local bus with stops; combined bus and vaporetto tickets are available"],
        ["Alilaguna water bus", "The historic centre and the islands of Murano, Burano, the Lido and Certosa", "Direct to many parts of the city by boat, but slower"],
        ["Water taxi", "Close to your hotel if it has a water entrance", "The most direct option and the most expensive; agree the price first"],
        ["Road taxi", "Piazzale Roma or Mestre", "Fixed fares apply to and from the airport; you still continue on foot or by boat"],
        ["Private transfer (NCC)", "Piazzale Roma or mainland addresses", "Booked in advance with a licensed operator"],
      ],
      "From Marco Polo airport to Venice"
    ),
    p("From Piazzale Roma, the station is about 10 minutes' walk over the Ponte della Costituzione, and the vaporetto continues along the Grand Canal. If you've booked a hotel in Mestre, the ATVO and ACTV buses also stop there. For airports across Italy, see [airport transfers in Italy](/guides/italy-airport-transfers)."),

    // ——— 11 ———
    h2("Venice by train"),
    p("**Venezia Santa Lucia** is the end of the line: you walk out of the station straight onto the Grand Canal, with the Ferrovia vaporetto stop in front of you. **Venezia Mestre** is the mainland station, where many trains stop first — if you're staying in the historic city, stay on until Santa Lucia."),
    p("Trenitalia's Frecciarossa and Italo high-speed trains link Venice with Milan (about 2¼–2½ hours), Florence (about 2 hours), Bologna and Rome (about 3½–4 hours), usually with stops at Padua. Regional trains run to Padua, Verona and Treviso for day trips. Check current timetables with the operators. For tickets and validation, read [Italy by train](/guides/italy-by-train)."),

    // ——— 12 ———
    h2("Murano, Burano and the lagoon"),
    p("The lagoon islands are one of the best reasons to have a third day. Each is quite different, and you don't need to see them all."),
    table(
      ["Island", "Known for", "Time to allow", "Getting there", "Fits into…"],
      [
        ["Murano", "Glassmaking since the 13th century, the Glass Museum, canal-side glass shops", "2–3 hours", "Short vaporetto ride from Fondamente Nove (lines 4.1/4.2, 12)", "2 or 3 days; combine with Burano"],
        ["Burano", "Brightly painted houses, lace-making and the Lace Museum", "2–3 hours", "Line 12 from Fondamente Nove, via Murano", "3 days"],
        ["Torcello", "The lagoon's earliest settlement and the Basilica of Santa Maria Assunta, with Byzantine mosaics", "1–2 hours", "Short hop from Burano on line 12", "3 days, for history lovers"],
        ["Lido", "Beaches, Liberty-style villas, the Venice Film Festival", "Half a day to a day", "Vaporetto from San Marco or Fondamente Nove", "Longer stays or summer"],
        ["Giudecca", "Views back to Venice, the Redentore", "1–2 hours", "Vaporetto across the Giudecca Canal", "Any length of stay"],
        ["San Michele", "Venice's cemetery island", "1 hour", "Between Fondamente Nove and Murano", "Quiet detour on the way to Murano"],
      ],
      "Islands of the Venetian lagoon"
    ),
    {
      type: "image",
      src: `${IMG}/murano-comet-glass-star.webp`,
      alt: "The Comet Glass Star, a large blue glass sculpture of hundreds of glass needles, in a square on the island of Murano",
      caption: "The Comet Glass Star on Murano, made by a master glassmaker from hundreds of blown-glass needles.",
      credit: unsplash("Deirdre Boys", "deirdrehb"),
    },
    p("**Murano and Burano** together make a good half-day or full day: go early, take line 12 out to Burano, and stop at Murano on the way back. Add **Torcello** if you're interested in early Venetian history. Glass furnace demonstrations vary: some are free, while others are part of a sales pitch. It's best to buy glass from businesses that show certification of origin."),
    {
      type: "image",
      src: `${IMG}/burano-coloured-houses.webp`,
      alt: "Brightly painted houses in red, orange and blue along a canal on the island of Burano, with small boats moored in the water",
      caption: "Burano's painted houses. The island is further out than Murano; allow half a day for both.",
      credit: unsplash("Tjaard Krusch", "tjaard_k"),
    },
    p("Lagoon boats are ordinary public transport; for island ferries elsewhere in Italy, see [ferries in Italy](/transport/ferries-in-italy)."),

    // ——— 13 ———
    h2("Food and cicchetti"),
    p("Venetian cooking is built on the lagoon and the sea — fish, shellfish, rice and polenta — with spices that recall the city's trade with the East."),
    ul(
      "**Cicchetti** — small snacks eaten standing at the counter of a *bacaro* (wine bar): crostini, meatballs, fried seafood, cured meats. Order a few with an *ombra*, a small glass of wine.",
      "**Sarde in saor** — fried sardines marinated with onions, vinegar, pine nuts and raisins.",
      "**Baccalà mantecato** — creamed stockfish (air-dried cod), often served on bread or polenta.",
      "**Risotto** — including *risotto al nero di seppia* (black with cuttlefish ink) and *risi e bisi* (rice and peas).",
      "**Bigoli in salsa** — thick pasta with an anchovy and onion sauce.",
      "**Fegato alla veneziana** — calf's liver with onions.",
      "**Pastries** — *fritole* (fritters) and *galani* at Carnival time, and dry biscuits such as *baicoli*.",
    ),
    p("The spritz is closely associated with the Veneto, and the evening *giro di ombre* — moving from bacaro to bacaro — is a local tradition. Menus near St Mark's and the Rialto tend to be more expensive; walk a few streets away, look for places full of Italian speakers, and check the menu for cover and service charges before you sit down."),

    // ——— 14 ———
    h2("Best time to visit Venice"),
    ul(
      "**Spring (April–June)** — mild and good for walking and the islands, but busy, especially around Easter and on holidays and weekends.",
      "**Summer (July–August)** — hot, humid and crowded, with occasional mosquitoes. The Festa del Redentore, on the third weekend of July, ends with fireworks over the Basin of St Mark's on the Saturday night.",
      "**Autumn (September–November)** — pleasant in September and October; the Regata Storica is held on the first Sunday of September. *Acqua alta* (high water) becomes more likely from late autumn.",
      "**Winter (December–February)** — cold, often misty and the quietest time — except at Carnival, which in 2027 runs from 23 January to 9 February according to the [official Carnival site](https://carnevale.venezia.it/en/).",
    ),
    p("The Biennale alternates between art and architecture. The 2026 Art Biennale runs from 9 May to 22 November at the Giardini, the Arsenale and venues across the city; the Venice Film Festival takes place on the Lido in late summer."),
    important("In 2026, the city charged day visitors an access fee on set days in spring and summer; according to the [City of Venice](https://cda.ve.it/en/), the trial ended on 26 July, and any future application is for the city to decide. Before you travel, check the official site for the current rules and dates.", "Venice access fee"),
    p("During high water, the MOSE barriers can be raised to protect the lagoon from the highest tides, but lower tides can still flood St Mark's Square and other low-lying areas. The City of Venice publishes [tide forecasts and alerts](https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree). For how Venice compares with the rest of Italy through the year, read [the best time to visit Italy](/guides/best-time-to-visit-italy)."),

    // ——— 15 ———
    h2("Venice without a car"),
    p("Historic Venice isn't a car destination: the road ends at the edge of the city. The Ponte della Libertà carries cars and buses across the lagoon to **Piazzale Roma**, where there are multi-storey car parks, and to the island of **Tronchetto**, which has large car parks and a short People Mover connection to Piazzale Roma. From there, you continue on foot or by vaporetto."),
    p("If you're touring the Veneto by car, a common approach is to leave the car in Mestre or near a mainland station and take the train or tram into Venice, or to return the rental car before your Venice stay. Parking in Venice is limited and fills up at busy times; check current availability with the operators before arriving. The Lido is the only part of the lagoon where cars are used, via a car ferry. Before driving in Italy, read our guide to [driving in Italy](/guides/driving-in-italy)."),

    // ——— 16 ———
    h2("Common first-time mistakes"),
    ol(
      "**Staying far from what you plan to see.** A cheap room with many bridges and a long walk can cost you time every day.",
      "**Underestimating walking.** Distances are short, but bridges, dead ends and crowds slow you down.",
      "**Carrying large luggage over bridges.** Pack light, or plan your route to your accommodation in advance.",
      "**Trying to see every island.** One or two islands, done calmly, is better than four in a rush.",
      "**Not checking booking requirements.** Timed slots and online tickets make the Basilica, the Doge's Palace and some museums much easier.",
      "**Assuming transport runs the same all year.** Lines and frequencies change with the season and events.",
      "**Spending the whole visit around St Mark's.** Some of the best of Venice is in Cannaregio, Castello, Dorsoduro and San Polo.",
      "**Relying on outdated vaporetto information.** Check routes and ticket options with ACTV or Venezia Unica.",
      "**Getting off at Venezia Mestre by mistake.** Stay on until Santa Lucia if you're staying in the historic centre.",
      "**Overloading a short itinerary.** Leave time to walk and sit in a campo.",
    ),

    // ——— 17 ———
    h2("Practical checklist"),
    {
      type: "checklist",
      id: "venice-quieter-neighbourhoods",
      groups: [
        {
          title: "Before booking",
          items: ["Choose your accommodation area", "Decide how long to stay", "Decide whether to include islands"],
        },
        {
          title: "Before departure",
          items: ["Book the Basilica and the Doge's Palace", "Check your route and luggage plan from the station or airport", "Check the airport transfer options", "Check current access fee rules and dates"],
        },
        {
          title: "During the trip",
          items: ["Allow extra walking time", "Check same-day vaporetto routes", "Keep one flexible block in the itinerary", "Check high-water alerts in autumn and winter"],
        },
      ],
    },
    p("The ticketing rules, transport connections, accessibility information and event dates in this guide were checked on official sites in September 2026. They can change: confirm them before you travel. To fit Venice into a longer trip, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "How many days do you need in Venice?", answer: "Two to three days suits most first visits: enough for St Mark's Basilica, the Doge's Palace, the Rialto, a museum or two, a quieter neighbourhood and, on the third day, Murano and Burano." },
    { question: "Is Venice walkable?", answer: "Yes. The historic centre is compact and car-free, and most journeys are on foot. Expect many bridges with steps, narrow lanes and slow crowds near the Rialto and St Mark's; the vaporetto covers longer distances." },
    { question: "Where should first-time visitors stay in Venice?", answer: "In the historic centre if possible. San Marco and Castello near St Mark's are the most convenient for sights; Cannaregio near the station and Santa Croce near Piazzale Roma make arrival with luggage easier; Dorsoduro suits art lovers. Mestre is cheaper but on the mainland." },
    { question: "Which Venice neighbourhood is best for a first visit?", answer: "There's no single best one. San Marco is closest to the main sights, Cannaregio has lively canal-side evenings and is near the station, and Dorsoduro combines museums with the Zattere waterfront." },
    { question: "Do you need a car in Venice?", answer: "No. There are no cars in historic Venice. Roads end at Piazzale Roma and Tronchetto, where there are car parks; beyond that you walk or use the water bus." },
    { question: "How do you get from Venice Airport to the city?", answer: "By ATVO express bus or ACTV bus to Piazzale Roma, by the Alilaguna water bus to the historic centre and islands, by water taxi, or by road taxi to Piazzale Roma. The airport isn't on the railway." },
    { question: "What is the vaporetto in Venice?", answer: "The vaporetto is Venice's public water bus, run by ACTV. Line 1 travels slowly along the Grand Canal; other lines circle the city and reach the islands. Tickets and passes are sold through Venezia Unica, and contactless cards are accepted." },
    { question: "Is Venice expensive?", answer: "Accommodation in the historic centre, water taxis, gondolas and restaurants near St Mark's can be expensive. Walking, travel passes, cicchetti in bacari and staying outside peak periods help keep costs down." },
    { question: "Is Venice worth visiting beyond St Mark's Square?", answer: "Yes. Cannaregio, Castello, Dorsoduro, San Polo and Santa Croce have major art, local bars and quieter canals, and the lagoon islands add a different side of Venice." },
    { question: "Should you visit Murano and Burano?", answer: "If you have a third day, yes. Murano is known for glass and Burano for its painted houses and lace. Line 12 from Fondamente Nove links both; allow half a day or more." },
    { question: "How do gondola rides work?", answer: "A licensed gondolier rows you through the canals for about half an hour. Standard fares are set by the city, with a higher evening rate, per gondola rather than per person. Agree the price and duration before you set off." },
    { question: "Can you visit Venice in one day?", answer: "You can see St Mark's Square, the Basilica or the Doge's Palace and the Rialto in a day, but you'll mostly see the busiest areas at the busiest time. At least one night is much better." },
    { question: "What should you book in advance in Venice?", answer: "Accommodation first, then timed entry to St Mark's Basilica and tickets for the Doge's Palace. Online booking is also recommended for the Accademia on busy days and the Peggy Guggenheim Collection." },
    { question: "What should you eat in Venice?", answer: "Cicchetti in a bacaro, sarde in saor, baccalà mantecato, risotto al nero di seppia, bigoli in salsa and fegato alla veneziana, with a spritz or an ombra of wine." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "St Mark's Basilica — Procuratoria di San Marco", url: "https://www.basilicasanmarco.it/en/", note: "tickets and visiting rules" },
    { label: "Doge's Palace — Fondazione Musei Civici di Venezia", url: "https://palazzoducale.visitmuve.it/en/visitor-information/", note: "tickets and opening" },
    { label: "Gallerie dell'Accademia", url: "https://www.gallerieaccademia.it/en/visit/opening-hours-and-tickets/", note: "opening days and tickets" },
    { label: "Peggy Guggenheim Collection", url: "https://www.guggenheim-venice.it/en/visit/", note: "opening and visitor rules" },
    { label: "Scuola Grande di San Rocco", url: "https://www.scuolagrandesanrocco.org/en/", note: "opening and closures" },
    { label: "Jewish Museum and Ghetto of Venice", url: "https://www.ghettovenezia.com/en/opening-hours/", note: "opening, closures and tours" },
    { label: "Venezia Unica", url: "https://www.veneziaunica.it/en/", note: "official transport tickets and city information" },
    { label: "Accessible Venice — City of Venice", url: "https://www.veneziaunica.it/en/plan-your-trip/accessible-venice", note: "accessible routes and transport" },
    { label: "ACTV", url: "https://actv.avmspa.it/en/", note: "water bus routes, timetables and contactless payment" },
    { label: "Venice Marco Polo airport", url: "https://www.veneziaairport.it/en_gb/transport", note: "buses, water buses and taxis" },
    { label: "Venice access fee — City of Venice", url: "https://cda.ve.it/en/", note: "current rules and dates" },
    { label: "La Biennale di Venezia", url: "https://www.labiennale.org/en", note: "exhibition dates" },
  ],
};
