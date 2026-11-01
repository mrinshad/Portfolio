"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigation, profile } from "@/data"
import { ArrowUpRight, Close, Menu } from "@/components/marks"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgress } from "@/components/scroll-progress"

export function SiteHeader() {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onCancel = () => setOpen(false)
    dialog.addEventListener("cancel", onCancel)
    return () => dialog.removeEventListener("cancel", onCancel)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/92 backdrop-blur-sm">
      <ScrollProgress />
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5"
          aria-label={`${profile.name} — home`}
        >
          <span className="font-serif text-[1.35rem] leading-none tracking-tight text-ink">
            Rinshad
          </span>
          <span className="label hidden sm:inline !tracking-[0.12em] transition-colors group-hover:text-accent">
            Engineer
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`label !text-[0.72rem] transition-colors duration-200 hover:!text-ink ${
                  active ? "!text-ink" : ""
                }`}
              >
                <span className="relative">
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                  )}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 border border-ink bg-ink px-4 py-2 text-[0.7rem] font-medium uppercase tracking-label text-paper transition-colors duration-200 hover:bg-accent hover:border-accent hover:text-accent-foreground md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-3 w-3" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center border border-rule text-ink transition-colors hover:border-ink md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <dialog ref={dialogRef} className="menu md:hidden">
        <div className="flex h-full flex-col">
          <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-rule">
            <span className="font-serif text-[1.35rem] leading-none">Rinshad</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center border border-rule text-ink"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex-1 overflow-y-auto py-10">
            <ul className="space-y-1">
              {[{ label: "Home", href: "/" }, ...navigation].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-rule py-4"
                  >
                    <span className="font-serif text-4xl leading-none text-ink transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-3">
              <p className="label">Elsewhere</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-rule py-2.5 text-sm text-muted-foreground"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-rule py-2.5 text-sm text-muted-foreground"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between border-b border-rule py-2.5 text-sm text-muted-foreground"
              >
                Email <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  )
}
