import type {
  Award,
  Certification,
  Experience,
  PlatformTool,
  Profile,
  SkillGroup,
} from "@/types";

export const profile: Profile = {
  name: "Sunichaya Petcharoen",
  headline: "Performance Marketing & Ads Optimization",
  status: "Open to new opportunities",
  location: "Bangkok, TH",
  intro:
    "I plan and optimize paid media across Meta, Google and TikTok Ads for THE STANDARD's editorial outlets, flagship events and client projects — from the media plan and KPI forecast through to the reporting that closes the loop.",
  summary:
    "I'm an Ads Optimizer at THE STANDARD, owning media planning and paid buying across every outlet in the group, its flagship events and client projects. Before that I ran high-volume campaign operations at TikTok Shop Thailand, and built my analytics and tracking foundations as a Performance Marketing Intern at LINE, reporting straight to C-level stakeholders.",
  strengths: [
    "Multi-channel campaign ops across TikTok, Meta, YouTube & LINE Ads",
    "Hands-on with GA4, GTM & Looker Studio for tracking and reporting",
    "Turning raw funnel data into dashboards stakeholders actually use",
    "Cross-functional coordination with agencies, vendors & creator teams",
  ],
  interests:
    "Looking for Performance Marketing or Marketing Technology roles where I can own measurement, reporting automation, and campaign strategy end-to-end.",
  education: {
    logo: "/logos/swu.png",
    degree: "B.B.A., Marketing",
    school: "Srinakharinwirot University",
    period: "2021–2025",
    note: "GPAX 3.59, Second Class Honors",
  },
  email: "Sunichaya.petch@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunichaya-petcharoen-99b5a5373/",
  github: null,
  languages: "Thai (Native), English (B1)",
};

