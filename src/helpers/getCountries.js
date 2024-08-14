export const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
