import React from 'react';

import './ProfileIcon.css'

function ProfileIcon({Image,name}) {
    return (
        <div className="Profile_icon_wrapper">
            <div className="Profile_icon_content">
                <img src={Image} alt="" className="Artist_avatar"/>
                <div className="Profile_artist_Name">{name}</div>
            </div>
        </div>


    )
}

export default ProfileIcon;