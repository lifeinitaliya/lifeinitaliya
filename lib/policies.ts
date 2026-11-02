import { CONTACT_EMAIL } from "@/lib/contact";
import { routes } from "@/lib/site";
import type { ContentBlock } from "@/lib/types";

// Editorial policy and legal pages. They describe how the site actually works;
// update them before site behaviour changes (for example when the contact form
// is connected, or if analytics, advertising or a newsletter are ever added).

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

const LAST_UPDATED = "2026-11-02";

export const editorialPolicy: PolicyDocument = {
  path: routes.editorialPolicy,
  eyebrow: "Standards",
  title: "Editorial Policy",
  description: "How Life in Italia researches, writes, illustrates, corrects and updates its articles about Italy.",
  updatedAt: LAST_UPDATED,
  sections: [
    {
      title: "Our Editorial Mission",
      blocks: [p("Life in Italia is an independent publication about Italy, in English and Italian. We publish practical travel guides, city guides and articles on Italian food culture, written to help readers plan a trip and understand what they see. We prioritise usefulness and accuracy over volume, and we would rather publish fewer articles than thin ones.")],
    },
    {
      title: "How We Create Content",
      blocks: [
        p("Each article starts from a specific reader question. We research it, write the answer in plain language and edit it for clarity and structure. English and Italian editions are written separately for their readers rather than translated line by line."),
        list(["The most important information comes first.", "We avoid filler, rankings and unsupported superlatives.", "Where a topic depends on rules that change — such as transport, driving or opening arrangements — we say so, date the information and point readers to the official source."]),
      ],
    },
    {
      title: "Research & Sources",
      blocks: [
        p("We base factual claims on primary or authoritative sources wherever possible: government and regional authorities, official registers (such as the EU register of protected food and wine names), transport operators, museums, UNESCO, recognised institutions and producers' consortia. Articles list their main sources so readers can check them."),
        p("We do not invent statistics, prices, quotes, reviews or personal experiences, and we do not present ourselves as having visited or tested something unless we have."),
      ],
    },
    {
      title: "History, Origins and Uncertainty",
      blocks: [p("Many Italian traditions come with origin stories. We distinguish between what is documented, what an institution states, what is commonly said and what is legend or disputed, and we label each accordingly — for example \"according to the regional authority\" or \"the origin is disputed\". We avoid \"oldest\", \"original\" or \"best\" claims unless an authoritative source supports them.")],
    },
    {
      title: "Fact Checking",
      blocks: [p("Editors check key facts — dates, rules, names, protected designations and figures — against available sources before publication. Not every article is reviewed by a subject-matter expert, and we don't claim otherwise. Information such as timetables and rules can change after publication, so please confirm critical details with the official provider before you travel.")],
    },
    {
      title: "Images",
      blocks: [p("Photographs are used under licence. Where a photo illustrates a particular place, we check the location using the photo's metadata, the photographer's description or other reliable context, and we reject images that turn out to show somewhere else.")],
    },
    {
      title: "Updates & Corrections",
      blocks: [
        p("Articles show when they were first published and when they were last updated. We revisit them periodically and when we learn that information has changed. Guide Rank, our internal editorial score for guides, takes freshness into account."),
        p(`If you spot an error, please [let us know](${routes.contact}) — or email ${CONTACT_EMAIL} — with a link to the page and a description of the issue. We review correction requests and update articles where appropriate.`),
      ],
    },
    {
      title: "Independence, Advertising and Sponsorship",
      blocks: [p("Life in Italia carries display advertising provided by Google AdSense, which serves advertisements automatically based on page content and your browsing activity. Advertising appears in clearly marked areas and is not selected or influenced by our editorial team. We don't carry sponsored articles or affiliate links, and no business pays to be included in or to influence an article. Editorial decisions are made independently of advertising.")],
    },
    {
      title: "AI-Assisted Content",
      blocks: [
        p("Life in Italia uses digital tools, including AI-assisted tools, where appropriate during research, outlining, drafting, and editing. Published material is subject to human editorial review, with factual claims checked against relevant sources where possible."),
        p("Editorial oversight is the responsibility of Bareera Sharif, Founder and Managing Editor."),
      ],
    },
  ],
};

