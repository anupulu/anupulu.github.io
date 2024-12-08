import { Card } from "@/components/ui/card"
import Link from 'next/link'
import { cn } from "@/lib/utils"

export default function Home() {
  const keyAreas = [
    {
      title: "My Journey So Far",
      description: "Built products that helped Batmaid combat undeclared domestic cleaning work, growing from Swiss roots into a multi-country European scaleup.",
      colorClass: "text-muted-terracotta"
    },
    {
      title: "Where I Am Now",
      description: "Taking time to learn, grow, and give back. Volunteering at tech events, achieving 2nd place in #herHACK with my team, and exploring new skills through courses and community engagement.",
      colorClass: "text-sage-green"
    },
    {
      title: "What Drives Me",
      description: "Seeking my next mission where I can create sustainable, ethical technology solutions that make a meaningful impact on society.",
      colorClass: "text-forest-green"
    }
  ]

  const manifestoItems = [
    {
      principle: "Ethical impact over short-term gains",
      description: "I prioritise long-term societal benefits over quick wins."
    },
    {
      principle: "Responsible innovation over unchecked progress",
      description: "I believe in advancing technology thoughtfully, considering potential consequences in a holistic manner."
    },
    {
      principle: "Human-centered design over pure technological advancement",
      description: "My focus is on creating solutions that truly serve people's needs - especially those less privileged than me."
    },
    {
      principle: "Continuous learning over stagnation",
      description: "I'm committed to personal growth and staying current in a rapidly evolving field."
    },
    {
      principle: "Diverse perspectives over homogeneous thinking",
      description: "I value and seek out varied viewpoints to drive better solutions."
    },
    {
      principle: "Sustainable solutions over quick fixes",
      description: "I aim for lasting impact rather than temporary patches."
    },
    {
      principle: "Empathy and understanding over assumptions",
      description: "I strive to deeply understand users and their contexts before designing solutions."
    },
    {
      principle: "Collaborative growth over individual success",
      description: "I believe in the power of teamwork and shared achievements."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
          <div 
            className="inline-block px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm text-sage-green mb-6"
            role="text"
            aria-label="Location"
          >
            Finnish-born tech enthusiast in Switzerland
          </div>
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-tight bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent"
          >
            Digital gardener,<br />
            growing good
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto mb-8">
            Bridging technology and human needs through curiosity, collaboration, 
            and conscious innovation.
          </p>
          <Link 
            href="/about"
            className="inline-block bg-forest-green text-white px-8 py-3 rounded-full hover:bg-sage-green transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Key Areas Section */}
      <section 
        className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
        aria-labelledby="key-areas-heading"
      >
        <h2 id="key-areas-heading" className="sr-only">Key Areas</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {keyAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border border-gray-100"
            >
              <h3 className={cn("font-semibold mb-3 text-lg", area.colorClass)}>
                {area.title}
              </h3>
              <p className="text-text-dark leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal Manifesto Section */}
      <section 
        className="bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16"
        aria-labelledby="manifesto-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 
            id="manifesto-heading"
            className="text-2xl sm:text-3xl font-bold mb-8 text-forest-green text-center"
          >
            Personal Manifesto
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {manifestoItems.map((item, index) => {
              const numberColors = [
                'text-forest-green/20',
                'text-sage-green/30',
                'text-muted-terracotta/25',
                'text-forest-green/20',
                'text-sage-green/30',
                'text-muted-terracotta/25',
                'text-forest-green/20',
                'text-sage-green/30'
              ]
              
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-white border border-gray-100 relative"
                >
                  <div className="flex gap-4">
                    <div className="flex-none">
                      <span className={`block text-6xl font-bold ${numberColors[index]} -mt-1`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-forest-green">
                        {item.principle}
                      </h3>
                      <p className="text-text-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

