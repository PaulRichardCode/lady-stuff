import React from "react";
import data from "../MOUNT/data";

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

  // const [thingsArray, setThingsArray] = React.useState([
  //   "Richard 1",
  //   "Richard 2",
  // ]);

  // function addItem() {
  //   setThingsArray((prevThings) => [
  //     ...prevThings,
  //     `Richard ${prevThings.length + 1}`,
  //   ]);
  // }

  // function reset() {
  //   setThingsArray((prevThings) => [prevThings.shift()]);
  // }

  // const thingsElements = thingsArray.map((things) => <p>{things}</p>);

  // return (
  //   <div className="main">
  //     <button onClick={addItem}>Add items:</button>
  //     <div className="div">
  //       <h1>{thingsElements}</h1>
  //     </div>
  //     <button onClick={reset}>reset</button>
  //   </div>  );

  const [item, setItem] = React.useState(["Things 1", "Things 2"]);
  console.log(item);

  function addItem() {
    setItem((data) => [...data, `Things ${data.length + 1}`]);
  }

  const thingsElement = item.map((items) => <p>{items}</p>);
  return (
    <div>
      <button onClick={addItem}>Add items</button>
      <h1>{thingsElement}</h1>
    </div>
  );
}
