import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
<<<<<<< HEAD
    Route,
    BrowserRouter
  } from "react-router-dom";
=======
    Route, BrowserRouter
} from "react-router-dom";
>>>>>>> b584a4f0df5a4e946aa4553c055422b8d61be078
import Login from "./pages/login";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signup"
import layout from "./pages/layout";


<<<<<<< HEAD
function App (){
    return(
      <BrowserRouter>
      <div>
                <Routes>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<MainPage/>}/>
                </Routes>              
      </div>    
      </BrowserRouter>      
          );
=======
function App() {
    const [user, setUser] = useState("Guest");
    
    return (
        
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login setUser={setUser}/>}/>
                    <Route path="/" element={<MainPage user={user}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
>>>>>>> b584a4f0df5a4e946aa4553c055422b8d61be078
}

export default App;