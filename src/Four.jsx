import React from "react";

const Four = () => {
  const array = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <ul>
      {array.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default Four;
