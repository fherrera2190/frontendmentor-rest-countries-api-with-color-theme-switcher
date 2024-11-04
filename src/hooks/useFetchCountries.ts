import { useEffect, useState } from "react";
import {
  getCountries,
  getCountriesByRegion,
  getCountryById,
  getCountryByName,
} from "../helpers";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const getCountriesData = async () => {
    const paises = await getCountries();
    setCountries(paises);
  };

  const selectByRegion = async (region) => {
    const paises = await getCountriesByRegion(region);
    setCountries(paises);
  };
  const searchByName = async (name) => {
    const paises = await getCountryByName(name);
    setCountries(paises);
  };
  const getCountry = async (id) => {
    const paises = await getCountryById(id);
    setCountries(paises);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return {
    countries,
    selectByRegion,
    searchByName,
    getCountry,
  };
};
