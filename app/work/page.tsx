import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { clientWebsites, flagshipProjects, workPage } from "@/data"
import { ArrowRight, ArrowUpRight } from "@/components/marks"

export const metadata: Metadata = {
  title: "Work",
  description: workPage.body,
  alternates: { canonical: "/work" },
}

const statusText = {
  "in-production": "In production",
  internal: "Internal",
  "in-development": "In development",
  public: "Public",
} as const

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <h1 className="display max-w-4xl whitespace-pre-line text-[clamp(2.25rem,5.6vw,4.5rem)]">
            {workPage.heading}
          </h1>
          <p className="measure mt-8 text-[1.0625rem] leading-relaxed text-muted-foreground">
            {workPage.body}
          </p>
        </div>
      </section>

      {/* Flagships */}
      <section className="shell py-16 md:py-20">
        <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
          <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">
            Flagship systems
          </h2>
          <p className="label">Four platforms</p>
        </div>

        <div className="divide-y divide-rule">
          {flagshipProjects.map((project, i) => (
            <article
              key={project.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              className="grid gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-5 md:order-2">
                <Link
                  href={`/work/${project.id}`}
                  className="plate block aspect-[16/10]"
                  aria-label={`${project.name} — read case study`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} interface`}
                    width={1440}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="h-full w-full object-cover object-top"
                  />
                </Link>
              </div>

              <div className="md:col-span-7 md:order-1 md:flex md:flex-col md:justify-center">
                <div className="flex items-baseline gap-3">
                  <span className="label !text-[0.7rem]">{project.index}</span>
                  <span className="label !text-[0.7rem]">
                    {project.year} · {statusText[project.status]}
                  </span>
                </div>

                <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.8vw,3rem)] leading-none tracking-tight">
                  <Link
                    href={`/work/${project.id}`}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {project.category}
                  {project.client ? ` · ${project.client}` : ""}
                </p>

                <p className="measure mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href={`/work/${project.id}`}
                    className="group inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-label text-ink transition-colors hover:text-accent"
                  >
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-label text-muted-foreground transition-colors hover:text-accent"
                    >
                      Live site
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Client sites */}
      <section className="border-t border-rule bg-surface/40">
        <div className="shell py-16 md:py-20">
          <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
            <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">
              Client websites
            </h2>
            <p className="label">Three sites</p>
          </div>

          <p className="measure mt-6 text-sm leading-relaxed text-muted-foreground">
            Commercial sites where my scope was planning, structure and
            deployment rather than full product engineering.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {clientWebsites.map((site) => (
              <a
                key={site.id}
                href={site.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="plate aspect-[16/10]">
                  <Image
                    src={site.image}
                    alt={`${site.name} website`}
                    width={960}
                    height={600}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
                    {site.name}
                  </h3>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{site.category}</p>
                <p className="label mt-3 !text-[0.7rem]">{site.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
