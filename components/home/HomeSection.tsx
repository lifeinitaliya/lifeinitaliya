import type { ReactNode } from "react";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const tones = {
  default: "",
  sand: "bg-sand",
  ink: "bg-ink text-ink-foreground",
} as const;

interface HomeSectionProps {
  labelledBy: string;
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm and background for homepage sections. */
export function HomeSection({ labelledBy, tone = "default", children, className }: HomeSectionProps) {
  return (
    <section aria-labelledby={labelledBy} className={cn("py-14 sm:py-20", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
