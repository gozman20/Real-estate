import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

export default function Search() {
  const { houses, handleClick } = useContext(HouseContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 px-4 lg:gap-x-3 py-6 max-w-[1100px] lg:shadow-1 relative lg:-top-4 bg-white  lg:bg-transparent lg:lg:backdrop-blur rounded-lg mx-auto">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700  hover:bg-violet-800 transition w-full lg:max-w-[162px] flex justify-center items-center h-16 rounded-lg text-white"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
}
