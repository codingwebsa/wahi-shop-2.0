"use client"

import Image from "next/image"
import Link from "next/link"
import { Rating } from "@mantine/core"
import { BookDataType } from "~/types"

import useCart from "~/hooks/use-cart"

import Currency from "../ui/currency"

interface Props {
  data: BookDataType
}

export default function BookCard({ data }: Props) {
  const url = `/book/${data.slug}`

  return (
    <Link
      href={url}
      className="group cursor-pointer space-y-4 rounded-xl bg-white p-3"
    >
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square rounded-md object-cover brightness-95 transition group-hover:brightness-110"
        />
      </div>
      {/* Description */}
      <div className="mt-3 flex gap-1.5">
        <div className="flex-1">
          <h4 className="line-clamp-2 text-sm font-semibold sm:text-base md:text-lg">
            {data.name}
          </h4>
          <p className="mt-1.5 line-clamp-1 text-xs font-medium text-stone-600 sm:text-sm md:text-base">
            {data.author.name}
          </p>
          <p className="flex items-center gap-2 font-medium md:text-lg md:font-semibold">
            <Currency className="text-lg" value={data.currentPrice} />
            <Currency
              className="text-base text-gray-600 line-through"
              value={data.price}
            />
          </p>
          <Rating
            size="sm"
            defaultValue={data.rating}
            className="mt-1"
            readOnly
            color="#16a34a"
          />
        </div>
      </div>
    </Link>
  )
}
