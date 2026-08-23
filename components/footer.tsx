import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { profileData, footerContent } from "@/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-16 mt-20 gradient-mesh">
      <div className="container max-w-6xl px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-border/40">
          <div className="space-y-3">
            <Link
              href="/"
              className="font-dancing text-4xl font-bold tracking-wider text-foreground hover:text-accentBlue transition-colors inline-block"
              aria-label="Back to home"
            >
              {footerContent.brand}
            </Link>
            <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              {footerContent.title}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {footerContent.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group glass-cta inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground px-5 py-2.5 rounded-lg"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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
