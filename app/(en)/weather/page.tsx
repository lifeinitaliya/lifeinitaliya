import { notFound } from "next/navigation";

// Retired before launch: the city values here were sample data, not real
// conditions. Seasonal advice lives in /guides/best-time-to-visit-italy. The
// page returns 404 until a real weather source is connected; the previous
// implementation is in git history (WeatherStrip and getWeatherSamples are unchanged).
export default function WeatherPage() {
  notFound();
}
