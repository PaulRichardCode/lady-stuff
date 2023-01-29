import React from "react";

export default function Jokes(props) {
  return (
    <div>
      <h1>This is the Joke for today</h1>
      <p>{props.setup}</p>
      <p>{props.punchline}</p>
    </div>
  );
}
