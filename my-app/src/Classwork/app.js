import React from "react";

export default function App() {
  const [result, func] = React.useState("NO");

  return (
    <div>
      <h1>Is state important now</h1>
      <h2 className="res">{result}</h2>
    </div>
  );
}
