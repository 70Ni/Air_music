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
              <Route exact path="/Discover" component={DiscovPage} />
            </div>
          ) : (
            <div>
              <Route exact path="/Discover" component={Auth} />
            </div>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default LandingPage;
