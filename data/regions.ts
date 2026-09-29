import type { Region } from "@/lib/types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

// All 20 Italian regions. Images are only set where we have a photo of that region.
export const regions: Region[] = [
  // North
  { slug: "aosta-valley", name: "Aosta Valley", capital: "Aosta", area: "North", firstTripFit: "later", description: "Italy's smallest region, set among the highest peaks of the Alps." },
  { slug: "piedmont", name: "Piedmont", capital: "Turin", area: "North", firstTripFit: "good", description: "Turin, the western Alps and the wine hills of the Langhe." },
  { slug: "liguria", name: "Liguria", capital: "Genoa", area: "North", firstTripFit: "good", description: "The Italian Riviera, Genoa and the villages of the Cinque Terre.", image: { src: unsplash("1516483638261-f4dbaf036963"), alt: "Colourful houses of Manarola in the Cinque Terre above the sea" } },
  { slug: "lombardy", name: "Lombardy", capital: "Milan", area: "North", firstTripFit: "great", description: "Milan, the great lakes and Alpine valleys.", image: { src: unsplash("1586974726316-c6302de6a160"), alt: "A lakeside villa on Lake Como surrounded by mountains" } },
  { slug: "trentino-alto-adige", name: "Trentino-Alto Adige", capital: "Trento", area: "North", firstTripFit: "good", description: "The Dolomites, alpine lakes and a mix of Italian and German culture.", image: { src: unsplash("1476514525535-07fb3b4ae5f1"), alt: "Wooden rowing boat on a clear lake in the Dolomites" } },
  { slug: "veneto", name: "Veneto", capital: "Venice", area: "North", firstTripFit: "great", description: "Venice, Verona and the foothills of the Dolomites.", image: { src: unsplash("1498307833015-e7b400441eb8"), alt: "Gondolas on the Grand Canal in Venice under a warm evening sky" } },
  { slug: "friuli-venezia-giulia", name: "Friuli-Venezia Giulia", capital: "Trieste", area: "North", firstTripFit: "later", description: "Trieste, the Adriatic coast and a crossroads of cultures." },
  { slug: "emilia-romagna", name: "Emilia-Romagna", capital: "Bologna", area: "North", firstTripFit: "good", description: "Bologna, Parma and Modena — home to some of Italy's best-known food.", image: { src: unsplash("1682277303978-7ba42c704590"), alt: "Rooftops of Bologna with its medieval towers" } },
  // Centre
  { slug: "tuscany", name: "Tuscany", capital: "Florence", area: "Centre", firstTripFit: "great", description: "Florence, Renaissance art, hill towns and wine country.", image: { src: unsplash("1652121650307-57ad2716432c"), alt: "Rolling hills and cypress trees in the Tuscan countryside" } },
  { slug: "umbria", name: "Umbria", capital: "Perugia", area: "Centre", firstTripFit: "good", description: "Green hills, Assisi and Perugia in the heart of Italy.", image: { src: unsplash("1630247008567-9c3facb9276c"), alt: "The Basilica of San Francesco in Assisi above the Umbrian plain" } },
  { slug: "marche", name: "Marche", capital: "Ancona", area: "Centre", firstTripFit: "later", description: "Adriatic beaches, Urbino and inland hill towns." },
  { slug: "lazio", name: "Lazio", capital: "Rome", area: "Centre", firstTripFit: "great", description: "Rome, ancient sites and hill towns within reach of the capital.", image: { src: unsplash("1552832230-c0197dd311b5"), alt: "The Colosseum in Rome lit up at dusk" } },
  // South
  { slug: "abruzzo", name: "Abruzzo", capital: "L'Aquila", area: "South", firstTripFit: "later", description: "National parks, mountains and the Adriatic coast." },
  { slug: "molise", name: "Molise", capital: "Campobasso", area: "South", firstTripFit: "later", description: "Hill villages and quiet countryside in one of Italy's least-visited regions." },
  { slug: "campania", name: "Campania", capital: "Naples", area: "South", firstTripFit: "great", description: "Naples, Pompeii and the Amalfi Coast.", image: { src: unsplash("1609186796344-b9222f036f84"), alt: "Positano's houses stacked on the cliffs of the Amalfi Coast" } },
  { slug: "puglia", name: "Puglia", capital: "Bari", area: "South", firstTripFit: "good", description: "Trulli, whitewashed towns and two long coastlines at Italy's heel.", image: { src: unsplash("1632226705528-14afa4dcdc0f"), alt: "Whitewashed trulli with conical stone roofs in Alberobello" } },
  { slug: "basilicata", name: "Basilicata", capital: "Potenza", area: "South", firstTripFit: "later", description: "Matera's ancient cave dwellings and a quiet stretch of the south.", image: { src: unsplash("1536781910396-bb64dbe103e4"), alt: "The stone houses of Matera's Sassi on a hillside" } },
  { slug: "calabria", name: "Calabria", capital: "Catanzaro", area: "South", firstTripFit: "later", description: "The toe of Italy, with a long coastline and a mountainous interior." },
  // Islands
  { slug: "sicily", name: "Sicily", capital: "Palermo", area: "Islands", firstTripFit: "good", description: "The Mediterranean's largest island: Palermo, Etna and Greek temples.", image: { src: unsplash("1524942434100-2b3f200f5b40"), alt: "Aerial view of a Sicilian town beside the sea" } },
  { slug: "sardinia", name: "Sardinia", capital: "Cagliari", area: "Islands", firstTripFit: "later", description: "Clear water, a long coastline and a distinct island culture.", image: { src: unsplash("1698247186956-1a06d3c7fb6c"), alt: "A boat anchored in turquoise water off the Sardinian coast" } },
];

/** Regions shown on the homepage, in display order. */
export const featuredRegionSlugs = [
  "lazio",
  "tuscany",
  "lombardy",
  "veneto",
  "campania",
  "sicily",
  "sardinia",
  "puglia",
  "liguria",
  "emilia-romagna",
];
