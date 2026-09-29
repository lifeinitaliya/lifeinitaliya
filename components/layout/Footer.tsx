import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/shared/Container";
import type { Locale } from "@/lib/i18n";
import { footerNav, itFooterNav, siteConfig, type NavLink } from "@/lib/site";

type FooterGroup = { title: string; note?: string; lang?: "en"; links: NavLink[] };

const currentYear = new Date().getUTCFullYear();

const copy = {
  en: {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    rights: "All rights reserved.",
  },
  it: {
    tagline: "L'Italia, oltre le cartoline.",
    description:
      "Guide pratiche, città e cultura del cibo per conoscere l'Italia con più attenzione.",
    rights: "Tutti i diritti riservati.",
  },
} as const;

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale];
  const groups: FooterGroup[] = locale === "it" ? itFooterNav : footerNav;

  return (
    <footer className="border-t-2 border-foreground bg-background">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo locale={locale} />
            <p className="mt-6 font-display text-[36px] leading-[1.05] sm:text-[44px]">
              {text.tagline}
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              {text.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {groups.map((group) => {
              const { note, lang } = group;
              return (
                <nav key={group.title} aria-labelledby={`footer-${group.title}`}>
                  <h2
                    id={`footer-${group.title}`}
                    className="text-[12px] font-bold tracking-[0.16em] uppercase"
                  >
                    {group.title}
                  </h2>
                  {note && <p className="mt-1 text-[12px] text-muted-foreground">{note}</p>}
                  <ul className="mt-5 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          hrefLang={lang}
                          className="rounded-sm text-[15px] text-foreground/75 transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. {text.rights}
          </p>
          <LanguageSwitcher
            locale={locale}
            label={locale === "it" ? "Lingua del sito, piè di pagina" : "Site language, footer"}
          />
        </div>
      </Container>
    </footer>
  );
}
