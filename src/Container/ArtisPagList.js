import React,{useMemo} from 'react';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import {shuffle, numFormatter} from '../Container/FUNCTIONS'

import { Music } from '../Json/Music';




let ShuffledArray = shuffle(Music);


const ArtisPagList = () => {
    const array = useMemo(() => ShuffledArray.filter(art => art.Artist === 'Marshmello').slice(0,8), []);
    console.log(array)
    return (
        <div>
            {
                array.map((user, i) => {
                    return (
                        <ListCardB
                            MusicsLoaded = {array}
                            key={i}
                            id={user.id}
                            preview={user.Preview.default}
                            name={user.name}
                            artist={user.Artist}
                            artist_image={user.Artist_image}
                            views={numFormatter(user.Views)}
                            likes={numFormatter(user.Likes)}
                            duration={user.duration}
                        />
                    )
                })
            }
        </div>
    );
}


export default ArtisPagList;