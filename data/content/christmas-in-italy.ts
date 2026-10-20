import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

// Body images shared from the Christmas-markets-italy image directory
const mkt = (file: string, alt: string, wide = false): ContentBlock => ({
  type: "image",
  src: `/images/events/christmas-markets-italy/${file}.webp`,
  alt,
  wide,
});

export const christmasInItaly: ArticleContent = {
  body: [
    answer("**Christmas in Italy spans more than a month** — from the Feast of the Immaculate Conception on 8 December through Epiphany on 6 January. The season varies noticeably by region: in Alpine South Tyrol it looks and feels like Central Europe; in Naples, nativity scenes define the festive weeks; in Rome, the Papal blessing on Christmas Day draws crowds to St Peter's Square. December is a genuinely good time to visit Italy — crowds are lower than summer, prices in many destinations fall, and cities gain festive atmosphere. The main planning consideration is verifying opening hours and transport, both of which change significantly around 25–26 December and 1 January."),

    {
      type: "facts",
      title: "Christmas in Italy at a glance",
      rows: [
        { label: "Season start", value: "8 December (Feast of the Immaculate Conception — public holiday)" },
        { label: "Main public holidays", value: "25 December, 26 December (Santo Stefano), 1 January, 6 January (Epiphany)" },
        { label: "Season end", value: "6 January (Epiphany / Befana)" },
        { label: "Christmas markets: earliest", value: "Trento 20 Nov, Aosta 21 Nov, Merano 26 Nov, Bolzano 27 Nov" },
        { label: "Christmas markets: confirmed city markets", value: "Milan 1 Dec – 6 Jan, Rome Piazza Navona 1 Dec – 6 Jan" },
        { label: "Weather range", value: "North: 0–8 °C / Centre: 6–13 °C / South and Sicily: 10–18 °C" },
        { label: "Busiest period", value: "22–26 December and 31 Dec – 2 Jan — book accommodation well in advance" },
        { label: "Quietest period for sightseeing", value: "1–20 December (excluding weekends)" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "How Christmas is celebrated in Italy",
        "Christmas markets",
        "Where to spend Christmas in Italy",
        "Traditional Italian Christmas food",
        "What is open at Christmas",
        "Weather and what to pack",
        "Getting around Italy at Christmas",
        "Suggested Christmas itineraries",
        "Practical planning checklist",
      ],
    },

    h2("How Christmas is celebrated in Italy"),
    p("Italian Christmas has deep roots in Catholic tradition, but how it is observed varies considerably by region and by household. The season officially opens on **8 December**, the Feast of the Immaculate Conception, a national public holiday. On this date, families traditionally put up the Christmas tree and, in many homes, a nativity scene (*presepe*). In Rome, the Pope leads a ceremony at the Spanish Steps to mark the occasion."),
    p("The central days of the Italian Christmas season run from **Christmas Eve (24 December) through Epiphany (6 January)**, with three public holidays embedded in that period: 25 December, 26 December (Santo Stefano, the Feast of St Stephen), and 1 January. On 6 January, the Befana — a friendly old woman figure who travels the night sky on a broomstick — brings sweets to children who behaved well and a lump of symbolic *carbone dolce* (sweet coal candy) to those who did not. In many Italian families, Epiphany rivals Christmas itself as a gift-giving day."),

    h3("Christmas Eve: la Vigilia"),
    p("The evening of 24 December — *la Vigilia di Natale* — is often the most important moment of the Italian Christmas calendar. In many Italian families, particularly in the south, the tradition is to eat fish or seafood rather than meat: the *Festa dei Sette Pesci* (Feast of the Seven Fishes) is an Italian-American elaboration of a broader Italian tradition of abstaining from meat on Christmas Eve. The number of dishes varies by family and region — seven is not universal. Baccalà (salt cod), eel, clams, octopus, and fried fish are all common."),
    p("Midnight mass (*Messa di Mezzanotte*) is celebrated in churches across the country, with the most elaborate services at St Peter's Basilica in Rome, the Duomo in Florence, and in many historic city-centre churches. Tickets for the main St Peter's service are allocated through the Vatican; smaller churches in most cities welcome visitors without prior booking."),

    h3("Christmas Day and Santo Stefano"),
    p("Christmas Day itself is focused on the family lunch — a long, generous meal that is different in every region. In much of northern Italy, pasta, roast meats, and a range of *antipasti* are standard. In the south, fish remains more prominent. Across Italy, **panettone** (Milanese) or **pandoro** (Veronese) will almost certainly appear on the table. On **26 December — Santo Stefano** — shops and many restaurants reopen; it is a day for visiting friends and relatives. Some cities hold concerts or outdoor events."),
    p("The **Pope's Urbi et Orbi blessing** at noon on 25 December from the central balcony of St Peter's Basilica is one of the most attended Christmas events in Italy. Tens of thousands gather in St Peter's Square. The event is free; arrive early for a central position. For those not attending in person, it is broadcast live internationally."),
    note("Christmas Day opening hours are extremely variable. Major state museums, many restaurants, and most shops are closed on 25 December. Many reopen on 26 December, though with reduced hours. Always verify directly with individual venues — the guidance in this article is general and cannot substitute for checking official sources.", "Important: verify hours directly"),

    h3("The nativity scene tradition"),
    p("The *presepe* — nativity scene — is central to Italian Christmas in a way that differs from many other European countries. Naples has the most extensive nativity tradition: the Via San Gregorio Armeno, a narrow street in the historic centre, is lined year-round with workshops making hand-crafted nativity figures, and it becomes an extraordinary spectacle from late November through Epiphany. The figures range from traditional Biblical characters to contemporary celebrities rendered in miniature. The scenes themselves can be enormous, spread across entire rooms or public squares, and may include moving parts and lighting."),
    p("The Vatican's own nativity scene in St Peter's Square, installed for 8 December and dismantled after Epiphany, draws large crowds. Regional museums across Italy mount exhibitions of historic nativity sets during the festive period."),

    h2("Christmas markets"),
    mkt("alpine-village-snowy-street", "A snow-covered street in an Alpine mountain village lined with traditional stone and timber buildings", true),
    p("Italy has two distinct Christmas market traditions. In Alpine northern Italy — South Tyrol, Trentino, and the Aosta Valley — the markets are essentially Central European in character, drawing on centuries of Austrian and Germanic tradition. In the cities — Milan, Verona, Florence, Rome — the markets are a more recent addition to the calendar, more Italian in atmosphere and character."),
    p("For detailed coverage of all confirmed 2026 dates, individual market profiles, what to eat, and how to combine multiple markets in a single trip, see the dedicated [Christmas markets guide](/events/christmas-markets-italy)."),
    table(
      ["Market", "City", "2026 dates (confirmed unless noted)", "Notes"],
      [
        ["Mercatino di Natale", "Trento", "20 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Marché Vert Noël", "Aosta", "21 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Meraner Weihnacht", "Merano", "26 Nov 2026 – 6 Jan 2027", "Confirmed"],
        ["Christkindlmarkt", "Bolzano", "27 Nov – 6 Jan 2027 (closed 25 Dec)", "Confirmed"],
        ["Mercatino di Natale", "Bressanone", "27 Nov – 6 Jan 2027 (closed 25 Dec)", "Confirmed"],
        ["Mercatino in Duomo", "Milan", "1 Dec 2026 – 6 Jan 2027", "Confirmed"],
        ["Befana e Natale in Piazza Navona", "Rome", "1 Dec 2026 – 6 Jan 2027", "Confirmed"],
        ["Natale a Verona", "Verona", "Est. late Nov – late Dec 2026", "Not yet confirmed — verify at comune.verona.it"],
        ["Weihnachtsmarkt", "Florence", "Est. mid-Nov – mid-Dec 2026", "Not yet confirmed — verify at feelflorence.it"],
      ],
      "Sources: official market operators and municipal tourism offices as of October 2026. Estimated dates are based on previous editions — check official sources before booking."
    ),
    tip("The Alpine markets at Bolzano, Bressanone, Merano, and Trento have strict quality standards that city markets do not always match. They are also the most atmospheric: mid-week visits in the first two weeks of December offer the best balance of crowds and festive atmosphere. For detailed advice on combining multiple markets, see the [Christmas markets guide](/events/christmas-markets-italy).", "Choosing a market"),

    h2("Where to spend Christmas in Italy"),
    p("Each Italian city or region offers a meaningfully different Christmas experience. The guide below covers distinct destinations; not every option listed will suit every visitor. Choose based on what matters most to you: nativity traditions, Alpine markets, city art and culture, or milder winter weather in the south."),

    h3("Rome"),
    mkt("rome-st-peters-dusk", "St Peter's Basilica illuminated at dusk with visitors gathered in the square in front", true),
    p("Rome is the most internationally significant Christmas destination in Italy. The Vatican season alone provides multiple reasons to visit in December: the installation of the nativity scene and Christmas tree in St Peter's Square on 8 December, midnight mass on 24 December, and the Urbi et Orbi blessing on 25 December. Away from the Vatican, the Piazza Navona Christmas fair (confirmed 1 December – 6 January) is the most characteristically Roman festive event: loud, colourful, and strongly oriented toward the Befana tradition of 6 January."),
    p("Museum queues in December are a fraction of what they are in summer. The Colosseum, the Vatican Museums, and the Borghese Gallery are all meaningfully quieter in the first three weeks of December. Many museums close on 25 December and adjust hours around 26 December and 1 January — always verify before visiting. For full Rome planning, see the [Rome guide](/guides/rome-in-three-days)."),
    ul(
      "**St Peter's Square nativity scene and Christmas tree**: installed 8 December; free to view at all hours.",
      "**Urbi et Orbi blessing**: noon on 25 December from the central balcony of St Peter's. Free; arrive early.",
      "**Piazza Navona Christmas fair**: 1 December – 6 January; free entry; strongest on weekday evenings.",
      "**Papal audience**: General audiences (not Christmas-specific) are held each Wednesday; tickets free via the Prefecture of the Papal Household.",
    ),

    h3("Naples"),
    p("Naples in December is atmospheric in a way that no other Italian city quite matches during the festive period. The Via San Gregorio Armeno in the historic centre transforms from a year-round tourist street into its true identity: a living craft tradition of extraordinary nativity-scene makers (*presepari*), some of whom have been producing these figures for generations. The workshops run continuously; by mid-November the street is almost impassable on weekends."),
    p("The broader Neapolitan historical centre — a UNESCO World Heritage Site — is rewarding at any time of year, and the winter months bring smaller crowds and a more genuine sense of everyday Neapolitan life. For city planning, see the [Naples guide](/cities/naples-first-visit). The typical December temperatures of 10–15 °C are mild enough for comfortable walking."),
    tip("Via San Gregorio Armeno is at its busiest on weekends; a weekday morning visit (before 11:00) is far more manageable. The quality and prices of individual craftspeople vary — it is worth comparing several workshops before buying."),

    h3("Florence"),
    p("Florence in December is one of the most satisfying Italian city-break destinations. The Uffizi Gallery and the Accademia (home of Michelangelo's David) have notably shorter queues than at any other time of year, though advance tickets remain sensible. The historic centre's Christmas decorations — centred on Piazza della Signoria, Via dei Calzaiuoli, and the Ponte Vecchio — are understated by European standards but fit the Renaissance architecture beautifully."),
    p("The German-style Weihnachtsmarkt in Piazza Santa Croce, when confirmed, offers a distinctly non-Italian atmosphere in front of the Gothic Basilica of Santa Croce. As of October 2026, the 2026 dates had not been published — check feelflorence.it before building travel plans around it. For full city guidance, see the [Florence guide](/cities/florence-for-first-timers)."),
    p("Florence closes substantially on 25 December: major state museums close entirely, most restaurants close for the day (some open for dinner), and the atmosphere in the historic centre is quiet. 26 December brings partial reopening; the days either side of the new year see most of the city operating at reduced capacity."),

    h3("Milan"),
    mkt("night-market-crowd", "A crowd of visitors at a brightly lit outdoor night market with stalls glowing in the darkness", true),
    p("Milan at Christmas is a confident, fashionable version of the season. The city's shopping streets — Via Montenapoleone, Corso Vittorio Emanuele, and the Galleria Vittorio Emanuele II — are lavishly decorated. The Duomo, surrounded by the Christmas market from 1 December, is extraordinary at night when the white marble is lit against the dark sky."),
    p("The Oh Bej! Oh Bej! fair takes place **7–8 December** at Castello Sforzesco, coinciding with the feast of Sant'Ambrogio (Milan's patron saint) on 7 December — a local public holiday when many Milanese businesses close. This is a significant distinction: Milan can be quieter than usual on 7 December even as tourists arrive for the market and the La Scala season opening on the same evening. La Scala's *Prima della Scala* (opening night of the opera season) is a cultural occasion of international significance; tickets are expensive and sell out months in advance but the red carpet is viewable from outside. For the city more broadly, see the [Milan guide](/cities/milan-beyond-the-duomo)."),

    h3("Bologna"),
    p("Bologna at Christmas offers an exceptional food culture in a compact historic centre with far fewer tourists than Florence, Rome, or Milan. The city's covered arcade-lined streets (*portici*) make it comfortable to walk in any weather. The markets and food halls — including the Mercato di Mezzo and the Quadrilatero — are busiest in the weeks before Christmas, and produce shops stock exceptional regional specialities for the festive season."),
    p("For visitors interested in Italian food at its most serious, the weeks either side of Christmas in Bologna are a genuine highlight: fresh pasta makers, mortadella producers, and local wine importers all ramp up their stocks. The Piazza Maggiore fills with modest seasonal decorations and some outdoor events; it lacks the spectacle of larger cities but compensates with authenticity. See the [Bologna guide](/cities/bologna-in-two-days) for general planning."),

    h3("Turin"),
    p("Turin in December offers a sophisticated version of the Italian winter city break. The city's covered shopping arcades (*portici*) rival Bologna's in elegance, and the main shopping street Via Roma is decorated to a high standard. The *Luci d'Artista* (Artists' Lights) installation — a series of large-scale light artworks by international artists installed across the city from late October through January — is the standout winter visual event in Turin and merits a visit in its own right."),
    p("The Mole Antonelliana — Turin's defining architectural landmark, now housing the National Museum of Cinema — is open through December with adjusted hours. The Savoy royal residences (a UNESCO World Heritage Site) are less crowded in winter than in summer. See the [Turin guide](/cities/turin-first-visit) for city planning. Turin also serves as the gateway to the Aosta Valley Christmas market (see above) and the ski resorts of the Susa Valley."),

    h3("Alpine towns: Bolzano, Merano, Trento, Bressanone, Aosta"),
    p("The Alpine north is where Italy's most compelling Christmas markets are located. Bolzano, Merano, Bressanone, and Trento are all within 90 minutes of Verona by regional train — see the [Christmas markets guide](/events/christmas-markets-italy) for confirmed dates and practical planning. Aosta, at the western end of the Alps, is best reached from Turin. These towns are not only Christmas market destinations: the architecture, the food (a fascinating blend of Italian, Austrian, and Germanic traditions), and the mountain scenery are worthwhile independently of the markets."),
    p("The [Dolomites guide](/guides/visiting-the-dolomites) covers the broader South Tyrol region if you plan to combine the markets with mountain scenery."),

    h3("Venice"),
    p("Venice in December is quiet in a way that no other month allows. The pressure of high-season visitor numbers dissolves, and the city — which is difficult to appreciate at a walking pace in summer — becomes navigable and, in its characteristic grey-water winter light, extraordinarily atmospheric. Fog (*nebbia*) and acqua alta (high water causing temporary flooding of low-lying areas) are both possible; neither is dangerous, but both require practical planning."),
    p("The main Christmas events in Venice centre on the Piazza San Marco and the churches. The Basilica di San Marco is one of the finest settings for Christmas liturgical music in Italy; check the Patriarchate of Venice's programme for scheduled services. Ca' Foscari, the Doge's Palace, and the major museums operate through December with adjusted hours. For the full neighbourhood guide, see [Venice guide](/cities/venice-quieter-neighbourhoods)."),
    note("Acqua alta — temporary tidal flooding — can affect low-lying areas of Venice (primarily Piazza San Marco and Rialto) for a few hours at a time. It is not dangerous: raised walkways (*passerelle*) are installed, and waterproof boots can be hired on the island. Check the tide forecast at the Centro Previsioni e Segnalazioni Maree (maree.comune.venezia.it) if you plan to visit sensitive areas.", "Venice: acqua alta"),

    h2("Traditional Italian Christmas food"),
    mkt("gluhwein-vin-brule-stall", "A decorated hot wine stall at a Christmas market with steaming ceramic mugs and festive lights", true),
    p("Italian Christmas food is regional in a way that few other European Christmas food traditions are. There is no single national Christmas menu — the differences between a Christmas Eve in Naples (fish-based), a Christmas Day in Bologna (rich pasta and meats), and a Christmas in South Tyrol (Central European with Italian influences) are substantial."),

    h3("Panettone and pandoro"),
    p("These two sweet enriched breads are the defining symbols of Italian Christmas and the basis of a long-running debate about which is superior. **Panettone** comes from Milan: it is a tall, domed bread studded with raisins and candied orange and citron peel, with a distinctive stringy crumb from the long fermentation process. A genuine artisan panettone requires 36–72 hours to produce. **Pandoro** comes from Verona: it is a star-shaped, butter-rich bread with no fruit additions, dusted with vanilla icing sugar. Both are sold throughout Italy from late October onwards and are the conventional gift to bring to a Christmas gathering."),
    p("The quality difference between an artisan panettone from a Milanese bakery and a mass-produced supermarket version is significant. If you can visit a specialist pasticceria, the comparison is worthwhile. For more on Italian sweets and baked goods, see the [Italian desserts guide](/food/traditional-italian-desserts)."),

    h3("Torrone"),
    p("*Torrone* — nougat made from honey, egg whites, and toasted almonds or hazelnuts — is the most widely sold Christmas confection in Italy. It is produced across many regions and ranges from soft and chewy to hard and brittle. The town of Cremona in Lombardy is considered its historic centre and hosts a torrone festival each November. The Aosta Valley version, made with local acacia honey and mountain almonds, is particularly prized. South Tyrol produces its own version using local honey. Both are well represented at the Alpine Christmas markets."),

    h3("Christmas Eve fish traditions"),
    p("In many Italian households, particularly in the south and in central-southern regions, Christmas Eve dinner avoids meat in favour of fish. Common dishes include baccalà (salt cod) in various preparations — fried, stewed with tomatoes, or cooked with potatoes — plus seafood pasta, fried mixed fish, clams, and eel. The specific dishes vary by region and by family. This tradition has spread globally in the Italian-American community as the *Festa dei Sette Pesci* (seven-fish feast), though the Italian original is more flexible in the number and type of dishes served."),

    h3("Regional Christmas pasta and main courses"),
    p("Northern Italy: fresh pasta is dominant. In Bologna and Emilia-Romagna, Christmas lunch typically begins with a rich broth containing tortellini — the origin story of tortellini, according to local tradition, is tied to Emilia itself. In Piedmont, *agnolotti del plin* (small filled pasta pinched by hand) appear on Christmas tables. In Lombardy, *cotechino* (a fat, spiced pork sausage) served with lentils is a popular New Year's Eve dish that spills into the Christmas period; roast goose appears more commonly in the north than elsewhere."),
    p("Southern Italy: lamb or kid (*capretto*) roasted with herbs is a traditional Christmas main in much of the south and Sicily. In Naples, the Christmas table may include *insalata di rinforzo* (a pickled vegetable salad), fried dough balls (*struffoli*, drizzled with honey), and *roccocò* (ring-shaped spiced biscuits)."),
    p("For the broader context of Italian food traditions by region, see the [Italian food traditions guide](/food/italian-food-traditions). For Sicilian specialities, see the [Sicilian food traditions guide](/food/sicily-food-traditions)."),

    h3("Seasonal drinks"),
    p("At the Alpine Christmas markets, *vin brulé* (Italian) and *Glühwein* (German/South Tyrolean) — spiced hot wine — is the signature drink of the season. It is made with local wines: in Trentino, a Teroldego or Marzemino base; in South Tyrol, a Lagrein or Schiava. In the cities, hot chocolate (*cioccolata calda*) thick enough to stand a spoon in is ubiquitous from November onwards. Mulled apple juice is a common alcohol-free alternative at the Alpine markets."),
    p("For a more detailed look at Italian wines by region, see the [Italian regional wines guide](/food/italian-regional-wines)."),

    h2("What is open at Christmas"),
    p("Opening hours in Italy during Christmas and New Year are highly variable and cannot be generalised reliably. The guidance below is a general framework — always verify with individual venues before visiting."),

    h3("Museums and attractions"),
    table(
      ["Date", "Major state museums", "Vatican Museums", "Churches"],
      [
        ["8 Dec (Immaculate Conception)", "Many closed — national public holiday", "Check vatican.va", "Open for services"],
        ["24 Dec (Christmas Eve)", "Reduced hours in many cases", "Typically closes early afternoon", "Open for services including midnight mass"],
        ["25 Dec (Christmas Day)", "Most state museums closed", "Closed", "Open for Christmas services"],
        ["26 Dec (Santo Stefano)", "Many reopen — reduced hours", "Check vatican.va", "Open"],
        ["31 Dec (New Year's Eve)", "Many close early", "Closed", "Open"],
        ["1 Jan (New Year's Day)", "Most closed — national public holiday", "Closed", "Open"],
        ["6 Jan (Epiphany)", "Some closed — national public holiday", "Check vatican.va", "Open"],
      ],
      "This table shows typical patterns, not confirmed hours for 2026. Always verify directly with individual venues before visiting."
    ),
    note("The Colosseum (coopculture.it), the Uffizi (uffizi.it), the Vatican Museums (museivaticani.va), and the Borghese Gallery (borghese.it) all publish their own holiday schedules. These should be checked individually — they are not uniform and change from year to year."),

    h3("Restaurants"),
    p("Restaurant opening in Italy over Christmas is unpredictable without checking individual establishments. Many trattorias and family-run restaurants close on 25 December. Higher-end restaurants and hotel dining rooms are more likely to be open but often require advance booking for Christmas lunch. On 26 December, 27 December, and in the period between Christmas and New Year, more restaurants operate normally. In tourist-heavy cities (Rome, Florence, Venice), a larger proportion of restaurants open through the holiday period than in less touristic areas."),
    tip("Booking a Christmas Day or New Year's Eve restaurant in advance is essential in popular destinations. Many restaurants require a minimum spend or a fixed menu on those dates. Check availability at least two to three weeks ahead, and confirm in writing."),

    h3("Shops"),
    p("Most shops follow a schedule similar to Sunday trading on 25 December and 1 January (i.e., effectively closed). Large supermarkets in major cities may open for a few hours on 26 December and in the new year period; neighbourhood shops are less predictable. Shopping streets in major cities are at their busiest in the weeks before Christmas (particularly 15–23 December) and may have extended hours during that run-up period. The January sales (*saldi invernali*) begin on 5 January in most regions — the day before Epiphany — though shopping centres may begin earlier."),

    h3("Public transport"),
    p("Regional and national trains operate on reduced timetables on 25 December and 1 January. Many services that run daily may be skipped on those dates, and frequency on others is cut. Trenitalia and Italo both publish their holiday timetables in advance — check trenitalia.com and italotreno.it before booking travel around Christmas Day or New Year's Day."),
    p("Local public transport in major cities (metro, trams, buses) operates on Sunday or reduced service timetables on public holidays. Exact hours depend on the city and the operator: check ATAC (Rome), ATM (Milan), GTT (Turin), and the relevant city operator before travelling."),
    p("For comprehensive guidance on intercity transport, see [getting between Italian cities](/guides/getting-between-italian-cities) and the [Italy by train guide](/guides/italy-by-train)."),

    h2("Weather and what to pack"),
    p("Italy is a long country with a varied climate, and December spans a wide range of conditions from the Alps to Sicily. Climate data below shows historical averages — not a forecast for December 2026."),
    table(
      ["Region / City", "Average December daytime temperature", "Average nights", "Rain / precipitation"],
      [
        ["Alpine north (Bolzano, Trento, Aosta)", "2–6 °C", "−3 to 0 °C", "Snow possible at altitude; valley floors usually dry"],
        ["Milan / Turin", "5–9 °C", "0–3 °C", "Fog common; occasional rain; snow rare in city centres"],
        ["Venice", "6–9 °C", "1–3 °C", "Grey and damp; fog; rain possible; acqua alta risk"],
        ["Florence / Bologna", "8–12 °C", "2–5 °C", "Moderate rain; cooler in hills"],
        ["Rome", "11–14 °C", "5–8 °C", "December one of Rome's wetter months; rain likely over a week-long visit"],
        ["Naples / Campania", "12–15 °C", "7–9 °C", "Mild; some rain; cooler in evenings"],
        ["Sicily / Palermo", "14–17 °C", "9–11 °C", "Mild — the warmest practical December destination in Italy"],
      ],
      "Source: long-term climate averages from ISPRA and meteorological records. Not a forecast."
    ),

    h3("What to pack"),
    ul(
      "**Waterproof outer layer**: essential across all of Italy in December. A packable rain jacket that fits over warmer layers is more versatile than an umbrella on uneven cobblestones.",
      "**Warm mid-layer**: a fleece or down jacket under the waterproof layer for evenings in Rome and Florence; a heavyweight down jacket for the Alpine north.",
      "**Comfortable, waterproof footwear**: cobblestone streets become slippery when wet. Ankle-height waterproof walking shoes or boots are more useful than fashion trainers.",
      "**Layering pieces**: indoor temperatures in Italian restaurants and museums are often high; bring layers you can add or remove.",
      "**Slightly smarter clothes for Christmas events**: La Scala's opening night, Christmas Day church services, and upmarket Christmas dinners all lean toward smart-casual dress.",
    ),
    note("Venice specifically: short waterproof boots (10–15 cm height) are recommended if acqua alta is forecast. Board shorts and sandals are not the right luggage for December in Italy.", "Venice footwear"),

    h2("Getting around Italy at Christmas"),
    p("Italy's rail network is efficient for intercity travel during the Christmas period, but requires more planning than usual. High-speed trains between Rome, Florence, Bologna, Milan, Venice, and Turin run on holiday timetables on 25 December and 1 January — capacity on popular routes is still available, but it may be reduced."),
    p("Book intercity train tickets in advance for the period **21 December – 2 January**: demand is high and prices rise closer to the date. The [Italy by train guide](/guides/italy-by-train) covers the network in detail, including how to navigate Trenitalia and Italo booking systems. For regional connections to the Alpine Christmas market towns, see the practical notes in the [Christmas markets guide](/events/christmas-markets-italy)."),
    p("For airport arrivals and departures over the Christmas period, book airport transfers in advance: taxi availability can be reduced on 25 December and New Year's Day. See the [airport transfers guide](/guides/italy-airport-transfers) for options in major cities."),
    tip("Book train tickets for the week of 21–27 December and 30 December – 2 January well in advance — ideally two to three months ahead. Christmas travel in Italy is busier than most visitors expect.", "Train booking timing"),
    p("If you are driving in Italy over Christmas, note that the roads near Alpine ski resorts and Christmas market towns are heavily trafficked on weekends in December. For practical driving guidance, see the [driving in Italy guide](/guides/driving-in-italy). For planning the costs of your trip, see the [Italy trip cost guide](/guides/italy-trip-cost)."),

    h2("Suggested Christmas itineraries"),
    note("These are suggested frameworks, not confirmed event schedules. Verify all individual museum, restaurant, and attraction hours before building plans around them."),

    h3("Three days in Rome at Christmas"),
    p("**Day 1**: Arrive and settle in. In the evening, walk the historic centre — Piazza Navona (with the Christmas fair if 1 December – 6 January), Via del Corso, and the Pantheon neighbourhood. Book dinner in advance."),
    p("**Day 2**: Vatican morning — St Peter's Square (nativity scene and tree from 8 December), St Peter's Basilica, and if visiting in the week of 25 December, allow time for the Urbi et Orbi crowds. Afternoon: Castel Sant'Angelo and the Prati neighbourhood. The Borghese Gallery requires advance booking at any time of year."),
    p("**Day 3**: Roman Forum, Colosseum, and Palatine Hill in the morning (queues shorter than in summer). Trastevere lunch and afternoon neighbourhood walk. Evening: Piazza Navona or the area around the Spanish Steps."),

    h3("Five days across the Alpine Christmas markets"),
    p("**Day 1**: Arrive Verona. Visit the city centre and the Piazza dei Signori market area (if operating in 2026)."),
    p("**Day 2**: Day trip to Trento (60–70 minutes by regional train). Evening back in Verona or travel to Bolzano."),
    p("**Day 3**: Bolzano Christkindlmarkt (full day). The market closes at around 21:00."),
    p("**Day 4**: Bressanone (40 minutes north by train). Return to Bolzano for the Hofburg light installation. Day trip option: Merano (30 minutes south of Bolzano)."),
    p("**Day 5**: Travel to Milan (1 hour 45 minutes by train). Piazza Duomo market and Oh Bej! Oh Bej! fair (7–8 December only). Return to departure city."),

    h2("Practical planning checklist"),
    {
      type: "checklist",
      id: "christmas-italy-planning",
      groups: [
        {
          title: "Before you book",
          items: [
            "Decide on dates and check which markets and events fall within your window",
            "Check official sources for confirmed 2026 event programmes (not estimated dates)",
            "Read the weather table and pack accordingly",
            "Plan your cities — not every city needs to be visited to have a good Christmas trip",
          ],
        },
        {
          title: "Accommodation",
          items: [
            "Book Alpine market accommodation (Bolzano, Merano, Bressanone) 3–4 months ahead — limited supply",
            "Book Rome and Milan accommodation for the week of 22–27 December at least 2 months ahead",
            "Confirm your accommodation's holiday closing policy",
          ],
        },
        {
          title: "Transport",
          items: [
            "Book intercity train tickets for 21 Dec – 2 Jan well in advance",
            "Verify reduced timetables for 25 December and 1 January before relying on specific services",
            "Pre-book airport transfers for Christmas Day and New Year's Day",
            "Check local public transport holiday schedules on city operator websites",
          ],
        },
        {
          title: "Attractions and events",
          items: [
            "Verify museum opening hours for 25, 26 December, 1 and 6 January directly with venues",
            "Book Borghese Gallery (Rome) and Vatican Museums well in advance — these require time-slots",
            "Check Uffizi Gallery (Florence) holiday timetable at uffizi.it",
            "For La Scala opening night (7 December, Milan) — book months in advance if attending",
            "Confirm Christmas market dates that are still unannounced (Verona, Florence)",
          ],
        },
        {
          title: "Food and dining",
          items: [
            "Book Christmas Day and New Year's Eve restaurants in advance (essential in major cities)",
            "Research local Christmas food specialities for each city you are visiting",
            "Check whether restaurants close on 25 December or require a set menu",
          ],
        },
        {
          title: "Venice specifically",
          items: [
            "Check the acqua alta (tidal flooding) forecast close to your visit at maree.comune.venezia.it",
            "Pack short waterproof boots (10–15 cm) if travelling in December",
          ],
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Is Christmas a good time to visit Italy?",
      answer: "Yes, for several reasons. Crowds at major museums and attractions are significantly lower than in summer. Hotel prices in many cities drop between early December and 21 December (the pre-Christmas crowd spike). The festive atmosphere in Italian cities is genuine and rooted in deep Catholic tradition — nativity scenes, Christmas masses, and the Befana tradition add cultural depth that summer visitors miss. The main trade-offs are shorter days, cooler temperatures, and the need to verify opening hours around 25–26 December and 1 January carefully.",
    },
    {
      question: "Which Italian cities are worth visiting at Christmas?",
      answer: "Rome for the Vatican Christmas events and the Piazza Navona fair. Naples for the Via San Gregorio Armeno nativity-scene tradition. The Alpine towns (Bolzano, Trento, Merano, Bressanone, Aosta) for the best Christmas markets in Italy. Milan for the Duomo market and La Scala's season opening on 7 December. Venice for the winter atmosphere. Florence for museum access and the Weihnachtsmarkt (when confirmed). Each offers a meaningfully different Christmas experience.",
    },
    {
      question: "When do Italian Christmas markets open in 2026?",
      answer: "The earliest confirmed openings are Trento (20 November), Aosta (21 November), Merano (26 November), and Bolzano and Bressanone (27 November). Milan's Piazza Duomo market and Rome's Piazza Navona fair open 1 December. As of October 2026, Verona and Florence had not yet published official 2026 dates. For full market coverage, see the [Christmas markets guide](/events/christmas-markets-italy).",
    },
    {
      question: "What do Italians traditionally eat at Christmas?",
      answer: "It varies significantly by region. Christmas Eve dinner in many southern Italian households is fish-based (the *Vigilia* tradition). Christmas Day lunch in the north is often long and rich — tortellini in broth in Bologna, roast meats, aged cheeses. Panettone (Milan) and pandoro (Verona) are the universal sweet breads of the season. Torrone (nougat) is the most widely sold confection. For regional context, see the [Italian food traditions guide](/food/italian-food-traditions).",
    },
    {
      question: "Are shops and museums open on Christmas Day?",
      answer: "Most state museums and many shops close on 25 December. The Vatican Museums close on 25 December; St Peter's Basilica and Square are accessible for services. Major museums reopen on 26 December in many cases, often with reduced hours. Individual venues should be checked directly — there is no uniform national rule.",
    },
    {
      question: "Does public transport run on 25 and 26 December?",
      answer: "Intercity trains (Trenitalia and Italo) run on reduced timetables on 25 December and 1 January. Local public transport in cities runs on Sunday/holiday timetables. Check specific operators (ATAC for Rome, ATM for Milan) before planning Christmas Day journeys.",
    },
    {
      question: "What is the weather like in Italy in December?",
      answer: "It varies widely. The Alpine north is cold (2–6 °C daytime) with possible snow at altitude. Milan and Turin average 5–9 °C; Rome 11–14 °C; Naples 12–15 °C; Sicily 14–17 °C. Rain is possible everywhere; Rome has some of its wettest days in December. Pack waterproofs and layers wherever you go. The south and Sicily are the most reliably mild options.",
    },
    {
      question: "Should I book restaurants and accommodation in advance?",
      answer: "Yes, particularly for the week of 21–27 December and 31 December – 1 January. Alpine market accommodation (Bolzano, Merano, Bressanone) should be booked three to four months ahead. Christmas Day and New Year's Eve restaurant reservations in popular cities sell out well in advance. For the quieter first three weeks of December, booking two to four weeks ahead is usually sufficient.",
    },
    {
      question: "What is the Befana?",
      answer: "Befana is a beloved Italian folk figure — a friendly old woman who arrives on the night of 5–6 January (Epiphany) and fills children's stockings with sweets or *carbone dolce* (sweet coal candy). Epiphany is a national public holiday and, in many Italian families, as important as Christmas Day for gifts. The Rome Piazza Navona fair runs through Epiphany and is particularly associated with Befana confectionery and gifts.",
    },
    {
      question: "What is the difference between panettone and pandoro?",
      answer: "Both are enriched sweet breads central to Italian Christmas. Panettone is Milanese: tall, domed, studded with raisins and candied peel, with a distinctive stringy crumb from a long natural fermentation. Pandoro is Veronese: star-shaped, butter-rich, without fruit, dusted with vanilla icing sugar. The quality difference between an artisan version and a mass-produced supermarket loaf is substantial — seek out a specialist bakery or pasticceria if possible.",
    },
  ],

  sourcesTitle: "Sources and fact-checking",
  sources: [
    {
      label: "Bolzano Christkindlmarkt — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-di-natale-bolzano",
      note: "Official market operator; confirmed 2026 dates 27 Nov – 6 Jan 2027",
    },
    {
      label: "Trento Christmas Market — natale.visittrento.it",
      url: "https://natale.visittrento.it/en/christmas-market",
      note: "Official Visit Trento; confirmed 20 Nov 2026 opening",
    },
    {
      label: "Merano Christmas Market — merano-suedtirol.it",
      url: "https://www.merano-suedtirol.it/en/merano/info-service/events/merano-christmas-market.html",
      note: "Official Merano tourism authority; confirmed 26 Nov 2026 opening",
    },
    {
      label: "Milan Mercatino in Duomo — comune.milano.it",
      url: "https://www.comune.milano.it",
      note: "Comune di Milano public notice confirming 1 Dec 2026 – 6 Jan 2027",
    },
    {
      label: "Vatican Christmas events — vatican.va",
      url: "https://www.vatican.va",
      note: "Vatican calendar for Christmas services, Urbi et Orbi, nativity scene installation",
    },
    {
      label: "Rome Piazza Navona Christmas fair — comune.roma.it",
      url: "https://www.comune.roma.it",
      note: "Rome municipality; confirmed 1 Dec 2026 – 6 Jan 2027 for Befana e Natale in Piazza Navona",
    },
    {
      label: "Trenitalia holiday timetables — trenitalia.com",
      url: "https://www.trenitalia.com",
      note: "Check for reduced timetables on 25 Dec and 1 Jan",
    },
    {
      label: "Venice acqua alta forecasts — maree.comune.venezia.it",
      url: "https://maree.comune.venezia.it",
      note: "Official Venice tidal forecasting service",
    },
    {
      label: "Florence Christmas market — feelflorence.it",
      url: "https://www.feelflorence.it",
      note: "Official Florence tourism; 2026 Weihnachtsmarkt dates not yet confirmed as of October 2026",
    },
    {
      label: "ISPRA climate data — Italy December averages",
      url: "https://www.isprambiente.gov.it",
      note: "Long-term climate averages for Italian cities in December",
    },
  ],
};
