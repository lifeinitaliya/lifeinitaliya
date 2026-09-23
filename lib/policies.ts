import { routes } from "@/lib/site";
import type { ContentBlock } from "@/lib/types";

// Policy page content. Written as general website policies — have them
// reviewed before launch and update them whenever site behaviour changes
// (e.g. when analytics, advertising or accounts are added).

export interface PolicySection {
  title: string;
  blocks: ContentBlock[];
}

export interface PolicyDocument {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  intro?: string;
  sections: PolicySection[];
}

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const list = (items: string[]): ContentBlock => ({ type: "list", items });

const LAST_UPDATED = "2026-09-23";
const contactLine = p(`If you have questions about this page, please [contact us](${routes.contact}).`);

export const editorialPolicy: PolicyDocument = {
  path: routes.editorialPolicy,
  eyebrow: "Standards",
  title: "Editorial Policy",
  description: "How BS Insights creates, reviews and updates its content.",
  updatedAt: LAST_UPDATED,
  sections: [
    {
      title: "Our Editorial Mission",
      blocks: [p("BS Insights publishes practical, clearly explained information that helps readers understand topics, make decisions and get things done. We prioritise usefulness and accuracy over volume.")],
    },
    {
      title: "How We Create Content",
      blocks: [
        p("Each guide starts with a specific reader question. We then outline the answer, research it, write it in plain language and edit it for clarity and structure."),
        list(["Guides are organised so the most important information comes first.", "We avoid filler and unnecessary jargon.", "Where a topic depends on personal circumstances — such as money, health or law — we say so and point readers to qualified sources."]),
      ],
    },
    {
      title: "Research & Sources",
      blocks: [p("We aim to base factual claims on primary or authoritative sources, such as official websites, published documentation and reputable organisations. Where practical, we link to sources so readers can check them.")],
    },
    {
      title: "Fact Checking",
      blocks: [p("Editors review guides before publication and check key facts — such as prices, dates, rules and figures — against available sources. Not every article is reviewed by a subject-matter expert, and we don't claim otherwise. Information such as prices and schedules can change after publication, so please confirm critical details with the original provider.")],
    },
    {
      title: "Updates & Corrections",
      blocks: [p("Guides show the date they were last updated. We revisit guides periodically and when we learn that information has changed. Guide Rank, our internal editorial score, takes freshness into account.")],
    },
    {
      title: "Guest Contributions",
      blocks: [p(`Guest contributions go through the same editorial review as other content and may be edited for clarity, accuracy and style. Submitting an article does not guarantee publication. See [Write for Us](${routes.writeForUs}) for our guidelines.`)],
    },
    {
      title: "Sponsored Content",
      blocks: [p("If we publish sponsored content, it will be clearly labelled as sponsored. Sponsors do not control the conclusions of our independent guides.")],
    },
    {
      title: "Affiliate Disclosure",
      blocks: [p("Some pages may include affiliate links, which means we may earn a commission if you buy through them, at no extra cost to you. Where a page contains affiliate links, we disclose it on that page. Affiliate relationships do not determine what we recommend.")],
    },
    {
      title: "AI-Assisted Content",
      blocks: [p("We may use AI tools to help with tasks such as research, outlining or editing. Published content is reviewed and edited by a person, and we remain responsible for its accuracy. We do not publish unreviewed AI-generated articles.")],
    },
    {
      title: "Corrections",
      blocks: [p(`If you spot an error, please [let us know](${routes.contact}) with a link to the page and a description of the issue. We review correction requests and update content where appropriate.`)],
    },
  ],
};

