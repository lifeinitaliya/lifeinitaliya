import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { RegionCard } from "@/components/italy/RegionCard";
import { routes } from "@/lib/site";
import type { RegionWithCount } from "@/lib/types";

export function RegionsSection({ regions }: { regions: RegionWithCount[] }) {
  return (
    <HomeSection labelledBy="regions-title">
      <SectionHeader
        id="regions-title"
        label="Regions"
        title="Explore Italy by region."
        description="Twenty regions, each with its own landscapes, food and traditions."
        action={{ label: "View all regions", href: routes.regions }}
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {regions.map((region) => (
          <li key={region.slug}>
            <RegionCard region={region} />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
