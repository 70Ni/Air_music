import React from "react";

import TrendingSongs from "../Container/Trending/TrendingSongs";
import TrendingCard from "../Components/Cards/TrendingCard/TrendingCard";
import "./TrendingPage.css";
import TrendingOne from "../Components/Cards/TrendingCard/TrendingOne";
import TrendingArtist from "../Components/Cards/ArtistsCard/TrendingArtist";
import TrendingListCard from "../Components/Cards/TrendingCard/TrendingListCard";
import SqureCard from "../Components/Cards/SqureCard/SqureCard";
import SqureB from "../Components/Cards/SqureCard/SqureB";

function TrendingPage() {
  return (
    <div className="Trending_page_wrapper" style={{ maxWidth: "1440px" }}>
      <div className="TrenPag_LisCarWrapper">
        <div className="trending_section">
          <div className="TrendingInto">
            <TrendingOne />
            <TrendingArtist />
          </div>
          <div className="TrendingLstCard_wrappr">
            <div className="TredglstCard_AB_wrpr">
              <div className="TredglstCard_A">
                <TrendingListCard />
                <TrendingListCard />
              </div>
              <div className="TredglstCard_B">
                <TrendingListCard />
                <TrendingListCard />
              </div>
            </div>

            {/* <TrendingSongs /> */}
          </div>
          <div className="SUBheader">Other Musics</div>
          {/* <div className="trend_otherMusic_wrpr">
            <SqureB />
            <SqureB />
            <SqureB />
            <SqureB />
            <SqureB />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingPage;
