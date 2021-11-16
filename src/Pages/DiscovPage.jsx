import React from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";

import Airmusic from "../Components/Branding/Airmusic";
import "./DiscovPage.css";
import img1 from "../Images/artists_icons/Shawn-Mendes.jpg";
import img2 from "../Images/artists_icons/Ed-Sheeran.jpg";
import img3 from "../Images/artists_icons/Marshmellow.jpg";
import img4 from "../Images/artists_icons/Anne-Marie.jpg";
import img5 from "../Images/artists_icons/Billie-Ellish.jpg";
import play from "../Images/Icons/play.svg";

import PremiumImg from "../Images/DiscovPage/PremiumImg.jpg";
import trending from "../Images/DiscovPage/trending.jpg";

import introImg from "../Images/DiscovPage/inroImg.jpg";
import SqureB from "../Components/Cards/SqureCard/SqureB";
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
              What's listening on this weekend?
            </div>
            <div className="parag">
              Air Music is a music streaming service developed for education and
              entertainment purposes.
            </div>
            <button className="getStarted margd2">Get Started</button>
          </div>
        </div>
        <div className="SUBheader subHeaderD2">Musics</div>
        <div className="discovWrper discovWrper2">
          <SqureB />
          <SqureB />
          <SqureB />
          <SqureB />
          <SqureB />
          <SqureB />
        </div>
        <div className="D2isvoerArtis_wpr">
          <div className="d2ArtImgwrpr">
            <img src={img1} alt="" className="d2artist" />
            <img src={img2} alt="" className="d2artist" />
            <img src={img3} alt="" className="d2artistLrg" />
            <img src={img4} alt="" className="d2artist" />
            <img src={img5} alt="" className="d2artist" />
          </div>
          <div className="d2Arttxtwrp">
            <div className="d2ArtHeader">Get your favorite Artists</div>
            <div className="d2artiPara parag">Hear from your loved artists</div>
            <button className="getStarted margd2">Play songs </button>
          </div>
        </div>

        <div className="d2PremumBanner">
          <div className="d2premImgdiv">
            <img src={PremiumImg} alt="" className="d2premImg" />
            <div className="d2prmImgd2Overlay"></div>
          </div>
          <div className="d2PrmtxtWrpr">
            <div className="d2prmsubHedr">Premium songs</div>
            <div className="d2prmHeader">
              Turn off the screen, and keep your music on
            </div>
            <div className="prmPlaywrp">
              <div className="premPlay">Play </div>
              <img src={play} alt="" className="PlayPrem" />
            </div>
          </div>
        </div>

        <div className="d2HeaderCore">
          <div className="HeaderCore_Intro">
            <div className="HeaderCore_header">
              <div className="Nav_header_name">air</div>
              <div className="Nav_header_BB">Musics</div>
            </div>
            <div className="HeaderCore_para">
              Air Music is a music streaming service developed for education and
              entertainment purposes.
            </div>

            <button className="getStarted">Get Started</button>
          </div>
        </div>

        <div className="d2TrenWraper">
          <div className="D2trendingIntro_wraper">
            <div className="introImgd2">
              <img src={trending} alt="" className="d2IntroImg" />
              <div className="introImgd2Overlay"></div>
            </div>
            <div className="D2introtxtWrpr d2trntxtwrp">
              <div className="d2prmsubHedr">Trending Music</div>
              <div className="d2prmHeader">Whats Trending? check it out </div>
              <NavLink to="/trending" className="NavItem_container">
                <button className="getStarted margd2">Get Started</button>
                <div className="Nav_item">Trending</div>
              </NavLink>
            </div>
          </div>
          <div className="d2iscollec_wrpr">
            <div className="discovWrper">
              <SqureB />
              <SqureB />
              <SqureB />
            </div>
            <div className="parag tren2parg">
              Billie Eilish Pirate Baird O'Connell (/ˈaɪlɪʃ/ EYE-lish;[1] born
              December 18, 2001) is an American singer and songwriter. She first
              gained public attention in 2015 with her debut single "Ocean
              Eyes", which was subsequently released by Darkroom, a subsidiary
              of Interscope Records.
            </div>
          </div>
        </div>
        {/*
        <div className="D2iscoverIntro_wraper">
          <div className="introImgd2">
            <img src={introImg} alt="" className="d2IntroImg" />
            <div className="introImgd2Overlay"></div>
          </div>
          <div className="D2introtxtWrpr">
            <Airmusic />
            <div className="D2introHeader">
              What's listening on this weekend?{" "}
            </div>
            <div className="parag">
              Air Music is a music streaming service developed for education and
              entertainment purposes.
            </div>
            <button className="getStarted margd2">Get Started</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default DiscovPage;
