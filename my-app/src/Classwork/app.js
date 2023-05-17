import React from "react";

export default function App() {
  /*   const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => !going);
  }
 */
  // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  // function addItem() {
  //   setThingsArray((prevThings) => [
  //     ...prevThings,
  //     `Thing ${prevThings.length + 1}`,
  //   ]);
  // }

  // const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  const [thingsArray, setThingsArray] = React.useState([
    "Richard 1",
    "Richard 2",
  ]);

  function addItem() {
    setThingsArray((prevThings) => [
      ...prevThings,
      `Richard ${prevThings.length + 1}`,
    ]);
  }

  const thingsElements = thingsArray.map((things) => <p>{things}</p>);

  return (
    <div className="main">
      <button onClick={addItem}>Add items:</button>
      <div className="div">
        <h1>{thingsElements}</h1>
      </div>
    </div>
  );
}
