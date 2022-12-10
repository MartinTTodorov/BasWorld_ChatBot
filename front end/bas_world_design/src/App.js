import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Login from "./pages/login";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signup"
import Admin from "./pages/adminpage"
//import layout from "./pages/layout";


function App() {
    
    return (
        
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
}

export default App;