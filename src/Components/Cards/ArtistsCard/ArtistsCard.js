import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Lifetime.jpg'
import img from '../../../Images/artists/Ann.jpg'
// import save from '../../../Images/Icons/save.svg';



import './ArtistsCard.css'

function ArtistsCard() {
    return (
        <div className="ArtistCard_wrapper">
            <div className="ArtistCard_content">
                <div className="ArtistCard_Image_section">

                    <img src={img} className="ArtistsCard_Image" alt="" />

                </div>
                <div className="ArtCard_details">
                    <div className="MusicName_B">Marshmellow</div>
                </div>
                <div className="Artists_Details_section">
                </div>
            </div>
        </div>

    )
}

export default ArtistsCard;