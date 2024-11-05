import { Country } from "../interfaces/";
import { CountryCard } from "./CountryCard";

export const ListCountries = ({ countries }: { countries: Country[] }) => {
  return (
    <div className="countries">
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard key={country.alpha2Code} {...country} />
        ))
      ) : (
        <p>No countries</p>
      )}
    </div>
  );
};