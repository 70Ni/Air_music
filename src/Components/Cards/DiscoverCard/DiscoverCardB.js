import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import ImageB from '../../../Music files/Shawn Mendes/Thumbnail/Air.jpg'
import Play from '../../../Images/Icons/Play_fill.svg';
import view from '../../../Images/Icons/view.svg';
import like from '../../../Images/Icons/like.svg';
import avatar from '../../../Images/artists/Taylor Swift.jpg';


import './DiscoverCard.css'



function DiscoverCardB() {
    return (
        <div className="DiscoverCard_wrapper Discover_B">
            <div className="DiscoverCard_filter"></div>
            <img src={ImageB} className="Discover_image" alt="" />
            <div className="DiscoverCard_content">
                <div className="DiscCard_Upper">
                    <div className="MusicName_A">You Need To Calm Down</div>
                    <img className="favorite" src={Favorite} alt="" />
                </div>
                <div className="DiscCard_lower">
                    <div className="Discover_play">
                        <div className="Play_D">Play</div>
                        <img className="ButtonImg" src={Play} alt="" />
                    </div>
                    <div className="DiscoverDetails_wrapper">
                        <div className="Dis_content">
                            <img className="Artist_avatar" src={avatar} alt="" />
                            <div className="discDetails_wrapper">
                                <div className="ArtistName">Justin</div>
                                <div className="Like_view_wrapper">
                                    <div className="View_wrapper">
                                        <img src={view} alt="" className="icons" />
                                        <div className="view">53.6k</div>
                                    </div>
                                    <div className="Like_wrapper">
                                        <img src={like} alt="" className="icons" />
                                        <div className="Like">31.5k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Duration_tag">
                            <div className="Duration_A">3:20</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DiscoverCardB;