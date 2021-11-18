import React from "react";

import "./TrendingOne.css";
import Image from "../../../Images/artists/billieeilish-e1580227219759-800x450.jpg";
import Favorite from "../../../Images/Icons/save.svg";
import Play from "../../../Images/Icons/play_white.svg";

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
      <div className="trenigOne_contentwrpr">
        <div className="trendingOne_content">
          <div className="TreninglstCa_fa">
            <img src={Favorite} alt="favorite" className="List_save" />
          </div>
          <div className="trdgOne_det_wrpr">
            <div className="trenOne_number">Trending #1</div>
            <div className="TrgOne_name">New Man</div>
          </div>
        </div>
        <button className="trgOne_button">
          <div className="Play_D">Play</div>
          <img className="ButtonImg" src={Play} alt="" />
        </button>
      </div>
    </div>
  );
}

export default TrendingOne;
