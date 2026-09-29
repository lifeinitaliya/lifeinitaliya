import Link from "next/link";
import { Search } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { t, type Locale } from "@/lib/i18n";
import { itMainNav, itRoutes, mainNav, routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const it = locale === "it";

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center gap-6 lg:h-[72px]">
        <Logo locale={locale} />

        <nav aria-label={it ? "Principale" : "Main"} className="hidden lg:ml-8 lg:block xl:ml-12">
          <NavLinks
            links={it ? itMainNav : mainNav}
            className="flex items-center gap-7"
            linkClassName="text-[15px] font-medium text-foreground/70"
          />
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-3">
          <Link
            href={it ? itRoutes.search : routes.search}
            aria-label={t(locale).search}
            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }))}
          >
            <Search className="size-[18px]" />
          </Link>
          {!it && (
            <Link
              href={routes.about}
              className="hidden rounded-sm text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground lg:inline"
            >
              About
            </Link>
          )}
          <LanguageSwitcher locale={locale} className="px-1 lg:border-l lg:border-border lg:pl-4" />
          <MobileNav locale={locale} />
        </div>
      </Container>
    </header>
  );
}
