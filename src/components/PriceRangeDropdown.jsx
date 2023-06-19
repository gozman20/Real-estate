import React, { useState, useEffect, useContext } from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Fill,
  RiWallet3Line,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export default function PriceRangeDropdown() {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: "Price range (any)" },
    { value: "100000-130000" },
    { value: "130000-160000" },
    { value: "160000-190000" },
    { value: "190000-220000" },
    { value: "10000-30000" },
    { value: "30000-40000" },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiWallet3Line className="text-2xl mr-[18px] text-violet-700" />
        <div>
          <div className="text-[15px] font-medium leading-normal">{price}</div>
          <div className="text-[13px]">Select a price</div>{" "}
        </div>
        {isOpen ? (
          <RiArrowDownSLine className=" text-2xl text-violet-700 ml-auto" />
        ) : (
          <RiArrowUpSLine className=" text-2xl text-violet-700 ml-auto" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => (
          <Menu.Item as="li" key={index} onClick={() => setPrice(price.value)}>
            {price.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
