import React, { useState } from "react";

const Five = () => {
  const [check, setCheck] = useState(false);
  const toggleHandler = () => {
    setCheck(!check);
  };
  return (
    <>
      <input type="checkbox" onChange={toggleHandler} />
      <p>{check ? "On" : "Off"}</p>
    </>
  );
};

export default Five;
