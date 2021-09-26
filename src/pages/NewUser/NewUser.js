import React from 'react';
import './NewUser.css';

function NewUser() {
    return (
        <div className="newUserContainer">
            <h1 className="newUserTitle">Create a New User</h1>
            <div className="newUserFormContainer">
                <form className="newUserForm">
                    <div className="formLeft">
                        <div className="newUserInputGroup">
                            <label htmlFor="username" className="newUserLabel">Username</label>
                            <input type="text" id="username" className="newUserInput"/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="email" className="newUserLabel">Email</label>
                            <input type="text" id="email" className="newUserInput"/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="phone" className="newUserLabel">Phone</label>
                            <input type="tel" id="phone" className="newUserInput"/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="address" className="newUserLabel">Address</label>
                            <input type="text" id="address" className="newUserInput"/>
                        </div>
                    </div>
                    <div className="formRight">
                        <div className="newUserInputGroup">
                            <label htmlFor="job" className="newUserLabel">Job</label>
                            <input type="text" id="job" className="newUserInput"/>
                        </div>
                        <div className="newUserInputGroup">
                            <label htmlFor="date" className="newUserLabel">Date</label>
                            <input type="date" id="date" className="newUserInput"/>
                        </div>
                        <p className="statusTitle">Status</p>
                        <div className="newUserInputRadioGroup">
                            <input type="radio" id="active" name="status_active" className="radioInput" value="Active"/>
                            <label className="radioLabel" for="active">Active</label>
                            <input type="radio" id="passive" name="status_active" className="radioInput" value="Passive"/>
                            <label className="radioLabel" for="passive">Passive</label>
                        </div>
                    </div>
                </form>
                <button className="newUserSubmitButton">Create User</button>
            </div>
        </div>
    )
}

export default NewUser