// ——— Legal pages ———
// Written from an audit of the site as it runs today (29 September 2026): no
// cookies, analytics, advertising, affiliate links, embeds, accounts or
// newsletter; one functional localStorage key for checklists; a contact form
// delivered by email through Resend to CONTACT_EMAIL (a Gmail inbox); images
// and fonts served from this domain. Items the code can't establish — the
// hosting provider, the operator's legal identity and governing law — are
// deliberately not asserted. Update these pages before any of that changes.

const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const mail = `[${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`;
const contactNow = p(`You can email us at ${mail} or use the form on our [contact page](${routes.contact}).`);

export const privacyPolicy: PolicyDocument = {
  path: routes.privacyPolicy,
  eyebrow: "Legal",
  title: "Privacy Policy",
  description: "What personal information Life in Italia handles when you read the site or contact us, how it is used, and the choices and rights you have.",
  updatedAt: LAST_UPDATED,
  intro: "Life in Italia is an independent editorial publication about Italy, in English and Italian. It is a reading website: there are no accounts, no shop, no newsletter and no comments. This policy explains the small amount of personal information involved when you visit or contact us, and what happens to it.",
  sections: [
    {
      title: "The Short Version",
      blocks: [
        list([
          "The site displays advertising through Google AdSense. Google AdSense may set cookies in your browser and use your browsing data to show relevant ads. You can manage or opt out of personalised advertising through [Google's ad settings](https://adssettings.google.com/).",
          "We don't use analytics tools or tracking of our own, and we don't build profiles of visitors.",
          "Like any website, the servers that deliver our pages receive technical information such as your IP address; this may be recorded in server logs by our hosting provider.",
          "If you contact us, your message is delivered to our email inbox through an email service, Resend, so that we can reply.",
          "If you tick items in one of our planning checklists, your progress is saved in your own browser and never sent to us.",
          "Images and fonts are served from our own domain, so reading an article only connects your browser to Google AdSense (for advertising) and not to other companies' servers.",
        ]),
      ],
    },
    {
      title: "Information You Give Us",
      blocks: [
        h3("The contact form"),
        p(`The only place on the site where you can type personal information is the form on our [contact page](${routes.contact}). It asks for your name, your email address, a subject and a message, and anything else you choose to include in the message.`),
        p("When you press \"Send message\", what you typed is sent to our web server, which checks it and passes it to Resend, an email delivery service, to deliver to our inbox at " + mail + ". Your email address is set as the reply address, so that we can answer you directly. The website itself doesn't keep a copy of your message in a database."),
        p("You can also simply email us at " + mail + "; the same applies to what you send."),
        p("We use what you send only to read and reply to your message and to deal with any follow-up, such as a correction to an article. Please don't include sensitive personal information you don't need to share."),
      ],
    },
    {
      title: "Information Collected Automatically",
      blocks: [
        h3("When you load a page"),
        p("Whenever your browser requests a page or image, it sends the web server some technical information: your IP address, the address of the page requested, the time, your browser and operating system (the \"user agent\"), and usually the page you came from. This is how the web works; without it, the page couldn't be delivered to you."),
        p("The hosting provider that runs our servers may record some of this in server logs, which are used to deliver the site, diagnose faults and protect it against abuse. Which details are logged and for how long is determined by the provider's configuration."),
        h3("What we don't collect"),
        p("We don't use analytics tools, advertising networks, tracking pixels, social-media plugins or fingerprinting, and we don't build profiles of visitors. We don't ask for your location; the only location information involved is what can be inferred from an IP address."),
      ],
    },
    {
      title: "Cookies and Browser Storage",
      blocks: [
        p("The site itself does not set cookies. Google AdSense, which we use to display advertising, sets cookies in your browser to serve and measure advertisements. For details, see [Google's Privacy & Terms](https://policies.google.com/privacy) and [How Google uses cookies](https://policies.google.com/technologies/cookies). You can manage or opt out of personalised advertising at [adssettings.google.com](https://adssettings.google.com/)."),
        p(`Some guides — for example the [travel planning checklist](/guides/italy-travel-planning-checklist) — contain interactive checklists. When you tick an item, your browser's local storage remembers which items are ticked so that your progress is still there next time. This information stays on your device and is never sent to us. Our [Cookie Policy](${routes.cookiePolicy}) describes cookies and browser storage in detail.`),
      ],
    },
    {
      title: "Images and Fonts",
      blocks: [
        p("Photographs on the site are delivered from our own website in an appropriately sized copy, so your browser does not connect to a third-party image service to display them."),
        p("The typefaces used on the site are bundled with it and served from our own domain; your browser doesn't request them from Google Fonts or any other font service."),
      ],
    },
    {
      title: "Why We Use Information, and on What Basis",
      blocks: [
        p("Where the EU and UK General Data Protection Regulation (GDPR) applies, each use of personal data needs a legal basis. This is how our current uses map to those bases:"),
        table(
          ["What happens", "Why", "Legal basis"],
          [
            ["Your browser's request (IP address, user agent, page, time) is processed and may be logged by our hosting provider", "To deliver the website and keep it secure and working", "Our legitimate interest in running a secure, working website"],
            ["Google AdSense receives information about the page you are viewing and may use cookies and browser data to serve and measure advertisements", "To display advertising that supports the site", "Our legitimate interest in funding the site through advertising, subject to your right to object and (for EEA users) consent where required by law"],
            ["Messages you send through the contact form or by email", "To read and reply to your message and handle any follow-up", "Our legitimate interest in responding to people who contact us, or steps you ask us to take"],
            ["Disclosure to authorities", "Only where the law requires it", "Legal obligation"],
          ],
        ),
        p("Checklist progress saved in your browser is not listed because it is not sent to us: it stays on your device and is under your control."),
      ],
    },
    {
      title: "Who Else Receives Information",
      blocks: [
        list([
          "**Our hosting provider** runs the servers that deliver the site and receives the technical request information described above. It acts on our behalf, to provide that service.",
          "**Google AdSense** provides advertising on the site. When you view a page containing an ad, Google AdSense receives information about the page and may use cookies and browser data to serve relevant advertisements. See [Google's privacy policy](https://policies.google.com/privacy) and [personalised advertising settings](https://adssettings.google.com/).",
          "**Resend** (Resend, Inc.) delivers contact-form messages to our inbox. It processes the message and the details you entered on our behalf; see its [privacy policy](https://resend.com/legal/privacy-policy).",
          "**Google** provides the Gmail inbox where messages sent through the form or by email are received and kept; see [Google's privacy policy](https://policies.google.com/privacy).",
          "**Nobody else.** We don't use analytics providers, and we don't sell or rent personal information.",
          "**Authorities**, if we are legally required to disclose information, for example in response to a valid legal request.",
        ]),
      ],
    },
    {
      title: "International Transfers",
      blocks: [
        p("Some of the services we rely on process information outside the European Economic Area:"),
        list([
          "**Resend** is based in the United States and processes data there. According to its [data processing addendum](https://resend.com/legal/dpa), transfers are covered by Standard Contractual Clauses and by its certification under the EU-U.S. Data Privacy Framework.",
          "**Google** may process email in its data centres around the world, under the safeguards described in its privacy documentation.",
          "**Our hosting provider** may process technical request information outside your country, depending on where its infrastructure is located, under the safeguards in its own data-processing terms.",
        ]),
      ],
    },
    {
      title: "How Long Information Is Kept",
      blocks: [
        list([
          "**Server logs** are kept for the period set by our hosting provider's configuration, and are not used to identify or profile individual readers.",
          "**Messages you send us** are kept in our email inbox for as long as we need them to deal with your enquiry and any follow-up — for example, to show why an article was corrected — and are then deleted. We haven't set a fixed period. Resend keeps records of the emails it delivers according to its own retention settings.",
          "**Checklist progress** stays in your browser until you clear it or untick every item.",
        ]),
      ],
    },
    {
      title: "Your Rights",
      blocks: [
        p("If the GDPR applies to you — for example because you are in the EU, the EEA or the UK — you have rights over your personal data, including the right to:"),
        list([
          "access the personal data we hold about you",
          "have inaccurate data corrected",
          "have data deleted",
          "restrict or object to how it is used, including processing based on legitimate interests",
          "receive data you have given us in a portable format, where that applies",
          "withdraw consent at any time, where processing is based on consent",
        ]),
        p(`To make a request, email ${mail}. Some of these rights depend on the circumstances and have exceptions, and because we hold so little personal information there may be nothing to give you. Other privacy laws may give you similar rights.`),
        p("You can also complain to a data protection supervisory authority, usually the one in the country where you live or work. In Italy that is the [Garante per la protezione dei dati personali](https://www.garanteprivacy.it/)."),
      ],
    },
    {
      title: "Children",
      blocks: [p("Life in Italia is a general-interest publication. Apart from the contact form, the site doesn't ask anyone for personal information, and we don't knowingly collect personal information from children.")],
    },
    {
      title: "Links to Other Websites",
      blocks: [p("Our articles link to official sources such as transport operators, museums and public authorities. Those websites have their own privacy practices, which this policy does not cover.")],
    },
    {
      title: "Changes to This Policy",
      blocks: [p("We will update this policy before we change how the site handles personal information — for example if we ever add analytics or advertising, or change how messages are delivered. The date at the top of the page shows when it last changed, and significant changes will be summarised on this page.")],
    },
    {
      title: "Contact",
      blocks: [contactNow],
    },
  ],
};

