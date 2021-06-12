import React,{Component} from 'react';
import ListCardB from '../Components/Cards/ListCard/ListCardB';
import AutoPlay from '../Images/Icons/autoPlay.svg'
import RecentList from '../Container/RecentList';
import setCurrentMusics from '../Redux/Actions/musicPlayer.action'
import { RecentMusics } from '../Container/FUNCTIONS'

import './PlayListPage.css'
import { connect } from 'react-redux';

class RecentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      
    }
    componentDidMount(){
        console.log(RecentMusics)
    }
    render() {
        return (
            <div className="Trending_page_wrapper" style={{ 'maxWidth': '1440px' }}>
                <div className="searchData_appear_wrapper">
                    <div className="SUBheader">Recent</div>

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
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentMusic: musicItem => dispatch(setCurrentMusics(musicItem))
})
const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentPage);
