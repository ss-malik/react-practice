import { useState } from "react";

function Counter() {
  const [counter, Setcounter] = useState(10);

  function increamentFun() {
    counter === 20 ? Setcounter(counter) : Setcounter(counter + 1);
  }
  function decrementFun() {
    counter === 0 ? Setcounter(counter) : Setcounter(counter - 1);
  }

  return (
    <>
      <h1>This counter will range b/w 0 to 20</h1>
      <p>Counter {counter}</p>
      <h2>{counter}</h2>
      <button onClick={increamentFun}>Increament </button>
      <button onClick={decrementFun}>Decrement</button>
    </>
  );
}

export default Counter;
