import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CategoryLabel({
  category,
  className,
}: {
  category: Article["category"];
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.12em] text-primary uppercase",
        className
      )}
    >
      {category.name}
    </p>
  );
}
