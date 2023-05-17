import React from "react";

const Ronke = () => {
  const [data, setData] = React.useState({});
  const [count, setCount] = React.useState(0);
  //get the data to Fetch
  //save te data to state

  fetch("http://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setData(data));

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add item
      </button>
    </>
  );
};

export default Ronke;
