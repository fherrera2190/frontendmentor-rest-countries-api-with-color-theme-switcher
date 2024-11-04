/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Country = ({ id, name, population, region, capital, flags }) => {
  return (
    <Link to={`/country/${id}`} className="country-card">
      <div className="flag">
        <img src={flags} alt="" loading="lazy"/>
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
