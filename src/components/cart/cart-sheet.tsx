"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { storeConfig } from "~/config/store"
import { formatPrice } from "~/lib/utils"
import useCart from "~/hooks/use-cart"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

import { CartIcon, ChevronLeftIcon, CrossIcon } from "../icons"

export function CartSheet({ children }: { children?: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  const [cartItems, cartIsOpen, setIsOpen, removeItem] = useCart((state) => [
    state.items,
    state.isOpen,
    state.setIsOpen,
    state.removeItem,
  ])

  const itemCount = cartItems.reduce((total, item) => total + 1, 0)
  const shippingFee = storeConfig.shippingFee

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.currentPrice),
    0
  )

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [])

  if (!isMounted) return

  return (
    <Sheet
      open={cartIsOpen}
      onOpenChange={(open) => {
        if (!cartIsOpen) {
          return setIsOpen(true)
        }
        setIsOpen(false)
      }}
    >
      <SheetTrigger asChild>
        <Button
          aria-label="Open cart"
          variant="outline"
          size="icon"
          className="relative bg-black hover:bg-zinc-800"
        >
          {itemCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-2"
            >
              {itemCount}
            </Badge>
          )}
          <CartIcon className="h-4 w-4 text-white" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 ? (
          <>
            <div className="flex flex-1 flex-col gap-5 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-5 pr-6">
                  {cartItems.map((item, i) => (
                    <div key={item.id} className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded">
                          <Image
                            src={item.images[0].url}
                            alt={""}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            className="absolute object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 self-start text-sm">
                          <span className="line-clamp-1">{item.name}</span>
                          <span className="text-muted-foreground line-clamp-1 text-xs capitalize">
                            {item.author.name}
                          </span>
                          <span className="text-muted-foreground line-clamp-1">
                            {formatPrice(item.currentPrice)}
                          </span>
                        </div>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeItem(item.id)}
                        >
                          <CrossIcon />
                        </Button>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="grid gap-1.5 pr-6 text-sm">
              <Separator className="mb-2" />
              <div className="flex">
                <span className="flex-1">Subtotal</span>
                <span>{formatPrice(cartTotal.toFixed(2))}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>{formatPrice(shippingFee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Taxes</span>
                <span>{formatPrice(0)}</span>
              </div>
              <Separator className="mt-2" />
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{formatPrice(cartTotal + shippingFee)}</span>
              </div>
              <SheetFooter className="mt-1.5">
                <Button
                  aria-label="Proceed to checkout"
                  size="sm"
                  className="w-full"
                >
                  Proceed to Checkout
                </Button>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <CartIcon
              className="text-muted-foreground h-12 w-12"
              aria-hidden="true"
            />
            <span className="text-muted-foreground text-lg font-medium">
              Your cart is empty
            </span>
            <Button onClick={() => setIsOpen(false)}>
              <ChevronLeftIcon className="mr-2 h-5 w-5" /> Go back
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
