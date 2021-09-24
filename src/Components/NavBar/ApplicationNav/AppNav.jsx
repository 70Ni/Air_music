import React from "react";
import "./AppNav.css";

import DiscoverIcon from "../../../Images/Icons/DiscoverIcon";
import TrendingIcon from "../../../Images/Icons/TrendingIcon";
import UserIcon from "../../../Images/Icons/UserIcon";

function AppNav() {
  return (
    <div className="AppNavWrapper">
      <div className="appNavContent">
        <div className="AppNavItems">
          <DiscoverIcon />
          <div className="appNavname">Discover</div>
        </div>
        <div className="AppNavItems">
          <TrendingIcon />
          <div className="appNavname">Discover</div>
        </div>
        <div className="AppNavItems">
          <UserIcon />
          <div className="appNavname">Discover</div>
        </div>
        <div className="AppNavItems">
          <TrendingIcon />
          <div className="appNavname">Discover</div>
        </div>
        <div className="AppNavItems">
          <DiscoverIcon />
          <div className="appNavname">Discover</div>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
