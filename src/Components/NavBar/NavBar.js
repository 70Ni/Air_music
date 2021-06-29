import React from 'react';
import { Link, NavLink } from 'react-router-dom'


import user from '../../Images/Icons/userIcon.svg';
import headphones from '../../Images/Icons/headphones.svg';
import info from '../../Images/Icons/info.svg';
import list from '../../Images/Icons/list.svg';
import trending from '../../Images/Icons/trending.svg';
import search from '../../Images/Icons/search.svg';


import './NavBar.css'


function NavBar() {
    return (
        <div className="Navbar_wrapper">
            <div className="NavContainer">
                <div className="Nav_header ">
                    <div className="Nav_header_name">o</div>
                    <div className="Nav_header_BB">Musics</div>
                </div>
                <div className="NavList_wrapper">
                    <div className="NavList_A">
                        <div className="nav_subHeader">New feeds</div>
                        <NavLink to="/discover" className="NavItem_container" activeClassName="active">
                            <img alt="" className="Nav_icon" src={search} />
                            <div className="Nav_item">Discover</div>
                        </NavLink>
                        <NavLink to="/trending" className="NavItem_container">
                            <img alt="" className="Nav_icon" src={trending} />
                            <div className="Nav_item">Trending</div>
                        </NavLink>
                        <NavLink to="/artists" className="NavItem_container">
                            <img alt="" className="Nav_icon" src={user} />
                            <div className="Nav_item">Artists</div>
                        </NavLink>
                        <div className="nav_subHeader">Saved items</div>
                        <NavLink to="/playlist" className="NavItem_container">
                            <img alt="" className="Nav_icon" src={headphones} />
                            <div className="Nav_item">Playlist</div>
                            <span className="PlayList_notifier"></span>
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
    )
}

export default NavBar