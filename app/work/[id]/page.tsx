import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import { ProjectImageSlider } from "@/components/project-image-slider"
import { flagshipProjects } from "@/data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return flagshipProjects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = flagshipProjects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} — ${project.typeLabel} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.id}`,
    },
    openGraph: {
      title: `${project.name} — ${project.typeLabel} | Mohammed Rinshad P`,
      description: project.summary,
      url: `/work/${project.id}`,
      images: project.image ? [{ url: project.image, width: 1200, height: 675, alt: `${project.name} Interface` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.typeLabel} | Mohammed Rinshad P`,
      description: project.summary,
      images: project.image ? [project.image] : [],
    },
  }
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mrinshad.github.io/Portfolio"

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Mohammed Rinshad P",
    },
    url: `${siteUrl}/work/${project.id}`,
  }

  return (
    <main className="py-16 lg:py-24 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="container max-w-5xl px-6 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
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
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-background bg-foreground px-8 py-4 rounded-none hover:bg-accentBlue hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
              >
                <span>Launch Live System</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>

        {/* Full-Width Visual Gallery Slider */}
        <div className="overflow-hidden">
          <ProjectImageSlider project={project} />
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
              <span key={tech} className="inline-flex items-center gap-2 hover:text-accentBlue transition-colors duration-200">
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
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-1" />
            <span>All Systems</span>
          </Link>

          <Link
            href={`/work/${nextProject.id}`}
            className="group inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
          >
            <span>Next: {nextProject.name}</span>
            <ArrowRight className="h-4 w-4 text-accentBlue transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  )
}
