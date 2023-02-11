import React, { useState } from "react";
import React from "react";

export default function App() {
  /*   const [isGoingOut, setIsGoingOut] = React.useState(true);

  function click() {
    setIsGoingOut((going) => !going);
  }
 */

  const thingArray = ["Thing 1", "Thing 2"];

  function addItem() {}

  return (
    <div className="main">
      <h1>Do you feel like going out</h1>
      <div className="div" o>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
