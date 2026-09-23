import type { GuideContent } from "@/lib/types";

// Article bodies keyed by guide slug. Mock content for layout and
// architecture; replace with CMS/Supabase content later.

export const guideContent: Record<string, GuideContent> = {
  "complete-italy-travel-guide": {
    body: [
      { type: "paragraph", text: "Italy rewards a little planning. The trains are fast, the regions are very different from each other, and the most common mistake first-time visitors make is trying to see everything. This guide walks through the decisions in the order you'll need to make them." },
      { type: "heading", level: 2, text: "When to go" },
      { type: "paragraph", text: "Spring (April–June) and early autumn (September–October) offer the best balance of weather, prices and crowds. July and August are hot and busy in the cities, while many coastal towns quieten down from November." },
      { type: "table", caption: "Typical conditions by season", headers: ["Season", "Weather", "Crowds", "Prices"], rows: [["Spring", "Mild, some rain", "Moderate", "Mid"], ["Summer", "Hot", "High", "High"], ["Autumn", "Warm to mild", "Moderate", "Mid"], ["Winter", "Cool; snow in the north", "Low (except ski areas)", "Low"]] },
      { type: "heading", level: 2, text: "Choosing a route" },
      { type: "paragraph", text: "For a first two-week trip, most people are happiest with **three or four bases** rather than a new hotel every night. A classic route runs north to south:" },
      { type: "list", ordered: true, items: ["Venice (2 nights)", "Florence, with a day trip to Tuscany (4 nights)", "Cinque Terre or Bologna (2–3 nights)", "Rome (4 nights) — see our [three-day Rome itinerary](/guides/rome-in-three-days)"] },
      { type: "callout", title: "Tip", text: "Fly into one city and out of another (an \"open-jaw\" ticket) to avoid backtracking. It often costs the same as a return." },
      { type: "heading", level: 3, text: "If you prefer mountains to cities" },
      { type: "paragraph", text: "Swap Venice for a few days in the north. Our guide to [visiting the Dolomites](/guides/visiting-the-dolomites) covers bases you can reach by train and bus." },
      { type: "heading", level: 2, text: "Getting around by train" },
      { type: "paragraph", text: "High-speed trains connect the major cities in a few hours. Regional trains are cheaper and slower and are the only option for many smaller towns." },
      { type: "list", items: ["Book high-speed tickets a few weeks ahead for the best fares.", "Regional tickets have fixed prices, so there's no need to book early.", "Validate paper regional tickets before boarding if they don't show a time and date."] },
      { type: "image", src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=75", alt: "The Colosseum in Rome lit up at dusk", caption: "Rome works best as your final stop, when you're used to the pace of travel." },
      { type: "heading", level: 2, text: "Budgeting" },
      { type: "paragraph", text: "Costs vary a lot by region and season. As a rough guide for mid-range travel, accommodation is usually the largest share of your budget, followed by food and trains." },
      { type: "table", headers: ["Item", "Budget", "Mid-range"], rows: [["Accommodation (per night)", "€50–90", "€100–180"], ["Food (per day)", "€25–40", "€50–80"], ["High-speed train (per journey)", "€20–50", "€40–90"]] },
      { type: "paragraph", text: "These figures are indicative only and change frequently — check current prices before you book." },
      { type: "heading", level: 2, text: "Before you go" },
      { type: "list", items: ["Check passport validity and entry requirements for your nationality.", "Reserve timed entry for popular sites such as the Last Supper and the Vatican Museums.", "Carry some cash for small cafés and city tourist taxes."] },
      { type: "quote", text: "Plan the structure of the trip carefully, then leave room in each day for wandering.", cite: "BS Insights editors" },
    ],
    faqs: [
      { question: "How many days do I need in Italy?", answer: "Ten to fourteen days is enough for three or four regions without rushing. With a week, pick two bases." },
      { question: "Do I need to rent a car?", answer: "Not for cities — trains are easier and parking is difficult. A car helps in rural areas such as Tuscany's countryside." },
      { question: "Is it better to book trains in advance?", answer: "For high-speed trains, yes: fares rise closer to departure. Regional train fares are fixed." },
    ],
  },

  "best-ai-tools-for-students": {
    body: [
      { type: "paragraph", text: "AI tools can save students real time on research and organisation. They can also produce confident mistakes. This guide focuses on tools and habits that help you learn, rather than replace the learning." },
      { type: "heading", level: 2, text: "What AI tools are good at" },
      { type: "list", items: ["Summarising long readings so you can decide what to read closely", "Generating practice questions from your own notes", "Explaining a concept in a different way when a textbook isn't clicking", "Organising notes and study schedules"] },
      { type: "heading", level: 2, text: "Where to be careful" },
      { type: "paragraph", text: "AI assistants can invent sources and facts. **Always verify citations** against the original material, and check your institution's policy on AI use before using it for assessed work." },
      { type: "callout", title: "A simple rule", text: "Use AI to help you think, then write in your own words. If you couldn't explain the answer without the tool, you haven't learned it yet." },
      { type: "heading", level: 2, text: "Building a study workflow" },
      { type: "list", ordered: true, items: ["Take your own notes during lectures or reading.", "Ask an assistant to quiz you on those notes.", "Mark what you got wrong and review it using [spaced repetition](/guides/study-techniques-that-work).", "Keep a short log of what you used AI for, in case you need to explain it."] },
    ],
    faqs: [
      { question: "Is using AI for homework cheating?", answer: "It depends on your school's rules and how you use it. Many allow AI for studying but not for writing assessed work. Check the policy for each course." },
    ],
  },

  "build-a-better-morning-routine": {
    body: [
      { type: "paragraph", text: "A good morning routine is short, repeatable and built around what your day actually needs. It doesn't have to start at dawn." },
      { type: "heading", level: 2, text: "Start with the evening" },
      { type: "paragraph", text: "Most morning routines fail the night before. Decide on a consistent bedtime and prepare anything that slows you down — clothes, bag, breakfast." },
      { type: "heading", level: 2, text: "Pick three anchors" },
      { type: "list", items: ["Something physical: a short walk, stretching or a few minutes outside", "Something practical: review today's plan", "Something for you: reading, coffee without a screen, or quiet time"] },
      { type: "callout", title: "Keep it small", text: "A 20-minute routine you do every day beats an hour-long routine you abandon after a week." },
    ],
  },

  "rome-in-three-days": {
    body: [
      { type: "paragraph", text: "Three days is enough to see Rome's major sights if you book ahead and group them by neighbourhood." },
      { type: "heading", level: 2, text: "Day 1: Ancient Rome" },
      { type: "paragraph", text: "Start early at the Colosseum with a timed ticket, then walk through the Roman Forum and up the Palatine Hill. Spend the evening in Monti." },
      { type: "heading", level: 2, text: "Day 2: The Vatican and Prati" },
      { type: "paragraph", text: "Book the first Vatican Museums slot of the day. Visit St Peter's Basilica afterwards, and dress with shoulders and knees covered." },
      { type: "heading", level: 2, text: "Day 3: Centro Storico and Trastevere" },
      { type: "list", items: ["Pantheon and Piazza Navona in the morning", "Trevi Fountain before the crowds or late in the evening", "Cross the river for dinner in Trastevere"] },
      { type: "paragraph", text: "Planning a longer trip? Rome fits well at the end of our [complete Italy travel guide](/guides/complete-italy-travel-guide) route." },
    ],
  },

  "file-your-taxes-without-stress": {
    body: [
      { type: "paragraph", text: "Tax rules differ by country and change often. This guide covers general preparation steps; check your local tax authority for the rules that apply to you." },
      { type: "heading", level: 2, text: "Gather your documents early" },
      { type: "list", items: ["Income statements from employers", "Records of other income, such as freelance work or interest", "Receipts for deductible expenses", "Last year's return, if you have it"] },
      { type: "heading", level: 2, text: "Know your deadline" },
      { type: "paragraph", text: "Put the filing and payment deadlines in your calendar with a reminder two weeks before. Late filing often carries penalties even if no tax is owed." },
      { type: "heading", level: 2, text: "Common mistakes" },
      { type: "list", items: ["Typos in identification or bank details", "Missing income from a second job", "Not keeping copies of what you submitted"] },
      { type: "callout", title: "When to get help", text: "If your situation is complex — self-employment, property or income from abroad — consider speaking to a qualified tax professional." },
    ],
  },

  "learn-to-code-roadmap": {
    body: [
      { type: "paragraph", text: "Learning to code takes longer than most courses suggest, but the path is clearer than it looks. The key is to build things early." },
      { type: "heading", level: 2, text: "Choose a first language by goal" },
      { type: "table", headers: ["If you want to…", "Start with"], rows: [["Build websites", "HTML, CSS, then JavaScript"], ["Work with data", "Python"], ["Build mobile apps", "JavaScript or Swift/Kotlin"]] },
      { type: "heading", level: 2, text: "A realistic timeline" },
      { type: "paragraph", text: "With around five to eight hours a week, many people can build simple projects within a few months. Becoming job-ready usually takes considerably longer." },
      { type: "heading", level: 2, text: "Projects that build real skills" },
      { type: "list", ordered: true, items: ["A personal website — see [how to build your first website](/guides/build-your-first-website)", "A small tool that solves one of your own problems", "A project that uses data from a public API"] },
    ],
  },

  "kyoto-first-timers-guide": {
    body: [
      { type: "paragraph", text: "Kyoto is compact but busy. Timing your visits and staying in the right area make the biggest difference." },
      { type: "heading", level: 2, text: "Where to stay" },
      { type: "paragraph", text: "Stay near Kyoto Station for easy transport, or around Gion and Higashiyama to walk to the temples early in the morning." },
      { type: "heading", level: 2, text: "Beat the crowds" },
      { type: "list", items: ["Visit Fushimi Inari at sunrise or late afternoon", "See Kiyomizu-dera early, then walk down through Sannenzaka", "Save the Arashiyama bamboo grove for a weekday morning"] },
      { type: "heading", level: 2, text: "Etiquette basics" },
      { type: "list", items: ["Don't photograph geiko or maiko without permission", "Carry your rubbish with you — public bins are rare", "Follow posted rules about photography inside temples"] },
    ],
  },

  "weekly-meal-prep-for-beginners": {
    body: [
      { type: "paragraph", text: "Meal prep doesn't mean eating the same thing every day. It means doing the slow parts once so weeknight meals are quick." },
      { type: "heading", level: 2, text: "Plan three meals, not seven" },
      { type: "paragraph", text: "Choose three recipes that share ingredients. Leftovers and one flexible night cover the rest of the week." },
      { type: "heading", level: 2, text: "Prep components" },
      { type: "list", items: ["Cook a batch of grains", "Roast a tray of vegetables", "Prepare one protein", "Make one sauce or dressing"] },
      { type: "callout", title: "Food safety", text: "Cool cooked food quickly, refrigerate within two hours and eat most prepared meals within three to four days." },
    ],
  },

  "study-groups-that-work": {
    body: [
      { type: "paragraph", text: "Study groups work when everyone arrives prepared and the session has a clear goal." },
      { type: "heading", level: 2, text: "Keep it small" },
      { type: "paragraph", text: "Three to five people is enough for discussion without anyone going quiet." },
      { type: "heading", level: 2, text: "A simple session format" },
      { type: "list", ordered: true, items: ["Five minutes: agree on the goal", "Thirty minutes: each person explains one topic", "Fifteen minutes: practice questions together", "Five minutes: list what to review before next time"] },
    ],
  },

  "set-up-a-productive-home-office": {
    body: [
      { type: "paragraph", text: "A productive home office is mostly about light, posture and a clear boundary between work and home." },
      { type: "heading", level: 2, text: "Desk and chair" },
      { type: "list", items: ["Screen top at or just below eye level", "Elbows at roughly 90 degrees when typing", "Feet flat on the floor or a footrest"] },
      { type: "heading", level: 2, text: "Light and sound" },
      { type: "paragraph", text: "Place your desk beside a window rather than facing it or with it behind you, to reduce glare. Headphones or a soft rug can make a noisy room far easier to work in." },
      { type: "heading", level: 2, text: "End-of-day routine" },
      { type: "paragraph", text: "Close your laptop and write tomorrow's first task on paper. It's a small ritual that marks the end of the working day." },
    ],
  },

  "brew-better-coffee-at-home": {
    body: [
      { type: "paragraph", text: "Better coffee at home comes down to fresh beans, the right grind and a consistent ratio." },
      { type: "heading", level: 2, text: "Start with a ratio" },
      { type: "paragraph", text: "A good starting point for filter coffee is **1:16** — 15 g of coffee to 250 g of water. Adjust from there." },
      { type: "table", headers: ["Method", "Grind", "Ratio"], rows: [["Pour-over", "Medium-fine", "1:16"], ["French press", "Coarse", "1:15"], ["AeroPress", "Fine to medium", "1:12–1:15"]] },
      { type: "heading", level: 2, text: "Dial it in" },
      { type: "list", items: ["Sour or weak: grind finer", "Bitter or harsh: grind coarser", "Change one thing at a time"] },
    ],
  },

  "paris-on-a-budget": {
    body: [
      { type: "paragraph", text: "Paris doesn't have to be expensive. Where you stay and how you plan meals make the biggest difference." },
      { type: "heading", level: 2, text: "Where to stay" },
      { type: "paragraph", text: "Neighbourhoods a little outside the centre, close to a Métro line, are often much cheaper and still well connected." },
      { type: "heading", level: 2, text: "Free and low-cost sights" },
      { type: "list", items: ["Many national museums offer free entry on certain days — check each museum's website", "Walk the Seine, Montmartre and the Marais", "Picnic in the Luxembourg Gardens"] },
      { type: "heading", level: 2, text: "Getting around" },
      { type: "paragraph", text: "The Métro is the fastest way around. Compare single tickets and passes against how much you plan to travel." },
    ],
  },

  "how-to-plan-a-trip": {
    body: [
      { type: "paragraph", text: "Every trip involves the same decisions. Making them in the right order saves money and stress." },
      { type: "heading", level: 2, text: "The planning order" },
      { type: "list", ordered: true, items: ["Set a total budget", "Choose dates and a rough route", "Book long-distance transport", "Book accommodation", "Check documents, insurance and entry requirements", "Plan activities that need reservations", "Leave the rest flexible"] },
      { type: "callout", title: "Save money", text: "Our guide to [finding cheaper flights](/guides/find-cheaper-flights) covers when and how to book." },
      { type: "heading", level: 2, text: "What to leave until later" },
      { type: "paragraph", text: "Restaurants, most day trips and local transport can usually be sorted once you arrive." },
    ],
  },

  "find-cheaper-flights": {
    body: [
      { type: "paragraph", text: "There's no single trick for cheap flights, but a few habits reliably help." },
      { type: "heading", level: 2, text: "What helps" },
      { type: "list", items: ["Being flexible by a few days either side", "Comparing nearby airports", "Checking the total price including bags and seat selection", "Setting price alerts rather than checking daily"] },
      { type: "heading", level: 2, text: "What doesn't" },
      { type: "paragraph", text: "Claims that a specific weekday is always cheapest, or that clearing cookies lowers fares, aren't reliable. Focus on flexibility and comparison instead." },
    ],
  },

  "how-to-choose-a-hotel": {
    body: [
      { type: "paragraph", text: "The right hotel depends less on stars and more on location and terms." },
      { type: "heading", level: 2, text: "Check before you book" },
      { type: "list", items: ["Distance to public transport and the places you'll visit", "Recent reviews that mention noise, cleanliness and Wi-Fi", "Cancellation deadline and any fees", "Whether taxes and resort fees are included in the price"] },
      { type: "heading", level: 2, text: "Read reviews selectively" },
      { type: "paragraph", text: "Look for patterns across recent reviews rather than reacting to one very good or very bad experience." },
    ],
  },

  "visiting-the-dolomites": {
    body: [
      { type: "paragraph", text: "The Dolomites are easier to visit without a car than many people expect, especially in summer." },
      { type: "heading", level: 2, text: "Where to base yourself" },
      { type: "list", items: ["Cortina d'Ampezzo for classic views and good bus links", "Val Gardena for hiking and cable cars", "Bolzano for train access and lower prices"] },
      { type: "heading", level: 2, text: "Getting around" },
      { type: "paragraph", text: "Regional buses and seasonal lifts connect most trailheads in summer. Timetables change by season, so check before you travel." },
      { type: "callout", title: "Safety", text: "Mountain weather changes quickly. Start hikes early and check forecasts and trail conditions." },
    ],
  },

  "study-techniques-that-work": {
    body: [
      { type: "paragraph", text: "Rereading and highlighting feel productive but are among the least effective ways to study. These techniques work better." },
      { type: "heading", level: 2, text: "Active recall" },
      { type: "paragraph", text: "Close the book and write down what you remember, or answer practice questions. Retrieving information strengthens memory more than reviewing it." },
      { type: "heading", level: 2, text: "Spaced repetition" },
      { type: "paragraph", text: "Review material over increasing intervals — for example after one day, three days and a week." },
      { type: "heading", level: 2, text: "A weekly plan" },
      { type: "table", headers: ["Day", "Focus"], rows: [["Mon–Thu", "New material, then recall practice"], ["Fri", "Review the week's weakest topics"], ["Weekend", "One mixed practice session"]] },
    ],
  },

  "build-your-first-website": {
    body: [
      { type: "paragraph", text: "You can build and publish a simple website in an afternoon with free tools." },
      { type: "heading", level: 2, text: "What you need" },
      { type: "list", items: ["A code editor", "A web browser", "A free hosting service for static sites"] },
      { type: "heading", level: 2, text: "The steps" },
      { type: "list", ordered: true, items: ["Create a folder with an index.html file", "Add a heading, a paragraph and a link", "Add a stylesheet and change the fonts and colours", "Publish the folder with a static hosting service"] },
      { type: "heading", level: 2, text: "What to learn next" },
      { type: "paragraph", text: "Once your page is live, learn a little JavaScript. Our [coding roadmap](/guides/learn-to-code-roadmap) suggests what to tackle in order." },
    ],
  },

  "apps-to-organise-your-life": {
    body: [
      { type: "paragraph", text: "The best system is a small one you actually use. Most people need just four kinds of app." },
      { type: "table", headers: ["Need", "What to look for"], rows: [["Notes", "Fast capture and search across devices"], ["Tasks", "Due dates, reminders and simple lists"], ["Calendar", "Shared calendars and time-zone support"], ["Money", "Categorised spending and a monthly view"]] },
      { type: "heading", level: 2, text: "Make them work together" },
      { type: "list", items: ["Capture everything in one inbox", "Move tasks with a date into your calendar", "Review everything once a week"] },
    ],
  },

  "how-to-start-saving-money": {
    body: [
      { type: "paragraph", text: "Starting small is still starting. The goal is to build a habit first and increase the amount later. This is general information, not personal financial advice." },
      { type: "heading", level: 2, text: "Pay yourself first" },
      { type: "paragraph", text: "Set up an automatic transfer to savings on payday, even if it's a small amount." },
      { type: "heading", level: 2, text: "Find money in your spending" },
      { type: "list", items: ["Review subscriptions and cancel the ones you don't use", "Compare insurance and phone plans once a year", "Plan meals to reduce takeaway spending"] },
      { type: "heading", level: 2, text: "Build an emergency fund" },
      { type: "paragraph", text: "An emergency fund helps you avoid debt when something unexpected happens. Start with a small target and build from there." },
    ],
  },

  "online-banking-safety": {
    body: [
      { type: "paragraph", text: "Most banking fraud relies on persuading people to hand over details or approve payments. A few habits protect you from the majority of scams." },
      { type: "heading", level: 2, text: "Secure your accounts" },
      { type: "list", items: ["Use a unique password and a password manager", "Turn on two-factor authentication", "Keep your phone and banking app up to date"] },
      { type: "heading", level: 2, text: "Spot common scams" },
      { type: "list", items: ["Unexpected calls or messages asking you to move money \"to keep it safe\"", "Links in texts that claim to be from your bank", "Pressure to act immediately"] },
      { type: "callout", title: "If something goes wrong", text: "Contact your bank straight away using the number on your card or its official website — not a number from the message you received." },
    ],
  },

  "prepare-for-a-job-interview": {
    body: [
      { type: "paragraph", text: "Good preparation turns an interview into a conversation. Start about a week before." },
      { type: "heading", level: 2, text: "Research" },
      { type: "list", items: ["Read the job description and highlight the key skills", "Look at the organisation's recent news and work", "Find out the interview format if you can"] },
      { type: "heading", level: 2, text: "Prepare examples" },
      { type: "paragraph", text: "Write down three or four stories from your experience using the situation, task, action, result structure." },
      { type: "heading", level: 2, text: "Questions to ask" },
      { type: "list", items: ["What does success look like in the first three months?", "How is the team structured?", "What are the next steps in the process?"] },
    ],
  },

  "choose-an-online-course": {
    body: [
      { type: "paragraph", text: "Most online courses aren't finished. Choosing well and planning your time makes completion far more likely." },
      { type: "heading", level: 2, text: "Before you enrol" },
      { type: "list", items: ["Check the syllabus against what you actually want to learn", "Look for recent reviews and sample lessons", "Confirm the time commitment per week"] },
      { type: "heading", level: 2, text: "Finishing the course" },
      { type: "list", items: ["Schedule fixed study sessions", "Build something with each module", "Pair up with someone taking the same course"] },
    ],
  },
};
