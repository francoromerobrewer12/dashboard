import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import topbarImg from '../../assets/7.jpg';
import { Link } from "react-router-dom";


function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" className="logo">
                    <h1 >PO</h1>
                </Link>
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
