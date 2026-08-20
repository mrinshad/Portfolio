import { ExternalLink } from "lucide-react"
import { HorizontalWorkShowcase } from "@/components/horizontal-work-showcase"
import { clientWebsites } from "@/data"

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

      {/* 2. Supporting Commercial Client Websites */}
      <div className="container max-w-6xl px-6 pt-10 border-t border-border/50 space-y-10">
        <div className="max-w-xl space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Commercial Client Web Platforms
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
            Client Websites
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Strategic planning and production deployment for commercial organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientWebsites.map((site) => (
            <div
              key={site.id}
              className="group border-t-2 border-foreground pt-6 space-y-3 flex flex-col justify-between hover:border-accentBlue transition-colors"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {site.category}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {site.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {site.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">
                  Planning + Deployment
                </span>
                {site.liveUrl && (
                  <a
                    href={site.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
