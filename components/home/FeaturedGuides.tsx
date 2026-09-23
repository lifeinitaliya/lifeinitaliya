import { FeaturedGuideCard } from "@/components/guides/FeaturedGuideCard";
import { GuideCard } from "@/components/guides/GuideCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Guide } from "@/lib/types";

export function FeaturedGuides({ guides }: { guides: Guide[] }) {
  const [lead, ...rest] = guides;
  if (!lead) return null;

  return (
    <section
      id="featured-guides"
      aria-labelledby="featured-guides-title"
      className="scroll-mt-20 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="featured-guides-title"
          title="Featured Insights"
          description="Handpicked reads worth your time."
          action={{ label: "View all guides", href: "/guides" }}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <FeaturedGuideCard guide={lead} className="lg:col-span-7" />

          <ul className="flex flex-col divide-y divide-border lg:col-span-5">
            {rest.map((guide) => (
              <li key={guide.slug} className="py-7 first:pt-0 last:pb-0">
                <GuideCard guide={guide} layout="horizontal" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
