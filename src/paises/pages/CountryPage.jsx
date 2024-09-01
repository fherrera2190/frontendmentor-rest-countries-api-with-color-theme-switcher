import { useEffect, useState } from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";
import { MainLayout } from "../layouts";
import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const { countryId } = useParams();
  const { countries, getCountry } = useFetchCountries();
  useEffect(() => {
    const fetchData = async () => {
      await getCountry(countryId);
    };
    fetchData();
  }, []);
  console.log(countries);
  return (
    <MainLayout>
      <div className="country-page">
        <div className="flag">
          <img src={countries.flags} alt="" />
        </div>
        <div className="info">
          <h1>{countries.name}</h1>
          <div className="details">
            <div className="left">
              <p>
                <strong>Native Name:</strong> {countries.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {countries.population}
              </p>
              <p>
                <strong>Region:</strong> {countries.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {countries.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {countries.capital}
              </p>
            </div>
            <div className="right">
              <p>
                <strong>Top Level Domain:</strong> {countries.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong> 
              </p>
              <p>
                <strong>Languages:</strong> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
