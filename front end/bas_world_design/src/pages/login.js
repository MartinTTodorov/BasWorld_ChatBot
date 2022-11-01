import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Login=()=> {

    const [result, setResult] = useState(false);

    const [data, setData] = useState({
        name:"",
        password:""
    });

    

    const handleSubmit = async(e) => {

        e.preventDefault();
       
     await axios.post("http://localhost:8080/user/login",data).then(result =>console.log(result));
    };



    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>                    
                    <input type="text" value={data.name}  onChange={(e)=>setData(prevState => ({...prevState,name: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={data.lastName}  onChange={(e)=>setData(prevState => ({...prevState,password: e.target.value}))} required />
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
                <div className="title">Sign In</div>
                {result ? <div>Welcome</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;