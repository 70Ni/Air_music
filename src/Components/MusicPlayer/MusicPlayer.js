import React, { useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Favorite from '../../Images/Icons/save.svg'
import Play from '../../Images/Icons/Play.svg';
import pause from '../../Images/Icons/Pause.svg';

import { SkipPrev, SkipNext } from '../../Redux/IndexFinder';

import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import mute from '../../Images/Icons/mute.svg'

import DurationTime from './DurationTime';
import { Mute, PlayPause, onChange, setVolume, audio } from '../../Container/FUNCTIONS'
import './MusicPlayer.css'
import './Slider.scss'
import { connect } from 'react-redux';
import Airmusic from '../Branding/Airmusic';



function MusicPlayer() {
    
    const dispatch = useDispatch()
    const MusicLoaded = useSelector(state => state.MusicLoaded)
    const inputEl = useRef()
    const volumeSlider = useRef()
    let musicGroup = MusicLoaded.MusicGroup;
    let musicIndex = MusicLoaded.IndexOfMusic

    return (

        <div className="MusicPlayer_Wrappper">

            <div id="MusicSlider">
                {/* <input id="range1" type="range" min="0"
                    max={this.props.timerRange.AudioDuration}
                    value={this.props.timerRange.currentTime}
                    step="1" ref={this.inputEl}
                    onChange={() => onChange(inputEl.current.value)}
                /> */}
                <div className="MusicPlayer_wrapper" >
                    <div className="MusicPlayer_content">
                        <div className="PlayerDetails_wrapper" >
                            {musicGroup ?
                                <img src={musicGroup[musicIndex].preview} className="MusicPlayer_thumb" alt="" />
                                :
                                <Airmusic />
                            }
                            <div className="Music_artist_wrapper">
                                <div className="MusicName_B MusicName">{musicGroup ? musicGroup[musicIndex].name : null}</div>
                                <div className="ArtistName_B">{musicGroup ? musicGroup[musicIndex].artist : null} </div>
                            </div>
                        </div>

                        <div className="PlayerControllor_wrapper" >
                            <img src={Forward} className="controllor MusicBackward" alt="" onClick={() => dispatch(SkipPrev())} />
                            <img src={pause} className="controllor" alt="" onClick={()=> PlayPause()}/>
                            <img src={Backward} className="controllor MusicForward" alt="" onClick={() => dispatch(SkipNext())} />
                        </div>
                        {/* <div className="Player_preState PlayerControllor_wrapper"> Hear the frequencies of air </div> */}
                        <div className="Player_right_wrapper">

                            <div className="duration_wrapper" >
                                <DurationTime />
                            </div>



                            <div className="volume_controllor">
                                <img src={Volume} alt="" className="Volume" onClick={() => this.mutefunc()} />
                                <div id="VolumeRange">
                                    {/* <input id="range2" ref={this.volumeSlider} value="100" type="range" min="0" max="100" onChange={() => this.VolumeSlider()} /> */}
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

// class MusicPlayer extends Component {
//     constructor(props) {
//         super(props);
//         this.inputEl = createRef();
//         this.volumeSlider = createRef();

//         this.state = {
//             muted: false,
//             paused: false,
//         }
//     }

//     muteIcon = () => {
//         return (
//             this.setState({
//                 muted: !this.state.muted
//             })
//         )
//     }
//     pauseIcon = () => {
//         return (
//             this.setState({
//                 paused: !this.state.paused
//             })
//         )
//     }
//     setMute = () => {
//         this.volumeSlider.current.value == 0 ?
//             this.setState({
//                 muted: true
//             }) :

//             this.setState({
//                 muted: false
//             })

//     }
//     mutefunc = () => {
//         return (
//             Mute(),
//             this.muteIcon()
//         )
//     }
//     playPausefun = () => {
//         return (
//             PlayPause(),
//             this.pauseIcon()
//         )
//     }
//     VolumeSlider = () => {
//         return (
//             setVolume(this.volumeSlider.current.value),
//             this.setMute()
//         )
//     }
//     render() {


//         // document.documentElement.style.setProperty('--base', this.props.timerRange.currentTime);
//         // document.documentElement.style.setProperty('--max', this.props.timerRange.AudioDuration);


//     }

// }


export default MusicPlayer;
