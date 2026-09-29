import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

const links = [
  { label: "Regional Cuisine", href: routes.topic("regional-cuisine") },
  { label: "Wine", href: routes.topic("wine") },
  { label: "Coffee", href: routes.topic("coffee") },
  { label: "Desserts", href: routes.topic("desserts") },
];

export function FoodSection({ lead, stories }: { lead: Article; stories: Article[] }) {
  return (
    <HomeSection labelledBy="food-title" tone="sand">
      <SectionHeader
        id="food-title"
        label="Food & Drink"
        title="Taste Italy, region by region."
        action={{ label: "All food & drink", href: routes.section("food") }}
        links={links}
      />
      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <StoryCard
          article={lead}
          variant="lead"
          imageClassName="aspect-[4/3] lg:aspect-[4/5]"
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="lg:col-span-6"
        />
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:col-span-6">
          {stories.map((article) => (
            <li key={article.slug}>
              <StoryCard
                article={article}
                sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 208px"
                showExcerpt={false}
                compactOnMobile
                imageClassName="sm:aspect-[4/3]"
              />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
