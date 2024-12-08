import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="w-64 min-h-screen p-6 bg-sage-green text-text-dark border-r border-sage-green/20">
      <div className="mb-8">
        <Link href="/" className="text-xl font-semibold hover:text-forest-green">
          Anu Ylänen
        </Link>
      </div>
      <div className="space-y-4">
        <Link 
          href="/"
          className={`block hover:text-forest-green transition-colors ${pathname === "/" ? "font-semibold text-forest-green" : ""}`}
        >
          Home
        </Link>
        <Link 
          href="/about"
          className={`block hover:text-forest-green transition-colors ${pathname === "/about" ? "font-semibold text-forest-green" : ""}`}
        >
          About Me
        </Link>
        <Link 
          href="/journey"
          className={`block hover:text-forest-green transition-colors ${pathname === "/journey" ? "font-semibold text-forest-green" : ""}`}
        >
          Journey
        </Link>
        <Link 
          href="/learnings"
          className={`block hover:text-forest-green transition-colors ${pathname === "/learnings" ? "font-semibold text-forest-green" : ""}`}
        >
          Learnings
        </Link>
        <Link 
          href="/contact"
          className={`block hover:text-forest-green transition-colors ${pathname === "/contact" ? "font-semibold text-forest-green" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

