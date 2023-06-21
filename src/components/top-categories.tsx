import Image from "next/image";

import islamicCategory from "~/../public/images/islamic-category.jpg";
import afterLifeCategory from "~/../public/images/afterlife-category.jpg";
import childrenCategory from "~/../public/images/children-category.jpg";
import duaCategory from "~/../public/images/dua-category.jpg";
import prophetCategory from "~/../public/images/prophet-category.jpg";
import quranCategory from "~/../public/images/quran-category.jpg";
import Link from "next/link";

const top_categories = [
  {
    name: "Islamic",
    image: islamicCategory,
    href: "/",
  },
  {
    name: "After Life",
    image: afterLifeCategory,
    href: "/",
  },
  {
    name: "Children",
    image: childrenCategory,
    href: "/",
  },
  {
    name: "Dua & Zikr",
    image: duaCategory,
    href: "/",
  },
  {
    name: "Prophets",
    image: prophetCategory,
    href: "/",
  },
  {
    name: "Quran",
    image: quranCategory,
    href: "/",
  },
];

export default function TopCategories() {
  return (
    <div>
      <div className="container mt-8 px-3">
        <h2 className="text-2xl font-bold md:text-3xl">
          Shop Our Top Categories
        </h2>
        <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-auto pb-1 md:grid md:grid-cols-3 lg:grid-cols-6">
          {top_categories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className="group relative w-52 flex-shrink-0 snap-start md:w-full"
            >
              <div className="relative aspect-[4/5] h-auto w-full overflow-hidden rounded-xl">
                <Image
                  src={category.image}
                  className="select-none object-cover duration-300 group-hover:scale-125"
                  draggable={false}
                  // quality={15}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  alt={category.name}
                />
              </div>
              <p className="absolute bottom-0 left-0 h-[20%] w-full rounded-b-xl bg-gradient-to-t from-black/80 to-transparent text-center text-2xl font-bold text-white">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}