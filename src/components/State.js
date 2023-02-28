import React, { useState } from "react";
import { sculptureList } from "../components/data";

const State = () => {
  // react states
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // react event handler
  function handleNextClick() {
    setIndex(index + 1);
  }

  // react event handler
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <h1>React Js States </h1>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {/* conditional Rendering  */}
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};

export default State;
