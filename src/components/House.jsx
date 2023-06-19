import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
export default function House({ house }) {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="shadow-1 mx-auto container max-w-[350px]  p-5 rounded-lg cursor-pointer hover:shadow-2xl transition">
      <img src={image} className="mb-6 " />
      <div className="flex gap-x-3 text-sm">
        <h3 className="px-3 text-white bg-green-500 rounded-full">{type}</h3>
        <h3 className="px-3 text-white bg-violet-500 rounded-full">
          {country}
        </h3>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-3 my-2">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600  gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600  gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  );
}
