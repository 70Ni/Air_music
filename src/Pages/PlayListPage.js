import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteList from '../Container/Playlist/FavoriteList';
import SongDetails from '../Components/SongDetails/SongDetail';
import AutoPlay from '../Images/Icons/autoPlay.svg'
import SearchList from '../Container/Playlist/SearchList';
import './PlayListPage.css';


function PlayListPage() {
    const browse = useSelector(state => state.searchCard.searchCard)

    return (
        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            {browse ?
                <div className="searchData_appear_wrapper">
                    <div className="SUBheader">Search Results</div>
                    <SearchList />
                </div>: null
            }
            <div className="TrenPag_autoShuffl_wrapper">
                <div className="SUBheader">Saved</div>
                <div className="TrenPag_autoShuffl_content">
                    <div className="AutoPlayButton_B">
                        <div className="Play_D">Auto <span className="Play_D_H">Play</span></div>
                        <img className="ButtonImgs" src={AutoPlay} alt="" />
                    </div>
                    <div className="AutoPlayButton_B">
                        <div className="Play_D">shuffle</div>
                        <img className="ButtonImgs" src={AutoPlay} alt="" />
                    </div>
                </div>
            </div>
            <span className="Song_Details_playPage_wrapper" style={{ width: '100%' }}>
                <SongDetails />
            </span>
            <div className="SUBheader">Saved</div>
               <FavoriteList />

            <span className="disPag_listButton">
                <div className="AutoPlayButton">
                    <div className="Play_D">back to top</div>
                    <img className="ButtonImg" src={AutoPlay} alt="" />
                </div>
            </span>
        </div>

    )
}

export default PlayListPage;