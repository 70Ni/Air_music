import React from 'react';

import Forward from '../../Images/Icons/arrow_forward.svg'
import Backward from '../../Images/Icons/arrow_backward.svg'
import Play from '../../Images/Icons/playCircle.svg'
import Intro from '../../Music files/Justin Bieber/thumbnail/Lifetime.jpg'
import './Songdetails.css'

function SongDetails() {
    return (
        <div className="CurrentSong_Details_wrapper">
            <div className="CurrentSong_Details_container">
                <div className="Curr_SongDet_header_wrapper">
                    <div className="forwardCircle_wrapper">
                        <img src={Backward} alt="" />
                    </div>
                    <div className="Cur_songDet_Header">Power</div>
                    <div className="BackwardCircle_wrapper">
                        <img src={Forward} alt="" />
                    </div>
                </div>
                <div className="Curr_SongDet_subHead_wrapper">
                    <div className="Curr_songDet_subHeader_Art">Anne marie</div>
                    <div className="Curr_songDet_subHeader_dur">duration 2:30 min</div>
                </div>
                <div className="Curr_SongDet_Para_wrapper">

                    <div className="Curr_songDet_Para">Billie Eilish Pirate Baird O'Connell (/ˈaɪlɪʃ/ EYE-lish;[1] born December 18, 2001) is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom. The song was written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. Her debut EP, Don't Smile at Me (2017), became a sleeper hit, reaching the top 15 in the US, UK, Canada, and Australia.            </div>
                    <img src={Intro} className="Curr_songDet_Para_Bg" alt=""/>
                </div>
                <div className="Curr_songDet_Play_wrpper">
                    <span className="Cur_songDet_play">Playing</span>
                    <img src={Play} className="Cur_songDet_Icon" alt=""/>
                </div>
            </div>
        </div>

    )
}


export default SongDetails;