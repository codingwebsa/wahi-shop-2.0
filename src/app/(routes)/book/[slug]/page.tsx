import { BookDataType } from "~/types"
import axios from "axios"

import BookGrid from "~/components/book/book-grid"
import Gallery from "~/components/gallery/gallery"
import Info from "~/components/info"

import IncrementView from "./increment-view"

interface Props {
  params: {
    slug: string
  }
}

export default async function BookPage({ params: { slug } }: Props) {
  const { data } = await axios.get<BookDataType[]>(
    `https://admin-sa.vercel.app/api/products?slug=${slug}`
  )

  const bookData = data[0]

  if (!bookData) return <h1>Failed to load data</h1>

  return (
    <>
      {/* increments the view by 1 but act as a component with return null */}
      <IncrementView slug={bookData.slug} />
      <div className="bg-white">
        <div className="container">
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Gallery images={bookData.images} />
              <div className="mt-10 sm:mt-16 lg:mt-0">
                <Info data={bookData} />
              </div>
            </div>
            <hr className="my-10" />
            {/* <BookGrid title="Related Items" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
