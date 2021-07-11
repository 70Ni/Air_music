import React from 'react';
import play from '../../../Images/Icons/play_white.svg'
import discover from '../../../Images/asia.jpg'
import Favorite from '../../../Images/Icons/save.svg'


import './TrendingCard.css'




function TrendingCard({ id, key, name, artist, duration, preview, ki }) {
    return (

        <div className="Trending_card_wrapper" key={id}>
            <img src={preview} alt="" className="trending_bg_image" />
            <div className="Trending_card_content">
                <div className="Trending_number">{`#${ki + 1}`}</div>
                <div className="trending_Play_tag">
              
                    <div className="trending_listening"><span className="hide_Now">Now</span> Listening</div>
                    <div className="Play_D">Play</div>
                    <img src={play} alt="" className="icons" />
                </div>
                <div className="Trending_details_wrapper">
                    <div className="trendding_details">
                        <div className="trending_header_B">
                            <div className="Trending_Music_Name">{name}</div>
                        </div>
                        <div className="Trending_Artist_name">{artist}</div>
                    </div>
                    <div className="Trending_footer">
                        <img src={Favorite} alt="" className="Treding_save" />
                        <div className="Duration_B Trending_d">{duration}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TrendingCard;