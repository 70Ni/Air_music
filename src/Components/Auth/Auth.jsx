import React from "react";
import Inputs from "./Inputs/Inputs";

function Auth() {
  return (
    <div>
      <Inputs placeholder="Hello there" label="train" type="text" />
      <Inputs placeholder="Hello there" label="Password" type="password"/>
      <Inputs />
      <Inputs />
    </div>
  );
}

export default Auth;
