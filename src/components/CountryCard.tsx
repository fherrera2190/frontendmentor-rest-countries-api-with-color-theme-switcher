import { Link } from "react-router-dom";
import { Country } from "../interfaces";


export const CountryCard = ({
  alpha2Code,
  name,
  population,
  region,
  capital,
  flags,
}: Country) => {
  return (
    <Link to={`/country/${alpha2Code}`} className="country-card">
      <div className="flag">
        <img src={flags.png} alt="" loading="lazy" />
      </div>
      <h4>{name}</h4>

      <div className="info">
        <p>
          Population: <small>{population}</small>
        </p>
        <p>
          Region: <small>{region}</small>
        </p>

        <p>
          Capital: <small>{capital}</small>
        </p>
      </div>
    </Link>
  );
};