export const privacyPolicy: PolicyDocument = {
  path: routes.privacyPolicy,
  eyebrow: "Legal",
  title: "Privacy Policy",
  description: "What information BS Insights collects, how it is used and the choices you have.",
  updatedAt: LAST_UPDATED,
  intro: "This policy explains how BS Insights handles personal information when you use this website. It will be updated as features such as newsletters, accounts or analytics are introduced.",
  sections: [
    {
      title: "Information We Collect",
      blocks: [
        p("We collect information you choose to give us and limited technical information needed to run the website:"),
        list(["Information you submit through forms, such as your name, email address and message", "Content you submit as a guest contributor, including your author bio and images", "Technical data such as your browser type and pages requested, which may be recorded in standard server logs"]),
      ],
    },
    {
      title: "How We Use Information",
      blocks: [list(["To respond to messages and correction requests", "To review and, where accepted, publish guest contributions", "To send newsletters you have signed up for", "To operate, secure and improve the website"])],
    },
    {
      title: "Cookies",
      blocks: [p(`We explain our use of cookies in our [Cookie Policy](${routes.cookiePolicy}).`)],
    },
    {
      title: "Analytics",
      blocks: [p("BS Insights does not currently use third-party analytics services. If we add analytics in the future, we will update this policy to describe the service and the data it collects.")],
    },
    {
      title: "Advertising",
      blocks: [p("BS Insights does not currently display third-party advertising. If this changes, we will update this policy and explain any related data use.")],
    },
    {
      title: "Third-Party Services",
      blocks: [p("The website relies on service providers such as hosting and image delivery. These providers may process technical data, such as IP addresses, to deliver their services. Links to external websites are governed by those websites' own privacy policies.")],
    },
    {
      title: "Guest Submissions",
      blocks: [p("When you submit a guest post, we use your details to review the submission and contact you about it. If your article is published, your name, author bio and any profile links you provide will be shown publicly with it.")],
    },
    {
      title: "Contact Forms",
      blocks: [p("Information sent through our contact form is used only to respond to your enquiry and related follow-up.")],
    },
    {
      title: "Data Retention",
      blocks: [p("We keep personal information only for as long as needed for the purposes described here, or as required by law. Unaccepted guest submissions are deleted after review.")],
    },
    {
      title: "Your Rights",
      blocks: [p("Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal information, and to object to certain processing. To make a request, please contact us.")],
    },
    {
      title: "Changes to This Policy",
      blocks: [p("We may update this policy from time to time. The date at the top of the page shows when it was last changed.")],
    },
    { title: "Contact", blocks: [contactLine] },
  ],
};

export const termsAndConditions: PolicyDocument = {
  path: routes.terms,
  eyebrow: "Legal",
  title: "Terms & Conditions",
  description: "The terms that apply when you use the BS Insights website.",
  updatedAt: LAST_UPDATED,
  intro: "These are the general terms of use for this website. They are not legal advice for your own situation.",
  sections: [
    {
      title: "Acceptance of Terms",
      blocks: [p("By using BS Insights, you agree to these terms. If you do not agree, please do not use the website.")],
    },
    {
      title: "Use of the Website",
      blocks: [
        p("You may use the website for personal, non-commercial purposes. You agree not to:"),
        list(["Use the website in a way that breaks any law", "Attempt to disrupt, damage or gain unauthorised access to the website", "Copy or republish content at scale, including through automated scraping, without permission"]),
      ],
    },
    {
      title: "Intellectual Property",
      blocks: [p("Unless stated otherwise, content on BS Insights — including text, design and logos — belongs to BS Insights or its contributors. Images may be licensed from third parties. You may share links to our pages and quote short excerpts with attribution.")],
    },
    {
      title: "User Submissions",
      blocks: [p("When you send us content, such as a message or correction, you confirm that it is accurate to the best of your knowledge and that you have the right to share it.")],
    },
    {
      title: "Guest Posts",
      blocks: [p(`Guest contributors confirm that submitted work is original and does not infringe anyone else's rights. By submitting, you allow BS Insights to edit and publish the work if accepted. Publication is at our discretion. See [Write for Us](${routes.writeForUs}) for details.`)],
    },
    {
      title: "External Links",
      blocks: [p("We link to external websites for reference. We are not responsible for their content, availability or practices.")],
    },
    {
      title: "Accuracy of Information",
      blocks: [p(`We work to keep information accurate and up to date, but we cannot guarantee that all content is complete or current. Please read our [Disclaimer](${routes.disclaimer}).`)],
    },
    {
      title: "Limitation of Liability",
      blocks: [p("To the extent permitted by law, BS Insights is not liable for any loss or damage arising from your use of the website or reliance on its content.")],
    },
    {
      title: "Changes to Terms",
      blocks: [p("We may update these terms. Continued use of the website after changes means you accept the updated terms.")],
    },
    { title: "Contact", blocks: [contactLine] },
  ],
};

