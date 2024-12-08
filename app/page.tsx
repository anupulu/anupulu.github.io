import { Card } from "@/components/ui/card"

export default function Home() {
  const manifesto = [
    {
      number: "01",
      title: "Ethical impact over short-term gains",
      description: "I prioritise long-term societal benefits over quick wins."
    },
    {
      number: "02",
      title: "Responsible innovation over unchecked progress",
      description: "I believe in advancing technology thoughtfully, considering potential consequences in a holistic manner."
    },
    {
      number: "03",
      title: "Human-centered design over pure technological advancement",
      description: "My focus is on creating solutions that truly serve people's needs - especially those less privileged than me."
    },
    {
      number: "04",
      title: "Continuous learning over stagnation",
      description: "I'm committed to personal growth and staying current in a rapidly evolving field."
    },
    {
      number: "05",
      title: "Diverse perspectives over homogeneous thinking",
      description: "I value and seek out varied viewpoints to drive better solutions."
    },
    {
      number: "06",
      title: "Sustainable solutions over quick fixes",
      description: "I aim for lasting impact rather than temporary patches."
    },
    {
      number: "07",
      title: "Empathy and understanding over assumptions",
      description: "I strive to deeply understand users and their contexts before designing solutions."
    },
    {
      number: "08",
      title: "Collaborative growth over individual success",
      description: "I believe in the power of teamwork and shared achievements."
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-16">
        <p className="text-3xl font-bold mb-4 text-forest-green">
          Mission-driven innovator & lifelong learner
        </p>
        <p className="text-xl text-text-dark max-w-2xl mb-8">
          Product Manager with 8+ years of experience in creating meaningful, user-centered experiences 
          by combining data insights with thoughtful service design.
        </p>
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-3">
        <Card className="p-6 border-l-4 border-muted-terracotta">
          <h3 className="font-semibold mb-2 text-muted-terracotta">What I Did</h3>
          <p className="text-text-dark">
            Scaled product strategy from startup to international scaleup, developing solutions that transformed service delivery.
          </p>
        </Card>
        <Card className="p-6 border-l-4 border-sage-green">
          <h3 className="font-semibold mb-2 text-sage-green">What I Do</h3>
          <p className="text-text-dark">
            Lead agile product teams to develop user-friendly digital solutions, guided by insights from users and data.
          </p>
        </Card>
        <Card className="p-6 border-l-4 border-forest-green">
          <h3 className="font-semibold mb-2 text-forest-green">What I Want to Do</h3>
          <p className="text-text-dark">
            Create sustainable, ethical technology solutions that make a meaningful impact on society.
          </p>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-forest-green">Personal Manifesto</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {manifesto.map((item, index) => (
            <Card key={item.number} className={`p-6 border-l-4 ${index % 2 === 0 ? 'border-sage-green' : 'border-muted-terracotta'}`}>
              <div className={`text-4xl font-bold mb-4 ${index % 2 === 0 ? 'text-sage-green' : 'text-muted-terracotta'}`}>{item.number}</div>
              <h3 className="font-semibold mb-2 text-forest-green">{item.title}</h3>
              <p className="text-text-dark">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

