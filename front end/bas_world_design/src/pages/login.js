import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import login from "../login";



const Login=()=> {
    const navigate = useNavigate();

    const [email, setEmail]=useState('');

    const [password, setPassword]=useState('');

const navigateToRegisterPage = () => {
    navigate('/signup');
}
    

    const handleSubmit = async(e)=>{
        e.preventDefault();

        login({email,password})
      }
    
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>                    
                    <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <h4>Don't you have an account yet? </h4>
            <p onClick={navigateToRegisterPage} className="navigateLink">Click here!</p>
            {/* <button className="formBtn"
                onClick={navigateToRegisterPage}
                >Don't have an account? click here
                </button> */}
        </div>
    );

    return (
        <div className="app">
            <div ><NavLink to="/" aria-current="page" >HomePage</NavLink></div>
            <div className="login-form">
                <div className="title">Sign In</div>
                {renderForm}
            </div>
        </div>
    );
}

export default Login;