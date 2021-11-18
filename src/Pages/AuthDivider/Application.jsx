import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NavBar from "../../Components/NavBar/NavBar";
import DashBar from "../../Components/Dashbar/DashBar";
// import { MusicGroupSet } from "./Container/FUNCTIONS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderThunder from "../../Components/HeaderComponents/HeaderThunder/HeaderThunder";
import DiscoverPage from "../../Pages/DiscoverPage";
import TreningPage from "../../Pages/TrendingPage";
import ArtistPage from "../../Pages/ArtistPage";
import HorizontalNav from "../../Components/NavBar/HorizontalNav/HorizontalNav";
import HeaderCore from "../../Components/HeaderComponents/HeaderCore/HeaderCore";
import PlayListPage from "../../Pages/PlayListPage";
import RecentPage from "../../Pages/RecentPage";
import AboutPage from "../../Pages/AboutPage";
import Grid from "../../Pages/Grid";
import MusicPlayer from "../../Components/MusicPlayer/MusicPlayer";
import DiscovPage from "../../Pages/DiscovPage";
import Auth from "../../Components/Auth/Auth";
import AppNav from "../../Components/NavBar/ApplicationNav/AppNav";
// import LandingPage from "./Pages/AuthDivider/LandingPage";

function Application() {
  const [isSignUp, setisSignUp] = useState(true);
  return (
    <Router>
      {isSignUp ? <HeaderThunder /> : null}
      <div className="Master_wrapper">
        <Route exact path="/discover2" component={DiscovPage} />
        <Route exact path="/signin" component={Auth} />
        <div className="Nav_side">
          <NavBar />
        </div>
        <div className="Page_side">
          {isSignUp ? <DashBar /> : null}
          <HeaderCore />
          <Switch>
            <Route exact path="/discover" component={DiscoverPage} />
            <Route exact path="/trending" component={TreningPage} />
            <Route exact path="/artists" component={ArtistPage} />
            <Route exact path="/playlist" component={PlayListPage} />
            <Route exact path="/recent" component={RecentPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/grid" component={Grid} />
          </Switch>
        </div>
      </div>
      {/* <AppNav /> */}
      <MusicPlayer />
    </Router>
  );
}

export default Application;
