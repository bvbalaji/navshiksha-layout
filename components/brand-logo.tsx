import { Brain } from "lucide-react"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Brain className="h-8 w-8 text-primary" />
      </div>
      <span className="font-bold text-xl">Navshiksha</span>
    </div>
  )
}
