import axios from "axios"

import Billboard from "~/components/billboard"
import BookGrid from "~/components/book/book-grid"
import DiscountSection from "~/components/discount-section"
import TopCategories from "~/components/top-categories"
import TopPublications from "~/components/top-publications"

export default async function Home() {
  const { data } = await axios.get("https://admin-sa.vercel.app/api/products")

  if (!data) return <h1>Failed to get data.</h1>

  return (
    <div>
      <Billboard />
      <BookGrid data={data} title="Todays Best Deals For You!" />
      <TopCategories />
      <TopPublications />
      <DiscountSection />
    </div>
  )
}
