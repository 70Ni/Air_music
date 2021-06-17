import React, { Component } from 'react';

import ArtistsCard from '../Components/Cards/ArtistsCard/ArtistsCard'
import DiscoverCardZ from '../Components/Cards/DiscoverCard/DiscoverCardZ'
import './ArtistPage.css';
import { MusicGroupSet } from '../Container/FUNCTIONS';
import ProfileList from '../Container/ProfileList';
import ArtisPagList from '../Container/ArtisPagList';
import { connect } from 'react-redux';


class DiscoverPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.currentState != nextProps.currentState) {
            MusicGroupSet()
        }
    }
    componentDidUpdate() {
        if (this.props.currentState.CurrentGroup.ClickedMusic) {

        }
    }
    render() {
        return (
            <div className="Artist_page_wrapper" style={{ 'maxWidth': '1440px', }}>
                <DiscoverCardZ />
                <div className="SUBheader">Artists</div>
                <div className="Profile_Icons">
                    <ProfileList />
                </div>
                <div className="SUBheader">Artist</div>
                <div className="Artist_Header">Billie Ellish</div>
                <div className="Artists_Paragraph">
                    Billie Eilish Pirate Baird O'Connell (/ˈaɪlɪʃ/ EYE-lish;[1] born December 18, 2001) is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom. The song was written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. Her debut EP, Don't Smile at Me (2017), became a sleeper hit, reaching the top 15 in the US, UK, Canada, and Australia.            </div>

                <div className="ArtPag_listCard_ArtCard_wrapper">
                    <div className="ArtPag_ListCar_wrapper" style={{ width: '100%' }} >
                        <ArtisPagList />

                    </div>
                    <div className="ArtPage_ArtCarWrapper">

                        {/* <div className="SUBheader artpa_suHeder">Artists</div> */}
                        <div className="ArtPag_ArtisCardSub_wrappper">
                            <div className="ArtPag_ArtCar_wrapper">
                                <ArtistsCard />
                                <ArtistsCard />
                                <ArtistsCard />
                                <ArtistsCard />
                                <div className="ArtPag_ArtCar_wrapper_mob">
                                    <ArtistsCard />
                                    <ArtistsCard />
                                </div>
                            </div>
                        </div>
                    </div>




                </div>




            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, null)(DiscoverPage);