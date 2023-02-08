import React from "react";

export default function App() {
  const [value, func] = React.useState(0);

  function math() {
    func(value++);
  }

  return (
    <div className="main">
      <button className="counter--minus">-</button>
      <div className="counter--count">
        <h1>{value}</h1>
      </div>
      <button className="counter--plus " onClick={math}>
        +
      </button>
    </div>
  );
}
