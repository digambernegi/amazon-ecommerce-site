import React from 'react'
import "./Login.css"
import applogo from "./asset/applogo.svg"


const Login = () => {
    return (
        <div className="checkout">
        <img src={applogo} alt="logo" />
        <div className="wrapper">
        <h3>Sign-In</h3>
        <span>Email or mobile phone number</span>
        <input type="text" placeholder="username"/>
        <button className="signIn">Sign In</button>
        <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
        </div>
        </div>
    )
}

export default Login
