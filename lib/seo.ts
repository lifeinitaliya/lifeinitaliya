import type { Metadata } from "next";

import { localeInfo, type Locale } from "@/lib/i18n";
import { languageAlternates } from "@/lib/queries/it";
import { siteConfig } from "@/lib/site";
import type { ArticleDetail, Author } from "@/lib/types";

interface PageMetadataOptions {
  title: string;
  description: string;
  /** Path relative to the site root, used for the canonical URL. */
  path: string;
  noIndex?: boolean;
  openGraph?: Metadata["openGraph"];
  /** Language of the page. Defaults to English. */
  locale?: Locale;
}

/**
 * Site-wide share image for pages without their own (sections, topics, regions,
 * About, policies). Page-level Open Graph metadata replaces inherited images,
 * so it has to be set explicitly. Articles use their hero crops instead.
 */
export const defaultShareImage = (locale: Locale = "en") => ({
  url: `/images/share/site-share-${locale}.png`,
  width: 1200,
  height: 630,
  alt: siteConfig.name,
});

/** Consistent per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  openGraph,
  locale = "en",
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  // hreflang only links indexable pages that exist in both languages.
  const languages = noIndex ? undefined : languageAlternates(path);
  const images = [defaultShareImage(locale)];
  return {
    title,
    description,
    alternates: { canonical: path, ...(languages && { languages }) },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: localeInfo[locale].ogLocale,
      url: path,
      title: fullTitle,
      description,
      images,
      ...openGraph,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

export const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.url).toString();

export const organizationId = `${siteConfig.url}/#organization`;

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}

const authorEntity = (author: Author, path: string) =>
  author.slug === "editorial-team"
    ? { "@type": "Organization", name: author.name, url: absoluteUrl(path) }
    : { "@type": "Person", name: author.name, url: absoluteUrl(path) };

const UNSPLASH = "https://images.unsplash.com/";

/**
 * Preferred share images for an article: the generated 16:9, 4:3 and 1:1
 * crops where they exist; otherwise crops derived from an Unsplash-hosted hero
 * (the CDN crops on request); otherwise the hero image itself. The 16:9 image
 * comes first because it's the one used for large link previews.
 */
export function shareImages(article: ArticleDetail): { src: string; width?: number; height?: number }[] {
  if (article.socialImages?.length) return article.socialImages;
  const src = article.image?.src;
  if (!src) return [];
  if (src.startsWith(UNSPLASH)) {
    const base = src.split("?")[0];
    return [
      [1600, 900],
      [1600, 1200],
      [1200, 1200],
    ].map(([width, height]) => ({
      src: `${base}?auto=format&fit=crop&crop=entropy&w=${width}&h=${height}&q=75`,
      width,
      height,
    }));
  }
  return [{ src }];
}

export function articleSchema(guide: ArticleDetail, path: string, authorPath: string) {
  const images = shareImages(guide);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: images.length ? images.map((img) => absoluteUrl(img.src)) : undefined,
    inLanguage: guide.locale ?? "en",
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: authorEntity(guide.author, authorPath),
    publisher: { "@id": organizationId, "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(path),
    articleSection: guide.category.name,
    // Topic names are English, so they're only used as keywords on English articles.
    ...(!guide.locale || guide.locale === "en"
      ? { keywords: guide.topics.map((t) => t.name).join(", ") }
      : {}),
  };
}

export function profilePageSchema(author: Author, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    mainEntity: {
      ...authorEntity(author, path),
      description: author.shortBio,
      ...(author.slug !== "editorial-team" && { jobTitle: author.role }),
    },
  };
}

/** Metadata for a guide or story page. */
export function articleMetadata(article: ArticleDetail, path: string): Metadata {
  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;
  const preferred = shareImages(article)[0];
  const images = preferred
    ? [{ url: preferred.src, width: preferred.width, height: preferred.height, alt: article.image?.alt ?? article.title }]
    : undefined;
  const metadata = pageMetadata({
    title,
    description,
    path,
    locale: article.locale ?? "en",
    openGraph: {
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [absoluteUrl(`/author/${article.author.slug}`)],
      section: article.category.name,
      ...(images && { images }),
    },
  });
  return {
    ...metadata,
    twitter: { ...metadata.twitter, ...(images && { images }) },
  };
}
