import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" = "BDT",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard"
) {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price))
}

export function formatView(view: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(Number(view))
}
