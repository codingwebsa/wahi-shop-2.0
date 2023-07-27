import Image from "next/image"
import { BookDataType } from "~/types"

import Currency from "~/components/ui/currency"

export default function Info({ data }: { data: BookDataType }) {
  return (
    <div>
      <div className="flex p-3 bg-white border rounded-lg">
        <div>
          <Image
            width={120}
            height={120}
            className="w-20 h-20 rounded aspect-square"
            src={data.images[0].url}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p>{data.name}</p>
          <p className="text-sm text-zinc-500">{data.author.name}</p>
        </div>
        <div className="flex ml-auto">
          <Currency value={data.currentPrice} />
          {data.currentPrice !== data.price && (
            <Currency
              value={data.price}
              className="ml-1 text-sm line-through text-stone-600"
            />
          )}
        </div>
      </div>
    </div>
  )
}
