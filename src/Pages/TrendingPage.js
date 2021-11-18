import React, { useState } from "react";

import TrendingSongs from "../Container/Trending/TrendingSongs";
import TrendingCard from "../Components/Cards/TrendingCard/TrendingCard";
import "./TrendingPage.css";
import TrendingOne from "../Components/Cards/TrendingCard/TrendingOne";
import TrendingArtist from "../Components/Cards/ArtistsCard/TrendingArtist";
import TrendingListCard from "../Components/Cards/TrendingCard/TrendingListCard";
import SqureCard from "../Components/Cards/SqureCard/SqureCard";
import SqureB from "../Components/Cards/SqureCard/SqureB";
import ListCardB from "../Components/Cards/ListCard/ListCardB";
import RelatedSongs from "../Container/Discover/RelatedSongs";
function TrendingPage() {
  const [listView, setlistView] = useState(false);
  return (
    <div className="Trending_page_wrapper" style={{ maxWidth: "1440px" }}>
      <div className="TrenPag_LisCarWrapper">
        <div className="trgListCardHedr_wrpr">
          <div
            className="SUBheader"
            onClick={() => setlistView(false)}
            style={listView ? { color: "white" } : { color: "#F27E4C" }}
          >
            Item View
          </div>
          <div
            className="SUBheader"
            onClick={() => setlistView(true)}
            style={listView ? { color: "#F27E4C" } : { color: "white" }}
          >
            List View
          </div>
        </div>
        {listView ? (
          <div className="trending_sectionB">
            <div className="TrendingInto">
              <RelatedSongs />
              <TrendingArtist />
            </div>
          </div>
        ) : (
          <div className="trending_sectionA">
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
        )}
      </div>
    </div>
  );
}

export default TrendingPage;
