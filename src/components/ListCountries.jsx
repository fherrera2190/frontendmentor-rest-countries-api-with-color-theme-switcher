/* eslint-disable react/prop-types */
import { Country } from "./Country";

export const ListCountries = ({ countries }) => {

  return (
    <div className="countries">
      {!!countries &&
        countries.map((country) => <Country key={country.id} {...country} />)}
    </div>
  );
};
