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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              About Me
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto">
              Product leader with a passion for creating meaningful, user-centered experiences 
              through thoughtful service design and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Snapshot */}
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
            I've spent the last 8+ years navigating the world of technology-enabled home cleaning services at Batmaid - 
            a small startup that evolved into an international scaleup. Along the way, I've learned how to create meaningful, 
            user-centered experiences by combining data insights with thoughtful service design. I'm adaptable with various 
            product-led approaches and frameworks (and always eager to learn new ones) and genuinely enjoy collaborating 
            across teams to make things happen. I thrive in environments where growth is driven from the ground up, in a 
            collaborative and learning-focused way.
          </p>
          <p>
            Integrity and ethics are non-negotiable for me—both in work and life. That's why I have volunteered with 
            projects like #herHACK and Kiwix, which align with my belief that tech should benefit everyone, not just 
            the privileged. I'm driven by a curiosity to figure out how things work and how they can work better. 
            What excites me most is being part of projects that actually improve lives. Whether it's a big idea or a 
            small tweak, I'm here for the work that makes a difference, not just a headline.
          </p>
          <p>
            My journey has been non-linear – a reflection of my adaptability and commitment to continuous learning. 
            Each role has been a meaningful step, helping me grow and find new ways to create positive change. I'm 
            driven by curiosity and a desire to make a genuine impact, always willing to evolve and take on new challenges.
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