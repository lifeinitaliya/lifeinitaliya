import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guide: "Getting Between Italian Cities" — the rebuilt version of the site's
// original short route table, kept at its established URL. It is a planning
// guide for choosing between transport modes; ticket mechanics live in
// "Italy by Train". Journey times are the fastest direct Trenitalia services
// on a sample weekday (14 October 2026), taken from Trenitalia's own journey
// planner in September 2026. Intercity services to Sicily, FrecciaLink and
// Italo/Itabus connections, Sardinia ferry routes, and the rail rules reused
// from "Italy by Train" were checked on official sources in September 2026.
// No fares are given: they change with demand and booking date.

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

const IMG = "/images/guides/getting-between-italian-cities";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const gettingBetweenItalianCities: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What's the best way to travel between Italian cities?"),
    answer("**There's no single best way: it depends on the distance, the route and where you're starting and finishing.** Between the major cities on the main north–south and east–west lines — Turin, Milan, Venice, Bologna, Florence, Rome, Naples — **high-speed trains** are usually the most practical choice, running centre to centre. **Regional trains** and **buses** fill in the smaller towns. **Flying** can make sense for long journeys to the far south, Sicily or Sardinia. A **car** earns its place in the countryside, the mountains and anywhere with several rural stops. **Ferries** reach the islands. Compare journeys **door to door**, not just by departure and arrival times."),
    p("Italy is long and mountainous, and its transport reflects that. The high-speed network makes some big-city journeys remarkably quick; other trips that look short on a map take much longer because of mountains, coastlines or the sea. This guide is a planning framework: how each mode works, where it fits, how to compare them and how to build a multi-city trip without relying on out-of-date timetables. For tickets, stations and on-board rules, see our detailed guide to [Italy by train](/guides/italy-by-train)."),

    // ——— 2 ———
    h2("The main ways to travel between cities"),
    p("Each option has a clear role. None wins everywhere."),
    table(
      ["Transport", "Best suited to", "Main advantages", "Main limitations", "Booking considerations"],
      [
        ["High-speed train", "Major cities on the main lines", "Centre-to-centre, fast, frequent on busy routes, assigned seats", "Limited reach beyond the big cities; fares rise as trains fill", "Book once dates are firm for the best choice of fares"],
        ["Intercity train", "Longer routes off the high-speed lines, overnight travel", "Reaches coastal and southern routes; seats reserved", "Slower than high-speed", "Book ahead on busy dates and for sleeper berths"],
        ["Regional train", "Short hops, small towns, day trips", "Fixed fares, no need to book ahead", "Slower; no assigned seats; can be crowded", "Buy any time; validate paper tickets"],
        ["Coach / bus", "Towns without convenient rail, budget travel, some overnight routes", "Reaches places trains don't; often cheap", "Traffic; less space; fewer departures", "Book popular routes in advance"],
        ["Domestic flight", "Long distances, especially to Sicily, Sardinia and the far south", "Fast in the air", "Airport transfers, security and baggage add time", "Compare total cost with baggage"],
        ["Rental car", "Countryside, mountains, several rural stops", "Flexibility; reaches anywhere", "ZTLs, parking, tolls, fuel, traffic", "Book early for automatics and one-way hires"],
        ["Ferry", "Islands and some coastal routes", "Often the only surface link", "Weather disruption; seasonal timetables", "Book vehicle spaces and cabins early in summer"],
      ],
      "A comparison, not a ranking. Many trips combine several modes.",
    ),

    // ——— 3 ———
    h2("High-speed trains: Frecciarossa and Italo"),
    p("High-speed trains are the backbone of city-to-city travel in Italy. Two companies run them: **Trenitalia**, the national operator, under the Frecce brands — mainly **Frecciarossa** — and the private operator **Italo**. They serve the main corridor from Turin and Milan through Bologna and Florence to Rome, Naples and Salerno, the line east from Milan to Verona, Padua and Venice, and extensions such as the Adriatic line towards Bari and Lecce. Trenitalia's direct trains also link Naples with Bari."),
    {
      type: "image",
      src: `${IMG}/frecciabianca-roma-termini.webp`,
      alt: "A red, white and grey Trenitalia Frecciabianca train at a platform at Roma Termini",
      caption: "A Trenitalia train at Roma Termini, Italy's busiest station and the hub for trains south and north.",
      credit: unsplash("Nico Ruge", "nico_ruge"),
    },
    ul(
      "**Tickets and seats** — you buy a ticket for a specific train and get an assigned carriage and seat. Boarding a different train from the one on your ticket isn't allowed.",
      "**Operators aren't interchangeable** — a Trenitalia ticket isn't valid on Italo, or vice versa, even on the same route and platform.",
      "**Fares** — work like airline fares: they depend on demand, how early you book and how flexible the ticket is. Flexible fares cost more but allow changes; cheaper fares have tighter conditions.",
      "**Stations** — high-speed trains serve central stations such as Milano Centrale, Firenze Santa Maria Novella and Roma Termini, but some also stop at secondary stations (Roma Tiburtina, Napoli Afragola). Check which station is on your ticket.",
      "**Luggage** — no check-in; you store your own bags on racks and in luggage spaces.",
      "**Changes and refunds** — depend on the fare conditions; make them before departure through the operator's website, app or ticket office.",
    ),
    p("Both companies are worth comparing for your route and date: their timetables, fares and conditions differ. See [Italy by train](/guides/italy-by-train) for service levels, ticket details and how to board."),

    // ——— 4 ———
    h2("Intercity trains"),
    p("Trenitalia's **Intercity** trains fill the gap between high-speed and regional services. They run on longer routes, many away from the high-speed lines — along the Tyrrhenian and Adriatic coasts and into the south — and stop at more places than the Frecce. Tickets are for a specific train, normally with a seat. **Intercity Notte** trains run overnight, including from Milan, Bologna, Florence, Rome and Naples to Sicily."),
    p("Sicily is a special case. According to Trenitalia, there are ten daily Intercity links to the island, six of them overnight, and the trains cross the Strait of Messina on a ferry — a crossing of about 30 minutes, during which you can leave the train and go out on deck. It's a memorable journey, but a long one: the fastest direct Intercity from Rome to Palermo on our sample day took about 11½ hours."),

    // ——— 5 ———
    h2("Regional trains"),
    p("Regional trains (Regionale, and the faster Regionale Veloce) serve short journeys, smaller cities and day trips. Fares are fixed by distance and don't rise as the train fills, seats aren't assigned, and at busy times you may have to stand. In some regions, local companies run the services — Trenord in Lombardy, for example — and some tourist lines, such as the Circumvesuviana from Naples towards Pompeii and Sorrento, have their own tickets."),
    ul(
      "**Validation** — according to Trenitalia, paper regional tickets must be validated at the station before boarding, while digital regional tickets activate automatically at the scheduled departure time of the train you chose. Rules can differ with other operators, so follow the instructions on your ticket.",
      "**Platforms** — the platform (binario) often appears on the board only shortly before departure.",
      "**Connections** — regional trains may not wait for a late connecting train; leave margin.",
      "**Luggage** — space is limited on busy commuter and coastal services.",
    ),
    table(
      ["Train type", "Typical role", "Seats", "Booking"],
      [
        ["High-speed (Frecciarossa, Italo)", "Major city to major city", "Assigned", "Specific train; fares vary with demand"],
        ["Intercity / Intercity Notte", "Longer routes off the high-speed lines; overnight to the south and Sicily", "Assigned", "Specific train; book ahead for busy dates and sleepers"],
        ["Regional (Regionale, Regionale Veloce)", "Short trips, small towns, day trips", "Not assigned", "Fixed fare; buy any time"],
      ],
      "Three kinds of train, three ways of travelling",
    ),
    {
      type: "image",
      src: `${IMG}/manarola-station-sea.webp`,
      alt: "The station platform at Manarola in the Cinque Terre, with the station sign and tracks beside the sea",
      caption: "Manarola station in the Cinque Terre. Regional trains are the main way to move between the five villages.",
      credit: unsplash("Filiz Elaerts", "filizelaerts"),
    },

    // ——— 6 ———
    h2("Major city-to-city routes"),
    p("These are the fastest **direct** Trenitalia journeys on a sample weekday, 14 October 2026, from Trenitalia's own journey planner, checked in September 2026. Many trains take longer; Italo's times may differ; and timetables change, so check the train you're actually booking."),
    table(
      ["Route", "Common option", "Fastest direct (sample day)", "Planning note"],
      [
        ["Rome – Florence", "High-speed train", "1 h 35 min", "Rome trains use Termini or Tiburtina — check which"],
        ["Rome – Naples", "High-speed train", "1 h 13 min", "Some trains stop at Napoli Afragola rather than Centrale"],
        ["Rome – Milan", "High-speed train; flights also operate", "2 h 55 min", "Compare door to door before choosing a flight"],
        ["Rome – Venice", "High-speed train", "3 h 59 min", "Stay on to Venezia Santa Lucia if you're staying in the city"],
        ["Florence – Venice", "High-speed train", "2 h 14 min", "Bologna and Padua are on the way"],
        ["Milan – Venice", "High-speed train", "2 h 29 min", "Verona is an easy stop on the way"],
        ["Milan – Florence", "High-speed train", "1 h 54 min", "Many trains continue to Rome"],
        ["Milan – Verona", "High-speed or regional train", "1 h 13 min", "Regional trains are slower and cheaper"],
        ["Milan – Turin", "High-speed or regional train", "1 h 1 min", "Check Porta Nuova or Porta Susa"],
        ["Bologna – Florence", "High-speed train", "37 min", "Regional trains take a slower historic line"],
        ["Naples – Florence", "High-speed train", "2 h 56 min", "Direct trains run via Rome"],
        ["Milan – Naples", "High-speed train", "4 h 33 min", "Long but direct; consider breaking in Rome or Florence"],
        ["Rome – Bari", "High-speed or Intercity train", "4 h 14 min", "Fewer direct trains than on the main corridor"],
        ["Rome – Lecce", "High-speed train", "5 h 41 min", "A long day; flying is an alternative"],
      ],
      "Fastest direct Trenitalia services on Wednesday 14 October 2026. Always check your own date.",
    ),
    p("Our city guides cover what to do on arrival: [Rome](/guides/rome-in-three-days), [Florence](/cities/florence-for-first-timers), [Venice](/cities/venice-quieter-neighbourhoods), [Milan](/cities/milan-beyond-the-duomo), [Naples](/cities/naples-first-visit), [Bologna](/cities/bologna-in-two-days), [Turin](/cities/turin-first-visit) and [Verona](/cities/verona-first-visit)."),

    // ——— 7 ———
    h2("Reaching smaller cities and towns"),
    p("Beyond the main lines, most journeys combine two modes. That's normal, and usually straightforward if you plan the change."),
    ul(
      "**High-speed plus regional train** — for example, to Lucca via Florence, or to Lake Como towns via Milan.",
      "**Train plus bus** — Siena is often easier by bus from Florence, because Siena's station is below the walled centre; San Gimignano is reached by train and bus via Poggibonsi.",
      "**Train and bus on one ticket** — Trenitalia's **FrecciaLink** combines a Frecciarossa with a connecting bus, for example to Salerno and then Matera; Italo sells train and **Itabus** connections to places such as Cortina, Aosta, Courmayeur, Lake Garda and towns in Puglia, Calabria and Sicily.",
      "**Train plus local taxi** — useful for farm stays and hotels outside town.",
      "**Train plus ferry** — to Capri or Ischia via Naples, or along the Amalfi Coast from Salerno in season.",
      "**Airport plus bus** — for mountain resorts, such as the Dolomites from Venice airport.",
    ),
    p("Some regions are simply easier by car: much of rural Tuscany, Puglia beyond the main towns, Sicily's interior and the Dolomite valleys outside the main seasons. See our guides to [the Dolomites](/guides/visiting-the-dolomites), [Lake Como](/travel/lake-como-weekend) and [Palermo](/cities/palermo-markets-monuments) for local detail."),

    // ——— 8 ———
    h2("Compare journeys door to door"),
    p("The most useful habit in Italian trip planning is to compare the **whole journey**: from your hotel to the station or airport, the journey itself, and from the arrival point to your next hotel. A short flight can take longer overall than a train, and a cheap train can cost more once you add a taxi at each end."),
    h3("Example: Rome to Milan"),
    table(
      ["Step", "By train", "By air"],
      [
        ["Getting there", "To Roma Termini, in the centre", "To Fiumicino: the Leonardo Express from Termini takes 32 minutes, plus waiting time"],
        ["Before departure", "Arrive a few minutes early to find the platform", "Time your airline asks you to allow for check-in and security"],
        ["The journey", "Fastest direct train 2 h 55 min on our sample day", "Flight time, then taxiing and disembarking"],
        ["On arrival", "Milano Centrale, with metro lines M2 and M3", "Baggage reclaim, then to the city — from Linate, metro M4 to San Babila in about 12 minutes, according to the airport"],
        ["Luggage", "Carry it on board; no fees", "Check the airline's baggage allowance and fees"],
      ],
      "Add up each step for your own hotels and dates.",
    ),
    p("Neither option wins every time: it depends on where your hotels are, which airports you use and how early you'd need to leave. On long routes such as Milan to Sicily, a flight is often quicker overall; on routes under about three hours by fast train, the train usually compares well."),
    {
      type: "image",
      src: `${IMG}/trenitalia-carriage-window.webp`,
      alt: "Inside a Trenitalia carriage, with seats around a table, two paper cups and a window onto the passing landscape",
      caption: "On the train, the journey time is time you can use.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 9 ———
    h2("When flying makes sense"),
    p("Domestic flights are most useful for long distances where rail is slow or involves a ferry: northern Italy to Sicily, Sardinia or the far south of Puglia and Calabria. On shorter routes, the time added at both airports often cancels out the speed in the air."),
    ul(
      "**Airport transfers** — some airports are well outside the city; add the transfer at each end. See [Italian airport transfers](/guides/italy-airport-transfers).",
      "**Check-in and security** — follow your airline's advice on when to arrive.",
      "**Baggage** — low-cost fares often exclude checked bags.",
      "**Delays** — a late flight affects the rest of your day, just as a late train does.",
      "**Which airport** — Milan has three and Rome two, in very different places.",
    ),

    // ——— 10 ———
    h2("Buses and coaches"),
    p("Long-distance coaches are useful where rail is slow or indirect, for some airport links and for budget travel. National coach companies such as FlixBus and Itabus run intercity routes, including some overnight services. Regional buses reach hill towns and villages trains don't — in Tuscany, the Amalfi Coast and much of the south, they're often the only public transport."),
    ul(
      "**Where they help** — hill towns, coastal villages, airports without rail, and routes such as Rome to parts of the south.",
      "**Tickets** — online, at stations and kiosks, or on board, depending on the operator; some regional buses sell tickets at tobacconists (tabacchi) or through an app rather than on board.",
      "**Timing** — road traffic affects journey times, and services thin out on Sundays and holidays.",
      "**Luggage** — usually in the hold on coaches; limited on local buses.",
    ),

    // ——— 11 ———
    h2("Ferries and island travel"),
    p("Ferries are part of many Italian itineraries, from short hops across the Bay of Naples to overnight crossings to Sardinia."),
    ul(
      "**Sicily** — trains cross the Strait of Messina on ferries, and fast passenger ferries link Villa San Giovanni with Messina. Trenitalia sells tickets for Blu Jet fast ferries together with train tickets.",
      "**Sardinia** — day and overnight ferries sail from mainland ports including Genoa and Civitavecchia, according to operators GNV and Tirrenia. Some routes are seasonal: GNV's Genoa–Olbia service, for example, runs from May to October.",
      "**Bay of Naples** — ferries and hydrofoils run from Naples (Molo Beverello and Calata Porta di Massa) to Capri, Ischia, Procida and Sorrento, and in season to the Amalfi Coast.",
      "**Lakes** — boats connect the towns on Lake Como, Lake Garda and Lake Maggiore.",
    ),
    {
      type: "image",
      src: `${IMG}/messina-strait-ferry.webp`,
      alt: "A white fast ferry crossing deep blue water towards the camera, with the city of Messina and hills behind",
      caption: "A fast ferry on the Strait of Messina, the link between Calabria and Sicily.",
      credit: unsplash("Giuseppe Famiani", "gieffe22"),
    },
    p("Passenger ferries and vehicle ferries book differently: a car space or cabin on a long route in summer needs booking well ahead, while short passenger hops can often be bought nearer the time. Timetables change with the season, and wind or rough seas can cancel sailings, especially hydrofoils — keep a buffer before a flight or train. Arrive at the port with time to find the right pier. Our guide to [ferries in Italy](/transport/ferries-in-italy) covers the main routes."),
    {
      type: "image",
      src: `${IMG}/naples-ferry-vesuvius.webp`,
      alt: "The white wake of a ferry leaving Naples, with Mount Vesuvius on the horizon and seagulls overhead",
      caption: "Leaving Naples by ferry, with Vesuvius behind. Hydrofoils are faster but more affected by rough seas.",
      credit: unsplash("Kentaro Komada", "kenta_k"),
    },

    // ——— 12 ———
    h2("Renting a car"),
    p("A car makes sense when your trip is mostly rural: Tuscan hill towns, Puglia's masserie, the Dolomite valleys, Sicily's interior or several small places in a day. It's usually a burden in the big cities."),
    ul(
      "**Documents** — a licence issued in the EU or EEA is recognised in Italy. Under Italy's Highway Code, licences from other countries normally need an International Driving Permit or an official translation, though international agreements vary by country; rental companies may require an IDP anyway.",
      "**Tolls** — most motorways (autostrade) charge tolls.",
      "**Fuel and parking** — budget for both; city parking is limited and often expensive.",
      "**One-way rentals** — returning the car elsewhere usually costs extra.",
      "**Transmission** — manual cars are common in rental fleets; book an automatic specifically and early.",
      "**Insurance** — read what's included and the excess before you sign.",
      "**Roads** — mountain passes and coastal roads such as the Amalfi Coast's are narrow and slow.",
    ),
    p("A common pattern is trains for the cities and a car for a few days in between — pick it up as you leave one city and drop it before you enter the next. Read [driving in Italy](/guides/driving-in-italy) for rules, tolls and rental advice."),
    {
      type: "image",
      src: `${IMG}/brenner-motorway.webp`,
      alt: "A small car on a road through a green valley in South Tyrol, beside the elevated Brenner motorway viaduct, with mountains behind",
      caption: "Near the Brenner motorway in South Tyrol. Most Italian motorways charge tolls.",
      credit: unsplash("Ilse", "iml"),
    },

    // ——— 13 ———
    h2("ZTLs: the rule that catches drivers out"),
    p("A **ZTL** (*zona a traffico limitato*) is a limited traffic zone, usually covering a historic centre. Rome, Florence, Milan, Bologna, Naples, Pisa, Siena and Verona all have them, along with countless smaller towns. Entry is restricted during set hours, and gates are camera-controlled: driving past an active gate without authorisation leads to a fine, which a rental company will pass on with a fee — sometimes months later. Each separate entry can be a separate fine."),
    p("Hotel access doesn't mean free access. Some cities let guests drive to a hotel inside the zone if the hotel registers the car's number plate in time, but rental cars aren't authorised by default. Ask your hotel before you arrive, follow its instructions exactly, and look for the \"varco attivo\" sign, which means the gate is active."),
    important("If you're only visiting cities, you almost certainly don't need a car. If you are driving, park outside the ZTL and walk or take public transport in.", "Before you drive into a centre"),

    // ——— 14 ———
    h2("Train or car?"),
    table(
      ["Factor", "Train", "Car"],
      [
        ["City centres", "Stations are usually central", "ZTLs, traffic and scarce parking"],
        ["Major city-to-city trips", "Fast and frequent on the main lines", "Tolls, fuel and parking often cost more for one or two people"],
        ["Rural areas and small villages", "Limited", "Much more flexible"],
        ["Several stops in a day", "Difficult", "Easy"],
        ["Luggage", "You carry it on and off", "Stays in the car — but not in a parked car in a city"],
        ["Cost for a group", "Per person", "Per car, which can suit families"],
        ["Stress", "No driving; watch connections", "Unfamiliar rules, narrow roads, ZTL fines"],
      ],
      "Many trips use both.",
    ),

    // ——— 15 ———
    h2("How to book Italian trains"),
    ul(
      "**Official websites and apps** — Trenitalia and Italo both sell tickets in English, with digital tickets and live updates.",
      "**Station machines** — self-service machines take cards; the two operators have separate machines.",
      "**Ticket offices** — at larger stations, for complex journeys, changes and passes.",
      "**Your booking reference** — keep the ticket code or QR code on your phone and ideally offline.",
      "**The right station** — check the departure and arrival stations, not just the city.",
    ),
    p("Buying directly from the operator keeps changes, refunds and delay claims simple. Third-party sites can be convenient for comparing operators, but may add fees and handle changes themselves."),

    // ——— 16 ———
    h2("Understanding Italian train stations"),
    p("Departure boards list trains by number, final destination and time — the destination may be beyond your stop. These words cover most of what you'll see."),
    table(
      ["Italian", "Meaning"],
      [
        ["Partenze", "Departures"],
        ["Arrivi", "Arrivals"],
        ["Binario", "Platform"],
        ["Ritardo", "Delay"],
        ["Cancellato / Soppresso", "Cancelled"],
        ["Carrozza", "Carriage"],
        ["Posto", "Seat"],
        ["Coincidenza", "Connection"],
        ["Biglietteria", "Ticket office"],
        ["Uscita", "Exit"],
      ],
      "Station vocabulary",
    ),
    {
      type: "image",
      src: `${IMG}/pisa-platform-exit-sign.webp`,
      alt: "A long-distance train at a platform at Pisa station, with a digital departure screen, clock and yellow Uscita exit sign",
      caption: "At Pisa station: the platform screen, the clock and the yellow \"Uscita\" (exit) sign.",
      credit: unsplash("Tim Photoguy", "tim0at0unsplash"),
    },

    // ——— 17 ———
    h2("Changing trains"),
    p("Many journeys involve a change, and a few precautions make them smooth."),
    ul(
      "**Don't assume a train will wait** for a late connection.",
      "**Allow a realistic margin** — more at large stations such as Roma Termini, Milano Centrale or Bologna Centrale, where high-speed platforms can be a long walk or deep underground.",
      "**Prefer one booking** — under EU rail passenger rights, protection for missed connections applies when the journey is on a single through-ticket. With separate tickets, a delay on the first train doesn't automatically protect the second.",
      "**Check platforms** — they can change; keep watching the board.",
      "**Mixed operators** — a Trenitalia and an Italo train are separate tickets by definition.",
    ),

    // ——— 18 ———
    h2("Luggage"),
    p("There's no luggage check-in on Italian trains: you lift your bags on board and store them yourself, in overhead racks or luggage areas. Space varies by train and fills up at busy times. Italo's published rules limit luggage in its Smart environment to 75 × 53 × 30 cm; Trenitalia asks passengers to keep luggage in the spaces provided without obstructing others. Coaches usually carry cases in the hold, and ferries have their own rules. Check the operator's conditions before travelling with bikes, skis, instruments or other oversized items — and pack so you can carry your case up train steps."),

    // ——— 19 ———
    h2("Travelling with children"),
    ul(
      "**Seats together** — book reserved seats in a single booking on high-speed trains.",
      "**Fares** — Trenitalia and Italo both offer reduced fares for children; rules for infants and age limits vary by operator and fare, so check when booking.",
      "**Strollers** — a compact, foldable one is easiest; Italo treats strollers as luggage.",
      "**Car seats** — in private cars, Italian law requires child restraints; bring or rent them if you're driving.",
      "**Timing** — avoid tight connections and plan around meals and naps.",
    ),

    // ——— 20 ———
    h2("Accessibility"),
    p("Rete Ferroviaria Italiana (RFI), which manages the rail network, runs a free **Sala Blu** assistance service for passengers with disabilities or reduced mobility at many stations. Request it in advance online, through the Sala Blu+ app or at a Sala Blu office — how much notice is needed depends on the station and time of day. When booking a ticket, reserve an accessible seat or wheelchair space with the operator. Not every station is step-free, and buses, ferries and taxis vary: confirm accessible vehicles and boarding arrangements with each operator before you travel."),

    // ——— 21 ———
    h2("How many cities should you combine?"),
    p("Every move costs more than the journey: packing, checking out, getting to the station, finding the new hotel and settling in usually take half a day. A few principles help:"),
    ul(
      "**Give each base at least two nights**, and three for large cities like Rome.",
      "**Use day trips** from a base instead of moving hotels — Bologna, Florence and Naples all make good hubs.",
      "**Follow the lines** — cities on the same high-speed corridor are easy to combine; zigzagging across the country isn't.",
      "**Keep one quieter stretch** — a few countryside or lake days balance a city-heavy trip.",
    ),

    // ——— 22 ———
    h2("Sample multi-city trips"),
    p("These combinations work because they follow the main transport lines. They're starting points, not fixed itineraries."),
    table(
      ["Trip", "Route", "Why it works", "Main transport"],
      [
        ["Northern Italy", "Milan → Verona → Venice", "Three very different cities on one fast line", "High-speed and regional trains"],
        ["Classic Italy", "Rome → Florence → Venice", "The most visited cities, linked directly", "High-speed trains"],
        ["Central and southern", "Rome → Naples → Puglia", "Rome and Naples by fast train, then the south", "High-speed train; car or trains in Puglia"],
        ["North to centre", "Milan → Florence → Rome", "Straight down the main corridor", "High-speed trains; optional car for Tuscany"],
        ["With the mountains", "Venice → Dolomites → Verona", "City, mountains and city", "Train and bus, or car in the mountains"],
      ],
    ),
    p("For suggested itineraries by trip length, see the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
    {
      type: "image",
      src: `${IMG}/bellagio-lake-como-ferry.webp`,
      alt: "A white passenger boat and a wooden motorboat on Lake Como in front of the lakeside town of Bellagio",
      caption: "Boats at Bellagio on Lake Como, where the ferry is the main way between towns.",
      credit: unsplash("Claudio Carrozzo", "erbampo"),
    },

    // ——— 23 ———
    h2("Booking ahead or buying on the day?"),
    p("It depends on the kind of transport, the route and how flexible you need to be."),
    table(
      ["Transport", "Book ahead?", "Why"],
      [
        ["High-speed trains", "Usually, once dates are firm", "Cheaper fares are limited and sell out; popular trains fill at busy times"],
        ["Intercity and sleepers", "On busy dates", "Seats and berths are limited"],
        ["Regional trains", "Not necessary", "Fixed fares; buy when you travel"],
        ["Coaches", "For popular routes and dates", "Seats can sell out"],
        ["Ferries with a vehicle", "Yes, in summer", "Car spaces and cabins fill early"],
        ["Short passenger ferries", "Often not", "But check in peak season and on weekends"],
        ["Flights", "Usually", "Fares generally rise as flights fill"],
      ],
    ),
    tip("Keep flexible tickets for journeys you might change, and cheaper restricted fares for the ones you're sure of.", "Mix your fares"),

    // ——— 24 ———
    h2("Peak periods"),
    p("Demand rises on Friday evenings and Sunday afternoons, around public holidays and in summer. Plan earlier for Easter, the \"bridges\" (ponti) around holidays such as 25 April, 1 May and 2 June, August — especially around Ferragosto on 15 August — and Christmas and New Year. Big events, such as trade fairs in Milan or festivals in smaller cities, can fill trains and hotels locally. Check our guide to the [best time to visit Italy](/guides/best-time-to-visit-italy) for seasonal patterns."),

    // ——— 25 ———
    h2("Common mistakes"),
    ul(
      "**Booking the wrong station** — Rome, Milan, Venice, Naples and Turin all have more than one.",
      "**Confusing airports** — Milan's three and Rome's two are far apart.",
      "**Assuming every train is high-speed** — a regional train on the same route can take much longer.",
      "**Not checking whether a journey is direct.**",
      "**Leaving too little time for a change**, or assuming a delayed train will be waited for.",
      "**Misunderstanding ticket conditions** — cheap fares may not allow changes.",
      "**Driving into a ZTL.**",
      "**Ignoring ferry weather disruption** before a flight or train.",
      "**Booking too many cities** for the time you have.",
      "**Comparing ticket prices instead of total journey time and cost.**",
      "**Relying on old timetables from blogs** — check the operator for your date.",
    ),

    // ——— 26 ———
    h2("Planning checklist"),
    p("Use this for each leg of your trip. Tick items off as you go; your progress is saved on this device."),
    checklist(
      "italy-city-to-city-planning",
      ["The journey", ["Origin and destination fixed", "Date chosen", "Transport mode chosen", "Departure station or airport checked", "Arrival station or airport checked", "Direct or with a change"]],
      ["Tickets and luggage", ["Luggage planned for the mode", "Ticket conditions understood", "Transfer time allowed at changes"]],
      ["At each end", ["Hotel location checked against the station", "Local transport or taxi planned", "Back-up option noted"]],
    ),
    p("Journey times and rules in this guide were checked on official sources in September 2026. Timetables change, so always check the operator for your travel date. For the rest of your planning, see the [Italy travel planning checklist](/guides/italy-travel-planning-checklist) and [how much a trip to Italy costs](/guides/italy-trip-cost)."),
  ],

  faqs: [
    { question: "Is it easy to travel between Italian cities by train?", answer: "Between the major cities, yes: high-speed trains link Turin, Milan, Venice, Bologna, Florence, Rome and Naples, running centre to centre. Smaller towns usually need a regional train or bus as well." },
    { question: "Are Italian high-speed trains worth booking in advance?", answer: "Usually, once your dates are firm. Fares vary with demand and the cheaper ones are limited. Regional trains have fixed fares and don't need booking." },
    { question: "Which train companies operate in Italy?", answer: "Trenitalia, the national operator, runs high-speed Frecce, Intercity and most regional trains; Italo runs high-speed trains only. Some regions have their own regional operators, such as Trenord in Lombardy." },
    { question: "Can I travel around Italy without a car?", answer: "Yes, if your trip is mainly cities. You'll want a car, a driver or tours for rural areas such as the Tuscan countryside or the Dolomite valleys outside the main seasons." },
    { question: "Is it cheaper to travel by train or car?", answer: "It depends on how many people are travelling and where. For one or two people between cities, trains often cost less once you add tolls, fuel and parking; for a group in the countryside, a car can be cheaper." },
    { question: "Should I fly between Italian cities?", answer: "For long distances such as Milan to Sicily, flying can save time. On shorter routes, compare door to door: airport transfers and security often make the train as quick or quicker." },
    { question: "Are buses useful in Italy?", answer: "Yes, for towns without convenient rail, some airport links and budget travel. Regional buses reach many hill towns and coastal villages." },
    { question: "Can I take large luggage on Italian trains?", answer: "Yes, but you carry and store it yourself, and space varies. Italo limits luggage in Smart to 75 × 53 × 30 cm. Check operator rules for oversized items." },
    { question: "How do I change trains in Italy?", answer: "Allow a realistic margin, especially at big stations, watch the departure board for your platform, and prefer a single booking so missed connections are covered." },
    { question: "Do I need to validate train tickets?", answer: "Paper regional tickets must be validated before boarding, according to Trenitalia; digital regional tickets activate automatically. Tickets for a specific train and seat don't need stamping." },
    { question: "What happens if my train is delayed?", answer: "Check the operator's app and station boards. Depending on the delay and the operator's conditions, you may be entitled to compensation; EU rules set minimum rights." },
    { question: "Are Italian trains accessible?", answer: "RFI's free Sala Blu service provides assistance at many stations, booked in advance. Reserve an accessible seat or wheelchair space with the operator. Not every station is step-free." },
    { question: "Can I travel from northern to southern Italy by train?", answer: "Yes. High-speed trains run from Milan to Naples and Salerno and along the Adriatic to Bari and Lecce, and Intercity and overnight trains reach Calabria and Sicily." },
    { question: "Is it better to book directly with the train operator?", answer: "Usually. Booking with Trenitalia or Italo keeps changes, refunds and delay claims simple; third-party sites may add fees." },
  ],

  sourcesTitle: "Official sources",
  sources: [
    { label: "Trenitalia", url: "https://www.trenitalia.com/en.html", note: "timetables, tickets and journey planner" },
    { label: "Italo", url: "https://www.italotreno.com/en", note: "high-speed trains" },
    { label: "Trenitalia — trains to Sicily", url: "https://www.trenitalia.com/it/intercity/collegamenti/raggiungi-la-sicilia-in-treno.html", note: "Intercity services and the Strait crossing" },
    { label: "Trenitalia — FrecciaLink Matera", url: "https://www.trenitalia.com/it/frecciarossa/collegamenti-frecciarossa/freccialink-matera.html", note: "train and bus on one ticket" },
    { label: "Italo — Itabus connections", url: "https://www.italotreno.com/en/destinations-timetable/itabus", note: "train and bus connections" },
    { label: "Trenitalia — travelling on regional trains", url: "https://www.trenitalia.com/en/information/travelling-on-regional-trains.html", note: "ticket validation" },
    { label: "RFI — assistance for persons with disability", url: "https://www.rfi.it/en/for-persons-with-disability.html", note: "Sala Blu service" },
    { label: "Your Europe — rail passenger rights", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_en.htm", note: "delays and connections" },
    { label: "GNV — ferries to Sardinia", url: "https://www.gnv.it/en/ferries-destinations/sardinia", note: "routes and seasons" },
    { label: "Tirrenia — ferries to Sardinia", url: "https://en.tirrenia.it/ferry-olbia/", note: "routes" },
    { label: "Italo — luggage rules", url: "https://blog.italotreno.com/en/train-world/luggage-and-suitcases-on-italo-all-the-rules/", note: "luggage size in Smart" },
  ],
};
