import Link from "next/link"
import { navigation, profile } from "@/data"
import { ArrowUpRight } from "@/components/marks"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-rule">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Have something worth
              <br />
              building?
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-static mt-5 inline-block text-sm text-muted-foreground"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Pages</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-static text-sm text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {[
                { label: "LinkedIn", href: profile.linkedin },
                { label: "GitHub", href: profile.github },
                { label: "WhatsApp", href: `https://wa.me/${profile.phoneHref.replace("+", "")}` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-static inline-flex items-center gap-1 text-sm text-muted-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label !tracking-[0.1em]">
            © {year} {profile.name}
          </p>
          <p className="label !tracking-[0.1em]">
            {profile.location} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
