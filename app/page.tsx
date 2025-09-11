import Script from 'next/script';
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function Home() {
  const keyAreas = [
    {
      title: "My Journey So Far",
      description: "I helped Batmaid grow from a Swiss startup to a European-scale business, building products and features to address undeclared domestic work. My career has focused on creating practical, user-centric solutions that drive both business growth and social impact.",
      colorClass: "text-muted-terracotta"
    },
    {
      title: "Where I Am Now",
      description: "I currently work part-time at Kiwix, a non-profit that provides offline access to knowledge for people without internet. Alongside this, I contribute to the Wikimedia movement, helping make free knowledge more accessible. Recently, I’ve also won hackathons, completed the Climatebase Fellowship, and expanded my skills through courses and community projects.",
      colorClass: "text-sage-green"
    },
    {
      title: "What Drives Me",
      description: "I’m looking for my next opportunity to build ethical, sustainable technology that solves real-world problems and benefits society. I want to work with organisations that share my commitment to open access, knowledge equity, and positive social change.",
      colorClass: "text-forest-green"
    }
  ];

  const manifestoItems = [
    {
      principle: "Ethical impact over short-term gains",
      description: "I focus on creating long-term societal value, especially through technology that promotes open access, equity, and sustainability"
    },
    {
      principle: "Responsible innovation over unchecked progress",
      description: "I believe technology should be developed thoughtfully and inclusively, ensuring it benefits everyone and doesn’t create new barriers."
    },
    {
      principle: "Human-centred design over pure technological advancement",
      description: "I design solutions that address real human needs, particularly for underserved communities, ensuring technology is accessible and meaningful."
    },
    {
      principle: "Continuous learning over stagnation",
      description: "I’m committed to growing my skills and knowledge, staying adaptable in a fast-changing world, and contributing to communities that share my values."
    },
    {
      principle: "Diverse perspectives over homogeneous thinking",
      description: "I actively seek out different viewpoints and experiences to create better, more inclusive solutions."
    },
    {
      principle: "Transparency and honesty over opacity",
      description: "I value open communication and trust, ensuring clarity in everything I do."
    },
    {
      principle: "Empathy and understanding over assumptions",
      description: "I prioritise deeply understanding users and their contexts, so the solutions I create are grounded in real needs."
    },
    {
      principle: "Collaborative growth over individual success",
      description: "I believe in the power of teamwork and shared achievements, especially when working towards a common mission."
    }
  ];

  return (
    <>
      <Script
        defer
        data-domain="anupulu.github.io"
        src="https://plausible.io/js/script.js"
      />
      {/* Hero Section */}
      <section 
  className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5"
  aria-labelledby="hero-heading"
>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
    <h1 
      id="hero-heading"
      className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-tight bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent"
    >
      Digital gardener,<br />
      growing good
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto mb-8">
          Finnish-born product & tech generalist in Switzerland, building ethical technology that bridges gaps in knowledge access and empowers underserved communities.
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
              ];
              
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
  );
}
