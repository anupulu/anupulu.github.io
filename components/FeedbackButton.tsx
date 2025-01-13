'use client'

import { MessageCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FeedbackButton() {
  const pathname = usePathname()
  if (pathname === '/contact') return null

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                bg-sage-green hover:bg-forest-green text-white 
                px-4 py-3 rounded-full shadow-lg
                transform hover:scale-105
                transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-sage-green focus:ring-offset-2
                sm:px-5 sm:py-3"
      aria-label="Contact & Feedback"
    >
      <MessageCircleIcon className="w-5 h-5" />
      <span className="text-sm font-medium">Contact</span>
    </Link>
  )
}