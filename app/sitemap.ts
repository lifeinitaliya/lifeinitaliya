import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { getAllArticles } from "@/lib/queries/articles";
import { getAllItArticles, getItCategories, hreflangPairs, isItSectionIndexable } from "@/lib/queries/it";
import { getAuthors } from "@/lib/queries/authors";
import { getCategories } from "@/lib/queries/categories";
import { getRegions, hasRegionPage } from "@/lib/queries/italy";
import { getTopics } from "@/lib/queries/topics";
import { itRoutes, routes } from "@/lib/site";

// Lists only pages that exist, have content and are indexable. Pages that
// exist in both languages list their alternates (hreflang).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, categories, regions, topics, authors, itArticles, itCategories] = await Promise.all([
    getAllArticles(),
    getCategories(),
    getRegions(),
    getTopics(),
    getAuthors(),
    getAllItArticles(),
    getItCategories(),
  ]);

  const pairs = hreflangPairs();
  const alternatesFor = (path: string) => {
    const pair = pairs.find(([en, it]) => en === path || it === path);
    return pair
      ? { alternates: { languages: { en: absoluteUrl(pair[0]), it: absoluteUrl(pair[1]), "x-default": absoluteUrl(pair[0]) } } }
      : {};
  };

  const latest = articles.reduce((max, a) => (a.updatedAt > max ? a.updatedAt : max), "");
  const latestIt = itArticles.reduce((max, a) => (a.updatedAt > max ? a.updatedAt : max), "");
  const page = (path: string, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    ...(lastModified && { lastModified }),
    ...alternatesFor(path),
  });

  const staticPages = [
    routes.guides,
    routes.regions,
    routes.topics,
    routes.authors,
    routes.about,
    routes.contact,
    routes.editorialPolicy,
    routes.privacyPolicy,
    routes.terms,
    routes.disclaimer,
    routes.cookiePolicy,
  ];

  return [
    page(routes.home, latest),
    ...categories.map((c) => page(routes.section(c.slug))),
    ...staticPages.map((path) => page(path)),
    ...articles.map((a) => page(routes.article(a), a.updatedAt)),
    ...regions.filter(hasRegionPage).map((r) => page(routes.region(r.slug))),
    ...topics.filter((t) => t.guideCount > 0).map((t) => page(routes.topic(t.slug))),
    ...authors.map((a) => page(routes.author(a.slug))),
    // Italian edition
    page(itRoutes.home, latestIt),
    page(itRoutes.guides, latestIt),
    ...itCategories.filter((c) => isItSectionIndexable(c.slug)).map((c) => page(itRoutes.section(c.slug))),
    ...itArticles.map((a) => page(routes.article(a), a.updatedAt)),
  ];
}
