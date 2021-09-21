import React from "react";
import Inputs from "./Inputs/Inputs";
import SignIn from "./siginIn/SignIn";

function Auth() {
  return (
    <div>
      <Inputs placeholder="Hello there" label="train" type="text" />
      <Inputs placeholder="Hello there" label="Password" type="password"/>
      <Inputs />
      <SignIn />
    </div>
  );
}

export default Auth;
