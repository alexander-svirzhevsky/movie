import { Children } from "react";

export function List({ children, title, variant = "grid" }) {
  const listClassName = variant === "grid" ? "list-grid" : "list-column";

  return (
    <section className="list">
      <h3 className="h3-text list__title">{title}</h3>
      <div className="divider"></div>
      <ul className={listClassName}>
        {Children.map(children, (child) => {
          return <li>{child}</li>;
        })}
      </ul>
    </section>
  );
}
