import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'


import user from '../../../Images/Icons/user.svg';
import headphones from '../../../Images/Icons/headphones.svg';
import info from '../../../Images/Icons/info.svg';
import list from '../../../Images/Icons/list.svg';
import trending from '../../../Images/Icons/trending.svg';
import search from '../../../Images/Icons/search.svg';


import '../NavBar.css'


function HorNavBar() {
    return (
        <div className="Navbar_wrapperHor">
            <div className="NavContainerHor">
                <div className="NavList_wrapperHor">
                    <Link to="/discover">
                        <div className="NavItem_containerHor active">
                            <img className="Nav_icon" src={search} />
                            <div className="Nav_item">Discover</div>
                        </div>
                    </Link>
                    <Link to="/trending">
                        <div className="NavItem_containerHor">
                            <img className="Nav_icon" src={trending} />
                            <div className="Nav_item">Trending</div>
                        </div>
                    </Link>
                    <Link to="/artists">
                        <div className="NavItem_containerHor">
                            <img className="Nav_icon" src={user} />
                            <div className="Nav_item">Artists</div>
                        </div>
                    </Link>
                    <div className="NavItem_containerHor">
                        <img className="Nav_icon" src={headphones} />
                        <div className="Nav_item">Playlist</div>
                    </div>
                    <div className="NavItem_containerHor">
                        <img className="Nav_icon" src={list} />
                        <div className="Nav_item">Recent</div>
                    </div>
                    <div className="NavItem_containerHor">
                        <img className="Nav_icon" src={info} />
                        <div className="Nav_item">About</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorNavBar