import { Hind_Siliguri } from "next/font/google";
import { type Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "~/lib/utils";
import "./globals.css";
import Navbar from "~/components/navbar/navbar";
import { siteConfig } from "~/config/site";

const hind_font = Hind_Siliguri({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400"],
});
const cabinet_font = localFont({
  src: "../../public/cabinet.ttf",
  variable: "--font-cabinet",
});

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
    <html lang="en">
      <body
        className={cn(
          "bg-white pb-20 font-wahi text-[#282423]",
          hind_font.variable,
          cabinet_font.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
