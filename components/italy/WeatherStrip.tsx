import { WeatherCard } from "@/components/italy/WeatherCard";
import type { CityWeather } from "@/lib/queries/italy";
import { cn } from "@/lib/utils";

/** Row of city weather tiles; scrolls horizontally on small screens. */
export function WeatherStrip({ weather, className }: { weather: CityWeather[]; className?: string }) {
  return (
    <div className={cn("-mx-4 sm:mx-0", className)}>
      <ul
        aria-label="Sample weather by city"
        className="flex snap-x gap-0 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:px-0 lg:grid lg:grid-cols-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {weather.map((item) => (
          <li key={item.citySlug} className="w-40 shrink-0 snap-start lg:w-auto">
            <WeatherCard weather={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
