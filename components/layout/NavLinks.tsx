"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/lib/site";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  links: NavLink[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export function NavLinks({
  links,
  className,
  linkClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map(({ label, href, activePrefixes = [] }) => {
        const active = [href, ...activePrefixes].some(
          (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
        );
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "rounded-sm transition-colors hover:text-foreground aria-[current=page]:text-primary",
                linkClassName
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
