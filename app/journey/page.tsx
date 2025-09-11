'use client'

import { Card } from "@/components/ui/card"
import { 
  BriefcaseIcon, 
  HeartHandshakeIcon, 
  GraduationCapIcon, 
  BookOpenIcon 
} from "lucide-react"
import { useState } from "react"

type TimelineItem = {
  startDate: string
  endDate: string
  organization: string
  role: string
  description: string
  category: 'work' | 'beyond-work' | 'education' | 'continuous-learning'
  details?: string[]
}

type CategoryType = 'all' | 'work' | 'beyond-work' | 'education' | 'continuous-learning'

export default function JourneyPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')

  const timeline: TimelineItem[] = [
    // 2024 - Present
    {
      startDate: "Sep 2025",
      endDate: "Present",
      organization: "ECOnGOOD Association",
      role: "Member",
      description: "Active member of ECOnGOOD, supporting the Economy for the Common Good (ECG) movement in Switzerland. I contribute to initiatives that promote ethical business practices, sustainability, and a more equitable economy.",
      category: "beyond-work"
    },
    {
      startDate: "May 2025",
      endDate: "Present",
      organization: "Kiwix",
      role: "Part-time Product Manager",
      description: "Leading product development for the Kiwix Hotspot device and other mission-aligned solutions, focusing on making knowledge accessible offline in areas with limited internet access.",
      category: "work",
      details: [
        "Leading product development for the Kiwix Hotspot device",
        "Managing product roadmap and feature prioritization",
        "Collaborating with cross-functional teams to deliver mission-aligned solutions",
        "Contributing to strategic decisions for product development"
      ]
    },
    {
      startDate: "Jan 2025",
      endDate: "Jan 2025",
      organization: "AI for Connectivity Hackathon",
      role: "Hackathon Team Member",
      description: "Handled product management, UX/UI design, AI-assisted frontend development, and creating a presentation for our solution: an AI and blockchain procurement platform to enhance transparency and efficiency in public sector connectivity projects.",
      category: "beyond-work",
      details: [
        "Product management and UX/UI design",
        "Developed frontend components and first version of user dashboard",
        "Created and delivered project presentation"
      ]
    },
    {
      startDate: "Nov 2024",
      endDate: "Present",
      organization: "Wikimedia Projects",
      role: "Contributor",
      description: "Reconnected with the Wikimedia movement as an editor and translator, building on my early involvement in Wikipedia’s formative years. I contribute to making free knowledge more accessible and inclusive, supporting the mission of open information for everyone.",
      category: "beyond-work"
    },
    {
      startDate: "Nov 2024",
      endDate: "Apr 2025",
      organization: "Kiwix",
      role: "Volunteer",
      description: "Supporting Kiwix to make knowledge accessible offline, contributing to their mission of bringing educational content to areas with limited internet access.",
      category: "beyond-work",
      details: [
        "Assisting with WordPress site tweaks and improvements",
        "Setting up newsletter and fundraising campaigns, and automation funnels"
      ]
    },
    {
      startDate: "Nov 2024",
      endDate: "Nov 2024",
      organization: "#herHACK",
      role: "Hackathon Participant",
      description: "Won 2nd place with my team in SBB's challenge focused on raising awareness about green coding among their developers.",
      category: "beyond-work",
      details: [
        "Developed solution for promoting sustainable coding practices",
        "Collaborated in a diverse team environment",
        "Addressed real-world sustainability challenges in software development"
      ]
    },
    {
      startDate: "Nov 2024",
      endDate: "Nov 2024",
      organization: "Product Management Festival",
      role: "Event Volunteer",
      description: "Contributed to one of Europe's biggest product conferences, held annually in Zurich, Switzerland.",
      category: "beyond-work",
      details: [
        "Assisted at registration and help desks",
        "Managed microphones during Q&A sessions",
        "Supported event organization with various ad-hoc tasks",
        "Helped ensure smooth operation of this major product management conference"
      ]
    },
    {
      startDate: "Oct 2024",
      endDate: "Nov 2024",
      organization: "#herHACK",
      role: "Partnerships and Outreach Volunteer",
      description: "Volunteered for Switzerland's biggest female-led hackathon, focusing on increasing diversity in tech through partnerships and outreach.",
      category: "beyond-work",
      details: [
        "Sought mission partnerships to support diversity in tech",
        "Reached out to organizations and associations to spread the word",
        "Contacted media for event coverage",
        "Helped make the event more accessible to women entering tech"
      ]
    },
    {
      startDate: "2024",
      endDate: "Present",
      organization: "DataCamp",
      role: "Continuous Learner",
      description: "Yearly subscription for continuous learning in AI, data literacy and data analysis.",
      category: "continuous-learning"
    },
    {
      startDate: "2024",
      endDate: "2024",
      organization: "University of Helsinki - Open University",
      role: "AI in Society: Introduction",
      description: "Understanding the societal implications and applications of AI technologies.",
      category: "continuous-learning"
    },
    {
      startDate: "2024",
      endDate: "2024",
      organization: "Pendo + Mind the Product",
      role: "Product-led Certification",
      description: "Advanced product-led growth strategies and methodologies.",
      category: "continuous-learning"
    },
    {
      startDate: "2015",
      endDate: "2024",
      organization: "Batgroup",
      role: "Product Manager & IT Project Manager",
      description: "Grew with Batmaid from an early-stage startup to a thriving scaleup, gaining understanding of a complete product/service lifecycle.",
      category: "work",
      details: [
        "Led agile product teams to develop user-friendly digital solutions",
        "Guided by insights from users, data and business needs",
        "Streamlined workflows, managed stakeholders, boosted automation",
        "Championed a culture of continuous improvement"
      ]
    },
    {
      startDate: "2023",
      endDate: "2023",
      organization: "Reforge",
      role: "Mastering Product Management",
      description: "Advanced product management strategies and frameworks.",
      category: "continuous-learning"
    },
    {
      startDate: "2023",
      endDate: "2023",
      organization: "Reforge",
      role: "Experimentation & Testing",
      description: "Deep dive into product experimentation methodologies.",
      category: "continuous-learning"
    },
    {
      startDate: "2018",
      endDate: "2022",
      organization: "Tallinn University & Cyprus University of Technology",
      role: "MSc in Interaction Design",
      description: "Deepened expertise in human-centered design while working full-time.",
      category: "education"
    },
    {
      startDate: "2019",
      endDate: "2019",
      organization: "University of Pennsylvania (Coursera)",
      role: "Gamification",
      description: "Understanding gamification principles and their application in product design.",
      category: "continuous-learning"
    },
    {
      startDate: "2018",
      endDate: "2018",
      organization: "University of Helsinki and Reaktor",
      role: "Elements of AI",
      description: "Foundation course in artificial intelligence and its applications.",
      category: "continuous-learning"
    },
    {
      startDate: "2016",
      endDate: "2016",
      organization: "MIT (edX)",
      role: "The Analytics Edge",
      description: "Advanced analytics and data science methodologies.",
      category: "continuous-learning"
    },
    {
      startDate: "2015",
      endDate: "2015",
      organization: "Scrum Alliance",
      role: "Certified ScrumMaster",
      description: "Professional certification in Agile project management.",
      category: "continuous-learning"
    },
    {
      startDate: "2013",
      endDate: "2015",
      organization: "Futurice",
      role: "Senior QA Specialist",
      description: "Member of agile teams, QA & testing for major clients.",
      category: "work",
      details: [
        "Nespresso mobile app project in Switzerland",
        "Real estate ERP project in Finland"
      ]
    },
    {
      startDate: "2013",
      endDate: "2013",
      organization: "Scrum Alliance",
      role: "Certified Scrum Product Owner",
      description: "Professional certification in Agile product ownership.",
      category: "continuous-learning"
    },
    {
      startDate: "2008",
      endDate: "2013",
      organization: "atBusiness",
      role: "Test Manager",
      description: "Quality assurance & testing for SharePoint-based intranet and internet projects.",
      category: "work"
    },
    {
      startDate: "2003",
      endDate: "2008",
      organization: "Lionbridge",
      role: "Project Coordinator, Project Manager, Localisation Engineer",
      description: "Gained foundational experience in project management in the localisation industry.",
      category: "work"
    },
    {
      startDate: "2001",
      endDate: "2005",
      organization: "Arcada University of Applied Sciences",
      role: "Bachelor of Business Administration",
      description: "International Business program in Finland, building a foundation in business and cross-cultural communication.",
      category: "education"
    }
  ]

  const filteredTimeline = timeline.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work':
        return <BriefcaseIcon className="w-5 h-5" />
      case 'beyond-work':
        return <HeartHandshakeIcon className="w-5 h-5" />
      case 'education':
        return <GraduationCapIcon className="w-5 h-5" />
      case 'continuous-learning':
        return <BookOpenIcon className="w-5 h-5" />
      default:
        return null
    }
  }

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'work':
        return 'text-forest-green'
      case 'beyond-work':
        return 'text-sage-green'
      case 'education':
        return 'text-muted-terracotta'
      case 'continuous-learning':
        return 'text-sage-green'
      default:
        return 'text-gray-600'
    }
  }

  const getCategoryBgStyle = (category: string) => {
    switch (category) {
      case 'work':
        return 'bg-forest-green/10'
      case 'beyond-work':
        return 'bg-sage-green/10'
      case 'education':
        return 'bg-muted-terracotta/10'
      case 'continuous-learning':
        return 'bg-sage-green/10'
      default:
        return 'bg-gray-100'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'continuous-learning':
        return 'Learning Journey'
      default:
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
  }

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              My Journey
            </h1>
            <p className="text-base sm:text-lg text-text-dark max-w-2xl mx-auto">
              A non-linear path of growth, learning, and impact — each experience contributing to 
              my understanding of how technology can serve human needs.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-12 flex flex-wrap gap-4 justify-center max-w-4xl mx-auto px-4 sm:px-6 py-8" role="tablist" aria-label="Filter timeline by category">
        {['all', 'work', 'beyond-work', 'education', 'continuous-learning'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as CategoryType)}
            className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2
              ${category === activeCategory 
                ? 'bg-forest-green text-white shadow-md' 
                : 'bg-white border border-gray-200 text-text-dark hover:bg-gray-50 hover:border-forest-green'}
              focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2
              transition-all duration-300`}
            role="tab"
            aria-selected={category === activeCategory}
            aria-controls="timeline-content"
          >
            {category !== 'all' && (
              <span className={category === activeCategory ? 'text-white' : getCategoryStyle(category)}>
                {getCategoryIcon(category)}
              </span>
            )}
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>

      <section 
        className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 relative"
        aria-labelledby="timeline-heading"
      >
        <h2 id="timeline-heading" className="sr-only">Timeline</h2>
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest-green/20 via-sage-green/20 to-muted-terracotta/20" />
        
        <div 
          className="space-y-12"
          id="timeline-content"
          role="tabpanel"
        >
          {filteredTimeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div 
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-2 ${getCategoryBgStyle(item.category)} border-2 border-white shadow-md`}
                aria-hidden="true"
              />
              
              {/* Card - alternating sides on desktop */}
              <div className={`relative ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                <Card 
                  className="p-6 bg-white border border-gray-100 hover-card"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <time 
                        className={`text-sm font-medium ${getCategoryStyle(item.category)}`}
                        dateTime={`${item.startDate}/${item.endDate}`}
                      >
                        {item.startDate} — {item.endDate}
                      </time>
                      <span 
                        className={`text-sm flex items-center gap-2 ${getCategoryStyle(item.category)} ${getCategoryBgStyle(item.category)} px-3 py-1 rounded-full`}
                        role="tag"
                      >
                        {getCategoryIcon(item.category)}
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-dark group-hover:text-forest-green transition-colors">
                        {item.organization}
                      </h3>
                      <div className={`text-base font-medium mb-2 ${getCategoryStyle(item.category)}`}>
                        {item.role}
                      </div>
                    </div>
                    <p className="text-text-dark leading-relaxed">
                      {item.description}
                    </p>
                    {item.details && item.details.length > 0 && (
                      <ul className="mt-4 space-y-2 list-disc list-inside text-text-dark">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 