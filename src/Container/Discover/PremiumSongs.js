import React, { useEffect, useMemo, useState } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import SqureCard from '../../Components/Cards/SqureCard/SqureCard'

import { Music } from '../../Json/Music';



let ShuffledArray =() => shuffle(Music);

const PremiumSongs = () => {

    const [matches, setMatches] = useState(6)
    console.log(matches)



    useEffect(() => {

        if (window.matchMedia("(max-width: 1086px)").matches) {
            console.log(window.matchMedia("(max-width: 1086px)").matches)
            setMatches(18)
        }
    }, [window.innerWidth])

    const array2 = useMemo(() => ({ group: ShuffledArray().slice(0, 6) }),[]);
    return (

        <div className="SqureCa_wrapper">
            {
                array2.group.map((song, i) => {
                    return (
                        <SqureCard
                            key={i}
                            newarray = {array2}
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



export default PremiumSongs ;
