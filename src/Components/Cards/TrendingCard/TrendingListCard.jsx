import React from "react";
import Image from "../../../Images/SignInPage/desert.jpg";
import Favorite from "../../../Images/Icons/save.svg";

import "./TrendingListCard.css";

function TrendingListCard() {
  return (
    <div className="TrendingListCa_wrapper">
      <div className="DiscoverCard_filter"></div>
      <img src={Image} className="TrendingLiCa_img" />
      <div className="TreninglstCa_content">
        <div className="TreninglstCa_fa">
          <img src={Favorite} alt="favorite" className="List_save" />
        </div>
        <div className="TreninglsCa_detwrapr">
          <div className="TrendlsCaNumber">#3</div>
          <div className="tredinglsCaName">New Man</div>
        </div>
      </div>
    </div>
  );
}

export default TrendingListCard;
