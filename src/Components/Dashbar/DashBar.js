import React,{Component} from 'react';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';
import { Music } from '../../Json/Music';

import searchMusic from '../../Redux/Actions/search.aciton'

import './DashBar.css'
import { connect } from 'react-redux';
class DashBar extends Component {
    searchMusic = (event) => {
        this.props.searchMusics  ({
            SearchResults:event.target.value
        })
    }

    render() {
        return (
            <div className="DashBar_wrapper">
                <div className="DashBar_content">
                    <div className="Browser_wrapper">
                        <input type="text" id="searchField" name="Search" placeholder="Browse" onChange={this.searchMusic} />
                        <img className="Browser_icon" src={search} alt="" />
                    </div>
                    <div className="DashIcon_wrapper">
                        <div className="user_icon_wrapper">
                            <img src={User} alt=""/>
                        </div>
                        <div className="bell_icon_wrapper">
                            <span className="notifier"></span>
                            <img src={bell} alt=""/>
                        </div>
                    </div>
                </div>
                <h1 className="SUBheader">{this.props.resultMusic}</h1>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    searchMusics: event => dispatch(searchMusic(event))
})
const mapStateToProps = state => ({
    resultMusic: state.search
})

export default connect(mapStateToProps, mapDispatchToProps) (DashBar);
