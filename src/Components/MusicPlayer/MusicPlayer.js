import React, { Component, createRef } from 'react';


import Favorite from '../../Images/Icons/save.svg'
import Play from '../../Images/Icons/Play.svg';
import pause from '../../Images/Icons/Pause.svg';

import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import mute from '../../Images/Icons/mute.svg'

import DurationTime from './DurationTime';
import { Mute, prevSong, NextSong, PlayPause, onChange, setVolume, audio } from '../../Container/FUNCTIONS'
import './MusicPlayer.css'
import './Slider.scss'
import { connect } from 'react-redux';
import Airmusic from '../Branding/Airmusic';



class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.inputEl = createRef();
        this.volumeSlider = createRef();

        this.state = {
            muted: false,
            paused: false,
        }
    }

    muteIcon = () => {
        return (
            this.setState({
                muted: !this.state.muted
            })
        )
    }
    pauseIcon = () => {
        return (
            this.setState({
                paused: !this.state.paused
            })
        )
    }
    setMute = () => {
        this.volumeSlider.current.value == 0 ?
            this.setState({
                muted: true
            }) :

            this.setState({
                muted: false
            })

    }
    mutefunc = () => {
        return (
            Mute(),
            this.muteIcon()
        )
    }
    playPausefun = () => {
        return (
            PlayPause(),
            this.pauseIcon()
        )
    }
    VolumeSlider = () => {
        return (
            setVolume(this.volumeSlider.current.value),
            this.setMute()
        )
    }
    render() {

        let { currentMusic } = this.props;

        document.documentElement.style.setProperty('--base', this.props.timerRange.currentTime);
        document.documentElement.style.setProperty('--max', this.props.timerRange.AudioDuration);

        return (
            <div className="MusicPlayer_Wrappper">
                {currentMusic ?
                    <div id="MusicSlider">
                        <input id="range1" type="range" min="0" max={this.props.timerRange.AudioDuration} value={this.props.timerRange.currentTime} step="1" ref={this.inputEl}
                            onChange={() => onChange(this.inputEl.current.value)}
                        />
                    </div> : null
                }
                <div className="MusicPlayer_wrapper" style={currentMusic ? { bottom: '0px' } : { bottom: '0px' }}>
                    <div className="MusicPlayer_content">
                        <div className="PlayerDetails_wrapper" >
                            {currentMusic ?
                                <img src={currentMusic.MusicGroup[currentMusic.IndexOfMusic].preview} className="MusicPlayer_thumb" alt="" /> : <Airmusic />}
                            <div className="Music_artist_wrapper">
                                <div className="MusicName_B MusicName">{currentMusic ? currentMusic.MusicGroup[currentMusic.IndexOfMusic].name : null}</div>
                                <div className="ArtistName_B">{currentMusic ? currentMusic.MusicGroup[currentMusic.IndexOfMusic].artist : null}</div>
                            </div>
                        </div>
                        {currentMusic ?
                            <div className="PlayerControllor_wrapper" >
                                <img src={Forward} className="controllor MusicBackward" alt="" onClick={() => prevSong()} />
                                <img src={this.state.paused ? Play : pause} className="controllor" alt="" onClick={() => this.playPausefun()} />
                                <img src={Backward} className="controllor MusicForward" alt="" onClick={() => NextSong()} />
                            </div> :
                            <div className="Player_preState PlayerControllor_wrapper"> Hear the frequencies of air </div>}
                        <div className="Player_right_wrapper">
                            {currentMusic ?<>
                                <div className="duration_wrapper" style={this.displayStat} >
                                    <DurationTime />
                                </div> 
                                
                            
                          
                                <div className="volume_controllor">
                                    <img src={this.state.muted ? mute : Volume} alt="" className="Volume" onClick={() => this.mutefunc()} />
                                    <div id="VolumeRange">
                                        <input id="range2" ref={this.volumeSlider} value="100" type="range" min="0" max="100" onChange={() => this.VolumeSlider()} />
                                    </div>
                                </div> 
                            
                         
                                <img src={Favorite} style={this.displayStat} className="favorite_Musictrl" alt="" /> </>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    currentMusic: state.player.CurrentGroup,
    timerRange: state.timer
})
export default connect(mapStateToProps, null)(MusicPlayer);
