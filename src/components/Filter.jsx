import { useState } from "react";

export const Filter = () => {
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
        <ul className="regions">
          <li><a href="www.google.com">America</a></li>
          <li>Eurolia</li>
        </ul>
      )}
    </div>
  );
};
