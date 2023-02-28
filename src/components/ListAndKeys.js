import React from "react";

const ListAndKeys = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>List And Keys</h1>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </div>
  );
};

export default ListAndKeys;
