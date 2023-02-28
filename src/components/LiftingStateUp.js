import React, { useState } from "react";

export default function LiftingStateUp() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
      <Child counter={counter} onButtonClick={incrementCounter} />
      <p> Parent&apos;s Counter : {counter}</p>
    </div>
  );
}

const Child = (props) => {
  return (
    <div>
      <button onClick={props.onButtonClick}>Increment Counter</button>
      <p>Counter: {props.counter}</p>
    </div>
  );
};
