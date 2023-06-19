import React, { useState, useEffect, createContext } from "react";

import { housesData } from "@/data";
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);
  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      //function that checks if the selected dropdown includes '(any)'
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split("-")[0]);
    const maxPrice = parseInt(price.split("-")[1]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //check if all value are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all value is default, return all the houses
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      //if price is not default
      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }
      //if country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      //if country and price is not default
      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        return (
          house.country === country &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }
      //if price and property is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property
        );
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 3000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
