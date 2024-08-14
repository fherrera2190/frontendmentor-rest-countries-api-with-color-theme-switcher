import "./App.css";
import { Country } from "./components/Country";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { useFetchCountries } from "./hooks";

function App() {
  const { countries } = useFetchCountries();

  console.log(countries.length);

  return (
    <>
      <Navbar />
      <div className="options">
        <Search />
        <Filter />
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} {...country} />
        ))}
      </div>
    </>
  );
}

export default App;
