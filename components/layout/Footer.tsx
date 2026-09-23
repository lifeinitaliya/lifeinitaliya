import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/shared/Container";
import { footerNav, siteConfig } from "@/lib/site";

const currentYear = new Date().getUTCFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-lg font-semibold tracking-[-0.02em]">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Guides and insights on travel, technology, education, lifestyle
              and more — researched, updated and written to be useful.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <nav key={group.title} aria-labelledby={`footer-${group.title}`}>
                <h2
                  id={`footer-${group.title}`}
                  className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase"
                >
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-sm text-[15px] text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
