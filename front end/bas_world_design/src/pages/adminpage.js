import axios from "axios";
import React, {useEffect, useState } from "react";
import './App.css';



function adminpage() {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');


    const fetchMessages = () => {
        axios.get('http://localhost:8080/messages')
        .then(response => {
            setMessages(response.data.messages);
        })
        .catch(() => {
            if (!messages)
            return null;
        })
    }

    function displayChat() {
        setMessage(document.getElementById("message").style.display = "block")
    }
   

    useEffect(() => {
        fetchMessages()
    }, [])



    return (
        <div className="wrapper">
            <header>
                <p className="textPrimary">Messages from customers</p>
            </header>
            <article>
                <div className="container">
                    <h1>(Name of the customer)</h1>
                    <p>{message}</p>
                    <input type="text" placeholder="Reply to the message here"></input>
                    <input type="submit" value="Submit" />
                </div>
            </article>
            <aside>
                <ul>
                    <li>
                        <h1 className="textDecore">(Name of the customer)</h1>
                        <p className="textDecore" id="message">Hello I need help with my order</p>
                        <button className="formBtn" onClick={displayChat}>Reply</button>
                    </li>

                    <li>
                        <h1 className="textDecore">(Name of the customer)</h1>
                        <p className="textDecore" id="message">I have a problem with the insurance</p>
                        <button className="formBtn" onClick={displayChat}>Reply</button>
                    </li>
                    <li>
                        <h1 className="textDecore">(Name of the customer)</h1>
                        <p className="textDecore" id="message">I haven't got my refund back</p>
                        <button className="formBtn" onClick={displayChat}>Reply</button>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
export default adminpage;