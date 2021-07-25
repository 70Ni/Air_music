import React from 'react';
import ResultCard from '../../Components/Cards/ResultCard/ResultCard';
import notfound from '../../Images/Icons/notfound.svg'
import { useSelector } from 'react-redux';
import { Music } from '../../Json/Music';



const SearchList = () => {

    const browse = useSelector(state => state.searchCard.searchCard)
    const searchedMusics = Music.filter(item =>
        item.name.toLowerCase().includes(browse.toLowerCase())
    )
    const array2 = { group: searchedMusics, isLoop:false };

    return (

        <div className="SearRe_wrapper">
            {
                searchedMusics.length < 1 ?
                    <div className="NoMusic_wrpper">
                        <div className="NOmusicFound">No music found</div>
                        <img src = {notfound} alt=""  className="NOmusicFound"/>
                    </div>
                    :


                    searchedMusics.map((song, i) => {
                        return (
                            <ResultCard
                                key={i}
                                newarray = {array2}
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