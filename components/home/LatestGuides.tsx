import { GuideCard } from "@/components/guides/GuideCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Guide } from "@/lib/types";

export function LatestGuides({ guides }: { guides: Guide[] }) {
  return (
    <section
      aria-labelledby="latest-guides-title"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="latest-guides-title"
          title="Latest Guides"
          description="Fresh guides and useful reads."
          action={{ label: "Browse all", href: "/guides" }}
        />

        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} showRank={false} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
