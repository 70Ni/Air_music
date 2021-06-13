import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Changes.jpg'
import Play from '../../../Images/Icons/Play_fill.svg'
// import save from '../../../Images/Icons/save.svg';



import './SqureCard.css'

function SqureCard({ id, name, preview, views, artist }) {
    return (
        <div className="Squre_wrapper">
            <div className="Squre_content">
                <div className="Squre_image_section">
                    <img src={Favorite} alt="" className="favorite_S" />
                    <div className="Squre_play_wrapper">
                        <img src={Play} className="Squre_play" alt="" />
                    </div>
                    <img src={preview} className="Squre_Image" alt="" />
                </div>
                <div className="Squre_Details_section">
                    <div className="ArtistName_B">{artist}</div>
                    <div className="MusicName_S">{name}</div>
                </div>
            </div>
        </div>

    )
}

export default SqureCard;