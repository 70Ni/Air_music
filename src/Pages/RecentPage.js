import React from 'react';
import ArtistsCard from '../Components/Cards/ArtistsCard/ArtistsCard';
import ListCard from '../Components/Cards/ListCard/ListCard';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import AutoPlay from '../Images/Icons/autoPlay.svg'

import './PlayListPage.css'



function PlayListPage() {
    return (

        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="searchData_appear_wrapper">
                <div className="SUBheader">Results</div>

            </div>
            <div className="TrenPag_LisCarWrapper">
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
                <ListCardB />
           
            </div>
            <div className="disPag_listButton">
                <div className="AutoPlayButton">
                    <div className="Play_D">back to top</div>
                    <img className="ButtonImg" src={AutoPlay} alt="" />
                </div>
            </div>
        </div>

    )
}

export default PlayListPage;