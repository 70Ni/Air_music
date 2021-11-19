import React, { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListCardB from '../../Components/Cards/ListCard/ListCardB';
import { numFormatter } from '../../Container/FUNCTIONS'

import { Music } from '../../Json/Music';


const ArtisPagList = () => {

    const SelectedArtist = useSelector(state => state.artist.artistName)
    const array = useMemo(() => Music.filter(art => (SelectedArtist ? art.Artist === SelectedArtist : art.Artist === "Taylor Swift")), []);
    let array2 = { group: array, isLoop: false }
    return (
        <div style={{width:'100%',flexShrink:'10'}}>
            {
                array.map((song, i) => {
                    return (
                        <ListCardB
                            key={i}
                            newarray={array2}
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


export default ArtisPagList;