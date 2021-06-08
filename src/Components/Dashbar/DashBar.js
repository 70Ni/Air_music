import React from 'react';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';

import './DashBar.css'

function DashBar() {
    return (
        <div className="DashBar_wrapper">
            <div className="DashBar_content">
                <div className="Browser_wrapper">
                    <input type="text" id="searchField" name="Search" placeholder="Browse" />
                    <img className="Browser_icon" src={search} />
                </div>
                <div className="DashIcon_wrapper">
                    <div className="user_icon_wrapper">
                        <img src={User} />
                    </div>
                    <div className="bell_icon_wrapper">
                        <sapn className="notifier"></sapn>
                        <img src={bell} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBar