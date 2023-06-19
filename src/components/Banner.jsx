import React from "react";
import Image from "@/assets/img/house-banner.png";
import Search from "@/components/Search";
import styles from "./styles";

export default function Banner() {
  return (
    <section
      className={`h-full   max-h-[640px] mb-8 xl:mb:24 ${styles.paddingX} ${styles.paddingY}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="flex lg:w-1/2 flex-col justify-center items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-4xl lg:text-[58px] leading-none mb-6 ">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us
          </h1>
          <p className="max-w-[470px] mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            molestias unde iusto natus. Voluptates, exercitationem itaque est
            quibusdam voluptas sit, accusantium perspiciatis vel architecto
            mollitia voluptatum magnam aliquid dolores dolor.
          </p>
        </div>
        {/* image----- */}
        <div className="hidden lg:flex lg:w-1/2">
          <img src={Image} />
        </div>
      </div>
      <Search />
    </section>
  );
}
