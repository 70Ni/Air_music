import React from 'react';

import user from '../../../Images/Icons/user.svg';
import headphones from '../../../Images/Icons/headphones.svg';
import info from '../../../Images/Icons/info.svg';
import list from '../../../Images/Icons/list.svg';
import trending from '../../../Images/Icons/trending.svg';
import img from '../../../Images/asia.jpg'

import './HorizontalNav.css';

function HorizontalNav() {
    return (
        <div className="HorWrapperHer">
            <div className="HorizontalNav_wrapper">
                <div className="Nav_handle"></div>
                <div className="HoriaontalNav_content">
                    <div className="HorIcon_wrapper">
                        <img src={user} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                    <div className="HorIcon_wrapper">
                        <img src={info} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                    <div className="HorIcon_wrapper">
                        <img src={list} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                    <div className="HorIcon_wrapper">
                        <img src={trending} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                    <div className="HorIcon_wrapper">
                        <img src={trending} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                    <div className="HorIcon_wrapper">
                        <img src={trending} className="nav_icon" />
                        <div className="HorIcn_txt">Disover</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HorizontalNav;