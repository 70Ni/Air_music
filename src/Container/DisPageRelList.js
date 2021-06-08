import React,{useMemo} from 'react';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import {shuffle, numFormatter} from '../Container/FUNCTIONS'

import { Music } from '../Json/Music';




let ShuffledArray = shuffle(Music);


const DisRelSongsList = () => {
    const array = useMemo(() => ShuffledArray.slice(0,5), []);
    return (
        <div>
            {
                array.map((user, i) => {
                    return (
                        <ListCardB
                            key={i}
                            id={user.id}
                            preview={user.Preview.default}
                            name={user.name}
                            artist={user.Artist}
                            artist_image={user.Artist_image}
                            views={numFormatter(user.Views)}
                            likes={numFormatter(user.Likes)}
                            duration={user.duration}
                            URL ={user.URL}
                        />
                    )
                })
            }
        </div>
    );
}


export default DisRelSongsList;