import { useState } from "react";
import { Regions } from "./Regions";
import { FilterProps } from "../interfaces";

export const Filter = ({ changeRegion }: FilterProps) => {
  const [filterStatus, setFilterStatus] = useState(false);

  const handleStatus = () => {
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

      {filterStatus && <Regions changeRegion={changeRegion} />}
    </div>
  );
};
