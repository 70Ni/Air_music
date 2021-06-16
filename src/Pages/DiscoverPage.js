import React,{Component} from 'react';

import DiscoverCardZ from '../Components/Cards/DiscoverCard/DiscoverCardZ';
import DiscoverCardA from '../Components/Cards/DiscoverCard/DiscoverCardA';
import DiscoverCardB from '../Components/Cards/DiscoverCard/DiscoverCardB';
import DiscoverCardC from '../Components/Cards/DiscoverCard/DiscoverCardC';
import SqureCard from '../Components/Cards/SqureCard/SqureCard';
import { AutoPlay } from '../Container/FUNCTIONS';
import AutoPlayIcon from '../Images/Icons/autoPlay.svg';
import PremiumSongs from '../Container/DiscoverPageLists/PremiumSongs';
import './DiscoverPage.css'
import { MusicGroupSet } from '../Container/FUNCTIONS';
import ProfileList from '../Container/ProfileList';
import RelatedSongs from '../Container/DiscoverPageLists/RelatedSongs';
import Intro from '../Music files/Justin Bieber/thumbnail/Lifetime.jpg'

import { Music } from '../Json/Music';
import { connect } from 'react-redux';

class DiscoverPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidUpdate(prevState) {
        if (this.props.currentState.CurrentGroup !== prevState.currentState.CurrentGroup) {
            MusicGroupSet()
        }
    }
    render() {
        const {autoPlay} = this.props
        return (
            <div className="Discover_page_wrapper" style={{ 'maxWidth': '1440px', paddingBottom: '77px' }}>
                <div className="SUBheader_H">Disover</div>
                {/* <DiscoverCardZ /> */}
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
                            <RelatedSongs />
                        </div>
                        <div className="disPag_listButton">
                            <div className="AutoPlayButton" onClick={() => AutoPlay()} style={autoPlay.isAutoPlay ? {backgroundColor:'#F27E4C',color:'white'}:null}>
                                <div className="Play_D">Auto Play</div>
                                <img className="ButtonImg" src={AutoPlayIcon} alt=""  />
                            </div>
                        </div>
                    </div>
                    <div className="DisPag_Squrewrapper">

                        <div className="SUBheader">Premium songs</div>
                        <div className="SqureCa_wrapper">

                            <PremiumSongs />
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
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.player,
    autoPlay: state.autoPlay
})

export default connect(mapStateToProps, null)(DiscoverPage);

