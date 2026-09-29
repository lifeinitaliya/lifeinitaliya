import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/content/ArticleView";
import { getArticleBySlug, listArticles } from "@/lib/queries/articles";
import { articleMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const guides = await listArticles({ kind: "guide" });
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getArticleBySlug(slug, "guide");
  return guide ? articleMetadata(guide, routes.article(guide)) : {};
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = await getArticleBySlug(slug, "guide");
  if (!guide) notFound();
  return <ArticleView article={guide} />;
}
