'use client'

import { Card } from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"

type Skill = {
  title: string
  description: string
}

export default function AboutPage() {
  const skills: Skill[] = [
    {
      title: "Product Leadership",
      description: "Drove product development at Batmaid, using agile methodologies, user feedback, and data to deliver scalable, user-centric solutions. At Kiwix, I aligned product strategy with the mission of knowledge equity and accessibility."
    },
    {
      title: "Service and System Design",
      description: "Redesigned service ecosystems to optimize workflows for 10,000+ users, including clients and operational teams. Focused on creating inclusive, human-centered solutions that bridge technology and real-world needs."
    },
    {
      title: "Agile and Iterative Development",
      description: "Implemented iterative approaches to reduce project cycles and improve team responsiveness. Applied continuous improvement methodologies to enhance product quality and impact."
    },
    {
      title: "Data-Informed, Evidence-Based Decision Making",
      description: "Collaborated with cross-functional teams to extract insights from data and user research. Used evidence-based analysis to inform product strategy, prioritize high-impact initiatives, and measure societal benefit."
    },
    {
      title: "User-Centric Innovation",
      description: "Developed digital solutions that simplify complex interactions, ensuring technology serves diverse user needs—especially in low-connectivity and underserved contexts."
    },
    {
      title: "Collaborative and Ethical Leadership",
      description: "Built inclusive, psychologically safe team environments that encourage knowledge sharing and collective innovation. Committed to transparency, empathy, and ethical practices in all projects."
    }
  ]

  const tools = [
    "Google Workspace",
    "Figma",
    "Notion",
    "Miro",
    "Smartlook",
    "Hotjar",
    "Tableau",
    "Bloomreach",
    "Prismic CMS",
    "GitHub",
    "Cursor.ai",
    "Perplexity.ai",
    "Various other tools, always learning and exploring more"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section - Super concise */}
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              About Me
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto">
            Product Manager with 15+ years in tech, including 8 years scaling Batmaid from a Swiss startup to a European business. Now focused on building accessible, ethical technology that creates meaningful societal impact.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Snapshot - Expanded details */}
      <section 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
        aria-labelledby="snapshot-heading"
      >
        <h2 
          id="snapshot-heading"
          className="text-2xl sm:text-3xl font-bold mb-6 text-forest-green"
        >
          Professional Snapshot
        </h2>
        <div className="prose prose-lg text-text-dark max-w-none space-y-6">
          <p>
          I’m a product manager with over 15 years of experience in technology, including 8 years at Batmaid, where I helped scale the company from a Swiss startup to a European business. Currently, I work part-time at Kiwix, a non-profit focused on providing offline access to knowledge for people without internet.
          </p>
          <p>
          My career has centered on creating practical, user-focused technology that addresses real-world challenges. I’ve contributed to open-source projects, participated in hackathons like the Giga/UNICEF “AI for Connectivity” challenge, and completed the Climatebase Fellowship to deepen my understanding of climate solutions.
          </p>
          <p>
          I’m now seeking roles where I can combine my product management skills, open-source experience, and passion for knowledge equity to build ethical, sustainable technology that benefits society.
          </p>
        </div>
      </section>

      {/* Key Skills */}
      <section 
        className="bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 
            id="skills-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 text-forest-green"
          >
            Key Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <Card key={index} className="h-full p-6 bg-white border border-gray-100">
                <h3 className="font-semibold text-lg mb-2 text-forest-green">
                  {skill.title}
                </h3>
                <p className="text-text-dark">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
        aria-labelledby="tools-heading"
      >
        <h2 
          id="tools-heading"
          className="text-2xl sm:text-3xl font-bold mb-8 text-forest-green"
        >
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <Chip key={index}>{tool}</Chip>
          ))}
        </div>
      </section>
    </main>
  )
} 