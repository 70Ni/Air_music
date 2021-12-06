import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import user from "../../Images/Icons/userIcon.svg";
import headphones from "../../Images/Icons/headphones.svg";
import info from "../../Images/Icons/info.svg";
import list from "../../Images/Icons/list.svg";
import trending from "../../Images/Icons/trending.svg";

import Icon from "../../../src/Icon";
import "./NavBar.css";
import { useSelector } from "react-redux";
import DiscoverIcon from "../../Images/Icons/DiscoverIcon";
import TrendingIcon from "../../Images/Icons/TrendingIcon";
import UserIcon from "../../Images/Icons/UserIcon";
import Settings from "../Settings/Settings";

function NavBar() {
  const history = useHistory();
  const [active, setactive] = useState("/");
  const favorite = useSelector((state) => state.favorite.notify);
  const activation = (pathname) => {
    setactive(pathname);
  };
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="Navbar_wrapper">
      <div className="NavContainer">
        <div className="Nav_header ">
          <div className="Nav_header_name">
            <Icon />
          </div>
          <div className="Nav_header_BB">Musics</div>
        </div>
        <div className="NavList_wrapper">
          <div className="NavList_A">
            <div className="nav_subHeader">New feeds</div>
            <NavLink
              key="discover"
              to="/discover"
              className="NavItem_container"
              activeClassName="active"
            >
              <DiscoverIcon className="Nav_icon" DiscoverG={active} />
              <div className="Nav_item">Discover</div>
            </NavLink>
            <NavLink key="trendi" to="/trending" className="NavItem_container">
              <TrendingIcon trendingG={active} />
              <div className="Nav_item">Trending</div>
            </NavLink>
            <NavLink
              key="artists"
              to="/artists"
              className="NavItem_container"
              id="artistsG"
            >
              <UserIcon id="artistsG" artistsG={active} />
              <div className="Nav_item" id="artistsG">
                Artists
              </div>
            </NavLink>
            <div className="nav_subHeader">Saved items</div>
            <NavLink
              key="playlists"
              to="/playlist"
              className="NavItem_container"
              id="playListG"
              onClick={(e) => setactive(e.target.id)}
            >
              <img
                alt=""
                className="Nav_icon"
                src={headphones}
                id="playListG"
              />
              <div className="Nav_item" id="playListG">
                Playlist
              </div>
              {favorite ? <span className="PlayList_notifier"></span> : null}
            </NavLink>
            <NavLink
              key="abouts"
              to="/recent"
              className="NavItem_container"
              id="recentG"
              onClick={(e) => setactive(e.target.id)}
            >
              <img alt="" className="Nav_icon" src={list} id="recentG" />
              <div className="Nav_item" id="recentG">
                Recent
              </div>
            </NavLink>
          </div>
          <div className="NavList_B">
            <NavLink
              to="/about"
              className="NavItem_container"
              id="recentG"
              onClick={(e) => setactive(e.target.id)}
            >
              <img alt="" className="Nav_icon" src={info} id="recentG" />
              <div className="Nav_item" id="recentG">
                About
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
