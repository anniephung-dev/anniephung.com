import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectGallery } from "@/components/project-gallery";
import { ThemeToggle } from "@/components/theme-toggle";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Mock project data - in a real app, you would fetch this from a CMS or API
const projectsData = {
  "e-commerce-platform": {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    subtitle: "A full-stack e-commerce solution with advanced features",
    description:
      "A comprehensive e-commerce platform built for scalability and performance. This project includes payment processing, inventory management, analytics dashboard, and a responsive customer-facing storefront.",
    client: "RetailTech Inc.",
    duration: "4 months",
    year: "2022",
    role: "Lead Frontend Developer",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Redux",
      "Express",
      "AWS",
      "Tailwind CSS",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenge:
      "The client needed a modern e-commerce solution that could handle high traffic volumes, complex product configurations, and provide detailed analytics for business intelligence. The existing platform was outdated, slow, and couldn't scale to meet growing demand.",
    solution:
      "I designed and implemented a custom e-commerce platform with a React frontend and Node.js backend. The solution included a responsive storefront, admin dashboard, real-time inventory management, and integration with Stripe for secure payments. The architecture was built on AWS for scalability and reliability.",
    features: [
      "Responsive product catalog with advanced filtering",
      "Secure checkout process with multiple payment options",
      "Real-time inventory management system",
      "Customer account management and order history",
      "Admin dashboard with sales analytics and reporting",
      "Product recommendation engine based on user behavior",
      "Integration with shipping providers for automated fulfillment",
      "Mobile-optimized shopping experience",
    ],
    results:
      "The new platform resulted in a 45% increase in conversion rate, 30% reduction in cart abandonment, and significantly improved page load times. The client was able to scale their business and handle a 300% increase in traffic during peak shopping seasons without performance issues.",
    testimonial: {
      quote:
        "The e-commerce platform exceeded our expectations in every way. Not only did it solve our immediate scaling challenges, but it also provided us with valuable insights that helped grow our business.",
      author: "Sarah Johnson",
      role: "CTO, RetailTech Inc.",
    },
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  "task-management-app": {
    slug: "task-management-app",
    title: "Task Management App",
    subtitle: "A productivity application with real-time collaboration",
    description:
      "A modern task management application designed for teams to collaborate in real-time. Features include task prioritization, progress tracking, and detailed analytics.",
    client: "ProductivityPro",
    duration: "3 months",
    year: "2023",
    role: "Frontend Developer",
    tags: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "TypeScript",
      "React Query",
      "Vercel",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenge:
      "The client needed a task management solution that would allow teams to collaborate in real-time, with a focus on simplicity and performance. Existing solutions were either too complex or lacked the real-time capabilities needed.",
    solution:
      "I built a Next.js application with Firebase for real-time data synchronization. The app features a clean, intuitive interface with drag-and-drop task management, real-time updates, and detailed progress tracking.",
    features: [
      "Real-time collaboration with instant updates",
      "Drag-and-drop task management",
      "Customizable workflows and task statuses",
      "Time tracking and productivity analytics",
      "Team and individual performance dashboards",
      "Mobile-responsive design for on-the-go productivity",
      "Integration with calendar and email services",
      "Automated reminders and notifications",
    ],
    results:
      "The application was adopted by over 50 teams within the first month, with users reporting a 35% increase in productivity. The real-time collaboration features significantly reduced communication overhead and improved project completion times.",
    testimonial: {
      quote:
        "This task management app transformed how our teams work together. The real-time updates and intuitive interface made adoption seamless, and we've seen measurable improvements in our productivity.",
      author: "Michael Chen",
      role: "Product Manager, ProductivityPro",
    },
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  // Add more projects as needed
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project =
    projectsData[slug as keyof typeof projectsData] ||
    projectsData["e-commerce-platform"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="font-bold text-2xl text-foreground relative group"
          >
            <span className="relative z-10">Annie Phung</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12 max-w-5xl mx-auto">
        {/* Project Hero */}
        <div className="mb-12">
          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="/#projects"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1 mb-2"
            >
              <ArrowLeft className="h-3 w-3" /> Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-video mb-8">
            <img
              src={project.mainImage || "/placeholder.svg"}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Client
                </h3>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Timeline
                </h3>
                <p className="font-medium">
                  {project.duration} ({project.year})
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Role
                </h3>
                <p className="font-medium">{project.role}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 rounded-full px-6"
              asChild
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-secondary transition-all duration-300 rounded-full"
              asChild
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.solution}
              </p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
              <ProjectGallery images={project.gallery} />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <section className="bg-secondary/20 rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold mb-4">Project Highlights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Conversion Rate
                    </h3>
                    <p className="text-2xl font-bold text-primary">+45%</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Load Time
                    </h3>
                    <p className="text-2xl font-bold text-primary">-60%</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Mobile Traffic
                    </h3>
                    <p className="text-2xl font-bold text-primary">+120%</p>
                  </div>
                </div>
              </section>

              <section className="bg-secondary/20 rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-medium">{project.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.testimonial.role}
                  </p>
                </div>
              </section>

              <section className="bg-secondary/20 rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold mb-4">
                  Interested in working together?
                </h2>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 rounded-full"
                  asChild
                >
                  <Link href="/#contact">Get in Touch</Link>
                </Button>
              </section>
            </div>
          </div>
        </div>

        {/* Next Projects */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Task Management App",
                description:
                  "A productivity application with real-time collaboration features.",
                image: "/placeholder.svg?height=200&width=300",
                slug: "task-management-app",
              },
              {
                title: "Weather Dashboard",
                description:
                  "An interactive weather application with real-time forecasts.",
                image: "/placeholder.svg?height=200&width=300",
                slug: "weather-dashboard",
              },
              {
                title: "Social Media Analytics",
                description:
                  "A dashboard for tracking social media performance.",
                image: "/placeholder.svg?height=200&width=300",
                slug: "social-media-analytics",
              },
            ]
              .filter((relatedProject) => relatedProject.slug !== slug) // Filter out current project
              .slice(0, 3) // Limit to 3 projects
              .map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-card/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Annie Phung. All rights reserved.
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#top">Back to Top</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
