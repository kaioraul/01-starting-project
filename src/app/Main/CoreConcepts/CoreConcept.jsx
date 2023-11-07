export default function CoreConcepts({ image, title, description }) {
  return (
    <div>
      <img src={image} alt={title} />
      <header>{title}</header>
      <p>{description}</p>
    </div>
  );
}
