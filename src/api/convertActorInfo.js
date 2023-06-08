export function convertActorBio(response) {
  return {
    imgSrc: response.image.url,
    name: response.name,
    desc: response.miniBios[0].text,
  };
}

function convertMovie(movie) {
  return {
    imgSrc: movie?.image?.url,
    title: movie.title,
    year: movie?.year,
  };
}

export function convertActorFilmography(result) {
  return result.filmography
    .filter((movie) => movie.category === "actor")
    .map(convertMovie);
}
