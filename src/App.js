import "./App.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import NavBar from "./Components/NavBar/NavBar";
import DashBar from "./Components/Dashbar/DashBar";
import { MusicGroupSet } from "./Container/FUNCTIONS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderThunder from "./Components/HeaderComponents/HeaderThunder/HeaderThunder";
import DiscoverPage from "./Pages/DiscoverPage";
import TreningPage from "./Pages/TrendingPage";
import ArtistPage from "./Pages/ArtistPage";
import HorizontalNav from "./Components/NavBar/HorizontalNav/HorizontalNav";

import HeaderCore from "./Components/HeaderComponents/HeaderCore/HeaderCore";
import PlayListPage from "./Pages/PlayListPage";
import RecentPage from "./Pages/RecentPage";
import AboutPage from "./Pages/AboutPage";
import Grid from "./Pages/Grid";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import DiscovPage from "./Pages/DiscovPage";
import Auth from "./Components/Auth/Auth";
import LandingPage from "./Pages/AuthDivider/LandingPage";
import Application from "./Pages/AuthDivider/Application";

function App() {
  const LoadedMusics = useSelector((state) => state.MusicLoaded);

  useEffect(() => {
    return MusicGroupSet();
  }, [LoadedMusics.ClickedMusic]);

  return (
    <div className="App">
      <Application />;
    </div>
  );
}

export default App;
