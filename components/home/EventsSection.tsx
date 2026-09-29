import { SampleNotice } from "@/components/editorial/SampleNotice";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { EventCard } from "@/components/italy/EventCard";
import { routes } from "@/lib/site";
import type { City, ItalyEvent } from "@/lib/types";

export function EventsSection({ events, cities }: { events: ItalyEvent[]; cities: City[] }) {
  return (
    <HomeSection labelledBy="events-title">
      <SectionHeader
        id="events-title"
        label="Events"
        title="What's on."
        description="Events, festivals, exhibitions and experiences happening across Italy."
        action={{ label: "All events", href: routes.events }}
      >
        <SampleNotice className="mt-4">
          Sample listings shown for layout — these are not real scheduled events.
        </SampleNotice>
      </SectionHeader>
      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <li key={event.slug}>
            <EventCard event={event} city={cities.find((c) => c.slug === event.citySlug)} />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
