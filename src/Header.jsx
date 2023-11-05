export default function Header() {
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  let reactDescription = reactDescriptions[genRandomInt()];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
