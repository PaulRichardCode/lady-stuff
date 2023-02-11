import React from "react";

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => !going);
  }

  return (
    <div className="main">
      <h1>Do you feel like going out</h1>
      <div className="div" onClick={click}>
        <h1>yes</h1>
      </div>
    </div>
  );
}
