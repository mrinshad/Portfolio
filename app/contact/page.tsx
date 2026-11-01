import type { Metadata } from "next"
import { contactPage } from "@/data"
import { ContactForm } from "@/components/contact-form"
import { ArrowUpRight } from "@/components/marks"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohammed Rinshad P about ERP scoping, architecture review, or senior full-stack engineering roles.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <section>
      <div className="shell py-16 md:py-24">
        <h1 className="display whitespace-pre-line text-[clamp(2.5rem,6vw,4.75rem)]">
          {contactPage.heading}
        </h1>
        <p className="measure mt-8 text-[1.0625rem] leading-relaxed text-muted-foreground">
          {contactPage.body}
        </p>

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-12">
          {/* Channels */}
          <div className="md:col-span-5">
            <div className="border-t border-rule">
              {contactPage.channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-baseline justify-between gap-4 border-b border-rule py-4"
                >
                  <span className="label !text-[0.7rem]">{channel.label}</span>
                  <span className="flex items-center gap-2 text-right text-sm text-ink transition-colors group-hover:text-accent">
                    {channel.value}
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <p className="label">Availability</p>
              <dl className="mt-4 space-y-3">
                {contactPage.availability.map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <dt className="w-24 shrink-0 text-xs uppercase tracking-label text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 md:border-l md:border-rule md:pl-12">
            <p className="label mb-6">Or write here</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
