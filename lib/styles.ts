import { CategoryType, StyleConfig } from '@/types'
import { BriefcaseIcon, HeartHandshakeIcon, GraduationCapIcon, BookOpenIcon } from 'lucide-react'
import { CATEGORIES } from '@/constants'

export const getCategoryStyle = (category: CategoryType): StyleConfig => {
  switch (category) {
    case CATEGORIES.WORK:
      return {
        text: 'text-forest-green',
        background: 'bg-forest-green/10',
        icon: BriefcaseIcon
      }
    case CATEGORIES.BEYOND_WORK:
      return {
        text: 'text-sage-green',
        background: 'bg-sage-green/10',
        icon: HeartHandshakeIcon
      }
    case CATEGORIES.EDUCATION:
      return {
        text: 'text-muted-terracotta',
        background: 'bg-muted-terracotta/10',
        icon: GraduationCapIcon
      }
    case CATEGORIES.CONTINUOUS_LEARNING:
      return {
        text: 'text-sage-green',
        background: 'bg-sage-green/10',
        icon: BookOpenIcon
      }
    default:
      return {
        text: 'text-gray-600',
        background: 'bg-gray-100',
        icon: BriefcaseIcon
      }
  }
} 