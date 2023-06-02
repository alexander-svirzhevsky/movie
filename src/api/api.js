import { stall } from "../utils/stall";
import { searchResponse } from "./dummyData";
import convertSearchResult from "./convertSearchResult";

const isDummyResponse = false;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f2258c88e7mshd96a613d90c69f3p14bc3bjsn9cfbd30e1726",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export default async function getSearchResults(searchText) {
  if (isDummyResponse) {
    await stall();
    return convertSearchResult(searchResponse);
  }
  try {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURI(searchText)}`,
      options
    );
    const result = await response.json();
    return convertSearchResult(result);
  } catch (error) {
    console.log(error);
  }
}
