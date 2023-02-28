import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // 1. PAGE WILL CONTINUOUSLY RENDER THE ALERT ON PAGE REFRESH AND BUTTON CLICKED
  // useEffect(() => {
  //   alert("I am clicked");
  // });

  // 2. PAGE WILL ONLY RENDER THE ALERT ON PAGE REFRESH
  // useEffect(() => {
  //   alert("I am clicked");
  // }, []);

  // 3. PAGE WILL  RENDER THE ALERT ON "PAGE REFRESH" and "BUTTOPN CLICKED"
  useEffect(() => {
    alert("I am clicked");
  }, [num, nums]);

  return (
    <div>
      <h1>useEffect() </h1>
      <p>
        <i>
          By using UseEffect() hook we tell react that your component needs to
          do something after rendering{" "}
        </i>
      </p>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me <span>{num}</span>
      </button>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click only <span>{nums}</span>
      </button>
    </div>
  );
};

export default UseEffect;
