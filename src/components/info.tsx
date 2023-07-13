"use client";

import { Rating } from "@mantine/core";

import { CartIcon } from "~/icons";
import Currency from "~/components/ui/currency";
import { BookDataType } from "~/types";

interface InfoProps {
  data: BookDataType;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <Rating
        size="sm"
        defaultValue={data.rating}
        className="mt-1"
        readOnly
        color="#16a34a"
      />
      <div className="mt-3 flex items-end gap-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data.currentPrice} />
        </p>
        {data.price !== data.currentPrice && (
          <p className="text-lg text-gray-500 line-through">
            <Currency value={data?.price} />
          </p>
        )}
      </div>
      <div className="mt-3 flex items-center gap-x-2">
        <p className="font-medium">5.3k</p>
        <p>people want this.</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Author:</h3>
          <div>{data.author}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Publication:</h3>
          <div>{data.publication}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Category:</h3>
          <div>{data.category}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">In Stock:</h3>
          <div>{data.isInStock ? "✅" : "❌"}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>{data.extraDetails}</div>
        </div>
      </div>
      <div className="mt-10 flex w-fit items-center gap-x-3 rounded-full bg-black px-5 py-3 font-semibold text-white duration-300 hover:opacity-80">
        {/* // TODO: disable if isn't in stock */}
        <button onClick={() => {}} className="flex items-center gap-x-2">
          Add To Cart
          <CartIcon size={20} />
        </button>
      </div>
      {/* summary */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Summary</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Info;
