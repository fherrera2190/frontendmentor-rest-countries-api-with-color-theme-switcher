import { Filter } from "../../components/Filter";
import { ListCountries } from "../../components/ListCountries";
import { Search } from "../../components/Search";
import { useFetchCountries } from "../../hooks";
import { MainLayout } from "../layouts/MainLayout";

export const Home = () => {
  const { countries, selectByRegion, searchByName } = useFetchCountries();

  return (
    <MainLayout>
      <div className="options">
        <Search searchCountry={searchByName} />
        <Filter changeRegion={selectByRegion} />
      </div>
      <ListCountries countries={countries} />
    </MainLayout>
  );
};
