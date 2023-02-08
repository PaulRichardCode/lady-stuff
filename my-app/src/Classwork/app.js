import React from "react";

export default function App() {
  return (
    <div>
      <h1>Is state important to know?</h1>
      <div className="res" onClick={handleClick}>
        <h2>{isImportant}</h2>
      </div>
    </div>
  );
}
