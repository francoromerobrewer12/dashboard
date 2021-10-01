import React from 'react';
import './WidgetSm.css';

import foto1 from '../../assets/1.jpg'
import foto2 from '../../assets/2.jpg'
import foto3 from '../../assets/3.jpg'
import foto4 from '../../assets/4.jpg'
import foto5 from '../../assets/5.jpg'
import memberImg from '../../assets/7.jpg';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector } from 'react-redux';
import {rows} from '../../data'; 

function WidgetSm() {

    const selectedUsers = useSelector(state => state).filter(users => users.category === "new")
    console.log(selectedUsers);
    return (
        <div className="widgetSmContainer">
            <h2 className="widgetSmTitle">New Members</h2>
            {
                selectedUsers.map( ({ id,username,job,avatar }) => {
                    return(
                        <div key={id} className="newMemberWrap">
                            <div className="newMemberLeft">
                                <img src={avatar} alt="memberImg" className="newMemberImg"/>
                                <div className="newMemberInfo">
                                    <p className="newMemberName">{username}</p>
                                    <p className="newMemberJob">{job}</p>
                                </div>
                            </div>
                            <div className="newMemberButton">
                                <RemoveRedEyeIcon className="newMemberButtonIcon"/>
                                <p className="newMemberButtonText">See more</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WidgetSm 
