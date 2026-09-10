export type SkillGroup = {
  title: string;
  items: string[];
};

export type RolePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
    logo: string;
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
  // A simple-icons slug, or a path under /logos for brands the library lacks.
  logo: string;
  photos: RolePhoto[];
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
  imageWidth: number;
  imageHeight: number;
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
  imageWidth: number | null;
  imageHeight: number | null;
};
