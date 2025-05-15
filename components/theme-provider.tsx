"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme?: Theme | undefined
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
  attribute = "data-theme",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<Theme | undefined>(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.getAttribute(attribute)

    // Initialize from localStorage or default to dark
    const savedTheme = localStorage.getItem(storageKey)
    setTheme(savedTheme ? (savedTheme as Theme) : defaultTheme)

    // Apply the theme immediately
    applyTheme(savedTheme ? (savedTheme as Theme) : defaultTheme)
  }, [attribute, defaultTheme, storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    if (disableTransitionOnChange) {
      root.classList.add("transition-none")
      window.setTimeout(() => {
        root.classList.remove("transition-none")
      }, 0)
    }

    applyTheme(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, attribute, disableTransitionOnChange, storageKey])

  useEffect(() => {
    if (!enableSystem) {
      return
    }

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      if (theme === "system") {
        const resolvedTheme = e.matches ? "dark" : "light"
        setResolvedTheme(resolvedTheme)
        applyTheme("system")
      }
    }

    darkModeMediaQuery.addEventListener("change", updateSystemTheme)
    updateSystemTheme(darkModeMediaQuery)

    return () => darkModeMediaQuery.removeEventListener("change", updateSystemTheme)
  }, [enableSystem, theme])

  function applyTheme(newTheme: Theme) {
    const root = window.document.documentElement
    const isDark = newTheme === "dark" || (newTheme === "system" && resolvedTheme === "dark")

    root.classList.remove("light", "dark")
    root.classList.add(isDark ? "dark" : "light")

    // Also set the data-theme attribute
    root.setAttribute(attribute, isDark ? "dark" : "light")
  }

  const value = {
    theme,
    setTheme,
    resolvedTheme: theme === "system" ? resolvedTheme : theme,
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
