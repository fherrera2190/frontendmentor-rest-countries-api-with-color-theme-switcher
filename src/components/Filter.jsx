import { useState } from "react";
import { Regions } from "./Regions";

// const regions = getRegions();

export const Filter = ({ changeRegion }) => {
  const [filterStatus, setFilterStatus] = useState(false);

  const handleStatus = () => {
    console.log("click");
    setFilterStatus(!filterStatus);
  };

  return (
    <div className={`filter ${filterStatus ? "" : ""}`} onClick={handleStatus}>
      <small>
        Filter by Region
        <i
          className={`fa-solid ${
            filterStatus ? "fa-angle-down" : "fa-angle-up"
          }`}
        ></i>
      </small>

      {filterStatus && (
        <Regions filterStatus={filterStatus} changeRegion={changeRegion} />
      )}
    </div>
  );
};
