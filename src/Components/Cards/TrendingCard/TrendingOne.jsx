import React from "react";

import "./TrendingOne.css";
import Image from "../../../Images/artists/billieeilish-e1580227219759-800x450.jpg";
import Favorite from "../../../Images/Icons/save.svg";

function TrendingOne() {
  return (
    <div className="TrendingOneWrapper">
      <div className="DiscoverCard_filter"></div>
      <img src={Image} className="TrendingOne_image" />
      {/* <div className="trOne_cont_wrapper">
        <div className="TrendingOne_content">
          <div className="trOne_lower">
            <div className="TrendingOne_TextWrapper">
              <div className="TrendingOne_number">Trending #1</div>
              <div className="trending_name">New Man</div>
            </div>
            <div className="TrendingOne_play">
              <div className="AutoPlayButton">
                <div className="Play_D">Play Now</div>
              </div>
            </div>
          </div>
          <div className="trOne_upper">
            <img src={Favorite} alt="save" className="List_save" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TrendingOne;
