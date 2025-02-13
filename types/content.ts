export interface LearningFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  image?: {
    url: string
    alt: string
    caption?: string
  }
  relatedLinks?: Array<{
    title: string
    url: string
    description?: string
  }>
  relatedManifestoPrinciples?: string[]
}

export interface Learning {
  slug: string
  frontmatter: LearningFrontmatter
  content: string
} 