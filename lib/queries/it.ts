import type { Metadata } from "next";

import { articles } from "@/data/articles";
import { authors } from "@/data/authors";
import { itArticleContent } from "@/data/it/article-content";
import { itArticles } from "@/data/it/articles";
import { itAuthorCopy } from "@/data/it/authors";
import { itCardCopy } from "@/data/it/card-copy";
import { itCategories, type ItCategory } from "@/data/it/categories";
import { regions } from "@/data/regions";
import { topics } from "@/data/topics";
import { articlePairs } from "@/lib/i18n";
import { paginate } from "@/lib/queries/pagination";
import { itRoutes, pagePairs } from "@/lib/site";
import type { Article, ArticleDetail, Author, CategorySlug, Paginated } from "@/lib/types";

// Data access for the Italian edition (/it). Italian pages list Italian
// articles first, then English-only articles presented with Italian card
// copy and clearly marked as English (their `locale` stays "en").

const translatedEnglish = new Set(articlePairs.map((p) => p.en));

const extraSectionNames: Partial<Record<CategorySlug, string>> = {
  events: "Eventi",
  weather: "Meteo",
};

export const itSectionName = (slug: CategorySlug) =>
  itCategories.find((c) => c.slug === slug)?.name ?? extraSectionNames[slug] ?? slug;

/** An English article dressed for an Italian listing. */
function asItalianCard(article: Article): Article {
  const copy = itCardCopy[article.slug];
  return {
    ...article,
    title: copy?.title ?? article.title,
    excerpt: copy?.excerpt ?? article.excerpt,
    shortTitle: undefined,
    category: { slug: article.category.slug, name: itSectionName(article.category.slug) },
    // The thumbnail's English alt text would be read out on an Italian page;
    // the card's Italian headline already describes the link.
    image: article.image ? { ...article.image, alt: "" } : undefined,
  };
}

const newestFirst = (a: Article, b: Article) => b.updatedAt.localeCompare(a.updatedAt);

/** All articles shown on Italian pages: Italian editions first, then English-only articles. */
function allForItaly(): Article[] {
  const italian = [...itArticles].sort(newestFirst);
  const english = articles
    .filter((a) => !translatedEnglish.has(a.slug))
    .sort(newestFirst)
    .map(asItalianCard);
  return [...italian, ...english];
}

export interface ItArticleQuery {
  category?: CategorySlug;
  kind?: Article["kind"];
  /** Only articles written in Italian. */
  italianOnly?: boolean;
  excludeSlugs?: string[];
  query?: string;
  page?: number;
  pageSize?: number;
}

const matches = (article: Article, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [article.title, article.excerpt, article.category.name].join(" ").toLowerCase().includes(q);
};

export async function getItArticles({
  category,
  kind,
  italianOnly = false,
  excludeSlugs = [],
  query = "",
  page = 1,
  pageSize = 9,
}: ItArticleQuery = {}): Promise<Paginated<Article>> {
  const filtered = allForItaly()
    .filter((a) => !category || a.category.slug === category)
    .filter((a) => !kind || a.kind === kind)
    .filter((a) => !italianOnly || a.locale === "it")
    .filter((a) => !excludeSlugs.includes(a.slug))
    .filter((a) => matches(a, query));
  return paginate(filtered, page, pageSize);
}

export async function listItArticles(query: ItArticleQuery & { limit?: number } = {}) {
  const { items } = await getItArticles({ ...query, pageSize: query.limit ?? 100 });
  return items;
}

/** Italian cards for specific English slugs, in the order given. */
export async function getItCards(slugs: string[]): Promise<Article[]> {
  const all = allForItaly();
  return slugs
    .map((slug) => all.find((a) => a.slug === slug))
    .filter((a): a is Article => a !== undefined);
}

/** Italian sections with published articles (in either language). Empty sections have no page. */
export async function getItCategories(): Promise<ItCategory[]> {
  const all = allForItaly();
  return itCategories.filter((c) => all.some((a) => a.category.slug === c.slug));
}

export async function getItCategoryBySlug(itSlug: string): Promise<ItCategory | null> {
  return itCategories.find((c) => c.itSlug === itSlug) ?? null;
}

/**
 * An Italian section page is indexed only once it contains at least one
 * article written in Italian; until then it's a navigation page (noindex).
 */
export function isItSectionIndexable(slug: CategorySlug): boolean {
  return itArticles.some((a) => a.category.slug === slug);
}

export function localizeAuthor(author: Author): Author {
  const copy = itAuthorCopy[author.slug];
  return copy ? { ...author, name: copy.name ?? author.name, role: copy.role, shortBio: copy.shortBio } : author;
}

export async function getItArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const article = itArticles.find((a) => a.slug === slug);
  const content = itArticleContent[slug];
  const author = authors.find((a) => a.slug === article?.authorSlug);
  if (!article || !content || !author) return null;
  return {
    ...article,
    ...content,
    author: localizeAuthor(author),
    topics: topics.filter((t) => article.topicSlugs.includes(t.slug)),
    regions: regions.filter((r) => article.regionSlugs.includes(r.slug)),
  };
}

export async function getAllItArticles(): Promise<Article[]> {
  return itArticles;
}

/** Italian editions linked by the article first, then its English edition's related articles. */
export async function getItRelatedArticles(article: Article, limit = 6): Promise<Article[]> {
  const all = allForItaly();
  const english = articlePairs.find((p) => p.it === article.slug)?.en;
  const englishRelated = articles.find((a) => a.slug === english)?.relatedSlugs ?? [];
  const slugs = [
    ...(article.relatedSlugs ?? []),
    ...englishRelated.map((slug) => articlePairs.find((p) => p.en === slug)?.it ?? slug),
  ];
  const seen = new Set<string>([article.slug]);
  const related: Article[] = [];
  for (const slug of slugs) {
    const match = all.find((a) => a.slug === slug);
    if (match && !seen.has(match.slug)) {
      seen.add(match.slug);
      related.push(match);
    }
  }
  return related.slice(0, limit);
}

// ——— Language alternates ———

/** Italian paths that are indexable, and therefore valid hreflang targets. */
function isIndexableItPath(itPath: string): boolean {
  if (itPath === itRoutes.search) return false;
  const section = itCategories.find((c) => `/it/${c.itSlug}` === itPath);
  return section ? isItSectionIndexable(section.slug) : true;
}

/** [English, Italian] page pairs where both pages are indexable. */
export function hreflangPairs(): [string, string][] {
  return pagePairs.filter(([, itPath]) => isIndexableItPath(itPath));
}

/**
 * `alternates.languages` for a page, or undefined when it has no indexable
 * equivalent in the other language. English is the x-default.
 */
export function languageAlternates(path: string): NonNullable<Metadata["alternates"]>["languages"] {
  const pair = hreflangPairs().find(([en, it]) => en === path || it === path);
  if (!pair) return undefined;
  const [en, it] = pair;
  return { en, it, "x-default": en };
}
