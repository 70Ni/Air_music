import React from "react";
import Inputs from "../Inputs/Inputs";
import Icon from "../../../Images/Icons/googleIcon.svg";
import GoogleIcon from "../../../Images/Icons/GoogleIcon";

function SignIn() {
  return (
    <div className="signIn_Wrapper">
      <div className="signHeader">Sign In</div>
      <Inputs type="email" placeholder="user@email.com" label="Email" />
      <Inputs type="password" placeholder="password" label="Password" />
      <Inputs type="submit" value="Sign in" className="signInbutton" />
      <div className="orsingIntxt">or sign in with </div>
      <div className="goobuttonwrpr">
        <button className="googleButton">
          <GoogleIcon />
          <div className="googlesigntxt">Sign in with Google</div>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
