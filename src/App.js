import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Router from "./Router";
import "./styles.css";

import { SearchResults } from "./pages/SearchResults";
import { Actor } from "./pages/Actor";
import { Movie } from "./pages/Movie";
import { Favourites } from "./pages/Favourites";

export default function App() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/search-results", component: <SearchResults /> },
    { path: "/actor", component: <Actor /> },
    { path: "/movie", component: <Movie /> },
    { path: "/favourites", component: <Favourites /> },
  ];
  const defaultComponent = <NotFound />;

  return (
    <>
      <Router routes={routes} defaultComponent={defaultComponent} />
    </>
  );
}
