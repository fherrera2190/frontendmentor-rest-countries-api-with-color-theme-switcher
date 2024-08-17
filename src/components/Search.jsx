import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  

  return (
    <form className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
};
