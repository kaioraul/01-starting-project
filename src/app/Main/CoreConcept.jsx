export default function CoreConcepts(props) {
  return (
    <div>
      <img src={props.image} alt={props.alt} />
      <header>{props.title}</header>
      <p>{props.description}</p>
    </div>
  );
}
