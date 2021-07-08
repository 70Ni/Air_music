import React from 'react';

import TrendingPage from '../Container/Trending/TrendingSongs'
import TrendingCard from '../Components/Cards/TrendingCard/TrendingCard'
import './TrendingPage.css'

function DiscoverPage() {
    return (

        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="TrenPag_LisCarWrapper">
            <div className="trending_section">
               <TrendingPage />
            </div>
            </div>
        </div>

    )
}

export default DiscoverPage;