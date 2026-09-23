import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import type { Author, GuideDetail } from "@/lib/types";

interface PageMetadataOptions {
  title: string;
  description: string;
  /** Path relative to the site root, used for the canonical URL. */
  path: string;
  noIndex?: boolean;
  openGraph?: Metadata["openGraph"];
}

/** Consistent per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  openGraph,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: fullTitle,
      description,
      ...openGraph,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
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

export function articleSchema(guide: GuideDetail, path: string, authorPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    ...(guide.image && { image: [guide.image.src] }),
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: authorEntity(guide.author, authorPath),
    publisher: { "@id": organizationId, "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(path),
    articleSection: guide.category.name,
    keywords: guide.topics.map((t) => t.name).join(", "),
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
