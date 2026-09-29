import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

const links = [
  { label: "Boat Trips", href: routes.topic("boat-trips") },
  { label: "Walking Tours", href: routes.topic("walking-tours") },
  { label: "Food & Wine Tours", href: routes.topic("food-and-wine-tours") },
];

export function ToursSection({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="tours-title">
      <SectionHeader
        id="tours-title"
        label="Tours & Experiences"
        title="Experiences worth planning."
        description="How to choose tours and experiences, and what to know before you book. We don't sell tours."
        action={{ label: "All tours & experiences", href: routes.section("tours") }}
        links={links}
      />
      <div className="-mx-4 mt-10 sm:mx-0">
        <ul className="flex snap-x gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {articles.map((article) => (
            <li key={article.slug} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <StoryCard article={article} variant="overlay" />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
