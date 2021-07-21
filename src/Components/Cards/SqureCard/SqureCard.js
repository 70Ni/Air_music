import React, { useState, useEffect } from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import { useDispatch, useSelector } from 'react-redux';
import Image from '../../../Music files/Justin Bieber/thumbnail/Changes.jpg'
import Play from '../../../Images/Icons/Play_fill.svg'
import info from '../../../Images/Icons/list.svg'
// import save from '../../../Images/Icons/save.svg';
import Playing from '../../../Images/Icons/play_fill.svg'

import './SqureCard.css'
import { indexFind } from '../../../Redux/IndexFinder';
import { isFavorite } from '../../../Redux/favorite';




function SqureCard({ id, name, preview, artist, newarray }) {

    const MusicLoaded = useSelector(state => state.MusicLoaded);
    const fav = useSelector(state => state.favorite.id)


    let isfavorite = fav.includes(id);

    const [Group, setGroup] = useState(0)
    useEffect(() => {
        setGroup(newarray)
    }, [MusicLoaded.ClickedMusic])


    const dispatch = useDispatch();

    let contrast = MusicLoaded.ClickedMusic === id ? { color: '#F27E4C', fontWeight: '700', opacity: '1' } : null
    let nowPlaying = MusicLoaded.ClickedMusic === id ? { visibility: 'visible' } : { visibility: 'hidden' }

    return (
        <div className="Squre_wrapper" key={id}>
            <div className="Squre_content">
                <div className="Squre_image_section">
                    <img src={isfavorite ? info : Favorite} alt="" className="favorite_S" onClick={() => dispatch(isFavorite({ id, name }))} />
                    <div className="Squre_play_wrapper" onClick={() => dispatch(indexFind({ id, Group }))}>
                        <img src={Play} className="Squre_play" alt="" />
                    </div>
                    <img src={preview} className="Squre_Image" alt="" />
                </div>
                <div className="Squre_Details_section">
                    <div className="ArtistName_B" >{artist}</div>
                    <div className="MusicName_S" style={contrast} >{name}</div>
                </div>

            </div>
        </div>
    );
}
export default SqureCard;