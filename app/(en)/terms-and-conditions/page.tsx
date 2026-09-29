import { LegalPage } from "@/components/content/LegalPage";
import { termsAndConditions } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: termsAndConditions.title,
  description: termsAndConditions.description,
  path: termsAndConditions.path,
});

export default function TermsPage() {
  return <LegalPage document={termsAndConditions} />;
}
