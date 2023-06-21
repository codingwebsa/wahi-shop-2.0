"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "~/styles/suggested-searches.module.css";

export default function SuggestedSearches() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // @ts-ignore
    setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth || 0);
  }, []);
  return (
    <div>
      <motion.div className="carousel container cursor-grab overflow-hidden px-4">
        <motion.div
          ref={ref}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex gap-1 md:gap-3"
        >
          {suggested_searches.map((search, i) => (
            <motion.span
              className="item min-w-fit rounded-full border border-stone-300 px-6 py-2 text-sm font-medium duration-300 hover:border-green-100 hover:bg-green-100 md:text-base"
              key={i}
            >
              <p>{search.label}</p>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const suggested_searches = [
  {
    label: "কোরআন",
  },
  {
    label: "শয়তানের নীলনকশা",
  },
  {
    label: "আরিফ আজাদ",
  },
  {
    label: "সমকালীন প্রকাশন",
  },
  {
    label: "টাইম ম্যানেজমেন্ট",
  },
  {
    label: "বেলা ফুরাবার আগে",
  },
  {
    label: "ফেরা",
  },
  {
    label: "এপিটাফ",
  },
  {
    label: "নফসের বিরুদ্ধে লড়াই",
  },
  {
    label: "ম্যাসেজ",
  },
  {
    label: "আফিয়া সিদ্দিকী",
  },
  {
    label: "সত্যায়ন প্রকাশন",
  },
];
