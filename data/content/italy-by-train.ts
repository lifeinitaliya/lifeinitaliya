import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Practical guide: "Traveling Around Italy by Train: Routes, Tickets and Tips".
// Rules, fares, timetables and procedures change. Facts below were checked
// against the operators' and authorities' own pages in September 2026 —
// re-check them whenever this guide is updated.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/italy-by-train";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const italyByTrain: ArticleContent = {
  body: [
    // ——— Introduction ———
    p("This guide explains how rail travel in Italy actually works — which trains exist, how tickets and seat reservations differ between them, what to do at the station and how to handle delays or strikes. It's written for visitors planning their first trips by train, but the detail on tickets and stations is useful on any trip."),
    answer("For most visitors, Italy is straightforward to travel by train between major cities. **High-speed trains** — Trenitalia's Frecciarossa and the private operator Italo — link cities such as Turin, Milan, Venice, Bologna, Florence, Rome and Naples, with tickets for a specific train and an assigned seat. **Regional trains** cover shorter journeys and smaller towns at fixed fares, without assigned seats. The two operators sell tickets separately and each fare has its own conditions, so the most important habit is to read what your own ticket says — which train, which station, and whether it needs validating — and to check the operator's current information before you book."),
    {
      type: "facts",
      title: "Italy by train at a glance",
      rows: [
        { label: "Best for major cities", value: "High-speed trains (Frecciarossa, Italo)" },
        { label: "Best for local journeys", value: "Regional trains" },
        { label: "Main operators", value: "Trenitalia (high-speed, Intercity, regional) and Italo (high-speed); some regions have their own operators, such as Trenord in Lombardy" },
        { label: "Seats", value: "Assigned on high-speed and Intercity tickets; not assigned on regional trains" },
        { label: "Digital tickets", value: "Sold on the operators' official websites and apps" },
        { label: "Validation", value: "Paper regional tickets must be validated before boarding; digital regional tickets activate automatically" },
        { label: "Main tip", value: "Check the train number, station and conditions shown on your own ticket" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/milano-centrale-empty-platform.webp`,
      alt: "Empty platforms under the arched iron-and-glass roof of Milano Centrale station",
      caption: "Milano Centrale, one of the busiest hubs on the network. Large stations take time to navigate, so arrive early.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 1 ———
    h2("How train travel works in Italy"),
    p("\"An Italian train\" can mean very different things. A high-speed Frecciarossa between Milan and Rome, a regional train stopping at every village along the coast, and an overnight Intercity to Sicily are different products, often with different tickets, rules and prices. Knowing which one you're on answers most questions before they arise."),
    h3("High-speed trains"),
    p("High-speed services connect the major cities along the main corridor — Turin, Milan, Bologna, Florence, Rome, Naples and Salerno — with fast services to Venice and extensions to other cities. Trenitalia runs them under the Frecce brands (mainly Frecciarossa), and Italo runs a competing private service on many of the same routes. You buy a ticket for a specific train and receive an assigned seat."),
    h3("Intercity trains"),
    p("Trenitalia's Intercity trains cover longer routes, many of them away from the high-speed lines — along the Adriatic and Tyrrhenian coasts, for example. Intercity Notte trains run overnight, including to the south and Sicily. Tickets are issued for a specific train, normally with a seat."),
    h3("Regional trains"),
    p("Regional trains (Regionale, and the faster Regionale Veloce with fewer stops) serve shorter journeys, smaller towns and most day trips. Fares are fixed, seats aren't assigned, and at busy times you may have to stand. In some regions, regional services are run by local operators — Trenord in Lombardy, for instance — and some tourist routes, such as the Circumvesuviana line from Naples towards Pompeii and Sorrento, are run by separate regional companies with their own tickets."),
    { type: "routeMap", caption: "A simplified diagram of the main high-speed and fast corridors used by Trenitalia and Italo. Many more cities are served by Intercity and regional trains." },

    // ——— 2 ———
    h2("Italy's main train operators"),
    p("Two companies run high-speed trains in Italy. Neither is better for every journey; they differ in network, timetables, fares and conditions, and it's worth comparing both for your specific route and date."),
    h3("Trenitalia"),
    p("[Trenitalia](https://www.trenitalia.com/en.html) is the national operator, part of the Ferrovie dello Stato (FS) group. It runs high-speed Frecciarossa services (plus Frecciargento and Frecciabianca on some routes), Intercity and Intercity Notte trains, and most regional services. According to Trenitalia, Frecciarossa trains offer three or four service levels: Standard, Premium, Business and Executive."),
    h3("Italo"),
    p("[Italo](https://www.italotreno.com/en) is a private operator that runs high-speed trains only, concentrated on the main corridors between cities such as Turin, Milan, Venice, Bologna, Florence, Rome and Naples. It sells several service levels, from Smart to Club Executive, and some tickets combine a train with a connecting Italo bus."),
    table(
      ["Feature", "Trenitalia", "Italo"],
      [
        ["High-speed services", "Yes — Frecciarossa and other Frecce", "Yes — its core service"],
        ["Intercity and regional trains", "Yes", "No — high-speed only"],
        ["Major city connections", "Yes, across the country", "Yes, on its high-speed network"],
        ["Where to book", "Official website, app, machines and ticket offices", "Official website, app, machines and ticket desks"],
        ["Ticket conditions", "Vary by fare type", "Vary by fare type"],
        ["Rail passes", "Accepted on many services, usually with a paid reservation on high-speed and Intercity trains", "Not part of the Interrail/Eurail pass network"],
      ],
      "Trenitalia and Italo compared"
    ),
    important("A Trenitalia ticket isn't valid on an Italo train, or vice versa — even on the same route, from the same platform. Check the operator name and train number on your ticket.", "Tickets are operator-specific"),

    // ——— 3 ———
    h2("High-speed vs regional trains"),
    answer("Use high-speed trains between major cities, where they're usually much faster; use regional trains for short trips, small towns and day trips, where they're often the only option and fares are fixed."),
    table(
      ["Train type", "Best for", "Seats and reservations", "Example journeys"],
      [
        ["High-speed (Frecciarossa, Italo)", "Travel between major cities", "Ticket for a specific train with an assigned seat", "Rome–Florence, Milan–Venice, Rome–Naples"],
        ["Intercity", "Longer routes off the high-speed lines", "Ticket for a specific train, normally with a seat", "Coastal routes; overnight trains to the south"],
        ["Regional (Regionale, Regionale Veloce)", "Short trips, small towns and day trips", "No assigned seats; follow the conditions on your ticket", "Florence–Lucca, Milan–Como, Venice–Padua"],
      ],
      "Choosing a type of train"
    ),
    p("The difference in speed can be large. Between Bologna and Florence, for example, high-speed trains use a direct line through the Apennines and take well under an hour, while regional trains follow a slower historic route. On short hops, however, a regional train that leaves sooner may get you there first — compare total journey times, not just train types."),
    {
      type: "image",
      src: `${IMG}/regional-double-decker-train-domodossola.webp`,
      alt: "A green and white double-decker regional train standing at a platform in Domodossola",
      caption: "A regional train at Domodossola in Piedmont. Regional trains have fixed fares and no assigned seats.",
      credit: unsplash("Valomukitse Arva-Zika", "valomukitse"),
    },

    // ——— 4 ———
    h2("Popular train routes"),
    p("These are the journeys first-time visitors take most often. Times are approximate for the **fastest** direct services, based on operator timetables in September 2026 — many trains take longer, so check the exact train you're booking."),
    table(
      ["Route", "Typical train type", "Fastest time (approx.)", "Why travellers use it", "Planning note"],
      [
        ["Rome – Florence", "High-speed", "About 1½ hours", "The most common pairing on a first trip", "Rome trains use Termini or Tiburtina — check which"],
        ["Florence – Venice", "High-speed", "About 2 hours", "Links two of the most visited cities", "Stay on until Venezia Santa Lucia unless your hotel is in Mestre"],
        ["Rome – Venice", "High-speed", "About 3½–4 hours", "Direct north–south journey", "Consider breaking the trip in Florence or Bologna"],
        ["Milan – Venice", "High-speed / fast", "About 2¼–2½ hours", "Classic northern route", "Verona and Padua are easy stops on the way"],
        ["Rome – Naples", "High-speed", "About 1–1¼ hours", "Gateway to Naples, Pompeii and the coast", "Pompeii and Sorrento are reached on separate regional lines from Naples"],
        ["Milan – Florence", "High-speed", "About 1¾–2 hours", "Connects the north with Tuscany", "Many trains continue to Rome"],
        ["Bologna – Florence", "High-speed", "About 35–40 minutes", "Easy link between two food and art cities", "Regional trains take a much slower route"],
        ["Naples – Salerno", "High-speed or regional", "About 35 minutes", "Access to the Amalfi Coast by ferry or bus from Salerno", "Regional trains are cheaper and take longer"],
        ["Milan – Turin", "High-speed", "About 45 minutes to 1 hour", "Connects two major northern cities", "Regional trains are a slower, cheaper alternative"],
      ],
      "Popular routes and what to know"
    ),
    p("For planning a whole trip around these routes, see [getting between Italian cities](/guides/getting-between-italian-cities) and our [complete Italy travel guide](/guides/complete-italy-travel-guide), which suggests itineraries built on train connections. City guides for [Florence](/cities/florence-for-first-timers), [Bologna](/cities/bologna-in-two-days) and [Naples](/cities/naples-first-visit) cover what to do when you arrive."),
    {
      type: "image",
      src: `${IMG}/frecciarossa-crossing-venice-lagoon.webp`,
      alt: "A Frecciarossa high-speed train crossing the causeway over the Venice lagoon",
      caption: "A Frecciarossa crossing the lagoon on the way into Venice. The final stop, Santa Lucia, opens directly onto the Grand Canal.",
      credit: unsplash("Lukas S", "hamburgphoto"),
      wide: true,
    },

    // ——— 5 ———
    h2("How to buy train tickets"),
    answer("Buy on the operators' official websites or apps, from station ticket machines, or at ticket offices. For high-speed trains, booking once your plans are fixed usually gives you more fare choice; regional fares are fixed, so there's no need to book early."),
    h3("Official websites and apps"),
    p("Trenitalia and Italo both sell tickets on their websites and apps in English. Digital tickets arrive by email and in the app with a QR code, and the apps show platform and delay updates."),
    h3("Station ticket machines"),
    p("Self-service machines at stations offer several languages and accept cards. Trenitalia and Italo have separate machines, so use the right one for your operator."),
    h3("Ticket offices"),
    p("Ticket offices (biglietteria) at larger stations can help with complex journeys, changes and passes. Queues can be long in busy periods."),
    h3("Other authorised sellers"),
    p("Travel agencies and third-party booking sites also sell Italian train tickets. They can be convenient for comparing operators, but may add fees, and changes are usually handled through the seller rather than the operator."),
    h3("How train fares work"),
    p("There's no single price for a route. High-speed fares vary with demand, how far ahead you book, the fare type (flexible fares cost more but allow changes; cheaper fares have tighter conditions), the service level or class, and the date and time of travel. Regional fares are set by distance and don't change with demand."),
    p("For example, two passengers on the same high-speed train can pay different amounts: one with a flexible fare that allows changes, and one with a cheaper restricted fare bought when fewer seats had sold. Neither is wrong — the right choice depends on how firm your plans are."),
    tip("Once your dates are firm, book high-speed trains for the busiest routes and times, such as Friday evenings, Sunday afternoons and holiday weekends. Keep flexible fares for journeys you might change.", "When to book"),
    p("For budgeting, see [how much a trip to Italy costs](/guides/italy-trip-cost)."),

    // ——— 6 ———
    h2("How train reservations work"),
    answer("On high-speed and Intercity trains, your ticket is for a specific train and includes an assigned seat. Regional trains don't have seat reservations — you sit wherever there's space."),
    p("On a reserved high-speed service, you must travel on the train shown on your ticket. Trenitalia's conditions for Frecciarossa, for example, state that boarding a different train from the one booked means travelling without a valid ticket. If your plans change, use the change options your fare allows before departure."),
    p("On regional trains, there are no carriage or seat numbers to follow. At busy times — commuter hours, summer weekends on coastal lines — seats can run out and you may need to stand."),
    p("Rail pass holders usually need a separate reservation, often for a fee, on Trenitalia's high-speed and Intercity trains. Italo isn't part of the Interrail/Eurail pass network, so pass holders need a normal Italo ticket."),

    // ——— 7 ———
    h2("Understanding your ticket"),
    p("A ticket carries everything you need to board the right train. These are the details to check."),
    table(
      ["On your ticket", "What it means", "Why it matters"],
      [
        ["Treno / train number", "The specific service, e.g. \"FR 9520\"", "Departure boards list trains by number and destination"],
        ["Partenza / Arrivo", "Departure and arrival station and time", "Some cities have several stations"],
        ["Carrozza", "Carriage number", "High-speed trains can be long — find your carriage before boarding"],
        ["Posto", "Seat number", "Assigned on high-speed and Intercity tickets"],
        ["Service level or class", "e.g. Standard, Business, Smart", "Determines where on the train you sit"],
        ["Fare conditions", "Whether you can change or refund", "Cheaper fares usually have tighter rules"],
        ["Passenger name", "Some tickets are issued in your name", "Carry photo ID; staff can ask to see it"],
      ],
      "What to check on a ticket"
    ),
    h3("Do you need to validate your ticket?"),
    p("Only some tickets need validating. According to Trenitalia, **paper regional tickets** must be validated in the machines at the departure station before the train leaves, while **digital regional tickets** are validated automatically at the scheduled departure time of the train you chose. Tickets for a specific train and seat, such as high-speed tickets, don't need stamping."),
    important("Rules differ by ticket type and operator. If a ticket says it must be validated or activated, do it before boarding — travelling with an unvalidated ticket can lead to a fine. Follow the instructions printed on, or shown with, your own ticket.", "Validation"),
    p("With a digital regional ticket, pick the train you'll actually catch: the ticket activates at that train's scheduled departure, and Trenitalia allows changes to the time before then within the conditions of the ticket."),

    // ——— 8 ———
    h2("How to board a train"),
    {
      type: "steps",
      items: [
        { title: "Go to the right station", text: "Check the departure station on your ticket. Rome, Milan, Venice and Naples all have more than one major station." },
        { title: "Find your train on the departure board", text: "Look for the \"Partenze\" (departures) board and find your train number and final destination — the destination shown may be beyond your stop." },
        { title: "Wait for the platform (binario)", text: "The platform number often appears only shortly before departure. Stay near the board, and watch for changes." },
        { title: "Check the train number again", text: "Several trains can leave from nearby platforms at similar times. Confirm the number on the platform display." },
        { title: "Find your carriage and class", text: "On high-speed trains, carriage numbers are shown by the doors, and some platforms show where each carriage will stop." },
        { title: "Board", text: "Doors close shortly before departure, so board in good time. Mind the gap between the platform and the train." },
        { title: "Find your seat if you have one", text: "Seat numbers are shown above or beside each seat. On regional trains, sit anywhere." },
        { title: "Keep your ticket accessible", text: "Staff check tickets on board. Have your QR code or paper ticket and your ID ready." },
      ],
    },
    p("Some large stations have ticket gates at the entrance to the platforms, so have your ticket ready before you reach them."),
    {
      type: "image",
      src: `${IMG}/pisa-centrale-departure-board.webp`,
      alt: "Digital departure screens hanging above a platform at Pisa station",
      caption: "Departure screens at Pisa. Boards list each train by number, destination and platform (binario).",
      credit: unsplash("Tim Photoguy", "tim0at0unsplash"),
    },
    h3("Words you'll see at the station"),
    table(
      ["Italian", "Meaning"],
      [
        ["Partenze", "Departures"],
        ["Arrivi", "Arrivals"],
        ["Binario", "Platform or track"],
        ["Carrozza", "Carriage"],
        ["Posto", "Seat"],
        ["Ritardo", "Delay"],
        ["Cancellato / Soppresso", "Cancelled"],
        ["Biglietteria", "Ticket office"],
        ["Convalida / obliteratrice", "Validation / validating machine"],
        ["Coincidenza", "Connection"],
        ["Uscita", "Exit"],
      ],
      "Station vocabulary"
    ),

    // ——— 9 ———
    h2("Italy's major train stations"),
    answer("Big stations such as Roma Termini, Milano Centrale and Firenze Santa Maria Novella are busy and large. Allow extra time, check which station your train uses, and keep your belongings close."),
    table(
      ["Station", "Where it is", "Getting around", "Good to know"],
      [
        ["Roma Termini", "Central Rome", "Metro lines A and B; many buses", "Rome's main hub; very busy, with gates to the platforms"],
        ["Roma Tiburtina", "East of the centre", "Metro line B", "Some high-speed trains use Tiburtina — check your ticket"],
        ["Milano Centrale", "North-east of the centre", "Metro lines M2 and M3", "Very large; allow time to reach your platform. Malpensa Express trains leave here"],
        ["Firenze Santa Maria Novella", "Edge of the historic centre", "Walkable to the Duomo; T2 tram to the airport", "Busy but compact"],
        ["Venezia Santa Lucia", "On the Grand Canal", "Water buses (vaporetti) and walking", "Don't confuse it with Venezia Mestre on the mainland"],
        ["Bologna Centrale", "North of the historic centre", "Buses, or around 20 minutes' walk to the centre; Marconi Express to the airport", "High-speed platforms are deep underground — allow extra time"],
        ["Napoli Centrale", "Piazza Garibaldi, east of the centre", "Metro lines 1 and 2; Circumvesuviana nearby", "Busy area; some high-speed trains also call at Napoli Afragola outside the city"],
      ],
      "Major stations at a glance"
    ),
    p("Arriving in Venice by train is one of the great arrivals in Europe: you walk out of Santa Lucia straight onto the Grand Canal. If you're staying in the city, make sure your ticket runs to Santa Lucia rather than stopping at Mestre. For places to base yourself, see [Venice beyond San Marco](/cities/venice-quieter-neighbourhoods)."),

    // ——— 10 ———
    h2("Luggage on Italian trains"),
    answer("There's no check-in for luggage on Italian trains: you carry your bags on board and store them yourself. Pack so you can lift your case onto a rack and move quickly along a platform."),
    ul(
      "**Storage** — there are overhead racks for small bags and, on many trains, luggage areas at the end of carriages or between seats.",
      "**Operator rules** — Italo's published rules say luggage in its Smart environment must not exceed 75 × 53 × 30 cm. Trenitalia's general conditions require passengers to keep luggage in the spaces provided without obstructing others. Check your operator's current rules before travelling with large or unusual items.",
      "**Aisles and doors** — never leave bags in aisles or doorways.",
      "**Valuables** — keep passports, money and electronics with you rather than in cases at the end of the carriage.",
      "**Labels** — a name tag helps if a bag is misplaced.",
      "**Steps** — many trains have steps up from the platform, which can be steep with a heavy case."
    ),
    tip("Choose a seat where you can see your luggage, or keep a smaller bag at your feet. On busy trains, board early so you can store cases before the racks fill.", "Keep your bags in sight"),
    {
      type: "image",
      src: `${IMG}/suitcase-on-platform-milano-centrale.webp`,
      alt: "A yellow suitcase standing on an empty platform at Milano Centrale",
      caption: "Travel with luggage you can lift yourself. There's no baggage check-in on Italian trains.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 11 ———
    h2("Travelling by train from Italian airports"),
    p("Several major airports have direct rail, tram or shuttle links into the city, which often connect well with onward trains. Check current timetables and fares with the operator before you travel."),
    table(
      ["Airport", "Link into the city", "Notes"],
      [
        ["Rome Fiumicino", "Leonardo Express, non-stop to Roma Termini; regional trains to other Rome stations", "Some long-distance Frecciarossa services also call at the airport"],
        ["Milan Malpensa", "Malpensa Express to Milano Centrale, Porta Garibaldi and Cadorna", "Operated by Trenord; buy the right ticket for Malpensa"],
        ["Milan Bergamo (Orio al Serio)", "Buses to Bergamo station and Milan", "A direct rail link to the airport has been under construction — check whether it has opened"],
        ["Venice Marco Polo", "Buses to Piazzale Roma and Venezia Mestre station; Alilaguna water buses", "No train serves the airport"],
        ["Florence", "T2 tram towards Santa Maria Novella station", "The tram ride takes around 20 minutes"],
        ["Pisa", "PisaMover shuttle to Pisa Centrale", "Connects with trains to Florence and the coast"],
        ["Bologna", "Marconi Express monorail to Bologna Centrale", "A short ride to the main station"],
      ],
      "Airport rail and tram links"
    ),
    p("Our guide to [Italian airport transfers](/guides/italy-airport-transfers) covers taxis, buses and water transport as well."),

    // ——— 12 ———
    h2("Train vs car"),
    answer("Trains are usually better between cities; a car is usually better for countryside, mountains and places with several rural stops. Many visitors use both — trains for the cities, a hire car for a few days in between."),
    table(
      ["Situation", "Train", "Car"],
      [
        ["Rome – Florence", "Often the most practical option", "Usually less convenient: traffic zones and parking in both cities"],
        ["Major city centres", "Stations are usually central", "Restricted traffic zones (ZTLs) and scarce parking"],
        ["Tuscan countryside", "Limited in many areas", "More flexible for hill towns and wineries"],
        ["Dolomites", "Depends on your itinerary; buses and lifts fill gaps in season", "Can offer more flexibility"],
        ["Amalfi Coast", "Train to Salerno or Naples, then ferry or bus", "Narrow roads and difficult parking"],
        ["Several rural stops in a day", "Limited", "More flexible"],
      ],
      "Choosing between train and car"
    ),
    p("If you do drive, read [what to know before driving in Italy](/guides/driving-in-italy) — especially the section on restricted traffic zones."),

    // ——— 13 ———
    h2("Are rail passes worth it in Italy?"),
    answer("Sometimes, but not automatically. Compare the cost of point-to-point tickets for your actual journeys with the pass price plus any reservation fees."),
    p("Passes such as Interrail and Eurail cover Trenitalia services, but high-speed and Intercity trains usually still need a paid seat reservation, and Italo trains aren't covered at all. Point-to-point tickets are often simpler for a typical first trip with three or four train journeys."),
    ul(
      "**A pass may suit you if** you're making many journeys, want to decide your route as you go, or are combining Italy with travel in other countries.",
      "**Point-to-point tickets may suit you if** you have a fixed route with a few long journeys, or want to use Italo on some legs.",
      "**Before buying**, check the current pass terms, which trains need reservations and what those reservations cost."
    ),

    // ——— 14 ———
    h2("Train travel with children"),
    ul(
      "**Seats** — book reserved seats together on high-speed trains in a single booking so the family sits together.",
      "**Luggage** — pack so that one adult can manage the bags while another manages the children, especially at busy stations.",
      "**Strollers** — a compact, foldable stroller is easiest; Italo, for example, treats strollers as luggage.",
      "**Stations** — lifts can be slow or busy at large stations, so allow extra time between arrival and departure.",
      "**Timing** — avoid tight connections, and book trains around naps and meals where you can.",
      "**Fares** — child fares and rules for infants vary by operator and fare type; check them when booking."
    ),

    // ——— 15 ———
    h2("Accessibility and assistance"),
    answer("Free assistance for passengers with disabilities or reduced mobility is available at many Italian stations through RFI's Sala Blu service. Book it in advance through the official channels."),
    p("[Rete Ferroviaria Italiana (RFI)](https://www.rfi.it/en/for-persons-with-disability.html), which manages the rail network, runs the Sala Blu service. Assistance can be requested online, through the Sala Blu+ app or by contacting a Sala Blu office. How much notice is needed depends on the station and time of day — at some major stations it can be booked shortly before departure during the day, while other stations require more notice — so request it as early as possible."),
    p("When booking a ticket, reserve an accessible seat or wheelchair space with the operator. Trenitalia and Italo each publish information on accessible services and how to request them; check the details for your train."),

    // ——— 16 ———
    h2("Delays, cancellations and strikes"),
    answer("Check the operator's app or website and the station boards for live updates. If your train is significantly delayed, you may be entitled to compensation under the operator's conditions and EU rules."),
    h3("During the journey"),
    ul(
      "Watch the \"Ritardo\" (delay) column on departure boards and listen for announcements, which are often also in English at major stations.",
      "Operator apps send updates for trains you've booked.",
      "If a train is cancelled, ask at the ticket office or information point about the next available service."
    ),
    h3("Compensation"),
    p("Trenitalia's published conditions provide compensation of 25% of the ticket price for arrival delays of 60–119 minutes and 50% for delays of 120 minutes or more, with specific rules for regional trains, and a bonus for shorter delays on some Frecce services. EU rail passenger rules set out similar minimum rights. Check the current conditions and how to claim with your operator."),
    h3("Missed connections"),
    p("Under EU rail passenger rights, protection for missed connections applies when your journey is booked on a single through-ticket. If you've bought separate tickets for each train, a delay on the first doesn't automatically protect the second — another reason to leave generous time between trains."),
    h3("Strikes"),
    p("Transport strikes (scioperi) happen in Italy and are announced in advance. The Italian Ministry of Infrastructure and Transport publishes a [strike calendar](https://scioperi.mit.gov.it/), and operators post notices before each strike. According to Trenitalia, essential regional services run during guaranteed peak time bands, from 06:00 to 09:00 and 18:00 to 21:00 on weekdays, and a list of guaranteed long-distance trains is published for each strike. Check notices close to your travel date rather than relying on older information."),
    {
      type: "image",
      src: `${IMG}/travellers-boarding-train-milano-centrale.webp`,
      alt: "Two travellers with backpacks standing beside a regional train at Milano Centrale",
      caption: "Leave generous time for connections, especially if each train is on a separate ticket.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 17 ———
    h2("Common first-time mistakes"),
    table(
      ["Mistake", "What to do instead"],
      [
        ["Going to the wrong station", "Check the station name on your ticket — many cities have more than one"],
        ["Confusing Roma Termini and Roma Tiburtina", "Both are major Rome stations; plan your route to the one on your ticket"],
        ["Not checking the train number", "Match the number on your ticket to the board, not just the destination"],
        ["Assuming every ticket works the same way", "Reserved high-speed and regional tickets follow different rules"],
        ["Missing a platform change", "Keep checking the board until you board"],
        ["Booking connections that are too tight", "Leave extra time, especially at large stations or on separate tickets"],
        ["Ignoring fare restrictions", "Check whether your fare allows changes before you buy"],
        ["Leaving luggage unattended", "Keep bags in sight and valuables on you"],
        ["Not checking for delays or strikes", "Check the operator's app and official notices on the day"],
        ["Assuming stations are small and simple", "Allow time to navigate big stations, lifts and gates"],
        ["Getting off at Venezia Mestre by mistake", "Stay on to Venezia Santa Lucia for the historic city"],
      ],
      "Mistakes and how to avoid them"
    ),

    // ——— 18 ———
    h2("Practical train travel checklist"),
    p("Tick these off as you plan. For the wider trip, see our [Italy travel planning checklist](/guides/italy-travel-planning-checklist)."),
    {
      type: "checklist",
      id: "italy-by-train",
      groups: [
        {
          title: "Before booking",
          items: ["Check the destination station", "Compare train types and operators", "Check fare conditions", "Check the departure time", "Check the arrival time and connections"],
        },
        {
          title: "Before departure",
          items: ["Download or save your ticket", "Note the train number", "Check the departure station", "Check for delays or strikes", "Keep your ID accessible", "Plan to arrive with time to spare"],
        },
        {
          title: "At the station",
          items: ["Check the departure board", "Confirm the platform (binario)", "Confirm the train number", "Validate a paper regional ticket", "Find your carriage", "Find your seat"],
        },
      ],
    },
    {
      type: "image",
      src: `${IMG}/train-carriage-seats-tarvisio.webp`,
      alt: "Rows of empty seats inside a train carriage at Tarvisio in Friuli Venezia Giulia",
      caption: "An empty carriage at Tarvisio, in the far north-east. Early-morning and mid-day trains are often the quietest.",
      credit: unsplash("viktor rejent", "viktor_rejent"),
    },
  ],

  faqs: [
    { question: "Is it easy to travel around Italy by train?", answer: "Yes, between most major cities. High-speed trains connect cities such as Milan, Venice, Bologna, Florence, Rome and Naples frequently, and stations are usually central. Rural areas and parts of the south are harder to reach by train alone." },
    { question: "Is Trenitalia or Italo better?", answer: "Neither is better for every trip. Trenitalia runs high-speed, Intercity and regional trains across the country; Italo runs high-speed trains on the main corridors only. Compare timetables, fares and conditions for your specific journey." },
    { question: "Do I need to book Italian trains in advance?", answer: "For high-speed trains, booking once your plans are fixed is sensible: fares vary with demand, and popular trains can fill up. Regional fares are fixed, so you can buy those on the day." },
    { question: "How far in advance can I book trains in Italy?", answer: "High-speed tickets typically go on sale several months ahead, but the exact window varies by operator and timetable period. Check the operator's website for your travel dates." },
    { question: "Do I need to reserve a seat on Italian trains?", answer: "It depends on the train. High-speed and Intercity tickets are for a specific train and include an assigned seat. Regional trains have no seat reservations — you sit wherever there's space." },
    { question: "Do I need to validate my train ticket in Italy?", answer: "Only some tickets. Trenitalia says paper regional tickets must be validated in the station machines before departure, while digital regional tickets activate automatically. High-speed tickets for a specific train don't need stamping. Follow the instructions on your ticket." },
    { question: "Can I buy train tickets at the station?", answer: "Yes. Stations have self-service machines for Trenitalia and Italo, and larger stations have ticket offices. Buying online in advance usually gives more choice of high-speed fares." },
    { question: "Can I take large luggage on Italian trains?", answer: "Yes, but you carry and store it yourself — there's no check-in. Operators set their own rules: Italo, for example, limits luggage in its Smart environment to 75 × 53 × 30 cm. Check your operator's current rules." },
    { question: "Are Italian trains usually on time?", answer: "Many are, but delays do happen, particularly at busy times or during engineering works. Check live information in the operator's app and on station boards, and avoid very tight connections." },
    { question: "What happens if my Italian train is delayed?", answer: "Follow updates on the boards and in the operator's app. For long delays, operators pay compensation under their conditions — Trenitalia, for example, pays 25% for arrival delays of 60–119 minutes and 50% for two hours or more. Claim through the operator." },
    { question: "Is a train pass worth it in Italy?", answer: "Not automatically. Compare point-to-point tickets for your actual journeys with the pass price plus reservation fees for high-speed trains. Passes don't cover Italo." },
    { question: "Is it better to travel Italy by train or car?", answer: "Trains are usually better between cities; cars are better for countryside, mountains and rural areas. Many visitors take trains between cities and hire a car for a few days in between." },
    { question: "Which Italian cities are connected by high-speed trains?", answer: "The main corridor runs from Turin and Milan through Bologna, Florence and Rome to Naples and Salerno, with fast services to Venice via Padua and Verona, and extensions to other cities on some services." },
    { question: "How early should I arrive at an Italian train station?", answer: "Aim to arrive 20–30 minutes before a high-speed departure at a large station, and more if you need to buy a ticket, validate one or navigate with luggage. There's no check-in, but big stations take time to cross." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "Trenitalia", url: "https://www.trenitalia.com/en.html", note: "national operator: tickets, timetables and conditions" },
    { label: "Trenitalia — travelling on regional trains", url: "https://www.trenitalia.com/en/information/travelling-on-regional-trains.html", note: "paper ticket validation" },
    { label: "Trenitalia — digital regional tickets", url: "https://www.trenitalia.com/en/information/digital-regional-ticket.html", note: "automatic activation" },
    { label: "Trenitalia — compensation for delays", url: "https://www.trenitalia.com/en/information/compensation-for-delays-and-refund.html", note: "compensation thresholds" },
    { label: "Trenitalia — in case of strike", url: "https://www.trenitalia.com/en/information/in-case-of-strike.html", note: "guaranteed services" },
    { label: "Italo", url: "https://www.italotreno.com/en", note: "private high-speed operator" },
    { label: "Italo — luggage rules", url: "https://blog.italotreno.com/en/train-world/luggage-and-suitcases-on-italo-all-the-rules/", note: "luggage size in Smart" },
    { label: "RFI — assistance for persons with disability", url: "https://www.rfi.it/en/for-persons-with-disability.html", note: "Sala Blu service" },
    { label: "Ministry of Infrastructure and Transport — strike calendar", url: "https://scioperi.mit.gov.it/", note: "announced strikes" },
    { label: "Your Europe — rail passenger rights", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_en.htm", note: "EU rights for delays and connections" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/en/tickets/travel-titles/malpensa-express/", note: "Milan Malpensa rail link" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/en/", note: "Bologna airport link" },
    { label: "PisaMover", url: "https://pisa-mover.com/en/shuttle-service/", note: "Pisa airport link" },
  ],
};
