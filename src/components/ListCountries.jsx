/* eslint-disable react/prop-types */
import { Country } from "./Country";

export const ListCountries = ({ countries }) => {
  return (
    <div className="countries">
      {countries.length > 0 ? (
        countries.map((country) => <Country key={country.id} {...country} />)
      ) : (
        <p>No countries</p>
      )}
    </div>
  );
};
