"use client";

import { Rating } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CartIcon, ExpandIcon } from "~/icons";
import Currency from "../ui/currency";
import { BookDataType } from "~/types";

interface Props {
  data: BookDataType;
}

export default function BookCard({ data }: Props) {
  const router = useRouter();
  const url = `/book/${data.slug}`;

  return (
    <div
      onClick={() => router.push(url)}
      className="group cursor-pointer space-y-4 rounded-xl bg-white p-3"
    >
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex rounded-full bg-neutral-100 p-2 shadow-md duration-300 hover:opacity-90"
            >
              <ExpandIcon size={18} />
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex rounded-full bg-neutral-100 p-2 shadow-md duration-300 hover:opacity-90"
            >
              <CartIcon size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-3 flex gap-1.5">
        <div className="flex-1">
          <h4 className="line-clamp-2 text-sm font-semibold sm:text-base md:text-lg">
            {data.name}
          </h4>
          <p className="mt-1.5 line-clamp-1 text-xs font-medium text-stone-600 sm:text-sm md:text-base">
            {data.author}
          </p>
          <p className="flex items-center gap-2 font-medium md:text-lg md:font-semibold">
            <Currency className="text-lg" value={data.currentPrice} />
            <Currency
              className="text-base text-gray-600 line-through"
              value={data.price}
            />
          </p>
          <Rating
            size="sm"
            defaultValue={data.rating}
            className="mt-1"
            readOnly
            color="#16a34a"
          />
        </div>
      </div>
    </div>
    // <div
    //   onClick={() => router.push(url)}
    //   className="relative max-w-full cursor-pointer"
    // >
    //   {/* image-group */}
    //   <div className="relative flex flex-col group">
    //     {/* image */}
    //     <div className="relative">
    //       <Image
    //         src={data.images[0].url}
    //         width={480}
    //         height={480}
    //         className="object-cover w-full h-auto duration-300 rounded-lg shadow-2xl aspect-square"
    //         draggable={false}
    //         alt={data.name}
    //       />
    //     </div>
    //     {/* actions in image group */}
    //     <div className="absolute flex gap-2 duration-200 -translate-x-1/2 opacity-0 pointer-events-none bottom-4 left-1/2 group-hover:pointer-events-auto group-hover:opacity-90">
    //       <button className="flex p-2 rounded-full shadow-md bg-neutral-100">
    //         <ExpandIcon size={18} />
    //       </button>
    //       <button className="flex p-2 rounded-full shadow-md bg-neutral-100">
    //         <CartIcon size={18} />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="mt-3 flex gap-1.5">
    //     <div className="flex-1">
    //       <h4 className="text-sm font-semibold line-clamp-2 sm:text-base md:text-lg">
    //         {data.name}
    //       </h4>
    //       <p className="mt-1.5 line-clamp-1 text-xs font-medium text-stone-600 sm:text-sm md:text-base">
    //         {data.author}
    //       </p>
    //       <p className="text-base font-medium md:text-lg md:font-semibold">
    //         <Currency value={data.price} />
    //       </p>
    //       <Rating
    //         size="sm"
    //         defaultValue={data.rating}
    //         className="mt-1"
    //         readOnly
    //         color="#16a34a"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
