import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

export type CategoryType = 'all' | 'work' | 'beyond-work' | 'education' | 'continuous-learning'

export type TimelineItem = {
  startDate: string
  endDate: string
  organization: string
  role: string
  description: string
  category: CategoryType
  details?: string[]
}

export type ChipProps = {
  children: ReactNode
}

export type CardProps = {
  className?: string
  children: ReactNode
}

export interface StyleConfig {
  text: string
  background: string
  icon: LucideIcon
}

export interface RelatedLink {
  name: string;
  url: string;
}