/* import React from "react";
import Navbar from "./Navbar.js";
import Data from "./Data.js";
import Hero from "./Hero";
import Card from "./Card.jsx";
import girl from "./component/img/girl.jpg";

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
      <section className="container">{mapper}</section>
    </div>
  );
}
 */
