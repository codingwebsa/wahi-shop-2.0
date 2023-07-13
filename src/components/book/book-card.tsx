"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { Rating } from "@mantine/core";
import { BiExpand } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    id: number;
    name: string;
    image: StaticImageData;
    authorName: string;
    price: string;
    rating: number;
  };
}

export default function BookCard({ data }: Props) {
  const router = useRouter();
  return (
    <div className="relative w-full">
      {/* image-group */}
      <div className="group relative">
        {/* image */}
        <div
          onClick={() => router.push("/")}
          className="relative cursor-pointer"
        >
          <Image
            src={data.image}
            width={480}
            height={480}
            className="aspect-square h-auto w-full rounded-lg object-cover shadow-2xl duration-300"
            draggable={false}
            alt={data.name}
          />
        </div>
        {/* actions in image group */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 duration-200 group-hover:pointer-events-auto group-hover:opacity-90">
          <button
            onClick={() => {
              console.log("hi");
            }}
            className="flex rounded-full bg-neutral-100 p-2 shadow-md"
          >
            <BiExpand size={18} />
          </button>
          <button className="flex rounded-full bg-neutral-100 p-2 shadow-md">
            <BsCart2 size={18} />
          </button>
        </div>
      </div>
      <Link href="/" className="mt-3 flex gap-1.5">
        <div className="flex-1">
          <h4 className="line-clamp-2 text-sm font-semibold sm:text-base md:text-lg">
            {data.name}
          </h4>
          <p className="mt-1.5 line-clamp-1 text-xs font-medium text-stone-600 sm:text-sm md:text-base">
            {data.authorName}
          </p>
          {/* taka ৳ &#2547; */}
          <p className="text-base font-medium md:text-lg md:font-semibold">
            &#2547;{data.price}
          </p>
          <Rating
            size="sm"
            defaultValue={data.rating}
            className="mt-1"
            readOnly
            color="#16a34a"
          />
        </div>
      </Link>
    </div>
  );
}
