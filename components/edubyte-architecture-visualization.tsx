"use client"

import * as React from "react"
import { Layers, ShieldCheck, Cpu, Database, ArrowRight, ArrowDown } from "lucide-react"

interface ArchitectureNode {
  id: string
  layerNumber: string
  title: string
  category: string
  icon: React.ElementType
  summary: string
  components: string[]
  technologies: string[]
  connectedTo: string[]
}

const edubyteArchitecture: ArchitectureNode[] = [
  {
    id: "client",
    layerNumber: "01",
    title: "Client Portals & UI",
    category: "Presentation Layer",
    icon: Layers,
    summary:
      "Role-based responsive user interfaces for school administration, teachers, and student records.",
    components: ["Admin Management Dashboard", "Attendance & Grading Grid", "Parent Fee Billing Portal"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Shadcn/UI"],
    connectedTo: ["api"],
  },
  {
    id: "api",
    layerNumber: "02",
    title: "API & Security Layer",
    category: "Routing & Authorization",
    icon: ShieldCheck,
    summary:
      "Modular RESTful API endpoints secured by strict role-based access control (RBAC).",
    components: ["RBAC Route Middleware", "REST Endpoints", "WhatsApp Notification Dispatch"],
    technologies: ["Next.js API Handlers", "Node.js", "Session Auth"],
    connectedTo: ["client", "domain"],
  },
  {
    id: "domain",
    layerNumber: "03",
    title: "Domain Business Logic",
    category: "Institutional Core",
    icon: Cpu,
    summary:
      "Core operational engines executing financial calculations, attendance tracking, and student lifecycles.",
    components: ["Recurring Fee Generation Engine", "Fine & Discount Rule Calculator", "Payment Allocation Ledger"],
    technologies: ["Transactional Services", "Domain Logic Handlers"],
    connectedTo: ["api", "database"],
  },
  {
    id: "database",
    layerNumber: "04",
    title: "Relational Persistence",
    category: "Data Layer",
    icon: Database,
    summary:
      "Normalized relational schema maintaining transactional integrity and audit records.",
    components: ["Normalized Relational Tables", "ACID Compliant Transactions", "Automated DB Migrations"],
    technologies: ["PostgreSQL", "Prisma ORM", "Supabase"],
    connectedTo: ["domain"],
  },
]

export function EduByteArchitectureVisualization() {
  const [hoveredNodeId, setHoveredNodeId] = React.useState<string | null>(null)
  const [isReducedMotion, setIsReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)

    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const isNodeConnected = (nodeId: string) => {
    if (!hoveredNodeId) return true
    if (hoveredNodeId === nodeId) return true
    const activeNode = edubyteArchitecture.find((n) => n.id === hoveredNodeId)
    return activeNode?.connectedTo.includes(nodeId) || false
  }

  const isConnectionActive = (sourceId: string, targetId: string) => {
    if (!hoveredNodeId) return false
    return (
      (hoveredNodeId === sourceId &&
        edubyteArchitecture.find((n) => n.id === sourceId)?.connectedTo.includes(targetId)) ||
      (hoveredNodeId === targetId &&
        edubyteArchitecture.find((n) => n.id === targetId)?.connectedTo.includes(sourceId))
    )
  }

  return (
    <section
      aria-label="eduByte System Architecture"
      className="space-y-8 border-t border-border/50 pt-12"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-500 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            System Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
            Modular Software Pipeline
          </h2>
        </div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Hover or focus layers to inspect connections
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 1. DESKTOP HORIZONTAL ARCHITECTURE PIPELINE                               */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid grid-cols-4 gap-4 relative items-stretch">
        {edubyteArchitecture.map((node, idx) => {
          const isCurrentHovered = hoveredNodeId === node.id
          const isConnected = isNodeConnected(node.id)
          const Icon = node.icon
          const hasNext = idx < edubyteArchitecture.length - 1
          const nextNode = hasNext ? edubyteArchitecture[idx + 1] : null
          const connectionActive = nextNode ? isConnectionActive(node.id, nextNode.id) : false

          return (
            <div key={node.id} className="relative flex flex-col justify-between">
              {/* Architecture Node Card */}
              <button
                type="button"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onFocus={() => setHoveredNodeId(node.id)}
                onBlur={() => setHoveredNodeId(null)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full bg-card/60 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  isCurrentHovered
                    ? "border-emerald-500 bg-emerald-500/[0.08] ring-2 ring-emerald-500/25 shadow-emerald-500/10 scale-[1.02]"
                    : isConnected
                    ? "border-border hover:border-foreground/40 opacity-100"
                    : "border-border/40 opacity-40"
                }`}
              >
                <div className="space-y-4">
                  {/* Layer Header */}
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-xs font-mono font-bold text-emerald-500">
                      {node.layerNumber} / {node.category}
                    </span>
                    <Icon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isCurrentHovered ? "text-emerald-500" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-tight">
                      {node.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {node.summary}
                    </p>
                  </div>

                  {/* Core Components */}
                  <div className="space-y-1.5 pt-2 border-t border-border/40">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Key Modules
                    </div>
                    <ul className="space-y-1">
                      {node.components.map((comp, cIdx) => (
                        <li
                          key={cIdx}
                          className="text-xs text-foreground/90 font-medium flex items-center gap-1.5"
                        >
                          <span className="h-1 w-1 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-4 mt-4 border-t border-border/40 flex flex-wrap gap-1">
                  {node.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>

              {/* Connecting Connector Arrow between nodes */}
              {hasNext && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center"
                >
                  <div
                    className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                      connectionActive
                        ? "border-emerald-500 bg-emerald-500 text-black shadow-lg"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VERTICAL ARCHITECTURE PIPELINE                                  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden space-y-4">
        {edubyteArchitecture.map((node, idx) => {
          const isCurrentHovered = hoveredNodeId === node.id
          const Icon = node.icon
          const hasNext = idx < edubyteArchitecture.length - 1

          return (
            <div key={node.id} className="space-y-4">
              <button
                type="button"
                onClick={() =>
                  setHoveredNodeId(hoveredNodeId === node.id ? null : node.id)
                }
                className={`w-full text-left p-6 rounded-xl border bg-card/60 space-y-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  isCurrentHovered
                    ? "border-emerald-500 bg-emerald-500/[0.08] ring-1 ring-emerald-500/25"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
                  <span className="text-xs font-mono font-bold text-emerald-500">
                    {node.layerNumber} / {node.category}
                  </span>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground uppercase">
                    {node.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {node.summary}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-border/40">
                  <ul className="space-y-1">
                    {node.components.map((comp, cIdx) => (
                      <li
                        key={cIdx}
                        className="text-xs text-foreground/90 font-medium flex items-center gap-1.5"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 pt-2">
                  {node.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>

              {hasNext && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center py-1 text-muted-foreground"
                >
                  <ArrowDown className="h-4 w-4 text-emerald-500/60" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
