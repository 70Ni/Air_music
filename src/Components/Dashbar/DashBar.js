import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import User from '../../Images/Icons/User.svg';

import search from '../../Images/Icons/search.svg';
import bell from '../../Images/Icons/bell.svg';
import { Music } from '../../Json/Music';

import Notification from '../../Components/Dashbar/Notifications'
import './DashBar.css'
const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current
}
function DashBar() {
    const [count, setcount] = useState(0)

    let favorite = useSelector(state => state.favorite.id);


    const prevCount = usePrevious(favorite.length);
 
    useEffect(() => {
        if (prevCount > favorite.length) {
            console.log("hi")
        }
    });
    console.log(count)





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
                        <img src={bell} alt="" onClick={()=>setcount(0)}/>
                        <Notification />
                    </div>
                </div>
            </div>
            <h1 className="SUBheader"> { }</h1>
        </div >
    );
}

// class DashBar extends Component {

//     searchChange = (event) => {
//         this.props.setSearchMusics({
//             SearchResults: event.target.value
//         })  
//         const searchedMusics = Music.filter(item=>{
//             return item.name.toLowerCase().includes(this.props.resultMusic.SearchResults)
//         })
//         console.log(searchedMusics)

//     }

//     render() {

//     }
// }


export default DashBar;
