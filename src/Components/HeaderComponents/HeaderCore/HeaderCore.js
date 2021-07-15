import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { audio } from '../../../Container/FUNCTIONS';
import thumb from '../../../Music files/Carlie Puth/Thumbnails/La Girl.jpg'

import './HeaderCore.css'


function HeaderCore() {
    const MusicLoaded = useSelector(state => state.MusicLoaded);

    let musicGroup = MusicLoaded.MusicGroup.group;
    let musicIndex = MusicLoaded.IndexOfMusic;

    return (
        <div className="HeaderCore_wrapper">
            <div className="HeaderCore_content_Inactive">
                <div className="HeaderCore_Intro">
                    <div className="HeaderCore_header">
                        <div className="Nav_header_name">air</div>
                        <div className="Nav_header_BB">Musics</div>
                    </div>
                    <div className="HeaderCore_para">
                        Air Music is a music streaming service developed for education and entertainment purposes.
                    </div>
                    {
                        musicGroup ? null :

                            <button className="getStarted">Get Started</button>
                    }
     

                    <div className="Music_wrpaer">
                        <div className="HeaderCore_MusicName">{musicGroup ? musicGroup[musicIndex].name : null}</div>
                    </div>
                    <div className="NowListening_para"> {musicGroup ? "Now Listening ..." : null}</div>
                </div>
            </div>

            {/* <div className="HeaderCore_content_Inactive">
            <div className="HeaderCore_Intro">
                <div className="HeaderCore_header ">
                    <div className="Nav_header_name">air</div>
                    <div className="Nav_header_BB">Musics</div>
                </div>
                <div className="Music_wrpaer">
                    <div className="HeaderCore_MusicName">Power</div>
                    <div className="HeaderCore_Music_by">by Marshmellow</div>
                </div>
                <div className="NowListening_para">Now Listening...</div>
            </div>
        </div> */}
        </div>
    );
}



export default HeaderCore;
