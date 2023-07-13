import tasaufOAttosuddhi from "~/../public/images/book/tasauf-o-attosuddhi.jpg";
import belaFurabarAge from "~/../public/images/book/bela-furabar-age.jpg";
import selfConfidence from "~/../public/images/book/self-confidence.jpg";
import ruherChikissa from "~/../public/images/book/ruher-chikissha.jpeg";
import surrenderdWife from "~/../public/images/book/sarenderd-wife.jpg";
import rukaiyah from "~/../public/images/book/rukaiyah.jpg";
import { cn } from "~/lib/utils";
import BookCard from "./book-card";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function BookSection({ title, className, ...props }: Props) {
  return (
    <div className={cn("pt-6 sm:pt-7 lg:pt-8", className)} {...props}>
      <div className="container">
        <div className="">
          <h3 className="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
            {title}
          </h3>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4 pb-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {demoData.map((data, i) => (
              <BookCard data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const demoData = [
  {
    id: 848,
    name: "তাসাওউফ ও আত্মশুদ্ধি",
    image: tasaufOAttosuddhi,
    authorName: "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
    price: "239",
    rating: 3,
  },
  {
    id: 8902,
    name: "সকাল-সন্ধ্যার দুআ ও যিক্‌র ( দুআর বই, দুআ কার্ড একত্রে)",
    image: ruherChikissa,
    authorName: "মোঃ হাসিবুর রহমান",
    price: "239",
    rating: 5,
  },
  {
    id: 23,
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    authorName: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    id: 3456,
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    authorName: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
  {
    id: 546746,
    name: "ফাতেমা বিনতে মুহাম্মাদ সা.",
    image: surrenderdWife,
    authorName: "শাহাদাত হুসাইন",
    price: "239",
    rating: 3,
  },
  {
    id: 12390,
    name: "হিজাব আমার পরিচয়",
    image: rukaiyah,
    authorName: "ড. খালিদ আবু শাদি",
    price: "239",
    rating: 5,
  },
  {
    id: 89,
    name: "বেলা ফুরাবার আগে",
    image: belaFurabarAge,
    authorName: "ওমর আল জাবির",
    price: "239",
    rating: 4,
  },
  {
    id: 101920,
    name: "কুরআন দিয়ে নিজের চিকিৎসা করুন",
    image: selfConfidence,
    authorName: "আবুল ফিদা মুহাম্মাদ ইজ্জত মুহাম্মাদ আরেফ",
    price: "239",
    rating: 2,
  },
];
