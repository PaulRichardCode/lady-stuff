import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Image from "./image.jsx";
export default function MyApp() {
  const colors = [
    <h3>red</h3>,
    <h3>blue</h3>,
    <h3>green</h3>,
    <h3>orange</h3>,
    <h3>blue</h3>,
    <h3>purple</h3>,
  ];

  return <div>{colors}</div>;
}

/* <Image name="Paul Richard" age="15" place="nigeria" />
      <Image name="chilwell" age="28" place="England" />
      <Image name="felix" age="25" place="togo" />
      <Image name="felix" age="25" place="togo" />s */
