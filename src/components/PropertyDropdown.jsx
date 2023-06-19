import React, { useState, useEffect, useContext } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Fill } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export default function PropertyDropdown() {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiHome5Fill className="text-2xl mr-[18px] text-violet-700" />
        <div>
          <div className="text-[15px] font-medium leading-normal">
            {property}
          </div>
          <div className="text-[13px]">Select a property</div>{" "}
        </div>
        {isOpen ? (
          <RiArrowDownSLine className=" text-2xl text-violet-700 ml-auto" />
        ) : (
          <RiArrowUpSLine className=" text-2xl text-violet-700 ml-auto" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => (
          <Menu.Item as="li" key={index} onClick={() => setProperty(property)}>
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
