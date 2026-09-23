import Image from "next/image";

import { categoryIcons } from "@/components/guides/category-icons";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideCoverProps {
  guide: Pick<Guide, "image" | "category">;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Guide image with a hover zoom, or a neutral branded placeholder when no image exists. */
export function GuideCover({
  guide,
  sizes,
  priority = false,
  className,
}: GuideCoverProps) {
  const Icon = categoryIcons[guide.category.slug];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-secondary",
        className
      )}
    >
      {guide.image ? (
        <Image
          src={guide.image.src}
          alt={guide.image.alt}
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#f1f1ec_0%,#e7e9f3_100%)]"
        >
          <Icon className="size-10 text-primary/40" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
