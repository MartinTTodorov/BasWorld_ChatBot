import React,{ useState } from "react";
//import { useNavigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Greeter from "../Greeter";
import { NavLink } from "react-router-dom";
import login from "./login";




const MainPage=()=>{
    // const [count, setCount] = useState(1);
    // const navigate = useNavigate();

    const handleSubmit = (e) => {

        // console.log("asdasd");
        sessionStorage.clear(); 
        // setCount(count+1);       
        

    };


    return(

        <div className="App">
            <header className="App-header">
                <input className="SearchBar" type="text"></input>
                <div className="LogIn"><NavLink to="/login" aria-current="page">Login</NavLink></div>
                <div className="LogIn"><NavLink onClick={handleSubmit} to="/login" aria-current="page" >Logout</NavLink></div>
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