"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg gap-1.5 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
      aria-label="Scroll to top"
    >
      TOP
      <ArrowUp className="h-3.5 w-3.5" />
    </Button>
  )
}
