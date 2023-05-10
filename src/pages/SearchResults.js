import { getUrlParam } from "../Router";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { ActorCard } from "../components/ActorCard";
import { MovieCard } from "../components/MovieCard";

export function SearchResults() {
  const searchText = getUrlParam("searchText");
  return (
    <div className="page theme-light">
      <Header />
      <div className="page-layout container">
        <div>SearchResults page {searchText}</div>
        <List title={"Actors"} variant={"column"}>
          <ActorCard
            id="1"
            imgSrc={"https://loremflickr.com/320/240"}
            name={"Brad Pitt"}
          ></ActorCard>
          <ActorCard
            id="1"
            imgSrc={"https://loremflickr.com/320/240"}
            name={"Brad Pitt"}
          ></ActorCard>
        </List>
        <List title={"Movies"} variant={"grid"}>
          <MovieCard
            id="12"
            imgSrc={"https://loremflickr.com/320/240"}
            duration="120 min"
            year="2015"
            title="Money Ball"
          ></MovieCard>
          <MovieCard
            id="12"
            imgSrc={"https://loremflickr.com/320/240"}
            duration="120 min"
            year="2015"
            title="Money Ball"
          />
        </List>
      </div>
    </div>
  );
}
