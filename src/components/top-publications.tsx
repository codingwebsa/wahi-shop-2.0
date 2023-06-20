import Link from "next/link";

import guardianPub from "~/../public/images/pub/guardian-pub.jpg";
import maktabatulCalbPub from "~/../public/images/pub/maktabatul-calb-pub.jpg";
import kalantorPub from "~/../public/images/pub/kalantor-pub.jpg";
import seanPub from "~/../public/images/pub/sean-pub.jpg";
import somokalinPub from "~/../public/images/pub/somokalin-pub.jpg";
import sondiponPub from "~/../public/images/pub/sondipon-pub.png";
import sottayonPub from "~/../public/images/pub/sottayon-pub.jpg";
import wafiPub from "~/../public/images/pub/wafi-pub.png";
import Image from "next/image";

const top_publications = [
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
    <div>
      <div className="container px-3 mt-8">
        <h2 className="text-2xl font-bold md:text-3xl">
          Choose By Publications
        </h2>
        <div className="grid grid-cols-2 gap-3 mt-6 lg:grid-cols-4">
          {top_publications.map((publication) => (
            <Link
              className="flex items-center gap-2 px-4 py-5 duration-300 border border-transparent rounded-xl hover:border-emerald-800"
              href={publication.link}
              key={publication.name}
            >
              <div>
                <Image
                  src={publication.image}
                  width={75}
                  height={75}
                  className="object-cover border rounded-full aspect-square"
                  alt={publication.name}
                />
              </div>
              <div>
                <p className="font-semibold">{publication.name}</p>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
