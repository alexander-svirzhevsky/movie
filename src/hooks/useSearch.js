import { useState } from "react";
import getSearchResults from "../api/api";

export default function useSearch() {
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResults = async (searchText) => {
    setLoading(true);

    if (searchText !== "") {
      try {
        const response = await getSearchResults(searchText);
        setSearchResult(response);
      } catch (error) {
        setError(error);
      }
    }
    setLoading(false);
  };

  return {
    searchResult,
    error,
    loading,
    getResults,
  };
}
