import Link from "next/link";
import { Search } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { mainNav, routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/75">
      <Container className="flex h-16 items-center gap-6 lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden md:ml-6 md:block lg:ml-10">
          <NavLinks
            links={mainNav}
            className="flex items-center gap-7"
            linkClassName="text-[15px] font-medium text-muted-foreground"
          />
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Link
            href={routes.search}
            aria-label="Search BS Insights"
            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }))}
          >
            <Search className="size-[18px]" />
          </Link>
          <Link
            href={routes.writeForUs}
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden px-4 hover:bg-primary/90 sm:inline-flex"
            )}
          >
            Write for Us
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