export const disclaimer: PolicyDocument = {
  path: routes.disclaimer,
  eyebrow: "Legal",
  title: "Disclaimer",
  description: "Important information about how to use the content on BS Insights.",
  updatedAt: LAST_UPDATED,
  sections: [
    {
      title: "General Information Only",
      blocks: [p("Content on BS Insights is provided for general informational purposes. It is not tailored to your personal circumstances.")],
    },
    {
      title: "Not Professional Advice",
      blocks: [p("Guides on topics such as finance, health, law or careers are not a substitute for advice from a qualified professional. Please seek appropriate advice before making significant decisions.")],
    },
    {
      title: "Accuracy",
      blocks: [p("We aim to keep content accurate and current, but details such as prices, schedules, rules and product features can change. Please verify important information with the original source before relying on it.")],
    },
    {
      title: "External Links",
      blocks: [p("Links to other websites are provided for convenience. We do not control and are not responsible for external content.")],
    },
    {
      title: "Affiliate Relationships",
      blocks: [p("Some pages may contain affiliate links. When they do, we disclose this on the page. We may earn a commission from qualifying purchases, at no extra cost to you.")],
    },
    {
      title: "Advertising",
      blocks: [p("BS Insights does not currently display third-party advertising. Any sponsored content will be clearly labelled.")],
    },
    {
      title: "Guest Contributions",
      blocks: [p("Guest posts reflect the views of their authors. They are reviewed by our editorial team before publication but do not necessarily represent the views of BS Insights.")],
    },
    {
      title: "Guide Rank",
      blocks: [p("Guide Rank is an internal BS Insights editorial score. It is not a search-engine ranking, an official industry rating or a guarantee of quality.")],
    },
  ],
};

export const cookiePolicy: PolicyDocument = {
  path: routes.cookiePolicy,
  eyebrow: "Legal",
  title: "Cookie Policy",
  description: "How cookies and similar technologies are used on BS Insights.",
  updatedAt: LAST_UPDATED,
  intro: "BS Insights does not currently set analytics or advertising cookies. This page explains what cookies are and how we will describe any we use in future.",
  sections: [
    {
      title: "What Cookies Are",
      blocks: [p("Cookies are small text files that a website stores in your browser. They can remember preferences, keep you signed in or help site owners understand how a website is used.")],
    },
    {
      title: "How We Use Cookies",
      blocks: [p("At the moment, BS Insights does not use cookies for tracking, analytics or advertising. If that changes, we will list the cookies here and, where required, ask for your consent first.")],
    },
    {
      title: "Essential Cookies",
      blocks: [p("Some features, such as future account sign-in or security protections, may need essential cookies to work. These cannot be switched off without affecting how the website functions.")],
    },
    {
      title: "Analytics Cookies",
      blocks: [p("We do not currently use analytics cookies.")],
    },
    {
      title: "Advertising Cookies",
      blocks: [p("We do not currently use advertising cookies.")],
    },
    {
      title: "Third-Party Cookies",
      blocks: [p("External services linked from or embedded in our pages may set their own cookies under their own policies.")],
    },
    {
      title: "Managing Cookies",
      blocks: [
        p("You can view, block or delete cookies in your browser settings. Blocking some cookies may affect how websites work."),
        contactLine,
      ],
    },
  ],
};
