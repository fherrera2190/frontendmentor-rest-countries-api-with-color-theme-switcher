import { useEffect, useState } from "react";
import { getCountries, getCountriesByRegion } from "../helpers";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const getCountriesData = async () => {
    const paises = await getCountries();
    setCountries(paises);
  };

  const selectByRegion = async (region) => {
    console.log(region);
    const paises = await getCountriesByRegion(region);
    setCountries(paises);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return {
    countries,
    selectByRegion,
  };
};
