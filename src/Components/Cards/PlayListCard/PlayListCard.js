import React from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Lifetime.jpg'




import './PlayListCard.css'

function PlayListCard() {
    return (
        <div className="ItemCard_wrapper">
            <div className="ItemCard_content">
                <div className="Item_image_section">
                    {/* <div className="Item_nowPlaying">
                        <img src="" className="" alt="" />
                        <div className="Item_nowListening">Now Listening</div>
                    </div> */}
                    <img src={Image} className="Item_Image" alt="" />
                </div>
                <div className="Item_details_wrapper">
                    <div className="Item_Details_section">
                        <div className="ArtistName_B">Marshmellow</div>
                        <div className="MusicName_B">Power</div>
                        <div className="Item_footer_wrapper">
                            <div className="Duration_B">2:57</div>
                            <img src={Favorite} alt="" className="Favorite"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default PlayListCard;