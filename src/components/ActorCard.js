export function ActorCard({ id, imgSrc, name }) {
  return (
    <a href={`/actor?id=${id}`} className="actor-card">
      <img src={imgSrc} className="actor-card__cover" loading="lazy" />
      <p className="body-2-text text-nowrap">{name}</p>
    </a>
  );
}
