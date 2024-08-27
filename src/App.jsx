import "./App.css";
import { Filter } from "./components/Filter";
import { ListCountries } from "./components/ListCountries";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { useFetchCountries } from "./hooks";

function App() {
  const { countries, selectByRegion, searchByName } = useFetchCountries();

  return (
    <>
      <Navbar />
      <div className="options">
        <Search searchCountry={searchByName} />
        <Filter changeRegion={selectByRegion} />
      </div>
      <ListCountries countries={countries} />
    </>
  );
}

export default App;
