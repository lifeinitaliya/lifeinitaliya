import type { Metadata } from "next";

import { PageHeader } from "@/components/content/PageHeader";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { itGuidesPage } from "@/data/it/categories";
import { listItArticles } from "@/lib/queries/it";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { itRoutes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: itGuidesPage.seoTitle,
  description: itGuidesPage.seoDescription,
  path: itRoutes.guides,
  locale: "it",
});

export default async function ItalianGuidesPage() {
  const guides = await listItArticles({ kind: "guide" });
  const italian = guides.filter((g) => g.locale === "it");
  const english = guides.filter((g) => g.locale !== "it");

  return (
    <>
      <JsonLd
        data={{
          ...collectionPageSchema({
            name: itGuidesPage.title,
            description: itGuidesPage.intro,
            path: itRoutes.guides,
          }),
          inLanguage: "it",
        }}
      />
      <PageHeader
        eyebrow="Guide pratiche"
        title={itGuidesPage.title}
        description={itGuidesPage.intro}
        breadcrumbs={[{ label: itGuidesPage.name, href: itRoutes.guides }]}
        locale="it"
      />

      <Container className="py-12 sm:py-16">
        <section aria-labelledby="guide-it-title">
          <SectionHeader id="guide-it-title" label="Le guide in italiano" />
          <GuideGrid guides={italian} locale="it" className="mt-8" />
        </section>

        {english.length > 0 && (
          <section aria-labelledby="guide-en-title" className="mt-20">
            <SectionHeader
              id="guide-en-title"
              label="Altre guide"
              description="Queste guide sono per ora disponibili solo in inglese."
            />
            <GuideGrid guides={english} locale="it" className="mt-8" />
          </section>
        )}
      </Container>
    </>
  );
}
