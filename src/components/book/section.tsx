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
            className="flex items-center gap-1 rounded-md px-4 py-2 font-medium duration-300 hover:gap-2 hover:bg-neutral-200"
          >
            See more <BsArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-6">
          <div className="flex snap-x snap-mandatory gap-3 overflow-auto pb-1 md:grid md:grid-cols-3 lg:grid-cols-4">
            {demo_data.map((data) => (
              <Link
                href="/"
                key={data.name}
                className="w-80 flex-shrink-0 snap-start md:w-full"
              >
                <div className="group relative aspect-square h-auto w-full overflow-hidden rounded-2xl">
                  <Image
                    src={data.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover duration-300 group-hover:scale-125"
                    draggable={false}
                    alt={data.name}
                  />
                </div>
                <div className="mt-5 flex gap-1.5">
                  <div className="flex-1">
                    <h4 className="line-clamp-2 text-lg font-semibold lg:text-xl">
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
                    <button className="mt-2 rounded-full border border-black px-3 py-1 font-bold duration-300 hover:border-emerald-950 hover:bg-emerald-950 hover:text-white md:px-4 md:py-2">
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
    name: "তাসাওউফ ও আত্মশুদ্ধি",
    image: tasaufOAttosuddhi,
    author_name: "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
    price: "239",
    rating: 3,
  },
  {
    name: "সকাল-সন্ধ্যার দুআ ও যিক্‌র ( দুআর বই, দুআ কার্ড একত্রে)",
    image: ruherChikissa,
    author_name: "মোঃ হাসিবুর রহমান",
    price: "239",
    rating: 5,
  },
  {
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    author_name: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    author_name: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
  {
    name: "ফাতেমা বিনতে মুহাম্মাদ সা.",
    image: surrenderdWife,
    author_name: "শাহাদাত হুসাইন",
    price: "239",
    rating: 3,
  },
  {
    name: "হিজাব আমার পরিচয়",
    image: rukaiyah,
    author_name: "ড. খালিদ আবু শাদি",
    price: "239",
    rating: 5,
  },
  {
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    author_name: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    author_name: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
];
