import React, { useRef, useState } from 'react';
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
import Durationticker from './Durationticker';
import { connect } from 'react-redux';
import Airmusic from '../Branding/Airmusic';



function MusicPlayer({ id }) {

    const dispatch = useDispatch()
    const MusicLoaded = useSelector(state => state.MusicLoaded)
    const SongDuration = useSelector(state => state.SongDuration)
    const inputEl = useRef()
    const volumeSlider = useRef()

    let musicGroup = MusicLoaded.MusicGroup;
    let musicIndex = MusicLoaded.IndexOfMusic;


    document.documentElement.style.setProperty('--base', SongDuration.currentTime);
    document.documentElement.style.setProperty('--max', SongDuration.AudioDuration);


    const [muted, setMuted] = useState(false)
    const [paused, setPaused] = useState(false)
    const muteIcon = () => {
        return (
            setMuted(!muted)
        )
    }
    const pauseIcon = () => {
        return (
            setPaused(!paused)
        )
    }
    const setMute = () => {
        volumeSlider.current.value == 0 ?
            setMuted(true)
            :
            setMuted(false)
    }


    const mutefunc = () => {
        return (
            Mute(),
            muteIcon()
        )
    }
    const playPausefun = () => {
        return (
            PlayPause(),
            pauseIcon()
        )
    }
    const VolumeSlider = () => {
        return (
            setVolume(volumeSlider.current.value),
            setMute()
        )
    }



    return (
        <div className="MusicPlayer_Wrappper">

            <div id="MusicSlider">
                {SongDuration.AudioDuration ?
                    <input id="range1" type="range" min="0"
                        max={SongDuration.AudioDuration}
                        value={SongDuration.currentTime}
                        step="1" ref={inputEl}
                        onChange={() => onChange(inputEl.current.value)}
                    />
                    :
                    null
                }
                <div className="MusicPlayer_wrapper" >
                    <div className="MusicPlayer_content">
                        <div className="PlayerDetails_wrapper" >
                            {musicGroup ?
                                <img src={musicGroup[musicIndex].Preview.default} className="MusicPlayer_thumb" alt="" />
                                :
                                <Airmusic />
                            }
                            <div className="Music_artist_wrapper">
                                <div className="MusicName_B MusicName">{musicGroup ? musicGroup[musicIndex].name : null}</div>
                                <div className="ArtistName_B">{musicGroup ? musicGroup[musicIndex].artist : null} </div>
                            </div>
                        </div>
                        {musicGroup ?
                            <div className="PlayerControllor_wrapper" >
                                <img src={Forward} className="controllor MusicBackward" alt="" onClick={() => dispatch(SkipPrev())} />
                                <img src={paused ? Play:pause} className="controllor" alt="" onClick={() => playPausefun()} />
                                <img src={Backward} className="controllor MusicForward" alt="" onClick={() => dispatch(SkipNext())} />
                            </div>
                            : <div className="Player_preState PlayerControllor_wrapper"> Hear beats of the air </div>
                        }
                        <div className="Player_right_wrapper">

                            <div className="duration_wrapper" >
                                <Durationticker />
                            </div>
                            {musicGroup? 
                            <div className="volume_controllor">
                                <img src={muted ? mute : Volume} alt="" className="Volume" onClick={() => mutefunc()} />                                <div id="VolumeRange">
                                    <input id="range2" ref={volumeSlider} value="100" type="range" min="0" max="100" onChange={() => VolumeSlider()} />
                                </div>
                            </div>
                            :null}
                            {musicGroup?
                            <img src={Favorite} className="favorite_Musictrl" alt="" value ={musicGroup? musicGroup[musicIndex].id:null}/>
                            :null}
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
