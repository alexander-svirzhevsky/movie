import { getUrlParam } from "../Router";
import { ActorHero } from "../components/ActorHero";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { MovieCard } from "../components/MovieCard";
import { getActorData } from "../api/api";
import { useEffect, useState } from "react";

export function Actor() {
  const [actorBio, setActroBio] = useState({});
  const [actorFilmography, setActorFilmography] = useState([]);

  const getActorInfo = async (actorId) => {
    try {
      const response = await getActorData(actorId);

      setActroBio(response.bio);
      setActorFilmography(response.filmography);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const actorId = getUrlParam("id");
    getActorInfo(actorId);
  }, []);
  console.log("actorBio: ", actorBio);
  console.log("actorFilmography: ", actorFilmography);

  return (
    <div className='page theme-light'>
      <Header />
      <div className='page-layout container'>
        <section className='actor-hero'>
          <ActorHero {...actorBio} />
        </section>
        <List>
          {actorFilmography.map((film) => {
            return <MovieCard id={12} {...film} />;
          })}
        </List>
      </div>
    </div>
  );
}
