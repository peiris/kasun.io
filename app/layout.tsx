import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import CallToAction from "@/components/sections/call-to-action"
import Header from "@/components/sections/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kasun Peiris",
  description: "A full-stack developer specializes in JavaScript.",
  openGraph: {
    title: "Kasun Peiris",
    type: "website",
    locale: "en_US",
    url: process.env.WEBSITE_URL,
    images: ["https://kasun.io/og"],
    description: "A full-stack developer specializes in JavaScript.",
  },
  twitter: {
    site: "https://kasun.io",
    creator: "@khpeiris",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          data={{
            title: "Hey, I'm Kasun 👋",
            email: "peiris@kasun.io",
            githubUsername: "peiris",
            githubUrl: "https://github.com/peiris",
          }}
        />

        {children}

        <CallToAction
          data={{
            title: "Let's work together",
            footNote: (
              <span>
                Send me an email at{" "}
                <span className="underline underline-offset-4">
                  peiris@kasun.io
                </span>{" "}
                or contact me via below button.
              </span>
            ),
          }}
        />
        <Toaster />
      </body>
    </html>
  )
}
