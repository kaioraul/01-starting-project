import "./main.css";
import CoreConcepts from "./CoreConcepts/CoreConcepts.jsx";
import { Examples } from "./Examples/Examples.jsx";

export default function Main() {
  return (
    <main>
      <section id="core-concepts">
        <header>Core concepts</header>
        <CoreConcepts />
      </section>
      <section id="examples">
        <Examples />
      </section>
    </main>
  );
}