export const termsAndConditions: PolicyDocument = {
  path: routes.terms,
  eyebrow: "Legal",
  title: "Terms and Conditions",
  description: "The terms for using Life in Italia, an editorial publication about Italy: what you can do with our content, what we can and can't promise, and your responsibilities.",
  updatedAt: LAST_UPDATED,
  intro: "Life in Italia is an editorial publication: we write travel guides, city guides and articles about Italian food and culture, in English and Italian. We don't sell products or services, take bookings or run user accounts. These terms explain how you may use the site and what you can expect from it.",
  sections: [
    {
      title: "Using the Website",
      blocks: [
        p("You're welcome to read and browse the site, share links to any page, and use the information in it for your own lawful, personal purposes — planning a trip, for instance."),
        p("You may quote short passages if you credit Life in Italia and link to the page they come from. Please don't republish whole articles or substantial parts of them, on another website or elsewhere, without our permission."),
      ],
    },
    {
      title: "What Our Articles Are",
      blocks: [
        p("Our articles provide general information to help readers plan and understand a trip to Italy. We research them using official and authoritative sources, which each article lists, and we date them and revise them when we learn that something has changed."),
        p("Cultural and historical topics often involve traditions, interpretations and stories whose origins are uncertain. We say so when that is the case — for example by noting that an institution gives a particular account or that an origin is disputed — rather than presenting a legend as fact."),
        p("Our articles are not legal, medical, financial or other professional advice, and they don't take account of your personal circumstances."),
      ],
    },
    {
      title: "Travel Information Changes",
      blocks: [
        p("Travel details change, sometimes at short notice. After we publish:"),
        list([
          "transport timetables, routes and fares can change",
          "museums, sites and attractions can close, change their opening hours or introduce booking rules",
          "events and festivals can move dates or be cancelled",
          "local regulations — such as traffic-restricted zones or access fees — can change",
          "businesses can change their hours, prices or services",
          "weather and sea conditions can disrupt plans",
        ]),
        p("Before you rely on a detail that matters to your trip — a timetable, a booking rule, an entry requirement — please check it with the official provider. Many of our articles link to them."),
      ],
    },
    {
      title: "Copyright and Trademarks",
      blocks: [
        list([
          "**Our work.** The articles, their text, the site's design and graphics, the Life in Italia name and logo, and the Guide Rank score belong to Life in Italia.",
          "**Photographs.** Photographs are used under licence; their photographers keep the copyright and we don't claim ownership of them. Please don't copy them from our site.",
          "**Other names and marks.** Names and trademarks of transport operators, museums, producers and other organisations mentioned on the site belong to their owners. Mentioning them doesn't imply any relationship with or endorsement by them.",
        ]),
      ],
    },
    {
      title: "Acceptable Use",
      blocks: [
        p("When using the site, please don't:"),
        list([
          "use it for anything unlawful",
          "try to gain unauthorised access to it, disrupt it or overload it",
          "upload or send malware or other harmful code",
          "scrape or copy the site in bulk in breach of applicable law or of technical restrictions such as our robots.txt file",
          "impersonate someone else or misuse the contact form, for example to send spam",
        ]),
      ],
    },
    {
      title: "Messages You Send Us",
      blocks: [p(`If you send us a message or a correction, please make sure it's accurate as far as you know and that you're entitled to share what it contains. Our [Privacy Policy](${routes.privacyPolicy}) explains how we handle messages.`)],
    },
    {
      title: "Links to Other Websites",
      blocks: [p("We link to other websites — official tourism bodies, transport operators, museums, public authorities, producers' associations and other publications — so you can check information at its source. We don't control those sites, and a link isn't an endorsement of everything they contain. Their own terms and privacy policies apply when you visit them.")],
    },
    {
      title: "Advertising and Commercial Relationships",
      blocks: [p("Life in Italia displays advertising through Google AdSense, an automated display advertising service. Advertisements appear in clearly marked areas and are separate from editorial content. We don't carry sponsored articles or affiliate links, and nobody pays to be mentioned in or to influence an article.")],
    },
    {
      title: "Our Responsibility",
      blocks: [
        p("We work to keep our articles accurate and current, but we can't guarantee that every detail is complete, free of errors or still correct by the time you read it. Please use your own judgement and check important information with the relevant official source. We are not responsible for losses that result from relying on information that has since changed, or from the content of websites we link to."),
        p("Nothing in these terms limits any liability that cannot be limited by law, or affects rights you have as a consumer under the law that applies to you."),
      ],
    },
    {
      title: "Changes to These Terms",
      blocks: [p("We may update these terms, for example when the site adds a feature. The date at the top of this page shows when they last changed. The version published here applies from that date.")],
    },
    {
      title: "Contact",
      blocks: [contactNow],
    },
  ],
};

