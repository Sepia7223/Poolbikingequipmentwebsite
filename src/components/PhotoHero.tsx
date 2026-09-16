export function PhotoHero({
  image,
  eyebrow,
  title,
  description,
}: {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pb-page-hero pb-photo-hero">
      <img
        className="pb-photo-hero-image"
        src={image}
        alt=""
        fetchPriority="high"
      />
      <div className="pb-container">
        <div className="pb-eyebrow pb-eyebrow-light">{eyebrow}</div>
        <h1 className="pb-title">{title}</h1>
        <p className="pb-copy">{description}</p>
      </div>
    </section>
  );
}
