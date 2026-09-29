import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

const links = [
  { label: "Art", href: routes.topic("art") },
  { label: "Architecture", href: routes.topic("architecture") },
  { label: "Fashion", href: routes.topic("fashion") },
  { label: "Design", href: routes.topic("design") },
  { label: "Cinema", href: routes.topic("cinema") },
  { label: "Traditions", href: routes.topic("traditions") },
  { label: "Lifestyle", href: routes.section("lifestyle") },
];

export function CultureSection({ lead, stories }: { lead: Article; stories: Article[] }) {
  return (
    <HomeSection labelledBy="culture-title" className="border-t border-border">
      <SectionHeader
        id="culture-title"
        label="Culture & Life"
        title="The stories behind Italy."
        action={{ label: "All culture", href: routes.section("culture") }}
        links={links}
      />
      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <StoryCard
          article={lead}
          variant="lead"
          sizes="(min-width: 1024px) 720px, 100vw"
          className="lg:col-span-7"
        />
        <ul className="flex flex-col gap-8 lg:col-span-5">
          {stories.map((article) => (
            <li key={article.slug}>
              <StoryCard article={article} variant="text" />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
