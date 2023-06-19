import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export default function CountryDropdown() {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiMapPinLine className="text-2xl mr-[18px] text-violet-700" />
        <div>
          <div className="text-[15px] font-medium leading-normal">
            {country}
          </div>
          <div className="text-[13px]">Select your place</div>{" "}
        </div>
        {isOpen ? (
          <RiArrowDownSLine className=" text-2xl text-violet-700 ml-auto" />
        ) : (
          <RiArrowUpSLine className=" text-2xl text-violet-700 ml-auto" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => (
          <Menu.Item as="li" key={index} onClick={() => setCountry(country)}>
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
