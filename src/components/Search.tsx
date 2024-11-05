import { useState } from "react";

export const Search = ({
  searchCountry,
}: {
  searchCountry: (url: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
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
