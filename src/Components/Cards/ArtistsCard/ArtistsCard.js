import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Lifetime.jpg'

// import save from '../../../Images/Icons/save.svg';



import './ArtistsCard.css'

function ArtistsCard() {
    return (
        <div className="ArtistCard_wrapper">
            <div className="ArtistCard_content">
                <div className="ArtistCard_Image_section">
                    <div className="Duration_B Artist_Duration">2:57</div>
                    {/* <div className="Item_nowPlaying">
                        <img src="" className="" alt="" />
                        <div className="Item_nowListening">Now Listening</div>
                    </div> */}
                    <img src={Image} className="ArtistsCard_Image" alt="" />
                    <div className="Artists_Details_section">
                        <div className="ArtCard_details">
                            <div className="ArtistName_B">Marshmellow</div>
                            <div className="MusicName_B">Some Music Names </div>
                        </div>
                        <div className="Fav_B_wrapper">
                            <img src={Favorite} alt="" className="favorite_B" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArtistsCard;