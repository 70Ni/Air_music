import React, { Component } from 'react';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import AutoPlay from '../Images/Icons/autoPlay.svg'
import RecentList from '../Container/RecentPage/RecentList';
import Img from '../Images/Icons/notfound.svg'

import './PlayListPage.css'
import { useSelector } from 'react-redux';

function RecentPage() {
    const MusicLoaded = useSelector(state => state.MusicLoaded.History);
    console.log(MusicLoaded)

    return (
        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="searchData_appear_wrapper">
                <div className="SUBheader">Recent</div>

            </div>
            {
                MusicLoaded.length > 0 ?
                    <div className="TrenPag_LisCarWrapper">
                        <RecentList />
                    </div> :
                    <img src={Img} alt="" />
            }
            {
                MusicLoaded.length > 8 ?
                    <div className="disPag_listButton">
                        <div className="AutoPlayButton">
                            <div className="Play_D">back to top</div>
                            <img className="ButtonImg" src={AutoPlay} alt="" />
                        </div>
                    </div> :
                    null
            }

        </div>
    );
}

export default RecentPage;
