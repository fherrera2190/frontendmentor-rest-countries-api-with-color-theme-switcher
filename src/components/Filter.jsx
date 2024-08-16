import { useState } from "react";

export const Filter = () => {
  const [filterStatus, setFilterStatus] = useState(false);

  const handleStatus = () => {
    console.log("click");
    console.log(filterStatus);
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
        <div className="regions">
          <p>America</p>
          <p>Europa</p>
        </div>
      )}
    </div>
  );
};
