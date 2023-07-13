import BookSection from "~/components/book/book-section";
import Gallery from "~/components/gallery/gallery";
import Info from "~/components/info";
import { demoData } from "~/data/demoBookData";

interface Props {
  params: {
    slug: string;
  };
}

export default function BookPage({ params }: Props) {
  const data = demoData.find((x) => x.slug === params.slug);
  if (!data) return;

  return (
    <div className="bg-white">
      <div className="container">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={data.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={data} />
            </div>
          </div>
          <hr className="my-10" />
          <BookSection title="Related Items" />
        </div>
      </div>
    </div>
  );
}
