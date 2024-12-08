import { Card } from "@/components/ui/card"
import { Mail, Linkedin } from 'lucide-react'
import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-forest-green">Let's Connect</h1>
      <Card className="p-8 border-l-4 border-muted-terracotta">
        <p className="text-xl mb-8 text-text-dark">
          I'm always interested in connecting with fellow tech enthusiasts, potential collaborators, 
          and anyone passionate about ethical technology and sustainable solutions.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-muted-terracotta" />
            <Link href="mailto:anu.ylanen@gmail.com" className="hover:text-forest-green transition-colors">
              anu.ylanen@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-6 h-6 text-muted-terracotta" />
            <Link href="https://linkedin.com/in/anujohanna" className="hover:text-forest-green transition-colors" target="_blank">
              linkedin.com/in/anujohanna
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

