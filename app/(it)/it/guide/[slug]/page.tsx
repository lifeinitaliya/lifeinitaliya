import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/content/ArticleView";
import { getAllItArticles, getItArticleBySlug } from "@/lib/queries/it";
import { articleMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllItArticles();
  return articles.filter((a) => a.kind === "guide").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/it/guide/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getItArticleBySlug(slug);
  if (!article || article.kind !== "guide") return {};
  return articleMetadata(article, routes.article(article));
}

export default async function ItalianGuidePage({ params }: PageProps<"/it/guide/[slug]">) {
  const { slug } = await params;
  const article = await getItArticleBySlug(slug);
  // Stories have their own section URLs; only guides live under /it/guide.
  if (!article || article.kind !== "guide") notFound();
  return <ArticleView article={article} locale="it" />;
}
