

import React, { useEffect } from 'react'
import { seektimeupdate } from '../../Container/FUNCTIONS'
import { useDispatch, useSelector } from 'react-redux';
import './MusicPlayer.css'
import { audio } from '../../Container/FUNCTIONS'
import { TimerUpdates } from '../../Redux/TimeUpdater';



let intervalID = undefined;

function Durationticker() {
    useEffect(() => {
        setInterval(() => {
            timer()
        }, 1000);
    }, [])

    const SongDuration = useSelector(state => state.SongDuration)
    const dispatch = useDispatch()

    const timer = () => {

        if (audio.duration) {
            // let nt = audio.currentTime * (100 / audio.duration);
            var curmins = Math.floor(audio.currentTime / 60);
            var cursecs = Math.floor(audio.currentTime - curmins * 60);
            var durmins = Math.floor(audio.duration / 60);
            var dursecs = Math.floor(audio.duration - (durmins * 60));
            if (cursecs < 10) { cursecs = "0" + cursecs }
            if (curmins < 10) { curmins = "0" + curmins }
            if (durmins < 10) { durmins = "0" + durmins }
            if (dursecs < 10) { dursecs = "0" + dursecs }
            return dispatch(TimerUpdates({
                AudioDuration: audio.duration,
                currentTime: audio.currentTime,
                cursecs: cursecs,
                curmins: curmins,
                durmins: durmins,
                dursecs: dursecs,
            }))

        }
    }
    return (
        <div className="MusicDuration_wrapper">
            {SongDuration.curmins ?
                <div className="MusicDuration_wrapper">{SongDuration.curmins}:{SongDuration.cursecs}/{SongDuration.durmins}:{SongDuration.dursecs} </div>
                : <div></div>
            }
        </div>
    )
}



export default Durationticker;
