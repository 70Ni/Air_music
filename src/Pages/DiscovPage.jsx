import React from "react";
import Airmusic from "../Components/Branding/Airmusic";
import "./DiscovPage.css";

import introImg from "../Images/DiscovPage/inroImg.jpg";
function DiscovPage() {
  return (
    <div className="D2iscover_page_wrapper">
      <div className="D2iscoverPageB_content">
        <div className="D2iscoverIntro_wraper">
          <div className="introImgd2">
            <img src={introImg} alt="" className="d2IntroImg" />
            <div className="introImgd2Overlay"></div>
          </div>
          <div className="D2introtxtWrpr">
            <Airmusic />
            <div className="D2introHeader">
              Whats Listening on this weekend ?
            </div>
            <div className="parag">
              Air Music is a music streaming service developed for education and
              entertainment purposes.
            </div>
            <button className="getStarted margd2">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscovPage;
