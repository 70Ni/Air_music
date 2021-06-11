import React, { Component } from 'react';


import Favorite from '../../Images/Icons/save.svg'
import Image from '../../Music files/Marshmellow/Thumbnails/Power.jpg'
import Play from '../../Images/Icons/Play_fill.svg';
import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import DurationTime from './DurationTime';
import { Music } from '../../Json/Music'
import './MusicPlayer.css'
// import './Slider.scss'
import { useRef } from 'react';
import { connect } from 'react-redux';


class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let { currentState } = this.props;
        let musicPlaying = undefined;
        if (currentState.MusicGroup) {
            console.log(currentState.MusicGroup)
            musicPlaying = currentState.MusicGroup.map(x => x);
            console.log(musicPlaying)
        }
        // {currentState.MusicGroup[currentState.IndexOfMusic].name}
        return (
            <div className="MusicPlayer_Wrappper">
                {/* <input id="range1" type="range" min="0" max={audio.duration} value={this.state.currentTime} step="1" ref={this.inputEl}
                    onChange={() => this.onChange()} /> */}
                <div className="MusicPlayer_wrapper">
                    <div className="MusicPlayer_content">
                        <img src={currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].preview : null} className="MusicPlayer_thumb" />
                        <div className="PlayerDetails_wrapper">
                            <div className="Music_artist_wrapper">
                                <div className="MusicName_B">{currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].name : null}</div>
                                <div className="ArtistName_B">{currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].artist : null}</div>
                            </div>
                        </div>
                        <div className="Player_reverser">
                            <div className="PlayerControllor_wrapper">
                                <img src={Forward} className="controllor MusicBackward" alt="" />
                                <img src={Play} className="controllor" alt="" />
                                <img src={Backward} className="controllor MusicForward" alt="" />
                            </div>
                            <div className="Player_right_wrapper">
                                <DurationTime />
                                <div className="volume_controllor">
                                    <img src={Volume} alt="" className="Volume" />
                                    <span className="Volume_bar"></span>
                                </div>
                                <img src={Favorite} className="favorite_Musictrl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    currentState: state.player
})
export default connect(mapStateToProps, null)(MusicPlayer);
