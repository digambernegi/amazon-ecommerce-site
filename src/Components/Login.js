import React from 'react'
import "./Login.css"
import applogo from "../asset/applogo.svg"
import {auth,provider} from "../firebase"
import { useStateValue } from '../StateProvider'

const Login = () => {
    //useRef
    const[{user},dispatch]=useStateValue();
    
    const SignIn=(e)=>{
        e.preventDefault();
        auth
        .signInWithPopup(provider)
        .then((result) =>
          dispatch({
            type: 'SET_USER',
            user: result.user,
          })
        )
        .catch((error) => alert(error.messsage));
    }; 
console.log(SignIn);

    return (
        <div className="Login">
        <img src={applogo} alt="logo" />
        <div className="wrapper">
        <h3>Sign-In</h3>
        <span>Email or mobile phone number</span>

        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>

        <button onClick={SignIn} type="submit" className="signIn">Continue with Google</button>
        <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
        <small className="newuser">New to Amazon?</small>
        <button className="signUp">Create your Amazon account</button>
        
        </div>
        
        </div>
    )
}

export default Login
