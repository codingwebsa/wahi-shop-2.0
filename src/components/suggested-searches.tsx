export default function SuggestedSearches() {
  return (
    <div>
      <div className="container px-4">
        <div className="flex snap-x snap-mandatory gap-1 overflow-auto pb-3 md:gap-3">
          {suggested_searches.map((search, i) => (
            <span
              className="flex-shrink-0 cursor-pointer snap-start rounded-full border border-stone-300 px-6 py-2 text-sm font-medium duration-300 hover:border-green-100 hover:bg-green-100 md:text-base"
              key={i}
            >
              <p>{search.label}</p>
            </span>
          ))}
        </div>
      </div>
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
