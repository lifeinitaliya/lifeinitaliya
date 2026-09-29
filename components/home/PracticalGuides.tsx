import Link from "next/link";

import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";

export function PracticalGuides({ guides }: { guides: Guide[] }) {
  return (
    <HomeSection labelledBy="guides-title" className="border-t border-border">
      <SectionHeader
        id="guides-title"
        label="Practical Italy Guides"
        title="Plan with confidence."
        description={
          <>
            Step-by-step guides to the practical side of Italy. Each carries a Guide Rank, our
            editorial score for usefulness and completeness.{" "}
            <Link
              href={`${routes.about}#guide-rank`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              What is Guide Rank?
            </Link>
          </>
        }
        action={{ label: "All guides", href: routes.guides }}
      />
      <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <StoryCard article={guide} variant="text" showRank />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
