"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormState({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/80 font-medium">
          Name
        </Label>
        <div className="relative">
          <Input
            id="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 pl-4"
          />
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-0 group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/80 font-medium">
          Email
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 pl-4"
          />
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-0 group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground/80 font-medium">
          Message
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell me about your project or inquiry"
            className="min-h-[120px] bg-background/50 border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 pl-4"
            required
          />
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-0 group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 rounded-full py-6 mt-4 shadow-lg shadow-primary/20 hover:shadow-primary/40"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  )
}
