"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationContent, profileData } from "@/data"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm dark:bg-[#09090b]/80 dark:border-white/10 dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <nav className="container flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Brand Mark */}
        <Link
          href="/"
          className="font-dancing text-3xl font-bold tracking-wider text-foreground transition-opacity hover:opacity-75"
          aria-label="Rinshad - Home"
        >
          {navigationContent.brand}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navigationContent.links.map((link) => {
              const isActive = pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-tight transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-foreground font-bold underline underline-offset-8 decoration-accentBlue decoration-2"
                      : "text-muted-foreground hover:text-foreground font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-border/60">
            <ThemeToggle />
            <Link
              href={navigationContent.cta.href}
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-foreground hover:text-accentBlue transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
            >
              {navigationContent.cta.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-foreground"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-8 bg-background border-l border-border">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="font-dancing text-3xl font-bold">
                  m.rinshad
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-tight ${
                    pathname === "/"
                      ? "text-foreground underline underline-offset-4 decoration-accentBlue decoration-2"
                      : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                {navigationContent.links.map((link) => {
                  const isActive = pathname?.startsWith(link.href)

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-bold tracking-tight ${
                        isActive
                          ? "text-foreground underline underline-offset-4 decoration-accentBlue decoration-2"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="pt-6 mt-2 border-t border-border flex flex-col gap-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    Connect
                  </span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
