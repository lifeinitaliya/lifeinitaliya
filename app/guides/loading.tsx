import { GuideGridSkeleton, PageHeaderSkeleton } from "@/components/guides/GuideSkeleton";
import { Container } from "@/components/shared/Container";

export default function Loading() {
  return (
    <>
      <PageHeaderSkeleton />
      <Container className="py-12 sm:py-16">
        <GuideGridSkeleton count={9} />
      </Container>
    </>
  );
}
