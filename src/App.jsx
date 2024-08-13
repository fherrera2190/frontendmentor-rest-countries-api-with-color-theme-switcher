import "./App.css";
import { Navbar } from "./components/Navbar";
import { useFetchCountries } from "./hooks";

function App() {
  const { countries } = useFetchCountries();

  console.log(countries.length);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
