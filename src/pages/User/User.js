import React,{useState,useEffect} from 'react';
import './User.css';
import foto from '../../assets/1.jpg';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import {rows} from '../../data';
import foto1 from '../../assets/1.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { edit_user, create_user } from '../../actions';


function User() {
    
    const user = useSelector(state => state).find((user) => parseInt(user.id) === parseInt((window.location.pathname).toString()[window.location.pathname.length - 1]));
    const dispatch = useDispatch();
    const {id, username, job, avatar, nickname, date, phone, email, location} = user;
    
    const [info, setInfo] = useState({
        username,
        nickname,
        job,
        email,
        location,
        phone
    })

    return (
        <div className="userContainer">
            <div className="upperUser">
                <h1 className="editTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="createButton">Create</button>
                </Link>
            </div>

            <div className="editSectionsContainer">
                <div className="personalInfoContainer">
                    <div className="personalInfoHeader">
                        <img src={avatar} alt="" className="personalInfoImg"/>
                        <div className="personalInfoHeaderText">
                            <p className="personalInfoName">{username}</p>
                            <p className="personalInfoJob">{job}</p>
                        </div>
                    </div>
                    <div className="personalInfoBody">
                        <h3 className="personalInfoBodyTitle">Account Details</h3>
                        <div className="userBlockInfo">
                            <PersonIcon className="userIcon"/>
                            <p className="userData">{nickname}</p>
                        </div>
                        <div className="userBlockInfo">
                            <TodayIcon className="userIcon"/>
                            <p className="userData">{date}</p>
                        </div>
                        <h3 className="personalInfoBodyTitle">Contact</h3>
                        <div className="userBlockInfo">
                            <PhoneIcon className="userIcon"/>
                            <p className="userData">{phone}</p>
                        </div>
                        <div className="userBlockInfo">
                            <MailIcon className="userIcon"/>
                            <p className="userData">{email}</p>
                        </div>
                        <div className="userBlockInfo">
                            <RoomIcon className="userIcon"/>
                            <p className="userData">{location}</p>
                        </div>
                    </div>
                </div>

                <div className="editContainer">
                    <h2 className="editSectionTitle">Edit</h2>
                    <label htmlFor="username" className="editLabels">Username</label>
                    <input type="text" placeHolder={username} className="editInput" onChange={(e) => setInfo({
                        ...info,
                        username: e.target.value
                    })}/>
                    <label htmlFor="username" className="editLabels">Nickname</label>
                    <input type="text" placeHolder={nickname} className="editInput" onChange={(e) => setInfo({
                        ...info,
                        nickname: e.target.value
                    })}/>

                    <label htmlFor="email" className="editLabels" >Email</label>
                    <input type="text" placeHolder={email}className="editInput" onChange={(e) => setInfo({
                        ...info,
                        email: e.target.value
                    })}/>

                    <label htmlFor="phone" className="editLabels">Phone</label>
                    <input type="text" placeHolder={phone} className="editInput" onChange={(e) => setInfo({
                        ...info,
                        phone: e.target.value
                    })}/>

                    <label htmlFor="Address" className="editLabels">Address</label>
                    <input type="text" placeHolder={location} className="editInput" onChange={(e) => setInfo({
                        ...info,
                        location: e.target.value
                    })}/>

                    <button className="submitEditButton" onClick={() => dispatch(edit_user(id, info))}>Sumbit</button>
                </div>
            </div>
            
        </div>
    )
}

export default User
