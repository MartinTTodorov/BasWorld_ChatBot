import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Signup=()=> {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:"",
        lastName:"",
        CompanyName:"",
        email:"",
        password:""
    });
    const navigateToRegisterPage = () => {
        navigate('/login');
    }
    

    const handleSubmit = (e) => {

        e.preventDefault();
       
     axios.post("http://localhost:9091/user/save",data).then(res=> console.log(res.data)) 

    };
    

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" value={data.name}  onChange={(e)=>setData(prevState => ({...prevState,name: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Last Name </label>
                    <input type="text" value={data.lastName}  onChange={(e)=>setData(prevState => ({...prevState,lastName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Company Name </label>
                    <input type="text" value={data.CompanyName}  onChange={(e)=>setData(prevState => ({...prevState,CompanyName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="email" value={data.email}  onChange={(e)=>setData(prevState => ({...prevState,email: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={data.password}  onChange={(e)=>setData(prevState => ({...prevState,password: e.target.value}))} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
        <div ><NavLink to="/" aria-current="page" >HomePage</NavLink></div>
            <div className="login-form">
                <div className="title">Sign Up</div>
                { renderForm}
                <h4>Do you want to sign in? </h4>
            <p onClick={navigateToRegisterPage} className="navigateLink">Click here!</p>
            </div>            
        </div>
    );
}

export default Signup;