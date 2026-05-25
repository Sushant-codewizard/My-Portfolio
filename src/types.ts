export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  tech: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  doodleType: 'neural' | 'api' | 'crypto' | 'database';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gradeName: string;
  gradeValue: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  badge?: string;
}

export interface ContactInfo {
  linkedin: string;
  github: string;
  email: string;
  phone: string;
}
