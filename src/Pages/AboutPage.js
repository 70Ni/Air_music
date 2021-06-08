import React from 'react';

import ListCard from '../Components/Cards/ListCard/ListCard';
import ArtistsCard from '../Components/Cards/ArtistsCard/ArtistsCard'
import Profile_Icon from '../Components/Profile_Icon/ProfileIcon'

import './AboutPage.css';

function DiscoverPage() {
    return (
        <div className="AboutPage_wrapper" style={{ 'maxWidth': '1440px', }}>
            <div className="AboutPage_content">
                <div className="AboutPage_Header">
                    About
                </div>
                <div className="About_page_para">
                    this is a personal project. However reverse engineer
                </div>
            </div>
        </div>

    )
}

export default DiscoverPage;