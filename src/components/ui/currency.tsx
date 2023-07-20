"use client"

import { useEffect, useState } from "react"

import { cn } from "~/lib/utils"

const formatter = new Intl.NumberFormat("bn-BD", {
  style: "currency",
  currency: "BDT",
})

interface CurrencyProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({
  value = 0,
  className,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className={cn("font-semibold", className)} {...props}>
      {formatter.format(Number(value))}
    </div>
  )
}

export default Currency
