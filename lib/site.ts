import { itCategories } from "@/data/it/categories";
import { articlePairs } from "@/lib/i18n";
import type { Article, CategorySlug } from "@/lib/types";

export const siteConfig = {
  name: "Life in Italia",
  title: "Life in Italia — Italy, in One Place",
  tagline: "Italy, in one place.",
  description:
    "Practical travel guides, city guides and food culture for planning and understanding a trip to Italy.",
  // NEXT_PUBLIC_SITE_URL overrides the production domain, e.g. for a staging deploy.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lifeinitaliya.com",
  locale: "en_US",
  /**
   * Sample events, weather and preview stories were retired before launch, so
   * no sample notices are shown. Only set to true if sample data returns.
   */
  showSampleNotices: false,
} as const;

export interface NavLink {
  label: string;
  href: string;
  /** Extra path prefixes that should mark this link as active. */
  activePrefixes?: string[];
}

const section = (slug: CategorySlug) => `/${slug}`;

export const routes = {
  home: "/",
  section,
  /**
   * Guides live under /guides (Italian: /it/guide); stories under their
   * section (Italian: /it/{sezione}).
   */
  article: (article: Pick<Article, "kind" | "slug" | "category" | "locale">) =>
    article.locale === "it"
      ? article.kind === "guide"
        ? `/it/guide/${article.slug}`
        : `/it/${itCategories.find((c) => c.slug === article.category.slug)?.itSlug ?? "guide"}/${article.slug}`
      : article.kind === "guide"
        ? `/guides/${article.slug}`
        : `/${article.category.slug}/${article.slug}`,
  guides: "/guides",
  regions: "/regions",
  region: (slug: string) => `/region/${slug}`,
  events: "/events",
  weather: "/weather",
  topics: "/topics",
  topic: (slug: string) => `/topic/${slug}`,
  authors: "/authors",
  author: (slug: string) => `/author/${slug}`,
  search: "/search",
  about: "/about",
  contact: "/contact",
  writeForUs: "/write-for-us",
  submitGuestPost: "/write-for-us/submit",
  editorialPolicy: "/editorial-policy",
  privacyPolicy: "/privacy-policy",
  terms: "/terms-and-conditions",
  disclaimer: "/disclaimer",
  cookiePolicy: "/cookie-policy",
} as const;

/** Primary header navigation. Only sections with published articles are linked. */
export const mainNav: NavLink[] = [
  { label: "Travel", href: section("travel") },
  { label: "Cities", href: section("cities") },
  { label: "Food", href: section("food") },
  { label: "Transport", href: section("transport") },
  { label: "Guides", href: routes.guides },
];

/** Section bar beneath the header. */
export const topicNav: NavLink[] = [
  { label: "Travel", href: section("travel") },
  { label: "Cities", href: section("cities") },
  { label: "Food & Drink", href: section("food") },
  { label: "Transport", href: section("transport") },
  { label: "Regions", href: routes.regions, activePrefixes: ["/region"] },
  { label: "Topics", href: routes.topics, activePrefixes: ["/topic"] },
  { label: "Guides", href: routes.guides },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Travel", href: section("travel") },
      { label: "Cities", href: section("cities") },
      { label: "Food & Drink", href: section("food") },
      { label: "Transport", href: section("transport") },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Guides", href: routes.guides },
      { label: "Regions", href: routes.regions },
      { label: "Topics", href: routes.topics },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: routes.about },
      { label: "Contact", href: routes.contact },
      { label: "Editorial Policy", href: routes.editorialPolicy },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms", href: routes.terms },
      { label: "Disclaimer", href: routes.disclaimer },
      { label: "Cookie Policy", href: routes.cookiePolicy },
    ],
  },
];

// ——— Italian edition (/it) ———

const itSlugFor = (slug: CategorySlug) => itCategories.find((c) => c.slug === slug)?.itSlug;

export const itRoutes = {
  home: "/it",
  /** Italian section page; falls back to the Italian homepage for sections without one. */
  section: (slug: CategorySlug) => {
    const itSlug = itSlugFor(slug);
    return itSlug ? `/it/${itSlug}` : "/it";
  },
  guides: "/it/guide",
  search: "/it/cerca",
} as const;

const itSection = (slug: CategorySlug) => itRoutes.section(slug);

/** Primary header navigation (Italian). */
export const itMainNav: NavLink[] = [
  { label: "Viaggi", href: itSection("travel") },
  { label: "Città", href: itSection("cities") },
  { label: "Cibo", href: itSection("food") },
  { label: "Trasporti", href: itSection("transport") },
  { label: "Guide", href: itRoutes.guides },
];

/** Section bar beneath the header (Italian). */
export const itTopicNav: NavLink[] = [
  { label: "Viaggi", href: itSection("travel") },
  { label: "Città", href: itSection("cities") },
  { label: "Cibo e Bevande", href: itSection("food") },
  { label: "Trasporti", href: itSection("transport") },
  { label: "Guide", href: itRoutes.guides },
];

/**
 * Footer links (Italian). "About" and legal pages exist in English only, so
 * those groups are flagged and their links carry hreflang="en".
 */
export const itFooterNav: { title: string; note?: string; lang?: "en"; links: NavLink[] }[] = [
  {
    title: "Esplora",
    links: [
      { label: "Viaggi", href: itSection("travel") },
      { label: "Città", href: itSection("cities") },
      { label: "Cibo e Bevande", href: itSection("food") },
      { label: "Trasporti", href: itSection("transport") },
      { label: "Guide", href: itRoutes.guides },
    ],
  },
  {
    title: "Informazioni",
    note: "Pagine in inglese",
    lang: "en",
    links: [
      { label: "Chi siamo", href: routes.about },
      { label: "Contatti", href: routes.contact },
      { label: "Redazione", href: routes.authors },
      { label: "Politica editoriale", href: routes.editorialPolicy },
    ],
  },
  {
    title: "Note legali",
    note: "Pagine in inglese",
    lang: "en",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Cookie Policy", href: routes.cookiePolicy },
      { label: "Termini e condizioni", href: routes.terms },
      { label: "Disclaimer", href: routes.disclaimer },
    ],
  },
];

/**
 * Pages that exist in both languages, as [English path, Italian path]. Used
 * by the language switcher; hreflang is only emitted for pairs whose Italian
 * page is indexable (see lib/queries/it.ts).
 */
export const pagePairs: [string, string][] = [
  [routes.home, itRoutes.home],
  [routes.guides, itRoutes.guides],
  [routes.search, itRoutes.search],
  ...itCategories.map((c): [string, string] => [section(c.slug), `/it/${c.itSlug}`]),
  ...articlePairs.map(({ enPath, itPath }): [string, string] => [enPath, itPath]),
];
