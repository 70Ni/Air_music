import React from 'react';


import TrendingCard from '../Components/Cards/TrendingCard/TrendingCard'

function DiscoverPage() {
    return (

        <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
            <div className="TrenPag_LisCarWrapper">
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
            </div>
        </div>

    )
}

export default DiscoverPage;