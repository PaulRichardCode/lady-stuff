import React from "react";

export default function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;

    setThings((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="cont">
      <button className="btn1" onClick={addItem}>
        Add Items
      </button>
      {thingsElements}
    </div>
  );
}
