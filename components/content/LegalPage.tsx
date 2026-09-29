import { ArticleBody } from "@/components/content/ArticleBody";
import { MobileTableOfContents } from "@/components/content/MobileTableOfContents";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Container } from "@/components/shared/Container";
import { getHeadings } from "@/lib/content";
import type { PolicyDocument } from "@/lib/policies";
import { formatLongDate } from "@/lib/format";

/** Shared layout for policy pages: header, sticky contents and readable sections. */
export function LegalPage({ document }: { document: PolicyDocument }) {
  const blocks = document.sections.flatMap((section) => [
    { type: "heading" as const, level: 2 as const, text: section.title },
    ...section.blocks,
  ]);
  const headings = getHeadings(blocks);

  return (
    <>
      <PageHeader
        eyebrow={document.eyebrow}
        title={document.title}
        description={document.description}
        breadcrumbs={[{ label: document.title, href: document.path }]}
      >
        <p className="text-sm text-muted-foreground">
          Last updated{" "}
          <time dateTime={document.updatedAt}>{formatLongDate(document.updatedAt)}</time>
        </p>
      </PageHeader>

      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
        {/* min-w-0 lets wide tables scroll inside their wrapper instead of widening the page on phones. */}
        <div className="min-w-0 max-w-[760px]">
          <MobileTableOfContents headings={headings} className="mb-10 lg:hidden" />
          {document.intro && (
            <p className="mb-8 text-lg leading-relaxed text-foreground">
              {document.intro}
            </p>
          )}
          <ArticleBody blocks={blocks} className="[&>h2:first-child]:pt-0" />
        </div>
        <aside className="hidden lg:block">
          <TableOfContents headings={headings} className="sticky top-28" />
        </aside>
      </Container>
    </>
  );
}
