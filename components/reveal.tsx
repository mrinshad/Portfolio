"use client"

import { useEffect } from "react"

/**
 * Marks the document as reveal-capable and reveals [data-reveal] elements
 * as they enter the viewport. Without JS every element stays visible.
 *
 * Uses a MutationObserver to detect [data-reveal] elements added after
 * initial mount (e.g. after client-side navigation), so sections like
 * "How I Work", "Flagship Systems", and "Experience" appear correctly
 * regardless of how the user reaches the page.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || !("IntersectionObserver" in window)) {
      /* Reveal everything immediately; also handle future DOM additions */
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((node) => node.classList.add("is-visible"))

      const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const n of m.addedNodes) {
            if (!(n instanceof HTMLElement)) continue
            if (n.hasAttribute("data-reveal")) n.classList.add("is-visible")
            n.querySelectorAll<HTMLElement>("[data-reveal]").forEach((c) =>
              c.classList.add("is-visible")
            )
          }
        }
      })
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
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

    /* Observe all current [data-reveal] elements */
    const observeNode = (node: HTMLElement) => {
      if (!node.classList.contains("is-visible")) {
        observer.observe(node)
      }
    }

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach(observeNode)

    /* Watch for new [data-reveal] elements added by client-side navigation */
    const mutation = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const n of m.addedNodes) {
          if (!(n instanceof HTMLElement)) continue
          if (n.hasAttribute("data-reveal")) observeNode(n)
          n.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeNode)
        }
      }
    })
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
      root.classList.remove("reveal-ready")
    }
  }, [])

  return null
}
