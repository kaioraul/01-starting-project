import { CORE_CONCEPTS } from "./CORE_CONCEPTS.js";
import "./coreConcepts.css";

export default function CoreConcepts() {
  const coreConcepts = CORE_CONCEPTS.map((concept) => {
    <li key={concept.id}>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>;
  });
  return <ul>{coreConcepts}</ul>;
}
