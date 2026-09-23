import { Skeleton } from "@/components/ui/skeleton";

export function AuthorCardSkeleton() {
  return (
    <div aria-hidden className="rounded-xl border border-border bg-card p-6 sm:p-7">
      <Skeleton className="size-14 rounded-full" />
      <Skeleton className="mt-5 h-5 w-40" />
      <Skeleton className="mt-2 h-3.5 w-24" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-3/4" />
      <Skeleton className="mt-8 h-4 w-full" />
    </div>
  );
}

export function AuthorGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <AuthorCardSkeleton key={i} />
      ))}
    </div>
  );
}
