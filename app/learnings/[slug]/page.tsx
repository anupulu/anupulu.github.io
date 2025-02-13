import { allLearnings } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { LearningContent } from '@/components/learning-content'
import { format } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'

// Generate static routes at build time
export function generateStaticParams() {
  return allLearnings.map((post) => ({
    slug: post.slug,
  }))
}

// Server component for static generation
export default function LearningPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const learning = allLearnings.find((l) => l.slug === params.slug)

  if (!learning) {
    notFound()
  }

  const MDXContent = useMDXComponent(learning.body.code)

  return (
    <main className="min-h-screen">
      <LearningContent 
        frontmatter={{
          title: learning.title,
          date: format(new Date(learning.date), 'yyyy-MM-dd'),
          description: learning.description,
          tags: learning.tags,
          image: learning.image,
          relatedLinks: learning.relatedLinks?.map(link => ({
            title: link.title || link.name,
            url: link.url,
            description: link.description
          })),
          relatedManifestoPrinciples: learning.relatedManifestoPrinciples
        }}
      >
        <MDXContent />
      </LearningContent>
    </main>
  )
}