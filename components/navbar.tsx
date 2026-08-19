"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Work", href: "#selected-work" },
  { name: "Experience", href: "#experience" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <nav className="container flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          href="#"
          className="font-dancing text-2xl font-bold tracking-wider text-foreground transition-opacity hover:opacity-80"
          aria-label="Rinshad - Back to top"
        >
          m.rinshad
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button asChild size="sm" variant="outline" className="rounded-full gap-1.5 text-xs font-medium border-border/80 hover:bg-accent">
            <Link href="#contact">
              Get in Touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-accent"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="font-dancing text-2xl font-bold">
                  m.rinshad
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-muted-foreground py-2 border-b border-border/40 transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild size="sm" className="w-full rounded-full gap-1.5 text-xs">
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Get in Touch
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
