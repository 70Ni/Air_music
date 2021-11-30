import React from "react";
import toggleIcon from "../../Images/Icons/toggle.svg";
import "./settings.css";
import User from "../../Images/Icons/User.svg";

function Settings() {
  return (
    <div className="Settings_Wrapper">
      <div className="Settings_container">
        <div className="settings_usr_sction">
          <div className="stg_usr_cntn">
            <div className="user_wish_header">
              Good Morning, <span className="username">Tony</span>{" "}
            </div>
            <div className="user_Details_wrpr">
              <div className="user_icon_wrapper">
                <img src={User} alt="" />
              </div>
              <div className="user_setting_name user_wish_header">
                {" "}
                Username
              </div>
            </div>
            <div className="user_change_button_wrpr">
              <div className="AutoPlayButton_B"> Edit</div>
            </div>
          </div>
        </div>
        <div className="setting_app_section">
          <div className="stg_app_cntn">
            <div className="setting_header">Settings</div>
            <div className="stg_option_wrp">
              <div className="setting_option">Focus mode</div>
              <img src={toggleIcon} alt="toggle" className="toggleButton" />
            </div>
            <div className="stg_option_wrp">
              <div className="setting_option">Hide music controllor</div>
              <img src={toggleIcon} alt="toggle" className="toggleButton" />
            </div>
            <div className="stg_option_wrp">
              <div className="setting_option">sync Loading</div>
              <img src={toggleIcon} alt="toggle" className="toggleButton" />
            </div>
            <div className="stg_option_wrp">
              <div className="setting_option">Enable push notifications</div>
              <img src={toggleIcon} alt="toggle" className="toggleButton" />
            </div>
            <div className="stg_option_wrp">
              <div className="setting_option">Enable fullscreen view</div>
              <img src={toggleIcon} alt="toggle" className="toggleButton" />
            </div>
          </div>
        </div>
        <div className="setting_advanced_section">
          <div className="settings_adv_sction">
            <div className="adv_header">Advanced</div>
            <button className="Open_mobile">open on mobile</button>
            <div className="AutoPlayButton">Logout</div>
            <div className="download_wrapper">
              <button className="Open_mobile download">Download App</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
