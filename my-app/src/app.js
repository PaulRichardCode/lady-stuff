import React from "react";
import Navbar from "./component/Navbar.js";
import Data from "./component/Data.js";
import Hero from "./component/Hero";
import Card from "./component/Card.jsx";
import girl from "./component/img/girl.jpg";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  // <Hero />
  const mapper = Data.map((cut) => {
    return (
      <Card
        price={cut.price}
        img={girl}
        title={cut.title}
        rating={cut.stats.rating}
        review={cut.stats.reviewCount}
        location={cut.location}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="bro container yeag">{mapper}</section>
    </div>
  );
}
