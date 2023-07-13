import Link from "next/link";
import Image from "next/image";

import guardianPub from "~/../public/images/pub/guardian-pub.jpg";
import maktabatulCalbPub from "~/../public/images/pub/maktabatul-calb-pub.jpg";
import kalantorPub from "~/../public/images/pub/kalantor-pub.jpg";
import seanPub from "~/../public/images/pub/sean-pub.jpg";
import somokalinPub from "~/../public/images/pub/somokalin-pub.jpg";
import sondiponPub from "~/../public/images/pub/sondipon-pub.png";
import sottayonPub from "~/../public/images/pub/sottayon-pub.jpg";
import wafiPub from "~/../public/images/pub/wafi-pub.png";

const topPublications = [
  {
    name: "গার্ডিয়ান পাবলিকেশন্স",
    image: guardianPub,
    link: "/",
  },
  {
    name: "মাকতাবাতুল ক্বলব",
    image: maktabatulCalbPub,
    link: "/",
  },
  {
    name: "কালান্তর প্রকাশনী",
    image: kalantorPub,
    link: "/",
  },
  {
    name: "SEAN Publication",
    image: seanPub,
    link: "/",
  },
  {
    name: "সমকালীন প্রকাশন",
    image: somokalinPub,
    link: "/",
  },
  {
    name: "সন্দীপন প্রকাশন",
    image: sondiponPub,
    link: "/",
  },
  {
    name: "সত্যায়ন প্রকাশন",
    image: sottayonPub,
    link: "/",
  },
  {
    name: "ওয়াফি পাবলিকেশন",
    image: wafiPub,
    link: "/",
  },
];

export default function TopPublications() {
  return (
    <div className="pt-3 sm:pt-5 lg:pt-6">
      <div className="container">
        <h2 className="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
          Choose By Publications
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-5 lg:grid-cols-4">
          {topPublications.map((publication) => (
            <Link
              className="flex flex-col items-center gap-2 rounded-xl border border-transparent px-4 py-5 duration-300 hover:border-emerald-800 sm:flex-row"
              href={publication.link}
              key={publication.name}
            >
              <div>
                <Image
                  src={publication.image}
                  width={75}
                  height={75}
                  className="aspect-square rounded-full border object-cover"
                  alt={publication.name}
                />
              </div>
              <div>
                <p className="text-center font-semibold sm:text-left">
                  {publication.name}
                </p>
                <p className="text-center text-sm sm:text-left">
                  Delivery within 24 hours
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
