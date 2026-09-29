import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

export function PeopleSection({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="people-title">
      <SectionHeader
        id="people-title"
        label="People of Italy"
        title="Profiles, careers and cultural impact."
        description="The artists, makers, film-makers and athletes whose work shapes Italian culture."
        action={{ label: "All people", href: routes.section("people") }}
      />
      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <StoryCard
              article={article}
              imageClassName="aspect-[4/5]"
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 95vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
