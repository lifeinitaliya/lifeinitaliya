import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Author } from "@/lib/types";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { root: "size-9", text: "text-xs" },
  md: { root: "size-14", text: "text-base" },
  lg: { root: "size-24 sm:size-28", text: "text-2xl sm:text-3xl" },
};

const initials = (name: string) => {
  if (name.startsWith("BS Insights")) return "BS";
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

/** Author photo, falling back to initials until real profile images exist. */
export function AuthorAvatar({
  author,
  size = "md",
  className,
}: {
  author: Pick<Author, "name" | "avatar">;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Avatar className={cn(sizes[size].root, className)}>
      {author.avatar && <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />}
      <AvatarFallback
        aria-hidden
        className={cn(
          "bg-foreground font-semibold tracking-[-0.02em] text-background",
          sizes[size].text
        )}
      >
        {initials(author.name)}
      </AvatarFallback>
    </Avatar>
  );
}
