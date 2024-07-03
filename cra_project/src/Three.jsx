import React from "react";
import { useState } from "react";

const Three = () => {
  const [text, setText] = useState("");
  return (
    <>
      <p>User Input:{text}</p>
      <input
        type="text"
        placeholder="enter Your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default Three;
