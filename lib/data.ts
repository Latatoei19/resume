import type {
  Certification,
  Experience,
  Photo,
  PlatformTool,
  Profile,
  Project,
  SkillArea,
} from "@/types";

export const profile: Profile = {
  name: "Sunichaya Petcharoen",
  headline: "Performance Marketing & Ads Optimization",
  status: "Open to new opportunities",
  location: "Bangkok, TH",
  intro:
    "I plan and optimize paid media across Meta, TikTok, YouTube and Google Ads for THE STANDARD's editorial outlets and flagship events — from the media plan and KPI forecast through to the reporting that closes the loop.",
  summary:
    "I'm an Ads Optimizer at THE STANDARD, owning media planning and paid buying across every outlet in the group and its flagship events. Before that I ran high-volume campaign operations at TikTok Shop Thailand, and built my analytics and tracking foundations as a Performance Marketing Intern at LINE, reporting straight to C-level stakeholders.",
  strengths: [
    "Multi-channel campaign ops across TikTok, Meta, YouTube & LINE Ads",
    "Hands-on with GA4, GTM & Looker Studio for tracking and reporting",
    "Turning raw funnel data into dashboards stakeholders actually use",
    "Cross-functional coordination with agencies, vendors & creator teams",
  ],
  interests:
    "Looking for Performance Marketing or Marketing Technology roles where I can own measurement, reporting automation, and campaign strategy end-to-end.",
  education: {
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
      "Own paid media across all eight THE STANDARD outlets — THE STANDARD, THE Secret Sauce, THE STANDARD WEALTH, THE STANDARD SPORT, THE STANDARD LIFE, THE STANDARD POP, KND and THE STANDARD Podcast",
      "Run advertising for flagship events including Alpha Skill (internal), The Secret Sauce Business Weekend Isan, The Secret Sauce Summit 2026 and Economic Forum 2026",
      "Track platform and trend updates across Facebook, Instagram, TikTok, YouTube and Google to keep buying strategy current",
    ],
    badge: "8 outlets · 4 flagship events",
  },
  {
    role: "Marketing Communication Associate",
    company: "TikTok Shop Thailand (ByteDance)",
    period: "Sep 2025 — Mar 2026",
    responsibilities: [
      "Manage high-volume campaign operations and asset deployment — hundreds of creatives across multiple campaigns — coordinating internal teams, agencies and vendors for on-time, multi-channel launches",
      "Built automated Excel dashboards tracking Impressions, Clicks, CPM, CPC, CPPV, CPUV, ROAS and GMV, improving reporting efficiency for stakeholders",
      "Consolidate upper- and lower-funnel performance data via UTM tracking, delivering insights to Online, Social and Creator Marketing teams",
      "Handle campaign trafficking and deployment across TikTok, YouTube, Pangle, Programmatic and Meta",
    ],
    badge: "6 paid channels · multi-channel ops",
  },
  {
    role: "Performance Marketing Intern",
    company: "LINE Company Thailand — LINE Rookie",
    period: "May 2025 — Aug 2025",
    responsibilities: [
      "Implemented and managed media tracking using GA4, GTM, LINE Tags, LINE Custom Conversions and Meta Pixel for accurate attribution",
      "Designed and maintained Looker Studio dashboards on user behavior and conversion flow, reporting to internal stakeholders and C-level executives",
      "Executed and optimized paid media on LINE Ads for LINE Health and Greeting Cards",
      "Reviewed influencer profiles and content with agencies and KOLs to maintain brand consistency",
    ],
    badge: "Reported to C-level",
  },
];

export const photos: Photo[] = [
  {
    src: "/photos/tiktok-shop-office.jpg",
    alt: "Sunichaya standing beside the illuminated TikTok logo at the TikTok Shop Thailand office",
    caption: "TikTok Shop Thailand",
  },
  {
    src: "/photos/line-cafe.jpg",
    alt: "Sunichaya beside a giant Brown character at LINE Cafe inside the LINE Thailand office",
    caption: "LINE Cafe, LINE Thailand",
  },
];

export const skillAreas: SkillArea[] = [
  {
    title: "Paid Media & Buying",
    items: [
      "Media planning",
      "Budget allocation & pacing",
      "Audience design",
      "KPI forecasting",
      "Campaign setup & optimization",
      "Creative & ad copy QA",
      "Campaign trafficking",
    ],
  },
  {
    title: "Analytics & Tracking",
    items: [
      "GA4 implementation",
      "Google Tag Manager",
      "UTM tracking & attribution",
      "Looker Studio dashboards",
      "Meta Pixel",
      "LINE Tags & Custom Conversions",
      "Performance reporting",
    ],
  },
  {
    title: "Campaign Operations",
    items: [
      "Multi-channel launch management",
      "Asset & creative deployment",
      "Agency & vendor coordination",
      "Quotation & budget reconciliation",
      "Cross-team stakeholder reporting",
    ],
  },
];

