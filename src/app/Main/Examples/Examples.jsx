import TabButton from "./TabButton";
import { EXAMPLES } from "./EXAMPLES.js";
import { useState } from "react";

export function Examples() {
  const [SelectedTopic, setSelectedTopic] = useState("components");

  const handleClickTabButton = (clickedButton) => {
    setSelectedTopic(clickedButton);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onClick={() => handleClickTabButton("components")}>
          Components
        </TabButton>
        <TabButton onClick={() => handleClickTabButton("jsx")}>JSX</TabButton>
        <TabButton onClick={() => handleClickTabButton("props")}>
          Props
        </TabButton>
        <TabButton onClick={() => handleClickTabButton("state")}>
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[SelectedTopic].title}</h3>
        <p>{EXAMPLES[SelectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[SelectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
}
