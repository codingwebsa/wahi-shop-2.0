import TopCategories from "~/components/top-categories";
import TopPublications from "~/components/top-publications";
import BookSection from "~/components/book/section";
import DiscountSection from "~/components/discount-section";

export default function Home() {
  return (
    <div>
      <section>
        <TopCategories />
      </section>
      <section className="mt-6">
        <BookSection title="Todays Best Deals For You!" />
      </section>
      <section>
        <TopPublications />
      </section>
      <section className="mt-6">
        <DiscountSection />
      </section>
      {/* <section className="mt-10">
        <BookSection title="Weekly Popular Products" />
      </section> */}
    </div>
  );
}
