"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { ProjectItem } from "@/data/types"
import { ArrowUpRight } from "@/components/marks"

const statusLabel: Record<ProjectItem["status"], string> = {
  "in-production": "In production",
  internal: "Internal",
  "in-development": "In development",
  public: "Public",
}

function Preview({
  project,
  visible,
}: {
  project: ProjectItem
  visible: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 z-30 w-[clamp(240px,26vw,360px)] origin-center border border-rule bg-paper p-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(var(--px, 0px), var(--py, 0px), 0) translate(-50%, -50%) scale(${
          visible ? 1 : 0.94
        })`,
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="360px"
          className="object-cover object-top"
        />
      </div>
      <div className="flex items-center justify-between px-1.5 py-2">
        <span className="label !tracking-[0.12em]">{project.name}</span>
        <span className="label !tracking-[0.12em]">{project.year}</span>
      </div>
    </div>
  )
}

export function WorkIndex({ projects }: { projects: ProjectItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number | null>(null)
  const [active, setActive] = useState<string | null>(null)
  const [canPreview, setCanPreview] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setCanPreview(fine.matches && !reduced.matches)
    sync()
    fine.addEventListener("change", sync)
    reduced.addEventListener("change", sync)
    return () => {
      fine.removeEventListener("change", sync)
      reduced.removeEventListener("change", sync)
    }
  }, [])

  const handleMove = useCallback((event: React.MouseEvent) => {
    if (frame.current) return
    const { clientX, clientY } = event
    frame.current = requestAnimationFrame(() => {
      frame.current = null
      const wrap = wrapRef.current
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      wrap.style.setProperty("--px", `${clientX - rect.left}px`)
      wrap.style.setProperty("--py", `${clientY - rect.top}px`)
    })
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseMove={canPreview ? handleMove : undefined}
      onMouseLeave={() => setActive(null)}
    >
      {canPreview && (
        <div className="absolute inset-0">
          {projects.map((project) => (
            <Preview
              key={project.id}
              project={project}
              visible={active === project.id}
            />
          ))}
        </div>
      )}

      <ul className="relative z-10 border-t border-rule">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/work/${project.id}`}
              onMouseEnter={() => canPreview && setActive(project.id)}
              onFocus={() => canPreview && setActive(project.id)}
              onBlur={() => setActive(null)}
              className="work-row group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-rule py-6 md:grid-cols-[3rem_1fr_11rem_7rem_auto] md:gap-x-6 md:py-7"
            >
              <span className="label !text-[0.7rem] md:pt-1">{project.index}</span>

              <span className="flex flex-wrap items-baseline gap-x-3">
                <span className="row-title font-serif text-[1.75rem] leading-none tracking-tight md:text-[2.5rem]">
                  {project.name}
                </span>
                <span className="label !tracking-[0.1em] md:hidden">
                  {project.year}
                </span>
              </span>

              <span className="hidden text-sm text-muted-foreground md:block">
                {project.category}
              </span>

              <span className="label hidden !text-[0.7rem] md:block">
                {project.year}
              </span>

              <span className="row-arrow flex items-center justify-end gap-3 text-ink">
                <span className="label hidden !text-[0.7rem] sm:inline">
                  {statusLabel[project.status]}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
