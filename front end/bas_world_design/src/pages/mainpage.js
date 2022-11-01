import React from "react";
import logo from './logo.svg';
import './App.css';
import Greeter from "../Greeter";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import login from "./login";
>>>>>>> b584a4f0df5a4e946aa4553c055422b8d61be078




const MainPage=({user})=>{



    return(

        <div className="App">
            <header className="App-header">
                <input className="SearchBar" type="text"></input>
<<<<<<< HEAD
                <div className="LogIn"><NavLink to="/login" aria-current="page">Login</NavLink></div>
=======


>>>>>>> b584a4f0df5a4e946aa4553c055422b8d61be078
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
            <Greeter user = {user}/>


        </div>
    );    
}

export default MainPage;