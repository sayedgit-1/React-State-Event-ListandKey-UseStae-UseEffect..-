import React from "react";

const Map = (props) => {
  const items = props.items.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div>
      <h1>Map</h1>
      <h3>Item List</h3>
      <ul>{items}</ul>
    </div>
  );
};

export default Map;
