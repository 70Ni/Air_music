import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import user from "../../Images/Icons/userIcon.svg";
import headphones from "../../Images/Icons/headphones.svg";
import info from "../../Images/Icons/info.svg";
import list from "../../Images/Icons/list.svg";
import trending from "../../Images/Icons/trending.svg";
import search from "../../Images/Icons/search.svg";

import Icon from "../../../src/Icon";
import "./NavBar.css";
import { useSelector } from "react-redux";
import SearchIcon from "../../Images/Icons/SearchIcon";

function NavBar(props) {
  const [active, setactive] = useState("home");
  const favorite = useSelector((state) => state.favorite.notify);
  const activeClass = { color: "pink", margin: 20 };
  const activate =(id) => {
      setactive(id)
  }
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
              to="/discover"
              className="NavItem_container"
              activeClassName="active"
              id="Discover"
            >
              <SearchIcon className="Nav_icon" />
              <div className="Nav_item">Discover</div>
            </NavLink>
            <NavLink to="/trending" className="NavItem_container">
              <img alt="" className="Nav_icon" src={trending} />
              <div className="Nav_item">Trending</div>
            </NavLink>
            <NavLink
              to="/artists"
              className={active ? activeClass : "NavItem_container"}
              id= "artists"
              onClick={()=>activate('artists')}
            >
              <img alt="" className="Nav_icon" src={user} />
              <div className="Nav_item">Artists</div>
            </NavLink>
            <div className="nav_subHeader">Saved items</div>
            <NavLink to="/playlist" className="NavItem_container">
              <img alt="" className="Nav_icon" src={headphones} />
              <div className="Nav_item">Playlist</div>
              {favorite ? <span className="PlayList_notifier"></span> : null}
            </NavLink>
            <NavLink to="/recent" className="NavItem_container">
              <img alt="" className="Nav_icon" src={list} />
              <div className="Nav_item">Recent</div>
            </NavLink>
          </div>
          <div className="NavList_B">
            <Link to="/about">
              <div className="NavItem_container">
                <img alt="" className="Nav_icon" src={info} />
                <div className="Nav_item">About</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
