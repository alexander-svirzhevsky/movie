import { useState } from "react";
import { getActorData } from "../api/api";

export default function useActorInfo() {
  const [actorBio, setActroBio] = useState({});
  const [actorFilmography, setActorFilmography] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getActorInfo = async (actorId) => {
    setLoading(true);
    try {
      const response = await getActorData(actorId);

      setActroBio(response.bio);
      setActorFilmography(response.filmography);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getActorInfo,
    actorBio,
    actorFilmography,
    loading,
    error,
  };
}
