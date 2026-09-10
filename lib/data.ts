import type {
  Certification,
  Experience,
  Profile,
  Project,
  SkillGroup,
} from "@/types";

export const profile: Profile = {
  name: "Sunichaya Petcharoen",
  headline: "Marketing Communications & Performance Marketing",
  status: "Open to new opportunities",
  location: "Bangkok, TH",
  intro:
    "I run multi-channel campaign operations at TikTok Shop Thailand and build the tracking and dashboards behind them — from UTM-tagged media plans to reporting that stakeholders actually use.",
  summary:
    "I'm a Marketing Communications Associate at TikTok Shop Thailand, running high-volume campaign operations across TikTok, Meta, YouTube, Pangle and Programmatic. Before that, I built my analytics and paid media foundations as a Performance Marketing Intern at LINE, where I set up tracking and reported straight to C-level stakeholders.",
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
  linkedin: null,
  github: null,
  languages: "Thai (Native), English (B1)",
};

export const experiences: Experience[] = [
  {
    role: "Marketing Communication Associate",
    company: "TikTok Shop Thailand (ByteDance)",
    period: "Sep 2025 — Present",
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

export const skillGroups: SkillGroup[] = [
  { label: "Campaign Operations & Marketing Communications", level: 90 },
  { label: "Paid Media — Meta, Google, TikTok & LINE Ads", level: 82 },
  { label: "Analytics & Tracking — GA4, GTM, Looker Studio", level: 88 },
];

export const tools: string[] = [
  "Google Analytics 4",
  "Google Tag Manager",
  "Google Looker Studio",
  "Meta Ads Manager",
  "Google Ads",
  "Google Adwords Editor",
  "TikTok Ads Manager",
  "LINE Ads Platform",
  "Social Listening (Zanroo)",
  "Microsoft Excel",
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
  },
  {
    name: "Attract and Engage Customers with Digital Marketing",
    issuer: "Google x Coursera",
    year: "2023",
    url: "https://coursera.org/verify/TYZACZHB6SHK",
  },
  {
    name: "From Likes to Leads: Interact with Customers Online",
    issuer: "Google x Coursera",
    year: "2023",
    url: "https://coursera.org/verify/Y5DV2JLTT9B8",
  },
  {
    name: "Effective Data Storytelling",
    issuer: "Skooldio",
    year: "2025",
    url: "https://drive.google.com/file/d/1WUaCj0PiA_h5qpgKX1cZtNiFNNDyWaaO/view",
  },
  {
    name: "Marketing Trainee 37th",
    issuer: "Marketing Association of Thailand",
    year: "2024",
    url: "https://drive.google.com/file/d/1xL2_6mjgJoLDqvc65HDyjTOJR-EW91uj/view",
  },
  {
    name: "NFT: A New Approach to Marketing Strategy",
    issuer: "Bitkub Academy × Chulalongkorn University",
    year: "2023",
    url: "https://drive.google.com/file/d/1FolqVhcNwvGWjHAqWPuz5xvB19sZwHoj/view",
  },
  {
    name: "Demographic Disruption and Business",
    issuer: "CHULA MOOC × Sasin",
    year: "2022",
    url: "https://drive.google.com/file/d/15Ir-L6k1SEeUmtAeyeHTn-lDUilCwbi5/view",
  },
  {
    name: "Critical Thinking for Business",
    issuer: "CHULA MOOC",
    year: "2022",
    url: "https://drive.google.com/file/d/1yq2Yi-6NqNPr4mAsAEMD2tfToPWsezdQ/view",
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
