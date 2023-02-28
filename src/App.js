import React from "react";
import State from "./components/State";
import Counter from "./components/Counter";
import ConditionalRendering from "./components/ConditionalRendering";
import ListAndKeys from "./components/ListAndKeys";
import LiftingStateUp from "./components/LiftingStateUp";
import Form from "./components/Form";
import Map from "./components/Map";
import { sculptureList } from "./components/data";
import UseEffect from "./components/UseEffect";

const items = sculptureList;

const App = () => {
  return (
    <div>
      <State />

      <h1>-------------------------------------------------------</h1>
      <Counter />
      <h1>
        ----------------------------------------------------------------------------
      </h1>
      <ConditionalRendering />

      <h1>
        ------------------------------------------------------------------
      </h1>
      <ListAndKeys />
      <h1>
        ------------------------------------------------------------------
      </h1>
      <LiftingStateUp />
      <h1>
        ------------------------------------------------------------------
      </h1>
      <Form />
      <h1>
        ------------------------------------------------------------------
      </h1>

      <Map items={items} />

      <h1>
        ------------------------------------------------------------------
      </h1>
      <UseEffect />
    </div>
  );
};

export default App;
