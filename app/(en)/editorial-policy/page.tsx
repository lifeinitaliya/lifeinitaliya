import { LegalPage } from "@/components/content/LegalPage";
import { editorialPolicy } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: editorialPolicy.title,
  description: editorialPolicy.description,
  path: editorialPolicy.path,
});

export default function EditorialPolicyPage() {
  return <LegalPage document={editorialPolicy} />;
}
