import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { GuideRank } from "@/components/guides/GuideRank";
import { Container } from "@/components/shared/Container";

const criteria = [
  {
    name: "Useful",
    description: "Answers the real question and helps you act on it.",
    score: 96,
  },
  {
    name: "Clear",
    description: "Plain language, logical structure, no filler.",
    score: 94,
  },
  {
    name: "Well researched",
    description: "Checked against primary sources and real experience.",
    score: 92,
  },
  {
    name: "Updated",
    description: "Reviewed regularly so the details stay accurate.",
    score: 95,
  },
];

const overall = Math.round(
  criteria.reduce((sum, c) => sum + c.score, 0) / criteria.length
);

export function GuideRankSection() {
  return (
    <section
      aria-labelledby="guide-rank-title"
      className="bg-ink py-20 text-ink-foreground sm:py-28"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8ea6f3] uppercase">
            The Guide Rank
          </p>
          <h2
            id="guide-rank-title"
            className="mt-5 text-[36px] leading-[1.02] font-bold tracking-[-0.035em] text-balance sm:text-[48px] lg:text-[56px]"
          >
            What makes a great guide?
          </h2>
          <p className="mt-6 text-xl font-medium text-white">
            We look beyond word count.
          </p>
          <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-ink-muted">
            BS Insights guides are designed around clarity, usefulness, depth,
            and freshness. Guide Rank is our own editorial score for how well
            each guide delivers on them.
          </p>
          <Link
            href="/editorial-policy"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-white transition-colors hover:text-[#8ea6f3]"
          >
            How we assess guides
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-ink-border bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink-border pb-7">
              <GuideRank
                score={overall}
                variant="stacked"
                tone="dark"
                showAttribution
                className="w-full max-w-[220px]"
              />
              <p className="max-w-[200px] text-sm text-ink-muted">
                Example assessment for a published travel guide.
              </p>
            </div>

            <ul className="mt-2 divide-y divide-ink-border">
              {criteria.map((criterion) => (
                <li key={criterion.name} className="flex gap-4 py-5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#3157d5]/25 text-[#8ea6f3]"
                  >
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold text-white">
                        {criterion.name}
                      </h3>
                      <span className="text-sm text-ink-muted tabular-nums">
                        {criterion.score}
                      </span>
                    </div>
                    <p className="mt-1 text-[15px] text-ink-muted">
                      {criterion.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
