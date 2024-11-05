import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { getData } from "../helpers";
import { CountryDetail } from "../components/CountryDetail";
import { Country } from "../interfaces";
const baseUrl = import.meta.env.VITE_URL_API_PAISES;
export const CountryPage = () => {
  const { alpha } = useParams<string>();
  const [pais, setPais] = useState<Country | null>(null);
   const getPais = async (url: string) => {
    const resp = await getData(url);
    setPais(resp);
  };

  useEffect(() => {
    const dir = `${baseUrl}/alpha/${alpha}`;
    getPais(dir);
  }, []);
  return <MainLayout>{pais && <CountryDetail pais={pais} />}</MainLayout>;
};
