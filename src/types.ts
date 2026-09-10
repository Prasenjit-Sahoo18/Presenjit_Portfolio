// Shared TypeScript types for the portfolio

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  featured: boolean;
  theme: 'cinema' | 'code';
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  program: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Achievement {
  id: number;
  title: string;
  event: string;
  description: string;
  badge?: string;
  icon: string;
  rank: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  fullName: string;
  color: string;
  icon: string;
}

export interface Extracurricular {
  id: number;
  role: string;
  organization: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  cgpa: string;
  status: string;
}
