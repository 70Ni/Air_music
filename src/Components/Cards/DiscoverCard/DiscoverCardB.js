import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Favorite from '../../../Images/Icons/save.svg'
import ImageB from '../../../Music files/Shawn Mendes/Thumbnail/Air.jpg'
import Play from '../../../Images/Icons/play_white.svg';
import view from '../../../Images/Icons/view.svg';
import like from '../../../Images/Icons/like.svg';
import avatar from '../../../Images/artists/Taylor Swift.jpg';
import { numFormatter } from '../../../Container/FUNCTIONS';
import './DiscoverCard.css'
import { Music } from '../../../Json/Music';
import { indexFind } from '../../../Redux/IndexFinder';
import { array } from '../../../Container/Discover/DiscoverSong';
import info from '../../../Images/Icons/list.svg'
import { isFavorite } from '../../../Redux/favorite';

let id = array.group[1].id;
let Group = { group: array.group };
let name = array.group[1].name


let views = numFormatter(array.group[1].Views)
let likes = numFormatter(array.group[1].Likes)



function DiscoverCardB() {


    const MusicLoaded = useSelector(state => state.MusicLoaded);
    const fav = useSelector(state => state.favorite.id)
    let contrast = MusicLoaded.ClickedMusic === id ? { color: '#F27E4C', fontWeight: '700', opacity: '1' } : null
    let isfavorite = fav.includes(id);

    const dispatch = useDispatch();
    return (
        <div className="DiscoverCard_wrapper Discover_B" key={array.group[1].id}>
            <div className="DiscoverCard_filter"></div>
            <img src={array.group[1].Preview.default} className="Discover_image" alt="" />
            <div className="DiscoverCard_content">
                <div className="DiscCard_Upper">
                    <div className="MusicName_A" style ={contrast}>{array.group[1].name} </div>
                    <img className="favorite" src={isfavorite ? info : Favorite} alt=""  onClick={() => dispatch(isFavorite({ id, name  }))}/>
                </div>
                <div className="DiscCard_lower">
                    <div className="Discover_play" onClick={() => dispatch(indexFind({ id, Group }))}>
                        <div className="Play_D">Play</div>
                        <img className="ButtonImg" src={Play} alt="" />
                    </div>
                    <div className="DiscoverDetails_wrapper">
                        <div className="Dis_content">
                            {/* <img className="Artist_avatar" src={avatar} alt="" /> */}
                            <div className="discDetails_wrapper">
                                <div className="ArtistName">{array.group[1].Artist}</div>
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
                        <div className="Duration_tag">
                            <div className="Duration_A">{array.group[1].duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DiscoverCardB;