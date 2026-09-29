import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

const links = [
  { label: "Cities", href: routes.section("cities") },
  { label: "Regions", href: routes.regions },
  { label: "Weekend Trips", href: routes.topic("weekend-trips") },
  { label: "Itineraries", href: routes.topic("itineraries") },
  { label: "Travel Tips", href: routes.topic("travel-tips") },
];

export function TravelSection({ lead, stories }: { lead: Article; stories: Article[] }) {
  return (
    <HomeSection labelledBy="travel-title" className="border-t border-border">
      <SectionHeader
        id="travel-title"
        label="Travel"
        title="Go beyond the obvious."
        action={{ label: "All travel", href: routes.section("travel") }}
        links={links}
      />
      <StoryCard article={lead} variant="feature" className="mt-10" />
      <StoryGrid articles={stories} columns={4} showExcerpt={false} compactOnMobile className="mt-10 sm:mt-14" />
    </HomeSection>
  );
}
