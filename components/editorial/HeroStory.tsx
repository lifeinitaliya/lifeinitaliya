import { StoryCard } from "@/components/editorial/StoryCard";
import type { Article } from "@/lib/types";

/** The dominant story at the top of the homepage. */
export function HeroStory({ article }: { article: Article }) {
  return (
    <StoryCard
      article={article}
      variant="lead"
      headingLevel="h2"
      priority
      sizes="(min-width: 1280px) 780px, (min-width: 1024px) 64vw, 100vw"
      imageClassName="aspect-[3/2] lg:aspect-[16/10]"
    />
  );
}