export const disclaimer: PolicyDocument = {
  path: routes.disclaimer,
  eyebrow: "Legal",
  title: "Disclaimer",
  description: "What to keep in mind when using the travel, transport, food and wine information on Life in Italia.",
  updatedAt: LAST_UPDATED,
  intro: "Life in Italia publishes editorial articles about travelling in Italy and about Italian food and culture. We research them carefully and list our sources, but some information changes after publication. Here is what that means in practice.",
  sections: [
    {
      title: "Travel Information",
      blocks: [p("Timetables, fares, opening hours, booking rules and local regulations can change, sometimes with little notice. Our articles are dated so you can see when they were last updated. For anything your plans depend on, check the official provider's website shortly before you travel.")],
    },
    {
      title: "Events and Festivals",
      blocks: [p("Where we mention events, festivals or seasonal traditions, dates and programmes are set by the organisers and can change from year to year. Confirm them with the official organiser or the local tourist office.")],
    },
    {
      title: "Weather and Seasons",
      blocks: [p("We describe typical seasonal conditions to help with planning; we don't publish forecasts. Weather, sea conditions and mountain conditions vary, so check a current forecast and any official alerts before and during your trip, especially for ferries, mountain walks and driving.")],
    },
    {
      title: "Food and Drink",
      blocks: [p("Our food and drink articles are general cultural information, not dietary, allergy or medical advice. If you have an allergy or dietary requirement, ask the restaurant or producer about ingredients. Articles about wine are not encouragements to drink: alcohol carries health risks, and you should never drive after drinking.")],
    },
    {
      title: "Transport and Driving",
      blocks: [p("Our transport and driving guides explain how things generally work. You remain responsible for following current laws, road signs, operators' conditions and the instructions of officials — including rules on traffic-restricted zones, speed limits and alcohol, which apply to you whatever an article says.")],
    },
    {
      title: "Links to Other Websites",
      blocks: [p("We link to external websites, mainly official sources, so you can check information yourself. We don't control them and aren't responsible for their content or availability.")],
    },
    {
      title: "Commercial Relationships",
      blocks: [p("Life in Italia displays advertising through Google AdSense, an automated ad network. Advertisements are clearly marked and separate from editorial content. We don't use affiliate links, and no business pays to appear in or to influence our articles.")],
    },
    {
      title: "Guide Rank",
      blocks: [p("Guide Rank is our own editorial score for how useful, clear, well researched and current we consider a guide to be. It is not a search-engine ranking, an official rating or a guarantee.")],
    },
    {
      title: "Accuracy and Corrections",
      blocks: [p(`We base our articles on reliable, preferably official sources, revisit time-sensitive information and correct errors when we find them. Even so, we can't guarantee that every detail is current at the moment you read it. Our [Editorial Policy](${routes.editorialPolicy}) explains how we research and correct articles; to report an error, email ${mail}.`)],
    },
  ],
};

