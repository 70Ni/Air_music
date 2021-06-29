import React, { useMemo } from 'react';
import ListCardB from '../../Components/Cards/ListCard/ListCardB';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'

import { Music } from '../../Json/Music';


let ShuffledArray = shuffle(Music);


const RelatedSongs = () => {
    const array = useMemo(() => ShuffledArray.slice(0, 5), []);
    return (
        <div>
            {
                array.map((song, i) => {
                    return (
                        <ListCardB
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


export default RelatedSongs;