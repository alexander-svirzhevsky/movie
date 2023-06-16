export function convertActorBio(response) {
  return {
    imgSrc: response.image.url,
    name: response.name,
    desc: response.miniBios[0].text,
  };
}

function convertMovieId(id) {
  return id.split("/")[2];
}

function convertMovie(movie) {
  console.log(movie);
  return {
    id: convertMovieId(movie.id),
    imgSrc: movie?.image?.url,
    title: movie.title,
    year: movie?.year,
  };
}

export function convertActorFilmography(result) {
  return result.filmography
    .filter((movie) => movie.category === "actor" && movie.image && movie.year)
    .map(convertMovie);
}
