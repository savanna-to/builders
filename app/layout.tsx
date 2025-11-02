import type React from "react"
import { Montserrat, Karla } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Savanna Builders",
  description:
    "Professional masonry, carpentry, electrical, and plumbing services for your home or business. Quality work you can trust.",
  openGraph: {
    title: "Savanna Builders",
    description:
      "Professional masonry, carpentry, electrical, and plumbing services for your home or business. Quality work you can trust.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Savanna Builders - Quality Construction Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savanna Builders",
    description:
      "Professional masonry, carpentry, electrical, and plumbing services for your home or business. Quality work you can trust.",
    images: ["/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  )
}
