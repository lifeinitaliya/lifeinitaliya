import type { Metadata } from "next";

import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedGuides } from "@/components/home/FeaturedGuides";
import { GuideRankSection } from "@/components/home/GuideRankSection";
import { Hero } from "@/components/home/Hero";
import { LatestGuides } from "@/components/home/LatestGuides";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { PopularGuides } from "@/components/home/PopularGuides";
import { WriteForUsCTA } from "@/components/home/WriteForUsCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategories } from "@/lib/data/categories";
import {
  getFeaturedGuides,
  getLatestGuides,
  getPopularGuides,
  getSpotlightGuides,
} from "@/lib/data/guides";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
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
      publisher: { "@id": `${siteConfig.url}/#organization` },
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

export default async function HomePage() {
  const [spotlight, featured, popular, categories] = await Promise.all([
    getSpotlightGuides(),
    getFeaturedGuides(),
    getPopularGuides(),
    getCategories(),
  ]);
  const latest = await getLatestGuides({
    excludeSlugs: featured.map((guide) => guide.slug),
  });
  const [heroGuide, heroSecondary] = spotlight;

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero spotlight={heroGuide} secondary={heroSecondary} />
      <FeaturedGuides guides={featured} />
      <CategoryGrid categories={categories} />
      <LatestGuides guides={latest} />
      <GuideRankSection />
      <PopularGuides guides={popular} />
      <NewsletterCTA />
      <WriteForUsCTA />
    </>
  );
}
