import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
  } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from "./pages/login";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signup";
import Chatbot from "./pages/chatbot";
import './App.css'


function App (){
    return(
<BrowserRouter>
      <div className="App">
        <NavBar />
                <Routes>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/chatbot" element={<Chatbot/>}/>
                </Routes>              
      </div>  
      </BrowserRouter>        
          );
}
export default App;