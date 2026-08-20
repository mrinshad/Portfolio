import { HorizontalWorkShowcase } from "@/components/horizontal-work-showcase"
import { ClientWebsitesStack } from "@/components/client-websites-stack"

export const metadata = {
  title: "Selected Work | Mohammed Rinshad P",
  description:
    "Production software systems, ERP platforms, and collaborative applications architected and developed by Mohammed Rinshad P.",
}

export default function WorkPage() {
  return (
    <main className="py-16 lg:py-20 space-y-12">
      {/* Page Header */}
      <div className="container max-w-6xl px-6 space-y-4 border-b border-border/50 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
          Portfolio / 04 Flagships • 03 Websites
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
          Selected
          <br />
          Systems
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
          Production ERPs, workflow platforms, and custom business systems engineered for reliability and scale.
        </p>
      </div>

      {/* 1. Flagship Systems - Horizontal Showcase (Desktop Pinned Scroll / Mobile Native Swipe) */}
      <HorizontalWorkShowcase />

      {/* 2. Supporting Commercial Client Websites (Visual Card Stack Presentation) */}
      <ClientWebsitesStack />
    </main>
  )
}
