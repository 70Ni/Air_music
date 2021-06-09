import React,{Component} from 'react';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';
import { Music } from '../../Json/Music';


import './DashBar.css'

class DashBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        }
    }

    searchChange = (event) => {
        this.setState({
            search:event.target.value
        })
        const searchedMusics = Music.filter(item=>{
            return item.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        console.log(searchedMusicsk)
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
            </div>
        );
    }
}

export default DashBar;
