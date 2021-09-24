import React,{useState,useEffect} from 'react';
import './User.css';
import foto from '../../assets/1.jpg';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import {rows} from '../../data';
import foto1 from '../../assets/1.jpg'

function User() {

    const [user, setUser] = useState({
         id: '',
        username: '',
        avatar:foto1,
        email: '',
         status: '',
        transactions: '',
        job: '',
        location: '',
        phone: '',
        nickname: '',
        date: ''
    },
    );

    useEffect(() => {
        setUser(rows.find((user) => parseInt(user.id) === parseInt((window.location.pathname).toString()[window.location.pathname.length - 1])))
    },[user])

    const {username, job, avatar, nickname, date, phone, email, location} = user;

    return (
        <div className="userContainer">
            <div className="upperUser">
                <h1 className="editTitle">Edit User</h1>
                <button className="createButton">Create</button>
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
                    <h2>edit section</h2>
                </div>
            </div>
        </div>
    )
}

export default User
