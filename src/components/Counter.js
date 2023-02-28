import React, { useState } from "react";

const Counter = () => {
  // react state
  const [count, setCount] = useState(0);

  // event handling
  function handleIncrement() {
    setCount(count + 1);
  }

  // event handling
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <div>
        <h1>
          --------------------------------------------------------------------------
        </h1>
        <h1>The Counter</h1>
        <p>The Count is : {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
