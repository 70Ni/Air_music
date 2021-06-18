import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import thumb from '../../../Music files/Carlie Puth/Thumbnails/La Girl.jpg'

import './HeaderCore.css'
const mapStateToProps = state => ({
    currentState: state.player,
    resultMusic: state.search.SearchResults
})

let currentMusic = [];
const HeaderCore = ({ currentState }) => {
    useEffect(() => {
            console.log("Hello")
    },[currentState.CurrentGroup.IndexOfMusic]);
    console.log(currentMusic)
    return (
        <div className="HeaderCore_wrapper">
            <div className="HeaderCore_content_Inactive">
                <div className="HeaderCore_Intro">
                    <div className="HeaderCore_header">
                        <div className="Nav_header_name">air</div>
                        <div className="Nav_header_BB">Musics</div>
                    </div>
                    {currentState.prevMusic ? null : <button className="getStarted">Get Started</button>}
                    <img src={thumb} alt="" className="Thumb_image" />
                    <div className="HeaderCore_para">
                        Air Music is a music streaming service developed for knowledge and entertainment purposes.
                    </div>

                    <div className="Music_wrpaer">
                        <div className="HeaderCore_MusicName">Power</div>
                    </div>
                    <div className="NowListening_para">Now Listening...</div>
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
    )
}

export default connect(mapStateToProps, null)(HeaderCore);
