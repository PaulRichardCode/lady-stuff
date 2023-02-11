import React from "react";

export default function App() {
  /*   const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => !going);
  }
 */
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThingsArray((prevThings) => [
      ...prevThings,
      `Thing ${prevThings.length + 1}`,
    ]);
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="main">
      <button onClick={addItem}>Add Item</button>
      <div className="div">
        <h1>{thingsElements}</h1>
      </div>
    </div>
  );
}
