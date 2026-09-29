import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { CityCard } from "@/components/italy/CityCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { listArticles } from "@/lib/queries/articles";
import { getCities, getRegionBySlug, getRegions, hasRegionPage } from "@/lib/queries/italy";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import type { RegionArea } from "@/lib/types";

const areaLabels: Record<RegionArea, string> = {
  North: "Northern Italy",
  Centre: "Central Italy",
  South: "Southern Italy",
  Islands: "Island region",
};

// Only regions with published content have a page.
export const dynamicParams = false;

export async function generateStaticParams() {
  const regions = await getRegions();
  return regions.filter(hasRegionPage).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/region/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const region = await getRegionBySlug(slug);
  if (!region) return {};
  return pageMetadata({
    title: `${region.name}: Travel, Food & Culture`,
    description: region.description,
    path: routes.region(region.slug),
  });
}

export default async function RegionPage({ params }: PageProps<"/region/[slug]">) {
  const { slug } = await params;
  const region = await getRegionBySlug(slug);
  if (!region || !hasRegionPage(region)) notFound();

  const path = routes.region(region.slug);
  const [articles, cities, allRegions] = await Promise.all([
    listArticles({ region: region.slug }),
    getCities(),
    getRegions(),
  ]);
  const [lead, ...rest] = articles;
  const regionCities = cities.filter((c) => c.regionSlug === region.slug);
  const neighbours = allRegions.filter((r) => r.area === region.area && r.slug !== region.slug);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: region.name, description: region.description, path })}
      />
      <header className="border-b border-border">
        <Container className="pt-8 pb-10 sm:pt-10 sm:pb-14">
          <Breadcrumbs
            items={[
              { label: "Regions", href: routes.regions },
              { label: region.name, href: path },
            ]}
            className="mb-10 sm:mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[12px] font-bold tracking-[0.18em] text-primary uppercase">
                {areaLabels[region.area]}
              </p>
              <h1 className="mt-4 font-display text-[clamp(48px,7vw,96px)] leading-[0.95]">
                {region.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {region.description}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <dt className="text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">Capital</dt>
                <dd className="mt-1 font-display text-[26px]">{region.capital}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">Stories</dt>
                <dd className="mt-1 font-display text-[26px] tabular-nums">{region.articleCount}</dd>
              </div>
            </dl>
          </div>
        </Container>
        {region.image && (
          <Container className="pb-10 sm:pb-14">
            <div className="relative aspect-[3/2] overflow-hidden bg-secondary sm:aspect-[21/9]">
              <Image
                src={region.image.src}
                alt={region.image.alt}
                fill
                preload
                sizes="(min-width: 1280px) 1176px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        )}
      </header>

      {lead && (
        <Container className="pt-12 sm:pt-16">
          <StoryCard article={lead} variant="feature" headingLevel="h2" showRank />
        </Container>
      )}

      {rest.length > 0 && (
        <section aria-labelledby="region-stories-title" className="pt-14 sm:pt-20">
          <Container>
            <SectionHeader id="region-stories-title" label={`More from ${region.name}`} />
            <StoryGrid articles={rest} showRank className="mt-8" />
          </Container>
        </section>
      )}

      {regionCities.length > 0 && (
        <section aria-labelledby="region-cities-title" className="pt-14 sm:pt-20">
          <Container>
            <SectionHeader id="region-cities-title" label={`Cities in ${region.name}`} />
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {regionCities.map((city) => (
                <li key={city.slug}>
                  <CityCard city={city} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section aria-labelledby="neighbours-title" className="mt-14 border-t border-border bg-sand py-14 sm:mt-20 sm:py-16">
        <Container>
          <SectionHeader
            id="neighbours-title"
            label="Nearby regions"
            action={{ label: "All regions", href: routes.regions }}
          />
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {neighbours.map((r) => (
              <li key={r.slug}>
                {hasRegionPage(r) ? (
                  <Link href={routes.region(r.slug)} className="rounded-sm font-display text-[24px] hover:text-primary">
                    {r.name}
                  </Link>
                ) : (
                  <span className="font-display text-[24px] text-foreground/45">{r.name}</span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
