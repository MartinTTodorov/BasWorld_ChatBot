import React, {useState} from "react";
import axios from "axios";
import {useEffect} from ".";

const Greeter = () => {
    const [message, setMessage] = useState("");


    // const saveMessage = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/converastion", message).then()
    // }

    const greet = () => {
        setMessage("Hello, how can I help you today?")
    }

    const addMessageToState = (messages) => {
    };

    return (
        <div className="chatbot">
            <button className="start" onClick={greet}>Start converastion</button>
            <div className="convo">{message}</div>
            <input placeholder="Type your question here" className="input" type="text"/>
            <button className="send" onClick={addMessageToState(message)}>Send</button>
        </div>
    );


}

export default Greeter;