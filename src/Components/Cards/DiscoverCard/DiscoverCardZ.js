import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Marshmellow/Thumbnails/Together.jpg'
import Airmusic from '../../Branding/Airmusic'


import './DiscoverCard.css'



function DiscoverCardZ() {
    return (
        <div className="DiscoverCard_wrapperZ Discover_Z">
        {/* <div className="DiscoverCard_filter"></div> */}
            <img src={Image} className="Discover_image" alt="" />
            <div className="DiscoverCard_content">
                <div className="DiscCard_Upper">
                    <div className="MusicName_A Banner_header">Enjoy your favorite songs</div>
                </div>
                <div className="Banner_logo"><Airmusic /></div>
            </div>
        </div>
    )
}

export default DiscoverCardZ;