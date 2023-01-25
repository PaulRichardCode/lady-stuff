import React from "react";

export default function Mount(props) {
  return (
    <div>
      <section className="pog">
        <h2 className="country">
          {props.country} <a href={props.google}>view on google</a>
        </h2>
        <h2>{props.place}</h2>
        <h5>{props.date}</h5>
        <p>{props.about}</p>
      </section>
    </div>
  );
}
