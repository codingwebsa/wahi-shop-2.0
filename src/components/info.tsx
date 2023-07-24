"use client"

import { Rating } from "@mantine/core"
import { CartIcon, ShoppingBag } from "~/icons"
import { BookDataType } from "~/types"

import { formatView } from "~/lib/utils"
import useCart from "~/hooks/use-cart"
import Currency from "~/components/ui/currency"

import { Button } from "./ui/button"

interface InfoProps {
  data: BookDataType
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [addItem, setCartIsOpen] = useCart((state) => [
    state.addItem,
    state.setIsOpen,
  ])

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <Rating
        size="sm"
        defaultValue={data.rating}
        className="mt-1"
        readOnly
        color="#16a34a"
      />
      <div className="mt-3 flex items-end gap-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data.currentPrice} />
        </p>
        {data.price !== data.currentPrice && (
          <p className="text-lg text-gray-500 line-through">
            <Currency value={data?.price} />
          </p>
        )}
      </div>
      <div className="mt-3 flex items-center gap-x-2">
        <p className="font-medium">{formatView(data.views)}</p>
        <p>people want this.</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-2 md:gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Author:</h3>
          <div>{data.author.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Publication:</h3>
          <div>{data.publication?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Category:</h3>
          <div>{data.category?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">In Stock:</h3>
          <div>{data.isInStock ? "✅" : "❌"}</div>
        </div>
        <div className="flex items-center gap-x-4 text-sm">
          <div>{data.extraDetails}</div>
        </div>
      </div>
      <div className="mt-7 flex gap-4">
        {/* // TODO: disable if isn't in stock */}
        <Button
          size="lg"
          className="bg-emerald-500 px-8 py-6 transition-colors hover:bg-emerald-400"
          disabled={!data.isInStock}
          onClick={() => {}}
        >
          Buy now
          <ShoppingBag className="ml-2" size={20} />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-6"
          disabled={!data.isInStock}
          onClick={() => {
            addItem(data)
            setCartIsOpen(true)
          }}
        >
          Add To Cart
          <CartIcon className="ml-2" size={20} />
        </Button>
      </div>
      {/* summary */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Summary</h2>
        <p>{data.details}</p>
      </div>
    </div>
  )
}

export default Info
