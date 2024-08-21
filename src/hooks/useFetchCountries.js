import { useEffect, useState } from "react";
import { getCountries } from "../helpers";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("all");
  const getCountriesData = async () => {
    const paises = await getCountries();
    setCountries(paises);
  };



  useEffect(() => {
    getCountriesData();
  }, []);

  return {
    countries,
    setCountries,
  };
};
