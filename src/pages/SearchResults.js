import { getUrlParam } from "../Router";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { ActorCard } from "../components/ActorCard";
import { MovieCard } from "../components/MovieCard";
import { useEffect } from "react";
import useSearch from "../hooks/useSearch";

export function SearchResults() {
  const searchText = getUrlParam("searchText");
  const { searchResult, error, loading, getResults } = useSearch();

  const actors = searchResult.filter((item) => !("year" in item));
  const movies = searchResult.filter((item) => "year" in item);

  useEffect(() => {
    getResults(searchText);
  }, []);

  return (
    <div className='page theme-light'>
      <Header />
      <div className='page-layout container'>
        {error !== "" ? <p>{error}</p> : null}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <List title={"Actors"} variant={"column"}>
              {actors.map((actor) => (
                <ActorCard
                  id={actor.id}
                  imgSrc={actor.imgSrc}
                  name={actor.name}
                />
              ))}
            </List>
            <List title={"Movies"} variant={"grid"}>
              {movies.map((movie) => (
                <MovieCard
                  id={movie.id}
                  imgSrc={movie.imgSrc}
                  year={movie.year}
                  title={movie.title}
                />
              ))}
            </List>
          </>
        )}
      </div>
    </div>
  );
}
