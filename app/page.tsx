import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

// Define projects data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with payment processing, inventory management, and analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "e-commerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application with real-time collaboration features, task prioritization, and progress tracking.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "task-management-app",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather application that provides real-time forecasts, historical data, and location-based alerts.",
    tags: ["React", "Redux", "Weather API", "Chart.js"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "weather-dashboard",
  },
  {
    title: "Social Media Analytics",
    description:
      "A dashboard for tracking and analyzing social media performance across multiple platforms.",
    tags: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "social-media-analytics",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile-first application for tracking workouts, nutrition, and fitness goals with visualization tools.",
    tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "fitness-tracker",
  },
  {
    title: "Content Management System",
    description:
      "A custom CMS built for digital publishers with advanced editing tools and analytics.",
    tags: ["Angular", "Node.js", "MySQL", "Docker"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "content-management-system",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="font-bold text-2xl text-foreground relative group"
          >
            <span className="relative z-10">Annie Phung</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative py-2 group text-sm font-medium"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              )
            )}

            <div className="flex items-center gap-2 ml-4">
              <ThemeToggle />
              <Button
                className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 rounded-full px-4"
                asChild
              >
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background section-pattern"></div>

            {/* Enhanced blob animations for light mode */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute -bottom-8 right-20 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

            {/* Light mode decorative elements */}
            <div className="hidden light:block">
              <div className="absolute top-20 left-[10%] w-64 h-64 accent-shape animate-float-light"></div>
              <div className="absolute bottom-20 right-[10%] w-72 h-72 accent-shape animate-pulse-light animation-delay-2000"></div>
              <div className="absolute top-1/3 right-[20%] w-40 h-40 accent-shape animate-float-light animation-delay-4000"></div>
            </div>

            {/* Animated grid */}
            <div className="absolute inset-0 dark:bg-grid-dark light:bg-grid-light bg-[length:50px_50px] opacity-20"></div>

            {/* Animated particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-foreground/10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 1}px`,
                    height: `${Math.random() * 6 + 1}px`,
                    animation: `floatParticle ${
                      Math.random() * 10 + 10
                    }s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="space-y-8 md:w-1/2">
                <div className="space-y-2">
                  {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-sm text-primary font-medium mb-2 animate-fadeIn">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for work
                  </div> */}
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slideUp">
                    <span className="block">Hi, I'm</span>
                    <div className="relative">
                      <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                        Annie Phung
                      </span>
                      <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                  </h1>
                </div>
                <p className="text-xl text-foreground/70 animate-fadeIn animation-delay-300 leading-relaxed">
                  I craft exceptional digital experiences with code. Senior
                  Frontend Developer with experience at{" "}
                  <span className="text-foreground font-medium">JP Morgan</span>
                  , <span className="text-foreground font-medium">Eleka</span>,
                  and{" "}
                  <span className="text-foreground font-medium">Ascension</span>
                  .
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-500">
                  <Button
                    className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 rounded-full px-6 py-6 shadow-lg shadow-[#3b82f6]/20 hover:shadow-[#3b82f6]/40"
                    asChild
                  >
                    <Link href="#projects">
                      View my work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10 transition-all duration-300 rounded-full px-6 py-6 light:border-gradient"
                    asChild
                  >
                    <Link href="#contact">Contact me</Link>
                  </Button>
                </div>

                {/* Tech stack */}
                <div className="animate-fadeIn animation-delay-700">
                  <p className="text-sm text-foreground/50 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "Tailwind",
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 bg-primary/5 backdrop-blur-md border border-primary/10 rounded-md text-foreground/70 text-sm hover:bg-primary/10 transition-colors duration-300 hover:scale-105 transform light:card-enhanced"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 pt-4 animate-fadeIn animation-delay-700">
                  {[
                    { icon: Github, href: "https://github.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: Twitter, href: "https://twitter.com" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6 light:card-enhanced"
                    >
                      <social.icon className="h-5 w-5 text-foreground" />
                      <span className="sr-only">
                        {social.href.split("//")[1]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center animate-fadeIn animation-delay-700">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#3b82f6] opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#8b5cf6] opacity-60"></div>

                  <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl transform hover:scale-105 transition-transform duration-500 group light:card-enhanced">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Annie Phung"
                      className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center p-1">
              <div className="w-1 h-2 bg-foreground/50 rounded-full animate-scrollDown"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3b82f6]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#8b5cf6]/10 to-transparent"></div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <p className="text-primary font-medium tracking-wider mb-2 animate-slideUp scroll-animation">
                ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center animate-slideUp scroll-animation-delay-200">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                  My Journey
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slideLeft scroll-animation">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=500&width=600"
                      alt="Working on code"
                      className="rounded-xl shadow-2xl border border-border transform hover:translate-y-2 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg border border-border shadow-xl">
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text">
                        5+
                      </p>
                      <p className="text-foreground/70 text-sm">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-slideRight scroll-animation-delay-200">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a passionate frontend developer with over 5 years of
                  experience building modern web applications and digital
                  products. I specialize in React, Next.js, and TypeScript, with
                  a strong focus on creating intuitive and performant user
                  experiences.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  My journey in software development began at University of
                  Technology where I earned my Bachelor's degree in Computer
                  Science. Since then, I've worked with startups and established
                  companies to deliver solutions that solve real-world problems.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { number: "50+", label: "Projects Completed" },
                    { number: "20+", label: "Happy Clients" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-primary/5 backdrop-blur-lg rounded-lg p-6 border border-primary/10 hover:bg-primary/10 transition-colors duration-300"
                    >
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text">
                        {stat.number}
                      </p>
                      <p className="text-foreground/70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-4 bg-primary/10 backdrop-blur-md text-foreground border border-primary/20 hover:bg-primary/20 transition-all duration-300 rounded-full px-6"
                  asChild
                >
                  <Link href="/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background light:gradient-bg"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#8b5cf6]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#3b82f6]/10 to-transparent"></div>

            {/* Light mode decorative elements */}
            <div className="hidden light:block">
              <div className="absolute top-1/4 left-[5%] w-64 h-64 accent-shape animate-float-light"></div>
              <div className="absolute bottom-1/4 right-[5%] w-48 h-48 accent-shape animate-pulse-light animation-delay-3000"></div>
            </div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <p className="text-primary font-medium tracking-wider mb-2 animate-slideUp scroll-animation">
                WORK HISTORY
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center animate-slideUp scroll-animation-delay-200">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                  Professional Experience
                </span>
              </h2>
              <p className="text-center text-foreground/70 max-w-2xl mx-auto mt-4 animate-fadeIn scroll-animation-delay-400">
                My journey through the tech industry has equipped me with
                valuable skills and experiences.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] transform md:translate-x-[-0.5px]"></div>

                {/* JP Morgan */}
                <div className="relative flex flex-col md:flex-row md:items-center mb-16">
                  <div className="flex-1 md:text-right md:pr-12 animate-slideLeft scroll-animation">
                    <div className="bg-card/50 backdrop-blur-lg rounded-xl p-6 border border-border hover:bg-card/80 transition-all duration-300 md:ml-auto md:mr-0 max-w-md light:card-enhanced">
                      <div className="text-sm text-[#3b82f6] font-medium mb-1">
                        2020 - Present
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Senior Frontend Developer
                      </h3>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text mb-3">
                        JP Morgan
                      </h4>
                      <p className="text-foreground/70">
                        Led the development of mission-critical financial
                        dashboards and trading interfaces. Optimized performance
                        for real-time data visualization and implemented secure
                        authentication protocols.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          React
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          TypeScript
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          Redux
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          D3.js
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-[#3b82f6] transform md:translate-x-[-50%] border-4 border-background z-10"></div>
                  <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>

                {/* Eleka */}
                <div className="relative flex flex-col md:flex-row md:items-center mb-16">
                  <div className="flex-1 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-[#8b5cf6] transform md:translate-x-[-50%] border-4 border-background z-10"></div>
                  <div className="flex-1 md:pl-12 animate-slideRight scroll-animation">
                    <div className="bg-card/50 backdrop-blur-lg rounded-xl p-6 border border-border hover:bg-card/80 transition-all duration-300 max-w-md light:card-enhanced">
                      <div className="text-sm text-[#8b5cf6] font-medium mb-1">
                        2018 - 2020
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Frontend Team Lead
                      </h3>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text mb-3">
                        Eleka
                      </h4>
                      <p className="text-foreground/70">
                        Managed a team of 5 developers building innovative SaaS
                        products. Implemented CI/CD pipelines and modern
                        frontend architecture patterns, resulting in 40% faster
                        development cycles.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          Vue.js
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          Nuxt.js
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          JavaScript
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          AWS
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ascension */}
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 md:text-right md:pr-12 animate-slideLeft scroll-animation">
                    <div className="bg-card/50 backdrop-blur-lg rounded-xl p-6 border border-border hover:bg-card/80 transition-all duration-300 md:ml-auto md:mr-0 max-w-md light:card-enhanced">
                      <div className="text-sm text-[#ec4899] font-medium mb-1">
                        2016 - 2018
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Frontend Developer
                      </h3>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-[#ec4899] to-[#3b82f6] text-transparent bg-clip-text mb-3">
                        Ascension
                      </h4>
                      <p className="text-foreground/70">
                        Developed responsive healthcare applications focused on
                        patient experience. Collaborated with UX designers to
                        implement accessible interfaces compliant with
                        healthcare regulations.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          React
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          JavaScript
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          SCSS
                        </Badge>
                        <Badge className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300 light:shimmer-effect">
                          Accessibility
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-[#ec4899] transform md:translate-x-[-50%] border-4 border-background z-10"></div>
                  <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background light:section-pattern"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#3b82f6]/10 to-transparent"></div>

            {/* Light mode decorative elements */}
            <div className="hidden light:block">
              <div className="absolute top-1/3 right-[15%] w-72 h-72 accent-shape animate-float-light"></div>
              <div className="absolute bottom-1/3 left-[10%] w-56 h-56 accent-shape animate-pulse-light animation-delay-4000"></div>
            </div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <p className="text-primary font-medium tracking-wider mb-2 animate-slideUp scroll-animation">
                MY WORK
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center animate-slideUp scroll-animation-delay-200">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                  Featured Projects
                </span>
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4 animate-fadeIn scroll-animation-delay-400">
                Here's a selection of my recent work. Each project represents a
                unique challenge and solution. Click on "Details" to see the
                full case study.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`animate-fadeIn scroll-animation animation-delay-${
                    (index % 6) * 100
                  }`}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    slug={project.slug}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12 animate-fadeIn scroll-animation">
              <Button
                className="bg-primary/10 backdrop-blur-md text-foreground border border-border hover:bg-primary/20 transition-all duration-300 rounded-full px-8 py-6 light:card-enhanced"
                asChild
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background light:gradient-bg"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#ec4899]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#3b82f6]/10 to-transparent"></div>

            {/* Light mode decorative elements */}
            <div className="hidden light:block">
              <div className="absolute bottom-1/4 right-[20%] w-64 h-64 accent-shape animate-float-light"></div>
              <div className="absolute top-1/4 left-[15%] w-48 h-48 accent-shape animate-pulse-light animation-delay-3000"></div>
            </div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <p className="text-primary font-medium tracking-wider mb-2 animate-slideUp scroll-animation">
                MY EXPERTISE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center animate-slideUp scroll-animation-delay-200">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                  Skills & Technologies
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-16">
                {[
                  {
                    title: "Frontend Development",
                    skills: [
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Vue.js",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Redux",
                    ],
                    animation: "animate-slideLeft",
                    delay: "",
                  },
                  {
                    title: "Backend Development",
                    skills: [
                      "Node.js",
                      "Express",
                      "Python",
                      "Django",
                      "GraphQL",
                      "REST API",
                      "MongoDB",
                      "PostgreSQL",
                      "MySQL",
                    ],
                    animation: "animate-slideRight",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "DevOps & Tools",
                    skills: [
                      "Git",
                      "GitHub",
                      "Docker",
                      "AWS",
                      "Vercel",
                      "CI/CD",
                      "Jest",
                      "Cypress",
                      "Webpack",
                    ],
                    animation: "animate-slideLeft",
                    delay: "animation-delay-400",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className={`${category.animation} scroll-animation ${category.delay}`}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-xl blur-md"></div>
                      <div className="relative bg-card/50 backdrop-blur-lg rounded-xl p-8 border border-border hover:bg-card/80 transition-all duration-500 light:card-enhanced">
                        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <SkillBadge key={skillIndex} name={skill} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3b82f6]/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#8b5cf6]/10 to-transparent"></div>
          </div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <p className="text-primary font-medium tracking-wider mb-2 animate-slideUp scroll-animation">
                GET IN TOUCH
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center animate-slideUp scroll-animation-delay-200">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                  Let's Work Together
                </span>
              </h2>
              <p className="text-center text-foreground/70 max-w-2xl mx-auto mt-4 animate-fadeIn scroll-animation-delay-400">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8 animate-slideLeft scroll-animation">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-xl blur-md"></div>
                  <div className="relative bg-card/50 backdrop-blur-lg rounded-xl p-8 border border-border">
                    <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          text: "anniephung.dev@gmail.com",
                          href: "mailto:anniephung.dev@gmail.com",
                        },
                        {
                          icon: Linkedin,
                          text: "linkedin.com/in/anniephung-dev",
                          href: "https://linkedin.com/in/anniephung-dev",
                        },
                        {
                          icon: Github,
                          text: "github.com/anniephung-dev",
                          href: "https://github.com/anniephung-dev",
                        },
                        {
                          icon: Twitter,
                          text: "@anniephung-dev",
                          href: "https://twitter.com/anniephung-dev",
                        },
                      ].map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 group"
                        >
                          <div className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] p-3 rounded-full text-white transform group-hover:scale-110 transition-all duration-300">
                            <contact.icon className="h-5 w-5" />
                          </div>
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-foreground transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                          >
                            {contact.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slideRight scroll-animation">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-xl blur-md"></div>
                  <div className="relative bg-card/50 backdrop-blur-lg rounded-xl p-8 border border-border">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative py-12 border-t border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background"></div>
        </div>

        <div className="container px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/60">
              © {new Date().getFullYear()} Annie Phung. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Mail, href: "mailto:anniephung@example.com" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.href.split("//")[1]}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
