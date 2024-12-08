import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anu Ylänen - Product Manager & Tech Professional",
  description: "Portfolio of Anu Ylänen - Mission-driven innovator and lifelong learner in technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-soft-cream text-text-dark min-h-screen flex`}>
        <Navigation />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}

