import { Country } from "../../components/Country";
import { useFetchCountries } from "../../hooks";
import { MainLayout } from "../layouts/MainLayout";

export const Home = () => {
  const { countries } = useFetchCountries();

  return (
    <MainLayout>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} {...country} />
        ))}
      </div>
    </MainLayout>
  );
};
