import { useState } from "react";

export const Search = ({ searchCountry }) => {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
    //searchCountry(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    searchCountry(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleForm} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleInput}
      />
    </form>
  );
};
