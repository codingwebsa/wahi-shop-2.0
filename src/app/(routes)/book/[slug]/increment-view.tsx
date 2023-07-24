"use client"

import { useEffect } from "react"
import { increment } from "~/actions/server-actions"

export default function IncrementView({ slug }: { slug: string }) {
  useEffect(() => {
    increment(slug)
  }, [slug])
  return null
}
