import React from "react";
import Play from "../../../Images/Icons/play_white.svg";
import Artist from "../../../Images/artists/Billie-Ellish.jpg";
import "./TrendingArtist.css";
function TrendingArtist() {
  return (
    <div className="Trending_Arst_wrapr">
      <div className="TrendingOne_number">Top Artists</div>
      <div className="Tredni_arsts_content">
        <img className="TreArt_img" src={Artist} />
        <div className="TreArt_name">Anne Marie</div>
        <button className="AutoPlayButton_B">
          <div className="Play_D">Play</div>
          <img className="ButtonImg" src={Play} alt="" />
        </button>
      </div>
      {/* //////////// */}
      <div className="Tredni_arsts_content">
        <img className="TreArt_img" src={Artist} />
        <div className="TreArt_name">Anne Marie</div>
        <button className="AutoPlayButton_B">
          <div className="Play_D">Play</div>
          <img className="ButtonImg" src={Play} alt="" />
        </button>
      </div>
      {/* //////////// */}
      <div className="Tredni_arsts_content">
        <img className="TreArt_img" src={Artist} />
        <div className="TreArt_name">Anne Marie</div>
        <button className="AutoPlayButton_B">
          <div className="Play_D">Play</div>
          <img className="ButtonImg" src={Play} alt="" />
        </button>
      </div>
      {/* //////////// */}
      <div className="Tredni_arsts_content">
        <img className="TreArt_img" src={Artist} />
        <div className="TreArt_name">Anne Marie</div>
        <div className="Discover_play">
          <div className="Play_D">Play</div>
          <img className="ButtonImg" src={Play} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TrendingArtist;
