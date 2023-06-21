import Image from "next/image";
import Link from "next/link";
import image1 from "~/../public/images/discounts/1.png";
import image2 from "~/../public/images/discounts/2.png";
import image3 from "~/../public/images/discounts/3.png";
import image4 from "~/../public/images/discounts/4.png";

export default function DiscountSection() {
  return (
    <div>
      <div className="container px-3">
        <h2 className="text-2xl font-bold md:text-3xl">Get Up To 70% Off</h2>
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {offers.map((offer, i) => (
              <Link
                href="/"
                className="group overflow-hidden rounded-xl"
                key={i}
              >
                <div
                  className={`rounded-t-xl p-6 pb-8`}
                  style={{ backgroundColor: offer.bg_color }}
                >
                  <p className="text-2xl font-bold text-slate-800">Save</p>
                  <span
                    className="flex items-start gap-0.5"
                    style={{ color: offer.foreground_color }}
                  >
                    <p className="text-lg font-semibold">৳</p>
                    <p className="text-5xl font-bold">{offer.save}</p>
                  </span>
                  <p className="mt-2 font-semibold">{offer.title}</p>
                </div>
                <div>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      className="object-cover duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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

const offers = [
  {
    save: 100,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image1,
    bg_color: "#f2e4d9",
    foreground_color: "#cb9917",
  },
  {
    save: 29,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image2,
    bg_color: "#f9dcdc",
    foreground_color: "#961f1f",
  },
  {
    save: 67,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image3,
    bg_color: "#f2e4d9",
    foreground_color: "#94623c",
  },
  {
    save: 54,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image4,
    bg_color: "#d2f7ec",
    foreground_color: "#003d29",
  },
];
