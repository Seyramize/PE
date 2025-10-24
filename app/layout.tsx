import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Experiences by Beyond - Unlock the Extraordinary",
  description:
    "Your beyond access card unlocks a world of curated travel, luxury events, and private invitations - all in one place.",
  generator: "Next.js",
  applicationName: "Experiences by Beyond",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Experiences by Beyond",
    "Luxury Travel",
    "Exclusive Events",
    "Private Invitations",
    "Curated Experiences",
  ],
  authors: [
    { name: "Experiences by Beyond" },
    { name: "Experiences", url: "https://www.experiencesbybeyond.com/" },
  ],
  creator: "Experiences by Beyond",
  publisher: "Experiences by Beyond",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Experiences by Beyond - Unlock the Extraordinary",
    description:
      "Your beyond access card unlocks a world of curated travel, luxury events, and private invitations - all in one place.",
    url: "https://www.experiencesbybeyond.com/",
    siteName: "Experiences by Beyond",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Experiences by Beyond - Unlock the Extraordinary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences by Beyond - Unlock the Extraordinary",
    description:
      "Your beyond access card unlocks a world of curated travel, luxury events, and private invitations - all in one place.",
    images: ["/twitter-image.png"],
    creator: "@experiencesbybeyond",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  assets: [
    "https://www.experiencesbybeyond.com/assets/logo.png",
    "https://www.experiencesbybeyond.com/assets/hero-image.jpg",
  ],
  category: "Travel and Events",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
