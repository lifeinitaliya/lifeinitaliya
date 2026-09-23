import { categories } from "@/lib/mock-data/categories";
import type { Category, Guide } from "@/lib/types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

const cat = (slug: Category["slug"]) => {
  const { name } = categories.find((c) => c.slug === slug)!;
  return { slug, name };
};

export const guides: Guide[] = [
  {
    slug: "complete-italy-travel-guide",
    title: "The Complete Italy Travel Guide: Planning Your First Trip",
    excerpt:
      "Routes, rail passes, budgets and the regions worth your time — everything you need to plan two unforgettable weeks in Italy.",
    category: cat("travel"),
    authorSlug: "sara-malik",
    topicSlugs: ["italy", "travel-planning", "budget-travel"],
    guideRank: 94,
    readingTimeMinutes: 18,
    publishedAt: "2026-06-02",
    updatedAt: "2026-09-12",
    image: {
      src: unsplash("1516483638261-f4dbaf036963"),
      alt: "Colourful cliffside houses of Manarola in Cinque Terre at sunset",
    },
  },
  {
    slug: "best-ai-tools-for-students",
    title: "The Best AI Tools for Students in 2026",
    excerpt:
      "A tested shortlist of AI tools for research, note-taking and writing — and how to use them without cutting corners.",
    category: cat("technology"),
    authorSlug: "bareera",
    topicSlugs: ["artificial-intelligence", "apps", "study-tips"],
    guideRank: 91,
    readingTimeMinutes: 8,
    publishedAt: "2026-08-20",
    updatedAt: "2026-09-18",
    image: {
      src: unsplash("1677442136019-21780ecad995"),
      alt: "Three-dimensional letters spelling AI on an abstract blue grid",
    },
  },
  {
    slug: "build-a-better-morning-routine",
    title: "How to Build a Better Morning Routine",
    excerpt:
      "A simple, realistic framework for mornings that set up the rest of your day — no 4 a.m. alarms required.",
    category: cat("lifestyle"),
    authorSlug: "editorial-team",
    topicSlugs: ["productivity"],
    guideRank: 88,
    readingTimeMinutes: 6,
    publishedAt: "2026-07-14",
    updatedAt: "2026-09-15",
    image: {
      src: unsplash("1484480974693-6ca0a78fb36b"),
      alt: "Hand writing a checklist in a grid notebook",
    },
  },
  {
    slug: "rome-in-three-days",
    title: "Rome in Three Days: A Practical Itinerary",
    excerpt:
      "How to see the Colosseum, the Vatican and Trastevere without spending your whole trip in queues.",
    category: cat("travel"),
    authorSlug: "sara-malik",
    topicSlugs: ["italy", "rome", "travel-planning"],
    guideRank: 90,
    readingTimeMinutes: 12,
    publishedAt: "2026-05-18",
    updatedAt: "2026-09-20",
    image: {
      src: unsplash("1552832230-c0197dd311b5"),
      alt: "The Colosseum in Rome lit up at dusk",
    },
  },
  {
    slug: "file-your-taxes-without-stress",
    title: "How to File Your Taxes Without the Stress",
    excerpt:
      "The documents to gather, the deadlines to know and the common mistakes that cost people money every year.",
    category: cat("finance"),
    authorSlug: "editorial-team",
    topicSlugs: ["taxes", "budgeting"],
    guideRank: 87,
    readingTimeMinutes: 10,
    publishedAt: "2026-03-02",
    updatedAt: "2026-09-17",
    image: {
      src: unsplash("1554224155-6726b3ff858f"),
      alt: "Tax forms, a calculator app and a pen spread across a floor",
    },
  },
  {
    slug: "learn-to-code-roadmap",
    title: "Learning to Code in 2026: A Realistic Roadmap",
    excerpt:
      "Which language to start with, how long it really takes and the projects that turn tutorials into skills.",
    category: cat("education"),
    authorSlug: "bareera",
    topicSlugs: ["web-development", "online-learning", "careers"],
    guideRank: 89,
    readingTimeMinutes: 14,
    publishedAt: "2026-04-11",
    updatedAt: "2026-09-10",
    image: {
      src: unsplash("1498050108023-c5249f4df085"),
      alt: "Laptop showing code on a bright desk next to a monitor",
    },
  },
  {
    slug: "kyoto-first-timers-guide",
    title: "Kyoto for First-Timers: Temples, Neighbourhoods and Etiquette",
    excerpt:
      "Where to stay, when to visit the famous temples and the small customs that make a big difference.",
    category: cat("travel"),
    authorSlug: "editorial-team",
    topicSlugs: ["japan", "travel-planning"],
    guideRank: 92,
    readingTimeMinutes: 11,
    publishedAt: "2026-06-25",
    updatedAt: "2026-09-08",
    image: {
      src: unsplash("1493976040374-85c8e12f0c0e"),
      alt: "Quiet stone street in Kyoto's Higashiyama district with a pagoda at dusk",
    },
  },
  {
    slug: "weekly-meal-prep-for-beginners",
    title: "Weekly Meal Prep for Beginners",
    excerpt:
      "Plan, shop and cook once for a week of better meals — with a starter plan and a reusable shopping list.",
    category: cat("lifestyle"),
    authorSlug: "editorial-team",
    topicSlugs: ["cooking", "budgeting"],
    guideRank: 85,
    readingTimeMinutes: 9,
    publishedAt: "2026-07-01",
    updatedAt: "2026-09-05",
    image: {
      src: unsplash("1556910103-1c02745aae4d"),
      alt: "Two people cooking together in a bright home kitchen",
    },
  },
  {
    slug: "study-groups-that-work",
    title: "How to Run a Study Group That Actually Works",
    excerpt:
      "Roles, formats and ground rules that turn group study sessions into real progress.",
    category: cat("education"),
    authorSlug: "daniel-reyes",
    topicSlugs: ["study-tips"],
    guideRank: 84,
    readingTimeMinutes: 7,
    publishedAt: "2026-08-03",
    updatedAt: "2026-09-03",
    image: {
      src: unsplash("1522202176988-66273c2fd55f"),
      alt: "Three students laughing around a table with laptops and notebooks",
    },
  },
  {
    slug: "set-up-a-productive-home-office",
    title: "How to Set Up a Productive Home Office",
    excerpt:
      "Desk, light, sound and routines — a step-by-step setup that works in any size of space.",
    category: cat("how-to"),
    authorSlug: "bareera",
    topicSlugs: ["home-setup", "productivity"],
    guideRank: 86,
    readingTimeMinutes: 8,
    publishedAt: "2026-05-06",
    updatedAt: "2026-09-01",
    image: {
      src: unsplash("1497032628192-86f99bcd76bc"),
      alt: "Overhead view of a wooden desk with a laptop, coffee and notebook",
    },
  },
  {
    slug: "brew-better-coffee-at-home",
    title: "How to Brew Café-Quality Coffee at Home",
    excerpt:
      "The equipment that matters, the ratios to start with and how to dial in a better cup.",
    category: cat("how-to"),
    authorSlug: "editorial-team",
    topicSlugs: ["cooking", "home-setup"],
    guideRank: 83,
    readingTimeMinutes: 7,
    publishedAt: "2026-06-09",
    updatedAt: "2026-08-28",
    image: {
      src: unsplash("1495474472287-4d71bcdd2085"),
      alt: "Friends toasting with lattes and an iced coffee over a café table",
    },
  },
  {
    slug: "paris-on-a-budget",
    title: "Paris on a Budget: Four Days Without Overspending",
    excerpt:
      "Free museums, affordable neighbourhoods to stay in and how to get around for less.",
    category: cat("travel"),
    authorSlug: "sara-malik",
    topicSlugs: ["budget-travel", "travel-planning"],
    guideRank: 86,
    readingTimeMinutes: 10,
    publishedAt: "2026-04-22",
    updatedAt: "2026-08-25",
    image: {
      src: unsplash("1502602898657-3e91760cbb34"),
      alt: "The Eiffel Tower and the Seine at dusk",
    },
  },
  {
    slug: "how-to-plan-a-trip",
    title: "How to Plan a Trip, Step by Step",
    excerpt:
      "A reusable planning checklist: budget, route, bookings, documents and what to leave until later.",
    category: cat("travel"),
    authorSlug: "sara-malik",
    topicSlugs: ["travel-planning", "budget-travel"],
    guideRank: 90,
    readingTimeMinutes: 9,
    publishedAt: "2026-03-15",
    updatedAt: "2026-08-21",
    image: {
      src: unsplash("1488646953014-85cb44e25828"),
      alt: "A paper map, notebook, camera and bag laid out for trip planning",
    },
  },
  {
    slug: "find-cheaper-flights",
    title: "How to Find Cheaper Flights (and What Actually Doesn't Work)",
    excerpt:
      "When to book, how to compare fares and the myths that waste your time.",
    category: cat("travel"),
    authorSlug: "editorial-team",
    topicSlugs: ["airports", "budget-travel"],
    guideRank: 88,
    readingTimeMinutes: 8,
    publishedAt: "2026-02-19",
    updatedAt: "2026-08-18",
    image: {
      src: unsplash("1436491865332-7a61a109cc05"),
      alt: "View of an aircraft wing above the clouds at sunset",
    },
  },
  {
    slug: "how-to-choose-a-hotel",
    title: "How to Choose the Right Hotel for Your Trip",
    excerpt:
      "Location, reviews, cancellation terms and the questions worth asking before you book.",
    category: cat("travel"),
    authorSlug: "editorial-team",
    topicSlugs: ["hotels", "travel-planning"],
    guideRank: 84,
    readingTimeMinutes: 7,
    publishedAt: "2026-05-27",
    updatedAt: "2026-08-14",
    image: {
      src: unsplash("1566073771259-6a8506099945"),
      alt: "Hotel pool with sun loungers in front of a wooden building",
    },
  },
  {
    slug: "visiting-the-dolomites",
    title: "Visiting the Dolomites: A First-Timer's Guide",
    excerpt:
      "Where to base yourself, how to get around without a car and the lakes and trails to prioritise.",
    category: cat("travel"),
    authorSlug: "sara-malik",
    topicSlugs: ["italy", "travel-planning"],
    guideRank: 89,
    readingTimeMinutes: 11,
    publishedAt: "2026-07-08",
    updatedAt: "2026-08-30",
    image: {
      src: unsplash("1476514525535-07fb3b4ae5f1"),
      alt: "Wooden rowing boat on a clear mountain lake surrounded by peaks",
    },
  },
  {
    slug: "study-techniques-that-work",
    title: "Study Techniques That Actually Work",
    excerpt:
      "Active recall, spaced repetition and how to build them into a realistic weekly plan.",
    category: cat("education"),
    authorSlug: "daniel-reyes",
    topicSlugs: ["study-tips"],
    guideRank: 90,
    readingTimeMinutes: 8,
    publishedAt: "2026-02-10",
    updatedAt: "2026-08-26",
    image: {
      src: unsplash("1434030216411-0b793f4b4173"),
      alt: "Person writing notes by hand next to a laptop and coffee",
    },
  },
  {
    slug: "build-your-first-website",
    title: "How to Build Your First Website",
    excerpt:
      "From a blank folder to a live page: the tools, the steps and what to learn next.",
    category: cat("technology"),
    authorSlug: "bareera",
    topicSlugs: ["web-development", "software"],
    guideRank: 87,
    readingTimeMinutes: 12,
    publishedAt: "2026-03-28",
    updatedAt: "2026-08-22",
    image: {
      src: unsplash("1517694712202-14dd9538aa97"),
      alt: "Laptop with code on screen on a white desk beside a plant",
    },
  },
  {
    slug: "apps-to-organise-your-life",
    title: "Apps That Help You Organise Your Life",
    excerpt:
      "Notes, tasks, calendars and money — a small, well-chosen set of apps and how to use them together.",
    category: cat("technology"),
    authorSlug: "bareera",
    topicSlugs: ["apps", "productivity"],
    guideRank: 85,
    readingTimeMinutes: 7,
    publishedAt: "2026-06-17",
    updatedAt: "2026-08-19",
    image: {
      src: unsplash("1512941937669-90a1b58e7e9c"),
      alt: "Smartphone home screen showing app icons",
    },
  },
  {
    slug: "how-to-start-saving-money",
    title: "How to Start Saving Money When It Feels Impossible",
    excerpt:
      "Small, specific steps to build a savings habit — even on a tight budget.",
    category: cat("finance"),
    authorSlug: "editorial-team",
    topicSlugs: ["saving", "budgeting"],
    guideRank: 88,
    readingTimeMinutes: 8,
    publishedAt: "2026-01-20",
    updatedAt: "2026-08-12",
    image: {
      src: unsplash("1579621970563-ebec7560ff3e"),
      alt: "A small green plant growing from a pile of coins",
    },
  },
  {
    slug: "online-banking-safety",
    title: "Online Banking Safety: A Practical Checklist",
    excerpt:
      "How to spot scams, secure your accounts and what to do if something goes wrong.",
    category: cat("finance"),
    authorSlug: "editorial-team",
    topicSlugs: ["banking"],
    guideRank: 91,
    readingTimeMinutes: 7,
    publishedAt: "2026-04-03",
    updatedAt: "2026-08-09",
    image: {
      src: unsplash("1563013544-824ae1b704d3"),
      alt: "Person holding a bank card while using a laptop",
    },
  },
  {
    slug: "prepare-for-a-job-interview",
    title: "How to Prepare for a Job Interview",
    excerpt:
      "Research, practice answers and the questions to ask — a preparation plan for the week before.",
    category: cat("education"),
    authorSlug: "daniel-reyes",
    topicSlugs: ["careers"],
    guideRank: 87,
    readingTimeMinutes: 9,
    publishedAt: "2026-05-12",
    updatedAt: "2026-08-06",
    image: {
      src: unsplash("1551836022-d5d88e9218df"),
      alt: "Two people talking across a table in a bright office",
    },
  },
  {
    slug: "choose-an-online-course",
    title: "How to Choose an Online Course Worth Finishing",
    excerpt:
      "What to check before you enrol, and how to actually complete the course once you start.",
    category: cat("education"),
    authorSlug: "daniel-reyes",
    topicSlugs: ["online-learning", "study-tips"],
    guideRank: 83,
    readingTimeMinutes: 6,
    publishedAt: "2026-06-30",
    updatedAt: "2026-08-02",
    image: {
      src: unsplash("1515378791036-0648a3ef77b2"),
      alt: "Person in a yellow sweater working on a laptop",
    },
  },
];

/** Shown in the homepage hero composition. */
export const spotlightGuideSlugs = [
  "complete-italy-travel-guide",
  "rome-in-three-days",
];

export const featuredGuideSlugs = [
  "kyoto-first-timers-guide",
  "best-ai-tools-for-students",
  "file-your-taxes-without-stress",
  "set-up-a-productive-home-office",
];

export const popularGuideSlugs = [
  "complete-italy-travel-guide",
  "best-ai-tools-for-students",
  "build-a-better-morning-routine",
  "learn-to-code-roadmap",
  "weekly-meal-prep-for-beginners",
  "how-to-plan-a-trip",
  "online-banking-safety",
  "study-techniques-that-work",
];
