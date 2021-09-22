import React, { useState } from "react";
import Inputs from "../Inputs/Inputs";
import Icon from "../../../Images/Icons/googleIcon.svg";
import GoogleIcon from "../../../Images/Icons/GoogleIcon";
import "./Signin.css";

function SignIn() {
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <div className="signIn_Wrapper">
      <div className="AuthContnt">
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
    </div>
  );
}

export default SignIn;
