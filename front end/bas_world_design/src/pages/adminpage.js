import axios from "axios";
import React, {useEffect, useState } from "react";
import ChatComponent from "../Components/ChatComponent";



function adminpage() {

    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    }




    return (
        <div className="wrapper">
            <header>
                <p className="textPrimary">Messages from customers</p>
            </header>
            <ChatComponent/>
            <aside>
                <ul>
                    <li>
                        <h1 className="textDecore">Rad@abv.bg</h1>
                        <p className="textDecore" id="message">Support request</p>
                        <button className="formBtn" onClick={toggleChat}>Reply</button>
                        
                    </li>

                    
                </ul>
            </aside>
        </div>
    )
}
export default adminpage;