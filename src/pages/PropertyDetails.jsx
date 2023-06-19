import React from "react";
import { housesData } from "@/data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "@/components/styles";

export default function PropertyDetails() {
  const { id } = useParams();

  const selectedHouse = housesData.find((house) => house.id === Number(id));
  console.log(selectedHouse);
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} min-h-[800px] mb-4`}>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div>
          <h2 className="font-semibold text-2xl">{selectedHouse.name}</h2>
          <h3 className="text-lg mb-4">{selectedHouse.address}</h3>
        </div>
        <div className="flex items-center gap-x-2 mb-4 lg:mb-0">
          <div className="bg-green-500 text-white px-3 py-2 rounded-lg">
            {selectedHouse.type}
          </div>
          <div className="bg-violet-500 text-white px-3 py-2 rounded-lg">
            {selectedHouse.country}
          </div>
        </div>
        <div className="font-semibold text-2xl">${selectedHouse.price}</div>
      </div>
      <div className="flex lg:flex-row flex-col items-start gap-x-6 gap-y-4">
        {/* ---left side*/}
        <div className=" max-w-[768px] ">
          {/* //image----- */}
          <div className="flex flex-col items-start gap-8 lg:flex-row mb-4">
            <div className="">
              <img src={selectedHouse.imageLg} alt="" />
            </div>
          </div>
          <di className="flex flex-row gap-x-6 mb-6 text-violet-700">
            {" "}
            <div className="flex gap-x-2">
              <BiBed className="text-2xl" />
              <div>{selectedHouse.bedrooms}</div>
            </div>
            <div className="flex gap-x-2">
              <BiBath className="text-2xl" />
              <div>{selectedHouse.bathrooms}</div>
            </div>
            <div className="flex gap-x-2">
              <BiArea className="text-2xl" />
              <div>{selectedHouse.surface}</div>
            </div>
          </di>
          <div>{selectedHouse.description}</div>
        </div>

        {/* ----right side*/}
        <div className="flex-1 bg-white p-5 w-full border border-violet-400">
          <div className="flex gap-x-4 items-center mb-8 ">
            <div className="w-20 h-20 border p-1 rounded-full bg-gray-300">
              <img src={selectedHouse.agent.image} alt="" />
            </div>
            <div>
              <div className="font-semibold">{selectedHouse.agent.name}</div>
              <Link to="" className="text-violet-700 text-sm">
                View Listings
              </Link>
            </div>
          </div>
          {/* ----form */}
          <form>
            <input
              type="text"
              className="border px-2 border-gray-300 focus:border-violet-700 h-[35px] w-full outline-none mb-3"
              placeholder="Name"
            />
            <input
              type="text"
              className="border px-2 border-gray-300 focus:border-violet-700 h-[35px] w-full outline-none mb-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="border px-2 border-gray-300 focus:border-violet-700 h-[35px] w-full outline-none mb-3"
              placeholder="Phone"
            />

            <textarea
              className="outline-none p-3 border resize-none focus:border-violet-700 h-36 w-full px-2"
              placeholder="Message"
            ></textarea>
            <div className="flex gap-x-3 flex-col xl:flex-row ">
              <button className="text-white  w-full bg-violet-700 hover:bg-violet-500 h-14 mb-3">
                Send message
              </button>
              <button className="w-full border border-violet-700 transition h-14">
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
