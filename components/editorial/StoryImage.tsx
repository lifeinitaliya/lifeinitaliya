import Image from "next/image";

import { categoryIcons } from "@/components/guides/category-icons";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StoryImageProps {
  article: Pick<Article, "image" | "category">;
  /** Responsive `sizes` so the browser downloads an appropriately sized file. */
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Article image at a fixed aspect ratio, with a neutral fallback when there's no photo. */
export function StoryImage({ article, sizes, priority = false, className }: StoryImageProps) {
  const Icon = categoryIcons[article.category.slug];
  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {article.image ? (
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center bg-sand">
          <Icon className="size-10 text-foreground/25" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
