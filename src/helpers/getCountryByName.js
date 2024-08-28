export const getCountryByName = async (name) => {
  if (!name) return [];

  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  let data = await res.json();
  data = data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
      flags: country.flags.svg,
      subregion: country.subregion,
      topLevelDomain: country.tld,
      nativeName: country.name.official,
      curriencies: country.curriencies,
      languages: country.languages,
      borders: country.borders,
    };
  });
  return data;
};
