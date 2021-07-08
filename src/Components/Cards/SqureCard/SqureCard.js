import React, { useState,useEffect } from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Changes.jpg'
import Play from '../../../Images/Icons/Play_fill.svg'
// import save from '../../../Images/Icons/save.svg';

import './SqureCard.css'
import { indexFind } from '../../../Redux/IndexFinder';
import { useDispatch,useSelector } from 'react-redux';




function SqureCard({ id, name, preview, artist, newarray }) {
    const MusicLoaded = useSelector(state => state.MusicLoaded)

    const [Group, setGroup] = useState(0)
    useEffect(() => {
        setGroup(newarray)
    }, [MusicLoaded.ClickedMusic])


    const dispatch = useDispatch()
    return (
        <div className="Squre_wrapper" key={id}>
            <div className="Squre_content">
                <div className="Squre_image_section">
                    <img src={Favorite} alt="" className="favorite_S" />
                    <div className="Squre_play_wrapper" onClick={() => dispatch(indexFind({ id, Group }))}>
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
    );
}
export default SqureCard;