import React, { useEffect, useMemo, useState } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import SqureCard from '../../Components/Cards/SqureCard/SqureCard'

import { Music } from '../../Json/Music';
import { connect } from 'react-redux';




let ShuffledArray = () => shuffle(Music);

let ca = 11;
const PremiumSongs = () => {

    const [matches, setMatches] = useState(6)
    console.log(matches)



    useEffect(() => {

        if (window.matchMedia("(max-width: 1086px)").matches) {
            console.log(window.matchMedia("(max-width: 1086px)").matches)
            setMatches(18)
        }
    }, [])

    const array1 = ShuffledArray().slice(0, matches);
    console.log(array1)
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

const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, null)(PremiumSongs);
