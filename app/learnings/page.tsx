'use client'

import { Card } from "@/components/ui/card"
import { allLearnings } from '.contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import Link from 'next/link'

export default function LearningsPage() {
  const sortedLearnings = allLearnings.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              Learnings
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto">
              Documenting my journey, insights, and growth through various projects and experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedLearnings.map((learning) => (
            <Link href={`/learnings/${learning.slug}`} key={learning.slug}>
              <Card className="group p-6 h-full border border-gray-100 hover:border-forest-green transition-all duration-200">
                <div className="flex flex-col h-full">
                  <h2 className="text-xl font-semibold mb-2 text-forest-green group-hover:text-forest-green/80 transition-colors">
                    {learning.title}
                  </h2>
                  <div className="text-sm text-text-dark/70 mb-2">
                    {format(new Date(learning.date), 'MMMM d, yyyy')}
                  </div>
                  <p className="text-text-dark mb-4 line-clamp-3">
                    {learning.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {learning.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-sage-green/10 text-forest-green px-2 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
