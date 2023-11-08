import CoreConcepts from "./CoreConcepts/CoreConcept";
import { CORE_CONCEPTS } from "./CoreConcepts/CORE_CONCEPTS";
import "./main.css";
export default function Main() {
  const addCoreConcepts = () => {
    for (let concept = 0; concept < CORE_CONCEPTS.length; concept++) {
      return <CoreConcepts {...CORE_CONCEPTS[concept]} />;
    }
  };

  return (
    <section id="core-concepts">
      <header>Core concepts</header>
      <ul>{addCoreConcepts()}</ul>
    </section>
  );
}
