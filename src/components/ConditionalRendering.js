import React, { useState } from "react";

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome Back !</h1> : <h1>Please Log in.</h1>;
}

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div>
      <h1>Conditional Rendering </h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <button onClick={handleLogin}>Log in</button>}
    </div>
  );
};

export default ConditionalRendering;
