import type { ArticleContent, ContentBlock } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

export const italyProtestsOctober2026: ArticleContent = {
  body: [
    note("**Last updated: 19 October 2026, 11:00 CEST.** This article summarises verified developments reported through 19 October 2026. The situation may have changed since publication. For current travel disruptions and public safety notices, check sources listed at the end of this article."),

    answer("Over the weekend of 17–18 October 2026, demonstrations over the cost of living, education policy, and government spending took place in Rome, Milan, Turin, Bologna and other Italian cities. Several marches turned violent in Milan, Turin and Bologna, resulting in 141 law enforcement officers injured and 28 people arrested. Rome saw large but mostly peaceful marches. A separate student mobilisation had already begun in several cities on 16 October. These are distinct events with different organisers and demands; the section below summarises each city separately."),

    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "What happened and when: verified summary",
        "Why are people protesting in Italy?",
        "Rome: student march and CGIL rally",
        "Milan: cost-of-living march and violent clashes",
        "Turin: student protests and weekend demonstrations",
        "What the Italian government has said",
        "What this means for visitors",
        "Upcoming strikes and demonstrations",
        "Where to check for updates",
      ],
    },

    h2("What happened and when: verified summary"),
    table(
      ["City", "Event", "Date", "Stated demands", "Verified outcome", "What to check"],
      [
        [
          "Rome",
          "Student demonstration at Ministry of Education (organised by Osa collective)",
          "16 Oct",
          "Education funding, school conditions, housing costs, less military spending",
          "Thousands participated. Police reported bottles and flares thrown at officers. Demonstration ended.",
          "No active disruption reported as of 19 Oct",
        ],
        [
          "Rome",
          "\"La Via Maestra\" rally (CGIL and coalition of 100+ associations)",
          "17 Oct",
          "Constitutional rights, higher wages and pensions, more funding for healthcare, education and housing",
          "Organizers claimed 100,000 participants (independent count unavailable). Peaceful. CGIL general strike announced for 20 November.",
          "Transport strike in Lazio region 08:30–12:30 on 19 Oct (now completed)",
        ],
        [
          "Milan",
          "Cost-of-living march (Italia in Piazza movement)",
          "17–18 Oct",
          "Rising living costs, fuel prices, tax burden",
          "~5,000 participants (police estimate). Violence broke out: stones, tear gas, water cannons. 17 arrested. €500,000+ estimated damage. Metro briefly disrupted.",
          "No active unrest reported as of 19 Oct. Check comune.milano.it",
        ],
        [
          "Turin",
          "Student demonstrations at prefecture (No Meloni Day)",
          "16 Oct",
          "Education policy, foreign-student quota decree, military spending",
          "Police used tear gas and water cannons at Piazza Castello. AFP reported at least 15 officers hospitalised. One adult detained, 3 minors found with Molotov cocktails.",
          "No active disruption reported as of 19 Oct",
        ],
        [
          "Turin",
          "Cost-of-living march (Italia in Piazza movement)",
          "17–18 Oct",
          "Rising living costs",
          "~3,000 participants (police estimate). Clashes reported. Part of wider 28 arrests / 141 injured across all cities.",
          "No active unrest reported as of 19 Oct",
        ],
        [
          "Bologna",
          "Cost-of-living demonstration (Italia in Piazza movement)",
          "17–18 Oct",
          "Rising living costs",
          "~2,000 participants. Railway station temporarily closed. 5 minors arrested near station.",
          "Station reopened. Check trenitalia.com for train service",
        ],
      ],
      "Source: The Chronicle PH / Sky TG24, AFP, Agencia Nova, France 24, Al Jazeera. Figures are attributed to the sources reporting them and may be updated as official accounts are confirmed."
    ),

    h2("Why are people protesting in Italy?"),
    p("The October 2026 demonstrations involved at least three distinct movements with partially overlapping but separate demands. They should not be treated as a single organised movement."),

    h3("Student protests: education, spending and the school decree"),
    p("A nationwide wave of school and university protests began in early October, with students occupying secondary schools in Turin from around 5 October. The mobilisation accelerated around 16 October — described by some student groups as a \"No Meloni Day\" — and focused primarily on:"),
    ul(
      "Government education policy, including a ministerial decree setting a 30 per cent ceiling on pupils belonging to certain categories of non-Italian background in individual classes. Critics argue this policy is discriminatory.",
      "Funding for school buildings and classroom resources.",
      "The rising cost of rented accommodation, which affects university students in particular.",
      "Government spending priorities: student groups argued for more funding for education and less for the armed forces."
    ),
    p("These protests were organised largely by student collectives, including Osa in Rome. They were separate from the trade-union-led march and from the cost-of-living demonstrations."),

    h3("CGIL and La Via Maestra: constitutional and social demands"),
    p("On 17 October, the CGIL — Italy's largest trade union confederation — led a coalition called \"La Via Maestra\" in a march in Rome. The coalition, which the CGIL launched in 2023 alongside more than 100 associations, frames its demands around the application and defence of Italy's 1948 Constitution, particularly provisions relating to work, health, education and social rights."),
    p("At the rally, CGIL leader Maurizio Landini announced a general strike for 20 November 2026, calling for higher wages and pensions, improved funding for public healthcare, more affordable housing, and increased resources for public education. The CGIL march in Rome was separate from the cost-of-living demonstrations that turned violent in other cities."),

    h3("Italia in Piazza: cost-of-living grievances"),
    p("The demonstrations in Milan, Turin and Bologna that developed into violence on 17–18 October were organised by the \"Italia in Piazza\" movement. Participants cited rising living costs, fuel prices and the overall tax burden. The movement's stated demands centred on the cost of everyday life rather than on education policy or trade-union agreements."),
    p("Both the organisers' stated demands and the participation of peaceful marchers are distinct from the acts of violence and property damage committed by a smaller number of individuals during the same events. Multiple Italian officials and organisers of peaceful demonstrations have drawn this distinction explicitly."),

    h2("Rome: student march and CGIL rally"),
    p("Two separate events took place in Rome over 16–17 October."),
    h3("16 October: student demonstration at the Ministry of Education"),
    p("Thousands of students, organised by the Osa collective and similar groups, marched to the Ministry of Education in central Rome. Demonstrators demanded greater public investment in education, better school building conditions, and an end to what they described as cuts to social services in favour of military spending. Police reported that bottles and flares were thrown at officers during the demonstration. No mass arrests in Rome were reported in the sources available at the time of this article's publication."),
    h3("17 October: La Via Maestra march"),
    p("The CGIL-led La Via Maestra coalition held a separate march in Rome on 17 October. Organisers claimed 100,000 participants; no independently verified attendance figure was available at publication. The march was described as peaceful. CGIL leader Maurizio Landini used the occasion to formally announce a general strike for 20 November, citing what he described as failures to raise real wages, adequately fund the national health service and address the housing crisis."),
    tip("The La Via Maestra march and the student protests were organised by different groups with partially overlapping but distinct aims. They are not the same event."),
    p("As of 19 October 2026, no road closures or public transport disruptions directly linked to the Rome demonstrations remained in effect. A regional transport strike affecting a Rome-based bus operator (Bus International Service) was scheduled in the Lazio region from 08:30 to 12:30 on 19 October; that action was unrelated to the demonstrations. For current transport updates in Rome, check [atac.roma.it](https://www.atac.roma.it/)."),

    h2("Milan: cost-of-living march and violent clashes"),
    p("Milan experienced the most serious violence of the weekend. The sequence of events, as reported by Reuters, Al Jazeera, AFP and Italian media by 19 October 2026, was as follows."),
    h3("17 October"),
    p("A march organised by the Italia in Piazza movement began peacefully in Milan. Police estimated approximately 5,000 participants. During the march, groups of masked demonstrators threw stones, paving slabs, bottles and firecrackers at police, and constructed barricades from bar furniture which they set alight. Police responded with tear gas and water cannons. Parts of the Milan Metro network were temporarily closed while the violence was at its peak."),
    p("Milan's luxury shopping arcade and the area around Piazza del Duomo were among the locations affected. Shops were damaged and some were looted. The Italian retail federation Confcommercio estimated damage to businesses in the Milan city centre at more than €500,000 (approximately £430,000 / US$560,000). A Carabinieri vehicle was reported destroyed."),
    h3("18 October"),
    p("Clashes continued on Sunday 18 October in central Milan. Reuters reported several hundred hooded demonstrators breaking shop windows and setting bins alight near Piazza Duomo. More than 60 people were taken to police stations for checks on 18 October."),
    h3("Casualties and arrests across all cities"),
    p("Across the cities affected by violence over 17–18 October (Milan, Turin, Bologna), according to reporting by The Chronicle PH citing Sky TG24:"),
    ul(
      "141 law enforcement officers were injured.",
      "28 people were arrested, including 12 minors.",
      "17 of the total arrests took place in Milan.",
      "197 individuals were identified and taken to police stations; 43 were referred to judicial authorities."
    ),
    p("These figures are attributed to Sky TG24's reporting and may be revised as legal proceedings develop. Do not treat these as final official counts."),
    note("The vast majority of participants in the Milan demonstrations protested peacefully. The violence and looting were carried out by groups within or alongside the demonstration and have been explicitly condemned by Italian officials including the mayor of Milan.", "Important distinction"),
    h3("Official statements on Milan"),
    p("Milan Mayor Giuseppe Sala acknowledged that many protesters had legitimate concerns about the cost of living but stated that attacks on law enforcement and widespread destruction of property \"could not be justified.\" Prime Minister Giorgia Meloni expressed support for law enforcement and called on opposition parties to condemn the violence while also acknowledging that thousands had protested peacefully. Deputy Prime Minister Matteo Salvini announced that his League party would revive a parliamentary proposal requiring organisers of high-risk demonstrations to provide financial guarantees against property damage."),
    p("As of 19 October 2026, the central Milan area was reported to be accessible, with no active police operation or cordon in place. For the latest transport updates, check [atm.it](https://www.atm.it/en/)."),

    h2("Turin: student protests and weekend demonstrations"),
    h3("16 October: student mobilisation and clashes at Piazza Castello"),
    p("Student protests in Turin had begun with school occupations in early October. On 16 October, a larger demonstration converged on Piazza Castello, where students attempted to reach the prefecture. Police blocked their path and, following stone-throwing, used tear gas and water cannons to disperse the crowd. AFP reported that at least 15 police officers were taken to hospital. One adult was detained on suspicion of resisting an officer; three minors were found carrying Molotov cocktails."),
    p("Separately, groups of masked youths were reported to have entered several secondary schools in Turin during the period, including the Sella and Bosso-Monti institutes, damaging property and using fire extinguishers. These incidents were separate from the main street demonstration. Agencia Nova reported 40 individuals identified and one arrested in connection with school occupations in Turin."),
    h3("17–18 October: cost-of-living demonstrations"),
    p("A separate cost-of-living demonstration, also organised by the Italia in Piazza movement, took place in Turin over the weekend. Police estimated approximately 3,000 participants. Clashes were reported as part of the broader nationwide pattern of violence over 17–18 October."),
    p("Turin Mayor Stefano Lo Russo condemned the property damage and violence while defending the fundamental right of students to protest. Education Minister Giuseppe Valditara said the government would pursue compensation for the damage to school buildings."),
    p("As of 19 October 2026, no active disruption to Turin public transport or access to the city centre was reported. For local transport updates, check [gtt.to.it](https://www.gtt.to.it/en/)."),

    h2("What the Italian government has said"),
    p("Prime Minister Giorgia Meloni addressed the violence in a statement reported widely on 18–19 October. She expressed solidarity with law enforcement, called on opposition leaders to condemn the violence, and noted — without details — that the government would meet to discuss the situation. She also acknowledged that the large majority of demonstrators had protested peacefully."),
    p("Deputy Prime Minister Matteo Salvini confirmed that his Lega party would reintroduce a bill requiring demonstration organisers to post financial bonds against property damage."),
    p("Education Minister Giuseppe Valditara stated that the government would seek legal compensation from those responsible for damaging school buildings in Turin."),
    p("The opposition has not uniformly condemned the protests. Several opposition politicians and union leaders drew a distinction between the grievances motivating peaceful demonstrators and the violence committed by a small minority."),
    p("CGIL leader Maurizio Landini, speaking after the 17 October rally in Rome, condemned the violence in Milan and other cities and called for restraint. The CGIL general strike announced for 20 November is a separate industrial action and is not, as of publication, connected to the weekend's demonstrations."),

    h2("What this means for visitors"),
    p("The demonstrations of 16–18 October have concluded. As of 19 October 2026, all three cities — Rome, Milan and Turin — are open and accessible. No long-term closures of transport networks, tourist attractions or city centres have been confirmed in connection with the protests."),
    p("Visitors should nonetheless:"),
    ul(
      "**Check local transport before travelling.** Strikes and industrial action are separate from protests and can be called with short notice. Use [scioperiitalia.it](https://scioperiitalia.it/en/) for the current national strike calendar, and individual city transport operators for service updates.",
      "**Monitor official municipal websites.** Rome (comune.roma.it), Milan (comune.milano.it), and Turin (comune.torino.it) publish notices when events or demonstrations affect access to specific areas.",
      "**Allow extra time if travelling during any announced future demonstration.** If you are in Rome on 30 October (USB general strike), check train and bus services the day before.",
      "**Follow instructions from local authorities.** If you encounter a police cordon, crowd management operation, or official barrier, comply with instructions from officers rather than trying to find a shortcut through an affected area.",
      "**Avoid active confrontations.** If a demonstration turns volatile in your vicinity, move calmly away from the crowd rather than staying to observe.",
      "**Contact your accommodation or transport provider directly** if you are concerned about a specific route, station or neighbourhood."
    ),
    note("Visiting Rome, Milan or Turin after the demonstrations poses no special risk that did not exist before the weekend. These are large, well-managed cities with extensive emergency services. The violence was localised and has ended. Describing these cities as unsafe for visitors would not be accurate."),

    h2("Upcoming strikes and demonstrations"),
    p("The following confirmed events were reported as of 19 October 2026. Verify each against current official sources before travelling."),
    table(
      ["Date", "Type", "Scope", "Source / Organiser"],
      [
        ["30 October 2026", "USB national general strike", "National — transport and other sectors likely affected; check individual operators", "USB union"],
        ["20 November 2026", "CGIL general strike", "National — announced from Rome rally; details not yet published", "CGIL (Maurizio Landini, 17 Oct 2026)"],
      ],
      "Source: reported by scioperiitalia.it and Italian media as of 19 October 2026. Strike details can change — verify with transport operators before travelling."
    ),
    p("No future protest marches in Rome, Milan or Turin have been confirmed through primary official or organiser sources as of the time of writing. Future demonstrations may be announced by student collectives, political groups or the Italia in Piazza movement. Check the sources listed below for updates."),

    h2("Where to check for updates"),
    ul(
      "**ANSA (English):** [ansa.it/english](https://www.ansa.it/english/) — Italy's primary national news agency; the most authoritative source for Italian events.",
      "**Strike calendar:** [scioperiitalia.it/en](https://scioperiitalia.it/en/) — national transport strike tracker.",
      "**Rome transport (ATAC):** [atac.roma.it](https://www.atac.roma.it/)",
      "**Milan transport (ATM):** [atm.it/en](https://www.atm.it/en/)",
      "**Turin transport (GTT):** [gtt.to.it/en](https://www.gtt.to.it/en/)",
      "**Trenitalia (trains):** [trenitalia.com](https://www.trenitalia.com/) — for national rail disruptions.",
      "**Municipality of Rome:** [comune.roma.it](https://www.comune.roma.it/)",
      "**Municipality of Milan:** [comune.milano.it](https://www.comune.milano.it/)",
      "**Municipality of Turin:** [comune.torino.it](https://www.comune.torino.it/)"
    ),
  ],

  faqs: [
    {
      question: "Why are people protesting in Italy in October 2026?",
      answer: "Several distinct groups have been demonstrating for different reasons. Students protested on 16 October over education policy (including a disputed school decree limiting non-Italian students in classes), housing costs, and demands for more education funding. The CGIL trade union led a constitutional rights and workers' demands rally in Rome on 17 October. Separately, the Italia in Piazza movement organized cost-of-living demonstrations in Milan, Turin and Bologna on 17–18 October, citing rising prices, fuel costs and tax burdens.",
    },
    {
      question: "What happened during the protests in Rome?",
      answer: "Rome saw a student march at the Ministry of Education on 16 October and a large CGIL-led rally (La Via Maestra) on 17 October. The student march saw police report bottles and flares thrown at officers. The CGIL rally was predominantly peaceful; organizers claimed 100,000 participants. CGIL leader Maurizio Landini announced a general strike for 20 November from the stage.",
    },
    {
      question: "Why did demonstrations escalate in Milan?",
      answer: "A cost-of-living march organized by the Italia in Piazza movement on 17 October began peacefully but a group of masked participants attacked police with stones and set up barricades. On 18 October, further clashes occurred near Piazza Duomo. Across both days, 17 people were arrested in Milan and dozens of businesses were damaged, with property damage estimated at over €500,000 by the Confcommercio retail federation. The causes of the underlying protest — rising living costs — were acknowledged by the city's mayor, but the violence was condemned by officials across the political spectrum.",
    },
    {
      question: "What were students demanding in Turin?",
      answer: "Student protesters in Turin focused on education policy, particularly a government decree setting a 30 per cent cap on certain categories of non-Italian students in individual classes. They also raised housing and living costs for students, and called for more public spending on education rather than the military. Clashes with police occurred at Piazza Castello on 16 October.",
    },
    {
      question: "Are protests currently happening in Rome, Milan or Turin?",
      answer: "As of 19 October 2026 at 11:00 CEST, no active demonstrations are taking place in these cities. The weekend's demonstrations have concluded. Check the sources listed in this article for the most current information.",
    },
    {
      question: "Is public transport affected?",
      answer: "A transport strike in Lazio (Bus International Service, 08:30–12:30) on 19 October has now ended. A USB national general strike is scheduled for 30 October and a CGIL strike for 20 November — both will likely affect public transport. Check scioperiitalia.it and individual city operators before travelling.",
    },
    {
      question: "Is it safe to visit Rome, Milan or Turin?",
      answer: "Yes. The demonstrations of 16–18 October have ended, and no police operations or area closures related to the protests remain in effect as of 19 October. These cities are operating normally. Exercise the same common-sense precautions you would on any city visit: be aware of your surroundings, and move away from any large gathering if it shows signs of becoming volatile.",
    },
    {
      question: "Where can visitors check for new demonstrations and travel disruption?",
      answer: "For strikes: scioperiitalia.it/en (national strike calendar). For city transport: ATAC (Rome), ATM (Milan), GTT (Turin), Trenitalia (national rail). For local notices: comune.roma.it, comune.milano.it, comune.torino.it. For news: ansa.it/english.",
    },
  ],

  sources: [
    {
      label: "France 24 / AFP — Italian students protest (16 Oct 2026)",
      url: "https://www.france24.com/en/live-news/20261016-italy-braces-for-autumn-of-discontent-as-students-protest",
      note: "AFP wire report on 16 October student demonstrations. Checked 19 October 2026.",
    },
    {
      label: "Al Jazeera — cost-of-living protests across Europe including Milan (17 Oct 2026)",
      url: "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france",
      note: "Report on Milan march turning violent, with water cannons and looting. Checked 19 October 2026.",
    },
    {
      label: "The Chronicle PH / Sky TG24 — 28 arrested, 141 police injured (19 Oct 2026)",
      url: "https://thechronicle.com.ph/28-arrested-141-police-officers-injured-in-violent-cost-of-living-protests-in-italy/",
      note: "Crowd and casualty figures for Milan, Turin and Bologna; quotes from Meloni, Sala, Lepore. Checked 19 October 2026.",
    },
    {
      label: "US News / Reuters — Milan police clash with protesters, second day (18 Oct 2026)",
      url: "https://www.usnews.com/news/world/articles/2026-10-18/milan-police-clash-with-protesters-on-second-day-of-unrest",
      note: "Reuters report on Sunday 18 October violence in Milan. Checked 19 October 2026.",
    },
    {
      label: "Agencia Nova — 40 identified, one arrested in Turin student occupations",
      url: "https://www.agenzianova.com/en/news/Turin%3A-40-identified-and-one-arrested-in-student-occupations/",
      note: "Figures for Turin school occupations and arrests. Checked 19 October 2026.",
    },
    {
      label: "scioperiitalia.it — Italy transport strike calendar",
      url: "https://scioperiitalia.it/en/",
      note: "Current national strike listings including 30 October USB strike. Checked 19 October 2026.",
    },
    {
      label: "EADaily — mass protests spread from France to Italy (18 Oct 2026)",
      url: "https://eadaily.com/en/news/2026/10/18/mass-protests-spread-from-france-to-italy",
      note: "Overview of the European context; used for context only — primary facts cross-checked with wire sources.",
    },
    {
      label: "Yeni Safak — Italian students stage No Meloni Day protests",
      url: "https://en.yenisafak.com/world/italian-students-stage-no-meloni-day-protests-against-government-3724517",
      note: "Details on the school decree and student demands. Checked 19 October 2026.",
    },
    {
      label: "Il Manifesto — CGIL joins students; Landini announces November strike",
      url: "https://ilmanifesto.it/sciopero-generale-la-cgil-si-unisce-agli-studenti-in-lotta",
      note: "Italian-language report on CGIL rally and November 20 general strike announcement.",
    },
  ],

  sourcesTitle: "Sources and verification log",
};
