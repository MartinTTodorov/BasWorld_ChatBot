import axios from "axios";
import React, {useEffect, useState } from "react";
import './App.css';




function adminpage() {

    const [messages, setMessages] = useState([]);

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


    useEffect(() => {
        fetchMessages()
    }, [])



    return (
        <div>
            <p className="textPrimary">Messages from customers</p>
            <div className="gridContainer">
                <div>
                    <h1 className="textDecore">(Name of the customer)</h1>
                    <p className="textDecore">Hello I need help with my order</p>
                    <button type="button" className="formBtn">Reply</button>
                </div>
                <div>
                    <h1 className="textDecore">(Name of the customer)</h1>
                    <p className="textDecore">I have a problem with the insurance</p>
                    <button type="button" className="formBtn">Reply</button>
                </div>
                <div>
                    <h1 className="textDecore">(Name of the customer)</h1>
                    <p className="textDecore">I haven't got my refund back</p>
                    <button type="button" className="formBtn">Reply</button>
                </div>
            </div>
        </div>
    )
}
export default adminpage;