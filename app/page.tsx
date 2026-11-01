import Image from "next/image"
import Link from "next/link"
import { home, profile, flagshipProjects, skillGroups } from "@/data"
import { ArrowRight, ArrowUpRight } from "@/components/marks"
import { WorkIndex } from "@/components/work-index"
import { SystemSchematic } from "@/components/system-schematic"

export default function HomePage() {
  return (
    <>
      {/* ── Masthead ─────────────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="shell pb-16 pt-8 md:pb-24 md:pt-10">
          {/* Document header: who, where, status */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-rule pb-3">
            <p className="text-sm text-ink">
              {profile.name}
              <span className="hidden text-muted-foreground sm:inline">
                {" "}
                — {profile.role}
              </span>
            </p>
            <p className="label flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
              {profile.location}
            </p>
          </div>

          <div className="grid items-end gap-10 pt-12 md:grid-cols-12 md:gap-8 md:pt-16">
            <div className="md:col-span-8">
              <h1 className="display text-[clamp(2.5rem,5.6vw,4.5rem)]">
                {home.masthead.lines.map((line, i) => (
                  <span key={line} className="line-mask">
                    <span style={{ ["--line-delay" as string]: `${i * 110}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="measure mt-9 text-[1.0625rem] leading-relaxed text-muted-foreground">
                {home.masthead.body}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href={home.masthead.primary.href}
                  className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-label text-paper transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {home.masthead.primary.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={home.masthead.secondary.href}
                  className="link-static text-sm text-muted-foreground"
                >
                  {home.masthead.secondary.label}
                </Link>
              </div>
            </div>

            {/* Portrait plate */}
            <div className="md:col-span-4">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-surface">
                  <Image
                    src="/assets/photo.png"
                    alt="Mohammed Rinshad P, photographed at a laptop"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-[62%_28%] grayscale contrast-[1.06] transition-[filter] duration-700 ease-out hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between">
                  <span className="label">{profile.role}</span>
                  <span className="label">2021 — now</span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Facts strip */}
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-6 md:grid-cols-4">
            {home.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Work index ───────────────────────────────────────────────────── */}
      <section className="shell py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-tight tracking-tight">
            Systems in use
          </h2>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            All work
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-2">
          <WorkIndex projects={flagshipProjects} />
        </div>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 md:grid-cols-12">
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
            Every system here follows the same path: a business event enters
            through a validated boundary, is checked against the data model, and
            lands in a ledger that can be audited later.
          </p>
          <div className="md:col-span-8 md:pt-4">
            <SystemSchematic />
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────────────────── */}
      <section className="border-y border-rule bg-surface/50">
        <div className="shell py-20 md:py-24">
          <h2 className="max-w-xl font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-tight tracking-tight">
            How I work
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {home.principles.map((principle, i) => (
              <div
                key={principle.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="border-t border-rule pt-5"
              >
                <h3 className="font-serif text-[1.5rem] leading-snug tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────────────── */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-tight tracking-tight">
              What I work
              <br />
              with day to day
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A working stack, not a list of everything I have read about. These
              are the tools behind the systems above.
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
            >
              Full background
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skillGroups.slice(0, 4).map((group) => (
                <div key={group.title} className="border-t border-rule pt-4">
                  <h3 className="text-sm font-medium text-ink">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-rule">
        <div className="shell py-20 md:py-28">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="display text-[clamp(2.25rem,5.4vw,4.5rem)]">
                Tell me what
                <br />
                you are building.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {profile.available}. If you are scoping an ERP, untangling a data
                model, or hiring for a senior role, email is the fastest route.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-label text-paper transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Get in touch
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-static text-sm text-muted-foreground"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
