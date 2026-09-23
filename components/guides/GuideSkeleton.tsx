import { Container } from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function GuideCardSkeleton() {
  return (
    <div aria-hidden>
      <Skeleton className="aspect-[16/10] w-full rounded-lg" />
      <Skeleton className="mt-5 h-3 w-20" />
      <Skeleton className="mt-3 h-5 w-11/12" />
      <Skeleton className="mt-2 h-5 w-2/3" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-4/5" />
    </div>
  );
}

export function GuideGridSkeleton({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {Array.from({ length: count }, (_, i) => (
        <GuideCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div aria-hidden className="border-b border-border">
      <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
        <Skeleton className="h-3.5 w-40" />
        <Skeleton className="mt-12 h-3 w-24" />
        <Skeleton className="mt-6 h-12 w-full max-w-2xl" />
        <Skeleton className="mt-6 h-5 w-full max-w-xl" />
        <Skeleton className="mt-2 h-5 w-2/3 max-w-md" />
      </Container>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div aria-hidden>
      <Container className="pt-8 pb-10 sm:pt-10">
        <Skeleton className="h-3.5 w-56" />
        <div className="mt-12 max-w-3xl">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="mt-5 h-12 w-full" />
          <Skeleton className="mt-3 h-12 w-3/4" />
          <Skeleton className="mt-6 h-5 w-full" />
          <Skeleton className="mt-6 h-10 w-72" />
        </div>
        <Skeleton className="mt-10 aspect-[16/9] w-full rounded-2xl" />
        <div className="mt-12 max-w-[760px] space-y-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className={cn("h-4", i % 3 === 2 ? "w-2/3" : "w-full")} />
          ))}
        </div>
      </Container>
    </div>
  );
}
