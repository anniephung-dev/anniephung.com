"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
          <SheetDescription className="text-left">Navigate to different sections of the portfolio</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 border-b border-border"
            >
              {item}
            </Link>
          ))}
          <Button
            className="mt-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300"
            asChild
          >
            <Link href="#contact" onClick={handleLinkClick}>
              Get in touch
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
