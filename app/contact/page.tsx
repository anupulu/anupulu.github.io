'use client'

import { Card } from "@/components/ui/card"
import { 
  Linkedin,
  Mail,
  Github
} from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anujohanna",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Connect with me professionally and follow my journey"
    },
    {
      name: "Email",
      url: "mailto:anu.ylanen@gmail.com",
      icon: <Mail className="w-8 h-8 text-forest-green" />,
      description: "Send me a message directly at anu.ylanen@gmail.com"
    }
  ]

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-forest-green">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-dark max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, sharing ideas, or 
              just having a good conversation about technology and its impact.
            </p>
          </div>
        </div>
      </section>

      <section 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
        aria-labelledby="contact-methods-heading"
      >
        <h2 
          id="contact-methods-heading"
          className="text-2xl sm:text-3xl font-bold mb-8 text-forest-green text-center"
        >
          Get in Touch
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded-lg group"
            >
              <Card className="h-full p-6 bg-white border border-gray-100 hover:border-forest-green transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <span 
                    className="flex-none transition-transform duration-300 group-hover:scale-110" 
                    role="img" 
                    aria-hidden="true"
                  >
                    {method.icon}
                  </span>
                  <h3 className="font-semibold text-lg text-forest-green">
                    {method.name}
                  </h3>
                </div>
                <p className="text-text-dark">
                  {method.description}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

