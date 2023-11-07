import CoreConcepts from "./Main/CoreConcepts/CoreConcept";
import { CORE_CONCEPTS } from "./Main/CoreConcepts/CORE_CONCEPTS";

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
