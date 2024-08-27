import { useEffect, useState } from "react";
import {
  getCountries,
  getCountriesByRegion,
  getCountryByName,
} from "../helpers";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const getCountriesData = async () => {
    const paises = await getCountries();
    setCountries(paises);
  };

  const selectByRegion = async (region) => {
    // console.log(region);
    const paises = await getCountriesByRegion(region);
    setCountries(paises);
  };
  const searchByName = async (name) => {
    const paises = await getCountryByName(name);
    setCountries(paises);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return {
    countries,
    selectByRegion,
    searchByName,
  };
};
