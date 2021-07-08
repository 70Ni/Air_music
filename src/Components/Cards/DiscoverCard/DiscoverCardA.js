import React from 'react';
import { useDispatch } from 'react-redux';
import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Marshmellow/Thumbnails/Power.jpg'
import Play from '../../../Images/Icons/Play_fill.svg';
import view from '../../../Images/Icons/view.svg';
import like from '../../../Images/Icons/like.svg';
import { indexFind } from '../../../Redux/IndexFinder';
import avatar from '../../../Images/artists/Taylor Swift.jpg';


import './DiscoverCard.css'
import { array } from '../../../Container/Discover/DiscoverSong'
import { Music } from '../../../Json/Music';
import { numFormatter } from '../../../Container/FUNCTIONS';


let id = array.group[0].id;
let Group = {group:array.group};

console.log(Group)
let views = numFormatter(array.group[0].Views)
let likes = numFormatter(array.group[0].Likes)

function DiscoverCardA() {


    const dispatch = useDispatch();
    return (
        <>
            <div className="DiscoverCard_wrapper Discover_A" key={array.group[0].id}>
                <div className="DiscoverCard_filter"></div>
                <img src={array.group[0].Preview.default} className="Discover_image" alt="" />
                <div className="DiscoverCard_content">
                    <div className="DiscCard_Upper">
                        <div className="MusicName_A">{array.group[0].name}</div>
                        <img className="favorite" src={Favorite} alt="" />
                    </div>
                    <div className="DiscCard_lower">
                        <button className="Discover_play" onClick={() => dispatch(indexFind({ id, Group }))}>
                            <div className="Play_D">Play</div>
                            <img className="ButtonImg" src={Play} alt=""  />
                        </button>
                        <div className="DiscoverDetails_wrapper">
                            <div className="Dis_content">
                                {/* <img className="Artist_avatar" src={avatar} alt="" />*/}
                                <div className="discDetails_wrapper">
                                    <div className="ArtistName">{array.group[0].Artist}</div>
                                    <div className="Like_view_wrapper">
                                        <div className="View_wrapper">
                                            <img src={view} alt="" className="icons" />
                                            <div className="view">{views}</div>
                                        </div>
                                        <div className="Like_wrapper">
                                            <img src={like} alt="" className="icons" />
                                            <div className="Like">{likes}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Duration_A">{array.group[0].duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default DiscoverCardA;