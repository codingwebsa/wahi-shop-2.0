import TopCategories from "~/components/top-categories";
import TopPublications from "~/components/top-publications";
import BookSection from "~/components/book/section";

export default function Home() {
  return (
    <div>
      <section>
        <TopCategories />
      </section>
      <section className="mt-10">
        <BookSection title="Todays Best Deals For You!" />
      </section>
      <section>
        <TopPublications />
      </section>
    </div>
  );
}
