import type { Metadata } from "next"
import { Inter, Dancing_Script, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { GrainOverlay } from "@/components/grain-overlay"
import { profileData, siteSeo } from "@/data"

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteSeo.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteSeo.defaultTitle,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.defaultDescription,
  keywords: siteSeo.keywords,
  authors: [{ name: profileData.name, url: siteUrl }],
  creator: profileData.name,
  publisher: profileData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteSeo.defaultTitle,
    description: siteSeo.ogDescription,
    siteName: siteSeo.siteName,
    images: [
      {
        url: siteSeo.ogImage,
        width: 1200,
        height: 630,
        alt: `${profileData.name} — ${profileData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.defaultTitle,
    description: siteSeo.twitterDescription,
    images: [siteSeo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  alternateName: profileData.preferredName,
  jobTitle: "Full-Stack Software Engineer & Technical Lead",
  url: siteUrl,
  sameAs: [profileData.linkedin, profileData.github],
  worksFor: [
    {
      "@type": "Organization",
      name: "Tata Consultancy Services",
    },
    {
      "@type": "Organization",
      name: "ByteN",
    },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Mar Athanasius College of Engineering",
  },
  knowsAbout: [
    "Software Architecture",
    "Full-Stack Web Development",
    "ERP Platforms",
    "PostgreSQL",
    "Next.js",
    "React",
    "Node.js",
    ".NET Core",
    "Linux Server Administration",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohammed Rinshad P Portfolio",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: profileData.name,
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
