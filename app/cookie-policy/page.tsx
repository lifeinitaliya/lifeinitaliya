import { LegalPage } from "@/components/content/LegalPage";
import { cookiePolicy } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: cookiePolicy.title,
  description: cookiePolicy.description,
  path: cookiePolicy.path,
});

export default function CookiePolicyPage() {
  return <LegalPage document={cookiePolicy} />;
}
