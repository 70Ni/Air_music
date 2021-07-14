import React from 'react';
import { numFormatter } from '../../Container/FUNCTIONS'
import ListcardB from '../../Components/Cards/ListCard/ListCardB'

import { Music } from '../../Json/Music';
import { useSelector } from 'react-redux';



function RecentList() {

    const MusicLoaded = useSelector(state => state.MusicLoaded.History);
    let History = Music.filter(song => MusicLoaded.includes(song.id))

    let array = {group: History, isLoop:false}
    return (

        <div className="TrenPag_LisCarWrapper" style={{ color: 'white' }}>
            {
                History.map((song, i) => {
                    return (
                        <ListcardB
                            newarray = {array}
                            key={i}
                            id={song.id}
                            preview={song.Preview.default}
                            name={song.name}
                            artist={song.Artist}
                            views={numFormatter(song.Views)}
                            likes={numFormatter(song.Likes)}
                            duration={song.duration}
                            URL={song.URL}
                        />
                    )
                })
            }
        </div>
    )

}
export default RecentList;
