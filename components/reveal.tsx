"use client"

import { useEffect } from "react"

/**
 * Marks the document as reveal-capable and reveals [data-reveal] elements
 * as they enter the viewport. Without JS every element stays visible.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"))
      return
    }

    root.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => {
      observer.disconnect()
      root.classList.remove("reveal-ready")
    }
  }, [])

  return null
}
