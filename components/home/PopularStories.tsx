import { EditorialList } from "@/components/editorial/EditorialList";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import type { Article } from "@/lib/types";

// An editorial selection, not a popularity ranking: the site has no reader data.
export function PopularStories({ articles }: { articles: Article[] }) {
  return (
    <HomeSection labelledBy="popular-title" className="border-t border-border">
      <SectionHeader id="popular-title" label="Editors' picks" />
      <EditorialList articles={articles} className="mt-6" />
    </HomeSection>
  );
}
