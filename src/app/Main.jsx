import CoreConcepts from "./Main/CoreConcept";
import componentsImg from "./Main/components.png";

export default function Main() {
  return (
    <section id="core-concepts">
      <header>Core concepts</header>
      <ul>
        <CoreConcepts
          title="Concepts"
          description="The core UI building block."
          image={componentsImg}
          alt="Components image"
        />
        <CoreConcepts />
        <CoreConcepts />
      </ul>
    </section>
  );
}
