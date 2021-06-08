import React from 'react';
import ArtistsCard from '../Components/Cards/ArtistsCard/ArtistsCard';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import PlayListCard from '../Components/Cards/PlayListCard/PlayListCard';
import ResultCard from '../Components/Cards/ResultCard/ResultCard';
import SongDetails from '../Components/SongDetails/SongDetail';
import ArtistList from '../Container/ArtistMap';
import AutoPlay from '../Images/Icons/autoPlay.svg'

import './PlayListPage.css';


function PlayListPage() {
    return (
        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="searchData_appear_wrapper">
                <div className="SUBheader">Search Results</div>
                <div className="SearRe_wrapper">
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ArtistsCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                </div>
                <div className="TrenPag_autoShuffl_wrapper">
                    <div className="SUBheader">Saved</div>
                    <div className="TrenPag_autoShuffl_content">
                        <div className="AutoPlayButton_B">
                            <div className="Play_D">Auto <span className="Play_D_H">Play</span></div>
                            <img className="ButtonImg" src={AutoPlay} alt="" />
                        </div>
                        <div className="AutoPlayButton_B">
                            <div className="Play_D">shuffle</div>
                            <img className="ButtonImg" src={AutoPlay} alt="" />
                        </div>
                    </div>
                </div>
                <span className="Song_Details_playPage_wrapper" style={{ width: '100%' }}>
                    <SongDetails />
                </span>
                <div className="SUBheader">Saved</div>
                <div className="saveData_content">
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                </div>
            </div>
            
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