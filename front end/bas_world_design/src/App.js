import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
  } from "react-router-dom";
import Login from "./pages/login";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signup"
import layout from "./pages/layout";



function App() {
    const [user, setUser] = useState("Guest");
    
    return (
        
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/" element={<MainPage user={user}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
}

export default App;