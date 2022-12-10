import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Greeter from "../Greeter";
import { NavLink } from "react-router-dom";
//import logo from './logo.svg';




const MainPage=()=>{
     const navigate = useNavigate();

    const handleSubmit = () => {
        sessionStorage.clear();
        navigate(0);
    };

    const navbar =(
        <div className="navbar">
                {
                    sessionStorage.getItem('accessToken')? 
                    <div>
                    <div className="LogIn"><NavLink onClick={handleSubmit} to="/" aria-current="page" >Logout</NavLink></div>
                    <div className="LogIn"><NavLink to="/admin" aria-current="page">Administration</NavLink></div> 
                    </div> 
                    : 
                    <div>
                    <div className="LogIn"><NavLink to="/signup" aria-current="page">Signup</NavLink></div> 
                    <div className="LogIn"><NavLink to="/login" aria-current="page">Login</NavLink></div>
                    </div>

                }                       
        </div>

    );


    return(

        <div className="App">
            <header className="App-header">
                <input className="SearchBar" type="text"></input>
                {navbar}
                
                <div className="header">
                    <div className="categories">Vehicle categories</div>
                    <div className="contact">Contact</div>
                    <div className="sell">Sell your vehicle</div>
                    <div className="buy_info">How to buy</div>
                </div>
                <div className="vehicle">
                    <p className="green">Buy your vehicle online.</p>
                    <p className="white"> Easy and safe</p>
                    <div className="filter">
                        <div className="type">Select vehicle type</div>
                        <div className="filters">Brand</div>
                        <div className="filters">Model</div>
                        <div className="filters">Year From To</div>
                        <div className="filters">$ From To</div>
                        <button className="results">Show results</button>
                    </div>
                </div>
            </header>
            <Greeter/>


        </div>
    );    
}

export default MainPage;