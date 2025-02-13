'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'
import { LearningFrontmatter } from '@/types/content'

interface LearningContentProps {
  frontmatter: LearningFrontmatter
  children: React.ReactNode
}

export function LearningContent({ frontmatter, children }: LearningContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-8">
        <Link 
          href="/learnings" 
          className="text-text-dark/70 hover:text-forest-green mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Back to Learnings
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-forest-green mt-4">
          {frontmatter.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-text-dark mb-6">
          <time dateTime={frontmatter.date}>
            {format(new Date(frontmatter.date), 'MMMM d, yyyy')}
          </time>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-sage-green/10 text-forest-green px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {frontmatter.image && (
        <figure className="mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={frontmatter.image.url}
              alt={frontmatter.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          {frontmatter.image.caption && (
            <figcaption className="mt-2 text-center text-sm text-text-dark/80 italic">
              {frontmatter.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="prose prose-lg max-w-none prose-headings:text-forest-green prose-a:text-forest-green">
        {children}
      </div>

      {frontmatter.relatedManifestoPrinciples && frontmatter.relatedManifestoPrinciples.length > 0 && (
        <aside className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6 text-forest-green">
            Related Manifesto Principles
          </h2>
          <div className="space-y-4">
            {frontmatter.relatedManifestoPrinciples.map((principle: string, index: number) => (
              <div 
                key={index}
                className="p-4 bg-sage-green/5 rounded-lg border border-sage-green/10"
              >
                <p className="text-forest-green font-medium">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </aside>
      )}

      {frontmatter.relatedLinks && frontmatter.relatedLinks.length > 0 && (
        <aside className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6 text-forest-green">
            Related Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {frontmatter.relatedLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded-lg"
              >
                <Card className="h-full p-6 hover:border-forest-green transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-forest-green">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-text-dark">
                      {link.description}
                    </p>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  )
} 