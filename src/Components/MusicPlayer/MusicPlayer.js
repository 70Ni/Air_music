import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Favorite from '../../Images/Icons/save.svg'
import Play from '../../Images/Icons/Play.svg';
import pause from '../../Images/Icons/Pause.svg';

import { SkipPrev, SkipNext } from '../../Redux/IndexFinder';

import info from '../../Images/Icons/list.svg'

import Forward from '../../Images/Icons/skip-backward.svg';
import Backward from '../../Images/Icons/skip-forward.svg';
import Volume from '../../Images/Icons/Volume.svg'
import mute from '../../Images/Icons/mute.svg'

import DurationTime from './DurationTime';
import { Mute, onChange, setVolume, audio } from '../../Container/FUNCTIONS'
import './MusicPlayer.css'
import './Slider.scss'
import Durationticker from './Durationticker';
import { connect } from 'react-redux';
import Airmusic from '../Branding/Airmusic';
import { isFavorite } from '../../Redux/favorite';



function MusicPlayer() {

    const dispatch = useDispatch()

    const fav = useSelector(state => state.favorite.id)

    const MusicLoaded = useSelector(state => state.MusicLoaded);
    const SongDuration = useSelector(state => state.SongDuration);

    
    const inputEl = useRef()
    const volumeSlider = useRef()
    
    let musicGroup = MusicLoaded.MusicGroup.group;
    let musicIndex = MusicLoaded.IndexOfMusic;
    let musicId = MusicLoaded.ClickedMusic;

    let isfavorite = fav.includes(musicId);
    
    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.defaultPrevented) {
                return; // Do nothing if event already handled
            }
            switch (e.code) {
                case 'Space':
                    PlayPause();
                    break;
                case "ArrowRight":
                    dispatch(SkipNext());
                    break;
                case "ArrowLeft":
                    dispatch(SkipPrev());
                    break;
                default:
                    break;
            }
        });
    }, []);

    document.documentElement.style.setProperty('--base', SongDuration.currentTime);
    document.documentElement.style.setProperty('--max', SongDuration.AudioDuration);


    const [muted, setMuted] = useState(false)
    const muteIcon = () => {
        return (
            setMuted(!muted)
        )
    }

    const setMute = () => {
        volumeSlider.current.value == 0 ?
            setMuted(true) :
            setMuted(false)
    }


    const mutefunc = () => {
        return (
            Mute(),
            muteIcon()
        )
    }

    const PlayPause = () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    const VolumeSlider = () => {
        return (
            setVolume(volumeSlider.current.value),
            setMute()
        )
    }



    return (

        <div className="MusicPlayer_wrapper" >
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
            </div>
            <div className="MusicPlayer_content">
                <div className="PlayerDetails_wrapper" >
                    {musicGroup ?
                        <img src={musicGroup[musicIndex].Preview.default} className="MusicPlayer_thumb" alt="" />
                        :
                        <Airmusic />
                    }
                    <div className="Music_artist_wrapper">
                        <div className="MusicName_B MusicName">{musicGroup ? musicGroup[musicIndex].name : null}</div>
                        <div className="ArtistName_B">{musicGroup ? musicGroup[musicIndex].Artist : null} </div>
                    </div>
                </div>
                {musicGroup ?
                    <div className="PlayerControllor_wrapper" >
                        <img src={Forward} className="controllor MusicBackward" alt="" onClick={() => dispatch(SkipPrev())} />
                        <img src={audio.paused ? Play : pause} className="controllor" alt="" onClick={PlayPause} />
                        <img src={Backward} className="controllor MusicForward" alt="" onClick={() => dispatch(SkipNext())} />
                    </div>
                    : <div className="Player_preState PlayerControllor_wrapper"> Hear beats of air </div>
                }
                {musicGroup ?
                    <div className="Player_right_wrapper">

                        <div className="duration_wrapper" >
                            <Durationticker />
                        </div>
                        <div className="volume_controllor">
                            <img src={muted ? mute : Volume} alt="" className="Volume" onClick={() => mutefunc()} />
                            <div id="VolumeRange">
                                <input id="range2" ref={volumeSlider} value="100" type="range" min="0" max="100" onChange={() => VolumeSlider()} />
                            </div>
                        </div>

                        <img src={isfavorite? info:Favorite} className="favorite_Musictrl" alt="" onClick={() => dispatch(isFavorite( {id:musicGroup[musicIndex].id, name:musicGroup[musicIndex].name }))} />
                    </div>
                    : null}
            </div>
        </div>
    );
}
export default MusicPlayer;
