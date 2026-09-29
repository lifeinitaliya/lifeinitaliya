import { SampleNotice } from "@/components/editorial/SampleNotice";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { WeatherStrip } from "@/components/italy/WeatherStrip";
import type { CityWeather } from "@/lib/queries/italy";
import { routes } from "@/lib/site";

export function WeatherSection({ weather }: { weather: CityWeather[] }) {
  return (
    <HomeSection labelledBy="weather-title" className="border-t border-border">
      <SectionHeader
        id="weather-title"
        label="Italy Weather"
        action={{ label: "View Italy weather", href: routes.weather }}
      >
        <SampleNotice className="mt-3">
          Example data for layout only — not live weather.
        </SampleNotice>
      </SectionHeader>
      <WeatherStrip weather={weather} className="mt-8" />
    </HomeSection>
  );
}
