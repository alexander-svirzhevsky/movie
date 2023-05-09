import { Header } from "../components/Header";
import { getUrlParam } from "../Router";

export function SearchResults() {
  const searchText = getUrlParam("searchText");
  return (
    <div className='page theme-light'>
      <Header />
      <div>SearchResults page</div>
      <p>{searchText}</p>
    </div>
  );
}
