import { useEffect, useState } from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";
import { MainLayout } from "../layouts";

export const CountryPage = ({params}) => {
  const { getCountry } = useFetchCountries();
  const [country, setcountry] = useState({});
  console.log(country)
  useEffect(() => {
    getCountry()
      .then((country) => setcountry(country))
      .catch((e) => console.log(e));
  });
  return (
    <MainLayout>
      <div className="country-page">
        <div>{JSON.stringify(country)}</div>
      </div>
    </MainLayout>
  );
};
