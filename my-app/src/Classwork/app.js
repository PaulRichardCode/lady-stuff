import React, { useState } from "react";

export default function App() {
  /*   const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => !going);
  }
 */

  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => (going ? false : true));
  }

  return (
    <div className="main">
      <h1>Do you feel like going out</h1>
      <div className="div" onClick={click}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
