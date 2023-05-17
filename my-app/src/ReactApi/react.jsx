import React from "react";

const Ronke = () => {
  const [data, setData] = React.useState({});
  const [count, setCount] = React.useState(0);
  //get the data to Fetch
  //save te data to state

  console.log("component rendered");

  React.useEffect(() => {
    console.log("effect ran");
    // fetch("http://swapi.dev/api/people/1")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
  }, [count]);

  //the second paramenter in the useEffect function is the dpendencies arrays

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
