import React from 'react';
import { useSelector } from 'react-redux';

import './HeaderThunder.css'

function HeaderThunder() {


    const MusicLoaded = useSelector(state => state.MusicLoaded);

    let musicGroup = MusicLoaded.MusicGroup.group;
    let musicIndex = MusicLoaded.IndexOfMusic;

    return (
        <div className="Header_thunderWrapper">
            <div className="HEADER_THUNDER"></div>
                {
                    musicGroup ?
                        <div className="img_bg">
                            <img src={musicGroup[musicIndex].Preview.default} alt="" className="Thumb_image" />
                        </div>
                        : null
                }
            <div className="HEADER_SHIELD">
            </div>
        </div>
    )
}

export default HeaderThunder