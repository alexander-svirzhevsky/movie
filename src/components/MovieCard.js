export function MovieCard({ id, imgSrc, duration, year, title }) {
  return (
    <a href={`/movie?id=${id}`} className="movie-card">
      <div className="movie-card-cover">
        <img
          src={imgSrc}
          className="movie-card-cover__img"
          loading="lazy"
          alt={title}
        />
        <div className="movie-card-cover__tags">
          <div className="tag tag-text">{duration}</div>
          <div className="tag tag-text">{year}</div>
        </div>
      </div>
      <div className="body-3-text text-nowrap">{title}</div>
    </a>
  );
}
