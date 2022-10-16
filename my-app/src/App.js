import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Login from "./pages/login";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signup"


function App (){
    return(

      <div>
          <Router>             
                <Routes>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<MainPage/>}/>
                </Routes>              
            </Router>
      </div>          
          );
}
export default App;