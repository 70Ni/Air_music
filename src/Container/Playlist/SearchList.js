import React from 'react';
import ResultCard from '../../Components/Cards/ResultCard/ResultCard';
import { numFormatter } from '../../Container/FUNCTIONS'
import { useSelector } from 'react-redux';
import { Music } from '../../Json/Music';



const SearchList = () => {
    
    const browse = useSelector(state => state.searchCard.searchCard)
    const searchedMusics = Music.filter(item =>
        item.name.toLowerCase().includes(browse.toLowerCase())
    )
    console.log(searchedMusics)

    return (
        <div className ="SearRe_wrapper">
            {
                searchedMusics.map((song, i) => {
                    return (
                        <ResultCard
                            key={i}
                            id={song.id}
                            preview={song.Preview.default}
                            duration={song.duration}
                            name={song.name}
                            artist={song.Artist}                     
                            URL={song.URL}
                        />
                    )
                })
            }
        </div>
    );
}


export default SearchList;