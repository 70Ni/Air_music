import React from "react";
import Play from "../../../Images/Icons/play_white.svg";
import Artist from "../../../Images/artists/Billie-Ellish.jpg";
import "./TrendingArtist.css";
function TrendingArtist() {
  return (
    <div className="Trending_Arst_wrapr">
      <div className="TrendingOne_number">Top Artists</div>
      <div className="artistAB_wpr">
        <div className="artistaA">
          <div className="Tredni_arsts_content">
            <div className="trdgArtimg_namewrpr">
              <img className="TreArt_img" src={Artist} />
              <div className="TreArt_name">Anne Marie</div>
            </div>
            <div className="TredPlayr_wrapr">
              <div className="Play_DTre">Play</div>
              <img className="ButtonImg" src={Play} alt="" />
            </div>
          </div>
          {/* //////////// */}
          <div className="Tredni_arsts_content">
            <div className="trdgArtimg_namewrpr">
              <img className="TreArt_img" src={Artist} />
              <div className="TreArt_name">Anne Marie</div>
            </div>
            <div className="TredPlayr_wrapr">
              <div className="Play_DTre">Play</div>
              <img className="ButtonImg" src={Play} alt="" />
            </div>
          </div>
        </div>
        <div className="artistaB">
          <div className="Tredni_arsts_content">
            <div className="trdgArtimg_namewrpr">
              <img className="TreArt_img" src={Artist} />
              <div className="TreArt_name">Anne Marie</div>
            </div>
            <div className="TredPlayr_wrapr">
              <div className="Play_DTre">Play</div>
              <img className="ButtonImg" src={Play} alt="" />
            </div>
          </div>
          {/* //////////// */}
          <div className="Tredni_arsts_content">
            <div className="trdgArtimg_namewrpr">
              <img className="TreArt_img" src={Artist} />
              <div className="TreArt_name">Anne Marie</div>
            </div>
            <div className="TredPlayr_wrapr">
              <div className="Play_DTre">Play</div>
              <img className="ButtonImg" src={Play} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingArtist;
