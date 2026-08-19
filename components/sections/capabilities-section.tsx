import { GraduationCap, Code2, Database, Cloud, Layers, Terminal, Server, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories, educationData } from "@/data"

const techTickerItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  ".NET Core",
  "Supabase",
  "Azure Cloud",
  "Linux (RHEL)",
  "Docker",
  "REST APIs & RBAC",
  "Tailwind CSS",
  "GitHub Actions CI/CD",
]

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities & Background"
      className="py-24 lg:py-32 border-t border-border/40 relative overflow-hidden"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Capabilities & Stack
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Engineering Domains
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A comprehensive overview of architectural competencies, full-stack standards, and verified technical domains.
          </p>
        </div>

        {/* Dynamic Continuous Technology Ticker */}
        <div className="w-full border-y border-border/60 bg-muted/20 py-4 mb-16 overflow-hidden marquee-container rounded-xl">
          <div className="flex w-max items-center gap-8 animate-marquee-fast">
            {[...techTickerItems, ...techTickerItems, ...techTickerItems].map(
              (tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-8 font-mono text-sm font-semibold text-foreground whitespace-nowrap"
                >
                  <span>{tech}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Asymmetric Systems Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Bento Card 1: Systems Architecture */}
          <div className="lg:col-span-4 p-8 rounded-2xl border border-border/70 bg-card space-y-4 shadow-sm hover:border-foreground/30 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Systems Architecture
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designing normalized PostgreSQL schemas, scalable domain boundaries, RBAC authorization, and high-throughput REST APIs tailored for business operations.
            </p>
          </div>

          {/* Bento Card 2: Full-Stack Engineering */}
          <div className="lg:col-span-4 p-8 rounded-2xl border border-border/70 bg-card space-y-4 shadow-sm hover:border-foreground/30 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Full-Stack Engineering
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Implementing production web applications across Next.js, React, Node.js, and .NET Core with strict TypeScript safety and fluid responsive UX.
            </p>
          </div>

          {/* Bento Card 3: Cloud & DevOps */}
          <div className="lg:col-span-4 p-8 rounded-2xl border border-border/70 bg-card space-y-4 shadow-sm hover:border-foreground/30 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground">
              <Cloud className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Cloud, Infra & Standards
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automating deployments with GitHub Actions CI/CD, managing Linux (RHEL) servers, Azure AD B2C auth, and maintaining strict Git code review workflows.
            </p>
          </div>
        </div>

        {/* 2-Column: Categorized Skill Matrix & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Matrix */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="p-5 rounded-xl border border-border/60 bg-card/60 space-y-3"
                >
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-foreground">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-normal bg-muted/40 text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border border-border/70 bg-card space-y-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <GraduationCap className="h-4 w-4" />
              Education & Degrees
            </div>

            <div className="space-y-4 divide-y divide-border/40">
              {educationData.map((edu, idx) => (
                <div key={idx} className={idx > 0 ? "pt-4" : ""}>
                  <div className="text-sm font-bold text-foreground">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-muted-foreground pt-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground pt-1">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
