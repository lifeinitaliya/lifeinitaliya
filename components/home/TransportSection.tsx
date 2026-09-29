import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

const links = [
  { label: "Trains", href: routes.topic("trains") },
  { label: "Airports & Transfers", href: routes.topic("airports") },
  { label: "Driving", href: routes.topic("driving") },
  { label: "Ferries", href: routes.topic("ferries") },
];

export function TransportSection({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="transport-title" tone="ink">
      <SectionHeader
        id="transport-title"
        label="Transport"
        title="Getting around Italy."
        description="Trains, airports, transfers, ferries and driving — the practical information that makes a trip run smoothly."
        action={{ label: "All transport", href: routes.section("transport") }}
        links={links}
        tone="dark"
      />
      <StoryGrid articles={articles} columns={4} tone="dark" showRank compactOnMobile className="mt-10" />
    </HomeSection>
  );
}
