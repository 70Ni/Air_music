import React from "react";
import Inputs from "./Inputs/Inputs";
import SignIn from "./siginIn/SignIn";
import desert from "../../Images/SignInPage/desert.jpg";
import "./Auth.css";
import Airmusic from "../Branding/Airmusic";

import img1 from "../../Images/artists_icons/Shawn-Mendes.jpg";
import img2 from "../../Images/artists_icons/Ed-Sheeran.jpg";
import img3 from "../../Images/artists_icons/Marshmellow.jpg";
import img4 from "../../Images/artists_icons/Anne-Marie.jpg";
import img5 from "../../Images/artists_icons/Billie-Ellish.jpg";

function Auth() {
  return (
    <div className="AuthWrapper">
      <img src={desert} alt="" className="loginDesert" />
      <div className="AuthIntoWrapper">
        <div className="authIntoContnt">
          <Airmusic className="authBrand"/>
          <div className="authTextHedcontnt">
            <div className="authsubHeader">Premium songs</div>
            <div className="authHeader">Let’s get to the music</div>
            <div className="d2ArtImgwrpr">
              <img src={img1} alt="" className="d2artist" />
              <img src={img2} alt="" className="d2artist" />
              <img src={img3} alt="" className="d2artistLrg" />
              <img src={img4} alt="" className="d2artist" />
              <img src={img5} alt="" className="d2artist" />
            </div>
          </div>
        </div>
      </div>
      <SignIn />
    </div>
  );
}

export default Auth;
