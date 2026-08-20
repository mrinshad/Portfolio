import * as React from "react"

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 bg-grain select-none"
    />
  )
}
