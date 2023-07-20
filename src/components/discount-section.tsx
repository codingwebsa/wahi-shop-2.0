import Image from "next/image"
import Link from "next/link"
import image1 from "~/../public/images/discounts/1.png"
import image2 from "~/../public/images/discounts/2.png"
import image3 from "~/../public/images/discounts/3.png"
import image4 from "~/../public/images/discounts/4.png"

export default function DiscountSection() {
  return (
    <div className="pt-3 sm:pt-5 lg:pt-6">
      <div className="container">
        <h2 className="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
          Get Up To 70% Off
        </h2>
        <div className="mt-3 sm:mt-5">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 md:gap-6">
            {offers.map((offer, i) => (
              <Link
                href="/"
                className="group overflow-hidden rounded-xl"
                key={i}
              >
                <div
                  className={`rounded-t-xl p-6 pb-8`}
                  style={{ backgroundColor: offer.bgColor }}
                >
                  <p className="text-2xl font-bold text-slate-800">Save</p>
                  <span
                    className="flex items-start gap-0.5"
                    style={{ color: offer.foregroundColor }}
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
  )
}

const offers = [
  {
    save: 100,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image1,
    bgColor: "#f2e4d9",
    foregroundColor: "#cb9917",
  },
  {
    save: 29,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image2,
    bgColor: "#f9dcdc",
    foregroundColor: "#961f1f",
  },
  {
    save: 67,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image3,
    bgColor: "#f2e4d9",
    foregroundColor: "#94623c",
  },
  {
    save: 54,
    title: "Explore Our Furniture & Home Furnishing Range",
    image: image4,
    bgColor: "#d2f7ec",
    foregroundColor: "#003d29",
  },
]