export const platformTools: PlatformTool[] = [
  { name: "Meta Ads Manager", icon: "meta" },
  { name: "Google Ads", icon: "googleads" },
  { name: "TikTok Ads Manager", icon: "tiktok" },
  { name: "LINE Ads Platform", icon: "line" },
  { name: "Google Analytics 4", icon: "googleanalytics" },
  { name: "Google Tag Manager", icon: "googletagmanager" },
  { name: "Looker Studio", icon: "looker" },
];

export const supportTools: string[] = [
  "Google Adwords Editor",
  "Microsoft Excel",
  "Social Listening (Zanroo)",
  "Canva",
  "CapCut",
  "Basic HTML/JavaScript",
];

export const certifications: Certification[] = [
  {
    name: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google x Coursera",
    year: "2023",
    url: "https://coursera.org/verify/ZYBWFSBPTTC6",
    category: "Digital Marketing",
    image: "/certificates/foundations-digital-marketing.jpg",
  },
  {
    name: "Attract and Engage Customers with Digital Marketing",
    issuer: "Google x Coursera",
    year: "2023",
    url: "https://coursera.org/verify/TYZACZHB6SHK",
    category: "Digital Marketing",
    image: "/certificates/attract-engage-customers.jpg",
  },
  {
    name: "From Likes to Leads: Interact with Customers Online",
    issuer: "Google x Coursera",
    year: "2023",
    url: "https://coursera.org/verify/Y5DV2JLTT9B8",
    category: "Digital Marketing",
    image: "/certificates/likes-to-leads.jpg",
  },
  {
    name: "Effective Data Storytelling",
    issuer: "Skooldio",
    year: "2025",
    url: "https://drive.google.com/file/d/1WUaCj0PiA_h5qpgKX1cZtNiFNNDyWaaO/view",
    category: "Marketing Strategy & Data",
    image: "/certificates/effective-data-storytelling.jpg",
  },
  {
    name: "Marketing Trainee 37th",
    issuer: "Marketing Association of Thailand",
    year: "2024",
    url: "https://drive.google.com/file/d/1xL2_6mjgJoLDqvc65HDyjTOJR-EW91uj/view",
    category: "Marketing Strategy & Data",
    image: "/certificates/marketing-trainee-37.jpg",
  },
  {
    name: "NFT: A New Approach to Marketing Strategy",
    issuer: "Bitkub Academy × Chulalongkorn University",
    year: "2023",
    url: "https://drive.google.com/file/d/1FolqVhcNwvGWjHAqWPuz5xvB19sZwHoj/view",
    category: "Marketing Strategy & Data",
    image: "/certificates/nft-marketing-strategy.jpg",
  },
  {
    name: "Demographic Disruption and Business",
    issuer: "CHULA MOOC × Sasin",
    year: "2022",
    url: "https://drive.google.com/file/d/15Ir-L6k1SEeUmtAeyeHTn-lDUilCwbi5/view",
    category: "Business Foundations",
    image: "/certificates/demographic-disruption.jpg",
  },
  {
    name: "Critical Thinking for Business",
    issuer: "CHULA MOOC",
    year: "2022",
    url: "https://drive.google.com/file/d/1yq2Yi-6NqNPr4mAsAEMD2tfToPWsezdQ/view",
    category: "Business Foundations",
    image: "/certificates/critical-thinking-business.jpg",
  },
];

export const projects: Project[] = [
  {
    title: "LINE Thailand Business Case Competition",
    tools: "LINE Shopping · Case Strategy · Team Leadership",
    objective:
      "Develop and present a business case solution for LINE Shopping as part of LINE Thailand's national case competition.",
    role: "Co-led a team through problem framing, research and solution design across the competition rounds.",
    metrics: [
      { value: "Winner", label: "Placement" },
      { value: "Co-Lead", label: "Role" },
      { value: "National", label: "Scope" },
    ],
    certificateUrl: null,
  },
  {
    title: "J-MAT Award 33rd",
    tools: "Marketing Strategy · Case Analysis · Team Leadership",
    objective:
      "Compete in Thailand's national marketing case competition against 257 university teams.",
    role: "Co-led the team's case analysis and strategic recommendation through multiple rounds of judging.",
    metrics: [
      { value: "Top 7", label: "Placement" },
      { value: "257", label: "Teams" },
      { value: "H.M.", label: "Honorable Mention" },
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1hiwpJrvpPUjjxM-fGhKdW5JnsCCwOTur/view",
  },
  {
    title: "TRUE Dummy Company Program",
    tools: "Business Simulation · Strategic Planning",
    objective:
      "Compete in TRUE's simulated company program, run on business strategy and execution across a series of rounds.",
    role: null,
    metrics: [
      { value: "Top 6", label: "Placement" },
      { value: "Finalist", label: "Result" },
      { value: "H.M.", label: "Honorable Mention" },
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1kTZ81s4_zcQjt7xILy_bmPauCFA2pMHF/view",
  },
];
