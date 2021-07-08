import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import './Notifications.css'

function Notifications() {
    const favorite = useSelector(state => state.favorite)

    return (
        <div className="Notifications_wrapper">
            <div className="arrow-up"></div>
            <div className="Notifications_content">
                <ul>
                    <li className="notification_Dis">
                        <div className="notification_header_wrapper">
                            <div className="Notification_header">Welcome to air musics</div>
                            <div className="Notification_time">12:20</div>
                        </div>
                        <div className="Notifications_para">This is the content related to notifications</div>
                    </li>
                    {
                        favorite.name.map(message => {
                            var today = new Date();
                            var time = today.getHours() + ":" + today.getMinutes();
                            return (
                                <li className="notification_Dis">
                                    <div className="notification_header_wrapper">
                                        <div className="Notification_header">"{message}" is added to playlist</div>
                                        <div className="Notification_time">{time}</div>
                                    </div>
                                    <div className="Notifications_para">You have added {message} to your playlist.</div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Notifications