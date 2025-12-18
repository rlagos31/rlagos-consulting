import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RLagos Consulting | Jira Cleanup & Security Hardening",
  description: "NASA-grade consulting for teams who need their Atlassian tools clean, locked down, and audit-ready.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/rlagosICON.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/rlagosICON.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/rlagosICON.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/rlagosICON.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
