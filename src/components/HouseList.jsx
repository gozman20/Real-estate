import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import styles from "./styles";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

export default function HouseList() {
  const { houses, loading } = useContext(HouseContext);
  //If loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[100px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center mt-[150px]">Sorry, nothing was found</div>
    );
  }
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map((house, index) => (
          <Link to={`/property/${house.id}`} key={index}>
            <House house={house} />
          </Link>
        ))}
      </div>
    </section>
  );
}
