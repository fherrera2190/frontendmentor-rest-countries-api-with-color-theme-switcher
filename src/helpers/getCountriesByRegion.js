export const getCountriesByRegion = async (region) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();

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

    // name,population,region,capital,flags,subregion, nativeName, topLevelDomain
    // concurrency, languages, borders

    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
