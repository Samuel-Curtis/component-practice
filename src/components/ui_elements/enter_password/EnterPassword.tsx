import { useState } from 'react';
import './EnterPassword.css'
import avatar from './assets/Ellipse 1.png'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function EnterPassword() {

    let [showEyeOpen, setShowEyeOpen] = useState(false);
    let [passwordFieldType, setPasswordFieldType] = useState("password")

    function handleShowEyeClicked() {
        
        setShowEyeOpen(!showEyeOpen);

        if (showEyeOpen) {
            setPasswordFieldType("password");
        } else {
            setPasswordFieldType("text");
        }

    }
    return(
        <div className="enter-password-wrapper">
            <h2 className="title">
                Enter your password
            </h2>

            <div className="profile-card">
                <img src={avatar} alt="avatar" />
                <span className="text">
                    <p className="account-type">Business Account</p>
                    <p className="client-name">Sarah Bills</p>
                </span>
            </div>

            <div className="form-wrapper">
                <form action="">

                    <label className='password-label' htmlFor="password">Password</label>

                    <span className="password-wrapper">
                        <span className="password-field-wrapper">
                            <span className="lock-icon"><MdLockOutline /></span>
                            <input type={passwordFieldType} name="password" id="password" />
                        </span>
                        <span className='show-password-icon' onClick={() => handleShowEyeClicked()}>
                            {showEyeOpen ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                    </span>
                
                    <div className="toggle-continue-wrapper">
                        <span className='stay-signed-in-wrapper'>
                            <label className="switch">
                                <input type="checkbox" name="toggle-stay-signed-in" id="toggle-stay-signed-in" />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="toggle-stay-signed-in" className='stay-signed-in'>Stay signed in</label>

                        </span>

                        <button className='submit-button' type="submit">Continue</button>
                    </div>

                </form>
            </div>

            <a href='' className="password-reset">Reset password</a>
        </div>
    )
}

export default EnterPassword;