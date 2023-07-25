import { Hind_Siliguri } from "next/font/google"
import localFont from "next/font/local"

export const hindFont = Hind_Siliguri({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400", "600", "500"],
})

export const satoshiFont = localFont({
  src: "../../public/fonts/satoshi.ttf",
  variable: "--font-satoshi",
})
