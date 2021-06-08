import React from 'react';
import discover from '../../../Images/asia.jpg';
import Pause from '../../../Images/Icons/pause.svg';
import save from '../../../Images/Icons/favorite.svg';
import './ListCard.css'

function ListCard() {
    return (
        <div className="List_card_wrapper">
            <div className="List_card_content">
                <div className="List_Images">
                    <img src={discover} alt="" className="List_Image" />
                    <img src={Pause} alt="" className="controller" />
                </div>
                <div className="List_Name_wrapper">
                    <div className="MusicName_B">The last great American dynasty</div>
                </div>

                <div className="List_duration_view_wrapper">
                    <div className="List_duration">3:20</div>
                    <div className="List_view">5.2b</div>
                </div>

                {/* <div className="List_status">Now Listening...</div> */}


                <img src={save} alt="" className="List_save" />
            </div>
        </div>

    )
}

export default ListCard;