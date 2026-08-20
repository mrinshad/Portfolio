import * as React from "react"

export function HeroAurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Aurora Field 1: Top-Right Primary Accent Drift */}
      <div
        className="aurora-field-1 transform-gpu absolute -top-[10%] -right-[5%] h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full bg-accentBlue/10 dark:bg-accentBlue/20 blur-[90px] sm:blur-[120px]"
      />

      {/* Aurora Field 2: Mid-Left Subtle Cool Blue/Indigo Drift */}
      <div
        className="aurora-field-2 transform-gpu absolute top-[30%] -left-[10%] h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] rounded-full bg-blue-600/5 dark:bg-blue-500/15 blur-[80px] sm:blur-[110px]"
      />

      {/* Aurora Field 3: Bottom-Center Soft Ambient Tonal Drift */}
      <div
        className="aurora-field-3 transform-gpu absolute -bottom-[15%] left-[25%] h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full bg-accentBlue/5 dark:bg-sky-500/10 blur-[80px] sm:blur-[100px]"
      />
    </div>
  )
}
