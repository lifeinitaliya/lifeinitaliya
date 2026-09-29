import { LegalPage } from "@/components/content/LegalPage";
import { privacyPolicy } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: privacyPolicy.path,
});

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
