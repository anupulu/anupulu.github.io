'use client'

import { Card } from "@/components/ui/card"

type Learning = {
  title: string
  date: string
  type: 'project' | 'volunteering' | 'reflection'
  description: string
  insights: string[]
  relatedManifestoPrinciples: string[]
  links?: {
    text: string
    url: string
  }[]
  tags: string[]
}

export default function LearningsPage() {
  const learnings: Learning[] = [
    {
      title: "Creation of Personal Website Using AI Tools",
      date: "December 2024",
      type: "project",
      description: "Built this personal website using AI tools such as Claude.ai and Cursor AI coding assistant. Leveraged these tools to streamline the development process, enhance productivity, and implement design best practices.",
      insights: [
        "AI tools can significantly accelerate the web development process.",
        "Combining multiple AI tools can create a more efficient and streamlined workflow.",
        "Using AI for coding assistance can empower those who are less technical or are lacking coding skills.",
        "AI can assist in both the backend logic and frontend design aspects of web development."
      ],
      relatedManifestoPrinciples: [
        "Continuous learning over stagnation"
      ],
      links: [
        {
          text: "Claude.ai Official Website",
          url: "https://www.claude.ai"
        },
        {
          text: "Cursor AI Coding Assistant",
          url: "https://www.cursor.com"
        }
      ],
      tags: ["AI", "Web Development", "Productivity", "Innovation"]
    },
    {
      title: "#herHACK 2024: Sustainability Challenge",
      date: "November 2024",
      type: "project",
      description: "Participated in #herHACK hackathon, where our team won 2nd place by developing a solution for SBB's sustainability challenge. The experience was both as a participant and volunteer, providing insights on rapid innovation and community building.",
      insights: [
        "Cross-functional teams can rapidly innovate when given clear constraints and support",
        "Sustainability in tech requires balancing immediate user needs with long-term environmental impact",
        "Volunteering provides valuable perspective on event organization and community building",
        "Diverse teams bring richer solutions through varied viewpoints and experiences"
      ],
      relatedManifestoPrinciples: [
        "Ethical impact over short-term gains",
        "Diverse perspectives over homogeneous thinking",
        "Collaborative growth over individual success"
      ],
      links: [
        {
          text: "My LinkedIn post about #herHACK 2024 experience",
          url: "https://www.linkedin.com/posts/anujohanna_herhack-innovation-hackathon-activity-7258807431072301056-BYtF/"
        },
        {
          text: "#herHACK 2024 highlights by Jochen Decker",
          url: "https://www.linkedin.com/posts/jochen-decker-62526241_herhack-herhack2024-womenintech-activity-7264570164761841665-UXZ2/"
        }
      ],
      tags: ["Hackathon", "Sustainability", "Innovation", "Volunteering"]
    },
    {
      title: "Kiwix: Making Knowledge Accessible",
      date: "2024 - Present",
      type: "volunteering",
      description: "Volunteering with Kiwix to support their mission of making knowledge accessible to everyone, regardless of internet connectivity.",
      insights: [
        "Technology can bridge educational gaps when designed thoughtfully",
        "Offline solutions remain crucial for global accessibility",
        "Open-source communities drive meaningful innovation",
        "User needs vary significantly across different regions and contexts"
      ],
      relatedManifestoPrinciples: [
        "Human-centered design over pure technological advancement",
        "Sustainable solutions over quick fixes",
        "Empathy and understanding over assumptions"
      ],
      links: [
        {
          text: "Kiwix Official Website",
          url: "https://kiwix.org/"
        }
      ],
      tags: ["Open Source", "Education", "Accessibility", "Volunteering"]
    }
  ]

  const getTypeIcon = (type: Learning['type']) => {
    switch (type) {
      case 'project':
        return '🚀'
      case 'volunteering':
        return '🤝'
      case 'reflection':
        return '💭'
      default:
        return '📚'
    }
  }

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              Learnings & Insights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto">
              A collection of experiences and insights from my journey, connecting practical learnings 
              with my core principles and values.
            </p>
          </div>
        </div>
      </section>

      <section 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
        aria-labelledby="learnings-heading"
      >
        <h2 id="learnings-heading" className="sr-only">All Learnings</h2>
        <div className="space-y-12">
          {learnings.map((learning, index) => (
            <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="text-sm text-sage-green mb-2">{learning.date}</div>
                  <h2 className="text-2xl font-bold text-forest-green mb-4">{learning.title}</h2>
                  <p className="text-text-dark">{learning.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {learning.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-sage-green/10 text-sage-green rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Insights */}
                <div>
                  <h3 className="font-semibold text-forest-green mb-3">Key Insights</h3>
                  <ul className="list-disc list-inside space-y-2 text-text-dark">
                    {learning.insights.map((insight, insightIndex) => (
                      <li key={insightIndex}>{insight}</li>
                    ))}
                  </ul>
                </div>

                {/* Related Manifesto Principles */}
                <div>
                  <h3 className="font-semibold text-forest-green mb-3">Related Personal Manifesto Principles</h3>
                  <div className="space-y-2">
                    {learning.relatedManifestoPrinciples.map((principle, principleIndex) => (
                      <div
                        key={principleIndex}
                        className="p-3 bg-sage-green/10 text-forest-green rounded-lg border border-sage-green/20"
                      >
                        {principle}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Links */}
                {learning.links && learning.links.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-forest-green mb-3">Related Links</h3>
                    <div className="space-y-2">
                      {learning.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-sage-green/10 text-forest-green rounded-lg hover:bg-sage-green/20 transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
