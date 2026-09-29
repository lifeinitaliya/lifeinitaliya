import type { City, WeatherSample } from "@/lib/types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

export const cities: City[] = [
  { slug: "rome", name: "Rome", regionSlug: "lazio", image: { src: unsplash("1552832230-c0197dd311b5"), alt: "The Colosseum in Rome lit up at dusk" } },
  { slug: "milan", name: "Milan", regionSlug: "lombardy", image: { src: unsplash("1572602648934-1d98de6dab48"), alt: "The façade of Milan Cathedral" } },
  { slug: "florence", name: "Florence", regionSlug: "tuscany", image: { src: unsplash("1687817997684-c9335cce7c5c"), alt: "Florence's rooftops and cathedral dome with hills behind" } },
  { slug: "venice", name: "Venice", regionSlug: "veneto", image: { src: unsplash("1545157000-85f257f7b040"), alt: "Boats on the Grand Canal in Venice" } },
  { slug: "naples", name: "Naples", regionSlug: "campania", image: { src: unsplash("1567202170721-bd01fbdea30a"), alt: "Naples and its bay with Mount Vesuvius in the distance" } },
  { slug: "palermo", name: "Palermo", regionSlug: "sicily", image: { src: unsplash("1728822953022-cb255a2d7c79"), alt: "Palermo Cathedral and its gardens" } },
  { slug: "bologna", name: "Bologna", regionSlug: "emilia-romagna", image: { src: unsplash("1682277303978-7ba42c704590"), alt: "Rooftops of Bologna with its medieval towers" } },
  { slug: "verona", name: "Verona", regionSlug: "veneto", image: { src: unsplash("1597261360942-48b0604ca7bc"), alt: "The Roman arena in Verona lit up at night" } },
];

/**
 * SAMPLE weather values for layout only. They are not real observations or
 * forecasts; replace with a weather API before launch.
 */
export const weatherSamples: WeatherSample[] = [
  { citySlug: "rome", temperature: 24, condition: "Sunny", high: 26, low: 16 },
  { citySlug: "milan", temperature: 19, condition: "Partly cloudy", high: 21, low: 13 },
  { citySlug: "florence", temperature: 22, condition: "Sunny", high: 25, low: 14 },
  { citySlug: "venice", temperature: 20, condition: "Cloudy", high: 22, low: 15 },
  { citySlug: "naples", temperature: 25, condition: "Partly cloudy", high: 27, low: 18 },
  { citySlug: "palermo", temperature: 27, condition: "Sunny", high: 28, low: 21 },
];
