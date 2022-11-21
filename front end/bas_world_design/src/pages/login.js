import React, { useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import login from "../login";



const Login=()=> {

    const [result, setResult] = useState(false);

    // const [data, setData] = useState({
    //     email:"",
    //     password:""
    // });
    const [email, setEmail]=useState('');

    const [password, setPassword]=useState('');
    
    

    const navigate = useNavigate();

const navigateToRegisterPage = () => {
    navigate('/signup');
}
    

//     const handleSubmit = async(e) => {

//         e.preventDefault();
        
       
//     //  await axios.post("http://localhost:9091/login",data)  
//     // .then(result=> result.data.result ? setUser(data.name): null)
//    // console.log(data);
     
//     };
    const handleSubmit = async(e)=>{
        e.preventDefault();

        let res = login({email,password})
        // console.log(email);
        // console.log(password);

      }
    

    

   



    // JSX code for login form
    const renderForm = (
        <div className="form">
            <li className="nav-item">          
          <Link className="nav-link" to="/">HomePAGE</Link>
        </li>
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
            <button className="formBtn"
                onClick={navigateToRegisterPage}
                >Don't have an account? click here
                </button>
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