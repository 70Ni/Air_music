import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../../Images/Icons/User.svg';
import search from '../../Images/Icons/search.svg';

import bell from '../../Images/Icons/notification.svg';
import { Music } from '../../Json/Music';
import { Searching } from '../../Redux/search';
import { isNoticed } from '../../Redux/favorite'
import Notification from '../../Components/Dashbar/Notifications'
import './DashBar.css'
import { useHistory } from 'react-router-dom';



function DashBar() {

    const dispatch = useDispatch();
    const notice = useSelector(state => state.favorite.notify)
    let history = useHistory();
    const redirect = () => {
        history.push('/playlist')
    }
    const searchDispatch = (event) => {
        dispatch(Searching(event.target.value))
    }


    const searchtyping = (event) => {
        redirect()
        searchDispatch(event)
    }

    return (
        <div className="DashBar_wrapper">
            <div className="DashBar_content">
                <div className="Browser_wrapper">
                    <input type="text" id="searchField" name="Search" placeholder="Browse"
                        onChange={(event)=>searchtyping(event)}
                        onMouseOut={(event)=> event.target.value = ''}
                        autocomplete="off"
                         />
                    <img className="Browser_icon" src={search} alt="" />
                </div>
                <div className="DashIcon_wrapper">

                    <div className="user_icon_wrapper">
                        <img src={User} alt="" />
                    </div>
                    <div className="bell_icon_wrapper">

                        {
                            notice ?
                                <span className="notifier"></span> :
                                null
                        }
                        <img src={bell} alt="" onClick={() => dispatch(isNoticed())} />
                        {/* <Notification /> */}
                    </div>
                </div>
            </div>
            <h1 className="SUBheader"> { }</h1>
        </div >
    );
}

export default DashBar;