export const cookiePolicy: PolicyDocument = {
  path: routes.cookiePolicy,
  eyebrow: "Legal",
  title: "Cookie Policy",
  description: "Cookies and browser storage used by Life in Italia: Google AdSense advertising cookies and optional checklist progress stored locally in your browser.",
  updatedAt: LAST_UPDATED,
  intro: "Life in Italia uses Google AdSense to display advertising. Google AdSense sets cookies in your browser. Apart from those, the only thing the site itself stores in your browser is your progress in our interactive planning checklists, if you use them. This page explains what is stored and how to manage it.",
  sections: [
    {
      title: "Cookies and Browser Storage",
      blocks: [p("Cookies are small files a website can place in your browser, and they are sent back to the website with every request. Local storage is a different mechanism: it lets a page keep information in your browser, but that information is not sent to the website automatically. Life in Italia uses local storage for one feature, described below, and no cookies.")],
    },
    {
      title: "What the Site Stores",
      blocks: [
        table(
          ["Name", "Provider", "Purpose", "Type", "Duration", "Required?"],
          [
            [
              "Various cookies (e.g. IDE, _gcl_au, AID)",
              "Google (AdSense)",
              "Serves and measures advertisements on the site. May personalise ads based on your browsing activity across sites. See Google's [cookie types](https://policies.google.com/technologies/cookies) for full details.",
              "Cookie (advertising)",
              "Varies by cookie; typically 1–13 months",
              "Set automatically when a page with an ad loads; you can opt out at [adssettings.google.com](https://adssettings.google.com/)",
            ],
            [
              "bsi-checklist:[checklist name]",
              "Life in Italia (this website)",
              "Remembers which items you have ticked in an interactive planning checklist, so your progress is still there when you come back",
              "Local storage (functional)",
              "Until you untick every item in that checklist or clear your browser's site data; it doesn't expire automatically",
              "Optional: created only when you tick an item",
            ],
          ],
          "What Life in Italia and its advertising provider store in your browser.",
        ),
        p(`The checklists appear in a few practical guides, such as the [travel planning checklist](/guides/italy-travel-planning-checklist) and our guides to [airport transfers](/guides/italy-airport-transfers), [getting between cities](/guides/getting-between-italian-cities), [ferries](/transport/ferries-in-italy) and [the Dolomites](/guides/visiting-the-dolomites), and in their Italian editions. Each checklist has its own entry. It contains only the text of the items you ticked — no name, email address or identifier — and it is never sent to us.`),
        p("If your browser blocks site data, for example in some private-browsing modes, the checklist still works for the page you're on but forgets your ticks when you leave."),
      ],
    },
    {
      title: "What the Site Does Not Use",
      blocks: [
        list([
          "**Analytics of our own** — no Google Analytics or other analytics service. Note: Google AdSense, used for advertising, may use your browsing data for ad measurement purposes.",
          "**Third-party embeds** — no embedded videos, maps or social-media widgets that could set their own cookies.",
          "**Third-party requests beyond advertising** — images and fonts are served from our own domain, so reading a page connects your browser only to Google AdSense (for advertising) and not to other companies' servers.",
        ]),
      ],
    },
    {
      title: "Consent",
      blocks: [
        p("Google AdSense sets cookies when you view a page with an advertisement. For visitors in the European Economic Area (EEA) and other regions where consent for advertising cookies is required by law, personalised advertising is only enabled after consent is given. You can manage or withdraw your advertising consent at any time through [Google's ad settings](https://adssettings.google.com/)."),
        p("The checklist local storage is only created when you choose to tick an item, and you can remove it at any time by unticking all items or clearing this site's browser data."),
      ],
    },
    {
      title: "Clearing Checklist Progress",
      blocks: [
        list([
          "Untick all the items in a checklist: its entry is deleted.",
          "Or clear this site's data in your browser settings (often under \"Cookies and site data\" or \"Site settings\"), which removes all our checklist entries at once.",
        ]),
      ],
    },
    {
      title: "Other Websites",
      blocks: [p("When you follow a link to another website — such as an official source or a transport operator — that website may set its own cookies under its own policies.")],
    },
    {
      title: "Changes to This Policy",
      blocks: [p(`We will update this page before the site starts storing anything new in your browser. See also our [Privacy Policy](${routes.privacyPolicy}). Questions: ${mail}.`)],
    },
  ],
};
