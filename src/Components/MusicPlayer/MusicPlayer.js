import React, { Component, createRef } from 'react';


import Favorite from '../../Images/Icons/save.svg'
import Play from '../../Images/Icons/Play_fill.svg';
import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import DurationTime from './DurationTime';
import { Mute, prevSong, NextSong, PlayPause, onChange, setVolume } from '../../Container/FUNCTIONS'
import './MusicPlayer.css'
import './Slider.scss'
// import './Slider.scss'
import { connect } from 'react-redux';


class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.inputEl = createRef();
        this.volumeSlider = createRef();

        this.state = {}
    }



    render() {
        let { currentState } = this.props;

        document.documentElement.style.setProperty('--base', this.props.timerRange.currentTime);
        document.documentElement.style.setProperty('--max', this.props.timerRange.AudioDuration);





        return (

            <div className="MusicPlayer_Wrappper">
                <div id="MusicSlider">
                    <input id="range1" type="range" min="0" max={this.props.timerRange.AudioDuration} value={this.props.timerRange.currentTime} step="1" ref={this.inputEl}
                        onChange={() => onChange(this.inputEl.current.value)} />
                </div>
                <div className="MusicPlayer_wrapper">
                    <div className="MusicPlayer_content">
                        <img src={currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].preview : null} className="MusicPlayer_thumb" alt="" />
                        <div className="PlayerDetails_wrapper">
                            <div className="Music_artist_wrapper">
                                <div className="MusicName_B">{currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].name : null}</div>
                                <div className="ArtistName_B">{currentState.MusicGroup ? currentState.MusicGroup[currentState.IndexOfMusic].artist : null}</div>
                            </div>
                        </div>
                        <div className="Player_reverser">
                            <div className="PlayerControllor_wrapper">
                                <img src={Forward} className="controllor MusicBackward" alt="" onClick={() => prevSong()} />
                                <img src={Play} className="controllor" alt="" onClick={() => PlayPause()} />
                                <img src={Backward} className="controllor MusicForward" alt="" onClick={() => NextSong()} />
                            </div>
                            <div className="Player_right_wrapper">
                                <DurationTime />
                                <div className="volume_controllor">
                                    <img src={Volume} alt="" className="Volume" onClick={() => Mute()} />
                                    <div id="VolumeRange">
                                        <input id="range2" ref={this.volumeSlider} value="100" type="range" min="0" max="100" onChange={() => setVolume(this.volumeSlider.current.value)} />

                                    </div>
                                </div>
                                <img src={Favorite} className="favorite_Musictrl" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    currentState: state.player,
    timerRange: state.timer
})
export default connect(mapStateToProps, null)(MusicPlayer);
