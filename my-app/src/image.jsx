import React from "react";

function card() {
  return (
    <div>
      <h1>clock</h1>
      <img
        src="data:image/jpeg;base64,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"
        alt="clock"
      />
      <p>123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  );
}

export default card;
