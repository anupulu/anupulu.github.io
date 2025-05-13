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
      description: "Led product development initiatives at Batmaid, using agile methodologies, OKRs, data, and user feedback to achieve business goals and deliver impactful outcomes."
    },
    {
      title: "Service Design",
      description: "Reimagined entire service ecosystems, looking beyond UX to optimize end-to-end workflows for +10,000 clients and internal operational and administrative teams. For example: recruitment and payroll processes."
    },
    {
      title: "Agile Expertise",
      description: "Implemented iterative development approaches, reducing project cycles and increasing team responsiveness through continuous improvement methodologies."
    },
    {
      title: "User-Centric Innovation",
      description: "Led the development of comprehensive digital solutions that simplify complex service interactions, bridging technological capabilities with human needs."
    },
    {
      title: "Data-Informed Decision Making",
      description: "Collaborated with design, data, and engineering to extract key insights from data and user research, mapping opportunity solution spaces to inform product strategy and prioritize high-impact initiatives."
    },
    {
      title: "Empathetic Collaboration",
      description: "Built inclusive team environments that foster psychological safety, encourage knowledge sharing, and drive collective innovation."
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
              Product Manager and tech generalist with 15+ years in tech, including 8+ years scaling Batmaid from Swiss startup to international company. Driven by making technology accessible and beneficial for all.
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
            With over 15 years in technology and 8+ years at Batmaid, I've experienced firsthand the transformative power of technology when it's built with purpose and accessibility in mind. My journey from helping scale a Swiss startup to an international company has taught me the importance of balancing technical expertise with human-centered design.
          </p>
          <p>
            My commitment to making technology accessible to all extends beyond my professional work. Through initiatives like Kiwix, where I contribute to making knowledge available offline, and #herHACK, Switzerland's largest female-led hackathon, I actively work to bridge the digital divide and promote inclusivity in tech.
          </p>
          <p>
            My recent win at the "AI for connectivity" hackathon organized by Giga, Unicef, and ITU demonstrates my ability to apply technical skills to solve real-world challenges. I'm particularly interested in roles that combine my generalist tech and product expertise with opportunities to create meaningful societal impact through continuous learning and collaboration.
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