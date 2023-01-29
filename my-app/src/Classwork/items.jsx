import React from "react";

export default function Add() {
  const thingsArray = ["Thing 1", "Thing 2"];

  const currentThing = thingsArray.map((thing) => {
    <p key={thing}>{thing}</p>;
  });
  return (
    <div className="cont">
      <button className="btn1">Add Items</button>
      {currentThing}
    </div>
  );
}
