import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  aboutPage,
  education,
  experience,
  profile,
  skillGroups,
} from "@/data"
import { ArrowRight } from "@/components/marks"

export const metadata: Metadata = {
  title: "About",
  description:
    "Mohammed Rinshad P — full-stack software engineer and technical lead in Kerala, India. Background, experience and the systems behind the portfolio.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  const leadership = experience.filter((item) => item.isLeadership)
  const roles = experience.filter((item) => !item.isLeadership)

  return (
    <>
      {/* Intro */}
      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <h1 className="display whitespace-pre-line text-[clamp(2.25rem,5.4vw,4.25rem)]">
                {aboutPage.heading}
              </h1>

              <div className="measure mt-9 space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
                {aboutPage.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-10 border-l border-accent pl-5">
                <p className="font-serif text-xl italic leading-snug text-ink">
                  “{aboutPage.quote.text}”
                </p>
                <footer className="label mt-2 !text-[0.7rem]">
                  {aboutPage.quote.source}
                </footer>
              </blockquote>
            </div>

            <div className="md:col-span-5">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-surface">
                  <Image
                    src="/assets/photo.png"
                    alt="Mohammed Rinshad P"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-[62%_28%] grayscale contrast-[1.06] transition-[filter] duration-700 hover:grayscale-0"
                  />
                </div>
              </figure>

              <dl className="mt-8 border-t border-rule">
                {aboutPage.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
                  >
                    <dt className="label !text-[0.7rem]">{fact.label}</dt>
                    <dd className="text-right text-sm text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="shell py-16 md:py-20">
        <div className="flex items-baseline justify-between border-b border-rule pb-4">
          <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">Leadership</h2>
          <p className="label">Current</p>
        </div>

        {leadership.map((item) => (
          <div key={item.id} className="grid gap-6 py-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-[1.75rem] leading-none tracking-tight">
                {item.company}
              </h2>
              <p className="mt-2 text-sm text-ink">{item.role}</p>
              <p className="label mt-2 !text-[0.7rem]">{item.period}</p>
              <p className="label mt-1 !text-[0.7rem]">{item.location}</p>
            </div>
            <div className="md:col-span-8">
              <p className="measure text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="border-t border-rule bg-surface/40">
        <div className="shell py-16 md:py-20">
          <div className="flex items-baseline justify-between border-b border-rule pb-4">
            <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">Experience</h2>
            <p className="label">2021 — present</p>
          </div>

          <div className="divide-y divide-rule">
            {roles.map((item, i) => (
              <div
                key={item.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                className="grid gap-6 py-8 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <h3 className="text-[1.05rem] font-medium text-ink">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                  <p className="label mt-2 !text-[0.7rem]">{item.period}</p>
                  <p className="label mt-1 !text-[0.7rem]">{item.location}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="measure text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <p className="mt-3 text-[0.8rem] text-muted-foreground">
                    {item.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="shell py-16 md:py-20">
        <div className="flex items-baseline justify-between border-b border-rule pb-4">
          <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">Capabilities</h2>
          <p className="label">Six domains</p>
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.index} className="border-t border-rule pt-4">
              <h3 className="text-sm font-medium text-ink">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.note}
              </p>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-ink/70">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-rule">
        <div className="shell py-16 md:py-20">
          <div className="flex items-baseline justify-between border-b border-rule pb-4">
            <h2 className="font-serif text-[1.6rem] leading-none tracking-tight">Education</h2>
            <p className="label">2018 — 2024</p>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.institution}>
                <p className="label !text-[0.7rem]">{item.period}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.institution}
                </p>
                <p className="label mt-1 !text-[0.7rem]">{item.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-8">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-label text-paper transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              See the work
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
      </section>
    </>
  )
}
