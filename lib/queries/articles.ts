import { articleContent } from "@/data/article-content";
import { articles, heroArticleSlugs, popularArticleSlugs } from "@/data/articles";
import { authors } from "@/data/authors";
import { regions } from "@/data/regions";
import { topics } from "@/data/topics";
import { paginate } from "@/lib/queries/pagination";
import type {
  Article,
  ArticleDetail,
  CategorySlug,
  Guide,
  Paginated,
} from "@/lib/types";

// Data access layer for stories and guides. Components only depend on these
// async functions, so swapping the mock source for Supabase won't touch the UI.

const bySlugs = (slugs: string[]): Article[] =>
  slugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is Article => a !== undefined);

const newestFirst = (a: Article, b: Article) => b.updatedAt.localeCompare(a.updatedAt);
const byRank = (a: Article, b: Article) =>
  (b.kind === "guide" ? b.guideRank : 0) - (a.kind === "guide" ? a.guideRank : 0) ||
  newestFirst(a, b);

const matchesQuery = (article: Article, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const topicNames = article.topicSlugs.map((s) => topics.find((t) => t.slug === s)?.name ?? "");
  const regionNames = article.regionSlugs.map((s) => regions.find((r) => r.slug === s)?.name ?? "");
  return [article.title, article.excerpt, article.category.name, ...topicNames, ...regionNames]
    .join(" ")
    .toLowerCase()
    .includes(q);
};

export interface ArticleQuery {
  kind?: Article["kind"];
  category?: CategorySlug;
  topic?: string;
  region?: string;
  author?: string;
  query?: string;
  excludeSlugs?: string[];
  sort?: "latest" | "rank";
  page?: number;
  pageSize?: number;
}

export async function getArticles({
  kind,
  category,
  topic,
  region,
  author,
  query = "",
  excludeSlugs = [],
  sort = "latest",
  page = 1,
  pageSize = 9,
}: ArticleQuery = {}): Promise<Paginated<Article>> {
  const filtered = articles
    .filter((a) => !kind || a.kind === kind)
    .filter((a) => !category || a.category.slug === category)
    .filter((a) => !topic || a.topicSlugs.includes(topic))
    .filter((a) => !region || a.regionSlugs.includes(region))
    .filter((a) => !author || a.authorSlug === author)
    .filter((a) => !excludeSlugs.includes(a.slug))
    .filter((a) => matchesQuery(a, query))
    .sort(sort === "rank" ? byRank : newestFirst);
  return paginate(filtered, page, pageSize);
}

/** Shorthand for a plain list without pagination metadata. */
export async function listArticles(query: ArticleQuery & { limit?: number } = {}) {
  const { items } = await getArticles({ ...query, pageSize: query.limit ?? query.pageSize ?? 100 });
  return items;
}

export async function getGuides(query: Omit<ArticleQuery, "kind"> = {}) {
  return getArticles({ ...query, kind: "guide" }) as Promise<Paginated<Guide>>;
}

export async function getArticleBySlug(
  slug: string,
  kind?: Article["kind"]
): Promise<ArticleDetail | null> {
  const article = articles.find((a) => a.slug === slug && (!kind || a.kind === kind));
  if (!article) return null;
  const author = authors.find((a) => a.slug === article.authorSlug);
  if (!author) return null;
  const content = articleContent[slug] ?? { body: [{ type: "paragraph", text: article.excerpt }] };
  return {
    ...article,
    ...content,
    author,
    topics: topics.filter((t) => article.topicSlugs.includes(t.slug)),
    regions: regions.filter((r) => article.regionSlugs.includes(r.slug)),
  };
}

export async function getAllArticles(): Promise<Article[]> {
  return articles;
}

/**
 * Hand-picked related articles first (article.relatedSlugs), then articles
 * sharing the most topics and regions, then the same section.
 */
export async function getRelatedArticles(article: Article, limit = 3): Promise<Article[]> {
  const picked = bySlugs(article.relatedSlugs ?? []).filter((a) => a.slug !== article.slug);
  const pickedSlugs = new Set(picked.map((a) => a.slug));
  const automatic = articles
    .filter((a) => a.slug !== article.slug && !pickedSlugs.has(a.slug))
    .map((a) => ({
      article: a,
      score:
        a.topicSlugs.filter((t) => article.topicSlugs.includes(t)).length * 2 +
        a.regionSlugs.filter((r) => article.regionSlugs.includes(r)).length * 2 +
        (a.category.slug === article.category.slug ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || newestFirst(a.article, b.article))
    .map(({ article: a }) => a);
  return [...picked, ...automatic].slice(0, limit);
}

export async function getHeroArticles(): Promise<Article[]> {
  return bySlugs(heroArticleSlugs);
}

/** Until real analytics exist, "popular" is an editorially chosen list. */
export async function getPopularArticles({
  limit = 5,
  category,
}: { limit?: number; category?: CategorySlug } = {}): Promise<Article[]> {
  if (!category) return bySlugs(popularArticleSlugs).slice(0, limit);
  return listArticles({ category, sort: "rank", limit });
}
