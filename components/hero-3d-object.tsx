"use client"

import * as React from "react"
import { useTheme } from "next-themes"

interface Point3D {
  x: number
  y: number
  z: number
}

export function Hero3DObject() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const { resolvedTheme } = useTheme()
  const mouseRef = React.useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    // Resize canvas with device pixel ratio
    const handleResize = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Mouse move interaction (max 3-5 degrees)
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2)
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2)

      // Clamp between -1 and 1, max tilt ~0.08 radians (~4.5 deg)
      mouseRef.current.targetX = Math.max(-1, Math.min(1, deltaY)) * 0.08
      mouseRef.current.targetY = Math.max(-1, Math.min(1, deltaX)) * 0.08
    }

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0
      mouseRef.current.targetY = 0
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    // Visibility Observer to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(canvas)

    // Geometric Model Definition
    // 1. Central Core Polyhedron Vertices (Engineered Octahedron Lattice)
    const coreSize = 36
    const coreVertices: Point3D[] = [
      { x: 0, y: -coreSize, z: 0 },
      { x: coreSize, y: 0, z: 0 },
      { x: 0, y: 0, z: coreSize },
      { x: -coreSize, y: 0, z: 0 },
      { x: 0, y: 0, z: -coreSize },
      { x: 0, y: coreSize, z: 0 },
    ]

    const coreEdges: [number, number][] = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1],
    ]

    // 2. Three Orbital Rings (Parametric Rings)
    const createRing = (radius: number, segments: number, tiltX: number, tiltY: number) => {
      const pts: Point3D[] = []
      for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2
        let x = Math.cos(theta) * radius
        let y = Math.sin(theta) * radius
        let z = 0

        // Apply static tilt
        const cosX = Math.cos(tiltX)
        const sinX = Math.sin(tiltX)
        const cosY = Math.cos(tiltY)
        const sinY = Math.sin(tiltY)

        const y1 = y * cosX - z * sinX
        const z1 = y * sinX + z * cosX
        const x2 = x * cosY + z1 * sinY
        const z2 = -x * sinY + z1 * cosY

        pts.push({ x: x2, y: y1, z: z2 })
      }
      return pts
    }

    const ring1 = createRing(85, 48, 0.45, 0.25)
    const ring2 = createRing(130, 64, -0.65, 0.85)
    const ring3 = createRing(175, 72, 1.1, -0.4)

    // 3. Satellite Node Positions on Rings
    const satelliteNodes = [
      { ring: 0, index: 12 },
      { ring: 0, index: 36 },
      { ring: 1, index: 18 },
      { ring: 1, index: 48 },
      { ring: 2, index: 24 },
      { ring: 2, index: 60 },
    ]

    let time = 0

    // Matrix Rotation Helper
    const rotatePoint = (
      p: Point3D,
      rotX: number,
      rotY: number,
      rotZ: number
    ): Point3D => {
      // Rotate Y
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      let x1 = p.x * cosY + p.z * sinY
      let y1 = p.y
      let z1 = -p.x * sinY + p.z * cosY

      // Rotate X
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      let x2 = x1
      let y2 = y1 * cosX - z1 * sinX
      let z2 = y1 * sinX + z1 * cosX

      // Rotate Z
      const cosZ = Math.cos(rotZ)
      const sinZ = Math.sin(rotZ)
      let x3 = x2 * cosZ - y2 * sinZ
      let y3 = x2 * sinZ + y2 * cosZ
      let z3 = z2

      return { x: x3, y: y3, z: z3 }
    }

    // Perspective Projection
    const project = (p: Point3D, width: number, height: number) => {
      const fov = 450
      const distance = 420
      const scale = fov / (distance + p.z)
      return {
        x: width / 2 + p.x * scale,
        y: height / 2 + p.y * scale,
        scale,
        z: p.z,
      }
    }

    const render = () => {
      if (!ctx || !canvas) return

      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)

      // Smooth mouse interpolation (spring lerp)
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Base rotation + pointer delta
      const currentRotX = time * 0.18 + mouseRef.current.x + 0.2
      const currentRotY = time * 0.28 + mouseRef.current.y + 0.3
      const currentRotZ = time * 0.08

      const isDark = resolvedTheme === "dark"

      // Theme-based stroke & fill styling
      const strokeColorRing = isDark
        ? "rgba(255, 255, 255, 0.18)"
        : "rgba(0, 0, 0, 0.16)"
      const strokeColorCore = isDark
        ? "rgba(255, 255, 255, 0.45)"
        : "rgba(0, 0, 0, 0.42)"
      const connectorColor = isDark
        ? "rgba(59, 130, 246, 0.25)"
        : "rgba(37, 99, 235, 0.22)"
      const accentNodeColor = isDark ? "#3b82f6" : "#2563eb"
      const coreNodeColor = isDark ? "#fafafa" : "#09090b"

      // 1. Draw Rings
      const rings = [ring1, ring2, ring3]
      rings.forEach((ringPts, rIdx) => {
        ctx.beginPath()
        const projectedRing = ringPts.map((p) =>
          project(rotatePoint(p, currentRotX, currentRotY, currentRotZ), width, height)
        )

        projectedRing.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        })
        ctx.closePath()
        ctx.strokeStyle = strokeColorRing
        ctx.lineWidth = rIdx === 1 ? 1.2 : 0.9
        ctx.stroke()
      })

      // 2. Draw Central Core
      const projectedCore = coreVertices.map((v) =>
        project(rotatePoint(v, currentRotX * 1.5, currentRotY * 1.5, currentRotZ), width, height)
      )

      ctx.beginPath()
      coreEdges.forEach(([start, end]) => {
        const p1 = projectedCore[start]
        const p2 = projectedCore[end]
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
      })
      ctx.strokeStyle = strokeColorCore
      ctx.lineWidth = 1.2
      ctx.stroke()

      // Core Nodes
      projectedCore.forEach((pt) => {
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 2 * pt.scale, 0, Math.PI * 2)
        ctx.fillStyle = coreNodeColor
        ctx.fill()
      })

      // 3. Draw Satellite Nodes & Delicate Connection Lines
      satelliteNodes.forEach((sat) => {
        const ring = rings[sat.ring]
        const p = ring[sat.index % ring.length]
        const rotated = rotatePoint(p, currentRotX, currentRotY, currentRotZ)
        const proj = project(rotated, width, height)

        // Connection line to center core
        const coreCenter = project(
          rotatePoint({ x: 0, y: 0, z: 0 }, currentRotX * 1.5, currentRotY * 1.5, currentRotZ),
          width,
          height
        )

        ctx.beginPath()
        ctx.moveTo(proj.x, proj.y)
        ctx.lineTo(coreCenter.x, coreCenter.y)
        ctx.strokeStyle = connectorColor
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Satellite Node dot
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, 3 * proj.scale, 0, Math.PI * 2)
        ctx.fillStyle = accentNodeColor
        ctx.fill()
      })

      // Advance time if animations are enabled
      if (!prefersReducedMotion) {
        time += 0.004
        if (isVisible) {
          animationFrameId = requestAnimationFrame(render)
        }
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
    }
  }, [resolvedTheme])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] -z-5 overflow-hidden select-none opacity-75 dark:opacity-85 hidden sm:block"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}
