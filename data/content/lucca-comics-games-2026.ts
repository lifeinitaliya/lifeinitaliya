import type { ArticleContent, ContentBlock } from "@/lib/types";

const IMG = "/images/events/lucca-comics-games-2026";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

export const luccaComicsGames2026: ArticleContent = {
  body: [
    answer("**Lucca Comics & Games 2026 runs from Wednesday 28 October to Sunday 1 November** in Lucca, Tuscany. The 60th anniversary edition, themed \"Legacy\", is one of the largest comics, manga, gaming and pop-culture festivals in Europe. Tickets must be purchased in advance through TicketOne and entry requires both a valid ticket and a wristband collected at one of the official welcome desks in Lucca. This guide covers everything first-time visitors need to plan the trip."),

    {
      type: "facts",
      title: "Lucca Comics & Games 2026 at a glance",
      rows: [
        { label: "Dates", value: "Wednesday 28 October – Sunday 1 November 2026 (five days)" },
        { label: "Early exhibitions", value: "Official exhibitions open from 3 October 2026" },
        { label: "Location", value: "Lucca, Tuscany — historic walled city, approximately 80 km west of Florence and 20 km east of Pisa" },
        { label: "Theme", value: "\"Legacy\" — 60th anniversary edition" },
        { label: "Daily cap", value: "80,000 admissions per day" },
        { label: "Tickets", value: "Sold exclusively via TicketOne; both a ticket and a wristband are required for entry to ticketed areas" },
        { label: "Official website", value: "lucca2026.luccacomicsandgames.com" },
        { label: "Accessibility", value: "Senza Barriere programme; senzabarriere.luccacomicsandgames.com" },
        { label: "Best base", value: "Lucca (fully booked early), Pisa (30–38 min by train), Montecatini Terme, Viareggio" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "What is Lucca Comics & Games?",
        "The 2026 edition: Legacy and the 60th anniversary",
        "Dates, opening hours and programme",
        "Tickets, wristbands and entry",
        "How to get to Lucca",
        "Where to stay",
        "Understanding the festival areas",
        "Planning your visit",
        "Cosplay, families and accessibility",
        "Food, facilities and what to bring",
        "Lucca beyond the festival",
        "Common mistakes to avoid",
      ],
    },

    image("lucca-bell-tower-rooftops", "Stone bell towers rising above a terracotta rooftop panorama in Lucca's historic centre", true),

    h2("What is Lucca Comics & Games?"),
    p("Lucca Comics & Games is an annual festival held in the walled Tuscan city of Lucca each autumn. It covers comics (both Italian and international), manga, board games, role-playing games, card games, video games, anime, cinema, fantasy fiction, cosplay, and a wide range of adjacent pop-culture interests. The festival uses the historic city as its venue: streets, piazzas, former churches, and indoor exhibition halls all serve as venues for exhibitions, publisher stands, panel discussions, guest appearances, tournaments, and cosplay events."),
    p("The festival attracts a very broad audience — from comics collectors and tabletop gamers to anime fans, cosplayers and families attending together. Some elements, such as large publisher halls and outdoor piazza events, are accessible to all visitors; others, such as specific talks, previews, or gaming sessions, may require separate booking or registration. Checking the official programme for your specific interests before arrival is essential."),
    p("The event is large, and the city fills significantly during the five main days. Some areas of the historic centre become very crowded on Fridays and Saturdays; Wednesday and Thursday are generally calmer and easier for first-time visitors to navigate."),

    image("lucca-hilltop-view", "Lucca's historic skyline with its medieval towers and church spires set against the Tuscan hills"),

    h2("The 2026 edition: Legacy and the 60th anniversary"),
    p("The 2026 edition marks Lucca Comics & Games' 60th anniversary. The theme, \"Legacy\", reflects six decades of comics, gaming, and the culture of the fantastic — and the ways in which creative works pass from one generation to the next. The official 2026 poster was created around a \"meta-poster\" concept, building a single detail-rich image from references to the protagonists of Lucca's historic posters across the decades. Veteran illustrator Claudio Castellini was involved in this concept; a variant poster by Louise Stéphant, a 10-year-old French comics artist, was unveiled at the opening ceremony as a symbolic passing of the pencil to the next generation."),
    p("The 60th anniversary edition features over 80 Italian and international publishers, more than 400 guests, and a programme that spans exhibitions, panels, premieres and competitions. Confirmed headline guests include Go Nagai, Frank Miller, Jonathan Hickman and Peach Momoko. The programme is updated progressively on the official website; check [lucca2026.luccacomicsandgames.com](https://lucca2026.luccacomicsandgames.com/en/) for the current state."),
    note("**Exhibitions open earlier.** The official exhibition programme begins on 3 October 2026, a full month before the main festival days. If you are in Tuscany in October, it is worth checking whether any exhibitions you want to see open before 28 October."),

    h2("Dates, opening hours and programme"),
    table(
      ["Day", "Date", "General notes"],
      [
        ["Wednesday", "28 October 2026", "Festival opens; quieter than the weekend days"],
        ["Thursday", "29 October 2026", "Still relatively accessible; recommended for first visits"],
        ["Friday", "30 October 2026", "Marked as \"Hurry up\" on official ticket page (limited availability as of mid-October 2026)"],
        ["Saturday", "31 October 2026", "Marked as \"Last spots\" on official ticket page; busiest day; also Halloween"],
        ["Sunday", "1 November 2026", "Festival closes; 1 November is Ognissanti (All Saints' Day), a public holiday in Italy"],
      ],
      "General admission hours are published on the official website. Individual activities, exhibitions and evening events may follow different schedules."
    ),
    p("The official programme lists hundreds of events across multiple venues. To navigate it effectively, use the filters on the programme page to narrow by interest, venue, or date. Not all events require a ticket beyond general admission, but some talks, signings, and competitions may require advance registration or separate passes — check each listing individually."),
    p("Events at the official programme page: [lucca2026.luccacomicsandgames.com/en/programme](https://lucca2026.luccacomicsandgames.com/en/)"),

    h2("Tickets, wristbands and entry"),

    h3("Buying tickets"),
    p("Tickets for Lucca Comics & Games 2026 are sold exclusively through TicketOne, at [luccacomicsandgames.ticketone.it](https://www.ticketone.it/artist/lucca-comics-games/). Since 1 October 2026, tickets have also been available at physical TicketOne points of sale across Italy. You can buy a maximum of five tickets per transaction online."),
    p("Single-day tickets range from approximately €26.50 (Wednesday) to €34.50 (Saturday), with Friday and Sunday priced between those amounts. A five-day pass is approximately €95 including delivery. These prices were current as of October 2026; verify the exact price on the TicketOne page before purchasing, as charges and fees may apply."),
    p("The daily admission cap is 80,000 visitors. As of mid-October 2026, Friday 30 October was showing limited availability and Saturday 31 October was near capacity. Tickets can also be purchased at the festival's on-site ticket offices in Lucca each day while daily capacity remains."),

    note("**Do not buy from unofficial resellers.** Tickets purchased outside of TicketOne cannot be verified and will not give you a valid wristband. Only official TicketOne channels are authorised."),

    h3("Wristbands and entry"),
    p("A ticket alone is **not sufficient** to enter ticketed festival areas. You must also obtain and wear a wristband. There are two ways to get one:"),
    ul(
      "**Home delivery (now closed for 2026).** This option — buying a ticket with the wristband posted to your address — closed at 10:00 on 16 October 2026. It is no longer available for this edition.",
      "**Welcome desk collection.** Five welcome desks are located around Lucca, open from Wednesday 28 October to Sunday 1 November, from 06:30 to 18:30. Bring your ticket confirmation and a valid identity document. Wristbands can also be collected at TicketOne GOLD points of sale in advance."
    ),
    p("Welcome desk locations and any updates will be published on the official festival website. Arriving early at a welcome desk is strongly recommended on Friday and Saturday, when queues are typically longer."),
    p("Once you have your wristband, keep it on for the duration of the day. Entry may also be checked at specific venue entrances within the festival."),

    h3("Accessibility tickets"),
    p("Visitors with disabilities can request free accessible tickets, plus a reduced-price companion ticket, through the Senza Barriere programme at [senzabarriere.luccacomicsandgames.com](https://senzabarriere.luccacomicsandgames.com/). The accessible-ticket request form was open until 18 October 2026 for this edition. If you did not register in advance, contact the festival's accessibility team directly through the Senza Barriere site to ask about options for the festival days."),
    tip("The official Senza Barriere website also provides information on accessible venues and routes within the festival. Check it before travel if you have specific accessibility requirements."),

    image("lucca-medieval-street", "A narrow medieval street in Lucca leading towards one of the city's distinctive brick towers"),

    h2("How to get to Lucca"),

    h3("By train"),
    p("Lucca is well connected by regional rail. The main routes are:"),
    ul(
      "**From Pisa Centrale:** 30–38 minutes; the most frequent and practical connection. Trains run regularly throughout the day. From Pisa Galileo Galilei Airport, the PisaMover shuttle (approximately €6.50, 5–8 minutes) connects to Pisa Centrale station.",
      "**From Florence Santa Maria Novella:** Typically 1 hour 20 minutes to 1 hour 40 minutes by direct regional train. Some journeys require a change at Pisa. The fastest connections are direct; check Trenitalia for the specific timetable.",
      "**From Viareggio:** Approximately 20–25 minutes, on the same Pisa–Lucca–Florence line."
    ),
    p("Lucca railway station is located just outside the city walls, approximately 10 minutes on foot from the historic centre. The walk into the walls is straightforward. During the festival, the area around the station may be very busy, especially on Friday and Saturday afternoons."),
    p("Book return train tickets in advance. Festival trains fill quickly, and last-minute tickets may not be available. Check Trenitalia ([trenitalia.com](https://www.trenitalia.com/)) for timetables and tickets."),
    tip("If you plan to return to Pisa or Florence on Saturday evening or Sunday, book the return train when you book the outward journey. Trains from Lucca at the end of busy festival days sell out."),

    h3("By car"),
    p("Lucca is accessible from the A11 Firenze–Mare motorway (exit: Lucca Est or Lucca Ovest). The historic centre is closed to private vehicles, and festival-period parking in the surrounding area fills early. Official parking areas are published by the Municipality of Lucca and the festival organisation before the event."),
    p("During the festival, roads into Lucca can be subject to temporary closures and traffic restrictions. Check the Municipality of Lucca ([comune.lucca.it](https://www.comune.lucca.it/)) and the festival's official transport notices before driving."),
    p("Given the parking difficulty and road restrictions, arriving by train from Pisa or Florence is generally more practical than driving, especially for day visitors."),

    image("pisa-leaning-tower", "The Leaning Tower of Pisa rising from the green lawn of Piazza dei Miracoli under a blue sky"),

    h2("Where to stay"),
    p("Lucca itself fills up very quickly for the festival. Accommodation in the historic centre is limited, and most rooms are booked months in advance. If you haven't already reserved in Lucca, the following alternatives are worth considering."),

    h3("Pisa (recommended base outside Lucca)"),
    p("Pisa is the most practical alternative base, with frequent direct trains to Lucca and a much larger accommodation supply. The 30–38 minute journey means a Pisa base is workable for all five festival days. For visitors arriving at Pisa airport, staying in Pisa eliminates the need to travel to a different city before and after the festival. Pisa prices also rise during the festival period — book early and compare rates carefully."),

    h3("Viareggio and Lido di Camaiore"),
    p("Both coastal towns are on the same rail line as Lucca, approximately 20–30 minutes away. Viareggio has experienced high occupancy during the festival in previous years, so verify current availability early. Lido di Camaiore has hotels that offer festival packages; these are hotel promotions, so check directly and compare with independent booking platforms."),

    h3("Montecatini Terme"),
    p("Montecatini Terme, approximately 25 km south-east of Lucca, sits on the Lucca–Florence rail line and has a concentration of hotels. It can be a quieter and sometimes more affordable base. Journey time to Lucca is approximately 30–40 minutes by train; confirm the timetable before booking."),

    h3("Florence"),
    p("Florence is viable but less convenient as a daily base. The train journey takes 1 hour 20 minutes to 1 hour 40 minutes each way, which adds significantly to the day and limits flexibility. If you plan to combine the festival with two or three days in Florence, it can make sense — but check the return train time carefully before choosing accommodation far from Lucca."),

    note("Wherever you stay: verify the return train times for the festival days before finalising accommodation. Trains from Lucca on Friday and Saturday evenings fill quickly. Booking a Pisa hotel and discovering the last train is at 22:30 is more manageable than discovering the same from Florence."),

    image("lucca-city-walls-path", "The tree-lined promenade on top of Lucca's Renaissance city walls, a 4 km loop above the historic centre"),

    h2("Understanding the festival areas"),
    p("Lucca Comics & Games uses the entire historic city as its venue — the walled centre contains dozens of exhibition spaces, open-air market areas, indoor halls, theatre venues, and public piazzas. Venues change between editions and some areas require separate passes or booking. Always check the **current official map** at [lucca2026.luccacomicsandgames.com](https://lucca2026.luccacomicsandgames.com/en/) before arriving."),
    p("The festival is too large to cover fully in one day. Trying to visit every area leads to long walks, queue fatigue, and missed events. The most productive approach is to identify your two or three main interests in advance, locate the relevant venues on the map, and plan your day around those priorities."),
    ul(
      "**Comics and publishers:** Main publisher halls and signing queues — check locations on the official map.",
      "**Gaming:** Tabletop gaming tournaments, card game halls, and video game demos each have dedicated spaces. Some gaming events require pre-registration.",
      "**Anime and manga:** Specific halls and events are allocated to anime and manga publishers and guests.",
      "**Cosplay:** Cosplay events and competitions take place in specific arenas or piazzas; check the programme for times and locations.",
      "**Open piazzas:** Some outdoor areas of the festival are open to all visitors without separate entry; others are within ticketed perimeters."
    ),
    tip("Piazza Anfiteatro — built on the site of a Roman amphitheatre — is one of Lucca's most distinctive spaces and often hosts festival activity. Walking between venues takes longer than it might appear on a map; factor in 10–20 minutes for transitions between areas."),

    h2("Planning your visit"),

    h3("One-day plan (first visit)"),
    p("Choose one area of the festival as your main focus — for example, the comics and publishers section, the gaming halls, or the anime and manga exhibitions. Look up the relevant venues and note whether any events you want to attend require pre-registration or have specific entry times."),
    p("Arrive in Lucca in the morning, ideally before 10:00. Collect your wristband first if you haven't already done so at a TicketOne GOLD point in advance. Allow 20–30 minutes for the welcome desk queue, longer on Saturdays. Once inside, follow your priority venue. Take a break around midday — the city has cafés and restaurants throughout. Return to the festival for afternoon events, and aim to head back to your accommodation before 18:00–19:00 to avoid the worst of the evening transport rush."),

    h3("Two-day plan"),
    p("If you have two festival days, split the experience deliberately. Day one: focus on the areas most relevant to your main interest — see what you planned, attend any events or signings you pre-registered for. Day two: use the official map to explore the parts of the festival you didn't reach on day one, and leave time to walk the city walls or visit Piazza Anfiteatro without a festival schedule in mind. Wednesday and Thursday are quieter; if flexibility allows, arrive earlier in the week rather than concentrating both days on the weekend."),
    p("This is an editorial suggestion, not an official festival schedule. Events, queues and venue availability change during the festival. Check the programme each morning for updates."),

    image("lucca-rooftops-panorama", "Terracotta rooftops and bell towers of Lucca seen from above in golden afternoon light"),

    h2("Cosplay, families and accessibility"),

    h3("Attending in cosplay"),
    p("Lucca Comics & Games is one of the largest cosplay events in Italy, and elaborate costumes are welcomed and expected. A significant proportion of attendees come in costume, and the streets of the historic centre during the festival are a collective display that is itself part of the experience."),
    p("There are official cosplay competitions and events listed in the programme. If you plan to enter, check the relevant event pages for registration deadlines, costume categories and rules. Prop restrictions — on size, materials and replica weapons — apply and vary by venue. Verify the current prop and costume regulations on the official website before travelling. Rules from previous editions may have changed."),

    h3("Visiting with children"),
    p("The festival is family-friendly at a general level — much of it takes place outdoors in the historic streets, and children are present throughout. However, the crowds on Friday and Saturday are very large, which may be overwhelming for younger children. Wednesday and Thursday are significantly less crowded. Some themed areas and evening events are aimed at adult audiences; check individual programme listings."),
    p("Family facilities within the festival vary by venue and are not guaranteed to be consistent across the site. Check the Senza Barriere and festival accessibility pages for specific information on family amenities."),

    h3("Accessibility"),
    p("The festival operates a dedicated Senza Barriere accessibility programme covering ticket requests, venue accessibility information, and adapted routes. Contact the programme through [senzabarriere.luccacomicsandgames.com](https://senzabarriere.luccacomicsandgames.com/) for specific queries about accessibility arrangements. Note that Lucca's historic centre contains cobbled streets and uneven surfaces that can make navigation with a wheelchair or mobility aid more challenging in some areas."),

    h2("Food, facilities and what to bring"),
    p("The festival has food and drink vendors within many of its areas, and the historic centre of Lucca has a full range of bars, cafés, trattorias and restaurants. During the festival, popular spots fill quickly — particularly around lunchtime and early evening. Planning a sit-down lunch before 12:30 or after 14:00 avoids the main rush."),
    p("What to bring:"),
    ul(
      "**Comfortable shoes.** The festival involves many kilometres of walking on cobblestones.",
      "**Layers.** Late October in Lucca can be warm during the day and noticeably cooler in the evenings. Rain is possible — a light waterproof is useful.",
      "**A portable phone charger.** You will use your phone heavily for the programme, the map and your ticket. Battery drain is high during long festival days.",
      "**Water.** Stay hydrated. Water fountains are available in the city.",
      "**Your ticket and wristband.** The wristband must be worn throughout the day; do not remove it.",
      "**A valid identity document.** Required for wristband collection at welcome desks."
    ),
    p("Specific bag size restrictions, prohibited items, or food rules within individual venues are published on the official website and at venue entrances. Do not assume that rules from previous editions still apply — verify before travel."),
    tip("Large rucksacks and trolley bags slow movement through crowded streets. A day bag with your essentials is more practical."),

    image("lucca-clock-tower", "A historic clock tower in Lucca framed by the branches of trees in a quiet piazza"),

    h2("Lucca beyond the festival"),
    p("Lucca is worth exploring beyond the festival programme. The city's 4-kilometre Renaissance walls are its most distinctive feature: a broad promenade runs along the top of the entire circuit, shaded by rows of trees, and offers views across the historic centre and out to the hills. Walking or cycling the walls is free."),
    p("Piazza Anfiteatro — the oval piazza built on the footprint of a Roman amphitheatre, with no direct street entry, only four small arched doorways — is one of the most architecturally interesting spaces in Tuscany. Torre Guinigi, the tower with oak trees growing from its roof, and Torre delle Ore, the city's tallest clock tower, are two other distinctive landmarks. San Michele in Foro and the Duomo di San Martino are the main churches."),
    p("Be aware that during the festival, some streets, routes, and access points may be affected by event arrangements, pedestrian management, or temporary closures. Check the Municipality of Lucca's official notices ([comune.lucca.it](https://www.comune.lucca.it/)) for any active restrictions during the festival days."),
    p("For more on getting around Tuscany and planning your Italian itinerary, see [Italy by Train](/guides/italy-by-train) and [Getting Between Italian Cities](/guides/getting-between-italian-cities)."),

    image("lucca-piazza-plaza", "Cyclists and pedestrians crossing a sunlit piazza in central Lucca, framed by historic stone arcades"),

    h2("Common mistakes to avoid"),
    ul(
      "**Not booking accommodation before checking the return train.** Choose your base city based on practical last-train times, not just on proximity or price.",
      "**Assuming entry works with just a ticket.** You need both a valid ticket and a wristband. Missing the wristband collection step means you cannot enter ticketed areas.",
      "**Using last year's venue map or programme.** The festival layout changes between editions. Use only the current official 2026 map.",
      "**Planning too many activities in one day.** The festival is much larger than it appears on the city map. Queues, walking times and event durations add up. Two or three priorities per day is a realistic target.",
      "**Not pre-registering for specific events.** Some signings, talks, and competitions require advance registration. Check the programme pages for each event you want to attend.",
      "**Ignoring official road-closure and transport updates.** The Municipality of Lucca publishes ordinances and transport notices before each festival edition. These affect parking, road access, and sometimes public transport routes.",
      "**Arriving on Saturday without a plan.** Saturday 31 October is the busiest day of the festival — also Halloween. Without a clear priority venue and a realistic plan for managing crowds, the experience can be overwhelming."
    ),
  ],

  faqs: [
    {
      question: "When is Lucca Comics & Games 2026?",
      answer: "Lucca Comics & Games 2026 runs from Wednesday 28 October to Sunday 1 November 2026, with official exhibitions opening from 3 October. The festival takes place in the historic walled city of Lucca, Tuscany.",
    },
    {
      question: "Where can I buy official Lucca Comics & Games 2026 tickets?",
      answer: "Tickets are sold exclusively through TicketOne at luccacomicsandgames.ticketone.it and at physical TicketOne GOLD points of sale across Italy. Do not buy from unofficial resellers — only official TicketOne tickets can be verified at the welcome desks.",
    },
    {
      question: "Do I need a wristband as well as a ticket?",
      answer: "Yes. Both a valid ticket and a wristband are required to enter ticketed festival areas. The option to have the wristband posted to your home address closed on 16 October 2026. Wristbands for the 2026 edition must now be collected at one of the five official welcome desks in Lucca (open 06:30–18:30 each festival day) or at TicketOne GOLD points of sale.",
    },
    {
      question: "How much do Lucca Comics & Games tickets cost?",
      answer: "Single-day tickets range from approximately €26.50 (Wednesday) to €34.50 (Saturday). A five-day pass is approximately €95. Verify current prices on the TicketOne page before purchasing, as additional booking fees may apply.",
    },
    {
      question: "How do I get to Lucca by train?",
      answer: "From Pisa Centrale: 30–38 minutes by regional train. From Florence Santa Maria Novella: approximately 1 hour 20–40 minutes (direct or via Pisa). Check trenitalia.com for timetables. Book return tickets in advance — festival trains fill quickly, especially on Friday and Saturday evenings.",
    },
    {
      question: "Can I stay in Pisa and commute to the festival?",
      answer: "Yes. Pisa is the most practical alternative base, with frequent direct trains to Lucca (30–38 minutes) and a much larger hotel supply. For visitors arriving at Pisa airport, it also avoids an extra travel leg. Book early — Pisa accommodation fills up too during the festival period.",
    },
    {
      question: "Is Lucca Comics & Games suitable for children?",
      answer: "Generally yes, especially on Wednesday and Thursday when crowds are smaller. The outdoor festival atmosphere, costumes, and many of the exhibitions are family-friendly. Large Friday–Saturday crowds may be difficult for young children. Some events and evening activities are adult-oriented — check programme listings individually.",
    },
    {
      question: "What is the festival's theme for 2026?",
      answer: "The 2026 theme is \"Legacy\", marking the 60th anniversary of Lucca Comics & Games. The programme spans comics, manga, gaming, anime, cinema and cosplay, with confirmed headline guests including Go Nagai, Frank Miller, Jonathan Hickman and Peach Momoko.",
    },
    {
      question: "Is there accessibility support for visitors with disabilities?",
      answer: "Yes. The festival's Senza Barriere programme offers free accessible tickets (plus a reduced companion ticket) and venue accessibility information. The request form for this edition closed on 18 October 2026; contact the team directly through senzabarriere.luccacomicsandgames.com for festival-day assistance.",
    },
    {
      question: "Where can I find the latest official programme and venue map?",
      answer: "On the official 2026 festival website at lucca2026.luccacomicsandgames.com. The programme is updated progressively; check it the morning of your visit for any changes to event times or venues.",
    },
    {
      question: "What should I do first when I arrive in Lucca?",
      answer: "Collect your wristband if you haven't already done so at a TicketOne GOLD point in advance. Welcome desks are open from 06:30. Arriving before the general festival crowds — ideally before 09:00 on weekdays or 08:00 on Saturday — significantly reduces waiting time.",
    },
  ],

  sources: [
    {
      label: "Lucca Comics & Games 2026 — official festival site",
      url: "https://lucca2026.luccacomicsandgames.com/en/home",
      note: "Official 2026 edition home; dates, theme, programme, ticket links. Verified 18 October 2026.",
    },
    {
      label: "Tickets — Lucca Comics & Games 2026 (official)",
      url: "https://lucca2026.luccacomicsandgames.com/en/tickets",
      note: "Official ticket page; prices, availability status, wristband collection rules. Verified 18 October 2026.",
    },
    {
      label: "TicketOne — Lucca Comics & Games 2026",
      url: "https://www.ticketone.it/artist/lucca-comics-games/",
      note: "Official sales platform; per-day ticket listings and pricing. Verified 18 October 2026.",
    },
    {
      label: "Senza Barriere — Lucca Comics & Games 2026",
      url: "https://senzabarriere.luccacomicsandgames.com/?lang=en",
      note: "Official accessibility programme; free tickets for visitors with disabilities and companion tickets.",
    },
    {
      label: "Municipality of Lucca — ordinances and provisions for Lucca Comics 2026",
      url: "https://www.comune.lucca.it/notizia/lucca-comics-and-games-2026-tutte-le-ordinanze-e-i-provvedimenti-per-ledizione-2026/",
      note: "Official traffic, road closure and event ordinances for the 2026 edition.",
    },
    {
      label: "Lucca Comics & Games — 60th anniversary announcement",
      url: "https://lucca2026.luccacomicsandgames.com/en/news/the-lucca-comics-games-legacy-ticket-office",
      note: "Official Legacy theme announcement and ticket office news.",
    },
    {
      label: "Trenitalia — train timetables and tickets",
      url: "https://www.trenitalia.com/",
      note: "Official booking for Pisa–Lucca and Florence–Lucca services.",
    },
  ],

  sourcesTitle: "Sources and official references",
};
