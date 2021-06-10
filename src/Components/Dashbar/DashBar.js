import React,{Component} from 'react';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';
import { Music } from '../../Json/Music';

import setCurrentMusics from '../../Redux/Actions/musicPlayer.action'

import './DashBar.css'
import { connect } from 'react-redux';
class DashBar extends Component {


    searchChange = (event) => {
        this.props.setCurrentMusic  ({
            search:event.target.value
        })
        const searchedMusics = Music.filter(item=>{
            return item.name.toLowerCase().includes(this.props.currentState.search)
        })
        console.log(this.props.mapStateToProps)
    }

    render() {
        return (
            <div className="DashBar_wrapper">
                <div className="DashBar_content">
                    <div className="Browser_wrapper">
                        <input type="text" id="searchField" name="Search" placeholder="Browse" onChange={this.searchChange} />
                        <img className="Browser_icon" src={search} />
                    </div>
                    <div className="DashIcon_wrapper">
                        <div className="user_icon_wrapper">
                            <img src={User} />
                        </div>
                        <div className="bell_icon_wrapper">
                            <sapn className="notifier"></sapn>
                            <img src={bell} />
                        </div>
                    </div>
                </div>
                <h1 className="SUBheader">{this.props.currentState.search}</h1>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentMusic: musicItem => dispatch(setCurrentMusics(musicItem))
})
const mapStateToProps = state => ({
    currentState: state.player
})

export default connect(mapStateToProps, mapDispatchToProps) (DashBar);
