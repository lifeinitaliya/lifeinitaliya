"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavLinks } from "@/components/layout/NavLinks";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { t, type Locale } from "@/lib/i18n";
import { itRoutes, itTopicNav, routes, topicNav } from "@/lib/site";

export function MobileNav({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const it = locale === "it";
  const dict = t(locale);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label={dict.openMenu}
            className="lg:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 bg-background sm:max-w-sm">
        <SheetHeader className="h-16 justify-center border-b border-border px-5 py-0">
          <Logo className="self-start" locale={locale} />
          <SheetTitle className="sr-only">{dict.menu}</SheetTitle>
          <SheetDescription className="sr-only">
            {it ? "Sezioni di Life in Italia" : "Browse Life in Italia sections"}
          </SheetDescription>
        </SheetHeader>

        <nav aria-label={it ? "Menu mobile" : "Mobile"} className="flex-1 overflow-y-auto px-5 py-6">
          <NavLinks
            links={it ? itTopicNav : topicNav}
            onNavigate={close}
            className="flex flex-col"
            linkClassName="flex items-center border-b border-border py-3 font-display text-[26px] leading-tight text-foreground"
          />
          {it ? (
            // "About" pages exist in English only.
            <ul className="mt-6 flex gap-6 text-[15px] font-medium text-muted-foreground">
              <li>
                <Link href={routes.about} hrefLang="en" onClick={close} className="rounded-sm hover:text-foreground">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href={routes.contact} hrefLang="en" onClick={close} className="rounded-sm hover:text-foreground">
                  Contatti
                </Link>
              </li>
            </ul>
          ) : (
            <NavLinks
              links={[
                { label: "About", href: routes.about },
                { label: "Contact", href: routes.contact },
              ]}
              onNavigate={close}
              className="mt-6 flex gap-6"
              linkClassName="text-[15px] font-medium text-muted-foreground"
            />
          )}
          <Link
            href={it ? itRoutes.search : routes.search}
            onClick={close}
            className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search aria-hidden className="size-4" />
            {dict.search}
          </Link>
          <LanguageSwitcher
            locale={locale}
            label={it ? "Lingua del sito, menu" : "Site language, menu"}
            className="mt-6"
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
