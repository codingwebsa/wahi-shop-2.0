import Image from "next/image";
import Link from "next/link";

import islamicCategory from "~/../public/images/categories/islamic-category.jpg";
import afterLifeCategory from "~/../public/images/categories/afterlife-category.jpg";
import childrenCategory from "~/../public/images/categories/children-category.jpg";
import duaCategory from "~/../public/images/categories/dua-category.jpg";
import prophetCategory from "~/../public/images/categories/prophet-category.jpg";
import quranCategory from "~/../public/images/categories/quran-category.jpg";

const top_categories = [
  {
    name: "Islamic",
    image: islamicCategory,
    blur_url: "/images/categories/islamic-category.jpg",
    href: "/",
  },
  {
    name: "After Life",
    image: afterLifeCategory,
    blur_url: "/images/categories/afterlife-category.jpg",
    href: "/",
  },
  {
    name: "Children",
    image: childrenCategory,
    blur_url: "/images/categories/children-category.jpg",
    href: "/",
  },
  {
    name: "Dua & Zikr",
    image: duaCategory,
    blur_url: "/images/categories/dua-category.jpg",
    href: "/",
  },
  {
    name: "Prophets",
    image: prophetCategory,
    blur_url: "/images/categories/prophet-category.jpg",
    href: "/",
  },
  {
    name: "Quran",
    image: quranCategory,
    blur_url: "/images/categories/quran-category.jpg",
    href: "/",
  },
];

export default function TopCategories() {
  return (
    <div>
      <div className="container px-3 mt-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          Shop Our Top Categories
        </h2>
        <div className="flex gap-3 pb-1 mt-3 overflow-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-6">
          {top_categories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className="relative flex-shrink-0 group w-52 snap-start md:w-full"
            >
              <div className="relative aspect-[4/5] h-auto w-full overflow-hidden rounded-xl">
                <Image
                  src={category.image}
                  className="object-cover w-full h-auto duration-300 select-none group-hover:scale-125"
                  draggable={false}
                  quality={40}
                  priority
                  placeholder="blur"
                  blurDataURL={category.blur_url}
                  width={360}
                  height={400}
                  // fill
                  // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 15vw"
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
