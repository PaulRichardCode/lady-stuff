import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Image from "./image.jsx";
export default function MyApp() {
  return (
    <div>
      <Header />
      <Footer />
      <Image name="Paul Richard" age="15" place="nigeria" />
      <Image name="chilwell" age="28" place="England" />
      <Image name="felix" age="25" place="togo" />
    </div>
  );
}
