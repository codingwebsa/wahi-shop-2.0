import { notFound } from "next/navigation"
import { BookDataType } from "~/types"
import axios from "axios"

import Info from "./components/info"
import OrderForm from "./components/order-form"

interface BuyBookPageProps {
  params: {
    bookId: string
  }
}

export default async function BuyBookPage({ params }: BuyBookPageProps) {
  const { data } = await axios.get<BookDataType>(
    `https://admin-sa.vercel.app/api/products/${params.bookId}`
  )

  if (!data) return notFound()

  return (
    <div className="container mt-10">
      <div className="">
        <OrderForm data={data} />
      </div>
    </div>
  )
}
