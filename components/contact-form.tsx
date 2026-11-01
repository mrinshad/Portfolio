"use client"

import { useState } from "react"
import { contactPage, profile } from "@/data"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const subject = String(data.get("subject") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    const next: Record<string, boolean> = {}
    if (!name) next.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true
    if (!message) next.message = true

    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0]
      document.getElementById(first)?.focus()
      return
    }

    const body = `${message}\n\n— ${name}\n${email}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio enquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`

    window.location.href = href
    setStatus("sent")
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label mb-1 block">
            {contactPage.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="field"
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-accent">
              Please add your name.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label mb-1 block">
            {contactPage.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email || undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="field"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-accent">
              Please add a valid email address.
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label mb-1 block">
          {contactPage.form.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="field"
          placeholder="ERP scoping, architecture review, role…"
        />
      </div>

      <div>
        <label htmlFor="message" className="label mb-1 block">
          {contactPage.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field resize-none"
          placeholder="What the system is, who uses it, and where it currently hurts."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-accent">
            Please add a short message.
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-label text-paper transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          {contactPage.form.submit}
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {status === "sent"
            ? "Your mail client should be open. If nothing happened, use the address on the left."
            : contactPage.form.hint}
        </p>
      </div>
    </form>
  )
}
