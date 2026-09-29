import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { HomeSection } from "@/components/home/HomeSection";
import type { Article } from "@/lib/types";

export function LatestFromItaly({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="latest-title" className="pt-0 sm:pt-0">
      <SectionHeader id="latest-title" label="Latest from Italy" />
      <StoryGrid articles={articles} columns={4} showExcerpt={false} compactOnMobile className="mt-8" />
    </HomeSection>
  );
}
