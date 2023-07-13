import TopCategories from "~/components/top-categories";
import TopPublications from "~/components/top-publications";
import BookSection from "~/components/book/book-section";
import DiscountSection from "~/components/discount-section";
import Billboard from "~/components/billboard";
// import { delay } from "~/lib/utils";

export default async function Home() {
  // await delay(10000);
  return (
    <div>
      <Billboard />
      <BookSection title="Todays Best Deals For You!" />
      <TopCategories />
      <BookSection title="Weekly Popular Products" />
      <TopPublications />
      <DiscountSection />
      <BookSection title="Best ongoing books" />
    </div>
  );
}
