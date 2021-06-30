import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';
import { Music } from '../../Json/Music';

import { setSearchMusic } from '../../Redux/Actions/search.aciton';
import Notification from '../../Components/Dashbar/Notifications'
import './DashBar.css'

const mapStateToProps = state => ({
    // resultMusic: state.search.SearchResults
})

const mapDispatchToProps = dispatch => ({
    setSearchMusics: MusicItems => dispatch(setSearchMusic(MusicItems)),
})

class DashBar extends Component {

    searchChange = (event) => {
        this.props.setSearchMusics({
            SearchResults: event.target.value
        })  
        const searchedMusics = Music.filter(item=>{
            return item.name.toLowerCase().includes(this.props.resultMusic.SearchResults)
        })
        console.log(searchedMusics)

    }

    render() {
        return (
            <div className="DashBar_wrapper">
                <div className="DashBar_content">
                    <div className="Browser_wrapper">
                        <input type="text" id="searchField" name="Search" placeholder="Browse"
                            onChange={(event) => this.searchChange(event)} />
                        <img className="Browser_icon" src={search} alt="" />
                    </div>
                    <div className="DashIcon_wrapper">
                        <div className="user_icon_wrapper">
                            <img src={User} alt="" />
                        </div>
                        <div className="bell_icon_wrapper">
                            <span className="notifier"></span>
                            <img src={bell} alt="" />
                            <Notification />
                        </div>
                    </div>
                </div>
                <h1 className="SUBheader"> { }</h1>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashBar);
