// Domain types. These mirror the future Supabase tables so mock data can be
// swapped for database queries without touching components.

import type { Locale } from "@/lib/i18n";

/** Top-level sections. Each is served at `/{slug}`. */
export type CategorySlug =
  | "travel"
  | "cities"
  | "food"
  | "culture"
  | "events"
  | "things-to-do"
  | "weather"
  | "transport"
  | "people"
  | "lifestyle"
  | "tours";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  /** Longer introduction shown on the section page. */
  intro: string;
}

export interface CategoryWithCount extends Category {
  guideCount: number;
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
  categorySlug: CategorySlug;
}

export interface TopicWithCount extends Topic {
  guideCount: number;
}

export type RegionArea = "North" | "Centre" | "South" | "Islands";

/**
 * Editorial judgement of how easily a region fits a first trip (rail links,
 * density of major sights) — not a judgement of how worthwhile it is.
 */
export type FirstTripFit = "great" | "good" | "later";

export interface Region {
  slug: string;
  name: string;
  capital: string;
  area: RegionArea;
  description: string;
  image?: GuideImage;
  firstTripFit?: FirstTripFit;
}

export interface RegionWithCount extends Region {
  articleCount: number;
}

export interface City {
  slug: string;
  name: string;
  regionSlug: string;
  image?: GuideImage;
}

export type WeatherCondition = "Sunny" | "Partly cloudy" | "Cloudy" | "Light rain" | "Showers";

/** Illustrative weather for layout only — replaced by a weather API later. */
export interface WeatherSample {
  citySlug: string;
  temperature: number;
  condition: WeatherCondition;
  high: number;
  low: number;
}

/** Sample event listing. Not a real scheduled event. */
export interface ItalyEvent {
  slug: string;
  name: string;
  citySlug: string;
  category: string;
  /** Display-only date text, e.g. "12–14 Oct". */
  dateLabel: string;
  summary: string;
  image: GuideImage;
  sample: true;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  /** One or two sentences, shown on cards and article bylines. */
  shortBio: string;
  bio: string;
  interests: string[];
  avatar?: GuideImage;
}

export interface AuthorWithCount extends Author {
  guideCount: number;
}

export interface ImageCredit {
  name: string;
  url: string;
  /** e.g. "Unsplash" */
  source: string;
  sourceUrl: string;
}

export interface GuideImage {
  src: string;
  alt: string;
  credit?: ImageCredit;
}

/** Pre-sized social/structured-data image (absolute path on this site). */
export interface SocialImage {
  src: string;
  width: number;
  height: number;
}

interface ArticleBase {
  slug: string;
  /** Language of the article's text. Omitted means English. */
  locale?: Locale;
  title: string;
  excerpt: string;
  /** Primary section. */
  category: Pick<Category, "slug" | "name">;
  authorSlug: string;
  topicSlugs: string[];
  regionSlugs: string[];
  readingTimeMinutes: number;
  /** ISO 8601 date strings. */
  publishedAt: string;
  updatedAt: string;
  image?: GuideImage;
  /** Short label for breadcrumbs when the title is long. */
  shortTitle?: string;
  /** Overrides for the <title> and meta description. */
  seoTitle?: string;
  seoDescription?: string;
  /** Hand-picked related articles, shown before automatic matches. */
  relatedSlugs?: string[];
  /** Social / Article structured-data images in several aspect ratios. */
  socialImages?: SocialImage[];
}

/** Editorial story, served at `/{section}/{slug}`. */
export interface Story extends ArticleBase {
  kind: "story";
}

/** Practical guide with a Guide Rank, served at `/guides/{slug}`. */
export interface Guide extends ArticleBase {
  kind: "guide";
  /** Editorial usefulness/completeness score, 0–100. */
  guideRank: number;
}

export type Article = Story | Guide;

/**
 * Structured article content. Inline text supports `[label](href)` links and
 * `**bold**`, which maps cleanly to a JSON or Markdown column later.
 */
export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string; tone?: "tip" | "important" }
  | { type: "image"; src: string; alt: string; caption?: string; credit?: ImageCredit; wide?: boolean }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  /** A direct answer placed at the top of a section. */
  | { type: "answer"; text: string }
  /** Compact label/value panel, e.g. "Italy at a glance". */
  | { type: "facts"; title: string; rows: { label: string; value: string }[] }
  /** Numbered process shown as a vertical flow. */
  | { type: "steps"; items: { title: string; text: string }[] }
  /** Interactive checklist; `id` keeps each checklist's state separate. */
  | { type: "checklist"; id: string; groups: { title: string; items: string[] }[] }
  /** Tile map of Italy's regions shaded by first-trip fit. */
  | { type: "regionMap"; caption?: string }
  /** Schematic diagram of Italy's main high-speed rail corridors. */
  | { type: "routeMap"; caption?: string }
  /** Side-by-side lists for a decision ("choose A if… / choose B if…"). */
  | { type: "compare"; title: string; columns: { title: string; items: string[] }[] }
  /** Short labelled panels in a grid, e.g. a decision guide or climate zones. */
  | { type: "cards"; items: { title: string; text: string; label?: string }[]; columns?: 2 | 3 }
  /** In-page navigation to headings elsewhere in the article, by heading text. */
  | { type: "jumpLinks"; label: string; targets: string[] };

export interface Faq {
  question: string;
  answer: string;
}

export interface Source {
  label: string;
  url: string;
  /** What the source was used to verify. */
  note?: string;
}

export interface ArticleContent {
  body: ContentBlock[];
  faqs?: Faq[];
  /** Official/authoritative sources used to verify time-sensitive facts. */
  sources?: Source[];
  /** Heading for the sources list; defaults to "Sources checked for this guide". */
  sourcesTitle?: string;
}

export type ArticleDetail = Article &
  ArticleContent & {
    author: Author;
    topics: Topic[];
    regions: Region[];
  };

export interface Paginated<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
