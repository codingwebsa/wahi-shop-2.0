import { BookDataType } from "~/types"

import { storeConfig } from "~/config/store"
import Currency from "~/components/ui/currency"
import { Separator } from "~/components/ui/separator"

export default function OrderSummary({ data }: { data: BookDataType }) {
  const price = data.currentPrice
  const discountedPrice = data.price - data.currentPrice
  const shippingFee = storeConfig.shippingFee
  const total = price + shippingFee - discountedPrice

  return (
    <div className="p-3 mt-3 border rounded-md">
      <div>
        <div className="flex justify-between">
          <p>মোট:</p>
          <p>
            <Currency value={price} />
          </p>
        </div>
        <div className="flex justify-between mt-1">
          <p>ছাড়:</p>
          <p className="flex font-semibold">
            -<Currency value={discountedPrice} />
          </p>
        </div>
        <div className="flex justify-between mt-1">
          <p>শিপিং চার্জ (হোম ডেলিভারি):</p>
          <p className="flex font-semibold">
            <Currency value={shippingFee} />
          </p>
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between">
          <p>সর্বমোট:</p>
          <p className="flex font-semibold">
            <Currency value={total} />
          </p>
        </div>
      </div>
    </div>
  )
}
