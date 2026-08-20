import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { profileData } from "@/data"

const footerLinks = [
  { name: "Selected Work", href: "/work" },
  { name: "About & Experience", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-16 bg-background mt-20">
      <div className="container max-w-6xl px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-border/40">
          <div className="space-y-3">
            <Link
              href="/"
              className="font-dancing text-4xl font-bold tracking-wider text-foreground hover:text-accentBlue transition-colors inline-block"
              aria-label="Back to home"
            >
              m.rinshad
            </Link>
            <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Full-Stack Software Engineer & Technical Lead
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-6">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentBlue transition-colors inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentBlue transition-colors inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-accentBlue transition-colors inline-flex items-center gap-1"
            >
              Email <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
