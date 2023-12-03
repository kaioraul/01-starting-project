import TabButton from "./TabButton";
import { EXAMPLES } from "./EXAMPLES.js";
import { useState } from "react";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClickTabButton = (clickedButton) => {
    setSelectedTopic(clickedButton);
  };
  let tabContent = <p>Please, select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

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
      {tabContent}
    </section>
  );
}
