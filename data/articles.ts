import { categories } from "@/data/categories";
import type { Article, CategorySlug, Guide, Story } from "@/lib/types";

// Article index. Bodies live in data/article-content.ts.

const img = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

const section = (slug: CategorySlug) => {
  const { name } = categories.find((c) => c.slug === slug)!;
  return { slug, name };
};

type Base = Omit<Story, "kind" | "category"> & { category: CategorySlug };

const story = ({ category, ...rest }: Base): Story => ({
  kind: "story",
  category: section(category),
  ...rest,
});

const guide = ({ category, ...rest }: Base & { guideRank: number }): Guide => ({
  kind: "guide",
  category: section(category),
  ...rest,
});

const allArticles: Article[] = [
  // ——— Practical guides ———
  guide({
    slug: "italy-by-train",
    title: "Traveling Around Italy by Train: Routes, Tickets and Tips",
    shortTitle: "Italy by Train",
    seoTitle: "Italy by Train: Tickets, Routes and Travel Tips",
    seoDescription: "How train travel in Italy works: Trenitalia vs Italo, high-speed vs regional trains, buying and validating tickets, stations, luggage, delays and strikes.",
    excerpt: "How Italy's rail network works, which trains to choose, how tickets work and what first-time travellers should know.",
    category: "transport", authorSlug: "editorial-team", topicSlugs: ["trains", "travel-tips"], regionSlugs: [],
    guideRank: 93, readingTimeMinutes: 20,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-26", updatedAt: "2026-09-26",
    image: {
      src: "/images/guides/italy-by-train/frecciarossa-high-speed-train-roma-termini.webp",
      alt: "A red Frecciarossa high-speed train at a platform in Roma Termini station",
      credit: {
        name: "Nico Ruge",
        url: "https://unsplash.com/@nico_ruge?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/italy-by-train/frecciarossa-high-speed-train-roma-termini-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/italy-by-train/frecciarossa-high-speed-train-roma-termini-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/italy-by-train/frecciarossa-high-speed-train-roma-termini-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "getting-between-italian-cities",
      "italy-airport-transfers",
      "complete-italy-travel-guide",
      "driving-in-italy",
      "italy-trip-cost",
      "italy-travel-planning-checklist",
    ],
  }),
  guide({
    slug: "italy-trip-cost",
    title: "How Much Does a Trip to Italy Cost? A Practical Budget Guide",
    shortTitle: "How Much Does a Trip to Italy Cost?",
    seoTitle: "How Much Does a Trip to Italy Cost? A Practical Budget Guide",
    seoDescription:
      "Build a realistic Italy budget: fixed and variable costs, verified 2026 prices for airport trains, city transport and major museums, worked seven-day examples and a worksheet.",
    excerpt:
      "What's fixed, what varies and what things actually cost in 2026 — with worked examples and a worksheet for building your own Italy budget.",
    category: "travel", authorSlug: "editorial-team", topicSlugs: ["travel-tips"], regionSlugs: [],
    guideRank: 90, readingTimeMinutes: 19,
    // First published 10 March 2026 as a short overview; rebuilt as the full
    // budget guide on 27 September 2026 at the same URL.
    publishedAt: "2026-03-10", updatedAt: "2026-09-27",
    image: {
      src: "/images/guides/complete-italy-travel-guide/rome-cafe-tables-street.webp",
      alt: "Outdoor restaurant tables set up beside a building on a street in Rome",
      credit: {
        name: "Sara Abilova",
        url: "https://unsplash.com/@sarahabilova?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/complete-italy-travel-guide/rome-cafe-tables-street-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/complete-italy-travel-guide/rome-cafe-tables-street-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/complete-italy-travel-guide/rome-cafe-tables-street-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "complete-italy-travel-guide",
      "italy-by-train",
      "best-time-to-visit-italy",
      "italy-airport-transfers",
      "driving-in-italy",
      "rome-in-three-days",
    ],
  }),
  guide({
    slug: "best-time-to-visit-italy",
    title: "Best Time to Visit Italy: Weather and Seasons by Region",
    shortTitle: "Best Time to Visit Italy",
    seoTitle: "Best Time to Visit Italy: Weather by Month and Region",
    seoDescription:
      "When to go to Italy for cities, beaches, hiking, skiing or food: how the weather changes by month and region, and how peak and shoulder seasons work.",
    excerpt:
      "From city breaks and coastal escapes to mountain trips and food-focused journeys, find the season that fits your Italy itinerary.",
    category: "travel", authorSlug: "editorial-team", topicSlugs: ["travel-tips"], regionSlugs: [],
    guideRank: 91, readingTimeMinutes: 27,
    publishedAt: "2026-09-26", updatedAt: "2026-09-26",
    image: {
      src: "/images/guides/best-time-to-visit-italy/montepulciano-vineyards-autumn.webp",
      alt: "Rows of vineyards in autumn colours below Montepulciano in Tuscany",
      credit: {
        name: "Giuseppe Fattore",
        url: "https://unsplash.com/@giuseppe_fattore?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/best-time-to-visit-italy/montepulciano-vineyards-autumn-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/best-time-to-visit-italy/montepulciano-vineyards-autumn-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/best-time-to-visit-italy/montepulciano-vineyards-autumn-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "complete-italy-travel-guide",
      "italy-trip-cost",
      "italy-travel-planning-checklist",
      "italy-by-train",
      "driving-in-italy",
      "visiting-the-dolomites",
    ],
  }),
  guide({
    slug: "italy-airport-transfers",
    title: "How Italian Airport Transfers Work: A Practical Guide",
    shortTitle: "How Italian Airport Transfers Work",
    seoTitle: "How Italian Airport Transfers Work: A Practical Guide",
    seoDescription:
      "How to get from Italian airports to your destination: official taxi fares, private and shared transfers, airport trains and buses, and the main airports compared.",
    excerpt:
      "Taxis, fixed fares, private transfers, trains and buses: how to choose the right way out of Italy's main airports, and what to check before you book.",
    category: "transport", authorSlug: "editorial-team", topicSlugs: ["airports"], regionSlugs: ["lazio", "lombardy", "veneto", "campania"],
    guideRank: 88, readingTimeMinutes: 21, publishedAt: "2026-05-06", updatedAt: "2026-09-28",
    image: {
      src: "/images/guides/italy-airport-transfers/rome-taxis-rank.webp",
      alt: "White licensed taxis with roof signs waiting in a line on a street in central Rome",
      credit: {
        name: "Gabriella Clare Marino",
        url: "https://unsplash.com/@gabiontheroad?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/italy-airport-transfers/rome-taxis-rank-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/italy-airport-transfers/rome-taxis-rank-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/italy-airport-transfers/rome-taxis-rank-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "getting-between-italian-cities",
      "rome-in-three-days",
      "milan-beyond-the-duomo",
      "venice-quieter-neighbourhoods",
      "italy-travel-planning-checklist",
    ],
  }),
  guide({
    slug: "driving-in-italy",
    title: "Driving in Italy: Rules, Costs, Documents and Tips",
    shortTitle: "Driving in Italy",
    seoTitle: "Driving in Italy: Rules, Costs, ZTLs and Practical Tips",
    seoDescription:
      "What visitors need to know about driving in Italy: licences and documents, road rules, speed limits, ZTL zones, tolls, parking and renting a car.",
    excerpt:
      "What international visitors should know about licenses, road rules, ZTL zones, tolls, parking and renting a car in Italy.",
    category: "transport",
    authorSlug: "editorial-team",
    topicSlugs: ["driving", "road-trips"],
    regionSlugs: [],
    guideRank: 92,
    readingTimeMinutes: 30,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    image: {
      src: "/images/guides/driving-in-italy/val-dorcia-winding-road-cypresses.webp",
      alt: "A winding road lined with cypress trees crossing rolling green hills near San Quirico d'Orcia in Tuscany",
      credit: {
        name: "Luca Micheli",
        url: "https://unsplash.com/@lucamicheli?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/driving-in-italy/val-dorcia-winding-road-cypresses-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/driving-in-italy/val-dorcia-winding-road-cypresses-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/driving-in-italy/val-dorcia-winding-road-cypresses-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "getting-between-italian-cities",
      "italy-airport-transfers",
      "italy-trip-cost",
      "visiting-the-dolomites",
      "complete-italy-travel-guide",
    ],
  }),
  guide({
    slug: "italy-travel-planning-checklist",
    title: "Italy Travel Planning Checklist: Everything to Prepare Before You Go",
    shortTitle: "Italy Travel Planning Checklist",
    seoTitle: "Italy Travel Planning Checklist: Everything to Prepare Before You Go",
    seoDescription:
      "Plan an Italy trip step by step: dates, route, flights, documents and entry rules, trains, attraction bookings, money, phone, packing and final checks, with saveable checklists.",
    excerpt:
      "Everything to arrange for an Italy trip, in the order that matters — from route and documents to trains, timed tickets, packing and arrival day.",
    category: "travel", authorSlug: "editorial-team", topicSlugs: ["travel-tips", "itineraries"], regionSlugs: [],
    guideRank: 89, readingTimeMinutes: 15,
    // First published 22 January 2026 as a short checklist; rebuilt as the full
    // planning guide on 27 September 2026 at the same URL.
    publishedAt: "2026-01-22", updatedAt: "2026-09-27",
    image: {
      src: "/images/guides/italy-travel-planning-checklist/traveller-resting-rome-sunset.webp",
      alt: "A traveller with her bags sitting near the Vittoriano monument in Rome at sunset, with Italian flags flying above",
      credit: {
        name: "Claudio Hirschberger",
        url: "https://unsplash.com/@hd24?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/italy-travel-planning-checklist/traveller-resting-rome-sunset-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/italy-travel-planning-checklist/traveller-resting-rome-sunset-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/italy-travel-planning-checklist/traveller-resting-rome-sunset-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "complete-italy-travel-guide",
      "italy-trip-cost",
      "italy-by-train",
      "italy-airport-transfers",
      "driving-in-italy",
      "best-time-to-visit-italy",
    ],
  }),
  guide({
    slug: "getting-between-italian-cities",
    title: "Getting Between Italian Cities: Trains, Buses, Cars and More",
    shortTitle: "Getting Between Italian Cities",
    seoTitle: "Getting Between Italian Cities: Trains, Buses, Cars and More",
    seoDescription:
      "How to travel between Italian cities: trains, buses, flights, rental cars and ferries compared, with verified journey times and door-to-door planning.",
    excerpt:
      "Trains, buses, flights, cars and ferries: how to choose the right way between Italian cities, with official journey times and a door-to-door way to compare.",
    category: "transport", authorSlug: "editorial-team", topicSlugs: ["trains", "itineraries"], regionSlugs: [],
    guideRank: 87, readingTimeMinutes: 18, publishedAt: "2026-06-11", updatedAt: "2026-09-28",
    image: {
      src: "/images/guides/getting-between-italian-cities/train-window-alps-turin.webp",
      alt: "Snow-capped Alps beyond flat green fields seen through a train window near Turin",
      credit: {
        name: "Grigorii Shcheglov",
        url: "https://unsplash.com/@shegiva?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/getting-between-italian-cities/train-window-alps-turin-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/getting-between-italian-cities/train-window-alps-turin-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/getting-between-italian-cities/train-window-alps-turin-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "driving-in-italy",
      "italy-airport-transfers",
      "complete-italy-travel-guide",
      "italy-travel-planning-checklist",
      "ferries-in-italy",
    ],
  }),
  guide({
    slug: "complete-italy-travel-guide",
    title: "The Complete Italy Travel Guide: How to Plan Your First Trip",
    shortTitle: "The Complete Italy Travel Guide",
    seoTitle: "Italy Travel Guide: How to Plan Your First Trip",
    seoDescription: "Plan your first trip to Italy: how many days you need, where to go, when to visit, costs, trains vs cars, where to stay and what to book in advance.",
    excerpt: "How many days you need, which places to combine, when to go, what it costs and how to get around — a step-by-step framework for planning a first trip to Italy.",
    category: "travel", authorSlug: "editorial-team", topicSlugs: ["itineraries", "travel-tips", "trains"], regionSlugs: ["lazio", "tuscany", "veneto", "campania", "lombardy"],
    guideRank: 94, readingTimeMinutes: 22,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-25", updatedAt: "2026-09-25",
    image: {
      src: "/images/guides/complete-italy-travel-guide/florence-cathedral-dome-rooftops.webp",
      alt: "Florence's rooftops and the dome of Santa Maria del Fiore cathedral, with hills behind the city",
      credit: {
        name: "Joseph Quam",
        url: "https://unsplash.com/@jquam?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/complete-italy-travel-guide/florence-cathedral-dome-rooftops-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/complete-italy-travel-guide/florence-cathedral-dome-rooftops-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/complete-italy-travel-guide/florence-cathedral-dome-rooftops-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "italy-trip-cost",
      "best-time-to-visit-italy",
      "italy-travel-planning-checklist",
      "driving-in-italy",
      "getting-between-italian-cities",
    ],
  }),
  guide({
    slug: "rome-in-three-days",
    title: "Rome in Three Days: A Practical First-Time Itinerary",
    shortTitle: "Rome in Three Days",
    seoTitle: "Rome in Three Days: A Practical First-Time Itinerary",
    seoDescription:
      "A practical three-day Rome itinerary: ancient Rome, the Vatican and the historic centre grouped by area, what to book, how much you'll walk and where to eat.",
    excerpt:
      "One area per day — ancient Rome, the Vatican, the historic centre — with what to book, how to get around and what to skip if you run out of time.",
    category: "cities", authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["lazio"],
    guideRank: 90, readingTimeMinutes: 16,
    // First published 18 May 2026 as a short itinerary; rebuilt as the full
    // first-visit guide on 27 September 2026 at the same URL.
    publishedAt: "2026-05-18", updatedAt: "2026-09-27",
    image: {
      src: "/images/guides/rome-in-three-days/rome-rooftops-domes.webp",
      alt: "Rome's rooftops, church domes and bell towers under a blue sky, with the white Vittoriano monument on the left and hills on the horizon",
      credit: {
        name: "Gabriel Tovar",
        url: "https://unsplash.com/@gabrielrana?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/rome-in-three-days/rome-rooftops-domes-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/rome-in-three-days/rome-rooftops-domes-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/rome-in-three-days/rome-rooftops-domes-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-airport-transfers",
      "naples-first-visit",
      "florence-for-first-timers",
    ],
  }),
  guide({
    slug: "visiting-the-dolomites",
    title: "Visiting the Dolomites: A First-Timer's Guide",
    shortTitle: "Visiting the Dolomites",
    seoTitle: "Visiting the Dolomites: A First-Timer's Guide",
    seoDescription:
      "A Dolomites travel guide for a first trip: which area to choose, when to go, how many days, where to stay, getting around with or without a car, hiking, huts and 2026 access rules.",
    excerpt:
      "How the Dolomites fit together, which valley to base yourself in, when to go and how to get around — with or without a car, and with or without hiking.",
    category: "travel", authorSlug: "editorial-team", topicSlugs: ["mountains-and-lakes", "itineraries"], regionSlugs: ["trentino-alto-adige", "veneto"],
    guideRank: 89, readingTimeMinutes: 22, publishedAt: "2026-07-08", updatedAt: "2026-09-28",
    image: {
      src: "/images/guides/visiting-the-dolomites/seceda-ridge-ortisei.webp",
      alt: "Walkers on a path across steep green slopes towards the jagged Seceda ridge above Ortisei in the Dolomites",
      credit: {
        name: "Shpëtim Ujkani",
        url: "https://unsplash.com/@shpetimujkani?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/visiting-the-dolomites/seceda-ridge-ortisei-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/visiting-the-dolomites/seceda-ridge-ortisei-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/visiting-the-dolomites/seceda-ridge-ortisei-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "verona-first-visit",
      "driving-in-italy",
      "best-time-to-visit-italy",
      "italy-by-train",
      "italy-travel-planning-checklist",
      "venice-quieter-neighbourhoods",
    ],
  }),

  // ——— Travel ———
  story({
    slug: "amalfi-coast-calmer-visit", category: "travel",
    title: "The Amalfi Coast Without the Rush",
    excerpt: "How to plan a calmer visit to one of Italy's most famous coastlines — where to stay, when to go and how to get around without a car.",
    authorSlug: "editorial-team", topicSlugs: ["coast-and-islands", "itineraries"], regionSlugs: ["campania"],
    readingTimeMinutes: 9, publishedAt: "2026-09-10", updatedAt: "2026-09-23",
    image: img("1609186796344-b9222f036f84", "Positano's houses stacked on the cliffs above the sea"),
  }),
  story({
    slug: "val-dorcia-slow-road", category: "travel",
    title: "Val d'Orcia: A Slow Road Through Tuscany's Classic Landscape",
    excerpt: "Cypress-lined roads, hill towns and thermal springs in the valley south of Siena.",
    authorSlug: "editorial-team", topicSlugs: ["road-trips", "hidden-places"], regionSlugs: ["tuscany"],
    readingTimeMinutes: 8, publishedAt: "2026-09-02", updatedAt: "2026-09-18",
    image: img("1652121650307-57ad2716432c", "Rolling green hills, a farmhouse and cypress trees in Val d'Orcia"),
  }),
  story({
    slug: "lake-como-weekend", category: "travel",
    title: "Lake Como in a Weekend: Where to Stay, What to See and How to Get Around",
    shortTitle: "Lake Como in a Weekend",
    seoTitle: "Lake Como in a Weekend: Where to Stay & What to See",
    seoDescription:
      "Plan a Lake Como weekend: choosing between Como, Bellagio, Varenna and Menaggio, 2- and 3-day itineraries, ferries, trains from Milan and when to go.",
    excerpt:
      "Which town to stay in, how ferries and trains fit together, and what a realistic two- or three-day trip looks like — a practical plan for a first visit to Lake Como.",
    authorSlug: "editorial-team", topicSlugs: ["weekend-trips", "mountains-and-lakes"], regionSlugs: ["lombardy"],
    readingTimeMinutes: 17,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-26", updatedAt: "2026-09-26",
    image: {
      src: "/images/travel/lake-como-weekend/bellagio-lake-como-aerial.webp",
      alt: "Aerial view of Bellagio on its promontory where the branches of Lake Como meet, at sunset",
      credit: {
        name: "Nirmal Rajendharkumar",
        url: "https://unsplash.com/@neotronimz?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/travel/lake-como-weekend/bellagio-lake-como-aerial-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/travel/lake-como-weekend/bellagio-lake-como-aerial-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/travel/lake-como-weekend/bellagio-lake-como-aerial-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "milan-beyond-the-duomo",
      "italy-by-train",
      "best-time-to-visit-italy",
      "complete-italy-travel-guide",
      "driving-in-italy",
    ],
  }),
  story({
    slug: "puglia-itria-valley", category: "travel",
    title: "Trulli Country: Exploring Puglia's Itria Valley",
    excerpt: "Alberobello, Locorotondo and Ostuni — a gentle route through the whitewashed towns of southern Italy.",
    authorSlug: "editorial-team", topicSlugs: ["hidden-places", "road-trips"], regionSlugs: ["puglia"],
    readingTimeMinutes: 8, publishedAt: "2026-08-05", updatedAt: "2026-09-09",
    image: img("1632226705528-14afa4dcdc0f", "Whitewashed trulli with conical stone roofs in Alberobello"),
  }),
  story({
    slug: "sardinia-where-to-stay", category: "travel",
    title: "Sardinia's Coast: How to Choose Where to Stay",
    excerpt: "North, south, east or west — how Sardinia's coastlines differ and which suits your trip.",
    authorSlug: "editorial-team", topicSlugs: ["coast-and-islands"], regionSlugs: ["sardinia"],
    readingTimeMinutes: 8, publishedAt: "2026-07-22", updatedAt: "2026-09-04",
    image: img("1698247186956-1a06d3c7fb6c", "A boat anchored in turquoise water off the Sardinian coast"),
  }),
  story({
    slug: "matera-city-of-the-sassi", category: "travel",
    title: "Matera: Visiting the City of the Sassi",
    excerpt: "How to explore Matera's ancient cave districts, and why an overnight stay is worth it.",
    authorSlug: "editorial-team", topicSlugs: ["hidden-places"], regionSlugs: ["basilicata"],
    readingTimeMinutes: 6, publishedAt: "2026-07-15", updatedAt: "2026-08-28",
    image: img("1536781910396-bb64dbe103e4", "The stone houses of Matera's Sassi on a hillside"),
  }),

  // ——— Cities ———
  story({
    slug: "venice-quieter-neighbourhoods", category: "cities",
    title: "Venice for First-Time Visitors: What to See, Where to Stay and How to Get Around",
    shortTitle: "Venice for First-Time Visitors",
    seoTitle: "Venice for First-Time Visitors: What to See & How to Plan",
    seoDescription:
      "Plan a first trip to Venice: how many days you need, St Mark's and beyond, the sestieri, where to stay, the vaporetto, airport transfers, Murano and Burano.",
    excerpt:
      "How long to stay, where to base yourself, how the vaporetto works and how to see Venice beyond St Mark's — a practical plan for a first visit.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["veneto"],
    readingTimeMinutes: 24,
    // First published 8 September 2026 as "Venice Beyond San Marco"; rebuilt
    // as the full first-time guide on 27 September 2026 at the same URL.
    publishedAt: "2026-09-08", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/venice-quieter-neighbourhoods/venice-grand-canal-salute-accademia.webp",
      alt: "The Grand Canal seen from the Accademia Bridge at dusk, with the domes of Santa Maria della Salute at the end",
      credit: {
        name: "Henrique Ferreira",
        url: "https://unsplash.com/@rickpsd?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/venice-quieter-neighbourhoods/venice-grand-canal-salute-accademia-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/venice-quieter-neighbourhoods/venice-grand-canal-salute-accademia-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/venice-quieter-neighbourhoods/venice-grand-canal-salute-accademia-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "best-time-to-visit-italy",
      "complete-italy-travel-guide",
    ],
  }),
  story({
    slug: "bologna-in-two-days", category: "cities",
    title: "Bologna in Two Days: What to See, Eat and Do on a First Visit",
    shortTitle: "Bologna in Two Days",
    seoTitle: "Bologna in Two Days: What to See, Eat & Do",
    seoDescription:
      "A practical two-day plan for Bologna: Piazza Maggiore, the Quadrilatero, Santo Stefano and the San Luca portico, what to eat, where to stay and how to get around.",
    excerpt:
      "A realistic two-day plan for a first visit to Bologna — the historic centre, the porticoes, what to eat, where to stay and how to get around without a car.",
    authorSlug: "editorial-team", topicSlugs: ["weekend-trips", "itineraries"], regionSlugs: ["emilia-romagna"],
    readingTimeMinutes: 20,
    // First published 26 August 2026 as a short itinerary; rebuilt as the
    // full first-visit guide on 27 September 2026 at the same URL.
    publishedAt: "2026-08-26", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/bologna-in-two-days/bologna-rooftops-towers-blue-hour.webp",
      alt: "Bologna's red and ochre rooftops seen from the hills at dusk, with the tall Asinelli tower, church domes and bell towers rising above the city",
      credit: {
        name: "Petr Slováček",
        url: "https://unsplash.com/@grwood?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/bologna-in-two-days/bologna-rooftops-towers-blue-hour-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/bologna-in-two-days/bologna-rooftops-towers-blue-hour-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/bologna-in-two-days/bologna-rooftops-towers-blue-hour-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "florence-for-first-timers",
      "italy-by-train",
      "italian-food-traditions",
      "complete-italy-travel-guide",
    ],
  }),
  story({
    slug: "naples-first-visit", category: "cities",
    title: "Naples for First-Time Visitors: What to See, Where to Stay and How to Plan Your Trip",
    shortTitle: "Naples for First-Time Visitors",
    seoTitle: "Naples for First-Time Visitors: What to See & How to Plan",
    seoDescription:
      "Planning a first trip to Naples: how many days you need, the historic centre and museums, where to stay, getting around without a car, Pompeii and Neapolitan food.",
    excerpt:
      "How long to stay, what to see first, where to base yourself and how to reach Pompeii — a practical plan for a first visit to Naples.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["campania"],
    readingTimeMinutes: 19,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-27", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/naples-first-visit/naples-bay-vesuvius.webp",
      alt: "Naples and its bay seen from the hills, with Mount Vesuvius across the water",
      credit: {
        name: "Grafi Jeremiah",
        url: "https://unsplash.com/@_jeremiah85_?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/naples-first-visit/naples-bay-vesuvius-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/naples-first-visit/naples-bay-vesuvius-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/naples-first-visit/naples-bay-vesuvius-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italy-by-train",
      "best-time-to-visit-italy",
      "complete-italy-travel-guide",
      "rome-in-three-days",
    ],
  }),
  story({
    slug: "milan-beyond-the-duomo", category: "cities",
    title: "Milan Beyond the Duomo: What to See, Where to Stay and How to Experience the City",
    shortTitle: "Milan Beyond the Duomo",
    seoTitle: "Milan Beyond the Duomo: What to See & How to Plan",
    seoDescription:
      "Plan a trip to Milan beyond the Duomo: how many days you need, the Last Supper, Brera and the Castello, neighbourhoods, where to stay, transport and Lake Como.",
    excerpt:
      "How long to stay, how to book the Last Supper, which neighbourhoods to explore and how to add Lake Como — a practical plan for Milan.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["lombardy"],
    readingTimeMinutes: 18,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-27", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/milan-beyond-the-duomo/milan-rooftops-porta-nuova-skyline.webp",
      alt: "Milan's rooftops with the towers of Porta Nuova on the skyline",
      credit: {
        name: "Tomáš Hirsch",
        url: "https://unsplash.com/@tomashirsch?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/milan-beyond-the-duomo/milan-rooftops-porta-nuova-skyline-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/milan-beyond-the-duomo/milan-rooftops-porta-nuova-skyline-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/milan-beyond-the-duomo/milan-rooftops-porta-nuova-skyline-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "lake-como-weekend",
      "italy-by-train",
      "best-time-to-visit-italy",
    ],
  }),
  story({
    slug: "florence-for-first-timers", category: "cities",
    title: "Florence for First-Time Visitors: What to See, Where to Stay and How to Plan Your Trip",
    shortTitle: "Florence for First-Time Visitors",
    seoTitle: "Florence for First-Time Visitors: What to See & How to Plan",
    seoDescription:
      "Planning a first trip to Florence: how many days you need, the main sights and what to book, where to stay, arriving by train or plane, food and day trips.",
    excerpt:
      "How many days to spend, what to see first, which museums to book, where to stay and how to get around — a practical plan for a first visit to Florence.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries", "art"], regionSlugs: ["tuscany"],
    readingTimeMinutes: 23,
    // Genuine publication date of this version of the guide.
    publishedAt: "2026-09-26", updatedAt: "2026-09-26",
    image: {
      src: "/images/cities/florence-for-first-timers/florence-skyline-piazzale-michelangelo.webp",
      alt: "View over Florence from Piazzale Michelangelo, with the Arno, the cathedral dome and the hills beyond",
      credit: {
        name: "Tom Podmore",
        url: "https://unsplash.com/@tompodmore86?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/florence-for-first-timers/florence-skyline-piazzale-michelangelo-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/florence-for-first-timers/florence-skyline-piazzale-michelangelo-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/florence-for-first-timers/florence-skyline-piazzale-michelangelo-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "complete-italy-travel-guide",
      "italy-by-train",
      "best-time-to-visit-italy",
    ],
  }),
  story({
    slug: "palermo-markets-monuments", category: "cities",
    title: "Palermo for First-Time Visitors: What to See, Eat and Know Before You Go",
    shortTitle: "Palermo for First-Time Visitors",
    seoTitle: "Palermo for First-Time Visitors: What to See, Eat & Know",
    seoDescription:
      "Plan a first visit to Palermo: how many days you need, the Arab-Norman monuments, Ballarò and the markets, street food, where to stay, getting around and day trips.",
    excerpt:
      "How long to stay, what to see, which markets to visit and what to eat — a practical first-time guide to Palermo, with day trips to Monreale and Cefalù.",
    authorSlug: "editorial-team", topicSlugs: ["markets", "architecture", "itineraries"], regionSlugs: ["sicily"],
    readingTimeMinutes: 23,
    // First published 9 July 2026 as a short markets-and-monuments piece;
    // rebuilt as the full first-time guide on 27 September 2026 at the same URL.
    publishedAt: "2026-07-09", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/palermo-markets-monuments/palermo-rooftops-domes-mountains.webp",
      alt: "The dome and Gothic towers of Palermo Cathedral rising above the city's rooftops, with mountains behind",
      credit: {
        name: "Ricardo Gomez Angel",
        url: "https://unsplash.com/@rgaleriacom?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/palermo-markets-monuments/palermo-rooftops-domes-mountains-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/palermo-markets-monuments/palermo-rooftops-domes-mountains-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/palermo-markets-monuments/palermo-rooftops-domes-mountains-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "sicily-food-traditions",
      "naples-first-visit",
      "traditional-italian-desserts",
      "italy-by-train",
      "best-time-to-visit-italy",
      "complete-italy-travel-guide",
    ],
  }),
  story({
    slug: "turin-first-visit", category: "cities",
    title: "Turin for First-Time Visitors: What to See, Eat and Know Before You Go",
    shortTitle: "Turin for First-Time Visitors",
    seoTitle: "Turin for First-Time Visitors: What to See, Eat & Know",
    seoDescription:
      "Plan a first visit to Turin: how many days you need, the Museo Egizio, the Mole and the Musei Reali, cafés and Piedmontese food, neighbourhoods, transport and day trips.",
    excerpt:
      "How long to stay, which museums to book, what to eat and drink and how to add Piedmont — a practical first-time guide to Turin.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["piedmont"],
    readingTimeMinutes: 19,
    // Genuine publication date of this guide.
    publishedAt: "2026-09-27", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/turin-first-visit/turin-skyline-mole-alps.webp",
      alt: "Turin's rooftops at sunset with the tall spire of the Mole Antonelliana and the snow-capped Alps on the horizon",
      credit: {
        name: "Matteo Giallongo",
        url: "https://unsplash.com/@matteogiallongo?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/turin-first-visit/turin-skyline-mole-alps-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/turin-first-visit/turin-skyline-mole-alps-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/turin-first-visit/turin-skyline-mole-alps-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "milan-beyond-the-duomo",
      "bologna-in-two-days",
      "italian-regional-wines",
      "italy-by-train",
      "complete-italy-travel-guide",
    ],
  }),
  story({
    slug: "verona-first-visit", category: "cities",
    title: "Verona for First-Time Visitors: What to See, Eat and Know Before You Go",
    shortTitle: "Verona for First-Time Visitors",
    seoTitle: "Verona for First-Time Visitors: What to See, Eat & Know",
    seoDescription:
      "Plan a first visit to Verona: how many days you need, the Arena, Juliet's House and San Zeno, Veronese food and Valpolicella wine, getting around and Lake Garda trips.",
    excerpt:
      "How long to stay, what to see beyond Juliet's balcony, what to eat and drink and how to add Lake Garda — a practical first-time guide to Verona.",
    authorSlug: "editorial-team", topicSlugs: ["itineraries"], regionSlugs: ["veneto"],
    readingTimeMinutes: 19,
    // Genuine publication date of this guide.
    publishedAt: "2026-09-27", updatedAt: "2026-09-27",
    image: {
      src: "/images/cities/verona-first-visit/verona-ponte-pietra-adige.webp",
      alt: "The Ponte Pietra, a stone and brick arched bridge over the fast-flowing River Adige in Verona, with pastel houses and red roofs behind",
      credit: {
        name: "Leandro Silva",
        url: "https://unsplash.com/@leandro_gs?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/cities/verona-first-visit/verona-ponte-pietra-adige-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/cities/verona-first-visit/verona-ponte-pietra-adige-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/cities/verona-first-visit/verona-ponte-pietra-adige-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "venice-quieter-neighbourhoods",
      "milan-beyond-the-duomo",
      "italian-regional-wines",
      "italy-by-train",
      "complete-italy-travel-guide",
    ],
  }),

  // ——— Food & Drink ———
  story({
    slug: "sicily-food-traditions", category: "food",
    title: "Sicilian Food Traditions: What to Eat and Why It Matters",
    shortTitle: "Sicilian Food Traditions",
    seoTitle: "Sicilian Food Traditions: What to Eat and Why It Matters",
    seoDescription:
      "A guide to Sicilian food: Palermo street food, Catania, Syracuse and Trapani, pasta, seafood, cannoli, granita, pistachios, citrus, markets and festivals.",
    excerpt:
      "What to eat in Sicily and why it tastes the way it does — from Palermo's street food to Catania's fish market, Trapani's couscous and a granita breakfast.",
    authorSlug: "editorial-team", topicSlugs: ["regional-cuisine"], regionSlugs: ["sicily"],
    readingTimeMinutes: 18, publishedAt: "2026-09-12", updatedAt: "2026-09-28",
    image: {
      src: "/images/food/sicily-food-traditions/erice-pastry-counter.webp",
      alt: "A pastry counter in Erice with green iced cassatine, a sugar-dusted cannolo and trays of almond biscuits",
      credit: {
        name: "Valentina Locatelli",
        url: "https://unsplash.com/@valentina_locatelli?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/food/sicily-food-traditions/erice-pastry-counter-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/food/sicily-food-traditions/erice-pastry-counter-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/food/sicily-food-traditions/erice-pastry-counter-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italian-food-traditions",
      "palermo-markets-monuments",
      "traditional-italian-desserts",
      "italian-regional-wines",
      "ferries-in-italy",
    ],
  }),
  story({
    slug: "roman-pasta-classics", category: "food",
    title: "Roman Pasta Classics, Explained",
    excerpt: "Carbonara, cacio e pepe, amatriciana and gricia share a few ingredients — and a lot of opinions.",
    authorSlug: "editorial-team", topicSlugs: ["pasta", "regional-cuisine"], regionSlugs: ["lazio"],
    readingTimeMinutes: 6, publishedAt: "2026-09-04", updatedAt: "2026-09-17",
    image: img("1638402089014-df7b917a1cd3", "A nest of dried spaghetti on a wooden surface"),
  }),
  story({
    slug: "italian-coffee-culture", category: "food",
    title: "Italian Coffee: How Coffee Became Part of Everyday Life",
    shortTitle: "Italian Coffee",
    seoTitle: "Italian Coffee: How Coffee Became Part of Everyday Life",
    seoDescription:
      "Italian coffee culture explained: how the bar works, what to order, espresso, cappuccino and the moka, regional traditions from Naples to Trieste, and history.",
    excerpt:
      "What Italians drink, how the bar works and why a small cup matters so much — from the counter espresso to the moka at home, Turin's bicerin and Trieste's own vocabulary.",
    authorSlug: "editorial-team", topicSlugs: ["coffee"], regionSlugs: [],
    readingTimeMinutes: 18, publishedAt: "2026-08-22", updatedAt: "2026-09-28",
    image: {
      src: "/images/food/italian-coffee-culture/rome-espresso-outdoor-table.webp",
      alt: "A man with glasses and a beard in a tan leather jacket sipping an espresso at an outdoor café table in Rome",
      credit: {
        name: "Gabriella Clare Marino",
        url: "https://unsplash.com/@gabiontheroad?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/food/italian-coffee-culture/rome-espresso-outdoor-table-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/food/italian-coffee-culture/rome-espresso-outdoor-table-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/food/italian-coffee-culture/rome-espresso-outdoor-table-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italian-food-traditions",
      "traditional-italian-desserts",
      "naples-first-visit",
      "turin-first-visit",
      "sicily-food-traditions",
    ],
  }),
  story({
    slug: "italian-regional-wines", category: "food",
    title: "Regional Wines of Italy: Grapes, Places and Traditions",
    shortTitle: "Regional Wines of Italy",
    seoTitle: "Regional Wines of Italy: Grapes, Places and Traditions",
    seoDescription:
      "Italian wine region by region: DOCG, DOC and IGT explained, key grapes and denominations from Piedmont to Sicily, sparkling and sweet wines, labels and tastings.",
    excerpt:
      "Why Italy has many wine cultures rather than one — the regions, local grapes and denominations, how classifications work, and how to taste and order wine in Italy.",
    authorSlug: "editorial-team", topicSlugs: ["wine"], regionSlugs: ["piedmont", "tuscany", "veneto", "sicily", "campania", "sardinia"],
    readingTimeMinutes: 19, publishedAt: "2026-08-08", updatedAt: "2026-09-29",
    image: {
      src: "/images/food/italian-regional-wines/serralunga-langhe.webp",
      alt: "The castle and village of Serralunga d'Alba on a ridge above rows of vineyards in the Langhe, with the Alps in the distance",
      credit: {
        name: "Luis van den Bos",
        url: "https://unsplash.com/@bossoptics?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/food/italian-regional-wines/serralunga-langhe-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/food/italian-regional-wines/serralunga-langhe-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/food/italian-regional-wines/serralunga-langhe-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italian-food-traditions",
      "sicily-food-traditions",
      "traditional-italian-desserts",
      "turin-first-visit",
      "verona-first-visit",
    ],
  }),
  story({
    slug: "neapolitan-pizza", category: "food",
    title: "Neapolitan Pizza: What Makes It Different",
    excerpt: "The dough, the oven and the tradition behind Naples' most famous export.",
    authorSlug: "editorial-team", topicSlugs: ["pizza", "regional-cuisine"], regionSlugs: ["campania"],
    readingTimeMinutes: 5, publishedAt: "2026-07-31", updatedAt: "2026-08-29",
    image: img("1622880833523-7cf1c0bd4296", "A pizza baking in a wood-fired oven"),
  }),
  story({
    slug: "traditional-italian-desserts", category: "food",
    title: "Traditional Italian Desserts: Regional Sweets and the Stories Behind Them",
    shortTitle: "Traditional Italian Desserts",
    seoTitle: "Traditional Italian Desserts: Regional Sweets and Their Stories",
    seoDescription:
      "Italian desserts region by region: Sicilian cannoli, Neapolitan pastry, Tuscan biscuits, Turin chocolate, Venetian Carnival sweets, Christmas and Easter cakes.",
    excerpt:
      "Why Italian sweets change from region to region — from Sicily's cannoli and Naples's sfogliatella to Siena's panforte, Turin's gianduiotti and Carnival fritters.",
    authorSlug: "editorial-team", topicSlugs: ["desserts", "regional-cuisine"], regionSlugs: ["sicily", "campania", "tuscany", "piedmont", "veneto", "sardinia"],
    readingTimeMinutes: 19, publishedAt: "2026-07-20", updatedAt: "2026-09-29",
    image: {
      src: "/images/food/traditional-italian-desserts/venice-pastry-counter.webp",
      alt: "A pastry-shop counter in Venice with trays of puff-pastry sfogliatelle, cream-filled cannoli and nut brittle under yellow price signs",
      credit: {
        name: "Gene Gallin",
        url: "https://unsplash.com/@genefoto?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/food/traditional-italian-desserts/venice-pastry-counter-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/food/traditional-italian-desserts/venice-pastry-counter-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/food/traditional-italian-desserts/venice-pastry-counter-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "italian-food-traditions",
      "sicily-food-traditions",
      "italian-coffee-culture",
      "naples-first-visit",
      "turin-first-visit",
    ],
  }),
  story({
    slug: "italian-food-traditions", category: "food",
    title: "Italian Food Traditions: A Regional Guide to Eating in Italy",
    shortTitle: "Italian Food Traditions",
    seoTitle: "Italian Food Traditions: A Regional Guide to Eating in Italy",
    seoDescription:
      "Why Italian food is so regional: traditions from north to south, pasta, bread, cheese, the Italian meal, seasons, festivals, street food and DOP labels.",
    excerpt:
      "Why Italian food changes from region to region and town to town — and how to read menus, markets, seasons and festivals as a visitor.",
    authorSlug: "editorial-team", topicSlugs: ["regional-cuisine"], regionSlugs: [],
    readingTimeMinutes: 18, publishedAt: "2026-06-16", updatedAt: "2026-09-28",
    image: {
      src: "/images/food/italian-food-traditions/florence-mercato-centrale-stall.webp",
      alt: "Hams, salami and wheels of cheese hanging above a busy counter at Florence's Mercato Centrale",
      credit: {
        name: "Tushar Agarwal",
        url: "https://unsplash.com/@tagag?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/food/italian-food-traditions/florence-mercato-centrale-stall-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/food/italian-food-traditions/florence-mercato-centrale-stall-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/food/italian-food-traditions/florence-mercato-centrale-stall-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "sicily-food-traditions",
      "italian-coffee-culture",
      "traditional-italian-desserts",
      "bologna-in-two-days",
    ],
  }),
  story({
    slug: "italian-food-markets", category: "food",
    title: "How to Shop at an Italian Food Market",
    excerpt: "Timing, etiquette and a few of Italy's most rewarding markets.",
    authorSlug: "editorial-team", topicSlugs: ["markets"], regionSlugs: ["tuscany", "veneto", "lazio", "sicily"],
    readingTimeMinutes: 5, publishedAt: "2026-06-05", updatedAt: "2026-08-17",
    image: img("1705661250872-66faa4b4c0b4", "Customers at a delicatessen counter hung with cured hams"),
  }),
  story({
    slug: "how-to-choose-gelato", category: "food",
    title: "Gelato: How to Spot the Good Stuff",
    excerpt: "Colours, containers and flavours — simple signs of a gelateria worth queuing for.",
    authorSlug: "editorial-team", topicSlugs: ["desserts"], regionSlugs: [],
    readingTimeMinutes: 4, publishedAt: "2026-05-27", updatedAt: "2026-08-10",
    image: img("1651325982013-958f9e1ad468", "A hand holding a gelato cone on a narrow street"),
  }),

  // ——— Culture ———
  story({
    slug: "planning-a-visit-to-the-uffizi", category: "culture",
    title: "Inside the Uffizi: How to Plan a Visit",
    excerpt: "Booking, timing and the rooms not to miss in Florence's greatest gallery.",
    authorSlug: "editorial-team", topicSlugs: ["art"], regionSlugs: ["tuscany"],
    readingTimeMinutes: 7, publishedAt: "2026-09-01", updatedAt: "2026-09-19",
    image: img("1620138873680-1def5dfda055", "Visitors walking along a long gallery corridor lined with sculpture"),
  }),
  story({
    slug: "italian-fashion-history", category: "culture",
    title: "How Italian Fashion Found Its Stage",
    excerpt: "From a 1951 show in Florence to Milan's fashion weeks — a short history of Italian style.",
    authorSlug: "editorial-team", topicSlugs: ["fashion"], regionSlugs: ["tuscany", "lombardy"],
    readingTimeMinutes: 6, publishedAt: "2026-07-24", updatedAt: "2026-08-27",
    image: img("1741946303170-1e693a9df38a", "Designers reviewing a dress backstage"),
  }),
  story({
    slug: "venice-carnival-traditions", category: "culture",
    title: "Venice Carnival: The Traditions Behind the Masks",
    excerpt: "Bauta, moretta and volto — what the masks mean and how the celebration works.",
    authorSlug: "editorial-team", topicSlugs: ["traditions", "festivals"], regionSlugs: ["veneto"],
    readingTimeMinutes: 6, publishedAt: "2026-07-02", updatedAt: "2026-08-19",
    image: img("1573700398841-b5782bc7b516", "A person in an ornate Venetian carnival costume and mask"),
  }),
  story({
    slug: "baroque-rome", category: "culture",
    title: "Baroque Rome: Fountains, Piazzas and Rivals",
    excerpt: "How Bernini and Borromini reshaped Rome, and where to see their work.",
    authorSlug: "editorial-team", topicSlugs: ["architecture", "art"], regionSlugs: ["lazio"],
    readingTimeMinutes: 7, publishedAt: "2026-06-19", updatedAt: "2026-08-14",
    image: img("1525874684015-58379d421a52", "The Trevi Fountain in Rome with its carved stone figures"),
  }),

  // ——— People ———
  story({
    slug: "italian-contemporary-artists", category: "people",
    title: "The Italian Artists Shaping Contemporary Culture",
    excerpt: "From Arte Povera to today's biennales — the movements and names to know.",
    authorSlug: "editorial-team", topicSlugs: ["art", "profiles"], regionSlugs: [],
    readingTimeMinutes: 7, publishedAt: "2026-09-06", updatedAt: "2026-09-20",
    image: img("1731212553451-47a94407a769", "Visitors looking at a large painting in a gallery"),
  }),
  story({
    slug: "italian-design-and-its-makers", category: "people",
    title: "Italian Design and the People Behind It",
    excerpt: "Gio Ponti, Achille Castiglioni, Ettore Sottsass and the companies that turned ideas into icons.",
    authorSlug: "editorial-team", topicSlugs: ["design", "profiles"], regionSlugs: ["lombardy"],
    readingTimeMinutes: 7, publishedAt: "2026-08-02", updatedAt: "2026-09-05",
    image: img("1640357960494-9242650846d3", "A black and white photograph of a minimal living room"),
  }),
  story({
    slug: "italian-cinema-film-makers", category: "people",
    title: "The Film-Makers Who Defined Italian Cinema",
    excerpt: "Rossellini, De Sica, Fellini and the post-war generation that changed film.",
    authorSlug: "editorial-team", topicSlugs: ["cinema", "profiles"], regionSlugs: ["lazio"],
    readingTimeMinutes: 7, publishedAt: "2026-07-12", updatedAt: "2026-08-25",
    image: img("1600961018836-1861b848d505", "The façade of a historic theatre on an Italian street"),
  }),

  // ——— Lifestyle ———
  story({
    slug: "the-passeggiata", category: "lifestyle",
    title: "The Passeggiata: Italy's Evening Stroll",
    excerpt: "Why towns across Italy fill their main streets in the early evening — and how to join in.",
    authorSlug: "editorial-team", topicSlugs: ["daily-life", "traditions"], regionSlugs: [],
    readingTimeMinutes: 4, publishedAt: "2026-08-29", updatedAt: "2026-09-09",
    image: img("1654670027962-bbfa198e02f7", "People walking along a street between tall buildings"),
  }),
  story({
    slug: "aperitivo-ritual", category: "lifestyle",
    title: "Aperitivo: Italy's Early-Evening Ritual",
    excerpt: "Spritz, vermouth and small plates — the pre-dinner custom explained.",
    authorSlug: "editorial-team", topicSlugs: ["daily-life"], regionSlugs: ["lombardy", "piedmont", "veneto"],
    readingTimeMinutes: 4, publishedAt: "2026-07-26", updatedAt: "2026-08-23",
    image: img("1608120181805-8896890318da", "Spritz cocktails and a board of bread and cured meats"),
  }),

  // ——— Transport ———
  story({
    slug: "ferries-in-italy", category: "transport",
    title: "Ferries in Italy: A Practical Guide to Islands and Coastal Travel",
    shortTitle: "Ferries in Italy",
    seoTitle: "Ferries in Italy: A Practical Guide to Islands and Coastal Travel",
    seoDescription:
      "How ferries work in Italy: Sicily, Sardinia, Capri and the Bay of Naples, the Amalfi Coast, Cinque Terre and the lakes, with booking, port and weather advice.",
    excerpt:
      "Where ferries and boats are useful in Italy, how island crossings work, what happens at the port and how to plan around seasons and the weather.",
    authorSlug: "editorial-team", topicSlugs: ["ferries", "coast-and-islands"], regionSlugs: ["sicily", "sardinia", "campania"],
    readingTimeMinutes: 17, publishedAt: "2026-07-16", updatedAt: "2026-09-28",
    image: {
      src: "/images/guides/ferries-in-italy/positano-ferry-pier.webp",
      alt: "A white passenger ferry moored at the pier below the hillside houses of Positano on the Amalfi Coast",
      credit: {
        name: "Maria Bobrova",
        url: "https://unsplash.com/@yamiable?utm_source=life_in_italia&utm_medium=referral",
        source: "Unsplash",
        sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
      },
    },
    socialImages: [
      { src: "/images/guides/ferries-in-italy/positano-ferry-pier-16x9.jpg", width: 1600, height: 900 },
      { src: "/images/guides/ferries-in-italy/positano-ferry-pier-4x3.jpg", width: 1600, height: 1200 },
      { src: "/images/guides/ferries-in-italy/positano-ferry-pier-1x1.jpg", width: 1200, height: 1200 },
    ],
    relatedSlugs: [
      "getting-between-italian-cities",
      "naples-first-visit",
      "lake-como-weekend",
      "driving-in-italy",
    ],
  }),

  // ——— Tours & experiences ———
  story({
    slug: "venice-gondola-rides", category: "tours",
    title: "Gondola Rides in Venice: What to Know Before You Book",
    excerpt: "Fares, timing and the cheaper traghetto crossing most visitors miss.",
    authorSlug: "editorial-team", topicSlugs: ["boat-trips"], regionSlugs: ["veneto"],
    readingTimeMinutes: 5, publishedAt: "2026-08-24", updatedAt: "2026-09-12",
    image: img("1574530638414-88578d1f73a2", "A gondola with passengers on a Venice canal"),
  }),
  story({
    slug: "amalfi-coast-boat-trips", category: "tours",
    title: "Boat Trips Along the Amalfi Coast",
    excerpt: "Public ferries, group tours or a private boat — how to see the coast from the water.",
    authorSlug: "editorial-team", topicSlugs: ["boat-trips", "coast-and-islands"], regionSlugs: ["campania"],
    readingTimeMinutes: 6, publishedAt: "2026-08-10", updatedAt: "2026-09-06",
    image: img("1612698093158-e07ac200d44e", "Colourful buildings on a cliffside above turquoise water on the Amalfi Coast"),
  }),
  story({
    slug: "chianti-wine-day", category: "tours",
    title: "Wine Tasting in Tuscany: Planning a Day in Chianti",
    excerpt: "Estates, villages and how to visit without anyone having to drive.",
    authorSlug: "editorial-team", topicSlugs: ["wine", "food-and-wine-tours"], regionSlugs: ["tuscany"],
    readingTimeMinutes: 6, publishedAt: "2026-07-05", updatedAt: "2026-08-18",
    image: img("1658737980934-5868142b06a2", "A country road lined with cypress trees at sunset in Tuscany"),
  }),

  // ——— Things to do ———
  story({
    slug: "opera-at-the-verona-arena", category: "things-to-do",
    title: "Opera at the Verona Arena",
    excerpt: "Seeing a performance in a Roman amphitheatre: tickets, seats and what to bring.",
    authorSlug: "editorial-team", topicSlugs: ["traditions"], regionSlugs: ["veneto"],
    readingTimeMinutes: 5, publishedAt: "2026-08-17", updatedAt: "2026-09-07",
    image: img("1597261360942-48b0604ca7bc", "The Roman arena in Verona lit up at night"),
  }),
  story({
    slug: "a-year-of-italian-festivals", category: "things-to-do",
    title: "A Year of Italian Festivals",
    excerpt: "Carnival, the Palio, Easter in Florence and autumn food fairs — Italy's calendar, season by season.",
    authorSlug: "editorial-team", topicSlugs: ["festivals", "traditions"], regionSlugs: ["veneto", "tuscany", "piedmont"],
    readingTimeMinutes: 7, publishedAt: "2026-06-01", updatedAt: "2026-09-10",
    image: img("1696687021837-7babaf30debb", "People walking along a street strung with lights at night"),
  }),
];

/**
 * Early short drafts kept for rebuilding. They are not published: they have no
 * page, listing, sitemap entry or internal link until each one is rewritten.
 */
export const unpublishedSlugs = new Set([
  "amalfi-coast-calmer-visit",
  "val-dorcia-slow-road",
  "puglia-itria-valley",
  "sardinia-where-to-stay",
  "matera-city-of-the-sassi",
  "roman-pasta-classics",
  "neapolitan-pizza",
  "italian-food-markets",
  "how-to-choose-gelato",
  "planning-a-visit-to-the-uffizi",
  "italian-fashion-history",
  "venice-carnival-traditions",
  "baroque-rome",
  "italian-contemporary-artists",
  "italian-design-and-its-makers",
  "italian-cinema-film-makers",
  "the-passeggiata",
  "aperitivo-ritual",
  "venice-gondola-rides",
  "amalfi-coast-boat-trips",
  "chianti-wine-day",
  "opera-at-the-verona-arena",
  "a-year-of-italian-festivals",
]);

export const articles: Article[] = allArticles.filter((a) => !unpublishedSlugs.has(a.slug));

/** Homepage hero: lead story first. */
export const heroArticleSlugs = [
  "italian-food-traditions",
  "venice-quieter-neighbourhoods",
  "naples-first-visit",
];

export const popularArticleSlugs = [
  "complete-italy-travel-guide",
  "italy-by-train",
  "rome-in-three-days",
  "florence-for-first-timers",
  "italian-coffee-culture",
];
