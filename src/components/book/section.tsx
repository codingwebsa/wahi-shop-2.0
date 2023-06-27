"use client";

import Image from "next/image";
import Link from "next/link";
import { Rating } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";

import tasaufOAttosuddhi from "~/../public/images/book/tasauf-o-attosuddhi.jpg";
import belaFurabarAge from "~/../public/images/book/bela-furabar-age.jpg";
import selfConfidence from "~/../public/images/book/self-confidence.jpg";
import ruherChikissa from "~/../public/images/book/ruher-chikissha.jpeg";
import surrenderdWife from "~/../public/images/book/sarenderd-wife.jpg";
import rukaiyah from "~/../public/images/book/rukaiyah.jpg";

interface Props {
  title: string;
}

export default function BookSection({ title }: Props) {
  return (
    <div>
      <div className="container px-3">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <Link
            href="/"
            className="flex items-center gap-1 px-4 py-2 font-medium duration-300 rounded-md hover:gap-2 hover:bg-neutral-200"
          >
            See more <BsArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-6">
          <div className="flex gap-3 pb-1 overflow-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4">
            {demo_data.map((data) => (
              <Link
                href="/"
                key={data.id}
                className="flex-shrink-0 w-80 snap-start md:w-full"
              >
                <div className="relative w-full h-auto overflow-hidden group aspect-square rounded-2xl">
                  <Image
                    src={data.image}
                    fill
                    quality={40}
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover duration-300 group-hover:scale-125"
                    draggable={false}
                    alt={data.name}
                  />
                </div>
                <div className="mt-5 flex gap-1.5">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold line-clamp-2 lg:text-xl">
                      {data.name}
                    </h4>
                    <p className="mt-1.5 line-clamp-2 text-sm font-semibold text-stone-600">
                      {data.author_name}
                    </p>
                    <Rating
                      size="sm"
                      defaultValue={data.rating}
                      readOnly
                      color="#16a34a"
                    />
                    <button className="px-3 py-1 mt-2 font-bold duration-300 border border-black rounded-full hover:border-emerald-950 hover:bg-emerald-950 hover:text-white md:px-4 md:py-2">
                      Add to Cart
                    </button>
                  </div>
                  {/* taka ৳ &#2547; */}
                  <div>
                    <p className="text-base font-bold md:text-lg">
                      &#2547;{data.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const demo_data = [
  {
    id: 848,
    name: "তাসাওউফ ও আত্মশুদ্ধি",
    image: tasaufOAttosuddhi,
    author_name: "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
    price: "239",
    rating: 3,
  },
  {
    id: 8902,
    name: "সকাল-সন্ধ্যার দুআ ও যিক্‌র ( দুআর বই, দুআ কার্ড একত্রে)",
    image: ruherChikissa,
    author_name: "মোঃ হাসিবুর রহমান",
    price: "239",
    rating: 5,
  },
  {
    id: 23,
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    author_name: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    id: 3456,
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    author_name: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
  {
    id: 546746,
    name: "ফাতেমা বিনতে মুহাম্মাদ সা.",
    image: surrenderdWife,
    author_name: "শাহাদাত হুসাইন",
    price: "239",
    rating: 3,
  },
  {
    id: 12390,
    name: "হিজাব আমার পরিচয়",
    image: rukaiyah,
    author_name: "ড. খালিদ আবু শাদি",
    price: "239",
    rating: 5,
  },
  {
    id: 89,
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    author_name: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    id: 101920,
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    author_name: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
];
