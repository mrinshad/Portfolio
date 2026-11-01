export type ProjectStatus =
  | "in-production"
  | "internal"
  | "in-development"
  | "public"

export interface CaseStudyNote {
  label: string
  body: string
}

export interface ProjectItem {
  id: string
  index: string
  name: string
  category: string
  status: ProjectStatus
  statusText: string
  year: string
  client?: string
  summary: string
  lede: string
  role: string
  scope: string[]
  notes: CaseStudyNote[]
  technologies: string[]
  liveUrl?: string
  image: string
  images: string[]
  isFlagship: boolean
  isClientWebsite?: boolean
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  points: string[]
  technologies: string[]
  isLeadership?: boolean
}

export interface SkillGroup {
  index: string
  title: string
  note: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
}
