import React from "react";
import Contact from "./contact.js";
import Joke from "./joke";

export default function MyApp() {
  const contactElement = Contact.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{contactElement}</div>;
}

/*  const colors = [
    <h3>red</h3>,
    <h3>blue</h3>,
    <h3>green</h3>,
    <h3>orange</h3>,
    <h3>blue</h3>,
    <h3>purple</h3>,
  ];
<Image name="Paul Richard" age="15" place="nigeria" />
      <Image name="chilwell" age="28" place="England" />
      <Image name="felix" age="25" place="togo" />
      <Image name="felix" age="25" place="togo" />s */
