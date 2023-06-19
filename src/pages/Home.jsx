import React from "react";
import Banner from "@/components/Banner";
import House from "@/components/House";
import HouseList from "@/components/HouseList";

export default function Home() {
  return (
    <div className="min-h-[1800px] ">
      <Banner />
      <HouseList />
    </div>
  );
}