import React from 'react';

import DiscoverCardZ from '../Components/Cards/DiscoverCard/DiscoverCardZ';
import DiscoverCardA from '../Components/Cards/DiscoverCard/DiscoverCardA';
import DiscoverCardB from '../Components/Cards/DiscoverCard/DiscoverCardB';
import DiscoverCardC from '../Components/Cards/DiscoverCard/DiscoverCardC';
import SqureCard from '../Components/Cards/SqureCard/SqureCard';
import AutoPlay from '../Images/Icons/autoPlay.svg'
import './DiscoverPage.css'
import ProfileList from '../Container/ProfileList';
import DisRelSongsList from '../Container/DisPageRelList';
import Intro from '../Music files/Justin Bieber/thumbnail/Lifetime.jpg'

function DiscoverPage() {
    return (
        <div className="Discover_page_wrapper" style={{ 'maxWidth': '1440px',paddingBottom:'77px' }}>
            <div className="SUBheader_H">Disover</div>
            <DiscoverCardZ />
            <div className="SUBheader">Artists</div>
            <div className="Profile_Icons">
                <ProfileList />
            </div>
            <div className="SUBheader">For you</div>
            <div className="DisCoverCards_cover">
                <DiscoverCardA />
                <DiscoverCardB />
                <DiscoverCardC />
            </div>


            <div className="DisPag_DiscList_squreCard_wrapper">

                <div className="disPag_ListWrapper" style={{ width: '100%' }}>
                    <div className="SUBheader">Related songs</div>
                    <div className="Artists_Paragraph">
                        Billie Eilish Pirate Baird O'Connell is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom
                    </div>
                    <div className="ListCa_wrapper">
                        <DisRelSongsList />
                    </div>
                    <div className="disPag_listButton">
                        <div className="AutoPlayButton">
                            <div className="Play_D">Auto Play</div>
                            <img className="ButtonImg" src={AutoPlay} alt="" />
                        </div>
                    </div>
                </div>
                <div className="DisPag_Squrewrapper">
                
                    <div className="SUBheader">Premium songs</div>
                    <div className="SqureCa_wrapper">
                        <SqureCard />
                        <SqureCard />
                        <SqureCard />
                        <SqureCard />
                        <SqureCard />
                        <SqureCard />
                        <div className="Squre_mediaDis">
                            <SqureCard />
                            <SqureCard />
                            <SqureCard />
                            <SqureCard />
                        </div>
                    </div>
                    <div className="DisPa_detailsWrapper"></div>
                    <div className="Artists_Paragraph paraHide">
                        Billie Eilish Pirate Baird O'Connell is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DiscoverPage;