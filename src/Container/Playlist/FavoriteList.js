import React from 'react';
import PlayListCard from '../../Components/Cards/PlayListCard/PlayListCard';
import notfound from '../../Images/Icons/notfound.svg'
import { useSelector } from 'react-redux';
import { Music } from '../../Json/Music';



const FavoriteList = () => {
    
    const state = useSelector(state => state.favorite.id);
    let favorites = Music.filter(song => state.includes(song.id))
    const array2 = { group: favorites, isLoop: false  };
    return (

        <div className="searchData_content">
            {
                favorites.length < 1 ?
                    <div className="NoMusic_wrpper">
                        <div className="NOmusicFound">No music found</div>
                        <img src={notfound} alt="" className="NOmusicFound" />
                    </div>
                    :
                    favorites.map((song, i) => {
                        return (
                            <PlayListCard
                                newarray={array2}
                                key={i}
                                id={song.id}
                                image={song.Preview.default}
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


export default FavoriteList;