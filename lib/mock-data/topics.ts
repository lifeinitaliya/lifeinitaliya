import type { Topic } from "@/lib/types";

export const topics: Topic[] = [
  // Travel
  { slug: "italy", name: "Italy", categorySlug: "travel", description: "Planning trips to Italy, from big cities to the mountains and coast." },
  { slug: "rome", name: "Rome", categorySlug: "travel", description: "Itineraries, sights and practical tips for visiting Rome." },
  { slug: "japan", name: "Japan", categorySlug: "travel", description: "First-timer advice for travelling in Japan." },
  { slug: "travel-planning", name: "Travel Planning", categorySlug: "travel", description: "Routes, timing and bookings — how to plan a trip that works." },
  { slug: "budget-travel", name: "Budget Travel", categorySlug: "travel", description: "Ways to travel well while spending less." },
  { slug: "airports", name: "Airports & Flights", categorySlug: "travel", description: "Booking flights and getting through airports with less stress." },
  { slug: "hotels", name: "Hotels", categorySlug: "travel", description: "Choosing and booking the right place to stay." },
  // Technology
  { slug: "artificial-intelligence", name: "Artificial Intelligence", categorySlug: "technology", description: "What AI tools can do, and how to use them responsibly." },
  { slug: "software", name: "Software", categorySlug: "technology", description: "Choosing, setting up and getting more from software." },
  { slug: "web-development", name: "Web Development", categorySlug: "technology", description: "Learning to build websites and web apps." },
  { slug: "apps", name: "Apps", categorySlug: "technology", description: "Useful apps and how to make them work for you." },
  // Education
  { slug: "study-tips", name: "Study Tips", categorySlug: "education", description: "Methods that make studying more effective." },
  { slug: "careers", name: "Careers", categorySlug: "education", description: "Job searching, interviews and building skills for work." },
  { slug: "online-learning", name: "Online Learning", categorySlug: "education", description: "Getting the most from courses and learning online." },
  // Lifestyle
  { slug: "productivity", name: "Productivity", categorySlug: "lifestyle", description: "Routines and systems for getting things done." },
  { slug: "cooking", name: "Food & Cooking", categorySlug: "lifestyle", description: "Planning, cooking and making better food at home." },
  // Finance
  { slug: "budgeting", name: "Budgeting", categorySlug: "finance", description: "Building a budget you can actually stick to." },
  { slug: "saving", name: "Saving", categorySlug: "finance", description: "Practical ways to save more money." },
  { slug: "banking", name: "Banking", categorySlug: "finance", description: "Using bank accounts and online banking safely." },
  { slug: "taxes", name: "Taxes", categorySlug: "finance", description: "Understanding and filing your taxes." },
  // How-To
  { slug: "home-setup", name: "Home Setup", categorySlug: "how-to", description: "Setting up spaces and equipment at home." },
];
