import React from 'react';


import Favorite from '../../Images/Icons/save.svg'
import Image from '../../Music files/Marshmellow/Thumbnails/Power.jpg'
import Play from '../../Images/Icons/Play_fill.svg';
import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import view from '../../Images/Icons/view.svg';
import like from '../../Images/Icons/like.svg';
import avatar from '../../Images/artists/Taylor Swift.jpg';
import bg from '../../Images/asia.jpg'
import './MusicPlayer.css'
// import './Slider.scss'
import { useRef } from 'react';


const styler = {
    color: 'white'
}
function MusicPlayer() {

    const refContainer = useRef();
    const onChange = (e, a) => {
        // `current` points to the mounted text input element
    };


    https://www.cssscript.com/demo/range-slider-webkit/


    return (
        <div className="MusicPlayer_Wrappper">
            <div className="MusicPlayer_wrapper">
                <div className="MusicPlayer_content">
                    <img src={Image} className="MusicPlayer_thumb" />
                    <div className="PlayerDetails_wrapper">
                        <div className="Music_artist_wrapper">
                            <div className="MusicName_B">Music name here</div>
                            <div className="ArtistName_B">Marshmellow</div>
                        </div>
                    </div>
                    <div className="Player_reverser">
                        <div className="PlayerControllor_wrapper">
                            <img src={Forward} className="controllor MusicBackward" alt="" />
                            <img src={Play} className="controllor" alt="" />
                            <img src={Backward} className="controllor MusicForward" alt="" />
                        </div>
                        <div className="Player_right_wrapper">
                            <div className="MusicDuration_wrapper">00:24/03:24</div>
                            <div className="volume_controllor">
                                <img src={Volume} alt="" className="Volume" />
                                <span className="Volume_bar"></span>
                            </div>
                            <img src={Favorite} className="favorite_Musictrl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MusicPlayer;
