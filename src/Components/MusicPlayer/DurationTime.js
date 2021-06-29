

import React, { useEffect } from 'react'
import { seektimeupdate } from '../../Container/FUNCTIONS'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import './MusicPlayer.css'


function DurationTime() {
    const SongDuration = useSelector(state => state.SongDuration)
    useEffect(() => {
        return () => {
            
        }
    }, [])


    return (
        <div>
            {SongDuration.Durations ?
                <div className="MusicDuration_wrapper">{SongDuration.Durations.curmins}:{SongDuration.Durations.cursecs}/{SongDuration.Durations.durmins}:{SongDuration.Durations.dursecs} </div>
                : null
            }
        </div>

    );
}

export default DurationTime;
