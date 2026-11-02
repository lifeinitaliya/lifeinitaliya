import Link from "next/link";

import { StoryImage } from "@/components/editorial/StoryImage";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";

function CityCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  const href = routes.article(article);
  const title = article.shortTitle ?? article.title;
  return (
    <article className="group relative overflow-hidden">
      <StoryImage
        article={article}
        sizes="(min-width: 1024px) 195px, (min-width: 640px) 33vw, 50vw"
        priority={priority}
        className="aspect-[3/4]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70">
          {article.category.name}
        </p>
        <h3 className="font-display text-[16px] leading-[1.25] text-white">
          <Link
            href={href}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] transition-opacity group-hover:opacity-80"
          >
            {title}
          </Link>
        </h3>
      </div>
    </article>
  );
}

export function CitiesSection({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="cities-title" className="border-t border-border">
      <SectionHeader
        id="cities-title"
        label="Cities"
        title="Know a city before you arrive."
        description="Practical first-time guides to Florence, Venice, Naples, Milan and more."
        action={{ label: "All city guides", href: routes.section("cities") }}
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {articles.slice(0, 6).map((article, i) => (
          <li key={article.slug}>
            <CityCard article={article} priority={i < 2} />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
