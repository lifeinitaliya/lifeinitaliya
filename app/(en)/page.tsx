import type { Metadata } from "next";

import { FoodSection } from "@/components/home/FoodSection";
import { LatestFromItaly } from "@/components/home/LatestFromItaly";
import { PopularStories } from "@/components/home/PopularStories";
import { PracticalGuides } from "@/components/home/PracticalGuides";
import { RegionsSection } from "@/components/home/RegionsSection";
import { TodayInItaly } from "@/components/home/TodayInItaly";
import { TransportSection } from "@/components/home/TransportSection";
import { TravelSection } from "@/components/home/TravelSection";
import { WhyBsInsights } from "@/components/home/WhyBsInsights";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getHeroArticles,
  getPopularArticles,
  listArticles,
} from "@/lib/queries/articles";
import { getFeaturedRegions } from "@/lib/queries/italy";
import { languageAlternates } from "@/lib/queries/it";
import { organizationId } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";
import type { Article, Guide } from "@/lib/types";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: languageAlternates("/") },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": organizationId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}${routes.search}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const transportGuideSlugs = [
  "italy-by-train",
  "italy-airport-transfers",
  "driving-in-italy",
  "getting-between-italian-cities",
];

export default async function HomePage() {
  const [hero, stories, guides, popular, regions] = await Promise.all([
    getHeroArticles(),
    listArticles({ kind: "story" }),
    listArticles({ kind: "guide" }),
    getPopularArticles({ limit: 5 }),
    getFeaturedRegions(),
  ]);

  // Each article appears once on the page; sections draw from what's left.
  const used = new Set(hero.map((a) => a.slug));
  const take = (items: Article[], count: number) => {
    const picked = items.filter((a) => !used.has(a.slug)).slice(0, count);
    picked.forEach((a) => used.add(a.slug));
    return picked;
  };
  const inSection = (slug: Article["category"]["slug"]) =>
    stories.filter((a) => a.category.slug === slug);

  const [foodLead, ...food] = take(inSection("food"), 5);
  const [travelLead, ...travel] = take([...inSection("travel"), ...inSection("cities")], 5);
  const transport = take(
    guides.filter((g) => transportGuideSlugs.includes(g.slug)),
    4
  );
  const practical = take(guides, 6) as Guide[];
  const latest = take(stories, 4);
  const [lead, ...secondary] = hero;

  return (
    <>
      <JsonLd data={structuredData} />
      {lead && <TodayInItaly lead={lead} secondary={secondary} />}
      {latest.length > 0 && <LatestFromItaly articles={latest} />}
      {travelLead && <TravelSection lead={travelLead} stories={travel} />}
      <RegionsSection regions={regions} />
      {foodLead && <FoodSection lead={foodLead} stories={food} />}
      {transport.length > 0 && <TransportSection articles={transport} />}
      {practical.length > 0 && <PracticalGuides guides={practical} />}
      <PopularStories articles={popular} />
      <WhyBsInsights />
    </>
  );
}
