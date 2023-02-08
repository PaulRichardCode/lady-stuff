import React from "react";

export default function App() {
  const [value, func] = React.useState(0);

  function add() {
    func(function (plus) {
      return plus + 1;
    });
  }

  function minus() {
    func((substract) => substract - 1);
  }

  return (
    <div className="main">
      <button className="counter--minus" onClick={minus}>
        -
      </button>
      <div className="counter--count">
        <h1>{value}</h1>
      </div>
      <button className="counter--plus " onClick={add}>
        +
      </button>
    </div>
  );
}
