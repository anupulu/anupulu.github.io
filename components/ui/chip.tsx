import { ReactNode } from "react"

interface ChipProps {
  children: ReactNode
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="px-4 py-2 bg-sage-green/10 text-forest-green rounded-full text-sm">
      {children}
    </span>
  )
} 