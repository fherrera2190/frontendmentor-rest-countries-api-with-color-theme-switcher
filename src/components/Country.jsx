export const Country = ({ name, population, region, capital, flags }) => {
  return (
    <div className="country-card">
      <div className="flag">
        <img src={flags} alt="" />
      </div>
      {/* <div className="flag"
        style={{
          backgroundImage: `url(${flags})`,
          backgroundSize: "cover",
          width: "100%",
          height: "120px",
          objectFit: "fill", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}

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
    </div>
  );
};
