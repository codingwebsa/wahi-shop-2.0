import TopCategories from "~/components/top-categories";
import TopPublications from "~/components/top-publications";

export default function Home() {
  return (
    <div>
      <section>
        <TopCategories />
      </section>
      <section>
        <TopPublications />
      </section>
    </div>
  );
}
