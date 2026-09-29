import { articles } from "@/data/articles";
import { cities, weatherSamples } from "@/data/cities";
import { events } from "@/data/events";
import { featuredRegionSlugs, regions } from "@/data/regions";
import type { City, ItalyEvent, Region, RegionWithCount, WeatherSample } from "@/lib/types";

// Regions, cities, events and weather. Events and weather are SAMPLE data
// until the CMS and a weather API are connected.

const withCount = (region: Region): RegionWithCount => ({
  ...region,
  articleCount: articles.filter((a) => a.regionSlugs.includes(region.slug)).length,
});

export async function getRegions(): Promise<RegionWithCount[]> {
  return regions.map(withCount);
}

export async function getFeaturedRegions(): Promise<RegionWithCount[]> {
  return featuredRegionSlugs
    .map((slug) => regions.find((r) => r.slug === slug))
    .filter((r): r is Region => r !== undefined)
    .map(withCount);
}

export async function getRegionBySlug(slug: string): Promise<RegionWithCount | null> {
  const region = regions.find((r) => r.slug === slug);
  return region ? withCount(region) : null;
}

/** Only regions with published content get their own page. */
export const hasRegionPage = (region: RegionWithCount) => region.articleCount > 0;

export async function getCities(): Promise<City[]> {
  return cities;
}

export async function getEvents({ limit }: { limit?: number } = {}): Promise<ItalyEvent[]> {
  return limit ? events.slice(0, limit) : events;
}

export interface CityWeather extends WeatherSample {
  city: City;
}

/** SAMPLE weather — not live. Replace with a weather API. */
export async function getWeatherSamples(): Promise<CityWeather[]> {
  return weatherSamples.flatMap((sample) => {
    const city = cities.find((c) => c.slug === sample.citySlug);
    return city ? [{ ...sample, city }] : [];
  });
}
