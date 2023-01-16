import axios from "axios";
import React, {useEffect, useState } from "react";
import ChatComponent from "../Components/ChatComponent";



function adminpage() {

    // const [messages, setMessages] = useState([]);
    // const [message, setMessage] = useState('');


    // const fetchMessages = () => {
    //     axios.get('http://localhost:8080/messages')
    //     .then(response => {
    //         setMessages(response.data.messages);
    //     })
    //     .catch(() => {
    //         if (!messages)
    //         return null;
    //     })
    // }

    // function displayChat() {
    //     setMessage(document.getElementById("message").style.display = "block")
    // }
   

    // useEffect(() => {
    //     fetchMessages()
    // }, [])



    return (
        <div className="wrapper">
            <header>
                <p className="textPrimary">Messages from customers</p>
            </header>
            <ChatComponent/>
            <aside>
                <ul>
                    <li>
                        <h1 className="textDecore">(Name of the customer)</h1>
                        <p className="textDecore" id="message">Hello I need help with my order</p>
                        <button className="formBtn" >Reply</button>
                    </li>

                    
                </ul>
            </aside>
        </div>
    )
}
export default adminpage;