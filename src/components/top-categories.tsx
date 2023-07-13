import Link from "next/link";

import { ChevronRightIcon } from "~/icons";
import { cn } from "~/lib/utils";

export default function TopCategories() {
  return (
    <div>
      <div className="container pt-4 sm:pt-5 lg:pt-6">
        <h2 className="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
          Shop Our Top Categories
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-3 pb-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topCategories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className={cn(
                "group relative w-full items-center justify-between rounded-md border border-neutral-300 bg-neutral-200 px-5 py-3 text-xs shadow-md duration-300 hover:scale-105 hover:shadow-xl md:py-5 md:text-base",
                {
                  flex: !category.isInDesktop,
                  "hidden lg:flex": category.isInDesktop,
                }
              )}
            >
              <p className="text-lg font-medium">{category.name}</p>
              <ChevronRightIcon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const topCategories = [
  {
    name: "আল কুরআন",
    isInDesktop: false,
    href: "/",
  },
  {
    name: "সীরাতে রাসূল (সা.)",
    isInDesktop: false,
    href: "/",
  },
  {
    name: "দুআ ও যিকির",
    isInDesktop: false,
    href: "/",
  },
  {
    name: "অতিরিক্ত ছাড়",
    isInDesktop: true,
    href: "/",
  },
  {
    name: "ইসলামি আদর্শ ও মতবাদ",
    isInDesktop: false,
    href: "/",
  },
  {
    name: "আত্মশুদ্ধি ও অনুপ্রেরণা",
    isInDesktop: false,
    href: "/",
  },
  {
    name: "সায়েন্স ফিকশন",
    isInDesktop: true,
    href: "/",
  },
  {
    name: "সকল বিষয়",
    isInDesktop: false,
    href: "/",
  },
];