export const experiences: Experience[] = [
  {
    role: "Ads Optimizer — Digital Platform Management",
    company: "THE STANDARD",
    period: "Apr 2026 — Present",
    responsibilities: [
      "Build online advertising strategy and media plans across Meta Ads, TikTok Ads, YouTube Ads and Google Ads — selecting platforms, objectives and flight durations, allocating budget, designing audiences, and forecasting KPI targets for both client and in-house projects",
      "Run media buying end to end against plan: campaign setup, testing, optimization and KPI analysis, monitoring delivery to hit target results",
      "Analyze performance data and build reports to present results and hand work over to stakeholders",
      "Built six AI agent workflows across Supermetrics, Lark Base, Trello and Google Slides that reconcile campaign data between the ad platforms and the team tracker, forecast media estimates from historical performance, and draft report summaries — reconciling 50–150+ campaigns per event and cutting a reporting cycle that ran several hours down to under one",
      "Designed and own the shared campaign tracker those workflows write into — now the single source of truth for campaign spend and delivery status, used day to day across four teams — marketing, accounting, sales and interns",
      "Own paid media across all eight THE STANDARD outlets — THE STANDARD, THE SECRET SAUCE, THE STANDARD WEALTH, THE STANDARD SPORT, THE STANDARD LIFE, THE STANDARD POP, KND and THE STANDARD PODCAST",
      "Run advertising for flagship events including ALPHA SKILLS SUMMIT, THE SECRET SAUCE Business Weekend Isan, THE SECRET SAUCE Summit 2026 and THE STANDARD ECONOMIC FORUM 2026",
      "Track platform and trend updates across Facebook, Instagram, TikTok, YouTube and Google to keep buying strategy current",
    ],
    logo: "/logos/the-standard.png",
    photos: [],
  },
  {
    role: "Marketing Communication Associate",
    company: "TikTok Shop Thailand (ByteDance)",
    period: "Sep 2025 — Mar 2026",
    responsibilities: [
      "Ran multi-channel campaign operations and asset deployment across TikTok, YouTube, Pangle, Programmatic and Meta — hundreds of creatives, coordinating internal teams, agencies and vendors for on-time launches",
      "Managed campaign trafficking and tracking-link preparation on structured UTM frameworks, keeping attribution and deep linking accurate",
      "Built automated Excel dashboards consolidating Impressions, Clicks, CPM, CPC, CPPV, ROAS and GMV, improving reporting efficiency and stakeholder visibility",
      "Consolidated upper- and lower-funnel data from agencies and internal systems for performance monitoring and campaign reporting",
      "Ran pre-launch QA on creatives and ad copy against platform specifications and brand guidelines, and reviewed agency deliverables and invoices for accuracy",
      "Supported on-ground operations for the POC campaign team at TikTok Shop Awards 2026",
    ],
    logo: "tiktok",
    photos: [
      {
        src: "/photos/tiktok-awards-stage.jpg",
        alt: "Sunichaya on stage at the TikTok Shop Awards 2026 event in Bangkok",
        width: 975,
        height: 1300,
      },
      {
        src: "/photos/tiktok-new-year-2026.jpg",
        alt: "The TikTok Shop Thailand team at the Happy New Year 2026 celebration",
        width: 1101,
        height: 1300,
      },
      {
        src: "/photos/tiktok-awards-2026.jpg",
        alt: "Sunichaya and her team on stage at the TikTok Shop Awards 2026 event",
        width: 1200,
        height: 900,
      },
      {
        src: "/photos/tiktok-team.jpg",
        alt: "Sunichaya with the wider marketing team at the TikTok Shop Thailand office",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    role: "Performance Marketing Intern",
    company: "LINE Company Thailand — LINE Rookie",
    period: "May 2025 — Aug 2025",
    responsibilities: [
      "Executed paid media on LINE Ads for LINE Health and the LINE 14th Anniversary Greeting Card, against awareness and engagement objectives",
      "Implemented ad tracking for LINE Health and contributed to GTM setup for LINE Family Club, working alongside senior team members and developers to keep measurement and attribution accurate",
      "Monitored performance in GA4 and prepared structured reports on key metrics, trends and insights for the Business Team",
      "Built custom Looker Studio dashboards to automate data consolidation and improve reporting visibility",
      "Analyzed performance data to identify efficiency and conversion improvements",
      "Coordinated with external agencies across LINE Health, LINE Family Club, LINE Career and LINE Cooperative Program 2025 — reviewing proposals and supporting quotation and PO processes",
    ],
    logo: "line",
    photos: [
      {
        src: "/photos/line-cafe.jpg",
        alt: "Sunichaya beside a giant Brown character at LINE Cafe inside the LINE Thailand office",
        width: 900,
        height: 1200,
      },
      {
        src: "/photos/line-rookie-team.jpg",
        alt: "The LINE Rookie cohort gathered in the LINE Thailand office",
        width: 1200,
        height: 800,
      },
      {
        src: "/photos/line-rookie-group.jpg",
        alt: "LINE Rookie interns and staff at the end-of-programme group photo",
        width: 1200,
        height: 800,
      },
      {
        src: "/photos/line-cafe-team.jpg",
        alt: "Sunichaya and colleagues beside the giant Brown character at LINE Cafe",
        width: 1300,
        height: 1074,
      },
    ],
  },
];

export const platformTools: PlatformTool[] = [
  { name: "Meta Ads", icon: "meta" },
  { name: "Google Ads", icon: "googleads" },
  { name: "TikTok Ad Manager", icon: "tiktok" },
  { name: "LINE Ads", icon: "line" },
  { name: "Google Analytics", icon: "googleanalytics" },
  { name: "Google Tag Manager", icon: "googletagmanager" },
  { name: "Google Looker Studio", icon: "looker" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Paid Media & Buying",
    items: [
      "Google Performance Max",
      "TikTok GMV Max",
      "Meta Business Suite",
      "Google Ads Editor",
      "Search Engine Marketing (SEM)",
      "Media Planning",
      "Media Optimization",
    ],
  },
  {
    title: "Measurement & Reporting",
    items: [
      "Media Tracking",
      "Performance Reporting",
      "YouTube Analytics",
      "Data Analysis",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Agentic AI",
      "AI Agent Workflows",
      "Prompt Engineering",
      "Claude Code",
      "N8N Workflow Automation",
      "Workflow Automation",
      "Reporting Automation",
      "Data Reconciliation",
      "Automation Dashboard",
      "Scheduled Automation",
    ],
  },
  {
    title: "Strategy & Research",
    items: [
      "Marketing Strategy",
      "Marketing Plan",
      "Marketing Research",
      "Consumer Insight",
      "Research Skills",
      "Digital Marketing",
      "Online Marketing",
      "Multimedia Marketing Campaigns",
    ],
  },
  {
    title: "Collaboration & Tools",
    items: [
      "KOL Management",
      "Social Listening",
      "Account Management",
      "Messaging API",
      "Basic HTML",
      "Basic JavaScript",
      "Google Workspace",
      "Microsoft Office",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google x Coursera",
    year: "2023",
    category: "Digital Marketing",
    image: "/certificates/foundations-digital-marketing.jpg",
    imageWidth: 1000,
    imageHeight: 772,
  },
  {
    name: "Attract and Engage Customers with Digital Marketing",
    issuer: "Google x Coursera",
    year: "2023",
    category: "Digital Marketing",
    image: "/certificates/attract-engage-customers.jpg",
    imageWidth: 1000,
    imageHeight: 772,
  },
  {
    name: "From Likes to Leads: Interact with Customers Online",
    issuer: "Google x Coursera",
    year: "2023",
    category: "Digital Marketing",
    image: "/certificates/likes-to-leads.jpg",
    imageWidth: 1000,
    imageHeight: 772,
  },
  {
    name: "Effective Data Storytelling",
    issuer: "Skooldio",
    year: "2025",
    category: "Marketing Strategy & Data",
    image: "/certificates/effective-data-storytelling.jpg",
    imageWidth: 1000,
    imageHeight: 744,
  },
  {
    name: "Marketing Trainee 37th",
    issuer: "Marketing Association of Thailand",
    year: "2024",
    category: "Marketing Strategy & Data",
    image: "/certificates/marketing-trainee-37.jpg",
    imageWidth: 1000,
    imageHeight: 794,
  },
  {
    name: "NFT: A New Approach to Marketing Strategy",
    issuer: "Bitkub Academy × Chulalongkorn University",
    year: "2023",
    category: "Marketing Strategy & Data",
    image: "/certificates/nft-marketing-strategy.jpg",
    imageWidth: 1000,
    imageHeight: 705,
  },
  {
    name: "Demographic Disruption and Business",
    issuer: "CHULA MOOC × Sasin",
    year: "2022",
    category: "Business Foundations",
    image: "/certificates/demographic-disruption.jpg",
    imageWidth: 1000,
    imageHeight: 701,
  },
  {
    name: "Critical Thinking for Business",
    issuer: "CHULA MOOC",
    year: "2022",
    category: "Business Foundations",
    image: "/certificates/critical-thinking-business.jpg",
    imageWidth: 1000,
    imageHeight: 701,
  },
];

export const awards: Award[] = [
  {
    title: "LINE Thailand Business Case Competition",
    tools: "LINE Shopping · Case Strategy · Team Leadership",
    objective:
      "Develop and present a business case solution for LINE Shopping, run as part of LINE Thailand's LINE Rookie program.",
    role: "Co-led a team through problem framing, research and solution design across the competition rounds.",
    metrics: [{ value: "Winner", label: "Placement" }],
    image: "/projects/line-award.jpg",
    imageWidth: 1100,
    imageHeight: 733,
    imageAlt:
      "Sunichaya and her team holding their prizes at the LINE Rookie award presentation",
  },
  {
    title: "J-MAT Award 33rd",
    tools: "Marketing Strategy · Case Analysis · Team Leadership",
    objective:
      "Compete in Thailand's national marketing case competition against 257 university teams.",
    role: "Co-led the team's case analysis and strategic recommendation through multiple rounds of judging.",
    metrics: [{ value: "Top 7", label: "Placement" }],
    image: "/projects/jmat-award.jpg",
    imageWidth: 1000,
    imageHeight: 793,
    imageAlt: "Certificate for the J-MAT Award 33rd competition",
  },
  {
    title: "TRUE Dummy Company Program",
    tools: "Business Simulation · Strategic Planning",
    objective:
      "Compete in TRUE's simulated company program, run on business strategy and execution across a series of rounds.",
    role: null,
    metrics: [{ value: "Top 6", label: "Placement" }],
    image: "/projects/true-award.jpg",
    imageWidth: 1000,
    imageHeight: 707,
    imageAlt: "Honorable mention certificate from the TRUE Dummy Company Program",
  },
];
