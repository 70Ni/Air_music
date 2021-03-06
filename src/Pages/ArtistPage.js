import React, { Component, useEffect,useState } from "react";
import "./ArtistPage.css";

import ArtistsCard from "../Components/Cards/ArtistsCard/ArtistsCard";
import DiscoverCardZ from "../Components/Cards/DiscoverCard/DiscoverCardZ";
import { useSelector } from "react-redux";
import { MusicGroupSet } from "../Container/FUNCTIONS";
import ProfileList from "../Container/ProfileList";
import ArtisPagList from "../Container/Artist/ArtisPagList";
import { connect } from "react-redux";
import Lyrics from "../Components/Lyrics/Lyrics";

function ArtistPage() {
  return (
    <div className="Artist_page_wrapper" style={{ maxWidth: "1440px" }}>
      <div className="DiscoverCardZ">
        <DiscoverCardZ />
      </div>
      <div className="SUBheader">Artists</div>
      <div className="Profile_Icons">
        <ProfileList />
      </div>
      <div className="Artist_Header">Billie Ellish</div>
      <div className="ArtPag_listCard_ArtCard_wrapper">
        <div className="ArtPag_ListCar_wrapper" style={{ width: "100%" }}>
          <div className="Artists_Paragraph">
            Billie Eilish Pirate Baird O'Connell (/ˈaɪlɪʃ/ EYE-lish;[1] born
            December 18, 2001) is an American singer and songwriter. She first
            gained attention in 2015 when she uploaded the song "Ocean Eyes" to
            SoundCloud, which was subsequently released by the Interscope
            Records subsidiary Darkroom. The song was written and produced by
            her brother Finneas O'Connell, with whom she collaborates on music
            and live shows. Her debut EP, Don't Smile at Me (2017), became a
            sleeper hit, reaching the top 15 in the US, UK, Canada, and
            Australia.
          </div>

          <div className="artiList_lyric_wrpr">
            <ArtisPagList />;
            <Lyrics />
          </div>
        </div>
        <div className="ArtPage_ArtCarWrapper">
          {/* <div className="SUBheader artpa_suHeder">Artists</div> */}
          {/* <div className="ArtPag_ArtisCardSub_wrappper">
                        <div className="ArtPag_ArtCar_wrapper">
                            <ArtistsCard />
                            <ArtistsCard />
                            <ArtistsCard />
                            <ArtistsCard />
                            <div className="ArtPag_ArtCar_wrapper_mob">
                                <ArtistsCard />
                                <ArtistsCard />
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
