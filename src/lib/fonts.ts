import { Hind_Siliguri } from "next/font/google";
import localFont from "next/font/local";

export const hind_font = Hind_Siliguri({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400"],
});
export const cabinet_font = localFont({
  src: "../../public/cabinet.ttf",
  variable: "--font-cabinet",
});
