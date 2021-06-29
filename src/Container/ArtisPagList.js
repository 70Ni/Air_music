import React,{useMemo} from 'react';
import { connect } from 'react-redux';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import {shuffle, numFormatter} from '../Container/FUNCTIONS'

import { Music } from '../Json/Music';
import { setArtist } from '../Redux/Actions/selectArtist.action';


let ShuffledArray = shuffle(Music);

const ArtisPagList = (props) => {
    const array = useMemo(() => ShuffledArray.filter(art => art.Artist == "Marshmello").slice(0,8), []);
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
                            URL = {song.URL}
                        />
                    )
                })
            }
        </div>
    );
}


export default ArtisPagList;