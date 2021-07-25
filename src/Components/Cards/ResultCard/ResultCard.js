import React,{useState, useEffect} from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Lifetime.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { indexFind } from '../../../Redux/IndexFinder';


import '../ArtistsCard/ArtistsCard.css'
import './ResultCard.css'
function ResultCard({preview,duration,name,artist,id,newarray}) {
    const dispatch = useDispatch()
    const [Group, setGroup] = useState(0);
    const MusicLoaded = useSelector(state => state.MusicLoaded)
 

    useEffect(() => {
        setGroup(newarray)
    }, [MusicLoaded.ClickedMusic])


    return (
        <div className="ResultCard_wrapper" key ={id} onClick={() => dispatch(indexFind({ id, Group }))}>
            <div className="ResultCard_content">
                <img src={preview} className="Result_Image" alt="" />
                <div className="ArtistCard_Met_section">
                    <div className="Result_Duration_B">{duration}</div>
                    <img src={Favorite} alt="" className="favorite_B" />
                </div>
                <div className="Result_Details_section">
                    <div className="ResultCard_details">
                        <div className="ArtistName_B">{artist}</div>
                        <div className="Result_MusicName_B">{name}</div>
                    </div>
                    <div className="Fav_B_wrapper">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResultCard;