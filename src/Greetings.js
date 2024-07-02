import React from "react";

const Greetings = ({ text, number }) => {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{number}</h2>
    </div>
  );
};

export default Greetings;