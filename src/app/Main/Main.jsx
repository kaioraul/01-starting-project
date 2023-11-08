import CoreConcepts from "./CoreConcepts/CoreConcept";
import { CORE_CONCEPTS } from "./CoreConcepts/CORE_CONCEPTS";
import "./main.css";
import TabButton from "./Examples/TabButton";

export default function Main() {
  const addCoreConcepts = () => {
    for (let concept in CORE_CONCEPTS) {
      return (
        <li>
          <CoreConcepts {...CORE_CONCEPTS[concept]} />
        </li>
      );
    }
  };

  return (
    <main>
      <section id="core-concepts">
        <header>Core concepts</header>
        <ul>{addCoreConcepts()}</ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </main>
  );
}
