import { type Metadata } from "next";

import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import Navbar from "~/components/navbar/navbar";
import { siteConfig } from "~/config/site";
import { satoshiFont, hindFont } from "~/lib/fonts";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import Footer from "~/components/footer";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white font-wahi text-[#282423]",
          hindFont.variable,
          satoshiFont.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
