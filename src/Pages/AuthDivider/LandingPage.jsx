import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../../App";
import Auth from "../../Components/Auth/Auth";
import TrendingCard from "../../Components/Cards/TrendingCard/TrendingCard";
import DashBar from "../../Components/Dashbar/DashBar";
import NavBar from "../../Components/NavBar/NavBar";
import DiscovPage from "../DiscovPage";
import Application from "./Application";

function LandingPage() {
  const [isSignIn, setisSignIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Switch>
          {isSignIn ? (
            <div>
              <DashBar />
              <Route exact path="/" component={DiscovPage} />
            </div>
          ) : (
            <Route exact path="/" component={Auth} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default LandingPage;
