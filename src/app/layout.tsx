import { Baloo_2 } from "next/font/google";
import { type Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "~/lib/utils";
import "./globals.css";

const baloo_font = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" });
const cabinet_font = localFont({
  src: "../../public/cabinet.ttf",
  variable: "--font-cabinet",
});

export const metadata: Metadata = {
  title: {
    default: "Buy Islamic Books - Online Book Shop in Bangladesh | Wahishop",
    template: "%s | Wahishop",
  },
  description:
    "Wahishop is a leading book shop in Bangladesh. Wahishop offers Islamic Bangla and English books at discounted price.",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Saif Ahmed", url: "https://saportfolio.vercel.app/" }],
  colorScheme: "light",
  creator: "Coding SA",
  openGraph: {
    title: "Buy Islamic Books - Online Book Shop in Bangladesh | Wahishop",
    description:
      "Wahishop is a leading book shop in Bangladesh. Wahishop offers Islamic Bangla and English books at discounted price.",
    url: `${process.env.SITE_URL}`,
    images: [
      {
        url: `${process.env.SITE_URL}/og.jpg`,
        width: 1920,
        height: 1080,
        alt: "wahishop OG image",
      },
    ],
  },
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
          "font-wahi bg-white text-[#282423]",
          baloo_font.variable,
          cabinet_font.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
