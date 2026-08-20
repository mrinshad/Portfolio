import type { Metadata } from "next"
import { Inter, Dancing_Script, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { GrainOverlay } from "@/components/grain-overlay"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontDancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohammed Rinshad P | Full-Stack Software Engineer & Technical Lead",
  description:
    "Portfolio of Mohammed Rinshad P — Full-Stack Software Engineer & Technical Lead specializing in architecting and developing scalable web applications, ERP platforms, and cloud-native solutions.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDancing.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background flex flex-col justify-between">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GrainOverlay />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
