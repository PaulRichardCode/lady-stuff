import React from "react";
import Nav from "./mNav.js";
import Body from "./body.jsx";
import Data from "./data";

export default function App() {
  const components = Data.map((sect) => {
    return (
      <Body
        country={sect.country}
        place={sect.place}
        google={sect.src}
        date={sect.date}
        about={sect.about}
      />
    );
  });

  return (
    <div>
      <Nav />
      <section className="body">{components}</section>
    </div>
  );
}
