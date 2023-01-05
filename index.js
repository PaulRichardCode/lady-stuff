function App() {
  const date = new Date();
  const hour = date.getHours();

  let timeOfDay;

  if (hour < 12) {
    timeOfDay = "Good Morning";
  } else if (hour >= 12) {
    timeOfDay = "Good afternoon";
  } else if (hour >= 17) {
    timeOfDay = "Good Evening";
  }

  return (
    <h1>
      {timeOfDay} Master Richard, The time is {hour} o.clock!{" "}
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
