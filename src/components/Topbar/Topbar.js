import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import topbarImg from '../../assets/7.jpg';

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h1 className="logo">PO</h1>
            </div>
            <div className="topbarRight">
                <NotificationsNoneIcon className="topbarIcon" />
                <SettingsIcon className="topbarIcon"/>
                <img src={topbarImg} alt="topbarImg" className="topbarImg"/>
            </div>
        </div>
    )
}

export default Topbar
