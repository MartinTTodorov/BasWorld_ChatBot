import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Signup=()=> {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [data, setData] = useState({
        name:"",
        lastName:"",
        companyName:"",
        email:"",
        password:""
    });
    

    const handleSubmit = (e) => {

        e.preventDefault();
       
     axios.post("http://localhost:8080/user/save",data).then(res=> console.log(res.data)) 

    };



    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>
                    {/*<input type="text" value={data.name}  onChange={(e) => (data=>data.name).setData(e.target.value)} required />*/}
                    <input type="text" value={data.name}  onChange={(e)=>setData(prevState => ({...prevState,name: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Last Name </label>
                    <input type="text" value={data.lastName}  onChange={(e)=>setData(prevState => ({...prevState,lastName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Company Name </label>
                    <input type="text" value={data.companyName}  onChange={(e)=>setData(prevState => ({...prevState,companyName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" value={data.email}  onChange={(e)=>setData(prevState => ({...prevState,email: e.target.value}))} required />
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
            <div className="login-form">
                <div className="title">Sign Up</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Signup;