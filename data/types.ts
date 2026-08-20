export type ProjectClassification =
  | "PAID_CLIENT_PRODUCTION"
  | "PAID_CLIENT_IN_DEVELOPMENT"
  | "INTERNAL_PRODUCT"
  | "PUBLIC_PRODUCT"
  | "CLIENT_WEBSITE"
  | "OTHER_PROJECT"

export interface ProjectItem {
  id: string
  name: string
  category: string
  type: ProjectClassification
  typeLabel: string
  statusText: string
  summary: string
  scopeHighlights: string[]
  technologies: string[]
  liveUrl?: string
  repositoryUrl?: string
  role: string
  client?: string
  image?: string
  isFlagship: boolean
  isClientWebsite?: boolean
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  isLeadership?: boolean
  responsibilities: string[]
  technologies?: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export interface ProfileData {
  name: string
  preferredName: string
  title: string
  email: string
  phone: string
  linkedin: string
  github: string
  portfolioUrl: string
  shortPositioning: string
  shortIntro: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
