import React, { Component } from 'react';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import AutoPlay from '../Images/Icons/autoPlay.svg'
import RecentList from '../Container/RecentPage/RecentList';

import './PlayListPage.css'
import { connect } from 'react-redux';

function RecentPage(params) {

    return (
        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="searchData_appear_wrapper">
                <div className="SUBheader">Recent</div>

            </div>
            <div className="TrenPag_LisCarWrapper">
                <RecentList />
            </div>

            <div className="disPag_listButton">
                <div className="AutoPlayButton">
                    <div className="Play_D">back to top</div>
                    <img className="ButtonImg" src={AutoPlay} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RecentPage;
