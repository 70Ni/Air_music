import React from "react";

import TrendingSongs from "../Container/Trending/TrendingSongs";
import TrendingCard from "../Components/Cards/TrendingCard/TrendingCard";
import "./TrendingPage.css";
import TrendingOne from "../Components/Cards/TrendingCard/TrendingOne";
import TrendingArtist from "../Components/Cards/ArtistsCard/TrendingArtist";

function TrendingPage() {
  return (
    <div className="Trending_page_wrapper" style={{ maxWidth: "1440px" }}>
      <div className="TrenPag_LisCarWrapper">
        <div className="trending_section">
          <div className="TrendingInto">
            <TrendingOne />
            <TrendingArtist />
          </div>
          {/* <TrendingSongs /> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingPage;
