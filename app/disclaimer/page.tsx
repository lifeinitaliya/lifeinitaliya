import { LegalPage } from "@/components/content/LegalPage";
import { disclaimer } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: disclaimer.title,
  description: disclaimer.description,
  path: disclaimer.path,
});

export default function DisclaimerPage() {
  return <LegalPage document={disclaimer} />;
}
