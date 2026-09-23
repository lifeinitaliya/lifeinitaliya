import { authors } from "@/lib/mock-data/authors";
import { guideContent } from "@/lib/mock-data/guide-content";
import {
  featuredGuideSlugs,
  guides,
  popularGuideSlugs,
  spotlightGuideSlugs,
} from "@/lib/mock-data/guides";
import { topics } from "@/lib/mock-data/topics";
import { paginate } from "@/lib/data/pagination";
import type { CategorySlug, Guide, GuideDetail, Paginated } from "@/lib/types";

// Data access layer for guides. Components only depend on these async
// functions, so swapping the mock source for Supabase queries won't touch the UI.

const bySlugs = (slugs: string[]): Guide[] =>
  slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is Guide => guide !== undefined);

const newestFirst = (a: Guide, b: Guide) => b.updatedAt.localeCompare(a.updatedAt);
const byRank = (a: Guide, b: Guide) => b.guideRank - a.guideRank;

const matchesQuery = (guide: Guide, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const topicNames = guide.topicSlugs
    .map((slug) => topics.find((t) => t.slug === slug)?.name ?? "")
    .join(" ");
  return [guide.title, guide.excerpt, guide.category.name, topicNames]
    .join(" ")
    .toLowerCase()
    .includes(q);
};

export interface GuideQuery {
  category?: CategorySlug;
  topic?: string;
  author?: string;
  query?: string;
  excludeSlugs?: string[];
  sort?: "latest" | "rank";
  page?: number;
  pageSize?: number;
}

export async function getGuides({
  category,
  topic,
  author,
  query = "",
  excludeSlugs = [],
  sort = "latest",
  page = 1,
  pageSize = 9,
}: GuideQuery = {}): Promise<Paginated<Guide>> {
  const filtered = guides
    .filter((g) => !category || g.category.slug === category)
    .filter((g) => !topic || g.topicSlugs.includes(topic))
    .filter((g) => !author || g.authorSlug === author)
    .filter((g) => !excludeSlugs.includes(g.slug))
    .filter((g) => matchesQuery(g, query))
    .sort(sort === "rank" ? byRank : newestFirst);
  return paginate(filtered, page, pageSize);
}

export async function getGuideBySlug(slug: string): Promise<GuideDetail | null> {
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return null;
  const author = authors.find((a) => a.slug === guide.authorSlug);
  if (!author) return null;
  const content = guideContent[slug] ?? {
    body: [{ type: "paragraph", text: guide.excerpt }],
  };
  return {
    ...guide,
    ...content,
    author,
    topics: topics.filter((t) => guide.topicSlugs.includes(t.slug)),
  };
}

export async function getAllGuideSlugs(): Promise<string[]> {
  return guides.map((g) => g.slug);
}

/** Guides sharing the most topics, then the same category. */
export async function getRelatedGuides(guide: Guide, limit = 3): Promise<Guide[]> {
  return guides
    .filter((g) => g.slug !== guide.slug)
    .map((g) => ({
      guide: g,
      score:
        g.topicSlugs.filter((t) => guide.topicSlugs.includes(t)).length * 2 +
        (g.category.slug === guide.category.slug ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || byRank(a.guide, b.guide))
    .slice(0, limit)
    .map(({ guide: g }) => g);
}

export async function getSpotlightGuides(): Promise<Guide[]> {
  return bySlugs(spotlightGuideSlugs);
}

export async function getFeaturedGuides(): Promise<Guide[]> {
  return bySlugs(featuredGuideSlugs);
}

export async function getLatestGuides({
  limit = 6,
  excludeSlugs = [],
}: { limit?: number; excludeSlugs?: string[] } = {}): Promise<Guide[]> {
  const { items } = await getGuides({ excludeSlugs, pageSize: limit });
  return items;
}

export async function getPopularGuides({
  limit = 5,
  category,
}: { limit?: number; category?: CategorySlug } = {}): Promise<Guide[]> {
  if (!category) return bySlugs(popularGuideSlugs).slice(0, limit);
  // Until real popularity data exists, rank category guides by Guide Rank.
  const { items } = await getGuides({ category, sort: "rank", pageSize: limit });
  return items;
}
