import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import ImageB from '../../../Music files/Shawn Mendes/Thumbnail/Air.jpg'
import Play from '../../../Images/Icons/Play_fill.svg';
import view from '../../../Images/Icons/view.svg';
import like from '../../../Images/Icons/like.svg';
import avatar from '../../../Images/artists/Taylor Swift.jpg';
import { numFormatter } from '../../../Container/FUNCTIONS';
import './DiscoverCard.css'
import { Music } from '../../../Json/Music';

let random = Math.random() * 70;
let floor = Math.floor(random);

let views = numFormatter(Music[floor].Views)
let likes = numFormatter(Music[floor].Likes)


function DiscoverCardB() {
    return (
        <div className="DiscoverCard_wrapper Discover_B" key = {Music[floor].id}>
            <div className="DiscoverCard_filter"></div>
            <img src={Music[floor].Preview.default} className="Discover_image" alt="" />
            <div className="DiscoverCard_content">
                <div className="DiscCard_Upper">
                    <div className="MusicName_A">{Music[floor].name} </div>
                    <img className="favorite" src={Favorite} alt="" />
                </div>
                <div className="DiscCard_lower">
                    <div className="Discover_play">
                        <div className="Play_D">Play</div>
                        <img className="ButtonImg" src={Play} alt="" />
                    </div>
                    <div className="DiscoverDetails_wrapper">
                        <div className="Dis_content">
                            {/* <img className="Artist_avatar" src={avatar} alt="" /> */}
                            <div className="discDetails_wrapper">
                                <div className="ArtistName">{Music[floor].Artist}</div>
                                <div className="Like_view_wrapper">
                                    <div className="View_wrapper">
                                        <img src={view} alt="" className="icons" />
                                        <div className="view">{views}</div>
                                    </div>
                                    <div className="Like_wrapper">
                                        <img src={like} alt="" className="icons" />
                                        <div className="Like">{likes}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Duration_tag">
                            <div className="Duration_A">{Music[floor].duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DiscoverCardB;