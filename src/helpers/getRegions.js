export const getRegions = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=region");
  let data = await res.json();
  data = data.map(obj=> obj.region)
  data = [...new Set(data)]
  console.log(data)
  return Array.from(data);
};
