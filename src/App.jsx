import "./App.css";
import { Filter } from "./components/Filter";
import { ListCountries } from "./components/ListCountries";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { useFetchCountries } from "./hooks";

function App() {
  const { countries,changeRegion } = useFetchCountries();

  return (
    <>
      <Navbar />
      <div className="options">
        <Search />
        <Filter changeRegion={changeRegion}/>
      </div>
      <ListCountries countries={countries} />
    </>
  );
}

export default App;
