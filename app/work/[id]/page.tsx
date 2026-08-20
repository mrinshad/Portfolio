import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import { flagshipProjects } from "@/data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return flagshipProjects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = flagshipProjects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const isLive = Boolean(project.liveUrl)
  const currentIndex = flagshipProjects.findIndex((p) => p.id === id)
  const nextProject = flagshipProjects[(currentIndex + 1) % flagshipProjects.length]
  const projectNumber = `0${currentIndex + 1} / 0${flagshipProjects.length}`

  return (
    <main className="py-16 lg:py-24 space-y-20">
      <div className="container max-w-5xl px-6 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Selected Work
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-6 border-b border-border/50 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            {projectNumber} • {project.category}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase">
            {project.name}
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            {project.summary}
          </p>

          {isLive && (
            <div className="pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-background bg-foreground px-8 py-4 rounded-none hover:bg-accentBlue hover:text-white transition-colors"
              >
                Launch Live System
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* Full-Width Visual Hero Stage */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {project.id}.byten.in / system-architecture
            </span>
            <div className="w-8" />
          </div>

          <div className="p-12 sm:p-20 flex flex-col items-center justify-center text-center space-y-6 min-h-[360px] bg-gradient-to-br from-card to-muted/20">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Production Architecture View
            </div>
            <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight uppercase">
              {project.name}
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              Role: {project.role}
            </div>
          </div>
        </div>

        {/* Metadata Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-border/50">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Classification
            </div>
            <div className="text-base font-bold text-foreground uppercase pt-1">
              {project.typeLabel}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Status
            </div>
            <div className="text-base font-bold text-foreground uppercase pt-1">
              {project.statusText.split(" ")[0]}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Lead Role
            </div>
            <div className="text-base font-bold text-foreground uppercase pt-1">
              {project.role}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Organization
            </div>
            <div className="text-base font-bold text-foreground uppercase pt-1">
              ByteN
            </div>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
            Architecture & Engineering Scope
          </h2>

          <div className="space-y-6">
            {project.scopeHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="border-t border-border/50 pt-6 flex items-start gap-4 group"
              >
                <span className="font-mono text-sm font-bold text-accentBlue mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Strip */}
        <div className="space-y-4 pt-8 border-t border-border/50">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Technologies & Infrastructure
          </h3>
          <div className="flex flex-wrap gap-6 text-sm font-mono uppercase tracking-wider text-foreground">
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 hover:text-accentBlue transition-colors">
                <TechIcon name={tech} className="h-4 w-4 text-muted-foreground" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Footer Navigation */}
        <div className="pt-20 border-t-2 border-foreground flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue transition-colors"
          >
            ← All Systems
          </Link>

          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline transition-colors"
          >
            Next: {nextProject.name}
            <ArrowRight className="h-4 w-4 text-accentBlue" />
          </Link>
        </div>
      </div>
    </main>
  )
}
