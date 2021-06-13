import React, { useMemo } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import SqureCard from '../../Components/Cards/SqureCard/SqureCard'

import { Music } from '../../Json/Music';




let ShuffledArray= shuffle(Music);

let ca = 11;
const PremiumSongs = () => {
    console.log("Hello")
    const array1 = useMemo(() => ShuffledArray.slice(5, ca), []);
    return (
        <div className="SqureCa_wrapper">
                {
                    array1.map((song, i) => {
                        return (
                            <SqureCard
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
    );
}


export default PremiumSongs;