import Link from "next/link"
import { ArrowRight } from "@/components/marks"

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-20">
      <h1 className="display max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)]">
        This page is not in the ledger.
      </h1>
      <p className="mt-6 max-w-md text-[0.975rem] leading-relaxed text-muted-foreground">
        The address may have changed, or it never existed. The work index is a
        reliable place to pick the thread back up.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-label text-paper transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          Browse the work
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link href="/" className="link-static text-sm text-muted-foreground">
          Back home
        </Link>
      </div>
    </section>
  )
}
