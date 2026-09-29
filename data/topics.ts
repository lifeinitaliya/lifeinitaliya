import type { Topic } from "@/lib/types";

// Topics are more specific than sections. Only topics with content are listed.
export const topics: Topic[] = [
  // Travel
  { slug: "itineraries", name: "Itineraries", categorySlug: "travel", description: "Day-by-day plans for Italian cities and regions." },
  { slug: "weekend-trips", name: "Weekend Trips", categorySlug: "travel", description: "Places that work well for two or three days." },
  { slug: "road-trips", name: "Road Trips", categorySlug: "travel", description: "Scenic drives and routes across Italy." },
  { slug: "hidden-places", name: "Hidden Places", categorySlug: "travel", description: "Quieter towns and neighbourhoods beyond the main sights." },
  { slug: "coast-and-islands", name: "Coast & Islands", categorySlug: "travel", description: "Italy's coastline, beaches and islands." },
  { slug: "mountains-and-lakes", name: "Mountains & Lakes", categorySlug: "travel", description: "The Alps, the Dolomites and the northern lakes." },
  { slug: "travel-tips", name: "Travel Tips", categorySlug: "travel", description: "Practical advice for planning a trip to Italy." },
  // Food
  { slug: "regional-cuisine", name: "Regional Cuisine", categorySlug: "food", description: "What people eat, region by region." },
  { slug: "pasta", name: "Pasta", categorySlug: "food", description: "Shapes, sauces and regional pasta traditions." },
  { slug: "pizza", name: "Pizza", categorySlug: "food", description: "Neapolitan pizza and Italy's other pizza styles." },
  { slug: "coffee", name: "Coffee", categorySlug: "food", description: "Espresso, the bar and Italian coffee customs." },
  { slug: "wine", name: "Wine", categorySlug: "food", description: "Italian wine regions, grapes and tasting." },
  { slug: "desserts", name: "Desserts", categorySlug: "food", description: "Gelato, pastries and traditional sweets." },
  { slug: "markets", name: "Food Markets", categorySlug: "food", description: "Shopping at Italian markets." },
  // Culture
  { slug: "art", name: "Art", categorySlug: "culture", description: "Museums, galleries and Italian art." },
  { slug: "architecture", name: "Architecture", categorySlug: "culture", description: "Buildings, piazzas and the stories behind them." },
  { slug: "fashion", name: "Fashion", categorySlug: "culture", description: "Italian fashion and its history." },
  { slug: "design", name: "Design", categorySlug: "culture", description: "Italian design, objects and makers." },
  { slug: "cinema", name: "Cinema", categorySlug: "culture", description: "Italian film and film-makers." },
  { slug: "traditions", name: "Traditions", categorySlug: "culture", description: "Customs and celebrations across Italy." },
  { slug: "festivals", name: "Festivals", categorySlug: "things-to-do", description: "Festivals and seasonal events in Italy." },
  // Transport
  { slug: "trains", name: "Trains", categorySlug: "transport", description: "Travelling around Italy by rail." },
  { slug: "airports", name: "Airports & Transfers", categorySlug: "transport", description: "Italian airports and getting to and from them." },
  { slug: "driving", name: "Driving", categorySlug: "transport", description: "Driving, car hire and road rules in Italy." },
  { slug: "ferries", name: "Ferries", categorySlug: "transport", description: "Ferries to islands and along the coast." },
  // People & lifestyle
  { slug: "profiles", name: "Profiles", categorySlug: "people", description: "Profiles and career stories." },
  { slug: "daily-life", name: "Daily Life", categorySlug: "lifestyle", description: "Everyday rituals and habits in Italy." },
  // Tours
  { slug: "boat-trips", name: "Boat Trips", categorySlug: "tours", description: "Boat trips and cruises on Italy's coasts, lagoons and lakes." },
  { slug: "walking-tours", name: "Walking Tours", categorySlug: "tours", description: "Guided and self-guided walks." },
  { slug: "food-and-wine-tours", name: "Food & Wine Tours", categorySlug: "tours", description: "Tastings, food tours and cellar visits." },
];
