"use client"

import * as React from "react"

export function HeroPointerGlow() {
  const glowRef = React.useRef<HTMLDivElement | null>(null)
  const animRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    // Check for touch-only devices or reduced motion preference
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (!isFinePointer || prefersReducedMotion) return

    const glowEl = glowRef.current
    if (!glowEl) return

    const parentSection = glowEl.closest("section")
    if (!parentSection) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let targetOpacity = 0
    let currentOpacity = 0
    let hasInit = false

    const handlePointerMove = (e: PointerEvent) => {
      const rect = parentSection.getBoundingClientRect()
      // Check if within bounds of the hero section
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        targetX = e.clientX - rect.left
        targetY = e.clientY - rect.top
        targetOpacity = 1
        if (!hasInit) {
          currentX = targetX
          currentY = targetY
          hasInit = true
        }
      } else {
        targetOpacity = 0
      }
    }

    const handleWindowLeave = () => {
      targetOpacity = 0
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("blur", handleWindowLeave)
    document.addEventListener("mouseleave", handleWindowLeave)

    const radius = 250 // Half of 500px glow width

    const loop = () => {
      // Smooth linear interpolation (lerp)
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      currentOpacity += (targetOpacity - currentOpacity) * 0.06

      if (glowEl) {
        glowEl.style.transform = `translate3d(${currentX - radius}px, ${
          currentY - radius
        }px, 0)`
        glowEl.style.opacity = currentOpacity.toFixed(3)
      }

      animRef.current = requestAnimationFrame(loop)
    }

    animRef.current = requestAnimationFrame(loop)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("blur", handleWindowLeave)
      document.removeEventListener("mouseleave", handleWindowLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-5 overflow-hidden select-none hidden md:block"
    >
      <div
        ref={glowRef}
        className="will-change-transform transform-gpu absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-accentBlue/15 dark:bg-accentBlue/25 blur-[80px] sm:blur-[110px] opacity-0"
      />
    </div>
  )
}
