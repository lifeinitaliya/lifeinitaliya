import { PageHeader } from "@/components/content/PageHeader";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { RegionCard } from "@/components/italy/RegionCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { getRegions } from "@/lib/queries/italy";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import type { RegionArea } from "@/lib/types";

const description =
  "Italy has twenty regions, each with its own landscapes, food and traditions. Explore them from the Alps to the islands.";

export const metadata = pageMetadata({
  title: "Explore Italy by Region",
  description,
  path: routes.regions,
});

const areas: { area: RegionArea; label: string }[] = [
  { area: "North", label: "Northern Italy" },
  { area: "Centre", label: "Central Italy" },
  { area: "South", label: "Southern Italy" },
  { area: "Islands", label: "The islands" },
];

export default async function RegionsPage() {
  const regions = await getRegions();

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: "Regions of Italy", description, path: routes.regions })}
      />
      <PageHeader
        eyebrow="Regions"
        title="Explore Italy by region."
        description={description}
        breadcrumbs={[{ label: "Regions", href: routes.regions }]}
      />
      <Container className="space-y-16 py-12 sm:space-y-20 sm:py-16">
        {areas.map(({ area, label }) => {
          const inArea = regions.filter((r) => r.area === area);
          return (
            <section key={area} aria-labelledby={`area-${area}`}>
              <SectionHeader id={`area-${area}`} label={label}>
                <p className="mt-2 text-sm text-muted-foreground">
                  {inArea.length} {inArea.length === 1 ? "region" : "regions"}
                </p>
              </SectionHeader>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {inArea.map((region) => (
                  <li key={region.slug}>
                    <RegionCard region={region} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </>
  );
}
