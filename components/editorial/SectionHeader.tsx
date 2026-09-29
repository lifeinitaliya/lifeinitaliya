import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { NavLink } from "@/lib/site";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id: string;
  /** Small uppercase label above the rule, e.g. "Travel". */
  label: string;
  /** Large serif headline. When omitted, the label becomes the heading. */
  title?: string;
  description?: ReactNode;
  action?: NavLink;
  /** Sub-topics shown as a row of links. */
  links?: NavLink[];
  tone?: "light" | "dark";
  children?: ReactNode;
  className?: string;
}

/** Magazine-style section opener: heavy rule, label, serif headline. */
export function SectionHeader({
  id,
  label,
  title,
  description,
  action,
  links,
  tone = "light",
  children,
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";
  const labelClass = cn(
    "text-[12px] font-bold tracking-[0.18em] uppercase",
    dark ? "text-white" : "text-foreground"
  );

  return (
    <div className={className}>
      <div
        className={cn(
          "flex items-baseline justify-between gap-4 border-t-2 pt-3",
          dark ? "border-white" : "border-foreground"
        )}
      >
        {title ? (
          <p className={labelClass}>{label}</p>
        ) : (
          <h2 id={id} className={labelClass}>
            {label}
          </h2>
        )}
        {action && (
          <Link
            href={action.href}
            className={cn(
              "group inline-flex shrink-0 items-center gap-1 rounded-sm text-[13px] font-semibold transition-colors",
              dark ? "text-white hover:text-[#8ea6f3]" : "text-foreground hover:text-primary"
            )}
          >
            {action.label}
            <ArrowRight
              aria-hidden
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        )}
      </div>

      {(title || description || links || children) && (
        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            {title && (
              <h2
                id={id}
                className={cn(
                  "font-display text-[34px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[44px] lg:text-[52px]",
                  dark && "text-white"
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <div
                className={cn(
                  "mt-3 max-w-xl text-base leading-relaxed sm:text-[17px]",
                  dark ? "text-ink-muted" : "text-muted-foreground"
                )}
              >
                {description}
              </div>
            )}
            {children}
          </div>
          {links && links.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:max-w-md lg:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-sm text-sm font-medium underline decoration-1 underline-offset-[5px] transition-colors",
                      dark
                        ? "text-white/85 decoration-white/30 hover:text-white hover:decoration-white"
                        : "text-foreground/80 decoration-foreground/20 hover:text-primary hover:decoration-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
