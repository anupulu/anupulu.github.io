export const CATEGORIES = {
  ALL: 'all',
  WORK: 'work',
  BEYOND_WORK: 'beyond-work',
  EDUCATION: 'education',
  CONTINUOUS_LEARNING: 'continuous-learning'
} as const

export const COLORS = {
  FOREST_GREEN: '#2C5530',
  SAGE_GREEN: '#687864',
  MUTED_TERRACOTTA: '#C17C74',
  TEXT_DARK: '#2A2B2A',
  SOFT_CREAM: '#F7F7F2'
} as const

export const CATEGORY_LABELS = {
  [CATEGORIES.ALL]: 'All',
  [CATEGORIES.WORK]: 'Work',
  [CATEGORIES.BEYOND_WORK]: 'Beyond Work',
  [CATEGORIES.EDUCATION]: 'Education',
  [CATEGORIES.CONTINUOUS_LEARNING]: 'Learning Journey'
} as const 