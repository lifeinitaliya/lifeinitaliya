import { HeroStory } from "@/components/editorial/HeroStory";
import { StoryCard } from "@/components/editorial/StoryCard";
import { Container } from "@/components/shared/Container";
import type { Article } from "@/lib/types";

interface TodayInItalyProps {
  lead: Article;
  secondary: Article[];
}

export function TodayInItaly({ lead, secondary }: TodayInItalyProps) {
  return (
    <section aria-labelledby="home-title">
      <Container className="pt-10 pb-14 sm:pt-14 sm:pb-20">
        <div className="grid gap-6 border-b border-foreground pb-8 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-10">
          <div className="lg:col-span-8">
            <p className="text-[12px] font-bold tracking-[0.2em] text-primary uppercase">
              Today in Italy
            </p>
            <h1
              id="home-title"
              className="mt-4 font-display text-[clamp(52px,8.5vw,112px)] leading-[0.92] tracking-[-0.02em]"
            >
              Italy, in one place.
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-4 lg:pb-2">
            Discover where to go, what to eat, what to see, what&apos;s happening and how to
            get around Italy.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <HeroStory article={lead} />
          </div>
          <div className="flex flex-col divide-y divide-border lg:col-span-4 lg:border-l lg:border-border lg:pl-10">
            {secondary.map((article) => (
              <StoryCard
                key={article.slug}
                article={article}
                headingLevel="h2"
                sizes="(min-width: 1024px) 360px, 100vw"
                className="py-8 first:pt-0 last:pb-0"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
