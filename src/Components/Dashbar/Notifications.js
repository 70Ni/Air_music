import React from 'react';

import './Notifications.css'

function Notifications() {
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
                        <li className="notification_Dis">
                            <div className="notification_header_wrapper">
                                <div className="Notification_header">Welcome to air musics</div>
                                <div className="Notification_time">12:20</div>
                            </div>
                            <div className="Notifications_para">This is the content related to notifications</div>
                        </li>
                        <li className="notification_Dis">
                            <div className="notification_header_wrapper">
                                <div className="Notification_header">Welcome to air musics</div>
                                <div className="Notification_time">12:20</div>
                            </div>
                            <div className="Notifications_para">This is the content related to notificationsThis is the content related to notificationsThis is the content related to notifications</div>
                        </li>
                        <li className="notification_Dis">
                            <div className="notification_header_wrapper">
                                <div className="Notification_header">Welcome to air musics</div>
                                <div className="Notification_time">12:20</div>
                            </div>
                            <div className="Notifications_para">This is the content related to notificationsThis is the content related to notificationsThis is the content related to notifications</div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Notifications