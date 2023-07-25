import { type Metadata } from "next"

import { cn } from "~/lib/utils"

import "~/styles/globals.css"

import { Toaster } from "react-hot-toast"

import { siteConfig } from "~/config/site"
import { hindFont, satoshiFont } from "~/lib/fonts"
import Footer from "~/components/footer"
import SiteHeader from "~/components/site-header"
import { TailwindIndicator } from "~/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.siteTitle} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  colorScheme: "light",
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.siteTitle} | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1920,
        height: 1080,
        alt: "OG image",
      },
    ],
  },
  keywords: siteConfig.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-full bg-white font-wahi text-[#282423] antialiased",
          hindFont.variable,
          satoshiFont.variable
        )}
      >
        <SiteHeader />
        <main className="min-h-full">{children}</main>
        <Footer />
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  )
}
