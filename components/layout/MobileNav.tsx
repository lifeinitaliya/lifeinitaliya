"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Search } from "lucide-react";

import { NavLinks } from "@/components/layout/NavLinks";
import { Logo } from "@/components/layout/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open menu"
            className="md:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 bg-background sm:max-w-sm">
        <SheetHeader className="h-16 justify-center border-b border-border px-5 py-0">
          <Logo className="self-start" />
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Browse BS Insights sections
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <NavLinks
            links={mainNav}
            onNavigate={close}
            className="flex flex-col"
            linkClassName="flex items-center justify-between border-b border-border py-4 text-2xl font-semibold tracking-[-0.02em] text-foreground"
          />
          <Link
            href={routes.search}
            onClick={close}
            className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search aria-hidden className="size-4" />
            Search BS Insights
          </Link>
        </nav>

        <div className="border-t border-border p-5">
          <Link
            href={routes.writeForUs}
            onClick={close}
            className={cn(buttonVariants({ size: "xl" }), "w-full")}
          >
            Write for Us
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
