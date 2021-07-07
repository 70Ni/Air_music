import React, { useMemo } from 'react';
import ListCardB from '../../Components/Cards/ListCard/ListCardB';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'

import { Music } from '../../Json/Music';


let ShuffledArray = shuffle(Music);


const RelatedSongs = () => {

    const array = useMemo(() => ({ group: ShuffledArray.slice(0, 6), isLoop: false }), []);
    console.log("Related")
    return (
        <div>
            {

                array.group.map((song, i) => {
                    return (
                        <ListCardB
                            newarray={array}
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
    );
}


export default RelatedSongs;