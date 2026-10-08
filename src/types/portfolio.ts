export interface LinkConfig {
  label: string
  href: string
  configured: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  role: string
  period: string
  industry?: string
  overview: string
  responsibilities: string[]
  technologies: string[]
  practices?: string[]
  frontend?: string[]
  backend?: string[]
  database?: string[]
  architecture?: string[]
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface PersonalProject {
  name: string
  description: string
  technologies: string[]
  image?: string
  challenges: string[]
  features: string[]
}

export type ProjectStatus =
  | 'Active'
  | 'Active Development'
  | 'In Development'
  | 'Paused'
  | 'Released / Maintained'
  | 'Archived'
  | 'Open Source'

export interface EngineeringProject {
  id: string
  name: string
  alternateName?: string
  status: ProjectStatus
  type: string
  role: string
  description: string
  implemented: string[]
  challenges: string[]
  technologies: string[]
  architecture?: string[]
  planned?: string[]
  githubUrl?: string
  demoUrl?: string
}
