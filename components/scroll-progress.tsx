"use client"

import { useEffect, useRef } from "react"

/**
 * A single hairline that fills as the document is read.
 * Sits on the header's bottom rule so it reads as a page edge, not a widget.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = ref.current
    if (!bar) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame: number | null = null

    const update = () => {
      frame = null
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      bar.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent"
      ref={ref}
      style={{ transform: "scaleX(0)" }}
    />
  )
}
