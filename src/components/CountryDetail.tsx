import { Country } from "../interfaces";

export const CountryDetail = ({ pais }: { pais: Country }) => {
  return (
    <div className="country-page">
      <div className="flag">
        <img src={pais.flags.svg} alt="" />
      </div>
      <div className="info">
        <h1>{pais.name}</h1>
        <div className="details">
          <div className="left">
            <p>
              <strong>Native Name:</strong> {pais.nativeName}
            </p>
            <p>
              <strong>Population:</strong> {pais.population}
            </p>
            <p>
              <strong>Region:</strong> {pais.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {pais.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {pais.capital}
            </p>
          </div>
          <div className="right">
            <p>
              <strong>Top Level Domain:</strong> {pais.topLevelDomain}
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
  );
};
