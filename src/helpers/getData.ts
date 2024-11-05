import { Country } from "../interfaces";

export const getData = async (url: string) => {
  try {
    const resp = await fetch(url);
    const data = (await resp.json()) as Country[];
    return data;
  } catch (error) {
    console.log(error);
  }
};
