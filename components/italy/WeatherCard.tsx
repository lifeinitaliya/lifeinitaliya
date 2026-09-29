import { Cloud, CloudDrizzle, CloudRain, CloudSun, Sun, type LucideIcon } from "lucide-react";

import type { CityWeather } from "@/lib/queries/italy";
import type { WeatherCondition } from "@/lib/types";
import { cn } from "@/lib/utils";

const conditionIcons: Record<WeatherCondition, LucideIcon> = {
  Sunny: Sun,
  "Partly cloudy": CloudSun,
  Cloudy: Cloud,
  "Light rain": CloudDrizzle,
  Showers: CloudRain,
};

/** City weather tile. Values are SAMPLE data until a weather API is connected. */
export function WeatherCard({ weather, className }: { weather: CityWeather; className?: string }) {
  const Icon = conditionIcons[weather.condition];
  return (
    <article
      className={cn("flex flex-col gap-4 border-l border-border py-1 pr-2 pl-5", className)}
      aria-label={`${weather.city.name}: sample data, ${weather.temperature} degrees, ${weather.condition}, high ${weather.high}, low ${weather.low}`}
    >
      <h3 className="text-[12px] font-bold tracking-[0.16em] uppercase">{weather.city.name}</h3>
      <div aria-hidden className="flex items-center gap-3">
        <span className="font-display text-[44px] leading-none tabular-nums">
          {weather.temperature}°
        </span>
        <Icon className="size-7 text-primary" strokeWidth={1.5} />
      </div>
      <div aria-hidden className="text-[13px] leading-snug text-muted-foreground">
        <p className="text-foreground">{weather.condition}</p>
        <p className="tabular-nums">
          H {weather.high}° · L {weather.low}°
        </p>
      </div>
    </article>
  );
}
