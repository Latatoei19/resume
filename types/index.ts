export type Profile = {
  name: string;
  headline: string;
  status: string;
  location: string;
  intro: string;
  summary: string;
  strengths: string[];
  interests: string;
  education: {
    degree: string;
    school: string;
    period: string;
    note: string;
  };
  email: string;
  linkedin: string | null;
  github: string | null;
  languages: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  badge: string;
  photo: string | null;
  photoAlt: string | null;
};

export type SkillArea = {
  title: string;
  items: string[];
};

export type PlatformTool = {
  name: string;
  icon: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  category: string;
  image: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  tools: string;
  objective: string;
  role: string | null;
  metrics: Metric[];
  image: string | null;
  imageAlt: string | null;
};
