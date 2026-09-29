import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Practical guide: "Driving in Italy: Rules, Costs, Documents and Tips".
// Road rules, limits, ZTL hours and toll procedures change. Facts below were
// checked in September 2026 against the Italian Highway Code (Codice della
// Strada, as published by ACI), municipal mobility sites, Autostrade per
// l'Italia and ANAS — re-check them whenever this guide is updated.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/driving-in-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const drivingInItaly: ArticleContent = {
  body: [
    // ——— Introduction ———
    p("A car can turn an Italy trip into something quite different: the hill towns of Tuscany, the masserie of Puglia, the mountain passes of the Dolomites and the empty interior of Sardinia are all far easier to reach by road. Driving also brings things that catch visitors out — restricted traffic zones in historic centres, motorway tolls, unfamiliar parking rules and rental conditions that are easy to skim past."),
    p("This guide covers what a foreign visitor needs to know before renting or driving a car in Italy: documents, rental conditions, road rules, speed limits, ZTLs, tolls, parking, fuel, what to do after an accident, and when a train is simply the better choice."),
    answer("**Many visitors can drive in Italy, but what you need depends on who issued your licence.** A licence issued in an EU or EEA country is recognised in Italy. If your licence was issued outside the EU/EEA, Italy's Highway Code says it must normally be accompanied by an **International Driving Permit** or an official translation — although international agreements can change this for particular countries, and rental companies set their own rules too. Before you travel, check the requirement for your specific licence with your licensing authority, the Italian embassy or consulate in your country, and your rental company."),
    important("This guide is general travel information, not legal advice. Rules depend on your nationality, licence, vehicle and rental company, and they change. Check the official sources linked at the end — and the posted signs on the road — before relying on anything here.", "Please read"),
    {
      type: "facts",
      title: "Driving in Italy at a glance",
      rows: [
        { label: "Can foreigners drive in Italy?", value: "Often yes — it depends on your licence, where it was issued and current requirements" },
        { label: "Side of the road", value: "Drive on the right, overtake on the left" },
        { label: "Major highways", value: "Autostrade (motorways), marked with green signs" },
        { label: "Toll roads", value: "Most autostrade charge tolls" },
        { label: "Restricted city areas", value: "ZTL zones (Zona a Traffico Limitato), usually camera-controlled" },
        { label: "Parking", value: "Rules vary by town — follow the local signs" },
        { label: "Rental car", value: "Age, licence, deposit and insurance conditions vary by company" },
        { label: "Emergency number", value: "112" },
        { label: "Best for", value: "Countryside, rural regions and trips with many small stops" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/val-dorcia-winding-road-cypresses.webp`,
      alt: "A winding road lined with cypress trees crossing rolling green hills near San Quirico d'Orcia in Tuscany",
      caption: "Near San Quirico d'Orcia in the Val d'Orcia — the kind of landscape where a car makes the most sense.",
      credit: unsplash("Luca Micheli", "lucamicheli"),
    },

    // ——— 1 ———
    h2("Can Tourists Drive in Italy?"),
    p("Yes — many tourists drive in Italy every year, in their own cars and in hire cars. Whether you can, and what you need to carry, depends mainly on where your licence was issued."),
    h3("EU and EEA licences"),
    p("A valid driving licence issued by an EU or EEA country is recognised in Italy. You don't need an International Driving Permit to use it."),
    h3("Licences issued outside the EU/EEA"),
    p("Article 135 of Italy's Highway Code covers visitors with licences issued by other countries. In general, if you are not resident in Italy (or have been resident for less than a year), you can drive with your foreign licence as long as it is valid and **accompanied by an International Driving Permit (IDP) or an official translation**. Driving without the required document can lead to a fine."),
    p("Exceptions and special arrangements exist through international agreements, and they differ by country — so the right answer for a driver from the United States, the United Kingdom, Canada, Australia or elsewhere is not necessarily the same. Rental companies may also ask for an IDP as a condition of hire even where the law might not strictly require one."),
    tip("An IDP is a translation document, not a licence on its own: carry it together with your original licence. In most countries it's issued by a national motoring organisation or licensing authority, and it has to be obtained before you leave home.", "IDP basics"),
    h3("Residents are treated differently"),
    p("These rules are for visitors. If you are moving to Italy or will be resident for more than a year, different licence-conversion rules apply — check with the Italian authorities."),

    // ——— 2 ———
    h2("Documents You May Need"),
    p("Carry these in the car whenever you drive. Police checks are routine in Italy, and you may be asked for documents at a roadside stop."),
    h3("Passport or identity document"),
    p("Rental companies ask for a passport or national ID card at pickup, and you should have it with you when driving."),
    h3("Valid driving licence"),
    p("Your original physical licence, valid for the category of vehicle you're driving. A photo or digital copy is not a substitute unless the rental company and the rules clearly say otherwise. Rental companies commonly require that you've held the licence for a minimum period — check the terms."),
    h3("International Driving Permit, where applicable"),
    p("If your licence was issued outside the EU/EEA, check whether you need an IDP or an official translation for Italy, and whether your rental company requires one. See the previous section."),
    h3("Rental agreement"),
    p("Keep the rental agreement in the car. It shows that you are authorised to drive the vehicle and contains the company's emergency and breakdown numbers."),
    h3("Insurance documentation"),
    p("Vehicles on Italian roads must have third-party liability insurance, and a hire car's cover is normally shown in the vehicle documents or rental paperwork. Keep any separate policy you've bought (for example, excess insurance) where you can find it."),
    h3("Payment card and deposit"),
    p("Most rental companies require a credit card in the main driver's name to hold a security deposit. Many do not accept debit or prepaid cards for the deposit, or accept them only with extra conditions. Check the deposit amount and the card rules before you book, and make sure your card limit can cover the hold."),

    // ——— 3 ———
    h2("Renting a Car in Italy"),
    p("Most visitors drive a hire car. Rental desks are found at airports, major railway stations and in cities. Conditions differ a lot between companies and between fares from the same company, so the details matter more than the headline price."),
    {
      type: "image",
      src: `${IMG}/fiat-500-parked-rome-street.webp`,
      alt: "A small red Fiat 500 parked at the edge of a tree-lined street in Rome",
      caption: "Small cars are common in Italy and easier on narrow streets and in tight parking spaces.",
      credit: unsplash("Sergio R. Ortiz", "serafort"),
    },
    h3("Before booking"),
    p("Read the full rental terms — not just the summary — and check:"),
    ul(
      "**Driver's age** — minimum and sometimes maximum ages, and whether a young-driver surcharge applies.",
      "**Licence requirements** — how long you must have held your licence, and whether an IDP is required.",
      "**Payment card** — whether a credit card in the driver's name is required.",
      "**Deposit** — the amount held on your card, and how long it takes to be released.",
      "**Insurance** — what's included, the excess (deductible) and what's excluded.",
      "**Mileage** — unlimited or capped, and the charge beyond the cap.",
      "**Fuel policy** — for example, full-to-full, and the charge if you don't refuel.",
      "**Cross-border restrictions** — whether you can take the car to other countries, and any extra fee.",
      "**Additional drivers** — each driver must be named on the agreement; a fee often applies.",
      "**Transmission** — manual or automatic (see below).",
      "**Child seats** — availability, and whether they must be requested in advance.",
      "**One-way rentals** — a fee often applies if you return the car to a different location.",
    ),
    h3("Manual or automatic?"),
    p("Rental fleets in Italy include plenty of manual cars. If you only drive automatics, book one specifically and early — and check that the booking confirms an automatic rather than \"or similar\" in a category that could be manual."),
    table(
      ["", "Manual", "Automatic"],
      [
        ["Availability", "Widely offered in rental fleets", "Offered by major companies, but usually fewer cars — especially in smaller categories and at smaller locations"],
        ["Ease on unfamiliar roads", "Fine if you drive manual regularly; hill starts and stop-start traffic add workload if you don't", "Often easier for drivers used to automatics, especially in towns and on steep, winding roads"],
        ["Rental price", "Compare quotes for your dates", "May differ from a comparable manual — compare quotes for your dates"],
        ["Booking advice", "Reserve early in busy seasons", "Reserve early, and confirm the transmission in writing"],
      ],
      "Manual vs automatic rental cars"
    ),
    h3("At pickup"),
    p("Take your time at the desk and at the car, even if there's a queue behind you."),
    ul(
      "**Existing damage** — walk around the car and make sure every scratch, dent and chip is recorded on the rental form.",
      "**Fuel level** — check it matches the agreement.",
      "**Mileage** — note the odometer reading.",
      "**Tyres** — look for obvious damage or low pressure.",
      "**Lights and mirrors** — check they work and aren't cracked.",
      "**Documents and equipment** — vehicle documents, the rental agreement, and the warning triangle and reflective vest.",
      "**Controls** — ask how to engage reverse, switch on the headlights, and what fuel the car takes.",
    ),
    tip("Photograph or film the whole car before you drive away — including the wheels, windscreen, roof and interior — with the rental bay visible, and do the same when you return it. This isn't a legal requirement, but it gives you a time-stamped record if a damage charge is disputed later.", "Photograph the car"),

    // ——— 4 ———
    h2("Basic Italian Road Rules"),
    p("Italy's rules are broadly similar to those in other European countries. These are the ones visitors most often ask about, based on the Highway Code as published by ACI."),
    ul(
      "**Drive on the right** and overtake on the left. On roads with several lanes in the same direction, keep to the right-hand lane unless you are overtaking.",
      "**Seat belts** are required for everyone in the car, front and back.",
      "**Headlights** — dipped headlights must be on when driving outside built-up areas, including during the day and on motorways.",
      "**Mobile phones** — using a handheld phone while driving is prohibited. Hands-free systems and earpieces are allowed if they don't require the use of your hands.",
      "**Child restraints** — children under 1.50 m tall must use an approved child restraint suitable for their weight.",
      "**Alcohol** — the general limit is 0.5 g/l of blood. For drivers under 21 and in their first three years after passing the test, the limit is zero. Penalties were tightened in December 2024; the safest choice is not to drink at all if you're driving.",
      "**Pedestrian crossings** — give way to pedestrians who are crossing or about to cross at a zebra crossing.",
      "**Emergency vehicles** — give way to vehicles using blue flashing lights and a siren.",
    ),
    important("Italian law also requires an anti-abandonment alert device when a child under four travels in a car registered in Italy — which includes most hire cars. If you're renting a child seat, ask the rental company whether it includes one.", "Travelling with young children"),
    p("You should also have a **warning triangle** and a **high-visibility reflective vest** in the car. Outside built-up areas, the vest must be worn if you get out of the car on the carriageway or hard shoulder — for example after a breakdown."),

    // ——— 5 ———
    h2("Italian Road Signs"),
    p("Italy uses standard European road signs, so most shapes and symbols will be familiar. The words on and around them are in Italian. These are the ones you're most likely to meet:"),
    table(
      ["Sign or term", "Meaning"],
      [
        ["Stop", "Stop completely and give way"],
        ["Dare precedenza", "Give way"],
        ["Senso unico", "One way"],
        ["Divieto di accesso / Senso vietato", "No entry"],
        ["Limite di velocità", "Speed limit"],
        ["Zona a Traffico Limitato (ZTL)", "Limited traffic zone — entry restricted, usually camera-controlled"],
        ["Varco attivo / Varco non attivo", "ZTL gate active (no entry without a permit) / not active"],
        ["Area pedonale", "Pedestrian zone"],
        ["Parcheggio", "Parking"],
        ["Passo carrabile", "Driveway — do not block"],
        ["Autostrada", "Motorway (green signs)"],
        ["Uscita", "Exit"],
        ["Tutte le direzioni", "All directions — follow when you're leaving a town"],
        ["Centro", "Town centre — often where a ZTL begins"],
        ["Lavori in corso", "Roadworks"],
        ["Rallentare", "Slow down"],
      ],
      "Common Italian road signs and terms"
    ),
    {
      type: "image",
      src: `${IMG}/siena-roma-direction-sign.webp`,
      alt: "Blue direction signs pointing to Siena and Roma beside a country road in Tuscany",
      caption: "Direction signs on ordinary roads are blue; motorway signs are green.",
      credit: unsplash("Claude Potts", "flickrrey"),
    },
    tip("In Italy, **green** direction signs lead to the autostrada (toll motorway) and **blue** signs to other main roads. This is the reverse of some other European countries, so it's worth remembering at junctions.", "Green means motorway"),

    // ——— 6 ———
    h2("Speed Limits"),
    p("The general limits below are set by Article 142 of the Highway Code. They apply to cars unless a sign shows otherwise. **Posted signs always take priority** — limits are often lower through villages, roadworks, bends and tunnels, and a few motorway sections allow higher speeds where signed."),
    table(
      ["Road type", "General limit (cars)", "In rain or snow", "Drivers in their first 3 years"],
      [
        ["Autostrada (motorway)", "130 km/h", "110 km/h", "100 km/h"],
        ["Main extra-urban road (dual carriageway)", "110 km/h", "90 km/h", "90 km/h"],
        ["Other roads outside built-up areas", "90 km/h", "90 km/h", "90 km/h"],
        ["Built-up areas (towns)", "50 km/h", "50 km/h", "50 km/h"],
      ],
      "General speed limits in Italy for cars"
    ),
    p("Limits can also vary by vehicle — lower limits apply to vehicles towing trailers or caravans, for example — and by local decision. Some cities have lowered the limit on many urban roads (Bologna, for example, now applies 30 km/h on most of its city streets), and some urban roads are signed up to 70 km/h. In short: read the signs rather than relying on a table."),
    {
      type: "image",
      src: `${IMG}/italia-border-speed-limit-sign.webp`,
      alt: "Border sign at the Italian frontier near Glurns showing speed limits: 50 in towns, 90 outside towns, 110 on main roads and 130 on motorways",
      caption: "Signs at the border crossings summarise the general limits — here near Glurns (Glorenza) in South Tyrol.",
      credit: unsplash("Roman Vasylovskyi", "rvasilovski"),
    },
    p("Speed is enforced with fixed and mobile cameras (often called *autovelox*) and, on many motorways, average-speed systems that measure your speed between two points. Italian law requires speed checks to be signposted in advance, but a sign is a warning, not an invitation to brake at the last moment: keep to the limit throughout."),

    // ——— 7 ———
    h2("ZTL Zones"),
    p("If you read one section of this guide carefully, make it this one. Restricted traffic zones are the most common reason visitors receive fines after driving in Italy — often months after they've returned home."),
    h3("What is a ZTL?"),
    p("A **Zona a Traffico Limitato** (ZTL, \"limited traffic zone\") is an area — typically a historic centre — where general traffic isn't allowed during certain hours. Only authorised vehicles may enter while the zone is active. Access is usually enforced by cameras at each entry point (*varco*) that read number plates automatically."),
    h3("Why does Italy use ZTLs?"),
    p("Many Italian historic centres were built long before cars. ZTLs reduce traffic, pollution and noise in narrow streets, protect historic buildings and make centres safer for the people who live, work and walk there."),
    h3("Where are ZTLs common?"),
    p("They're found in most large cities and in many smaller towns with historic centres — Rome, Florence, Milan, Bologna, Naples, Pisa, Siena and Verona all have them, along with countless hill towns and coastal villages. Each municipality sets its own boundaries, hours and exceptions, and some cities have several zones with different timetables, including evening and night zones in summer."),
    p("Florence is a good example of how specific the rules are. According to the city's mobility website, its central ZTL sectors are active Monday to Friday from 7:30 to 20:00 and on Saturday from 7:30 to 16:00, and from April to early October a summer night ZTL applies on Thursday, Friday and Saturday nights. Some gates, reserved for buses and emergency vehicles, are closed to other traffic at all times. Rome has several zones — including the historic centre and Trastevere — each with its own day and night hours. These details change, so always check the city's own website for your dates."),
    h3("How are ZTLs indicated?"),
    ul(
      "**The entry sign** — a white circle with a red border (the \"no vehicles\" sign) with the words *Zona a Traffico Limitato* and a panel showing the hours and exceptions.",
      "**An electronic panel** at many gates showing whether the zone is active right now. Wording varies by city, but you'll typically see *varco attivo* (active — do not enter without authorisation) or *varco non attivo* (not active).",
      "**A camera** mounted on a pole or gantry near the sign.",
    ),
    p("The signs are small, often placed at busy junctions, and easy to miss while you're concentrating on traffic and navigation. That's exactly why so many visitors drive through them."),
    h3("Who can enter?"),
    p("It depends on the city, but authorised vehicles typically include residents with permits, public transport, taxis, emergency vehicles and holders of disability badges who have registered their vehicle. Some cities allow guests to drive to a hotel inside the zone if the hotel registers the car's number plate with the municipality within a set time. Hire cars are not authorised by default."),
    h3("What happens to rental-car drivers?"),
    p("If your hire car passes an active gate without authorisation, the camera records the plate. The notice goes first to the rental company as the vehicle's owner. The company identifies you as the driver to the police, and usually charges you an administrative fee for doing so — check the amount in your rental terms. The police then send the fine to your home address. For drivers resident abroad, Italian law allows up to 360 days for the notice to be served, which is why fines can arrive long after the trip."),
    p("Each separate entry through a gate can be recorded as a separate violation, so circling a town centre while looking for a hotel can lead to several fines."),
    h3("How can visitors avoid accidental entry?"),
    p("Plan the last part of every drive into a town. Find out where the ZTL starts, where you'll park outside it, and how you'll reach your accommodation on foot or by public transport. If your accommodation is inside a ZTL, contact it before you arrive and ask exactly how access works."),
    h3("ZTL survival checklist"),
    ol(
      "**Check before entering.** Look up the ZTL for each town on your route on the municipality's website, including the hours for your dates.",
      "**Look for the signs.** Slow down near historic centres and watch for the ZTL sign, the active/not-active panel and the camera.",
      "**Confirm hotel access arrangements.** If you're allowed to drive to your hotel, find out which route to use and make sure the hotel registers your plate in time.",
      "**Don't rely solely on GPS.** Navigation apps may not show ZTL boundaries or hours, and may route you straight through one.",
      "**Ask your accommodation** whether it is inside a restricted zone, and where the nearest car park outside it is.",
      "**Follow current municipal rules.** Hours, boundaries and permits change — the city's website and the signs on the day are what count.",
    ),
    important("If you're not sure whether a zone is active, don't enter. Park outside and walk, or check the city's website first. A detour costs minutes; an unauthorised entry can cost a fine plus the rental company's fee.", "When in doubt"),

    // ——— 8 ———
    h2("Tolls and Autostrada"),
    p("An **autostrada** is a motorway. Italy's autostrade connect most major cities and are usually the fastest way to cover long distances by car. Most are toll roads, run by concession companies — Autostrade per l'Italia operates the largest network, and other companies run other routes."),
    h3("How tolls work"),
    p("On most autostrade, tolls are based on distance travelled and vehicle class:"),
    ol(
      "When you enter the motorway, stop at the barrier and **take a ticket** (*biglietto*) from the machine.",
      "Keep the ticket safe — don't leave it on the dashboard in the sun.",
      "When you leave, choose a lane at the toll plaza (*casello*) that accepts your payment method, insert the ticket and pay.",
    ),
    p("Some shorter stretches, ring roads and bypasses charge a fixed toll or are free, and a few newer motorways use barrier-free electronic tolling with no booths at all. If your route uses one of these, check the operator's website for how to pay. Route planners, including the one on the Autostrade per l'Italia website, can show an estimated toll before you set off."),
    {
      type: "image",
      src: `${IMG}/motorway-toll-plaza-rovereto.webp`,
      alt: "Cars approaching a multi-lane motorway toll plaza near Rovereto with mountains in the background",
      caption: "A toll plaza near Rovereto in Trentino. Check the lane signs before you commit to a lane.",
      credit: unsplash("viktor rejent", "viktor_rejent"),
    },
    h3("Choosing the right lane"),
    p("Autostrade per l'Italia uses coloured signs above each lane to show the payment methods accepted:"),
    table(
      ["Payment method", "Lane sign", "What to know"],
      [
        ["Card", "Blue sign, often marked \"Carte\"", "Blue lanes accept cards only (credit cards, and Viacard and similar toll cards). Most international credit cards work, but have a backup method in case one is refused."],
        ["Cash", "White sign with a cash symbol", "Cash lanes accept coins and notes, and automatic tills give change. Some also accept cards — check the symbols."],
        ["Electronic systems (Telepass and similar)", "Yellow sign marked \"Telepass\"", "Yellow lanes are for vehicles with an electronic toll device on board. Don't use them without one. Some hire cars come with a device — ask at pickup how it's charged."],
      ],
      "Paying tolls on Italian motorways"
    ),
    tip("If you end up at a toll plaza unable to pay — no ticket, card refused, wrong lane — don't reverse. Press the help or assistance button at the booth and follow the instructions. Where a toll can't be paid on the spot, you're given a notice explaining how to pay afterwards; Autostrade per l'Italia has an online payment page for this.", "If something goes wrong"),
    p("Other practical points: motorway service areas (*aree di servizio*) have fuel, food and toilets and are usually open around the clock; and on many motorways there are SOS call points along the hard shoulder for emergencies."),

    // ——— 9 ———
    h2("Parking in Italy"),
    p("Parking is often the hardest part of driving in Italy, especially in historic centres, where streets are narrow, spaces are few and many are reserved for residents. The most common convention for street parking uses coloured lines — but **rules vary between municipalities, so the local signs always take priority** over any general rule."),
    table(
      ["Marking", "What it usually means", "Check"],
      [
        ["Blue lines", "Paid parking (*sosta a pagamento*)", "The nearby sign for hours and tariffs; pay at the meter or through the app the town uses, and display the ticket if required"],
        ["White lines", "Often free parking", "Signs for time limits — some white spaces require a parking disc (*disco orario*) showing your arrival time — and for residents-only rules"],
        ["Yellow lines", "Reserved spaces — for example for residents, disabled badge holders, loading, taxis or police", "Don't park unless you hold the relevant permit"],
        ["No lines", "Not a parking space", "Stopping may be prohibited, especially near junctions and crossings"],
      ],
      "Common street-parking markings (conventions vary by town)"
    ),
    {
      type: "image",
      src: `${IMG}/passo-carrabile-sign-rome.webp`,
      alt: "A \"passo carrabile\" no-parking sign on a large wooden door in Rome",
      caption: "\"Passo carrabile\" marks a driveway or gate. Parking in front of it can get your car towed.",
      credit: unsplash("Egor Myznik", "vonshnauzer"),
    },
    h3("Meters, apps and garages"),
    p("Parking meters (*parcometri*) accept coins and often cards; many towns also use parking apps, with the details on the signs. Multi-storey and underground car parks (*parcheggi*) are common on the edge of historic centres and at major stations — often the simplest option in a city, and a good way to stay outside a ZTL."),
    h3("Other restrictions"),
    ul(
      "**Residential zones** — some streets are reserved for residents at certain times, even without yellow lines.",
      "**Loading zones** (*carico/scarico*) — for deliveries at the signed hours.",
      "**Street cleaning** — signs may show days and hours when parking is prohibited for cleaning; cars can be towed.",
      "**Market days** — squares used as car parks may be closed for weekly markets.",
    ),
    tip("Don't leave luggage, bags or electronics visible in a parked car, especially at car parks near popular sights and trailheads. Take valuables with you or keep them out of sight in the boot before you arrive.", "Leave nothing on show"),

    // ——— 10 ———
    h2("Fuel and Charging"),
    p("Check which fuel your hire car takes before you leave the rental car park — it's usually printed inside the fuel flap. Putting the wrong fuel in a car is expensive and often excluded from rental insurance."),
    table(
      ["On the pump", "Meaning"],
      [
        ["Benzina / Senza piombo", "Petrol (gasoline), unleaded — usually 95 octane"],
        ["Gasolio / Diesel", "Diesel"],
        ["GPL", "Liquefied petroleum gas (LPG)"],
        ["Metano", "Compressed natural gas (CNG)"],
        ["Self / Fai da te", "Self-service — you fill the tank yourself"],
        ["Servito", "Attended service — an attendant fills the tank, typically at a higher price per litre"],
      ],
      "Fuel terms at Italian filling stations"
    ),
    h3("Payment and opening hours"),
    p("Motorway service areas are usually open at all hours. Many other stations are staffed only during the day, sometimes with a lunch break, and switch to self-service machines outside those hours. The machines generally accept cards and often cash, but occasionally refuse foreign cards — so don't leave refuelling until the tank is nearly empty, especially in rural areas and on Sundays."),
    h3("Electric-car charging"),
    p("Public charging points are found in cities, at many motorway service areas and at a growing number of hotels, but coverage is uneven and can be thin in rural and mountain areas. Networks use different apps and payment methods. If you rent an electric car, ask the rental company which cables and charging cards or apps are included, and plan charging stops before you set off rather than assuming there'll be a charger where you need one."),

    // ——— 11 ———
    h2("Driving in Major Cities"),
    p("Driving in a big Italian city is possible, and many locals do it every day, but it's rarely the best use of a visitor's time. Traffic is dense, ZTLs cover most of the centres, and parking is limited and expensive. Most visitors find it easier to reach cities by train and pick up or return a hire car on the edge of town or at the airport."),
    table(
      ["City", "Main driving consideration"],
      [
        ["Rome", "Heavy traffic, several ZTLs (including the historic centre and Trastevere) with day and night hours, and limited parking"],
        ["Florence", "The whole historic centre is a camera-controlled ZTL; park outside it"],
        ["Milan", "Dense urban traffic; a charged congestion zone (Area C) in the centre and a wider low-emission zone (Area B)"],
        ["Venice", "No normal car access to historic Venice — roads end at Piazzale Roma, with car parks there and at Tronchetto"],
        ["Naples", "Busy traffic, ZTLs in the historic centre and demanding parking — many visitors prefer not to drive in the city"],
        ["Bologna", "ZTL and pedestrian areas in the centre, and a 30 km/h limit on most city streets"],
      ],
      "Driving in Italy's major cities"
    ),
    p("If you're flying in and then touring the countryside, collect the car when you leave the city rather than on arrival. See our guide to [Italy airport transfers](/guides/italy-airport-transfers) for getting from the airport into town without a car."),

    // ——— 12 ———
    h2("Driving in the Countryside"),
    p("This is where a car earns its keep. Rural Italy has good roads and relatively light traffic outside the peak season, and many of its best places are poorly served by public transport."),
    p("A car is particularly useful in:"),
    ul(
      "**Tuscany** — hill towns, wineries and farm stays, especially in areas like the Val d'Orcia.",
      "**Puglia** — the trulli, white towns and masserie of the Itria Valley, and the coast beyond.",
      "**Sicily** — the interior, the south-east and the less-visited coasts.",
      "**Sardinia** — where beaches and villages are spread out and buses are infrequent.",
      "**Parts of Umbria** and the Marche — small towns linked by country roads.",
      "**Rural northern Italy** — the lakes, the Langhe, and valleys in the Alps and Dolomites.",
    ),
    p("The benefits are flexibility, access to smaller villages and scenic roads, the freedom to stay in rural accommodation, and not depending on timetables. The trade-offs:"),
    ul(
      "**Parking** — hill towns usually have car parks outside the walls, often paid, and a ZTL inside.",
      "**Narrow roads** — country lanes can be single-track, with stone walls on both sides; white gravel roads (*strade bianche*) are common in Tuscany.",
      "**Navigation** — apps sometimes choose unpaved or unsuitable shortcuts. Stick to main roads when unsure.",
      "**Fuel and charging** — stations can be far apart in rural and mountain areas.",
      "**Seasonal conditions** — summer heat and traffic near the coasts; fog, ice and snow in winter.",
    ),
    {
      type: "image",
      src: `${IMG}/montalcino-street-ape-scooters.webp`,
      alt: "A red Piaggio Ape three-wheeler and scooters parked under a tree on a street in Montalcino",
      caption: "In Montalcino and other hill towns, visitors normally park outside the centre and walk in.",
      credit: unsplash("Barney Goodman", "bgoodpic"),
    },

    // ——— 13 ———
    h2("Mountain and Coastal Roads"),
    p("Some of Italy's most famous drives are also its most demanding. None is off-limits to a careful driver, but each asks for different things. Be honest about your confidence with narrow roads, hairpin bends and steep gradients — and about the size of the car you've booked."),
    h3("Dolomites"),
    p("The Dolomites have well-engineered roads over high passes, with long sequences of hairpin bends, steep gradients and, in summer, a lot of cyclists, motorcyclists and coaches. Some passes have seasonal or time-based traffic restrictions, and higher passes can close in winter. From 15 November to 15 April, winter tyres or snow chains on board are required on roads where signs or local ordinances say so — and in the mountains that's common. Parking at popular trailheads fills early in summer. See our guide to [visiting the Dolomites](/guides/visiting-the-dolomites)."),
    {
      type: "image",
      src: `${IMG}/alpine-pass-hairpin-road.webp`,
      alt: "A road climbing through a green mountain valley in a series of hairpin bends in the Italian Alps",
      caption: "Hairpin bends on an Alpine pass road in northern Italy. Use lower gears on long descents.",
      credit: unsplash("Samuele Bertoli", "ingsamu"),
    },
    h3("Amalfi Coast"),
    p("The coastal road (SS163) is narrow and winding, cut into cliffs, with tight bends, buses using the full width of the road and very limited, expensive parking in the towns. In peak season, traffic can be slow for long stretches. ANAS, the road's operator, applies an alternate number-plate scheme on the stretch between Vietri sul Mare and Positano during set periods: at the times it applies, cars with plates ending in an odd or even number can only use the road on matching days, with exemptions for some categories. The calendar is published each year; for 2026 it runs from June to October, and every day in August and September. Check the current ordinance before you plan to drive, and ask your hotel about parking. Many visitors use ferries and buses instead — see [ferries in Italy](/transport/ferries-in-italy)."),
    {
      type: "image",
      src: `${IMG}/amalfi-town-coast-road.webp`,
      alt: "The white houses of Amalfi on a steep hillside above the sea, with the coast road running along the sea wall",
      caption: "Amalfi, where the coast road squeezes between the town and the sea.",
      credit: unsplash("KaLisa Veer", "kalisaveer"),
    },
    h3("Tuscan countryside"),
    p("Main roads between Tuscan towns are generally easy to drive. The challenges are local: white gravel roads to farm stays, steep narrow lanes into hill towns, ZTLs at the gates of almost every historic centre, and busy car parks at popular towns in summer. Ask your accommodation whether the access road is unpaved, and allow extra time — distances look short on a map, but winding roads are slow."),
    h3("Sardinia and Sicily"),
    p("Both islands are large, and a car is often the most practical way to explore beyond the main cities. Main roads connect the principal towns; minor roads can be narrow, winding and variable in quality, and distances take longer than you'd expect. Fuel stations can be sparse inland, and summer traffic concentrates around the most popular beaches. Driving in Palermo and Catania, as in other large cities, involves dense traffic and ZTLs."),

    // ——— 14 ———
    h2("Accidents, Fines and Breakdowns"),
    h3("What to do after an accident"),
    p("Italian law requires anyone involved in an accident linked to their driving to **stop**, help anyone who is injured, and provide their details. Leaving the scene is an offence, and failing to assist injured people is a criminal matter. The emergency number throughout Italy is **112**."),
    {
      type: "steps",
      items: [
        { title: "Stop safely", text: "Stop as soon as it's safe, switch on your hazard lights and put on your reflective vest before getting out. Place the warning triangle behind the car if it's needed to warn other traffic." },
        { title: "Check for injuries", text: "Check yourself, your passengers and the other people involved. Don't move anyone who is seriously injured unless they are in immediate danger." },
        { title: "Contact emergency services when necessary", text: "Call **112** if anyone is injured, if the road is blocked or dangerous, or if there's a dispute. Operators can help in English and other languages. If people are injured, don't move the vehicles unless the emergency services tell you to." },
        { title: "Exchange the required information", text: "Exchange names, addresses, licence details, number plates and insurance details with the other drivers. In Italy this is often done on a joint accident report form (*Constatazione Amichevole di Incidente*, or CAI) — there should be one in the car. Don't sign anything you don't understand; you can note that you don't read Italian." },
        { title: "Document the scene", text: "Photograph the vehicles, their positions, the damage, number plates, road signs and the wider scene, and note the time and place. Ask witnesses for their contact details." },
        { title: "Contact the rental company", text: "Call the rental company's emergency number from your agreement as soon as possible, and follow its instructions. Rental agreements usually require accidents to be reported promptly." },
        { title: "Follow insurance instructions", text: "Report the accident to the rental company's insurer and any separate insurer you use, within the deadlines in your policy. Keep copies of every document." },
      ],
    },
    h3("Breakdowns"),
    ul(
      "**Move to a safe place** if you can — a lay-by, service area or hard shoulder — and switch on your hazard lights.",
      "**Wear the vest and use the triangle**, where it's safe to place it. On a motorway, get everyone out of the car on the side away from the traffic and wait behind the safety barrier.",
      "**Call the rental company's roadside assistance number** from your agreement. Don't arrange your own repairs without its approval.",
      "**Call 112** if anyone is in danger or the car is stopped somewhere hazardous. On motorways you can also use the SOS call points.",
      "**Don't attempt roadside repairs** on a busy road — changing a wheel on a motorway hard shoulder is dangerous.",
    ),
    h3("Traffic cameras and fines"),
    p("Italy uses cameras extensively: speed cameras, average-speed systems on motorways, red-light cameras and ZTL gates. Fines can also follow parking violations and unpaid tolls. Penalties vary with the offence, and some serious offences carry heavier consequences than a fine."),
    p("For a hire car, the process is the same as for ZTL fines: the notice goes to the rental company, which passes on your details, usually charges an administrative fee, and the fine then reaches you by post — possibly many months later. Read the fines section of your rental agreement so you know what the company charges. The only reliable way to avoid fines is to follow the posted limits and restrictions."),

    // ——— 15 ———
    h2("Rental-Car Insurance"),
    p("Rental insurance is where the price you're quoted and the price you pay can differ most. Read your own agreement: names, cover and excess amounts vary between companies and fares."),
    ul(
      "**Third-party liability (RCA)** — compulsory for every vehicle on Italian roads, and included in the rental. It covers damage and injury you cause to others.",
      "**Collision damage waiver (CDW) or loss damage waiver (LDW)** — limits what you pay if the rental car is damaged. In Italy, some form of damage and theft cover is commonly built into the rental price, but with an excess.",
      "**Theft protection (TP)** — limits what you pay if the car is stolen, again usually with an excess.",
      "**Excess (deductible)** — the maximum you'd pay towards damage or theft. It can be substantial, and it's often what the security deposit on your card covers.",
      "**Excess reduction** — optional cover sold by the rental company to reduce the excess, sometimes to zero.",
      "**Third-party excess insurance** — sold separately by other insurers; you'd usually pay the rental company first and claim back. The rental company may still hold a full deposit.",
      "**Credit-card cover** — some cards include rental cover. Check whether it's valid in Italy, which damage it covers, and what you'd need to claim.",
    ),
    important("Check what's excluded. Common exclusions include tyres, windscreens and glass, the underside and roof of the car, lost keys, the wrong fuel, driving on unpaved roads, and damage when an unnamed driver was at the wheel. If your route uses gravel roads, check your agreement allows them.", "Read the exclusions"),

    // ——— 16 ———
    h2("Train vs Car"),
    p("Italy has a fast, frequent rail network between its major cities, and a car is often a liability there — but trains don't reach much of the countryside. Many visitors combine the two. See our guides to [travelling around Italy by train](/guides/italy-by-train) and [getting between Italian cities](/guides/getting-between-italian-cities)."),
    table(
      ["Trip type", "Train", "Car"],
      [
        ["Rome → Florence", "Often practical: high-speed trains link the two city centres", "Possible, but city parking and ZTLs matter at both ends"],
        ["Rome → Venice", "Often practical, with direct high-speed services", "Possible, but you can't drive into historic Venice"],
        ["Tuscany villages", "Less flexible; many villages have no station", "Often useful"],
        ["Dolomites", "Depends on the route; trains reach the valleys, buses go further", "Can be useful for passes and remote valleys"],
        ["Amalfi Coast", "Depends on where you stay; trains reach Salerno and Naples, then buses and ferries", "Requires careful planning for traffic, parking and plate restrictions"],
        ["Sicily road trip", "Depends on the itinerary; some towns are well connected, many aren't", "Can offer flexibility"],
        ["Major-city trip", "Often convenient: stations are usually central", "Parking and traffic considerations; usually not needed"],
      ],
      "Train or car for common trips"
    ),
    {
      type: "compare",
      title: "Should you rent a car in Italy?",
      columns: [
        {
          title: "A car may make sense if",
          items: [
            "you're exploring rural areas",
            "you're visiting several small towns",
            "you're staying in countryside accommodation",
            "you want flexibility on scenic routes",
            "public transport doesn't fit your itinerary",
          ],
        },
        {
          title: "A train may make more sense if",
          items: [
            "you're mainly visiting major cities",
            "you're travelling between Rome, Florence, Bologna, Milan, Venice or Naples",
            "you don't want to deal with parking",
            "your trip is primarily city-based",
          ],
        },
      ],
    },
    p("Many itineraries mix both: trains between cities, then a car for a few days in the countryside, picked up at a station or airport on the edge of the city. For the bigger picture, see our [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
    h3("What driving costs"),
    p("Rental prices vary by season, car size, transmission, location and how far ahead you book, so we don't quote figures. Instead, list each of these for your own trip before comparing driving with the train:"),
    table(
      ["Cost", "What affects it", "Where to check"],
      [
        ["Rental", "Season, car category, transmission, pickup and return locations", "Rental quotes for your exact dates"],
        ["Insurance", "Excess level and optional cover", "Rental terms; any separate policy"],
        ["Deposit", "Car category and cover chosen — held on your card, not charged", "Rental terms"],
        ["Fuel or charging", "Distance, car type and fuel prices", "Your route and current pump prices"],
        ["Tolls", "Distance on autostrade and vehicle class", "Toll-road operators' route planners"],
        ["Parking", "Town, location and length of stay", "Municipal and car-park websites; your accommodation"],
        ["Additional drivers", "Number of drivers", "Rental terms"],
        ["Young-driver fee", "Driver's age", "Rental terms"],
        ["Child seats", "Number and type", "Rental terms"],
        ["Navigation and add-ons", "GPS, extra equipment, toll devices", "Rental terms"],
        ["One-way fee", "Different pickup and return locations", "Rental quote"],
        ["Fines and admin fees", "Only if a violation occurs", "The fines section of your rental terms"],
      ],
      "A framework for budgeting a hire car"
    ),
    p("For how driving fits into an overall trip budget, see [how much a trip to Italy costs](/guides/italy-trip-cost)."),

    // ——— 17 ———
    h2("Common Mistakes"),
    ol(
      "**Ignoring ZTL signs** — the most common source of fines for visitors.",
      "**Assuming GPS understands every restriction** — navigation apps don't reliably know ZTL hours, plate schemes or local closures.",
      "**Booking a manual without considering comfort** — if you don't drive manual regularly, steep hill towns and city traffic are a hard place to practise.",
      "**Forgetting parking costs** — car parks in cities and popular towns add up over several days.",
      "**Not checking the rental agreement** — the excess, deposit, fuel policy and exclusions matter as much as the price.",
      "**Assuming every town has easy parking** — in many hill towns, the car park is outside the walls and often full in summer.",
      "**Underestimating narrow roads** — a larger car can be stressful on country lanes and in old towns.",
      "**Planning unrealistic driving distances** — winding roads, traffic and stops mean journeys take longer than the map suggests.",
      "**Forgetting toll roads** — budget for tolls, and know which lanes to use before you reach the booth.",
      "**Not photographing the rental car** — without a record, it's hard to dispute a damage charge.",
      "**Leaving valuables visible** — especially at car parks near sights and beaches.",
      "**Renting a car for a city-based trip** — for Rome, Florence, Venice and Milan, a car usually costs more than it saves.",
    ),

    // ——— 18 ———
    h2("Driving Checklist"),
    p("Tick these off as you plan. For the wider trip, see our [Italy travel planning checklist](/guides/italy-travel-planning-checklist)."),
    {
      type: "checklist",
      id: "driving-checklist",
      groups: [
        {
          title: "Before renting",
          items: [
            "Check licence requirements for your licence",
            "Check whether you need an IDP or official translation",
            "Compare rental terms, not just prices",
            "Check the insurance cover and excess",
            "Check the deposit and card rules",
            "Choose manual or automatic",
            "Check the mileage and fuel policy",
          ],
        },
        {
          title: "Before driving away",
          items: [
            "Photograph the vehicle",
            "Check existing damage is recorded",
            "Check the fuel level",
            "Check the documents, triangle and vest",
            "Adjust mirrors and seat",
            "Understand the controls and fuel type",
          ],
        },
        {
          title: "Before entering a city",
          items: [
            "Check the ZTL and its hours",
            "Check where to park",
            "Check hotel access arrangements",
            "Check other road restrictions",
          ],
        },
      ],
    },
    p("Rules and procedures in this guide were checked against official sources in September 2026. Requirements can change at short notice — especially ZTL hours, seasonal restrictions and licence rules — so check the official sources below before you travel."),
  ],

  faqs: [
    { question: "Can tourists drive in Italy?", answer: "Yes, many can. A licence issued in an EU or EEA country is recognised in Italy. With a licence issued elsewhere, you'll normally also need an International Driving Permit or an official translation, unless an agreement for your country says otherwise. Rental companies set their own conditions too." },
    { question: "Do I need an International Driving Permit to drive in Italy?", answer: "It depends on where your licence was issued. EU/EEA licence holders don't need one. For licences issued outside the EU/EEA, Italy's Highway Code generally requires an IDP or official translation alongside the licence, but international agreements vary by country. Check with your licensing authority, the Italian embassy or consulate, and your rental company." },
    { question: "Is driving in Italy difficult?", answer: "It depends where. Motorways and main country roads are generally straightforward for experienced drivers. Big-city traffic, ZTLs, narrow historic streets and winding coastal or mountain roads are more demanding, especially if you're unused to driving on the right or to manual cars." },
    { question: "Is it better to rent a car or take trains in Italy?", answer: "It depends on your itinerary. Trains are usually more convenient between major cities; a car is usually more useful for countryside, small towns, mountains and islands. Many visitors combine the two." },
    { question: "What is a ZTL in Italy?", answer: "A ZTL (Zona a Traffico Limitato) is a limited traffic zone — usually a historic centre — where only authorised vehicles can enter during set hours. Entry points are usually camera-controlled, and unauthorised entry leads to a fine." },
    { question: "How do I avoid ZTL fines?", answer: "Don't enter an active ZTL without authorisation. Check each town's ZTL and hours before you arrive, look for the signs and active/not-active panels, don't rely on GPS, and ask your accommodation whether it's inside a zone and how to arrange access." },
    { question: "Are Italian highways toll roads?", answer: "Most autostrade (motorways) are toll roads. Many other main roads, and some motorway stretches, are free." },
    { question: "How do tolls work in Italy?", answer: "On most autostrade, you take a ticket when you enter and pay at the toll plaza when you leave, based on distance. Choose a lane by its sign: white for cash, blue for cards, and yellow for Telepass devices only." },
    { question: "What side of the road do Italians drive on?", answer: "The right. You overtake on the left, and on roads with several lanes in the same direction you should keep to the right unless overtaking." },
    { question: "Is parking difficult in Italian cities?", answer: "Often, yes. Historic centres have few spaces and many are for residents; ZTLs also limit where you can drive. Car parks on the edge of the centre are usually the simplest option. Follow the local signs, as parking rules vary by town." },
    { question: "Can I drive in Rome?", answer: "You can, but it's rarely the best choice for visitors. Rome has heavy traffic, several camera-controlled ZTLs and limited parking. Most visitors get around Rome on foot and by public transport, and use a car only to leave the city." },
    { question: "Can I drive into Florence's historic center?", answer: "Not without authorisation while the ZTL is active. Florence's historic centre is a camera-controlled ZTL with published hours, and some gates are closed to general traffic at all times. If your hotel is inside it, ask the hotel how access works before you arrive." },
    { question: "Can tourists drive on the Amalfi Coast?", answer: "Yes, but plan carefully. The coast road is narrow and busy, parking is limited, and an alternate number-plate scheme applies on part of the road at set times in the main season. Check the current ANAS ordinance, and consider ferries and buses." },
    { question: "Is an automatic rental car available in Italy?", answer: "Yes, from most major rental companies, but usually in smaller numbers than manual cars. Book early and make sure your booking confirms an automatic." },
    { question: "What documents do I need to rent a car in Italy?", answer: "Usually your valid driving licence, a passport or ID card, and a credit card in the main driver's name for the deposit. Depending on where your licence was issued, you may also need an International Driving Permit. Check the rental company's terms." },
    { question: "Is driving in Tuscany worth it?", answer: "For the countryside, often yes: a car makes it much easier to reach hill towns, wineries and farm stays. For Florence, Pisa or Siena on their own, it isn't needed — and ZTLs make driving into their centres impractical." },
  ],

  sourcesTitle: "Useful official resources",
  sources: [
    { label: "ACI — Highway Code, art. 135 (foreign licences)", url: "https://aci.gov.it/codice-della-strada/art-135/", note: "IDP or official translation" },
    { label: "ACI — Highway Code, art. 142 (speed limits)", url: "https://aci.gov.it/codice-della-strada/art-142/", note: "general limits" },
    { label: "ACI — Highway Code, art. 152 (lights)", url: "https://aci.gov.it/codice-della-strada/art-152/", note: "dipped headlights outside built-up areas" },
    { label: "ACI — Highway Code, art. 162 (triangle and vest)", url: "https://aci.gov.it/codice-della-strada/art-162/", note: "equipment" },
    { label: "ACI — Highway Code, art. 172 (seat belts and child restraints)", url: "https://aci.gov.it/codice-della-strada/art-172/", note: "children and anti-abandonment devices" },
    { label: "ACI — Highway Code, art. 173 (mobile phones)", url: "https://aci.gov.it/codice-della-strada/art-173/", note: "phone use while driving" },
    { label: "ACI — Highway Code, art. 186 (alcohol)", url: "https://aci.gov.it/codice-della-strada/art-186/", note: "drink-driving limits" },
    { label: "ACI — Highway Code, art. 189 (accidents)", url: "https://aci.gov.it/codice-della-strada/art-189/", note: "duty to stop and assist" },
    { label: "112 — European emergency number in Italy", url: "https://www.112.gov.it/", note: "emergency number" },
    { label: "Autostrade per l'Italia — payment methods", url: "https://www.autostrade.it/en/servizi-al-cliente/pedaggio/metodi-di-pagamento", note: "tolls and lanes" },
    { label: "Autostrade per l'Italia — unpaid tolls", url: "https://www.autostrade.it/en/servizi-al-cliente/pedaggio/mancato-pagamento", note: "paying a missed toll" },
    { label: "Comune di Firenze — ZTL", url: "https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html", note: "Florence ZTL hours" },
    { label: "Roma Servizi per la Mobilità — ZTL", url: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/", note: "Rome ZTLs" },
    { label: "ANAS — SS163 Amalfitana traffic restrictions", url: "https://www.stradeanas.it/it/campania-limitazioni-al-transito-sulla-strada-statale-163-amalfitana", note: "Amalfi Coast road rules" },
  ],
};
