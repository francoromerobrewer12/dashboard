import React, { useState } from 'react';
import './NewUser.css';
import { create_user } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import noavatar from '../../assets/noavatar.jpeg';

function NewUser() {

    const users = useSelector(state => state);

    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        id: users.length + 1,
        username: '',
        nickname: '',
        email: '',
        phone: '',
        location: '',
        job: '',
        date: '',
        status: '',
        transactions: {
            value: '0',
            status: 'Approved'
        },
        category: "new",
        avatar: noavatar
    })

    return (
        <div className="newUserContainer">
            <h1 className="newUserTitle">Create a New User</h1>
            <div className="newUserFormContainer">
                <form className="newUserForm">
                    <div className="formLeft">
                        <div className="newUserInputGroup">
                            <label htmlFor="username" className="newUserLabel">Username</label>
                            <input type="text" id="username" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                username: e.target.value
                            })}/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="email" className="newUserLabel">Email</label>
                            <input type="text" id="email" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                email: e.target.value
                            })}/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="phone" className="newUserLabel">Phone</label>
                            <input type="tel" id="phone" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                phone: e.target.value
                            })}/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="address" className="newUserLabel">Address</label>
                            <input type="text" id="address" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                location: e.target.value
                            })}/>
                        </div>
                    </div>
                    <div className="formRight">
                        <div className="newUserInputGroup">
                            <label htmlFor="nickname" className="newUserLabel">Nickname</label>
                            <input type="text" id="nickname" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                nickname: e.target.value
                            })}/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="job" className="newUserLabel">Job</label>
                            <input type="text" id="job" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                job: e.target.value
                            })}/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="date" className="newUserLabel">Date</label>
                            <input type="date" id="date" className="newUserInput" onChange={(e) => setInfo({
                                ...info,
                                date: (e.target.value).replaceAll("-","/")
                            })}/>
                        </div>
                        <p className="statusTitle">Status</p>
                        <div className="newUserInputRadioGroup">
                            <input type="radio" id="active" name="status_active" className="radioInput" value="Active" onChange={(e) => setInfo({
                                ...info,
                                status: e.target.value
                            })}/>
                            <label className="radioLabel" for="active" >Active</label>
                            <input type="radio" id="passive" name="status_active" className="radioInput" value="Passive" onChange={(e) => setInfo({
                                ...info,
                                status: e.target.value
                            })}/>
                            <label className="radioLabel" for="passive">Passive</label>
                        </div>
                    </div>
                </form>
                <button className="newUserSubmitButton" onClick={() => dispatch(create_user(info))}>Create User</button>
            </div>
        </div>
    )
}

export default NewUser
