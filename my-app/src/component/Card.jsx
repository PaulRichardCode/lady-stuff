import React from "react";

export default function card(props) {
  return (
    <div className="cont">
      <img className="img" src={props.img} alt={props.title} />
      <p>
        🛑{props.rating}
        <span className="text1">
          ({props.review}) -{props.location}
        </span>
      </p>
      <h4>{props.title}</h4>
      <h3>
        {" "}
        From ${props.price} <span>/ person</span>{" "}
      </h3>
    </div>
  );
}
