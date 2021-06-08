import React from 'react';

import avatar from '../../Images/artists/Ed-Sheeran.jpg';

import './ProfileIcon.css'

function ProfileIcon({key,Image,name}) {
    return (
        <div className="Profile_icon_wrapper" key={key}>
            <div className="Profile_icon_content">
                <img src={Image} alt="" className="Artist_avatar"/>
                <div className="Profile_artist_Name">{name}</div>
            </div>
        </div>


    )
}

export default ProfileIcon;