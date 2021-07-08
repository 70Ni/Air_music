import React, { useEffect } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import TrendingCard from '../../Components/Cards/TrendingCard/TrendingCard';

import { Music } from '../../Json/Music';
import { useSelector } from 'react-redux';





function TrendingSongs() {


    const ShuffledArray = () => shuffle(Music)
    const MusicLoaded = useSelector(state => state.MusicLoaded.History);
    const array = { group: ShuffledArray().slice(0, 10), isLoop: false };
    return (

        <div className="TrenPag_LisCarWrapper" style={{ color: 'white' }}>
            {
                array.group.map((song, i) => {
                    return (
                        <TrendingCard
                            key={i}
                            id={song.id}
                            preview={song.Preview.default}
                            name={song.name}
                            artist={song.Artist}
                            artist_image={song.Artist_image}
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
export default TrendingSongs;
