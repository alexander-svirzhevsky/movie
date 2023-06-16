import { useEffect } from "react";
import { getUrlParam } from "../Router";
import { ActorHero } from "../components/ActorHero";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { MovieCard } from "../components/MovieCard";
import useActorInfo from "../hooks/useActorInfo";

export function Actor() {
  const { getActorInfo, actorBio, actorFilmography, loading, error } =
    useActorInfo();

  useEffect(() => {
    const actorId = getUrlParam("id");
    getActorInfo(actorId);
  }, []);

  return (
    <div className='page theme-light'>
      <Header />
      <div className='page-layout container'>
        {error !== "" ? <span>{error}</span> : null}
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <section className='actor-hero'>
              <ActorHero {...actorBio} />
            </section>
            <List>
              {actorFilmography.map((movie) => {
                return <MovieCard {...movie} />;
              })}
            </List>
          </>
        )}
      </div>
    </div>
  );
}
