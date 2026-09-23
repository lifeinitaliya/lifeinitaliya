import { Fragment } from "react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbListItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  /** Trail after "Home"; the last item is the current page. */
  items: BreadcrumbItem[];
  className?: string;
}

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumb className={className}>
        <BreadcrumbList className="text-[13px]">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <Fragment key={item.href}>
                <BreadcrumbListItem className={cn(isLast && "min-w-0")}>
                  {isLast ? (
                    <BreadcrumbPage className="block max-w-[16rem] truncate sm:max-w-md">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link href={item.href} />} className="rounded-sm">
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbListItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
