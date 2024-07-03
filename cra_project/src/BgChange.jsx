import React, { useState } from "react";

const BgChange = () => {
  const [color, SetColor] = useState("pink");
  return (
    <div
      className="h-screen bg-black text-white "
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row p-1 bg-white">
        <button
          onClick={() => SetColor("yellow")}
          type="button"
          className="rounded-md mx-1 bg-yellow-400 px-3 py-2 text-sm text-white shadow-sm"
        >
          Button text
        </button>
        <button
          onClick={() => SetColor("green")}
          type="button"
          className="rounded-md mx-1 bg-green-500 px-3 py-2 text-sm text-white "
        >
          Button text
        </button>
        <button
          onClick={() => SetColor("red")}
          type="button"
          className="rounded-md mx-1 bg-red-300 px-3 py-2 text-sm text-white "
        >
          Button text
        </button>
        <button
          onClick={() => SetColor("violet")}
          type="button"
          className="rounded-md mx-1 bg-violet-600 px-3 py-2 text-sm text-white "
        >
          Button text
        </button>
      </div>
    </div>
  );
};

export default BgChange;
