import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 text-sm font-medium bg-primary/10 text-foreground border border-primary/10 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] light:shimmer-effect"
    >
      {name}
    </Badge>
  )
}
