import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { flagshipProjects, profile } from "@/data"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/marks"
import { PlateGallery } from "@/components/plate-gallery"

type Params = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params
  const project = flagshipProjects.find((item) => item.id === id)

  if (!project) return { title: "Not found" }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description: project.summary,
      url: `/work/${project.id}`,
      images: [{ url: project.image, width: 1440, height: 900, alt: project.name }],
    },
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const { id } = await params
  const project = flagshipProjects.find((item) => item.id === id)

  if (!project) notFound()

  const position = flagshipProjects.findIndex((item) => item.id === id)
  const next = flagshipProjects[(position + 1) % flagshipProjects.length]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: { "@type": "Person", name: profile.name },
    url: `${profile.siteUrl}/work/${project.id}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Header */}
        <header className="border-b border-rule">
          <div className="shell py-12 md:py-16">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              All work
            </Link>

            <div className="mt-8 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="label !text-[0.7rem]">{project.index}</span>
                  <span className="label !text-[0.7rem]">
                    {project.year} · {project.statusText}
                  </span>
                </div>

                <h1 className="display mt-4 text-[clamp(2.5rem,6.4vw,5rem)]">
                  {project.name}
                </h1>

                <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {project.lede}
                </p>
              </div>

              <dl className="md:col-span-4 md:border-l md:border-rule md:pl-8">
                {[
                  { term: "Discipline", detail: project.category },
                  { term: "Role", detail: project.role },
                  { term: "Client", detail: project.client ?? "Internal / public" },
                  { term: "Stack", detail: project.technologies.join(", ") },
                ].map((row) => (
                  <div key={row.term} className="border-b border-rule py-3 first:pt-0">
                    <dt className="label !text-[0.7rem]">{row.term}</dt>
                    <dd className="mt-1 text-sm text-ink">{row.detail}</dd>
                  </div>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-label text-ink transition-colors hover:text-accent"
                  >
                    Visit live site
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </dl>
            </div>
          </div>
        </header>

        {/* Gallery */}
        <div className="shell pt-10 md:pt-14">
          <PlateGallery project={project} />
        </div>

        {/* Body */}
        <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <h2 className="label">Scope</h2>
            <ul className="mt-6 space-y-0 border-t border-rule">
              {project.scope.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-rule py-5 text-[0.95rem] leading-relaxed text-ink"
                >
                  <span className="label mt-1 shrink-0 !text-[0.7rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            {project.notes.length > 0 && (
              <div className="space-y-8 md:pl-8 md:border-l md:border-rule">
                {project.notes.map((note) => (
                  <section key={note.label}>
                    <h2 className="label">{note.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {note.body}
                    </p>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Next */}
        <div className="border-t border-rule">
          <Link
            href={`/work/${next.id}`}
            className="group shell flex items-center justify-between gap-6 py-10"
          >
            <div>
              <p className="label">Next project</p>
              <p className="mt-2 font-serif text-[clamp(1.6rem,3.4vw,2.5rem)] leading-none tracking-tight transition-colors group-hover:text-accent">
                {next.name}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{next.category}</p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-accent" />
          </Link>
        </div>
      </article>
    </>
  )
}
