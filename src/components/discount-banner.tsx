import Image from "next/image";
import Balance from "react-wrap-balancer";

import banner from "~/../public/images/banner-bg.png";

export default function DiscountBanner() {
  return (
    // <div className="container grid grid-cols-3 px-3">
    //   <div className="flex flex-col items-start h-auto p-16 rounded bg-black/70 backdrop-blur-xl">
    //     <p className="text-4xl font-bold text-white">
    //       Get 5% Discount on
    //       <br />
    //       buying over ৳200.
    //     </p>
    //     <p className="max-w-sm mt-2 font-semibold">
    //       Shopping is a bit of a relaxing hobby for me, which is sometimes
    //       troubling for the bank balance.
    //     </p>
    //     <button className="px-6 py-3 mt-4 font-bold text-black duration-300 border border-black rounded-full hover:bg-black hover:text-white">
    //       Learn more
    //     </button>
    //   </div>
    // </div>
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        className="h-[50vh] w-full brightness-90 lg:h-[50vh] xl:h-[55vh]"
      />
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center px-3">
        <Balance className="max-w-[90%] text-center text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">
          Get 5% Discount on buying over ৳200.
        </Balance>
        <Balance className="mt-2 text-center text-xl font-semibold text-stone-800">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </Balance>
        <button className="mt-2 rounded-full bg-zinc-900 px-7 py-3 text-lg font-bold text-white duration-300 hover:opacity-90">
          Learn more
        </button>
      </div>
    </div>
  );
}
