import Link from "next/link"
import { ExternalLink, Github, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  slug?: string // Add slug for project detail page link
}

export function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl, slug }: ProjectCardProps) {
  // Generate a slug if not provided
  const projectSlug = slug || title.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      <Card className="relative h-full bg-card/50 backdrop-blur-lg border-border overflow-hidden flex flex-col transition-all duration-500 group-hover:translate-y-[-5px] light:card-enhanced">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end">
            <div className="p-4 text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-bold">{title}</h3>
            </div>
          </div>
        </div>
        <CardHeader className="bg-transparent">
          <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-4 bg-transparent">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-300 light:shimmer-effect"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 bg-transparent p-4">
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-secondary transition-all duration-300 rounded-full"
            asChild
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 rounded-full"
            asChild
          >
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>

          {/* Add View Details button */}
          <Button
            variant="secondary"
            size="sm"
            className="ml-auto bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-all duration-300 rounded-full light:border-gradient"
            asChild
          >
            <Link href={`/projects/${projectSlug}`}>
              <Eye className="mr-2 h-4 w-4" />
              Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
