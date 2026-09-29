import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import type { Locale } from "@/lib/i18n";
import type { BreadcrumbItem } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
  locale?: Locale;
}

/** Standard inner-page hero, matching the homepage's editorial type scale. */
export function PageHeader({
  title,
  eyebrow,
  description,
  breadcrumbs,
  children,
  className,
  locale,
}: PageHeaderProps) {
  return (
    <header className={cn("border-b border-border", className)}>
      <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} locale={locale} className="mb-10 sm:mb-12" />}
        {eyebrow && (
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.18em] text-primary uppercase">
            <span aria-hidden className="h-px w-8 bg-primary" />
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "max-w-4xl font-display text-[clamp(42px,6vw,76px)] leading-[1] tracking-[-0.01em] text-balance",
            eyebrow && "mt-5"
          )}
        >
          {title}
        </h1>
        {description && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {description}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </header>
  );
}
